"use client";

import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  List,
  MapPin,
  Pencil,
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

const FEATURES = [
  {
    symbol: "1",
    name: "Ordered",
    note: "Items keep their position",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "2",
    name: "Mutable",
    note: "Items can be changed",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "3",
    name: "Duplicates Allowed",
    note: "Repeated values are permitted",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const TUPLE_COMPARE = [
  { feature: "Ordered", list: "✅ Yes", tuple: "✅ Yes" },
  { feature: "Changeable", list: "✅ Yes", tuple: "❌ No" },
  { feature: "Duplicates", list: "✅ Yes", tuple: "✅ Yes" },
] as const;

const SUMMARY_ROWS = [
  { property: "Ordered", meaning: "Items keep their sequence" },
  { property: "Mutable", meaning: "Items can be changed" },
  { property: "Duplicates Allowed", meaning: "Repeated values are accepted" },
] as const;

const REF_ROWS = [
  { feature: "Syntax", value: "[ ]" },
  { feature: "Ordered", value: "✅ Yes" },
  { feature: "Mutable", value: "✅ Yes" },
  { feature: "Duplicates Allowed", value: "✅ Yes" },
  { feature: "Mixed Data Types", value: "✅ Yes" },
  { feature: "Used in Data Science", value: "✅ Frequently" },
] as const;

export function ListCharacteristicsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          List Characteristics
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Understanding the important properties of Python lists
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <List className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Key Features of Lists
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python lists have several important characteristics that make them
          useful for storing and managing collections of data.
        </p>

        <div className="flex flex-col gap-1.5">
          {FEATURES.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] font-mono text-sm font-semibold ${f.symbolClass}`}
              >
                {f.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {f.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{f.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Ordered */}
      <section className="mb-8">
        <SectionLabel variant="green">Ordered</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Items Maintain Their Position
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Lists preserve the order in which items are inserted. The first item
          remains first unless you explicitly modify the list.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="ordered.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(fruits)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Python remembers the exact order of items in a list.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Mutable */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Pencil className="h-3 w-3" />
          Mutable
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Lists Can Be Modified
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          After creating a list, you can add, remove, or change elements.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="mutable.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">fruits[1] = &quot;orange&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(fruits)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # [&apos;apple&apos;, &apos;orange&apos;, &apos;mango&apos;]
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Lists are mutable, meaning their contents can change after creation.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Duplicates */}
      <section className="mb-8">
        <SectionLabel variant="teal">Duplicates allowed</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Repeated Values Are Accepted
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Lists allow the same value to appear multiple times.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="duplicates.py">
          <span className="text-gray-800">scores = [90, 85, 90, 92]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[280px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Index
                </th>
                {[0, 1, 2, 3].map((idx) => (
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
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Value</td>
                {[90, 85, 90, 92].map((val, i) => (
                  <td
                    key={i}
                    className="px-2 py-2.5 text-center font-mono text-gray-800"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            The value 90 appears twice, and Python allows it without any
            problem.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: List vs Tuple */}
      <section className="mb-8">
        <SectionLabel variant="amber">List vs tuple</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Preview of Tuples
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Lists and tuples are similar, but tuples cannot be modified after
          creation.
        </p>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Feature
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  List [ ]
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Tuple ( )
                </th>
              </tr>
            </thead>
            <tbody>
              {TUPLE_COMPARE.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.list}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.tuple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Tuples will be covered later in detail.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Data science */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <BarChart3 className="h-3 w-3" />
          Data science connection
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Lists and NumPy Arrays
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          In data science, lists are often the starting point before converting
          data into NumPy arrays for faster mathematical operations.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="datascience.py">
          <span className="text-gray-800">numbers = [10, 20, 30, 40, 50]</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Later:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># numpy.array(numbers)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            NumPy arrays are optimized for large-scale numerical calculations.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Summary */}
      <section className="mb-8">
        <SectionLabel variant="blue">Summary</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Remember These Three Rules
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Property
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.property}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.property}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.meaning}</td>
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
                  Feature
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Lists
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">
                    {row.feature === "Syntax" ? (
                      <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
                        {row.value}
                      </code>
                    ) : (
                      row.value
                    )}
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
