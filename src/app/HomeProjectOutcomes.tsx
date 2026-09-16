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
    id: "production-code",
    eyebrow: "Outcome 1",
    icon: FileCode2,
    title: "Production-grade code",
    description:
      "Move from structured programs to professional patterns — functions, modules, collections, and data workflows in a browser IDE on every topic.",
    bullets: [
      "Write and test in the in-browser IDE",
      "Build reusable scripts before a shippable capstone",
      "Use patterns expected in real codebases",
    ],
  },
  {
    id: "live-queries",
    eyebrow: "Outcome 2",
    icon: LineChart,
    title: "Live data queries",
    description:
      "Query real business tables in the browser — filters, joins, aggregates, subqueries, and advanced expressions without installing a server.",
    bullets: [
      "Run queries without a local database",
      "Progress from relational design to advanced patterns",
      "Practice on realistic sample business tables",
    ],
  },
  {
    id: "llm-workflows",
    eyebrow: "Outcome 3",
    icon: Bot,
    title: "Production LLM workflows",
    description:
      "Shape prompt systems, call Groq, manage conversation state, and refine answers until chatbots are reliable enough to ship.",
    bullets: [
      "Prompt engineering with live playgrounds",
      "API workflows inside lesson notebooks",
      "Multi-turn chat and response-quality habits",
    ],
  },
  {
    id: "tool-agents",
    eyebrow: "Outcome 4",
    icon: DatabaseZap,
    title: "Tool-calling agents",
    description:
      "Build agents with Groq and LangChain — from first API calls through memory, function calling, and a multi-tool analyst capstone.",
    bullets: [
      "Raw API loops → chained model calls",
      "Conversation memory and tool function calling",
      "Multiple tools in one production-style agent",
    ],
  },
  {
    id: "rag-desks",
    eyebrow: "Outcome 5",
    icon: BrainCircuit,
    title: "RAG knowledge desks",
    description:
      "Ground answers in company documents — retrieve, read, and answer with source discipline over real PDFs and datasets.",
    bullets: [
      "Retrieve → read → answer with citations",
      "From lightweight retrieval to vector stores",
      "PDF Q&A, summarization, and data-insight briefs",
    ],
  },
  {
    id: "exec-analytics",
    eyebrow: "Outcome 6",
    icon: BriefcaseBusiness,
    title: "Executive AI analytics",
    description:
      "Decision-grade labs: spreadsheet analytics, dashboards with prompt systems, tool-calling agents, then RAG and AI data analysis.",
    bullets: [
      "Prompt labs for marketing, finance, HR, and ops",
      "Downloadable business datasets",
      "Real filings and extracts for grounded RAG",
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
            Professional outcomes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What you will be able to ship
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Advanced skills across code, data, agents, RAG knowledge desks, and a
            verified proficiency certificate.
          </p>
        </div>

        <ExplainSlideCarousel slides={outcomes} autoPlayMs={0} className="mt-10" />
      </div>
    </section>
  );
}
