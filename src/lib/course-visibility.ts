import { ALL_COURSE_IDS, courses } from "@/data/courses";
import type { Course, CourseId } from "@/lib/types";
import { getSupabase } from "@/lib/supabase/client";

/**
 * Published course IDs for learners.
 * - Table missing / query error → fail-open (all catalog courses).
 * - Empty table (not seeded) → fail-open (all catalog courses).
 * - Rows present → only `published = true`.
 */
export async function fetchPublishedCourseIds(): Promise<Set<CourseId>> {
  const all = new Set<CourseId>(ALL_COURSE_IDS);
  const sb = getSupabase();
  if (!sb) return all;

  const { data, error } = await sb.from("course_settings").select("course_id, published");
  if (error || !data || data.length === 0) return all;

  const published = new Set<CourseId>();
  for (const row of data) {
    const id = row.course_id as CourseId;
    if (ALL_COURSE_IDS.includes(id) && row.published) published.add(id);
  }
  return published;
}

/** Course IDs the user is enrolled in. Null means "enrollment check unavailable → fail-open". */
export async function fetchEnrolledCourseIds(
  userId: string
): Promise<Set<CourseId> | null> {
  const sb = getSupabase();
  if (!sb) return null;

  const { data, error } = await sb
    .from("enrollments")
    .select("course_id")
    .eq("user_id", userId);

  if (error) return null;

  const enrolled = new Set<CourseId>();
  for (const row of data ?? []) {
    const id = row.course_id as CourseId;
    if (ALL_COURSE_IDS.includes(id)) enrolled.add(id);
  }
  return enrolled;
}

export function filterPublishedCourses(publishedIds: Set<CourseId>): Course[] {
  return courses.filter((c) => publishedIds.has(c.id));
}

export function canAccessCourse(options: {
  courseId: CourseId;
  isAdmin: boolean;
  publishedIds: Set<CourseId>;
  enrolledIds: Set<CourseId> | null;
}): boolean {
  const { courseId, isAdmin, publishedIds, enrolledIds } = options;
  if (isAdmin) return true;
  if (!publishedIds.has(courseId)) return false;
  // Enrollment table missing / unreadable → published alone is enough.
  if (enrolledIds === null) return true;
  return enrolledIds.has(courseId);
}
