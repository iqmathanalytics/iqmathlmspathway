"use client";

import {
  ArrowRight,
  BookOpen,
  GitBranch,
  Lightbulb,
  Play,
  RefreshCw,
  Scale,
  Target,
  Thermometer,
} from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "purple" | "green" | "blue" | "amber" | "teal" | "red";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
    teal: "bg-teal-100 text-teal-800",
    red: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function CodeExercisePanel({
  practiceIndex,
  filename,
  children,
}: {
  practiceIndex: number;
  filename: string;
  children: React.ReactNode;
}) {
  const practice = useLessonPractice();
  const isActive = practice?.activeIndex === practiceIndex;
  const hasNext =
    practice != null && practiceIndex < practice.total - 1;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/15 bg-white/60 transition-colors ${
        isActive ? "ring-2 ring-brand-400 ring-offset-1" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[11px] text-gray-500">{filename}</span>
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => practice?.selectPractice(practiceIndex)}
            title={isActive ? "Loaded in IDE" : "Load in IDE"}
            className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors ${
              isActive
                ? "bg-brand-600 text-white"
                : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
            }`}
          >
            <Play className="h-2.5 w-2.5" />
            IDE
          </button>
          {isActive && hasNext && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => practice?.nextPractice()}
              title="Next exercise"
              className="inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Next
              <ArrowRight className="h-2.5 w-2.5" />
            </button>
          )}
        </div>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}

function CodeWindow({
  filename,
  children,
}: {
  filename: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/15 bg-white/60">
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[11px] text-gray-500">{filename}</span>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}

function OutputBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-black/10 bg-black/[0.03]">
      <div className="border-b border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        Output
      </div>
      <pre className="px-3 py-2.5 font-mono text-[13px] text-gray-700">
        {children}
      </pre>
    </div>
  );
}

const WHEN_TO_USE = [
  "Straightforward mapping — transform each item",
  "Simple filtering — keep items that match a condition",
  "One-line result with no side effects",
] as const;

const USE_LOOP = [
  "Long or complex logic",
  "Side effects like printing or file I/O",
  "Multiple nested steps that are hard to read in one line",
] as const;

const SUMMARY_ROWS = [
  { concept: "Comprehension", description: "Map or filter in one line" },
  { concept: "Regular loop", description: "Complex logic or side effects" },
  { concept: "Transform", description: "Apply an expression to each item" },
  { concept: "Filter", description: "Keep items with if condition" },
  { concept: "Readability", description: "Switch to a loop when logic grows" },
] as const;

export function ComprehensionUsesInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Uses of Comprehensions
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          When to choose a comprehension over a regular loop
        </p>
      </header>

      {/* Intro */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Why Comprehensions Matter
        </h3>
        <p className="text-[13.5px] leading-relaxed text-gray-600">
          Comprehensions replace common loop-and-append patterns. They are
          idiomatic in Python and often clearer than manual loops for simple
          transforms and filters.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Loop vs comprehension */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Scale className="h-3 w-3" />
          Loop vs comprehension
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Same Result, Different Style
        </h3>

        <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Loop
        </p>
        <CodeExercisePanel practiceIndex={0} filename="loop.py">
          <span className="text-gray-800">result = []</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> word </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> [&quot;cat&quot;, &quot;dog&quot;, &quot;bird&quot;]:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> len(word) &gt; 3:</span>
          {"\n"}
          <span className="text-gray-800">        result.append(word.upper())</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result)</span>
        </CodeExercisePanel>
        <OutputBox>{`['BIRD']`}</OutputBox>

        <p className="mb-2 mt-5 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Comprehension
        </p>
        <CodeExercisePanel practiceIndex={1} filename="comprehension.py">
          <span className="text-gray-800">
            result = [w.upper() for w in [&quot;cat&quot;, &quot;dog&quot;, &quot;bird&quot;] if len(w) &gt; 3]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result)</span>
        </CodeExercisePanel>
        <OutputBox>{`['BIRD']`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Both approaches filter words longer than 3 characters and convert them
          to uppercase. Only &quot;bird&quot; qualifies.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* When to use */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <GitBranch className="h-3 w-3" />
          When to use them
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Choosing the Right Tool
        </h3>

        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Use comprehensions for straightforward mapping (transform each item)
          or filtering (keep some items). Prefer a regular for loop when the
          logic is long, has side effects (printing, file I/O), or needs
          multiple nested steps.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50/50 px-4 py-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-green-800">
              Use a comprehension
            </div>
            <ul className="space-y-1.5 text-[13px] text-gray-700">
              {WHEN_TO_USE.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 px-4 py-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-amber-900">
              Use a regular loop
            </div>
            <ul className="space-y-1.5 text-[13px] text-gray-700">
              {USE_LOOP.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-amber-700">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            If the comprehension becomes hard to read, a loop is usually the
            better choice.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Temperature example */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Thermometer className="h-3 w-3" />
          Example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Filtering Hot Temperatures
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="temperatures.py">
          <span className="text-gray-800">
            temperatures = [18, 22, 31, 15, 28]
          </span>
          {"\n"}
          <span className="text-gray-800">
            hot = [t for t in temperatures if t &gt;= 25]
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(hot)</span>
        </CodeExercisePanel>

        <OutputBox>[31, 28]</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          A comprehension is a natural fit when you only need to filter values
          from a list.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Good fit vs loop */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <RefreshCw className="h-3 w-3" />
          Good fit vs use a loop
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Quick Decision Guide
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50/40 px-4 py-4 text-center">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-green-800">
              Comprehension
            </div>
            <div className="text-[13.5px] font-medium text-gray-800">
              Map or filter in one line
            </div>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50/40 px-4 py-4 text-center">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
              Regular loop
            </div>
            <div className="text-[13.5px] font-medium text-gray-800">
              Complex logic or side effects
            </div>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeWindow filename="scores.py">
          <span className="text-gray-800">scores = [55, 72, 88, 40, 91]</span>
          {"\n"}
          <span className="text-gray-800">
            passed = [s for s in scores if s &gt;= 60]
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(passed)</span>
        </CodeWindow>

        <OutputBox>[72, 88, 91]</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Build a filtered list of passing scores using a comprehension.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Quick summary */}
      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight">
          Quick summary
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Concept
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.concept}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.concept}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
