"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  courseProgressLabel,
  dashboardCourseHref,
  getCourseProgressStats,
  nextLessonHref,
} from "@/data/program-meta";
import { IconImage } from "@/components/ui/IconImage";
import type { Course, CourseId, UserProgress } from "@/lib/types";

export function ProgramStatusCards({
  courses,
  progress,
  activeCourse,
  onSelect,
}: {
  courses: Course[];
  progress: UserProgress;
  activeCourse: CourseId;
  onSelect: (id: CourseId) => void;
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {courses.map((course) => {
        const stats = getCourseProgressStats(course.id, progress);
        const selected = activeCourse === course.id;
        const continueHref = nextLessonHref(course.id, progress.completedTopics);
        const statusClass =
          stats.status === "completed"
            ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
            : stats.status === "in_progress"
              ? "bg-sky-50 text-sky-800 ring-sky-200"
              : "bg-gray-100 text-gray-600 ring-gray-200";

        return (
          <div
            key={course.id}
            className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition ${
              selected
                ? "border-brand-400 ring-2 ring-brand-100"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <button
              type="button"
              onClick={() => onSelect(course.id)}
              className="flex w-full items-start gap-3 text-left"
            >
              <IconImage
                src={course.iconImage}
                alt={course.iconAlt ?? `${course.name} logo`}
                fallback={course.icon}
                className="h-10 w-10 shrink-0 rounded-xl bg-white p-1 ring-1 ring-gray-200"
                fallbackClassName="text-xs font-bold"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-gray-900">
                  {course.name}
                </p>
                <span
                  className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${statusClass}`}
                >
                  {courseProgressLabel(stats.status)}
                </span>
              </div>
            </button>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  {stats.completed} / {stats.total} lessons
                </span>
                <span>{stats.percent}%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-brand-600"
                  style={{ width: `${stats.percent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Quiz avg{" "}
                {stats.quizAvg == null ? "—" : `${stats.quizAvg}%`}
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                href={continueHref}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-700"
              >
                Continue learning
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={dashboardCourseHref(course.id)}
                onClick={() => onSelect(course.id)}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
