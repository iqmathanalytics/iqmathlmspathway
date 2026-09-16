"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";
import { usePublishedCourses } from "@/hooks/usePublishedCourses";
import {
  canAccessCourse,
  fetchEnrolledCourseIds,
} from "@/lib/course-visibility";
import { enrollInCourse, ENROLLMENTS_UPDATED_EVENT } from "@/lib/enroll-course";
import { PROGRAMS_PATH } from "@/data/program-meta";
import type { CourseId } from "@/lib/types";

export function CourseAccessGate({
  courseId,
  children,
}: {
  courseId: CourseId;
  children: ReactNode;
}) {
  const { user, profile, loading: authLoading } = useAuth();
  const { publishedIds, loading: publishedLoading } = usePublishedCourses();
  const [enrolledIds, setEnrolledIds] = useState<Set<CourseId> | null>(null);
  const [enrollLoading, setEnrollLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load(isRefresh = false) {
      if (!user || isAdmin(profile)) {
        if (!cancelled) {
          setEnrolledIds(new Set());
          setEnrollLoading(false);
        }
        return;
      }

      if (!isRefresh) setEnrollLoading(true);
      const ids = await fetchEnrolledCourseIds(user.id);
      if (!cancelled) {
        setEnrolledIds(ids);
        setEnrollLoading(false);
      }
    }

    void load();

    function onUpdated() {
      void load(true);
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
  }, [user, profile]);

  if (authLoading || publishedLoading || (enrollLoading && !isAdmin(profile))) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  const allowed = canAccessCourse({
    courseId,
    isAdmin: isAdmin(profile),
    publishedIds,
    enrolledIds: user ? enrolledIds : null,
  });

  if (allowed) {
    return <>{children}</>;
  }

  const unpublished = !publishedIds.has(courseId);

  async function enroll() {
    if (!user) return;
    setEnrollError(null);
    setEnrolling(true);
    const result = await enrollInCourse(user.id, courseId);
    setEnrolling(false);
    if (result.error) {
      setEnrollError(result.error);
      return;
    }
    setEnrolledIds((prev) => new Set(prev ?? []).add(courseId));
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-xl font-semibold text-gray-900">
        {unpublished ? "Course not available" : "Not enrolled"}
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        {unpublished
          ? "This course is not published yet. Check Programs for live tracks."
          : "You are not enrolled in this program yet. Enroll to start learning."}
      </p>
      {enrollError && (
        <p className="mt-3 text-sm text-red-600">{enrollError}</p>
      )}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!unpublished && user && (
          <button
            type="button"
            disabled={enrolling}
            onClick={() => void enroll()}
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {enrolling ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Enroll in this program"
            )}
          </button>
        )}
        <Link
          href={PROGRAMS_PATH}
          className="inline-block rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          Browse programs
        </Link>
      </div>
    </div>
  );
}
