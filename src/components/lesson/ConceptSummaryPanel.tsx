"use client";

import { Lightbulb, AlertTriangle, ArrowRight, Target, Zap } from "lucide-react";
import type { ConceptSummaryData } from "@/lib/types";

interface ConceptSummaryPanelProps {
  summary: ConceptSummaryData;
  title: string;
}

export function ConceptSummaryPanel({ summary, title }: ConceptSummaryPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 shrink-0 text-blue-600" />
          <p className="text-sm font-semibold text-blue-900">Concept Reference</p>
        </div>
        <p className="mt-1 text-xs text-blue-700">{title}</p>
      </div>

      {/* What it is */}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          What it is
        </p>
        <p className="text-sm leading-relaxed text-gray-700">{summary.hook}</p>
      </div>

      {/* Outcome */}
      <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3">
        <div className="flex items-start gap-2">
          <Target className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
              Learning goal
            </p>
            <p className="mt-0.5 text-sm text-green-800">{summary.outcome}</p>
          </div>
        </div>
      </div>

      {/* Pattern */}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          The pattern
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          {summary.steps.map((step, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 border border-brand-100">
                {step}
              </span>
              {i < summary.steps.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-gray-400" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Real-world example */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Real-world example
        </p>
        <p className="text-sm italic leading-relaxed text-gray-600">&ldquo;{summary.example}&rdquo;</p>
      </div>

      {/* Caution */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <div className="flex items-start gap-2">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Watch out
            </p>
            <p className="mt-0.5 text-sm text-amber-800">{summary.caution}</p>
          </div>
        </div>
      </div>

      {/* No code note */}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
        <div className="flex items-start gap-2">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
          <p className="text-xs text-gray-500">
            This is a concept topic — no code exercise here. The next code topic will apply this idea in a working example.
          </p>
        </div>
      </div>
    </div>
  );
}
