"use client";

import {
  ArrowRight,
  Brain,
  Lightbulb,
  List,
  MapPin,
  Play,
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

const MIXED_ROWS = [
  { value: "Alice", type: "String" },
  { value: "25", type: "Integer" },
  { value: "True", type: "Boolean" },
] as const;

const USE_CASE_ROWS = [
  { useCase: "Store Names", example: '["Alice", "Bob", "Charlie"]' },
  { useCase: "Store Scores", example: "[85, 90, 78]" },
  { useCase: "Store Products", example: '["Laptop", "Phone"]' },
  { useCase: "Data Science", example: "Dataset Columns" },
] as const;

const REF_ROWS = [
  { syntax: "[ ]", purpose: "Create List", example: "[1, 2, 3]" },
  { syntax: "list()", purpose: "Create Empty List", example: "list()" },
  { syntax: "len()", purpose: "Count Items", example: "len(fruits)" },
  { syntax: "list[index]", purpose: "Access Item", example: "fruits[0]" },
  {
    syntax: "Mixed Types",
    purpose: "Store Different Data",
    example: '["Alice", 25, True]',
  },
] as const;

export function CreatingListsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Python Lists</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Store multiple ordered items in a single variable
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <List className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a List?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A list is a collection of ordered items stored inside square brackets{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            [ ]
          </code>
          . Lists can contain values of the same type or different types.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Lists are one of the most commonly used data structures in Python.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Creating lists */}
      <section className="mb-8">
        <SectionLabel variant="green">Creating lists</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic Examples
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="lists.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">numbers = [10, 20, 30]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">mixed = [&quot;Alice&quot;, 25, True]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(fruits)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            A list can store strings, numbers, Boolean values, and even a
            mixture of different data types.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: List structure */}
      <section className="mb-8">
        <SectionLabel variant="purple">List structure</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Understanding Index Positions
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Each item in a list has an index position starting from 0.
        </p>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[280px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Item
                </th>
                <th className="px-2 py-2 text-center font-medium text-gray-800">
                  apple
                </th>
                <th className="px-2 py-2 text-center font-medium text-gray-800">
                  banana
                </th>
                <th className="px-2 py-2 text-center font-medium text-gray-800">
                  mango
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Index</td>
                <td className="px-2 py-2.5 text-center font-mono text-gray-600">
                  0
                </td>
                <td className="px-2 py-2.5 text-center font-mono text-gray-600">
                  1
                </td>
                <td className="px-2 py-2.5 text-center font-mono text-gray-600">
                  2
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Lists preserve the order in which items are added.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Mixed types */}
      <section className="mb-8">
        <SectionLabel variant="teal">Mixed data types</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Lists Can Store Different Types
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="mixed.py">
          <span className="text-gray-800">mixed = [&quot;Alice&quot;, 25, True]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(mixed)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {MIXED_ROWS.map((row) => (
                <tr
                  key={row.value}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.value}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Empty lists */}
      <section className="mb-8">
        <SectionLabel variant="amber">Empty lists</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Creating an Empty List
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Sometimes you need a list that starts with no items.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="empty.py">
          <span className="text-gray-800">empty = []</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">also_empty = </span>
          <span className="font-semibold text-[#8b2070]">list</span>
          <span className="text-gray-800">()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#8b2070]">len</span>
          <span className="text-gray-800">(empty)) </span>
          <span className="italic text-[#5a8a5a]"># 0</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Both methods create an empty list with zero elements.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Length */}
      <section className="mb-8">
        <SectionLabel variant="red">Length of a list</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Using len()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            len()
          </code>{" "}
          function returns the total number of items in a list.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="length.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#8b2070]">len</span>
          <span className="text-gray-800">(fruits)) </span>
          <span className="italic text-[#5a8a5a]"># 3</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Why lists matter */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Why lists matter
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
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.useCase}
                  </td>
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
            Lists are heavily used in machine learning, data analysis,
            automation, and web development.
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
                  Syntax
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
                  key={row.syntax}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-[15px] font-semibold text-gray-800">
                    {row.syntax}
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
