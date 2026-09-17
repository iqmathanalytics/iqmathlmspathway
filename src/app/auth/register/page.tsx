"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useColleges } from "@/hooks/useColleges";
import {
  CollegeCombobox,
  OTHER_COLLEGE_VALUE,
} from "@/components/ui/CollegeCombobox";
import {
  isCatalogCollegeId,
  nameFromCatalogCollegeId,
} from "@/data/tamil-nadu-colleges";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cleanMobile, isValidMobile } from "@/lib/mobile";

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
  const [loading, setLoading] = useState(false);

  const isOtherCollege = collegeSelect === OTHER_COLLEGE_VALUE;

  function validate(): string | null {
    const mobileClean = cleanMobile(mobile);
    if (!isValidMobile(mobileClean)) return "Enter a valid mobile number.";
    if (!department.trim()) return "Enter your department.";

    if (isOtherCollege) {
      if (customCollegeName.trim().length < 2) return "Enter your college name.";
    } else if (!collegeSelect) {
      return "Select your college.";
    }
    return null;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const mobileClean = cleanMobile(mobile);
    let collegeId: string | null = null;
    let collegeName: string | null = null;

    if (isOtherCollege) {
      collegeName = customCollegeName.trim();
    } else if (isCatalogCollegeId(collegeSelect)) {
      collegeName = nameFromCatalogCollegeId(collegeSelect);
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

    router.push("/dashboard?welcome=1");
  }

  return (
    <div className={`${PAGE_CONTAINER} py-16`}>
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
        <p className="mt-2 text-sm text-gray-600">
          Create your account to access courses. Practice unlocks after premium access
          (purchase or admin grant).
        </p>

        {!configured && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Supabase is not configured. Add environment variables to enable registration.
          </p>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
            <label
              htmlFor="register-college"
              className="block text-sm font-medium text-gray-700"
            >
              College
            </label>
            <div className="mt-1">
              <CollegeCombobox
                id="register-college"
                colleges={colleges}
                value={collegeSelect}
                onChange={(v) => {
                  setCollegeSelect(v);
                  if (v !== OTHER_COLLEGE_VALUE) setCustomCollegeName("");
                }}
                loading={collegesLoading}
                required
                allowOther
                placeholder="Search college by name or city…"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Type to search the college list, or choose Others to enter a name.
            </p>
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
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Type your department (e.g. MBA, CSE, Data Science)"
              className={inputClass}
              autoComplete="organization-title"
            />
            <p className="mt-1 text-xs text-gray-500">
              Enter your department yourself — not selected from a fixed list.
            </p>
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
            disabled={loading || !configured}
            className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

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
