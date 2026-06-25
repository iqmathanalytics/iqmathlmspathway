"use client";

import { CheckCircle2, Circle, ClipboardList, Info } from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

const STEPS = [
  {
    id: 1,
    title: "Install Dependencies",
    snippet: "!pip install langchain ...",
    color: "emerald",
  },
  {
    id: 2,
    title: "Import Libraries",
    snippet: "from langchain_google_genai ...",
    color: "teal",
  },
  {
    id: 3,
    title: "Configure API Key",
    snippet: 'api_key = "YOUR_GEMINI_KEY"',
    color: "blue",
  },
  {
    id: 4,
    title: "Initialize Chat Model",
    snippet: "llm = ChatGoogleGenerativeAI(...)",
    color: "violet",
  },
  {
    id: 5,
    title: "Run a Simple Prompt",
    snippet: "response = llm.invoke(...)",
    color: "purple",
  },
] as const;

const DONE_COLORS = {
  emerald: { border: "border-emerald-200", bg: "bg-emerald-50", title: "text-emerald-800", check: "text-emerald-500" },
  teal:    { border: "border-teal-200",    bg: "bg-teal-50",    title: "text-teal-800",    check: "text-teal-500"    },
  blue:    { border: "border-blue-200",    bg: "bg-blue-50",    title: "text-blue-800",    check: "text-blue-500"    },
  violet:  { border: "border-violet-200",  bg: "bg-violet-50",  title: "text-violet-800",  check: "text-violet-500"  },
  purple:  { border: "border-purple-200",  bg: "bg-purple-50",  title: "text-purple-800",  check: "text-purple-500"  },
} as const;

export function LangChainStepsChecklist() {
  const { copiedSteps } = useLangChainCopy();
  const count = copiedSteps.size;
  const total = STEPS.length;
  const pct   = Math.round((count / total) * 100);
  const allDone = count === total;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* ── Header ── */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-emerald-600" />
          <p className="text-[13.5px] font-bold text-slate-900">Step Tracker</p>
        </div>
        <p className="mt-0.5 text-[11.5px] text-slate-500">
          Copy each code cell to tick it off
        </p>

        {/* Progress bar */}
        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              {count} of {total} steps copied
            </span>
            <span className={`text-[11px] font-bold ${allDone ? "text-emerald-600" : "text-slate-500"}`}>
              {pct}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                allDone ? "bg-emerald-500" : "bg-emerald-400"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {allDone && (
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <p className="text-[12px] font-semibold text-emerald-700">
              All cells copied — great work!
            </p>
          </div>
        )}
      </div>

      {/* ── Step list ── */}
      <div className="space-y-2 p-4">
        {STEPS.map((step) => {
          const done = copiedSteps.has(step.id);
          const c = DONE_COLORS[step.color];

          return (
            <div
              key={step.id}
              className={`flex items-start gap-3 rounded-xl border px-3 py-3 transition-all duration-300 ${
                done
                  ? `${c.border} ${c.bg}`
                  : "border-gray-100 bg-gray-50"
              }`}
            >
              {/* Check icon */}
              {done ? (
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${c.check}`} />
              ) : (
                <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
              )}

              <div className="min-w-0">
                {/* Step number + title */}
                <p
                  className={`text-[12.5px] font-semibold leading-tight ${
                    done ? c.title : "text-gray-700"
                  }`}
                >
                  <span className="mr-1.5 text-[10.5px] font-normal text-gray-400">
                    Step {step.id}
                  </span>
                  {step.title}
                </p>

                {/* Code snippet preview */}
                <p className="mt-0.5 truncate font-mono text-[10.5px] text-gray-400">
                  {step.snippet}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer note ── */}
      <div className="flex items-start gap-2 border-t border-gray-100 bg-gray-50/60 px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
        <p className="text-[11px] text-gray-400 leading-relaxed">
          This tracker is optional — you can move to the next topic at any time.
        </p>
      </div>
    </div>
  );
}
