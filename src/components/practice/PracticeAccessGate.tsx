"use client";

import Link from "next/link";
import { ChevronRight, Loader2, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEntitlements } from "@/hooks/useEntitlements";
import { useAccessibleCourses } from "@/hooks/usePublishedCourses";
import { isAdmin } from "@/lib/admin";
import type { ReactNode } from "react";

function LoadingShell() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

interface PracticeAccessGateProps {
  children: ReactNode;
  /** Shown under the lock title (e.g. problem name). */
  title?: string;
  /** Login redirect path when signed out. */
  loginNext?: string;
  /** Secondary link back to a list page. */
  backHref?: string;
  backLabel?: string;
  className?: string;
  /** Copy for lock screens. Certification uses the same Python + premium gate. */
  purpose?: "practice" | "certification";
}

/**
 * Gates hub practice (Basics / Algorithms) behind:
 * 1) Python course enrollment (college/department plan or manual enroll)
 * 2) Premium entitlement (purchase or admin grant)
 * Admins always pass.
 */
export function PracticeAccessGate({
  children,
  title = "Practice locked",
  loginNext = "/practice",
  backHref = "/practice",
  backLabel = "Back to practice",
  className,
  purpose = "practice",
}: PracticeAccessGateProps) {
  const noun = purpose === "certification" ? "certification" : "practice";
  const { user, profile, loading: authLoading } = useAuth();
  const { hasPremium, loading: entLoading } = useEntitlements();
  const { accessibleCourses, loading: coursesLoading } = useAccessibleCourses();
  const admin = isAdmin(profile);
  const hasPythonCourse = accessibleCourses.some((c) => c.id === "python");

  if (authLoading || (user && (entLoading || coursesLoading))) {
    return <LoadingShell />;
  }

  if (admin || (hasPremium && hasPythonCourse)) {
    return <>{children}</>;
  }

  if (!user) {
    return (
      <div
        className={
          className ??
          "flex min-h-[50vh] w-full items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        }
      >
        <div className="max-w-md text-center">
          <Lock className="mx-auto h-10 w-10 text-brand-600" />
          <h1 className="mt-4 text-xl font-bold text-gray-900">Sign in required</h1>
          <p className="mt-2 text-sm text-gray-600">
            {purpose === "certification"
              ? "Certification is for Python course students with premium access. Sign in to continue."
              : "Practice is for Python course students with premium access. Sign in to continue."}
          </p>
          <Link
            href={`/auth/login?next=${encodeURIComponent(loginNext)}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Sign in
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href={backHref}
            className="mt-3 block text-sm text-brand-700 hover:underline"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  if (!hasPythonCourse) {
    return (
      <div
        className={
          className ??
          "flex min-h-[50vh] w-full items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        }
      >
        <div className="max-w-md text-center">
          <Lock className="mx-auto h-10 w-10 text-brand-600" />
          <h1 className="mt-4 text-xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">
            {purpose === "certification"
              ? "Python Advanced Proficiency Certification is only available if you are enrolled in the "
              : "Python Practice (Basics & Algorithms) is only available if you are enrolled in the "}
            <strong>Python for Data Science</strong> course. Ask your admin to
            publish Python for your college or department.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Go to dashboard
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href={backHref}
            className="mt-3 block text-sm text-brand-700 hover:underline"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        className ??
        "flex min-h-[50vh] w-full items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      }
    >
      <div className="max-w-md text-center">
        <Lock className="mx-auto h-10 w-10 text-brand-600" />
        <h1 className="mt-4 text-xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">
          You have the Python course. Unlock {noun} with a one-time purchase, or
          ask an admin to grant practice access.
        </p>
        <Link
          href="/checkout"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Unlock access
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href={backHref}
          className="mt-3 block text-sm text-brand-700 hover:underline"
        >
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
