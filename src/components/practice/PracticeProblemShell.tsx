"use client";

import { ClientOnly } from "@/components/ui/ClientOnly";
import { PracticeWorkspace } from "@/components/practice/PracticeWorkspace";
import type { PracticeProblem } from "@/lib/types";
import { Loader2 } from "lucide-react";

interface PracticeProblemShellProps {
  problem: PracticeProblem;
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
}

function LoadingShell() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export function PracticeProblemShell(props: PracticeProblemShellProps) {
  return (
    <ClientOnly fallback={<LoadingShell />}>
      <PracticeWorkspace {...props} />
    </ClientOnly>
  );
}
