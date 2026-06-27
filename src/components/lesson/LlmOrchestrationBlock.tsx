"use client";

import type { ElementType } from "react";
import {
  BadgeCheck,
  Boxes,
  BrainCircuit,
  Database,
  Gauge,
  GitBranch,
  Layers,
  Link2,
  LockKeyhole,
  MemoryStick,
  Network,
  RefreshCcw,
  Route,
  ServerCog,
  ShieldAlert,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

type Color = keyof typeof COLOR_MAP;

type CardItem = {
  icon: ElementType;
  title: string;
  description: string;
  color: Color;
};

const OVERVIEW_POINTS = [
  "LLM orchestration manages, coordinates, and optimizes large language models inside AI-driven applications.",
  "It provides a structured layer for prompt engineering, API interactions, retrieval, memory, monitoring, and workflow control.",
  "It becomes important as Gen AI systems power chatbots, natural language generation, translation, and decision making.",
];

const LIMITATIONS: CardItem[] = [
  {
    icon: MemoryStick,
    title: "Context Retention",
    description: "LLMs can struggle to retain context over long or multi-step interactions.",
    color: "blue",
  },
  {
    icon: RefreshCcw,
    title: "Real-Time Learning",
    description: "LLMs do not automatically learn or update knowledge in real time during normal use.",
    color: "violet",
  },
  {
    icon: Link2,
    title: "API Complexity",
    description: "Integrating multiple LLM providers and managing their APIs can become unwieldy.",
    color: "emerald",
  },
  {
    icon: Workflow,
    title: "Workflow Complexity",
    description: "Coordinating multiple LLMs or agents for complex tasks becomes hard without orchestration.",
    color: "amber",
  },
];

const ORCHESTRATION_LAYER = [
  "LLMs from one or more providers.",
  "Prompt templates and chaining logic.",
  "Vector databases for contextual data retrieval.",
  "AI agents for task delegation and collaboration.",
];

const CAPABILITIES: CardItem[] = [
  {
    icon: Route,
    title: "Prompt Management",
    description:
      "Stores, selects, and sequences prompts for reusable prompt chains, dynamic refinement, and multi-step workflows.",
    color: "blue",
  },
  {
    icon: Link2,
    title: "API Integration",
    description:
      "Handles interactions with multiple LLM providers and external services while standardizing data exchange.",
    color: "violet",
  },
  {
    icon: Database,
    title: "Data Retrieval and Preprocessing",
    description:
      "Fetches data from databases, APIs, and vector stores, then formats it for useful LLM input.",
    color: "emerald",
  },
  {
    icon: MemoryStick,
    title: "State and Memory Management",
    description:
      "Maintains conversation context, history, and continuity across sessions, agents, and multi-turn interactions.",
    color: "amber",
  },
  {
    icon: Gauge,
    title: "Performance Monitoring",
    description:
      "Tracks latency, accuracy, resource usage, and token consumption with dashboards and alerts.",
    color: "rose",
  },
  {
    icon: ServerCog,
    title: "Resource Allocation",
    description:
      "Dynamically assigns CPU, GPU, and memory based on workload demands to improve efficiency.",
    color: "cyan",
  },
  {
    icon: Network,
    title: "Load Balancing and Fault Tolerance",
    description:
      "Distributes requests, manages failover, and maintains high availability with minimal downtime.",
    color: "blue",
  },
  {
    icon: LockKeyhole,
    title: "Security and Compliance",
    description:
      "Enforces access controls, audit logging, data filtering, and regulatory compliance for sensitive data.",
    color: "emerald",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Manages updates and rollbacks for models and workflows so teams can safely revert changes.",
    color: "violet",
  },
];

const BENEFITS = [
  "Scalability: Scale up or down as demand changes without performance loss.",
  "Cost Efficiency: Optimize resource use and avoid redundant computations.",
  "Operational Reliability: Automated failover, load balancing, and monitoring minimize downtime.",
  "Faster Development: Prebuilt templates and reusable components accelerate deployment.",
  "Lower Technical Barriers: User-friendly interfaces and automation help teams without deep AI expertise.",
  "Security and Compliance: Centralized controls support privacy and regulatory requirements.",
  "Integration: Connects with data storage, analytics, and enterprise systems.",
];

const FRAMEWORKS: CardItem[] = [
  {
    icon: Link2,
    title: "LangChain",
    description:
      "Open-source framework for prompt chaining, agent management, and integration with LLMs and data sources.",
    color: "emerald",
  },
  {
    icon: Boxes,
    title: "IBM watsonx Orchestrate",
    description:
      "Enterprise-grade orchestration with prebuilt apps, skills, and workflow automation.",
    color: "blue",
  },
  {
    icon: Network,
    title: "AutoGen",
    description:
      "Microsoft's multi-agent orchestration platform for collaborative problem solving.",
    color: "violet",
  },
  {
    icon: Database,
    title: "LlamaIndex",
    description:
      "Tools for context-augmented LLM applications, including connectors and evaluation modules.",
    color: "amber",
  },
  {
    icon: Workflow,
    title: "Haystack",
    description:
      "Python framework for building pipelines and integrating LLMs, vector databases, and external APIs.",
    color: "cyan",
  },
];

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

export function LlmOrchestrationBlock() {
  return (
    <div className="my-6 space-y-6">
      <section className="overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-sm">
        <div className="flex items-start gap-3 border-b border-indigo-100 bg-white/75 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <Workflow className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-gray-950">
              What is LLM Orchestration?
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-800">
              LLM orchestration is the process of managing, coordinating, and optimizing the
              use of large language models inside AI-driven applications.
            </p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {OVERVIEW_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 rounded-xl border border-indigo-100 bg-white/85 px-3 py-3 shadow-sm"
            >
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Why It Is Needed"
          title="LLMs are powerful, but apps need coordination"
          description="Orchestration frameworks automate and optimize the lifecycle of LLM interactions so systems become more scalable, reliable, and cost effective."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LIMITATIONS.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <SectionHeader
          eyebrow="How It Works"
          title="The orchestration layer"
          description="The orchestration layer acts as the backbone of LLM-powered applications, making sure each component works cohesively."
          compact
        />
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-indigo-700" />
              <h4 className="text-sm font-bold text-indigo-950">Core components</h4>
            </div>
            <ul className="space-y-2">
              {ORCHESTRATION_LAYER.map((item) => (
                <li key={item} className="flex gap-2 text-[12.5px] leading-relaxed text-indigo-900">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Network className="h-4 w-4 text-cyan-700" />
              <h4 className="text-sm font-bold text-cyan-950">Multi-agent orchestration</h4>
            </div>
            <p className="text-[12.5px] leading-relaxed text-cyan-900">
              Modern frameworks often use specialized LLM agents for subtasks such as reasoning,
              summarization, retrieval, and tool use. These agents interact with each other and
              external systems, dividing responsibilities for greater efficiency and scalability.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Key Capabilities"
          title="What orchestration manages"
          description="A good orchestration layer coordinates prompts, providers, data, state, monitoring, reliability, security, and deployment changes."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-700" />
            <h4 className="text-sm font-bold text-emerald-950">Benefits</h4>
          </div>
          <ul className="space-y-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex gap-2 text-[12.5px] leading-relaxed text-emerald-900">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeader
            eyebrow="Leading Frameworks"
            title="Tools used to orchestrate LLM apps"
            description="These frameworks help teams compose prompts, agents, retrieval systems, pipelines, and enterprise workflows."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {FRAMEWORKS.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <p className="text-[13px] leading-relaxed text-amber-900">
            The key idea: an LLM is only one part of a real AI product. Orchestration connects
            the model to prompts, tools, memory, data, monitoring, security, and recovery paths.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "mb-3"}>
      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{eyebrow}</p>
      <h3 className="mt-1 text-[16px] font-bold text-gray-950">{title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ item }: { item: CardItem }) {
  const color = COLOR_MAP[item.color];
  const Icon = item.icon;

  return (
    <article className={`rounded-2xl border ${color.border} ${color.bg} p-4 shadow-sm`}>
      <div className="mb-3 flex items-center gap-2">
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color.icon}`}>
          <Icon className="h-4 w-4" />
        </div>
        <h4 className={`text-[13px] font-bold ${color.title}`}>{item.title}</h4>
      </div>
      <p className="text-[12.5px] leading-relaxed text-gray-700">{item.description}</p>
    </article>
  );
}
