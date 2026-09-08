/**
 * Validate every Python Programming Practice solution against publicTests.
 * Mirrors src/lib/practice-runner.ts grading rules (local Python).
 *
 * Run: npx tsx scripts/validate-all-practice-answers.mjs
 */
import { spawnSync } from "node:child_process";
import { getPythonBasicsProblems } from "../src/data/python-basics/index.ts";
import { getPythonPracticeProblems } from "../src/data/python-practice/index.ts";
import { getAllPracticeProblems } from "../src/data/practice/index.ts";

function normalizeStdout(s) {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

function runPython(code, stdin = "") {
  const r = spawnSync("python", ["-c", code], {
    input: stdin,
    encoding: "utf8",
    timeout: 15000,
    maxBuffer: 4_000_000,
    windowsHide: true,
  });
  return {
    ok: r.status === 0,
    stdout: normalizeStdout(r.stdout || ""),
    stderr: (r.stderr || "").trim(),
    status: r.status,
  };
}

function buildRunnableSolution(problem) {
  const starter = problem.starterCode || "";
  const solution = problem.solutionCode || "";
  if (!solution.trim()) return solution;

  // Script / full solutions that already define helper classes
  if (/^class\s+(ListNode|TreeNode|Node)\b/m.test(solution)) {
    return solution;
  }

  const defNames = [...solution.matchAll(/^def\s+(\w+)/gm)].map((m) => m[1]);
  if (defNames.length === 0) {
    // Pure script — run solution as-is
    return solution;
  }

  // Keep class/import prelude from starter before the problem's first def
  let cut = starter.length;
  for (const name of defNames) {
    const re = new RegExp(`^def\\s+${name}\\b`, "m");
    const m = re.exec(starter);
    if (m && m.index < cut) cut = m.index;
  }
  const prelude = starter.slice(0, cut);
  return `${prelude}${solution}`;
}

function validateProblem(problem, track) {
  const failures = [];
  const solution = buildRunnableSolution(problem);
  if (!problem.solutionCode || !problem.solutionCode.trim()) {
    failures.push({
      track,
      slug: problem.slug,
      id: problem.id,
      label: "(meta)",
      reason: "Missing solutionCode",
    });
    return failures;
  }

  const tests = problem.publicTests ?? [];
  if (tests.length === 0) {
    failures.push({
      track,
      slug: problem.slug,
      id: problem.id,
      label: "(meta)",
      reason: "No publicTests",
    });
    return failures;
  }

  for (const test of tests) {
    const parts = [];
    if (test.setup) parts.push(test.setup);
    parts.push(solution);
    if (test.assertCode) parts.push(test.assertCode);
    const code = parts.join("\n\n");
    const stdin = test.stdin ? test.stdin.replace(/\r\n/g, "\n") : "";

    const res = runPython(code, stdin);

    if (test.expectedStdout !== undefined) {
      const expected = normalizeStdout(test.expectedStdout);
      const actual = res.stdout;
      if (!res.ok) {
        failures.push({
          track,
          slug: problem.slug,
          id: problem.id,
          label: test.label,
          reason: `Runtime error: ${res.stderr || res.stdout || `exit ${res.status}`}`,
        });
      } else if (actual !== expected) {
        failures.push({
          track,
          slug: problem.slug,
          id: problem.id,
          label: test.label,
          reason: `Stdout mismatch\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`,
        });
      }
      continue;
    }

    if (!res.ok) {
      failures.push({
        track,
        slug: problem.slug,
        id: problem.id,
        label: test.label,
        reason: res.stderr || res.stdout || `exit ${res.status}`,
      });
    }
  }

  return failures;
}

const basics = getPythonBasicsProblems();
const algos = getPythonPracticeProblems();
const curriculum = getAllPracticeProblems();

const allFailures = [];
let basicsOk = 0;
let algosOk = 0;
let curriculumOk = 0;

for (const p of curriculum) {
  const f = validateProblem(p, "curriculum");
  if (f.length) allFailures.push(...f);
  else curriculumOk += 1;
}

for (const p of basics) {
  const f = validateProblem(p, "basics");
  if (f.length) allFailures.push(...f);
  else basicsOk += 1;
}

for (const p of algos) {
  const f = validateProblem(p, "algorithms");
  if (f.length) allFailures.push(...f);
  else algosOk += 1;
}

console.log(
  JSON.stringify(
    {
      totals: {
        curriculum: curriculum.length,
        basics: basics.length,
        algorithms: algos.length,
        combined: curriculum.length + basics.length + algos.length,
      },
      passedProblems: {
        curriculum: curriculumOk,
        basics: basicsOk,
        algorithms: algosOk,
      },
      failedProblems: {
        curriculum: curriculum.length - curriculumOk,
        basics: basics.length - basicsOk,
        algorithms: algos.length - algosOk,
      },
      failureCount: allFailures.length,
      failures: allFailures,
    },
    null,
    2
  )
);

process.exit(allFailures.length ? 1 : 0);
