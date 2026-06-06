"use client";

import {
  ArrowDownUp,
  ArrowRight,
  BookOpen,
  Brain,
  Eraser,
  Lightbulb,
  MapPin,
  Minus,
  Play,
  Plus,
  RotateCcw,
  Ruler,
  Target,
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

const OVERVIEW_METHODS = [
  { symbol: "append()", name: "Add to end", note: "Adds one item at the end", symbolClass: "text-[#1a5fb4]" },
  { symbol: "insert()", name: "Add at index", note: "Inserts at a position", symbolClass: "text-[#2d7a45]" },
  { symbol: "extend()", name: "Merge lists", note: "Adds all items from another list", symbolClass: "text-[#5e3fa3]" },
  { symbol: "remove()", name: "Remove value", note: "Deletes first matching value", symbolClass: "text-[#1a5fb4]" },
  { symbol: "pop()", name: "Pop item", note: "Removes and returns an item", symbolClass: "text-[#2d7a45]" },
  { symbol: "sort()", name: "Sort", note: "Orders items ascending", symbolClass: "text-[#5e3fa3]" },
] as const;

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
  { method: "extend()", purpose: "Add all items from another list" },
  { method: "remove()", purpose: "Remove first matching value" },
  { method: "pop()", purpose: "Remove and return item" },
  { method: "sort()", purpose: "Sort list in ascending order" },
  { method: "reverse()", purpose: "Reverse item order in place" },
  { method: "clear()", purpose: "Remove all items" },
  { method: "count()", purpose: "Count occurrences of a value" },
  { method: "index()", purpose: "Find position of a value" },
  { method: "len()", purpose: "Count items" },
] as const;

