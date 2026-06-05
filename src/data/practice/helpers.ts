import type { PracticeProblem, PracticeTest } from "@/lib/types";

type ProblemInput = Omit<PracticeProblem, "id" | "topicId"> & {
  idSuffix: string;
};

export function buildProblems(
  topicId: string,
  items: ProblemInput[]
): PracticeProblem[] {
  return items.map((item) => ({
    ...item,
    id: `${topicId}-${item.idSuffix}`,
    topicId,
  }));
}

export function makeTest(
  id: string,
  label: string,
  opts: Omit<PracticeTest, "id" | "label" | "visibility">
): PracticeTest {
  return { id, label, visibility: "public", ...opts };
}

/** Hidden test shape stored in Supabase (same fields minus visibility). */
export interface HiddenTest {
  id: string;
  label: string;
  setup?: string;
  stdin?: string;
  expectedStdout?: string;
  assertCode?: string;
}

export function toHiddenTests(
  tests: Omit<HiddenTest, "id">[],
  prefix: string
): HiddenTest[] {
  return tests.map((t, i) => ({ ...t, id: `${prefix}-h${i + 1}` }));
}

export function defaultHiddenFromPublic(
  problemId: string,
  publicTests: PracticeTest[],
  extra: Omit<HiddenTest, "id">[] = []
): HiddenTest[] {
  const fromPublic = publicTests.map((t, i) => ({
    id: `${problemId}-h-p${i + 1}`,
    label: `Hidden variant ${i + 1}`,
    setup: t.setup,
    stdin: t.stdin,
    expectedStdout: t.expectedStdout,
    assertCode: t.assertCode,
  }));
  const extras = extra.map((t, i) => ({
    ...t,
    id: `${problemId}-h-e${i + 1}`,
  }));
  return [...fromPublic, ...extras];
}
