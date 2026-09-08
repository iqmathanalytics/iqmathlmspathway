"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  Building2,
  GraduationCap,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { getSupabase } from "@/lib/supabase/client";
import { schemaMissing } from "@/lib/admin";
import { courses, courseShortName } from "@/data/courses";
import type { CourseId, ProfileRow } from "@/lib/types";
import {
  AreaTrendChart,
  DonutChart,
  HorizontalBarChart,
  VerticalBarChart,
  type ChartDatum,
} from "@/components/admin/AdminCharts";

interface OverviewStats {
  students: number;
  activeStudents: number;
  colleges: number;
  published: number;
  enrollments: number;
  practiceSolved: number;
  lessonsCompleted: number;
}

interface CollegeMeta {
  id: string;
  name: string;
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
  const d = startOfWeek(date);
  return d.toISOString().slice(0, 10);
}

function weekLabel(isoDate: string): string {
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function topN(data: ChartDatum[], n: number): ChartDatum[] {
  const sorted = [...data].sort((a, b) => b.value - a.value);
  if (sorted.length <= n) return sorted;
  const head = sorted.slice(0, n - 1);
  const rest = sorted.slice(n - 1).reduce((sum, d) => sum + d.value, 0);
  return [...head, { id: "other", label: "Other", value: rest, color: "#94a3b8" }];
}

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<OverviewStats | null>(null);
  const [recent, setRecent] = useState<ProfileRow[]>([]);
  const [signupTrend, setSignupTrend] = useState<ChartDatum[]>([]);
  const [byCollege, setByCollege] = useState<ChartDatum[]>([]);
  const [byDepartment, setByDepartment] = useState<ChartDatum[]>([]);
  const [byCourse, setByCourse] = useState<ChartDatum[]>([]);
  const [statusMix, setStatusMix] = useState<ChartDatum[]>([]);
  const [schemaError, setSchemaError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }
    const client = sb;

    async function load() {
      const [
        studentsRes,
        collegesRes,
        coursesRes,
        recentRes,
        studentRowsRes,
        enrollmentsRes,
        practiceRes,
        lessonsRes,
      ] = await Promise.all([
        client.from("profiles").select("id", { count: "exact", head: true }).eq("role", "student"),
        client.from("colleges").select("id, name").eq("archived", false),
        client.from("course_settings").select("course_id, published"),
        client
          .from("profiles")
          .select("*")
          .eq("role", "student")
          .order("created_at", { ascending: false })
          .limit(8),
        client
          .from("profiles")
          .select("id, college_id, department, is_active, created_at")
          .eq("role", "student"),
        client.from("enrollments").select("course_id"),
        client
          .from("practice_progress")
          .select("problem_id", { count: "exact", head: true })
          .eq("status", "solved"),
        client
          .from("lesson_progress")
          .select("topic_id", { count: "exact", head: true })
          .eq("completed", true),
      ]);

      if (
        schemaMissing(studentsRes.error) ||
        schemaMissing(collegesRes.error) ||
        schemaMissing(coursesRes.error)
      ) {
        setSchemaError(true);
        setLoading(false);
        return;
      }

      const collegeList = (collegesRes.data ?? []) as CollegeMeta[];
      const collegeName = new Map(collegeList.map((c) => [c.id, c.name]));
      const published =
        (coursesRes.data ?? []).filter((r) => r.published).length || 0;

      const studentRows = (studentRowsRes.data ?? []) as Array<{
        id: string;
        college_id: string | null;
        department: string | null;
        is_active: boolean | null;
        created_at: string | null;
      }>;

      const activeStudents = studentRows.filter((s) => s.is_active !== false).length;
      const inactiveStudents = Math.max(studentRows.length - activeStudents, 0);

      const weeks: ChartDatum[] = [];
      const now = startOfWeek(new Date());
      const weekCounts = new Map<string, number>();
      for (let i = 11; i >= 0; i -= 1) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const key = weekKey(d);
        weekCounts.set(key, 0);
        weeks.push({ id: key, label: weekLabel(key), value: 0 });
      }
      for (const row of studentRows) {
        if (!row.created_at) continue;
        const key = weekKey(new Date(row.created_at));
        if (weekCounts.has(key)) {
          weekCounts.set(key, (weekCounts.get(key) ?? 0) + 1);
        }
      }
      setSignupTrend(
        weeks.map((w) => ({
          ...w,
          value: weekCounts.get(w.id) ?? 0,
        }))
      );

      const collegeCounts = new Map<string, number>();
      for (const row of studentRows) {
        const key = row.college_id || "unassigned";
        collegeCounts.set(key, (collegeCounts.get(key) ?? 0) + 1);
      }
      setByCollege(
        topN(
          [...collegeCounts.entries()].map(([id, value]) => ({
            id,
            label: id === "unassigned" ? "Unassigned" : collegeName.get(id) || "Unknown college",
            value,
          })),
          6
        )
      );

      const deptCounts = new Map<string, number>();
      for (const row of studentRows) {
        const label = (row.department || "").trim() || "Unspecified";
        deptCounts.set(label, (deptCounts.get(label) ?? 0) + 1);
      }
      setByDepartment(
        topN(
          [...deptCounts.entries()].map(([label, value]) => ({
            id: label.toLowerCase(),
            label,
            value,
          })),
          6
        )
      );

      const enrollmentCounts = new Map<string, number>();
      for (const course of courses) enrollmentCounts.set(course.id, 0);
      for (const row of enrollmentsRes.data ?? []) {
        const id = String((row as { course_id: string }).course_id);
        enrollmentCounts.set(id, (enrollmentCounts.get(id) ?? 0) + 1);
      }
      setByCourse(
        courses.map((course) => ({
          id: course.id,
          label: courseShortName(course.id as CourseId),
          value: enrollmentCounts.get(course.id) ?? 0,
          color:
            course.color === "violet"
              ? "#7c3aed"
              : course.color === "sky"
                ? "#0ea5e9"
                : "#0f75bd",
        }))
      );

      setStatusMix([
        { id: "active", label: "Active", value: activeStudents, color: "#8cc63e" },
        { id: "inactive", label: "Inactive", value: inactiveStudents, color: "#94a3b8" },
      ]);

      setStats({
        students: studentsRes.count ?? studentRows.length,
        activeStudents,
        colleges: collegeList.length,
        published,
        enrollments: enrollmentsRes.data?.length ?? 0,
        practiceSolved: practiceRes.count ?? 0,
        lessonsCompleted: lessonsRes.count ?? 0,
      });
      setRecent((recentRes.data ?? []) as ProfileRow[]);
      setLoading(false);
    }

    void load();
  }, []);

  const signupTotal = useMemo(
    () => signupTrend.reduce((sum, d) => sum + d.value, 0),
    [signupTrend]
  );

  if (schemaError) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
        Admin tables are not installed yet. In the Supabase SQL Editor, run{" "}
        <code className="rounded bg-white px-1">supabase/RUN_ADMIN.sql</code>, then refresh this
        page.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Platform overview</h2>
        <p className="mt-1 text-sm text-gray-500">
          Live student, college, enrollment, and learning analytics.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          href="/admin/students"
          icon={Users}
          label="Students"
          value={loading ? "…" : String(stats?.students ?? 0)}
          hint={
            loading
              ? undefined
              : `${stats?.activeStudents ?? 0} active`
          }
        />
        <StatCard
          href="/admin/colleges"
          icon={Building2}
          label="Colleges"
          value={loading ? "…" : String(stats?.colleges ?? 0)}
        />
        <StatCard
          href="/admin/courses"
          icon={GraduationCap}
          label="Published courses"
          value={loading ? "…" : `${stats?.published ?? 0} / ${courses.length}`}
        />
        <StatCard
          href="/admin/students"
          icon={TrendingUp}
          label="Course enrollments"
          value={loading ? "…" : String(stats?.enrollments ?? 0)}
        />
        <StatCard
          href="/admin/students"
          icon={Activity}
          label="Lessons completed"
          value={loading ? "…" : String(stats?.lessonsCompleted ?? 0)}
        />
        <StatCard
          href="/admin/students"
          icon={UserCheck}
          label="Practice solved"
          value={loading ? "…" : String(stats?.practiceSolved ?? 0)}
        />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <ChartCard
          title="Student signups"
          subtitle={`Last 12 weeks · ${signupTotal} new`}
        >
          {loading ? <ChartSkeleton /> : <AreaTrendChart data={signupTrend} />}
        </ChartCard>

        <ChartCard title="Account status" subtitle="Active vs inactive students">
          {loading ? (
            <ChartSkeleton />
          ) : (
            <DonutChart
              data={statusMix}
              centerLabel="students"
              centerValue={String(stats?.students ?? 0)}
            />
          )}
        </ChartCard>

        <ChartCard title="Enrollments by course" subtitle="Assigned course seats">
          {loading ? <ChartSkeleton /> : <VerticalBarChart data={byCourse} />}
        </ChartCard>

        <ChartCard title="Students by college" subtitle="Top colleges">
          {loading ? <ChartSkeleton /> : <HorizontalBarChart data={byCollege} />}
        </ChartCard>

        <ChartCard
          title="Students by department"
          subtitle="Top departments"
          className="lg:col-span-2"
        >
          {loading ? (
            <ChartSkeleton />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <DonutChart
                data={byDepartment}
                centerLabel="students"
                centerValue={String(stats?.students ?? 0)}
                emptyLabel="No department data yet"
              />
              <HorizontalBarChart
                data={byDepartment}
                emptyLabel="No department data yet"
              />
            </div>
          )}
        </ChartCard>
      </div>

      <h2 className="mt-10 text-lg font-semibold text-gray-900">Recent students</h2>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {recent.length === 0 && !loading ? (
          <p className="p-6 text-sm text-gray-500">No students registered yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Mobile</th>
                  <th className="px-4 py-3">Joined</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((s) => (
                  <tr key={s.id} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <Link href={`/admin/students?id=${s.id}`} className="hover:underline">
                        {s.full_name || "—"}
                      </Link>
                    </td>
                    <td className="max-w-[14rem] truncate px-4 py-3 text-gray-600">
                      {s.email || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{s.mobile || "—"}</td>
                    <td className="px-4 py-3 text-gray-500">
                      {s.created_at ? new Date(s.created_at).toLocaleDateString() : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  href,
  icon: Icon,
  label,
  value,
  hint,
}: {
  href: string;
  icon: typeof Users;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
    >
      <Icon className="h-5 w-5 text-brand-600" />
      <p className="mt-3 text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      {hint ? <p className="mt-1 text-xs text-gray-400">{hint}</p> : null}
    </Link>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ""}`}
    >
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {subtitle ? <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function ChartSkeleton() {
  return <div className="h-40 animate-pulse rounded-lg bg-gray-100" />;
}
