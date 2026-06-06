"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Lightbulb,
  Play,
  Search,
  Target,
  XCircle,
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
  empty,
}: {
  children?: React.ReactNode;
  empty?: boolean;
}) {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-black/10 bg-black/[0.03]">
      <div className="border-b border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        Output
      </div>
      <pre
        className={`px-3 py-2.5 font-mono text-[13px] ${
          empty ? "italic text-gray-400" : "text-gray-700"
        }`}
      >
        {empty ? "(No Output)" : children}
      </pre>
    </div>
  );
}

const FLOW_ROWS = [
  { condition: "age >= 18", result: "True", action: "Run block" },
  { condition: "score >= 60", result: "False", action: "Skip block" },
] as const;

const SUMMARY_ROWS = [
  { concept: "if", meaning: "Checks a condition" },
  { concept: "Condition True", meaning: "Run the block" },
  { concept: "Condition False", meaning: "Skip the block" },
  { concept: ":", meaning: "Ends the condition line" },
  { concept: "Indentation", meaning: "Defines the code block" },
] as const;

export function IfStatementInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">The if Statement</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Make decisions in Python using conditions
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is an if Statement?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The <strong>if</strong> statement checks whether a condition is True. If
          the condition is True, Python executes the code block inside the if
          statement.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Use if statements when you want your program to make decisions.
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
          <span className="text-gray-800">    statement</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Notice the colon <strong>:</strong> after the condition and the
          indentation below it.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example 1 */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Voting Eligibility
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="vote.py">
          <span className="text-gray-800">age = 18</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> age &gt;= 18:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;You can vote.&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>You can vote.</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Since age is 18, the condition is True and the message is printed.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example 2 */}
      <section className="mb-8">
        <SectionLabel variant="amber">Example 2</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Exam Result
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="exam.py">
          <span className="text-gray-800">score = 55</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> score &gt;= 60:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Pass&quot;)</span>
        </CodeExercisePanel>

        <OutputBox empty />

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Since 55 is less than 60, the condition is False and the block is
          skipped.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Flow */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Search className="h-3 w-3" />
          How it works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Execution Flow
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {FLOW_ROWS.map((row) => (
                <tr
                  key={row.condition}
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
                  <td className="px-3.5 py-2.5 text-gray-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Indentation */}
      <section className="mb-8">
        <SectionLabel variant="blue">Important rule</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Indentation
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="indent.py">
          <span className="text-gray-800">age = 20</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> age &gt;= 18:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Adult&quot;)</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Eligible&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>
          Adult
          {"\n"}
          Eligible
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Both print statements run because they belong to the same indented
          block.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Python uses indentation (usually 4 spaces) to identify blocks of
            code.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Incorrect example */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <XCircle className="h-3 w-3" />
          Incorrect example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Indentation Error
        </h3>

        <div className="overflow-hidden rounded-xl border border-red-200 bg-red-50/40">
          <div className="flex items-center gap-1.5 border-b border-red-200/60 bg-red-50/60 px-3 py-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="font-mono text-[11px] text-red-700">
              bad_indent.py
            </span>
          </div>
          <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13.5px] leading-loose">
            <span className="text-gray-800">age = 20</span>
            {"\n"}
            {"\n"}
            <span className="font-semibold text-[#1a5fb4]">if</span>
            <span className="text-gray-800"> age &gt;= 18:</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(&quot;Adult&quot;)</span>
          </pre>
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This causes an IndentationError because the block is not indented.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Real-life example */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Temperature Check
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="temperature.py">
          <span className="text-gray-800">temperature = 35</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> temperature &gt; 30:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;It&apos;s a hot day.&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>It&apos;s a hot day.</OutputBox>
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

        <CodeExercisePanel practiceIndex={4} filename="marks.py">
          <span className="text-gray-800">marks = 75</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> marks &gt;= 50:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Pass&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Pass</OutputBox>
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
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.concept}
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
