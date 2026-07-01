"use client";

import { Code2, GitBranch, LayoutPanelLeft, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { HoverCornerCard } from "@/components/ui/HoverCornerCard";

const features = [
  {
    icon: LayoutPanelLeft,
    title: "Lessons + IDE",
    text: "Read the lesson and run code side by side without switching tools.",
  },
  {
    icon: GitBranch,
    title: "Structured courses",
    text: "Python: 14 modules from basics to capstone. Agentic AI: 8 modules from LLMs to a customer support agent project.",
  },
  {
    icon: Code2,
    title: "Real tools",
    text: "Use a Python IDE, console, notebooks, and Groq playgrounds.",
  },
  {
    icon: LineChart,
    title: "Progress tracking",
    text: "See your lessons, quizzes, and practice progress in one dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Checkpoints",
    text: "Use quizzes and practice tasks to confirm what you understand.",
  },
  {
    icon: Sparkles,
    title: "AI projects",
    text: "Build prompts, Groq API calls, LangChain workflows, RAG, and agents.",
  },
];

export function HomeFeatures() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
            Why learners stay engaged
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything needed to learn, practice, and build in one flow
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
          Focused lessons connect directly to live tools, so every concept can be practiced immediately.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <HoverCornerCard key={f.title} title={f.title} text={f.text} icon={f.icon} />
        ))}
      </div>
    </section>
  );
}
