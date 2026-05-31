"use client";

import type { TopicQuiz } from "@/lib/types";
import { TopicQuiz as TopicQuizComponent } from "@/components/quiz/TopicQuiz";

interface TopicQuizSectionProps {
  quiz: TopicQuiz;
}

export function TopicQuizSection({ quiz }: TopicQuizSectionProps) {
  return (
    <div className="mt-10">
      <TopicQuizComponent quiz={quiz} />
    </div>
  );
}
