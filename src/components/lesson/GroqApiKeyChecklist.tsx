"use client";

import { CheckCircle2, Circle, ClipboardList, Info, KeyRound, LockKeyhole } from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

const STEPS = [
  {
    id: 1,
    title: "Open Groq Cloud",
    snippet: "console.groq.com",
    color: "emerald",
  },
  {
    id: 2,
    title: "Go to Developers",
    snippet: "Menu → Developers",
    color: "teal",
  },
  {
    id: 3,
    title: "Create API Key",
    snippet: "API Keys → Create API Key",
    color: "blue",
  },
  {
    id: 4,
    title: "Copy and Save",
    snippet: "Store in password manager",
    color: "violet",
  },
  {
    id: 5,
    title: "Use Environment Variable",
    snippet: "GROQ_API_KEY=...",
    color: "amber",
  },
] as const;

const COLORS = {
  emerald: { border: "border-emerald-200", bg: "bg-emerald-50", title: "text-emerald-800", check: "text-emerald-500" },
  teal:    { border: "border-teal-200",    bg: "bg-teal-50",    title: "text-teal-800",    check: "text-teal-500"    },
  blue:    { border: "border-blue-200",    bg: "bg-blue-50",    title: "text-blue-800",    check: "text-blue-500"    },
  violet:  { border: "border-violet-200",  bg: "bg-violet-50",  title: "text-violet-800",  check: "text-violet-500"  },
  amber:   { border: "border-amber-200",   bg: "bg-amber-50",   title: "text-amber-800",   check: "text-amber-500"   },
} as const;

export function GroqApiKeyChecklist() {
  const { copiedSteps } = useLangChainCopy();
  const completed = Math.min(copiedSteps.size, STEPS.length);
  const pct = Math.round((completed / STEPS.length) * 100);
  const allDone = completed === STEPS.length;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-cyan-50 px-4 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-emerald-600" />
          <p className="text-[13.5px] font-bold text-slate-900">Groq API Key Checklist</p>
        </div>
        <p className="mt-0.5 text-[11.5px] text-slate-500">
          Follow these steps in Groq Cloud
        </p>

        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              {completed} of {STEPS.length} steps copied
            </span>
            <span className={`text-[11px] font-bold ${allDone ? "text-emerald-600" : "text-slate-500"}`}>{pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full ${allDone ? "bg-emerald-500" : "bg-emerald-400"}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="space-y-2 p-4">
        {STEPS.map((step) => {
          const c = COLORS[step.color];
          const done = copiedSteps.has(step.id);
          return (
            <div
              key={step.id}
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
                    Step {step.id}
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
        <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
          <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
          <p className="text-[11px] leading-relaxed text-amber-800">
            Never commit a real API key. Store it as an environment variable.
          </p>
        </div>
        <div className="flex items-start gap-2 px-1">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
          <p className="text-[11px] leading-relaxed text-gray-400">
            After you leave the key screen, Groq will not show the full key again.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2">
          <KeyRound className="h-3.5 w-3.5 text-emerald-600" />
          <p className="font-mono text-[11px] font-semibold text-emerald-800">
            GROQ_API_KEY=your_key_here
          </p>
        </div>
      </div>
    </div>
  );
}
