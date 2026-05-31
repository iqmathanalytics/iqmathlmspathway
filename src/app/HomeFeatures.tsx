"use client";

import { Code2, GitBranch, LayoutPanelLeft, LineChart } from "lucide-react";

const features = [
  {
    icon: LayoutPanelLeft,
    title: "Lessons beside the IDE",
    text: "Read on the left, code on the right. Run Python without leaving the page.",
    accent: "from-brand-500/10 to-brand-600/5",
  },
  {
    icon: GitBranch,
    title: "Structured path",
    text: "13 modules from setup to functions — ordered for data science next.",
    accent: "from-python-blue/10 to-blue-500/5",
  },
  {
    icon: Code2,
    title: "Real editor",
    text: "Syntax highlighting, line numbers, and a scrollable console output panel.",
    accent: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: LineChart,
    title: "Data Science track",
    text: "Foundations today. NumPy, Pandas, and visualization libraries coming next.",
    accent: "from-violet-500/10 to-purple-500/5",
  },
];

export function HomeFeatures() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Built for learning by doing
        </h2>
        <p className="mt-3 text-gray-600">
          Read, run code, take quizzes, and track progress — all in one place.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition hover:border-gray-300 hover:shadow-md"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 transition group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
