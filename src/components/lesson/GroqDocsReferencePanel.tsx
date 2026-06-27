"use client";

import type { ElementType } from "react";
import {
  CheckCircle2,
  Circle,
  ClipboardList,
  Code2,
  Gauge,
  Info,
  Link2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

type PanelData = {
  title: string;
  subtitle: string;
  steps: Array<{
    title: string;
    snippet: string;
    done: boolean;
    color: keyof typeof COLORS;
  }>;
  callout: string;
};

const PANELS: Record<string, PanelData> = {
  "ai-m3-t2": {
    title: "Quickstart Tracker",
    subtitle: "OpenAI-compatible Groq call",
    steps: [
      { title: "Install OpenAI SDK", snippet: "pip install openai", done: true, color: "emerald" },
      { title: "Set GROQ_API_KEY", snippet: "env var, not code", done: true, color: "teal" },
      { title: "Use Groq Base URL", snippet: "api.groq.com/openai/v1", done: true, color: "blue" },
      { title: "Call Responses API", snippet: "client.responses.create", done: false, color: "violet" },
      { title: "Print Output Text", snippet: "response.output_text", done: false, color: "amber" },
    ],
    callout: "Groq's overview shows Python, JavaScript, and curl examples using the same base URL pattern.",
  },
  "ai-m3-t3": {
    title: "Response Checklist",
    subtitle: "From raw response to app output",
    steps: [
      { title: "Send Input", snippet: "input: user prompt", done: true, color: "emerald" },
      { title: "Read Output", snippet: "response.output_text", done: true, color: "blue" },
      { title: "Validate Shape", snippet: "structured output", done: false, color: "violet" },
      { title: "Track Metrics", snippet: "latency + tokens", done: false, color: "teal" },
      { title: "Handle Failures", snippet: "fallback response", done: false, color: "amber" },
    ],
    callout: "Start with output_text, then add validation, moderation, and monitoring as the app matures.",
  },
  "ai-m3-t4": {
    title: "Model Choice Card",
    subtitle: "Choose based on the job",
    steps: [
      { title: "Define Task", snippet: "chat, code, OCR, speech", done: true, color: "emerald" },
      { title: "Compare Latency", snippet: "interactive speed", done: true, color: "teal" },
      { title: "Check Features", snippet: "tools, structured output", done: false, color: "blue" },
      { title: "Test Quality", snippet: "your real prompts", done: false, color: "violet" },
      { title: "Watch Limits", snippet: "rate limits + cost", done: false, color: "amber" },
    ],
    callout: "The best Groq model is the one that fits your exact workflow, not just the most popular name.",
  },
  "ai-m3-t5": {
    title: "Production Checklist",
    subtitle: "Before shipping a Groq app",
    steps: [
      { title: "Protect Keys", snippet: "server-side env vars", done: true, color: "emerald" },
      { title: "Handle Errors", snippet: "try / except", done: true, color: "blue" },
      { title: "Respect Rate Limits", snippet: "backoff + retry caps", done: false, color: "amber" },
      { title: "Optimize Latency", snippet: "model + tier choice", done: false, color: "teal" },
      { title: "Monitor Metrics", snippet: "logs + Prometheus", done: false, color: "violet" },
    ],
    callout: "Groq's production docs call out latency, security, metrics, rate limits, and error codes as readiness concerns.",
  },
};

const COLORS = {
  emerald: { border: "border-emerald-200", bg: "bg-emerald-50", title: "text-emerald-800", check: "text-emerald-500" },
  teal:    { border: "border-teal-200",    bg: "bg-teal-50",    title: "text-teal-800",    check: "text-teal-500"    },
  blue:    { border: "border-blue-200",    bg: "bg-blue-50",    title: "text-blue-800",    check: "text-blue-500"    },
  violet:  { border: "border-violet-200",  bg: "bg-violet-50",  title: "text-violet-800",  check: "text-violet-500"  },
  amber:   { border: "border-amber-200",   bg: "bg-amber-50",   title: "text-amber-800",   check: "text-amber-500"   },
} as const;

export function GroqDocsReferencePanel({ topicId }: { topicId?: string }) {
  const panel = PANELS[topicId ?? ""] ?? PANELS["ai-m3-t2"];
  const { copiedSteps } = useLangChainCopy();
  const completed = Math.min(copiedSteps.size, panel.steps.length);
  const pct = Math.round((completed / panel.steps.length) * 100);
  const allDone = completed === panel.steps.length;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-orange-50 to-emerald-50 px-4 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-orange-600" />
          <p className="text-[13.5px] font-bold text-slate-900">{panel.title}</p>
        </div>
        <p className="mt-0.5 text-[11.5px] text-slate-500">{panel.subtitle}</p>

        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              {completed} of {panel.steps.length} steps copied
            </span>
            <span className={`text-[11px] font-bold ${allDone ? "text-orange-600" : "text-slate-500"}`}>{pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full ${allDone ? "bg-orange-500" : "bg-orange-400"}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="space-y-2 p-4">
        {panel.steps.map((step, index) => {
          const c = COLORS[step.color];
          const done = copiedSteps.has(index + 1);
          return (
            <div
              key={step.title}
              className={`flex items-start gap-3 rounded-xl border px-3 py-3 ${
                done ? `${c.border} ${c.bg}` : "border-gray-100 bg-gray-50"
              }`}
            >
              {done ? (
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${c.check}`} />
              ) : (
                <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
              )}
              <div className="min-w-0">
                <p className={`text-[12.5px] font-semibold leading-tight ${done ? c.title : "text-gray-700"}`}>
                  <span className="mr-1.5 text-[10.5px] font-normal text-gray-400">
                    Step {index + 1}
                  </span>
                  {step.title}
                </p>
                <p className="mt-0.5 truncate font-mono text-[10.5px] text-gray-400">
                  {step.snippet}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2 border-t border-gray-100 bg-gray-50/60 px-4 py-3">
        <div className="flex items-start gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2">
          <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-600" />
          <p className="text-[11px] leading-relaxed text-orange-800">{panel.callout}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <MiniPill icon={Link2} text="OpenAI-compatible" />
          <MiniPill icon={Code2} text="Responses API" />
          <MiniPill icon={Gauge} text="Low latency" />
          <MiniPill icon={ShieldCheck} text="Secure keys" />
        </div>
        <div className="flex items-start gap-2 px-1">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
          <p className="text-[11px] leading-relaxed text-gray-400">
            Copy the runnable code sample on the left to mark this guide complete.
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniPill({ icon: Icon, text }: { icon: ElementType; text: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5">
      <Icon className="h-3.5 w-3.5 text-slate-500" />
      <span className="text-[10.5px] font-semibold text-slate-600">{text}</span>
    </div>
  );
}
