"use client";

import {
  ArrowRight,
  ArrowUpFromLine,
  BookOpen,
  Building2,
  CheckCircle2,
  Code2,
  Globe,
  Lightbulb,
  Play,
  Search,
  Target,
  Workflow,
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

const STRUCTURE_PARTS = [
  { part: "def", description: "Keyword used to define a function" },
  { part: "function_name", description: "Name of the function" },
  { part: "parameters", description: "Input values (optional)" },
  { part: "body", description: "Code executed when called" },
  { part: "return", description: "Sends a result back (optional)" },
] as const;

const ADVANTAGES = [
  "Avoid repeating code",
  "Improve readability",
  "Make programs easier to maintain",
  "Break large problems into smaller tasks",
  "Reuse logic in multiple places",
] as const;

const SUMMARY_ROWS = [
  { concept: "def", description: "Defines a function" },
  { concept: "Function Call", description: "Runs the function" },
  { concept: "Parameters", description: "Inputs to the function" },
  { concept: "return", description: "Sends a value back" },
  { concept: "Reuse", description: "Write once, use many times" },
] as const;

export function FunctionsCreatingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Functions in Python
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Reusable blocks of code
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a Function?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A <strong>function</strong> is a reusable block of code that performs a
          specific task. Instead of writing the same code multiple times, you can
          place it inside a function and call it whenever needed.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Functions help make programs shorter, cleaner, and easier to maintain.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Creating with def */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Code2 className="h-3 w-3" />
          Creating a function
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using def
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="greet.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet():</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#c64600]">&quot;Hello from a function&quot;</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greet()</span>
        </CodeExercisePanel>

        <OutputBox>Hello from a function</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The function is created using the <strong>def</strong> keyword and runs
          only when called.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Structure */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Building2 className="h-3 w-3" />
          Function structure
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Parts of a Function
        </h3>

        <CodeWindow filename="structure.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> function_name(parameters):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">    # Function Body</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> value</span>
        </CodeWindow>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Part
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {STRUCTURE_PARTS.map((row) => (
                <tr
                  key={row.part}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.part}
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

      {/* Parameters */}
      <section className="mb-8">
        <SectionLabel variant="amber">Parameters</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Passing Data to a Function
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="parameters.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet(name):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#c64600]">&quot;Hello&quot;</span>
          <span className="text-gray-800">, name)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greet(</span>
          <span className="text-[#c64600]">&quot;Sam&quot;</span>
          <span className="text-gray-800">)</span>
        </CodeExercisePanel>

        <OutputBox>Hello Sam</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The value &quot;Sam&quot; is passed into the parameter{" "}
          <strong>name</strong>.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Return */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <ArrowUpFromLine className="h-3 w-3" />
          Returning values
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using return
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="add.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> add(a, b):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> a + b</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">result = add(3, 5)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result)</span>
        </CodeExercisePanel>

        <OutputBox>8</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The return statement sends the result back to the place where the
          function was called.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Return flow */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Search className="h-3 w-3" />
          How return works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Execution Flow
        </h3>

        <CodeWindow filename="flow.py">
          <span className="text-gray-800">add(3, 5)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">a = 3</span>
          {"\n"}
          <span className="text-gray-800">b = 5</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">a + b = 8</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> 8</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">result = 8</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Multiple parameters */}
      <section className="mb-8">
        <SectionLabel variant="green">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Multiple Parameters
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="student.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> student(name, age):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#c64600]">&quot;Name:&quot;</span>
          <span className="text-gray-800">, name)</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#c64600]">&quot;Age:&quot;</span>
          <span className="text-gray-800">, age)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">student(</span>
          <span className="text-[#c64600]">&quot;Mia&quot;</span>
          <span className="text-gray-800">, 20)</span>
        </CodeExercisePanel>

        <OutputBox>{`Name: Mia\nAge: 20`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Advantages */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <CheckCircle2 className="h-3 w-3" />
          Advantages
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Why Use Functions?
        </h3>

        <ul className="space-y-1.5 text-[13.5px] leading-relaxed text-gray-600">
          {ADVANTAGES.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Real-world example */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Globe className="h-3 w-3" />
          Real-world example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Calculate Area of a Rectangle
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="area.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> area(length, width):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> length * width</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">result = area(5, 4)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result)</span>
        </CodeExercisePanel>

        <OutputBox>20</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The function can be reused with different values.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Lifecycle */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Workflow className="h-3 w-3" />
          Function lifecycle
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How a Function Works
        </h3>

        <CodeWindow filename="lifecycle.txt">
          <span className="text-gray-800">Define Function</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">      ↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Call Function</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">      ↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Run Function Body</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">      ↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Return Result (optional)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">      ↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Continue Program</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={5} filename="multiply.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> multiply(a, b):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> a * b</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(multiply(4, 3))</span>
        </CodeExercisePanel>

        <OutputBox>12</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary */}
      <section className="mb-4">
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
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
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
    </div>
  );
}
