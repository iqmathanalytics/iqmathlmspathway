"use client";

import { Calculator, CheckCircle2, ClipboardList, RefreshCw } from "lucide-react";

const EXAMPLES = [
  {
    prompt: "If I have 10 apples and I give away 3 apples, how many apples do I have left?",
    without: "I have 7 apples left.",
    responses: [
      "I start with 10 apples. My first action is to subtract 3 apples, which gives me 7 apples.",
      "After giving away 3, I subtract 3 from 10 and have 7 apples left.",
    ],
    action: "Subtract 3 apples from 10 to get 7 apples.",
  },
  {
    prompt: "You have a basket of 12 oranges and you buy 5 more. How many oranges do you have now?",
    without: "I have 17 oranges.",
    responses: [
      "I start with 12 oranges. My action is to add 5 more oranges, so now I have 17 oranges.",
      "When I buy 5 more, the action is adding them together, giving me 17 oranges.",
    ],
    action: "Add 5 oranges to 12 to get 17 oranges.",
  },
];

export function ReActWorkflowPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-5">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-emerald-600" />
          <p className="text-lg font-bold text-slate-900">ReACT Workflow</p>
        </div>
        <p className="mt-2 text-[14.5px] leading-7 text-slate-700">
          The agent repeatedly reasons, acts, observes feedback and uses that feedback for the next step.
        </p>
      </div>

      <div className="bg-white p-5">
        <img
          src="/images/react-reasoning-acting-workflow.png"
          alt="ReACT reasoning and acting workflow showing Reason, Act, Observe and Repeat"
          className="h-auto w-full rounded-xl border border-slate-100 object-contain"
        />
      </div>

      <div className="border-t border-gray-100 px-5 py-5">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          ReACT Loop
        </p>
        <div className="grid gap-3">
          {[
            ["Reason", "Think about the current problem and decide what is needed."],
            ["Act", "Take a specific action based on the reasoning."],
            ["Observe", "Read the action result or feedback from the environment."],
            ["Repeat", "Use the new information to reason again until the task is done."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3.5">
              <p className="text-[15px] font-bold text-emerald-950">{title}</p>
              <p className="mt-1 text-sm leading-6 text-emerald-900">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 px-5 py-5">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          Examples
        </p>
        <div className="space-y-5">
          {EXAMPLES.map((example, index) => (
            <div key={example.prompt} className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700 shadow-sm">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[15px] font-bold text-gray-900">Prompt</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">{example.prompt}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-white/70 bg-white px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Without ReACT</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">{example.without}</p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-emerald-700" />
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">With ReACT</p>
                  </div>
                  <ul className="mt-3 space-y-2.5 text-sm leading-6 text-gray-700">
                    {example.responses.map((response) => <li key={response}>• {response}</li>)}
                  </ul>
                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-emerald-50 px-3 py-2.5">
                    <Calculator className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <p className="text-sm leading-6 text-emerald-950">
                      <span className="font-bold">Action: </span>
                      {example.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50/60 px-4 py-3">
        <div className="flex items-start gap-2 text-xs leading-5 text-gray-500">
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
          <p>This topic has no IDE requirement. Complete the quiz when you are ready to move on.</p>
        </div>
      </div>
    </div>
  );
}
