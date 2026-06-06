"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Lightbulb,
  PhoneCall,
  Play,
  Repeat,
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
  const hasNext = practice != null && practiceIndex < practice.total - 1;

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

const CALL_STEPS = [
  { step: "1", label: "Write the function name" },
  { step: "2", label: "Add parentheses ()" },
  { step: "3", label: "Pass arguments inside if needed" },
  { step: "4", label: "Python runs the function body" },
  { step: "5", label: "Control returns to the next line" },
] as const;

const SUMMARY_ROWS = [
  { concept: "function_name()", description: "Call with no arguments" },
  { concept: "function_name(x, y)", description: "Call with arguments" },
  { concept: "result = fn()", description: "Capture a return value" },
  { concept: "fn(); fn()", description: "Call the same function many times" },
  { concept: "print(), len()", description: "Built-in functions work the same way" },
] as const;

export function FunctionsCallingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Calling Functions
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Run functions after you define them
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What Does Calling Mean?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Defining a function with <strong>def</strong> only creates it. To
          actually run the code inside, you must <strong>call</strong> the
          function by writing its name followed by parentheses.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Think of a function like a recipe: defining it writes the steps;
            calling it actually cooks the dish.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Call syntax */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <PhoneCall className="h-3 w-3" />
          Syntax
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How to Call a Function
        </h3>

        <CodeWindow filename="syntax.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet():</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Hello!&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># Call the function</span>
          {"\n"}
          <span className="text-gray-800">greet()</span>
        </CodeWindow>

        <div className="mt-4 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Step
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  What happens
                </th>
              </tr>
            </thead>
            <tbody>
              {CALL_STEPS.map((row) => (
                <tr
                  key={row.step}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.step}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* No arguments */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Repeat className="h-3 w-3" />
          No arguments
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Calling Without Arguments
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Use empty parentheses when the function does not need input. You can
          call it as many times as you like.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="greet.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet():</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Hello!&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greet()</span>
          {"\n"}
          <span className="text-gray-800">greet()</span>
        </CodeExercisePanel>

        <OutputBox>
          Hello!
          {"\n"}
          Hello!
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* With arguments */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <Code2 className="h-3 w-3" />
          With arguments
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Calling With Arguments
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Pass values inside the parentheses. They are received by the
          function&apos;s parameters in order.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="add.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> add(a, b):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a + b)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">add(5, 3)</span>
          {"\n"}
          <span className="text-gray-800">add(10, 20)</span>
        </CodeExercisePanel>

        <OutputBox>
          8
          {"\n"}
          30
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Return value */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Workflow className="h-3 w-3" />
          Return values
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using the Returned Value
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          When a function uses <strong>return</strong>, you can store the result
          in a variable or pass it directly to another function like{" "}
          <strong>print()</strong>.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="square.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> square(n):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> n * n</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">result = square(4)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(result)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(square(5))</span>
        </CodeExercisePanel>

        <OutputBox>
          16
          {"\n"}
          25
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Multiple calls */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Repeat className="h-3 w-3" />
          Multiple calls
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Call the Same Function Many Times
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Each call runs the function body independently with its own arguments.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="show_status.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> show_status(score):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> score &gt;= 60:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Pass&quot;)</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Fail&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">show_status(72)</span>
          {"\n"}
          <span className="text-gray-800">show_status(45)</span>
        </CodeExercisePanel>

        <OutputBox>
          Pass
          {"\n"}
          Fail
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Built-in functions */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <CheckCircle2 className="h-3 w-3" />
          Built-in functions
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Built-in Functions Work the Same Way
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python includes ready-made functions. You call them with the same
          syntax — name and parentheses.
        </p>

        <CodeWindow filename="builtins.py">
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Hello&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">len</span>
          <span className="text-gray-800">([10, 20, 30]))</span>
        </CodeWindow>

        <OutputBox>
          Hello
          {"\n"}
          3
        </OutputBox>
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
                  Pattern
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
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

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section>
        <SectionLabel variant="purple">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="double.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> double(x):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">return</span>
          <span className="text-gray-800"> x * 2</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(double(10))</span>
        </CodeExercisePanel>

        <OutputBox>20</OutputBox>
      </section>
    </div>
  );
}
