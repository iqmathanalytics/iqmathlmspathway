"use client";

import {
  AlertTriangle,
  ArrowRight,
  Hash,
  Lightbulb,
  List,
  MapPin,
  Play,
  Ruler,
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

const COLORS = ["red", "green", "blue", "yellow"] as const;
const POSITIVE_INDEXES = [0, 1, 2, 3] as const;
const NEGATIVE_INDEXES = [-4, -3, -2, -1] as const;

const SUMMARY_ROWS = [
  { rule: "Index Starts at 0", meaning: "First item is at position 0" },
  { rule: "Positive Index", meaning: "Counts from left to right" },
  { rule: "Negative Index", meaning: "Counts from right to left" },
  { rule: "Out of Range", meaning: "Causes IndexError" },
] as const;

const REF_ROWS = [
  { expr: "colors[0]", meaning: "First item", result: "red" },
  { expr: "colors[1]", meaning: "Second item", result: "green" },
  { expr: "colors[2]", meaning: "Third item", result: "blue" },
  { expr: "colors[-1]", meaning: "Last item", result: "yellow" },
  { expr: "len(colors)", meaning: "Total items", result: "4" },
] as const;

export function ListIndexingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Accessing List Items
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Retrieve elements from a list using index positions
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <List className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          List Indexing
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Just like strings, list items have index positions. Python starts
          counting from 0, so the first item is at index 0.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Use square brackets [ ] with an index number to access a specific
            item.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Example */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Hash className="h-3 w-3" />
          Example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Accessing Elements
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="indexing.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[0]) </span>
          <span className="italic text-[#5a8a5a]"># red</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[2]) </span>
          <span className="italic text-[#5a8a5a]"># blue</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[-1]) </span>
          <span className="italic text-[#5a8a5a]"># yellow</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Visual index map */}
      <section className="mb-8">
        <SectionLabel variant="purple">Visual index map</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Indexes in colors List
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
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
                {POSITIVE_INDEXES.map((idx) => (
                  <td
                    key={idx}
                    className="px-2 py-2.5 text-center font-mono text-gray-600"
                  >
                    [{idx}]
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Each list item has a unique position number called its index.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Negative indexing */}
      <section className="mb-8">
        <SectionLabel variant="teal">Negative indexing</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Accessing Items from the End
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Negative indexes count backwards from the end of the list.
        </p>

        <div className="mb-3 overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
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
                <td className="px-3 py-2.5 font-medium text-gray-700">
                  Negative Index
                </td>
                {NEGATIVE_INDEXES.map((idx) => (
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

        <CodeExercisePanel practiceIndex={1} filename="negative.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[-1]) </span>
          <span className="italic text-[#5a8a5a]"># yellow</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[-2]) </span>
          <span className="italic text-[#5a8a5a]"># blue</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[-3]) </span>
          <span className="italic text-[#5a8a5a]"># green</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            -1 means last item, -2 means second-last item, and so on.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Invalid index */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <AlertTriangle className="h-3 w-3" />
          Invalid index
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Index Out of Range
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Accessing an index that does not exist causes an error.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="error.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[10])</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># IndexError:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # list index out of range
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Length */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Ruler className="h-3 w-3" />
          Length and last item
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using len() with Lists
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="length.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">(colors)) </span>
          <span className="italic text-[#5a8a5a]"># 4</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[</span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">(colors)-1]) </span>
          <span className="italic text-[#5a8a5a]"># yellow</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>len(list) returns the total number of items in the list.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Summary */}
      <section className="mb-8">
        <SectionLabel variant="blue">Summary</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Important Rules
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Rule
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.rule}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.rule}
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
                  Expression
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.expr}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.expr}
                    </code>
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
                  <td className="px-3 py-2.5 font-mono text-gray-600">
                    {row.result}
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
