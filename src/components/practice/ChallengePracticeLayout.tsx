"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  PracticeChallengeSegment,
  PracticeLiveCheckRule,
  PracticeProblem,
} from "@/lib/types";
import { CodeEditor } from "@/components/ide/CodeEditor";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import { OpenInColabButton } from "@/components/ide/OpenInColabButton";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import { runPublicTests, type TestRunResult } from "@/lib/practice-runner";
import {
  buildColabPracticeCell,
  isColabPracticeProblem,
} from "@/lib/colab-practice";
import { isVisualizationCode } from "@/lib/visualization-code";
import { useAuth } from "@/contexts/AuthContext";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import { useCoursePracticeReturn } from "@/hooks/useCoursePracticeReturn";
import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  Leaf,
  BookOpen,
  Lightbulb,
  Loader2,
  Play,
  Terminal,
  XCircle,
} from "lucide-react";
import clsx from "clsx";
import { PracticeBreadcrumb } from "./PracticeBreadcrumb";

interface ChallengePracticeLayoutProps {
  problem: PracticeProblem;
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
}

type CheckState = "none" | "pass" | "fail";
type ResultType = "success" | "error" | "warn";

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] text-indigo-600 dark:border-slate-600 dark:bg-slate-800 dark:text-indigo-300">
      {children}
    </code>
  );
}

function renderSegments(segments: PracticeChallengeSegment[]) {
  return segments.map((seg, i) =>
    seg.type === "code" ? (
      <InlineCode key={i}>{seg.value}</InlineCode>
    ) : (
      <span key={i}>{renderPrintInline(seg.value)}</span>
    )
  );
}

function renderPrintInline(text: string) {
  const parts = text.split(/(print\(\))/g);
  return parts.map((part, i) =>
    part === "print()" ? <InlineCode key={i}>print()</InlineCode> : part
  );
}

function countPrintCalls(code: string) {
  return (code.match(/print\s*\(/g) || []).length;
}

function getPrintValues(code: string) {
  const results: string[] = [];
  const re = /print\s*\(\s*(?:"([^"]*)"|'([^']*)'|(\d+))\s*\)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(code)) !== null) {
    results.push(match[1] ?? match[2] ?? match[3] ?? "");
  }
  return results;
}

