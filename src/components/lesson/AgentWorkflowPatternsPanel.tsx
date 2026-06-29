"use client";

import { CheckCircle2, ClipboardList, GitBranch, Layers, Repeat, Route, Split } from "lucide-react";

const WORKFLOWS = [
  {
    id: 1,
    title: "Prompt Chaining",
    desc: "Breaks a task into sequential steps, each handled by a separate LLM call.",
    use: "Useful for stepwise refinement, content generation or summarization.",
    image: "/images/agent-workflow-prompt-chaining.png",
    imageAlt: "Prompt chaining workflow diagram with sequential LLM calls and a gate",
    icon: GitBranch,
    color: "emerald",
  },
  {
    id: 2,
    title: "Routing",
    desc: "Classifies inputs and directs them to specialized prompts, models or tools.",
    use: "Ideal for multi-domain systems like CRM agents or RAG agents.",
    image: "/images/agent-workflow-routing.png",
    imageAlt: "Routing workflow diagram with LLM router directing input to one of multiple LLM calls",
    icon: Route,
    color: "blue",
  },
  {
    id: 3,
    title: "Parallelisation",
    desc: "Executes multiple subtasks at the same time and aggregates the outputs.",
    use: "Good for coding agents, multi-agent workflows or diverse perspectives.",
    image: "/images/agent-workflow-parallelisation.png",
    imageAlt: "Parallelisation workflow diagram with three LLM calls feeding an aggregator",
    icon: Split,
    color: "amber",
  },
  {
    id: 4,
    title: "Orchestrator-Workers",
    desc: "An orchestrator LLM delegates subtasks to worker LLMs and synthesizes the result.",
    use: "Useful for meta-agents, debate workflows and dynamic task decomposition.",
    image: "/images/agent-workflow-orchestrator-workers.png",
    imageAlt: "Orchestrator-workers workflow diagram with orchestrator, three worker LLM calls, and synthesizer",
    icon: Layers,
    color: "violet",
  },
  {
    id: 5,
    title: "Evaluator-Optimizer",
    desc: "One LLM generates an output while another evaluates and improves it in a feedback loop.",
    use: "Effective for iterative improvement such as code generation or personalized chatbots.",
    image: "/images/agent-workflow-evaluator-optimizer.png",
    imageAlt: "Evaluator-optimizer workflow diagram with generator, evaluator, accepted output and feedback loop",
    icon: Repeat,
    color: "rose",
  },
] as const;

const COLORS = {
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", icon: "text-emerald-600" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", icon: "text-blue-600" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", icon: "text-amber-600" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-800", icon: "text-violet-600" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-800", icon: "text-rose-600" },
} as const;

export function AgentWorkflowPatternsPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-emerald-600" />
          <p className="text-base font-bold text-slate-900">Fundamental Workflow Patterns</p>
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Anthropic identifies five foundational patterns for constructing AI agents.
        </p>
      </div>

      <div className="space-y-4 p-4">
        {WORKFLOWS.map((workflow) => {
          const c = COLORS[workflow.color];
          const Icon = workflow.icon;
          return (
            <div key={workflow.id} className={`rounded-2xl border ${c.border} ${c.bg} p-3.5`}>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold shadow-sm">
                  {workflow.id}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-[15px] font-bold ${c.text}`}>{workflow.title}</p>
                    <Icon className={`h-4 w-4 shrink-0 ${c.icon}`} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{workflow.desc}</p>
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm">
                <img
                  src={workflow.image}
                  alt={workflow.imageAlt}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 rounded-xl border border-white/70 bg-white/70 px-3 py-2">
                <p className="text-sm leading-6 text-gray-700">
                  <span className="font-bold text-gray-900">Best for: </span>
                  {workflow.use}
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
