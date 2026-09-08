"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "next-themes";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Lightbulb,
  Loader2,
  Play,
  RotateCcw,
  Send,
  Terminal,
} from "lucide-react";
import type { PracticeProblem } from "@/lib/types";
import { CodeEditor } from "@/components/ide/CodeEditor";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import { runPublicTests, type TestRunResult } from "@/lib/practice-runner";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import { PYTHON_CHALLENGE_TRACK } from "@/data/python-practice";
import { PYTHON_BASICS_TRACK } from "@/data/python-basics";
import type { PracticeTrackId } from "@/lib/practice-track";
import {
  applyPracticeOrder,
  ensurePracticeOrder,
  getAdjacentFromProblems,
  readPracticeOrder,
} from "@/lib/python-practice-order";
import {
  getProblemWorkspaceHref,
  getPythonProgrammingProblems,
  PYTHON_PROGRAMMING_ORDER_PREFIX,
} from "@/data/python-programming";
import { PracticeBottomPanel } from "@/components/practice/PracticeBottomPanel";
import { PracticeSplitHandle } from "@/components/practice/PracticeSplitHandle";

type LeftTab = "description" | "hints" | "solution";

const TRACKS = {
  python: PYTHON_CHALLENGE_TRACK,
  "python-basics": PYTHON_BASICS_TRACK,
} as const;

const LEFT_PCT_KEY = "practice-ide-left-pct";
const CONSOLE_PCT_KEY = "practice-ide-console-pct";
const LEFT_DEFAULT = 60;
const CONSOLE_DEFAULT = 38;
const LEFT_MIN = 35;
const LEFT_MAX = 70;
const CONSOLE_MIN = 25;
const CONSOLE_MAX = 55;

interface PythonCodingWorkspaceProps {
  problem: PracticeProblem;
  trackId?: PracticeTrackId;
}

const difficultyClass: Record<string, string> = {
  easy: "text-emerald-600",
  medium: "text-amber-600",
  hard: "text-red-600",
};

function usePersistedPct(
  key: string,
  defaultPct: number,
  min: number,
  max: number
) {
  const [pct, setPct] = useState(defaultPct);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw == null) return;
      const n = Number(raw);
      if (!Number.isFinite(n)) return;
      setPct(Math.min(max, Math.max(min, n)));
    } catch {
      /* ignore */
    }
  }, [key, min, max]);

  const setAndPersist = useCallback(
    (next: number) => {
      const clamped = Math.min(max, Math.max(min, next));
      setPct(clamped);
      try {
        localStorage.setItem(key, String(clamped));
      } catch {
        /* ignore */
      }
    },
    [key, min, max]
  );

  return [pct, setAndPersist] as const;
}

