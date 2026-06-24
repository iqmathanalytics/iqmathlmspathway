"use client";

import { useState } from "react";
import { CheckSquare, Square, Copy, Check, ExternalLink, Terminal } from "lucide-react";
import type { SetupStep } from "@/lib/types";

interface SetupChecklistPanelProps {
  steps: SetupStep[];
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
      title="Copy"
    >
      {copied ? (
        <><Check className="h-3.5 w-3.5 text-green-400" /><span className="text-green-400">Copied</span></>
      ) : (
        <><Copy className="h-3.5 w-3.5" /><span>Copy</span></>
      )}
    </button>
  );
}

export function SetupChecklistPanel({ steps }: SetupChecklistPanelProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const allDone = checked.size === steps.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
        <CheckSquare className="h-4 w-4 shrink-0 text-emerald-600" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-emerald-900">Setup Checklist</p>
          <p className="text-xs text-emerald-600">
            {allDone
              ? "All steps complete — you are ready to code!"
              : `${checked.size} of ${steps.length} steps done`}
          </p>
        </div>
        {allDone && (
          <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Done
          </span>
        )}
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => {
          const done = checked.has(i);
          return (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                done ? "border-emerald-200 bg-emerald-50/60" : "border-gray-200 bg-white"
              }`}
            >
              {/* Step header */}
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span className="mt-0.5 shrink-0">
                  {done
                    ? <CheckSquare className="h-4 w-4 text-emerald-600" />
                    : <Square className="h-4 w-4 text-gray-400" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${done ? "text-emerald-800 line-through decoration-emerald-400" : "text-gray-900"}`}>
                    <span className="mr-1.5 text-xs font-bold text-gray-400">Step {i + 1}</span>
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="mt-0.5 text-xs text-gray-500">{step.description}</p>
                  )}
                </div>
              </button>

              {/* Commands */}
              {step.commands && step.commands.length > 0 && (
                <div className="border-t border-gray-100 bg-[#0d1117] overflow-hidden rounded-b-xl">
                  <div className="flex items-center justify-between border-b border-gray-800 bg-[#161b22] px-3 py-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Terminal className="h-3 w-3" />
                      Terminal / Notebook
                    </span>
                    <CopyButton text={step.commands.join("\n")} />
                  </div>
                  <pre className="overflow-x-auto p-3 text-xs leading-relaxed text-gray-200">
                    <code>{step.commands.join("\n")}</code>
                  </pre>
                </div>
              )}

              {/* Note */}
              {step.note && (
                <p className="border-t border-gray-100 px-4 py-2 text-xs text-gray-500 italic">
                  {step.note}
                </p>
              )}

              {/* External link */}
              {step.link && (
                <div className="border-t border-gray-100 px-4 py-2">
                  <a
                    href={step.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-violet-700 hover:text-violet-900"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {step.link.label}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Done message */}
      {allDone && (
        <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-emerald-900">Setup complete!</p>
          <p className="mt-0.5 text-xs text-emerald-700">
            Move to the next topic to start writing real code.
          </p>
        </div>
      )}
    </div>
  );
}
