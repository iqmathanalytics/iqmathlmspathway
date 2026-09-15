import { ALL_COURSE_IDS, courses } from "@/data/courses";
import type { Course, CourseId } from "@/lib/types";
import { getSupabase } from "@/lib/supabase/client";

export type DepartmentCoursePlan = {
  department: string;
  courseIds: CourseId[];
};

function normalizeDeptKey(department: string): string {
  return department.trim().toLowerCase();
}

/** Course IDs assigned to a college (college-wide). Empty = none configured. */
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

/** Department-specific course plans for a college. */
export async function fetchCollegeDepartmentPlans(
  collegeId: string
): Promise<DepartmentCoursePlan[]> {
  const sb = getSupabase();
  if (!sb || !collegeId) return [];

  const { data, error } = await sb
    .from("college_department_courses")
    .select("department, course_id")
    .eq("college_id", collegeId)
    .order("department");

  if (error || !data) return [];

  const byDept = new Map<string, { department: string; courseIds: CourseId[] }>();
  for (const row of data) {
    const dept = String(row.department ?? "").trim();
    if (!dept) continue;
    const key = normalizeDeptKey(dept);
    const courseId = row.course_id as CourseId;
    if (!ALL_COURSE_IDS.includes(courseId)) continue;
    const existing = byDept.get(key);
    if (existing) {
      if (!existing.courseIds.includes(courseId)) existing.courseIds.push(courseId);
    } else {
      byDept.set(key, { department: dept, courseIds: [courseId] });
    }
  }
  return [...byDept.values()].sort((a, b) =>
    a.department.localeCompare(b.department, undefined, { sensitivity: "base" })
  );
}

export function coursesForIds(ids: CourseId[]): Course[] {
  return courses.filter((c) => ids.includes(c.id));
}

/** Replace a college's college-wide course plan. Admin only (RLS). */
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

/**
 * Replace all department course plans for a college.
 * Pass the full list of department → courses rules.
 */
export async function saveCollegeDepartmentPlans(
  collegeId: string,
  plans: DepartmentCoursePlan[]
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: "Supabase is not configured." };

  const { error: delError } = await sb
    .from("college_department_courses")
    .delete()
    .eq("college_id", collegeId);
  if (delError) {
    if (/relation|does not exist|schema cache/i.test(delError.message)) {
      return {
        error:
          "Run supabase/RUN_COLLEGE_DEPARTMENT_COURSES.sql in the Supabase SQL Editor first.",
      };
    }
    return { error: delError.message };
  }

  const rows: Array<{ college_id: string; department: string; course_id: string }> =
    [];
  const seen = new Set<string>();
  for (const plan of plans) {
    const dept = plan.department.trim();
    if (!dept || plan.courseIds.length === 0) continue;
    for (const course_id of plan.courseIds) {
      if (!ALL_COURSE_IDS.includes(course_id)) continue;
      const key = `${normalizeDeptKey(dept)}|||${course_id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({ college_id: collegeId, department: dept, course_id });
    }
  }

  if (rows.length === 0) return { error: null };

  const { error: insError } = await sb
    .from("college_department_courses")
    .insert(rows);
  if (insError) return { error: insError.message };
  return { error: null };
}

/** Push college + department plan enrollments to all active students at that college. */
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

/** Distinct department names already used by students (for admin suggestions). */
export async function fetchDistinctDepartments(): Promise<string[]> {
  const sb = getSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from("profiles")
    .select("department")
    .eq("role", "student")
    .neq("department", "");
  if (error || !data) return [];
  const map = new Map<string, string>();
  for (const row of data) {
    const raw = String(row.department ?? "").trim();
    if (!raw) continue;
    const key = normalizeDeptKey(raw);
    if (!map.has(key)) map.set(key, raw);
  }
  return [...map.values()].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );
}
