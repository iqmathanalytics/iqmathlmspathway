"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  Building2,
  Download,
  GraduationCap,
  Loader2,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { getSupabase } from "@/lib/supabase/client";
import { courses, courseShortName } from "@/data/courses";
import { useColleges } from "@/hooks/useColleges";
import { CollegeCombobox } from "@/components/ui/CollegeCombobox";
import {
  AreaTrendChart,
  DonutChart,
  HorizontalBarChart,
  VerticalBarChart,
} from "@/components/admin/AdminCharts";
import {
  computeAnalytics,
  EMPTY_ANALYTICS_FILTERS,
  exportCohortCsv,
  loadAnalyticsSnapshot,
  type AnalyticsFilters,
  type AnalyticsResult,
  type AnalyticsSnapshot,
  type AnalyticsStatusFilter,
} from "@/lib/admin-analytics";
import type { CollegeRow, CourseId } from "@/lib/types";

export default function AdminOverviewPage() {
  const { colleges: collegeRows, loading: collegesLoading } = useColleges(false, {
    includeCatalog: false,
  });
  const [snapshot, setSnapshot] = useState<AnalyticsSnapshot | null>(null);
  const [filters, setFilters] = useState<AnalyticsFilters>(EMPTY_ANALYTICS_FILTERS);
  const [schemaError, setSchemaError] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async (soft = false) => {
    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }
    if (soft) setRefreshing(true);
    else setLoading(true);
    setLoadError(null);

    const { snapshot: next, schemaError: missing, error } = await loadAnalyticsSnapshot(sb);
    if (missing) {
      setSchemaError(true);
      setSnapshot(null);
    } else if (!next) {
      setLoadError(error || "Could not load analytics.");
      setSnapshot(null);
    } else {
      setSchemaError(false);
      setSnapshot(next);
    }
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    void refresh(false);
  }, [refresh]);

  const result: AnalyticsResult | null = useMemo(() => {
    if (!snapshot) return null;
    return computeAnalytics(snapshot, filters);
  }, [snapshot, filters]);

  const filterColleges: CollegeRow[] = useMemo(() => {
    const rows = collegeRows.map((c) => ({ ...c }));
    const hasUnassigned = snapshot?.students.some((s) => !s.college_id);
    if (hasUnassigned) {
      rows.unshift({
        id: "unassigned",
        name: "Unassigned",
        code: "",
        city: "",
        archived: false,
        created_at: "",
      });
    }
    return rows;
  }, [collegeRows, snapshot]);

  const collegeNameMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of snapshot?.colleges ?? []) map.set(c.id, c.name);
    return map;
  }, [snapshot]);

  function clearFilters() {
    setFilters(EMPTY_ANALYTICS_FILTERS);
  }

  function downloadCsv() {
    if (!result || !snapshot) return;
    const csv = exportCohortCsv(result, snapshot, collegeNameMap);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `iqmath-students-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (schemaError) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
        Admin tables are not installed yet. In the Supabase SQL Editor, run{" "}
        <code className="rounded bg-white px-1">supabase/RUN_ADMIN.sql</code>, then refresh this
        page.
      </div>
    );
  }

  const stats = result?.stats;
  const signupTotal = result?.signupTrend.reduce((sum, d) => sum + d.value, 0) ?? 0;
  const updatedLabel = snapshot
    ? snapshot.fetchedAt.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : null;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Analytics dashboard</h2>
          <p className="mt-1 text-sm text-gray-500">
            Live college- and department-wise student, course, and practice analytics.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {updatedLabel && (
            <span className="text-xs text-gray-500">Updated {updatedLabel}</span>
          )}
          <button
            type="button"
            onClick={() => void refresh(true)}
            disabled={loading || refreshing}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-gray-50 disabled:opacity-50"
          >
            {refreshing ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <RefreshCw className="h-3.5 w-3.5" />
            )}
            Refresh
          </button>
          <button
            type="button"
            onClick={downloadCsv}
            disabled={!result || result.cohort.length === 0}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500 disabled:opacity-50"
          >
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      {loadError && (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {loadError}
        </p>
      )}

      {/* Filters */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="text-sm font-semibold text-gray-900">Filters</p>
          {result?.filtersActive && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-brand-700 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">College</label>
            <CollegeCombobox
              colleges={filterColleges}
              value={filters.collegeId}
              onChange={(collegeId) => setFilters((f) => ({ ...f, collegeId }))}
              loading={collegesLoading}
              placeholder="All colleges"
              emptyLabel="All colleges"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Department</label>
            <select
              value={filters.departmentKey}
              onChange={(e) =>
                setFilters((f) => ({ ...f, departmentKey: e.target.value }))
              }
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="">All departments</option>
              {(result?.departmentOptions ?? []).map((d) => (
                <option key={d.key} value={d.key}>
                  {d.label} ({d.count})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Status</label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters((f) => ({
                  ...f,
                  status: e.target.value as AnalyticsStatusFilter,
                }))
              }
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Course enrolled</label>
            <select
              value={filters.courseId}
              onChange={(e) => setFilters((f) => ({ ...f, courseId: e.target.value }))}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="">All courses</option>
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {courseShortName(c.id as CourseId)}
                </option>
              ))}
            </select>
          </div>
        </div>
        {result && (
          <p className="mt-3 text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold tabular-nums text-gray-800">
              {result.stats.students}
            </span>{" "}
            of{" "}
            <span className="font-semibold tabular-nums text-gray-800">
              {result.platformStudents}
            </span>{" "}
            students
            {result.filtersActive ? " (filtered)" : ""}.
          </p>
        )}
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          href="/admin/students"
          icon={Users}
          label="Students"
          value={loading ? "…" : String(stats?.students ?? 0)}
          hint={loading ? undefined : `${stats?.activeStudents ?? 0} active`}
        />
        <StatCard
          href="/admin/colleges"
          icon={Building2}
          label="Colleges in view"
          value={loading ? "…" : String(stats?.collegesRepresented ?? 0)}
          hint={
            loading
              ? undefined
              : `${snapshot?.colleges.length ?? 0} in catalog`
          }
        />
        <StatCard
          href="/admin/courses"
          icon={GraduationCap}
          label="Published courses"
          value={
            loading
              ? "…"
              : `${stats?.publishedCourses ?? 0} / ${stats?.catalogCourses ?? courses.length}`
          }
        />
        <StatCard
          href="/admin/students"
          icon={TrendingUp}
          label="Course enrollments"
          value={loading ? "…" : String(stats?.enrollments ?? 0)}
          hint={
            loading
              ? undefined
              : `${stats?.uniqueEnrolled ?? 0} unique students`
          }
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
        <StatCard
          href="/admin/students"
          icon={ShieldCheck}
          label="Practice premium"
          value={loading ? "…" : String(stats?.premiumUnlocked ?? 0)}
          hint={loading ? undefined : `${stats?.premiumPct ?? 0}% of cohort`}
        />
        <StatCard
          href="/admin/students"
          icon={Activity}
          label="Active learners"
          value={loading ? "…" : String(stats?.active7d ?? 0)}
          hint={
            loading
              ? undefined
              : `${stats?.active30d ?? 0} in last 30 days · ${stats?.active7d ?? 0} in 7d`
          }
        />
      </div>

      {/* Charts */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <ChartCard
          title="Student signups"
          subtitle={`Last 12 weeks · ${signupTotal} new in view`}
        >
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <AreaTrendChart data={result.signupTrend} />
          )}
        </ChartCard>

        <ChartCard title="Account status" subtitle="Active vs inactive in current filters">
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <DonutChart
              data={result.statusMix}
              centerLabel="students"
              centerValue={String(stats?.students ?? 0)}
            />
          )}
        </ChartCard>

        <ChartCard title="Enrollments by course" subtitle="Seats for students in view">
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <VerticalBarChart data={result.byCourse} />
          )}
        </ChartCard>

        <ChartCard title="Premium coverage" subtitle="Practice unlock vs locked">
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <DonutChart
              data={result.premiumMix}
              centerLabel="premium"
              centerValue={`${stats?.premiumPct ?? 0}%`}
              emptyLabel="No students in view"
            />
          )}
        </ChartCard>

        <ChartCard title="Students by college" subtitle="Top colleges in view">
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <HorizontalBarChart data={result.byCollege} />
          )}
        </ChartCard>

        <ChartCard title="Students by department" subtitle="Normalized department names">
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <HorizontalBarChart
              data={result.byDepartment}
              emptyLabel="No department data yet"
            />
          )}
        </ChartCard>

        <ChartCard
          title="Learning funnel"
          subtitle="Registered → enrolled → lesson → practice"
          className="lg:col-span-2"
        >
          {loading || !result ? (
            <ChartSkeleton />
          ) : (
            <VerticalBarChart data={result.funnel} emptyLabel="No cohort data" />
          )}
        </ChartCard>
      </div>

      {/* College leaderboard */}
      <h2 className="mt-10 text-lg font-semibold text-gray-900">College leaderboard</h2>
      <p className="mt-1 text-sm text-gray-500">
        Students, premium coverage, and average activity by college (current filters).
      </p>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {loading ? (
          <div className="flex justify-center p-10">
            <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
          </div>
        ) : !result || result.collegeLeaderboard.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No college data for this filter.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">College</th>
                  <th className="px-4 py-3">Students</th>
                  <th className="px-4 py-3">Premium</th>
                  <th className="px-4 py-3">Practice solved</th>
                  <th className="px-4 py-3">Avg practice</th>
                  <th className="px-4 py-3">Lessons done</th>
                  <th className="px-4 py-3">Avg lessons</th>
                </tr>
              </thead>
              <tbody>
                {result.collegeLeaderboard.map((row) => (
                  <tr key={row.id} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">{row.students}</td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">
                      {row.premiumCount}{" "}
                      <span className="text-gray-400">({row.premiumPct}%)</span>
                    </td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">
                      {row.practiceSolved}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">
                      {row.avgPracticeSolved}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">
                      {row.lessonsCompleted}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">
                      {row.avgLessonsCompleted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Department × college */}
      <h2 className="mt-10 text-lg font-semibold text-gray-900">Department × college</h2>
      <p className="mt-1 text-sm text-gray-500">
        Top combinations by student count in the current filter set.
      </p>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {loading ? (
          <div className="flex justify-center p-10">
            <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
          </div>
        ) : !result || result.deptCollege.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No combinations yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">College</th>
                  <th className="px-4 py-3">Students</th>
                </tr>
              </thead>
              <tbody>
                {result.deptCollege.map((row) => (
                  <tr
                    key={`${row.department}-${row.college}`}
                    className="border-t border-gray-100"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{row.department}</td>
                    <td className="px-4 py-3 text-gray-700">{row.college}</td>
                    <td className="px-4 py-3 tabular-nums text-gray-700">{row.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent students */}
      <h2 className="mt-10 text-lg font-semibold text-gray-900">Recent students</h2>
      <p className="mt-1 text-sm text-gray-500">Newest registrations matching current filters.</p>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {loading ? (
          <div className="flex justify-center p-10">
            <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
          </div>
        ) : !result || result.recent.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No students match these filters.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">College</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Joined</th>
                </tr>
              </thead>
              <tbody>
                {result.recent.map((s) => (
                  <tr key={s.id} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <Link
                        href={`/admin/students?id=${s.id}`}
                        className="hover:underline"
                      >
                        {s.full_name || "—"}
                      </Link>
                    </td>
                    <td className="max-w-[14rem] truncate px-4 py-3 text-gray-600">
                      {s.email || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {s.college_id
                        ? collegeNameMap.get(s.college_id) || "—"
                        : "Unassigned"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {(s.department || "").trim() || "Unspecified"}
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {s.created_at
                        ? new Date(s.created_at).toLocaleDateString()
                        : "—"}
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
