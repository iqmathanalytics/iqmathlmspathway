"use client";

import {
  ArrowRight,
  Brain,
  Lightbulb,
  MapPin,
  Pencil,
  Play,
  Plus,
  Scissors,
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

const OPERATIONS = [
  {
    symbol: "[ ]",
    name: "Single Item Update",
    note: "Modify one element",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "[:]",
    name: "Slice Update",
    note: "Replace multiple elements",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "+",
    name: "Extend List",
    note: "Add another list's items",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const SINGLE_UPDATE_ROWS = [
  { label: "Before", values: [70, 80, 90] },
  { label: "After", values: [70, 85, 90] },
] as const;

const SLICE_UPDATE_ROWS = [
  { label: "Before", values: [1, 2, 3, 4, 5] },
  { label: "After", values: [1, 20, 30, 4, 5] },
] as const;

const COMPARE_ROWS = [
  { operation: "list[index] = value", purpose: "Change one item" },
  { operation: "list[start:end] = values", purpose: "Change multiple items" },
  { operation: "extend()", purpose: "Add another list's items" },
] as const;

const REF_ROWS = [
  { code: "grades[1] = 85", result: "Change one item" },
  { code: "nums[1:3] = [20,30]", result: "Replace slice" },
  { code: "a.extend(b)", result: "Append all items from b" },
  { code: "len(list)", result: "Count items" },
  { code: "list[index]", result: "Access item" },
] as const;

export function ListModifyingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Updating Lists</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Modify existing items, replace multiple values, and combine lists
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Pencil className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Ways to Update a List
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Since lists are mutable, you can change existing values, replace
          multiple items at once, or add items from another list.
        </p>

        <div className="flex flex-col gap-1.5">
          {OPERATIONS.map((op) => (
            <div
              key={op.name}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] font-mono text-sm font-semibold ${op.symbolClass}`}
              >
                {op.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {op.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{op.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Single item update */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Pencil className="h-3 w-3" />
          Change one item
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Update by Index
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Use the index position to replace an existing value.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="single_update.py">
          <span className="text-gray-800">grades = [70, 80, 90]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">grades[1] = 85</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(grades)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># [70, 85, 90]</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>The value at index 1 changes from 80 to 85.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Visual example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Visual example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Understanding the Update
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[280px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Index
                </th>
                {[0, 1, 2].map((idx) => (
                  <th
                    key={idx}
                    className="px-2 py-2 text-center font-mono text-sm text-gray-600"
                  >
                    {idx}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SINGLE_UPDATE_ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-medium text-gray-700">
                    {row.label}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-2 py-2.5 text-center font-mono ${
                        row.label === "After" && i === 1
                          ? "font-semibold text-[#2d7a45]"
                          : "text-gray-600"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Slice update */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <Scissors className="h-3 w-3" />
          Change a slice
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Replace Multiple Items
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Slice assignment allows multiple values to be replaced in one
          operation.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="slice_update.py">
          <span className="text-gray-800">nums = [1, 2, 3, 4, 5]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">nums[1:3] = [20, 30]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># [1, 20, 30, 4, 5]</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Indexes 1 and 2 are replaced by 20 and 30.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Slice visualization */}
      <section className="mb-8">
        <SectionLabel variant="amber">Slice replacement</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Before and After
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[360px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Index
                </th>
                {[0, 1, 2, 3, 4].map((idx) => (
                  <th
                    key={idx}
                    className="px-2 py-2 text-center font-mono text-sm text-gray-600"
                  >
                    {idx}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SLICE_UPDATE_ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-medium text-gray-700">
                    {row.label}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-2 py-2.5 text-center font-mono ${
                        row.label === "After" && (i === 1 || i === 2)
                          ? "font-semibold text-[#2d7a45]"
                          : "text-gray-600"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: extend() */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Plus className="h-3 w-3" />
          Extend lists
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Using extend()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          extend() adds all items from another list to the end of the current
          list.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="extend.py">
          <span className="text-gray-800">a = [1, 2]</span>
          {"\n"}
          <span className="text-gray-800">b = [3, 4]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">a.extend(b)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># [1, 2, 3, 4]</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            extend() adds each element individually instead of creating a nested
            list.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Comparison */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Comparison
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Update Methods Summary
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Operation
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr
                  key={row.operation}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.operation}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.purpose}</td>
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
                  Code
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
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
                  <td className="px-3 py-2.5 text-gray-600">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
