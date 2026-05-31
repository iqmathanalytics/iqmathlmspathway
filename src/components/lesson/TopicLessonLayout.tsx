"use client";

import { useMemo, useState } from "react";
import type { LessonBlock } from "@/lib/types";
import { LessonContent } from "./LessonContent";
import { PythonIDE } from "@/components/ide/PythonIDE.lazy";
import { Pencil } from "lucide-react";

interface TopicLessonLayoutProps {
  blocks: LessonBlock[];
}

export function TopicLessonLayout({ blocks }: TopicLessonLayoutProps) {
  const practices = useMemo(
    () =>
      blocks
        .map((block, index) => ({ block, index }))
        .filter((x) => x.block.type === "practice"),
    [blocks]
  );

  const [activePractice, setActivePractice] = useState(0);

  const activeCode =
    practices[activePractice]?.block.starterCode ?? 'print("Hello, Python!")';

  return (
    <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,42%)] lg:items-start lg:gap-8 xl:gap-10">
      <div className="min-w-0">
        <LessonContent
          blocks={blocks}
          practiceMode="sidebar"
          activePracticeIndex={activePractice}
          onSelectPractice={setActivePractice}
        />
      </div>

      <aside className="mt-8 lg:mt-0">
        <div className="lg:sticky lg:top-20">
          <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
            <Pencil className="h-4 w-4 text-brand-600" />
            Python IDE
          </div>
          {practices.length > 1 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {practices.map((p, i) => (
                <button
                  key={p.index}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setActivePractice(i)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    i === activePractice
                      ? "bg-brand-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Exercise {i + 1}
                </button>
              ))}
            </div>
          )}
          <PythonIDE
            key={`practice-${activePractice}-${activeCode.slice(0, 32)}`}
            initialCode={activeCode}
            editorHeight="280px"
            consoleMaxHeight={260}
          />
          <p className="mt-2 hidden text-xs text-gray-500 lg:block">
            Use the editor to try examples from the lesson. Press Ctrl+Enter to run.
          </p>
        </div>
      </aside>
    </div>
  );
}
