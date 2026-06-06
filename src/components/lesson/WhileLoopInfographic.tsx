"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Globe,
  Lightbulb,
  Play,
  RefreshCw,
  Search,
  Target,
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
  variant = "default",
}: {
  filename: string;
  children: React.ReactNode;
  variant?: "default" | "error" | "success";
}) {
  const border =
    variant === "error"
      ? "border-red-200 bg-red-50/40"
      : variant === "success"
        ? "border-green-200 bg-green-50/40"
        : "border-black/15 bg-white/60";
  const header =
    variant === "error"
      ? "border-red-200/60 bg-red-50/60"
      : variant === "success"
        ? "border-green-200/60 bg-green-50/60"
        : "border-black/10 bg-black/[0.03]";

  return (
    <div className={`overflow-hidden rounded-xl border ${border}`}>
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-1.5 ${header}`}
      >
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

const STEP_ROWS = [
  { count: "1", condition: "True", action: "Print 1" },
  { count: "2", condition: "True", action: "Print 2" },
  { count: "3", condition: "True", action: "Print 3" },
  { count: "4", condition: "False", action: "Stop Loop" },
] as const;

const SUMMARY_ROWS = [
  { concept: "while", description: "Repeats code while condition is True" },
  { concept: "Condition", description: "Checked before each iteration" },
  { concept: "Loop Body", description: "Indented code block" },
  { concept: "Variable Update", description: "Prevents infinite loops" },
  { concept: "Infinite Loop", description: "Condition never becomes False" },
] as const;

function WhileHeader({
  varName,
  init,
  condition,
}: {
  varName: string;
  init: string | number;
  condition: string;
}) {
  return (
    <>
      <span className="text-gray-800">
        {varName} = {init}
      </span>
      {"\n"}
      {"\n"}
      <span className="font-semibold text-[#1a5fb4]">while</span>
      <span className="text-gray-800"> {condition}:</span>
    </>
  );
}

export function WhileLoopInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">The while Loop</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Repeat code while a condition remains True
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a while Loop?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A <strong>while</strong> loop repeatedly executes a block of code as
          long as its condition is True.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Use a while loop when you don&apos;t know exactly how many times the
            loop should run.
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
          Basic Structure
        </h3>

        <CodeWindow filename="syntax.py">
          <span className="font-semibold text-[#1a5fb4]">while</span>
          <span className="text-gray-800"> condition:</span>
          {"\n"}
          <span className="text-gray-800">    statement</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The loop continues until the condition becomes False.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Counting from 1 to 3
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="count.py">
          <WhileHeader varName="count" init={1} condition="count &lt;= 3" />
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
          {"\n"}
          <span className="text-gray-800">    count = count + 1</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Done&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>
          1
          {"\n"}
          2
          {"\n"}
          3
          {"\n"}
          Done
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Step-by-step */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Search className="h-3 w-3" />
          Step-by-step execution
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How the Loop Works
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  count
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Condition (count ≤ 3)
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {STEP_ROWS.map((row) => (
                <tr
                  key={row.count}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.count}
                  </td>
                  <td
                    className={`px-3.5 py-2.5 font-medium ${
                      row.condition === "True"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {row.condition}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Loop flow */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <RefreshCw className="h-3 w-3" />
          Loop flow
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          while Loop Process
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-4">
          <div className="flex flex-col items-center gap-1 text-center font-mono text-[13px] text-gray-700">
            <span className="rounded-lg bg-black/[0.05] px-3 py-1.5 font-semibold">
              Condition
            </span>
            <span className="text-gray-400">│ ▼</span>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
              True?
            </span>
            <div className="mt-2 grid w-full max-w-md grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] text-gray-500">No</span>
                <span className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-red-800">
                  Exit Loop
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] text-gray-500">Yes</span>
                <span className="rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-green-800">
                  Run Loop Body
                </span>
              </div>
            </div>
            <span className="mt-2 text-gray-400">│ ▼</span>
            <span className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5">
              Update Variable
            </span>
            <span className="text-gray-400">│ ▼</span>
            <span className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5">
              Check Condition Again → Loop Back
            </span>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Infinite loop */}
      <section className="mb-8">
        <SectionLabel variant="blue">Important rule</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Avoid Infinite Loops
        </h3>

        <CodeWindow filename="infinite.py" variant="error">
          <WhileHeader varName="count" init={1} condition="count &lt;= 3" />
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This loop never ends because count is never changed.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Always update a variable inside the loop so the condition eventually
            becomes False.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Correct version */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <CheckCircle2 className="h-3 w-3" />
          Correct version
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Update the Variable
        </h3>

        <CodeWindow filename="correct.py" variant="success">
          <WhileHeader varName="count" init={1} condition="count &lt;= 3" />
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
          {"\n"}
          <span className="text-gray-800">    count += 1</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Now the loop stops after printing 1, 2, and 3.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Password example */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Password Attempts
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="password.py">
          <WhileHeader
            varName="attempts"
            init={1}
            condition="attempts &lt;= 3"
          />
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Try Password&quot;)</span>
          {"\n"}
          <span className="text-gray-800">    attempts += 1</span>
        </CodeExercisePanel>

        <OutputBox>
          Try Password
          {"\n"}
          Try Password
          {"\n"}
          Try Password
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Even numbers */}
      <section className="mb-8">
        <SectionLabel variant="amber">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Print Even Numbers
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="even.py">
          <WhileHeader varName="num" init={2} condition="num &lt;= 10" />
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(num)</span>
          {"\n"}
          <span className="text-gray-800">    num += 2</span>
        </CodeExercisePanel>

        <OutputBox>
          2
          {"\n"}
          4
          {"\n"}
          6
          {"\n"}
          8
          {"\n"}
          10
        </OutputBox>
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

        <CodeExercisePanel practiceIndex={3} filename="countdown.py">
          <WhileHeader varName="number" init={5} condition="number &gt;= 1" />
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(number)</span>
          {"\n"}
          <span className="text-gray-800">    number -= 1</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Blast Off!&quot;)</span>
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
          {"\n"}
          Blast Off!
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
