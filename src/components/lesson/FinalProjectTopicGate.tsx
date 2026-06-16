"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lock, ArrowLeft } from "lucide-react";
import {
  getPrevFinalProjectTopic,
  isFinalProjectTopic,
  isFinalProjectTopicUnlocked,
} from "@/lib/final-project-progress";

interface FinalProjectTopicGateProps {
  topicId: string;
  moduleSlug: string;
  topicTitle: string;
  children: React.ReactNode;
}

export function FinalProjectTopicGate({
  topicId,
  moduleSlug,
  topicTitle,
  children,
}: FinalProjectTopicGateProps) {
  const [unlocked, setUnlocked] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isFinalProjectTopic(topicId)) {
      setUnlocked(true);
      setReady(true);
      return;
    }
    setUnlocked(isFinalProjectTopicUnlocked(topicId));
    setReady(true);

    const onStorage = () => {
      setUnlocked(isFinalProjectTopicUnlocked(topicId));
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("fp-progress-updated", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("fp-progress-updated", onStorage);
    };
  }, [topicId]);

  if (!ready) return null;

  if (!unlocked) {
    const prev = getPrevFinalProjectTopic(topicId);
    return (
      <div className="flex flex-col items-center justify-center px-4 py-20 text-center lg:py-28">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
          <Lock className="h-7 w-7 text-gray-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{topicTitle}</h2>
        <p className="mt-2 max-w-md text-sm text-gray-600">
          Complete all tasks in the previous step before unlocking this lesson.
          Finish every IDE exercise in order, then continue here.
        </p>
        {prev && (
          <Link
            href={`/learn/${moduleSlug}/${prev.slug}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {prev.title}
          </Link>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
