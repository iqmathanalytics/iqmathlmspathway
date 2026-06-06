"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  Globe,
  Lightbulb,
  Play,
  RefreshCw,
  Scale,
  Target,
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

const SYNTAX_PARTS = [
  { part: "lambda", meaning: "Keyword to define anonymous function" },
  { part: "arguments", meaning: "Input values (like parameters)" },
  {
    part: "expression",
    meaning: "Single computation result (no statements allowed)",
  },
] as const;

const COMPARISON_ROWS = [
  { feature: "Size", lambda: "One line", defFn: "Multiple lines allowed" },
  {
    feature: "Name",
    lambda: "Anonymous (optional variable)",
    defFn: "Named function",
  },
  {
    feature: "Complexity",
    lambda: "Simple expressions only",
    defFn: "Any logic allowed",
  },
  { feature: "Return", lambda: "Implicit", defFn: "Explicit return" },
] as const;

const USE_CASES = [
  "Short operations",
  "Sorting with custom keys",
  "Simple transformations",
  "Functional tools like map, filter",
] as const;

const LIMITATIONS = [
  "Complex logic",
  "Multiple statements",
  "Large functions",
] as const;

const SUMMARY_ROWS = [
  { concept: "lambda", description: "Anonymous single-line function" },
  { concept: "expression", description: "Automatically returned result" },
  { concept: "def alternative", description: "More flexible full function" },
  { concept: "use case", description: "Simple, short operations" },
] as const;

export function LambdaFunctionsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Lambda Functions in Python
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Small anonymous functions written in one line
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Concept
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a Lambda Function?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A <strong>lambda function</strong> is a small anonymous function
          written in a single line. It is used for simple operations where
          defining a full function is unnecessary.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Lambda functions are typically used for short, quick computations.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Syntax */}
      <section className="mb-8">
        <SectionLabel variant="green">Syntax</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Lambda Structure
        </h3>

        <CodeWindow filename="syntax.py">
          <span className="font-semibold text-[#1a5fb4]">lambda</span>
          <span className="text-gray-800"> arguments: expression</span>
        </CodeWindow>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Part
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {SYNTAX_PARTS.map((row) => (
                <tr
                  key={row.part}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.part}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Basic example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic Lambda Function
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="double.py">
          <span className="text-gray-800">double = </span>
          <span className="font-semibold text-[#1a5fb4]">lambda</span>
          <span className="text-gray-800"> x: x * 2</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(double(5))</span>
        </CodeExercisePanel>

        <OutputBox>10</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This function multiplies the input by 2 in a single line.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Equivalent def */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <RefreshCw className="h-3 w-3" />
          Equivalent function
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using def
        </h3>

        <CodeWindow filename="double_def.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> double(x):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> x * 2</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(double(5))</span>
        </CodeWindow>

        <OutputBox>10</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Both versions do the same work. Lambda is just shorter.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Comparison */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Scale className="h-3 w-3" />
          Lambda vs def
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Key Differences
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Feature
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  lambda
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  def
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.lambda}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.defFn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Structure breakdown */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Building2 className="h-3 w-3" />
          Structure
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How Lambda Works
        </h3>

        <CodeWindow filename="structure.txt">
          <span className="font-semibold text-[#1a5fb4]">lambda</span>
          <span className="text-gray-800"> x: x * 2</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">│</span>
          {"\n"}
          <span className="text-gray-500">├── lambda → function keyword</span>
          {"\n"}
          <span className="text-gray-500">├── x → input parameter</span>
          {"\n"}
          <span className="text-gray-500">└── x * 2 → returned expression</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Multiple arguments */}
      <section className="mb-8">
        <SectionLabel variant="green">Multiple arguments</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Lambda with Two Inputs
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="add.py">
          <span className="text-gray-800">add = </span>
          <span className="font-semibold text-[#1a5fb4]">lambda</span>
          <span className="text-gray-800"> a, b: a + b</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(add(3, 4))</span>
        </CodeExercisePanel>

        <OutputBox>7</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* When to use */}
      <section className="mb-8">
        <SectionLabel variant="amber">When to use</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Best Use Cases
        </h3>

        <ul className="space-y-1.5 text-[13.5px] leading-relaxed text-gray-600">
          {USE_CASES.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Real example */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Globe className="h-3 w-3" />
          Real example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Sorting with Lambda
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="sort_names.py">
          <span className="text-gray-800">names = [</span>
          <span className="text-[#c64600]">&quot;Sam&quot;</span>
          <span className="text-gray-800">, </span>
          <span className="text-[#c64600]">&quot;Alexander&quot;</span>
          <span className="text-gray-800">, </span>
          <span className="text-[#c64600]">&quot;Bob&quot;</span>
          <span className="text-gray-800">]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">names.sort(key=</span>
          <span className="font-semibold text-[#1a5fb4]">lambda</span>
          <span className="text-gray-800"> x: </span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">(x))</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(names)</span>
        </CodeExercisePanel>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Sorts names based on their length.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Limitation */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Limitation
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          When NOT to Use Lambda
        </h3>

        <ul className="mb-3 space-y-1.5 text-[13.5px] leading-relaxed text-gray-600">
          {LIMITATIONS.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-[13.5px] leading-relaxed text-gray-600">
          If logic becomes complex, always use <strong>def</strong> instead.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary */}
      <section className="mb-8">
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Quick Summary
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Concept
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
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
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.concept}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-4">
        <SectionLabel variant="green">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="square.py">
          <span className="text-gray-800">square = </span>
          <span className="font-semibold text-[#1a5fb4]">lambda</span>
          <span className="text-gray-800"> n: n * n</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(square(6))</span>
        </CodeExercisePanel>

        <OutputBox>36</OutputBox>
      </section>
    </div>
  );
}
