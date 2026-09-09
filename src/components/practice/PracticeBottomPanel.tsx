"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Play,
  Send,
  Terminal,
} from "lucide-react";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import type { ConsoleLine } from "@/components/ide/types";
import type { TestRunResult } from "@/lib/practice-runner";

interface PracticeBottomPanelProps {
  testResults: TestRunResult[] | null;
  submitMessage: string | null;
  accepted: boolean;
  isLast: boolean;
  prevHref?: string;
  prevTitle?: string;
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
  onShowConsole?: () => void;
  onRun?: () => void;
  onRunTests?: () => void;
  onSubmit?: () => void;
  testing?: boolean;
  submitting?: boolean;
  busy?: boolean;
}

function ActionButton({
  children,
  onClick,
  disabled,
  variant = "secondary",
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled || !onClick}
      className={clsx(
        "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold shadow-sm transition-colors disabled:cursor-wait disabled:opacity-50",
        variant === "primary" && "bg-brand-600 text-white hover:bg-brand-700",
        variant === "accent" && "bg-accent-500 text-white hover:bg-accent-600",
        variant === "secondary" &&
          "border border-sky-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-sky-50 dark:border-slate-600 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800",
        className
      )}
    >
      {children}
    </button>
  );
}

export function PracticeBottomPanel({
  testResults,
  submitMessage,
  accepted,
  isLast,
  prevHref,
  prevTitle,
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
  onShowConsole,
  onRun,
  onRunTests,
  onSubmit,
  testing = false,
  submitting = false,
  busy = false,
}: PracticeBottomPanelProps) {
  const isDark = theme === "dark";
  const firstFailRef = useRef<HTMLLIElement>(null);
  const firstFailIndex = testResults?.findIndex((t) => !t.passed) ?? -1;
  const failedResults = testResults?.filter((t) => !t.passed) ?? [];
  const passedCount = testResults?.filter((t) => t.passed).length ?? 0;
  const totalCount = testResults?.length ?? 0;
  const hasResults =
    Boolean(submitMessage) || Boolean(testResults) || accepted;
  const showTestOverlay = hasResults && !stdinActive && !running;
  const actionsBusy = busy || running || testing || submitting || loading;

  useEffect(() => {
    if (showTestOverlay && firstFailIndex >= 0) {
      firstFailRef.current?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [showTestOverlay, firstFailIndex, testResults]);

  const actions = (
    <>
      {prevHref ? (
        <Link
          href={prevHref}
          className={clsx(
            "inline-flex max-w-[9rem] items-center gap-1 truncate rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
            isDark
              ? "text-slate-300 hover:bg-slate-800 hover:text-white"
              : "text-slate-600 hover:bg-sky-50 hover:text-brand-800"
          )}
          title={prevTitle ?? "Previous question"}
        >
          <ChevronLeft className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">Prev</span>
        </Link>
      ) : (
        <Link
          href={finishHref}
          className={clsx(
            "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
            isDark
              ? "text-slate-300 hover:bg-slate-800 hover:text-white"
              : "text-slate-600 hover:bg-sky-50 hover:text-brand-800"
          )}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          List
        </Link>
      )}

      <ActionButton
        variant="primary"
        onClick={onRun}
        disabled={actionsBusy}
        className={running ? "practice-run-active" : undefined}
      >
        {running ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Terminal className="h-3.5 w-3.5" />
        )}
        {running && loading ? "Loading…" : running ? "Running…" : "Run"}
      </ActionButton>

      <ActionButton variant="secondary" onClick={onRunTests} disabled={actionsBusy}>
        {testing ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Play className="h-3.5 w-3.5" />
        )}
        {testing ? (loading ? "Loading…" : "Testing…") : "Test"}
      </ActionButton>

      <ActionButton variant="accent" onClick={onSubmit} disabled={actionsBusy}>
        {submitting ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Send className="h-3.5 w-3.5" />
        )}
        {submitting ? (loading ? "Loading…" : "Submitting…") : "Submit"}
      </ActionButton>

      {nextHref ? (
        <Link
          href={nextHref}
          className={clsx(
            "ml-auto inline-flex max-w-[10rem] items-center gap-1 truncate rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
            isDark
              ? "bg-slate-800 text-brand-200 hover:bg-slate-700"
              : "bg-brand-50 text-brand-800 hover:bg-brand-100"
          )}
          title={nextTitle ?? "Next question"}
        >
          <span className="truncate">Next</span>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        </Link>
      ) : (
        <Link
          href={finishHref}
          className={clsx(
            "ml-auto inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
            isDark
              ? "bg-slate-800 text-brand-200 hover:bg-slate-700"
              : "bg-brand-50 text-brand-800 hover:bg-brand-100"
          )}
        >
          Finish
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </>
  );

  const testOutput = showTestOverlay ? (
    <div className="space-y-3 font-sans text-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Test result
        </h3>
        {onShowConsole && (
          <button
            type="button"
            onClick={onShowConsole}
            className={clsx(
              "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
              isDark
                ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                : "text-slate-600 hover:bg-sky-50 hover:text-brand-800"
            )}
          >
            <Terminal className="h-3.5 w-3.5" />
            Console
          </button>
        )}
      </div>

      {submitMessage && (
        <p
          className={clsx(
            "rounded-lg px-3 py-2 text-sm font-semibold",
            accepted
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
              : "border border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200"
          )}
        >
          {submitMessage}
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

      {testResults && failedResults.length === 0 && (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
          All tests passed ({passedCount}/{totalCount})
        </p>
      )}

      {failedResults.length > 0 && (
        <>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {passedCount}/{totalCount} passed · showing failed case
            {failedResults.length === 1 ? "" : "s"} only
          </p>
          <ul className="space-y-2">
            {testResults!.map((t, i) => {
              if (t.passed) return null;
              return (
                <li
                  key={t.testId}
                  ref={i === firstFailIndex ? firstFailRef : undefined}
                  className={clsx(
                    "rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-900 dark:border-red-800 dark:bg-red-950/40 dark:text-red-100",
                    i === firstFailIndex &&
                      "shadow-sm ring-1 ring-red-200 dark:ring-red-700"
                  )}
                >
                  <p className="font-semibold">
                    Failed · {t.label || `Test ${i + 1}`}
                  </p>
                  {t.input != null && t.input !== "" && (
                    <div className="mt-2">
                      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Input
                      </p>
                      <pre className="whitespace-pre-wrap rounded-md border border-red-100 bg-white/80 p-1.5 font-mono text-[11px] dark:border-red-900 dark:bg-black/30">
                        {t.input}
                      </pre>
                    </div>
                  )}
                  {(t.expected != null || t.actual != null) && (
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <div>
                        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Expected
                        </p>
                        <pre className="whitespace-pre-wrap rounded-md border border-red-100 bg-white/80 p-1.5 font-mono text-[11px] dark:border-red-900 dark:bg-black/30">
                          {t.expected ?? "—"}
                        </pre>
                      </div>
                      <div>
                        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Your Output
                        </p>
                        <pre className="whitespace-pre-wrap rounded-md border border-red-100 bg-white/80 p-1.5 font-mono text-[11px] dark:border-red-900 dark:bg-black/30">
                          {t.actual ?? "—"}
                        </pre>
                      </div>
                    </div>
                  )}
                  {t.error && (
                    <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] text-red-700 dark:text-red-300">
                      {t.error}
                    </pre>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  ) : null;

  return (
    <div
      className={
        height
          ? clsx(
              "flex min-h-0 shrink-0 flex-col border-t",
              isDark ? "border-slate-700 bg-slate-950" : "border-sky-200 bg-white"
            )
          : clsx(
              "flex h-[min(400px,50dvh)] shrink-0 flex-col border-t lg:h-[400px]",
              isDark ? "border-slate-700 bg-slate-950" : "border-sky-200 bg-white"
            )
      }
      style={height ? { height } : undefined}
    >
      <ConsolePanel
        lines={lines}
        loading={loading}
        running={running}
        error={error}
        onClear={onClear}
        fill
        compact={false}
        variant={isDark ? "dark" : "light"}
        showInput
        stdinActive={stdinActive}
        stdinDraft={stdinDraft}
        onStdinDraftChange={onStdinDraftChange}
        onStdinSubmit={onStdinSubmit}
        actions={actions}
        outputOverride={testOutput}
      />
    </div>
  );
}
