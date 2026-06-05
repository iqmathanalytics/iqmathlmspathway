"use client";

import dynamic from "next/dynamic";
import type { PracticeProblem } from "@/lib/types";
import { isProblemPremium } from "@/lib/practice-config";
import { useEntitlements } from "@/hooks/useEntitlements";
import { Loader2 } from "lucide-react";
import { PracticePaywall } from "./PracticePaywall";
import { PracticeBreadcrumb } from "./PracticeBreadcrumb";

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

export function PracticeWorkspace(props: PracticeWorkspaceProps) {
  const { hasPremium, loading: entLoading } = useEntitlements();
  const isPremium = isProblemPremium(props.problem.order);

  if (isPremium && entLoading) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col">
        <PracticeBreadcrumb
          moduleSlug={props.moduleSlug}
          topicSlug={props.topicSlug}
          moduleName={props.moduleName}
          topicTitle={props.topicTitle}
          problemTitle={props.problem.title}
        />
        <div className="flex flex-1 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      </div>
    );
  }

  if (isPremium && !hasPremium) {
    return <PracticePaywall {...props} />;
  }

  return <PracticeWorkspaceEditor {...props} />;
}
