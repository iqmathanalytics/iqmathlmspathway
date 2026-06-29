"use client";

import {
  BadgeCheck,
  Brain,
  CheckCircle2,
  Eye,
  GitBranch,
  Lightbulb,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";

const WORKING = [
  {
    title: "Combining Reasoning and Action",
    desc: "ReACT combines thinking and acting in real time. The AI reasons about a problem, takes an action, observes the result and adjusts like a person would.",
    example:
      "While driving in a city, you choose a route, start driving, then change route when you see a road block.",
    icon: Brain,
  },
  {
    title: "Sequential Steps",
    desc: "The model breaks a problem into smaller steps. Each action builds on the previous reasoning step.",
    example:
      "A cleaning robot first reasons that it should pick up items, acts, then reasons that the next step is vacuuming.",
    icon: GitBranch,
  },
  {
    title: "Making Decisions",
    desc: "The model does not wait until the end. It continuously updates its approach while reasoning and acting.",
    example:
      "A robot opening a door checks whether the door is locked, chooses an action, observes feedback and adjusts.",
    icon: BadgeCheck,
  },
];

const LEARNING_POINTS = [
  "Learning from combined reasoning and actions: the model learns to think and act together.",
  "Linking reasoning and action: after each action, the model checks whether the result matches expectations.",
  "Adapting knowledge to new tasks: few-shot examples help it apply the same pattern to new situations.",
  "Dynamic flexibility: feedback can change the next thought or action.",
  "Enhancing learning with fine-tuning: fine-tuning can improve reasoning and action-taking accuracy.",
];

const ADVANTAGES = [
  "Improves problem-solving by combining thinking and action for step-by-step decisions.",
  "Enables faster decisions by reasoning and acting together.",
  "Makes AI more dynamic by adjusting actions based on ongoing reasoning.",
  "Supports real-time adaptability when situations change.",
];

const LIMITATIONS = [
  "Increases complexity because the model must decide the right action at each step.",
  "Requires more computation due to repeated reasoning, action and observation.",
  "Makes error handling harder because wrong reasoning can lead to wrong actions.",
  "Can produce poor outcomes if quick actions happen before enough reasoning.",
];

export function ReActPatternGuide() {
  return (
    <div className="space-y-7">
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
        <div className="border-b border-emerald-100 bg-white/60 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Agentic AI - Module 6 · Topic 4
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">ReACT Pattern</h2>
          <p className="mt-3 text-[15px] leading-7 text-gray-700">
            <strong>ReACT</strong> means <strong>Reasoning + Acting</strong>. It is a prompting
            technique where an AI thinks through a problem step by step, takes actions, observes
            results and uses those observations to improve the next decision.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-emerald-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            "Breaks complex problems into steps and decides actions at each stage.",
            "Uses observations from actions to refine future decisions.",
            "Used in chatbots, robotics and automation.",
          ].map((item) => (
            <div key={item} className="px-5 py-4">
              <p className="text-sm leading-6 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Working</p>
        <div className="space-y-3">
          {WORKING.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-blue-700" />
                      <p className="text-[15px] font-bold text-gray-900">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{item.desc}</p>
                    <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                      <p className="text-sm leading-6 text-blue-950">
                        <span className="font-bold">Example: </span>
                        {item.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-violet-700" />
          <p className="text-sm font-bold text-violet-950">How ReACT Models Learn</p>
        </div>
        <p className="mb-3 text-sm leading-6 text-gray-700">
          ReACT models often learn through few-shot prompting: a small set of examples shows how to
          alternate between thought, action and observation for new tasks.
        </p>
        <ul className="list-none space-y-3 pl-0 text-[15px] leading-7 text-violet-950">
          {LEARNING_POINTS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-green-700" />
            <p className="text-sm font-bold text-green-900">Advantages</p>
          </div>
          <ul className="list-none space-y-3 pl-0 text-[15px] leading-7 text-green-900">
            {ADVANTAGES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-rose-700" />
            <p className="text-sm font-bold text-rose-900">Limitations</p>
          </div>
          <ul className="list-none space-y-3 pl-0 text-[15px] leading-7 text-rose-900">
            {LIMITATIONS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <Eye className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
          <p className="text-sm leading-6 text-gray-700">
            The strength of ReACT is the loop: reason, act, observe and repeat. The observation is what
            keeps the next decision grounded in what actually happened.
          </p>
        </div>
      </div>
    </div>
  );
}
