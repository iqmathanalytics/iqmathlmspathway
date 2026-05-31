"use client";

import type { LessonBlock } from "@/lib/types";
import { FlowDiagram } from "@/components/visual/FlowDiagram";
import { Lightbulb, Code2, Pencil } from "lucide-react";

interface LessonContentProps {
  blocks: LessonBlock[];
  /** When sidebar, practice blocks show prompts only (IDE is beside content) */
  practiceMode?: "embedded" | "sidebar";
  activePracticeIndex?: number;
  onSelectPractice?: (index: number) => void;
}

export function LessonContent({
  blocks,
  practiceMode = "sidebar",
  activePracticeIndex = 0,
  onSelectPractice,
}: LessonContentProps) {
  let practiceCounter = -1;

  return (
    <div className="lesson-prose max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="mt-8 mb-3 text-xl font-bold text-gray-900">
                {block.content}
              </h2>
            );
          case "paragraph":
            return <p key={i}>{block.content}</p>;
          case "list":
            return (
              <ul key={i}>
                {block.items?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "tip":
            return (
              <div
                key={i}
                className="my-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950"
              >
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-sm leading-relaxed">{block.content}</p>
              </div>
            );
          case "visual":
            return block.diagram ? (
              <FlowDiagram key={i} diagram={block.diagram} />
            ) : null;
          case "code":
            return (
              <div key={i} className="my-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Code2 className="h-4 w-4" />
                  Example code
                </div>
                <pre className="overflow-x-auto rounded-xl bg-gray-900 p-4 font-mono text-sm text-green-100">
                  {block.code}
                </pre>
              </div>
            );
          case "practice": {
            practiceCounter += 1;
            const practiceIdx = practiceCounter;
            const isActive = practiceIdx === activePracticeIndex;

            if (practiceMode === "sidebar") {
              return (
                <div
                  key={i}
                  id={`practice-${practiceIdx}`}
                  className={`my-6 rounded-xl border-2 p-4 transition-colors ${
                    isActive
                      ? "border-brand-300 bg-brand-50/40"
                      : "border-gray-200 bg-gray-50/50"
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-brand-900">
                    <Pencil className="h-4 w-4" />
                    Practice
                  </div>
                  {block.practicePrompt && (
                    <p className="text-gray-700">{block.practicePrompt}</p>
                  )}
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => onSelectPractice?.(practiceIdx)}
                    className="mt-3 text-sm font-medium text-brand-700 hover:text-brand-800"
                  >
                    {isActive
                      ? "Active in IDE →"
                      : "Load this exercise in the IDE →"}
                  </button>
                </div>
              );
            }

            return null;
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
