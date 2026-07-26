"use client";

import { Code2, Database, GitBranch, LayoutPanelLeft, LineChart, Sparkles } from "lucide-react";
import { HoverCornerCard } from "@/components/ui/HoverCornerCard";

const features = [
  {
    icon: LayoutPanelLeft,
    title: "Lessons + live tools",
    text: "Read beside a Python IDE, SQL console, Groq playground, or Colab cell guide — no tool-switching.",
  },
  {
    icon: GitBranch,
    title: "Four structured tracks",
    text: "Python (14 modules), SQL (9), Agentic AI (8), and a 4-day MBA business pathway with published Days 1–4.",
  },
  {
    icon: Code2,
    title: "Real practice surfaces",
    text: "Browser IDEs, ChatGPT copy-ready labs, notebook cells for Colab, and downloadable business datasets.",
  },
  {
    icon: Database,
    title: "Grounded RAG & data",
    text: "MBA Day 4 uses FreshBasket extracts and real company PDFs for RAG; Day 3 builds LangChain chatbots with live tools.",
  },
  {
    icon: LineChart,
    title: "Progress that sticks",
    text: "Quizzes, checklists, and dashboards sync when you sign in — pick up exactly where you left off.",
  },
  {
    icon: Sparkles,
    title: "From prompts to agents",
    text: "Build chatbots with tools, LangChain workflows, RAG knowledge desks, and grounded document Q&A.",
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
            Code, data, and AI business skills in one platform
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
          Whether you are starting Python, mastering SQL, shipping agents, or running an MBA
          analytics sprint — every concept connects to a hands-on lab.
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
