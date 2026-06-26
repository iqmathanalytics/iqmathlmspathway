"use client";

import { useState } from "react";
import { CheckSquare, Square, ArrowRight, BookOpen, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

interface DecisionRow {
  instruction: string;
  goesIn: "system" | "user" | "either";
  why: string;
}

const DECISION_ROWS: DecisionRow[] = [
  { instruction: "Role / persona", goesIn: "system", why: "Stable across the whole conversation." },
  { instruction: "Tone / voice constraints", goesIn: "system", why: "Stable; defines house style." },
  { instruction: "Format rules (length, structure)", goesIn: "system", why: "Stable across requests." },
  { instruction: "Refusal / safety policy", goesIn: "system", why: "Stable and security-relevant." },
  { instruction: "Domain anchor (what expertise)", goesIn: "system", why: "Defines which knowledge to apply." },
  { instruction: "Output schema (JSON shape)", goesIn: "system", why: "Reused on every call." },
  { instruction: "Few-shot examples", goesIn: "system", why: "Teach the pattern once, reuse it." },
  { instruction: "Today's task or question", goesIn: "user", why: "Belongs in the user prompt." },
  { instruction: "Specific data to operate on", goesIn: "user", why: "Per-request input." },
  { instruction: "Per-request context", goesIn: "user", why: "Changes every call." },
  { instruction: "Variable details (audience, brand)", goesIn: "either", why: "Reused often → system; one-off → user." },
];

const BADGE = {
  system: { label: "System", classes: "bg-indigo-100 text-indigo-700 border-indigo-200", icon: CheckCircle2, iconClass: "text-indigo-500" },
  user:   { label: "User",   classes: "bg-blue-100 text-blue-700 border-blue-200",       icon: XCircle,      iconClass: "text-blue-500" },
  either: { label: "Either", classes: "bg-amber-100 text-amber-700 border-amber-200",    icon: HelpCircle,   iconClass: "text-amber-500" },
};

const FLOW_STEPS = ["Identify instruction", "Stays constant?", "System Prompt", "User Prompt"];

export function SystemVsUserGuidePanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const allDone = checked.size === DECISION_ROWS.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3">
        <BookOpen className="h-4 w-4 shrink-0 text-indigo-600" />
        <div>
          <p className="text-sm font-semibold text-indigo-900">System vs User Prompt Guide</p>
          <p className="text-xs text-indigo-600">
            {allDone
              ? "All instruction types reviewed!"
              : `${checked.size} of ${DECISION_ROWS.length} reviewed`}
          </p>
        </div>
        {allDone && (
          <span className="ml-auto rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Done
          </span>
        )}
      </div>

      {/* Horizontal decision flow */}
      <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Decision flow
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {FLOW_STEPS.map((step, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className={`rounded-lg border px-2 py-1 text-[11px] font-medium ${
                i === 2
                  ? "border-indigo-300 bg-indigo-100 text-indigo-800"
                  : i === 3
                    ? "border-blue-300 bg-blue-100 text-blue-800"
                    : "border-gray-200 bg-gray-50 text-gray-700"
              }`}>
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-gray-400" />
              )}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-gray-400">
          The key question: does this instruction stay the same across requests?
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 px-1">
        {(["system", "user", "either"] as const).map((type) => {
          const b = BADGE[type];
          const Icon = b.icon;
          return (
            <span key={type} className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${b.classes}`}>
              <Icon className={`h-3 w-3 ${b.iconClass}`} />
              {b.label}
            </span>
          );
        })}
      </div>

      {/* Decision checklist */}
      <div className="flex flex-col gap-2">
        {DECISION_ROWS.map((row, i) => {
          const done = checked.has(i);
          const badge = BADGE[row.goesIn];
          const Icon = badge.icon;
          return (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                done ? "border-indigo-200 bg-indigo-50/50" : "border-gray-200 bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-3 px-3 py-2.5 text-left"
              >
                <span className="mt-0.5 shrink-0">
                  {done
                    ? <CheckSquare className="h-4 w-4 text-indigo-600" />
                    : <Square className="h-4 w-4 text-gray-400" />}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={`text-sm font-medium ${done ? "text-indigo-700 line-through decoration-indigo-300" : "text-gray-900"}`}>
                      {row.instruction}
                    </p>
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badge.classes}`}>
                      <Icon className={`h-2.5 w-2.5 ${badge.iconClass}`} />
                      {badge.label}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">{row.why}</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {allDone && (
        <div className="rounded-xl border-2 border-indigo-300 bg-indigo-50 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-indigo-900">Decision table mastered!</p>
          <p className="mt-0.5 text-xs text-indigo-700">
            Move to the next topic to keep building prompt engineering skills.
          </p>
        </div>
      )}
    </div>
  );
}
