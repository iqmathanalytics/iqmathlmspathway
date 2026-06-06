"use client";

import {
  ArrowRight,
  BookOpen,
  Brain,
  Database,
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

const SPREADSHEET_ROWS = [
  { key: "id", value: "101" },
  { key: "city", value: "London" },
  { key: "score", value: "88" },
] as const;

const LOOKUP_ROWS = [
  { expression: 'record["id"]', result: "101" },
  { expression: 'record["city"]', result: "London" },
  { expression: 'record["score"]', result: "88" },
] as const;

const STEP_ROWS = [
  { step: 'user["scores"]', result: "[90, 85, 92]" },
  { step: 'user["scores"][0]', result: "90" },
] as const;

const SUMMARY_ROWS = [
  { code: 'dict["key"]', meaning: "Get value using key" },
  { code: 'record["id"]', meaning: "Returns 101" },
  { code: 'user["scores"]', meaning: "Returns list of scores" },
  { code: 'user["scores"][0]', meaning: "Returns first score" },
] as const;

export function DictionaryKeysValuesInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Accessing Dictionary Values
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Retrieve values using their keys
        </p>
      </header>

      {/* Concept */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Concept
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Dictionary = Key → Value
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A dictionary stores information as key-value pairs. To get a value,
          use its key inside square brackets.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Think of a dictionary like a spreadsheet row where column names are
            keys and cell contents are values.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Spreadsheet example */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Table2 className="h-3 w-3" />
          Spreadsheet example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          One Row as a Dictionary
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
              {SPREADSHEET_ROWS.map((row) => (
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
          This row can be stored as a dictionary.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example code */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Accessing Values
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="access.py">
          <span className="text-gray-800">record = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;id&quot;: 101,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;city&quot;: &quot;London&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;score&quot;: 88</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(record[&quot;id&quot;])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(record[&quot;score&quot;])</span>
        </CodeExercisePanel>

        <OutputBox>
          101
          {"\n"}
          88
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* How it works */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Search className="h-3 w-3" />
          How it works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Key Lookup
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expression
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {LOOKUP_ROWS.map((row) => (
                <tr
                  key={row.expression}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.expression}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Key className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>
            The key acts like a label used to find the correct value.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Nested values */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Database className="h-3 w-3" />
          Nested values
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Values Can Be Lists
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="nested.py">
          <span className="text-gray-800">user = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Sam&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;scores&quot;: [90, 85, 92],</span>
          {"\n"}
          <span className="text-gray-800">    &quot;active&quot;: </span>
          <span className="font-semibold text-[#1a5fb4]">True</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(user[&quot;scores&quot;][0])</span>
        </CodeExercisePanel>

        <OutputBox>90</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          First, Python gets the value of &quot;scores&quot;, which is a list.
          Then [0] gets the first item from that list.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Step-by-step */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Step-by-step
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Understanding user[&quot;scores&quot;][0]
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Step
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {STEP_ROWS.map((row) => (
                <tr
                  key={row.step}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.step}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Data science */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <TrendingUp className="h-3 w-3" />
          Data science connection
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Why Dictionaries Matter
        </h3>

        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          In data science, dictionaries are commonly used to represent records.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="student_record.py">
          <span className="text-gray-800">student = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Asha&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;age&quot;: 20,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;score&quot;: 88</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(student[&quot;name&quot;])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(student[&quot;score&quot;])</span>
        </CodeExercisePanel>

        <p className="mt-3 text-[13.5px] leading-relaxed text-gray-600">
          Each dictionary represents one row of data, where:
        </p>

        <ul className="mt-2 space-y-1.5 text-[13.5px] text-gray-600">
          <li className="flex gap-2">
            <span className="text-gray-400">•</span>
            <span>Keys = Column Names</span>
          </li>
          <li className="flex gap-2">
            <span className="text-gray-400">•</span>
            <span>Values = Cell Values</span>
          </li>
        </ul>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Libraries like Pandas use similar structures for handling tabular data.
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

        <CodeExercisePanel practiceIndex={3} filename="book.py">
          <span className="text-gray-800">book = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">
            &quot;title&quot;: &quot;Python Basics&quot;,
          </span>
          {"\n"}
          <span className="text-gray-800">    &quot;pages&quot;: 250,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;price&quot;: 500</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(book[&quot;title&quot;])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(book[&quot;price&quot;])</span>
        </CodeExercisePanel>

        <OutputBox>
          Python Basics
          {"\n"}
          500
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
                  Code
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.code}
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
