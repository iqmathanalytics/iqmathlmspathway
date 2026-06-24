"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Module } from "@/lib/types";

interface HomeRoadmapProps {
  pythonModules: Module[];
  agenticAiModules: Module[];
}

const TABS = [
  { id: "python",     label: "🐍 Python for Data Science", color: "brand" },
  { id: "agentic-ai", label: "🤖 Agentic AI",             color: "violet" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function HomeRoadmap({ pythonModules, agenticAiModules }: HomeRoadmapProps) {
  const [active, setActive] = useState<TabId>("python");

  const modules = active === "python" ? pythonModules : agenticAiModules;
  const live     = modules.filter((m) => m.topics.some((t) => t.published));
  const upcoming = modules.filter((m) => !m.topics.some((t) => t.published));

  const dashboardHref =
    active === "python" ? "/dashboard" : "/dashboard?course=agentic-ai";

  const isViolet = active === "agentic-ai";

  return (
    <section className="border-y border-gray-200/80 bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        {/* Tab switcher */}
        <div className="mb-10 flex gap-2 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-colors ${
                active === tab.id
                  ? tab.id === "agentic-ai"
                    ? "bg-violet-600 text-white shadow-sm"
                    : "bg-brand-600 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${isViolet ? "text-violet-600" : "text-brand-600"}`}>
              {active === "python" ? "🐍 Python for Data Science" : "🤖 Agentic AI"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {active === "python" ? "14-module learning path" : "6-module learning path"}
            </h2>
            <p className="mt-2 max-w-xl text-gray-600">
              {active === "python"
                ? "Start with Module 1 and move forward in order. Each module includes lessons, practice problems, and quizzes."
                : "Learn how LLMs work, build chatbots, and create AI agents — from fundamentals to real-world applications."}
            </p>
          </div>
          <Link
            href={dashboardHref}
            className={`inline-flex shrink-0 items-center gap-1 text-sm font-semibold ${isViolet ? "text-violet-700 hover:text-violet-800" : "text-brand-700 hover:text-brand-800"}`}
          >
            Full curriculum
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Module grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((m) => {
            const topicCount = m.topics.filter((t) => t.published).length;
            const firstTopic = m.topics.find((t) => t.published);
            return (
              <Link
                key={m.slug}
                href={firstTopic ? `/learn/${m.slug}/${firstTopic.slug}` : `/learn/${m.slug}`}
                className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md ${
                  isViolet ? "hover:border-violet-200" : "hover:border-brand-200"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-3xl" aria-hidden>{m.icon}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                    <CheckCircle2 className="h-3 w-3" />
                    Live
                  </span>
                </div>
                <p className={`mt-3 text-xs font-semibold uppercase tracking-wide ${isViolet ? "text-violet-600" : "text-brand-600"}`}>
                  Module {m.id}
                </p>
                <h3 className={`mt-1 font-semibold text-gray-900 ${isViolet ? "group-hover:text-violet-800" : "group-hover:text-brand-800"}`}>
                  {m.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-2">{m.description}</p>
                <p className="mt-4 text-xs font-medium text-gray-500">
                  {topicCount} lessons · Open module →
                </p>
              </Link>
            );
          })}

          {upcoming.length > 0 && (
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 p-5 sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-semibold text-gray-700">Coming next</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                {upcoming.slice(0, 4).map((m) => (
                  <li key={m.slug} className="flex items-center gap-2">
                    <span>{m.icon}</span>
                    <span className="line-clamp-1">{m.id}. {m.name}</span>
                  </li>
                ))}
                {upcoming.length > 4 && (
                  <li className="text-gray-400">+{upcoming.length - 4} more modules</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
