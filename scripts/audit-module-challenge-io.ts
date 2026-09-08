/**
 * Audit curriculum challenge I/O: examples vs publicTests, and validate solutions.
 * Run: npx tsx scripts/audit-module-challenge-io.ts
 */
import { spawnSync } from "node:child_process";
import { getAllPracticeProblems } from "../src/data/practice/index.ts";
import type { PracticeProblem } from "../src/lib/types.ts";

function normalizeStdout(s: string) {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

function runPython(code: string, stdin = "") {
  const r = spawnSync("python", ["-c", code], {
    input: stdin,
    encoding: "utf8",
    timeout: 10000,
    maxBuffer: 2_000_000,
    windowsHide: true,
    env: { ...process.env, PYTHONHASHSEED: "0" },
  });
  return {
    ok: r.status === 0,
    stdout: normalizeStdout(r.stdout || ""),
    stderr: (r.stderr || "").trim(),
  };
}

function buildRunnableSolution(problem: PracticeProblem) {
  const starter = problem.starterCode || "";
  const solution = problem.solutionCode || "";
  if (!solution.trim()) return solution;
  if (/^class\s+(ListNode|TreeNode|Node)\b/m.test(solution)) return solution;
  const defNames = [...solution.matchAll(/^def\s+(\w+)/gm)].map((m) => m[1]);
  if (defNames.length === 0) return solution;
  let cut = starter.length;
  for (const name of defNames) {
    const re = new RegExp(`^def\\s+${name}\\b`, "m");
    const m = re.exec(starter);
    if (m && m.index < cut) cut = m.index;
  }
  return `${starter.slice(0, cut)}${solution}`;
}

const problems = getAllPracticeProblems();
const exampleMismatch = [];
const missingExample = [];
const missingExpected = [];
const missingSolution = [];
const failValidate = [];
let passValidate = 0;

for (const p of problems) {
  const tests = p.publicTests ?? [];
  if (!tests.length || tests[0].expectedStdout === undefined) {
    missingExpected.push(p.id);
  }
  const exampleOut = p.examples?.[0]?.output;
  if (exampleOut === undefined || exampleOut === "") {
    missingExample.push(p.id);
  } else if (
    tests[0]?.expectedStdout !== undefined &&
    normalizeStdout(exampleOut) !== normalizeStdout(tests[0].expectedStdout)
  ) {
    exampleMismatch.push({
      id: p.id,
      example: exampleOut,
      expectedStdout: tests[0].expectedStdout,
    });
  }

  if (!p.solutionCode?.trim()) {
    missingSolution.push(p.id);
    continue;
  }

  const solution = buildRunnableSolution(p);
  let ok = true;
  for (const test of tests) {
    const parts = [];
    if (test.setup) parts.push(test.setup);
    parts.push(solution);
    if (test.assertCode) parts.push(test.assertCode);
    const res = runPython(
      parts.join("\n\n"),
      test.stdin ? test.stdin.replace(/\r\n/g, "\n") : ""
    );
    if (test.expectedStdout !== undefined) {
      if (!res.ok || res.stdout !== normalizeStdout(test.expectedStdout)) {
        ok = false;
        failValidate.push({
          id: p.id,
          label: test.label,
          expected: test.expectedStdout,
          actual: res.stdout,
          err: res.stderr,
        });
        break;
      }
    } else if (!res.ok) {
      ok = false;
      failValidate.push({
        id: p.id,
        label: test.label,
        err: res.stderr || "runtime",
      });
      break;
    }
  }
  if (ok) passValidate += 1;
}

console.log(
  JSON.stringify(
    {
      total: problems.length,
      passValidate,
      failValidateCount: failValidate.length,
      failValidate: failValidate.slice(0, 20),
      exampleMismatchCount: exampleMismatch.length,
      exampleMismatch: exampleMismatch.slice(0, 30),
      missingExampleCount: missingExample.length,
      missingExample: missingExample.slice(0, 20),
      missingExpectedCount: missingExpected.length,
      missingSolutionCount: missingSolution.length,
    },
    null,
    2
  )
);
