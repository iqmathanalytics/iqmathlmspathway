"use client";

import type { ReactNode } from "react";
import { ArrowLeft, Loader2, Lock } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { isTopicProgressionDone } from "@/lib/topic-locking";

interface TopicAccessGateProps {
  previousTopicId?: string;
  previousTopicTitle?: string;
  previousTopicHasQuiz?: boolean;
  moduleHref: string;
  children: ReactNode;
}

export function TopicAccessGate({
  previousTopicId,
  previousTopicTitle,
  previousTopicHasQuiz = false,
  moduleHref,
  children,
}: TopicAccessGateProps) {
  const { progress, ready } = useProgress();

  if (!ready) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  const unlocked =
    !previousTopicId ||
    isTopicProgressionDone(progress, previousTopicId, previousTopicHasQuiz);

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
          <Lock className="h-7 w-7" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-gray-900">Topic locked</h1>
        <p className="mt-2 text-gray-600">
          Complete {previousTopicTitle ? `"${previousTopicTitle}"` : "the previous topic"} to unlock this lesson.
        </p>
        <NavigationLink
          href={moduleHref}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to module topics
        </NavigationLink>
      </div>
    );
  }

  return <>{children}</>;
}
