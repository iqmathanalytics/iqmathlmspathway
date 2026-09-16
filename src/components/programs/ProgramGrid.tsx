"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, BookOpen, Clock, Layers, Loader2 } from "lucide-react";
import { getModulesByCourse } from "@/data/curriculum";
import {
  dashboardCourseHref,
  getProgramVisual,
  nextLessonHref,
  PROGRAMS_PATH,
} from "@/data/program-meta";
import { IconImage } from "@/components/ui/IconImage";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { usePublishedCourses } from "@/hooks/usePublishedCourses";
import { enrollInCourse, ENROLLMENTS_UPDATED_EVENT } from "@/lib/enroll-course";
import { fetchEnrolledCourseIds } from "@/lib/course-visibility";
import type { CourseId } from "@/lib/types";

export function ProgramGrid() {
  const router = useRouter();
  const { user } = useAuth();
  const { progress } = useProgress();
  const { visibleCourses, loading: catalogLoading } = usePublishedCourses();
  const [enrolledIds, setEnrolledIds] = useState<Set<CourseId>>(new Set());
  const [enrollLoading, setEnrollLoading] = useState(Boolean(user));
  const [enrollingId, setEnrollingId] = useState<CourseId | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!user) {
        setEnrolledIds(new Set());
        setEnrollLoading(false);
        return;
      }
      setEnrollLoading(true);
      const ids = await fetchEnrolledCourseIds(user.id);
      if (cancelled) return;
      setEnrolledIds(ids ?? new Set());
      setEnrollLoading(false);
    }
    void load();

    function onUpdated() {
      if (!user) return;
      void fetchEnrolledCourseIds(user.id).then((ids) => {
        if (!cancelled) setEnrolledIds(ids ?? new Set());
      });
    }
    if (typeof window !== "undefined") {
      window.addEventListener(ENROLLMENTS_UPDATED_EVENT, onUpdated);
    }

    return () => {
      cancelled = true;
      if (typeof window !== "undefined") {
        window.removeEventListener(ENROLLMENTS_UPDATED_EVENT, onUpdated);
      }
    };
  }, [user]);

  async function enroll(courseId: CourseId) {
    if (!user) return;
    setError(null);
    setEnrollingId(courseId);
    const result = await enrollInCourse(user.id, courseId);
    setEnrollingId(null);
    if (result.error) {
      setError(result.error);
      return;
    }
    setEnrolledIds((prev) => new Set(prev).add(courseId));
    router.push(dashboardCourseHref(courseId));
  }

  if (catalogLoading) {
    return (
      <div className="mt-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (visibleCourses.length === 0) {
    return (
      <p className="mt-12 text-center text-gray-500">
        Programs will appear here once an admin publishes them.
      </p>
    );
  }

  return (
    <>
      {error && (
        <p className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
        {visibleCourses.map((course) => {
          const visual = getProgramVisual(course);
          const courseModules = getModulesByCourse(course.id);
          const liveTopics = courseModules.reduce(
            (acc, m) => acc + m.topics.filter((t) => t.published).length,
            0
          );
          const enrolled = enrolledIds.has(course.id);
          const continueHref = nextLessonHref(
            course.id,
            progress.completedTopics
          );
          const loginHref = `/auth/login?next=${encodeURIComponent(PROGRAMS_PATH)}`;

          return (
            <div
              key={course.id}
              className={`group relative flex h-full overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-2xl ${visual.glow}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-100 transition`}
              />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/70 blur-3xl" />

              <div className="relative flex w-full flex-col p-7 sm:p-8 lg:p-9">
                <div className="flex items-start justify-between gap-4">
                  <IconImage
                    src={course.iconImage}
                    alt={course.iconAlt ?? `${course.name} logo`}
                    fallback={course.icon}
                    className="h-16 w-16 rounded-3xl bg-white p-1.5 shadow-sm ring-1 ring-gray-200/70"
                    fallbackClassName="text-sm font-bold"
                  />
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${visual.badgeClass}`}
                  >
                    {visual.levelLabel}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {course.name}
                </h3>
                <p className="mt-2 min-h-[4.5rem] text-gray-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-5 grid gap-2 text-sm text-gray-500 sm:grid-cols-3">
                  <span className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200/60">
                    <Layers className="h-4 w-4 shrink-0" />
                    {courseModules.length} modules
                  </span>
                  <span className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200/60">
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {liveTopics} lessons
                  </span>
                  <span className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200/60">
                    <Clock className="h-4 w-4 shrink-0" />
                    Self-paced
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-2">
                  {visual.featureHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[9px] font-bold text-white">
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {!user ? (
                    <Link
                      href={loginHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700 sm:col-span-2"
                    >
                      Enroll
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : enrollLoading ? (
                    <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-500 sm:col-span-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Checking enrollment…
                    </div>
                  ) : enrolled ? (
                    <>
                      <Link
                        href={continueHref}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
                      >
                        Continue learning
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={dashboardCourseHref(course.id)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                      >
                        View dashboard
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        disabled={enrollLoading || enrollingId === course.id}
                        onClick={() => void enroll(course.id)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700 disabled:opacity-60"
                      >
                        {enrollingId === course.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            Enroll
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <span className="inline-flex items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white/70 px-5 py-3 text-sm font-medium text-gray-500">
                        Enroll to start
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
