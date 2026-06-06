"use client";

import {
  ArrowRight,
  CaseSensitive,
  Lightbulb,
  MapPin,
  Package,
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
    symbol: "in",
    name: "Value exists",
    note: "Returns True if the value is found",
    example: '"banana" in fruits',
    result: "→ True",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "not in",
    name: "Value does not exist",
    note: "Returns True if the value is absent",
    example: '"grape" not in fruits',
    result: "→ True",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const SEARCH_ROWS = [
  {
    container: '["apple","banana"]',
    check: '"banana" in list',
    result: "True",
    resultClass: "font-semibold text-[#2d7a45]",
  },
  {
    container: '["apple","banana"]',
    check: '"grape" in list',
    result: "False",
    resultClass: "font-semibold text-[#b83232]",
  },
  {
    container: '"Python"',
    check: '"P" in word',
    result: "True",
    resultClass: "font-semibold text-[#2d7a45]",
  },
  {
    container: '"Python"',
    check: '"z" in word',
    result: "False",
    resultClass: "font-semibold text-[#b83232]",
  },
] as const;

const REF_ROWS = [
  {
    symbol: "in",
    meaning: "Value exists",
    example: '"a" in "cat"',
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#1a5fb4]",
  },
  {
    symbol: "not in",
    meaning: "Value absent",
    example: '"z" not in "cat"',
    result: "True",
    resultClass: "text-[#2d7a45] font-semibold",
    color: "text-[#5e3fa3]",
  },
  {
    symbol: "in",
    meaning: "Search list",
    example: '"apple" in fruits',
    result: "True/False",
    resultClass: "text-gray-600",
    color: "text-[#1a5fb4]",
  },
  {
    symbol: "not in",
    meaning: "Check absence",
    example: '"grape" not in fruits',
    result: "True/False",
    resultClass: "text-gray-600",
    color: "text-[#5e3fa3]",
  },
] as const;

export function MembershipOperatorsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Membership Operators
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Check whether a value exists inside a sequence or collection
        </p>
      </header>

      {/* Section 1: The operators */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Package className="h-3 w-3" />
          The operators
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Two membership operators
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Membership operators are used to test whether a value exists inside a
          sequence such as a list, tuple, string, or set.
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

      {/* Section 2: List membership */}
      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Checking items in a list
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="membership.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;banana&quot; in fruits){" "}
          </span>
          <span className="italic text-[#5a8a5a]"># True</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;grape&quot; not in fruits){" "}
          </span>
          <span className="italic text-[#5a8a5a]"># True</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Strings */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <CaseSensitive className="h-3 w-3" />
          Strings
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Membership inside text
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Membership operators can also search for characters or words inside
          strings.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="string_search.py">
          <span className="text-gray-800">word = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;P&quot; in word) </span>
          <span className="italic text-[#5a8a5a]"># True</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;x&quot; in word) </span>
          <span className="italic text-[#5a8a5a]"># False</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Py&quot; in word) </span>
          <span className="italic text-[#5a8a5a]"># True</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: How it works */}
      <section className="mb-8">
        <SectionLabel variant="purple">How it works</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Searching inside a container
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Container
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Check
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {SEARCH_ROWS.map((row) => (
                <tr
                  key={`${row.container}-${row.check}`}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.container}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.check}
                  </td>
                  <td className={`px-3.5 py-2.5 font-mono ${row.resultClass}`}>
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
            Python scans through the container and checks whether the specified
            value exists.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Validation */}
      <section className="mb-8">
        <SectionLabel variant="amber">Common use</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Validating user input
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="validation.py">
          <span className="text-gray-800">
            allowed = [&quot;admin&quot;, &quot;editor&quot;, &quot;viewer&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">role = &quot;editor&quot;</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">if role in allowed:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Access granted&quot;)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Membership operators are commonly used for validation, searching,
            filtering, and checking permissions.
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
              {REF_ROWS.map((row, i) => (
                <tr
                  key={`${row.symbol}-${row.example}-${i}`}
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
