"use client";

import { useState } from "react";
import { Check, CheckCircle2, Circle, ClipboardList, Copy, ExternalLink } from "lucide-react";

const COLAB_URL = "https://colab.research.google.com/#create=true";

type ProjectSection = "overview" | "knowledge" | "tools" | "loop" | "testing";

interface BuildStep {
  id: number;
  title: string;
  desc: string;
  filename: string;
  language: string;
  code: string;
}

const OVERVIEW_STEPS: BuildStep[] = [
  {
    id: 1,
    title: "Create the project folder",
    desc: "Start with a small file structure that can later become a Flask app, API route, or notebook demo.",
    filename: "project layout",
    language: "text",
    code: `customer_support_agent/
├── support_agent.py
├── test_agent.py
└── README.md

print("Project folder planned: customer_support_agent")`,
  },
  {
    id: 2,
    title: "Write the project goal",
    desc: "Define the agent's job before writing tools. This keeps the project focused and easier to test.",
    filename: "README.md",
    language: "markdown",
    code: `# Customer Support Agent

Goal:
Build an AI-style support agent that can answer common customer questions,
look up mock order status, create support tickets, and escalate uncertain cases.

Core features:
- Support policy knowledge base
- Mock tools for order lookup and ticket creation
- Conversation memory
- Safe escalation behavior
- Test conversations

print("Project goal documented.")`,
  },
];

const KNOWLEDGE_STEPS: BuildStep[] = [
  {
    id: 1,
    title: "Create support policies and orders",
    desc: "Use dictionaries and lists to represent the knowledge your support agent can trust.",
    filename: "support_agent.py",
    language: "python",
    code: `SUPPORT_POLICIES = {
    "shipping": "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.",
    "refund": "Refunds can be requested within 30 days if the item is unused and in original packaging.",
    "cancellation": "Orders can be cancelled before they are shipped.",
    "account": "For password, payment, or personal-data changes, escalate to a human support specialist.",
}

ORDERS = {
    "ORD-1001": {"status": "shipped", "eta": "Tomorrow", "item": "Wireless Mouse"},
    "ORD-1002": {"status": "processing", "eta": "Friday", "item": "Keyboard"},
    "ORD-1003": {"status": "delivered", "eta": "Delivered yesterday", "item": "USB-C Hub"},
}

print("Loaded", len(SUPPORT_POLICIES), "policies and", len(ORDERS), "orders.")`,
  },
  {
    id: 2,
    title: "Add policy lookup",
    desc: "A lookup helper keeps the agent grounded in approved policy text.",
    filename: "support_agent.py",
    language: "python",
    code: `def lookup_policy(topic):
    topic = topic.lower().strip()
    for key, policy in SUPPORT_POLICIES.items():
        if key in topic:
            return {"found": True, "topic": key, "policy": policy}
    return {
        "found": False,
        "topic": topic,
        "policy": "I do not have a matching policy. Please escalate to human support.",
    }

print("Refund policy:", lookup_policy("refund"))`,
  },
];

const TOOL_STEPS: BuildStep[] = [
  {
    id: 1,
    title: "Create safe support tools",
    desc: "Each tool returns structured data. This makes the final agent response easier to inspect.",
    filename: "support_agent.py",
    language: "python",
    code: `def get_order_status(order_id):
    order = ORDERS.get(order_id.upper())
    if not order:
        return {"ok": False, "message": "Order ID not found. Ask the customer to check the ID."}
    return {"ok": True, "order_id": order_id.upper(), **order}

def create_support_ticket(issue, priority="normal"):
    return {
        "ticket_id": "TICKET-5001",
        "priority": priority,
        "issue": issue,
        "status": "created",
    }

def escalate_to_human(reason):
    return {"escalated": True, "reason": reason, "team": "human support"}

print(get_order_status("ORD-1001"))
print(create_support_ticket("Customer says package is delayed"))`,
  },
  {
    id: 2,
    title: "Route requests to tools",
    desc: "This simple router imitates function calling by selecting an action from the user's message.",
    filename: "support_agent.py",
    language: "python",
    code: `def extract_order_id(message):
    words = message.upper().replace(",", " ").replace(".", " ").split()
    for word in words:
        if word.startswith("ORD-"):
            return word
    return None

def choose_action(message):
    text = message.lower()
    if "order" in text or "track" in text or "package" in text:
        order_id = extract_order_id(message)
        return {"action": "order_status", "order_id": order_id}
    if "refund" in text:
        return {"action": "policy", "topic": "refund"}
    if "cancel" in text:
        return {"action": "policy", "topic": "cancellation"}
    if "password" in text or "payment" in text:
        return {"action": "escalate", "reason": "Account-sensitive request"}
    return {"action": "ticket", "issue": message}

print(choose_action("Track order ORD-1001"))
print(choose_action("Can I get a refund?"))`,
  },
];

