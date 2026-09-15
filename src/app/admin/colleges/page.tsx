"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { courses } from "@/data/courses";
import { useColleges } from "@/hooks/useColleges";
import {
  applyCollegePlanToStudents,
  fetchCollegeCourseIds,
  fetchCollegeDepartmentPlans,
  fetchDistinctDepartments,
  saveCollegeCoursePlan,
  saveCollegeDepartmentPlans,
  type DepartmentCoursePlan,
} from "@/lib/college-courses";
import { schemaMissing } from "@/lib/admin";
import { getSupabase } from "@/lib/supabase/client";
import type { CollegeRow, CourseId } from "@/lib/types";
import { BookOpen, Loader2, Pencil, Plus, Upload } from "lucide-react";
import { TAMIL_NADU_COLLEGES } from "@/data/tamil-nadu-colleges";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

export default function AdminCollegesPage() {
  const { colleges, loading, error, refresh } = useColleges(true, {
    includeCatalog: false,
  });
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [editing, setEditing] = useState<CollegeRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState<string | null>(null);
  const [seedError, setSeedError] = useState<string | null>(null);

  const [planCollege, setPlanCollege] = useState<CollegeRow | null>(null);
  const [planCourses, setPlanCourses] = useState<CourseId[]>([]);
  const [deptPlans, setDeptPlans] = useState<DepartmentCoursePlan[]>([]);
  const [deptSuggestions, setDeptSuggestions] = useState<string[]>([]);
  const [newDeptName, setNewDeptName] = useState("");
  const [planLoading, setPlanLoading] = useState(false);
  const [planSaving, setPlanSaving] = useState(false);
  const [planMessage, setPlanMessage] = useState<string | null>(null);
  const [planError, setPlanError] = useState<string | null>(null);
  const [planCounts, setPlanCounts] = useState<
    Record<string, { college: number; departments: number }>
  >({});

  const loadPlanCounts = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) return;
    const [collegeRes, deptRes] = await Promise.all([
      sb.from("college_courses").select("college_id"),
      sb.from("college_department_courses").select("college_id, department"),
    ]);
    const counts: Record<string, { college: number; departments: number }> = {};
    for (const row of collegeRes.data ?? []) {
      const id = row.college_id as string;
      if (!counts[id]) counts[id] = { college: 0, departments: 0 };
      counts[id].college += 1;
    }
    const deptKeys = new Map<string, Set<string>>();
    for (const row of deptRes.data ?? []) {
      const id = row.college_id as string;
      if (!counts[id]) counts[id] = { college: 0, departments: 0 };
      if (!deptKeys.has(id)) deptKeys.set(id, new Set());
      deptKeys.get(id)!.add(String(row.department ?? "").trim().toLowerCase());
    }
    for (const [id, set] of deptKeys) {
      counts[id].departments = set.size;
    }
    setPlanCounts(counts);
  }, []);

  useEffect(() => {
    void loadPlanCounts();
  }, [loadPlanCounts, colleges]);

  async function openPlan(college: CollegeRow) {
    setPlanCollege(college);
    setPlanMessage(null);
    setPlanError(null);
    setNewDeptName("");
    setPlanLoading(true);
    const [ids, departments, suggestions] = await Promise.all([
      fetchCollegeCourseIds(college.id),
      fetchCollegeDepartmentPlans(college.id),
      fetchDistinctDepartments(),
    ]);
    setPlanCourses(ids);
    setDeptPlans(departments);
    setDeptSuggestions(suggestions);
    setPlanLoading(false);
  }

  function togglePlanCourse(courseId: CourseId) {
    setPlanCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  }

  function toggleDeptCourse(department: string, courseId: CourseId) {
    const key = department.trim().toLowerCase();
    setDeptPlans((prev) =>
      prev.map((plan) => {
        if (plan.department.trim().toLowerCase() !== key) return plan;
        const has = plan.courseIds.includes(courseId);
        return {
          ...plan,
          courseIds: has
            ? plan.courseIds.filter((id) => id !== courseId)
            : [...plan.courseIds, courseId],
        };
      })
    );
  }

  function addDepartmentPlan() {
    const name = newDeptName.trim();
    if (!name) {
      setPlanError("Enter a department name first.");
      return;
    }
    const key = name.toLowerCase();
    if (deptPlans.some((p) => p.department.trim().toLowerCase() === key)) {
      setPlanError("That department plan already exists.");
      return;
    }
    setPlanError(null);
    setDeptPlans((prev) => [...prev, { department: name, courseIds: [] }]);
    setNewDeptName("");
  }

  function removeDepartmentPlan(department: string) {
    const key = department.trim().toLowerCase();
    setDeptPlans((prev) =>
      prev.filter((p) => p.department.trim().toLowerCase() !== key)
    );
  }

  async function savePlan() {
    if (!planCollege) return;
    setPlanSaving(true);
    setPlanError(null);
    setPlanMessage(null);
    const { error: saveError } = await saveCollegeCoursePlan(
      planCollege.id,
      planCourses
    );
    if (saveError) {
      setPlanSaving(false);
      if (schemaMissing({ message: saveError })) {
        setPlanError(
          "Run supabase/RUN_COLLEGE_COURSES.sql in the Supabase SQL Editor first."
        );
      } else {
        setPlanError(saveError);
      }
      return;
    }

    const { error: deptError } = await saveCollegeDepartmentPlans(
      planCollege.id,
      deptPlans
    );
    setPlanSaving(false);
    if (deptError) {
      setPlanError(deptError);
      return;
    }

    const deptCount = deptPlans.filter((p) => p.courseIds.length > 0).length;
    setPlanMessage(
      planCourses.length || deptCount
        ? `Saved: ${planCourses.length} college-wide course(s), ${deptCount} department plan(s). New students get the matching set. Practice hub requires the Python course.`
        : "Cleared plans. New students will get all published courses until you assign a plan."
    );
    await loadPlanCounts();
  }

  async function applyPlan(replace: boolean) {
    if (!planCollege) return;
    const label = replace ? "replace enrollments with" : "add missing courses from";
    if (
      !window.confirm(
        `Apply this plan to all active students at ${planCollege.name}? This will ${label} their course access.`
      )
    ) {
      return;
    }
    setPlanSaving(true);
    setPlanError(null);
    setPlanMessage(null);
    const { count, error: applyError } = await applyCollegePlanToStudents(
      planCollege.id,
      replace
    );
    setPlanSaving(false);
    if (applyError) {
      setPlanError(applyError);
      return;
    }
    setPlanMessage(`Updated course access for ${count} student(s).`);
  }

  async function importTamilNaduColleges() {
    const sb = getSupabase();
    if (!sb) return;
    setSeeding(true);
    setSeedError(null);
    setSeedMessage(null);

    const existingNames = new Set(
      colleges.map((c) => c.name.trim().toLowerCase())
    );
    const toInsert = TAMIL_NADU_COLLEGES.filter(
      (c) => !existingNames.has(c.name.trim().toLowerCase())
    ).map((c) => ({
      name: c.name,
      code: "",
      city: c.city,
      archived: false,
    }));

    if (toInsert.length === 0) {
      setSeeding(false);
      setSeedMessage(
        `All ${TAMIL_NADU_COLLEGES.length} Tamil Nadu colleges are already in the list.`
      );
      return;
    }

    const { error: insertError } = await sb.from("colleges").insert(toInsert);
    setSeeding(false);
    if (insertError) {
      setSeedError(insertError.message);
      return;
    }
    setSeedMessage(
      `Imported ${toInsert.length} college(s). ${TAMIL_NADU_COLLEGES.length - toInsert.length} already existed.`
    );
    await refresh();
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const sb = getSupabase();
    if (!sb) return;
    const trimmed = name.trim();
    if (!trimmed) {
      setFormError("College name is required.");
      return;
    }
    setSaving(true);
    setFormError(null);
    const payload = { name: trimmed, code: code.trim(), city: city.trim() };
    const result = editing
      ? await sb.from("colleges").update(payload).eq("id", editing.id)
      : await sb.from("colleges").insert(payload);
    setSaving(false);
    if (result.error) {
      setFormError(result.error.message);
      return;
    }
    setName("");
    setCode("");
    setCity("");
    setEditing(null);
    await refresh();
  }

  async function toggleArchive(college: CollegeRow) {
    const sb = getSupabase();
    if (!sb) return;
    await sb.from("colleges").update({ archived: !college.archived }).eq("id", college.id);
    await refresh();
  }

  function startEdit(college: CollegeRow) {
    setEditing(college);
    setName(college.name);
    setCode(college.code);
    setCity(college.city);
  }

  if (schemaMissing({ message: error ?? undefined }) && error) {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Run <code className="rounded bg-white px-1">supabase/RUN_ADMIN.sql</code> in the SQL Editor.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <p className="text-sm text-gray-600">
        Assign courses by college and department. Students get college-wide
        courses plus any matching department plan. Python Practice requires the
        Python course.
      </p>

      <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-brand-900">
              Tamil Nadu college list
            </p>
            <p className="mt-1 text-xs text-brand-800">
              Import {TAMIL_NADU_COLLEGES.length} colleges (Anna University, NIT Trichy,
              PSG, VIT Chennai, and more) so students can search and select them at
              registration. Safe to run again — existing names are skipped.
            </p>
          </div>
          <button
            type="button"
            disabled={seeding || loading}
            onClick={() => void importTamilNaduColleges()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-500 disabled:opacity-50"
          >
            {seeding ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Upload className="h-4 w-4" />
            )}
            Import TN colleges
          </button>
        </div>
        {seedMessage && (
          <p className="mt-2 text-xs font-medium text-emerald-700">{seedMessage}</p>
        )}
        {seedError && (
          <p className="mt-2 text-xs font-medium text-red-600">{seedError}</p>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="flex items-center gap-2 font-semibold text-gray-900">
            {editing ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {editing ? "Edit college" : "Add college"}
          </h2>
          <div className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Code</label>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. IITM"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} />
            </div>
          </div>
          {formError && <p className="mt-3 text-sm text-red-600">{formError}</p>}
          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              {editing ? "Save" : "Add"}
            </button>
            {editing && (
              <button
                type="button"
                onClick={() => {
                  setEditing(null);
                  setName("");
                  setCode("");
                  setCity("");
                }}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          {loading ? (
            <div className="flex justify-center p-10">
              <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
            </div>
          ) : colleges.length === 0 ? (
            <p className="p-6 text-sm text-gray-500">No colleges yet. Add the first one.</p>
          ) : (
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">College</th>
                  <th className="px-4 py-3">Code</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {colleges.map((c) => (
                  <tr
                    key={c.id}
                    className={`border-t border-gray-100 ${
                      planCollege?.id === c.id ? "bg-brand-50/40" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {c.name}
                      {c.archived && (
                        <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                          archived
                        </span>
                      )}
                      {c.city ? (
                        <span className="mt-0.5 block text-xs font-normal text-gray-500">
                          {c.city}
                        </span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.code || "—"}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {planCounts[c.id] &&
                      (planCounts[c.id].college > 0 ||
                        planCounts[c.id].departments > 0) ? (
                        <>
                          {planCounts[c.id].college > 0
                            ? `${planCounts[c.id].college} college-wide`
                            : "No college-wide"}
                          {planCounts[c.id].departments > 0
                            ? ` · ${planCounts[c.id].departments} dept`
                            : ""}
                        </>
                      ) : (
                        "All published"
                      )}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => void openPlan(c)}
                        className="mr-2 text-sm font-medium text-brand-700 hover:underline"
                      >
                        Assign courses
                      </button>
                      <button
                        type="button"
                        onClick={() => startEdit(c)}
                        className="mr-2 text-sm font-medium text-gray-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => void toggleArchive(c)}
                        className="text-sm font-medium text-gray-500 hover:underline"
                      >
                        {c.archived ? "Restore" : "Archive"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {planCollege && (
        <div className="rounded-xl border border-brand-200 bg-white p-5 shadow-sm">
          <h2 className="flex items-center gap-2 font-semibold text-gray-900">
            <BookOpen className="h-4 w-4 text-brand-700" />
            Course plan — {planCollege.name}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Publish courses by college (everyone) and by department (extra courses
            for matching students). Enrollment = college-wide ∪ department match.
            Leave both empty to fall back to every published course. Python Practice
            hub only unlocks for students enrolled in the Python course (plus premium).
          </p>

          {planLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
            </div>
          ) : (
            <div className="mt-4 space-y-6">
              <section>
                <h3 className="text-sm font-semibold text-gray-900">
                  College-wide courses
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Assigned to every student at this college.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {courses.map((course) => {
                    const checked = planCourses.includes(course.id);
                    return (
                      <label
                        key={course.id}
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition ${
                          checked
                            ? "border-brand-300 bg-brand-50"
                            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePlanCourse(course.id)}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                        />
                        <span>
                          <span className="font-medium text-gray-900">
                            {course.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-gray-500">
                            {course.tagline}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-gray-900">
                  Department plans
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Extra courses for students whose department name matches
                  (case-insensitive). Example: give CSE Python + Practice path,
                  MBA only MBA AI.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <input
                    list="admin-department-suggestions"
                    value={newDeptName}
                    onChange={(e) => setNewDeptName(e.target.value)}
                    placeholder="Department name (e.g. CSE, MBA)"
                    className="min-w-[12rem] flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                  <datalist id="admin-department-suggestions">
                    {deptSuggestions.map((d) => (
                      <option key={d} value={d} />
                    ))}
                  </datalist>
                  <button
                    type="button"
                    onClick={addDepartmentPlan}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  >
                    Add department
                  </button>
                </div>

                {deptPlans.length === 0 ? (
                  <p className="mt-3 text-sm text-gray-500">
                    No department plans yet.
                  </p>
                ) : (
                  <div className="mt-4 space-y-4">
                    {deptPlans.map((plan) => (
                      <div
                        key={plan.department}
                        className="rounded-xl border border-gray-200 bg-gray-50/60 p-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-gray-900">
                            {plan.department}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeDepartmentPlan(plan.department)}
                            className="text-xs font-medium text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {courses.map((course) => {
                            const checked = plan.courseIds.includes(course.id);
                            return (
                              <label
                                key={`${plan.department}-${course.id}`}
                                className={`flex cursor-pointer items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm ${
                                  checked
                                    ? "border-brand-300"
                                    : "border-gray-200"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() =>
                                    toggleDeptCourse(plan.department, course.id)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                                />
                                <span className="font-medium text-gray-800">
                                  {courseShortNameSafe(course.id)}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}

          {planError && <p className="mt-3 text-sm text-red-600">{planError}</p>}
          {planMessage && (
            <p className="mt-3 text-sm text-emerald-700">{planMessage}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              disabled={planSaving || planLoading}
              onClick={() => void savePlan()}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {planSaving && <Loader2 className="h-4 w-4 animate-spin" />}
              Save plan
            </button>
            <button
              type="button"
              disabled={planSaving || planLoading}
              onClick={() => void applyPlan(false)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Apply to existing students
            </button>
            <button
              type="button"
              disabled={planSaving || planLoading}
              onClick={() => void applyPlan(true)}
              className="rounded-lg border border-amber-200 px-4 py-2 text-sm font-medium text-amber-800 hover:bg-amber-50 disabled:opacity-50"
            >
              Replace student enrollments
            </button>
            <button
              type="button"
              onClick={() => {
                setPlanCollege(null);
                setPlanCourses([]);
                setDeptPlans([]);
                setNewDeptName("");
                setPlanMessage(null);
                setPlanError(null);
              }}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function courseShortNameSafe(id: CourseId): string {
  const course = courses.find((c) => c.id === id);
  return course?.name ?? id;
}
