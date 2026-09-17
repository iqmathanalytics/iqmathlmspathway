"use client";

import { ArrowRight, Play } from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";

interface CodeExercisePanelProps {
  practiceIndex: number;
  filename: string;
  /** Prefer this when available — avoids fragile DOM extraction from highlighted JSX. */
  code?: string;
  children: React.ReactNode;
}

export function CodeExercisePanel({
  practiceIndex,
  filename,
  children,
}: CodeExercisePanelProps) {
  const practice = useLessonPractice();
  const isActive = practice?.activeIndex === practiceIndex;
  const hasIde = (practice?.total ?? 0) > 0;
  const hasNext = hasIde && practiceIndex < (practice?.total ?? 0) - 1;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/15 bg-white/60 transition-colors ${
        isActive ? "ring-2 ring-brand-400 ring-offset-1" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[11px] text-gray-500">{filename}</span>
        <div className="ml-auto flex items-center gap-1">
          {hasIde && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => practice?.selectPractice(practiceIndex)}
              title={isActive ? "Loaded in IDE" : "Load in IDE"}
              className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
              }`}
            >
              <Play className="h-2.5 w-2.5" />
              IDE
            </button>
          )}
          {isActive && hasNext && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => practice?.nextPractice()}
              title="Next exercise"
              className="inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Next
              <ArrowRight className="h-2.5 w-2.5" />
            </button>
          )}
        </div>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}
