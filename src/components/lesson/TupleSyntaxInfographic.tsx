"use client";

import {
  ArrowRight,
  Brain,
  Lightbulb,
  MapPin,
  Package,
  Play,
  RefreshCw,
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

const SINGLE_TUPLE_ROWS = [
  { variable: "(42)", type: "int" },
  { variable: "(42,)", type: "tuple" },
] as const;

const COMPARE_ROWS = [
  { feature: "Syntax", list: "[ ]", tuple: "( )" },
  { feature: "Ordered", list: "✅ Yes", tuple: "✅ Yes" },
  { feature: "Mutable", list: "✅ Yes", tuple: "❌ No" },
  { feature: "Duplicates Allowed", list: "✅ Yes", tuple: "✅ Yes" },
] as const;

const COLORS = ["red", "green", "blue"] as const;

const USE_CASE_ROWS = [
  { useCase: "Coordinates", example: "(10, 20)" },
  { useCase: "RGB Colors", example: "(255, 0, 0)" },
  { useCase: "Database Records", example: "(id, name)" },
  { useCase: "Function Returns", example: "(x, y)" },
] as const;

const REF_ROWS = [
  { code: "(1, 2, 3)", description: "Create a tuple" },
  { code: "(42,)", description: "Single-item tuple" },
  { code: "tuple(list)", description: "Convert list to tuple" },
  { code: "t[0]", description: "Access first item" },
  { code: "len(t)", description: "Count items" },
  { code: "type(t)", description: "Check data type" },
] as const;

export function TupleSyntaxInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Python Tuples</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Store ordered and unchangeable collections of items
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Package className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a Tuple?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A tuple is an ordered collection of items stored inside parentheses{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            ( )
          </code>
          . Unlike lists, tuples cannot be modified after creation.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Tuples are immutable, meaning their values cannot be changed.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Creating tuples */}
      <section className="mb-8">
        <SectionLabel variant="green">Creating tuples</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic Examples
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="create_tuple.py">
          <span className="text-gray-800">coordinates = (10, 20)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">
            colors = (&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">single = (42,)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(coordinates)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">type</span>
          <span className="text-gray-800">(coordinates))</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>A single-item tuple must include a trailing comma.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Single item tuple */}
      <section className="mb-8">
        <SectionLabel variant="purple">Single item tuple</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Why the Comma Matters
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="single_tuple.py">
          <span className="text-gray-800">a = (42)</span>
          {"\n"}
          <span className="text-gray-800">b = (42,)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">type</span>
          <span className="text-gray-800">(a))</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">type</span>
          <span className="text-gray-800">(b))</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Variable
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {SINGLE_TUPLE_ROWS.map((row) => (
                <tr
                  key={row.variable}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.variable}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: List vs Tuple */}
      <section className="mb-8">
        <SectionLabel variant="teal">List vs tuple</SectionLabel>
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
                  List
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Tuple
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.list}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.tuple}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Lists are changeable, while tuples are fixed after creation.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Convert list to tuple */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <RefreshCw className="h-3 w-3" />
          Convert list to tuple
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Using tuple()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The tuple() function converts other sequences such as lists into
          tuples.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="convert.py">
          <span className="text-gray-800">nums = [1, 2, 3]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">as_tuple = </span>
          <span className="font-semibold text-[#1a5fb4]">tuple</span>
          <span className="text-gray-800">(nums)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(as_tuple)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># (1, 2, 3)</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Tuple indexing */}
      <section className="mb-8">
        <SectionLabel variant="red">Tuple indexing</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Accessing Items
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Tuples use indexes just like lists.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="indexing.py">
          <span className="text-gray-800">
            colors = (&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[0]) </span>
          <span className="italic text-[#5a8a5a]"># red</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[1]) </span>
          <span className="italic text-[#5a8a5a]"># green</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[-1]) </span>
          <span className="italic text-[#5a8a5a]"># blue</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[280px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Item
                </th>
                {COLORS.map((color) => (
                  <th
                    key={color}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {color}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Index</td>
                {[0, 1, 2].map((idx) => (
                  <td
                    key={idx}
                    className="px-2 py-2.5 text-center font-mono text-gray-600"
                  >
                    {idx}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Why use tuples */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Why use tuples?
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Common Applications
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Use Case
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {USE_CASE_ROWS.map((row) => (
                <tr
                  key={row.useCase}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">{row.useCase}</td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Tuples are useful when values should remain unchanged throughout the
            program.
          </span>
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
                  Code
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.code}
                    </code>
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
