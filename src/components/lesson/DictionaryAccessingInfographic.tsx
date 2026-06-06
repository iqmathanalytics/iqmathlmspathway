"use client";

import {
  AlertTriangle,
  ArrowRight,
  Key,
  Lightbulb,
  Pencil,
  Play,
  Plus,
  Scale,
  Shield,
  Table2,
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

const COMPARISON_ROWS = [
  {
    method: 'dict["key"]',
    exists: "Returns value",
    missing: "KeyError",
    missingBad: true,
  },
  {
    method: 'dict.get("key")',
    exists: "Returns value",
    missing: "None",
    missingBad: false,
  },
  {
    method: 'dict.get("key","default")',
    exists: "Returns value",
    missing: "Default value",
    missingBad: false,
  },
] as const;

const BEFORE_AFTER_ROWS = [
  { key: "theme", original: "dark", updated: "light" },
  { key: "zoom", original: "Not Present", updated: "100" },
] as const;

const SUMMARY_ROWS = [
  { code: 'dict["key"]', purpose: "Access value" },
  { code: 'dict.get("key")', purpose: "Safe access" },
  { code: 'dict.get("key","default")', purpose: "Return default value" },
  { code: 'dict["key"] = value', purpose: "Update existing value" },
  { code: 'dict["new_key"] = value', purpose: "Add new key-value pair" },
] as const;

export function DictionaryAccessingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Accessing and Updating Dictionaries
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Read, update, and add values in a dictionary
        </p>
      </header>

      {/* Access with [key] */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Key className="h-3 w-3" />
          Access with [key]
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Get a Value Using Its Key
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="access.py">
          <span className="text-gray-800">config = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;theme&quot;: &quot;dark&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;lang&quot;: &quot;en&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(config[&quot;theme&quot;])</span>
        </CodeExercisePanel>

        <OutputBox>dark</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Use the key inside square brackets to access its value.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* KeyError */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Missing key
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">KeyError</h3>

        <CodeWindow filename="key_error.py">
          <span className="text-gray-800">config = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;theme&quot;: &quot;dark&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;lang&quot;: &quot;en&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(config[&quot;font&quot;])</span>
        </CodeWindow>

        <OutputBox>
          <span className="text-red-700">KeyError: &apos;font&apos;</span>
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          If the key does not exist, Python raises a KeyError.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* get() */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Shield className="h-3 w-3" />
          get()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Safe Access
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="get.py">
          <span className="text-gray-800">config = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;theme&quot;: &quot;dark&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;lang&quot;: &quot;en&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(config.get(&quot;theme&quot;))</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (config.get(&quot;font&quot;, &quot;Arial&quot;))
          </span>
        </CodeExercisePanel>

        <OutputBox>
          dark
          {"\n"}
          Arial
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          get() returns a default value if the key is missing.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            get() is safer than using square brackets when a key may not exist.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Comparison */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Scale className="h-3 w-3" />
          Comparison
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          [key] vs get()
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  If Key Exists
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  If Key Missing
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.exists}</td>
                  <td
                    className={`px-3.5 py-2.5 ${
                      row.missingBad ? "text-red-700" : "text-green-700"
                    }`}
                  >
                    {row.missingBad ? "KeyError" : row.missing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Update */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Pencil className="h-3 w-3" />
          Update values
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Change Existing Data
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="update.py">
          <span className="text-gray-800">config = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;theme&quot;: &quot;dark&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;lang&quot;: &quot;en&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">config[&quot;theme&quot;] = &quot;light&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(config)</span>
        </CodeExercisePanel>

        <OutputBox>
          {`{'theme': 'light', 'lang': 'en'}`}
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The value of &quot;theme&quot; is updated from &quot;dark&quot; to
          &quot;light&quot;.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Add new key */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Plus className="h-3 w-3" />
          Add new keys
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Insert New Data
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="add_key.py">
          <span className="text-gray-800">config = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;theme&quot;: &quot;light&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;lang&quot;: &quot;en&quot;</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">config[&quot;zoom&quot;] = 100</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(config)</span>
        </CodeExercisePanel>

        <OutputBox>
          {`{'theme': 'light', 'lang': 'en', 'zoom': 100}`}
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          If the key does not exist, Python creates a new key-value pair.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Before and after */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Table2 className="h-3 w-3" />
          Example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Dictionary Before and After
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Key
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Original Value
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Updated Value
                </th>
              </tr>
            </thead>
            <tbody>
              {BEFORE_AFTER_ROWS.map((row) => (
                <tr
                  key={row.key}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.key}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.original}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.updated}</td>
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

        <CodeExercisePanel practiceIndex={4} filename="student.py">
          <span className="text-gray-800">student = {"{"}</span>
          {"\n"}
          <span className="text-gray-800">    &quot;name&quot;: &quot;Asha&quot;,</span>
          {"\n"}
          <span className="text-gray-800">    &quot;age&quot;: 20</span>
          {"\n"}
          <span className="text-gray-800">{"}"}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Print the name</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(student[&quot;name&quot;])</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Update age to 21</span>
          {"\n"}
          <span className="text-gray-800">student[&quot;age&quot;] = 21</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Add city = &quot;Chennai&quot;</span>
          {"\n"}
          <span className="text-gray-800">
            student[&quot;city&quot;] = &quot;Chennai&quot;
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Print dictionary</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(student)</span>
        </CodeExercisePanel>

        <OutputBox>
          Asha
          {"\n"}
          {"\n"}
          {`{'name': 'Asha', 'age': 21, 'city': 'Chennai'}`}
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
                  Purpose
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
