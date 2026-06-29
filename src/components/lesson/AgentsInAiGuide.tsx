"use client";

import {
  Activity,
  BadgeCheck,
  Brain,
  GitBranch,
  Goal,
  Handshake,
  HeartPulse,
  Home,
  LineChart,
  Network,
  PlayCircle,
  RefreshCw,
  Rocket,
  ShieldAlert,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
  Target,
  Trophy,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const FEATURES = [
  {
    title: "Autonomous",
    desc: "Acts without constant human input and decides next steps from available data.",
    icon: Rocket,
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    title: "Goal-driven",
    desc: "Optimizes for defined objectives like speed, cost, accuracy, or safety.",
    icon: Target,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    title: "Perceptive",
    desc: "Collects information from sensors, user inputs, APIs, logs, or documents.",
    icon: Activity,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    title: "Adaptable",
    desc: "Adjusts strategy when the situation, data, or feedback changes.",
    icon: RefreshCw,
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    title: "Collaborative",
    desc: "Works with humans or other agents toward shared goals.",
    icon: Handshake,
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

const CLASSIFICATIONS = [
  ["Reactive Agents", "Respond to immediate stimuli without foresight or planning."],
  ["Proactive Agents", "Anticipate future states and plan actions for long-term goals."],
  ["Single-Agent Systems", "One agent solves the problem independently."],
  ["Multi-Agent Systems", "Many agents cooperate, coordinate, or compete in a shared environment."],
  ["Rational Agents", "Choose actions that maximize expected outcomes from current and historical information."],
];

const ARCHITECTURE = [
  {
    title: "Profiling Module",
    desc: "Defines the agent role and forms perceptions from the environment, like a self-driving car using cameras to detect obstacles.",
    icon: Brain,
  },
  {
    title: "Memory Module",
    desc: "Stores and retrieves past experiences so the agent can keep context and improve over time.",
    icon: GitBranch,
  },
  {
    title: "Planning Module",
    desc: "Evaluates situations, compares alternatives, and selects the best course of action.",
    icon: Workflow,
  },
  {
    title: "Action Module",
    desc: "Executes decisions in the environment through tools, APIs, robots, or user-facing responses.",
    icon: PlayCircle,
  },
];

const WORKING_PARTS = [
  ["Persona", "Defines role, communication style, instructions, and available tools."],
  ["Memory", "Keeps short-term, long-term, episodic, or shared consensus context."],
  ["Tools", "External functions and services the agent can use to act or retrieve information."],
  ["Model", "The LLM brain that interprets instructions, reasons, generates language, and orchestrates tools."],
];

const USE_CASES = [
  { title: "Robotics", desc: "Manufacturing, logistics, and transportation automation.", icon: Wrench },
  { title: "Smart Homes", desc: "Lighting, heating, and energy optimization.", icon: Home },
  { title: "Healthcare", desc: "Patient monitoring, treatment planning, and resource support.", icon: Stethoscope },
  { title: "Finance", desc: "Automated trading, fraud detection, and risk analysis.", icon: LineChart },
  { title: "Games", desc: "Intelligent opponents and realistic decision-making.", icon: Trophy },
];

const BENEFITS = [
  "Fast and efficient operations.",
  "Adapt and learn from experience.",
  "Scalable for large or complex problems.",
  "Operate autonomously with minimal human input.",
  "Consistent, reliable task performance.",
];

const LIMITATIONS = [
  "Struggle with complex or unpredictable environments.",
  "High computational needs for learning and planning.",
  "Communication issues in multi-agent setups.",
  "Risk of bias or unintended actions.",
  "Challenges in designing clear goals and utility functions.",
];

function AgentSenseActDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
        Basic Agent Loop
      </p>
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-bold text-blue-900">Environment</p>
          <p className="mt-1 text-sm leading-6 text-blue-700">
            The world, app, data source, user, API, or system the agent observes.
          </p>
        </div>
        <div className="flex items-center justify-center text-slate-400 md:flex-col">
          <span className="text-xs font-semibold">percepts</span>
          <span className="px-2 text-lg md:rotate-90">?</span>
          <span className="text-xs font-semibold">actions</span>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm font-bold text-emerald-900">AI Agent</p>
          <div className="mt-3 space-y-2 text-sm leading-6 text-emerald-800">
            <div className="rounded-lg bg-white/70 px-3 py-2">Sensors collect inputs</div>
            <div className="rounded-lg bg-white/70 px-3 py-2">Reasoning selects action</div>
            <div className="rounded-lg bg-white/70 px-3 py-2">Actuators execute response</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AgentsInAiGuide() {
  return (
    <div className="space-y-7">
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
        <div className="border-b border-emerald-100 bg-white/60 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Agentic AI - Module 6 · Topic 1
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">Agents in AI</h2>
          <p className="mt-3 text-[15px] leading-7 text-gray-700">
            An <strong>AI agent</strong> is a software system that perceives its environment, processes
            information, and takes actions to achieve specific goals. It operates with a degree of autonomy
            to complete assigned tasks effectively.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-emerald-100 md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="px-5 py-4">
            <p className="text-sm leading-6 text-gray-700">
              <span className="font-bold text-gray-900">Perceive:</span> Collects and analyzes data from its environment to support decision-making.
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm leading-6 text-gray-700">
              <span className="font-bold text-gray-900">Act:</span> Selects appropriate actions to accomplish tasks or escalate when needed.
            </p>
          </div>
        </div>
      </div>

      <AgentSenseActDiagram />

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Key Features</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className={`rounded-xl border ${feature.border} ${feature.bg} p-4`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className={`h-4 w-4 ${feature.color}`} />
                  </span>
                  <p className="text-[15px] font-bold text-gray-900">{feature.title}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-700">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Classification</p>
        <p className="text-sm leading-6 text-gray-700">
          Agents can be classified by behavior, environment, autonomy, and the number of interacting agents.
          A good classification helps you choose the right architecture before building.
        </p>
        <div className="mt-4 grid gap-2">
          {CLASSIFICATIONS.map(([title, desc], index) => (
            <div key={title} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-emerald-700 shadow-sm">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-gray-700">
                <span className="font-bold text-gray-900">{title}: </span>{desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-700">Architecture</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {ARCHITECTURE.map((part) => {
            const Icon = part.icon;
            return (
              <div key={part.title} className="rounded-xl border border-violet-100 bg-white p-4 shadow-sm">
                <Icon className="h-4 w-4 text-violet-600" />
                <p className="mt-2 text-[15px] font-bold text-gray-900">{part.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-700">{part.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-cyan-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700">Working</p>
          <div className="space-y-2">
            {WORKING_PARTS.map(([title, desc]) => (
              <div key={title} className="rounded-xl bg-cyan-50 px-4 py-3">
                <p className="text-sm font-bold text-cyan-900">{title}</p>
                <p className="mt-0.5 text-sm leading-6 text-cyan-800">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">Use Cases</p>
          <div className="space-y-2">
            {USE_CASES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3 rounded-xl bg-amber-50 px-4 py-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  <p className="text-sm leading-6 text-amber-900">
                    <span className="font-bold">{item.title}: </span>{item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-green-700" />
            <p className="text-sm font-bold text-green-900">Benefits</p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-green-900">
            {BENEFITS.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-rose-700" />
            <p className="text-sm font-bold text-rose-900">Limitations</p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-rose-900">
            {LIMITATIONS.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
