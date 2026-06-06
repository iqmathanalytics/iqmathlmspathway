"use client";

import {
  ArrowDownUp,
  ArrowRight,
  Brain,
  Lightbulb,
  MapPin,
  Minus,
  Play,
  Plus,
  Ruler,
  Wrench,
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
    symbol: "+",
    name: "Add Items",
    note: "append() and insert()",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "−",
    name: "Remove Items",
    note: "remove() and pop()",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "⇅",
    name: "Sort Items",
    note: "sort()",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const ADD_ROWS = [
  { operation: 'append("pencil")', result: "['pen', 'pencil']" },
  { operation: 'insert(0, "eraser")', result: "['eraser', 'pen', 'pencil']" },
] as const;

const POP_ROWS = [
  { variable: "last", value: "2" },
  { variable: "nums", value: "[1, 3]" },
] as const;

const METHOD_ROWS = [
  { method: "append()", purpose: "Add item to end" },
  { method: "insert()", purpose: "Add item at position" },
  { method: "remove()", purpose: "Remove first matching value" },
  { method: "pop()", purpose: "Remove and return item" },
  { method: "sort()", purpose: "Sort list in ascending order" },
  { method: "len()", purpose: "Count items" },
] as const;

const REF_ROWS = [
  { code: 'items.append("x")', result: "Add to end" },
  { code: 'items.insert(0,"x")', result: "Add at index 0" },
  { code: 'items.remove("x")', result: "Remove first match" },
  { code: "items.pop()", result: "Remove last item" },
  { code: "items.sort()", result: "Sort ascending" },
  { code: "len(items)", result: "Count items" },
] as const;

export function ListMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Modifying Lists
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Add, remove, sort, and manage list items efficiently
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Wrench className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Common List Operations
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python lists are mutable, which means you can add, remove, and modify
          items after creating the list.
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

      {/* Section 2: Adding items */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Plus className="h-3 w-3" />
          Adding items
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          append() and insert()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Use append() to add an item at the end of a list and insert() to
          place an item at a specific position.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="add_items.py">
          <span className="text-gray-800">items = [&quot;pen&quot;]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">items.append(&quot;pencil&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(items)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">
            items.insert(0, &quot;eraser&quot;)
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(items)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Operation
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {ADD_ROWS.map((row) => (
                <tr
                  key={row.operation}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.operation}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: remove() */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Minus className="h-3 w-3" />
          Removing items
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          remove()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          remove() deletes the first matching value found in the list.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="remove.py">
          <span className="text-gray-800">nums = [1, 2, 3, 2]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">nums.remove(2)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># [1, 3, 2]</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Only the first occurrence of 2 is removed.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: pop() */}
      <section className="mb-8">
        <SectionLabel variant="teal">pop()</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Remove and Return an Item
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          pop() removes an item and returns it for later use.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="pop.py">
          <span className="text-gray-800">nums = [1, 3, 2]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">last = nums.pop()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(last)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Variable
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {POP_ROWS.map((row) => (
                <tr
                  key={row.variable}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.variable}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: sort() */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <ArrowDownUp className="h-3 w-3" />
          Sorting
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          sort()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          sort() arranges items in ascending order and modifies the original
          list.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="sort.py">
          <span className="text-gray-800">scores = [85, 92, 78]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">scores.sort()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># [78, 85, 92]</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            sort() changes the existing list instead of creating a new one.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: len() */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Ruler className="h-3 w-3" />
          Counting items
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">len()</h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          len() returns the total number of items in a list.
        </p>

        <CodeExercisePanel practiceIndex={4} filename="len.py">
          <span className="text-gray-800">scores = [78, 85, 92]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">(scores))</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># 3</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Method summary */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Method summary
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Most Important List Methods
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {METHOD_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.method}
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
