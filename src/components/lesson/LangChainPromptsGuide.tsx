"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  ClipboardList,
  CheckCircle2,
  Circle,
  Info,
} from "lucide-react";

const COLAB_URL = "https://colab.research.google.com/#create=true";

/* ── Step data ───────────────────────────────────────────────────────────── */

interface TermBadge {
  name: string;
  desc: string;
}

interface Step {
  id: number;
  title: string;
  explanation: string;
  terms: TermBadge[];
  code: string;
  color: "violet" | "purple" | "indigo" | "blue";
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Create a Prompt Template",
    explanation:
      "A PromptTemplate stores a reusable prompt pattern with named placeholders. " +
      ".from_template() parses the string and detects the {year} variable automatically.",
    terms: [
      {
        name: "PromptTemplate.from_template()",
        desc: "Parses the template string and identifies all {placeholder} variables.",
      },
      {
        name: "{year}",
        desc: "A placeholder replaced at runtime with the value you supply when invoking the chain.",
      },
    ],
    code: `template = "Give me 3 career skills that are in high demand in {year}."
prompt_template = PromptTemplate.from_template(template)

print("✅ Prompt template created!")
print("   Template:", template)
print("   Placeholder detected: {year}")`,
    color: "violet",
  },
  {
    id: 2,
    title: "Create a Parser Object",
    explanation:
      "StrOutputParser converts the LLM's AIMessage response object into a plain " +
      "Python string so you can use the text directly without accessing .content manually.",
    terms: [
      {
        name: "StrOutputParser()",
        desc: "Extracts the text content from the LLM's response and returns it as a clean string.",
      },
    ],
    code: `parser = StrOutputParser()

print("✅ Output parser ready!")
print("   Converts AIMessage → plain string automatically.")`,
    color: "purple",
  },
  {
    id: 3,
    title: "Build a Chain with LCEL",
    explanation:
      "LCEL (LangChain Expression Language) lets you compose a pipeline using the | pipe operator. " +
      "Data flows left-to-right: the template formats the prompt, the LLM generates a response, " +
      "and the parser extracts the text.",
    terms: [
      {
        name: "prompt_template",
        desc: 'Fills {year} with the input value. e.g. "Give me 3 career skills in 2026."',
      },
      {
        name: "llm",
        desc: "Receives the formatted prompt and returns the model's response.",
      },
      {
        name: "parser",
        desc: "Receives the AIMessage and returns just the text string.",
      },
    ],
    code: `# LCEL: chain components with the | (pipe) operator
chain = prompt_template | llm | parser
#       ↑                  ↑      ↑
# Formats prompt      Runs LLM  Extracts string

print("✅ LCEL chain built!")
print("   Pipeline: PromptTemplate | LLM | StrOutputParser")`,
    color: "indigo",
  },
  {
    id: 4,
    title: "Run the Chain",
    explanation:
      ".invoke() runs the entire pipeline end-to-end. You pass a dict where each key " +
      "matches a placeholder in your template. The {year} slot is filled with '2026' " +
      "before the prompt is sent to the LLM.",
    terms: [
      {
        name: '.invoke({"year": "2026"})',
        desc: "Passes values for all template placeholders and runs the full chain.",
      },
    ],
    code: `response = chain.invoke({"year": "2026"})

print("\\n🎓 Career Skills in 2026:")
print(response)

# Example output:
# 1. Data Analytics and AI/ML Engineering
# 2. Cybersecurity and Cloud Computing
# 3. Full-Stack Development with AI Integration`,
    color: "blue",
  },
];

/* ── Color maps ──────────────────────────────────────────────────────────── */

const STEP_COLORS = {
  violet: {
    headerBg: "bg-violet-50",
    headerBorder: "border-violet-200",
    num: "bg-violet-600",
    termBadge: "bg-violet-100 text-violet-800",
    doneBorder: "border-violet-200",
    doneBg: "bg-violet-50",
    doneTitle: "text-violet-800",
    doneCheck: "text-violet-500",
  },
  purple: {
    headerBg: "bg-purple-50",
    headerBorder: "border-purple-200",
    num: "bg-purple-600",
    termBadge: "bg-purple-100 text-purple-800",
    doneBorder: "border-purple-200",
    doneBg: "bg-purple-50",
    doneTitle: "text-purple-800",
    doneCheck: "text-purple-500",
  },
  indigo: {
    headerBg: "bg-indigo-50",
    headerBorder: "border-indigo-200",
    num: "bg-indigo-600",
    termBadge: "bg-indigo-100 text-indigo-800",
    doneBorder: "border-indigo-200",
    doneBg: "bg-indigo-50",
    doneTitle: "text-indigo-800",
    doneCheck: "text-indigo-500",
  },
  blue: {
    headerBg: "bg-blue-50",
    headerBorder: "border-blue-200",
    num: "bg-blue-600",
    termBadge: "bg-blue-100 text-blue-800",
    doneBorder: "border-blue-200",
    doneBg: "bg-blue-50",
    doneTitle: "text-blue-800",
    doneCheck: "text-blue-500",
  },
} as const;

