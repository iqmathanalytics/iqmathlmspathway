"use client";

import { getPublishedTopicCount } from "@/data/curriculum";
import { useProgress } from "@/contexts/ProgressContext";
import { ProgressBar } from "./ProgressBar";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { Loader2 } from "lucide-react";

function ProgressSkeleton() {
  const total = getPublishedTopicCount();
  return (
    <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4">
      <ProgressBar percent={0} label="Your progress (published topics)" />
      <p className="mt-2 text-xs text-gray-600">0 of {total} topics completed</p>
    </div>
  );
}

function ProgressTrackerInner() {
  const { progress, ready } = useProgress();
  const total = getPublishedTopicCount();
  const completed = progress.completedTopics.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (!ready) {
    return (
      <div className="flex justify-center rounded-xl border border-brand-100 bg-brand-50/50 p-6">
        <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4">
      <ProgressBar percent={percent} label="Your progress (published topics)" />
      <p className="mt-2 text-xs text-gray-600">
        {completed} of {total} topics completed
      </p>
    </div>
  );
}

export function ProgressTracker() {
  return (
    <ClientOnly fallback={<ProgressSkeleton />}>
      <ProgressTrackerInner />
    </ClientOnly>
  );
}
