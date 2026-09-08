"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PracticeProgressRow, PracticeStatus } from "@/lib/types";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export function usePracticeProgress(problemIds: string[]) {
  const { user } = useAuth();
  const [rows, setRows] = useState<Record<string, PracticeProgressRow>>({});
  const [loading, setLoading] = useState(true);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const idsKey = problemIds.join("\0");

  const refresh = useCallback(async () => {
    if (!user || !isSupabaseConfigured() || !idsKey) {
      setLoading(false);
      return;
    }

    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }

    const ids = idsKey.split("\0");
    const { data } = await sb
      .from("practice_progress")
      .select("*")
      .eq("user_id", user.id)
      .in("problem_id", ids);

    const map: Record<string, PracticeProgressRow> = {};
    if (data) {
      for (const row of data) {
        map[row.problem_id] = row as PracticeProgressRow;
      }
    }
    setRows(map);
    setLoading(false);
  }, [user, idsKey]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const saveDraft = useCallback(
    async (
      problemId: string,
      code: string,
      status?: PracticeStatus
    ): Promise<{ error: string | null }> => {
      if (!user || !isSupabaseConfigured()) return { error: null };

      const sb = getSupabase();
      if (!sb) return { error: "Auth is not configured." };

      const existing = rowsRef.current[problemId];
      const nextStatus =
        status ??
        existing?.status ??
        (code.trim() ? "attempted" : "not_started");
      const snapshot: PracticeProgressRow = {
        user_id: user.id,
        problem_id: problemId,
        code_draft: code,
        status: nextStatus,
        public_passed: existing?.public_passed ?? false,
        hidden_passed: existing?.hidden_passed ?? false,
        submitted_at: existing?.submitted_at ?? null,
        updated_at: new Date().toISOString(),
      };

      setRows((prev) => ({ ...prev, [problemId]: snapshot }));

      const { error } = await sb.from("practice_progress").upsert(snapshot, {
        onConflict: "user_id,problem_id",
      });

      if (error) {
        setRows((prev) => {
          const next = { ...prev };
          if (existing) next[problemId] = existing;
          else delete next[problemId];
          return next;
        });
        return { error: error.message };
      }

      return { error: null };
    },
    [user]
  );

  const markSolved = useCallback(
    async (
      problemId: string,
      code: string
    ): Promise<{ error: string | null }> => {
      if (!user) {
        return { error: "Sign in to save your solved status." };
      }
      if (!isSupabaseConfigured()) {
        return { error: "Auth is not configured." };
      }

      const sb = getSupabase();
      if (!sb) return { error: "Auth is not configured." };

      const previous = rowsRef.current[problemId];
      const row: PracticeProgressRow = {
        user_id: user.id,
        problem_id: problemId,
        code_draft: code,
        status: "solved",
        public_passed: true,
        hidden_passed: false,
        submitted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      setRows((prev) => ({ ...prev, [problemId]: row }));

      const { error } = await sb.from("practice_progress").upsert(row, {
        onConflict: "user_id,problem_id",
      });

      if (error) {
        setRows((prev) => {
          const next = { ...prev };
          if (previous) next[problemId] = previous;
          else delete next[problemId];
          return next;
        });
        return { error: error.message };
      }

      return { error: null };
    },
    [user]
  );

  return { rows, loading, refresh, saveDraft, markSolved };
}
