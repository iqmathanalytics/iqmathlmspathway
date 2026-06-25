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
  color: "orange" | "amber" | "yellow" | "lime" | "green" | "teal";
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Install Dependencies",
    explanation:
      "Install LangChain and the Cohere integration package. Run this in the first cell of your notebook — the ! prefix tells Jupyter to execute it as a terminal command.",
    terms: [
      {
        name: "langchain",
        desc: "The core LangChain framework — chains, prompts, parsers, and more.",
      },
      {
        name: "langchain-cohere",
        desc: "LangChain integration for Cohere's language models.",
      },
    ],
    code: `!pip install langchain langchain-cohere

print("✅ Dependencies installed successfully!")`,
    color: "orange",
  },
  {
    id: 2,
    title: "Import Libraries",
    explanation:
      "Import all required components. PromptTemplate and ChatPromptTemplate handle prompt structure. " +
      "ChatCohere is the Cohere model wrapper. StrOutputParser cleans the model's response into plain text.",
    terms: [
      {
        name: "PromptTemplate",
        desc: "Defines prompt structure with {placeholder} variables for dynamic inputs.",
      },
      {
        name: "ChatCohere",
        desc: "LangChain wrapper to interact with Cohere's language models.",
      },
      {
        name: "StrOutputParser",
        desc: "Extracts the text string from the LLM's response object.",
      },
    ],
    code: `from langchain_core.prompts import PromptTemplate
from langchain_core.prompts import ChatPromptTemplate
from langchain_cohere import ChatCohere
from langchain.schema.output_parser import StrOutputParser

print("✅ Libraries imported successfully!")`,
    color: "amber",
  },
  {
    id: 3,
    title: "Setup API Key & Initialize LLM",
    explanation:
      "Get your Cohere API key from dashboard.cohere.com → API Keys → New Trial Key. " +
      "Set it as an environment variable, then create the ChatCohere model instance. " +
      "temperature=0 makes responses deterministic (no randomness).",
    terms: [
      {
        name: "model='command-r'",
        desc: "Cohere's reasoning-focused model, good for step-by-step problem solving.",
      },
      {
        name: "temperature=0",
        desc: "Makes responses consistent and deterministic — ideal for structured tasks.",
      },
    ],
    code: `import os
os.environ["cohere_api_key"] = "your_key_here"  # ← Replace with your key

llm = ChatCohere(
    model="command-r",
    temperature=0,
    cohere_api_key=os.environ["cohere_api_key"]
)

print("✅ LLM initialized!")
print("   Model      : command-r")
print("   Temperature: 0 (deterministic)")`,
    color: "yellow",
  },
  {
    id: 4,
    title: "Define Prompt Template & Output Parser",
    explanation:
      "Create a PromptTemplate with a {question} placeholder. The phrase 'Let's think step by step' " +
      "encourages the model to reason before answering. StrOutputParser converts the raw response into plain text.",
    terms: [
      {
        name: "PromptTemplate.from_template()",
        desc: "Parses the template string and registers {question} as an input variable.",
      },
      {
        name: '"Let\'s think step by step."',
        desc: "Chain-of-thought prompt — nudges the model to reason through the problem logically.",
      },
      {
        name: "StrOutputParser()",
        desc: "Strips metadata from the LLM response and returns only the text content.",
      },
    ],
    code: `template = """Question: {question}

Answer: Let's think step by step."""

prompt = PromptTemplate.from_template(template)
output_parser = StrOutputParser()

print("✅ Prompt template and output parser ready!")
print("   Placeholder : {question}")
print("   Parser      : StrOutputParser")`,
    color: "lime",
  },
  {
    id: 5,
    title: "Build the LCEL Chain",
    explanation:
      "Use the | pipe operator to chain the three components. LCEL ensures the prompt formats the input, " +
      "the LLM processes it, and the parser cleans the output — all in one declarative expression.",
    terms: [
      {
        name: "prompt | llm | output_parser",
        desc: "LCEL pipeline — each component's output becomes the next component's input.",
      },
    ],
    code: `chain = prompt | llm | output_parser
#       ↑           ↑        ↑
# Formats Q    Runs LLM   Extracts string

print("✅ LCEL chain built!")
print("   Pipeline: Prompt | LLM | OutputParser")`,
    color: "green",
  },
  {
    id: 6,
    title: "Run the Chain",
    explanation:
      ".invoke() runs the entire pipeline end-to-end. Pass a dict with the value for each placeholder. " +
      "The prompt fills {question}, sends it to the LLM, and the parser returns clean text.",
    terms: [
      {
        name: '.invoke({"question": ...})',
        desc: "Triggers the full chain — fills the template, calls the LLM, and parses the output.",
      },
    ],
    code: `question = """
I have five apples. I throw two away. I eat one.
How many apples do I have left?
"""

response = chain.invoke({"question": question})
print(response)

# Output:
# You started with five apples, removed two by throwing
# them away and then consumed one more, which leaves you
# with two apples. The final answer is two apples.`,
    color: "teal",
  },
];

