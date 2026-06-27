"use client";

import { useState } from "react";
import type { ComponentProps, ElementType } from "react";
import {
  BadgeCheck,
  Bot,
  Braces,
  Check,
  Code2,
  Copy,
  Gauge,
  Globe2,
  Layers,
  MessageSquareText,
  Network,
  PlugZap,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

type Color = keyof typeof COLOR_MAP;

type Card = {
  icon: ElementType;
  title: string;
  description: string;
  color: Color;
};

type LessonData = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: string[];
  sections: Array<{
    eyebrow: string;
    title: string;
    description: string;
    cards: Card[];
  }>;
  code?: {
    label: string;
    code: string;
  };
  note: string;
};

type CodeStep = {
  id: number;
  title: string;
  explanation: string;
  code: string;
};

const CODE_STEPS: Record<string, CodeStep[]> = {
  "ai-m3-t2": [
    {
      id: 1,
      title: "Install the OpenAI SDK",
      explanation:
        "Groq is OpenAI-compatible, so the standard OpenAI Python package can call Groq when you set the Groq base URL.",
      code: `!pip install openai

print("OpenAI SDK installed for Groq compatibility")`,
    },
    {
      id: 2,
      title: "Load your Groq API key",
      explanation:
        "Keep the key outside source code. In Colab or VS Code, read GROQ_API_KEY from the environment.",
      code: `import os

api_key = os.environ.get("GROQ_API_KEY")
print("Groq key loaded:", api_key is not None)`,
    },
    {
      id: 3,
      title: "Create the Groq-compatible client",
      explanation:
        "Use the OpenAI client, but point base_url to Groq's OpenAI-compatible endpoint.",
      code: `from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)`,
    },
    {
      id: 4,
      title: "Call the Responses API",
      explanation:
        "Send a prompt to a Groq-hosted model with client.responses.create.",
      code: `response = client.responses.create(
    model="openai/gpt-oss-20b",
    input="Explain the importance of fast language models",
)`,
    },
    {
      id: 5,
      title: "Print the output text",
      explanation:
        "For a basic text generation app, response.output_text is the easiest result to display.",
      code: `print(response.output_text)`,
    },
  ],
  "ai-m3-t3": [
    {
      id: 1,
      title: "Create a response",
      explanation: "Start with a normal Groq Responses API call.",
      code: `response = client.responses.create(
    model="openai/gpt-oss-20b",
    input="Summarize why fast inference matters in 3 bullets",
)`,
    },
    {
      id: 2,
      title: "Extract output_text",
      explanation: "Store the generated text before showing it in your app.",
      code: `answer = response.output_text
print(answer)`,
    },
    {
      id: 3,
      title: "Validate before display",
      explanation: "Do not assume every response has usable text.",
      code: `if not answer:
    print("No response text returned")
else:
    print("Ready to display")`,
    },
    {
      id: 4,
      title: "Wrap extraction in a helper",
      explanation: "A helper function makes response handling reusable.",
      code: `def get_output_text(response):
    return getattr(response, "output_text", "")

print(get_output_text(response))`,
    },
    {
      id: 5,
      title: "Prepare for app usage",
      explanation: "Pass the extracted answer into your UI or next workflow step.",
      code: `ui_message = {
    "role": "assistant",
    "content": get_output_text(response),
}

print(ui_message)`,
    },
  ],
  "ai-m3-t4": [
    {
      id: 1,
      title: "Create a model variable",
      explanation: "Keep model choice in one place so it is easy to test and swap.",
      code: `MODEL = "openai/gpt-oss-20b"
print("Using:", MODEL)`,
    },
    {
      id: 2,
      title: "Run a benchmark prompt",
      explanation: "Use the same prompt when comparing candidate models.",
      code: `prompt = "Give me a short checklist for testing an AI app"

response = client.responses.create(
    model=MODEL,
    input=prompt,
)`,
    },
    {
      id: 3,
      title: "Inspect the output",
      explanation: "Check whether the result fits your quality needs.",
      code: `print(response.output_text)`,
    },
    {
      id: 4,
      title: "Record model decision notes",
      explanation: "Choose based on your task, not just model popularity.",
      code: `model_notes = {
    "model": MODEL,
    "best_for": "fast text generation",
    "check": "quality, latency, limits",
}

print(model_notes)`,
    },
    {
      id: 5,
      title: "Repeat with another model",
      explanation: "Run the same test on another candidate model and compare.",
      code: `candidate_models = ["openai/gpt-oss-20b"]

for model in candidate_models:
    print("Test model:", model)`,
    },
  ],
  "ai-m3-t5": [
    {
      id: 1,
      title: "Wrap the API call",
      explanation: "Use try/except so failures do not crash the learner experience.",
      code: `try:
    response = client.responses.create(
        model="openai/gpt-oss-20b",
        input="Explain rate limits simply",
    )
    print(response.output_text)
except Exception as error:
    print("Groq request failed:", error)`,
    },
    {
      id: 2,
      title: "Add retry limits",
      explanation: "Retries should be capped so your app does not loop forever.",
      code: `MAX_RETRIES = 3

for attempt in range(1, MAX_RETRIES + 1):
    print("Attempt", attempt)
    # call Groq here
    break`,
    },
    {
      id: 3,
      title: "Log useful diagnostics",
      explanation: "Log enough context to debug without exposing secrets.",
      code: `log_event = {
    "provider": "groq",
    "model": "openai/gpt-oss-20b",
    "status": "failed_or_succeeded",
}

print(log_event)`,
    },
    {
      id: 4,
      title: "Keep keys server-side",
      explanation: "Frontend code should never expose GROQ_API_KEY.",
      code: `# Browser -> your backend -> Groq
# Never expose GROQ_API_KEY in browser JavaScript.
print("Key stays on the server")`,
    },
    {
      id: 5,
      title: "Show a fallback",
      explanation: "Users should see a helpful message if the model request fails.",
      code: `fallback = "I could not reach the AI service right now. Please try again."
print(fallback)`,
    },
  ],
};

