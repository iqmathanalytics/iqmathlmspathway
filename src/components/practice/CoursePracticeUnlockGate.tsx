"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import type { PracticeProblem } from "@/lib/types";
import { getProblemsByTopic } from "@/data/practice";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import {
  getSolvedPracticeIds,
  isCoursePracticeProblemUnlocked,
} from "@/lib/course-practice-unlock";
import {
  courseTopicChallengeHref,
} from "@/lib/course-practice-links";
import Link from "next/link";

interface CoursePracticeUnlockGateProps {
  problem: PracticeProblem;
  moduleSlug: string;
  topicSlug: string;
  children: ReactNode;
}

export function CoursePracticeUnlockGate({
  problem,
  moduleSlug,
  topicSlug,
  children,
}: CoursePracticeUnlockGateProps) {
  const router = useRouter();
  const problems = useMemo(
    () => getProblemsByTopic(problem.topicId),
    [problem.topicId]
  );
  const { rows, loading } = usePracticeProgress(problems.map((p) => p.id));
  const solvedIds = getSolvedPracticeIds(rows);
  const unlocked = isCoursePracticeProblemUnlocked(
    problems,
    problem.id,
    solvedIds
  );

  useEffect(() => {
    if (loading) return;
    if (!unlocked) {
      router.replace(courseTopicChallengeHref(moduleSlug, topicSlug));
    }
  }, [loading, unlocked, router, moduleSlug, topicSlug]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4 text-center">
        <Lock className="h-8 w-8 text-gray-400" />
        <p className="text-sm text-gray-600">
          Solve the previous question in this topic before opening this one.
        </p>
        <Link
          href={courseTopicChallengeHref(moduleSlug, topicSlug)}
          className="text-sm font-medium text-brand-700 hover:underline"
        >
          Back to challenge list
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
