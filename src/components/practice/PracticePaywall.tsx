"use client";

import Link from "next/link";
import type { PracticeProblem } from "@/lib/types";
import { ChevronRight, Lock } from "lucide-react";
import { PracticeBreadcrumb } from "./PracticeBreadcrumb";

interface PracticePaywallProps {
  problem: PracticeProblem;
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
}

export function PracticePaywall({
  problem,
  moduleSlug,
  topicSlug,
  moduleName,
  topicTitle,
}: PracticePaywallProps) {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col">
      <PracticeBreadcrumb
        moduleSlug={moduleSlug}
        topicSlug={topicSlug}
        moduleName={moduleName}
        topicTitle={topicTitle}
        problemTitle={problem.title}
      />
      <div className="flex flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="max-w-md text-center">
          <Lock className="mx-auto h-10 w-10 text-brand-600" />
          <h1 className="mt-4 text-xl font-bold text-gray-900">{problem.title}</h1>
          <p className="mt-2 text-sm text-gray-600">
            This is a premium problem (problem {problem.order}). The first 5 problems in each
            topic are free. Unlock all premium practice with a one-time purchase.
          </p>
          <Link
            href="/checkout"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Unlock all practice
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/practice/${moduleSlug}/${topicSlug}`}
            className="mt-3 block text-sm text-brand-700 hover:underline"
          >
            Back to problem list
          </Link>
        </div>
      </div>
    </div>
  );
}
