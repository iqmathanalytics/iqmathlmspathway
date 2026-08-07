"use client";

import { ArrowRight, CheckCircle2, Circle, Clock, Table2, BarChart3 } from "lucide-react";
import type { Module } from "@/lib/types";
import { useProgress } from "@/contexts/ProgressContext";
import { NavigationLink } from "@/components/ui/NavigationLink";

interface AddOnModuleSectionsProps {
  courseModule: Module;
}

const SECTION_META: Record<
  string,
  { icon: typeof Table2; accent: string; badge: string; blurb: string }
> = {
  excel: {
    icon: Table2,
    accent: "border-brand-200 hover:border-brand-400 hover:shadow-md",
    badge: "bg-brand-100 text-brand-800",
    blurb: "Video lessons — open a topic to play.",
  },
  "power-bi": {
    icon: BarChart3,
    accent: "border-brand-200 hover:border-brand-400 hover:shadow-md",
    badge: "bg-brand-100 text-brand-800",
    blurb: "Video lessons — open a topic to play.",
  },
};

export function AddOnModuleSections({ courseModule }: AddOnModuleSectionsProps) {
  const { progress, ready } = useProgress();
  const completedIds = ready ? progress.completedTopics : [];
  const published = courseModule.topics.filter((t) => t.published);

  return (
    <div className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Choose a section
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {published.map((topic) => {
          const meta = SECTION_META[topic.slug] ?? SECTION_META.excel;
          const Icon = meta.icon;
          const isDone = completedIds.includes(topic.id);

          return (
            <NavigationLink
              key={topic.id}
              href={`/learn/${courseModule.slug}/${topic.slug}`}
              className={`group flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all ${meta.accent}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${meta.badge}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">{topic.title}</h2>
              <p className="mt-1.5 text-sm text-gray-600">
                {topic.description || meta.blurb}
              </p>

              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="h-3.5 w-3.5" />
                  {topic.estimatedMinutes} min
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                  Open videos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </NavigationLink>
          );
        })}
      </div>
    </div>
  );
}
