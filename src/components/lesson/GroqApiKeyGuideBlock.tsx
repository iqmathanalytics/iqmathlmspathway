"use client";

import { useState } from "react";
import type { ElementType } from "react";
import {
  BadgeCheck,
  Check,
  CheckCircle2,
  Cloud,
  Copy,
  KeyRound,
  LockKeyhole,
  Menu,
  Rocket,
  ShieldAlert,
  UserPlus,
  Zap,
} from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

type Color = keyof typeof COLOR_MAP;

type Step = {
  icon: ElementType;
  title: string;
  description: string;
  details: string[];
  code: string;
  color: Color;
};

const HIGHLIGHTS = [
  "Groq makes AI run very fast using its LPU Inference Engine.",
  "Groq can process large AI models like Llama quickly for instant responses.",
  "A Groq API key gives your app access to Groq's hosted AI services.",
];

const STEPS: Step[] = [
  {
    icon: UserPlus,
    title: "Sign Up or Log In to Groq Cloud",
    description: "Start from the Groq Cloud Console and use your Groq account.",
    details: [
      "Navigate to the Groq Cloud Console.",
      'If you do not have an account, choose "Sign Up" and complete registration.',
      'If you already have an account, choose "Log In" and enter your credentials.',
    ],
    code: `# Open Groq Cloud in your browser:
# https://console.groq.com/
print("Open Groq Cloud and sign in")`,
    color: "blue",
  },
  {
    icon: Menu,
    title: "Navigate to the Developers Section",
    description: "Open the Groq menu and find the developer tools for API access.",
    details: [
      "On the top right of the Groq homepage, click the hamburger menu.",
      'From the dropdown menu, select "Developers".',
      "Find the free API key section.",
    ],
    code: `# In Groq Cloud:
# Menu -> Developers -> API Keys
print("Navigate to API Keys")`,
    color: "violet",
  },
  {
    icon: KeyRound,
    title: "Create a New API Key",
    description: "Generate a labeled key so you can identify what project uses it.",
    details: [
      'In the API Keys section, click "Create API Key".',
      "Enter a descriptive project name or label for the key.",
      'Click "Submit" to generate the API key.',
    ],
    code: `# Give the key a clear label, for example:
project_name = "python-lms-practice"
print("Create API key for:", project_name)`,
    color: "emerald",
  },
  {
    icon: LockKeyhole,
    title: "Secure and Store Your API Key",
    description: "Copy the key immediately and store it somewhere safe.",
    details: [
      "Copy the generated API key as soon as it appears.",
      "Store it in a password manager or secure notes app.",
      "You will not be able to view the full key again after leaving the page.",
    ],
    code: `# Store the key safely. Do not print or commit the real value.
GROQ_API_KEY = "your-groq-api-key-here"
print("Key saved securely outside public code")`,
    color: "amber",
  },
  {
    icon: KeyRound,
    title: "Use Environment Variable",
    description: "Load the key from GROQ_API_KEY when running code locally or in Colab.",
    details: [
      "Use GROQ_API_KEY as the standard environment variable name.",
      "Read the key with os.environ.get in Python.",
      "Keep the real key out of frontend code and Git commits.",
    ],
    code: `import os

api_key = os.environ.get("GROQ_API_KEY")
print("Groq key configured:", api_key is not None)`,
    color: "emerald",
  },
];

const SECURITY_TIPS = [
  "Never paste a real API key into frontend code.",
  "Never commit API keys to GitHub.",
  "Use environment variables such as GROQ_API_KEY for local apps.",
  "Rotate or revoke a key immediately if it is exposed.",
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
} as const;

export function GroqApiKeyGuideBlock() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { markCopied } = useLangChainCopy();

  function copyStep(stepId: number, code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(stepId);
      markCopied(stepId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  return (
    <div className="my-6 space-y-6">
      <section className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 shadow-sm">
        <div className="flex items-start gap-3 border-b border-emerald-100 bg-white/75 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">
              Last updated: 2 Feb, 2025
            </p>
            <h3 className="mt-1 text-[17px] font-bold text-gray-950">
              How to Get a Groq API Key
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-800">
              Groq helps developers get fast AI responses through its API. To use Groq in an
              application, you need an API key that grants access to Groq&apos;s services.
            </p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-white/85 px-3 py-3 shadow-sm"
            >
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Step-by-Step"
          title="Create your Groq API key"
          description="Follow these steps in Groq Cloud, then store the generated key securely before leaving the page."
        />
        <div className="space-y-3">
          {STEPS.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              index={index}
              copied={copiedId === index + 1}
              onCopy={() => copyStep(index + 1, step.code)}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Rocket className="h-4 w-4 text-cyan-700" />
            <h4 className="text-sm font-bold text-cyan-950">Why developers use Groq</h4>
          </div>
          <p className="text-[12.5px] leading-relaxed text-cyan-900">
            Groq&apos;s LPU Inference Engine is designed for fast model inference, which helps
            apps feel responsive when they call models like Llama through the Groq API.
          </p>
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-cyan-200 bg-white/70 px-3 py-2">
            <Cloud className="h-4 w-4 text-cyan-700" />
            <p className="text-[12px] font-medium text-cyan-950">
              Console: Groq Cloud API Keys
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-700" />
            <h4 className="text-sm font-bold text-amber-950">Security checklist</h4>
          </div>
          <ul className="space-y-2">
            {SECURITY_TIPS.map((tip) => (
              <li key={tip} className="flex gap-2 text-[12.5px] leading-relaxed text-amber-900">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-start gap-2.5">
          <Copy className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
          <p className="text-[13px] leading-relaxed text-slate-700">
            Important: copy and save the API key immediately after it is generated. Groq will
            not show the full key again after you leave the page.
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

function StepCard({
  step,
  index,
  copied,
  onCopy,
}: {
  step: Step;
  index: number;
  copied: boolean;
  onCopy: () => void;
}) {
  const color = COLOR_MAP[step.color];
  const Icon = step.icon;

  return (
    <article className={`rounded-2xl border ${color.border} ${color.bg} p-4 shadow-sm`}>
      <div className="flex gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-600 shadow-sm">
          {index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color.icon}`}>
              <Icon className="h-4 w-4" />
            </div>
            <h4 className={`text-[13px] font-bold ${color.title}`}>{step.title}</h4>
            <button
              type="button"
              onClick={onCopy}
              className="ml-auto inline-flex items-center gap-1 rounded-lg border border-white/70 bg-white px-2 py-1 text-[11px] font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="text-[12.5px] leading-relaxed text-gray-700">{step.description}</p>
          <ul className="mt-3 space-y-2">
            {step.details.map((detail) => (
              <li key={detail} className="flex gap-2 text-[12px] leading-relaxed text-gray-600">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${color.dot}`} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-3 font-mono text-[11.5px] leading-relaxed text-emerald-100">
            {step.code}
          </pre>
        </div>
      </div>
    </article>
  );
}
