"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Filter,
  Lightbulb,
  Play,
  Scale,
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

const BASIC_PARTS = [
  { part: "expression", meaning: "Value to store in the list" },
  { part: "item", meaning: "Current element" },
  { part: "iterable", meaning: "Source sequence (list, range, string, etc.)" },
] as const;

const CONDITION_PARTS = [
  { part: "expression", purpose: "Value added to list" },
  { part: "for item in iterable", purpose: "Loop through data" },
  { part: "if condition", purpose: "Optional filter" },
] as const;

const SUMMARY_ROWS = [
  { concept: "[x for x in items]", description: "Create a list from items" },
  { concept: "[x*x for x in range()]", description: "Transform values" },
  { concept: "if condition", description: "Filter values" },
  { concept: "Compact Syntax", description: "Shorter than loops" },
  { concept: "Common Usage", description: "Data processing and analysis" },
] as const;

export function ListComprehensionInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          List Comprehensions
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Create lists in a short and powerful way
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a List Comprehension?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A <strong>list comprehension</strong> is a compact way to create a
          list using a single line of code.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            It combines a loop and optional condition into one expression.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Comparison */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Scale className="h-3 w-3" />
          Comparison
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Normal Loop vs List Comprehension
        </h3>

        <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Normal method
        </p>
        <CodeWindow filename="loop_method.py">
          <span className="text-gray-800">squares = []</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> x </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(1, 6):</span>
          {"\n"}
          <span className="text-gray-800">    squares.append(x * x)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(squares)</span>
        </CodeWindow>
        <OutputBox>[1, 4, 9, 16, 25]</OutputBox>

        <p className="mb-2 mt-5 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          List comprehension
        </p>
        <CodeWindow filename="comprehension.py">
          <span className="text-gray-800">
            squares = [x * x for x in range(1, 6)]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(squares)</span>
        </CodeWindow>
        <OutputBox>[1, 4, 9, 16, 25]</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Basic syntax */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Code2 className="h-3 w-3" />
          Syntax
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic Structure
        </h3>

        <CodeWindow filename="syntax.py">
          <span className="text-gray-800">
            [expression for item in iterable]
          </span>
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
              {BASIC_PARTS.map((row) => (
                <tr
                  key={row.part}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.part}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example 1 squares */}
      <section className="mb-8">
        <SectionLabel variant="amber">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Creating Squares
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="squares.py">
          <span className="text-gray-800">
            squares = [x * x for x in range(1, 6)]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(squares)</span>
        </CodeExercisePanel>

        <OutputBox>[1, 4, 9, 16, 25]</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          For each value of x, Python calculates x × x and stores it in the list.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Step-by-step */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Search className="h-3 w-3" />
          How it works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Step-by-Step
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>x = 1 → 1 × 1 = 1</div>
          <div className="mt-1.5">x = 2 → 2 × 2 = 4</div>
          <div className="mt-1.5">x = 3 → 3 × 3 = 9</div>
          <div className="mt-1.5">x = 4 → 4 × 4 = 16</div>
          <div className="mt-1.5">x = 5 → 5 × 5 = 25</div>
        </div>

        <p className="mb-2 mt-3 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Final list
        </p>
        <OutputBox>[1, 4, 9, 16, 25]</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Conditional */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <CheckCircle2 className="h-3 w-3" />
          Conditional comprehension
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Adding a Filter
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="evens.py">
          <span className="text-gray-800">
            evens = [n for n in range(10) if n % 2 == 0]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(evens)</span>
        </CodeExercisePanel>

        <OutputBox>[0, 2, 4, 6, 8]</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Only numbers that satisfy the condition are included.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Conditional syntax */}
      <section className="mb-8">
        <SectionLabel variant="blue">Syntax with condition</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Structure
        </h3>

        <CodeWindow filename="conditional_syntax.py">
          <span className="text-gray-800">
            [expression for item in iterable if condition]
          </span>
        </CodeWindow>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Part
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {CONDITION_PARTS.map((row) => (
                <tr
                  key={row.part}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.part}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Filter visualization */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Filter className="h-3 w-3" />
          Even number filter
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How Filtering Works
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div className="mb-2 font-semibold">range(10)</div>
          <div>
            0 <span className="text-green-700">✓ Include</span>
          </div>
          <div className="mt-1">
            1 <span className="text-red-600">✗ Skip</span>
          </div>
          <div className="mt-1">
            2 <span className="text-green-700">✓ Include</span>
          </div>
          <div className="mt-1">
            3 <span className="text-red-600">✗ Skip</span>
          </div>
          <div className="mt-1">
            4 <span className="text-green-700">✓ Include</span>
          </div>
          <div className="mt-1">
            5 <span className="text-red-600">✗ Skip</span>
          </div>
          <div className="mt-1">
            6 <span className="text-green-700">✓ Include</span>
          </div>
          <div className="mt-1">
            7 <span className="text-red-600">✗ Skip</span>
          </div>
          <div className="mt-1">
            8 <span className="text-green-700">✓ Include</span>
          </div>
          <div className="mt-1">
            9 <span className="text-red-600">✗ Skip</span>
          </div>
        </div>

        <p className="mb-2 mt-3 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Result
        </p>
        <OutputBox>[0, 2, 4, 6, 8]</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* More examples */}
      <section className="mb-8">
        <SectionLabel variant="amber">More examples</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Common Uses
        </h3>

        <h4 className="mb-2 text-[13px] font-semibold text-gray-800">
          Convert to Uppercase
        </h4>
        <CodeExercisePanel practiceIndex={2} filename="upper.py">
          <span className="text-gray-800">
            words = [&quot;python&quot;, &quot;java&quot;, &quot;c&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">
            upper_words = [word.upper() for word in words]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(upper_words)</span>
        </CodeExercisePanel>
        <OutputBox>{`['PYTHON', 'JAVA', 'C']`}</OutputBox>

        <h4 className="mb-2 mt-5 text-[13px] font-semibold text-gray-800">
          Get Length of Each Word
        </h4>
        <CodeExercisePanel practiceIndex={3} filename="lengths.py">
          <span className="text-gray-800">
            words = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">
            lengths = [len(word) for word in words]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(lengths)</span>
        </CodeExercisePanel>
        <OutputBox>[5, 6, 5]</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Structure breakdown */}
      <section className="mb-8">
        <SectionLabel variant="red">Structure breakdown</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          List Comprehension Formula
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-4">
          <div className="space-y-3 font-mono text-[13px] text-gray-700">
            <div className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-2">
              <div className="font-semibold">expression</div>
              <div className="mt-1 text-gray-500">↓ Value for each item</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-2">
              <div className="font-semibold">for item in iterable</div>
              <div className="mt-1 text-gray-500">↓ Source sequence</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-2">
              <div className="font-semibold">if condition</div>
              <div className="mt-1 text-gray-500">↓ Optional filter</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="double.py">
          <span className="text-gray-800">
            numbers = [n * 2 for n in range(1, 6)]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers)</span>
        </CodeExercisePanel>

        <OutputBox>[2, 4, 6, 8, 10]</OutputBox>
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
