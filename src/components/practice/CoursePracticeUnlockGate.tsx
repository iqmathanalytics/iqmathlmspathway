"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import type { PracticeProblem } from "@/lib/types";
import { getCoursePracticeListByTopic } from "@/data/course-practice-catalog";
import { useAuth } from "@/contexts/AuthContext";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import { isAdmin } from "@/lib/admin";
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
  const { profile } = useAuth();
  const admin = isAdmin(profile);
  const problems = useMemo(
    () => getCoursePracticeListByTopic(problem.topicId),
    [problem.topicId]
  );
  const { rows, loading } = usePracticeProgress(problems.map((p) => p.id));
  const solvedIds = getSolvedPracticeIds(rows);
  const unlocked =
    admin ||
    isCoursePracticeProblemUnlocked(problems, problem.id, solvedIds);

  useEffect(() => {
    if (admin || loading) return;
    if (!unlocked) {
      router.replace(courseTopicChallengeHref(moduleSlug, topicSlug));
    }
  }, [admin, loading, unlocked, router, moduleSlug, topicSlug]);

  if (!admin && loading) {
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
