"use client";

import { AlertTriangle, BookOpen, CheckCircle2, Code2, ListTree, Lightbulb } from "lucide-react";
import type { ModuleGuide } from "@/data/module-guides";

interface ModuleGuidePanelProps {
  guide: ModuleGuide;
  topicCount: number;
}

export function ModuleGuidePanel({ guide, topicCount }: ModuleGuidePanelProps) {
  return (
    <div className="mt-8 space-y-6">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
          <BookOpen className="h-4 w-4" />
          What this module covers
        </div>
        {guide.overview.split("\n\n").map((para, i) => (
          <p
            key={i}
            className={`text-[15px] leading-relaxed text-gray-700 ${i === 0 ? "mt-3" : "mt-3"}`}
          >
            {para}
          </p>
        ))}
        <p className="mt-3 text-sm text-gray-500">
          {topicCount} subtopic{topicCount === 1 ? "" : "s"} in this module —
          open any unlocked lesson below to learn step by step.
        </p>
      </section>

      {guide.learningOutcomes && guide.learningOutcomes.length > 0 && (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
            <CheckCircle2 className="h-4 w-4" />
            Learning outcomes
          </div>
          <ul className="mt-4 space-y-2">
            {guide.learningOutcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-2 text-sm leading-relaxed text-gray-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {guide.keyFunctions.length > 0 && (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
            <Code2 className="h-4 w-4" />
            Key functions & concepts
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {guide.keyFunctions.map((item) => (
              <li
                key={item.name}
                className="rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3"
              >
                <p className="font-mono text-sm font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {item.explanation}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {guide.pitfalls && guide.pitfalls.length > 0 && (
        <section className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
            <AlertTriangle className="h-4 w-4" />
            Common pitfalls & tips
          </div>
          <ul className="mt-4 space-y-3">
            {guide.pitfalls.map((item) => (
              <li
                key={item.pitfall}
                className="rounded-xl border border-amber-100 bg-white/80 px-4 py-3 text-sm"
              >
                <p className="font-medium text-gray-900">
                  Pitfall: {item.pitfall}
                </p>
                <p className="mt-1 text-gray-600">Tip: {item.tip}</p>
              </li>
            ))}
          </ul>
          {guide.tips && guide.tips.length > 0 && (
            <ul className="mt-3 space-y-2">
              {guide.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-2 text-sm leading-relaxed text-amber-950/80"
                >
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-gray-800">
        <ListTree className="h-4 w-4 text-brand-600" />
        Subtopics in this module
      </div>
    </div>
  );
}
