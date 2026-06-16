"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Layers,
  Lock,
  Play,
  Plus,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";
import {
  BUILD_PHASES,
  CONCEPT_MAP,
  PROJECT_SUMMARY,
  PROJECT_TITLE,
  SECTION_CONTENT,
  type FinalProjectSection,
  type StepBlock,
} from "@/components/lesson/finalProjectContent";

type LabelVariant = "green" | "blue" | "teal" | "purple" | "orange";

const PILL_STYLES: Record<LabelVariant, string> = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  teal: "bg-teal-100 text-teal-800",
  purple: "bg-purple-100 text-purple-800",
  orange: "bg-orange-100 text-orange-900",
};

const PHASE_LINKS: Record<string, string> = {
  data: "/learn/final-project/data-model",
  logic: "/learn/final-project/logic-and-loops",
  functions: "/learn/final-project/functions-and-report",
  capstone: "/learn/final-project/capstone",
};

function avg(scores: number[]) {
  return scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
}

function letterGrade(a: number) {
  if (a >= 90) return "A";
  if (a >= 80) return "B";
  if (a >= 70) return "C";
  if (a >= 60) return "D";
  return "F";
}

function status(a: number) {
  return a >= 60 ? "PASS" : "FAIL";
}

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: LabelVariant;
}) {
  return (
    <span
      className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${PILL_STYLES[variant]}`}
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
  const unlocked =
    !practice?.sequential || practice.isExerciseUnlocked(practiceIndex);
  const done =
    practice?.sequential && practice.isExerciseComplete(practiceIndex);
  const hasNext = practice != null && practiceIndex < practice.total - 1;
  const canAdvance =
    isActive &&
    hasNext &&
    (!practice?.sequential || done);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/15 bg-white/60 transition-all ${
        isActive ? "ring-2 ring-brand-400 ring-offset-1 shadow-sm" : ""
      } ${!unlocked ? "opacity-60" : ""}`}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-[11px] text-gray-500">
          {filename}
        </span>
        <div className="ml-1 flex items-center gap-1">
          {!unlocked ? (
            <span className="inline-flex items-center gap-0.5 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">
              <Lock className="h-2.5 w-2.5" />
              Locked
            </span>
          ) : (
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
              {isActive ? "Active" : "Try in IDE"}
            </button>
          )}
          {done && (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
          )}
          {canAdvance && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => practice?.nextPractice()}
              title="Next task"
              className="inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Next
              <ArrowRight className="h-2.5 w-2.5" />
            </button>
          )}
        </div>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3 font-mono text-[13px] leading-[1.9] text-gray-800">
        {children}
      </pre>
    </div>
  );
}

function OutputBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-emerald-200/80 bg-emerald-50/50">
      <div className="flex items-center gap-1.5 border-b border-emerald-200/60 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-wide text-emerald-800">
        <Zap className="h-3 w-3" />
        Expected output
      </div>
      <pre className="px-3 py-2.5 font-mono text-[12.5px] leading-relaxed text-emerald-950">
        {children}
      </pre>
    </div>
  );
}

function Annotation({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
      <span className="shrink-0">💡</span>
      <span>{children}</span>
    </div>
  );
}

