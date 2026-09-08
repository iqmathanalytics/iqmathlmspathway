"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  PracticeChallengeSegment,
  PracticeLiveCheckRule,
  PracticeProblem,
} from "@/lib/types";
import { CodeEditor } from "@/components/ide/CodeEditor";
import { runPublicTests } from "@/lib/practice-runner";
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
  RefreshCw,
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
    <pre className="overflow-x-auto rounded-md bg-[#1e1e2e] px-3.5 py-3 font-mono text-[13px] leading-relaxed text-[#cdd6f4]">
      {lines.map((line, i) => (
        <span key={i}>
          <span className="text-[#cba6f7]">print</span>
          <span>(</span>
          {line.type === "string" ? (
            <span className="text-[#a6e3a1]">&quot;{line.value}&quot;</span>
          ) : (
            <span className="text-[#fab387]">{line.value}</span>
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
          "border-green-400/30 bg-green-500/15 text-green-200",
        state === "fail" && "border-red-400/30 bg-red-500/15 text-red-200",
        state === "none" && "border-[#45475a] bg-[#313244] text-[#6c7086]"
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
  }, [problem.id]);

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

    if (content?.requiresForLoop) {
      if (!realCode.includes("for") || !realCode.includes("print")) {
        setCheckResult({
          type: "error",
          message: "Use a for loop with print().",
        });
        return;
      }
      if (!realCode.includes("range")) {
        setCheckResult({
          type: "error",
          message: "Loop structure incorrect. Use range(1, 5).",
        });
        return;
      }
    }

    if (content?.requiresIfCondition) {
      if (!realCode.includes("score") || !realCode.includes("if")) {
        setCheckResult({
          type: "error",
          message: "Define score and use an if condition.",
        });
        return;
      }
      if (
        printValues.includes("Fail") &&
        !printValues.includes("Pass") &&
        printValues.length > 0
      ) {
        setCheckResult({
          type: "error",
          message: "Condition incorrect: expected Pass.",
        });
        return;
      }
    }

    if (content?.requiresFunction) {
      const fn = content.requiresFunction;
      if (!realCode.includes("def") || !realCode.includes(fn)) {
        setCheckResult({
          type: "error",
          message: `Function ${fn}() not defined properly.`,
        });
        return;
      }
      const fnPattern = new RegExp(`\\b${fn}\\s*\\(`, "g");
      const fnRefs = realCode.match(fnPattern) ?? [];
      if (fnRefs.length < 2) {
        setCheckResult({
          type: "error",
          message: `Don't forget to call ${fn}() after defining it.`,
        });
        return;
      }
      if (
        printValues.length > 0 &&
        !printValues.includes("Hello") &&
        example?.output
      ) {
        setCheckResult({
          type: "error",
          message: `Expected output: ${expectedOutput || example?.output || ""}`,
        });
        return;
      }
    }

    if (content?.requiresVariables?.length) {
      const missing = content.requiresVariables.filter(
        (v) => !realCode.includes(v)
      );
      if (missing.length > 0) {
        setCheckResult({
          type: "error",
          message: `Create variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}.`,
        });
        return;
      }
    }

    if (content?.requiresListAccess) {
      if (!realCode.includes("[") || !realCode.includes("print")) {
        setCheckResult({
          type: "error",
          message:
            "Create a list and print one item using index notation, like items[1].",
        });
        return;
      }
    }

    if (content?.requiresDictKey) {
      const key = content.requiresDictKey;
      if (!realCode.includes("{") || !realCode.includes(key)) {
        setCheckResult({
          type: "error",
          message: `Create a dictionary with key "${key}" and print its value.`,
        });
        return;
      }
    }

    if (content?.expectCommaPrint) {
      const printBody = realCode.match(/print\s*\(([\s\S]*?)\)/)?.[1] ?? "";
      if (!printBody.includes(",") && !printBody.includes("sep")) {
        setCheckResult({
          type: "error",
          message: "Output mismatch. Expected format: A,B — use a comma between two values in print().",
        });
        return;
      }
    }

    if (content?.requiresComment && !code.split("\n").some((line) => line.trim().startsWith("#"))) {
      setCheckResult({
        type: "warn",
        message:
          "Add a comment line starting with # that describes your print() statement.",
      });
      return;
    }

    const countRule = content?.liveCheckRules?.find(
      (r) => r.kind === "print-count"
    );
    const sequenceRule = content?.liveCheckRules?.find(
      (r) => r.kind === "print-sequence"
    );
    const expectedPrintCount =
      countRule?.kind === "print-count"
        ? countRule.expected
        : sequenceRule?.kind === "print-sequence"
          ? sequenceRule.expected.length
          : null;

    if (expectedPrintCount != null) {
      const hint = content?.printCountHint
        ? ` — ${content.printCountHint}`
        : " — one for each line";
      if (printCount < expectedPrintCount) {
        setCheckResult({
          type: "warn",
          message: (
            <>
              Found <strong>{printCount}</strong> print() call
              {printCount === 1 ? "" : "s"}. You need{" "}
              <strong>{expectedPrintCount}</strong>
              {hint}.
            </>
          ),
        });
        return;
      }
      if (printCount > expectedPrintCount) {
        setCheckResult({
          type: "warn",
          message: (
            <>
              Found <strong>{printCount}</strong> print() calls. Use exactly{" "}
              <strong>{expectedPrintCount}</strong>.
            </>
          ),
        });
        return;
      }
    }

    const valueRules =
      content?.liveCheckRules?.filter((r) => r.kind === "print-value") ?? [];
    if (valueRules.length > 0 && printValues.length < valueRules.length) {
      setCheckResult({
        type: "error",
        message:
          "Make sure both print() calls have text in quotes inside them.",
      });
      return;
    }

    setChecking(true);
    setCheckResult(null);

    const result = await runPublicTests(code, problem.publicTests);
    const test = result.results[0];

    if (result.allPassed) {
      const actualLines = (test?.actual ?? expectedOutput).split("\n");
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
    } else if (test && (test.expected !== undefined || test.actual !== undefined)) {
      setCheckResult({
        type: "error",
        message: (
          <>
            <strong>Not quite — output does not match.</strong>
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
            {test.input ? (
              <>
                <br />
                <br />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Input
                </span>
                <br />
                <InlineCode>{test.input}</InlineCode>
              </>
            ) : null}
          </>
        ),
      });
    } else if (test?.error) {
      setCheckResult({ type: "error", message: test.error });
    } else if (sequenceRule?.kind === "print-sequence") {
      const msgs: React.ReactNode[] = ["Not quite."];
      sequenceRule.expected.forEach((expected, i) => {
        const actual = printValues[i];
        if (actual !== expected) {
          msgs.push(
            <span key={i} className="block">
              Line {i + 1}: got{" "}
              <InlineCode>{actual || "?"}</InlineCode>, expected{" "}
              <InlineCode>{expected}</InlineCode>.
            </span>
          );
        }
      });
      setCheckResult({
        type: "error",
        message: <>{msgs}</>,
      });
    } else if (valueRules.length > 0) {
      const msgs: React.ReactNode[] = ["Almost there!"];
      for (const rule of valueRules) {
        if (rule.kind !== "print-value") continue;
        const actual = printValues[rule.index];
        if (actual !== rule.expected) {
          msgs.push(
            <span key={rule.id} className="block">
              Line {rule.index + 1}: got{" "}
              <InlineCode>{actual || "(empty)"}</InlineCode>, expected{" "}
              <InlineCode>{rule.expected}</InlineCode>
            </span>
          );
        }
      }
      if (msgs.length === 1 && test) {
        setCheckResult({
          type: "error",
          message: (
            <>
              Your output:
              <br />
              <InlineCode>{test.actual || "(empty)"}</InlineCode>
              <br />
              Expected:
              <br />
              <InlineCode>{test.expected || expectedOutput}</InlineCode>
            </>
          ),
        });
      } else {
        setCheckResult({ type: "error", message: <>{msgs}</> });
      }
    } else {
      setCheckResult({
        type: "error",
        message: (
          <>
            Your output: <InlineCode>{test?.actual || "(empty)"}</InlineCode>
            <br />
            Expected:{" "}
            <InlineCode>{test?.expected || expectedOutput || "(empty)"}</InlineCode>
          </>
        ),
      });
    }

    setChecking(false);
  }, [
    code,
    content,
    example,
    expectedOutput,
    printCount,
    printValues,
    problem,
    saveDraft,
    session,
    markSolved,
    returnAfterSolve,
  ]);

  const handleReset = () => {
    setCode("");
    setCheckResult(null);
  };

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
    <div className="flex min-h-[calc(100vh-8rem)] flex-col">
      <PracticeBreadcrumb
        moduleSlug={moduleSlug}
        topicSlug={topicSlug}
        moduleName={moduleName}
        topicTitle={topicTitle}
        problemTitle={problem.title}
        coursePractice
      />

      <div className="grid min-h-0 flex-1 gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
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
                  <pre className="mt-3 overflow-x-auto rounded-md bg-[#1e1e2e] px-4 py-3 font-mono text-[13.5px] leading-relaxed text-[#cdd6f4]">
                    {content.steps.codePreview.comment && (
                      <>
                        <span className="text-[#6c7086]">
                          {content.steps.codePreview.comment}
                        </span>
                        {"\n"}
                      </>
                    )}
                    {content.steps.codePreview.lines.map((line, i, lines) => (
                      <span key={i}>
                        <span className="text-[#cba6f7]">print</span>
                        <span>(</span>
                        <span className="text-[#a6e3a1]">&quot;{line}&quot;</span>
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
                <pre className="mt-2.5 overflow-x-auto rounded-md bg-[#1e1e2e] px-4 py-3 font-mono text-[13.5px] leading-relaxed text-[#cdd6f4]">
                  <span className="text-[#cba6f7]">print</span>
                  <span>(</span>
                  <span className="text-[#a6e3a1]">
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
        <div className="ide-dark-chrome flex min-h-[480px] flex-col bg-[#1e1e2e] lg:min-h-0">
          <div className="flex items-center justify-between border-b border-[#313244] bg-[#181825] px-4 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-1 font-mono text-[11px] text-[#6c7086]">
                python3
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-[#6c7086]">
              Your solution
            </span>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            <CodeEditor
              value={code}
              onChange={setCode}
              onRun={handleRunCheck}
              height="100%"
              className="h-full min-h-[240px]"
            />
          </div>

          {liveCheckStates.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-[#313244] bg-[#181825] px-4 py-2.5">
              {liveCheckStates.map(({ rule, state }) => (
                <LiveCheckPill key={rule.id} label={rule.label} state={state} />
              ))}
            </div>
          )}

          <div className="border-t border-[#313244] bg-[#181825] px-4 py-3">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleRunCheck}
                disabled={checking}
                className="inline-flex items-center gap-1.5 rounded-md border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-[13.5px] font-medium text-blue-200 transition hover:bg-blue-500/30 disabled:opacity-50"
              >
                {checking ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                Submit &amp; Check
              </button>
              {explanation && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={openExplanation}
                  className="inline-flex items-center gap-1.5 rounded-md border border-indigo-400/30 bg-indigo-500/20 px-4 py-2 text-[13.5px] font-medium text-indigo-200 transition hover:bg-indigo-500/30"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Explanation
                </button>
              )}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#45475a] bg-[#313244] px-4 py-2 text-[13.5px] font-medium text-[#cdd6f4] transition hover:bg-[#45475a]"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            {checkResult && (
              <div
                className={clsx(
                  "mt-3 rounded-lg border px-4 py-3 text-sm leading-relaxed",
                  checkResult.type === "success" &&
                    "border-green-400/30 bg-green-500/10 text-green-200",
                  checkResult.type === "error" &&
                    "border-red-400/30 bg-red-500/10 text-red-200",
                  checkResult.type === "warn" &&
                    "border-amber-400/30 bg-amber-500/10 text-amber-200"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
