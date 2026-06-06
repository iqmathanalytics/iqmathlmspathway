"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Code2,
  GitBranch,
  Globe,
  Lightbulb,
  Play,
  Search,
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

const FLOW_ROWS = [
  { condition: "score >= 60", result: "True", block: "if block" },
  { condition: "score >= 60", result: "False", block: "else block" },
] as const;

const SUMMARY_ROWS = [
  { concept: "if", description: "Runs when condition is True" },
  { concept: "else", description: "Runs when condition is False" },
  { concept: "Two Branches", description: "One of two blocks executes" },
  { concept: "Indentation", description: "Defines each block" },
  { concept: "Alignment", description: "else must align with if" },
] as const;

function IfElseCode({
  score,
  showElse = true,
}: {
  score: number;
  showElse?: boolean;
}) {
  return (
    <>
      <span className="text-gray-800">score = {score}</span>
      {"\n"}
      {"\n"}
      <span className="font-semibold text-[#1a5fb4]">if</span>
      <span className="text-gray-800"> score &gt;= 60:</span>
      {"\n"}
      <span className="text-gray-800">    </span>
      <span className="font-semibold text-[#8b2070]">print</span>
      <span className="text-gray-800">(&quot;Pass&quot;)</span>
      {showElse && (
        <>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Fail&quot;)</span>
        </>
      )}
    </>
  );
}

export function IfElseInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          The if-else Statement
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Choose between two possible actions
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is if-else?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The <strong>if-else</strong> statement allows Python to choose between
          two blocks of code.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            If the condition is True, the if block runs. Otherwise, the else
            block runs.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Syntax */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Code2 className="h-3 w-3" />
          Syntax
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Basic Structure
        </h3>

        <CodeWindow filename="syntax.py">
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> condition:</span>
          {"\n"}
          <span className="text-gray-800">    statement1</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    statement2</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Python checks the condition and executes only one block.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example Pass */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Pass or Fail
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="pass.py">
          <IfElseCode score={72} />
        </CodeExercisePanel>

        <OutputBox>Pass</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Since 72 is greater than 60, the if block runs.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example Fail */}
      <section className="mb-8">
        <SectionLabel variant="amber">Another example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Condition is False
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="fail.py">
          <IfElseCode score={45} />
        </CodeExercisePanel>

        <OutputBox>Fail</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Since 45 is less than 60, the else block runs.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Execution flow */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Search className="h-3 w-3" />
          Execution flow
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How if-else Works
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Condition
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Block Executed
                </th>
              </tr>
            </thead>
            <tbody>
              {FLOW_ROWS.map((row, i) => (
                <tr
                  key={`${row.result}-${i}`}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.condition}
                  </td>
                  <td
                    className={`px-3.5 py-2.5 font-medium ${
                      row.result === "True"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {row.result}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.block}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Decision flow visual */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <GitBranch className="h-3 w-3" />
          Decision flow
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Two Branches
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-4">
          <div className="flex flex-col items-center gap-1 text-center font-mono text-[13px] text-gray-700">
            <span className="rounded-lg bg-black/[0.05] px-3 py-1.5 font-semibold">
              Condition?
            </span>
            <span className="text-gray-400">│</span>
            <span className="text-gray-400">▼</span>
            <div className="grid w-full max-w-sm grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-semibold text-green-800">
                  True
                </span>
                <span className="text-gray-400">│</span>
                <span className="text-gray-400">▼</span>
                <span className="rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-green-800">
                  Run IF Block
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-[11px] font-semibold text-red-800">
                  False
                </span>
                <span className="text-gray-400">│</span>
                <span className="text-gray-400">▼</span>
                <span className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-red-800">
                  Run ELSE Block
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Alignment */}
      <section className="mb-8">
        <SectionLabel variant="green">Important rule</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Alignment and Indentation
        </h3>

        <CodeWindow filename="align.py">
          <IfElseCode score={60} />
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The <strong>else</strong> must align with the <strong>if</strong>.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            else has no condition. It handles every case where the if condition
            is False.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Real-life example */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Age Check
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="age.py">
          <span className="text-gray-800">age = 15</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> age &gt;= 18:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Adult&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Minor&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Minor</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="temperature.py">
          <span className="text-gray-800">temperature = 25</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> temperature &gt; 30:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Hot&quot;)</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Cool&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Cool</OutputBox>
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
