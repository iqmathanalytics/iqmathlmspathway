"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  Code2,
  Layers,
  Lightbulb,
  Play,
  RefreshCw,
  Repeat,
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

const STRUCTURE_PARTS = [
  { part: "Base Case", meaning: "Stops recursion" },
  {
    part: "Recursive Case",
    meaning: "Calls function again with smaller input",
  },
] as const;

const USE_CASES = [
  "Tree structures (file systems, DOM)",
  "Mathematical problems (factorial, Fibonacci)",
  "Divide-and-conquer algorithms",
  "Backtracking problems",
] as const;

const SUMMARY_ROWS = [
  { concept: "Recursion", description: "Function calling itself" },
  { concept: "Base Case", description: "Stops recursion" },
  {
    concept: "Recursive Case",
    description: "Breaks problem into smaller steps",
  },
  { concept: "Call Stack", description: "Stores function calls temporarily" },
  {
    concept: "Use Case",
    description: "Problems with repeated structure",
  },
] as const;

export function FunctionRecursionInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Recursion in Python
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          A function calling itself to solve problems step by step
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Concept
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is Recursion?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Recursion occurs when a function calls itself to solve a smaller
          version of the same problem.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Every recursive function must have a stopping condition to avoid
            infinite calls.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Countdown */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Repeat className="h-3 w-3" />
          Example 1
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Countdown Function
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="countdown.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> countdown(n):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n &lt;= 0:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#c64600]">&quot;Done&quot;</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(n)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    countdown(n - 1)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">countdown(3)</span>
        </CodeExercisePanel>

        <OutputBox>{`3\n2\n1\nDone`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Execution flow */}
      <section className="mb-8">
        <SectionLabel variant="purple">How it works</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Step-by-Step Execution
        </h3>

        <CodeWindow filename="flow.txt">
          <span className="text-gray-800">countdown(3)</span>
          {"\n"}
          <span className="text-gray-800"> ├── print(3)</span>
          {"\n"}
          <span className="text-gray-800"> ├── countdown(2)</span>
          {"\n"}
          <span className="text-gray-800"> │     ├── print(2)</span>
          {"\n"}
          <span className="text-gray-800"> │     ├── countdown(1)</span>
          {"\n"}
          <span className="text-gray-800"> │           ├── print(1)</span>
          {"\n"}
          <span className="text-gray-800"> │           ├── countdown(0)</span>
          {"\n"}
          <span className="text-gray-800"> │                 └── Done (stop)</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Each function call waits for the next one to complete.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Base case */}
      <section className="mb-8">
        <SectionLabel variant="red">Base case</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Stopping Condition
        </h3>

        <CodeWindow filename="base_case.py">
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n &lt;= 0:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#c64600]">&quot;Done&quot;</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The base case prevents infinite recursion by stopping further function
          calls.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Recursive case */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <RefreshCw className="h-3 w-3" />
          Recursive case
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Function Calls Itself
        </h3>

        <CodeWindow filename="recursive_case.py">
          <span className="text-gray-800">countdown(n - 1)</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The problem is reduced step-by-step until it reaches the base case.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Factorial */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Code2 className="h-3 w-3" />
          Example 2
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Factorial Function
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="factorial.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> factorial(n):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n &lt;= 1:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> 1</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> n * factorial(n - 1)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(factorial(5))</span>
        </CodeExercisePanel>

        <OutputBox>120</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Factorial breakdown */}
      <section className="mb-8">
        <SectionLabel variant="blue">Factorial breakdown</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How It Expands
        </h3>

        <CodeWindow filename="factorial_expand.txt">
          <span className="text-gray-800">factorial(5)</span>
          {"\n"}
          <span className="text-gray-800">= 5 × factorial(4)</span>
          {"\n"}
          <span className="text-gray-800">= 5 × 4 × factorial(3)</span>
          {"\n"}
          <span className="text-gray-800">= 5 × 4 × 3 × factorial(2)</span>
          {"\n"}
          <span className="text-gray-800">= 5 × 4 × 3 × 2 × factorial(1)</span>
          {"\n"}
          <span className="text-gray-800">= 5 × 4 × 3 × 2 × 1</span>
          {"\n"}
          <span className="text-gray-800">= 120</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Structure */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Building2 className="h-3 w-3" />
          Pattern
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Recursive Function Structure
        </h3>

        <CodeWindow filename="pattern.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> function(n):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> base_condition:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> result   </span>
          <span className="text-gray-500"># stop recursion</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> function(smaller_input)</span>
        </CodeWindow>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Part
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {STRUCTURE_PARTS.map((row) => (
                <tr
                  key={row.part}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.part}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Call stack */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Layers className="h-3 w-3" />
          Call stack
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          What Happens Internally
        </h3>

        <CodeWindow filename="call_stack.txt">
          <span className="text-gray-800">factorial(5) pushed</span>
          {"\n"}
          <span className="text-gray-800">factorial(4) pushed</span>
          {"\n"}
          <span className="text-gray-800">factorial(3) pushed</span>
          {"\n"}
          <span className="text-gray-800">factorial(2) pushed</span>
          {"\n"}
          <span className="text-gray-800">factorial(1) pushed</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Then returns unwind:</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">1 → 2 → 6 → 24 → 120</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* When to use */}
      <section className="mb-8">
        <SectionLabel variant="green">When to use recursion</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Good Use Cases
        </h3>

        <ul className="space-y-1.5 text-[13.5px] leading-relaxed text-gray-600">
          {USE_CASES.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Warning */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Important
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Risk of Infinite Recursion
        </h3>

        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          If there is no base case or it is incorrect, recursion will continue
          forever and cause a stack overflow error.
        </p>

        <CodeWindow filename="bad_recursion.py">
          <span className="text-gray-500"># WRONG (no stop condition)</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> bad(n):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> bad(n - 1)</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary */}
      <section className="mb-8">
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Quick Summary
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Concept
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
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
                  <td className="px-3.5 py-2.5 text-gray-800">
                    {row.concept}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-4">
        <SectionLabel variant="green">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="sum_to_n.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> sum_to_n(n):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n == 0:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> 0</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> n + sum_to_n(n - 1)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(sum_to_n(4))</span>
        </CodeExercisePanel>

        <OutputBox>10</OutputBox>
      </section>
    </div>
  );
}
