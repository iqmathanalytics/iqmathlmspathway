"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { getModulesByCourse } from "@/data/curriculum";
import { courses, courseShortName } from "@/data/courses";
import { getPracticeCountForTopics } from "@/data/practice/meta";
import { PYTHON_HUB_PRACTICE_TOTAL } from "@/data/python-hub-stats";
import { PAGE_CONTAINER } from "@/lib/layout";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { getSupabase } from "@/lib/supabase/client";
import { useEntitlements } from "@/hooks/useEntitlements";
import { useAccessibleCourses } from "@/hooks/usePublishedCourses";
import {
  isCourseChallengeProblemId,
  isStandalonePracticeProblemId,
} from "@/lib/practice-config";
import type { CourseId } from "@/lib/types";
import {
  BookOpen,
  Terminal,
  CheckCircle2,
  Lock,
  Loader2,
  Zap,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { DashboardRoadmap } from "@/components/dashboard/DashboardRoadmap";
import { ProgramStatusCards } from "@/components/dashboard/ProgramStatusCards";
import { TourTrigger } from "@/components/walkthrough/TourTrigger";
import { IconImage } from "@/components/ui/IconImage";
import { PROGRAMS_PATH } from "@/data/program-meta";

const COURSE_STORAGE_KEY = "last-active-course";

export default function DashboardPage() {
  const { user, profile } = useAuth();
  const { progress, ready } = useProgress();
  const { hasPremium } = useEntitlements();
  const { accessibleCourses, loading: coursesLoading } = useAccessibleCourses();
  const [challengeSolved, setChallengeSolved] = useState(0);
  const [hubPracticeSolved, setHubPracticeSolved] = useState(0);
  const [practiceStatsError, setPracticeStatsError] = useState<string | null>(
    null
  );
  const [activeCourse, setActiveCourse] = useState<CourseId>("python");

  // On mount: honour ?course= URL param first, then fall back to localStorage
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const paramCourse = params.get("course") as CourseId | null;
      if (paramCourse && courses.some((c) => c.id === paramCourse)) {
        setActiveCourse(paramCourse);
        localStorage.setItem(COURSE_STORAGE_KEY, paramCourse);
        return;
      }
      const saved = localStorage.getItem(COURSE_STORAGE_KEY) as CourseId | null;
      if (saved && courses.some((c) => c.id === saved)) setActiveCourse(saved);
    } catch {
      /* ignore */
    }
  }, []);

  function switchCourse(id: CourseId) {
    setActiveCourse(id);
    try {
      localStorage.setItem(COURSE_STORAGE_KEY, id);
      const url = new URL(window.location.href);
      url.searchParams.set("course", id);
      window.history.replaceState(null, "", url.toString());
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    if (coursesLoading || accessibleCourses.length === 0) return;
    if (!accessibleCourses.some((c) => c.id === activeCourse)) {
      setActiveCourse(accessibleCourses[0].id);
    }
  }, [accessibleCourses, coursesLoading, activeCourse]);

  const courseModules = getModulesByCourse(activeCourse);

  // Stats scoped to the active course topics
  const courseTopicIds = courseModules.flatMap((m) => m.topics.map((t) => t.id));
  const courseTopicIdSet = new Set(courseTopicIds);

  const lessonCompleted = progress.completedTopics.filter((id) =>
    courseTopicIdSet.has(id)
  ).length;
  const courseTotal = courseModules.reduce(
    (acc, m) => acc + m.topics.filter((t) => t.published).length,
    0
  );
  const scores = Object.entries(progress.quizScores)
    .filter(([id]) => courseTopicIdSet.has(id))
    .map(([, v]) => v);
  const quizAvg = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : 0;

  const totalChallenges = getPracticeCountForTopics(courseTopicIds);
  const courseHasPractice = totalChallenges > 0;

  const loadPracticeStats = useCallback(async () => {
    if (!user) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: rows, error } = await sb
      .from("practice_progress")
      .select("problem_id")
      .eq("user_id", user.id)
      .eq("status", "solved");

    if (error) {
      setPracticeStatsError(error.message);
      return;
    }

    setPracticeStatsError(null);
    const solvedIds = (rows ?? []).map((r) => String(r.problem_id));
    setChallengeSolved(
      solvedIds.filter((id) => isCourseChallengeProblemId(activeCourse, id))
        .length
    );
    setHubPracticeSolved(
      solvedIds.filter((id) => isStandalonePracticeProblemId(id)).length
    );
  }, [user, activeCourse]);

  useEffect(() => {
    if (ready && user) void loadPracticeStats();
  }, [ready, user, loadPracticeStats]);

  useEffect(() => {
    const onUpdate = () => {
      void loadPracticeStats();
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") void loadPracticeStats();
    };
    window.addEventListener("pypath-progress-updated", onUpdate);
    window.addEventListener("focus", onUpdate);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("pypath-progress-updated", onUpdate);
      window.removeEventListener("focus", onUpdate);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [loadPracticeStats]);

  const loading = !ready;

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <Suspense fallback={null}>
        <TourTrigger />
      </Suspense>

      <h1 className="text-3xl font-bold text-gray-900">Your progress</h1>
      <p
        className="mt-2 max-w-full truncate text-gray-600"
        title={profile?.full_name || undefined}
      >
        Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}.
      </p>

      {coursesLoading ? (
        <div className="mt-12 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      ) : accessibleCourses.length === 0 ? (
        <p className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
          No programs on your account yet.{" "}
          <Link href={PROGRAMS_PATH} className="font-medium text-brand-700 hover:underline">
            Enroll in a published program
          </Link>{" "}
          to start learning.
        </p>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Your programs</h2>
              <p className="mt-1 text-sm text-gray-500">
                Status for each enrolled course. Select one to open its roadmap.
              </p>
            </div>
            <Link
              href={PROGRAMS_PATH}
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              Browse programs
            </Link>
          </div>

          <ProgramStatusCards
            courses={accessibleCourses}
            progress={progress}
            activeCourse={activeCourse}
            onSelect={switchCourse}
          />

          <div className="mt-8 grid w-full grid-cols-2 gap-1.5 rounded-xl border border-gray-200 bg-gray-50 p-1.5 sm:grid-cols-4">
            {accessibleCourses.map((course) => {
              const isActive = activeCourse === course.id;
              const activeClass =
                course.color === "violet"
                  ? "bg-violet-600 text-white shadow-sm"
                  : course.color === "sky"
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-brand-600 text-white shadow-sm";
              const shortLabel = courseShortName(course.id);
              return (
                <button
                  key={course.id}
                  type="button"
                  title={course.name}
                  onClick={() => switchCourse(course.id)}
                  className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs font-semibold transition-all sm:gap-2 sm:px-3 sm:text-sm ${
                    isActive
                      ? activeClass
                      : "text-gray-500 hover:bg-white hover:text-gray-800"
                  }`}
                >
                  <IconImage
                    src={course.iconImage}
                    alt={course.iconAlt ?? `${course.name} logo`}
                    fallback={course.icon}
                    className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                    imageClassName="h-full w-full object-contain"
                    fallbackClassName="text-sm leading-none sm:text-base"
                  />
                  <span className="truncate">{shortLabel}</span>
                </button>
              );
            })}
          </div>

          {loading ? (
            <div className="mt-12 flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
            </div>
          ) : (
            <>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <StatCard
                  icon={BookOpen}
                  label="Lessons completed"
                  value={`${lessonCompleted} / ${courseTotal}`}
                  sublabel="For this course"
                />
                {courseHasPractice ? (
                  <StatCard
                    icon={Terminal}
                    label="Challenges solved"
                    value={
                      practiceStatsError
                        ? "—"
                        : `${challengeSolved} / ${totalChallenges}`
                    }
                    sublabel={
                      practiceStatsError
                        ? "Could not load challenge stats"
                        : "Module questions for this course"
                    }
                  />
                ) : (
                  <StatCard
                    icon={Zap}
                    label="Course type"
                    value="Lesson-based"
                    sublabel="Lessons and quizzes"
                  />
                )}
                <StatCard
                  icon={Code2}
                  label="Practice solved"
                  value={
                    practiceStatsError
                      ? "—"
                      : `${hubPracticeSolved} / ${PYTHON_HUB_PRACTICE_TOTAL}`
                  }
                  sublabel={
                    practiceStatsError
                      ? "Could not load practice stats"
                      : "Python course hub only"
                  }
                />
                <StatCard
                  icon={CheckCircle2}
                  label="Average quiz score"
                  value={scores.length ? `${quizAvg}%` : "—"}
                  sublabel="For this course"
                />
                <StatCard
                  icon={Lock}
                  label="Practice premium"
                  value={hasPremium ? "Unlocked" : "Locked"}
                  highlight={hasPremium}
                  sublabel={
                    hasPremium ? "Full practice access" : "Unlock to practice"
                  }
                />
              </div>

              <div className="mt-10">
                <div
                  data-walkthrough="dashboard-roadmap"
                  className="scroll-mt-24"
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    Learning Roadmap
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Follow modules in order. Click any module to expand its
                    topics.
                  </p>
                </div>
                <DashboardRoadmap
                  modules={courseModules}
                  progress={progress}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sublabel,
  highlight,
}: {
  icon: typeof BookOpen;
  label: string;
  value: string;
  sublabel?: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <Icon
        className={`h-5 w-5 ${highlight ? "text-green-600" : "text-brand-600"}`}
      />
      <p className="mt-3 text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      {sublabel && <p className="mt-0.5 text-xs text-gray-400">{sublabel}</p>}
    </div>
  );
}
