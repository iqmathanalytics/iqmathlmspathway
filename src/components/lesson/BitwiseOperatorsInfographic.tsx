"use client";

import {
  ArrowRight,
  ArrowLeftRight,
  Cog,
  Lightbulb,
  MapPin,
  Play,
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

const OPERATORS = [
  {
    symbol: "&",
    name: "Bitwise AND",
    note: "1 only if both bits are 1",
    example: "5 & 3 → 1",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "|",
    name: "Bitwise OR",
    note: "1 if either bit is 1",
    example: "5 | 3 → 7",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "^",
    name: "Bitwise XOR",
    note: "1 if bits are different",
    example: "5 ^ 3 → 6",
    symbolClass: "text-[#5e3fa3]",
  },
  {
    symbol: "~",
    name: "Bitwise NOT",
    note: "Flips all bits",
    example: "~5 → -6",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "<<",
    name: "Left Shift",
    note: "Moves bits left",
    example: "5 << 1 → 10",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: ">>",
    name: "Right Shift",
    note: "Moves bits right",
    example: "5 >> 1 → 2",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const BINARY_ROWS = [
  { decimal: "5", binary: "101" },
  { decimal: "3", binary: "011" },
  { decimal: "5 & 3", binary: "001 = 1" },
] as const;

const SHIFT_ROWS = [
  { operation: "5", binary: "101", result: "5" },
  { operation: "5 << 1", binary: "1010", result: "10" },
  { operation: "5 >> 1", binary: "10", result: "2" },
] as const;

const USE_CASES = [
  "Low-level programming",
  "Device drivers",
  "Networking",
  "Data compression",
  "Cryptography",
  "Performance optimization",
] as const;

const REF_ROWS = [
  { symbol: "&", name: "AND", example: "5 & 3", result: "1", color: "text-[#1a5fb4]" },
  { symbol: "|", name: "OR", example: "5 | 3", result: "7", color: "text-[#2d7a45]" },
  { symbol: "^", name: "XOR", example: "5 ^ 3", result: "6", color: "text-[#5e3fa3]" },
  { symbol: "~", name: "NOT", example: "~5", result: "-6", color: "text-[#1a5fb4]" },
  { symbol: "<<", name: "Left Shift", example: "5 << 1", result: "10", color: "text-[#2d7a45]" },
  { symbol: ">>", name: "Right Shift", example: "5 >> 1", result: "2", color: "text-[#5e3fa3]" },
] as const;

export function BitwiseOperatorsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Bitwise Operators
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Perform operations directly on binary bits
        </p>
      </header>

      {/* Section 1: The operators */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Cog className="h-3 w-3" />
          The operators
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Six bitwise operators
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Bitwise operators work on the binary representation of numbers. They
          compare or manipulate individual bits (0s and 1s).
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
                {op.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Code */}
      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic examples
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="bitwise.py">
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(5 & 3) </span>
          <span className="italic text-[#5a8a5a]"># 1</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(5 | 3) </span>
          <span className="italic text-[#5a8a5a]"># 7</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(5 ^ 3) </span>
          <span className="italic text-[#5a8a5a]"># 6</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(~5) </span>
          <span className="italic text-[#5a8a5a]"># -6</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(5 &lt;&lt; 1) </span>
          <span className="italic text-[#5a8a5a]"># 10</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(5 &gt;&gt; 1) </span>
          <span className="italic text-[#5a8a5a]"># 2</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Binary view */}
      <section className="mb-8">
        <SectionLabel variant="purple">Binary view</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Understanding 5 & 3
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Decimal
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Binary
                </th>
              </tr>
            </thead>
            <tbody>
              {BINARY_ROWS.map((row) => (
                <tr
                  key={row.decimal}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.decimal}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.binary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            AND returns 1 only when both corresponding bits are 1.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Shifting */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <ArrowLeftRight className="h-3 w-3" />
          Shifting
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Left and right shift
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Operation
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Binary
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {SHIFT_ROWS.map((row) => (
                <tr
                  key={row.operation}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.operation}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.binary}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Left shift usually multiplies by 2, while right shift usually
            divides by 2.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: When used */}
      <section className="mb-8">
        <SectionLabel variant="amber">Note</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          When are bitwise operators used?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Bitwise operators are commonly used in:
        </p>

        <ul className="mb-3 list-disc space-y-1 pl-5 text-[13.5px] text-gray-600">
          {USE_CASES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            In everyday Python programming, arithmetic operators (+, -, *, /) and
            comparison operators (==, &gt;, &lt;) are used much more frequently
            than bitwise operators.
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
                  Operator
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Name
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
                    className={`px-3 py-2.5 font-mono text-[15px] font-semibold ${row.color}`}
                  >
                    {row.symbol}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.name}</td>
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.example}
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
