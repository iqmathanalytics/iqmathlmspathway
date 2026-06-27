"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from "lucide-react";

const FLOW_STEPS = [
  { label: "User sends\nmessage", color: "bg-violet-100 border-violet-300 text-violet-800" },
  { label: "App builds\nhistory list", color: "bg-blue-100 border-blue-300 text-blue-800" },
  { label: "Full history\nsent to AI", color: "bg-teal-100 border-teal-300 text-teal-800" },
  { label: "AI replies\nwith context", color: "bg-green-100 border-green-300 text-green-800" },
  { label: "Response added\nto history", color: "bg-orange-100 border-orange-300 text-orange-800" },
];

interface Exercise {
  id: number;
  title: string;
  description: string;
  prompt: string;
  followUp?: string;
  hint: string;
  expected: string;
}

const EXERCISES: Exercise[] = [
  {
    id: 1,
    title: "Send a factual question",
    description: "Open any AI chatbot (ChatGPT, Groq, etc.) and send the prompt below. Note the exact response.",
    prompt: "How many neutrons are in a hydrogen nucleus?",
    hint: "A hydrogen nucleus (proton) has 0 neutrons.",
    expected: "AI confirms a standard hydrogen nucleus has 0 neutrons.",
  },
  {
    id: 2,
    title: "Follow up without repeating context",
    description: "WITHOUT clearing the chat, send the follow-up below. Notice how the AI uses the previous context automatically.",
    prompt: "What about the isotopes?",
    hint: "Deuterium has 1 neutron, tritium has 2 neutrons.",
    expected: "AI describes deuterium (1 neutron) and tritium (2 neutrons) because it remembers the hydrogen context.",
  },
  {
    id: 3,
    title: "Clear chat and retry",
    description: "Now CLEAR the chat session and send the exact same follow-up prompt. Compare the response to step 2.",
    prompt: "What about the isotopes?",
    hint: "Without context, the AI doesn't know you mean hydrogen.",
    expected: "AI gives a generic answer about isotopes in general — no mention of hydrogen.",
  },
  {
    id: 4,
    title: "Inject memory via system prompt",
    description: "Start a new chat. Set a system prompt that 'remembers' user info, then ask a question that uses it.",
    prompt: "System: The user's name is Alex and they are a Python developer.\nUser: What project should I work on this weekend?",
    hint: "The system prompt is passed every turn, giving the AI persistent 'memory'.",
    expected: "AI recommends Python-related projects and addresses Alex by name.",
  },
  {
    id: 5,
    title: "Test window memory limits",
    description: "Send a fact early, then have a long back-and-forth conversation (10+ turns), then ask about the early fact.",
    prompt: "My favorite color is indigo. [Then have 10+ unrelated exchanges, then ask:] What is my favorite color?",
    hint: "Models have a context window limit. Old messages may be dropped.",
    expected: "With buffer memory, the AI may forget early messages once the window fills up.",
  },
  {
    id: 6,
    title: "Build a summary memory prompt",
    description: "Manually write a prompt that summarizes a past conversation and includes it as context for the next turn.",
    prompt: "Summary of our conversation so far: The user asked about Python decorators and we discussed @property and @staticmethod. Now the user asks: Can you show me a real-world example of @property?",
    hint: "This mimics how summary memory works in LangChain and other frameworks.",
    expected: "AI gives a relevant @property example, using the summary as grounding context.",
  },
];

export function ChatMemoryPanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<Set<number>>(new Set([1]));

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
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
  const totalCount = EXERCISES.length;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Try It: Chat Memory Exercises
        </p>
        <p className="mt-1 text-sm text-teal-900">
          Complete each exercise in any AI chatbot. Tick when done.
        </p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-teal-200">
          <div
            className="h-1.5 rounded-full bg-teal-500 transition-all duration-500"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-teal-700">
          {completedCount} / {totalCount} completed
        </p>
      </div>

      {/* Horizontal flow */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Context loop — repeats every turn
        </p>
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {FLOW_STEPS.map((step, i) => (
            <div key={step.label} className="flex shrink-0 items-center gap-1">
              <div
                className={`flex h-14 w-20 items-center justify-center rounded-lg border text-center text-[10px] font-semibold leading-tight ${step.color}`}
              >
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

      {/* Exercise checklist */}
      <div className="space-y-2">
        {EXERCISES.map((ex) => {
          const done = checked.has(ex.id);
          const open = expanded.has(ex.id);
          return (
            <div
              key={ex.id}
              className={`rounded-xl border transition-colors ${
                done ? "border-green-300 bg-green-50" : "border-gray-200 bg-white"
              }`}
            >
              {/* Row header */}
              <div className="flex items-start gap-2 px-3 py-2.5">
                <button
                  type="button"
                  onClick={() => toggle(ex.id)}
                  className="mt-0.5 shrink-0"
                  aria-label={done ? "Mark incomplete" : "Mark complete"}
                >
                  {done ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-300 hover:text-teal-400 transition-colors" />
                  )}
                </button>
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => toggleExpand(ex.id)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Exercise {ex.id}
                      </span>
                      <p className={`text-sm font-semibold ${done ? "text-green-800 line-through" : "text-gray-900"}`}>
                        {ex.title}
                      </p>
                    </div>
                    {open ? (
                      <ChevronUp className="h-4 w-4 shrink-0 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
                    )}
                  </div>
                </button>
              </div>

              {/* Expanded content */}
              {open && (
                <div className="border-t border-gray-100 px-3 pb-3 pt-2 space-y-2">
                  <p className="text-xs text-gray-600">{ex.description}</p>

                  {/* Prompt box */}
                  <div className="rounded-lg bg-gray-900 px-3 py-2">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                      Prompt to try
                    </p>
                    <p className="font-mono text-xs text-green-400 whitespace-pre-wrap leading-relaxed">
                      {ex.prompt}
                    </p>
                  </div>

                  {/* Hint */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                      Hint
                    </p>
                    <p className="text-xs text-amber-800 mt-0.5">{ex.hint}</p>
                  </div>

                  {/* Expected */}
                  <div className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-teal-700">
                      Expected result
                    </p>
                    <p className="text-xs text-teal-800 mt-0.5">{ex.expected}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      toggle(ex.id);
                      if (!checked.has(ex.id)) toggleExpand(ex.id);
                    }}
                    className={`w-full rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      done
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    {done ? "Mark as incomplete" : "Mark as complete ✓"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {completedCount === totalCount && (
        <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-center">
          <p className="text-sm font-bold text-green-800">All exercises complete!</p>
          <p className="text-xs text-green-700 mt-1">
            You now understand how conversation history gives AI its &ldquo;memory&rdquo;.
          </p>
        </div>
      )}
    </div>
  );
}
