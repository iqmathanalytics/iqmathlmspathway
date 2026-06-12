"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { markTopicCompleteAsync } from "@/lib/progress-service";
import { isIdeRan, isQuizDone } from "@/lib/progress";
import { CheckCircle2, Circle, Lock } from "lucide-react";

interface MarkCompleteButtonProps {
  topicId: string;
  hasQuiz: boolean;
}

export function MarkCompleteButton({ topicId, hasQuiz }: MarkCompleteButtonProps) {
  const { user } = useAuth();
  const { progress, ready } = useProgress();
  const [saving, setSaving] = useState(false);

  const done      = ready && progress.completedTopics.includes(topicId);
  const ideDone   = ready && isIdeRan(progress, topicId);
  const quizDone  = ready && (!hasQuiz || isQuizDone(progress, topicId));
  const canMark   = ideDone && quizDone;

  async function handleClick() {
    if (!user || !canMark) return;
    setSaving(true);
    await markTopicCompleteAsync(user.id, topicId);
    setSaving(false);
  }

  if (done) {
    return (
      <div className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-green-500 bg-green-50 py-3 text-sm font-semibold text-green-700">
        <CheckCircle2 className="h-5 w-5 text-green-500" />
        Topic completed!
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <p className="mb-3 text-sm font-semibold text-gray-800">
        Complete these steps to finish this topic:
      </p>

      <ul className="mb-4 space-y-2">
        <li className="flex items-center gap-2 text-sm">
          {ideDone
            ? <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
            : <Circle className="h-4 w-4 shrink-0 text-gray-300" />}
          <span className={ideDone ? "text-gray-600 line-through" : "text-gray-700"}>
            Run code in the Python IDE at least once
          </span>
        </li>
        {hasQuiz && (
          <li className="flex items-center gap-2 text-sm">
            {quizDone
              ? <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
              : <Circle className="h-4 w-4 shrink-0 text-gray-300" />}
            <span className={quizDone ? "text-gray-600 line-through" : "text-gray-700"}>
              Complete the topic quiz
            </span>
          </li>
        )}
      </ul>

      <button
        type="button"
        onClick={handleClick}
        disabled={!canMark || saving || !user}
        className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-600 bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:border-gray-300 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        {canMark
          ? <CheckCircle2 className="h-5 w-5" />
          : <Lock className="h-5 w-5" />}
        {saving ? "Saving…" : canMark ? "Mark this topic as complete" : "Complete steps above first"}
      </button>
    </div>
  );
}
