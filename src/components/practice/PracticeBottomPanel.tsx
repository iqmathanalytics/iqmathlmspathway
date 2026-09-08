"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { ChevronRight, Terminal } from "lucide-react";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import type { ConsoleLine } from "@/components/ide/types";
import type { TestRunResult } from "@/lib/practice-runner";

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
  /** When set, panel uses this height (e.g. "38%") instead of the fixed default. */
  height?: string;
  theme?: "light" | "dark";
  /** Clear test overlay and return to console (e.g. after Run). */
  onShowConsole?: () => void;
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
  onShowConsole,
}: PracticeBottomPanelProps) {
  const isDark = theme === "dark";
  const firstFailRef = useRef<HTMLLIElement>(null);
  const firstFailIndex = testResults?.findIndex((t) => !t.passed) ?? -1;
  const failedResults = testResults?.filter((t) => !t.passed) ?? [];
  const passedCount = testResults?.filter((t) => t.passed).length ?? 0;
  const totalCount = testResults?.length ?? 0;
  const hasResults =
    Boolean(submitMessage) || Boolean(testResults) || accepted;
  /** Test overlay covers the full console; yield to console when waiting for stdin or actively running Run. */
  const showTestOverlay = hasResults && !stdinActive && !running;

  useEffect(() => {
    if (showTestOverlay && firstFailIndex >= 0) {
      firstFailRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [showTestOverlay, firstFailIndex, testResults]);

  return (
    <div
      className={
        height
          ? clsx(
              "relative flex min-h-0 shrink-0 flex-col border-t",
              isDark ? "border-slate-700 bg-slate-950" : "border-sky-200 bg-white"
            )
          : clsx(
              "relative flex h-[min(340px,42dvh)] shrink-0 flex-col border-t lg:h-[340px]",
              isDark ? "border-slate-700 bg-slate-950" : "border-sky-200 bg-white"
            )
      }
      style={height ? { height } : undefined}
    >
      {/* Console — full panel; stays mounted under the test overlay */}
      <div
        className={clsx(
          "absolute inset-0 flex min-h-0 flex-col overflow-hidden",
          showTestOverlay && "invisible pointer-events-none"
        )}
        aria-hidden={showTestOverlay}
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
          stdinActive={stdinActive && !showTestOverlay}
          stdinDraft={stdinDraft}
          onStdinDraftChange={onStdinDraftChange}
          onStdinSubmit={onStdinSubmit}
        />
      </div>

      {/* Test result — covers the entire console output area */}
      {showTestOverlay && (
        <div
          className={clsx(
            "absolute inset-0 z-10 flex min-h-0 flex-col overflow-hidden",
            isDark ? "bg-slate-950" : "bg-white"
          )}
        >
          <div
            className={clsx(
              "flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2",
              isDark ? "border-slate-700 bg-slate-900" : "border-sky-100 bg-sky-50/80"
            )}
          >
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
                    : "text-slate-600 hover:bg-white hover:text-brand-800"
                )}
              >
                <Terminal className="h-3.5 w-3.5" />
                Console
              </button>
            )}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
            {submitMessage && (
              <p
                className={clsx(
                  "mb-3 rounded-lg px-3 py-2 text-sm font-semibold",
                  accepted
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
                    : "border border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200"
                )}
              >
                {submitMessage}
              </p>
            )}
            {accepted && isLast && (
              <div className="mb-3 rounded-lg border border-emerald-200 bg-emerald-50/80 px-3 py-2.5 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100">
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
                className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300"
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
                <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
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
                          i === firstFailIndex && "shadow-sm ring-1 ring-red-200 dark:ring-red-700"
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
        </div>
      )}
    </div>
  );
}