const LESSONS: Record<string, LessonData> = {
  "ai-m3-t2": {
    eyebrow: "Groq Quickstart",
    title: "Your First Groq API Call",
    intro:
      "Groq's API is OpenAI-compatible, so you can use the OpenAI SDK with Groq's base URL and your GROQ_API_KEY.",
    highlights: [
      "Use the OpenAI client with base_url set to Groq's OpenAI-compatible endpoint.",
      "Store the key in GROQ_API_KEY and read it from environment variables.",
      "Call the Responses API and print response.output_text for the generated answer.",
    ],
    sections: [
      {
        eyebrow: "Request Flow",
        title: "What happens in a basic request",
        description:
          "A minimal Groq request chooses a model, sends input text, waits for inference, and reads the returned output text.",
        cards: [
          {
            icon: ShieldCheck,
            title: "Authenticate",
            description: "Read GROQ_API_KEY from the environment instead of hardcoding credentials.",
            color: "emerald",
          },
          {
            icon: PlugZap,
            title: "Set Base URL",
            description: "Point the OpenAI SDK to https://api.groq.com/openai/v1.",
            color: "blue",
          },
          {
            icon: MessageSquareText,
            title: "Send Input",
            description: "Pass your prompt through the Responses API input field.",
            color: "violet",
          },
          {
            icon: Zap,
            title: "Read Output",
            description: "Display response.output_text after Groq returns the model response.",
            color: "amber",
          },
        ],
      },
    ],
    code: {
      label: "Python quickstart",
      code: `from openai import OpenAI
import os

client = OpenAI(
    api_key=os.environ.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)

response = client.responses.create(
    model="openai/gpt-oss-20b",
    input="Explain the importance of fast language models",
)

print(response.output_text)`,
    },
    note:
      "The official Groq overview shows the same pattern for Python, JavaScript, and curl: authenticate, use the Groq base URL, send input, then read output_text.",
  },
  "ai-m3-t3": {
    eyebrow: "Responses API",
    title: "Understanding Groq API Responses",
    intro:
      "The Responses API returns a response object from which your app extracts the generated text and handles metadata, errors, or downstream processing.",
    highlights: [
      "response.output_text is the simplest field to display for text generation.",
      "Responses should be checked before assuming the request succeeded.",
      "Production apps also track latency, token usage, and failure reasons.",
    ],
    sections: [
      {
        eyebrow: "Response Anatomy",
        title: "How to think about the returned object",
        description:
          "For beginner lessons, focus on extracting useful text first. As apps mature, add structured outputs, moderation, retries, and observability.",
        cards: [
          {
            icon: Braces,
            title: "Output Text",
            description: "The generated answer your UI usually displays to the user.",
            color: "blue",
          },
          {
            icon: Layers,
            title: "Structured Outputs",
            description: "Groq docs include structured output support for predictable app data.",
            color: "violet",
          },
          {
            icon: Gauge,
            title: "Latency Metrics",
            description: "Fast inference is useful, but you still measure response time in real apps.",
            color: "emerald",
          },
          {
            icon: ShieldCheck,
            title: "Safety Checks",
            description: "Use moderation, validation, and app-level checks for sensitive workflows.",
            color: "amber",
          },
        ],
      },
    ],
    code: {
      label: "Extract the answer",
      code: `response = client.responses.create(
    model="openai/gpt-oss-20b",
    input="Summarize why fast inference matters in 3 bullets",
)

answer = response.output_text
print(answer)`,
    },
    note:
      "Groq's docs describe text generation, structured outputs, prompt caching, and moderation as core features you can layer on as your app grows.",
  },
  "ai-m3-t4": {
    eyebrow: "Models and Features",
    title: "Choosing a Groq Model",
    intro:
      "Model choice depends on the task: speed, reasoning quality, modality, cost, rate limits, and compatibility with your app's workflow.",
    highlights: [
      "Groq provides a Models section so developers can review available model options.",
      "The same OpenAI-compatible integration style can make model switching easier.",
      "Groq docs also include features like speech, vision/OCR, reasoning, tools, and structured outputs.",
    ],
    sections: [
      {
        eyebrow: "Selection Criteria",
        title: "Pick the model for the job",
        description:
          "Do not choose a model by name alone. Match the model to your app's output quality, latency, and feature needs.",
        cards: [
          {
            icon: Gauge,
            title: "Latency",
            description: "Prefer fast models for chat, demos, and interactive workflows.",
            color: "emerald",
          },
          {
            icon: BrainIcon,
            title: "Reasoning",
            description: "Use stronger reasoning models for planning, coding, and multi-step tasks.",
            color: "violet",
          },
          {
            icon: Globe2,
            title: "Modalities",
            description: "Check whether your app needs text, speech, OCR, image recognition, or tools.",
            color: "blue",
          },
          {
            icon: Network,
            title: "Integrations",
            description: "Groq supports tool use, built-in tools, connectors, and MCP-style integrations.",
            color: "amber",
          },
        ],
      },
    ],
    code: {
      label: "Make model choice explicit",
      code: `MODEL = "openai/gpt-oss-20b"

response = client.responses.create(
    model=MODEL,
    input="Give me a short checklist for testing an AI app",
)

print(response.output_text)`,
    },
    note:
      "The Groq docs group capabilities into Getting Started, Core Features, Tools & Integrations, Compound agentic AI, and Production Readiness.",
  },
  "ai-m3-t5": {
    eyebrow: "Production Readiness",
    title: "Handling Errors, Rate Limits, and Reliability",
    intro:
      "A production Groq app needs more than a successful demo call: it should handle errors, watch latency, respect rate limits, and protect user data.",
    highlights: [
      "Groq docs include Rate Limits, Error Codes, Production Checklist, Optimizing Latency, Security Onboarding, and Prometheus Metrics.",
      "Reliable apps retry carefully, show useful fallback messages, and avoid retry loops.",
      "Monitoring helps catch latency, spend, failures, and quality regressions before users report them.",
    ],
    sections: [
      {
        eyebrow: "Production Checklist",
        title: "What to add before shipping",
        description:
          "Start simple, then add reliability around the API call as the app moves from prototype to production.",
        cards: [
          {
            icon: Server,
            title: "Rate Limits",
            description: "Detect limit errors and retry with backoff instead of crashing.",
            color: "blue",
          },
          {
            icon: Gauge,
            title: "Latency",
            description: "Measure response times and choose service tiers or models intentionally.",
            color: "emerald",
          },
          {
            icon: ShieldCheck,
            title: "Security",
            description: "Keep API keys server-side and follow security onboarding guidance.",
            color: "amber",
          },
          {
            icon: TerminalSquare,
            title: "Observability",
            description: "Use logs and metrics so failures are visible during real traffic.",
            color: "violet",
          },
        ],
      },
    ],
    code: {
      label: "Basic error boundary",
      code: `try:
    response = client.responses.create(
        model="openai/gpt-oss-20b",
        input="Explain rate limits simply",
    )
    print(response.output_text)
except Exception as error:
    print("Groq request failed:", error)
    print("Show a friendly fallback message to the user.")`,
    },
    note:
      "Treat the API call as a production dependency: validate inputs, protect credentials, handle errors, and monitor behavior.",
  },
};

