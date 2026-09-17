"use client";

import Link from "next/link";
import { ArrowRight, Code2, Lock, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useEntitlements } from "@/hooks/useEntitlements";
import { useAccessibleCourses } from "@/hooks/usePublishedCourses";
import { isAdmin, isDemoUnlockAccount } from "@/lib/admin";
import { OPEN_ACCESS } from "@/lib/access-flags";
import { isStandalonePracticeProblemId } from "@/lib/practice-config";

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
  const { user, profile } = useAuth();
  const { hasPremium, loading: entLoading } = useEntitlements();
  const { accessibleCourses, loading: coursesLoading } = useAccessibleCourses();
  const bypassCatalog =
    isAdmin(profile) || isDemoUnlockAccount(profile, user?.email);
  const hasPythonCourse =
    bypassCatalog || accessibleCourses.some((c) => c.id === "python");
  const unlocked =
    bypassCatalog || (hasPythonCourse && (OPEN_ACCESS || hasPremium));
  const loading = entLoading || coursesLoading;
  const [solvedCount, setSolvedCount] = useState(0);

  useEffect(() => {
    if (!user || !isSupabaseConfigured()) return;
    const sb = getSupabase();
    if (!sb) return;

    const load = () => {
      void sb
        .from("practice_progress")
        .select("problem_id")
        .eq("user_id", user.id)
        .eq("status", "solved")
        .then(({ data }) => {
          const hubOnly = (data ?? []).filter((row) =>
            isStandalonePracticeProblemId(String(row.problem_id))
          );
          setSolvedCount(hubOnly.length);
        });
    };

    load();
    window.addEventListener("pypath-progress-updated", load);
    return () => window.removeEventListener("pypath-progress-updated", load);
  }, [user]);

  const ctaHref = !user
    ? `/auth/login?next=${encodeURIComponent("/practice")}`
    : !hasPythonCourse
      ? "/dashboard"
      : unlocked
        ? "/practice/python"
        : "/checkout";

  const ctaLabel = !user
    ? "Sign in to practice"
    : !hasPythonCourse
      ? "Python course required"
      : unlocked
        ? "Start practicing"
        : "Unlock to practice";

  return (
    <>
      {user && unlocked && solvedCount > 0 && (
        <p className="mt-4 text-sm font-medium text-brand-700">
          You have solved {solvedCount} practice problem
          {solvedCount === 1 ? "" : "s"}.
        </p>
      )}

      {!loading && user && !hasPythonCourse && (
        <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
            <div>
              <p className="text-sm font-semibold text-sky-950">
                Practice is for Python course students
              </p>
              <p className="mt-1 text-sm text-sky-900/80">
                Basics &amp; Algorithms unlock only when you are enrolled in{" "}
                <strong>Python for Data Science</strong>. Your admin can publish
                Python for your college or department.
              </p>
              <Link
                href="/dashboard"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                Go to dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {!loading && user && hasPythonCourse && !unlocked && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <p className="text-sm font-semibold text-amber-950">
                Practice requires premium access
              </p>
              <p className="mt-1 text-sm text-amber-900/80">
                You have the Python course. Unlock all practice questions with a
                one-time purchase, or ask your admin to grant practice access.
              </p>
              <Link
                href="/checkout"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                Unlock practice
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href={ctaHref}
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md sm:col-span-2 lg:col-span-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              {unlocked ? (
                <Code2 className="h-5 w-5" />
              ) : (
                <Lock className="h-5 w-5" />
              )}
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
            Available only with the Python course. Language drills and algorithm
            challenges in the in-browser editor — separate from course module
            challenges in Learn.
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
            {ctaLabel}
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
