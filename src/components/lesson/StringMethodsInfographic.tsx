"use client";

import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  MapPin,
  Play,
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

const OVERVIEW_METHODS = [
  {
    symbol: "upper()",
    name: "Uppercase",
    note: "Converts text to capital letters",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "lower()",
    name: "Lowercase",
    note: "Converts text to lowercase",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "strip()",
    name: "Trim Spaces",
    note: "Removes leading and trailing whitespace",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const DATA_SCIENCE_ROWS = [
  { method: "strip()", use: "Clean messy data" },
  { method: "split()", use: "Parse CSV values" },
  { method: "join()", use: "Create reports" },
  { method: "replace()", use: "Text cleaning" },
  { method: "len()", use: "Measure text length" },
  { method: "startswith()", use: "Validate prefixes" },
  { method: "endswith()", use: "Check file extensions" },
] as const;

const REF_ROWS = [
  { method: "upper()", purpose: "Uppercase text", example: '"python".upper()' },
  { method: "lower()", purpose: "Lowercase text", example: '"PYTHON".lower()' },
  { method: "strip()", purpose: "Remove spaces", example: '" hi ".strip()' },
  { method: "split()", purpose: "String → List", example: '"a,b".split(",")' },
  { method: "join()", purpose: "List → String", example: '"-".join(lst)' },
  { method: "replace()", purpose: "Replace text", example: 's.replace("a","b")' },
  { method: "len()", purpose: "Length", example: "len(s)" },
  { method: "startswith()", purpose: "Check beginning", example: 's.startswith("Hi")' },
  { method: "endswith()", purpose: "Check ending", example: 's.endswith(".csv")' },
] as const;

export function StringMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Useful String Methods
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Modify, search, split, and analyze strings efficiently
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Wrench className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Common String Operations
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python provides many built-in string methods for changing text,
          removing spaces, searching content, splitting data, and more.
        </p>

        <div className="flex flex-col gap-1.5">
          {OVERVIEW_METHODS.map((m) => (
            <div
              key={m.symbol}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`min-w-16 shrink-0 text-center font-mono text-sm font-semibold ${m.symbolClass}`}
              >
                {m.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {m.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{m.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Case conversion */}
      <section className="mb-8">
        <SectionLabel variant="green">Case conversion</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          upper(), lower(), strip()
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="case_methods.py">
          <span className="text-gray-800">name = &quot;  python  &quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name.upper()) </span>
          <span className="italic text-[#5a8a5a]"># &quot;  PYTHON  &quot;</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name.lower()) </span>
          <span className="italic text-[#5a8a5a]"># &quot;  python  &quot;</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name.strip()) </span>
          <span className="italic text-[#5a8a5a]"># &quot;python&quot;</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            strip() removes extra spaces at the beginning and end of a string.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Split and join */}
      <section className="mb-8">
        <SectionLabel variant="purple">Split and join</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Convert Between Strings and Lists
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          split() breaks a string into a list, while join() combines a list into
          a string.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="split_join.py">
          <span className="text-gray-800">
            csv_line = &quot;apple,banana,mango&quot;
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">fruits = csv_line.split(&quot;,&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(fruits)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">joined = &quot;-&quot;.join(fruits)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(joined)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Operation
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  split(&quot;,&quot;)
                </td>
                <td className="px-3.5 py-2.5 font-mono text-sm text-gray-600">
                  [&apos;apple&apos;, &apos;banana&apos;, &apos;mango&apos;]
                </td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  &quot;-&quot;.join(...)
                </td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">
                  apple-banana-mango
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Search and replace */}
      <section className="mb-8">
        <SectionLabel variant="teal">Search and replace</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Finding and replacing text
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="replace.py">
          <span className="text-gray-800">text = &quot;I love Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (text.replace(&quot;love&quot;, &quot;enjoy&quot;))
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;Python&quot; in text)
          </span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expression
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Output
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-sm text-gray-800">
                  replace(&quot;love&quot;,&quot;enjoy&quot;)
                </td>
                <td className="px-3.5 py-2.5 text-gray-600">I enjoy Python</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-sm text-gray-800">
                  &quot;Python&quot; in text
                </td>
                <td className="px-3.5 py-2.5 font-semibold text-[#2d7a45]">
                  True
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Length */}
      <section className="mb-8">
        <SectionLabel variant="amber">Length</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          len() Function
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          len() returns the total number of characters in a string.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="length.py">
          <span className="text-gray-800">s = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#8b2070]">len</span>
          <span className="text-gray-800">(s)) </span>
          <span className="italic text-[#5a8a5a]"># 6</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: startswith / endswith */}
      <section className="mb-8">
        <SectionLabel variant="blue">Beginning and end</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          startswith() and endswith()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          These methods help verify how a string starts or ends.
        </p>

        <CodeExercisePanel practiceIndex={4} filename="check.py">
          <span className="text-gray-800">greeting = &quot;Hi Python&quot;</span>
          {"\n"}
          <span className="text-gray-800">file_name = &quot;sales.csv&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (greeting.startswith(&quot;Hi&quot;))
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (file_name.endswith(&quot;.csv&quot;))
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            endswith() is commonly used to validate file types such as .csv,
            .txt, and .pdf.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Data science */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <BarChart3 className="h-3 w-3" />
          Data science usage
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Why These Methods Matter
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Common Use
                </th>
              </tr>
            </thead>
            <tbody>
              {DATA_SCIENCE_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-sm font-semibold text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Quick reference */}
      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight">
          Quick reference
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
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-sm font-semibold text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.purpose}</td>
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.example}
                    </code>
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
