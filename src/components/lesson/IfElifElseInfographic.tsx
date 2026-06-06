"use client";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  Key,
  Lightbulb,
  Play,
  Search,
  Target,
  TrafficCone,
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

const GRADE_TREE = [
  { condition: "grade >= 90", label: "A" },
  { condition: "grade >= 80", label: "B" },
  { condition: "grade >= 70", label: "C" },
  { condition: "else", label: "F" },
] as const;

const SUMMARY_ROWS = [
  { keyword: "if", purpose: "First condition" },
  { keyword: "elif", purpose: "Additional conditions" },
  { keyword: "else", purpose: "Default block" },
  { keyword: "First Match Wins", purpose: "Python stops after first True condition" },
  { keyword: "Order Matters", purpose: "Place higher thresholds first" },
] as const;

function GradeChain({
  grade,
  wrongOrder = false,
}: {
  grade: number;
  wrongOrder?: boolean;
}) {
  if (wrongOrder) {
    return (
      <>
        <span className="text-gray-800">grade = {grade}</span>
        {"\n"}
        {"\n"}
        <span className="font-semibold text-[#1a5fb4]">if</span>
        <span className="text-gray-800"> grade &gt;= 70:</span>
        {"\n"}
        <span className="text-gray-800">    </span>
        <span className="font-semibold text-[#8b2070]">print</span>
        <span className="text-gray-800">(&quot;C&quot;)</span>
        {"\n"}
        {"\n"}
        <span className="font-semibold text-[#1a5fb4]">elif</span>
        <span className="text-gray-800"> grade &gt;= 80:</span>
        {"\n"}
        <span className="text-gray-800">    </span>
        <span className="font-semibold text-[#8b2070]">print</span>
        <span className="text-gray-800">(&quot;B&quot;)</span>
        {"\n"}
        {"\n"}
        <span className="font-semibold text-[#1a5fb4]">elif</span>
        <span className="text-gray-800"> grade &gt;= 90:</span>
        {"\n"}
        <span className="text-gray-800">    </span>
        <span className="font-semibold text-[#8b2070]">print</span>
        <span className="text-gray-800">(&quot;A&quot;)</span>
      </>
    );
  }

  return (
    <>
      <span className="text-gray-800">grade = {grade}</span>
      {"\n"}
      {"\n"}
      <span className="font-semibold text-[#1a5fb4]">if</span>
      <span className="text-gray-800"> grade &gt;= 90:</span>
      {"\n"}
      <span className="text-gray-800">    </span>
      <span className="font-semibold text-[#8b2070]">print</span>
      <span className="text-gray-800">(&quot;A&quot;)</span>
      {"\n"}
      {"\n"}
      <span className="font-semibold text-[#1a5fb4]">elif</span>
      <span className="text-gray-800"> grade &gt;= 80:</span>
      {"\n"}
      <span className="text-gray-800">    </span>
      <span className="font-semibold text-[#8b2070]">print</span>
      <span className="text-gray-800">(&quot;B&quot;)</span>
      {"\n"}
      {"\n"}
      <span className="font-semibold text-[#1a5fb4]">elif</span>
      <span className="text-gray-800"> grade &gt;= 70:</span>
      {"\n"}
      <span className="text-gray-800">    </span>
      <span className="font-semibold text-[#8b2070]">print</span>
      <span className="text-gray-800">(&quot;C&quot;)</span>
      {"\n"}
      {"\n"}
      <span className="font-semibold text-[#1a5fb4]">else</span>
      <span className="text-gray-800">:</span>
      {"\n"}
      <span className="text-gray-800">    </span>
      <span className="font-semibold text-[#8b2070]">print</span>
      <span className="text-gray-800">(&quot;F&quot;)</span>
    </>
  );
}

