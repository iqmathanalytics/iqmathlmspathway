"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Globe,
  Home,
  Lightbulb,
  Play,
  Scale,
  Search,
  Settings,
  Star,
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

function OutputBox({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: boolean;
}) {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-black/10 bg-black/[0.03]">
      <div className="border-b border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        Output
      </div>
      <pre
        className={`px-3 py-2.5 font-mono text-[13px] ${
          error ? "text-red-700" : "text-gray-700"
        }`}
      >
        {children}
      </pre>
    </div>
  );
}

const COMPARISON_ROWS = [
  {
    feature: "Created",
    local: "Inside a function",
    global: "Outside a function",
  },
  {
    feature: "Accessible",
    local: "Only inside function",
    global: "Throughout module",
  },
  {
    feature: "Lifetime",
    local: "While function runs",
    global: "Until program ends",
  },
  {
    feature: "Modification",
    local: "Directly",
    global: "Requires global keyword",
  },
] as const;

const SUMMARY_ROWS = [
  { concept: "Local Variable", description: "Exists only inside a function" },
  { concept: "Global Variable", description: "Defined outside functions" },
  { concept: "Read Global", description: "Allowed directly" },
  { concept: "Modify Global", description: "Requires global keyword" },
  {
    concept: "Best Practice",
    description: "Pass values and return results",
  },
] as const;

export function FunctionVariablesInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Variable Scope in Python
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Understanding local and global variables
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is Scope?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          <strong>Scope</strong> determines where a variable can be accessed in
          a program.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Variables created inside a function are local. Variables created
            outside functions are global.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Local variables */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Home className="h-3 w-3" />
          Local variables
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Inside a Function
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="local.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> compute():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    total = 100   </span>
          <span className="text-gray-500"># local variable</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> total</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(compute())</span>
        </CodeExercisePanel>

        <OutputBox>100</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The variable <strong>total</strong> exists only inside the function.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Local error */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Outside access
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Not Visible Outside
        </h3>

        <CodeWindow filename="name_error.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> compute():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    total = 100</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> total</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">compute()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(total)</span>
        </CodeWindow>

        <OutputBox error>{`NameError:\nname 'total' is not defined`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Python cannot find total because it belongs only to the function.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Scope diagram */}
      <section className="mb-8">
        <SectionLabel variant="purple">Scope diagram</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Local Scope
        </h3>

        <CodeWindow filename="scope_diagram.txt">
          <span className="text-gray-800">Function compute()</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800"> ┌─────────────┐</span>
          {"\n"}
          <span className="text-gray-800"> │ total = 100 │</span>
          {"\n"}
          <span className="text-gray-800"> └─────────────┘</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Outside Function</span>
          {"\n"}
          {"\n"}
          <span className="text-red-700"> ❌ total not accessible</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Global variables */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Globe className="h-3 w-3" />
          Global variables
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Outside a Function
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="global_read.py">
          <span className="text-gray-800">count = 0</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> read_global():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">read_global()</span>
        </CodeExercisePanel>

        <OutputBox>0</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Functions can read global variables without any special keyword.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Reading globals */}
      <section className="mb-8">
        <SectionLabel variant="blue">Reading globals</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Allowed by Default
        </h3>

        <CodeWindow filename="read_message.py">
          <span className="text-gray-800">message = </span>
          <span className="text-[#c64600]">&quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> show():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(message)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">show()</span>
        </CodeWindow>

        <OutputBox>Python</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Assigning creates local */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Assigning creates local
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Common Beginner Mistake
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="reset_wrong.py">
          <span className="text-gray-800">count = 10</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> reset_wrong():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    count = 0</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">reset_wrong()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
        </CodeExercisePanel>

        <OutputBox>10</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          A new local variable named count is created. The global count remains
          unchanged.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Variable lookup */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Search className="h-3 w-3" />
          What happens?
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Variable Lookup
        </h3>

        <CodeWindow filename="lookup.txt">
          <span className="text-gray-800">Global Scope</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">count = 10</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">      ↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Function</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">count = 0</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">(New Local Variable)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">      ↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Function Ends</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Global count still = 10</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* global keyword */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Settings className="h-3 w-3" />
          Modifying globals
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using the global Keyword
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="global_keyword.py">
          <span className="text-gray-800">count = 10</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> reset():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">global</span>
          <span className="text-gray-800"> count</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    count = 0</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">reset()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
        </CodeExercisePanel>

        <OutputBox>0</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The global keyword tells Python to modify the global variable instead
          of creating a local one.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Best practice */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Star className="h-3 w-3" />
          Best practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Prefer Parameters and Returns
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="best_practice.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> reset(value):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> 0</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">count = 10</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">count = reset(count)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(count)</span>
        </CodeExercisePanel>

        <OutputBox>0</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Passing values into functions and returning results makes code easier
          to understand and test.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Comparison */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Scale className="h-3 w-3" />
          Local vs global
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Comparison Table
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Feature
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Local Variable
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Global Variable
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.local}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.global}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Real example */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Student Marks
        </h3>

        <CodeExercisePanel practiceIndex={5} filename="marks.py">
          <span className="text-gray-800">passing_mark = 40</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> check(mark):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> mark &gt;= passing_mark:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> </span>
          <span className="text-[#c64600]">&quot;Pass&quot;</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> </span>
          <span className="text-[#c64600]">&quot;Fail&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(check(55))</span>
        </CodeExercisePanel>

        <OutputBox>Pass</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The function reads the global variable passing_mark.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary */}
      <section className="mb-8">
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Quick Summary
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Concept
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
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
                  <td className="px-3.5 py-2.5 text-gray-800">
                    {row.concept}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-4">
        <SectionLabel variant="green">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={6} filename="show_value.py">
          <span className="text-gray-800">value = 50</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> show():</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(value)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">show()</span>
        </CodeExercisePanel>

        <OutputBox>50</OutputBox>
      </section>
    </div>
  );
}
