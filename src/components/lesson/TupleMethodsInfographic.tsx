"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Hash,
  Lightbulb,
  MapPin,
  Play,
  Ruler,
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

const VALUES = [1, 2, 2, 3, 2] as const;
const INDEXES = [0, 1, 2, 3, 4] as const;

const METHOD_LIST = [
  { method: "count()", desc: "Counts occurrences of a value." },
  { method: "index()", desc: "Finds the position of a value." },
] as const;

const SUMMARY_ROWS = [
  { method: "count(x)", purpose: "Count occurrences of x" },
  { method: "index(x)", purpose: "Find first position of x" },
  { method: "len(t)", purpose: "Total number of items" },
] as const;

export function TupleMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Tuple Methods</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Useful methods available for tuples in Python
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Why Only Two Methods?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Tuples are immutable, which means their values cannot be changed.
          Because of this, tuples have only two built-in methods:
        </p>

        <ul className="mb-3 space-y-1.5 text-[13.5px] text-gray-600">
          {METHOD_LIST.map((item) => (
            <li key={item.method} className="flex gap-2">
              <span className="font-mono font-semibold text-gray-800">
                {item.method}
              </span>
              <span>→ {item.desc}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Unlike lists, tuples cannot add, remove, or modify items.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* count() */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Hash className="h-3 w-3" />
          count()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Count Occurrences
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="count.py">
          <span className="text-gray-800">values = (1, 2, 2, 3, 2)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(values.count(2))</span>
        </CodeExercisePanel>

        <OutputBox>3</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The number <strong>2</strong> appears three times in the tuple.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* index() */}
      <section className="mb-8">
        <SectionLabel variant="purple">index()</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Find Position
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="index.py">
          <span className="text-gray-800">values = (1, 2, 2, 3, 2)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(values.index(3))</span>
        </CodeExercisePanel>

        <OutputBox>3</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The value <strong>3</strong> is located at index position{" "}
          <strong>3</strong>.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Visual */}
      <section className="mb-8">
        <SectionLabel variant="amber">Visual example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Tuple Layout
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
                {VALUES.map((val, i) => (
                  <th
                    key={i}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Index</td>
                {INDEXES.map((idx) => (
                  <td
                    key={idx}
                    className="px-2 py-2.5 text-center font-mono text-gray-600"
                  >
                    {idx}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          <strong>count(2)</strong> → 3 times
          <br />
          <strong>index(3)</strong> → position 3
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* len() */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Ruler className="h-3 w-3" />
          len()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Count Total Items
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="len.py">
          <span className="text-gray-800">values = (1, 2, 2, 3, 2)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">(values))</span>
        </CodeExercisePanel>

        <OutputBox>5</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          len() returns the total number of items in the tuple.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Error example */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <AlertTriangle className="h-3 w-3" />
          Important note
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Value Not Found
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="error.py">
          <span className="text-gray-800">values = (1, 2, 2, 3, 2)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(values.index(5))</span>
        </CodeExercisePanel>

        <OutputBox>
          ValueError: tuple.index(x): x not in tuple
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          If the value does not exist, index() raises a ValueError.
        </p>
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

        <CodeExercisePanel practiceIndex={4} filename="practice.py">
          <span className="text-gray-800">scores = (90, 85, 90, 95, 90)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Print:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # 1. How many times 90 appears
          </span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># 2. Position of 95</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # 3. Total number of items
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores.count(90))</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores.index(95))</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">(scores))</span>
        </CodeExercisePanel>

        <OutputBox>
          3{"\n"}3{"\n"}5
        </OutputBox>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Expected output: 3 (count of 90), 3 (index of 95), 5 (length).
          </span>
        </div>
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
                  Method
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
