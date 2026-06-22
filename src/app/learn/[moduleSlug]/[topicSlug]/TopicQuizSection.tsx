"use client";

import type { TopicQuiz } from "@/lib/types";
import { TopicQuiz as TopicQuizComponent } from "@/components/quiz/TopicQuiz";
import { useProgress } from "@/contexts/ProgressContext";
import { CheckCircle2 } from "lucide-react";

interface TopicQuizSectionProps {
  quiz: TopicQuiz;
}

export function TopicQuizSection({ quiz }: TopicQuizSectionProps) {
  const { progress, ready } = useProgress();
  const savedScore = progress.quizScores[quiz.topicId];

  if (!ready) {
    return (
      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Checking quiz progress...</p>
      </div>
    );
  }

  if (savedScore !== undefined) {
    return (
      <div className="mt-10 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
        <h3 className="mt-2 text-lg font-semibold text-gray-900">Quiz already complete</h3>
        <p className="mt-1 text-gray-600">
          Your saved score is {savedScore}%. You can continue or mark the topic complete.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <TopicQuizComponent quiz={quiz} />
    </div>
  );
}
