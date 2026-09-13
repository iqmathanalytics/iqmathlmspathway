"use client";

import dynamic from "next/dynamic";
import type { PracticeProblem } from "@/lib/types";
import { Loader2 } from "lucide-react";

const PracticeWorkspaceEditor = dynamic(
  () =>
    import("./PracticeWorkspaceEditor").then((m) => m.PracticeWorkspaceEditor),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[50vh] items-center justify-center rounded-2xl border border-gray-200 bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    ),
  }
);

interface PracticeWorkspaceProps {
  problem: PracticeProblem;
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
}

/**
 * Course module challenges only (/learn/.../challenges).
 * Never gated by Practice-hub premium — that applies only under /practice.
 */
export function PracticeWorkspace(props: PracticeWorkspaceProps) {
  return <PracticeWorkspaceEditor {...props} />;
}
