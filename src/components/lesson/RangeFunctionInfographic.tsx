"use client";

import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Key,
  Lightbulb,
  Play,
  Search,
  Table2,
  Target,
  TrendingUp,
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

function RangeLoop({
  varName = "i",
  args,
}: {
  varName?: string;
  args: string;
}) {
  return (
    <>
      <span className="font-semibold text-[#1a5fb4]">for</span>
      <span className="text-gray-800"> {varName} </span>
      <span className="font-semibold text-[#1a5fb4]">in</span>
      <span className="text-gray-800"> </span>
      <span className="font-semibold text-[#1a5fb4]">range</span>
      <span className="text-gray-800">({args}):</span>
      {"\n"}
      <span className="text-gray-800">    </span>
      <span className="font-semibold text-[#8b2070]">print</span>
      <span className="text-gray-800">({varName})</span>
    </>
  );
}

const PARAM_ROWS = [
  { param: "start", meaning: "First value (inclusive)" },
  { param: "stop", meaning: "Stop before this value" },
  { param: "step", meaning: "Increment value (optional)" },
] as const;

const USES_ROWS = [
  { code: "range(5)", output: "0,1,2,3,4" },
  { code: "range(2,6)", output: "2,3,4,5" },
  { code: "range(0,10,2)", output: "0,2,4,6,8" },
  { code: "range(5,0,-1)", output: "5,4,3,2,1" },
] as const;

const SUMMARY_ROWS = [
  { concept: "range(stop)", description: "Starts from 0" },
  { concept: "range(start, stop)", description: "Custom start value" },
  { concept: "range(start, stop, step)", description: "Custom increment" },
  { concept: "stop", description: "Never included" },
  { concept: "Negative step", description: "Counts backward" },
] as const;

export function RangeFunctionInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          The range() Function
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Generate a sequence of numbers for loops
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is range()?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The <strong>range()</strong> function generates a sequence of numbers.
          It is commonly used with <strong>for loops</strong> to repeat code a
          specific number of times.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            range() creates numbers automatically instead of typing them
            manually.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Syntax */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Code2 className="h-3 w-3" />
          Syntax
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          General Form
        </h3>

        <CodeWindow filename="syntax.py">
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(start, stop, step)</span>
        </CodeWindow>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Parameter
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {PARAM_ROWS.map((row) => (
                <tr
                  key={row.param}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.param}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* range(stop) */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          range(stop)
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="range_stop.py">
          <RangeLoop args="5" />
        </CodeExercisePanel>

        <OutputBox>
          0
          {"\n"}
          1
          {"\n"}
          2
          {"\n"}
          3
          {"\n"}
          4
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          range(5) starts from 0 and stops before 5.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Visualization range(5) */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <TrendingUp className="h-3 w-3" />
          Visualization
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          range(5)
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] text-gray-700">
          <div className="font-semibold">range(5)</div>
          <div className="mt-2">0 → 1 → 2 → 3 → 4</div>
          <div className="mt-2 text-gray-500">Stop before 5</div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* range(start, stop) */}
      <section className="mb-8">
        <SectionLabel variant="green">Example 2</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          range(start, stop)
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="range_start_stop.py">
          <RangeLoop args="2, 6" />
        </CodeExercisePanel>

        <OutputBox>
          2
          {"\n"}
          3
          {"\n"}
          4
          {"\n"}
          5
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The sequence starts at 2 and stops before 6.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Visualization range(2, 6) */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Search className="h-3 w-3" />
          Visualization
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          range(2, 6)
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] text-gray-700">
          <div>2 → 3 → 4 → 5</div>
          <div className="mt-2 text-gray-500">Stop before 6</div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* range with step */}
      <section className="mb-8">
        <SectionLabel variant="blue">Example 3</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          range(start, stop, step)
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="range_step.py">
          <RangeLoop args="0, 10, 2" />
        </CodeExercisePanel>

        <OutputBox>
          0
          {"\n"}
          2
          {"\n"}
          4
          {"\n"}
          6
          {"\n"}
          8
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The step value is 2, so the numbers increase by 2 each time.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Step visualization */}
      <section className="mb-8">
        <SectionLabel variant="purple">Visualization</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          range(0, 10, 2)
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] text-gray-700">
          <div>0 → 2 → 4 → 6 → 8</div>
          <div className="mt-2 text-gray-500">Stop before 10</div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Stop rule */}
      <section className="mb-8">
        <SectionLabel variant="amber">Important rule</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Stop Value Is Never Included
        </h3>

        <CodeWindow filename="stop_rule.py">
          <RangeLoop args="1, 5" />
        </CodeWindow>

        <OutputBox>
          1
          {"\n"}
          2
          {"\n"}
          3
          {"\n"}
          4
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Notice that 5 is not printed.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Key className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>
            range() always stops before the stop value, just like slicing.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Negative step */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <ArrowDown className="h-3 w-3" />
          Reverse counting
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using Negative Step
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="reverse.py">
          <RangeLoop args="5, 0, -1" />
        </CodeExercisePanel>

        <OutputBox>
          5
          {"\n"}
          4
          {"\n"}
          3
          {"\n"}
          2
          {"\n"}
          1
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          A negative step counts backward.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Student IDs */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Print First 5 Student IDs
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="student_ids.py">
          <RangeLoop varName="student_id" args="1, 6" />
        </CodeExercisePanel>

        <OutputBox>
          1
          {"\n"}
          2
          {"\n"}
          3
          {"\n"}
          4
          {"\n"}
          5
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Common uses table */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Table2 className="h-3 w-3" />
          Common uses
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">Examples</h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Code
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Output
                </th>
              </tr>
            </thead>
            <tbody>
              {USES_ROWS.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.code}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.output}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={5} filename="practice.py">
          <RangeLoop args="3, 9" />
        </CodeExercisePanel>

        <OutputBox>
          3
          {"\n"}
          4
          {"\n"}
          5
          {"\n"}
          6
          {"\n"}
          7
          {"\n"}
          8
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Quick summary */}
      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight">
          Quick summary
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Concept
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.concept}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.concept}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">
                    {row.description}
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
