"use client";

import { FormEvent, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import { useColleges } from "@/hooks/useColleges";
import { getSupabase } from "@/lib/supabase/client";
import { schemaMissing } from "@/lib/admin";
import { PRACTICE_PREMIUM_PRODUCT } from "@/lib/practice-config";
import type { CollegeRow, CourseId, ProfileRow } from "@/lib/types";
import { DEPARTMENT_OPTIONS } from "@/data/departments";
import { Loader2, Search, Unlock, Lock } from "lucide-react";

interface StudentExtras {
  enrollments: CourseId[];
  lessonsCompleted: number;
  lessonsTotal: number;
  practiceSolved: number;
  lastVisited: string | null;
  hasPremium: boolean;
}

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

const ENTITLEMENT_CHUNK = 80;

function StudentsAdminInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("id");
  const { colleges } = useColleges(true);
  const [students, setStudents] = useState<ProfileRow[]>([]);
  const [query, setQuery] = useState("");
  const [collegeFilter, setCollegeFilter] = useState("");
  const [schemaError, setSchemaError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<StudentExtras | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [premiumIds, setPremiumIds] = useState<Set<string>>(new Set());
  const [bulkBusy, setBulkBusy] = useState(false);
  const [bulkMessage, setBulkMessage] = useState<string | null>(null);
  const [bulkError, setBulkError] = useState<string | null>(null);

  const [editName, setEditName] = useState("");
  const [editMobile, setEditMobile] = useState("");
  const [editCollege, setEditCollege] = useState("");
  const [editDept, setEditDept] = useState("");
  const [editActive, setEditActive] = useState(true);
  const [editCourses, setEditCourses] = useState<CourseId[]>([]);
  const [editPremium, setEditPremium] = useState(false);

  const collegeMap = useMemo(() => {
    const map = new Map<string, CollegeRow>();
    for (const c of colleges) map.set(c.id, c);
    return map;
  }, [colleges]);

  const loadStudents = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) return;
    const { data, error } = await sb
      .from("profiles")
      .select("*")
      .eq("role", "student")
      .order("created_at", { ascending: false });
    if (schemaMissing(error)) {
      setSchemaError(true);
      setLoading(false);
      return;
    }
    setStudents((data ?? []) as ProfileRow[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadStudents();
  }, [loadStudents]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((s) => {
      if (collegeFilter && s.college_id !== collegeFilter) return false;
      if (!q) return true;
      return [s.full_name, s.email, s.mobile, s.department]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [students, query, collegeFilter]);

  const filteredIds = useMemo(() => filtered.map((s) => s.id), [filtered]);

  const loadPremiumIds = useCallback(async (userIds: string[]) => {
    const sb = getSupabase();
    if (!sb || userIds.length === 0) {
      setPremiumIds(new Set());
      return;
    }
    const found = new Set<string>();
    for (let i = 0; i < userIds.length; i += ENTITLEMENT_CHUNK) {
      const chunk = userIds.slice(i, i + ENTITLEMENT_CHUNK);
      const { data, error } = await sb
        .from("entitlements")
        .select("user_id")
        .eq("product", PRACTICE_PREMIUM_PRODUCT)
        .in("user_id", chunk);
      if (error) {
        setBulkError(error.message);
        break;
      }
      for (const row of data ?? []) {
        if (row.user_id) found.add(row.user_id as string);
      }
    }
    setPremiumIds(found);
  }, []);

  useEffect(() => {
    void loadPremiumIds(filteredIds);
  }, [filteredIds, loadPremiumIds]);

  const selected = students.find((s) => s.id === selectedId) ?? null;
  const filteredCollegeName = collegeFilter
    ? collegeMap.get(collegeFilter)?.name ?? "Selected college"
    : null;
  const needGrant = filtered.filter((s) => !premiumIds.has(s.id)).length;
  const needRevoke = filtered.filter((s) => premiumIds.has(s.id)).length;

  const loadDetail = useCallback(async (student: ProfileRow) => {
    const sb = getSupabase();
    if (!sb) return;
    setDetailLoading(true);
    const [enrollRes, lessonRes, practiceRes, entRes] = await Promise.all([
      sb.from("enrollments").select("course_id").eq("user_id", student.id),
      sb
        .from("lesson_progress")
        .select("topic_id, completed, last_visited_at")
        .eq("user_id", student.id),
      sb
        .from("practice_progress")
        .select("problem_id, status")
        .eq("user_id", student.id)
        .eq("status", "solved"),
      sb
        .from("entitlements")
        .select("id")
        .eq("user_id", student.id)
        .eq("product", PRACTICE_PREMIUM_PRODUCT)
        .maybeSingle(),
    ]);

    const enrolled = ((enrollRes.data ?? []).map((r) => r.course_id) as CourseId[]).filter((id) =>
      courses.some((c) => c.id === id)
    );
    const courseIds = enrolled.length ? enrolled : (courses.map((c) => c.id) as CourseId[]);
    const topicIds = new Set(
      courseIds.flatMap((id) => getModulesByCourse(id).flatMap((m) => m.topics.map((t) => t.id)))
    );
    const lessonsCompleted = (lessonRes.data ?? []).filter(
      (r) => r.completed && topicIds.has(r.topic_id)
    ).length;
    const lastVisited =
      (lessonRes.data ?? [])
        .map((r) => r.last_visited_at)
        .filter(Boolean)
        .sort()
        .at(-1) ?? null;

    setDetail({
      enrollments: enrolled,
      lessonsCompleted,
      lessonsTotal: topicIds.size,
      practiceSolved: practiceRes.data?.length ?? 0,
      lastVisited,
      hasPremium: Boolean(entRes.data),
    });
    setEditName(student.full_name);
    setEditMobile(student.mobile);
    setEditCollege(student.college_id ?? "");
    setEditDept(student.department ?? "");
    setEditActive(student.is_active !== false);
    setEditCourses(enrolled);
    setEditPremium(Boolean(entRes.data));
    setDetailLoading(false);
  }, []);

  useEffect(() => {
    if (selected) void loadDetail(selected);
    else setDetail(null);
  }, [selected, loadDetail]);

  function openStudent(id: string) {
    router.replace(`/admin/students?id=${id}`);
  }

  async function grantPracticeToFiltered() {
    if (!collegeFilter || filtered.length === 0) return;
    const targets = filtered.filter((s) => !premiumIds.has(s.id));
    if (targets.length === 0) {
      setBulkMessage("All filtered students already have practice access.");
      setBulkError(null);
      return;
    }
    const collegeLabel = filteredCollegeName ?? "this college";
    if (
      !window.confirm(
        `Grant practice premium to ${targets.length} student(s) at ${collegeLabel}?`
      )
    ) {
      return;
    }
    const sb = getSupabase();
    if (!sb) return;
    setBulkBusy(true);
    setBulkError(null);
    setBulkMessage(null);
    for (let i = 0; i < targets.length; i += ENTITLEMENT_CHUNK) {
      const chunk = targets.slice(i, i + ENTITLEMENT_CHUNK);
      const { error } = await sb.from("entitlements").upsert(
        chunk.map((s) => ({
          user_id: s.id,
          product: PRACTICE_PREMIUM_PRODUCT,
        })),
        { onConflict: "user_id,product", ignoreDuplicates: true }
      );
      if (error) {
        setBulkBusy(false);
        setBulkError(`Could not grant practice access: ${error.message}`);
        return;
      }
    }
    await loadPremiumIds(filteredIds);
    if (selected && targets.some((t) => t.id === selected.id)) {
      await loadDetail(selected);
    }
    setBulkBusy(false);
    setBulkMessage(`Granted practice access to ${targets.length} student(s).`);
  }

  async function revokePracticeFromFiltered() {
    if (!collegeFilter || filtered.length === 0) return;
    const targets = filtered.filter((s) => premiumIds.has(s.id));
    if (targets.length === 0) {
      setBulkMessage("No filtered students currently have practice access.");
      setBulkError(null);
      return;
    }
    const collegeLabel = filteredCollegeName ?? "this college";
    if (
      !window.confirm(
        `Revoke practice premium from ${targets.length} student(s) at ${collegeLabel}?`
      )
    ) {
      return;
    }
    const sb = getSupabase();
    if (!sb) return;
    setBulkBusy(true);
    setBulkError(null);
    setBulkMessage(null);
    for (let i = 0; i < targets.length; i += ENTITLEMENT_CHUNK) {
      const chunk = targets.slice(i, i + ENTITLEMENT_CHUNK);
      const { error } = await sb
        .from("entitlements")
        .delete()
        .eq("product", PRACTICE_PREMIUM_PRODUCT)
        .in(
          "user_id",
          chunk.map((s) => s.id)
        );
      if (error) {
        setBulkBusy(false);
        setBulkError(`Could not revoke practice access: ${error.message}`);
        return;
      }
    }
    await loadPremiumIds(filteredIds);
    if (selected && targets.some((t) => t.id === selected.id)) {
      await loadDetail(selected);
    }
    setBulkBusy(false);
    setBulkMessage(`Revoked practice access from ${targets.length} student(s).`);
  }

  async function saveStudent(e: FormEvent) {
    e.preventDefault();
    if (!selected) return;
    const sb = getSupabase();
    if (!sb) return;
    setSaving(true);
    setFormError(null);

    const { error: pError } = await sb
      .from("profiles")
      .update({
        full_name: editName.trim(),
        mobile: editMobile.trim(),
        college_id: editCollege || null,
        department: editDept.trim(),
        is_active: editActive,
      })
      .eq("id", selected.id);

    if (pError) {
      setSaving(false);
      setFormError(pError.message);
      return;
    }

    const current = new Set(detail?.enrollments ?? []);
    const next = new Set(editCourses);
    const toAdd = editCourses.filter((id) => !current.has(id));
    const toRemove = [...current].filter((id) => !next.has(id));

    if (toAdd.length) {
      const { error } = await sb
        .from("enrollments")
        .insert(toAdd.map((course_id) => ({ user_id: selected.id, course_id })));
      if (error) {
        setSaving(false);
        setFormError(`Could not update enrollments: ${error.message}`);
        return;
      }
    }
    if (toRemove.length) {
      const { error } = await sb
        .from("enrollments")
        .delete()
        .eq("user_id", selected.id)
        .in("course_id", toRemove);
      if (error) {
        setSaving(false);
        setFormError(`Could not remove enrollments: ${error.message}`);
        return;
      }
    }

    if (editPremium && !detail?.hasPremium) {
      const { error } = await sb.from("entitlements").insert({
        user_id: selected.id,
        product: PRACTICE_PREMIUM_PRODUCT,
      });
      if (error) {
        setSaving(false);
        setFormError(`Could not grant premium: ${error.message}`);
        return;
      }
    }
    if (!editPremium && detail?.hasPremium) {
      const { error } = await sb
        .from("entitlements")
        .delete()
        .eq("user_id", selected.id)
        .eq("product", PRACTICE_PREMIUM_PRODUCT);
      if (error) {
        setSaving(false);
        setFormError(`Could not revoke premium: ${error.message}`);
        return;
      }
    }

    setSaving(false);
    await loadStudents();
    await loadPremiumIds(filteredIds);
    await loadDetail({
      ...selected,
      full_name: editName.trim(),
      mobile: editMobile.trim(),
      college_id: editCollege || null,
      department: editDept.trim(),
      is_active: editActive,
    });
  }

  if (schemaError) {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Run <code className="rounded bg-white px-1">supabase/RUN_ADMIN.sql</code> in the SQL Editor.
      </p>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, mobile"
              className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </label>
          <select
            value={collegeFilter}
            onChange={(e) => {
              setCollegeFilter(e.target.value);
              setBulkMessage(null);
              setBulkError(null);
            }}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="">All colleges</option>
            {colleges
              .filter((c) => !c.archived)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mt-3 rounded-xl border border-brand-100 bg-brand-50/60 p-3">
          <p className="text-sm font-semibold text-brand-900">Practice access by college</p>
          <p className="mt-1 text-xs text-brand-800">
            Filter by college, then unlock or revoke practice premium for those students.
            Search further narrows who is included.
          </p>
          {!collegeFilter ? (
            <p className="mt-2 text-xs text-gray-600">
              Select a college above to enable bulk unlock.
            </p>
          ) : (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={bulkBusy || needGrant === 0}
                onClick={() => void grantPracticeToFiltered()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 disabled:opacity-50"
              >
                {bulkBusy ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Unlock className="h-3.5 w-3.5" />
                )}
                Unlock practice ({needGrant})
              </button>
              <button
                type="button"
                disabled={bulkBusy || needRevoke === 0}
                onClick={() => void revokePracticeFromFiltered()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-gray-50 disabled:opacity-50"
              >
                {bulkBusy ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Lock className="h-3.5 w-3.5" />
                )}
                Revoke practice ({needRevoke})
              </button>
              <span className="text-xs text-gray-600">
                {filtered.length} student(s) · {needRevoke} unlocked · {filteredCollegeName}
              </span>
            </div>
          )}
          {bulkMessage && (
            <p className="mt-2 text-xs font-medium text-emerald-700">{bulkMessage}</p>
          )}
          {bulkError && <p className="mt-2 text-xs font-medium text-red-600">{bulkError}</p>}
        </div>

        <p className="mt-2 text-xs text-gray-500">{filtered.length} students</p>
        <div className="mt-3 max-h-[70vh] overflow-auto rounded-xl border border-gray-200 bg-white">
          {loading ? (
            <div className="flex justify-center p-10">
              <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
            </div>
          ) : (
            <table className="min-w-full text-left text-sm">
              <thead className="sticky top-0 bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">College</th>
                  <th className="px-4 py-3">Practice</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr
                    key={s.id}
                    className={`cursor-pointer border-t border-gray-100 ${
                      s.id === selectedId ? "bg-brand-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => openStudent(s.id)}
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{s.full_name || "—"}</div>
                      <div className="text-xs text-gray-500">{s.email || s.mobile}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {s.college_id ? collegeMap.get(s.college_id)?.name ?? "—" : "—"}
                    </td>
                    <td className="px-4 py-3">
                      {premiumIds.has(s.id) ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                          <Unlock className="h-3 w-3" />
                          Unlocked
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                          <Lock className="h-3 w-3" />
                          Locked
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        {!selected ? (
          <p className="text-sm text-gray-500">Select a student to view and edit details.</p>
        ) : detailLoading && !detail ? (
          <div className="flex justify-center p-10">
            <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
          </div>
        ) : (
          <form onSubmit={(e) => void saveStudent(e)} className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{selected.full_name || "Student"}</h2>
              <p className="mt-1 font-mono text-xs text-gray-400">{selected.id}</p>
            </div>
            {detail && (
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Lessons</p>
                  <p className="font-semibold text-gray-900">
                    {detail.lessonsCompleted} / {detail.lessonsTotal}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Practice solved</p>
                  <p className="font-semibold text-gray-900">{detail.practiceSolved}</p>
                </div>
                <div className="col-span-2 rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Last lesson activity</p>
                  <p className="font-semibold text-gray-900">
                    {detail.lastVisited
                      ? new Date(detail.lastVisited).toLocaleString()
                      : "No activity yet"}
                  </p>
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input value={editName} onChange={(e) => setEditName(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input readOnly value={selected.email} className={`${inputClass} bg-gray-50`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input value={editMobile} onChange={(e) => setEditMobile(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">College</label>
              <select
                value={editCollege}
                onChange={(e) => setEditCollege(e.target.value)}
                className={inputClass}
              >
                <option value="">Unassigned</option>
                {colleges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                    {c.archived ? " (archived)" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                list="admin-departments"
                value={editDept}
                onChange={(e) => setEditDept(e.target.value)}
                className={inputClass}
              />
              <datalist id="admin-departments">
                {DEPARTMENT_OPTIONS.map((d) => (
                  <option key={d} value={d} />
                ))}
              </datalist>
            </div>
            <fieldset>
              <legend className="text-sm font-medium text-gray-700">Enrolled courses</legend>
              <div className="mt-2 space-y-2">
                {courses.map((c) => (
                  <label key={c.id} className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={editCourses.includes(c.id)}
                      onChange={(e) => {
                        setEditCourses((prev) =>
                          e.target.checked ? [...prev, c.id] : prev.filter((id) => id !== c.id)
                        );
                      }}
                    />
                    {c.name}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={editPremium}
                onChange={(e) => setEditPremium(e.target.checked)}
              />
              Practice premium (unlock all practice)
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={editActive}
                onChange={(e) => setEditActive(e.target.checked)}
              />
              Account active
            </label>
            {formError && <p className="text-sm text-red-600">{formError}</p>}
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              Save student
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function AdminStudentsPage() {
  return (
    <Suspense fallback={<Loader2 className="h-6 w-6 animate-spin text-brand-600" />}>
      <StudentsAdminInner />
    </Suspense>
  );
}