/** Teaching constraints that stdout tests cannot always express. */
function structuralGateMessage(
  code: string,
  content: PracticeProblem["challengeContent"]
): string | null {
  const realCode = code.replace(/#.*$/gm, "").trim();

  if (content?.requiresForLoop) {
    if (!realCode.includes("for") || !realCode.includes("print")) {
      return "Use a for loop with print().";
    }
  }

  if (content?.requiresIfCondition) {
    if (!realCode.includes("if")) {
      return "Use an if condition.";
    }
  }

  if (content?.requiresTry && !realCode.includes("try")) {
    return "Use a try block.";
  }
  if (content?.requiresExcept && !realCode.includes("except")) {
    return "Use an except block.";
  }
  if (content?.requiresFinally && !realCode.includes("finally")) {
    return "Use a finally block.";
  }
  if (content?.requiresRaise && !realCode.includes("raise")) {
    return "Use raise to throw an error.";
  }

  if (content?.requiresFunction) {
    const fn = content.requiresFunction;
    if (!realCode.includes("def") || !realCode.includes(fn)) {
      return `Function ${fn}() is not defined properly.`;
    }
    const fnRefs = realCode.match(new RegExp(`\\b${fn}\\s*\\(`, "g")) ?? [];
    if (fnRefs.length < 2) {
      return `Don't forget to call ${fn}() after defining it.`;
    }
  }

  if (content?.requiresVariables?.length) {
    const missing = content.requiresVariables.filter((v) => !realCode.includes(v));
    if (missing.length > 0) {
      return `Create variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}.`;
    }
  }

  if (content?.requiresListAccess) {
    if (!realCode.includes("[") || !realCode.includes("print")) {
      return "Create a list and print one item using index notation, like items[1].";
    }
  }

  if (content?.requiresDictKey) {
    const key = content.requiresDictKey;
    if (!realCode.includes("{") || !realCode.includes(key)) {
      return `Create a dictionary with key "${key}" and print its value.`;
    }
  }

  if (content?.expectCommaPrint) {
    const printBody = realCode.match(/print\s*\(([\s\S]*?)\)/)?.[1] ?? "";
    if (!printBody.includes(",") && !printBody.includes("sep")) {
      return "Use a comma between two values in print(), or pass sep=\",\".";
    }
  }

  if (
    content?.requiresComment &&
    !code.split("\n").some((line) => line.trim().startsWith("#"))
  ) {
    return "Add a comment line starting with # that describes your code.";
  }

  return null;
}

function firstFailedTest(results: TestRunResult[]): TestRunResult | undefined {
  return results.find((r) => !r.passed) ?? results[0];
}

function evaluateLiveCheck(
  rule: PracticeLiveCheckRule,
  printCount: number,
  printValues: string[]
): CheckState {
  if (rule.kind === "print-count") {
    if (printCount === 0) return "none";
    return printCount === rule.expected ? "pass" : "fail";
  }
  if (rule.kind === "print-value") {
    if (printValues.length === 0) return "none";
    if (printValues.length <= rule.index) return "none";
    return printValues[rule.index] === rule.expected ? "pass" : "fail";
  }
  if (rule.kind === "print-contains") {
    if (printValues.length === 0) return "none";
    return printValues.includes(rule.value) ? "pass" : "fail";
  }
  if (rule.kind === "print-sequence") {
    if (printValues.length === 0) return "none";
    if (printValues.length < rule.expected.length) return "none";
    return rule.expected.every((v, i) => printValues[i] === v)
      ? "pass"
      : "fail";
  }
  return "none";
}

function ApproachCodePreview({
  lines,
}: {
  lines: Array<{ type: "number" | "string"; value: string }>;
}) {
  return (
    <pre className="overflow-x-auto rounded-md border border-sky-100 bg-sky-50 px-3.5 py-3 font-mono text-[13px] leading-relaxed text-slate-800">
      {lines.map((line, i) => (
        <span key={i}>
          <span className="text-brand-700">print</span>
          <span>(</span>
          {line.type === "string" ? (
            <span className="text-emerald-700">&quot;{line.value}&quot;</span>
          ) : (
            <span className="text-amber-700">{line.value}</span>
          )}
          <span>)</span>
          {i < lines.length - 1 && "\n"}
        </span>
      ))}
    </pre>
  );
}

/** Build a learner-facing explanation from approach + challenge content + hints. */
function getProblemExplanation(problem: PracticeProblem): {
  concept?: string;
  steps: string[];
  tips: string[];
  codeExample?: string;
} | null {
  const content = problem.challengeContent;
  const codeExample =
    content?.learnSection?.codeExample ??
    (content?.steps?.codePreview?.lines?.length
      ? content.steps.codePreview.lines.map((line) => `print("${line}")`).join("\n")
      : undefined);

  if (problem.approach?.trim()) {
    return {
      concept: problem.approach.trim(),
      steps: [],
      tips: [],
      codeExample,
    };
  }

  const concept = content?.learnSection?.body?.trim() || undefined;
  const steps = content?.steps?.items?.filter(Boolean) ?? [];
  const tips = problem.hints.filter(Boolean);

  if (concept || steps.length > 0) {
    return { concept, steps, tips: [], codeExample };
  }

  if (tips.length > 0) {
    return { steps: [], tips, codeExample };
  }

  if (problem.description.trim()) {
    return {
      concept: problem.description.trim(),
      steps: [],
      tips: [],
      codeExample,
    };
  }

  return null;
}

function LiveCheckPill({
  label,
  state,
}: {
  label: string;
  state: CheckState;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[13px]",
        state === "pass" &&
          "border-emerald-200 bg-emerald-50 text-emerald-800",
        state === "fail" && "border-red-200 bg-red-50 text-red-700",
        state === "none" && "border-sky-200 bg-white text-slate-500"
      )}
    >
      {state === "pass" ? (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ) : state === "fail" ? (
        <XCircle className="h-3.5 w-3.5" />
      ) : (
        <Circle className="h-3.5 w-3.5" />
      )}
      {label}
    </span>
  );
}

