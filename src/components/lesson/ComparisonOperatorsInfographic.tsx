"use client";

import {
  AlertTriangle,
  ArrowRight,
  MapPin,
  Play,
  Search,
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

const OPERATORS = [
  {
    symbol: "==",
    name: "Equal to",
    note: "True if both values are the same",
    example: "18 == 18",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "!=",
    name: "Not equal to",
    note: "True if values are different",
    example: "18 != 21",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#b83232]",
  },
  {
    symbol: ">",
    name: "Greater than",
    note: "True if left is larger than right",
    example: "18 > 16",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "<",
    name: "Less than",
    note: "True if left is smaller than right",
    example: "18 < 16",
    result: "→ False",
    resultClass: "text-[#b83232] font-semibold",
    symbolClass: "text-[#5e3fa3]",
  },
  {
    symbol: ">=",
    name: "Greater than or equal to",
    note: "True if left is larger or the same",
    example: "18 >= 18",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#0f6e56]",
  },
  {
    symbol: "<=",
    name: "Less than or equal to",
    note: "True if left is smaller or the same",
    example: "16 <= 18",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#8a5a00]",
  },
] as const;

const REF_ROWS = [
  {
    symbol: "==",
    meaning: "Equal to",
    example: "18 == 18",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#1a5fb4]",
  },
  {
    symbol: "!=",
    meaning: "Not equal to",
    example: "18 != 21",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#b83232]",
  },
  {
    symbol: ">",
    meaning: "Greater than",
    example: "18 > 16",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#2d7a45]",
  },
  {
    symbol: "<",
    meaning: "Less than",
    example: "18 < 16",
    result: "False",
    resultClass: "text-[#b83232] font-semibold",
    color: "text-[#5e3fa3]",
  },
  {
    symbol: ">=",
    meaning: "Greater than or equal",
    example: "18 >= 18",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#0f6e56]",
  },
  {
    symbol: "<=",
    meaning: "Less than or equal",
    example: "16 <= 18",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#8a5a00]",
  },
] as const;

export function ComparisonOperatorsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Comparison Operators
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Compare two values — the result is always True or False
        </p>
      </header>

      {/* Section 1: All operators */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Search className="h-3 w-3" />
          The operators
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Six comparison operators
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Every comparison returns a <strong>boolean</strong> — either{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            True
          </code>{" "}
          or{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            False
          </code>
          . You&apos;ll use these constantly with{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            if
          </code>{" "}
          statements and loops.
        </p>

        <div className="flex flex-col gap-1.5">
          {OPERATORS.map((op) => (
            <div
              key={op.symbol}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`min-w-10 shrink-0 text-center font-mono text-lg font-semibold ${op.symbolClass}`}
              >
                {op.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {op.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{op.note}</p>
              </div>
              <p className="shrink-0 whitespace-nowrap font-mono text-[13px] text-gray-600">
                {op.example}{" "}
                <span className={op.resultClass}>{op.result}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Code example */}
      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          All six with the same variable
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="comparison.py">
          <span className="text-gray-800">age = </span>
          <span className="text-[#1a5fb4]">18</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(age == </span>
          <span className="text-[#1a5fb4]">18</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(age != </span>
          <span className="text-[#1a5fb4]">21</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(age &gt; </span>
          <span className="text-[#1a5fb4]">16</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(age &lt; </span>
          <span className="text-[#1a5fb4]">16</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#b83232]">False</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(age &gt;= </span>
          <span className="text-[#1a5fb4]">18</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(age &lt;= </span>
          <span className="text-[#1a5fb4]">20</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: = vs == */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <AlertTriangle className="h-3 w-3" />
          Common mistake
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            =
          </code>{" "}
          vs{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            ==
          </code>{" "}
          — easy to mix up
        </h3>
        <p className="mb-3.5 text-[13.5px] leading-relaxed text-gray-600">
          This is the most common beginner mistake in Python. They look similar
          but do completely different things.
        </p>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-black/15 bg-white/55 p-4 text-center">
            <span className="rounded-md bg-amber-100 px-3 py-1 font-mono text-[15px] font-semibold text-[#8a5a00]">
              =
            </span>
            <span className="font-mono text-[15px] font-semibold text-gray-900">
              age = 18
            </span>
            <p className="font-mono text-sm leading-relaxed text-gray-600">
              Stores 18 into the variable{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
                age
              </code>
              . No True/False.
            </p>
            <span className="text-xs text-gray-500">
              assignment — sets a value
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-black/15 bg-white/55 p-4 text-center">
            <span className="rounded-md bg-blue-100 px-3 py-1 font-mono text-[15px] font-semibold text-[#1a5fb4]">
              ==
            </span>
            <span className="font-mono text-[15px] font-semibold text-gray-900">
              age == 18
            </span>
            <p className="font-mono text-sm leading-relaxed text-gray-600">
              Asks: is{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
                age
              </code>{" "}
              equal to 18? Returns{" "}
              <span className="font-semibold text-[#2d7a45]">True</span> or{" "}
              <span className="font-semibold text-[#b83232]">False</span>.
            </p>
            <span className="text-xs text-gray-500">
              comparison — checks a value
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-300/50 bg-amber-50 px-4 py-3.5 text-[13.5px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Use <strong className="text-[#8a5a00]">==</strong> for comparison. A
            single <strong className="text-[#8a5a00]">=</strong> is assignment,
            not comparison — using it inside an{" "}
            <code className="rounded bg-amber-100 px-1 font-mono text-[12.5px] text-[#8a5a00]">
              if
            </code>{" "}
            condition will cause an error.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Boolean result */}
      <section className="mb-8">
        <SectionLabel variant="teal">Closer look</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          The result is always True or False
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Every comparison produces a <strong>boolean</strong> value. You can
          print it, store it in a variable, or use it directly in an{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            if
          </code>{" "}
          statement.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="booleans.py">
          <span className="text-gray-800">result = </span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> &gt; </span>
          <span className="text-[#1a5fb4]">5</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> == </span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> == </span>
          <span className="text-[#1a5fb4]">9</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#b83232]">False</span>
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Comparisons are the foundation of{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              if
            </code>{" "}
            statements. When you write{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              if age &gt;= 18:
            </code>
            , Python evaluates the comparison first — if it&apos;s{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              True
            </code>
            , the block runs; if{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              False
            </code>
            , it&apos;s skipped.
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
                <th className="w-14 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Op
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.symbol}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td
                    className={`px-3 py-2.5 text-center font-mono text-[15px] font-semibold ${row.color}`}
                  >
                    {row.symbol}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.example}
                    </code>
                  </td>
                  <td className={`px-3 py-2.5 ${row.resultClass}`}>
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