const REF_ROWS = [
  { code: 'items.append("x")', result: "Add to end" },
  { code: 'items.insert(0,"x")', result: "Add at index 0" },
  { code: "items.extend(other)", result: "Merge another list" },
  { code: 'items.remove("x")', result: "Remove first match" },
  { code: "items.pop()", result: "Remove last item" },
  { code: "items.sort()", result: "Sort ascending" },
  { code: "items.reverse()", result: "Reverse order" },
  { code: "items.clear()", result: "Empty the list" },
  { code: "items.count(90)", result: "Count occurrences" },
  { code: "items.index(85)", result: "Find first position" },
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
          Python lists are <strong>mutable</strong>, which means you can add,
          remove, and modify items after creating the list. Call methods with
          dot notation:{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            my_list.method()
          </code>
          .
        </p>

        <div className="flex flex-col gap-1.5">
          {OVERVIEW_METHODS.map((m) => (
            <div
              key={m.symbol}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`min-w-20 shrink-0 text-center font-mono text-sm font-semibold ${m.symbolClass}`}
              >
                {m.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {m.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{m.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-col gap-1.5">
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

      {/* Syntax */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <BookOpen className="h-3 w-3" />
          Syntax
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          List Methods Change the List In Place
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Unlike strings, most list methods modify the original list directly.
          You do not need to reassign unless you want a copy.
        </p>

        <CodeWindow filename="syntax.py">
          <span className="text-gray-800">items = [&quot;pen&quot;]</span>
          {"\n"}
          <span className="text-gray-800">items.append(&quot;pencil&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(items) </span>
          <span className="italic text-[#5a8a5a]"># [&apos;pen&apos;, &apos;pencil&apos;]</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Adding items */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Plus className="h-3 w-3" />
          Adding items
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          append() — add to the end
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          append() adds exactly <strong>one</strong> item to the end of the
          list. Use it when you collect values one at a time.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="append.py">
          <span className="text-gray-800">items = [&quot;pen&quot;]</span>
          {"\n"}
          <span className="text-gray-800">items.append(&quot;pencil&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(items)</span>
        </CodeExercisePanel>

        <OutputBox>[&apos;pen&apos;, &apos;pencil&apos;]</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* insert() */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Plus className="h-3 w-3" />
          insert()
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          insert() — add at any position
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          insert(index, item) places a new value at the given position. Existing
          items shift to the right. Index 0 means the front of the list.
        </p>

        <CodeWindow filename="insert.py">
          <span className="text-gray-800">items = [&quot;pen&quot;, &quot;pencil&quot;]</span>
          {"\n"}
          <span className="text-gray-800">items.insert(0, &quot;eraser&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(items)</span>
        </CodeWindow>

        <OutputBox>[&apos;eraser&apos;, &apos;pen&apos;, &apos;pencil&apos;]</OutputBox>

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

      {/* extend() */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <Plus className="h-3 w-3" />
          extend()
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Add Multiple Items
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          extend() adds every item from another list (or iterable) to the end
          of the current list.
        </p>

        <CodeExercisePanel practiceIndex={5} filename="extend.py">
          <span className="text-gray-800">a = [1, 2]</span>
          {"\n"}
          <span className="text-gray-800">b = [3, 4]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">a.extend(b)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a)</span>
        </CodeExercisePanel>

        <OutputBox>[1, 2, 3, 4]</OutputBox>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Code
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  [1,2].append([3,4])
                </td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  [1, 2, [3, 4]]
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  [1,2].extend([3,4])
                </td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  [1, 2, 3, 4]
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            append() adds one item (even if that item is a list); extend()
            unpacks the other collection and adds each element.
          </span>
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

        <OutputBox>[1, 3, 2]</OutputBox>

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
          pop() removes an item and returns it. With no argument it removes the
          last item. Pass an index to remove from a specific position:{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
            pop(0)
          </code>{" "}
          removes the first.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="pop.py">
          <span className="text-gray-800">nums = [1, 3, 2]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">last = nums.pop()</span>
          {"\n"}
          <span className="text-gray-800">first = nums.pop(0)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(last, first, nums)</span>
        </CodeExercisePanel>

        <OutputBox>2 1 [3]</OutputBox>

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

        <OutputBox>[78, 85, 92]</OutputBox>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            sort() changes the existing list instead of creating a new one.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* reverse() */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <RotateCcw className="h-3 w-3" />
          reverse()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Reverse Item Order
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          reverse() flips the list in place — the first item becomes last and
          vice versa.
        </p>

        <CodeExercisePanel practiceIndex={6} filename="reverse.py">
          <span className="text-gray-800">nums = [1, 2, 3]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">nums.reverse()</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
        </CodeExercisePanel>

        <OutputBox>[3, 2, 1]</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* clear() */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Eraser className="h-3 w-3" />
          clear()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Remove All Items
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          clear() empties the list completely while keeping the same list
          object.
        </p>

        <CodeExercisePanel practiceIndex={7} filename="clear.py">
          <span className="text-gray-800">items = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">items.clear()</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(items)</span>
        </CodeExercisePanel>

        <OutputBox>[]</OutputBox>
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

        <OutputBox>3</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* count() and index() */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <MapPin className="h-3 w-3" />
          Searching
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          count() and index()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          count(value) returns how many times a value appears. index(value)
          returns the position of the first match. If the value is missing,
          index() raises an error.
        </p>

        <CodeWindow filename="search.py">
          <span className="text-gray-800">scores = [90, 85, 90, 78]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores.count(90))</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores.index(85))</span>
        </CodeWindow>

        <OutputBox>
          2
          {"\n"}
          1
        </OutputBox>
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

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Load exercises in the IDE using the buttons on the right or click{" "}
          <strong>IDE</strong> on any code block below.
        </p>
        <CodeExercisePanel practiceIndex={8} filename="challenge.py">
          <span className="text-gray-800">nums = [3, 1, 4]</span>
          {"\n"}
          <span className="text-gray-800">nums.append(1)</span>
          {"\n"}
          <span className="text-gray-800">nums.sort()</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
        </CodeExercisePanel>
        <OutputBox>[1, 1, 3, 4]</OutputBox>
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
