"use client";

import Link from "next/link";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { PythonCodingWorkspace } from "@/components/practice/PythonCodingWorkspace";
import type { PracticeProblem } from "@/lib/types";
import type { PracticeTrackId } from "@/lib/practice-track";
import { isProblemPremium } from "@/lib/practice-config";
import { useEntitlements } from "@/hooks/useEntitlements";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";
import { ChevronRight, Loader2, Lock } from "lucide-react";

function LoadingShell() {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

function ProgrammingPaywall({ problem }: { problem: PracticeProblem }) {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="max-w-md text-center">
        <Lock className="mx-auto h-10 w-10 text-brand-600" />
        <h1 className="mt-4 text-xl font-bold text-gray-900">{problem.title}</h1>
        <p className="mt-2 text-sm text-gray-600">
          This is a premium practice problem. The first 5 problems by order are free.
          Unlock all premium practice with a one-time purchase.
        </p>
        <Link
          href="/checkout"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Unlock all practice
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href="/practice/python"
          className="mt-3 block text-sm text-brand-700 hover:underline"
        >
          Back to problem list
        </Link>
      </div>
    </div>
  );
}

function GatedWorkspace({
  problem,
  trackId,
}: {
  problem: PracticeProblem;
  trackId?: PracticeTrackId;
}) {
  const { user, profile, loading: authLoading } = useAuth();
  const { hasPremium, loading: entLoading } = useEntitlements();
  const premiumProblem = isProblemPremium(problem.order);
  const admin = isAdmin(profile);

  if (authLoading || (premiumProblem && user && entLoading)) {
    return <LoadingShell />;
  }

  if (premiumProblem && !admin) {
    if (!user) {
      return (
        <div className="flex h-full min-h-0 flex-1 items-center justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="max-w-md text-center">
            <Lock className="mx-auto h-10 w-10 text-brand-600" />
            <h1 className="mt-4 text-xl font-bold text-gray-900">Premium practice</h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to access free problems in your account, or unlock premium practice.
            </p>
            <Link
              href={`/auth/login?next=/practice/python/${problem.difficulty}/${problem.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Sign in
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      );
    }
    if (!hasPremium) {
      return <ProgrammingPaywall problem={problem} />;
    }
  }

  return <PythonCodingWorkspace problem={problem} trackId={trackId} />;
}

export function PythonCodingShell({
  problem,
  trackId,
}: {
  problem: PracticeProblem;
  trackId?: PracticeTrackId;
}) {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <ClientOnly fallback={<LoadingShell />}>
        <GatedWorkspace problem={problem} trackId={trackId} />
      </ClientOnly>
    </div>
  );
}
