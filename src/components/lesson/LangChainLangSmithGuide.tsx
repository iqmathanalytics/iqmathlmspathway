"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, ClipboardList, CheckCircle2, Circle, Info } from "lucide-react";

const COLAB_URL = "https://colab.research.google.com/#create=true";

interface TermBadge { name: string; desc: string; }
interface Step {
  id: number;
  title: string;
  explanation: string;
  terms: TermBadge[];
  code: string;
  color: "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Install Required Packages",
    explanation:
      "Install LangChain, OpenAI, LangSmith and the experimental extension package. " +
      "LangSmith is the tracing and evaluation platform that monitors your LangChain workflows.",
    terms: [
      { name: "langsmith", desc: "The LangSmith SDK — provides Client and RunTree for tracing and logging LLM runs." },
      { name: "langchain-experimental", desc: "Experimental LangChain features including additional chain types." },
    ],
    code: `%pip install langchain langsmith openai langchain-experimental

print("✅ All packages installed!")`,
    color: "sky",
  },
  {
    id: 2,
    title: "Import Required Modules",
    explanation:
      "Import the core components: LLMChain and PromptTemplate to build workflows, " +
      "ChatOpenAI for GPT models, and Client + RunTree from LangSmith for tracing.",
    terms: [
      { name: "LLMChain", desc: "Combines an LLM with a prompt template into a single callable chain." },
      { name: "Client", desc: "LangSmith client for interacting with the LangSmith API and logging runs." },
      { name: "RunTree", desc: "Represents a traced execution tree — logs inputs, outputs and metadata to LangSmith." },
    ],
    code: `from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langsmith import Client
from langsmith.run_trees import RunTree
import os
from langchain_openai.chat_models import ChatOpenAI

print("✅ Modules imported successfully!")`,
    color: "blue",
  },
  {
    id: 3,
    title: "Set Up API Keys & Project",
    explanation:
      "Configure environment variables for LangChain, LangSmith and OpenAI. " +
      "LANGCHAIN_PROJECT links your runs to a named project in the LangSmith dashboard.",
    terms: [
      { name: "LANGCHAIN_PROJECT", desc: "Groups all traces under a named project in your LangSmith dashboard." },
      { name: "LANGCHAIN_API_KEY", desc: "Your LangSmith API key — get it from smith.langchain.com under Settings." },
    ],
    code: `os.environ["LANGCHAIN_PROJECT"] = "MyLangChainProject"
os.environ["LANGCHAIN_API_KEY"] = "your_langsmith_api_key"  # ← Replace
os.environ["OPENAI_API_KEY"]    = "your_openai_api_key"     # ← Replace

print("✅ API keys configured!")
print("   Project: MyLangChainProject")`,
    color: "indigo",
  },
  {
    id: 4,
    title: "Initialize LangSmith Client",
    explanation:
      "Create a Client instance to interact with the LangSmith API. " +
      "This client will be used when creating RunTree objects to log execution traces.",
    terms: [
      { name: "Client()", desc: "Initializes the LangSmith client using environment variables for authentication." },
    ],
    code: `client = Client()

print("✅ LangSmith client initialized!")
print("   Connected to LangSmith dashboard.")`,
    color: "violet",
  },
  {
    id: 5,
    title: "Initialize the LLM",
    explanation:
      "Create a ChatOpenAI instance pointing to GPT-4. temperature=0 makes responses " +
      "deterministic — ideal for testing since the same input always produces the same output.",
    terms: [
      { name: "model_name='gpt-4'", desc: "Specifies which OpenAI model to use for generating responses." },
      { name: "temperature=0", desc: "Disables randomness — ensures consistent, repeatable outputs for testing." },
    ],
    code: `llm = ChatOpenAI(model_name="gpt-4", temperature=0)

print("✅ LLM initialized!")
print("   Model: gpt-4  |  Temperature: 0 (deterministic)")`,
    color: "purple",
  },
  {
    id: 6,
    title: "Define a Prompt Template & Create the Chain",
    explanation:
      "Build a PromptTemplate with a {topic} placeholder, then combine it with the LLM into " +
      "an LLMChain. verbose=True prints intermediate outputs — useful for debugging.",
    terms: [
      { name: "input_variables", desc: "Lists the placeholder names that will be filled when the chain runs." },
      { name: "LLMChain(verbose=True)", desc: "Chains the LLM + prompt together. verbose=True logs each step to the console." },
    ],
    code: `prompt = PromptTemplate(
    input_variables=["topic"],
    template="Write a short paragraph explaining {topic} in simple terms."
)

chain = LLMChain(
    llm=llm,
    prompt=prompt,
    verbose=True   # prints intermediate outputs for debugging
)

print("✅ Prompt template and chain ready!")`,
    color: "fuchsia",
  },
  {
    id: 7,
    title: "Create a RunTree (LangSmith Trace)",
    explanation:
      "A RunTree represents a single traced execution in LangSmith. Define the run type, " +
      "provide inputs, and link it to your Client. This creates a trace entry in the LangSmith dashboard.",
    terms: [
      { name: "run_type='chain'", desc: "Tags this run as a chain execution in the LangSmith trace view." },
      { name: "inputs", desc: "Records the inputs passed to the chain so you can review them in the dashboard." },
    ],
    code: `rt = RunTree(
    name="MyLLMChainRun",
    run_type="chain",
    inputs={"topic": "LangChain Tracing"},
    client=client,
)

print("✅ RunTree created!")
print("   Trace will appear in LangSmith dashboard.")`,
    color: "pink",
  },
  {
    id: 8,
    title: "Run the Chain & Log to LangSmith",
    explanation:
      "Execute the chain, end the RunTree with the output, then print the result. " +
      "After running, visit smith.langchain.com to see the full trace with inputs, outputs and timing.",
    terms: [
      { name: "chain.run()", desc: "Executes the full chain — formats the prompt and sends it to the LLM." },
      { name: "rt.end(outputs=...)", desc: "Marks the run complete and sends the output to LangSmith for logging." },
    ],
    code: `result = chain.run({"topic": "LangChain Tracing"})
rt.end(outputs={"output": result})

print("✅ Chain executed and logged to LangSmith!")
print("\\n📝 LLM Output:")
print(result)
# Visit smith.langchain.com to view the full trace.`,
    color: "rose",
  },
];

