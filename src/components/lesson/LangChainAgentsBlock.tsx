"use client";

import {
  ChevronRight,
  BookOpen,
  User,
  Bot,
  Wrench,
  Database,
  ClipboardList,
  MessageSquare,
  Brain,
  Braces,
  Settings,
  Eye,
  CheckCircle2,
  Zap,
  RefreshCw,
  FileCode,
  LayoutGrid,
  Globe,
  FileText,
  Terminal,
  Calculator,
  type LucideIcon,
} from "lucide-react";

/* ── Diagrams ─────────────────────────────────────────────────────────────── */

function AgentStructureDiagram() {
  const capabilities: { icon: LucideIcon; label: string }[] = [
    { icon: Wrench,        label: "Tools"    },
    { icon: Database,      label: "Memory"   },
    { icon: ClipboardList, label: "Planning" },
  ];

  return (
    <div className="rounded-2xl border border-green-200 bg-green-50/40 p-4">
      <p className="mb-3 text-center text-[10.5px] font-bold uppercase tracking-widest text-green-700">
        Agent Architecture
      </p>

      {/* User Request */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 rounded-xl border border-yellow-300 bg-yellow-100 px-5 py-2.5 shadow-sm">
          <User className="h-4 w-4 text-yellow-700" />
          <p className="text-[12.5px] font-bold text-yellow-800">User Request</p>
        </div>
      </div>

      {/* Double arrow */}
      <div className="my-1 flex justify-center text-gray-400 text-lg">⇕</div>

      {/* Agent */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 rounded-xl border border-green-400 bg-green-200 px-7 py-3 shadow-sm">
          <Bot className="h-5 w-5 text-green-800" />
          <p className="text-[14px] font-bold text-green-900">Agent</p>
        </div>
      </div>

      {/* Arrows fan out */}
      <div className="my-1 flex items-start justify-center gap-14 text-gray-400 text-sm leading-none">
        <span>↙</span>
        <span>↓</span>
        <span>↘</span>
      </div>

      {/* Three capabilities */}
      <div className="grid grid-cols-3 gap-2">
        {capabilities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-purple-200 bg-purple-50 px-2 py-3 shadow-sm"
          >
            <Icon className="h-5 w-5 text-purple-600" />
            <p className="text-[11.5px] font-bold text-purple-800">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentFlowDiagram() {
  const nodes: { label: string; icon: LucideIcon; bg: string; text: string; iconColor: string }[] = [
    { label: "User\nQuestion", icon: MessageSquare, bg: "bg-yellow-400", text: "text-yellow-900", iconColor: "text-yellow-900" },
    { label: "LLM",            icon: Brain,         bg: "bg-green-500",  text: "text-white",     iconColor: "text-white"      },
    { label: "Parser",         icon: Braces,        bg: "bg-green-400",  text: "text-white",     iconColor: "text-white"      },
    { label: "Tool",           icon: Settings,      bg: "bg-teal-500",   text: "text-white",     iconColor: "text-white"      },
    { label: "Observation",    icon: Eye,           bg: "bg-blue-600",   text: "text-white",     iconColor: "text-white"      },
    { label: "Output",         icon: CheckCircle2,  bg: "bg-red-600",    text: "text-white",     iconColor: "text-white"      },
  ];

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-4">
      <p className="mb-3 text-center text-[10.5px] font-bold uppercase tracking-widest text-blue-700">
        Agent Execution Loop
      </p>

      <div className="space-y-1">

        {/* Top arc — Final Response (full width, label centred) */}
        <div className="flex items-center">
          <span className="mr-1 shrink-0 text-[10px] text-gray-400">↓</span>
          <div className="h-px flex-1 border-t-2 border-dashed border-gray-300" />
          <span className="mx-2 shrink-0 rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-[10px] font-medium text-gray-500 whitespace-nowrap">
            Final Response
          </span>
          <div className="h-px flex-1 border-t-2 border-dashed border-gray-300" />
          <span className="ml-1 shrink-0 text-[10px] text-gray-400">↓</span>
        </div>

        {/* Nodes row — flex-1 on every node fills full width */}
        <div className="flex items-stretch gap-1.5">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="flex items-center gap-1.5 flex-1 min-w-0">
                <div
                  className={`flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl ${node.bg} py-3 shadow-sm`}
                >
                  <Icon className={`h-4 w-4 ${node.iconColor}`} strokeWidth={1.75} />
                  <p className={`text-center text-[10px] font-bold leading-tight ${node.text}`}>
                    {node.label}
                  </p>
                </div>
                {i < nodes.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-500" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom arc — Loop (full width, label centred) */}
        <div className="flex items-center">
          <span className="mr-1 shrink-0 text-[10px] text-gray-400">↑</span>
          <div className="h-px flex-1 border-t-2 border-dashed border-gray-300" />
          <span className="mx-2 shrink-0 rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-[10px] font-medium text-gray-500 whitespace-nowrap">
            Loop until final response
          </span>
          <div className="h-px flex-1 border-t-2 border-dashed border-gray-300" />
          <span className="ml-1 shrink-0 text-[10px] text-gray-400">↑</span>
        </div>

      </div>
    </div>
  );
}

/* ── Agent types ──────────────────────────────────────────────────────────── */

interface AgentType {
  name: string;
  useCase: string;
  icon: LucideIcon;
  numBg: string;
  numText: string;
  iconColor: string;
}

const AGENT_TYPES: AgentType[] = [
  { name: "OpenAI Function Agent",  useCase: "Form-filling, structured API queries or validated output generation.",    icon: Zap,        numBg: "bg-blue-100",    numText: "text-blue-800",    iconColor: "text-blue-400"    },
  { name: "OpenAI Tools Agent",     useCase: "Dynamic tasks where the agent decides which API or function is needed.",  icon: Wrench,     numBg: "bg-indigo-100",  numText: "text-indigo-800",  iconColor: "text-indigo-400"  },
  { name: "React Agent",            useCase: "Complex problem solving, multi-step planning or trial-and-error.",        icon: RefreshCw,  numBg: "bg-violet-100",  numText: "text-violet-800",  iconColor: "text-violet-400"  },
  { name: "XML Agent",              useCase: "Enterprise applications requiring strict XML schema compliance.",          icon: FileCode,   numBg: "bg-purple-100",  numText: "text-purple-800",  iconColor: "text-purple-400"  },
  { name: "JSON Chat Agent",        useCase: "Chatbots with schema-based outputs or structured API interactions.",      icon: Braces,     numBg: "bg-fuchsia-100", numText: "text-fuchsia-800", iconColor: "text-fuchsia-400" },
  { name: "Structured Chat Agent",  useCase: "Predictable multi-tool workflows using predefined function schemas.",     icon: LayoutGrid, numBg: "bg-pink-100",    numText: "text-pink-800",    iconColor: "text-pink-400"    },
];

/* ── Tool types ───────────────────────────────────────────────────────────── */

interface ToolType {
  name: string;
  desc: string;
  icon: LucideIcon;
  headerBg: string;
  iconBg: string;
  iconColor: string;
  nameColor: string;
}

const TOOL_TYPES: ToolType[] = [
  { name: "Calculator",   desc: "Handles numerical calculations and simple logic for math tasks.",          icon: Calculator, headerBg: "bg-green-50",   iconBg: "bg-green-500",   iconColor: "text-white", nameColor: "text-green-900"   },
  { name: "Web Search",   desc: "Provides real-time access to knowledge, news and web content.",            icon: Globe,      headerBg: "bg-teal-50",    iconBg: "bg-teal-500",    iconColor: "text-white", nameColor: "text-teal-900"    },
  { name: "PDF Reader",   desc: "Extracts text from documents for summarization and document Q&A.",         icon: FileText,   headerBg: "bg-blue-50",    iconBg: "bg-blue-500",    iconColor: "text-white", nameColor: "text-blue-900"    },
  { name: "Python REPL",  desc: "Executes Python code dynamically — logic, simulations, calculations.",    icon: Terminal,   headerBg: "bg-emerald-50", iconBg: "bg-emerald-600", iconColor: "text-white", nameColor: "text-emerald-900" },
];

/* ── Advantages ───────────────────────────────────────────────────────────── */

const ADVANTAGES = [
  { emoji: "🧠", title: "Dynamic Reasoning", desc: "Agents select tools intelligently based on the task." },
  { emoji: "⚡", title: "Multi-Step Automation", desc: "Automate complex workflows across multiple steps." },
  { emoji: "🔌", title: "Extensibility", desc: "Add new tools easily without changing agent logic." },
  { emoji: "📋", title: "Structured Interaction", desc: "JSON/XML agents enforce schemas for predictable outputs." },
  { emoji: "🌐", title: "Real-Time Knowledge", desc: "Connect to APIs, documents and live data sources." },
] as const;

/* ── Component ───────────────────────────────────────────────────────────── */

export function LangChainAgentsBlock() {
  return (
    <div className="space-y-7">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-teal-50 shadow-sm">
        <div className="border-b border-green-100 bg-white/60 px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold text-gray-900">
                Agents and Tools in LangChain
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
                LangChain&apos;s core power comes from combining <strong>Agents</strong> and <strong>Tools</strong>.
                Tools are external functions, APIs or logic that an agent can call.
                Agents are LLM-powered entities that reason, plan and decide which tools to use to solve a query.
              </p>
            </div>
            <BookOpen className="h-8 w-8 shrink-0 text-green-400" />
          </div>
        </div>

        {/* Two key definitions */}
        <div className="grid grid-cols-2 divide-x divide-green-100">
          <div className="px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-green-700">🔧 Tools</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-gray-600">
              External functions, APIs or computational modules that extend what an LLM can do beyond text generation.
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-green-700">🤖 Agents</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-gray-600">
              LLM-powered systems that reason, plan and decide which tools to call to solve complex user queries.
            </p>
          </div>
        </div>
      </div>

      {/* ── Diagrams side by side ──────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-3">
        <AgentStructureDiagram />
        <div className="rounded-2xl border border-green-200 bg-green-50/40 p-4">
          <p className="mb-3 text-center text-[10.5px] font-bold uppercase tracking-widest text-green-700">
            What Agents Can Do
          </p>
          <div className="space-y-2">
            {[
              { icon: "🎯", text: "Select tools based on task requirements" },
              { icon: "🔗", text: "Chain multiple steps together" },
              { icon: "🔍", text: "Observe outputs and adjust decisions dynamically" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5 rounded-xl border border-green-200 bg-white px-3 py-2.5">
                <span className="mt-0.5 text-base">{item.icon}</span>
                <p className="text-[12.5px] leading-relaxed text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Agent Flow Diagram ─────────────────────────────────────────────── */}
      <AgentFlowDiagram />

      {/* ── Types of Agents ────────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Types of Agents
        </p>
        <ol className="space-y-2">
          {AGENT_TYPES.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <li key={agent.name}>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:border-gray-300 hover:shadow-md">
                  {/* Numbered circle — same style as Python course topic list */}
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${agent.numBg} text-sm font-bold ${agent.numText}`}>
                    {i + 1}
                  </span>
                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900">{agent.name}</p>
                    <p className="text-sm text-gray-500">{agent.useCase}</p>
                  </div>
                  {/* Icon on the right */}
                  <Icon className={`h-4 w-4 shrink-0 ${agent.iconColor}`} strokeWidth={2} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* ── Types of Tools ─────────────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11.5px] font-bold uppercase tracking-widest text-gray-500">
          Types of Tools
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {TOOL_TYPES.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* Coloured header row */}
                <div className={`flex items-center gap-3 ${tool.headerBg} px-4 py-3 border-b border-gray-100`}>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tool.iconBg} shadow-sm`}>
                    <Icon className={`h-4 w-4 ${tool.iconColor}`} strokeWidth={2} />
                  </div>
                  <p className={`text-[13px] font-bold ${tool.nameColor}`}>{tool.name}</p>
                </div>
                {/* Description */}
                <div className="px-4 py-3">
                  <p className="text-[12px] leading-relaxed text-gray-600">{tool.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Advantages ─────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-green-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-green-100 bg-gradient-to-r from-green-50 to-teal-50 px-5 py-3.5">
          <p className="text-[13px] font-bold text-green-900">
            Advantages of Combining Agents + Tools
          </p>
        </div>
        {/* Bullet list */}
        <ul className="divide-y divide-gray-100">
          {ADVANTAGES.map((a) => (
            <li key={a.title} className="flex items-start gap-3 px-5 py-3">
              <span className="mt-0.5 shrink-0 text-[15px]">{a.emoji}</span>
              <p className="text-[12.5px] leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900">{a.title}: </span>
                {a.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
