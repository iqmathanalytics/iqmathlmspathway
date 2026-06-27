"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

const FLOW_STEPS = [
  { label: "Set\nTemp",      color: "bg-red-100 border-red-300 text-red-800" },
  { label: "Cap\nTokens",    color: "bg-blue-100 border-blue-300 text-blue-800" },
  { label: "Tune\nTop-P",    color: "bg-purple-100 border-purple-300 text-purple-800" },
  { label: "Reduce\nRepeat", color: "bg-teal-100 border-teal-300 text-teal-800" },
  { label: "Test &\nIterate",color: "bg-green-100 border-green-300 text-green-800" },
];

interface JupyterStep {
  id: number;
  title: string;
  subtitle: string;
  language: string;
  code: string;
  note: string;
}

const JUPYTER_STEPS: JupyterStep[] = [
  {
    id: 1,
    title: "Install & import Groq",
    subtitle: "Setup",
    language: "python",
    code: `!pip install groq

import os
from groq import Groq

client = Groq(api_key="YOUR_GROQ_API_KEY")`,
    note: "Replace YOUR_GROQ_API_KEY with your key from console.groq.com/keys",
  },
  {
    id: 2,
    title: "Test temperature = 0 (deterministic)",
    subtitle: "Temperature",
    language: "python",
    code: `def ask(prompt, temperature=0.7, max_tokens=300):
    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[{"role": "user", "content": prompt}],
        temperature=temperature,
        max_tokens=max_tokens,
    )
    return response.choices[0].message.content

# Temperature 0 — always the same answer
for _ in range(3):
    print(ask("Write a tagline for a coffee shop.", temperature=0))
    print("---")`,
    note: "Run this 3 times. All outputs should be identical — temperature=0 is deterministic.",
  },
  {
    id: 3,
    title: "Test temperature = 1.2 (creative)",
    subtitle: "Temperature",
    language: "python",
    code: `# Temperature 1.2 — varied, creative outputs
for _ in range(3):
    print(ask("Write a tagline for a coffee shop.", temperature=1.2))
    print("---")`,
    note: "Compare these outputs to step 2. Notice how much more varied they are.",
  },
  {
    id: 4,
    title: "Limit response length with max_tokens",
    subtitle: "Max Tokens",
    language: "python",
    code: `# Short answer: max_tokens=50
short = ask("Explain machine learning.", max_tokens=50)
print("Short (50 tokens):")
print(short)
print()

# Long answer: max_tokens=400
long = ask("Explain machine learning.", max_tokens=400)
print("Long (400 tokens):")
print(long)`,
    note: "One token ≈ 0.75 words. Use low max_tokens for summaries, high for detailed explanations.",
  },
  {
    id: 5,
    title: "Use top_p for nucleus sampling",
    subtitle: "Top-P",
    language: "python",
    code: `# top_p=0.1 — only the most likely tokens (very focused)
focused = ask(
    "List 3 Python data structures.",
    temperature=1,
    max_tokens=200,
)
# Note: pass top_p via extra_body for Groq
focused_low = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "user", "content": "List 3 Python data structures."}],
    temperature=1,
    max_tokens=200,
    top_p=0.1,
).choices[0].message.content

print("top_p=0.1 (focused):", focused_low[:200])`,
    note: "top_p=0.1 considers only the top 10% probability tokens. Combine with temperature=1 for best effect.",
  },
  {
    id: 6,
    title: "Reduce repetition with frequency_penalty",
    subtitle: "Frequency Penalty",
    language: "python",
    code: `# Without penalty — may repeat words
no_penalty = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "user",
               "content": "Write a paragraph about Python programming."}],
    temperature=0.9,
    max_tokens=150,
    frequency_penalty=0.0,
).choices[0].message.content

# With penalty — more varied vocabulary
with_penalty = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "user",
               "content": "Write a paragraph about Python programming."}],
    temperature=0.9,
    max_tokens=150,
    frequency_penalty=1.5,
).choices[0].message.content

print("No penalty:\\n", no_penalty)
print("\\nWith penalty (1.5):\\n", with_penalty)`,
    note: "Values 0.5–1.5 are typical. Higher values force word variety but can make text feel unnatural.",
  },
  {
    id: 7,
    title: "Build a tuned production call",
    subtitle: "Putting it together",
    language: "python",
    code: `def quality_response(user_prompt: str) -> str:
    """
    Production-quality LLM call with tuned parameters:
    - temperature=0.4  : focused but not robotic
    - max_tokens=512   : enough for most answers
    - top_p=0.9        : slight filtering for coherence
    - frequency_penalty=0.3 : mild repetition reduction
    """
    resp = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {"role": "system",
             "content": "You are a helpful, concise Python tutor."},
            {"role": "user", "content": user_prompt},
        ],
        temperature=0.4,
        max_tokens=512,
        top_p=0.9,
        frequency_penalty=0.3,
    )
    return resp.choices[0].message.content

print(quality_response("What is a decorator in Python?"))`,
    note: "This is a solid starting configuration for most chatbot use-cases. Adjust temperature based on your task.",
  },
];

