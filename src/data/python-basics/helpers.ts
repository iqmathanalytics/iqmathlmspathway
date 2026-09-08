import type {
  PracticeDifficulty,
  PracticeExample,
  PracticeProblem,
  PracticeTest,
} from "@/lib/types";

export const PYTHON_BASICS_CATEGORIES = [
  { id: "variables", label: "Variables" },
  { id: "strings", label: "Strings" },
  { id: "numbers", label: "Numbers" },
  { id: "lists", label: "Lists" },
  { id: "tuples", label: "Tuples" },
  { id: "dictionaries", label: "Dictionaries" },
  { id: "sets", label: "Sets" },
  { id: "operators", label: "Operators" },
  { id: "conditionals", label: "Conditionals" },
  { id: "loops", label: "Loops" },
  { id: "functions", label: "Functions" },
  { id: "comprehensions", label: "Comprehensions" },
  { id: "exceptions", label: "Exceptions" },
  { id: "files", label: "Files" },
  { id: "modules", label: "Modules" },
  { id: "oop", label: "Classes & OOP" },
  { id: "decorators", label: "Decorators" },
  { id: "regex", label: "Regular Expressions" },
  { id: "json", label: "JSON" },
] as const;

export type PythonBasicsCategoryId =
  (typeof PYTHON_BASICS_CATEGORIES)[number]["id"];

export const BASICS_CATEGORY_LABEL: Record<PythonBasicsCategoryId, string> =
  Object.fromEntries(
    PYTHON_BASICS_CATEGORIES.map((c) => [c.id, c.label])
  ) as Record<PythonBasicsCategoryId, string>;

export type EqTest = {
  kind?: "eq";
  label: string;
  call: string;
  expected: string;
};

export type CustomTest = {
  kind: "custom";
  label: string;
  code: string;
};

export type CodingTestDef = EqTest | CustomTest;

export function testsFromDefs(slug: string, defs: CodingTestDef[]): PracticeTest[] {
  return defs.map((d, i) => {
    const id = `pb-${slug}-t${i + 1}`;
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
}

interface BuildBasicsProblemInput {
  order: number;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  category: PythonBasicsCategoryId;
  description: string;
  examples: PracticeExample[];
  constraints: string[];
  hints: string[];
  approach: string;
  starterCode: string;
  solutionCode: string;
  tests: CodingTestDef[];
}

export function buildBasicsProblem(input: BuildBasicsProblemInput): PracticeProblem {
  return {
    id: `pb-${input.slug}`,
    topicId: `pb-${input.category}`,
    slug: input.slug,
    title: input.title,
    difficulty: input.difficulty,
    order: input.order,
    description: input.description.trim(),
    category: input.category,
    categoryLabel: BASICS_CATEGORY_LABEL[input.category],
    examples: input.examples,
    constraints: input.constraints,
    hints: input.hints,
    approach: input.approach.trim(),
    starterCode: input.starterCode.replace(/^\n/, ""),
    solutionCode: input.solutionCode.trim(),
    publicTests: testsFromDefs(input.slug, input.tests),
  };
}

export type ScriptStdoutTest = {
  label: string;
  expectedStdout: string;
  stdin?: string;
};

interface BuildScriptProblemInput {
  order: number;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  category: PythonBasicsCategoryId;
  description: string;
  examples: PracticeExample[];
  constraints: string[];
  hints: string[];
  approach: string;
  starterCode?: string;
  solutionCode: string;
  tests: ScriptStdoutTest[];
}

/** Print/script problem — no function stub required. Graded by stdout. */
export function buildScriptProblem(input: BuildScriptProblemInput): PracticeProblem {
  return {
    id: `pb-${input.slug}`,
    topicId: `pb-${input.category}`,
    slug: input.slug,
    title: input.title,
    difficulty: input.difficulty,
    order: input.order,
    description: input.description.trim(),
    category: input.category,
    categoryLabel: BASICS_CATEGORY_LABEL[input.category],
    examples: input.examples,
    constraints: input.constraints,
    hints: input.hints,
    approach: input.approach.trim(),
    starterCode: (input.starterCode ?? "# Write your script here\n").replace(/^\n/, ""),
    solutionCode: input.solutionCode.trim(),
    publicTests: input.tests.map((t, i) => ({
      id: `pb-${input.slug}-t${i + 1}`,
      label: t.label,
      visibility: "public" as const,
      expectedStdout: t.expectedStdout,
      stdin: t.stdin,
    })),
  };
}
