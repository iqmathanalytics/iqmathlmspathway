"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Lightbulb,
  MapPin,
  Play,
  Scale,
  Settings,
  Tag,
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

const POSITIONAL_ROWS = [
  { param: "name", arg: '"Sam"' },
  { param: "age", arg: "30" },
] as const;

const COMPARISON_ROWS = [
  { type: "Positional", example: 'describe("Sam", 30)', order: "Yes" },
  { type: "Keyword", example: "describe(age=30, name=\"Sam\")", order: "No" },
] as const;

const SUMMARY_ROWS = [
  { concept: "Positional Arguments", description: "Passed by order" },
  { concept: "Default Arguments", description: "Use predefined values if missing" },
  { concept: "Keyword Arguments", description: "Passed using parameter names" },
  { concept: "Order Matters", description: "Only for positional arguments" },
  {
    concept: "Default Rule",
    description: "Defaults must come after required parameters",
  },
] as const;

export function FunctionArgumentsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Function Arguments
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Passing data to functions in different ways
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What are Arguments?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Arguments are values passed to a function when it is called. They
          allow the function to work with different data each time it runs.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Parameters are defined in the function. Arguments are the actual
            values passed to it.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Positional */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <MapPin className="h-3 w-3" />
          Positional arguments
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Order Matters
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="positional.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> describe(name, age):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name, age)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">describe(</span>
          <span className="text-[#c64600]">&quot;Sam&quot;</span>
          <span className="text-gray-800">, 30)</span>
        </CodeExercisePanel>

        <OutputBox>Sam 30</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Values are assigned based on their position.
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Parameter
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Argument
                </th>
              </tr>
            </thead>
            <tbody>
              {POSITIONAL_ROWS.map((row) => (
                <tr
                  key={row.param}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.param}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.arg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Wrong order */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <AlertTriangle className="h-3 w-3" />
          Important
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Position Must Match
        </h3>

        <CodeWindow filename="wrong_order.py">
          <span className="text-gray-800">describe(30, </span>
          <span className="text-[#c64600]">&quot;Sam&quot;</span>
          <span className="text-gray-800">)</span>
        </CodeWindow>

        <OutputBox>30 Sam</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Python assigns values based on position, not meaning.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Default arguments */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Settings className="h-3 w-3" />
          Default arguments
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Providing Default Values
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="default.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet(name, greeting=</span>
          <span className="text-[#c64600]">&quot;Hello&quot;</span>
          <span className="text-gray-800">):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(greeting, name)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greet(</span>
          <span className="text-[#c64600]">&quot;Alex&quot;</span>
          <span className="text-gray-800">)</span>
        </CodeExercisePanel>

        <OutputBox>Hello Alex</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Since no greeting was provided, Python uses the default value
          &quot;Hello&quot;.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Override default */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Code2 className="h-3 w-3" />
          Override defaults
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Custom Values
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="override.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet(name, greeting=</span>
          <span className="text-[#c64600]">&quot;Hello&quot;</span>
          <span className="text-gray-800">):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(greeting, name)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greet(</span>
          <span className="text-[#c64600]">&quot;Alex&quot;</span>
          <span className="text-gray-800">, </span>
          <span className="text-[#c64600]">&quot;Hi&quot;</span>
          <span className="text-gray-800">)</span>
        </CodeExercisePanel>

        <OutputBox>Hi Alex</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The supplied value replaces the default.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Default flow */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Workflow className="h-3 w-3" />
          How defaults work
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Execution Flow
        </h3>

        <CodeWindow filename="default_flow.txt">
          <span className="text-gray-800">greet(</span>
          <span className="text-[#c64600]">&quot;Alex&quot;</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">name = </span>
          <span className="text-[#c64600]">&quot;Alex&quot;</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greeting not provided</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Use default value</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">greeting = </span>
          <span className="text-[#c64600]">&quot;Hello&quot;</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500">↓</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">Print:</span>
          {"\n"}
          <span className="text-gray-800">Hello Alex</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Keyword arguments */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Tag className="h-3 w-3" />
          Keyword arguments
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Specify Parameter Names
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="keyword.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> describe(name, age):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name, age)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">describe(age=25, name=</span>
          <span className="text-[#c64600]">&quot;Jordan&quot;</span>
          <span className="text-gray-800">)</span>
        </CodeExercisePanel>

        <OutputBox>Jordan 25</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          When using keywords, the order does not matter.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Comparison */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Scale className="h-3 w-3" />
          Positional vs keyword
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Comparison
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Type
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Order Important?
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.type}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">{row.type}</td>
                  <td className="px-3.5 py-2.5 font-mono text-[12.5px] text-gray-600">
                    {row.example}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.order}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Definition rule */}
      <section className="mb-8">
        <SectionLabel variant="red">Function definition rule</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Default Parameters Last
        </h3>

        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Parameters with default values must come after parameters without
          defaults.
        </p>

        <p className="mb-1.5 text-[13px] font-semibold text-green-800">
          Correct
        </p>
        <CodeWindow filename="correct.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet(name, greeting=</span>
          <span className="text-[#c64600]">&quot;Hello&quot;</span>
          <span className="text-gray-800">):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(greeting, name)</span>
        </CodeWindow>

        <p className="mb-1.5 mt-4 text-[13px] font-semibold text-red-800">
          Incorrect
        </p>
        <CodeWindow filename="incorrect.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> greet(greeting=</span>
          <span className="text-[#c64600]">&quot;Hello&quot;</span>
          <span className="text-gray-800">, name):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(greeting, name)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-500"># SyntaxError</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Real-world */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Student Registration
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="register.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> register(name, course=</span>
          <span className="text-[#c64600]">&quot;Python&quot;</span>
          <span className="text-gray-800">):</span>
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
          <span className="text-[#c64600]">&quot;Course:&quot;</span>
          <span className="text-gray-800">, course)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">register(</span>
          <span className="text-[#c64600]">&quot;Mia&quot;</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          <span className="text-gray-800">register(</span>
          <span className="text-[#c64600]">&quot;John&quot;</span>
          <span className="text-gray-800">, </span>
          <span className="text-[#c64600]">&quot;Data Science&quot;</span>
          <span className="text-gray-800">)</span>
        </CodeExercisePanel>

        <OutputBox>{`Name: Mia\nCourse: Python\n\nName: John\nCourse: Data Science`}</OutputBox>
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

        <CodeExercisePanel practiceIndex={5} filename="student.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> student(name, age=18):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(name, age)</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">student(</span>
          <span className="text-[#c64600]">&quot;Asha&quot;</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          <span className="text-gray-800">student(</span>
          <span className="text-[#c64600]">&quot;Rahul&quot;</span>
          <span className="text-gray-800">, 20)</span>
        </CodeExercisePanel>

        <OutputBox>{`Asha 18\nRahul 20`}</OutputBox>
      </section>
    </div>
  );
}
