"use client";

import {
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Lightbulb,
  Play,
  RefreshCw,
  Search,
  Tag,
  Target,
  Type,
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

const FRUIT_ITERATIONS = [
  { iteration: "1", value: "apple" },
  { iteration: "2", value: "banana" },
  { iteration: "3", value: "mango" },
] as const;

const CHAR_ROWS = [
  { index: "0", value: "H" },
  { index: "1", value: "i" },
] as const;

const SUMMARY_ROWS = [
  { concept: "for", description: "Loop through a collection" },
  { concept: "in", description: "Gets items from a collection" },
  { concept: "Loop Variable", description: "Stores current item" },
  { concept: "List Loop", description: "Visits each list item" },
  { concept: "String Loop", description: "Visits each character" },
] as const;

export function ForLoopInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">The for Loop</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Repeat code for each item in a collection
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a for Loop?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A <strong>for</strong> loop is used to go through each item in a list,
          string, tuple, set, or other collection.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            The loop automatically takes one item at a time from the collection.
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
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> variable </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> collection:</span>
          {"\n"}
          <span className="text-gray-800">    statement</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The variable stores one value at a time from the collection.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* List example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Loop Through a List
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="fruits.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> fruit </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> fruits:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(fruit)</span>
        </CodeExercisePanel>

        <OutputBox>
          apple
          {"\n"}
          banana
          {"\n"}
          mango
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The variable <strong>fruit</strong> takes each item from the list one
          by one.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Iteration process */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Search className="h-3 w-3" />
          How it works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Iteration Process
        </h3>

        <div className="mb-3 rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]</div>
          <div className="mt-2" />
          <div>1st Loop → fruit = &quot;apple&quot;</div>
          <div>2nd Loop → fruit = &quot;banana&quot;</div>
          <div>3rd Loop → fruit = &quot;mango&quot;</div>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Iteration
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  fruit Value
                </th>
              </tr>
            </thead>
            <tbody>
              {FRUIT_ITERATIONS.map((row) => (
                <tr
                  key={row.iteration}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.iteration}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Naming */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Tag className="h-3 w-3" />
          Naming variables
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Choose Meaningful Names
        </h3>

        <CodeWindow filename="naming.py">
          <span className="text-gray-800">
            fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;mango&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> item </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> fruits:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(item)</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The variable can have any valid name, but meaningful names make code
          easier to understand.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* String example */}
      <section className="mb-8">
        <SectionLabel variant="green">Example 2</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Loop Through a String
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="string.py">
          <span className="text-gray-800">word = &quot;Hi&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> char </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> word:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(char)</span>
        </CodeExercisePanel>

        <OutputBox>
          H
          {"\n"}i
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          A string is a sequence of characters, so the loop visits each
          character.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Character iteration */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Type className="h-3 w-3" />
          Character iteration
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          String Breakdown
        </h3>

        <div className="mb-3 rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>word = &quot;Hi&quot;</div>
          <div className="mt-2" />
          <div>1st Loop → char = &quot;H&quot;</div>
          <div>2nd Loop → char = &quot;i&quot;</div>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Character
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {CHAR_ROWS.map((row) => (
                <tr
                  key={row.index}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-600">{row.index}</td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Loop flow */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <RefreshCw className="h-3 w-3" />
          Loop flow
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How a for Loop Works
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-4">
          <div className="flex flex-col items-center gap-1.5 text-center font-mono text-[13px] text-gray-700">
            <span className="rounded-lg bg-black/[0.05] px-3 py-1.5 font-semibold">
              Collection
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5">
              Take First Item
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-green-800">
              Run Loop Body
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5">
              Take Next Item
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-green-800">
              Run Loop Body
            </span>
            <span className="text-gray-400">↓</span>
            <span className="text-[12px] text-gray-500">
              Repeat Until No Items Left
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-amber-900">
              Loop Ends
            </span>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Students example */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Student Names
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="students.py">
          <span className="text-gray-800">
            students = [&quot;Asha&quot;, &quot;Sam&quot;, &quot;John&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> student </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> students:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Hello&quot;, student)</span>
        </CodeExercisePanel>

        <OutputBox>
          Hello Asha
          {"\n"}
          Hello Sam
          {"\n"}
          Hello John
        </OutputBox>
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

        <CodeExercisePanel practiceIndex={3} filename="colors.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> color </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> colors:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(color)</span>
        </CodeExercisePanel>

        <OutputBox>
          red
          {"\n"}
          green
          {"\n"}
          blue
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
