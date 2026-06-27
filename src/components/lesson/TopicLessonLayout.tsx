"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LessonBlock } from "@/lib/types";
import { LessonContent } from "./LessonContent";
import { PythonIDE } from "@/components/ide/PythonIDE.lazy";
import { GroqChatPlayground } from "@/components/ai/GroqChatPlayground";
import { JupyterNotebookPanel } from "./JupyterNotebookPanel";
import { SetupChecklistPanel } from "./SetupChecklistPanel";
import { ConceptSummaryPanel } from "./ConceptSummaryPanel";
import { LangChainWorkflowPanel } from "./LangChainWorkflowPanel";
import { LangChainStepsChecklist } from "./LangChainStepsChecklist";
import { RagBasicsStepsChecklist } from "./RagBasicsStepsChecklist";
import { DocumentQaStepsChecklist } from "./DocumentQaStepsChecklist";
import { MultiAgentStepsChecklist } from "./MultiAgentStepsChecklist";
import { NextStepsStepsChecklist } from "./NextStepsStepsChecklist";
import { LangChainCopyProvider } from "./LangChainCopyContext";
import { LangChainPromptsGuide } from "./LangChainPromptsGuide";
import { LangChainLCELGuide } from "./LangChainLCELGuide";
import { LangChainAgentsGuide } from "./LangChainAgentsGuide";
import { LangChainLangSmithGuide } from "./LangChainLangSmithGuide";
import { HowToCreatePromptsPanel } from "./HowToCreatePromptsPanel";
import { SystemVsUserGuidePanel } from "./SystemVsUserGuidePanel";
import { FewShotPromptsPanel } from "./FewShotPromptsPanel";
import { ChainOfThoughtPanel } from "./ChainOfThoughtPanel";
import { BestPracticesPanel } from "./BestPracticesPanel";
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
import { useProgress } from "@/contexts/ProgressContext";

interface TopicLessonLayoutProps {
  blocks: LessonBlock[];
  topicId?: string;
  moduleSlug?: string;
  /** Content rendered at the top of the left scroll column (breadcrumb, header, buttons) */
  headerSlot?: React.ReactNode;
  /** Content rendered at the bottom of the left scroll column (takeaways, quiz, nav) */
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
  const { markIdeRan } = useProgress();
  const ideRef = useRef<HTMLElement>(null);

  // Detect which right-side panel this lesson needs
  const groqBlock     = useMemo(() => blocks.find((b) => b.type === "groq-playground"),    [blocks]);
  const jupyterBlock  = useMemo(() => blocks.find((b) => b.type === "jupyter-notebook"),   [blocks]);
  const setupBlock    = useMemo(() => blocks.find((b) => b.type === "setup-checklist"),    [blocks]);
  const conceptBlock        = useMemo(() => blocks.find((b) => b.type === "concept-card"),        [blocks]);
  const langchainWorkflow   = useMemo(() => blocks.find((b) => b.type === "langchain-workflow"),   [blocks]);
  const singleColumnBlock       = useMemo(() => blocks.find((b) => b.type === "single-column"),             [blocks]);
  const langchainChecklistBlock = useMemo(() => blocks.find((b) => b.type === "langchain-steps-checklist"), [blocks]);
  const ragBasicsChecklistBlock = useMemo(() => blocks.find((b) => b.type === "rag-basics-steps-checklist"), [blocks]);
  const documentQaChecklistBlock = useMemo(() => blocks.find((b) => b.type === "document-qa-steps-checklist"), [blocks]);
  const multiAgentChecklistBlock = useMemo(() => blocks.find((b) => b.type === "multi-agent-steps-checklist"), [blocks]);
  const nextStepsChecklistBlock = useMemo(() => blocks.find((b) => b.type === "next-steps-steps-checklist"), [blocks]);
  const langchainPromptsGuide   = useMemo(() => blocks.find((b) => b.type === "langchain-prompts-guide"),   [blocks]);
  const langchainLCELGuide      = useMemo(() => blocks.find((b) => b.type === "langchain-lcel-guide"),      [blocks]);
  const langchainAgentsGuide    = useMemo(() => blocks.find((b) => b.type === "langchain-agents-guide"),    [blocks]);
  const langchainLangSmithGuide = useMemo(() => blocks.find((b) => b.type === "langchain-langsmith-guide"), [blocks]);
  const howToCreatePromptsBlock = useMemo(() => blocks.find((b) => b.type === "how-to-create-prompts"), [blocks]);
  const systemVsUserGuideBlock  = useMemo(() => blocks.find((b) => b.type === "system-vs-user-guide"),  [blocks]);
  const fewShotGuideBlock       = useMemo(() => blocks.find((b) => b.type === "few-shot-guide"),        [blocks]);
  const cotGuideBlock           = useMemo(() => blocks.find((b) => b.type === "cot-guide"),             [blocks]);
  const bestPracticesBlock      = useMemo(() => blocks.find((b) => b.type === "best-practices-guide"),  [blocks]);

