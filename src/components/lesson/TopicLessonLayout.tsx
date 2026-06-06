"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { LessonBlock } from "@/lib/types";
import { LessonContent } from "./LessonContent";
import { PythonIDE } from "@/components/ide/PythonIDE.lazy";
import { LessonPracticeContext } from "./LessonPracticeContext";
import { ArrowRight, Pencil } from "lucide-react";

interface TopicLessonLayoutProps {
  blocks: LessonBlock[];
}

export function TopicLessonLayout({ blocks }: TopicLessonLayoutProps) {
  const ideRef = useRef<HTMLElement>(null);

  const practices = useMemo(
    () =>
      blocks
        .map((block, index) => ({ block, index }))
        .filter((x) => x.block.type === "practice"),
    [blocks]
  );

  const [activePractice, setActivePractice] = useState(0);

  const activeBlock = practices[activePractice]?.block;
  const activeCode =
    activeBlock?.starterCode ?? 'print("Hello, Python!")';
  const activeLabel =
    activeBlock?.practiceLabel ?? `Exercise ${activePractice + 1}`;

  const scrollToIde = useCallback(() => {
    ideRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  const selectPractice = useCallback(
    (index: number) => {
      setActivePractice(index);
      scrollToIde();
    },
    [scrollToIde]
  );

  const nextPractice = useCallback(() => {
    setActivePractice((current) => {
      const next = Math.min(current + 1, practices.length - 1);
      return next;
    });
    scrollToIde();
  }, [practices.length, scrollToIde]);

  const practiceContext = useMemo(
    () => ({
      activeIndex: activePractice,
      total: practices.length,
      selectPractice,
      nextPractice,
      scrollToIde,
    }),
    [activePractice, practices.length, selectPractice, nextPractice, scrollToIde]
  );

  return (
    <LessonPracticeContext.Provider value={practiceContext}>
      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,42%)] lg:items-start lg:gap-8 xl:gap-10">
        <div className="min-w-0">
          <LessonContent
            blocks={blocks}
            practiceMode="sidebar"
            activePracticeIndex={activePractice}
            onSelectPractice={selectPractice}
          />
        </div>

        <aside ref={ideRef} className="mt-8 lg:mt-0">
          <div className="lg:sticky lg:top-20">
            <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
              <Pencil className="h-4 w-4 text-brand-600" />
              Python IDE
            </div>

            {practices.length > 0 && (
              <div className="mb-3 rounded-xl border border-brand-200 bg-brand-50/50 px-3 py-2.5">
                <p className="text-xs font-medium uppercase tracking-wide text-brand-700">
                  Current exercise
                </p>
                <p className="mt-0.5 text-sm font-semibold text-gray-900">
                  {activeLabel}
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  {activePractice + 1} of {practices.length}
                </p>
              </div>
            )}

            {practices.length > 1 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {practices.map((p, i) => (
                  <button
                    key={p.index}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectPractice(i)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      i === activePractice
                        ? "bg-brand-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {p.block.practiceLabel ?? `Exercise ${i + 1}`}
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

            {activeBlock?.practicePrompt && (
              <p className="mt-3 hidden text-sm text-gray-700 lg:block">
                {activeBlock.practicePrompt}
              </p>
            )}

            <div className="mt-3 hidden flex-wrap items-center gap-2 lg:flex">
              <p className="text-xs text-gray-500">
                Press Ctrl+Enter to run.
              </p>
              {activePractice < practices.length - 1 && (
                <button
                  type="button"
                  onClick={nextPractice}
                  className="ml-auto inline-flex items-center gap-1 rounded-lg border border-brand-300 bg-white px-3 py-1.5 text-xs font-medium text-brand-700 transition hover:bg-brand-50"
                >
                  Next exercise
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </LessonPracticeContext.Provider>
  );
}
