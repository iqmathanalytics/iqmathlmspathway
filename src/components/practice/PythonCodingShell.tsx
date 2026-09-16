"use client";

import { ClientOnly } from "@/components/ui/ClientOnly";
import { PracticeAccessGate } from "@/components/practice/PracticeAccessGate";
import { PythonCodingWorkspace } from "@/components/practice/PythonCodingWorkspace";
import type { PracticeProblem } from "@/lib/types";
import type { PracticeTrackId } from "@/lib/practice-track";
import type { PracticeNav } from "@/lib/practice-list";
import { Loader2 } from "lucide-react";

function LoadingShell() {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export function PythonCodingShell({
  problem,
  trackId,
  nav,
}: {
  problem: PracticeProblem;
  trackId?: PracticeTrackId;
  nav?: PracticeNav;
}) {
  const listHref =
    trackId === "papc"
      ? "/certification/papc/practice"
      : trackId === "python-basics"
        ? "/practice/python-basics"
        : "/practice/python";
  const loginNext =
    trackId === "papc"
      ? `/certification/papc/practice/${problem.slug}`
      : trackId === "python-basics"
        ? `/practice/python-basics/${problem.difficulty}/${problem.slug}`
        : `/practice/python/${problem.difficulty}/${problem.slug}`;

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <ClientOnly fallback={<LoadingShell />}>
        <PracticeAccessGate
          title={problem.title}
          loginNext={loginNext}
          backHref={listHref}
          backLabel={trackId === "papc" ? "Back to PAPC practice" : "Back to problem list"}
          purpose={trackId === "papc" ? "certification" : "practice"}
          className="flex h-full min-h-0 flex-1 items-center justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <PythonCodingWorkspace problem={problem} trackId={trackId} nav={nav} />
        </PracticeAccessGate>
      </ClientOnly>
    </div>
  );
}
