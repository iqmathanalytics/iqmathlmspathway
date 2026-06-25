"use client";

import { Brain, Database, Link2, MessageSquare, Network, Workflow } from "lucide-react";

const FEATURES = [
  "Simplifies chaining LLMs together for reusable and efficient workflows.",
  "Offers tools for effective prompt engineering and memory handling.",
  "Streamlines the process of building LLM-powered applications.",
];

const COMPONENTS = [
  {
    icon: Link2,
    name: "Chains",
    desc: "Define a sequence of steps where each step can use an LLM, process data or call tools. Simple chains use one step; multi-step chains combine multiple actions.",
    color: "blue" as const,
  },
  {
    icon: MessageSquare,
    name: "Prompt Management",
    desc: "Helps design and manage prompts using templates, making it easier to control input, output format and model behavior.",
    color: "violet" as const,
  },
  {
    icon: Workflow,
    name: "Agents",
    desc: "LLM-driven components that decide which actions to take, such as calling tools or APIs, based on input and predefined capabilities.",
    color: "emerald" as const,
  },
  {
    icon: Database,
    name: "Vector Database",
    desc: "Stores data as vectors to enable similarity search, helping retrieve relevant information for tasks like document search and RAG.",
    color: "amber" as const,
  },
  {
    icon: Brain,
    name: "Models",
    desc: "Supports multiple LLMs like OpenAI, Hugging Face and others, allowing flexibility in choosing the best model.",
    color: "rose" as const,
  },
  {
    icon: Network,
    name: "Memory Management",
    desc: "Maintains context from past interactions, enabling better responses in conversations and multi-step tasks.",
    color: "cyan" as const,
  },
] as const;

const COLOR_MAP = {
  blue: {
    border: "border-blue-200",
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-700",
    title: "text-blue-900",
    dot: "bg-blue-500",
  },
  violet: {
    border: "border-violet-200",
    bg: "bg-violet-50",
    icon: "bg-violet-100 text-violet-700",
    title: "text-violet-900",
    dot: "bg-violet-500",
  },
  emerald: {
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    title: "text-emerald-900",
    dot: "bg-emerald-500",
  },
  amber: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    icon: "bg-amber-100 text-amber-700",
    title: "text-amber-900",
    dot: "bg-amber-500",
  },
  rose: {
    border: "border-rose-200",
    bg: "bg-rose-50",
    icon: "bg-rose-100 text-rose-700",
    title: "text-rose-900",
    dot: "bg-rose-500",
  },
  cyan: {
    border: "border-cyan-200",
    bg: "bg-cyan-50",
    icon: "bg-cyan-100 text-cyan-700",
    title: "text-cyan-900",
    dot: "bg-cyan-500",
  },
} as const;

export function LangChainIntroBlock() {
  return (
    <div className="my-6 space-y-6">
      {/* ── Intro card ─────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
        {/* Header */}
        <div className="flex items-start gap-3 border-b border-emerald-100 bg-white/60 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Link2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">
              Open-Source Framework
            </p>
            <p className="mt-1 text-[14px] leading-relaxed text-gray-800">
              LangChain is an open-source framework that simplifies building applications
              using large language models. It helps developers connect LLMs with external
              data, tools and workflows — available in both{" "}
              <span className="font-semibold text-gray-900">Python</span> and{" "}
              <span className="font-semibold text-gray-900">JavaScript</span>.
            </p>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f}
              className="flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-white/80 px-3 py-3 shadow-sm"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{f}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Key Components ─────────────────────────────────────────────────── */}
      <div>
        <div className="mb-3 flex items-center gap-2.5">
          <h3 className="text-[15px] font-bold text-gray-900">Key Components</h3>
          <span className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-500">
            6 building blocks
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COMPONENTS.map((comp) => {
            const c = COLOR_MAP[comp.color];
            const Icon = comp.icon;
            return (
              <div
                key={comp.name}
                className={`rounded-xl border ${c.border} ${c.bg} p-3.5 transition-all hover:shadow-md hover:-translate-y-px`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${c.icon}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className={`text-[13px] font-bold ${c.title}`}>{comp.name}</span>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-600">{comp.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
