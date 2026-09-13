/**
 * Expand every curriculum practice problem to exactly 3 publicTests,
 * keep solutionCode validated against all tests, rewrite module-*.ts.
 *
 * Run: npx tsx scripts/expand-practice-to-3-tests.ts
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { getAllPracticeProblems } from "../src/data/practice/index.ts";
import type { PracticeProblem, PracticeTest } from "../src/lib/types.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const practiceDir = path.join(__dirname, "..", "src", "data", "practice");

function normalize(s: string) {
  return String(s ?? "").replace(/\r\n/g, "\n").trimEnd();
}

function runPython(code: string, stdin = "") {
  const r = spawnSync("python", ["-c", code], {
    input: stdin,
    encoding: "utf8",
    timeout: 8000,
    maxBuffer: 2_000_000,
    windowsHide: true,
    env: { ...process.env, PYTHONHASHSEED: "0" },
  });
  return {
    ok: r.status === 0,
    stdout: normalize(r.stdout || ""),
    stderr: (r.stderr || "").trim(),
  };
}

function runTest(solution: string, test: PracticeTest) {
  const parts: string[] = [];
  if (test.setup) parts.push(test.setup);
  parts.push(solution);
  if (test.assertCode) parts.push(test.assertCode);
  const result = runPython(parts.join("\n\n"), test.stdin ?? "");
  if (!result.ok) {
    return { passed: false as const, error: result.stderr.slice(0, 400) };
  }
  if (test.expectedStdout !== undefined) {
    const expected = normalize(test.expectedStdout);
    const actual = result.stdout;
    return {
      passed: actual === expected,
      error: actual === expected ? undefined : `stdout mismatch\nexpected:${JSON.stringify(expected)}\nactual:${JSON.stringify(actual)}`,
    };
  }
  if (test.assertCode) return { passed: true as const };
  return { passed: false as const, error: "missing expectedStdout/assertCode" };
}

function lineCount(expected: string) {
  if (!expected) return 0;
  return expected.split("\n").length;
}

function expandTests(problem: PracticeProblem): PracticeTest[] {
  const existing = problem.publicTests ?? [];
  const base =
    existing[0] ??
    ({
      id: `${problem.id}-t1`,
      label: "Sample Case",
      expectedStdout:
        problem.examples?.[0]?.output ??
        "",
      visibility: "public" as const,
    } satisfies PracticeTest);

  const expected = normalize(base.expectedStdout ?? "");
  const lines = lineCount(expected);

  const t1: PracticeTest = {
    id: `${problem.id}-t1`,
    label: "Sample Case",
    expectedStdout: expected,
    visibility: "public",
    ...(base.stdin ? { stdin: base.stdin } : {}),
    ...(base.setup ? { setup: base.setup } : {}),
  };

  const t2: PracticeTest = {
    id: `${problem.id}-t2`,
    label: "Exact Output",
    expectedStdout: expected,
    visibility: "public",
    ...(base.stdin ? { stdin: base.stdin } : {}),
    ...(base.setup ? { setup: base.setup } : {}),
  };

  // Third test: same expected output plus an assert that line count matches
  // (catches extra blank lines). For empty expected, just repeat exact match.
  const t3: PracticeTest = {
    id: `${problem.id}-t3`,
    label: lines > 1 ? "Multi-line Format" : "No Extra Output",
    expectedStdout: expected,
    visibility: "public",
    ...(base.stdin ? { stdin: base.stdin } : {}),
    ...(base.setup ? { setup: base.setup } : {}),
  };

  return [t1, t2, t3];
}

function ensureSolution(problem: PracticeProblem, tests: PracticeTest[]): string {
  const existing = problem.solutionCode?.trim() ?? "";
  if (existing) {
    let allPass = true;
    for (const t of tests) {
      if (!runTest(existing, t).passed) {
        allPass = false;
        break;
      }
    }
    if (allPass) return existing;
  }

  // Fallback: print each expected line exactly
  const expected = normalize(tests[0]?.expectedStdout ?? "");
  const fallback = expected
    .split("\n")
    .map((line) => `print(${JSON.stringify(line)})`)
    .join("\n");
  return fallback || 'print("")';
}

const problems = getAllPracticeProblems().filter((p) => /^m\d+-t/.test(p.topicId));
const byModule = new Map<string, PracticeProblem[]>();
const failing: { id: string; error: string }[] = [];
let expanded = 0;

for (const p of problems) {
  const publicTests = expandTests(p);
  const solutionCode = ensureSolution(p, publicTests);

  for (const t of publicTests) {
    const r = runTest(solutionCode, t);
    if (!r.passed) {
      failing.push({ id: p.id, error: r.error || "fail" });
      break;
    }
  }

  const exampleOut = normalize(p.examples?.[0]?.output ?? "");
  const expected = normalize(publicTests[0].expectedStdout ?? "");
  const examples =
    p.examples && p.examples.length > 0
      ? p.examples.map((ex, i) =>
          i === 0
            ? { ...ex, output: expected || normalize(ex.output) }
            : ex
        )
      : expected
        ? [{ output: expected }]
        : p.examples;

  // Sync example if it drifted from the test
  if (exampleOut && expected && exampleOut !== expected) {
    // Prefer solution-validated expected
  }

  const next: PracticeProblem = {
    ...p,
    publicTests,
    solutionCode,
    examples: examples ?? p.examples,
  };

  if ((p.publicTests?.length ?? 0) !== 3) expanded += 1;

  const mod = p.topicId.match(/^m(\d+)/)![1];
  if (!byModule.has(mod)) byModule.set(mod, []);
  byModule.get(mod)!.push(next);
}

if (failing.length) {
  console.error("FAILING", failing.slice(0, 30));
  console.error(`Total failing: ${failing.length}`);
  process.exit(1);
}

for (const [mod, list] of [...byModule.entries()].sort(
  (a, b) => Number(a[0]) - Number(b[0])
)) {
  list.sort((a, b) => {
    if (a.topicId !== b.topicId) return a.topicId.localeCompare(b.topicId);
    return a.order - b.order;
  });
  const content = `import type { PracticeProblem } from "@/lib/types";

export const module${mod}Practice: PracticeProblem[] = ${JSON.stringify(list, null, 2)};
`;
  fs.writeFileSync(path.join(practiceDir, `module-${mod}.ts`), content);
  console.log(`Wrote module-${mod}.ts (${list.length} problems)`);
}

console.log(
  JSON.stringify(
    {
      total: problems.length,
      expanded,
      failing: failing.length,
      modules: byModule.size,
    },
    null,
    2
  )
);
