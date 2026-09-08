"use client";

import { useEffect, useMemo, useState } from "react";
import { ALL_COURSE_IDS, courses } from "@/data/courses";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";
import {
  canAccessCourse,
  fetchEnrolledCourseIds,
  fetchPublishedCourseIds,
  filterPublishedCourses,
} from "@/lib/course-visibility";
import type { Course, CourseId } from "@/lib/types";

/** Published courses (catalog visibility). Does not apply enrollment. */
export function usePublishedCourses() {
  const [publishedIds, setPublishedIds] = useState<Set<CourseId>>(
    () => new Set(ALL_COURSE_IDS)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedCourseIds().then((ids) => {
      if (cancelled) return;
      setPublishedIds(ids);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleCourses: Course[] = filterPublishedCourses(publishedIds);
  return {
    publishedIds,
    visibleCourses,
    catalog: courses,
    loading,
  };
}

/** Courses the signed-in learner can open (published + enrolled, admins see published). */
export function useAccessibleCourses() {
  const { user, profile, loading: authLoading } = useAuth();
  const { publishedIds, loading: publishedLoading } = usePublishedCourses();
  const [enrolledIds, setEnrolledIds] = useState<Set<CourseId> | null>(null);
  const [enrollLoading, setEnrollLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!user) {
        if (!cancelled) {
          setEnrolledIds(null);
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

  const accessibleCourses = useMemo(() => {
    const admin = isAdmin(profile);
    return courses.filter((course) =>
      canAccessCourse({
        courseId: course.id,
        isAdmin: admin,
        publishedIds,
        enrolledIds: user ? enrolledIds : null,
      })
    );
  }, [profile, publishedIds, enrolledIds, user]);

  return {
    accessibleCourses,
    publishedIds,
    enrolledIds,
    loading: authLoading || publishedLoading || enrollLoading,
  };
}
