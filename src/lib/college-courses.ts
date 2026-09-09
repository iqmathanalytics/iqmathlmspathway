import { ALL_COURSE_IDS, courses } from "@/data/courses";
import type { Course, CourseId } from "@/lib/types";
import { getSupabase } from "@/lib/supabase/client";

/** Course IDs assigned to a college. Empty array = no plan configured yet. */
export async function fetchCollegeCourseIds(
  collegeId: string
): Promise<CourseId[]> {
  const sb = getSupabase();
  if (!sb || !collegeId) return [];

  const { data, error } = await sb
    .from("college_courses")
    .select("course_id")
    .eq("college_id", collegeId);

  if (error || !data) return [];

  const ids: CourseId[] = [];
  for (const row of data) {
    const id = row.course_id as CourseId;
    if (ALL_COURSE_IDS.includes(id) && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

export function coursesForIds(ids: CourseId[]): Course[] {
  return courses.filter((c) => ids.includes(c.id));
}

/** Replace a college's course plan. Admin only (RLS). */
export async function saveCollegeCoursePlan(
  collegeId: string,
  courseIds: CourseId[]
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: "Supabase is not configured." };

  const { error: delError } = await sb
    .from("college_courses")
    .delete()
    .eq("college_id", collegeId);
  if (delError) return { error: delError.message };

  if (courseIds.length === 0) return { error: null };

  const { error: insError } = await sb.from("college_courses").insert(
    courseIds.map((course_id) => ({ college_id: collegeId, course_id }))
  );
  if (insError) return { error: insError.message };
  return { error: null };
}

/** Push college plan enrollments to all active students at that college. */
export async function applyCollegePlanToStudents(
  collegeId: string,
  replace = false
): Promise<{ count: number; error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { count: 0, error: "Supabase is not configured." };

  const { data, error } = await sb.rpc("apply_college_plan", {
    p_college_id: collegeId,
    p_replace: replace,
  });
  if (error) return { count: 0, error: error.message };
  return { count: typeof data === "number" ? data : 0, error: null };
}
