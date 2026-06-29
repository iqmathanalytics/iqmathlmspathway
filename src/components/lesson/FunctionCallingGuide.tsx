"use client";

import {
  BadgeCheck,
  Brain,
  Cable,
  Database,
  Gauge,
  Globe2,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const MECHANISM = [
  {
    title: "Initial request with tool definitions",
    desc: "The app sends the user request plus available tools as JSON: name, description, arguments and required fields.",
  },
  {
    title: "Function / tool decision",
    desc: "The model decides whether the query needs a tool. If yes, it returns structured JSON with the function name and arguments.",
  },
  {
    title: "Application-side execution",
    desc: "The LLM waits while your application validates the arguments and executes the selected function or API call.",
  },
  {
    title: "Result concatenation",
    desc: "The function output is formatted and passed back to the LLM with the original query.",
  },
  {
    title: "Final generation",
    desc: "The model combines the user question and tool output to produce a grounded response.",
  },
];

const APPLICATIONS = [
  { title: "Customer support", desc: "Call APIs like get_order_status() or check_delivery().", icon: MessageSquare },
  { title: "Travel planning", desc: "Search hotels, check availability and book through backend APIs.", icon: Globe2 },
  { title: "HR operations", desc: "Answer leave, work-hour or policy questions using business systems.", icon: BadgeCheck },
  { title: "Automated SQL", desc: "Generate read-only SQL and validate it before execution.", icon: Database },
];

const ADVANTAGES = [
  "Real-time data access and information retrieval instead of stale training data.",
  "Reduced hallucinations because the model can ask tools for facts.",
  "Expanded LLM capability, such as calculators for math or APIs for live data.",
];

const LIMITATIONS = [
  "Large tool definitions increase token usage and cost.",
  "Tool selection, execution and final generation add latency.",
  "Unsafe function access can cause financial loss, data corruption or security issues.",
];

export function FunctionCallingGuide() {
  return (
    <div className="space-y-7">
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
        <div className="border-b border-emerald-100 bg-white/60 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Agentic AI - Module 6 · Topic 2
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">Function Calling in LLMs</h2>
          <p className="mt-3 text-[15px] leading-7 text-gray-700">
            <strong>Function calling</strong>, also known as tool calling, lets a model reliably connect to
            external tools, APIs, databases or knowledge bases. Instead of only answering from memory,
            the LLM can decide which tool to invoke, pass structured arguments, and use the result to
            generate a grounded final answer.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-emerald-100 md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="px-5 py-4">
            <p className="text-sm leading-6 text-gray-700">
              <span className="font-bold text-gray-900">Decision:</span> the LLM decides whether a function is needed.
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm leading-6 text-gray-700">
              <span className="font-bold text-gray-900">Execution:</span> your application safely runs the function and returns the result.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <Cable className="h-4 w-4 text-emerald-600" />
            <p className="text-sm font-bold text-slate-900">Function-calling Workflow</p>
          </div>
        </div>
        <div className="bg-white p-4">
          <img
            src="/images/function-calling-workflow.png"
            alt="Function-calling workflow diagram showing LLM decision, function availability, function execution and final response"
            className="h-auto w-full rounded-xl border border-slate-100 object-contain"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-700">
          Architecture and Core Mechanism
        </p>
        <div className="space-y-3">
          {MECHANISM.map((item, index) => (
            <div key={item.title} className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-700 shadow-sm">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-gray-700">
                <span className="font-bold text-gray-900">{item.title}: </span>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-700">Applications</p>
          <div className="space-y-2">
            {APPLICATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3 rounded-xl bg-violet-50 px-4 py-3">
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-violet-700" />
                  <p className="text-sm leading-6 text-violet-950">
                    <span className="font-bold">{item.title}: </span>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">Why It Matters</p>
          <div className="space-y-3">
            {[
              { title: "Tool access", desc: "The model can work with live APIs and private business data.", icon: Wrench },
              { title: "Grounded answers", desc: "Responses can be based on current tool results, not guesses.", icon: Brain },
              { title: "Safer apps", desc: "The app can validate arguments before executing sensitive actions.", icon: ShieldAlert },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl bg-amber-50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-amber-700" />
                    <p className="text-sm font-bold text-amber-950">{item.title}</p>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-amber-900">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-green-700" />
            <p className="text-sm font-bold text-green-900">Advantages</p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-green-900">
            {ADVANTAGES.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Gauge className="h-4 w-4 text-rose-700" />
            <p className="text-sm font-bold text-rose-900">Limitations</p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-rose-900">
            {LIMITATIONS.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <Zap className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
          <p className="text-sm leading-6 text-gray-700">
            A good production design never lets the model directly perform dangerous actions. The model
            proposes a tool call; your application validates inputs, checks permissions, executes the
            function, and then sends the result back to the model.
          </p>
        </div>
      </div>
    </div>
  );
}