export function ResponseQualityPanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [copied, setCopied]   = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<Set<number>>(new Set([1]));

  const handleCopy = (step: JupyterStep) => {
    navigator.clipboard.writeText(step.code).then(() => {
      setCopied((prev) => new Set(prev).add(step.id));
      setChecked((prev) => new Set(prev).add(step.id));
      setTimeout(() => {
        setCopied((prev) => {
          const next = new Set(prev);
          next.delete(step.id);
          return next;
        });
      }, 2000);
    });
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const completedCount = checked.size;
  const totalCount = JUPYTER_STEPS.length;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Try in Jupyter — Copy to tick off
        </p>
        <p className="mt-1 text-sm text-emerald-900">
          Copy each code cell to mark the step as complete.
        </p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-emerald-200">
          <div
            className="h-1.5 rounded-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-emerald-700">
          {completedCount} / {totalCount} cells completed
        </p>
      </div>

      {/* Horizontal flow */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Quality tuning pipeline
        </p>
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {FLOW_STEPS.map((step, i) => (
            <div key={step.label} className="flex shrink-0 items-center gap-1">
              <div className={`flex h-14 w-[60px] items-center justify-center rounded-lg border text-center text-[10px] font-semibold leading-tight ${step.color}`}>
                {step.label.split("\n").map((line, j) => (
                  <span key={j} className="block">{line}</span>
                ))}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span className="text-gray-400 text-xs font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Jupyter-style checklist */}
      <div className="space-y-2">
        {JUPYTER_STEPS.map((step) => {
          const done     = checked.has(step.id);
          const isCopied = copied.has(step.id);
          const open     = expanded.has(step.id);

          return (
            <div
              key={step.id}
              className={`rounded-xl border transition-colors ${
                done ? "border-green-300 bg-green-50" : "border-gray-200 bg-white"
              }`}
            >
              {/* Header row */}
              <button
                type="button"
                className="flex w-full items-start gap-2 px-3 py-2.5 text-left"
                onClick={() => toggleExpand(step.id)}
              >
                <span className="mt-0.5 shrink-0">
                  {done
                    ? <CheckCircle2 className="h-5 w-5 text-green-500" />
                    : <Circle className="h-5 w-5 text-gray-300" />
                  }
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wide text-gray-400">
                        Cell {step.id} · {step.subtitle}
                      </span>
                      <p className={`text-sm font-semibold leading-tight ${done ? "text-green-800" : "text-gray-900"}`}>
                        {step.title}
                      </p>
                    </div>
                    {open
                      ? <ChevronUp className="h-4 w-4 shrink-0 text-gray-400" />
                      : <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
                    }
                  </div>
                </div>
              </button>

              {/* Expanded code cell */}
              {open && (
                <div className="border-t border-gray-100 px-3 pb-3 pt-2 space-y-2">
                  {/* Jupyter-style cell */}
                  <div className="rounded-lg overflow-hidden border border-gray-700">
                    {/* Cell toolbar */}
                    <div className="flex items-center justify-between bg-gray-800 px-3 py-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-400">In [{step.id}]:</span>
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                          {step.language}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(step)}
                        className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                          isCopied
                            ? "bg-green-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                        }`}
                      >
                        {isCopied
                          ? <><Check className="h-3 w-3" /> Copied!</>
                          : <><Copy className="h-3 w-3" /> Copy cell</>
                        }
                      </button>
                    </div>
                    <pre className="overflow-x-auto bg-gray-900 px-3 py-2.5 text-[11px] leading-relaxed text-green-300 font-mono whitespace-pre">
                      {step.code}
                    </pre>
                  </div>

                  {/* Note */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">Note</p>
                    <p className="text-xs text-amber-800 mt-0.5">{step.note}</p>
                  </div>

                  <p className="text-[10px] text-gray-400 italic">
                    Copy the cell above to mark this step as complete ✓
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {completedCount === totalCount && (
        <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-center">
          <p className="text-sm font-bold text-green-800">All cells complete!</p>
          <p className="text-xs text-green-700 mt-1">
            You can now tune any LLM call for quality, creativity and cost.
          </p>
        </div>
      )}
    </div>
  );
}
