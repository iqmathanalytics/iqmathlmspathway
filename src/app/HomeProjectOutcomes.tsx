"use client";

import { Bot, BrainCircuit, DatabaseZap, FileCode2, LineChart, MessageSquareText } from "lucide-react";
import { ExplainSlideCarousel, type ExplainSlide } from "@/components/ui/ExplainSlideCarousel";

const outcomes: ExplainSlide[] = [
  {
    id: "python-programs",
    eyebrow: "Outcome 1",
    icon: FileCode2,
    title: "Python programs",
    description:
      "You will go from your first script to reusable functions and structured programs. Lessons cover variables, conditionals, loops, collections, and modules with runnable examples in every topic.",
    bullets: [
      "Practice syntax directly in the browser IDE",
      "Build small scripts before the capstone project",
      "Learn patterns used in real Python codebases",
    ],
  },
  {
    id: "data-foundations",
    eyebrow: "Outcome 2",
    icon: LineChart,
    title: "Data-ready foundations",
    description:
      "Strengthen the Python skills that data workflows depend on: cleaning data with loops and comprehensions, working with structured collections, and thinking in steps that scale to notebooks and analytics.",
    bullets: [
      "Connect basics to data-oriented exercises",
      "Prepare for pandas-style thinking later",
      "Practice readable, maintainable data scripts",
    ],
  },
  {
    id: "prompt-workflows",
    eyebrow: "Outcome 3",
    icon: MessageSquareText,
    title: "Prompt workflows",
    description:
      "Learn how to shape model behavior with system prompts, compare outputs side by side, and iterate until responses are reliable. This is the foundation before wiring prompts into apps.",
    bullets: [
      "Test prompts in guided lesson flows",
      "Understand roles, context, and constraints",
      "Improve quality through structured iteration",
    ],
  },
  {
    id: "ai-chatbots",
    eyebrow: "Outcome 4",
    icon: Bot,
    title: "AI chatbots",
    description:
      "Build conversational experiences with the Groq API: send messages, handle responses, manage conversation state, and refine answers as you learn what makes chatbots feel useful instead of generic.",
    bullets: [
      "Call Groq from lesson notebooks and examples",
      "Design multi-turn conversation flows",
      "Debug and improve real API responses",
    ],
  },
  {
    id: "rag-systems",
    eyebrow: "Outcome 5",
    icon: DatabaseZap,
    title: "RAG systems",
    description:
      "Combine document retrieval with generation so models answer from your content. Lessons walk through chunking concepts, retrieval steps, and when RAG is the right architecture choice.",
    bullets: [
      "Ground answers in uploaded or sample documents",
      "See retrieval and generation as separate steps",
      "Build toward production-style RAG patterns",
    ],
  },
  {
    id: "agent-patterns",
    eyebrow: "Outcome 6",
    icon: BrainCircuit,
    title: "Agent patterns",
    description:
      "Move beyond single prompts into agents that plan, call tools, and coordinate tasks. You will study patterns used in modern AI apps and apply them in the customer support agent capstone.",
    bullets: [
      "Tool use and function calling fundamentals",
      "Reasoning loops and task decomposition",
      "Capstone: customer support agent project",
    ],
  },
];

export function HomeProjectOutcomes() {
  return (
    <section id="outcomes" className="relative bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            What you will build
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Practical outcomes, not just course completion
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Use the arrows below to explore each skill you will develop on this platform.
          </p>
        </div>

        <ExplainSlideCarousel slides={outcomes} autoPlayMs={0} className="mt-10" />
      </div>
    </section>
  );
}