/* ── Component ───────────────────────────────────────────────────────────── */

export function LangChainPromptsGuide() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());

  function copyCode(id: number, code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setDoneSteps((prev) => new Set([...prev, id]));
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  const total = STEPS.length;
  const count = doneSteps.size;
  const pct = Math.round((count / total) * 100);
  const allDone = count === total;

  return (
    <div className="space-y-4">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-violet-600" />
              <p className="text-[13.5px] font-bold text-slate-900">
                Try in Jupyter
              </p>
            </div>
            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-orange-700 shadow-sm transition hover:bg-orange-50"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[9px] font-bold text-white">
                Co
              </span>
              Open Colab
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <p className="mt-1 text-[11.5px] text-slate-500">
            Copy each cell into your notebook and run in order (continue from Step 5)
          </p>

          {/* Progress bar */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                {count} of {total} steps copied
              </span>
              <span
                className={`text-[11px] font-bold ${
                  allDone ? "text-violet-600" : "text-slate-500"
                }`}
              >
                {pct}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  allDone ? "bg-violet-500" : "bg-violet-400"
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {allDone && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-3 py-2">
              <CheckCircle2 className="h-4 w-4 text-violet-500" />
              <p className="text-[12px] font-semibold text-violet-700">
                All cells copied — great work!
              </p>
            </div>
          )}
        </div>

        {/* Mini step checklist */}
        <div className="space-y-1.5 border-t border-violet-100 bg-white/60 px-4 py-3">
          {STEPS.map((step) => {
            const done = doneSteps.has(step.id);
            const c = STEP_COLORS[step.color];
            return (
              <div
                key={step.id}
                className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-all duration-300 ${
                  done ? `${c.doneBorder} ${c.doneBg}` : "border-gray-100 bg-gray-50"
                }`}
              >
                {done ? (
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${c.doneCheck}`} />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-gray-300" />
                )}
                <span
                  className={`text-[11.5px] font-medium ${
                    done ? c.doneTitle : "text-gray-600"
                  }`}
                >
                  <span className="mr-1 text-[10px] text-gray-400">
                    Step {step.id}
                  </span>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Steps with code cells ──────────────────────────────────────────── */}
      {STEPS.map((step, idx) => {
        const c = STEP_COLORS[step.color];
        const isCopied = copiedId === step.id;
        return (
          <div key={step.id} className="relative">
            {idx < STEPS.length - 1 && (
              <div className="absolute left-5 top-full h-4 w-0.5 bg-gradient-to-b from-violet-300 to-transparent" />
            )}

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Step header */}
              <div
                className={`flex items-center gap-3 border-b ${c.headerBorder} ${c.headerBg} px-4 py-3`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${c.num} text-xs font-bold text-white shadow-sm`}
                >
                  {step.id}
                </div>
                <h3 className="text-[13.5px] font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>

              <div className="space-y-3 p-4">
                {/* Explanation */}
                <p className="text-[12.5px] leading-relaxed text-gray-700">
                  {step.explanation}
                </p>

                {/* Term badges */}
                {step.terms.length > 0 && (
                  <div className="space-y-1.5">
                    {step.terms.map((t) => (
                      <div
                        key={t.name}
                        className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                      >
                        <code
                          className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[10.5px] font-bold ${c.termBadge}`}
                        >
                          {t.name}
                        </code>
                        <p className="text-[11.5px] leading-relaxed text-gray-600">
                          {t.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Colab-style code cell */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  {/* Cell toolbar */}
                  <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white text-gray-400">
                        <svg
                          width="8"
                          height="10"
                          viewBox="0 0 10 12"
                          fill="currentColor"
                          className="text-gray-500"
                        >
                          <path d="M0 0l10 6-10 6V0z" />
                        </svg>
                      </div>
                      <span className="font-mono text-[10.5px] text-gray-500">
                        [ {step.id} ]
                      </span>
                      <span className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[9.5px] text-gray-500">
                        Python
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyCode(step.id, step.code)}
                      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[10.5px] font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3 w-3 text-green-500" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code body */}
                  <div className="bg-white px-4 py-3">
                    <pre className="overflow-x-auto font-mono text-[11.5px] leading-[1.8] text-gray-800">
                      {step.code}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
        <p className="text-[11px] leading-relaxed text-gray-400">
          This tracker is optional — you can move to the next topic at any time.
        </p>
      </div>
    </div>
  );
}
