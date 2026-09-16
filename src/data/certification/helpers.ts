import type {
  PracticeExample,
  PracticeProblem,
  PracticeTest,
} from "@/lib/types";
import { deriveRunDemoCode } from "@/lib/practice-run-demo";
import {
  CATEGORY_LABEL,
  ensureThreePublicTests,
  type CodingTestDef,
  type PythonPracticeCategoryId,
} from "@/data/python-practice/helpers";
import type { PracticeDifficulty } from "@/lib/types";

export type { CodingTestDef };

export function papcTestsFromDefs(slug: string, defs: CodingTestDef[]): PracticeTest[] {
  const mapped = defs.map((d, i) => {
    const id = `papc-${slug}-t${i + 1}`;
    if (d.kind === "custom") {
      return {
        id,
        label: d.label,
        visibility: "public" as const,
        assertCode: d.code.trim(),
      };
    }
    return {
      id,
      label: d.label,
      visibility: "public" as const,
      assertCode: [
        `_got = ${d.call}`,
        `_exp = ${d.expected}`,
        `assert _got == _exp, f"Expected {_exp!r}, got {_got!r}"`,
      ].join("\n"),
    };
  });
  if (mapped.length < 3) {
    return ensureThreePublicTests(`papc-${slug}`, mapped);
  }
  return mapped;
}

interface BuildPapcProblemInput {
  order: number;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  category: PythonPracticeCategoryId;
  description: string;
  examples: PracticeExample[];
  constraints: string[];
  hints: string[];
  approach: string;
  starterCode: string;
  solutionCode: string;
  tests: CodingTestDef[];
  runDemoCode?: string;
}

export function buildPapcProblem(input: BuildPapcProblemInput): PracticeProblem {
  const runDemoCode = deriveRunDemoCode({
    override: input.runDemoCode,
    tests: input.tests,
  });

  return {
    id: `papc-${input.slug}`,
    topicId: "papc",
    slug: input.slug,
    title: input.title,
    difficulty: input.difficulty,
    order: input.order,
    description: input.description.trim(),
    category: input.category,
    categoryLabel: CATEGORY_LABEL[input.category],
    examples: input.examples,
    constraints: input.constraints,
    hints: input.hints,
    approach: input.approach.trim(),
    starterCode: input.starterCode.replace(/^\n/, ""),
    solutionCode: input.solutionCode.trim(),
    publicTests: papcTestsFromDefs(input.slug, input.tests),
    ...(runDemoCode ? { runDemoCode } : {}),
  };
}

export function cloneAsPapc(
  source: PracticeProblem,
  order: number,
  extras?: Partial<Pick<PracticeProblem, "title" | "description" | "difficulty">>
): PracticeProblem {
  return {
    ...source,
    ...extras,
    id: `papc-${source.slug}`,
    topicId: "papc",
    order,
    publicTests: source.publicTests.map((t, i) => ({
      ...t,
      id: `papc-${source.slug}-t${i + 1}`,
    })),
  };
}
