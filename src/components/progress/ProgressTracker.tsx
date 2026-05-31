"use client";

import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/progress";
import { getPublishedTopicCount } from "@/data/curriculum";
import { ProgressBar } from "./ProgressBar";
import { ClientOnly } from "@/components/ui/ClientOnly";

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
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(0);
  const total = getPublishedTopicCount();

  useEffect(() => {
    const p = loadProgress();
    const done = p.completedTopics.length;
    setCompleted(done);
    setPercent(total > 0 ? Math.round((done / total) * 100) : 0);
  }, [total]);

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
