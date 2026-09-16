/**
 * Runs every practice problem's reference solution against a real Python
 * interpreter and checks it satisfies its own tests.
 *
 * It mirrors the browser runner (src/lib/practice-runner.ts):
 *   source   = test.setup + solutionCode + test.assertCode
 *   compare  = normalized stdout vs test.expectedStdout
 *   charts   = wrapped exactly like prepareVisualizationRunCode()
 *   stdin    = piped in, with prompts silenced like the quiet-input mode
 *
 * It also statically checks the client-side gates in ChallengePracticeLayout so
 * a reference solution can never be rejected before the tests even run.
 *
 * Usage:
 *   npx tsx scripts/verify-practice-solutions.ts --modules=1,13
 *   npx tsx scripts/verify-practice-solutions.ts            (everything)
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getAllPracticeProblems } from "../src/data/practice";
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

interface Failure {
  problemId: string;
  topicId: string;
  title: string;
  test: string;
  reason: string;
  expected?: string;
  actual?: string;
}

function normalizeStdout(s: string): string {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

function moduleOf(topicId: string): string {
  return topicId.match(/^m(\d+)/)?.[1] ?? "?";
}

/** The script goes in a temp file so stdin stays free for the test's input. */
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
    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("close", (code) => resolve({ stdout, stderr, code: code ?? 1 }));
    if (stdin) child.stdin.write(stdin.endsWith("\n") ? stdin : `${stdin}\n`);
    child.stdin.end();
  });
}

function buildSource(problem: PracticeProblem, test: PracticeTest): string {
  const parts: string[] = [];
  if (test.setup) parts.push(test.setup);
  parts.push(problem.solutionCode ?? "");
  if (test.assertCode) parts.push(test.assertCode);
  const joined = parts.join("\n\n");
  const runnable = isVisualizationCode(joined)
    ? prepareVisualizationRunCode(joined)
    : joined;
  return test.stdin ? `${QUIET_INPUT_SHIM}\n${runnable}` : runnable;
}

/** Replicates the pre-test gates in ChallengePracticeLayout.handleRunCheck. */
function staticGateFailures(problem: PracticeProblem): string[] {
  const problems: string[] = [];
  const code = problem.solutionCode ?? "";
  const realCode = code.replace(/#.*$/gm, "").trim();
  const content = problem.challengeContent;

  if (!code) return ["no solutionCode"];
  if (!code.includes("print")) problems.push("gate: solution never calls print()");

  if (content?.requiresForLoop) {
    if (!realCode.includes("for")) problems.push("gate: requiresForLoop but no for");
  }
  if (content?.requiresIfCondition) {
    if (!realCode.includes("if")) problems.push("gate: requiresIfCondition but no if");
  }
  if (content?.requiresTry && !realCode.includes("try")) {
    problems.push("gate: requiresTry but no try");
  }
  if (content?.requiresExcept && !realCode.includes("except")) {
    problems.push("gate: requiresExcept but no except");
  }
  if (content?.requiresFinally && !realCode.includes("finally")) {
    problems.push("gate: requiresFinally but no finally");
  }
  if (content?.requiresRaise && !realCode.includes("raise")) {
    problems.push("gate: requiresRaise but no raise");
  }
  if (content?.requiresFunction) {
    const fn = content.requiresFunction;
    if (!realCode.includes("def") || !realCode.includes(fn)) {
      problems.push(`gate: requiresFunction ${fn} missing`);
    }
    const refs = realCode.match(new RegExp(`\\b${fn}\\s*\\(`, "g")) ?? [];
    if (refs.length < 2) problems.push(`gate: ${fn}() must be defined and called`);
  }
  for (const v of content?.requiresVariables ?? []) {
    if (!realCode.includes(v)) problems.push(`gate: requiresVariables "${v}" not in solution`);
  }
  if (content?.requiresListAccess && !realCode.includes("[")) {
    problems.push("gate: requiresListAccess but no indexing");
  }
  if (content?.requiresDictKey) {
    const key = content.requiresDictKey;
    if (!realCode.includes("{") || !realCode.includes(key)) {
      problems.push(`gate: requiresDictKey ${key} missing`);
    }
  }
  if (content?.requiresComment && !code.split("\n").some((l) => l.trim().startsWith("#"))) {
    problems.push("gate: requiresComment but solution has no # line");
  }
  if (content?.expectCommaPrint) {
    const body = realCode.match(/print\s*\(([\s\S]*?)\)/)?.[1] ?? "";
    if (!body.includes(",") && !body.includes("sep")) {
      problems.push("gate: expectCommaPrint but first print has no comma");
    }
  }

  // liveCheckRules are UI hints only; Submit grades publicTests then structural gates.

  return problems;
}

async function verifyProblem(problem: PracticeProblem): Promise<Failure[]> {
  const failures: Failure[] = [];

  for (const reason of staticGateFailures(problem)) {
    failures.push({
      problemId: problem.id,
      topicId: problem.topicId,
      title: problem.title,
      test: "static",
      reason,
    });
  }

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `pv-${problem.id}-`));
  try {
    for (const test of problem.publicTests) {
      const file = path.join(dir, "main.py");
      fs.writeFileSync(file, buildSource(problem, test), "utf8");
      const { stdout, stderr, code } = await runPythonFile(file, dir, test.stdin);

      if (code !== 0) {
        failures.push({
          problemId: problem.id,
          topicId: problem.topicId,
          title: problem.title,
          test: test.label,
          reason: `python exited ${code}: ${stderr.trim().split("\n").slice(-1)[0]}`,
        });
        continue;
      }

      if (test.expectedStdout !== undefined) {
        const expected = normalizeStdout(test.expectedStdout);
        const actual = normalizeStdout(stdout);
        if (expected !== actual) {
          failures.push({
            problemId: problem.id,
            topicId: problem.topicId,
            title: problem.title,
            test: test.label,
            reason: "stdout mismatch",
            expected,
            actual,
          });
        }
      }
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }

  return failures;
}