const STEP_COLORS = {
  sky:     { headerBg: "bg-sky-50",     headerBorder: "border-sky-200",     num: "bg-sky-600",     termBadge: "bg-sky-100 text-sky-800",     doneBorder: "border-sky-200",     doneBg: "bg-sky-50",     doneTitle: "text-sky-800",     doneCheck: "text-sky-500"     },
  blue:    { headerBg: "bg-blue-50",    headerBorder: "border-blue-200",    num: "bg-blue-600",    termBadge: "bg-blue-100 text-blue-800",    doneBorder: "border-blue-200",    doneBg: "bg-blue-50",    doneTitle: "text-blue-800",    doneCheck: "text-blue-500"    },
  indigo:  { headerBg: "bg-indigo-50",  headerBorder: "border-indigo-200",  num: "bg-indigo-600",  termBadge: "bg-indigo-100 text-indigo-800",  doneBorder: "border-indigo-200",  doneBg: "bg-indigo-50",  doneTitle: "text-indigo-800",  doneCheck: "text-indigo-500"  },
  violet:  { headerBg: "bg-violet-50",  headerBorder: "border-violet-200",  num: "bg-violet-600",  termBadge: "bg-violet-100 text-violet-800",  doneBorder: "border-violet-200",  doneBg: "bg-violet-50",  doneTitle: "text-violet-800",  doneCheck: "text-violet-500"  },
  purple:  { headerBg: "bg-purple-50",  headerBorder: "border-purple-200",  num: "bg-purple-600",  termBadge: "bg-purple-100 text-purple-800",  doneBorder: "border-purple-200",  doneBg: "bg-purple-50",  doneTitle: "text-purple-800",  doneCheck: "text-purple-500"  },
  fuchsia: { headerBg: "bg-fuchsia-50", headerBorder: "border-fuchsia-200", num: "bg-fuchsia-600", termBadge: "bg-fuchsia-100 text-fuchsia-800", doneBorder: "border-fuchsia-200", doneBg: "bg-fuchsia-50", doneTitle: "text-fuchsia-800", doneCheck: "text-fuchsia-500" },
  pink:    { headerBg: "bg-pink-50",    headerBorder: "border-pink-200",    num: "bg-pink-600",    termBadge: "bg-pink-100 text-pink-800",    doneBorder: "border-pink-200",    doneBg: "bg-pink-50",    doneTitle: "text-pink-800",    doneCheck: "text-pink-500"    },
  rose:    { headerBg: "bg-rose-50",    headerBorder: "border-rose-200",    num: "bg-rose-600",    termBadge: "bg-rose-100 text-rose-800",    doneBorder: "border-rose-200",    doneBg: "bg-rose-50",    doneTitle: "text-rose-800",    doneCheck: "text-rose-500"    },
} as const;