export function ChallengePracticeLayout({
  problem,
  moduleSlug,
  topicSlug,
  moduleName,
  topicTitle,
}: ChallengePracticeLayoutProps) {
  const { session } = useAuth();
  const { rows, loading: progressLoading, saveDraft, markSolved } =
    usePracticeProgress([problem.id]);
  const { returnAfterSolve } = useCoursePracticeReturn();

  const [code, setCode] = useState(problem.starterCode);
  const [hintsShown, setHintsShown] = useState(0);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [explanationOpen, setExplanationOpen] = useState(false);
  const [checking, setChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<{
    type: ResultType;
    message: React.ReactNode;
  } | null>(null);
  const codeInitializedRef = useRef<string | null>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const {
    lines,
    loading: runtimeLoading,
    running,
    error: runtimeError,
    runCode,
    clearConsole,
    stdinActive,
    stdinDraft,
    setStdinDraft,
    submitStdin,
  } = usePyodideRunner();

  const content = problem.challengeContent;
  const status = rows[problem.id]?.status ?? "not_started";
  const example = problem.examples?.[0];
  const expectedOutput =
    problem.publicTests?.[0]?.expectedStdout ?? example?.output ?? "";
  const inputLabel =
    content?.inputLabel ??
    example?.input ??
    (problem.publicTests?.[0]?.stdin
      ? problem.publicTests[0].stdin
      : "No input needed");

  const printCount = useMemo(() => countPrintCalls(code), [code]);
  const printValues = useMemo(() => getPrintValues(code), [code]);

  const colabEnabled = useMemo(() => isColabPracticeProblem(problem), [problem]);
  const chartProblem = useMemo(
    () =>
      isVisualizationCode(
        `${problem.starterCode ?? ""}\n${problem.solutionCode ?? ""}`
      ),
    [problem.starterCode, problem.solutionCode]
  );
  const colabCell = useMemo(
    () =>
      colabEnabled
        ? buildColabPracticeCell({ problem, moduleName, topicTitle, code })
        : "",
    [colabEnabled, problem, moduleName, topicTitle, code]
  );

  const liveCheckStates = useMemo(() => {
    if (!content?.liveCheckRules) return [];
    return content.liveCheckRules.map((rule) => ({
      rule,
      state: evaluateLiveCheck(rule, printCount, printValues),
    }));
  }, [content?.liveCheckRules, printCount, printValues]);

  useEffect(() => {
    codeInitializedRef.current = null;
    setCheckResult(null);
    setHintsShown(0);
    setSolutionOpen(false);
    setExplanationOpen(false);
    clearConsole();
  }, [problem.id, clearConsole]);

  const handleRun = useCallback(() => {
    if (running || checking || runtimeLoading) return;
    setCheckResult(null);
    void runCode(code);
  }, [code, runCode, running, checking, runtimeLoading]);

  useEffect(() => {
    if (progressLoading) return;
    if (codeInitializedRef.current === problem.id) return;
    codeInitializedRef.current = problem.id;
    const draft = rowsRef.current[problem.id]?.code_draft;
    setCode(draft ?? problem.starterCode);
  }, [problem.id, problem.starterCode, progressLoading]);

  useEffect(() => {
    if (!code.trim()) return;
    const t = setTimeout(() => {
      saveDraft(problem.id, code);
    }, 800);
    return () => clearTimeout(t);
  }, [code, problem.id, saveDraft]);

  const handleRunCheck = useCallback(async () => {
    if (running || checking || runtimeLoading) return;

    const trimmed = code.trim();
    const realCode = trimmed.replace(/#.*$/gm, "").trim();

    if (!realCode) {
      setCheckResult({
        type: "error",
        message:
          content?.emptyMessage ?? "Nothing to run! Write some code first.",
      });
      return;
    }

    if (!code.includes("print")) {
      setCheckResult({
        type: "error",
        message: "Use the print() function to display output.",
      });
      return;
    }

    setChecking(true);
    setCheckResult(null);

    const result = await runPublicTests(code, problem.publicTests);
    const test = firstFailedTest(result.results);

    if (result.allPassed) {
      const structural = structuralGateMessage(code, content);
      if (structural) {
        setCheckResult({
          type: "warn",
          message: (
            <>
              Output matches, but this problem also requires: {structural}
            </>
          ),
        });
        setChecking(false);
        return;
      }

      const actualLines = (expectedOutput || test?.actual || "").split("\n");
      setCheckResult({
        type: "success",
        message: (
          <>
            <strong>Correct!</strong>
            <br />
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Your output
            </span>
            {actualLines.map((line, i) => (
              <span key={`out-${i}`}>
                <br />
                <InlineCode>{line === "" ? " " : line}</InlineCode>
              </span>
            ))}
            {content?.successDetail ? (
              <>
                <br />
                <br />
                {content.successDetail}
              </>
            ) : null}
          </>
        ),
      });
      await saveDraft(problem.id, code, "attempted");
      if (session?.access_token) {
        const save = await markSolved(problem.id, code);
        if (save.error) {
          setCheckResult({
            type: "error",
            message: `Correct answer, but progress was not saved: ${save.error}`,
          });
        } else {
          returnAfterSolve();
        }
      }
    } else {
      setCheckResult({
        type: "error",
        message: (
          <>
            <strong>Not quite — the solution does not pass all checks.</strong>
            {test?.error ? (
              <>
                <br />
                <br />
                {test.error}
              </>
            ) : null}
            {test && (test.actual !== undefined || test.expected !== undefined) ? (
              <>
                <br />
                <br />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Your output
                </span>
                <br />
                <InlineCode>{test.actual || "(empty)"}</InlineCode>
                <br />
                <br />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expected output
                </span>
                <br />
                <InlineCode>{test.expected || expectedOutput || "(empty)"}</InlineCode>
              </>
            ) : null}
          </>
        ),
      });
    }

    setChecking(false);
  }, [
    code,
    content,
    expectedOutput,
    problem,
    saveDraft,
    session,
    markSolved,
    returnAfterSolve,
    running,
    checking,
    runtimeLoading,
  ]);

  const actionsBusy = running || checking || runtimeLoading;

  const revealHint = () => {
    setHintsShown((h) => Math.min(h + 1, problem.hints.length));
  };

  const difficultyLabel =
    problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1);

  const badgeStyles = {
    easy: "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-950/50 dark:text-green-300",
    medium:
      "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
    hard: "border-red-200 bg-red-100 text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-300",
  } as const;

  const badgeClass =
    content?.badgeVariant === "blue"
      ? "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200"
      : badgeStyles[problem.difficulty];

  const explanation = useMemo(() => getProblemExplanation(problem), [problem]);
  const explanationRef = useRef<HTMLElement | null>(null);
  const sectionLabel =
    "mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400";
  const revealLink =
    "inline-flex items-center gap-1.5 border-none bg-transparent p-0 text-[13.5px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300";

  function openExplanation() {
    setExplanationOpen(true);
    requestAnimationFrame(() => {
      explanationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <PracticeBreadcrumb
        moduleSlug={moduleSlug}
        topicSlug={topicSlug}
        moduleName={moduleName}
        topicTitle={topicTitle}
        problemTitle={problem.title}
        coursePractice
      />

      <div className="ide-light-locked grid min-h-0 flex-1 gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
        {/* Left — problem statement */}
        <div className="overflow-y-auto border-b border-gray-200 p-6 dark:border-slate-700 lg:border-b-0 lg:border-r">
          {/* Header */}
          <section className="mb-5">
            <span
              className={clsx(
                "mb-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
                badgeClass
              )}
            >
              {problem.difficulty === "easy" && content?.badgeVariant !== "blue" && (
                <Leaf className="h-3 w-3" />
              )}
              {difficultyLabel} · Problem {problem.order}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-slate-50">
                {problem.title}
              </h1>
              {status === "solved" && (
                <span className="flex items-center gap-1 text-xs font-medium text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Solved
                </span>
              )}
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-gray-600 dark:text-slate-300">
              {content?.introLead && <p>{content.introLead}</p>}
              {content?.introBullets?.map((bullet, i) => (
                <p key={i} className={content.introLead ? "mt-1" : ""}>
                  • {renderSegments(bullet)}
                </p>
              ))}
              {content?.introFooter && (
                <p className="mt-2">{renderSegments(content.introFooter)}</p>
              )}
              {!content?.introLead &&
                !content?.introBullets &&
                (content?.introSegments ? (
                  <p>{renderSegments(content.introSegments)}</p>
                ) : (
                  <p>{problem.description}</p>
                ))}
            </div>
          </section>

          <hr className="my-5 border-gray-200 dark:border-slate-700" />

          {/* Two approaches */}
          {content?.approaches && (
            <section className="mb-5">
              <p className={sectionLabel}>{content.approaches.title}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {content.approaches.items.map((approach) => (
                  <div
                    key={approach.title}
                    className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800/80"
                  >
                    <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      {approach.title}
                    </p>
                    <ApproachCodePreview lines={approach.lines} />
                    <p className="mt-2 text-[13px] leading-snug text-gray-500 dark:text-slate-400">
                      {approach.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Steps card */}
          {content?.steps && (
            <section className="mb-5">
              <p className={sectionLabel}>{content.steps.title}</p>
              <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-800/80">
                {content.steps.items.map((item, i) => (
                  <div
                    key={i}
                    className={clsx(
                      "flex items-start gap-3 py-1.5",
                      i > 0 && "border-t border-gray-100 dark:border-slate-700"
                    )}
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-200">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300">
                      {renderPrintInline(item)}
                    </p>
                  </div>
                ))}
                {content.steps.codePreview && (
                  <pre className="mt-3 overflow-x-auto rounded-md border border-sky-100 bg-sky-50 px-4 py-3 font-mono text-[13.5px] leading-relaxed text-slate-800">
                    {content.steps.codePreview.comment && (
                      <>
                        <span className="text-slate-400">
                          {content.steps.codePreview.comment}
                        </span>
                        {"\n"}
                      </>
                    )}
                    {content.steps.codePreview.lines.map((line, i, lines) => (
                      <span key={i}>
                        <span className="text-brand-700">print</span>
                        <span>(</span>
                        <span className="text-emerald-700">&quot;{line}&quot;</span>
                        <span>)</span>
                        {i < lines.length - 1 && "\n"}
                      </span>
                    ))}
                  </pre>
                )}
              </div>
            </section>
          )}

          {/* Learn section (hello-world style) */}
          {content?.learnSection && (
            <section className="mb-5">
              <p className={sectionLabel}>{content.learnSection.title}</p>
              <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-800/80">
                <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300">
                  {content.learnSection.body
                    .split("print()")
                    .map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <InlineCode>print()</InlineCode>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                </p>
                <pre className="mt-2.5 overflow-x-auto rounded-md border border-sky-100 bg-sky-50 px-4 py-3 font-mono text-[13.5px] leading-relaxed text-slate-800">
                  <span className="text-brand-700">print</span>
                  <span>(</span>
                  <span className="text-emerald-700">
                    &quot;anything you want here&quot;
                  </span>
                  <span>)</span>
                </pre>
              </div>
            </section>
          )}

          {/* Expected output — always from publicTests (source of truth) */}
          {expectedOutput !== "" && (
            <section className="mb-5">
              <p className={sectionLabel}>Sample I/O</p>
              {content?.outputOnly ? (
                <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800/80">
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                    Expected output
                  </p>
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-900 dark:text-slate-100">
                    {expectedOutput}
                  </pre>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800/80">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      Input
                    </p>
                    <pre className="whitespace-pre-wrap font-mono text-sm italic text-gray-500 dark:text-slate-400">
                      {inputLabel}
                    </pre>
                  </div>
                  <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800/80">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      Expected output
                    </p>
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-900 dark:text-slate-100">
                      {expectedOutput}
                    </pre>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Colab hand-off for library / chart / advanced work */}
          {colabEnabled && (
            <section className="mb-5">
              <p className={sectionLabel}>Practice in Google Colab</p>
              <div className="rounded-[10px] border border-orange-200 bg-orange-50 px-4 py-3.5">
                <p className="text-sm leading-relaxed text-orange-900">
                  {chartProblem
                    ? "Charts never display in the course editor. Open Colab to run the same code with the plot visible inline."
                    : "This question uses the data-science libraries. Colab gives you a full notebook with NumPy, pandas, matplotlib and SciPy already installed."}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-orange-800">
                  The question, the expected output, and your current code are
                  copied to the clipboard — paste them into the first Colab cell.
                  Grading still happens here with Submit &amp; Check.
                </p>
                <div className="mt-3">
                  <OpenInColabButton
                    code={colabCell}
                    variant="card"
                    label="Open in Google Colab"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Constraints */}
          {problem.constraints && problem.constraints.length > 0 && (
            <section className="mb-5">
              <p className={sectionLabel}>Constraints</p>
              <ul className="space-y-1">
                {problem.constraints.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 dark:bg-slate-500" />
                    {renderPrintInline(c)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Hints */}
          {problem.hints.length > 0 && (
            <section className="mb-5">
              <p className={sectionLabel}>Hints</p>
              <div className="space-y-2">
                {problem.hints.map((hint, i) => {
                  if (i >= hintsShown) {
                    if (i === hintsShown) {
                      return (
                        <button
                          key={i}
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={revealHint}
                          className={revealLink}
                        >
                          <Lightbulb className="h-3.5 w-3.5" />
                          Reveal hint {i + 1} of {problem.hints.length}
                        </button>
                      );
                    }
                    return null;
                  }
                  return (
                    <div
                      key={i}
                      className="rounded-r-md border-l-2 border-blue-200 bg-blue-50 py-2.5 pl-3.5 pr-4 text-sm leading-relaxed text-slate-800 dark:border-blue-700 dark:bg-blue-950/40 dark:text-slate-200"
                    >
                      {renderPrintInline(hint)}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Explanation */}
          {explanation && (
            <section ref={explanationRef} className="mb-5">
              <p className={sectionLabel}>Explanation</p>
              {!explanationOpen ? (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={openExplanation}
                  className={revealLink}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Show explanation
                </button>
              ) : (
                <div className="space-y-3 rounded-lg border border-indigo-100 bg-indigo-50/60 px-4 py-3.5 text-sm leading-relaxed text-slate-800 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-slate-100">
                  {explanation.concept && (
                    <p className="whitespace-pre-wrap">
                      {renderPrintInline(explanation.concept)}
                    </p>
                  )}
                  {explanation.steps.length > 0 && (
                    <ol className="list-decimal space-y-1.5 pl-4">
                      {explanation.steps.map((step) => (
                        <li key={step}>{renderPrintInline(step)}</li>
                      ))}
                    </ol>
                  )}
                  {!explanation.concept &&
                    explanation.steps.length === 0 &&
                    explanation.tips.length > 0 && (
                      <ul className="space-y-1.5">
                        {explanation.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300 dark:bg-indigo-400" />
                            <span>{renderPrintInline(tip)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  {explanation.codeExample && (
                    <pre className="overflow-x-auto rounded-md border border-indigo-100 bg-white px-3 py-2.5 font-mono text-[12.5px] leading-relaxed text-gray-800 dark:border-indigo-800 dark:bg-slate-900 dark:text-slate-200">
                      {explanation.codeExample}
                    </pre>
                  )}
                </div>
              )}
            </section>
          )}

          {problem.solutionCode?.trim() && (
            <section>
              <p className={sectionLabel}>Solution</p>
              {!solutionOpen ? (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setSolutionOpen(true)}
                  className={revealLink}
                >
                  Show solution
                </button>
              ) : (
                <pre className="overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-3 font-mono text-[12.5px] leading-relaxed text-gray-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {problem.solutionCode}
                </pre>
              )}
            </section>
          )}
        </div>

        {/* Right — editor workspace */}
        <div className="flex min-h-[480px] flex-col overflow-hidden bg-white lg:min-h-0">
          <div className="flex items-center justify-between border-b border-sky-200 bg-white px-4 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-1 font-mono text-[11px] text-slate-500">
                python3
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Your solution
            </span>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden bg-sky-50">
            <CodeEditor
              value={code}
              onChange={setCode}
              onRun={handleRun}
              height="100%"
              theme="light"
              className="h-full min-h-0 bg-sky-50 [&_.cm-editor]:h-full [&_.cm-editor]:max-h-full [&_.cm-editor]:bg-sky-50 [&_.cm-scroller]:overflow-auto [&_.cm-scroller]:bg-sky-50"
            />
          </div>

          {liveCheckStates.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-sky-200 bg-sky-50 px-4 py-2.5">
              {liveCheckStates.map(({ rule, state }) => (
                <LiveCheckPill key={rule.id} label={rule.label} state={state} />
              ))}
            </div>
          )}

          <ConsolePanel
            lines={lines}
            loading={runtimeLoading}
            running={running}
            error={runtimeError}
            onClear={clearConsole}
            maxHeight={200}
            collapsible
            showInput
            statusText={
              runtimeError
                ? "Runtime error"
                : runtimeLoading
                  ? "Loading Python…"
                  : running
                    ? stdinActive
                      ? "Waiting for input…"
                      : "Running…"
                    : lines.some(
                          (l) =>
                            l.kind === "stdout" ||
                            l.kind === "stderr" ||
                            l.kind === "error"
                        )
                      ? "Execution completed"
                      : "Console ready"
            }
            statusTone={
              runtimeError
                ? "error"
                : runtimeLoading || running
                  ? "busy"
                  : lines.some((l) => l.kind === "stdout" || l.kind === "stderr")
                    ? "success"
                    : "idle"
            }
            stdinActive={stdinActive}
            stdinDraft={stdinDraft}
            onStdinDraftChange={setStdinDraft}
            onStdinSubmit={submitStdin}
            emptyHint="Press Run to execute your code and see print() output here."
            actions={
              <>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleRun}
                  disabled={actionsBusy}
                  className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md bg-brand-600 px-3 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
                  title="Run code"
                  aria-label="Run code"
                >
                  {running || runtimeLoading ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                  ) : (
                    <Terminal className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {running
                    ? runtimeLoading
                      ? "Loading…"
                      : "Running…"
                    : "Run"}
                </button>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleRunCheck}
                  disabled={actionsBusy}
                  className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-sky-200 bg-white px-3 text-xs font-semibold text-brand-800 transition hover:bg-sky-50 disabled:opacity-50"
                  title="Submit and check answer"
                  aria-label="Submit and check answer"
                >
                  {checking ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                  ) : (
                    <Play className="h-3.5 w-3.5" aria-hidden />
                  )}
                  Submit &amp; Check
                </button>
                {colabEnabled && (
                  <OpenInColabButton
                    code={colabCell}
                    variant="action"
                    label="Practice in Colab"
                  />
                )}
                {explanation && (
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={openExplanation}
                    className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-sky-200 bg-white px-3 text-xs font-semibold text-brand-800 transition hover:bg-sky-50"
                    title="Show explanation"
                    aria-label="Show explanation"
                  >
                    <BookOpen className="h-3.5 w-3.5" aria-hidden />
                    Explanation
                  </button>
                )}
              </>
            }
          />

          {checkResult && (
            <div className="border-t border-sky-200 bg-white px-4 py-3">
              <div
                className={clsx(
                  "rounded-lg border px-4 py-3 text-sm leading-relaxed",
                  checkResult.type === "success" &&
                    "border-emerald-200 bg-emerald-50 text-emerald-800",
                  checkResult.type === "error" &&
                    "border-red-200 bg-red-50 text-red-700",
                  checkResult.type === "warn" &&
                    "border-amber-200 bg-amber-50 text-amber-800"
                )}
              >
                <div className="flex items-start gap-2">
                  {checkResult.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : checkResult.type === "warn" ? (
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <div>{checkResult.message}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
