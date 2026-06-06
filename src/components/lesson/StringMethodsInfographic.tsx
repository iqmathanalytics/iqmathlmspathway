"use client";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Lightbulb,
  MapPin,
  Play,
  Search,
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

const OVERVIEW_METHODS = [
  {
    symbol: "upper()",
    name: "Uppercase",
    note: "Converts every letter to capitals",
    example: '"hi".upper() → "HI"',
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "lower()",
    name: "Lowercase",
    note: "Converts every letter to small letters",
    example: '"HI".lower() → "hi"',
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "strip()",
    name: "Trim spaces",
    note: "Removes spaces from both ends",
    example: '" hi ".strip() → "hi"',
    symbolClass: "text-[#5e3fa3]",
  },
  {
    symbol: "split()",
    name: "Split into list",
    note: "Breaks a string at a separator",
    example: '"a,b".split(",") → ["a","b"]',
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "join()",
    name: "Join a list",
    note: "Combines list items into one string",
    example: '"-".join(["a","b"]) → "a-b"',
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "replace()",
    name: "Replace text",
    note: "Swaps one substring for another",
    example: '"cat".replace("c","b") → "bat"',
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
  { method: "title()", purpose: "Title Case words", example: '"hello world".title()' },
  { method: "strip()", purpose: "Remove end spaces", example: '" hi ".strip()' },
  { method: "lstrip()", purpose: "Remove left spaces", example: '" hi".lstrip()' },
  { method: "rstrip()", purpose: "Remove right spaces", example: '"hi ".rstrip()' },
  { method: "split()", purpose: "String → list", example: '"a,b".split(",")' },
  { method: "join()", purpose: "List → string", example: '"-".join(lst)' },
  { method: "replace()", purpose: "Replace text", example: 's.replace("a","b")' },
  { method: "find()", purpose: "Find substring index", example: 's.find("py")' },
  { method: "count()", purpose: "Count occurrences", example: 's.count("a")' },
  { method: "len()", purpose: "Character count", example: "len(s)" },
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
          removing spaces, searching content, splitting data, and more. You
          call them with dot notation:{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            variable.method()
          </code>
          .
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
              <p className="hidden shrink-0 whitespace-nowrap font-mono text-[12px] text-gray-500 sm:block">
                {m.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Syntax */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <BookOpen className="h-3 w-3" />
          Syntax
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          How to Call a String Method
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Strings are immutable — methods return a <strong>new</strong> string
          instead of changing the original. Always store the result if you need
          it later.
        </p>

        <CodeWindow filename="syntax.py">
          <span className="text-gray-800">text = &quot;hello&quot;</span>
          {"\n"}
          <span className="text-gray-800">result = text.upper()</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text) </span>
          <span className="italic text-[#5a8a5a]"># hello — unchanged</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result) </span>
          <span className="italic text-[#5a8a5a]"># HELLO</span>
        </CodeWindow>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Chain methods together:{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              messy.strip().lower()
            </code>{" "}
            cleans and lowercases in one line.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Case conversion */}
      <section className="mb-8">
        <SectionLabel variant="green">Case conversion</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          upper(), lower(), and title()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          These methods change letter casing. They are useful when comparing
          user input or normalizing messy data before analysis.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="case_methods.py">
          <span className="text-gray-800">name = &quot;  python  &quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name.upper())</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name.lower())</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;hello world&quot;.title())</span>
        </CodeExercisePanel>

        <OutputBox>
          PYTHON
          {"\n"}
          {"  python  "}
          {"\n"}
          Hello World
        </OutputBox>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  What it does
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-gray-800">upper()</td>
                <td className="px-3.5 py-2.5 text-gray-600">All capitals</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">&quot;PYTHON&quot;</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-gray-800">lower()</td>
                <td className="px-3.5 py-2.5 text-gray-600">All lowercase</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">&quot;python&quot;</td>
              </tr>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">title()</td>
                <td className="px-3.5 py-2.5 text-gray-600">Capitalize each word</td>
                <td className="px-3.5 py-2.5 font-mono text-gray-600">&quot;Hello World&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* strip family */}
      <section className="mb-8">
        <SectionLabel variant="purple">Whitespace</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          strip(), lstrip(), and rstrip()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Real-world data often has extra spaces from copy-paste or CSV files.
          These methods remove unwanted whitespace from one or both ends.
        </p>

        <CodeWindow filename="strip_methods.py">
          <span className="text-gray-800">text = &quot;  hello  &quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text.strip())</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text.lstrip())</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text.rstrip())</span>
        </CodeWindow>

        <OutputBox>
          hello
          {"\n"}
          hello
          {"\n"}
          {"  hello"}
        </OutputBox>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            strip() removes spaces at both ends; lstrip() only left; rstrip()
            only right. None of them remove spaces in the middle.
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
          split() breaks a string into a list using a separator. join() does
          the reverse — it takes a list and builds one string. Together they
          are essential for working with CSV and tabular text data.
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

        <OutputBox>
          [&apos;apple&apos;, &apos;banana&apos;, &apos;mango&apos;]
          {"\n"}
          apple-banana-mango
        </OutputBox>

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

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            split() is called on the string; join() is called on the separator
            string:{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              &quot;-&quot;.join(list)
            </code>
            .
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Search and replace */}
      <section className="mb-8">
        <SectionLabel variant="teal">Search and replace</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          replace(), find(), and count()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          replace() swaps text inside a string. find() returns the starting
          index of a substring (or -1 if missing). count() tells you how many
          times a value appears. Use{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            in
          </code>{" "}
          for a simple True/False check.
        </p>

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
          <span className="text-gray-800">(text.find(&quot;Py&quot;))</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text.count(&quot;o&quot;))</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;Python&quot; in text)
          </span>
        </CodeExercisePanel>

        <OutputBox>
          I enjoy Python
          {"\n"}
          7
          {"\n"}
          2
          {"\n"}
          True
        </OutputBox>

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
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-sm text-gray-800">
                  find(&quot;Py&quot;)
                </td>
                <td className="px-3.5 py-2.5 font-semibold text-[#2d7a45]">7</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="px-3.5 py-2.5 font-mono text-sm text-gray-800">
                  count(&quot;o&quot;)
                </td>
                <td className="px-3.5 py-2.5 font-semibold text-[#2d7a45]">2</td>
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
          <span className="text-gray-800">(s))</span>
        </CodeExercisePanel>

        <OutputBox>6</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          len() counts every character including spaces and punctuation. It
          works on strings, lists, and other collections.
        </p>
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
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (file_name.endswith(&quot;.pdf&quot;))
          </span>
        </CodeExercisePanel>

        <OutputBox>
          True
          {"\n"}
          True
          {"\n"}
          False
        </OutputBox>

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

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Use the IDE on the right. Click any exercise below or the{" "}
          <strong>IDE</strong> button on a code block to load starter code.
        </p>
        <CodeExercisePanel practiceIndex={5} filename="clean_data.py">
          <span className="text-gray-800">messy = &quot;  HELLO world  &quot;</span>
          {"\n"}
          <span className="text-gray-800">clean = messy.strip().lower()</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(clean.replace(&quot;world&quot;, &quot;python&quot;))</span>
        </CodeExercisePanel>
        <OutputBox>hello python</OutputBox>
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