async function main() {
  const arg = process.argv.find((a) => a.startsWith("--modules="));
  const wanted = arg
    ? new Set(arg.slice("--modules=".length).split(",").map((s) => s.trim()))
    : null;

  const all = getAllPracticeProblems().filter((p) => {
    if (p.topicId.startsWith("sql-")) return false;
    return wanted ? wanted.has(moduleOf(p.topicId)) : true;
  });

  console.log(`Verifying ${all.length} problems with ${PYTHON} …`);

  const failures: Failure[] = [];
  let done = 0;
  let cursor = 0;

  async function worker() {
    while (cursor < all.length) {
      const problem = all[cursor++];
      failures.push(...(await verifyProblem(problem)));
      done += 1;
      if (done % 25 === 0) console.log(`  … ${done}/${all.length}`);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, all.length) }, worker)
  );

  const byModule: Record<string, number> = {};
  const failedProblemIds = new Set(failures.map((f) => f.problemId));
  for (const f of failures) {
    const mod = moduleOf(f.topicId);
    byModule[mod] = (byModule[mod] ?? 0) + 1;
  }

  console.log(
    `\n${all.length - failedProblemIds.size}/${all.length} problems fully verified.`
  );
  if (failures.length > 0) {
    console.log(`${failures.length} failing checks across modules:`, byModule);
    for (const f of failures.slice(0, 60)) {
      console.log(`\n[${f.problemId}] ${f.title} — ${f.test}\n  ${f.reason}`);
      if (f.expected !== undefined) {
        console.log(`  expected: ${JSON.stringify(f.expected)}`);
        console.log(`  actual:   ${JSON.stringify(f.actual)}`);
      }
    }
    if (failures.length > 60) console.log(`\n… ${failures.length - 60} more`);
  }

  fs.writeFileSync(
    path.join("scripts", "practice-verification-report.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        python: PYTHON,
        problemsChecked: all.length,
        problemsPassing: all.length - failedProblemIds.size,
        failingChecks: failures.length,
        byModule,
        failures,
      },
      null,
      2
    )
  );

  process.exitCode = failures.length > 0 ? 1 : 0;
}

void main();
