"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { courses } from "@/data/courses";
import { useColleges } from "@/hooks/useColleges";
import {
  applyCollegePlanToStudents,
  fetchCollegeCourseIds,
  saveCollegeCoursePlan,
} from "@/lib/college-courses";
import { schemaMissing } from "@/lib/admin";
import { getSupabase } from "@/lib/supabase/client";
import type { CollegeRow, CourseId } from "@/lib/types";
import { BookOpen, Loader2, Pencil, Plus } from "lucide-react";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

export default function AdminCollegesPage() {
  const { colleges, loading, error, refresh } = useColleges(true);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [editing, setEditing] = useState<CollegeRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [planCollege, setPlanCollege] = useState<CollegeRow | null>(null);
  const [planCourses, setPlanCourses] = useState<CourseId[]>([]);
  const [planLoading, setPlanLoading] = useState(false);
  const [planSaving, setPlanSaving] = useState(false);
  const [planMessage, setPlanMessage] = useState<string | null>(null);
  const [planError, setPlanError] = useState<string | null>(null);
  const [planCounts, setPlanCounts] = useState<Record<string, number>>({});

  const loadPlanCounts = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) return;
    const { data, error: qError } = await sb
      .from("college_courses")
      .select("college_id");
    if (qError) return;
    const counts: Record<string, number> = {};
    for (const row of data ?? []) {
      const id = row.college_id as string;
      counts[id] = (counts[id] ?? 0) + 1;
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
    setPlanLoading(true);
    const ids = await fetchCollegeCourseIds(college.id);
    setPlanCourses(ids);
    setPlanLoading(false);
  }

  function togglePlanCourse(courseId: CourseId) {
    setPlanCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
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
    setPlanSaving(false);
    if (saveError) {
      if (schemaMissing({ message: saveError })) {
        setPlanError(
          "Run supabase/RUN_COLLEGE_COURSES.sql in the Supabase SQL Editor first."
        );
      } else {
        setPlanError(saveError);
      }
      return;
    }
    setPlanMessage(
      planCourses.length
        ? `Saved plan with ${planCourses.length} course(s). New students at this college will get these courses.`
        : "Cleared plan. New students will get all published courses until you assign a plan."
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
        Add colleges, then assign a <strong>course plan</strong> to each one. Students who
        register with that college are enrolled in those courses automatically.
      </p>

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
                      {planCounts[c.id]
                        ? `${planCounts[c.id]} course${planCounts[c.id] === 1 ? "" : "s"}`
                        : "All published"}
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
            Students who select this college at registration will proceed with these courses.
            Leave all unchecked to fall back to every published course.
          </p>

          {planLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
            </div>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                      <span className="font-medium text-gray-900">{course.name}</span>
                      <span className="mt-0.5 block text-xs text-gray-500">
                        {course.tagline}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          )}

          {planError && <p className="mt-3 text-sm text-red-600">{planError}</p>}
          {planMessage && <p className="mt-3 text-sm text-emerald-700">{planMessage}</p>}

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
