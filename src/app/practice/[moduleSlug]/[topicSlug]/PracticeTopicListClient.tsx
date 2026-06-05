"use client";

import Link from "next/link";
import type { PracticeProblem } from "@/lib/types";
import { isProblemFree, isProblemPremium } from "@/lib/practice-config";
import { useEntitlements } from "@/hooks/useEntitlements";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import { CheckCircle2, Lock, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface PracticeTopicListClientProps {
  problems: PracticeProblem[];
  moduleSlug: string;
  topicSlug: string;
}

export function PracticeTopicListClient({
  problems,
  moduleSlug,
  topicSlug,
}: PracticeTopicListClientProps) {
  const { hasPremium } = useEntitlements();
  const problemIds = problems.map((p) => p.id);
  const { rows } = usePracticeProgress(problemIds);

  return (
    <ol className="mt-8 space-y-2">
      {problems.map((p) => {
        const locked = isProblemPremium(p.order) && !hasPremium;
        const status = rows[p.id]?.status;
        return (
          <li key={p.id}>
            <Link
              href={`/practice/${moduleSlug}/${topicSlug}/${p.slug}`}
              className={clsx(
                "flex items-center gap-3 rounded-xl border p-4 transition-shadow",
                locked
                  ? "border-gray-200 bg-gray-50"
                  : "border-gray-200 bg-white shadow-sm hover:border-brand-200 hover:shadow-md"
              )}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700">
                {p.order}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900">{p.title}</p>
                <p className="text-xs capitalize text-gray-500">{p.difficulty}</p>
              </div>
              {isProblemFree(p.order) && (
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  Free
                </span>
              )}
              {locked && <Lock className="h-4 w-4 text-gray-400" />}
              {status === "solved" && (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              )}
              <ChevronRight className="h-4 w-4 text-gray-300" />
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