/* ── Color maps ──────────────────────────────────────────────────────────── */

const STEP_COLORS = {
  orange: {
    headerBg: "bg-orange-50", headerBorder: "border-orange-200",
    num: "bg-orange-600", termBadge: "bg-orange-100 text-orange-800",
    doneBorder: "border-orange-200", doneBg: "bg-orange-50",
    doneTitle: "text-orange-800", doneCheck: "text-orange-500",
  },
  amber: {
    headerBg: "bg-amber-50", headerBorder: "border-amber-200",
    num: "bg-amber-600", termBadge: "bg-amber-100 text-amber-800",
    doneBorder: "border-amber-200", doneBg: "bg-amber-50",
    doneTitle: "text-amber-800", doneCheck: "text-amber-500",
  },
  yellow: {
    headerBg: "bg-yellow-50", headerBorder: "border-yellow-200",
    num: "bg-yellow-600", termBadge: "bg-yellow-100 text-yellow-800",
    doneBorder: "border-yellow-200", doneBg: "bg-yellow-50",
    doneTitle: "text-yellow-800", doneCheck: "text-yellow-500",
  },
  lime: {
    headerBg: "bg-lime-50", headerBorder: "border-lime-200",
    num: "bg-lime-600", termBadge: "bg-lime-100 text-lime-800",
    doneBorder: "border-lime-200", doneBg: "bg-lime-50",
    doneTitle: "text-lime-800", doneCheck: "text-lime-500",
  },
  green: {
    headerBg: "bg-green-50", headerBorder: "border-green-200",
    num: "bg-green-600", termBadge: "bg-green-100 text-green-800",
    doneBorder: "border-green-200", doneBg: "bg-green-50",
    doneTitle: "text-green-800", doneCheck: "text-green-500",
  },
  teal: {
    headerBg: "bg-teal-50", headerBorder: "border-teal-200",
    num: "bg-teal-600", termBadge: "bg-teal-100 text-teal-800",
    doneBorder: "border-teal-200", doneBg: "bg-teal-50",
    doneTitle: "text-teal-800", doneCheck: "text-teal-500",
  },
} as const;

/* ── Component ───────────────────────────────────────────────────────────── */

export function LangChainLCELGuide() {
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
      <div className="overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-orange-600" />
              <p className="text-[13.5px] font-bold text-slate-900">Try in Jupyter</p>
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
            Copy each cell into your notebook and run in order
          </p>

          {/* Progress bar */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">{count} of {total} steps copied</span>
              <span className={`text-[11px] font-bold ${allDone ? "text-orange-600" : "text-slate-500"}`}>
                {pct}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ${allDone ? "bg-orange-500" : "bg-orange-400"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {allDone && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-3 py-2">
              <CheckCircle2 className="h-4 w-4 text-orange-500" />
              <p className="text-[12px] font-semibold text-orange-700">All cells copied — great work!</p>
            </div>
          )}
        </div>

        {/* Mini checklist */}
        <div className="space-y-1.5 border-t border-orange-100 bg-white/60 px-4 py-3">
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
                <span className={`text-[11.5px] font-medium ${done ? c.doneTitle : "text-gray-600"}`}>
                  <span className="mr-1 text-[10px] text-gray-400">Step {step.id}</span>
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
              <div className="absolute left-5 top-full h-4 w-0.5 bg-gradient-to-b from-orange-300 to-transparent" />
            )}

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Step header */}
              <div className={`flex items-center gap-3 border-b ${c.headerBorder} ${c.headerBg} px-4 py-3`}>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${c.num} text-xs font-bold text-white shadow-sm`}>
                  {step.id}
                </div>
                <h3 className="text-[13.5px] font-bold text-gray-900">{step.title}</h3>
              </div>

              <div className="space-y-3 p-4">
                {/* Explanation */}
                <p className="text-[12.5px] leading-relaxed text-gray-700">{step.explanation}</p>

                {/* Term badges */}
                {step.terms.length > 0 && (
                  <div className="space-y-1.5">
                    {step.terms.map((t) => (
                      <div key={t.name} className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                        <code className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[10.5px] font-bold ${c.termBadge}`}>
                          {t.name}
                        </code>
                        <p className="text-[11.5px] leading-relaxed text-gray-600">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Colab-style code cell */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white text-gray-400">
                        <svg width="8" height="10" viewBox="0 0 10 12" fill="currentColor" className="text-gray-500">
                          <path d="M0 0l10 6-10 6V0z" />
                        </svg>
                      </div>
                      <span className="font-mono text-[10.5px] text-gray-500">[ {step.id} ]</span>
                      <span className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[9.5px] text-gray-500">Python</span>
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
