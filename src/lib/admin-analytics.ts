import type { SupabaseClient } from "@supabase/supabase-js";
import { courses, courseShortName } from "@/data/courses";
import { PRACTICE_PREMIUM_PRODUCT } from "@/lib/practice-config";
import type { CourseId } from "@/lib/types";
import type { ChartDatum } from "@/components/admin/AdminCharts";

const PAGE = 1000;

export type AnalyticsStatusFilter = "all" | "active" | "inactive";

export interface AnalyticsFilters {
  collegeId: string;
  departmentKey: string;
  status: AnalyticsStatusFilter;
  courseId: string;
}

export const EMPTY_ANALYTICS_FILTERS: AnalyticsFilters = {
  collegeId: "",
  departmentKey: "",
  status: "all",
  courseId: "",
};

export interface AnalyticsStudent {
  id: string;
  full_name: string;
  email: string;
  mobile: string;
  college_id: string | null;
  department: string | null;
  is_active: boolean | null;
  created_at: string | null;
}

export interface AnalyticsCollege {
  id: string;
  name: string;
}

interface EnrollmentRow {
  user_id: string;
  course_id: string;
}

interface LessonRow {
  user_id: string;
  topic_id: string;
  completed: boolean;
  last_visited_at: string | null;
}

interface PracticeRow {
  user_id: string;
  problem_id: string;
  status: string;
  updated_at: string | null;
  submitted_at: string | null;
}

export interface AnalyticsSnapshot {
  students: AnalyticsStudent[];
  colleges: AnalyticsCollege[];
  publishedCourses: number;
  enrollments: EnrollmentRow[];
  lessons: LessonRow[];
  practice: PracticeRow[];
  premiumUserIds: Set<string>;
  fetchedAt: Date;
}

export interface CollegeLeaderboardRow {
  id: string;
  name: string;
  students: number;
  premiumCount: number;
  premiumPct: number;
  practiceSolved: number;
  avgPracticeSolved: number;
  lessonsCompleted: number;
  avgLessonsCompleted: number;
}

export interface DeptCollegeRow {
  department: string;
  college: string;
  students: number;
}

export interface AnalyticsResult {
  filtersActive: boolean;
  platformStudents: number;
  stats: {
    students: number;
    activeStudents: number;
    collegesRepresented: number;
    publishedCourses: number;
    catalogCourses: number;
    enrollments: number;
    uniqueEnrolled: number;
    lessonsCompleted: number;
    practiceSolved: number;
    premiumUnlocked: number;
    premiumPct: number;
    active7d: number;
    active30d: number;
  };
  signupTrend: ChartDatum[];
  statusMix: ChartDatum[];
  byCollege: ChartDatum[];
  byDepartment: ChartDatum[];
  byCourse: ChartDatum[];
  premiumMix: ChartDatum[];
  funnel: ChartDatum[];
  collegeLeaderboard: CollegeLeaderboardRow[];
  deptCollege: DeptCollegeRow[];
  departmentOptions: Array<{ key: string; label: string; count: number }>;
  recent: AnalyticsStudent[];
  cohort: AnalyticsStudent[];
  cohortIds: Set<string>;
}

