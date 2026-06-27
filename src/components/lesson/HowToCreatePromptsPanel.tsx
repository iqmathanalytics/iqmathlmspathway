"use client";

import { useState } from "react";
import { CheckSquare, Square, ArrowRight, BookOpen } from "lucide-react";

interface PromptStep {
  title: string;
  description: string;
  example: string;
}

const PROMPT_STEPS: PromptStep[] = [
  {
    title: "Define the Task",
    description: "Clearly state what you want the AI to do.",
    example: "Write a summary of the following article.",
  },
  {
    title: "Be Specific",
    description: "Provide necessary details and context to guide the AI.",
    example: "Summarize in three bullet points, focusing on environmental impacts.",
  },
  {
    title: "Use Clear Instructions",
    description: "Avoid ambiguity; state requirements directly.",
    example: "List three pros and three cons of remote work for software engineers.",
  },
  {
    title: "Consider Audience",
    description: "Indicate the target reader or use case if relevant.",
    example: "Explain blockchain technology to high school students.",
  },
  {
    title: "Prefer Open-Ended",
    description: "Encourage richer, more informative responses.",
    example: "What are some innovative ways small businesses can use AI in marketing?",
  },
];

export function HowToCreatePromptsPanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const allDone = checked.size === PROMPT_STEPS.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
        <BookOpen className="h-4 w-4 shrink-0 text-violet-600" />
        <div>
          <p className="text-sm font-semibold text-violet-900">How to Create AI Prompts</p>
          <p className="text-xs text-violet-600">
            {allDone
              ? "All steps practised — you are ready to write prompts!"
              : `${checked.size} of ${PROMPT_STEPS.length} steps done`}
          </p>
        </div>
        {allDone && (
          <span className="ml-auto rounded-full bg-violet-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Done
          </span>
        )}
      </div>

      {/* Horizontal flow */}
      <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          The pattern
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {PROMPT_STEPS.map((step, i) => (
            <span key={i} className="flex items-center gap-1">
              <span
                className={`rounded-lg border px-2 py-1 text-[11px] font-medium transition-colors ${
                  checked.has(i)
                    ? "border-violet-300 bg-violet-100 text-violet-800"
                    : "border-gray-200 bg-gray-50 text-gray-700"
                }`}
              >
                {i + 1}. {step.title}
              </span>
              {i < PROMPT_STEPS.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-gray-400" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="flex flex-col gap-3">
        {PROMPT_STEPS.map((step, i) => {
          const done = checked.has(i);
          return (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                done ? "border-violet-200 bg-violet-50/60" : "border-gray-200 bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span className="mt-0.5 shrink-0">
                  {done
                    ? <CheckSquare className="h-4 w-4 text-violet-600" />
                    : <Square className="h-4 w-4 text-gray-400" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${done ? "text-violet-800 line-through decoration-violet-400" : "text-gray-900"}`}>
                    <span className="mr-1.5 text-xs font-bold text-gray-400">Step {i + 1}</span>
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{step.description}</p>
                </div>
              </button>

              <div className="border-t border-gray-100 px-4 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">
                  Example prompt
                </p>
                <p className="text-xs italic text-gray-600">
                  &ldquo;{step.example}&rdquo;
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {allDone && (
        <div className="rounded-xl border-2 border-violet-300 bg-violet-50 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-violet-900">All steps practised!</p>
          <p className="mt-0.5 text-xs text-violet-700">
            Move to the next topic to build on these skills.
          </p>
        </div>
      )}
    </div>
  );
}
