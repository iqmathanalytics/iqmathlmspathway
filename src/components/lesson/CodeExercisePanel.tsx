"use client";

import { useCallback, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Play } from "lucide-react";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";
import { extractRunnableCodeFromElement } from "@/lib/extract-runnable-code";
import {
  isVisualizationCode,
  prepareVisualizationRunCode,
} from "@/lib/visualization-code";

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
  code,
  children,
}: CodeExercisePanelProps) {
  const practice = useLessonPractice();
  const isActive = practice?.activeIndex === practiceIndex;
  const hasIde = (practice?.total ?? 0) > 0;
  const hasNext = hasIde && practiceIndex < (practice?.total ?? 0) - 1;
  const hasPrev = hasIde && practiceIndex > 0;
  const preRef = useRef<HTMLPreElement>(null);
  const [hasRun, setHasRun] = useState(false);
  const {
    lines,
    loading,
    running,
    error,
    runCode,
    clearConsole,
    stdinActive,
    stdinDraft,
    setStdinDraft,
    submitStdin,
  } = usePyodideRunner({ autoload: false });

  const handleRun = useCallback(async () => {
    const fromProp = code?.trim() ?? "";
    const fromDom = preRef.current
      ? extractRunnableCodeFromElement(preRef.current)
      : "";
    const source = fromProp || fromDom;
    if (!source.trim()) return;
    setHasRun(true);
    const toRun = isVisualizationCode(source)
      ? prepareVisualizationRunCode(source)
      : source;
    await runCode(toRun);
  }, [code, runCode]);

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
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => void handleRun()}
            disabled={running}
            title="Run this example and show the output"
            className="inline-flex items-center gap-0.5 rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold text-white transition-colors hover:bg-emerald-500 disabled:opacity-70"
          >
            {running ? (
              <Loader2 className="h-2.5 w-2.5 animate-spin" />
            ) : (
              <Play className="h-2.5 w-2.5" />
            )}
            {running ? "Running…" : "Run"}
          </button>
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
      <pre
        ref={preRef}
        className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose"
      >
        {children}
      </pre>
      {hasRun && (
        <ConsolePanel
          lines={lines}
          loading={loading}
          running={running}
          error={error}
          onClear={clearConsole}
          maxHeight={180}
          showInput
          stdinActive={stdinActive}
          stdinDraft={stdinDraft}
          onStdinDraftChange={setStdinDraft}
          onStdinSubmit={submitStdin}
          emptyHint={
            !running && !loading && lines.length === 0
              ? "Ran with no printed output. Add print(...) to see values."
              : undefined
          }
          actions={
            <>
              {hasPrev && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => practice?.selectPractice(practiceIndex - 1)}
                  className="inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  <ArrowLeft className="h-2.5 w-2.5" />
                  Prev
                </button>
              )}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => void handleRun()}
                disabled={running}
                className="inline-flex items-center gap-0.5 rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold text-white hover:bg-emerald-500 disabled:opacity-70"
              >
                {running ? (
                  <Loader2 className="h-2.5 w-2.5 animate-spin" />
                ) : (
                  <Play className="h-2.5 w-2.5" />
                )}
                {running ? "Running…" : "Run"}
              </button>
              {hasNext && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => practice?.nextPractice()}
                  className="ml-auto inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  Next
                  <ArrowRight className="h-2.5 w-2.5" />
                </button>
              )}
            </>
          }
        />
      )}
    </div>
  );
}
