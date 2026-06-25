"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { getModulesByCourse } from "@/data/curriculum";
import { courses } from "@/data/courses"; // used for URL param validation
import { getPracticeCountForTopics } from "@/data/practice/meta";
import { PAGE_CONTAINER } from "@/lib/layout";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { getSupabase } from "@/lib/supabase/client";
import { useEntitlements } from "@/hooks/useEntitlements";
import type { CourseId } from "@/lib/types";
import { BookOpen, Terminal, CheckCircle2, Lock, Loader2, Zap } from "lucide-react";
import { DashboardRoadmap } from "@/components/dashboard/DashboardRoadmap";
import { TourTrigger } from "@/components/walkthrough/TourTrigger";

const COURSE_STORAGE_KEY = "last-active-course";

export default function DashboardPage() {
  const { user, profile } = useAuth();
  const { progress, ready } = useProgress();
  const { hasPremium } = useEntitlements();
  const [practiceSolved, setPracticeSolved] = useState(0);
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
    } catch { /* ignore */ }
  }, []);

  function switchCourse(id: CourseId) {
    setActiveCourse(id);
    try {
      localStorage.setItem(COURSE_STORAGE_KEY, id);
      const url = new URL(window.location.href);
      url.searchParams.set("course", id);
      window.history.replaceState(null, "", url.toString());
    } catch { /* ignore */ }
  }

  const courseModules = getModulesByCourse(activeCourse);

  // Stats scoped to the active course topics
  const courseTopicIds = courseModules.flatMap((m) => m.topics.map((t) => t.id));
  const courseTopicIdSet = new Set(courseTopicIds);

  const lessonCompleted = progress.completedTopics.filter((id) => courseTopicIdSet.has(id)).length;
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

  // Course-scoped practice total (0 for courses without practice problems)
  const totalPractice = getPracticeCountForTopics(courseTopicIds);
  const courseHasPractice = totalPractice > 0;

  const loadPracticeStats = useCallback(async () => {
    if (!user) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: rows } = await sb
      .from("practice_progress")
      .select("problem_id")
      .eq("user_id", user.id)
      .eq("status", "solved");

    if (!rows) { setPracticeSolved(0); return; }

    // Filter to only problems belonging to the active course
    // Practice problem IDs have the format "{topicId}-p{N}", e.g. "m1-t1-p01"
    const courseSolved = rows.filter((r) => {
      const parts = r.problem_id.split("-");
      const topicId = parts.slice(0, -1).join("-");
      return courseTopicIdSet.has(topicId);
    });

    setPracticeSolved(courseSolved.length);
  }, [user, activeCourse]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (ready && user) void loadPracticeStats();
  }, [ready, user, loadPracticeStats]);

  useEffect(() => {
    const onUpdate = () => { void loadPracticeStats(); };
    window.addEventListener("pypath-progress-updated", onUpdate);
    return () => window.removeEventListener("pypath-progress-updated", onUpdate);
  }, [loadPracticeStats]);

  const loading = !ready;

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <Suspense fallback={null}>
        <TourTrigger />
      </Suspense>

      <h1 className="text-3xl font-bold text-gray-900">Your progress</h1>
      <p className="mt-2 text-gray-600">
        Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}.
      </p>

      {/* Course switcher */}
      <div className="mt-6 flex gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1.5 w-fit">
        {courses.map((course) => {
          const isActive = activeCourse === course.id;
          const isViolet = course.color === "violet";
          return (
            <button
              key={course.id}
              type="button"
              onClick={() => switchCourse(course.id as CourseId)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? isViolet
                    ? "bg-violet-600 text-white shadow-sm"
                    : "bg-brand-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:bg-white"
              }`}
            >
              <span className="text-base leading-none">{course.icon}</span>
              <span className="hidden sm:inline">{course.name}</span>
              <span className="sm:hidden">{course.id === "python" ? "Python" : "Agentic AI"}</span>
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={BookOpen}
              label="Lessons completed"
              value={`${lessonCompleted} / ${courseTotal}`}
            />
            {courseHasPractice ? (
              <StatCard
                icon={Terminal}
                label="Practice solved"
                value={`${practiceSolved} / ${totalPractice}`}
              />
            ) : (
              <StatCard
                icon={Zap}
                label="Course type"
                value="Lesson-based"
                sublabel="No practice problems"
              />
            )}
            <StatCard
              icon={CheckCircle2}
              label="Average quiz score"
              value={quizAvg ? `${quizAvg}%` : "—"}
            />
            {courseHasPractice ? (
              <StatCard
                icon={Lock}
                label="Practice premium"
                value={hasPremium ? "Unlocked" : "Locked"}
                highlight={hasPremium}
              />
            ) : (
              <StatCard
                icon={CheckCircle2}
                label="Access"
                value="Full access"
                highlight
              />
            )}
          </div>

          <div className="mt-10">
            <div data-walkthrough="dashboard-roadmap" className="scroll-mt-24">
              <h2 className="text-lg font-semibold text-gray-900">Learning Roadmap</h2>
              <p className="mt-1 text-sm text-gray-500">
                Follow modules in order. Click any module to expand its topics.
              </p>
            </div>
            <DashboardRoadmap
              modules={courseModules}
              progress={progress}
            />
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
      <Icon className={`h-5 w-5 ${highlight ? "text-green-600" : "text-brand-600"}`} />
      <p className="mt-3 text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      {sublabel && <p className="mt-0.5 text-xs text-gray-400">{sublabel}</p>}
    </div>
  );
}
