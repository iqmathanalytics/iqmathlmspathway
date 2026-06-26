"use client";

import { useState } from "react";
import { CheckSquare, Square, ArrowRight, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface CoTTask {
  title: string;
  description: string;
  task: string;
  hint: string;
  exampleAnswer: string;
}

const TASKS: CoTTask[] = [
  {
    title: "Zero-Shot CoT — The Magic Phrase",
    description: 'Add "Let\'s think step by step" to any question and observe how the model\'s output changes.',
    task: 'Try these two prompts and compare outputs:\n\nPrompt A: "A shop sells apples for RM 2 each. Jane buys 7 apples and pays with a RM 20 note. How much change does she get?"\n\nPrompt B: Same question + "Let\'s think step by step."\n\nWhich gives a more reliable answer?',
    hint: "Prompt B should show working: 7 × RM 2 = RM 14, then RM 20 − RM 14 = RM 6.",
    exampleAnswer: "Prompt B output (with CoT):\nStep 1: Cost of 7 apples = 7 × RM 2 = RM 14\nStep 2: Change = RM 20 − RM 14 = RM 6\nAnswer: Jane gets RM 6 change.\n\nPrompt A often skips steps and is more likely to make arithmetic errors.",
  },
  {
    title: "Math Problem — Multi-Step Arithmetic",
    description: "Write a Chain-of-Thought prompt that forces the model to show every calculation step.",
    task: 'Write a CoT prompt to solve:\n"A train travels 60 km/h for 2.5 hours, then 80 km/h for 1.5 hours. What is the total distance?"\n\nInclude at least 3 explicit reasoning steps in your prompt format.',
    hint: "Show the model: Step 1 = first segment distance, Step 2 = second segment distance, Step 3 = total.",
    exampleAnswer: 'Prompt:\n"Solve this step by step:\nQ: A train travels 60 km/h for 2.5 hours, then 80 km/h for 1.5 hours. What is the total distance?\n\nStep 1: Distance in first segment = speed × time = ...\nStep 2: Distance in second segment = ...\nStep 3: Total distance = Step 1 + Step 2 = ...\nAnswer:"\n\nExpected output: 150 + 120 = 270 km.',
  },
  {
    title: "Commonsense Reasoning",
    description: "Use CoT to solve a logic ordering problem.",
    task: '"Anna is older than Ben. Ben is older than Clara. Clara is older than Dan. Who is the youngest? Show your reasoning step by step."',
    hint: "The model should build the chain: Anna > Ben > Clara > Dan, then conclude Dan is youngest.",
    exampleAnswer: "Step 1: Anna > Ben (given)\nStep 2: Ben > Clara (given)\nStep 3: Clara > Dan (given)\nStep 4: Full chain: Anna > Ben > Clara > Dan\nConclusion: Dan is the youngest.",
  },
  {
    title: "Compare: Standard vs CoT",
    description: "Send the same question with and without CoT and document the difference in quality.",
    task: 'Question: "There are 3 red balls, 5 blue balls and 2 green balls in a bag. What is the probability of picking a blue ball?"\n\nSend it twice — once without CoT, once with "Think step by step." Note which answer you trust more and why.',
    hint: "Standard: may just say 1/2. CoT: should show total = 10, blue = 5, P = 5/10 = 0.5.",
    exampleAnswer: "Standard output: 'The probability is 0.5 or 50%.'\n\nCoT output:\nStep 1: Total balls = 3 + 5 + 2 = 10\nStep 2: Blue balls = 5\nStep 3: Probability = 5 / 10 = 0.5\nAnswer: 50%\n\nCoT is more trustworthy because you can verify each step.",
  },
  {
    title: "Few-Shot CoT — Teach the Pattern",
    description: "Provide one worked example in your prompt so the model follows the same reasoning format.",
    task: 'Write a few-shot CoT prompt that gives one solved example, then asks the model to solve a new problem in the same style.\n\nSolved example: "Q: 15 × 12? A: Step 1: 10 × 12 = 120. Step 2: 5 × 12 = 60. Step 3: 120 + 60 = 180."\n\nNew problem: "Q: 24 × 13?"',
    hint: "The model should mimic the exact step format from your example.",
    exampleAnswer: "Q: 24 × 13?\nStep 1: 20 × 13 = 260\nStep 2: 4 × 13 = 52\nStep 3: 260 + 52 = 312\nAnswer: 312",
  },
];

const FLOW_STEPS = ["Input Problem", "Decompose", "Reason Step-by-Step", "Synthesize", "Final Answer"];

export function ChainOfThoughtPanel() {
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

  const allDone = checked.size === TASKS.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
        <BookOpen className="h-4 w-4 shrink-0 text-emerald-600" />
        <div>
          <p className="text-sm font-semibold text-emerald-900">Try It: Chain-of-Thought</p>
          <p className="text-xs text-emerald-600">
            {allDone
              ? "All tasks completed — great reasoning!"
              : `${checked.size} of ${TASKS.length} tasks done`}
          </p>
        </div>
        {allDone && (
          <span className="ml-auto rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Done
          </span>
        )}
      </div>

      {/* Horizontal CoT flow */}
      <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          CoT reasoning pattern
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {FLOW_STEPS.map((step, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className={`rounded-lg border px-2 py-1 text-[10px] font-medium ${
                i === 2
                  ? "border-emerald-300 bg-emerald-100 text-emerald-800 font-semibold"
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
          Step 3 is the key — force the model to reason before it concludes.
        </p>
      </div>

      {/* Task checklist */}
      <div className="flex flex-col gap-3">
        {TASKS.map((task, i) => {
          const done = checked.has(i);
          const open = expanded.has(i);
          return (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                done ? "border-emerald-200 bg-emerald-50/60" : "border-gray-200 bg-white"
              }`}
            >
              {/* Task header */}
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
                    <span className="mr-1.5 text-xs font-bold text-gray-400">Task {i + 1}</span>
                    {task.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{task.description}</p>
                </div>
              </button>

              {/* Expandable task + answer */}
              <div className="border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleExpand(i)}
                  className="flex w-full items-center justify-between px-4 py-2"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                    Exercise &amp; Answer
                  </span>
                  {open
                    ? <ChevronUp className="h-3.5 w-3.5 text-gray-400" />
                    : <ChevronDown className="h-3.5 w-3.5 text-gray-400" />}
                </button>

                {open && (
                  <div className="px-4 pb-3 space-y-2.5">
                    {/* Task prompt */}
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">
                        Your task
                      </p>
                      <pre className="whitespace-pre-wrap text-xs text-gray-700 leading-relaxed">
                        {task.task}
                      </pre>
                    </div>
                    {/* Hint */}
                    <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-500 mb-0.5">
                        Hint
                      </p>
                      <p className="text-xs text-amber-800">{task.hint}</p>
                    </div>
                    {/* Example answer */}
                    <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-500 mb-1">
                        Example answer
                      </p>
                      <pre className="whitespace-pre-wrap text-[11px] text-emerald-800 font-mono leading-relaxed">
                        {task.exampleAnswer}
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
        <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-emerald-900">All CoT tasks completed!</p>
          <p className="mt-0.5 text-xs text-emerald-700">
            You can now apply chain-of-thought reasoning to any multi-step problem.
          </p>
        </div>
      )}
    </div>
  );
}
