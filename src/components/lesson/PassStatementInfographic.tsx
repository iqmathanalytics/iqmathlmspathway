"use client";

import {
  ArrowRight,
  BookOpen,
  Boxes,
  Code2,
  Key,
  Lightbulb,
  Play,
  RefreshCw,
  Scale,
  Search,
  Settings,
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
  variant = "default",
}: {
  filename: string;
  children: React.ReactNode;
  variant?: "default" | "error" | "success";
}) {
  const border =
    variant === "error"
      ? "border-red-200 bg-red-50/40"
      : variant === "success"
        ? "border-green-200 bg-green-50/40"
        : "border-black/15 bg-white/60";
  const header =
    variant === "error"
      ? "border-red-200/60 bg-red-50/60"
      : variant === "success"
        ? "border-green-200/60 bg-green-50/60"
        : "border-black/10 bg-black/[0.03]";

  return (
    <div className={`overflow-hidden rounded-xl border ${border}`}>
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-1.5 ${header}`}
      >
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

const USES_ROWS = [
  { situation: "if blocks", reason: "Logic not written yet" },
  { situation: "Loops", reason: "Placeholder loop body" },
  { situation: "Functions", reason: "Create empty functions" },
  { situation: "Classes", reason: "Create empty classes" },
  { situation: "Exception handling", reason: "Temporary except blocks" },
] as const;

const SUMMARY_ROWS = [
  { keyword: "pass", meaning: "Do nothing" },
  { keyword: "Placeholder", meaning: "Code will be added later" },
  { keyword: "Valid Syntax", meaning: "Prevents empty-block errors" },
  { keyword: "Functions & Classes", meaning: "Create temporary structures" },
  { keyword: "Loops & if Statements", meaning: "Acts as a temporary body" },
] as const;

export function PassStatementInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          The pass Statement
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          A placeholder for future code
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is pass?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The <strong>pass</strong> statement does nothing when executed. It is
          used as a placeholder when Python expects code, but you haven&apos;t
          written it yet.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Think of pass as saying: &quot;I&apos;ll write this code later.&quot;</span>
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
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Python accepts the block even though it contains no real code.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Example 1 */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Placeholder in an if Statement
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="score.py">
          <span className="text-gray-800">score = 120</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> score &gt; 100:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
          <span className="text-gray-500">   # TODO: handle invalid score</span>
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;OK&quot;)</span>
        </CodeExercisePanel>

        <OutputBox empty />

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The condition is True, so Python executes pass, which does nothing.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Why use pass */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Search className="h-3 w-3" />
          Why use pass?
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Planning Your Code
        </h3>

        <CodeWindow filename="planning.py">
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> score &gt; 100:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          You may know that some logic is needed here later, but you haven&apos;t
          implemented it yet.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Key className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>
            pass prevents syntax errors while you&apos;re still designing your
            program.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Loop example */}
      <section className="mb-8">
        <SectionLabel variant="green">Example 2</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          pass Inside a Loop
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="loop.py">
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> i </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(5):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
        </CodeExercisePanel>

        <OutputBox empty />

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The loop runs 5 times, but pass performs no action.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Execution flow */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <RefreshCw className="h-3 w-3" />
          Execution flow
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          How pass Works
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-4">
          <div className="flex flex-col items-center gap-1.5 text-center font-mono text-[13px] text-gray-700">
            <span className="rounded-lg bg-black/[0.05] px-3 py-1.5 font-semibold">
              Loop Starts
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5">
              Execute pass
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-amber-900">
              Do Nothing
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5">
              Next Iteration
            </span>
            <span className="text-gray-400">↓</span>
            <span className="rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-green-800">
              Loop Ends
            </span>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Function example */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Settings className="h-3 w-3" />
          Example 3
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Creating an Empty Function
        </h3>

        <CodeWindow filename="function.py">
          <span className="font-semibold text-[#1a5fb4]">def</span>
          <span className="text-gray-800"> future_feature():</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          The function exists, but it has no implementation yet.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Class example */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Boxes className="h-3 w-3" />
          Example 4
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Creating an Empty Class
        </h3>

        <CodeWindow filename="class.py">
          <span className="font-semibold text-[#1a5fb4]">class</span>
          <span className="text-gray-800"> Student:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Python requires something inside a class body. pass satisfies that
          requirement.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* pass vs comment */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Scale className="h-3 w-3" />
          pass vs comment
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Important Difference
        </h3>

        <CodeWindow filename="comment_only.py" variant="error">
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">True</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-500">    # TODO: add code later</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This causes an error because the block is empty.
        </p>

        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50/60 px-3 py-2.5 text-[13px] text-red-800">
          <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>IndentationError: expected an indented block</span>
        </div>

        <div className="mt-4">
          <CodeWindow filename="with_pass.py" variant="success">
            <span className="font-semibold text-[#1a5fb4]">if</span>
            <span className="text-gray-800"> </span>
            <span className="font-semibold text-[#1a5fb4]">True</span>
            <span className="text-gray-800">:</span>
            {"\n"}
            <span className="text-gray-800">    </span>
            <span className="font-semibold text-[#1a5fb4]">pass</span>
          </CodeWindow>
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This works correctly because pass is an actual Python statement.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Common uses */}
      <section className="mb-8">
        <SectionLabel variant="green">Common uses</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Where pass is Used
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Situation
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {USES_ROWS.map((row) => (
                <tr
                  key={row.situation}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">
                    {row.situation}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.reason}</td>
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

        <CodeExercisePanel practiceIndex={2} filename="finished.py">
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> i </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(3):</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">pass</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Finished&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Finished</OutputBox>
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
                  Keyword
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.keyword}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.keyword}
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
