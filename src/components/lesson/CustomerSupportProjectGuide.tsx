"use client";

import {
  BadgeCheck,
  Bot,
  Brain,
  ClipboardCheck,
  Database,
  GitBranch,
  LifeBuoy,
  MessageSquare,
  Route,
  ShieldCheck,
  TestTube2,
  Wrench,
} from "lucide-react";

type ProjectSection = "overview" | "knowledge" | "tools" | "loop" | "testing";

interface SectionData {
  eyebrow: string;
  title: string;
  intro: string;
  outcome: string;
  focus: Array<{ title: string; desc: string; icon: typeof Bot; color: string }>;
  checklist: string[];
}

const SECTIONS: Record<ProjectSection, SectionData> = {
  overview: {
    eyebrow: "Agentic AI - Final Project",
    title: "Customer Support Agent",
    intro:
      "In this final project, you will build a support agent that answers customer questions, checks mock order data, uses safe tools, remembers the conversation and escalates when it should not guess.",
    outcome:
      "By the end, you will have a complete Python project that demonstrates prompts, tool calling, agent routing, memory, safety rules and testing.",
    focus: [
      {
        title: "Support Brain",
        desc: "A clear system prompt defines the agent role, response tone and boundaries.",
        icon: Brain,
        color: "violet",
      },
      {
        title: "Knowledge Base",
        desc: "Policies and FAQs ground answers so the agent does not invent support rules.",
        icon: Database,
        color: "blue",
      },
      {
        title: "Approved Tools",
        desc: "Mock functions let the agent retrieve order status, create tickets and escalate safely.",
        icon: Wrench,
        color: "emerald",
      },
    ],
    checklist: [
      "Understand the final architecture before writing code.",
      "Identify where each previous module appears in the project.",
      "Set up a local folder or notebook where you will build step by step.",
    ],
  },
  knowledge: {
    eyebrow: "Step 1",
    title: "Build the Support Knowledge Base",
    intro:
      "The agent needs trusted information before it can help customers. Start with mock policies, FAQ entries and order records so every response can be grounded in known data.",
    outcome:
      "You will create the project data layer: support policies, sample orders and a helper that searches relevant policy text.",
    focus: [
      {
        title: "Policies",
        desc: "Shipping, refunds, cancellations and account support rules become plain Python data.",
        icon: ClipboardCheck,
        color: "amber",
      },
      {
        title: "Order Records",
        desc: "Small mock records make order-status tools possible without a real backend.",
        icon: Database,
        color: "blue",
      },
      {
        title: "Boundaries",
        desc: "Missing or sensitive information should trigger clarification or escalation.",
        icon: ShieldCheck,
        color: "rose",
      },
    ],
    checklist: [
      "Create sample policies and order records.",
      "Write a lookup function for policy topics.",
      "Print test outputs before adding agent logic.",
    ],
  },
  tools: {
    eyebrow: "Step 2",
    title: "Add Tools and Function Calling",
    intro:
      "Tools are the safe actions your agent is allowed to take. Each tool should do one clear job and return structured information that the agent can explain to the customer.",
    outcome:
      "You will define mock support tools and a simple router that chooses the right tool based on the user request.",
    focus: [
      {
        title: "Order Lookup",
        desc: "Read order status only when the user provides an order ID.",
        icon: LifeBuoy,
        color: "cyan",
      },
      {
        title: "Ticket Creation",
        desc: "Capture unresolved issues in a support-ticket object.",
        icon: ClipboardCheck,
        color: "emerald",
      },
      {
        title: "Escalation",
        desc: "Send uncertain, unsafe or account-sensitive cases to a human.",
        icon: Route,
        color: "violet",
      },
    ],
    checklist: [
      "Define one function per support action.",
      "Return dictionaries instead of loose strings.",
      "Test each tool independently before using the agent loop.",
    ],
  },
  loop: {
    eyebrow: "Step 3",
    title: "Create the Agent Loop and Memory",
    intro:
      "The agent loop receives a message, remembers context, decides whether a tool is needed, calls the tool and then writes a clear support response.",
    outcome:
      "You will combine routing, memory and response generation into a reusable `support_agent` function.",
    focus: [
      {
        title: "Memory",
        desc: "Keep recent messages so follow-up questions have context.",
        icon: MessageSquare,
        color: "blue",
      },
      {
        title: "Routing",
        desc: "Classify requests into policy lookup, order lookup, ticket creation or escalation.",
        icon: GitBranch,
        color: "violet",
      },
      {
        title: "Response",
        desc: "Turn tool output into a concise, helpful answer with next steps.",
        icon: Bot,
        color: "emerald",
      },
    ],
    checklist: [
      "Store the conversation history.",
      "Route each user message to a safe action.",
      "Return the final answer and the internal action taken.",
    ],
  },
  testing: {
    eyebrow: "Step 4",
    title: "Test and Assemble the Final Build",
    intro:
      "A useful agent must be tested with realistic conversations. You will run happy-path, missing-info, policy and escalation cases before treating the project as complete.",
    outcome:
      "You will run a complete support-agent script and verify it handles common customer-support scenarios safely.",
    focus: [
      {
        title: "Scenario Tests",
        desc: "Run order tracking, refunds, cancellations and missing order ID examples.",
        icon: TestTube2,
        color: "cyan",
      },
      {
        title: "Safety Checks",
        desc: "Confirm the agent escalates account-sensitive or unclear requests.",
        icon: ShieldCheck,
        color: "rose",
      },
      {
        title: "Final Demo",
        desc: "Show a short transcript with the agent action and final customer response.",
        icon: BadgeCheck,
        color: "emerald",
      },
    ],
    checklist: [
      "Run the complete Python script.",
      "Check at least five test conversations.",
      "Explain what the agent can and cannot do.",
    ],
  },
};

const COLORS: Record<string, string> = {
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  rose: "border-rose-200 bg-rose-50 text-rose-700",
  violet: "border-violet-200 bg-violet-50 text-violet-700",
};

function getSection(section?: string): SectionData {
  if (section === "knowledge" || section === "tools" || section === "loop" || section === "testing") {
    return SECTIONS[section];
  }
  return SECTIONS.overview;
}

export function CustomerSupportProjectGuide({ section }: { section?: string }) {
  const data = getSection(section);

  return (
    <div className="space-y-7">
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 shadow-sm">
        <div className="border-b border-violet-100 bg-white/60 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
            {data.eyebrow}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">{data.title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-gray-700">{data.intro}</p>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-white p-4">
            <Bot className="mt-1 h-5 w-5 shrink-0 text-violet-700" />
            <p className="text-sm leading-6 text-gray-700">{data.outcome}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
          What You Build Here
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {data.focus.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`rounded-2xl border p-4 ${COLORS[item.color]}`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-[15px] font-bold text-gray-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <ClipboardCheck className="h-4 w-4 text-slate-700" />
          <p className="text-sm font-bold text-slate-950">Before Moving On</p>
        </div>
        <ul className="space-y-3">
          {data.checklist.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
          <p className="text-sm leading-6 text-emerald-950">
            Project rule: the agent should be helpful, but it should never pretend to access real
            accounts, approve refunds, or change customer data unless an approved tool returns that result.
          </p>
        </div>
      </div>
    </div>
  );
}
