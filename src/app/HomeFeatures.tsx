"use client";

import { Award, Code2, Database, LayoutPanelLeft, LineChart, Sparkles } from "lucide-react";
import { HoverCornerCard } from "@/components/ui/HoverCornerCard";

const features = [
  {
    icon: LayoutPanelLeft,
    title: "Lessons + live tools",
    text: "Read beside a code IDE, query console, AI playground, or notebook guide — no tool-switching, no local setup.",
  },
  {
    icon: Code2,
    title: "Premium practice arena",
    text: "Language drills and algorithm challenges in the same in-browser editor — Easy, Medium, and Hard with instant test feedback.",
  },
  {
    icon: Award,
    title: "Get Certified",
    text: "Standalone programs with IDE practice, a timed exam, and a verified certificate — more certifications join the same hub.",
  },
  {
    icon: Sparkles,
    title: "Production AI labs",
    text: "Groq APIs, LangChain tool-calling agents, conversation memory, and RAG over real PDFs — not toy chatbots.",
  },
  {
    icon: Database,
    title: "Grounded data & docs",
    text: "Business databases, downloadable datasets, and real company filings for RAG desks and decision labs.",
  },
  {
    icon: LineChart,
    title: "Progress that sticks",
    text: "Quizzes, activity checklists, topic locking, and dashboards sync when you sign in — plus college admin enrollments.",
  },
];

export function HomeFeatures() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
            Platform features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A professional workspace for code, data, and AI
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
          In-browser IDEs, premium algorithm practice, Groq and LangChain labs, and
          verified certifications — without leaving the platform.
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
