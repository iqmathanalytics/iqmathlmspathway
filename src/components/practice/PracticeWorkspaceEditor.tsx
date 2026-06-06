"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from "react";
import type { PracticeProblem } from "@/lib/types";
import { CodeEditor } from "@/components/ide/CodeEditor";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import { runPublicTests, submitForGrading, type TestRunResult } from "@/lib/practice-runner";
import { isProblemPremium } from "@/lib/practice-config";
import { useAuth } from "@/contexts/AuthContext";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import {
  CheckCircle2,
  Lightbulb,
  Loader2,
  Play,
  RotateCcw,
  Send,
  Terminal,
} from "lucide-react";
import clsx from "clsx";
import { PracticeBreadcrumb } from "./PracticeBreadcrumb";
import { ChallengePracticeLayout } from "./ChallengePracticeLayout";

interface PracticeWorkspaceEditorProps {
  problem: PracticeProblem;
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
}

export function PracticeWorkspaceEditor({
  problem,
  moduleSlug,
  topicSlug,
  moduleName,
  topicTitle,
}: PracticeWorkspaceEditorProps) {
  const { session } = useAuth();
  const { rows, loading: progressLoading, saveDraft, markSolved, refresh } =
    usePracticeProgress([problem.id]);

  const [code, setCode] = useState(problem.starterCode ?? "");
  const codeInitializedRef = useRef<string | null>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;
  const [hintsShown, setHintsShown] = useState(0);
  const [testResults, setTestResults] = useState<TestRunResult[] | null>(null);
  const [testing, setTesting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

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

  useEffect(() => {
    codeInitializedRef.current = null;
    setTestResults(null);
    setSubmitMessage(null);
    setHintsShown(0);
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

  const handleRun = useCallback(() => {
    setTestResults(null);
    setSubmitMessage(null);
    runCode(code);
  }, [code, runCode]);

  const handleRunTests = useCallback(async () => {
    if (loading || running) return;
    setTesting(true);
    setSubmitMessage(null);
    clearConsole();
    const result = await runPublicTests(code, problem.publicTests);
    setTestResults(result.results);
    setTesting(false);
    if (result.allPassed) {
      await saveDraft(problem.id, code, "attempted");
    }
  }, [code, problem, clearConsole, saveDraft, loading, running]);

  const handleSubmit = useCallback(async () => {
    if (!session?.access_token) return;
    setSubmitting(true);
    setSubmitMessage(null);

    try {
      const publicResult = await runPublicTests(code, problem.publicTests);
      setTestResults(publicResult.results);
      if (!publicResult.allPassed) {
        setSubmitMessage("Fix all public tests before submitting.");
        return;
      }

      const grade = await submitForGrading(problem.id, code, session.access_token);
      if (grade.passed) {
        await markSolved(problem.id, code);
        setSubmitMessage("All tests passed — problem solved!");
      } else {
        setSubmitMessage(
          grade.message ??
            `Hidden tests: ${grade.testsPassed}/${grade.testsRun} passed. Keep trying.`
        );
        await saveDraft(problem.id, code, "attempted");
      }
      await refresh();
    } catch {
      setSubmitMessage("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }, [session, code, problem, markSolved, saveDraft, refresh]);

  const difficultyColor = useMemo(() => {
    if (problem.difficulty === "easy") return "bg-green-100 text-green-800";
    if (problem.difficulty === "medium") return "bg-amber-100 text-amber-800";
    return "bg-red-100 text-red-800";
  }, [problem.difficulty]);

  if (problem.layout === "challenge") {
    return (
      <ChallengePracticeLayout
        problem={problem}
        moduleSlug={moduleSlug}
        topicSlug={topicSlug}
        moduleName={moduleName}
        topicTitle={topicTitle}
      />
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col">
      <PracticeBreadcrumb
        moduleSlug={moduleSlug}
        topicSlug={topicSlug}
        moduleName={moduleName}
        topicTitle={topicTitle}
        problemTitle={problem.title}
      />

      <div className="grid min-h-0 flex-1 gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[minmax(0,42%)_minmax(0,58%)]">
        <ProblemPanel
          problem={problem}
          difficultyColor={difficultyColor}
          status={status}
          hintsShown={hintsShown}
          setHintsShown={setHintsShown}
          testResults={testResults}
          submitMessage={submitMessage}
        />

        <div className="flex min-h-[480px] flex-col bg-gray-950 lg:min-h-0">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <Terminal className="h-4 w-4" />
              Code workspace
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setCode("")}
                className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleRun}
                disabled={loading || running}
                className="flex items-center gap-1 rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-700 disabled:opacity-50"
              >
                {running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
                Run
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleRunTests}
                disabled={loading || testing || running}
                className="rounded-lg bg-brand-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600 disabled:opacity-50"
              >
                {testing ? "Testing…" : "Run public tests"}
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleSubmit}
                disabled={loading || submitting || running}
                className="flex items-center gap-1 rounded-lg bg-green-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-green-600 disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
                {submitting ? "Submitting…" : "Submit"}
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            <CodeEditor
              value={code}
              onChange={setCode}
              onRun={handleRun}
              height="100%"
              className="h-full min-h-[240px]"
            />
          </div>

          <ConsolePanel
            lines={lines}
            loading={loading}
            running={running}
            error={error}
            onClear={clearConsole}
            maxHeight={200}
            stdinActive={stdinActive}
            stdinDraft={stdinDraft}
            onStdinDraftChange={setStdinDraft}
            onStdinSubmit={submitStdin}
          />
        </div>
      </div>
    </div>
  );
}

function ProblemPanel({
  problem,
  difficultyColor,
  status,
  hintsShown,
  setHintsShown,
  testResults,
  submitMessage,
}: {
  problem: PracticeProblem;
  difficultyColor: string;
  status: string;
  hintsShown: number;
  setHintsShown: Dispatch<SetStateAction<number>>;
  testResults: TestRunResult[] | null;
  submitMessage: string | null;
}) {
  return (
    <div className="overflow-y-auto border-b border-gray-200 p-6 lg:border-b-0 lg:border-r">
      <div className="flex flex-wrap items-center gap-2">
        <span className={clsx("rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize", difficultyColor)}>
          {problem.difficulty}
        </span>
        <span className="text-xs text-gray-500">Problem {problem.order}</span>
        {status === "solved" && (
          <span className="flex items-center gap-1 text-xs font-medium text-green-700">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Solved
          </span>
        )}
        {isProblemPremium(problem.order) && (
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-800">
            Premium
          </span>
        )}
      </div>

      <h1 className="mt-3 text-2xl font-bold text-gray-900">{problem.title}</h1>
      <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
        {problem.description}
      </p>

      {problem.examples && problem.examples.length > 0 && (
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-900">Example</h2>
          {problem.examples.map((ex, i) => (
            <div key={i} className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm">
              {ex.input && (
                <p className="text-gray-600">
                  <span className="font-medium text-gray-700">Input:</span> {ex.input}
                </p>
              )}
              <p className={ex.input ? "mt-2 font-medium text-gray-700" : "font-medium text-gray-700"}>
                Output:
              </p>
              <pre className="mt-1 overflow-x-auto rounded border border-gray-200 bg-white px-3 py-2 font-mono text-xs text-gray-900">
                {ex.output}
              </pre>
            </div>
          ))}
        </div>
      )}

      {problem.constraints && (
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-900">Constraints</h2>
          <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
            {problem.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {problem.hints.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              Hints
            </h2>
            {hintsShown < problem.hints.length && (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setHintsShown((h) => Math.min(h + 1, problem.hints.length))}
                className="text-xs font-medium text-brand-700 hover:underline"
              >
                Reveal hint ({hintsShown}/{problem.hints.length})
              </button>
            )}
          </div>
          <ul className="mt-2 space-y-2">
            {problem.hints.slice(0, hintsShown).map((hint, i) => (
              <li
                key={i}
                className="rounded-lg border border-amber-100 bg-amber-50 p-3 text-sm text-amber-900"
              >
                {hint}
              </li>
            ))}
          </ul>
        </div>
      )}

      {testResults && (
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-900">Public test results</h2>
          <ul className="mt-2 space-y-2">
            {testResults.map((t) => (
              <li
                key={t.testId}
                className={clsx(
                  "rounded-lg border p-3 text-sm",
                  t.passed ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                )}
              >
                <p className="font-medium">
                  {t.label}: {t.passed ? "Passed" : "Failed"}
                </p>
                {!t.passed && t.expected !== undefined && (
                  <div className="mt-2 space-y-2 text-xs">
                    <div>
                      <p className="font-medium text-gray-700">Expected:</p>
                      <pre className="mt-0.5 overflow-x-auto rounded bg-white/80 px-2 py-1 font-mono">
                        {t.expected || "(empty)"}
                      </pre>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Your output:</p>
                      <pre className="mt-0.5 overflow-x-auto rounded bg-white/80 px-2 py-1 font-mono">
                        {t.actual || "(empty)"}
                      </pre>
                    </div>
                  </div>
                )}
                {!t.passed && t.error && (
                  <p className="mt-1 text-xs text-red-700">{t.error}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {submitMessage && (
        <p
          className={clsx(
            "mt-4 rounded-lg p-3 text-sm",
            submitMessage.includes("solved")
              ? "bg-green-50 text-green-800"
              : "bg-gray-50 text-gray-700"
          )}
        >
          {submitMessage}
        </p>
      )}
    </div>
  );
}
