"use client";

import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Key,
  Package,
  Play,
  Plus,
  RefreshCw,
  Table2,
  Target,
  Trash2,
  Zap,
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

const ITEMS_ROWS = [
  { key: "a", value: "1" },
  { key: "b", value: "2" },
  { key: "c", value: "3" },
] as const;

const METHOD_SUMMARY_ROWS = [
  { method: "keys()", purpose: "Get all keys" },
  { method: "values()", purpose: "Get all values" },
  { method: "items()", purpose: "Get key-value pairs" },
  { method: "pop(key)", purpose: "Remove key and return value" },
  { method: "update(dict)", purpose: "Merge or update dictionary" },
] as const;

const REF_ROWS = [
  { code: "dict.keys()", meaning: "All keys" },
  { code: "dict.values()", meaning: "All values" },
  { code: "dict.items()", meaning: "All key-value pairs" },
  { code: "dict.pop(key)", meaning: "Remove key" },
  { code: "dict.update(other)", meaning: "Merge dictionaries" },
] as const;

export function DictionaryMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Dictionary Methods and Looping
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          View keys, values, items and loop through dictionaries
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Useful Dictionary Methods
        </h3>
        <p className="text-[13.5px] leading-relaxed text-gray-600">
          Dictionaries provide built-in methods to access keys, values, and
          key-value pairs. These methods are commonly used when working with
          data.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Basic methods */}
      <section className="mb-8">
        <SectionLabel variant="green">Example code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          keys(), values(), items()
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="methods.py">
          <span className="text-gray-800">data = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;a&quot;: 1,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;b&quot;: 2,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;c&quot;: 3</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data.keys())</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data.values())</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data.items())</span>
        </CodeExercisePanel>

        <OutputBox>
          dict_keys([&apos;a&apos;, &apos;b&apos;, &apos;c&apos;])
          {"\n"}
          {"\n"}
          dict_values([1, 2, 3])
          {"\n"}
          {"\n"}
          dict_items([(&apos;a&apos;, 1), (&apos;b&apos;, 2), (&apos;c&apos;, 3)])
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* keys() */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Key className="h-3 w-3" />
          keys()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Get All Keys
        </h3>

        <CodeWindow filename="keys.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data.keys())</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Returns all keys in the dictionary.
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Dictionary
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Keys
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  {`{"a":1,"b":2,"c":3}`}
                </td>
                <td className="px-3.5 py-2.5 text-gray-600">a, b, c</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* values() */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Package className="h-3 w-3" />
          values()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Get All Values
        </h3>

        <CodeWindow filename="values.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data.values())</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Returns all values in the dictionary.
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Dictionary
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Values
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-2.5 font-mono text-gray-800">
                  {`{"a":1,"b":2,"c":3}`}
                </td>
                <td className="px-3.5 py-2.5 text-gray-600">1, 2, 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* items() */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <ClipboardList className="h-3 w-3" />
          items()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Get Key-Value Pairs
        </h3>

        <CodeWindow filename="items.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data.items())</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Returns key-value pairs as tuples.
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
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
              {ITEMS_ROWS.map((row) => (
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
      </section>

      <hr className="my-7 border-black/10" />

      {/* Looping keys */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <RefreshCw className="h-3 w-3" />
          Looping
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Loop Through Keys
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="loop_keys.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> key </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> data:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(key, data[key])</span>
        </CodeExercisePanel>

        <OutputBox>
          a 1
          {"\n"}
          b 2
          {"\n"}
          c 3
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The loop visits each key and uses it to access the value.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Looping items */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Zap className="h-3 w-3" />
          Better looping
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using items()
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="loop_items.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> key, value </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> data.items():</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(key, &quot;→&quot;, value)</span>
        </CodeExercisePanel>

        <OutputBox>
          a → 1
          {"\n"}
          b → 2
          {"\n"}
          c → 3
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          items() is the easiest way to access both keys and values together.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* pop() */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Trash2 className="h-3 w-3" />
          pop()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Remove a Key
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="pop.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">value = data.pop(&quot;b&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(value)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data)</span>
        </CodeExercisePanel>

        <OutputBox>
          2
          {"\n"}
          {"\n"}
          {`{'a': 1, 'c': 3}`}
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          pop() removes a key and returns its value.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* update() */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Plus className="h-3 w-3" />
          update()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Merge Dictionaries
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="update.py">
          <span className="text-gray-800">data = {"{"}&quot;a&quot;: 1, &quot;b&quot;: 2{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">data.update({"{"}&quot;c&quot;: 3, &quot;d&quot;: 4{"}"})</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'a': 1, 'b': 2, 'c': 3, 'd': 4}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          update() adds new key-value pairs or updates existing ones.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary table */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Table2 className="h-3 w-3" />
          Summary
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Dictionary Methods
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {METHOD_SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.purpose}</td>
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

        <CodeExercisePanel practiceIndex={5} filename="student.py">
          <span className="text-gray-800">student = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Asha&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;age&quot;: 20,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;city&quot;: &quot;Chennai&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Print all keys</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(*student.keys())</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Print all values</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(*student.values())</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Loop through key-value pairs</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> key, value </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> student.items():</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(key, &quot;→&quot;, value)</span>
        </CodeExercisePanel>

        <OutputBox>
          name age city
          {"\n"}
          {"\n"}
          Asha 20 Chennai
          {"\n"}
          {"\n"}
          name → Asha
          {"\n"}
          age → 20
          {"\n"}
          city → Chennai
        </OutputBox>
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
                  Code
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
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
