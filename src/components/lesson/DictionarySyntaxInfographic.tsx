"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Key,
  Lightbulb,
  Play,
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

const STRUCTURE_ROWS = [
  { key: '"name"', value: "Asha" },
  { key: '"age"', value: "20" },
  { key: '"major"', value: "Data Science" },
] as const;

const RULES = [
  "Keys must be unique.",
  "Keys are usually strings or numbers.",
  "Values can be any data type.",
  "A dictionary is mutable (can be changed).",
] as const;

const VALUE_TYPE_ROWS = [
  { key: "name", valueType: "String" },
  { key: "age", valueType: "Integer" },
  { key: "marks", valueType: "List" },
  { key: "address", valueType: "Dictionary" },
] as const;

const SUMMARY_ROWS = [
  { concept: "Dictionary", description: "Stores key-value pairs" },
  { concept: "{ }", description: "Create a dictionary" },
  { concept: "dict()", description: "Create an empty dictionary" },
  { concept: "Keys", description: "Must be unique" },
  { concept: "Values", description: "Can be any data type" },
] as const;

export function DictionarySyntaxInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Introduction to Dictionaries
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Store data using key-value pairs
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a Dictionary?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A dictionary stores data as <strong>key-value pairs</strong>. Each key
          is used to access its corresponding value.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Dictionaries are useful for storing related information together.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Creating dictionary */}
      <section className="mb-8">
        <SectionLabel variant="green">Creating a dictionary</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using Curly Braces {"{ }"}
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="create_dict.py">
          <span className="text-gray-800">student = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Asha&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;age&quot;: 20,</span>
          {"\n"}
          <span className="text-gray-800">
            &quot;major&quot;: &quot;Data Science&quot;
          </span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(student)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">type</span>
          <span className="text-gray-800">(student))</span>
        </CodeExercisePanel>

        <OutputBox>
          {`{'name': 'Asha', 'age': 20, 'major': 'Data Science'}`}
          {"\n"}
          {"\n"}
          &lt;class &apos;dict&apos;&gt;
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Structure */}
      <section className="mb-8">
        <SectionLabel variant="purple">Structure</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Key → Value Pairs
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Key
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {STRUCTURE_ROWS.map((row) => (
                <tr
                  key={row.key}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.key}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Each key points to a value.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Empty dictionary */}
      <section className="mb-8">
        <SectionLabel variant="amber">Empty dictionary</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Creating an Empty Dictionary
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="empty.py">
          <span className="text-gray-800">empty = {"{}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">also = </span>
          <span className="font-semibold text-[#1a5fb4]">dict</span>
          <span className="text-gray-800">()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(empty)</span>
        </CodeExercisePanel>

        <OutputBox>{"{}"}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Both methods create an empty dictionary.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Rules */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Key className="h-3 w-3" />
          Important rules
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Dictionary Rules
        </h3>

        <ul className="space-y-1.5 text-[13.5px] text-gray-600">
          {RULES.map((rule) => (
            <li key={rule} className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Mixed values */}
      <section className="mb-8">
        <SectionLabel variant="blue">Values can be anything</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">Examples</h3>

        <CodeExercisePanel practiceIndex={2} filename="mixed_values.py">
          <span className="text-gray-800">data = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Asha&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;age&quot;: 20,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;marks&quot;: [90, 85, 95],</span>
          {"\n"}
          <span className="text-gray-800">    &quot;address&quot;: {"{"}</span>
          {"\n"}
          <span className="text-gray-800">
            &quot;city&quot;: &quot;Chennai&quot;
          </span>
          {"\n"}
          <span className="text-gray-800">    {"}"}</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Key
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value Type
                </th>
              </tr>
            </thead>
            <tbody>
              {VALUE_TYPE_ROWS.map((row) => (
                <tr
                  key={row.key}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.key}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.valueType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Unique keys */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <AlertTriangle className="h-3 w-3" />
          Unique keys
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Duplicate Keys Not Allowed
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="unique_keys.py">
          <span className="text-gray-800">student = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Asha&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Priya&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(student)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'name': 'Priya'}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          If the same key appears more than once, the last value replaces the
          previous one.
        </p>
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

        <CodeExercisePanel practiceIndex={4} filename="practice.py">
          <span className="text-gray-800">employee = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;John&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;age&quot;: 25,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;department&quot;: &quot;IT&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(employee)</span>
        </CodeExercisePanel>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Create a dictionary with your own details and print it.
        </p>
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
