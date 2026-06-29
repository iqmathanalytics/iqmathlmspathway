"use client";

import {
  Brain,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  Layers,
  Network,
  Scale,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const AGENT_TYPES = [
  {
    id: 1,
    title: "Simple Reflex Agents",
    subtitle: "Condition-action rules",
    desc: "Act only on the current perception using predefined if-then logic. They do not use memory or prediction.",
    example: "Traffic light control systems that change signals using fixed rules.",
    icon: Zap,
    color: "emerald",
    image: "/images/agent-simple-reflex.png",
    imageAlt: "Simple reflex agent working diagram with sensors, condition-action rules, actuators, action, and environment",
    bullets: [
      "No memory of past states.",
      "No internal environment model.",
      "Best for fully observable, predictable environments.",
    ],
  },
  {
    id: 2,
    title: "Model-Based Reflex Agents",
    subtitle: "State + rules",
    desc: "Maintain an internal model of the environment to handle partial information and make better reactive decisions.",
    example: "Robot vacuum cleaners that map rooms and track cleaned areas.",
    icon: Brain,
    color: "blue",
    image: "/images/agent-model-based-reflex.png",
    imageAlt: "Model-based reflex agent working diagram showing state, world model, condition-action rules, sensors, actuators, and environment",
    bullets: [
      "Uses memory to maintain environment state.",
      "Infers missing details from incomplete observations.",
      "Combines current input with stored context.",
    ],
  },
  {
    id: 3,
    title: "Goal-Based Agents",
    subtitle: "Plan toward goals",
    desc: "Choose actions by evaluating which path moves the system closer to a specific objective.",
    example: "Logistics routing agents that search for the best delivery route.",
    icon: Target,
    color: "amber",
    image: "/images/agent-goal-based.png",
    imageAlt: "Goal-based agent working diagram showing state, future outcome prediction, goals, action selection, and environment",
    bullets: [
      "Uses search and planning techniques.",
      "Considers future consequences.",
      "Explores multiple routes before acting.",
    ],
  },
  {
    id: 4,
    title: "Utility-Based Agents",
    subtitle: "Maximize value",
    desc: "Compare possible outcomes with a utility function and choose the option with the highest expected value.",
    example: "Financial portfolio agents balancing risk, return, and diversification.",
    icon: Scale,
    color: "pink",
    image: "/images/agent-utility-based.png",
    imageAlt: "Utility-based agent working diagram showing utility evaluation, predicted outcomes, action choice, and environment",
    bullets: [
      "Works in uncertain environments.",
      "Selects actions by expected reward.",
      "Optimizes under constraints and trade-offs.",
    ],
  },
  {
    id: 5,
    title: "Learning Agents",
    subtitle: "Improve from feedback",
    desc: "Refine behavior over time by learning from feedback, past actions, and changing conditions.",
    example: "Customer service chatbots improving accuracy from previous interactions.",
    icon: Sparkles,
    color: "violet",
    image: "/images/agent-learning.png",
    imageAlt: "Learning agent working diagram with critic, learning element, performance element, problem generator, sensors, effectors, and environment",
    bullets: [
      "Adapts from experience and feedback.",
      "Updates internal models.",
      "Creates new knowledge over time.",
    ],
  },
  {
    id: 6,
    title: "Multi-Agent Systems",
    subtitle: "Many agents coordinate",
    desc: "Multiple autonomous agents interact in a shared environment to cooperate, compete, or both.",
    example: "Warehouse robots coordinating navigation, task planning, prioritization, and route learning.",
    icon: Network,
    color: "cyan",
    image: "/images/agent-multi-agent-system.png",
    imageAlt: "Multi-agent system working diagram with coordinator agent, expert agent, metrics agent, repository agents, and repositories",
    bullets: [
      "Supports cooperative, competitive, or mixed behavior.",
      "Distributes decisions across agents.",
      "Can remain robust if some agents fail.",
    ],
  },
  {
    id: 7,
    title: "Hierarchical Agents",
    subtitle: "Layered control",
    desc: "Organize decision-making into layers where high-level agents plan and low-level agents execute.",
    example: "Drone delivery systems with fleet-level planning and drone-level navigation.",
    icon: Layers,
    color: "slate",
    image: "/images/agent-hierarchical.png",
    imageAlt: "Hierarchical agents working diagram showing agent levels from Agent 1 to lower-level agents",
    bullets: [
      "Breaks work into control levels.",
      "Separates strategy from execution.",
      "Reduces complexity in large systems.",
    ],
  },
] as const;

const COLORS = {
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", icon: "text-emerald-600" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", icon: "text-blue-600" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", icon: "text-amber-600" },
  pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-800", icon: "text-pink-600" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-800", icon: "text-violet-600" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-800", icon: "text-cyan-600" },
  slate: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-800", icon: "text-slate-600" },
} as const;

export function AgentsInAiTypesPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-emerald-600" />
          <p className="text-base font-bold text-slate-900">Types of Agents</p>
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Review each agent type, its decision style, and where it fits.
        </p>
      </div>

      <div className="space-y-3 p-4">
        {AGENT_TYPES.map((agent) => {
          const c = COLORS[agent.color];
          const Icon = agent.icon;
          return (
            <div key={agent.id} className={`rounded-2xl border ${c.border} ${c.bg} p-3.5`}>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold shadow-sm">
                  {agent.id}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-[15px] font-bold ${c.text}`}>{agent.title}</p>
                    <Icon className={`h-4 w-4 shrink-0 ${c.icon}`} />
                  </div>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gray-400">{agent.subtitle}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{agent.desc}</p>
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm">
                <img
                  src={agent.image}
                  alt={agent.imageAlt}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>

              <ul className="mt-3 space-y-1.5">
                {agent.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                    <CircleDot className={`mt-1 h-3.5 w-3.5 shrink-0 ${c.icon}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 rounded-xl border border-white/70 bg-white/70 px-3 py-2">
                <p className="text-sm leading-6 text-gray-700">
                  <span className="font-bold text-gray-900">Example: </span>{agent.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-100 bg-gray-50/60 px-4 py-3">
        <div className="flex items-start gap-2 text-xs leading-5 text-gray-500">
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
          <p>This topic has no IDE requirement. Complete the quiz when you are ready to move on.</p>
        </div>
      </div>
    </div>
  );
}
