"use client";

import {
  BadgeCheck,
  Brain,
  Boxes,
  Code2,
  Eye,
  GitBranch,
  LifeBuoy,
  MessageSquare,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const PRINCIPLES = [
  {
    title: "Start Simple",
    desc: "Begin with a single LLM call or basic workflow. Add agentic complexity only when the task truly needs flexibility.",
    icon: Sparkles,
  },
  {
    title: "Agent vs Workflow",
    desc: "Use agents for open-ended, dynamic tasks. Use workflows when the steps are predictable and well-defined.",
    icon: GitBranch,
  },
  {
    title: "Composable Patterns",
    desc: "Build larger systems by combining small workflow patterns like routing, chaining and evaluation loops.",
    icon: Boxes,
  },
];

const IMPLEMENTATION = [
  {
    title: "LLM-Centric Design",
    desc: "The LLM acts as the core brain, augmented with tools, retrieval and memory when the task requires it.",
    icon: Brain,
  },
  {
    title: "Tool Integration",
    desc: "Agents can access APIs, databases or actions to retrieve information and perform real tasks.",
    icon: Wrench,
  },
  {
    title: "Autonomy and Feedback",
    desc: "Agents plan actions, observe feedback and iterate until the task is complete or a stop condition is met.",
    icon: RefreshCw,
  },
  {
    title: "Human Oversight",
    desc: "For critical or ambiguous steps, agents can pause for human input or review to improve reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Interfaces",
    desc: "Well-documented tools and explicit agent-computer interfaces make the system easier to maintain.",
    icon: Puzzle,
  },
];

const TECHNICAL_FEATURES = [
  "Customizable prompts and behaviors: update system prompts or toolsets without redeploying the whole app.",
  "Streaming and real-time interaction: show progress while an agent works through a multi-step task.",
  "Scalability and persistence: keep state across sessions and scale globally using durable infrastructure.",
  "Live monitoring and debugging: expose planning steps and tool calls so developers can inspect what happened.",
];

const BEST_PRACTICES = [
  "Transparency: make agent decisions and planning steps visible.",
  "Simplicity and modularity: prefer small understandable patterns before complex autonomy.",
  "Iterative development: start basic, evaluate, then add complexity only when needed.",
  "Robust evaluation: use tests, success criteria and human feedback to measure quality.",
];

export function BuildingAiAgentsGuide() {
  return (
    <div className="space-y-7">
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
        <div className="border-b border-emerald-100 bg-white/60 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Agentic AI - Module 6 · Topic 3
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">Building AI Agents</h2>
          <p className="mt-3 text-[15px] leading-7 text-gray-700">
            Building AI agents means creating software that can perform tasks intelligently and
            autonomously. The goal is to make the agent understand instructions, use tools,
            learn from experience and improve its performance over time.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-emerald-100 md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="px-5 py-4">
            <p className="text-sm leading-6 text-gray-700">
              <span className="font-bold text-gray-900">Agent:</span> an LLM dynamically directs its own processes and tool use.
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm leading-6 text-gray-700">
              <span className="font-bold text-gray-900">Workflow:</span> predefined code paths orchestrate LLMs and tools in a fixed sequence.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
          Core Principles
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </span>
                <p className="mt-3 text-[15px] font-bold text-gray-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-700">
          Key Implementation Details
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {IMPLEMENTATION.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <Icon className="h-4 w-4 text-blue-700" />
                <p className="mt-2 text-[15px] font-bold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-700">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Eye className="h-4 w-4 text-violet-700" />
            <p className="text-sm font-bold text-violet-950">Technical Features and Flexibility</p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-violet-950">
            {TECHNICAL_FEATURES.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-amber-700" />
            <p className="text-sm font-bold text-amber-950">Best Practices</p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-amber-950">
            {BEST_PRACTICES.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <LifeBuoy className="h-4 w-4 text-cyan-700" />
            <p className="text-sm font-bold text-cyan-950">Customer Support Agents</p>
          </div>
          <p className="text-sm leading-6 text-cyan-950">
            Combine conversational AI with tool integration. These agents can access customer data,
            knowledge bases and backend actions such as refunds or account updates. Success is measured
            by clear, user-defined resolutions.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Code2 className="h-4 w-4 text-slate-700" />
            <p className="text-sm font-bold text-slate-950">Coding Agents</p>
          </div>
          <p className="text-sm leading-6 text-slate-700">
            Coding agents solve programming tasks autonomously and use automated tests as feedback.
            They can iterate on solutions, verify correctness and then hand results to humans for review.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
          <p className="text-sm leading-6 text-emerald-950">
            A good agent is not just an LLM loop. It needs clear goals, explicit tools, observability,
            evaluation and safe stopping conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
