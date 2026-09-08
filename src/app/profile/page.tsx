"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useColleges } from "@/hooks/useColleges";
import { DEPARTMENT_OPTIONS } from "@/data/departments";
import { PAGE_CONTAINER } from "@/lib/layout";
import { courses, courseShortName } from "@/data/courses";
import { getSupabase } from "@/lib/supabase/client";
import { cleanMobile, isValidMobile } from "@/lib/mobile";
import type { CourseId } from "@/lib/types";
import { Loader2 } from "lucide-react";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";
const readonlyClass =
  "mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700";

export default function ProfilePage() {
  const { user, profile, updateProfile, refreshProfile } = useAuth();
  const { colleges, loading: collegesLoading } = useColleges();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [department, setDepartment] = useState("");
  const [enrolled, setEnrolled] = useState<CourseId[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const email = profile?.email || user?.email || "";

  useEffect(() => {
    if (!profile) return;
    setFullName(profile.full_name);
    setMobile(profile.mobile ?? "");
    setCollegeId(profile.college_id ?? "");
    setDepartment(profile.department ?? "");
  }, [profile]);

  useEffect(() => {
    if (!user) return;
    const sb = getSupabase();
    if (!sb) return;
    sb.from("enrollments")
      .select("course_id")
      .eq("user_id", user.id)
      .then(({ data }) => {
        setEnrolled((data ?? []).map((r) => r.course_id as CourseId));
      });
  }, [user]);

  const collegeName = useMemo(() => {
    return colleges.find((c) => c.id === (collegeId || profile?.college_id))?.name;
  }, [colleges, collegeId, profile?.college_id]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!fullName.trim()) {
      setError("Name is required.");
      return;
    }
    const mobileClean = cleanMobile(mobile);
    if (mobileClean && !isValidMobile(mobileClean)) {
      setError("Enter a valid mobile number (at least 8 digits).");
      return;
    }
    if (!department.trim()) {
      setError("Department is required.");
      return;
    }
    setSaving(true);
    const result = await updateProfile({
      full_name: fullName.trim(),
      mobile: mobileClean,
      college_id: collegeId || null,
      department: department.trim(),
    });
    setSaving(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    await refreshProfile();
    setMessage("Profile saved.");
  }

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900">Your profile</h1>
        <p className="mt-2 text-gray-600">
          Email comes from your login. Update name, mobile, college, and department here.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" readOnly value={email} className={readonlyClass} />
            <p className="mt-1 text-xs text-gray-500">From your login account</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile number</label>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={inputClass}
            />
            <p className="mt-1 text-xs text-gray-500">
              Optional — add or update the number on your profile.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">College</label>
            <select
              value={collegeId}
              onChange={(e) => setCollegeId(e.target.value)}
              className={inputClass}
              disabled={collegesLoading}
            >
              <option value="">
                {collegesLoading ? "Loading…" : "Select college"}
              </option>
              {colleges.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                  {c.city ? ` (${c.city})` : ""}
                </option>
              ))}
            </select>
            {!collegesLoading && colleges.length === 0 && (
              <p className="mt-1 text-xs text-gray-500">
                No colleges listed yet{collegeName ? ` · currently ${collegeName}` : ""}.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              required
              list="profile-departments"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className={inputClass}
            />
            <datalist id="profile-departments">
              {DEPARTMENT_OPTIONS.map((d) => (
                <option key={d} value={d} />
              ))}
            </datalist>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700">Enrolled courses</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {enrolled.length === 0 ? (
                <p className="text-sm text-gray-500">No courses assigned yet.</p>
              ) : (
                enrolled.map((id) => {
                  const course = courses.find((c) => c.id === id);
                  return (
                    <span
                      key={id}
                      title={course?.name ?? id}
                      className="max-w-full truncate rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
                    >
                      {course ? courseShortName(course.id) : id}
                    </span>
                  );
                })
              )}
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-emerald-700">{message}</p>}

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            Save profile
          </button>
        </form>
      </div>
    </div>
  );
}