"use client";

import { useCallback, useEffect, useState } from "react";
import type { PracticeProgressRow, PracticeStatus } from "@/lib/types";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export function usePracticeProgress(problemIds: string[]) {
  const { user } = useAuth();
  const [rows, setRows] = useState<Record<string, PracticeProgressRow>>({});
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user || !isSupabaseConfigured() || problemIds.length === 0) {
      setRows({});
      setLoading(false);
      return;
    }

    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }

    const { data } = await sb
      .from("practice_progress")
      .select("*")
      .eq("user_id", user.id)
      .in("problem_id", problemIds);

    const map: Record<string, PracticeProgressRow> = {};
    if (data) {
      for (const row of data) {
        map[row.problem_id] = row as PracticeProgressRow;
      }
    }
    setRows(map);
    setLoading(false);
  }, [user, problemIds]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const saveDraft = useCallback(
    async (problemId: string, code: string, status?: PracticeStatus) => {
      if (!user || !isSupabaseConfigured()) return;

      const sb = getSupabase();
      if (!sb) return;

      const existing = rows[problemId];
      const nextStatus =
        status ??
        existing?.status ??
        (code.trim() ? "attempted" : "not_started");

      await sb.from("practice_progress").upsert(
        {
          user_id: user.id,
          problem_id: problemId,
          code_draft: code,
          status: nextStatus,
          public_passed: existing?.public_passed ?? false,
          hidden_passed: existing?.hidden_passed ?? false,
          submitted_at: existing?.submitted_at ?? null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,problem_id" }
      );

      setRows((prev) => ({
        ...prev,
        [problemId]: {
          user_id: user.id,
          problem_id: problemId,
          code_draft: code,
          status: nextStatus,
          public_passed: existing?.public_passed ?? false,
          hidden_passed: existing?.hidden_passed ?? false,
          submitted_at: existing?.submitted_at ?? null,
          updated_at: new Date().toISOString(),
        },
      }));
    },
    [user, rows]
  );

  const markSolved = useCallback(
    async (problemId: string, code: string) => {
      if (!user || !isSupabaseConfigured()) return;

      const sb = getSupabase();
      if (!sb) return;

      await sb.from("practice_progress").upsert(
        {
          user_id: user.id,
          problem_id: problemId,
          code_draft: code,
          status: "solved",
          public_passed: true,
          hidden_passed: true,
          submitted_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,problem_id" }
      );

      setRows((prev) => ({
        ...prev,
        [problemId]: {
          user_id: user.id,
          problem_id: problemId,
          code_draft: code,
          status: "solved",
          public_passed: true,
          hidden_passed: true,
          submitted_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      }));
    },
    [user]
  );

  return { rows, loading, refresh, saveDraft, markSolved };
}
