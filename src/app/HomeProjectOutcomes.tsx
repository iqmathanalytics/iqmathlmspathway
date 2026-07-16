"use client";

import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  DatabaseZap,
  FileCode2,
  LineChart,
} from "lucide-react";
import { ExplainSlideCarousel, type ExplainSlide } from "@/components/ui/ExplainSlideCarousel";

const outcomes: ExplainSlide[] = [
  {
    id: "python-programs",
    eyebrow: "Outcome 1",
    icon: FileCode2,
    title: "Python programs",
    description:
      "Go from your first script to reusable functions and structured programs — variables, control flow, collections, and modules with a browser IDE in every topic.",
    bullets: [
      "Practice syntax directly in the browser IDE",
      "Build small scripts before the Python capstone",
      "Learn patterns used in real Python codebases",
    ],
  },
  {
    id: "sql-databases",
    eyebrow: "Outcome 2",
    icon: LineChart,
    title: "SQL & databases",
    description:
      "Query live SQLite databases in the browser — SELECT through joins, aggregates, subqueries, and CTEs on Northwind-style business data.",
    bullets: [
      "Run SQL without installing a database server",
      "Progress from basics to advanced query patterns",
      "Practice on realistic sample business tables",
    ],
  },
  {
    id: "ai-chatbots",
    eyebrow: "Outcome 3",
    icon: Bot,
    title: "AI chatbots & APIs",
    description:
      "Shape prompts, call Groq, manage conversation state, and refine answers until chatbots feel useful — then wire them into apps.",
    bullets: [
      "Prompt engineering with live playgrounds",
      "Groq API workflows in lesson notebooks",
      "Multi-turn chat and response quality habits",
    ],
  },
  {
    id: "rag-systems",
    eyebrow: "Outcome 4",
    icon: DatabaseZap,
    title: "RAG knowledge desks",
    description:
      "Ground answers in company documents. MBA Day 3 walks from short policy extracts to real PDFs (ITC, HUL, DMart) and a Groq Colab RAG pipeline.",
    bullets: [
      "Retrieve → read → answer with source discipline",
      "Work large annual reports with section anchors",
      "Build a mini knowledge assistant in Colab",
    ],
  },
  {
    id: "agent-patterns",
    eyebrow: "Outcome 5",
    icon: BrainCircuit,
    title: "Multi-agent systems",
    description:
      "Move beyond single prompts into agents that plan, call tools, and collaborate — Agentic AI engineering plus MBA Day 4 Colab swarms.",
    bullets: [
      "Tool use, memory, and plan–act–observe loops",
      "Specialist agents with CEO / orchestrator arbitration",
      "Consulting-firm and board-pack capstones",
    ],
  },
  {
    id: "mba-business",
    eyebrow: "Outcome 6",
    icon: BriefcaseBusiness,
    title: "MBA business analytics",
    description:
      "A day-wise executive pathway: FreshBasket analytics, market intelligence from reviews and competitors, then enterprise RAG and agentic decision systems.",
    bullets: [
      "ChatGPT labs for marketing, finance, HR, and ops",
      "Downloadable supermarket and market datasets",
      "Real-world Olist & IBM HR data for Day 4 agents",
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
            Practical outcomes across code, data, and business AI
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Use the arrows to explore skills from Python and SQL through RAG desks and multi-agent consulting packs.
          </p>
        </div>

        <ExplainSlideCarousel slides={outcomes} autoPlayMs={0} className="mt-10" />
      </div>
    </section>
  );
}