export function IfElifElseInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          The elif Statement
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Check multiple conditions in sequence
        </p>
      </header>

      {/* Definition */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Definition
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is elif?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The <strong>elif</strong> (else if) statement allows Python to check
          multiple conditions. It is used when there are more than two possible
          outcomes.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Python checks conditions from top to bottom and executes the first
            matching block.
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
          <span className="text-gray-800"> condition1:</span>
          {"\n"}
          <span className="text-gray-800">    statement1</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">elif</span>
          <span className="text-gray-800"> condition2:</span>
          {"\n"}
          <span className="text-gray-800">    statement2</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">elif</span>
          <span className="text-gray-800"> condition3:</span>
          {"\n"}
          <span className="text-gray-800">    statement3</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    statement4</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Only one block will execute.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Grade example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 1</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Student Grade System
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="grade.py">
          <GradeChain grade={85} />
        </CodeExercisePanel>

        <OutputBox>B</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          85 is not greater than or equal to 90, so Python checks the next
          condition. Since 85 is greater than or equal to 80, it prints B and
          stops checking.
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
          First Match Wins
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-4 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>grade = 85</div>
          <div className="mt-3" />
          <div>
            if grade &gt;= 90{" "}
            <span className="text-red-600">False</span>
          </div>
          <div className="mt-2" />
          <div>
            elif grade &gt;= 80{" "}
            <span className="font-semibold text-green-700">True</span>
          </div>
          <div className="pl-6 text-gray-500">↓</div>
          <div className="pl-6 font-semibold text-brand-700">Print B</div>
          <div className="mt-3 font-medium text-gray-500">Stop checking</div>
        </div>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Key className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>
            Once a condition becomes True, the remaining elif and else blocks
            are skipped.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Decision tree */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <GitBranch className="h-3 w-3" />
          Grade decision tree
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Top-to-Bottom Checking
        </h3>

        <div className="space-y-2 rounded-xl border border-black/15 bg-white/50 px-4 py-4">
          {GRADE_TREE.map((step) => (
            <div key={step.label} className="flex items-start gap-3">
              <div className="min-w-0 flex-1 font-mono text-[13px] text-gray-800">
                {step.condition === "else" ? "else" : step.condition}
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <span>│</span>
                <span>└──</span>
              </div>
              <div className="rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1 font-mono text-[13px] font-semibold text-gray-700">
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Wrong order */}
      <section className="mb-8">
        <SectionLabel variant="blue">Important rule</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Order Matters
        </h3>

        <CodeWindow filename="wrong_order.py" variant="error">
          <GradeChain grade={95} wrongOrder />
        </CodeWindow>

        <OutputBox>C</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This is incorrect because Python stops at the first True condition.
        </p>

        <div className="mt-3 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Always place higher or more specific conditions first.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Correct order */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <CheckCircle2 className="h-3 w-3" />
          Correct order
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Highest Threshold First
        </h3>

        <CodeWindow filename="correct_order.py" variant="success">
          <GradeChain grade={90} />
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          This ensures grades are classified correctly.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Role example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example 2</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          User Access Control
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="role.py">
          <span className="text-gray-800">role = &quot;admin&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> role == &quot;admin&quot;:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Full access&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">elif</span>
          <span className="text-gray-800"> role == &quot;editor&quot;:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Edit access&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;View only&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Full access</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Traffic signal */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <TrafficCone className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Traffic Signal
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="signal.py">
          <span className="text-gray-800">signal = &quot;yellow&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> signal == &quot;green&quot;:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Go&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">elif</span>
          <span className="text-gray-800"> signal == &quot;yellow&quot;:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Slow Down&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Stop&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Slow Down</OutputBox>
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

        <CodeExercisePanel practiceIndex={3} filename="marks.py">
          <span className="text-gray-800">marks = 75</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> marks &gt;= 90:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Excellent&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">elif</span>
          <span className="text-gray-800"> marks &gt;= 75:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Good&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">elif</span>
          <span className="text-gray-800"> marks &gt;= 50:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Pass&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">else</span>
          <span className="text-gray-800">:</span>
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Fail&quot;)</span>
        </CodeExercisePanel>

        <OutputBox>Good</OutputBox>
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
                  Purpose
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
