"use client";

import {
  ArrowRight,
  Lightbulb,
  MapPin,
  Play,
  Sparkles,
  Type,
} from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "purple" | "green" | "blue" | "amber" | "teal";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
    teal: "bg-teal-100 text-teal-800",
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

const METHODS = [
  {
    symbol: 'f""',
    name: "f-Strings",
    note: "Recommended and easiest method",
    example: 'f"Hello {name}"',
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "format()",
    name: "Format Method",
    note: "Insert values using placeholders",
    example: '"Hi {}".format(name)',
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: ",",
    name: "Print Comma",
    note: "Separate text and variables",
    example: 'print("Score", score)',
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const DATA_SCIENCE_ROWS = [
  { task: "Chart Titles", example: 'f"Sales Report {year}"' },
  { task: "Labels", example: 'f"Accuracy: {accuracy}%"' },
  { task: "Reports", example: 'f"Total Revenue: ₹{revenue}"' },
  { task: "Logging", example: 'f"Epoch {epoch} Complete"' },
] as const;

const COMPARISON_ROWS = [
  { method: "f-String", example: 'f"Hello {name}"', rating: "⭐⭐⭐⭐⭐" },
  { method: ".format()", example: '"Hello {}".format(name)', rating: "⭐⭐⭐" },
  { method: "Comma", example: 'print("Hello", name)', rating: "⭐⭐" },
] as const;

const REF_ROWS = [
  { method: 'f""', purpose: "Insert variables", example: 'f"Hi {name}"' },
  { method: "{}", purpose: "Placeholder", example: "{age}" },
  { method: "format()", purpose: "Replace values", example: '"{}".format(x)' },
  { method: ",", purpose: "Print values", example: 'print("Age", age)' },
] as const;

export function FormattingStringsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          String Formatting
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Insert variables and values into strings
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Type className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Ways to Format Strings
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          String formatting allows you to combine text with variables and
          expressions. Python provides several ways to do this, with f-strings
          being the most modern and recommended approach.
        </p>

        <div className="flex flex-col gap-1.5">
          {METHODS.map((m) => (
            <div
              key={m.symbol}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`min-w-16 shrink-0 text-center font-mono text-sm font-semibold ${m.symbolClass}`}
              >
                {m.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {m.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{m.note}</p>
              </div>
              <p className="shrink-0 whitespace-nowrap font-mono text-[12.5px] text-gray-600">
                {m.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: f-Strings */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Sparkles className="h-3 w-3" />
          Recommended
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          f-Strings
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Add{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            f
          </code>{" "}
          before the string and place variables or expressions inside curly
          braces{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            {"{ }"}
          </code>
          .
        </p>

        <CodeExercisePanel practiceIndex={0} filename="fstrings.py">
          <span className="text-gray-800">name = &quot;Sam&quot;</span>
          {"\n"}
          <span className="text-gray-800">age = </span>
          <span className="text-[#1a5fb4]">20</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(f&quot;Hello, {"{"}name{"}"}!&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (f&quot;Next year you will be {"{"}age + 1{"}"}&quot;)
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Expressions can be calculated directly inside the curly braces.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: format() */}
      <section className="mb-8">
        <SectionLabel variant="purple">Alternative</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          The format() Method
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            .format()
          </code>{" "}
          method replaces placeholders with values.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="format.py">
          <span className="text-gray-800">city = &quot;London&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;I live in {"{}"}.format(city))
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;I live in {"{0}"}.format(city))
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Comma print */}
      <section className="mb-8">
        <SectionLabel variant="teal">Simple output</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Using Commas in print()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The print function can automatically separate text and variables.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="print.py">
          <span className="text-gray-800">score = </span>
          <span className="text-[#1a5fb4]">95</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;Your score is&quot;, score)
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>This is simple but less flexible than f-strings.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Data science */}
      <section className="mb-8">
        <SectionLabel variant="amber">Data science tip</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Why f-Strings are Popular
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Task
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {DATA_SCIENCE_ROWS.map((row) => (
                <tr
                  key={row.task}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">{row.task}</td>
                  <td className="px-3.5 py-2.5 font-mono text-sm text-gray-600">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Data scientists frequently use f-strings to create dynamic chart
            labels, summaries, and reports.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Comparison */}
      <section className="mb-8">
        <SectionLabel variant="blue">Comparison</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Three Formatting Methods
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Recommended
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-sm text-gray-600">
                    {row.example}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Quick reference */}
      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight">
          Quick reference
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-[15px] font-semibold text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.purpose}</td>
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.example}
                    </code>
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
