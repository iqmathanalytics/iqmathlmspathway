/**
 * Audit curriculum practice problems: need 3 publicTests each;
 * solutionCode must pass all tests.
 * Run: npx tsx scripts/audit-practice-tests.ts
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { getAllPracticeProblems } from "../src/data/practice/index.ts";
import type { PracticeProblem, PracticeTest } from "../src/lib/types.ts";

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
    return {
      passed: false as const,
      error: result.stderr.slice(0, 400),
      actual: result.stdout,
    };
  }
  if (test.expectedStdout !== undefined) {
    const expected = normalize(test.expectedStdout);
    const actual = result.stdout;
    return {
      passed: actual === expected,
      expected,
      actual,
      error: actual === expected ? undefined : "stdout mismatch",
    };
  }
  if (test.assertCode) return { passed: true as const };
  return { passed: false as const, error: "missing expectedStdout/assertCode" };
}

const problems = getAllPracticeProblems();
const wrongCount: { id: string; title: string; topicId: string; n: number }[] =
  [];
const failing: Record<string, unknown>[] = [];
const missingSol: string[] = [];
const byCount: Record<number, number> = {};
let ok3 = 0;

for (const p of problems) {
  const tests = p.publicTests ?? [];
  const n = tests.length;
  byCount[n] = (byCount[n] || 0) + 1;
  if (n !== 3) {
    wrongCount.push({ id: p.id, title: p.title, topicId: p.topicId, n });
  }
  if (!p.solutionCode?.trim()) {
    missingSol.push(p.id);
    continue;
  }
  let pass = true;
  for (const t of tests) {
    const r = runTest(p.solutionCode, t);
    if (!r.passed) {
      pass = false;
      failing.push({
        id: p.id,
        title: p.title,
        testId: t.id,
        label: t.label,
        expected: "expected" in r ? r.expected : undefined,
        actual: "actual" in r ? r.actual : undefined,
        error: r.error,
      });
    }
  }
  if (pass && n === 3) ok3 += 1;
}

const report = {
  total: problems.length,
  ok3,
  byCount,
  wrongCount,
  failing,
  missingSol,
};

fs.writeFileSync(
  "scripts/audit-practice-tests-report.json",
  JSON.stringify(report, null, 2)
);

console.log(
  JSON.stringify(
    {
      total: report.total,
      ok3,
      byCount,
      wrongCount: wrongCount.length,
      failing: failing.length,
      missingSol: missingSol.length,
    },
    null,
    2
  )
);
console.log("\nWRONG COUNT SAMPLE");
for (const w of wrongCount.slice(0, 40)) {
  console.log(`${w.id}\t${w.n}\t${w.title}`);
}
console.log("\nFAIL SAMPLE");
for (const f of failing.slice(0, 40)) {
  console.log(JSON.stringify(f));
}
console.log("\nWrote scripts/audit-practice-tests-report.json");
