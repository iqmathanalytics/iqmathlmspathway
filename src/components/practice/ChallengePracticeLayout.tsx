"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  PracticeChallengeSegment,
  PracticeLiveCheckRule,
  PracticeProblem,
} from "@/lib/types";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import { runPublicTests } from "@/lib/practice-runner";
import { useAuth } from "@/contexts/AuthContext";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  Leaf,
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
    <code className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] text-indigo-600">
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
        state === "pass" && "border-green-200 bg-green-50 text-green-800",
        state === "fail" && "border-red-200 bg-red-50 text-red-800",
        state === "none" && "border-gray-200 bg-gray-50 text-gray-400"
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
  const { rows, saveDraft, markSolved } = usePracticeProgress([problem.id]);

  const [code, setCode] = useState(problem.starterCode);
  const [hintsShown, setHintsShown] = useState(0);
  const [checking, setChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<{
    type: ResultType;
    message: React.ReactNode;
  } | null>(null);

  const { loading, running } = usePyodideRunner();
  const content = problem.challengeContent;
  const status = rows[problem.id]?.status ?? "not_started";
  const example = problem.examples?.[0];

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
    const draft = rows[problem.id]?.code_draft;
    setCode(draft ?? problem.starterCode);
    setCheckResult(null);
    setHintsShown(0);
  }, [problem.id, problem.starterCode, rows]);

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
          message: `Expected output: ${example.output}`,
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
      setCheckResult({
        type: "success",
        message: content?.successDetail ? (
          <>
            <strong>Correct!</strong>
            {example?.output && (
              <>
                <br />
                Your output:
                {example.output.split("\n").map((line) => (
                  <span key={line}>
                    <br />
                    <InlineCode>{line}</InlineCode>
                  </span>
                ))}
                <br />
                <br />
              </>
            )}
            {content.successDetail}
          </>
        ) : (
          <>
            <strong>Correct!</strong> Output:{" "}
            <InlineCode>{example?.output ?? "Hello, World!"}</InlineCode> —
            you just ran your first Python program!
          </>
        ),
      });
      await saveDraft(problem.id, code, "attempted");
      if (session?.access_token) {
        await markSolved(problem.id, code);
      }
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
              <InlineCode>{test.expected}</InlineCode>
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
            Expected: <InlineCode>{test?.expected || example?.output}</InlineCode>
          </>
        ),
      });
    }

    setChecking(false);
  }, [
    code,
    content,
    example,
    printCount,
    printValues,
    problem,
    saveDraft,
    session,
    markSolved,
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
    easy: "border-green-200 bg-green-100 text-green-700",
    medium: "border-amber-200 bg-amber-100 text-amber-800",
    hard: "border-red-200 bg-red-100 text-red-800",
  } as const;

  const badgeClass =
    content?.badgeVariant === "blue"
      ? "border-blue-200 bg-blue-100 text-blue-800"
      : badgeStyles[problem.difficulty];

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col">
      <PracticeBreadcrumb
        moduleSlug={moduleSlug}
        topicSlug={topicSlug}
        moduleName={moduleName}
        topicTitle={topicTitle}
        problemTitle={problem.title}
      />

      <div className="grid min-h-0 flex-1 gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
        {/* Left — problem statement */}
        <div className="overflow-y-auto border-b border-gray-200 p-6 lg:border-b-0 lg:border-r">
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
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                {problem.title}
              </h1>
              {status === "solved" && (
                <span className="flex items-center gap-1 text-xs font-medium text-green-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Solved
                </span>
              )}
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-gray-600">
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

          <hr className="my-5 border-gray-200" />

          {/* Two approaches */}
          {content?.approaches && (
            <section className="mb-5">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {content.approaches.title}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {content.approaches.items.map((approach) => (
                  <div
                    key={approach.title}
                    className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5"
                  >
                    <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                      {approach.title}
                    </p>
                    <ApproachCodePreview lines={approach.lines} />
                    <p className="mt-2 text-[13px] leading-snug text-gray-500">
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
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {content.steps.title}
              </p>
              <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-4">
                {content.steps.items.map((item, i) => (
                  <div
                    key={i}
                    className={clsx(
                      "flex items-start gap-3 py-1.5",
                      i > 0 && "border-t border-gray-100"
                    )}
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-600">
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
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                {content.learnSection.title}
              </p>
              <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-4">
                <p className="text-sm leading-relaxed text-gray-600">
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

          {/* Expected output */}
          {example && (
            <section className="mb-5">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Expected output
              </p>
              {content?.outputOnly ? (
                <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5">
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                    Output
                  </p>
                  <p className="whitespace-pre-line font-mono text-sm leading-relaxed text-gray-900">
                    {example.output}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                      Input
                    </p>
                    <p className="font-mono text-sm italic text-gray-400">
                      {content?.inputLabel ?? example.input ?? "No input needed"}
                    </p>
                  </div>
                  <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                      Output
                    </p>
                    <p className="whitespace-pre-line font-mono text-sm leading-relaxed text-gray-900">
                      {example.output}
                    </p>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Constraints */}
          {problem.constraints && problem.constraints.length > 0 && (
            <section className="mb-5">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Constraints
              </p>
              <ul className="space-y-1">
                {problem.constraints.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                    {renderPrintInline(c)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Hints */}
          {problem.hints.length > 0 && (
            <section>
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Hints
              </p>
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
                          className="inline-flex items-center gap-1.5 border-none bg-transparent p-0 text-[13.5px] font-medium text-blue-600 hover:text-blue-700"
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
                      className="rounded-r-md border-l-2 border-blue-200 bg-blue-50 py-2.5 pl-3.5 pr-4 text-sm leading-relaxed text-gray-700"
                    >
                      {renderPrintInline(hint)}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Right — editor workspace */}
        <div className="flex min-h-[480px] flex-col bg-[#1e1e2e] lg:min-h-0">
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

          <div className="min-h-0 flex-1">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              placeholder={
                content?.editorPlaceholder ??
                "# Write your Python code here..."
              }
              className="block h-full min-h-[200px] w-full resize-none border-none bg-transparent px-4 py-3.5 font-mono text-sm leading-relaxed text-[#cdd6f4] outline-none placeholder:text-[#45475a] lg:min-h-0"
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
                disabled={loading || running || checking}
                className="inline-flex items-center gap-1.5 rounded-md border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-[13.5px] font-medium text-blue-200 transition hover:bg-blue-500/30 disabled:opacity-50"
              >
                {checking ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                Run &amp; Check
              </button>
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
