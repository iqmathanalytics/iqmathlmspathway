"use client";

import {
  ArrowRight,
  Lightbulb,
  Link2,
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
    symbol: "and",
    name: "Both must be True",
    note: "Returns True only if the left AND right are both True",
    example: "True and True",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "or",
    name: "At least one must be True",
    note: "Returns True if either the left OR right is True",
    example: "True or False",
    result: "→ True",
    resultClass: "text-[#2d7a45] font-semibold",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "not",
    name: "Flips the value",
    note: "Turns True into False, and False into True",
    example: "not True",
    result: "→ False",
    resultClass: "text-[#b83232] font-semibold",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const AND_TRUTH = [
  { a: "True", b: "True", result: "True" },
  { a: "True", b: "False", result: "False" },
  { a: "False", b: "True", result: "False" },
  { a: "False", b: "False", result: "False" },
] as const;

const OR_TRUTH = [
  { a: "True", b: "True", result: "True" },
  { a: "True", b: "False", result: "True" },
  { a: "False", b: "True", result: "True" },
  { a: "False", b: "False", result: "False" },
] as const;

const NOT_TRUTH = [
  { a: "True", result: "False" },
  { a: "False", result: "True" },
] as const;

const REF_ROWS = [
  {
    symbol: "and",
    meaning: "Both must be True",
    example: "True and True",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#1a5fb4]",
  },
  {
    symbol: "and",
    meaning: "One is False",
    example: "True and False",
    result: "False",
    resultClass: "text-[#b83232] font-semibold",
    color: "text-[#1a5fb4]",
  },
  {
    symbol: "or",
    meaning: "At least one True",
    example: "True or False",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#2d7a45]",
  },
  {
    symbol: "or",
    meaning: "Both are False",
    example: "False or False",
    result: "False",
    resultClass: "text-[#b83232] font-semibold",
    color: "text-[#2d7a45]",
  },
  {
    symbol: "not",
    meaning: "Flips the value",
    example: "not True",
    result: "False",
    resultClass: "text-[#b83232] font-semibold",
    color: "text-[#5e3fa3]",
  },
  {
    symbol: "not",
    meaning: "Flips the value",
    example: "not False",
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#5e3fa3]",
  },
] as const;

function boolClass(value: string) {
  return value === "True"
    ? "font-semibold text-[#2d7a45]"
    : "font-semibold text-[#b83232]";
}

export function LogicalOperatorsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Logical Operators
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Combine conditions together — and, or, not
        </p>
      </header>

      {/* Section 1: The operators */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Link2 className="h-3 w-3" />
          The operators
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Three logical operators
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Logical operators let you combine or flip boolean values. They&apos;re
          used to check multiple conditions at once inside{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            if
          </code>{" "}
          statements.
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
          Real-world example
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="logical.py">
          <span className="text-gray-800">has_ticket = </span>
          <span className="font-semibold text-[#2d7a45]">True</span>
          {"\n"}
          <span className="text-gray-800">is_adult = </span>
          <span className="font-semibold text-[#2d7a45]">True</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(has_ticket </span>
          <span className="font-semibold text-[#1a5fb4]">and</span>
          <span className="text-gray-800"> is_adult) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#2d7a45]">True</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">or</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#b83232]">False</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#2d7a45]">True</span>
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">not</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#2d7a45]">True</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # <span className="font-semibold text-[#b83232]">False</span>
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: and truth table */}
      <section className="mb-8">
        <SectionLabel variant="blue">Closer look</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          How{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            and
          </code>{" "}
          works — all combinations
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            and
          </code>{" "}
          needs BOTH sides to be True. If even one is False, the whole thing is
          False.
        </p>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  A
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  B
                </th>
                <th className="px-3.5 py-2 text-left font-mono text-[13px] font-semibold text-gray-700">
                  A and B
                </th>
              </tr>
            </thead>
            <tbody>
              {AND_TRUTH.map((row) => (
                <tr
                  key={`${row.a}-${row.b}`}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className={`px-3.5 py-2.5 font-mono ${boolClass(row.a)}`}>
                    {row.a}
                  </td>
                  <td className={`px-3.5 py-2.5 font-mono ${boolClass(row.b)}`}>
                    {row.b}
                  </td>
                  <td
                    className={`px-3.5 py-2.5 font-mono ${boolClass(row.result)}`}
                  >
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Think of it like a locked door with two keys — both keys are needed
            to open it. One key alone isn&apos;t enough.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: or truth table */}
      <section className="mb-8">
        <SectionLabel variant="green">Closer look</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          How{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            or
          </code>{" "}
          works — all combinations
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            or
          </code>{" "}
          only needs ONE side to be True. It returns False only when both sides
          are False.
        </p>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  A
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  B
                </th>
                <th className="px-3.5 py-2 text-left font-mono text-[13px] font-semibold text-gray-700">
                  A or B
                </th>
              </tr>
            </thead>
            <tbody>
              {OR_TRUTH.map((row) => (
                <tr
                  key={`${row.a}-${row.b}`}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className={`px-3.5 py-2.5 font-mono ${boolClass(row.a)}`}>
                    {row.a}
                  </td>
                  <td className={`px-3.5 py-2.5 font-mono ${boolClass(row.b)}`}>
                    {row.b}
                  </td>
                  <td
                    className={`px-3.5 py-2.5 font-mono ${boolClass(row.result)}`}
                  >
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Think of it like a light with two switches — either switch can turn
            it on. Both have to be off for the light to stay off.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: not */}
      <section className="mb-8">
        <SectionLabel variant="purple">Special case</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          How{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            not
          </code>{" "}
          works — flipping a value
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            not
          </code>{" "}
          only takes one value and simply reverses it. True becomes False, False
          becomes True.
        </p>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  A
                </th>
                <th className="px-3.5 py-2 text-left font-mono text-[13px] font-semibold text-gray-700">
                  not A
                </th>
              </tr>
            </thead>
            <tbody>
              {NOT_TRUTH.map((row) => (
                <tr
                  key={row.a}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className={`px-3.5 py-2.5 font-mono ${boolClass(row.a)}`}>
                    {row.a}
                  </td>
                  <td
                    className={`px-3.5 py-2.5 font-mono ${boolClass(row.result)}`}
                  >
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
            A common use:{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              if not is_logged_in:
            </code>{" "}
            — instead of checking{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              is_logged_in == False
            </code>
            , you can just flip it with{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              not
            </code>
            . Reads more naturally.
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
              {REF_ROWS.map((row, i) => (
                <tr
                  key={`${row.symbol}-${row.example}-${i}`}
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
