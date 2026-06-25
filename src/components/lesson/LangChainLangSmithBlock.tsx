"use client";

import {
  BookOpen,
  GitBranch,
  BarChart2,
  Bug,
  Zap,
  FlaskConical,
  Users,
  Eye,
  Link2,
  GitCommit,
  type LucideIcon,
} from "lucide-react";

/* ── Components diagram data ─────────────────────────────────────────────── */

interface Component {
  num: number;
  label: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}

const COMPONENTS: Component[] = [
  { num: 1,  label: "Tracing & Visualization",    icon: Eye,          color: "text-orange-700",  bg: "bg-orange-50",   border: "border-orange-200"  },
  { num: 2,  label: "RunTree Architecture",        icon: GitBranch,    color: "text-red-700",     bg: "bg-red-50",      border: "border-red-200"     },
  { num: 3,  label: "Evaluation Framework",        icon: BarChart2,    color: "text-pink-700",    bg: "bg-pink-50",     border: "border-pink-200"    },
  { num: 4,  label: "Experiment Tracking",         icon: FlaskConical, color: "text-purple-700",  bg: "bg-purple-50",   border: "border-purple-200"  },
  { num: 5,  label: "Debugging Tools",             icon: Bug,          color: "text-violet-700",  bg: "bg-violet-50",   border: "border-violet-200"  },
  { num: 6,  label: "Collaboration & Reporting",   icon: Users,        color: "text-blue-700",    bg: "bg-blue-50",     border: "border-blue-200"    },
  { num: 7,  label: "Automated Testing",           icon: Zap,          color: "text-cyan-700",    bg: "bg-cyan-50",     border: "border-cyan-200"    },
  { num: 8,  label: "Monitoring & Insights",       icon: BarChart2,    color: "text-teal-700",    bg: "bg-teal-50",     border: "border-teal-200"    },
  { num: 9,  label: "Integration with LangChain",  icon: Link2,        color: "text-green-700",   bg: "bg-green-50",    border: "border-green-200"   },
  { num: 10, label: "Version Control",             icon: GitCommit,    color: "text-emerald-700", bg: "bg-emerald-50",  border: "border-emerald-200" },
];

/* ── Importance points ───────────────────────────────────────────────────── */

const IMPORTANCE = [
  { title: "Ensures Reliability",          desc: "Verifies that the LLM consistently produces correct and logical outputs." },
  { title: "Identifies Errors Early",      desc: "Detects prompt issues, data mismatches and logic errors before deployment." },
  { title: "Improves Model Accuracy",      desc: "Enables fine-tuning based on detailed error analysis and test results." },
  { title: "Enhances User Experience",     desc: "Reduces unexpected responses ensuring smoother interactions." },
  { title: "Supports Continuous Improvement", desc: "Allows performance comparison between model versions and workflows." },
  { title: "Builds Trust in AI Systems",   desc: "Ensures transparency, traceability and accountability in LLM-driven apps." },
];

/* ── Tracing workflow steps ──────────────────────────────────────────────── */

const TRACING_STEPS = [
  { num: 1, title: "Tracks Complete Workflow",  desc: "Tracing captures every step of an LLM process for full visibility." },
  { num: 2, title: "Traces, Runs and Spans",    desc: "Trace = entire workflow. Run = single chain execution. Span = sub-steps within a run." },
  { num: 3, title: "Visualizes Execution Flow", desc: "LangSmith displays chains as trees or timelines for easy understanding." },
  { num: 4, title: "Identifies Bottlenecks",    desc: "Helps detect slow steps or inefficient model calls." },
  { num: 5, title: "Finds Errors Quickly",      desc: "Locate and fix API failures, logic issues or data mismatches easily." },
  { num: 6, title: "Improves Optimization",     desc: "Supports fine-tuning workflow design for better performance and speed." },
];

/* ── Testing strategies ──────────────────────────────────────────────────── */

const TESTING_STRATEGIES = [
  {
    title: "Unit Testing for Chains & Agents",
    desc: "Test individual chains, tools or agents to verify each component behaves as expected before combining them.",
    color: "border-blue-200 bg-blue-50",
    num: "bg-blue-500",
  },
  {
    title: "Regression Testing for LLM Outputs",
    desc: "Compare new model responses with previous ones to ensure updates or prompt changes don't degrade performance.",
    color: "border-violet-200 bg-violet-50",
    num: "bg-violet-500",
  },
  {
    title: "Automated Evaluation Pipelines",
    desc: "Set up automated workflows to continuously evaluate LLM outputs, measure quality and detect issues early.",
    color: "border-teal-200 bg-teal-50",
    num: "bg-teal-500",
  },
];

