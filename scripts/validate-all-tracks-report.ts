/**
 * Run official solutions against public tests + Output (runDemo) for:
 *   curriculum challenges, Python Basics, Python Programming Practice,
 *   PAPC practice, and PAPC exam (Get Certificate) bank.
 *
 * Usage: npx tsx scripts/validate-all-tracks-report.ts
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getAllPracticeProblems } from "../src/data/practice";
import { getPythonBasicsProblems } from "../src/data/python-basics";
import { getPythonPracticeProblems } from "../src/data/python-practice";
import { getPapcProblems } from "../src/data/certification/papc-problems";
import { getPapcQuizProblems } from "../src/data/certification/papc-quiz-bank";
import {
  isVisualizationCode,
  prepareVisualizationRunCode,
} from "../src/lib/visualization-code";
import type { PracticeProblem, PracticeTest } from "../src/lib/types";

const PYTHON = process.env.PYTHON_BIN ?? "python";
const CONCURRENCY = Number(process.env.VERIFY_CONCURRENCY ?? 8);

const QUIET_INPUT_SHIM = `import builtins as _b
_real_input = _b.input
def _quiet_input(prompt=""):
    return _real_input()
_b.input = _quiet_input
`;

type TrackId =
  | "curriculum"
  | "python-basics"
  | "python-practice"
  | "papc-practice"
  | "papc-exam";

interface Failure {
  track: TrackId;
  problemId: string;
  slug: string;
  title: string;
  order?: number;
  check: string;
  reason: string;
  expected?: string;
  actual?: string;
}

interface TrackSummary {
  track: TrackId;
  problems: number;
  passed: number;
  failed: number;
  missingSolution: number;
  missingTests: number;
  testFailures: number;
  demoFailures: number;
}

function normalizeStdout(s: string): string {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

function buildRunnableSolution(problem: PracticeProblem): string {
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

function wrapSource(source: string, stdin?: string): string {
  const runnable = isVisualizationCode(source)
    ? prepareVisualizationRunCode(source)
    : source;
  return stdin ? `${QUIET_INPUT_SHIM}\n${runnable}` : runnable;
}

function runPythonFile(
  file: string,
  cwd: string,
  stdin?: string
): Promise<{ stdout: string; stderr: string; code: number }> {
  return new Promise((resolve) => {
    const child = spawn(PYTHON, ["-I", file], {
      cwd,
      env: { ...process.env, MPLBACKEND: "Agg", PYTHONIOENCODING: "utf-8" },
    });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill();
    }, 15000);
    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ stdout, stderr, code: code ?? 1 });
    });
    if (stdin) child.stdin.write(stdin.endsWith("\n") ? stdin : `${stdin}\n`);
    child.stdin.end();
  });
}

function lastErrorLine(stderr: string, stdout: string): string {
  const text = (stderr || stdout).trim();
  if (!text) return "unknown error";
  const lines = text.split("\n").filter((l) => l.trim());
  return lines.slice(-2).join(" | ");
}

async function verifyProblem(
  track: TrackId,
  problem: PracticeProblem
): Promise<Failure[]> {
  const failures: Failure[] = [];
  const base = {
    track,
    problemId: problem.id,
    slug: problem.slug,
    title: problem.title,
    order: problem.order,
  };

  if (!problem.solutionCode?.trim()) {
    failures.push({ ...base, check: "meta", reason: "Missing solutionCode" });
    return failures;
  }
  const tests = problem.publicTests ?? [];
  if (tests.length === 0) {
    failures.push({ ...base, check: "meta", reason: "No publicTests" });
    return failures;
  }

  const solution = buildRunnableSolution(problem);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `vt-${problem.id}-`));
  try {
    for (const test of tests) {
      const parts: string[] = [];
      if (test.setup) parts.push(test.setup);
      parts.push(solution);
      if (test.assertCode) parts.push(test.assertCode);
      const source = wrapSource(parts.join("\n\n"), test.stdin);
      const file = path.join(dir, "main.py");
      fs.writeFileSync(file, source, "utf8");
      const { stdout, stderr, code } = await runPythonFile(file, dir, test.stdin);

      if (test.expectedStdout !== undefined) {
        const expected = normalizeStdout(test.expectedStdout);
        const actual = normalizeStdout(stdout);
        if (code !== 0) {
          failures.push({
            ...base,
            check: test.label || "test",
            reason: `Runtime error: ${lastErrorLine(stderr, stdout)}`,
          });
        } else if (actual !== expected) {
          failures.push({
            ...base,
            check: test.label || "test",
            reason: "Stdout mismatch (solution output != expected)",
            expected,
            actual,
          });
        }
        continue;
      }

      if (code !== 0) {
        failures.push({
          ...base,
          check: test.label || "test",
          reason: lastErrorLine(stderr, stdout),
        });
      }
    }

    const demo = problem.runDemoCode?.trim();
    if (demo) {
      const source = wrapSource(`${solution}\n\n${demo}`);
      const file = path.join(dir, "demo.py");
      fs.writeFileSync(file, source, "utf8");
      const { stderr, stdout, code } = await runPythonFile(file, dir);
      if (code !== 0) {
        failures.push({
          ...base,
          check: "Output / Run demo",
          reason: lastErrorLine(stderr, stdout),
        });
      }
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }

  return failures;
}

async function verifyTrack(
  track: TrackId,
  problems: PracticeProblem[]
): Promise<{ summary: TrackSummary; failures: Failure[] }> {
  const failures: Failure[] = [];
  let cursor = 0;
  let done = 0;

  async function worker() {
    while (cursor < problems.length) {
      const problem = problems[cursor++];
      failures.push(...(await verifyProblem(track, problem)));
      done += 1;
      if (done % 50 === 0) {
        console.log(`  [${track}] ${done}/${problems.length}`);
      }
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, Math.max(problems.length, 1)) }, worker)
  );

  const failedIds = new Set(failures.map((f) => f.problemId));
  const summary: TrackSummary = {
    track,
    problems: problems.length,
    passed: problems.length - failedIds.size,
    failed: failedIds.size,
    missingSolution: failures.filter((f) => f.reason === "Missing solutionCode")
      .length,
    missingTests: failures.filter((f) => f.reason === "No publicTests").length,
    testFailures: failures.filter(
      (f) => f.check !== "Output / Run demo" && f.check !== "meta"
    ).length,
    demoFailures: failures.filter((f) => f.check === "Output / Run demo").length,
  };
  return { summary, failures };
}

async function main() {
  const curriculum = getAllPracticeProblems().filter(
    (p) => !p.topicId.startsWith("sql-")
  );
  const basics = getPythonBasicsProblems();
  const algos = getPythonPracticeProblems();
  const papcPractice = getPapcProblems();
  const papcExam = getPapcQuizProblems();

  const tracks: Array<[TrackId, PracticeProblem[]]> = [
    ["curriculum", curriculum],
    ["python-basics", basics],
    ["python-practice", algos],
    ["papc-practice", papcPractice],
    ["papc-exam", papcExam],
  ];

  const summaries: TrackSummary[] = [];
  const allFailures: Failure[] = [];

  for (const [track, problems] of tracks) {
    console.log(`\n=== ${track}: ${problems.length} problems ===`);
    const { summary, failures } = await verifyTrack(track, problems);
    summaries.push(summary);
    allFailures.push(...failures);
    console.log(
      `  passed ${summary.passed}/${summary.problems}  failed ${summary.failed}`
    );
  }

  const report = {
    generatedAt: new Date().toISOString(),
    python: PYTHON,
    totals: {
      problems: summaries.reduce((s, t) => s + t.problems, 0),
      passed: summaries.reduce((s, t) => s + t.passed, 0),
      failed: summaries.reduce((s, t) => s + t.failed, 0),
      checksFailed: allFailures.length,
    },
    tracks: summaries,
    failures: allFailures,
  };

  const outPath = path.join("scripts", "all-tracks-validation-report.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`\nWrote ${outPath}`);
  console.log(JSON.stringify({ totals: report.totals, tracks: summaries }, null, 2));
  process.exitCode = allFailures.length > 0 ? 1 : 0;
}

void main();