const LOOP_STEPS: BuildStep[] = [
  {
    id: 1,
    title: "Add memory",
    desc: "Store conversation turns so the agent can inspect what happened during the session.",
    filename: "support_agent.py",
    language: "python",
    code: `conversation_memory = []

def remember(role, message):
    conversation_memory.append({"role": role, "message": message})
    if len(conversation_memory) > 6:
        conversation_memory.pop(0)

remember("user", "Where is order ORD-1001?")
remember("agent", "Your order has shipped and arrives tomorrow.")
print("Memory:", conversation_memory)`,
  },
  {
    id: 2,
    title: "Create the agent function",
    desc: "The agent chooses an action, calls the safe tool and returns a clear support response.",
    filename: "support_agent.py",
    language: "python",
    code: `def support_agent(user_message):
    remember("user", user_message)
    decision = choose_action(user_message)
    action = decision["action"]

    if action == "order_status":
        if not decision.get("order_id"):
            response = "Please share your order ID, for example ORD-1001, so I can check the status."
        else:
            result = get_order_status(decision["order_id"])
            if result["ok"]:
                response = f"Order {result['order_id']} for {result['item']} is {result['status']}. ETA: {result['eta']}."
            else:
                response = result["message"]
    elif action == "policy":
        result = lookup_policy(decision["topic"])
        response = result["policy"]
    elif action == "escalate":
        result = escalate_to_human(decision["reason"])
        response = f"I will escalate this to {result['team']} because: {result['reason']}."
    else:
        result = create_support_ticket(decision["issue"])
        response = f"I created support ticket {result['ticket_id']} for this issue."

    remember("agent", response)
    return {"action": action, "response": response}

print(support_agent("Where is order ORD-1002?"))`,
  },
];

const FINAL_BUILD = `SUPPORT_POLICIES = {
    "shipping": "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.",
    "refund": "Refunds can be requested within 30 days if the item is unused and in original packaging.",
    "cancellation": "Orders can be cancelled before they are shipped.",
    "account": "For password, payment, or personal-data changes, escalate to a human support specialist.",
}

ORDERS = {
    "ORD-1001": {"status": "shipped", "eta": "Tomorrow", "item": "Wireless Mouse"},
    "ORD-1002": {"status": "processing", "eta": "Friday", "item": "Keyboard"},
    "ORD-1003": {"status": "delivered", "eta": "Delivered yesterday", "item": "USB-C Hub"},
}

conversation_memory = []

def remember(role, message):
    conversation_memory.append({"role": role, "message": message})
    if len(conversation_memory) > 6:
        conversation_memory.pop(0)

def lookup_policy(topic):
    topic = topic.lower().strip()
    for key, policy in SUPPORT_POLICIES.items():
        if key in topic:
            return {"found": True, "topic": key, "policy": policy}
    return {"found": False, "topic": topic, "policy": "No matching policy found. Escalate to human support."}

def get_order_status(order_id):
    order = ORDERS.get(order_id.upper())
    if not order:
        return {"ok": False, "message": "Order ID not found. Ask the customer to check the ID."}
    return {"ok": True, "order_id": order_id.upper(), **order}

def create_support_ticket(issue, priority="normal"):
    return {"ticket_id": "TICKET-5001", "priority": priority, "issue": issue, "status": "created"}

def escalate_to_human(reason):
    return {"escalated": True, "reason": reason, "team": "human support"}

def extract_order_id(message):
    words = message.upper().replace(",", " ").replace(".", " ").split()
    for word in words:
        if word.startswith("ORD-"):
            return word
    return None

def choose_action(message):
    text = message.lower()
    if "order" in text or "track" in text or "package" in text:
        return {"action": "order_status", "order_id": extract_order_id(message)}
    if "refund" in text:
        return {"action": "policy", "topic": "refund"}
    if "cancel" in text:
        return {"action": "policy", "topic": "cancellation"}
    if "password" in text or "payment" in text:
        return {"action": "escalate", "reason": "Account-sensitive request"}
    return {"action": "ticket", "issue": message}

def support_agent(user_message):
    remember("user", user_message)
    decision = choose_action(user_message)
    action = decision["action"]

    if action == "order_status":
        if not decision.get("order_id"):
            response = "Please share your order ID, for example ORD-1001, so I can check the status."
        else:
            result = get_order_status(decision["order_id"])
            if result["ok"]:
                response = f"Order {result['order_id']} for {result['item']} is {result['status']}. ETA: {result['eta']}."
            else:
                response = result["message"]
    elif action == "policy":
        response = lookup_policy(decision["topic"])["policy"]
    elif action == "escalate":
        result = escalate_to_human(decision["reason"])
        response = f"I will escalate this to {result['team']} because: {result['reason']}."
    else:
        result = create_support_ticket(decision["issue"])
        response = f"I created support ticket {result['ticket_id']} for this issue."

    remember("agent", response)
    return {"action": action, "response": response}

TEST_MESSAGES = [
    "Where is order ORD-1001?",
    "Can I get a refund?",
    "I want to cancel my order",
    "Track my package",
    "Please change my payment method",
]

for message in TEST_MESSAGES:
    result = support_agent(message)
    print("\\nCustomer:", message)
    print("Agent action:", result["action"])
    print("Agent:", result["response"])

print("\\nRecent memory:")
for turn in conversation_memory:
    print(turn["role"], "->", turn["message"])`;