/* ── Model performance evaluation ───────────────────────────────────────── */

const PERFORMANCE_EVAL = [
  { title: "Metrics & Scores",            desc: "Quantitative metrics like accuracy, relevance or custom scores to measure LLM performance." },
  { title: "Compare Model Versions",      desc: "Test and compare outputs from multiple LLM versions or prompt variations." },
  { title: "Error Analysis",              desc: "Analyze incorrect responses to understand weaknesses and improve prompt design." },
  { title: "Human-in-the-Loop",           desc: "Incorporate human feedback to validate outputs, especially for subjective tasks." },
  { title: "Custom Benchmarking",         desc: "Create task-specific benchmarks to evaluate LLMs against domain-specific criteria." },
];

/* ── Component ───────────────────────────────────────────────────────────── */

export function LangChainLangSmithBlock() {
  return (
    <div className="space-y-7">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 shadow-sm">
        <div className="border-b border-sky-100 bg-white/60 px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold text-gray-900">
                Debugging & Testing with LangSmith
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
                <strong>LangSmith</strong> is a platform that helps developers debug, test and monitor LLM applications.
                It provides detailed visibility into how chains, agents and prompts perform, acting as a debugging
                and evaluation layer for LangChain workflows — allowing you to trace interactions, analyze errors and
                compare outputs.
              </p>
            </div>
            <BookOpen className="h-8 w-8 shrink-0 text-sky-400" />
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-sky-100 text-center">
          {[
            { label: "Trace", desc: "Entire workflow" },
            { label: "Run",   desc: "Single chain call" },
            { label: "Span",  desc: "Sub-step in a run" },
          ].map((item) => (
            <div key={item.label} className="px-4 py-3">
              <p className="text-[12.5px] font-bold text-sky-800">{item.label}</p>
              <p className="text-[11.5px] text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Components diagram ─────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Components of Debugging &amp; Testing in LangSmith
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 bg-gradient-to-r from-sky-50 to-blue-50 px-4 py-3 text-center">
            <p className="text-[12.5px] font-bold text-sky-900">10 Core Components</p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3">
            {COMPONENTS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.num}
                  className={`flex items-center gap-3 rounded-xl border ${c.border} ${c.bg} px-3 py-2.5`}
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-sm`}>
                    <Icon className={`h-3.5 w-3.5 ${c.color}`} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-[11px] font-semibold leading-tight ${c.color}`}>{c.label}</p>
                  </div>
                  <span className={`shrink-0 text-[11px] font-bold ${c.color} opacity-50`}>{c.num}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Importance ─────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
        <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 px-5 py-3.5">
          <p className="text-[13px] font-bold text-amber-900">
            Why Debugging &amp; Testing Matters
          </p>
        </div>
        <ul className="divide-y divide-gray-100">
          {IMPORTANCE.map((item) => (
            <li key={item.title} className="flex items-start gap-3 px-5 py-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900">{item.title}: </span>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Tracing LLM Workflows ──────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Tracing LLM Workflows
        </p>
        <ol className="space-y-2">
          {TRACING_STEPS.map((step) => (
            <li key={step.num} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-800">
                {step.num}
              </span>
              <p className="text-[12.5px] leading-relaxed text-gray-700">
                <span className="font-semibold text-gray-900">{step.title}: </span>
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Testing Strategies ─────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Testing Strategies
        </p>
        <div className="space-y-2.5">
          {TESTING_STRATEGIES.map((s, i) => (
            <div key={s.title} className={`flex items-start gap-3 rounded-xl border ${s.color} p-3.5`}>
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${s.num} text-xs font-bold text-white`}>
                {i + 1}
              </div>
              <div>
                <p className="text-[12.5px] font-bold text-gray-900">{s.title}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Evaluating Model Performance ───────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
        <div className="border-b border-violet-100 bg-gradient-to-r from-violet-50 to-purple-50 px-5 py-3.5">
          <p className="text-[13px] font-bold text-violet-900">Evaluating Model Performance</p>
        </div>
        <ul className="divide-y divide-gray-100">
          {PERFORMANCE_EVAL.map((item) => (
            <li key={item.title} className="flex items-start gap-3 px-5 py-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900">{item.title}: </span>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