export function PythonCodingWorkspace({
  problem,
  trackId = "python",
}: PythonCodingWorkspaceProps) {
  const { resolvedTheme } = useTheme();
  const [themeReady, setThemeReady] = useState(false);
  useEffect(() => {
    setThemeReady(true);
  }, []);
  const isDark = themeReady && resolvedTheme === "dark";
  const track = TRACKS[trackId];
  const problemIds = useMemo(() => [problem.id], [problem.id]);
  const { rows, loading: progressLoading, saveDraft, markSolved } =
    usePracticeProgress(problemIds);

  const [code, setCode] = useState(problem.starterCode ?? "");
  const codeInitializedRef = useRef<string | null>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const [leftTab, setLeftTab] = useState<LeftTab>("description");
  const [hintsShown, setHintsShown] = useState(0);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [testResults, setTestResults] = useState<TestRunResult[] | null>(null);
  const [testing, setTesting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [language, setLanguage] = useState("python3");

  const [leftPct, setLeftPct] = usePersistedPct(
    LEFT_PCT_KEY,
    LEFT_DEFAULT,
    LEFT_MIN,
    LEFT_MAX
  );
  const [consolePct, setConsolePct] = usePersistedPct(
    CONSOLE_PCT_KEY,
    CONSOLE_DEFAULT,
    CONSOLE_MIN,
    CONSOLE_MAX
  );

  const splitRootRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLElement>(null);

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
  } = usePyodideRunner();

  const orderedProblems = useMemo(() => {
    const list = getPythonProgrammingProblems();
    if (typeof window === "undefined") {
      return applyPracticeOrder(
        list,
        readPracticeOrder("all", PYTHON_PROGRAMMING_ORDER_PREFIX)
      );
    }
    return ensurePracticeOrder(list, "all", PYTHON_PROGRAMMING_ORDER_PREFIX);
  }, []);

  const { prev, next, isLast, index } = getAdjacentFromProblems(
    orderedProblems,
    problem.slug
  );

  useEffect(() => {
    codeInitializedRef.current = null;
    setTestResults(null);
    setSubmitMessage(null);
    setHintsShown(0);
    setSolutionOpen(false);
    setAccepted(false);
    setLeftTab("description");
  }, [problem.id]);

  useEffect(() => {
    if (progressLoading) return;
    if (codeInitializedRef.current === problem.id) return;
    codeInitializedRef.current = problem.id;
    const draft = rowsRef.current[problem.id]?.code_draft;
    setCode(draft ?? problem.starterCode ?? "");
  }, [problem.id, problem.starterCode, progressLoading]);

  useEffect(() => {
    if (!code.trim()) return;
    const t = setTimeout(() => {
      saveDraft(problem.id, code);
    }, 800);
    return () => clearTimeout(t);
  }, [code, problem.id, saveDraft]);

  const status = rows[problem.id]?.status ?? "not_started";
  const solved = status === "solved" || accepted;

  const handleRunFile = useCallback(() => {
    if (running || testing || submitting) return;
    setSubmitMessage(null);
    setTestResults(null);
    setAccepted(false);
    void runCode(code);
  }, [code, runCode, running, testing, submitting]);

  const handleRunTests = useCallback(async () => {
    if (running || testing || submitting) return;
    setTesting(true);
    setSubmitMessage(null);
    setAccepted(false);
    setTestResults(null);
    try {
      const result = await runPublicTests(code, problem.publicTests);
      setTestResults(result.results);
      if (!result.allPassed) {
        void saveDraft(problem.id, code, "attempted");
      }
    } catch {
      setSubmitMessage("Could not run tests. Check your connection and try again.");
    } finally {
      setTesting(false);
    }
  }, [code, problem, saveDraft, running, testing, submitting]);

  const handleSubmit = useCallback(async () => {
    if (running || testing || submitting) return;
    setSubmitting(true);
    setSubmitMessage(null);
    setTestResults(null);
    try {
      const result = await runPublicTests(code, problem.publicTests);
      setTestResults(result.results);
      if (!result.allPassed) {
        setSubmitMessage("Wrong Answer — fix the failing tests and try again.");
        void saveDraft(problem.id, code, "attempted");
        return;
      }
      const save = await markSolved(problem.id, code);
      if (save.error) {
        setAccepted(false);
        setSubmitMessage(
          `Tests passed, but progress was not saved: ${save.error}`
        );
        return;
      }
      setAccepted(true);
      setSubmitMessage("Accepted — all tests passed.");
    } catch {
      setSubmitMessage("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }, [code, problem, markSolved, saveDraft, running, testing, submitting]);

  const examples = problem.examples ?? [];
  const listHref = "/practice/python";

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <nav className="mb-2 flex shrink-0 flex-wrap items-center gap-1 px-0.5 text-sm text-slate-500 animate-fade-in dark:text-slate-400">
        <Link href="/practice" className="transition-colors hover:text-brand-700 dark:hover:text-brand-300">
          Practice
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/practice/python" className="transition-colors hover:text-brand-700 dark:hover:text-brand-300">
          {track.title}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={listHref} className="transition-colors hover:text-brand-700 dark:hover:text-brand-300">
          {track.labelDifficulty(problem.difficulty)}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="font-medium text-slate-800 dark:text-slate-100">{problem.title}</span>
      </nav>

      <div
        ref={splitRootRef}
        className="practice-studio-shell grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_minmax(0,1.1fr)] overflow-hidden rounded-2xl border border-sky-200/80 shadow-[0_18px_50px_-28px_rgba(15,117,189,0.45)] ring-1 ring-white/70 lg:grid-rows-1 lg:[grid-template-columns:var(--practice-left)_minmax(0,1fr)]"
        style={
          {
            "--practice-left": `${leftPct}%`,
          } as CSSProperties
        }
      >
        {/* Left: problem statement */}
        <section className="relative flex h-full min-h-0 flex-col overflow-hidden border-b border-sky-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:border-b-0 lg:border-r lg:border-sky-200 dark:lg:border-slate-700">
          <div className="flex shrink-0 items-center gap-1 border-b border-sky-200 bg-sky-50 px-2 dark:border-slate-700 dark:bg-slate-950">
            {(
              [
                ["description", "Description"],
                ["hints", "Hints"],
                ["solution", "Solution"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setLeftTab(id)}
                className={clsx(
                  "relative border-b-2 px-3 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200",
                  leftTab === id
                    ? "border-brand-600 text-brand-800 dark:border-brand-400 dark:text-brand-200"
                    : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className="practice-tab-content min-h-0 flex-1 overflow-y-auto p-5 [scrollbar-width:thin]"
          >
            {leftTab === "description" && (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  {solved ? (
                    <CheckCircle2 className="h-5 w-5 animate-fade-in text-accent-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-slate-300" />
                  )}
                  <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                    {problem.order}. {problem.title}
                  </h1>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span
                    className={clsx(
                      "text-sm font-semibold",
                      difficultyClass[problem.difficulty]
                    )}
                  >
                    {track.labelDifficulty(problem.difficulty)}
                  </span>
                  {problem.categoryLabel && (
                    <span className="rounded-md bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-brand-800 ring-1 ring-sky-100">
                      {problem.categoryLabel}
                    </span>
                  )}
                  {solved && (
                    <span className="rounded-md bg-accent-100 px-2.5 py-0.5 text-xs font-semibold text-accent-700 ring-1 ring-accent-200">
                      Solved
                    </span>
                  )}
                  {isLast && (
                    <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                      Last in set
                    </span>
                  )}
                </div>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {problem.description}
                </p>

                {examples.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Examples
                    </h2>
                    {examples.map((ex, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50/70 to-white shadow-sm shadow-sky-100/60 transition-transform duration-200 hover:-translate-y-0.5"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        <div className="border-b border-sky-100 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
                          Example {i + 1}
                        </div>
                        <div className="space-y-0 divide-y divide-sky-50 p-0 font-mono text-xs">
                          {ex.input != null && ex.input !== "" && (
                            <div className="px-3 py-2.5">
                              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-brand-600">
                                Input
                              </p>
                              <pre className="whitespace-pre-wrap text-slate-800">
                                {ex.input}
                              </pre>
                            </div>
                          )}
                          <div className="px-3 py-2.5">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-accent-700">
                              Output
                            </p>
                            <pre className="whitespace-pre-wrap text-slate-800">
                              {ex.output}
                            </pre>
                          </div>
                          {ex.explanation && (
                            <div className="px-3 py-2.5 text-xs leading-relaxed text-slate-600">
                              {ex.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {problem.constraints && problem.constraints.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Constraints
                    </h2>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {problem.constraints.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {leftTab === "hints" && (
              <div>
                <h2 className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  Hints
                </h2>
                {problem.approach && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {problem.approach}
                  </p>
                )}
                <ul className="mt-4 space-y-2">
                  {problem.hints.slice(0, hintsShown).map((hint, i) => (
                    <li
                      key={i}
                      className="animate-fade-up rounded-xl border border-amber-200/80 bg-amber-50 p-3 text-sm text-amber-950"
                    >
                      {hint}
                    </li>
                  ))}
                </ul>
                {hintsShown < problem.hints.length && (
                  <button
                    type="button"
                    onClick={() =>
                      setHintsShown((h) => Math.min(h + 1, problem.hints.length))
                    }
                    className="mt-4 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 hover:underline"
                  >
                    Reveal hint ({hintsShown}/{problem.hints.length})
                  </button>
                )}
              </div>
            )}

            {leftTab === "solution" && (
              <div>
                <p className="text-sm text-slate-600">
                  Try the problem first. Reveal the reference solution when you want to
                  compare approaches.
                </p>
                {!solutionOpen ? (
                  <button
                    type="button"
                    onClick={() => setSolutionOpen(true)}
                    className="practice-btn-shine hover-lift mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200/80 hover:bg-brand-700"
                  >
                    Show solution
                  </button>
                ) : (
                  <pre className="mt-4 animate-fade-up overflow-x-auto rounded-xl border border-sky-100 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-sky-100 shadow-inner">
                    {problem.solutionCode}
                  </pre>
                )}
              </div>
            )}
          </div>

          <div className="flex min-w-0 shrink-0 items-center justify-between gap-2 border-t border-sky-200 bg-white px-4 py-2 text-sm">
            {prev ? (
              <Link
                href={getProblemWorkspaceHref(prev)}
                className="inline-flex min-w-0 items-center gap-1 text-slate-500 transition-colors hover:text-brand-700"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" />
                <span className="truncate">{prev.title}</span>
              </Link>
            ) : (
              <Link
                href={listHref}
                className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-brand-700"
              >
                <ChevronLeft className="h-4 w-4" />
                Problem list
              </Link>
            )}
            <span className="shrink-0 text-xs font-medium text-slate-400">
              {index >= 0 ? `${index + 1} / ${orderedProblems.length}` : null}
            </span>
            {next ? (
              <Link
                href={getProblemWorkspaceHref(next)}
                className="inline-flex min-w-0 items-center gap-1 text-slate-500 transition-colors hover:text-brand-700"
              >
                <span className="truncate">{next.title}</span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </Link>
            ) : (
              <Link
                href={listHref}
                className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline"
              >
                Finish set
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <PracticeSplitHandle
            orientation="vertical"
            value={leftPct}
            min={LEFT_MIN}
            max={LEFT_MAX}
            onChange={setLeftPct}
            getBounds={() => splitRootRef.current?.getBoundingClientRect() ?? null}
            label="Resize problem and editor panels"
            className="absolute inset-y-0 -right-0.5"
          />
        </section>

        {/* Right: editor + console */}
        <section
          ref={rightPaneRef}
          className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-sky-50 dark:bg-slate-950"
        >
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-sky-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
            <label className="flex items-center gap-2 text-xs text-slate-500">
              <span className="sr-only">Language</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-lg border border-sky-200 bg-sky-50/50 px-2.5 py-1.5 text-xs font-semibold text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                aria-label="Programming language"
              >
                <option value="python3">Python 3</option>
                <option value="javascript" disabled>
                  JavaScript (Coming soon)
                </option>
                <option value="java" disabled>
                  Java (Coming soon)
                </option>
                <option value="cpp" disabled>
                  C++ (Coming soon)
                </option>
              </select>
            </label>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setCode(problem.starterCode ?? "")}
                className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-sky-50 hover:text-brand-800 dark:hover:bg-slate-800"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleRunFile}
                disabled={running || testing || submitting}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70",
                  running && "practice-run-active"
                )}
              >
                {running ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Terminal className="h-3.5 w-3.5" />
                )}
                {running && loading ? "Loading…" : running ? "Running…" : "Run"}
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleRunTests}
                disabled={running || testing || submitting}
                className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 shadow-sm transition-colors hover:border-brand-300 hover:bg-sky-50 disabled:cursor-wait disabled:opacity-70 dark:border-slate-600 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
              >
                {testing ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                {testing ? (loading ? "Loading…" : "Testing…") : "Run Tests"}
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleSubmit}
                disabled={running || testing || submitting}
                className="inline-flex items-center gap-1 rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
                {submitting ? (loading ? "Loading…" : "Submitting…") : "Submit"}
              </button>
            </div>
          </div>

          <div
            className={clsx(
              "min-h-0 flex-1 overflow-hidden border-b",
              isDark ? "border-slate-800 bg-slate-950" : "border-sky-100 bg-sky-50"
            )}
          >
            <CodeEditor
              value={code}
              onChange={setCode}
              onRun={handleRunFile}
              height="100%"
              theme={isDark ? "dark" : "light"}
              className={clsx(
                "h-full min-h-0 [&_.cm-editor]:h-full [&_.cm-scroller]:h-full",
                isDark ? "bg-slate-950" : "bg-sky-50 [&_.cm-editor]:bg-sky-50 [&_.cm-scroller]:bg-sky-50"
              )}
            />
          </div>

          <PracticeSplitHandle
            orientation="horizontal"
            value={consolePct}
            min={CONSOLE_MIN}
            max={CONSOLE_MAX}
            onChange={setConsolePct}
            getBounds={() => rightPaneRef.current?.getBoundingClientRect() ?? null}
            label="Resize editor and console panels"
          />

          <PracticeBottomPanel
            testResults={testResults}
            submitMessage={submitMessage}
            accepted={accepted}
            isLast={isLast}
            nextHref={next ? getProblemWorkspaceHref(next) : undefined}
            nextTitle={next?.title}
            finishHref={listHref}
            finishLabel={track.labelDifficulty(problem.difficulty)}
            lines={lines}
            loading={loading}
            running={running}
            error={error}
            onClear={clearConsole}
            stdinActive={stdinActive}
            stdinDraft={stdinDraft}
            onStdinDraftChange={setStdinDraft}
            onStdinSubmit={submitStdin}
            height={`${consolePct}%`}
            theme={isDark ? "dark" : "light"}
            onShowConsole={() => {
              setTestResults(null);
              setSubmitMessage(null);
            }}
          />
        </section>
      </div>
    </div>
  );
}

