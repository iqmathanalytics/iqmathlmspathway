"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LessonBlock } from "@/lib/types";
import { LessonContent } from "./LessonContent";
import { PythonIDE } from "@/components/ide/PythonIDE.lazy";
import { LessonPracticeContext } from "./LessonPracticeContext";
import {
  areAllExercisesComplete,
  getCompletedExercises,
  getFirstIncompleteExercise,
  getNextFinalProjectTopic,
  isExerciseComplete,
  isExerciseUnlocked,
  isFinalProjectTopic,
  markExerciseComplete,
} from "@/lib/final-project-progress";
import { ArrowRight, CheckCircle2, Lock, Pencil } from "lucide-react";

interface TopicLessonLayoutProps {
  blocks: LessonBlock[];
  topicId?: string;
  moduleSlug?: string;
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
}

function notifyFpProgress() {
  window.dispatchEvent(new Event("fp-progress-updated"));
}

export function TopicLessonLayout({
  blocks,
  topicId,
  moduleSlug,
  headerSlot,
  footerSlot,
}: TopicLessonLayoutProps) {
  const ideRef = useRef<HTMLElement>(null);
  const sequential = topicId != null && isFinalProjectTopic(topicId);

  const practices = useMemo(
    () =>
      blocks
        .map((block, index) => ({ block, index }))
        .filter((x) => x.block.type === "practice"),
    [blocks]
  );

  const [completedExercises, setCompletedExercises] = useState<Set<number>>(
    new Set()
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!sequential || !topicId) {
      setHydrated(true);
      return;
    }
    setCompletedExercises(new Set(getCompletedExercises(topicId)));
    setHydrated(true);
  }, [sequential, topicId]);

  const initialPractice = useMemo(() => {
    if (!sequential || !topicId) return 0;
    return getFirstIncompleteExercise(topicId, practices.length);
  }, [sequential, topicId, practices.length]);

  const [activePractice, setActivePractice] = useState(0);

  useEffect(() => {
    if (hydrated && sequential) {
      setActivePractice(initialPractice);
    }
  }, [hydrated, sequential, initialPractice]);

  const activeBlock = practices[activePractice]?.block;
  const activeCode =
    activeBlock?.starterCode ?? 'print("Hello, Python!")';
  const activeLabel =
    activeBlock?.practiceLabel ?? `Exercise ${activePractice + 1}`;

  const scrollToIde = useCallback(() => {
    if (ideRef.current) ideRef.current.scrollTop = 0;
  }, []);

  const selectPractice = useCallback(
    (index: number) => {
      if (sequential && topicId && !isExerciseUnlocked(topicId, index)) {
        return;
      }
      setActivePractice(index);
      scrollToIde();
    },
    [sequential, topicId, scrollToIde]
  );

  const nextPractice = useCallback(() => {
    setActivePractice((current) => {
      const next = Math.min(current + 1, practices.length - 1);
      if (sequential && topicId && !isExerciseUnlocked(topicId, next)) {
        return current;
      }
      return next;
    });
    scrollToIde();
  }, [practices.length, scrollToIde, sequential, topicId]);

  const completeExercise = useCallback(
    (index: number) => {
      if (!topicId) return;
      const updated = markExerciseComplete(topicId, index);
      setCompletedExercises(new Set(updated));
      notifyFpProgress();
      if (index < practices.length - 1) {
        const next = index + 1;
        setActivePractice(next);
        scrollToIde();
      }
    },
    [topicId, practices.length, scrollToIde]
  );

  const checkUnlocked = useCallback(
    (index: number) => {
      if (!sequential || !topicId) return true;
      return isExerciseUnlocked(topicId, index);
    },
    [sequential, topicId]
  );

  const checkComplete = useCallback(
    (index: number) => {
      if (!sequential || !topicId) return false;
      return isExerciseComplete(topicId, index);
    },
    [sequential, topicId]
  );

  const allDone =
    sequential &&
    topicId != null &&
    areAllExercisesComplete(topicId, practices.length);

  const nextTopic =
    topicId && allDone ? getNextFinalProjectTopic(topicId) : null;

  const practiceContext = useMemo(
    () => ({
      activeIndex: activePractice,
      total: practices.length,
      selectPractice,
      nextPractice,
      scrollToIde,
      sequential,
      topicId,
      completedExercises,
      isExerciseUnlocked: checkUnlocked,
      isExerciseComplete: checkComplete,
      completeExercise,
    }),
    [
      activePractice,
      practices.length,
      selectPractice,
      nextPractice,
      scrollToIde,
      sequential,
      topicId,
      completedExercises,
      checkUnlocked,
      checkComplete,
      completeExercise,
    ]
  );

  return (
    <LessonPracticeContext.Provider value={practiceContext}>
      <div className="lg:flex-1 lg:min-h-0 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,42%)] lg:overflow-hidden">
        <div className="min-w-0 py-6 px-4 sm:px-6 lg:px-8 xl:px-10 lg:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sequential && (
            <div className="mb-4 rounded-xl border border-brand-200 bg-brand-50/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-800">
                Sequential build
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Complete each task in the IDE, then click{" "}
                <strong>Complete task &amp; continue</strong> to unlock the next
                step.
              </p>
            </div>
          )}

          {headerSlot && <div className="mb-6">{headerSlot}</div>}
          <LessonContent
            blocks={blocks}
            practiceMode="sidebar"
            activePracticeIndex={activePractice}
            onSelectPractice={selectPractice}
          />

          {allDone && nextTopic && moduleSlug && (
            <div className="mt-6 rounded-xl border-2 border-green-300 bg-green-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <div className="flex-1">
                  <p className="font-semibold text-green-900">
                    All tasks complete!
                  </p>
                  <p className="mt-1 text-sm text-green-800">
                    You finished every exercise in this step. Continue to the
                    next part of the project.
                  </p>
                  <Link
                    href={`/learn/${moduleSlug}/${nextTopic.slug}`}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                  >
                    Next: {nextTopic.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {footerSlot && <div className="mt-8 pb-10">{footerSlot}</div>}
        </div>

        <aside
          ref={ideRef}
          className="mt-6 lg:mt-0 lg:overflow-y-auto lg:border-l lg:border-gray-200 lg:pl-6 xl:pl-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
            <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
              <Pencil className="h-4 w-4 text-brand-600" />
              Python IDE
            </div>

            {practices.length > 0 && (
              <div className="mb-3 rounded-xl border border-brand-200 bg-brand-50/50 px-3 py-2.5">
                <p className="text-xs font-medium uppercase tracking-wide text-brand-700">
                  {sequential ? "Current task" : "Current exercise"}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-gray-900">
                  {activeLabel}
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Task {activePractice + 1} of {practices.length}
                  {sequential &&
                    ` · ${completedExercises.size} completed`}
                </p>
              </div>
            )}

            {practices.length > 1 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {practices.map((p, i) => {
                  const unlocked = checkUnlocked(i);
                  const done = checkComplete(i);
                  return (
                    <button
                      key={p.index}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => selectPractice(i)}
                      disabled={!unlocked}
                      className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                        i === activePractice
                          ? "bg-brand-600 text-white"
                          : done
                            ? "bg-green-100 text-green-800"
                            : unlocked
                              ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              : "cursor-not-allowed bg-gray-50 text-gray-400"
                      }`}
                    >
                      {!unlocked && <Lock className="h-3 w-3" />}
                      {done && unlocked && (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                      {p.block.practiceLabel ?? `Task ${i + 1}`}
                    </button>
                  );
                })}
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
                Run your code, then continue when ready.
              </p>
              {sequential && !checkComplete(activePractice) && (
                <button
                  type="button"
                  onClick={() => completeExercise(activePractice)}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Complete task &amp; continue
                </button>
              )}
              {sequential &&
                checkComplete(activePractice) &&
                activePractice < practices.length - 1 && (
                  <button
                    type="button"
                    onClick={nextPractice}
                    className="ml-auto inline-flex items-center gap-1 rounded-lg border border-brand-300 bg-white px-3 py-1.5 text-xs font-medium text-brand-700 transition hover:bg-brand-50"
                  >
                    Go to next task
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              {!sequential && activePractice < practices.length - 1 && (
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
