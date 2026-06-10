"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { modules, getPublishedTopicCount } from "@/data/curriculum";
import { getTotalPracticeCount } from "@/data/practice/meta";
import { PAGE_CONTAINER } from "@/lib/layout";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { getSupabase } from "@/lib/supabase/client";
import { useEntitlements } from "@/hooks/useEntitlements";
import { BookOpen, Terminal, CheckCircle2, Lock, Loader2 } from "lucide-react";
import { DashboardRoadmap } from "@/components/dashboard/DashboardRoadmap";

export default function DashboardPage() {
  const { user, profile } = useAuth();
  const { progress, ready } = useProgress();
  const { hasPremium } = useEntitlements();
  const [practiceSolved, setPracticeSolved] = useState(0);

  const totalTopics = getPublishedTopicCount();
  const totalPractice = getTotalPracticeCount();

  const lessonCompleted = progress.completedTopics.length;
  const scores = Object.values(progress.quizScores);
  const quizAvg = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : 0;

  const loadPracticeStats = useCallback(async () => {
    if (!user) return;
    const sb = getSupabase();
    if (!sb) return;

    const { data: rows } = await sb
      .from("practice_progress")
      .select("problem_id")
      .eq("user_id", user.id)
      .eq("status", "solved");
    setPracticeSolved(rows?.length ?? 0);
  }, [user]);

  useEffect(() => {
    if (ready && user) {
      void loadPracticeStats();
    }
  }, [ready, user, loadPracticeStats]);

  useEffect(() => {
    const onUpdate = () => {
      void loadPracticeStats();
    };
    window.addEventListener("pypath-progress-updated", onUpdate);
    return () => window.removeEventListener("pypath-progress-updated", onUpdate);
  }, [loadPracticeStats]);

  const loading = !ready;

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <h1 className="text-3xl font-bold text-gray-900">Your progress</h1>
      <p className="mt-2 text-gray-600">
        Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}.
      </p>

      {loading ? (
        <div className="mt-12 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={BookOpen}
              label="Lessons completed"
              value={`${lessonCompleted} / ${totalTopics}`}
            />
            <StatCard
              icon={Terminal}
              label="Practice solved"
              value={`${practiceSolved} / ${totalPractice}`}
            />
            <StatCard
              icon={CheckCircle2}
              label="Average quiz score"
              value={quizAvg ? `${quizAvg}%` : "—"}
            />
            <StatCard
              icon={Lock}
              label="Practice premium"
              value={hasPremium ? "Unlocked" : "Locked"}
              highlight={hasPremium}
            />
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Learning Roadmap</h2>
            <p className="mt-1 text-sm text-gray-500">
              Follow modules in order. Click any module to expand its topics.
            </p>
            <DashboardRoadmap
              modules={modules}
              completedTopicIds={progress.completedTopics}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/practice" className="text-sm font-medium text-brand-700 hover:underline">
              Practice problems
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: typeof BookOpen;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <Icon className={`h-5 w-5 ${highlight ? "text-green-600" : "text-brand-600"}`} />
      <p className="mt-3 text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