function startOfWeek(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function weekKey(date: Date): string {
  return startOfWeek(date).toISOString().slice(0, 10);
}

function weekLabel(isoDate: string): string {
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function normalizeDepartment(raw: string | null | undefined): {
  key: string;
  label: string;
} {
  const trimmed = (raw ?? "").trim();
  if (!trimmed) return { key: "__unspecified__", label: "Unspecified" };
  return { key: trimmed.toLowerCase(), label: trimmed };
}

function topN(data: ChartDatum[], n: number): ChartDatum[] {
  const sorted = [...data].sort((a, b) => b.value - a.value);
  if (sorted.length <= n) return sorted;
  const head = sorted.slice(0, n - 1);
  const rest = sorted.slice(n - 1).reduce((sum, d) => sum + d.value, 0);
  return [
    ...head,
    { id: "other", label: "Other", value: rest, color: "#94a3b8" },
  ];
}

function courseBarColor(courseId: string): string {
  const course = courses.find((c) => c.id === courseId);
  if (course?.color === "violet") return "#7c3aed";
  if (course?.color === "sky") return "#0ea5e9";
  return "#0f75bd";
}

async function fetchAllRows<T>(
  fetchPage: (from: number, to: number) => Promise<{ data: T[] | null; error: Error | null }>
): Promise<{ data: T[]; error: Error | null }> {
  const all: T[] = [];
  let from = 0;
  for (;;) {
    const to = from + PAGE - 1;
    const { data, error } = await fetchPage(from, to);
    if (error) return { data: all, error };
    const rows = data ?? [];
    all.push(...rows);
    if (rows.length < PAGE) break;
    from += PAGE;
  }
  return { data: all, error: null };
}

/** Load full analytics snapshot (paginated). Call on mount / refresh. */
export async function loadAnalyticsSnapshot(
  sb: SupabaseClient
): Promise<{ snapshot: AnalyticsSnapshot | null; schemaError: boolean; error?: string }> {
  const collegesRes = await sb
    .from("colleges")
    .select("id, name")
    .eq("archived", false)
    .order("name");

  if (collegesRes.error) {
    const msg = collegesRes.error.message ?? "";
    if (/relation|does not exist|schema cache/i.test(msg)) {
      return { snapshot: null, schemaError: true, error: msg };
    }
  }

  const coursesRes = await sb.from("course_settings").select("course_id, published");
  if (coursesRes.error && /relation|does not exist|schema cache/i.test(coursesRes.error.message)) {
    return { snapshot: null, schemaError: true, error: coursesRes.error.message };
  }

  const studentsRes = await fetchAllRows<AnalyticsStudent>(async (from, to) => {
    const res = await sb
      .from("profiles")
      .select("id, full_name, email, mobile, college_id, department, is_active, created_at")
      .eq("role", "student")
      .order("created_at", { ascending: false })
      .range(from, to);
    return { data: (res.data as AnalyticsStudent[] | null) ?? null, error: res.error as Error | null };
  });

  if (studentsRes.error && /relation|does not exist|schema cache/i.test(studentsRes.error.message)) {
    return { snapshot: null, schemaError: true, error: studentsRes.error.message };
  }

  const enrollmentsRes = await fetchAllRows<EnrollmentRow>(async (from, to) => {
    const res = await sb
      .from("enrollments")
      .select("user_id, course_id")
      .range(from, to);
    return { data: (res.data as EnrollmentRow[] | null) ?? null, error: res.error as Error | null };
  });

  const lessonsRes = await fetchAllRows<LessonRow>(async (from, to) => {
    const res = await sb
      .from("lesson_progress")
      .select("user_id, topic_id, completed, last_visited_at")
      .range(from, to);
    return { data: (res.data as LessonRow[] | null) ?? null, error: res.error as Error | null };
  });

  const practiceRes = await fetchAllRows<PracticeRow>(async (from, to) => {
    const res = await sb
      .from("practice_progress")
      .select("user_id, problem_id, status, updated_at, submitted_at")
      .range(from, to);
    return { data: (res.data as PracticeRow[] | null) ?? null, error: res.error as Error | null };
  });

  const premiumRes = await fetchAllRows<{ user_id: string }>(async (from, to) => {
    const res = await sb
      .from("entitlements")
      .select("user_id")
      .eq("product", PRACTICE_PREMIUM_PRODUCT)
      .range(from, to);
    return { data: (res.data as { user_id: string }[] | null) ?? null, error: res.error as Error | null };
  });

  const publishedCourses = (coursesRes.data ?? []).filter((r) => r.published).length;

  return {
    snapshot: {
      students: studentsRes.data,
      colleges: (collegesRes.data ?? []) as AnalyticsCollege[],
      publishedCourses,
      enrollments: enrollmentsRes.data,
      lessons: lessonsRes.data,
      practice: practiceRes.data,
      premiumUserIds: new Set(premiumRes.data.map((r) => r.user_id)),
      fetchedAt: new Date(),
    },
    schemaError: false,
  };
}

export function filtersAreActive(filters: AnalyticsFilters): boolean {
  return Boolean(
    filters.collegeId ||
      filters.departmentKey ||
      filters.courseId ||
      filters.status !== "all"
  );
}

export function computeAnalytics(
  snapshot: AnalyticsSnapshot,
  filters: AnalyticsFilters
): AnalyticsResult {
  const collegeName = new Map(snapshot.colleges.map((c) => [c.id, c.name]));
  const enrollmentsByUser = new Map<string, Set<string>>();
  for (const row of snapshot.enrollments) {
    if (!enrollmentsByUser.has(row.user_id)) enrollmentsByUser.set(row.user_id, new Set());
    enrollmentsByUser.get(row.user_id)!.add(row.course_id);
  }

  const departmentOptionsMap = new Map<string, { label: string; count: number }>();
  for (const s of snapshot.students) {
    const { key, label } = normalizeDepartment(s.department);
    const prev = departmentOptionsMap.get(key);
    if (prev) prev.count += 1;
    else departmentOptionsMap.set(key, { label, count: 1 });
  }
  const departmentOptions = [...departmentOptionsMap.entries()]
    .map(([key, v]) => ({ key, label: v.label, count: v.count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));

  const cohort = snapshot.students.filter((s) => {
    if (filters.collegeId === "unassigned") {
      if (s.college_id) return false;
    } else if (filters.collegeId && s.college_id !== filters.collegeId) {
      return false;
    }
    if (filters.departmentKey) {
      if (normalizeDepartment(s.department).key !== filters.departmentKey) return false;
    }
    if (filters.status === "active" && s.is_active === false) return false;
    if (filters.status === "inactive" && s.is_active !== false) return false;
    if (filters.courseId) {
      const coursesForUser = enrollmentsByUser.get(s.id);
      if (!coursesForUser?.has(filters.courseId)) return false;
    }
    return true;
  });

  const cohortIds = new Set(cohort.map((s) => s.id));
  const filtersActive = filtersAreActive(filters);

  const cohortEnrollments = snapshot.enrollments.filter((e) => cohortIds.has(e.user_id));
  const cohortLessons = snapshot.lessons.filter((l) => cohortIds.has(l.user_id));
  const cohortPractice = snapshot.practice.filter((p) => cohortIds.has(p.user_id));

  const activeStudents = cohort.filter((s) => s.is_active !== false).length;
  const inactiveStudents = Math.max(cohort.length - activeStudents, 0);

  const lessonsCompleted = cohortLessons.filter((l) => l.completed).length;
  const practiceSolved = cohortPractice.filter((p) => p.status === "solved").length;
  const uniqueEnrolled = new Set(cohortEnrollments.map((e) => e.user_id)).size;
  const premiumUnlocked = cohort.filter((s) => snapshot.premiumUserIds.has(s.id)).length;
  const premiumPct = cohort.length ? Math.round((premiumUnlocked / cohort.length) * 100) : 0;

  const now = Date.now();
  const ms7 = 7 * 24 * 60 * 60 * 1000;
  const ms30 = 30 * 24 * 60 * 60 * 1000;
  const lastActivity = new Map<string, number>();

  function bump(userId: string, iso: string | null | undefined) {
    if (!iso || !cohortIds.has(userId)) return;
    const t = new Date(iso).getTime();
    if (Number.isNaN(t)) return;
    const prev = lastActivity.get(userId) ?? 0;
    if (t > prev) lastActivity.set(userId, t);
  }

  for (const l of cohortLessons) bump(l.user_id, l.last_visited_at);
  for (const p of cohortPractice) {
    bump(p.user_id, p.submitted_at);
    bump(p.user_id, p.updated_at);
  }

  let active7d = 0;
  let active30d = 0;
  for (const t of lastActivity.values()) {
    const age = now - t;
    if (age <= ms7) active7d += 1;
    if (age <= ms30) active30d += 1;
  }

  const collegesRepresented = new Set(
    cohort.map((s) => s.college_id).filter(Boolean) as string[]
  ).size;

  // Signup trend (12 weeks) for cohort
  const weeks: ChartDatum[] = [];
  const weekAnchor = startOfWeek(new Date());
  const weekCounts = new Map<string, number>();
  for (let i = 11; i >= 0; i -= 1) {
    const d = new Date(weekAnchor);
    d.setDate(d.getDate() - i * 7);
    const key = weekKey(d);
    weekCounts.set(key, 0);
    weeks.push({ id: key, label: weekLabel(key), value: 0 });
  }
  for (const row of cohort) {
    if (!row.created_at) continue;
    const key = weekKey(new Date(row.created_at));
    if (weekCounts.has(key)) weekCounts.set(key, (weekCounts.get(key) ?? 0) + 1);
  }
  const signupTrend = weeks.map((w) => ({
    ...w,
    value: weekCounts.get(w.id) ?? 0,
  }));

  const collegeCounts = new Map<string, number>();
  for (const row of cohort) {
    const key = row.college_id || "unassigned";
    collegeCounts.set(key, (collegeCounts.get(key) ?? 0) + 1);
  }
  const byCollege = topN(
    [...collegeCounts.entries()].map(([id, value]) => ({
      id,
      label: id === "unassigned" ? "Unassigned" : collegeName.get(id) || "Unknown college",
      value,
    })),
    8
  );

  const deptCounts = new Map<string, { label: string; value: number }>();
  for (const row of cohort) {
    const { key, label } = normalizeDepartment(row.department);
    const prev = deptCounts.get(key);
    if (prev) prev.value += 1;
    else deptCounts.set(key, { label, value: 1 });
  }
  const byDepartment = topN(
    [...deptCounts.entries()].map(([id, v]) => ({
      id,
      label: v.label,
      value: v.value,
    })),
    8
  );

  const enrollmentCounts = new Map<string, number>();
  for (const course of courses) enrollmentCounts.set(course.id, 0);
  for (const row of cohortEnrollments) {
    enrollmentCounts.set(row.course_id, (enrollmentCounts.get(row.course_id) ?? 0) + 1);
  }
  const byCourse = courses.map((course) => ({
    id: course.id,
    label: courseShortName(course.id as CourseId),
    value: enrollmentCounts.get(course.id) ?? 0,
    color: courseBarColor(course.id),
  }));

  const statusMix: ChartDatum[] = [
    { id: "active", label: "Active", value: activeStudents, color: "#8cc63e" },
    { id: "inactive", label: "Inactive", value: inactiveStudents, color: "#94a3b8" },
  ];

  const premiumMix: ChartDatum[] = [
    {
      id: "premium",
      label: "Practice unlocked",
      value: premiumUnlocked,
      color: "#0f75bd",
    },
    {
      id: "locked",
      label: "No premium",
      value: Math.max(cohort.length - premiumUnlocked, 0),
      color: "#94a3b8",
    },
  ];

  const startedLesson = new Set(cohortLessons.map((l) => l.user_id));
  const completedLessonUsers = new Set(
    cohortLessons.filter((l) => l.completed).map((l) => l.user_id)
  );
  const solvedPracticeUsers = new Set(
    cohortPractice.filter((p) => p.status === "solved").map((p) => p.user_id)
  );

  const funnel: ChartDatum[] = [
    { id: "registered", label: "Registered", value: cohort.length, color: "#64748b" },
    { id: "enrolled", label: "Enrolled", value: uniqueEnrolled, color: "#0ea5e9" },
    { id: "started", label: "Started lesson", value: startedLesson.size, color: "#0f75bd" },
    {
      id: "completed",
      label: "Completed lesson",
      value: completedLessonUsers.size,
      color: "#8cc63e",
    },
    {
      id: "solved",
      label: "Solved practice",
      value: solvedPracticeUsers.size,
      color: "#f59e0b",
    },
  ];

  // Per-user practice / lesson counts for averages
  const practiceByUser = new Map<string, number>();
  for (const p of cohortPractice) {
    if (p.status !== "solved") continue;
    practiceByUser.set(p.user_id, (practiceByUser.get(p.user_id) ?? 0) + 1);
  }
  const lessonsByUser = new Map<string, number>();
  for (const l of cohortLessons) {
    if (!l.completed) continue;
    lessonsByUser.set(l.user_id, (lessonsByUser.get(l.user_id) ?? 0) + 1);
  }

  const byCollegeStudents = new Map<string, AnalyticsStudent[]>();
  for (const s of cohort) {
    const key = s.college_id || "unassigned";
    if (!byCollegeStudents.has(key)) byCollegeStudents.set(key, []);
    byCollegeStudents.get(key)!.push(s);
  }

  const collegeLeaderboard: CollegeLeaderboardRow[] = [...byCollegeStudents.entries()]
    .map(([id, list]) => {
      const premiumCount = list.filter((s) => snapshot.premiumUserIds.has(s.id)).length;
      const practiceSum = list.reduce((sum, s) => sum + (practiceByUser.get(s.id) ?? 0), 0);
      const lessonSum = list.reduce((sum, s) => sum + (lessonsByUser.get(s.id) ?? 0), 0);
      return {
        id,
        name: id === "unassigned" ? "Unassigned" : collegeName.get(id) || "Unknown college",
        students: list.length,
        premiumCount,
        premiumPct: list.length ? Math.round((premiumCount / list.length) * 100) : 0,
        practiceSolved: practiceSum,
        avgPracticeSolved: list.length ? Math.round((practiceSum / list.length) * 10) / 10 : 0,
        lessonsCompleted: lessonSum,
        avgLessonsCompleted: list.length ? Math.round((lessonSum / list.length) * 10) / 10 : 0,
      };
    })
    .sort((a, b) => b.students - a.students || a.name.localeCompare(b.name))
    .slice(0, 12);

  const comboCounts = new Map<string, DeptCollegeRow>();
  for (const s of cohort) {
    const dept = normalizeDepartment(s.department).label;
    const college = s.college_id
      ? collegeName.get(s.college_id) || "Unknown college"
      : "Unassigned";
    const key = `${dept}|||${college}`;
    const prev = comboCounts.get(key);
    if (prev) prev.students += 1;
    else comboCounts.set(key, { department: dept, college, students: 1 });
  }
  const deptCollege = [...comboCounts.values()]
    .sort((a, b) => b.students - a.students)
    .slice(0, 15);

  const recent = [...cohort]
    .sort((a, b) => {
      const ta = a.created_at ? new Date(a.created_at).getTime() : 0;
      const tb = b.created_at ? new Date(b.created_at).getTime() : 0;
      return tb - ta;
    })
    .slice(0, 10);

  return {
    filtersActive,
    platformStudents: snapshot.students.length,
    stats: {
      students: cohort.length,
      activeStudents,
      collegesRepresented,
      publishedCourses: snapshot.publishedCourses,
      catalogCourses: courses.length,
      enrollments: cohortEnrollments.length,
      uniqueEnrolled,
      lessonsCompleted,
      practiceSolved,
      premiumUnlocked,
      premiumPct,
      active7d,
      active30d,
    },
    signupTrend,
    statusMix,
    byCollege,
    byDepartment,
    byCourse,
    premiumMix,
    funnel,
    collegeLeaderboard,
    deptCollege,
    departmentOptions,
    recent,
    cohort,
    cohortIds,
  };
}

export function exportCohortCsv(
  result: AnalyticsResult,
  snapshot: AnalyticsSnapshot,
  collegeName: Map<string, string>
): string {
  const practiceByUser = new Map<string, number>();
  for (const p of snapshot.practice) {
    if (p.status !== "solved" || !result.cohortIds.has(p.user_id)) continue;
    practiceByUser.set(p.user_id, (practiceByUser.get(p.user_id) ?? 0) + 1);
  }
  const lessonsByUser = new Map<string, number>();
  for (const l of snapshot.lessons) {
    if (!l.completed || !result.cohortIds.has(l.user_id)) continue;
    lessonsByUser.set(l.user_id, (lessonsByUser.get(l.user_id) ?? 0) + 1);
  }
  const enrollmentsByUser = new Map<string, string[]>();
  for (const e of snapshot.enrollments) {
    if (!result.cohortIds.has(e.user_id)) continue;
    if (!enrollmentsByUser.has(e.user_id)) enrollmentsByUser.set(e.user_id, []);
    enrollmentsByUser.get(e.user_id)!.push(e.course_id);
  }

  const header = [
    "full_name",
    "email",
    "mobile",
    "college",
    "department",
    "is_active",
    "premium",
    "courses",
    "lessons_completed",
    "practice_solved",
    "joined",
  ];

  const lines = [header.join(",")];
  for (const s of result.cohort) {
    const row = [
      s.full_name,
      s.email,
      s.mobile,
      s.college_id ? collegeName.get(s.college_id) || "" : "Unassigned",
      normalizeDepartment(s.department).label,
      s.is_active === false ? "false" : "true",
      snapshot.premiumUserIds.has(s.id) ? "yes" : "no",
      (enrollmentsByUser.get(s.id) ?? []).join("|"),
      String(lessonsByUser.get(s.id) ?? 0),
      String(practiceByUser.get(s.id) ?? 0),
      s.created_at ? new Date(s.created_at).toISOString().slice(0, 10) : "",
    ].map(csvEscape);
    lines.push(row.join(","));
  }
  return lines.join("\n");
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}
