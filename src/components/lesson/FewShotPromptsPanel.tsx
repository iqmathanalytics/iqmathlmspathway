"use client";

import { useState } from "react";
import { CheckSquare, Square, ArrowRight, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface FewShotStep {
  title: string;
  description: string;
  exercise: string;
  exampleAnswer: string;
}

const STEPS: FewShotStep[] = [
  {
    title: "User Query Initialization",
    description: "Define the input query that sets the task context for the model.",
    exercise: "Write a user query for a sentiment classification task. What sentence would you ask the model to classify?",
    exampleAnswer: 'Query: "Classify the sentiment of this sentence: \'The delivery was incredibly fast and the product looks great!\'"',
  },
  {
    title: "Choose Example Source",
    description: "Decide whether to use static (pre-written) or dynamic (retrieved) examples.",
    exercise: "Write 2 static examples of sentiment classification — one positive, one negative — in input → output format.",
    exampleAnswer: 'Sentence: "I love this product!" → Sentiment: Positive\nSentence: "Worst experience ever." → Sentiment: Negative',
  },
  {
    title: "Retrieve Relevant Examples",
    description: "If using dynamic retrieval, select the top-k most semantically similar examples.",
    exercise: "List 3 features you would look for when selecting good examples from a vector store for your sentiment task.",
    exampleAnswer: "1. Similar domain (product reviews)\n2. Similar sentence length\n3. Clear, unambiguous sentiment label",
  },
  {
    title: "Construct the Prompt",
    description: "Combine examples + optional instructions + the user query into a structured prompt.",
    exercise: 'Build a complete few-shot prompt to classify whether a sentence is "Formal" or "Informal". Use 2 examples.',
    exampleAnswer: 'Sentence: "Please submit the report by Friday." → Tone: Formal\nSentence: "Hey, send me that doc asap!" → Tone: Informal\nSentence: "Could you kindly review the attached document?" → Tone:',
  },
  {
    title: "Model Processing",
    description: "The LLM reads the prompt, applies in-context learning, and identifies patterns from examples.",
    exercise: "Paste your prompt from Step 4 into the Groq Playground. Observe: does the model follow the pattern? What happens if you remove one example?",
    exampleAnswer: "With 2 examples: consistent formal/informal classification. With 0 examples (zero-shot): model may use different label names or be less precise.",
  },
  {
    title: "Output Generation",
    description: "The model produces a response matching the pattern and format shown in the examples.",
    exercise: "Compare outputs for zero-shot (no examples), one-shot (1 example), and few-shot (3 examples) on the same query. Which is most consistent?",
    exampleAnswer: "Few-shot (3 examples) gives the most consistent format and label names. Zero-shot works but may vary in phrasing. One-shot is a good middle ground for simple tasks.",
  },
];

export function FewShotPromptsPanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  function toggleExpand(i: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const allDone = checked.size === STEPS.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3">
        <BookOpen className="h-4 w-4 shrink-0 text-purple-600" />
        <div>
          <p className="text-sm font-semibold text-purple-900">Try It: Few-Shot Prompting</p>
          <p className="text-xs text-purple-600">
            {allDone
              ? "All steps practised — great work!"
              : `${checked.size} of ${STEPS.length} steps done`}
          </p>
        </div>
        {allDone && (
          <span className="ml-auto rounded-full bg-purple-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Done
          </span>
        )}
      </div>

      {/* Horizontal flow */}
      <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          The 6-step process
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {STEPS.map((step, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className={`rounded-lg border px-2 py-1 text-[10px] font-medium transition-colors ${
                checked.has(i)
                  ? "border-purple-300 bg-purple-100 text-purple-800"
                  : "border-gray-200 bg-gray-50 text-gray-700"
              }`}>
                {i + 1}. {step.title.split(" ")[0]}
              </span>
              {i < STEPS.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-gray-400" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Steps checklist with exercises */}
      <div className="flex flex-col gap-3">
        {STEPS.map((step, i) => {
          const done = checked.has(i);
          const open = expanded.has(i);
          return (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                done ? "border-purple-200 bg-purple-50/60" : "border-gray-200 bg-white"
              }`}
            >
              {/* Step header — click to check off */}
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span className="mt-0.5 shrink-0">
                  {done
                    ? <CheckSquare className="h-4 w-4 text-purple-600" />
                    : <Square className="h-4 w-4 text-gray-400" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${done ? "text-purple-800 line-through decoration-purple-400" : "text-gray-900"}`}>
                    <span className="mr-1.5 text-xs font-bold text-gray-400">Step {i + 1}</span>
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{step.description}</p>
                </div>
              </button>

              {/* Exercise — collapsible */}
              <div className="border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleExpand(i)}
                  className="flex w-full items-center justify-between px-4 py-2 text-left"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-purple-600">
                    Exercise
                  </span>
                  {open
                    ? <ChevronUp className="h-3.5 w-3.5 text-gray-400" />
                    : <ChevronDown className="h-3.5 w-3.5 text-gray-400" />}
                </button>

                {open && (
                  <div className="px-4 pb-3 space-y-2.5">
                    <p className="text-xs text-gray-700">{step.exercise}</p>
                    <div className="rounded-lg border border-purple-100 bg-purple-50 p-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-purple-500 mb-1">
                        Example answer
                      </p>
                      <pre className="whitespace-pre-wrap text-[11px] text-purple-800 font-mono leading-relaxed">
                        {step.exampleAnswer}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {allDone && (
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-purple-900">All 6 steps practised!</p>
          <p className="mt-0.5 text-xs text-purple-700">
            You can now design few-shot prompts from scratch.
          </p>
        </div>
      )}
    </div>
  );
}
