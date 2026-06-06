"use client";

import {
  ArrowRight,
  BookOpen,
  Handshake,
  Lightbulb,
  Link2,
  MapPin,
  Minus,
  Play,
  Target,
  Wrench,
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

const SET_A = "{1,2,3,4}";
const SET_B = "{3,4,5,6}";

const METHOD_ROWS = [
  { operator: "a | b", method: "a.union(b)" },
  { operator: "a & b", method: "a.intersection(b)" },
  { operator: "a - b", method: "a.difference(b)" },
] as const;

const SUMMARY_ROWS = [
  { operation: "a | b", meaning: "All unique items from both sets" },
  { operation: "a & b", meaning: "Items present in both sets" },
  { operation: "a - b", meaning: "Items only in set A" },
  { operation: "a.union(b)", meaning: "Union method" },
  { operation: "a.intersection(b)", meaning: "Intersection method" },
  { operation: "a.difference(b)", meaning: "Difference method" },
] as const;

export function SetOperationsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Set Operations</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Combine and compare sets using Union, Intersection, and Difference
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Why Set Operations?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Set operations help us compare sets and find common, unique, or
          combined items.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            The most common operations are Union, Intersection, and Difference.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example code */}
      <section className="mb-8">
        <SectionLabel variant="green">Example code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic Set Operations
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="basic_ops.py">
          <span className="text-gray-800">a = {`{1, 2, 3, 4}`}</span>
          {"\n"}
          <span className="text-gray-800">b = {`{3, 4, 5, 6}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a | b)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a & b)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a - b)</span>
        </CodeExercisePanel>

        <OutputBox>
          {`{1, 2, 3, 4, 5, 6}`}
          {"\n"}
          {`{3, 4}`}
          {"\n"}
          {`{1, 2}`}
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Union */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Link2 className="h-3 w-3" />
          Union ( | )
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Combine All Items
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Union returns all unique items from both sets.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="union.py">
          <span className="text-gray-800">a = {`{1, 2, 3, 4}`}</span>
          {"\n"}
          <span className="text-gray-800">b = {`{3, 4, 5, 6}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a | b)</span>
        </CodeExercisePanel>

        <OutputBox>{`{1, 2, 3, 4, 5, 6}`}</OutputBox>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set A
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set B
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Union
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">{SET_A}</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">{SET_B}</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  {`{1,2,3,4,5,6}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Intersection */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Handshake className="h-3 w-3" />
          Intersection ( & )
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Common Items
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Intersection returns only the items present in both sets.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="intersection.py">
          <span className="text-gray-800">a = {`{1, 2, 3, 4}`}</span>
          {"\n"}
          <span className="text-gray-800">b = {`{3, 4, 5, 6}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a & b)</span>
        </CodeExercisePanel>

        <OutputBox>{`{3, 4}`}</OutputBox>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set A
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set B
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Common Items
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">{SET_A}</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">{SET_B}</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  {`{3,4}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Think of intersection as &quot;items in BOTH sets&quot;.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Difference */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Minus className="h-3 w-3" />
          Difference ( - )
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Items Only in First Set
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Difference returns items that exist in the first set but not in the
          second set.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="difference.py">
          <span className="text-gray-800">a = {`{1, 2, 3, 4}`}</span>
          {"\n"}
          <span className="text-gray-800">b = {`{3, 4, 5, 6}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a - b)</span>
        </CodeExercisePanel>

        <OutputBox>{`{1, 2}`}</OutputBox>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set A
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set B
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  A - B
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">{SET_A}</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">{SET_B}</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  {`{1,2}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Method versions */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Wrench className="h-3 w-3" />
          Method versions
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Alternative Syntax
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="methods.py">
          <span className="text-gray-800">a.union(b)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">a.intersection(b)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">a.difference(b)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Operator
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
              </tr>
            </thead>
            <tbody>
              {METHOD_ROWS.map((row) => (
                <tr
                  key={row.operator}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.operator}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.method}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The operators are shorter and commonly used.
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

        <CodeExercisePanel practiceIndex={5} filename="practice.py">
          <span className="text-gray-800">x = {`{10, 20, 30}`}</span>
          {"\n"}
          <span className="text-gray-800">y = {`{20, 30, 40}`}</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Find:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># 1. Union</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># 2. Intersection</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># 3. Difference (x - y)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(x | y)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(x & y)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(x - y)</span>
        </CodeExercisePanel>

        <OutputBox>
          {`{10, 20, 30, 40}`}
          {"\n"}
          {`{20, 30}`}
          {"\n"}
          {`{10}`}
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
                  Operation
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.operation}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.operation}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
