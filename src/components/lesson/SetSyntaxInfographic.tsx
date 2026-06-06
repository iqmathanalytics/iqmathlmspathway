"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  MapPin,
  Play,
  RefreshCw,
  Scale,
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

const COMPARE_ROWS = [
  { feature: "Order", list: "✅ Ordered", set: "❌ Unordered" },
  { feature: "Duplicates", list: "✅ Allowed", set: "❌ Not Allowed" },
  { feature: "Syntax", list: "[ ]", set: "{ }" },
] as const;

const ELEMENT_ROWS = [
  { dataType: "Number", allowed: "✅ Yes" },
  { dataType: "String", allowed: "✅ Yes" },
  { dataType: "Tuple", allowed: "✅ Yes" },
  { dataType: "List", allowed: "❌ No" },
] as const;

const SUMMARY_ROWS = [
  { concept: "Set", meaning: "Collection of unique values" },
  { concept: "{ }", meaning: "Create a set" },
  { concept: "set()", meaning: "Create an empty set" },
  { concept: "Duplicates", meaning: "Removed automatically" },
  { concept: "set(list)", meaning: "Remove duplicates from a list" },
] as const;

export function SetSyntaxInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Introduction to Sets
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Store unique values and automatically remove duplicates
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a Set?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A set is a collection of unique items. If duplicate values are added,
          Python keeps only one copy.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Sets are useful when you want unique values only.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Creating sets */}
      <section className="mb-8">
        <SectionLabel variant="green">Creating sets</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using Curly Braces {"{ }"}
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="create_sets.py">
          <span className="text-gray-800">
            colors = {`{"red", "green", "blue"}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">nums = {`{1, 2, 2, 3, 3}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
        </CodeExercisePanel>

        <OutputBox>
          {`{'red', 'green', 'blue'}`}
          {"\n"}
          {"\n"}
          {`{1, 2, 3}`}
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The duplicate values 2 and 3 are automatically removed.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Visual example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Duplicate Removal
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Input
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  {`{1, 2, 2, 3, 3}`}
                </td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  {`{1, 2, 3}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          A set keeps only unique values.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* List vs Set */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Scale className="h-3 w-3" />
          List vs set
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Difference
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Feature
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  List
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Set
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.list}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.set}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Empty set */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Empty set
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Creating an Empty Set
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="empty.py">
          <span className="text-gray-800">empty = </span>
          <span className="font-semibold text-[#1a5fb4]">set</span>
          <span className="text-gray-800">()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(empty)</span>
        </CodeExercisePanel>

        <OutputBox>set()</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Do not use{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            {"{}"}
          </code>{" "}
          because it creates a dictionary.
        </p>

        <div className="mt-3">
          <CodeExercisePanel practiceIndex={2} filename="empty_dict.py">
            <span className="text-gray-800">empty = {"{}"}</span>
            {"\n"}
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(</span>
            <span className="font-semibold text-[#1a5fb4]">type</span>
            <span className="text-gray-800">(empty))</span>
            {"\n"}
            {"\n"}
            <span className="italic text-[#5a8a5a]"># dict</span>
          </CodeExercisePanel>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Convert list to set */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <RefreshCw className="h-3 w-3" />
          Convert list to set
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Removing Duplicates
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="convert.py">
          <span className="text-gray-800">numbers = [1, 2, 2, 3]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">unique_numbers = </span>
          <span className="font-semibold text-[#1a5fb4]">set</span>
          <span className="text-gray-800">(numbers)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(unique_numbers)</span>
        </CodeExercisePanel>

        <OutputBox>{`{1, 2, 3}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          A common use of sets is removing duplicate values from a list.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Immutable elements */}
      <section className="mb-8">
        <SectionLabel variant="green">Important rule</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Allowed Elements
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Set elements must be immutable (cannot change).
        </p>

        <div className="mb-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Data Type
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Allowed?
                </th>
              </tr>
            </thead>
            <tbody>
              {ELEMENT_ROWS.map((row) => (
                <tr
                  key={row.dataType}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">{row.dataType}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.allowed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeExercisePanel practiceIndex={4} filename="valid.py">
          <span className="text-gray-800">
            valid = {`{1, "Python", (1, 2)}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # invalid = {`{[1, 2]}`}
          </span>
        </CodeExercisePanel>
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

        <CodeExercisePanel practiceIndex={5} filename="practice.py">
          <span className="text-gray-800">values = [10, 20, 20, 30, 30]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">unique_values = </span>
          <span className="font-semibold text-[#1a5fb4]">set</span>
          <span className="text-gray-800">(values)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(unique_values)</span>
        </CodeExercisePanel>

        <OutputBox>{`{10, 20, 30}`}</OutputBox>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Order may vary when printed — sets are unordered.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary */}
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
                  Meaning
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
