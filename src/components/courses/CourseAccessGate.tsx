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

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!user) {
        if (!cancelled) {
          setEnrolledIds(new Set());
          setEnrollLoading(false);
        }
        return;
      }

      setEnrollLoading(true);
      const ids = await fetchEnrolledCourseIds(user.id);
      if (!cancelled) {
        setEnrolledIds(ids);
        setEnrollLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (authLoading || publishedLoading || enrollLoading) {
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

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-xl font-semibold text-gray-900">
        {unpublished ? "Course not available" : "Not enrolled"}
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        {unpublished
          ? "This course is not published yet. Check the dashboard for live tracks."
          : "You are not enrolled in this course. Ask your administrator to assign it to your account."}
      </p>
      <Link
        href="/dashboard"
        className="mt-6 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