const TESTING_STEPS: BuildStep[] = [
  {
    id: 1,
    title: "Run scenario tests",
    desc: "Use a fixed set of test messages to verify routing, tools, missing information and escalation.",
    filename: "test_agent.py",
    language: "python",
    code: `TEST_MESSAGES = [
    "Where is order ORD-1001?",
    "Can I get a refund?",
    "I want to cancel my order",
    "Track my package",
    "Please change my payment method",
]

for message in TEST_MESSAGES:
    result = support_agent(message)
    print("\\nCustomer:", message)
    print("Agent action:", result["action"])
    print("Agent:", result["response"])`,
  },
  {
    id: 2,
    title: "Assemble the final build",
    desc: "Run the complete project in one Python file or notebook cell.",
    filename: "support_agent.py",
    language: "python",
    code: FINAL_BUILD,
  },
];

const STEPS_BY_SECTION: Record<ProjectSection, BuildStep[]> = {
  overview: OVERVIEW_STEPS,
  knowledge: KNOWLEDGE_STEPS,
  tools: TOOL_STEPS,
  loop: LOOP_STEPS,
  testing: TESTING_STEPS,
};

function getSection(section?: string): ProjectSection {
  if (section === "knowledge" || section === "tools" || section === "loop" || section === "testing") {
    return section;
  }
  return "overview";
}

export function CustomerSupportProjectPanel({ section }: { section?: string }) {
  const activeSection = getSection(section);
  const steps = STEPS_BY_SECTION[activeSection];
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());

  function copyCode(id: number, code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setDoneSteps((prev) => new Set([...prev, id]));
      setTimeout(() => setCopiedId(null), 1600);
    });
  }

  const completed = steps.filter((step) => doneSteps.has(step.id)).length;

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
        <div className="border-b border-violet-100 bg-gradient-to-r from-violet-50 to-cyan-50 px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-violet-600" />
              <p className="text-base font-bold text-slate-900">Build in Notebook</p>
            </div>
            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-xs font-semibold text-orange-700 shadow-sm hover:bg-orange-50"
            >
              Open Colab
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Copy each cell into Colab, Jupyter or VS Code. The checklist tracks copy progress only.
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-violet-100">
            <div
              className="h-full rounded-full bg-violet-500 transition-all"
              style={{ width: `${Math.round((completed / steps.length) * 100)}%` }}
            />
          </div>
          <p className="mt-1 text-xs font-semibold text-violet-700">
            {completed} of {steps.length} project cells copied
          </p>
        </div>
      </div>

      {steps.map((step) => (
        <div key={step.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
            {doneSteps.has(step.id) ? (
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
            ) : (
              <Circle className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
            )}
            <div>
              <p className="text-[15px] font-bold text-gray-900">
                Step {step.id}: {step.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">{step.desc}</p>
            </div>
          </div>
          <CodeCell
            step={step}
            copied={copiedId === step.id}
            done={doneSteps.has(step.id)}
            onCopy={() => copyCode(step.id, step.code)}
          />
        </div>
      ))}
    </div>
  );
}

function CodeCell({
  step,
  copied,
  done,
  onCopy,
}: {
  step: BuildStep;
  copied: boolean;
  done: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-2">
        <span className="font-mono text-[11px] text-gray-500">
          [ {step.filename} ] {step.language}
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              Copied
            </>
          ) : done ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Copy again
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="max-h-[420px] overflow-auto bg-slate-950 px-4 py-3 text-[12px] leading-6 text-slate-100">
        <code>{step.code}</code>
      </pre>
    </div>
  );
}
