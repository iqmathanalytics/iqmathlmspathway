"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useColleges } from "@/hooks/useColleges";
import { courses } from "@/data/courses";
import { DEPARTMENT_OPTIONS } from "@/data/departments";
import {
  coursesForIds,
  fetchCollegeCourseIds,
} from "@/lib/college-courses";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cleanMobile, isValidMobile } from "@/lib/mobile";
import type { CourseId } from "@/lib/types";
import { BookOpen, CheckCircle2, Loader2 } from "lucide-react";

const OTHER_COLLEGE = "__other__";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

export default function RegisterPage() {
  const { signUp, configured } = useAuth();
  const { colleges, loading: collegesLoading } = useColleges();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [collegeSelect, setCollegeSelect] = useState("");
  const [customCollegeName, setCustomCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"details" | "plan">("details");

  const [planIds, setPlanIds] = useState<CourseId[] | null>(null);
  const [planLoading, setPlanLoading] = useState(false);
  const [planFallback, setPlanFallback] = useState(false);

  const isOtherCollege = collegeSelect === OTHER_COLLEGE;

  const selectedCollege = useMemo(
    () => colleges.find((c) => c.id === collegeSelect) ?? null,
    [colleges, collegeSelect]
  );

  const planCourses = useMemo(() => {
    if (planIds === null) return [];
    if (planFallback || planIds.length === 0) return courses;
    return coursesForIds(planIds);
  }, [planIds, planFallback]);

  useEffect(() => {
    let cancelled = false;
    async function loadPlan() {
      if (!collegeSelect || collegeSelect === OTHER_COLLEGE) {
        setPlanIds([]);
        setPlanFallback(true);
        setPlanLoading(false);
        return;
      }
      setPlanLoading(true);
      const ids = await fetchCollegeCourseIds(collegeSelect);
      if (cancelled) return;
      setPlanIds(ids);
      setPlanFallback(ids.length === 0);
      setPlanLoading(false);
    }
    void loadPlan();
    return () => {
      cancelled = true;
    };
  }, [collegeSelect]);

  function validateDetails(): string | null {
    const mobileClean = cleanMobile(mobile);
    if (!isValidMobile(mobileClean)) return "Enter a valid mobile number.";
    if (!department.trim()) return "Enter your department.";

    if (isOtherCollege) {
      if (customCollegeName.trim().length < 2) return "Enter your college name.";
    } else if (collegeSelect) {
      // ok
    } else if (colleges.length > 0) {
      return "Select your college.";
    }
    return null;
  }

  function goToPlan(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const validationError = validateDetails();
    if (validationError) {
      setError(validationError);
      return;
    }
    setStep("plan");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const validationError = validateDetails();
    if (validationError) {
      setError(validationError);
      setStep("details");
      return;
    }

    const mobileClean = cleanMobile(mobile);
    let collegeId: string | null = null;
    let collegeName: string | null = null;

    if (isOtherCollege) {
      collegeName = customCollegeName.trim();
    } else if (collegeSelect) {
      collegeId = collegeSelect;
    }

    setLoading(true);
    const result = await signUp({
      email,
      password,
      fullName,
      mobile: mobileClean,
      collegeId,
      collegeName,
      department: department.trim(),
    });
    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    if (result.needsEmailConfirmation) {
      setSuccess(true);
      return;
    }

    router.push("/dashboard?welcome=1");
  }

  if (success) {
    return (
      <div className={`${PAGE_CONTAINER} py-16`}>
        <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">Check your email</h1>
          <p className="mt-3 text-sm text-gray-600">
            We sent a confirmation link to <strong>{email}</strong>. Confirm your email, then sign in.
          </p>
          <Link
            href="/auth/login"
            className="mt-6 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Go to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${PAGE_CONTAINER} py-16`}>
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
        <p className="mt-2 text-sm text-gray-600">
          {step === "details"
            ? "Register with your college to get the right course plan."
            : "Review your college plan, then create your account."}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500">
          <span
            className={`rounded-full px-2.5 py-1 ${
              step === "details" ? "bg-brand-100 text-brand-800" : "bg-gray-100"
            }`}
          >
            1. Details
          </span>
          <span className="text-gray-300">→</span>
          <span
            className={`rounded-full px-2.5 py-1 ${
              step === "plan" ? "bg-brand-100 text-brand-800" : "bg-gray-100"
            }`}
          >
            2. Course plan
          </span>
        </div>

        {!configured && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Supabase is not configured. Add environment variables to enable registration.
          </p>
        )}

        {step === "details" ? (
          <form onSubmit={goToPlan} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                required
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">College</label>
              <select
                required
                value={collegeSelect}
                onChange={(e) => {
                  setCollegeSelect(e.target.value);
                  if (e.target.value !== OTHER_COLLEGE) setCustomCollegeName("");
                }}
                className={inputClass}
                disabled={collegesLoading}
              >
                <option value="">
                  {collegesLoading ? "Loading colleges…" : "Select college"}
                </option>
                {colleges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                    {c.city ? ` (${c.city})` : ""}
                  </option>
                ))}
                <option value={OTHER_COLLEGE}>Others</option>
              </select>
              {isOtherCollege && (
                <input
                  type="text"
                  required
                  value={customCollegeName}
                  onChange={(e) => setCustomCollegeName(e.target.value)}
                  placeholder="Enter your college name"
                  className={`${inputClass} mt-2`}
                  autoComplete="organization"
                />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                required
                list="department-options"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g. MBA, Data Science"
                className={inputClass}
              />
              <datalist id="department-options">
                {DEPARTMENT_OPTIONS.map((d) => (
                  <option key={d} value={d} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
              <p className="mt-1 text-xs text-gray-500">At least 8 characters</p>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={!configured}
              className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              Continue to course plan
            </button>
          </form>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4">
              <div className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {isOtherCollege
                      ? customCollegeName.trim() || "Your college"
                      : selectedCollege?.name ?? "Your college"}
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    {planFallback
                      ? "No custom plan is set for this college yet — you will get all published courses."
                      : "Based on your college, you will be enrolled in this plan:"}
                  </p>
                </div>
              </div>

              {planLoading ? (
                <div className="mt-4 flex justify-center py-4">
                  <Loader2 className="h-5 w-5 animate-spin text-brand-600" />
                </div>
              ) : (
                <ul className="mt-3 space-y-2">
                  {planCourses.map((course) => (
                    <li
                      key={course.id}
                      className="flex items-start gap-2 rounded-lg border border-white bg-white/80 px-3 py-2 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>
                        <span className="font-medium text-gray-900">{course.name}</span>
                        <span className="mt-0.5 block text-xs text-gray-500">
                          {course.tagline}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading || !configured || planLoading}
              className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {loading ? "Creating account…" : "Accept plan & register"}
            </button>
            <button
              type="button"
              onClick={() => {
                setError(null);
                setStep("details");
              }}
              className="w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Back
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-brand-700 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
