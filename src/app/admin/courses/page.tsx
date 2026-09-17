"use client";

import { useCallback, useEffect, useState } from "react";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import { getSupabase } from "@/lib/supabase/client";
import { schemaMissing } from "@/lib/admin";
import type { CourseId } from "@/lib/types";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminCoursesPage() {
  const [published, setPublished] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [schemaError, setSchemaError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }
    const { data, error: qError } = await sb
      .from("course_settings")
      .select("course_id, published");
    if (schemaMissing(qError)) {
      setSchemaError(true);
      setLoading(false);
      return;
    }
    const map: Record<string, boolean> = {};
    for (const course of courses) map[course.id] = false;
    for (const row of data ?? []) map[row.course_id] = Boolean(row.published);
    setPublished(map);
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function toggle(courseId: CourseId, next: boolean) {
    const sb = getSupabase();
    if (!sb) return;
    setSaving(courseId);
    setError(null);
    const { error: uError } = await sb
      .from("course_settings")
      .upsert({ course_id: courseId, published: next, updated_at: new Date().toISOString() });
    setSaving(null);
    if (uError) {
      setError(uError.message);
      return;
    }
    setPublished((prev) => ({ ...prev, [courseId]: next }));
  }

  if (schemaError) {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Run <code className="rounded bg-white px-1">supabase/RUN_ADMIN.sql</code> in the SQL Editor.
      </p>
    );
  }

  const publishedCount = courses.filter((c) => published[c.id]).length;

  return (
    <div>
      <p className="text-sm text-gray-600">
        Students only see courses you publish here. Hidden courses stay off Home,
        Programs, Dashboard, Learn, and Practice until you publish them. Admins
        can still open a hidden track to preview it.
      </p>
      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <p className="font-semibold">Before publishing a new track</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>SQL:</strong> lessons + in-lesson IDE are ready; hub practice arrays are empty
            (expected).
          </li>
          <li>
            <strong>Agentic AI:</strong> review generated quizzes for depth before flipping live.
          </li>
          <li>
            <strong>MBA AI:</strong> confirm Day 4 external dataset/Colab links still work for your
            cohort.
          </li>
        </ul>
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      {loading ? (
        <div className="mt-6 flex justify-center p-10">
          <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
        </div>
      ) : (
        <>
          <p className="mt-6 text-sm text-gray-500">
            <span className="font-semibold tabular-nums text-gray-800">
              {publishedCount}
            </span>{" "}
            of {courses.length} courses visible to students
          </p>
          <div className="mt-3 grid gap-4">
            {courses.map((course) => {
              const modules = getModulesByCourse(course.id);
              const lessons = modules.reduce(
                (acc, m) => acc + m.topics.filter((t) => t.published).length,
                0
              );
              const isOn = published[course.id] === true;
              return (
                <div
                  key={course.id}
                  className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold text-gray-900">{course.name}</h2>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${
                          isOn
                            ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
                            : "bg-gray-100 text-gray-600 ring-gray-200"
                        }`}
                      >
                        {isOn ? (
                          <>
                            <Eye className="h-3 w-3" />
                            Published
                          </>
                        ) : (
                          <>
                            <EyeOff className="h-3 w-3" />
                            Hidden
                          </>
                        )}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {modules.length} modules · {lessons} lessons
                      {isOn
                        ? " · visible to students"
                        : " · students cannot see this course"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {saving === course.id && (
                      <Loader2 className="h-4 w-4 animate-spin text-brand-600" />
                    )}
                    <button
                      type="button"
                      disabled={saving === course.id}
                      onClick={() => void toggle(course.id, !isOn)}
                      className={`rounded-lg px-4 py-2 text-sm font-semibold transition disabled:opacity-50 ${
                        isOn
                          ? "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                          : "bg-brand-600 text-white hover:bg-brand-500"
                      }`}
                    >
                      {isOn ? "Unpublish" : "Publish for students"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
