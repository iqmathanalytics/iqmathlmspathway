"use client";

import {
  GitMerge,
  GitBranch,
  Zap,
  Radio,
  Server,
  Layers,
  ChevronRight,
  BookOpen,
} from "lucide-react";

/* ── Key concepts ────────────────────────────────────────────────────────── */

const CONCEPTS = [
  {
    icon: Layers,
    title: "Runnable Interface",
    desc: "The core building block of LCEL. Any two Runnables can be combined using the | pipe operator — the output of one becomes the input of the next.",
    color: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
  },
  {
    icon: GitBranch,
    title: "Declarative Chains",
    desc: "Chains are built with | operators instead of legacy Chain objects. This creates a clear, left-to-right data flow that is easy to read and modify.",
    color: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
  },
  {
    icon: GitMerge,
    title: "Parallel Execution",
    desc: "Run independent tasks concurrently using RunnableParallel, reducing end-to-end latency when tasks do not depend on each other.",
    color: "bg-yellow-100 text-yellow-700",
    border: "border-yellow-200",
  },
  {
    icon: Radio,
    title: "Streaming Output",
    desc: "Supports incremental streaming for faster time-to-first-token from LLMs, improving responsiveness in chat and real-time apps.",
    color: "bg-lime-100 text-lime-700",
    border: "border-lime-200",
  },
] as const;

/* ── Key features list ────────────────────────────────────────────────────── */

const FEATURES = [
  {
    emoji: "🔗",
    title: "Declarative Pipe Syntax",
    desc: "Connect components with | to build readable left-to-right data flows without nested callbacks.",
  },
  {
    emoji: "⚡",
    title: "Parallel Execution",
    desc: "RunnableParallel runs independent branches at the same time, cutting total latency.",
  },
  {
    emoji: "🔄",
    title: "Async by Default",
    desc: "All chains support async execution out of the box — ideal for high-throughput web servers.",
  },
  {
    emoji: "📡",
    title: "Streaming Output",
    desc: "Get tokens back incrementally so users see a response start appearing immediately.",
  },
  {
    emoji: "🚀",
    title: "LangServe Deployment",
    desc: "Deploy LCEL chains directly in production with built-in retries, fallbacks, and scaling.",
  },
] as const;

/* ── LCEL pipe components ─────────────────────────────────────────────────── */

const PIPE_NODES = [
  {
    emoji: "📝",
    label: "Prompt",
    sub: "Template + {variables}",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-800",
    subText: "text-orange-500",
  },
  {
    emoji: "🤖",
    label: "LLM",
    sub: "GPT / Claude / Gemini",
    gradient: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
    subText: "text-amber-500",
  },
  {
    emoji: "🔧",
    label: "Output Parser",
    sub: "Extracts plain string",
    gradient: "from-yellow-500 to-lime-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    subText: "text-yellow-600",
  },
  {
    emoji: "✅",
    label: "Chain",
    sub: "prompt | llm | parser",
    gradient: "from-lime-500 to-green-500",
    bg: "bg-lime-50",
    border: "border-lime-200",
    text: "text-lime-800",
    subText: "text-lime-600",
  },
] as const;

/* ── Component ───────────────────────────────────────────────────────────── */

export function LangChainLCELBlock() {
  return (
    <div className="space-y-7">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-sm">
        <div className="border-b border-orange-100 bg-white/60 px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold text-gray-900">
                LangChain Expression Language (LCEL)
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
                LCEL connects AI building blocks — prompts, models, retrievers, and parsers — using
                the <code className="rounded bg-orange-100 px-1 font-mono text-orange-800">|</code> pipe
                symbol so information flows smoothly from one part to the next. Instead of writing
                complicated code, you stack blocks in order and LCEL passes each output to the next step.
              </p>
            </div>
            <BookOpen className="h-8 w-8 shrink-0 text-orange-400" />
          </div>
        </div>

        {/* Without vs With LCEL */}
        <div className="grid grid-cols-2 divide-x divide-orange-100">
          <div className="px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-orange-600">
              Without LCEL
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-100 px-3 py-2 font-mono text-[11px] text-gray-700">
{`result = llm(
  prompt.format(q=question)
)
# ❌ Manual chaining,
# verbose and fragile`}
            </pre>
          </div>
          <div className="px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-orange-600">
              With LCEL
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-orange-50 px-3 py-2 font-mono text-[11px] text-orange-800">
{`chain = prompt | llm | parser
result = chain.invoke(
  {"question": question}
)
# ✅ Clean, readable, chainable`}
            </pre>
          </div>
        </div>
      </div>

      {/* ── Key Concepts ───────────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Core Concepts
        </p>
        <div className="grid grid-cols-2 gap-3">
          {CONCEPTS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`rounded-xl border ${c.border} bg-white p-3.5 shadow-sm`}
              >
                <div className={`mb-2 inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-bold ${c.color}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {c.title}
                </div>
                <p className="text-[12px] leading-relaxed text-gray-600">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LCEL Pipe Syntax diagram ───────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          LCEL Pipe Syntax
        </p>

        <div className="overflow-x-auto pb-2 [scrollbar-width:thin]">
          <div className="flex min-w-max items-center gap-1 rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-4">
            {PIPE_NODES.map((node, idx) => (
              <div key={node.label} className="flex items-center gap-1">
                <div className={`flex flex-col items-center gap-1.5 rounded-xl border ${node.border} ${node.bg} px-3.5 py-3 shadow-sm min-w-[96px]`}>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${node.gradient} shadow-sm text-base`}>
                    {node.emoji}
                  </div>
                  <p className={`text-center text-[11.5px] font-bold leading-tight ${node.text}`}>
                    {node.label}
                  </p>
                  <p className={`text-center text-[10px] leading-tight ${node.subText}`}>
                    {node.sub}
                  </p>
                </div>
                {idx < PIPE_NODES.length - 1 && (
                  <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-[11.5px] text-gray-500">
          Each component is a <strong>Runnable</strong>. The <code className="rounded bg-gray-100 px-1 font-mono text-gray-700">|</code> operator passes the output of each step as the input to the next.
        </p>
      </div>

      {/* ── Key Features ───────────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Key Features
        </p>
        <div className="space-y-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm"
            >
              <span className="mt-0.5 text-base">{f.emoji}</span>
              <div>
                <p className="text-[12.5px] font-bold text-gray-900">{f.title}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
