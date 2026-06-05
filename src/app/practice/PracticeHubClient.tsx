"use client";

import Link from "next/link";
import type { Module } from "@/lib/types";
import { Terminal, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface ModuleStat {
  module: Module;
  stats: { total: number; topics: { topicId: string; count: number }[] };
}

interface PracticeHubClientProps {
  moduleStats: ModuleStat[];
}

export function PracticeHubClient({ moduleStats }: PracticeHubClientProps) {
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
      {user && (
        <p className="mt-4 text-sm font-medium text-brand-700">
          You have solved {solvedCount} practice problem{solvedCount === 1 ? "" : "s"}.
        </p>
      )}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moduleStats.map(({ module, stats }) => (
          <Link
            key={module.id}
            href={`/practice/${module.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:border-brand-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="text-2xl">{module.icon}</span>
              <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-brand-600" />
            </div>
            <h2 className="mt-3 font-semibold text-gray-900">{module.name}</h2>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
              <Terminal className="h-4 w-4" />
              {stats.total} problems
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
