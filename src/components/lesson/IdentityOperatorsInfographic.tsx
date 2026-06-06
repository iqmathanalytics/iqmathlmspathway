"use client";

import {
  ArrowRight,
  Fingerprint,
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
    symbol: "is",
    name: "Same object",
    note: "Returns True if both variables refer to the exact same object",
    example: "a is b",
    result: "→ True/False",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "is not",
    name: "Different objects",
    note: "Returns True if the variables refer to different objects",
    example: "a is not b",
    result: "→ True/False",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const REF_ROWS = [
  {
    symbol: "is",
    meaning: "Same object",
    example: "a is b",
    result: "True if same object",
    color: "text-[#1a5fb4]",
  },
  {
    symbol: "is not",
    meaning: "Different objects",
    example: "a is not b",
    result: "True if different objects",
    color: "text-[#5e3fa3]",
  },
  {
    symbol: "==",
    meaning: "Same value",
    example: "a == b",
    result: "True if values match",
    color: "text-gray-700",
  },
  {
    symbol: "None",
    meaning: "Check missing value",
    example: "value is None",
    result: "Recommended approach",
    color: "text-[#0f6e56]",
  },
] as const;

export function IdentityOperatorsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Identity Operators
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Check whether two variables refer to the same object in memory
        </p>
      </header>

      {/* Section 1: The operators */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Fingerprint className="h-3 w-3" />
          The operators
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Two identity operators
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Identity operators compare the memory identity of objects rather than
          their values. Python provides two identity operators:{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            is
          </code>{" "}
          and{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            is not
          </code>
          .
        </p>

        <div className="flex flex-col gap-1.5">
          {OPERATORS.map((op) => (
            <div
              key={op.symbol}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`min-w-12 shrink-0 text-center font-mono text-lg font-semibold ${op.symbolClass}`}
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
                <span className="font-semibold text-[#2d7a45]">{op.result}</span>
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
          Comparing identity and equality
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="identity.py">
          <span className="text-gray-800">a = [1, 2]</span>
          {"\n"}
          <span className="text-gray-800">b = [1, 2]</span>
          {"\n"}
          <span className="text-gray-800">c = a</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a == b) </span>
          <span className="italic text-[#5a8a5a]"># True (same contents)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a is b) </span>
          <span className="italic text-[#5a8a5a]">
            # False (different objects)
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a is c) </span>
          <span className="italic text-[#5a8a5a]"># True (same object)</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: == vs is */}
      <section className="mb-8">
        <SectionLabel variant="purple">Important concept</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          == vs is
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Operator
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Checks
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono font-semibold text-gray-800">
                  ==
                </td>
                <td className="px-3.5 py-2.5 text-gray-600">Value Equality</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  [1,2] == [1,2] → True
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-mono font-semibold text-gray-800">
                  is
                </td>
                <td className="px-3.5 py-2.5 text-gray-600">Object Identity</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  [1,2] is [1,2] → False
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              ==
            </code>{" "}
            when comparing values. Use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              is
            </code>{" "}
            when checking if two variables refer to the exact same object.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: None check */}
      <section className="mb-8">
        <SectionLabel variant="teal">Common usage</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Checking for None
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="none_check.py">
          <span className="text-gray-800">value = None</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">if value is None:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;No value found&quot;)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Python&apos;s recommended way to test for missing values is{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              value is None
            </code>{" "}
            rather than{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              value == None
            </code>
            .
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
                    className={`px-3 py-2.5 font-mono text-[15px] font-semibold ${row.color}`}
                  >
                    {row.symbol}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
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
