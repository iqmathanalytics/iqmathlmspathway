"use client";

import Link from "next/link";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface PracticeHubClientProps {
  totalCount: number;
  stats: { easy: number; medium: number; hard: number };
  languageCount: number;
  algorithmCount: number;
}

export function PracticeHubClient({
  totalCount,
  stats,
  languageCount,
  algorithmCount,
}: PracticeHubClientProps) {
  const { user } = useAuth();
  const [solvedCount, setSolvedCount] = useState(0);

  useEffect(() => {
    if (!user || !isSupabaseConfigured()) return;
    const sb = getSupabase();
    if (!sb) return;
    sb.from("practice_progress")
      .select("problem_id")
      .eq("user_id", user.id)
      .eq("status", "solved")
      .then(({ data }) => setSolvedCount(data?.length ?? 0));
  }, [user]);

  return (
    <>
      {user && solvedCount > 0 && (
        <p className="mt-4 text-sm font-medium text-brand-700">
          You have solved {solvedCount} practice problem
          {solvedCount === 1 ? "" : "s"}.
        </p>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/practice/python"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md sm:col-span-2 lg:col-span-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Code2 className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Python Programming Practice
              </h2>
              <p className="text-sm text-gray-500">
                {totalCount} problems · {languageCount} language ·{" "}
                {algorithmCount} algorithms
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            One practice set for Python: language drills (scripts and functions)
            plus algorithm challenges. Filter by type, topic, and difficulty —
            then solve in the in-browser editor.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-700">
              Easy {stats.easy}
            </span>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-amber-700">
              Medium {stats.medium}
            </span>
            <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-red-700">
              Hard {stats.hard}
            </span>
          </div>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:underline">
            Start practicing
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      {totalCount === 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
          <Terminal className="mx-auto h-10 w-10 text-gray-300" />
          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            No practice problems yet
          </h2>
        </div>
      )}
    </>
  );
}