function BrainIcon(props: ComponentProps<typeof Bot>) {
  return <Bot {...props} />;
}

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
} as const;

export function GroqDocsLessonBlock({ topicId }: { topicId?: string }) {
  const activeTopicId = topicId ?? "ai-m3-t2";
  const lesson = LESSONS[activeTopicId] ?? LESSONS["ai-m3-t2"];
  const steps = CODE_STEPS[activeTopicId] ?? CODE_STEPS["ai-m3-t2"];
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { markCopied } = useLangChainCopy();

  function copyCode(stepId: number, code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setCopiedId(stepId);
      markCopied(stepId);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  return (
    <div className="my-6 space-y-6">
      <section className="overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-emerald-50 shadow-sm">
        <div className="flex items-start gap-3 border-b border-orange-100 bg-white/75 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-sm">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-orange-600">
              {lesson.eyebrow}
            </p>
            <h3 className="mt-1 text-[17px] font-bold text-gray-950">{lesson.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-800">{lesson.intro}</p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {lesson.highlights.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 rounded-xl border border-orange-100 bg-white/85 px-3 py-3 shadow-sm"
            >
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {lesson.sections.map((section) => (
        <section key={section.title}>
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {section.cards.map((card) => (
              <FeatureCard key={card.title} item={card} />
            ))}
          </div>
        </section>
      ))}

      <section>
        <SectionHeader
          eyebrow="Try It In Colab Or VS Code"
          title="Copy each runnable step"
          description="Copy each cell into Google Colab, Jupyter, or VS Code. The tracker on the right updates as each step is copied."
        />
        <div className="space-y-3">
          {steps.map((step) => (
            <article key={step.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-start gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-700">
                  {step.id}
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-slate-900">{step.title}</p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500">{step.explanation}</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyCode(step.id, step.code)}
                  className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
                >
                  {copiedId === step.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedId === step.id ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap bg-slate-950 px-4 py-4 font-mono text-[12.5px] leading-relaxed text-emerald-100">
                {step.code}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          <p className="text-[13px] leading-relaxed text-emerald-900">{lesson.note}</p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-3">
      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{eyebrow}</p>
      <h3 className="mt-1 text-[16px] font-bold text-gray-950">{title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ item }: { item: Card }) {
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
