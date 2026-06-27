"use client";

import { useState } from "react";
import { CheckSquare, Square, ArrowRight, BookOpen, Copy, Check } from "lucide-react";

interface PracticeItem {
  title: string;
  tip: string;
  prompt: string;
}

const PRACTICES: PracticeItem[] = [
  {
    title: "Be Clear and Specific",
    tip: "Precise requests reduce ambiguity and produce focused answers.",
    prompt: "List three key benefits of renewable energy for small businesses, with one real-world example for each.",
  },
  {
    title: "Specify Response Format",
    tip: "Tell the model exactly what structure you want.",
    prompt: "Summarize the latest trends in AI technology in 100 words, using bullet points.",
  },
  {
    title: "Provide Context",
    tip: "Background context anchors the response to your situation.",
    prompt: "As a financial analyst, explain the top three investment options for beginners with one example each.",
  },
  {
    title: "Structure Step-by-Step",
    tip: "Complex tasks become clearer when you ask for sequential steps.",
    prompt: "Explain how to set up a Python virtual environment, step by step, including the exact commands.",
  },
  {
    title: "Set Output Constraints",
    tip: "Define word limits, tone or complexity to match your needs.",
    prompt: "Explain machine learning in 150 words in a friendly tone for complete beginners.",
  },
  {
    title: "Use Action Verbs",
    tip: "Starting with 'describe', 'analyze', 'compare' guides the depth of response.",
    prompt: "Compare the advantages and disadvantages of SQL versus NoSQL databases for a startup.",
  },
  {
    title: "Ask for Multiple Perspectives",
    tip: "Multiple viewpoints produce more balanced, comprehensive answers.",
    prompt: "Provide solutions for reducing food waste from the perspectives of a consumer, a restaurant owner and a government policy maker.",
  },
  {
    title: "Clarify Target Audience",
    tip: "Naming your audience adjusts language, tone and complexity automatically.",
    prompt: "Explain how the internet works to a 12-year-old, using a simple analogy.",
  },
  {
    title: "Use Conditional Prompts",
    tip: "If-then conditions make responses more focused and context-specific.",
    prompt: "If someone wants to switch careers from accounting to software engineering, what three steps should they take first?",
  },
  {
    title: "Request Examples or Case Studies",
    tip: "Concrete examples make abstract concepts tangible and easier to remember.",
    prompt: "Explain the benefits of automation in healthcare and provide one real-world case study of its successful implementation.",
  },
];

const FLOW_STEPS = ["Be Specific", "Add Context", "Set Format", "Use Verbs", "Iterate"];

export function BestPracticesPanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [copying, setCopying] = useState<number | null>(null);

  function handleCopy(i: number, text: string) {
    void navigator.clipboard.writeText(text).then(() => {
      setCopying(i);
      setChecked((prev) => new Set(prev).add(i));
      setTimeout(() => setCopying(null), 1800);
    });
  }

  function toggleCheck(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const allDone = checked.size === PRACTICES.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
        <BookOpen className="h-4 w-4 shrink-0 text-blue-600" />
        <div>
          <p className="text-sm font-semibold text-blue-900">Try These Prompts</p>
          <p className="text-xs text-blue-600">
            {allDone
              ? "All prompts copied and tried — well done!"
              : `${checked.size} of ${PRACTICES.length} tried`}
          </p>
        </div>
        {allDone && (
          <span className="ml-auto rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Done
          </span>
        )}
      </div>

      {/* Horizontal flow */}
      <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Core practice areas
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {FLOW_STEPS.map((step, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-800">
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-gray-400" />
              )}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-gray-400">
          Copy a prompt → paste it into an AI tool → observe the output.
        </p>
      </div>

      {/* Practice items */}
      <div className="flex flex-col gap-3">
        {PRACTICES.map((item, i) => {
          const done = checked.has(i);
          const isCopying = copying === i;
          return (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                done ? "border-blue-200 bg-blue-50/50" : "border-gray-200 bg-white"
              }`}
            >
              {/* Header row */}
              <button
                type="button"
                onClick={() => toggleCheck(i)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span className="mt-0.5 shrink-0">
                  {done
                    ? <CheckSquare className="h-4 w-4 text-blue-600" />
                    : <Square className="h-4 w-4 text-gray-400" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${done ? "text-blue-800 line-through decoration-blue-400" : "text-gray-900"}`}>
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{item.tip}</p>
                </div>
              </button>

              {/* Prompt + copy button */}
              <div className="border-t border-gray-100 px-4 pb-3 pt-2">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                  Example prompt — copy &amp; try
                </p>
                <div className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2.5">
                  <p className="flex-1 text-xs italic text-gray-700 leading-relaxed">
                    &ldquo;{item.prompt}&rdquo;
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy(i, item.prompt)}
                    className={`shrink-0 flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                      isCopying
                        ? "bg-green-100 text-green-700"
                        : done
                          ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                    title="Copy prompt and mark as tried"
                  >
                    {isCopying ? (
                      <><Check className="h-3 w-3" /><span>Copied!</span></>
                    ) : (
                      <><Copy className="h-3 w-3" /><span>Copy</span></>
                    )}
                  </button>
                </div>
                {isCopying && (
                  <p className="mt-1.5 text-[11px] text-green-600 font-medium">
                    ✓ Copied! Paste it into an AI tool and observe the result.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {allDone && (
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-blue-900">All 10 practices tried!</p>
          <p className="mt-0.5 text-xs text-blue-700">
            You now have a full toolkit for writing effective AI prompts.
          </p>
        </div>
      )}
    </div>
  );
}
