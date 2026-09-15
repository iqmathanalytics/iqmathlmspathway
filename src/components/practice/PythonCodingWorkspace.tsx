"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Columns2,
  Lightbulb,
  Loader2,
  Maximize2,
  Minimize2,
  Play,
  Send,
  Terminal,
} from "lucide-react";
import type { PracticeProblem } from "@/lib/types";
import { CodeEditor } from "@/components/ide/CodeEditor";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import { runPublicTests, type TestRunResult } from "@/lib/practice-runner";
import { buildRunDemoFromAssertCode } from "@/lib/practice-run-demo";
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
type MobileTab = "problem" | "code" | "console";

const TRACKS = {
  python: PYTHON_CHALLENGE_TRACK,
  "python-basics": PYTHON_BASICS_TRACK,
} as const;

const LEFT_PCT_KEY = "practice-ide-left-pct-v4";
const CONSOLE_PCT_KEY = "practice-ide-console-pct-v4";
/** Question panel share of the workspace (desktop default 40%). */
const LEFT_DEFAULT = 40;
/** Console share of the IDE column (default ~35% → editor ~65%). */
const CONSOLE_DEFAULT = 35;
const LEFT_MIN = 30;
const LEFT_MAX = 50;
const CONSOLE_MIN = 25;
const CONSOLE_MAX = 60;
const EDITOR_MIN_PX = 250;
const CONSOLE_MIN_PX = 150;

function breakpointLeftDefault(width: number) {
  if (width >= 1200) return 40;
  if (width >= 900) return 42;
  if (width >= 768) return 45;
  return 40;
}

interface PythonCodingWorkspaceProps {
  problem: PracticeProblem;
  trackId?: PracticeTrackId;
}

const difficultyBadge: Record<string, string> = {
  easy: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:ring-emerald-800",
  medium:
    "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-800",
  hard: "bg-red-50 text-red-700 ring-red-200 dark:bg-red-950/40 dark:text-red-300 dark:ring-red-800",
};

