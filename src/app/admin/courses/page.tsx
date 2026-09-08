"use client";

import { useCallback, useEffect, useState } from "react";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import { getSupabase } from "@/lib/supabase/client";
import { schemaMissing } from "@/lib/admin";
import type { CourseId } from "@/lib/types";
import { Loader2 } from "lucide-react";

export default function AdminCoursesPage() {
  const [published, setPublished] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [schemaError, setSchemaError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) return;
    const { data, error: qError } = await sb.from("course_settings").select("course_id, published");
    if (schemaMissing(qError)) {
      setSchemaError(true);
      return;
    }
    const map: Record<string, boolean> = {};
    for (const course of courses) map[course.id] = true;
    for (const row of data ?? []) map[row.course_id] = Boolean(row.published);
    setPublished(map);
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

  return (
    <div>
      <p className="text-sm text-gray-600">
        Only published courses appear on Home, Dashboard, and Learn. Unpublished tracks stay hidden
        from students.
      </p>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <div className="mt-6 grid gap-4">
        {courses.map((course) => {
          const modules = getModulesByCourse(course.id);
          const lessons = modules.reduce(
            (acc, m) => acc + m.topics.filter((t) => t.published).length,
            0
          );
          const isOn = published[course.id] !== false;
          return (
            <div
              key={course.id}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-semibold text-gray-900">{course.name}</h2>
                <p className="mt-1 text-sm text-gray-500">
                  {modules.length} modules · {lessons} lessons
                </p>
              </div>
              <label className="inline-flex items-center gap-3 text-sm font-medium text-gray-700">
                {saving === course.id && <Loader2 className="h-4 w-4 animate-spin" />}
                <span>{isOn ? "Published" : "Hidden"}</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isOn}
                  disabled={saving === course.id}
                  onClick={() => void toggle(course.id, !isOn)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    isOn ? "bg-brand-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
                      isOn ? "left-5" : "left-0.5"
                    }`}
                  />
                </button>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}