  // Detect if this is a Final Project topic with sequential task gating
  const sequential = topicId != null && isFinalProjectTopic(topicId);

  const practices = useMemo(
    () =>
      blocks
        .map((block, index) => ({ block, index }))
        .filter((x) => x.block.type === "practice"),
    [blocks]
  );

  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
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
  const [practiceReloadKey, setPracticeReloadKey] = useState(0);

  useEffect(() => {
    if (hydrated && sequential) setActivePractice(initialPractice);
  }, [hydrated, sequential, initialPractice]);

  const activeBlock = practices[activePractice]?.block;
  const activeCode = activeBlock?.starterCode ?? 'print("Hello, Python!")';
  const activeLabel = activeBlock?.practiceLabel ?? `Exercise ${activePractice + 1}`;

  const scrollToIde = useCallback(() => {
    if (!ideRef.current) return;
    ideRef.current.scrollTop = 0;
    ideRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const selectPractice = useCallback(
    (index: number) => {
      if (sequential && topicId && !isExerciseUnlocked(topicId, index)) return;
      setActivePractice(index);
      setPracticeReloadKey((key) => key + 1);
      scrollToIde();
    },
    [sequential, topicId, scrollToIde]
  );

  const nextPractice = useCallback(() => {
    setActivePractice((current) => {
      const next = Math.min(current + 1, practices.length - 1);
      if (sequential && topicId && !isExerciseUnlocked(topicId, next)) return current;
      return next;
    });
    setPracticeReloadKey((key) => key + 1);
    scrollToIde();
  }, [practices.length, scrollToIde, sequential, topicId]);

  const completeExercise = useCallback(
    (index: number) => {
      if (!topicId) return;
      const updated = markExerciseComplete(topicId, index);
      setCompletedExercises(new Set(updated));
      notifyFpProgress();
      if (index < practices.length - 1) {
        setActivePractice(index + 1);
        setPracticeReloadKey((key) => key + 1);
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
    sequential && topicId != null && areAllExercisesComplete(topicId, practices.length);
  const nextTopic = topicId && allDone ? getNextFinalProjectTopic(topicId) : null;

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

  const layoutContent = (
    <LessonPracticeContext.Provider value={practiceContext}>
      {/*
        Two-column: outer clips overflow, each column scrolls independently.
        Single-column: outer itself is the scroll container (no right aside).
      */}
      <div className={`lg:flex-1 lg:min-h-0 ${
        singleColumnBlock
          ? "lg:overflow-y-auto [scrollbar-width:thin]"
          : "lg:overflow-hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,42%)]"
      }`}>

        {/* ── Left column ── */}
        <div className={`min-w-0 py-6 px-4 sm:px-6 lg:px-8 xl:px-10 ${
          singleColumnBlock
            ? "max-w-3xl mx-auto"
            : "lg:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        }`}>
          {sequential && (
            <div className="mb-4 rounded-xl border border-brand-200 bg-brand-50/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-800">
                Sequential build
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Complete each task in the IDE, then click{" "}
                <strong>Complete task &amp; continue</strong> to unlock the next step.
              </p>
            </div>
          )}

          {headerSlot && <div className="mb-6">{headerSlot}</div>}
          <div data-walkthrough="lesson-content">
            <LessonContent
              blocks={blocks}
              practiceMode="sidebar"
              activePracticeIndex={activePractice}
              onSelectPractice={selectPractice}
            />
          </div>

          {allDone && nextTopic && moduleSlug && (
            <div className="mt-6 rounded-xl border-2 border-green-300 bg-green-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <div className="flex-1">
                  <p className="font-semibold text-green-900">All tasks complete!</p>
                  <p className="mt-1 text-sm text-green-800">
                    You finished every exercise in this step. Continue to the next part of the project.
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

        {/* ── Right column: hidden for single-column topics, otherwise panel/IDE ── */}
        <aside
          ref={ideRef}
          data-walkthrough="lesson-ide"
          className={`mt-6 lg:mt-0 lg:overflow-y-auto lg:border-l lg:border-gray-200 lg:pl-6 xl:pl-8
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden${singleColumnBlock ? " hidden lg:hidden" : ""}`}
        >
          {groqBlock ? (
            /* Type D — Groq chatbot playground */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6 h-full flex flex-col min-h-[520px]">
              <GroqChatPlayground defaultSystemPrompt={groqBlock.systemPrompt} />
            </div>
          ) : jupyterBlock ? (
            /* Type C / E — Jupyter notebook instructions panel */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">📓</span>
                Jupyter Notebook
              </div>
              <JupyterNotebookPanel
                installCmd={jupyterBlock.installCmd ?? "!pip install groq"}
                cells={jupyterBlock.notebookCells ?? []}
              />
            </div>
          ) : setupBlock ? (
            /* Type B — Setup checklist panel */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✅</span>
                Setup Guide
              </div>
              <SetupChecklistPanel steps={setupBlock.setupSteps ?? []} />
            </div>
          ) : conceptBlock ? (
            /* Type A — Concept summary reference card */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🧠</span>
                Concept Reference
              </div>
              <ConceptSummaryPanel
                summary={conceptBlock.conceptSummary!}
                title={conceptBlock.content ?? ""}
              />
            </div>
          ) : langchainWorkflow ? (
            /* LangChain Module 2 — RAG workflow panel */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🔗</span>
                LangChain Workflow
              </div>
              <LangChainWorkflowPanel />
            </div>
          ) : langchainChecklistBlock ? (
            /* LangChain Setup Guide — copy-progress checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✅</span>
                Step Tracker
              </div>
              <LangChainStepsChecklist />
            </div>
          ) : ragBasicsChecklistBlock ? (
            /* RAG Basics Guide — copy-progress checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✅</span>
                Step Tracker
              </div>
              <RagBasicsStepsChecklist />
            </div>
          ) : documentQaChecklistBlock ? (
            /* Document Q&A Guide — copy-progress checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✅</span>
                Step Tracker
              </div>
              <DocumentQaStepsChecklist />
            </div>
          ) : multiAgentChecklistBlock ? (
            /* Multi-Agent Guide — copy-progress checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✅</span>
                Step Tracker
              </div>
              <MultiAgentStepsChecklist />
            </div>
          ) : nextStepsChecklistBlock ? (
            /* Next Steps Guide — copy-progress checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✅</span>
                Step Tracker
              </div>
              <NextStepsStepsChecklist />
            </div>
          ) : langchainPromptsGuide ? (
            /* LangChain Prompt Templates — Jupyter guide + checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">📓</span>
                Try in Jupyter
              </div>
              <LangChainPromptsGuide />
            </div>
          ) : langchainLCELGuide ? (
            /* LangChain LCEL — Jupyter guide + checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">📓</span>
                Try in Jupyter
              </div>
              <LangChainLCELGuide />
            </div>
          ) : langchainAgentsGuide ? (
            /* LangChain Agents & Tools — Jupyter guide + checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🤖</span>
                Try in Jupyter
              </div>
              <LangChainAgentsGuide />
            </div>
          ) : langchainLangSmithGuide ? (
            /* LangChain LangSmith — Jupyter guide + checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🔍</span>
                Try in Jupyter
              </div>
              <LangChainLangSmithGuide />
            </div>
          ) : howToCreatePromptsBlock ? (
            /* Prompt Engineering — How to Create Prompts checklist */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">✍️</span>
                Try These Prompts
              </div>
              <HowToCreatePromptsPanel />
            </div>
          ) : systemVsUserGuideBlock ? (
            /* Prompt Engineering — System vs User decision guide */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🗂️</span>
                What Goes Where?
              </div>
              <SystemVsUserGuidePanel />
            </div>
          ) : fewShotGuideBlock ? (
            /* Prompt Engineering — Few-Shot practice panel */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🧪</span>
                Try It: Few-Shot
              </div>
              <FewShotPromptsPanel />
            </div>
          ) : cotGuideBlock ? (
            /* Prompt Engineering — Chain-of-Thought practice panel */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">🔗</span>
                Try It: Chain-of-Thought
              </div>
              <ChainOfThoughtPanel />
            </div>
          ) : bestPracticesBlock ? (
            /* Prompt Engineering — Best Practices copy-to-try panel */
            <div className="lg:py-6 lg:pb-10 pr-4 sm:pr-6">
              <div className="mb-3 hidden items-center gap-2 text-sm font-medium text-gray-700 lg:flex">
                <span className="text-base">📋</span>
                Try These Prompts
              </div>
              <BestPracticesPanel />
            </div>
          ) : (
            /* Default — Python IDE (with optional sequential task gating for Final Project) */
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
                  <p className="mt-0.5 text-sm font-semibold text-gray-900">{activeLabel}</p>
                  <p className="mt-1 text-xs text-gray-600">
                    {sequential ? "Task" : "Exercise"} {activePractice + 1} of {practices.length}
                    {sequential && ` · ${completedExercises.size} completed`}
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
                        {done && unlocked && <CheckCircle2 className="h-3 w-3" />}
                        {p.block.practiceLabel ?? (sequential ? `Task ${i + 1}` : `Exercise ${i + 1}`)}
                      </button>
                    );
                  })}
                </div>
              )}

              <PythonIDE
                key={`practice-${activePractice}-${practiceReloadKey}-${activeCode.slice(0, 32)}`}
                initialCode={activeCode}
                editorHeight="280px"
                consoleMaxHeight={260}
                onRun={topicId ? () => markIdeRan(topicId) : undefined}
              />

              {activeBlock?.practicePrompt && (
                <p className="mt-3 hidden text-sm text-gray-700 lg:block">
                  {activeBlock.practicePrompt}
                </p>
              )}

              <div className="mt-3 hidden flex-wrap items-center gap-2 lg:flex">
                <p className="text-xs text-gray-500">
                  {sequential ? "Run your code, then continue when ready." : "Press Ctrl+Enter to run."}
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
                {sequential && checkComplete(activePractice) && activePractice < practices.length - 1 && (
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
          )}
        </aside>
      </div>
    </LessonPracticeContext.Provider>
  );

  // Wrap with copy-tracking context for the LangChain setup guide / RAG Basics guide / Document Q&A guide / Multi-Agent guide / Next Steps guide
  return (langchainChecklistBlock || ragBasicsChecklistBlock || documentQaChecklistBlock || multiAgentChecklistBlock || nextStepsChecklistBlock) ? (
    <LangChainCopyProvider>{layoutContent}</LangChainCopyProvider>
  ) : layoutContent;
}
