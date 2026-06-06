"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Filter,
  Lightbulb,
  Link2,
  Play,
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

const SQUARE_ROWS = [
  { n: "1", key: "1", value: "1 × 1 = 1" },
  { n: "2", key: "2", value: "2 × 2 = 4" },
  { n: "3", key: "3", value: "3 × 3 = 9" },
  { n: "4", key: "4", value: "4 × 4 = 16" },
  { n: "5", key: "5", value: "5 × 5 = 25" },
] as const;

const FORMULA_PARTS = [
  { part: "key", purpose: "Dictionary key" },
  { part: "value", purpose: "Dictionary value" },
  { part: "for item in iterable", purpose: "Loop through data" },
  { part: "if condition", purpose: "Optional filter" },
] as const;

const USE_CASES = [
  "Create dictionaries from loops",
  "Convert lists into key-value pairs",
  "Generate lookup tables",
  "Transform existing data",
  "Filter dictionary entries",
] as const;

const SUMMARY_ROWS = [
  { concept: "{k:v for ...}", description: "Create dictionary quickly" },
  { concept: "Key Expression", description: "Creates dictionary keys" },
  { concept: "Value Expression", description: "Creates dictionary values" },
  { concept: "if Condition", description: "Filter items" },
  { concept: "zip()", description: "Combine two lists into a dictionary" },
] as const;

export function DictionaryComprehensionInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Dictionary Comprehensions
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Create dictionaries quickly using a single line of code
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a Dictionary Comprehension?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A <strong>dictionary comprehension</strong> is a short way to create a
          dictionary using a loop.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Similar to list comprehensions, but creates key-value pairs instead
            of list items.
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
          <span className="text-gray-800">{"{"}</span>
          {"\n"}
          <span className="text-gray-800">    key_expression : value_expression</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> item </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> iterable</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          For each item in the iterable, Python creates a key-value pair.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example 1 squares */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Creating Squares Dictionary
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="squares.py">
          <span className="text-gray-800">squares = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    n: n * n</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> n </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(1, 6)</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(squares)</span>
        </CodeExercisePanel>

        <OutputBox>{`{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Step-by-step */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Search className="h-3 w-3" />
          How it works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Step-by-Step
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  n
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Key
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {SQUARE_ROWS.map((row) => (
                <tr
                  key={row.n}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-600">{row.n}</td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.key}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Word lengths */}
      <section className="mb-8">
        <SectionLabel variant="green">Example 2</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Word Length Dictionary
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="lengths.py">
          <span className="text-gray-800">
            words = [&quot;apple&quot;, &quot;fig&quot;, &quot;banana&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">lengths = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    w: len(w)</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> w </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> words</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(lengths)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'apple': 5, 'fig': 3, 'banana': 6}`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Word length visualization */}
      <section className="mb-8">
        <SectionLabel variant="red">Visualization</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Word Length Example
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>apple → 5</div>
          <div className="mt-1.5">fig → 3</div>
          <div className="mt-1.5">banana → 6</div>
        </div>

        <p className="mb-2 mt-3 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Final dictionary
        </p>
        <OutputBox>{`{'apple': 5, 'fig': 3, 'banana': 6}`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Filter */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <CheckCircle2 className="h-3 w-3" />
          Using conditions
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Filtering Items
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="evens.py">
          <span className="text-gray-800">squares = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    n: n*n</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> n </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(1, 6)</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n % 2 == 0</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(squares)</span>
        </CodeExercisePanel>

        <OutputBox>{`{2: 4, 4: 16}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Only even numbers are included.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Full structure */}
      <section className="mb-8">
        <SectionLabel variant="purple">Full structure</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Dictionary Comprehension Formula
        </h3>

        <CodeWindow filename="formula.py">
          <span className="text-gray-800">{"{"}</span>
          {"\n"}
          <span className="text-gray-800">    key : value</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> item </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> iterable</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> condition</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
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
              {FORMULA_PARTS.map((row) => (
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

      {/* Zip example */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Link2 className="h-3 w-3" />
          Using zip()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Create Dictionary from Two Lists
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="zip_dict.py">
          <span className="text-gray-800">keys = [&quot;name&quot;, &quot;age&quot;]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">values = [&quot;Mia&quot;, 28]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">person = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    k: v</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> k, v </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">zip</span>
          <span className="text-gray-800">(keys, values)</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(person)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'name': 'Mia', 'age': 28}`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Zip visualization */}
      <section className="mb-8">
        <SectionLabel variant="green">How zip() works</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Pairing Values
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3">
          <div className="mb-3 grid grid-cols-2 gap-4 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            <span>keys</span>
            <span>values</span>
          </div>
          <div className="space-y-2 font-mono text-[13px] text-gray-700">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <span>name</span>
              <span className="text-gray-400">↔</span>
              <span>Mia</span>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <span>age</span>
              <span className="text-gray-400">↔</span>
              <span>28</span>
            </div>
          </div>
        </div>

        <p className="mb-2 mt-3 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Result
        </p>
        <OutputBox>{`{'name': 'Mia', 'age': 28}`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* When to use */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Filter className="h-3 w-3" />
          When to use
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Best Use Cases
        </h3>

        <ul className="space-y-1.5 text-[13.5px] text-gray-600">
          {USE_CASES.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
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

        <CodeExercisePanel practiceIndex={4} filename="multiply.py">
          <span className="text-gray-800">numbers = [1, 2, 3, 4]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">result = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    n: n * 10</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> n </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> numbers</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result)</span>
        </CodeExercisePanel>

        <OutputBox>{`{1: 10, 2: 20, 3: 30, 4: 40}`}</OutputBox>
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