function GradeSimulator() {
  const [students, setStudents] = useState<Record<string, number[]>>({
    Alice: [85, 92, 78],
    Bob: [70, 88, 91],
    Cara: [55, 48, 62],
  });
  const [selected, setSelected] = useState("Alice");

  const averages = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(students).map(([name, grades]) => [name, avg(grades)])
      ),
    [students]
  );

  const top = useMemo(() => {
    const entries = Object.entries(averages);
    if (!entries.length) return null;
    return entries.reduce((best, cur) => (cur[1] > best[1] ? cur : best));
  }, [averages]);

  const passing = useMemo(
    () => Object.entries(averages).filter(([, a]) => a >= 60).map(([n]) => n),
    [averages]
  );

  const addGrade = useCallback(() => {
    const score = Math.floor(Math.random() * 41) + 60;
    setStudents((prev) => ({
      ...prev,
      [selected]: [...(prev[selected] ?? []), score],
    }));
  }, [selected]);

  const reset = useCallback(() => {
    setStudents({
      Alice: [85, 92, 78],
      Bob: [70, 88, 91],
      Cara: [55, 48, 62],
    });
    setSelected("Alice");
  }, []);

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50/80 via-white to-orange-50/40">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-200/50 bg-white/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-brand-600" />
          <span className="text-sm font-semibold text-gray-900">
            Live Grade Simulator
          </span>
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-800">
            Interactive
          </span>
        </div>
        <button
          type="button"
          onClick={reset}
          className="text-[11px] font-medium text-gray-500 hover:text-gray-800"
        >
          Reset class
        </button>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-[12px] font-medium text-gray-500">
            Select a student, then add a grade
          </p>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {Object.keys(students).map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setSelected(name)}
                className={`rounded-full px-3 py-1 text-[12px] font-semibold transition-all ${
                  selected === name
                    ? "bg-brand-600 text-white shadow-sm"
                    : "border border-black/10 bg-white text-gray-700 hover:border-brand-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="mb-3 flex min-h-[44px] flex-wrap gap-1.5">
            {(students[selected] ?? []).map((g, i) => (
              <span
                key={`${selected}-${i}-${g}`}
                className="inline-flex items-center rounded-lg border border-black/10 bg-white px-2.5 py-1 font-mono text-[12px] font-semibold text-gray-800"
              >
                {g}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={addGrade}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-brand-700"
          >
            <Plus className="h-3.5 w-3.5" />
            Add random grade (60–100)
          </button>

          <p className="mt-2 text-[11px] text-gray-500">
            Avg for {selected}:{" "}
            <strong className="font-mono text-gray-800">
              {avg(students[selected] ?? []).toFixed(1)}
            </strong>{" "}
            — {status(avg(students[selected] ?? []))} (
            {letterGrade(avg(students[selected] ?? []))})
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/10 bg-gray-900">
          <div className="border-b border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Live report preview
          </div>
          <pre className="max-h-52 overflow-y-auto px-3 py-2.5 font-mono text-[11.5px] leading-relaxed text-green-300">
            {`=== Class Report ===\n`}
            {Object.entries(averages).map(([name, a]) => (
              <span key={name}>
                {`${name}: avg ${a.toFixed(1)} — ${status(a)} (${letterGrade(a)})\n`}
              </span>
            ))}
            {top && `\nTop student: ${top[0]} (${top[1].toFixed(1)})`}
            {`\nPassing (${passing.length}): ${JSON.stringify(passing)}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function BuildPipeline({
  activePhase,
  onSelect,
}: {
  activePhase: string;
  onSelect: (id: string) => void;
}) {
  const active = BUILD_PHASES.find((p) => p.id === activePhase) ?? BUILD_PHASES[0];

  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center gap-2">
        <Layers className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-semibold text-gray-900">
          Build pipeline — click each layer
        </span>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {BUILD_PHASES.map((phase, i) => {
          const isActive = phase.id === activePhase;
          const isPast =
            BUILD_PHASES.findIndex((p) => p.id === activePhase) > i;
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => onSelect(phase.id)}
              className={`relative rounded-xl border px-3 py-3 text-left transition-all ${
                isActive
                  ? "border-brand-400 bg-brand-50 shadow-sm ring-1 ring-brand-300"
                  : isPast
                    ? "border-green-200 bg-green-50/50 hover:border-green-300"
                    : "border-black/10 bg-white/60 hover:border-brand-200 hover:bg-brand-50/30"
              }`}
            >
              <div className="mb-1 text-lg">{phase.icon}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                {phase.label}
              </div>
              <div className="text-[13px] font-semibold text-gray-900">
                {phase.title}
              </div>
              {isPast && (
                <CheckCircle2 className="absolute right-2 top-2 h-3.5 w-3.5 text-green-600" />
              )}
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-black/10 bg-white/70 p-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
            {active.modules}
          </span>
          <span className="text-[13px] text-gray-600">{active.summary}</span>
          {PHASE_LINKS[active.id] && (
            <Link
              href={PHASE_LINKS[active.id]}
              className="ml-auto inline-flex items-center gap-0.5 text-[12px] font-semibold text-brand-700 hover:text-brand-800"
            >
              Go to lesson
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 px-3 py-2.5 font-mono text-[12px] leading-relaxed text-green-300">
          {active.snippet}
        </pre>
      </div>
    </div>
  );
}

function InteractiveConceptMap() {
  const [selected, setSelected] = useState(0);
  const row = CONCEPT_MAP[selected];

  return (
    <div className="mb-6">
      <p className="mb-2 text-[12px] font-medium text-gray-500">
        Click a module to see how it connects to the project
      </p>
      <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
        <div className="max-h-48 overflow-y-auto">
          <table className="w-full border-collapse text-[12.5px]">
            <thead className="sticky top-0 z-10 bg-black/[0.05]">
              <tr className="border-b border-black/15">
                <th className="px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  Module
                </th>
                <th className="hidden px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:table-cell">
                  Concepts
                </th>
              </tr>
            </thead>
            <tbody>
              {CONCEPT_MAP.map((r, i) => (
                <tr
                  key={r.module}
                  onClick={() => setSelected(i)}
                  className={`cursor-pointer border-b border-black/10 transition-colors last:border-b-0 ${
                    selected === i
                      ? "bg-brand-50"
                      : "hover:bg-black/[0.03]"
                  }`}
                >
                  <td className="px-3 py-2 font-semibold text-gray-800">
                    <span className="flex items-center gap-1.5">
                      {selected === i ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 shrink-0 text-gray-300" />
                      )}
                      {r.module}
                    </span>
                  </td>
                  <td className="hidden px-3 py-2 text-gray-600 sm:table-cell">
                    {r.concepts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-2 rounded-xl border border-brand-200/60 bg-brand-50/40 px-4 py-3 transition-all">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-800">
          {row.module}
        </p>
        <p className="mt-1 text-[13px] text-gray-700">
          <strong className="text-gray-900">Concepts:</strong> {row.concepts}
        </p>
        <p className="mt-1 font-mono text-[12.5px] text-gray-800">
          <strong className="font-sans text-gray-900">In project:</strong>{" "}
          {row.usedInProject}
        </p>
      </div>
    </div>
  );
}

function StepNav({
  steps,
  activeId,
  onSelect,
  isStepUnlocked,
  isStepDone,
}: {
  steps: StepBlock[];
  activeId: string;
  onSelect: (id: string) => void;
  isStepUnlocked: (step: StepBlock) => boolean;
  isStepDone: (step: StepBlock) => boolean;
}) {
  return (
    <nav className="mb-4 flex flex-wrap gap-1.5">
      {steps.map((step, i) => {
        const unlocked = isStepUnlocked(step);
        const done = isStepDone(step);
        return (
          <button
            key={step.id}
            type="button"
            disabled={!unlocked}
            onClick={() => {
              if (!unlocked) return;
              onSelect(step.id);
              document
                .getElementById(`fp-${step.id}`)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
              activeId === step.id
                ? "bg-brand-600 text-white shadow-sm"
                : done
                  ? "border border-green-200 bg-green-50 text-green-800"
                  : unlocked
                    ? "border border-black/15 bg-white/50 text-gray-600 hover:border-brand-300 hover:text-brand-800"
                    : "cursor-not-allowed border border-black/10 bg-gray-50 text-gray-400"
            }`}
          >
            {!unlocked && <Lock className="h-3 w-3" />}
            {done && unlocked && <CheckCircle2 className="h-3 w-3" />}
            {i + 1}. {step.title.split("—")[0].trim()}
          </button>
        );
      })}
    </nav>
  );
}

function StepBlockView({
  step,
  index,
  isOpen,
  onToggle,
  unlocked,
  done,
}: {
  step: StepBlock;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  unlocked: boolean;
  done: boolean;
}) {
  const practice = useLessonPractice();
  const isPracticeActive =
    step.practiceIndex != null &&
    practice?.activeIndex === step.practiceIndex;

  return (
    <div
      id={`fp-${step.id}`}
      className={`mb-3 scroll-mt-4 overflow-hidden rounded-xl border transition-all ${
        isOpen
          ? "border-brand-200 bg-white/80 shadow-sm"
          : unlocked
            ? "border-black/10 bg-white/40"
            : "border-black/8 bg-gray-50/80 opacity-75"
      } ${isPracticeActive ? "ring-2 ring-brand-300" : ""}`}
    >
      <button
        type="button"
        onClick={() => unlocked && onToggle()}
        disabled={!unlocked}
        className={`flex w-full items-start gap-2 px-4 py-3 text-left ${
          unlocked ? "hover:bg-black/[0.02]" : "cursor-not-allowed"
        }`}
      >
        <span
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
            isOpen
              ? "bg-brand-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-mono text-[14px] font-semibold tracking-tight text-gray-900">
              {step.title}
            </h4>
            {step.practiceIndex != null && (
              <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-800">
                IDE task
              </span>
            )}
            {!unlocked && (
              <span className="inline-flex items-center gap-0.5 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500">
                <Lock className="h-3 w-3" />
                Locked
              </span>
            )}
            {done && (
              <span className="inline-flex items-center gap-0.5 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-800">
                <CheckCircle2 className="h-3 w-3" />
                Done
              </span>
            )}
          </div>
          {!isOpen && (
            <p className="mt-0.5 line-clamp-1 text-[12.5px] text-gray-500">
              {!unlocked
                ? "Complete the previous task to unlock"
                : step.description}
            </p>
          )}
        </div>
        {unlocked ? (
          <ChevronDown
            className={`mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        ) : (
          <Lock className="mt-1 h-4 w-4 shrink-0 text-gray-400" />
        )}
      </button>

      {isOpen && unlocked && (
        <div className="border-t border-black/8 px-4 pb-4 pt-3">
          <p className="mb-2.5 text-[13.5px] leading-relaxed text-gray-600">
            {step.description}
          </p>

          {step.practiceIndex != null ? (
            <CodeExercisePanel
              practiceIndex={step.practiceIndex}
              filename={`${step.id}.py`}
            >
              {step.code}
            </CodeExercisePanel>
          ) : (
            <pre className="overflow-x-auto rounded-xl border border-black/10 bg-gray-900 px-4 py-3 font-mono text-[12.5px] leading-relaxed text-green-300">
              {step.code}
            </pre>
          )}

          {step.output && <OutputBox>{step.output}</OutputBox>}

          {practice?.sequential &&
            step.practiceIndex != null &&
            practice.activeIndex === step.practiceIndex &&
            !practice.isExerciseComplete(step.practiceIndex) && (
              <button
                type="button"
                onClick={() =>
                  practice.completeExercise(step.practiceIndex!)
                }
                className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-[12px] font-semibold text-white hover:bg-brand-700"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Complete task &amp; continue
              </button>
            )}

          {step.annotation && <Annotation>{step.annotation}</Annotation>}
        </div>
      )}
    </div>
  );
}

export function FinalProjectInfographic({
  section,
}: {
  section: FinalProjectSection;
}) {
  const content = SECTION_CONTENT[section];
  const practice = useLessonPractice();
  const [activePhase, setActivePhase] = useState<string>(
    section === "overview" ? "data" : section
  );
  const [activeStepId, setActiveStepId] = useState(content.steps[0]?.id ?? "");

  const isStepUnlocked = useCallback(
    (step: StepBlock) => {
      if (!practice?.sequential || step.practiceIndex == null) return true;
      return practice.isExerciseUnlocked(step.practiceIndex);
    },
    [practice]
  );

  const isStepDone = useCallback(
    (step: StepBlock) => {
      if (!practice?.sequential || step.practiceIndex == null) return false;
      return practice.isExerciseComplete(step.practiceIndex);
    },
    [practice]
  );

  const completedTaskCount = useMemo(
    () => content.steps.filter((s) => isStepDone(s)).length,
    [content.steps, isStepDone]
  );

  const progress =
    content.steps.length > 0
      ? Math.round((completedTaskCount / content.steps.length) * 100)
      : 0;

  useEffect(() => {
    if (!practice?.sequential) return;
    const current = content.steps.find(
      (s) =>
        s.practiceIndex != null &&
        s.practiceIndex === practice.activeIndex
    );
    if (current && isStepUnlocked(current)) {
      setActiveStepId(current.id);
    }
  }, [
    practice?.activeIndex,
    practice?.sequential,
    content.steps,
    isStepUnlocked,
  ]);

  const showExtras =
    !practice?.sequential ||
    (practice.isExerciseComplete(0) ?? false) ||
    completedTaskCount > 0;

  return (
    <div className="max-w-none text-gray-900">
      {section === "overview" && (
        <header className="mb-6 border-b border-black/10 pb-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
              <Trophy className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                {PROJECT_TITLE}
              </h2>
              <p className="mt-1 text-[13px] text-gray-500">
                {PROJECT_SUMMARY}
              </p>
            </div>
          </div>
        </header>
      )}

      <SectionLabel variant={content.labelVariant}>
        {section === "capstone" ? (
          <Target className="h-3 w-3" />
        ) : null}
        {content.label}
      </SectionLabel>

      <h3 className="mb-1.5 text-base font-semibold tracking-tight">
        {content.heading}
      </h3>
      <p className="mb-4 text-[13.5px] leading-relaxed text-gray-600">
        {content.intro}
      </p>

      {(section === "overview" || section === "capstone") && showExtras && (
        <GradeSimulator />
      )}

      {section === "overview" && showExtras && (
        <>
          <BuildPipeline
            activePhase={activePhase}
            onSelect={setActivePhase}
          />
          <InteractiveConceptMap />
        </>
      )}

      {practice?.sequential && (
        <div className="mb-4 rounded-lg border border-amber-200/80 bg-amber-50/50 px-3 py-2.5 text-[12.5px] text-amber-950">
          <strong>One task at a time:</strong> finish the current IDE task,
          click <em>Complete task &amp; continue</em>, then the next step
          unlocks automatically.
        </div>
      )}

      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-[12px] font-semibold text-gray-700">
          Step-by-step build
        </span>
        <span className="text-[11px] text-gray-500">
          {completedTaskCount}/{content.steps.length} tasks done · {progress}%
        </span>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-black/8">
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <StepNav
        steps={content.steps}
        activeId={activeStepId}
        onSelect={setActiveStepId}
        isStepUnlocked={isStepUnlocked}
        isStepDone={isStepDone}
      />

      {content.steps.map((step, i) => (
        <StepBlockView
          key={step.id}
          step={step}
          index={i}
          isOpen={activeStepId === step.id}
          unlocked={isStepUnlocked(step)}
          done={isStepDone(step)}
          onToggle={() => {
            if (!isStepUnlocked(step)) return;
            setActiveStepId((cur) => (cur === step.id ? "" : step.id));
            if (step.practiceIndex != null) {
              practice?.selectPractice(step.practiceIndex);
            }
          }}
        />
      ))}

      {content.tip && <Annotation>{content.tip}</Annotation>}
    </div>
  );
}