export function LangChainLangSmithGuide() {
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
      <div className="overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-sky-600" />
              <p className="text-[13.5px] font-bold text-slate-900">Try in Jupyter</p>
            </div>
            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-orange-700 shadow-sm transition hover:bg-orange-50"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[9px] font-bold text-white">Co</span>
              Open Colab
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-1 text-[11.5px] text-slate-500">Step-by-step LangSmith integration</p>

          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">{count} of {total} steps copied</span>
              <span className={`text-[11px] font-bold ${allDone ? "text-sky-600" : "text-slate-500"}`}>{pct}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ${allDone ? "bg-sky-500" : "bg-sky-400"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {allDone && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-3 py-2">
              <CheckCircle2 className="h-4 w-4 text-sky-500" />
              <p className="text-[12px] font-semibold text-sky-700">All steps copied — nice work!</p>
            </div>
          )}
        </div>

        {/* Checklist */}
        <div className="space-y-1.5 border-t border-sky-100 bg-white/60 px-4 py-3">
          {STEPS.map((step) => {
            const done = doneSteps.has(step.id);
            const c = STEP_COLORS[step.color];
            return (
              <div key={step.id} className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-all duration-300 ${done ? `${c.doneBorder} ${c.doneBg}` : "border-gray-100 bg-gray-50"}`}>
                {done ? <CheckCircle2 className={`h-4 w-4 shrink-0 ${c.doneCheck}`} /> : <Circle className="h-4 w-4 shrink-0 text-gray-300" />}
                <span className={`text-[11.5px] font-medium ${done ? c.doneTitle : "text-gray-600"}`}>
                  <span className="mr-1 text-[10px] text-gray-400">Step {step.id}</span>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Steps ──────────────────────────────────────────────────────────── */}
      {STEPS.map((step, idx) => {
        const c = STEP_COLORS[step.color];
        const isCopied = copiedId === step.id;
        return (
          <div key={step.id} className="relative">
            {idx < STEPS.length - 1 && (
              <div className="absolute left-5 top-full h-4 w-0.5 bg-gradient-to-b from-sky-300 to-transparent" />
            )}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className={`flex items-center gap-3 border-b ${c.headerBorder} ${c.headerBg} px-4 py-3`}>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${c.num} text-xs font-bold text-white shadow-sm`}>
                  {step.id}
                </div>
                <h3 className="text-[13.5px] font-bold text-gray-900">{step.title}</h3>
              </div>
              <div className="space-y-3 p-4">
                <p className="text-[12.5px] leading-relaxed text-gray-700">{step.explanation}</p>
                {step.terms.length > 0 && (
                  <div className="space-y-1.5">
                    {step.terms.map((t) => (
                      <div key={t.name} className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                        <code className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[10.5px] font-bold ${c.termBadge}`}>{t.name}</code>
                        <p className="text-[11.5px] leading-relaxed text-gray-600">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white">
                        <svg width="8" height="10" viewBox="0 0 10 12" fill="currentColor" className="text-gray-500"><path d="M0 0l10 6-10 6V0z" /></svg>
                      </div>
                      <span className="font-mono text-[10.5px] text-gray-500">[ {step.id} ]</span>
                      <span className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[9.5px] text-gray-500">Python</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyCode(step.id, step.code)}
                      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[10.5px] font-medium text-gray-600 transition-colors hover:bg-gray-50"
                    >
                      {isCopied ? (<><Check className="h-3 w-3 text-green-500" /><span className="text-green-600">Copied!</span></>) : (<><Copy className="h-3 w-3" />Copy</>)}
                    </button>
                  </div>
                  <div className="bg-white px-4 py-3">
                    <pre className="overflow-x-auto font-mono text-[11.5px] leading-[1.8] text-gray-800">{step.code}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
        <p className="text-[11px] leading-relaxed text-gray-400">
          This tracker is optional — you can move to the next topic at any time.
        </p>
      </div>
    </div>
  );
}
