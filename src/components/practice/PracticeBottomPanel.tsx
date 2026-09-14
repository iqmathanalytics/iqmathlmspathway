"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, ChevronRight, Terminal, XCircle } from "lucide-react";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import type { ConsoleLine } from "@/components/ide/types";
import type { TestRunResult } from "@/lib/practice-runner";

type BottomTab = "console" | "tests";

interface PracticeBottomPanelProps {
  testResults: TestRunResult[] | null;
  submitMessage: string | null;
  accepted: boolean;
  isLast: boolean;
  nextHref?: string;
  nextTitle?: string;
  finishHref: string;
  finishLabel: string;
  lines: ConsoleLine[];
  loading: boolean;
  running: boolean;
  error: string | null;
  onClear: () => void;
  stdinActive: boolean;
  stdinDraft: string;
  onStdinDraftChange: (value: string) => void;
  onStdinSubmit: (value: string) => void;
  height?: string;
  theme?: "light" | "dark";
  testing?: boolean;
  submitting?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  collapsed?: boolean;
}

export function PracticeBottomPanel({
  testResults,
  submitMessage,
  accepted,
  isLast,
  nextHref,
  nextTitle,
  finishHref,
  finishLabel,
  lines,
  loading,
  running,
  error,
  onClear,
  stdinActive,
  stdinDraft,
  onStdinDraftChange,
  onStdinSubmit,
  height,
  theme = "light",
  testing = false,
  submitting = false,
  onCollapsedChange,
  collapsed: collapsedProp,
}: PracticeBottomPanelProps) {
  const firstFailRef = useRef<HTMLLIElement>(null);
  const firstFailIndex = testResults?.findIndex((t) => !t.passed) ?? -1;
  const failedResults = testResults?.filter((t) => !t.passed) ?? [];
  const passedCount = testResults?.filter((t) => t.passed).length ?? 0;
  const totalCount = testResults?.length ?? 0;
  const hasResults =
    Boolean(submitMessage) || Boolean(testResults) || accepted;
  const [tab, setTab] = useState<BottomTab>("console");
  const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState(false);
  const collapsed =
    collapsedProp !== undefined ? collapsedProp : uncontrolledCollapsed;

  useEffect(() => {
    if (hasResults && !running && !stdinActive) {
      setTab("tests");
    }
  }, [hasResults, running, stdinActive, testResults, submitMessage]);

  useEffect(() => {
    if (running || stdinActive) {
      setTab("console");
    }
  }, [running, stdinActive]);

  useEffect(() => {
    if (tab === "tests" && firstFailIndex >= 0) {
      firstFailRef.current?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [tab, firstFailIndex, testResults]);

  function handleCollapsedChange(next: boolean) {
    if (collapsedProp === undefined) setUncontrolledCollapsed(next);
    onCollapsedChange?.(next);
  }

  const statusText = (() => {
    if (submitting) return "Submitting…";
    if (testing) return "Running tests…";
    if (running && loading) return "Loading Python…";
    if (running && stdinActive) return "Waiting for input…";
    if (running) return "Running…";
    if (loading) return "Loading Python…";
    if (error) return "Runtime error";
    if (accepted) return "Accepted";
    if (submitMessage && !accepted) return "Wrong answer";
    if (testResults) {
      return `${passedCount}/${totalCount} tests passed`;
    }
    if (lines.some((l) => l.kind === "stdout" || l.kind === "stderr")) {
      return "Execution completed";
    }
    return "Console ready";
  })();

  const statusTone = (() => {
    if (error || (submitMessage && !accepted)) return "error" as const;
    if (accepted || (testResults && failedResults.length === 0 && totalCount > 0))
      return "success" as const;
    if (running || testing || submitting || loading) return "busy" as const;
    return "idle" as const;
  })();

  const testPanel = (
    <div className="space-y-3 font-sans text-sm">
      {submitMessage && (
        <p
          className={clsx(
            "flex items-start gap-2 rounded-lg px-3 py-2 text-sm font-semibold",
            accepted
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
              : "border border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200"
          )}
        >
          {accepted ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          )}
          <span>{submitMessage}</span>
        </p>
      )}

      {accepted && isLast && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 px-3 py-2.5 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100">
          <p className="font-semibold">You finished this set.</p>
          <Link
            href={finishHref}
            className="mt-1 inline-flex items-center gap-1 font-medium text-brand-600 hover:underline dark:text-brand-300"
          >
            Back to {finishLabel} problems
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {accepted && nextHref && nextTitle && (
        <Link
          href={nextHref}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300"
        >
          Next question: {nextTitle}
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}

      {testResults && (
        <>
          <p
            className={clsx(
              "text-xs font-semibold",
              failedResults.length === 0
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-slate-600 dark:text-slate-400"
            )}
          >
            {failedResults.length === 0 ? "✓ " : ""}
            {passedCount}/{totalCount} test cases passed
          </p>
          <ul className="space-y-1.5">
            {testResults.map((t, i) => (
              <li
                key={t.testId}
                ref={!t.passed && i === firstFailIndex ? firstFailRef : undefined}
                className={clsx(
                  "rounded-lg border px-2.5 py-2 text-xs",
                  t.passed
                    ? "border-emerald-200 bg-emerald-50/70 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
                    : "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/40 dark:text-red-100"
                )}
              >
                <p className="font-semibold">
                  {t.passed ? "✓" : "✕"} {t.label || `Test Case ${i + 1}`}
                </p>
                {!t.passed && (
                  <div className="mt-2 space-y-2 font-mono text-[11px]">
                    {t.input != null && t.input !== "" && (
                      <div>
                        <p className="mb-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                          Input
                        </p>
                        <pre className="whitespace-pre-wrap rounded-md border border-red-100 bg-white/80 p-1.5 dark:border-red-900 dark:bg-black/30">
                          {t.input}
                        </pre>
                      </div>
                    )}
                    {(t.expected != null || t.actual != null) && (
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div>
                          <p className="mb-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                            Expected
                          </p>
                          <pre className="whitespace-pre-wrap rounded-md border border-red-100 bg-white/80 p-1.5 dark:border-red-900 dark:bg-black/30">
                            {t.expected ?? "—"}
                          </pre>
                        </div>
                        <div>
                          <p className="mb-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                            Your Output
                          </p>
                          <pre className="whitespace-pre-wrap rounded-md border border-red-100 bg-white/80 p-1.5 dark:border-red-900 dark:bg-black/30">
                            {t.actual ?? "—"}
                          </pre>
                        </div>
                      </div>
                    )}
                    {t.error && (
                      <pre className="whitespace-pre-wrap text-red-700 dark:text-red-300">
                        {t.error}
                      </pre>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {!testResults && !submitMessage && (
        <p className="text-xs text-slate-400">
          Run Tests or Submit to see test results here.
        </p>
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-[#f8fbfe]",
        collapsed ? "h-auto shrink-0" : "h-full min-h-0"
      )}
      style={collapsed || !height ? undefined : { height }}
    >
      <ConsolePanel
        lines={lines}
        loading={loading}
        running={running}
        error={error}
        onClear={onClear}
        fill={!collapsed}
        compact
        collapsible
        collapsed={collapsed}
        onCollapsedChange={handleCollapsedChange}
        variant="light"
        showInput={tab === "console"}
        stdinActive={stdinActive}
        stdinDraft={stdinDraft}
        onStdinDraftChange={onStdinDraftChange}
        onStdinSubmit={onStdinSubmit}
        statusText={statusText}
        statusTone={statusTone}
        emptyHint="Run your code to see the output here."
        outputLabel="Output"
        headerTabs={
          <div className="flex min-w-0 items-center gap-0.5">
            <button
              type="button"
              onClick={() => {
                setTab("console");
                if (collapsed) handleCollapsedChange(false);
              }}
              className={clsx(
                "inline-flex h-7 items-center gap-1 rounded-md px-2.5 text-xs font-semibold transition-colors",
                tab === "console"
                  ? "bg-sky-50 text-brand-800 ring-1 ring-sky-200"
                  : "text-slate-500 hover:bg-sky-50/70 hover:text-brand-700"
              )}
              aria-pressed={tab === "console"}
            >
              <Terminal className="h-3.5 w-3.5" aria-hidden />
              Console
            </button>
            <button
              type="button"
              onClick={() => {
                setTab("tests");
                if (collapsed) handleCollapsedChange(false);
              }}
              className={clsx(
                "inline-flex h-7 items-center gap-1 rounded-md px-2.5 text-xs font-semibold transition-colors",
                tab === "tests"
                  ? "bg-sky-50 text-brand-800 ring-1 ring-sky-200"
                  : "text-slate-500 hover:bg-sky-50/70 hover:text-brand-700"
              )}
              aria-pressed={tab === "tests"}
            >
              Test Results
              {totalCount > 0 && (
                <span
                  className={clsx(
                    "rounded px-1 text-[10px] font-bold",
                    failedResults.length === 0
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  )}
                >
                  {passedCount}/{totalCount}
                </span>
              )}
            </button>
          </div>
        }
        outputOverride={tab === "tests" ? testPanel : null}
        className="flex h-full min-h-0 flex-col border-t border-sky-200"
      />
    </div>
  );
}
