/**
 * Audit curriculum practice: each problem needs 3 publicTests,
 * and solutionCode must pass all of them.
 * Run: node scripts/audit-practice-tests.mjs
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve("src/data/practice");
const files = fs
  .readdirSync(root)
  .filter((f) => /^(module-\d+|sql-module-\d+)\.ts$/.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

function extractExportArray(src, exportName) {
  const marker = `export const ${exportName}`;
  const start = src.indexOf(marker);
  if (start < 0) return null;
  const eq = src.indexOf("=", start);
  const bracket = src.indexOf("[", eq);
  if (bracket < 0) return null;
  let depth = 0;
  for (let i = bracket; i < src.length; i++) {
    const ch = src[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        const jsonish = src.slice(bracket, i + 1);
        // Convert TS object array to JSON-ish via Function
        try {
          // eslint-disable-next-line no-new-func
          return new Function(`return (${jsonish});`)();
        } catch (e) {
          return { __parseError: String(e.message || e), rawLen: jsonish.length };
        }
      }
    }
  }
  return null;
}

function runPython(code, stdin = "") {
  const r = spawnSync("python", ["-c", code], {
    input: stdin,
    encoding: "utf8",
    timeout: 8000,
    maxBuffer: 2_000_000,
    windowsHide: true,
  });
  return {
    ok: r.status === 0,
    stdout: (r.stdout || "").replace(/\r\n/g, "\n").trimEnd(),
    stderr: (r.stderr || "").replace(/\r\n/g, "\n").trimEnd(),
  };
}

function runTest(solution, test) {
  const parts = [];
  if (test.setup) parts.push(test.setup);
  parts.push(solution);
  if (test.assertCode) parts.push(test.assertCode);
  const code = parts.join("\n\n");
  const stdin = test.stdin ?? "";
  const result = runPython(code, stdin);
  if (!result.ok) {
    return {
      passed: false,
      error: result.stderr.slice(0, 300),
      actual: result.stdout,
    };
  }
  if (test.expectedStdout !== undefined) {
    const expected = String(test.expectedStdout).replace(/\r\n/g, "\n").trimEnd();
    const actual = result.stdout;
    return {
      passed: actual === expected,
      expected,
      actual,
      error: actual === expected ? undefined : "stdout mismatch",
    };
  }
  if (test.assertCode) {
    return { passed: true };
  }
  return { passed: false, error: "missing expectedStdout/assertCode" };
}

const summary = {
  files: 0,
  problems: 0,
  missingSolution: [],
  wrongTestCount: [],
  failingTests: [],
  noTests: [],
  ok: 0,
};

for (const file of files) {
  const src = fs.readFileSync(path.join(root, file), "utf8");
  const exportMatch = src.match(/export const (\w+)/);
  if (!exportMatch) continue;
  const arr = extractExportArray(src, exportMatch[1]);
  if (!arr || arr.__parseError) {
    console.log("PARSE FAIL", file, arr?.__parseError);
    continue;
  }
  summary.files += 1;
  for (const p of arr) {
    summary.problems += 1;
    const tests = p.publicTests ?? [];
    if (tests.length === 0) {
      summary.noTests.push(`${file} ${p.id}`);
      continue;
    }
    if (tests.length !== 3) {
      summary.wrongTestCount.push({
        file,
        id: p.id,
        title: p.title,
        count: tests.length,
      });
    }
    if (!p.solutionCode?.trim()) {
      summary.missingSolution.push(`${file} ${p.id}`);
      continue;
    }
    let allPass = true;
    for (const t of tests) {
      const r = runTest(p.solutionCode, t);
      if (!r.passed) {
        allPass = false;
        summary.failingTests.push({
          file,
          id: p.id,
          title: p.title,
          testId: t.id,
          label: t.label,
          expected: r.expected,
          actual: r.actual,
          error: r.error,
        });
      }
    }
    if (allPass && tests.length === 3) summary.ok += 1;
  }
}

console.log(
  JSON.stringify(
    {
      files: summary.files,
      problems: summary.problems,
      okWith3Passing: summary.ok,
      wrongTestCount: summary.wrongTestCount.length,
      failingTests: summary.failingTests.length,
      missingSolution: summary.missingSolution.length,
      noTests: summary.noTests.length,
    },
    null,
    2
  )
);

console.log("\n=== Wrong test count (not 3) — first 40 ===");
for (const w of summary.wrongTestCount.slice(0, 40)) {
  console.log(`${w.file} ${w.id} (${w.count}) ${w.title}`);
}
if (summary.wrongTestCount.length > 40) {
  console.log(`... +${summary.wrongTestCount.length - 40} more`);
}

console.log("\n=== Failing solution vs tests — first 40 ===");
for (const f of summary.failingTests.slice(0, 40)) {
  console.log(
    `${f.file} ${f.id} / ${f.testId}: ${f.error || "fail"} | expected=${JSON.stringify(f.expected)} actual=${JSON.stringify(f.actual)}`
  );
}
if (summary.failingTests.length > 40) {
  console.log(`... +${summary.failingTests.length - 40} more`);
}

// Count distribution
const byCount = {};
for (const w of summary.wrongTestCount) {
  byCount[w.count] = (byCount[w.count] || 0) + 1;
}
console.log("\nTest-count distribution (non-3):", byCount);

fs.writeFileSync(
  "scripts/audit-practice-tests-report.json",
  JSON.stringify(summary, null, 2)
);
console.log("\nWrote scripts/audit-practice-tests-report.json");
