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
    title: "Python track live now",
    text: "18 published modules from basics through NumPy, Pandas, visualization, EDA, and a capstone — with more tracks coming soon.",
  },
  {
    icon: Code2,
    title: "Real practice surfaces",
    text: "Lesson challenges, browser IDEs, and standalone Python Basics & Algorithms practice with instant feedback.",
  },
  {
    icon: Database,
    title: "Grounded labs & data",
    text: "Hands-on exercises in every topic, plus downloadable datasets when you unlock upcoming analytics pathways.",
  },
  {
    icon: LineChart,
    title: "Progress that sticks",
    text: "Quizzes, checklists, and dashboards sync when you sign in — pick up exactly where you left off.",
  },
  {
    icon: Sparkles,
    title: "Built for learners",
    text: "Topic locking, practice premium unlocks, and admin-managed college enrollments keep cohorts on track.",
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
            Code and data skills in one platform
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
          Start with the live Python pathway — lessons, quizzes, and practice in the browser.
          Additional tracks unlock when your college publishes them.
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