function usePersistedPct(
  key: string,
  defaultPct: number,
  min: number,
  max: number,
  /** When true, resolve default from viewport width if nothing is stored. */
  useBreakpointDefault = false
) {
  const [pct, setPct] = useState(defaultPct);
  const userAdjustedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) {
        const n = Number(raw);
        if (Number.isFinite(n)) {
          userAdjustedRef.current = true;
          setPct(Math.min(max, Math.max(min, n)));
          return;
        }
      }
    } catch {
      /* ignore */
    }
    if (useBreakpointDefault && typeof window !== "undefined") {
      setPct(
        Math.min(max, Math.max(min, breakpointLeftDefault(window.innerWidth)))
      );
    } else {
      setPct(defaultPct);
    }
  }, [key, min, max, defaultPct, useBreakpointDefault]);

  useEffect(() => {
    if (!useBreakpointDefault) return;
    function onResize() {
      if (userAdjustedRef.current) return;
      setPct(
        Math.min(max, Math.max(min, breakpointLeftDefault(window.innerWidth)))
      );
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [useBreakpointDefault, min, max]);

  const setAndPersist = useCallback(
    (next: number) => {
      const clamped = Math.min(max, Math.max(min, next));
      userAdjustedRef.current = true;
      setPct(clamped);
      try {
        localStorage.setItem(key, String(clamped));
      } catch {
        /* ignore */
      }
    },
    [key, min, max]
  );

  const resetToDefault = useCallback(() => {
    userAdjustedRef.current = false;
    const next =
      useBreakpointDefault && typeof window !== "undefined"
        ? breakpointLeftDefault(window.innerWidth)
        : defaultPct;
    const clamped = Math.min(max, Math.max(min, next));
    setPct(clamped);
    try {
      localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  }, [key, min, max, defaultPct, useBreakpointDefault]);

  return [pct, setAndPersist, resetToDefault] as const;
}

export function PythonCodingWorkspace({
  problem,
  trackId = "python",
}: PythonCodingWorkspaceProps) {
  const track = TRACKS[trackId];
  const problemIds = useMemo(() => [problem.id], [problem.id]);
  const { rows, loading: progressLoading, saveDraft, markSolved } =
    usePracticeProgress(problemIds);

  const [code, setCode] = useState(problem.starterCode ?? "");
  const codeInitializedRef = useRef<string | null>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const [leftTab, setLeftTab] = useState<LeftTab>("description");
  const [mobileTab, setMobileTab] = useState<MobileTab>("code");
  const [hintsShown, setHintsShown] = useState(0);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [testResults, setTestResults] = useState<TestRunResult[] | null>(null);
  const [testing, setTesting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [language, setLanguage] = useState("python3");
  const [consoleCollapsed, setConsoleCollapsed] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  const [leftPct, setLeftPct, resetLeftPct] = usePersistedPct(
    LEFT_PCT_KEY,
    LEFT_DEFAULT,
    LEFT_MIN,
    LEFT_MAX,
    true
  );
  const [consolePct, setConsolePct, resetConsolePct] = usePersistedPct(
    CONSOLE_PCT_KEY,
    CONSOLE_DEFAULT,
    CONSOLE_MIN,
    CONSOLE_MAX
  );

  const splitRootRef = useRef<HTMLDivElement>(null);
  const ideSplitRef = useRef<HTMLDivElement>(null);

  const resetLayout = useCallback(() => {
    resetLeftPct();
    resetConsolePct();
    setConsoleCollapsed(false);
  }, [resetLeftPct, resetConsolePct]);

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
    if (stdinActive) {
      setConsoleCollapsed(false);
      setMobileTab("console");
    }
  }, [stdinActive]);

  useEffect(() => {
    if (!code.trim()) return;
    const t = setTimeout(() => {
      saveDraft(problem.id, code);
    }, 800);
    return () => clearTimeout(t);
  }, [code, problem.id, saveDraft]);

  const status = rows[problem.id]?.status ?? "not_started";
  const solved = status === "solved" || accepted;
  const actionsBusy = running || testing || submitting || loading;

  const handleRunFile = useCallback(() => {
    if (running || testing || submitting) return;
    setSubmitMessage(null);
    setTestResults(null);
    setAccepted(false);
    setConsoleCollapsed(false);
    setMobileTab("console");
    const demo =
      problem.runDemoCode?.trim() ||
      (problem.publicTests?.[0]?.assertCode
        ? buildRunDemoFromAssertCode(problem.publicTests[0].assertCode)
        : "");
    const toRun = demo
      ? `${code.replace(/\s+$/, "")}\n\n# --- example run (console only) ---\n${demo}\n`
      : code;
    void runCode(toRun);
  }, [
    code,
    problem.runDemoCode,
    problem.publicTests,
    runCode,
    running,
    testing,
    submitting,
  ]);

  const handleRunTests = useCallback(async () => {
    if (running || testing || submitting) return;
    setTesting(true);
    setSubmitMessage(null);
    setAccepted(false);
    setTestResults(null);
    setConsoleCollapsed(false);
    setMobileTab("console");
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
    setConsoleCollapsed(false);
    setMobileTab("console");
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

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const inEditable =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if (e.key === "j" && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
        if (inEditable && target?.tagName !== "TEXTAREA") return;
        e.preventDefault();
        setConsoleCollapsed((c) => !c);
        return;
      }
      if (e.key === "Escape" && focusMode) {
        setFocusMode(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [focusMode]);

  const examples = problem.examples ?? [];
  const listHref =
    trackId === "python-basics" ? "/practice/python-basics" : "/practice/python";

  const toolbarBtn =
    "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold transition-colors disabled:cursor-wait disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40";

  const editorToolbar = (
    <div className="flex h-10 shrink-0 items-center gap-2 overflow-hidden border-b border-sky-200 bg-white px-2.5">
      <label className="relative z-[1] flex shrink-0 items-center">
        <span className="sr-only">Language</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="h-8 cursor-pointer appearance-none rounded-md border border-sky-200 bg-white py-0 pl-2.5 pr-7 text-xs font-semibold leading-none text-slate-700 shadow-none outline-none transition-colors hover:border-brand-300 hover:bg-sky-50 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
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
        <ChevronDown
          className="pointer-events-none absolute right-2 h-3.5 w-3.5 text-slate-500"
          aria-hidden
        />
      </label>

      <div className="ml-auto flex min-w-0 shrink items-center justify-end gap-1.5">
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleRunFile}
          disabled={actionsBusy}
          className={clsx(
            toolbarBtn,
            "bg-brand-600 text-white hover:bg-brand-700",
            running && "practice-run-active"
          )}
          title="Run code (Ctrl+Enter)"
          aria-label="Run code"
        >
          {running ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
          ) : (
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
          )}
          <span className="hidden sm:inline">
            {running ? (loading ? "Loading…" : "Running…") : "Run"}
          </span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleRunTests}
          disabled={actionsBusy}
          className={clsx(
            toolbarBtn,
            "border border-sky-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-sky-50"
          )}
          title="Run public tests"
          aria-label="Run public tests"
        >
          {testing ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
          ) : (
            <Terminal className="h-3.5 w-3.5" aria-hidden />
          )}
          <span className="hidden md:inline">
            {testing ? "Running Tests…" : "Run Tests"}
          </span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleSubmit}
          disabled={actionsBusy}
          className={clsx(
            toolbarBtn,
            "bg-accent-500 text-white hover:bg-accent-600"
          )}
          title="Submit solution (Ctrl+Shift+Enter)"
          aria-label="Submit solution"
        >
          {submitting ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
          ) : (
            <Send className="h-3.5 w-3.5" aria-hidden />
          )}
          <span className="hidden sm:inline">
            {submitting ? "Submitting…" : "Submit"}
          </span>
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={resetLayout}
          className={clsx(
            toolbarBtn,
            "px-2 border border-transparent text-slate-500 hover:bg-sky-50 hover:text-brand-800"
          )}
          title="Reset panels to default size (40% question / 60% IDE)"
          aria-label="Reset layout"
        >
          <Columns2 className="h-3.5 w-3.5" aria-hidden />
        </button>

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => setFocusMode((f) => !f)}
          className={clsx(
            toolbarBtn,
            "px-2 border border-transparent text-slate-500 hover:bg-sky-50 hover:text-brand-800"
          )}
          title={focusMode ? "Exit focus mode (Esc)" : "Focus mode"}
          aria-label={focusMode ? "Exit focus mode" : "Enter focus mode"}
          aria-pressed={focusMode}
        >
          {focusMode ? (
            <Minimize2 className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <Maximize2 className="h-3.5 w-3.5" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );

  const problemBody = (
    <>
      {leftTab === "description" && (
        <>
          <h1 className="break-words text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-[1.65rem]">
            {problem.order}. {problem.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className={clsx(
                "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ring-1",
                difficultyBadge[problem.difficulty]
              )}
            >
              {track.labelDifficulty(problem.difficulty)}
            </span>
            {problem.categoryLabel && (
              <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-800 ring-1 ring-sky-100 dark:bg-slate-800 dark:text-brand-200 dark:ring-slate-600">
                {problem.categoryLabel}
              </span>
            )}
            {solved ? (
              <span className="inline-flex items-center gap-1 rounded-md bg-accent-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent-700 ring-1 ring-accent-200 dark:bg-lime-950/50 dark:text-lime-200 dark:ring-lime-800">
                <CheckCircle2 className="h-3 w-3" aria-hidden />
                Solved
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-600">
                <Circle className="h-3 w-3" aria-hidden />
                Unsolved
              </span>
            )}
            {isLast && (
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                Last in set
              </span>
            )}
          </div>

          <h2 className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Problem
          </h2>
          <p className="mt-2 whitespace-pre-wrap text-[15px] leading-[1.65] text-slate-700 dark:text-slate-300">
            {problem.description}
          </p>

          {examples.length > 0 && (
            <div className="mt-6 space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Examples
              </h2>
              {examples.map((ex, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-sky-100 bg-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="border-b border-sky-100 bg-sky-50/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-brand-700">
                    Example {i + 1}
                  </div>
                  <div className="divide-y divide-sky-50 dark:divide-slate-800">
                    {ex.input != null && ex.input !== "" && (
                      <div className="px-3.5 py-3">
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                          Input
                        </p>
                        <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-slate-800 dark:text-slate-200">
                          {ex.input}
                        </pre>
                      </div>
                    )}
                    <div className="px-3.5 py-3">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-accent-700 dark:text-lime-300">
                        Output
                      </p>
                      <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-slate-800 dark:text-slate-200">
                        {ex.output}
                      </pre>
                    </div>
                    {ex.explanation && (
                      <div className="px-3.5 py-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
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
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Constraints
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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
          <h2 className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-slate-50">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            Hints
          </h2>
          {problem.approach && (
            <p className="mt-3 text-[15px] leading-[1.65] text-slate-700 dark:text-slate-300">
              {problem.approach}
            </p>
          )}
          <ul className="mt-4 space-y-2">
            {problem.hints.slice(0, hintsShown).map((hint, i) => (
              <li
                key={i}
                className="rounded-xl border border-amber-200/80 bg-amber-50 p-3 text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100"
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
              className="mt-4 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 hover:underline dark:text-brand-300"
            >
              Reveal hint ({hintsShown}/{problem.hints.length})
            </button>
          )}
        </div>
      )}

      {leftTab === "solution" && (
        <div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Try the problem first. Reveal the reference solution when you want to
            compare approaches.
          </p>
          {!solutionOpen ? (
            <button
              type="button"
              onClick={() => setSolutionOpen(true)}
              className="mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Show solution
            </button>
          ) : (
            <pre className="mt-4 max-w-full overflow-x-auto rounded-xl border border-sky-100 bg-sky-50 p-4 font-mono text-[13px] leading-relaxed text-slate-800">
              {problem.solutionCode}
            </pre>
          )}
        </div>
      )}
    </>
  );

  const challengeNav = (
    <div className="flex h-11 min-w-0 shrink-0 items-center justify-between gap-3 border-t border-sky-200 bg-white px-4 text-sm">
      {prev ? (
        <Link
          href={getProblemWorkspaceHref(prev)}
          className="inline-flex min-w-0 items-center gap-1.5 text-slate-500 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
          title={prev.title}
        >
          <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">Previous</span>
        </Link>
      ) : (
        <Link
          href={listHref}
          className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Problem list
        </Link>
      )}
      <span className="shrink-0 text-xs font-medium tabular-nums text-slate-400 dark:text-slate-500">
        {index >= 0 ? `${index + 1} / ${orderedProblems.length}` : null}
      </span>
      {next ? (
        <Link
          href={getProblemWorkspaceHref(next)}
          className="inline-flex min-w-0 items-center gap-1.5 text-slate-500 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
          title={next.title}
        >
          <span className="truncate">Next</span>
          <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      ) : (
        <Link
          href={listHref}
          className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline dark:text-brand-300"
        >
          Finish set
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        "flex min-h-0 flex-1 flex-col overflow-hidden",
        focusMode && "fixed inset-0 z-40 bg-sky-50 p-2 sm:p-3"
      )}
    >
      {!focusMode && (
        <nav className="mb-2 flex h-8 shrink-0 flex-wrap items-center gap-1.5 px-1 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/practice"
            className="transition-colors hover:text-brand-700 dark:hover:text-brand-300"
          >
            Practice
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
          <Link
            href={listHref}
            className="transition-colors hover:text-brand-700 dark:hover:text-brand-300"
          >
            {track.title}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
          <Link
            href={listHref}
            className="transition-colors hover:text-brand-700 dark:hover:text-brand-300"
          >
            {track.labelDifficulty(problem.difficulty)}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
          <span className="min-w-0 truncate font-medium text-slate-800 dark:text-slate-100">
            {problem.title}
          </span>
        </nav>
      )}

      {/* Mobile tabs */}
      <div className="mb-2 flex h-10 shrink-0 gap-1 rounded-xl border border-sky-200 bg-white p-1 lg:hidden">
        {(
          [
            ["problem", "Problem"],
            ["code", "Code"],
            ["console", "Console"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMobileTab(id)}
            className={clsx(
              "flex-1 rounded-lg px-2 py-1.5 text-xs font-semibold transition-colors",
              mobileTab === id
                ? "bg-brand-600 text-white"
                : "text-slate-600 hover:bg-sky-50 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
            aria-pressed={mobileTab === id}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="ide-light-locked flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-sky-200/80 shadow-[0_18px_50px_-28px_rgba(15,117,189,0.45)] ring-1 ring-white/70">
      <div
        ref={splitRootRef}
        className={clsx(
          "practice-studio-shell grid min-h-0 flex-1 overflow-hidden",
          "grid-rows-1",
          focusMode
            ? "lg:[grid-template-columns:minmax(0,0.9fr)_minmax(0,1.1fr)]"
            : "lg:[grid-template-columns:minmax(0,var(--practice-left))_minmax(0,1fr)]"
        )}
        style={
          {
            "--practice-left": `${leftPct}%`,
          } as CSSProperties
        }
      >
        {/* Left: problem — width controlled by workspace grid, content scrolls inside */}
        <section
          className={clsx(
            "relative flex min-h-0 min-w-0 flex-col overflow-hidden border-sky-200 bg-white lg:border-r",
            mobileTab === "problem" ? "flex" : "hidden lg:flex"
          )}
        >
          <div className="flex h-11 shrink-0 items-center gap-1 border-b border-sky-200 bg-sky-50 px-2">
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
                  "relative border-b-2 px-3 py-2.5 text-sm font-semibold tracking-wide transition-colors",
                  leftTab === id
                    ? "border-brand-600 text-brand-800 dark:border-brand-400 dark:text-brand-200"
                    : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="practice-tab-content min-h-0 flex-1 overflow-x-hidden overflow-y-auto p-5 [scrollbar-width:thin]">
            {problemBody}
          </div>

          {!focusMode && (
            <PracticeSplitHandle
              orientation="vertical"
              value={leftPct}
              min={LEFT_MIN}
              max={LEFT_MAX}
              onChange={setLeftPct}
              getBounds={() =>
                splitRootRef.current?.getBoundingClientRect() ?? null
              }
              label="Resize problem and editor panels"
              className="absolute inset-y-0 right-0 hidden lg:block"
            />
          )}
        </section>

        {/* Right: editor + console */}
        <section
          className={clsx(
            "flex min-h-0 min-w-0 flex-col overflow-hidden bg-sky-50",
            mobileTab === "problem" ? "hidden lg:flex" : "flex"
          )}
        >
          {editorToolbar}

          <div
            ref={ideSplitRef}
            className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden"
          >
            {/* Editor — default ~65% via flex share */}
            <div
              className={clsx(
                "min-h-0 min-w-0 overflow-hidden bg-sky-50",
                mobileTab === "console" && "hidden lg:block"
              )}
              style={
                consoleCollapsed || mobileTab === "console"
                  ? { flex: "1 1 0%", minHeight: 0 }
                  : {
                      flex: `${100 - consolePct} 1 0%`,
                      minHeight: EDITOR_MIN_PX,
                    }
              }
            >
              <CodeEditor
                value={code}
                onChange={setCode}
                onRun={handleRunFile}
                onSubmit={handleSubmit}
                height="100%"
                theme="light"
                className="h-full min-h-0 bg-sky-50 [&_.cm-editor]:h-full [&_.cm-editor]:bg-sky-50 [&_.cm-scroller]:h-full [&_.cm-scroller]:bg-sky-50"
              />
            </div>

            {!consoleCollapsed && (
              <div
                className={clsx(
                  "relative z-10 shrink-0",
                  mobileTab === "code" && "hidden lg:block"
                )}
              >
                <PracticeSplitHandle
                  orientation="horizontal"
                  value={consolePct}
                  min={CONSOLE_MIN}
                  max={CONSOLE_MAX}
                  onChange={setConsolePct}
                  getBounds={() =>
                    ideSplitRef.current?.getBoundingClientRect() ?? null
                  }
                  label="Resize editor and console panels"
                />
              </div>
            )}

            {/* Console — default ~35%; fills allocated flex share */}
            <div
              className={clsx(
                "flex min-h-0 min-w-0 flex-col overflow-hidden",
                mobileTab === "code" && "hidden lg:flex"
              )}
              style={
                consoleCollapsed && mobileTab !== "console"
                  ? { flex: "0 0 auto" }
                  : mobileTab === "console"
                    ? { flex: "1 1 0%", minHeight: 0 }
                    : {
                        flex: `${consolePct} 1 0%`,
                        minHeight: CONSOLE_MIN_PX,
                      }
              }
            >
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
                theme="light"
                testing={testing}
                submitting={submitting}
                collapsed={consoleCollapsed && mobileTab !== "console"}
                onCollapsedChange={setConsoleCollapsed}
              />
            </div>
          </div>
        </section>
      </div>
      {!focusMode && challengeNav}
      </div>
    </div>
  );
}
