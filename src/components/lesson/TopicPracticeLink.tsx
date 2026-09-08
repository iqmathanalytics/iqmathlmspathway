"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { useTopicPracticeSlide } from "@/components/lesson/TopicPracticeSlideContext";
import { courseTopicChallengeHref } from "@/lib/course-practice-links";

interface TopicPracticeLinkProps {
  moduleSlug: string;
  topicSlug: string;
  count: number;
}

export function TopicPracticeLink({
  moduleSlug,
  topicSlug,
  count,
}: TopicPracticeLinkProps) {
  const slide = useTopicPracticeSlide();
  if (count <= 0) return null;

  return (
    <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50/60 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
          <div>
            <p className="font-semibold text-gray-900">Module challenges</p>
            <p className="mt-0.5 text-sm text-gray-600">
              {count} question{count === 1 ? "" : "s"} from this lesson — open
              with the terminal button on the right (separate from Practice hub).
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {slide && (
            <button
              type="button"
              onClick={() => slide.openPracticeSlide()}
              className="inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Open challenges
            </button>
          )}
          <Link
            href={courseTopicChallengeHref(moduleSlug, topicSlug)}
            className="inline-flex rounded-lg border border-brand-300 bg-white px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-50"
          >
            Full list
          </Link>
        </div>
      </div>
    </div>
  );
}
