"use client";

import {
  FileText,
  Hash,
  Link2,
  Scissors,
  ChevronRight,
  BookOpen,
} from "lucide-react";

/* ── Horizontal flowchart data ──────────────────────────────────────────────── */

const FLOW_NODES = [
  {
    id: 1,
    emoji: "⌨️",
    label: "Input Values",
    sub: '{"year": "2026"}',
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-800",
    subText: "text-violet-500",
  },
  {
    id: 2,
    emoji: "📝",
    label: "PromptTemplate",
    sub: "Fills {placeholders}",
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-800",
    subText: "text-purple-500",
  },
  {
    id: 3,
    emoji: "💬",
    label: "Formatted Prompt",
    sub: '"…skills in 2026."',
    gradient: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    text: "text-indigo-800",
    subText: "text-indigo-500",
  },
  {
    id: 4,
    emoji: "🤖",
    label: "LLM (Gemini)",
    sub: "Generates answer",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    subText: "text-blue-500",
  },
  {
    id: 5,
    emoji: "🔧",
    label: "StrOutputParser",
    sub: "Extracts string",
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-800",
    subText: "text-cyan-500",
  },
  {
    id: 6,
    emoji: "✅",
    label: "Output String",
    sub: '"1. Data Analytics…"',
    gradient: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-800",
    subText: "text-teal-500",
  },
] as const;

/* ── Key concept cards ────────────────────────────────────────────────────── */

const CONCEPTS = [
  {
    icon: FileText,
    title: "PromptTemplate",
    desc: "Defines the structure of a prompt using a string with {placeholder} variables. Use .from_template() to create one.",
    color: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
  },
  {
    icon: Hash,
    title: "Placeholders",
    desc: "Dynamic slots like {year} or {topic} in the template. You supply a dict of values when invoking the chain.",
    color: "bg-purple-100 text-purple-700",
    border: "border-purple-200",
  },
  {
    icon: Link2,
    title: "LCEL Pipe  |",
    desc: "LangChain Expression Language. The | operator chains components left-to-right: prompt | llm | parser.",
    color: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
  },
  {
    icon: Scissors,
    title: "StrOutputParser",
    desc: "Converts the LLM's message object into a clean plain-text string so your app can use it directly.",
    color: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
  },
] as const;

/* ── Component ───────────────────────────────────────────────────────────── */

export function LangChainPromptsBlock() {
  return (
    <div className="space-y-7">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-purple-50 shadow-sm">
        <div className="border-b border-violet-100 bg-white/60 px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold text-gray-900">
                Prompt Templates
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
                A <strong>PromptTemplate</strong> is a reusable pattern for building prompts
                dynamically. Instead of hardcoding a string, you define a template with
                placeholders — like <code className="rounded bg-violet-100 px-1 text-violet-800">{"{year}"}</code> — and fill them in at
                runtime. This keeps your code clean, testable, and reusable.
              </p>
            </div>
            <BookOpen className="h-8 w-8 shrink-0 text-violet-400" />
          </div>
        </div>

        {/* Why use Prompt Templates */}
        <div className="grid grid-cols-2 divide-x divide-violet-100 sm:grid-cols-2">
          <div className="px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-violet-600">
              Without Templates
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-100 px-3 py-2 font-mono text-[11px] text-gray-700">
{`prompt = "3 skills in 2025"
prompt2 = "3 skills in 2026"
# ❌ Repeated code`}
            </pre>
          </div>
          <div className="px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-violet-600">
              With Templates
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-violet-50 px-3 py-2 font-mono text-[11px] text-violet-800">
{`t = "3 skills in {year}"
# ✅ One template,
# any year`}
            </pre>
          </div>
        </div>
      </div>

      {/* ── Key Concepts grid ──────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Key Concepts
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

      {/* ── How it works — horizontal flowchart ────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          How It Works — LangChain LCEL Pipeline
        </p>

        {/* Scrollable row on small screens */}
        <div className="overflow-x-auto pb-2 [scrollbar-width:thin]">
          <div className="flex min-w-max items-center gap-1 rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-4">
            {FLOW_NODES.map((node, idx) => (
              <div key={node.id} className="flex items-center gap-1">
                {/* Node box */}
                <div className={`flex flex-col items-center gap-1.5 rounded-xl border ${node.border} ${node.bg} px-3.5 py-3 shadow-sm min-w-[90px]`}>
                  {/* Emoji icon with gradient circle */}
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

                {/* Arrow between nodes */}
                {idx < FLOW_NODES.length - 1 && (
                  <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flow explanation pill */}
        <div className="mt-3 flex flex-wrap gap-2 text-[11.5px] text-gray-500">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-medium">
            1. You provide input values as a dict
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-medium">
            2. Template replaces placeholders
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-medium">
            3. Prompt sent to LLM
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-medium">
            4. Parser returns clean string
          </span>
        </div>
      </div>

      {/* ── LCEL pipe syntax explainer ─────────────────────────────────────── */}
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
        <p className="mb-2 text-[12.5px] font-bold text-indigo-900">
          🔗 LCEL — LangChain Expression Language
        </p>
        <p className="mb-3 text-[12.5px] leading-relaxed text-indigo-800">
          The <code className="rounded bg-indigo-100 px-1 font-mono text-indigo-900">|</code> operator chains LangChain components into a pipeline. Each component&apos;s output becomes the next component&apos;s input — just like Unix pipes.
        </p>
        <pre className="rounded-xl bg-white/80 px-4 py-3 font-mono text-[12px] text-indigo-900 shadow-sm">
{`chain = prompt_template | llm | parser
#        ↑                 ↑      ↑
#   Formats prompt    Runs LLM   Extracts string`}
        </pre>
      </div>
    </div>
  );
}
