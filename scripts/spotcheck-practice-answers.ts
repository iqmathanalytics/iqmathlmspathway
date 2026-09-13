/**
 * Spot-check: solution output vs description/example mismatches.
 * Run: npx tsx scripts/spotcheck-practice-answers.ts
 */
import { spawnSync } from "node:child_process";
import { getAllPracticeProblems } from "../src/data/practice/index.ts";

function normalize(s: string) {
  return String(s ?? "").replace(/\r\n/g, "\n").trimEnd();
}

function run(code: string) {
  const r = spawnSync("python", ["-c", code], {
    encoding: "utf8",
    timeout: 8000,
    windowsHide: true,
    env: { ...process.env, PYTHONHASHSEED: "0" },
  });
  return {
    ok: r.status === 0,
    out: normalize(r.stdout || ""),
    err: (r.stderr || "").trim(),
  };
}

const ps = getAllPracticeProblems().filter((p) => /^m\d+-t/.test(p.topicId));
const issues: Record<string, unknown>[] = [];

for (const p of ps) {
  const tests = p.publicTests ?? [];
  const exp = normalize(tests[0]?.expectedStdout ?? "");
  const ex = normalize(p.examples?.[0]?.output ?? "");
  const sol = p.solutionCode?.trim() ?? "";

  if (tests.length !== 3) {
    issues.push({ id: p.id, kind: "test-count", n: tests.length });
  }

  if (!sol) {
    issues.push({ id: p.id, kind: "no-solution" });
    continue;
  }

  const r = run(sol);
  if (!r.ok) {
    issues.push({ id: p.id, kind: "solution-error", err: r.err.slice(0, 200) });
    continue;
  }
  if (r.out !== exp) {
    issues.push({
      id: p.id,
      kind: "sol-vs-expected",
      title: p.title,
      expected: exp,
      actual: r.out,
    });
  }
  if (ex && exp && ex !== exp) {
    issues.push({
      id: p.id,
      kind: "example-vs-expected",
      example: ex,
      expected: exp,
    });
  }

  // Description often says "print X" — soft check for obvious print targets in title/desc
  for (const t of tests) {
    const tr = run(sol); // same for fixed
    if (normalize(t.expectedStdout ?? "") !== tr.out) {
      issues.push({ id: p.id, kind: "test-fail", testId: t.id });
    }
  }
}

console.log(
  JSON.stringify(
    {
      total: ps.length,
      issues: issues.length,
      byKind: issues.reduce((a: Record<string, number>, i) => {
        const k = String(i.kind);
        a[k] = (a[k] || 0) + 1;
        return a;
      }, {}),
      sample: issues.slice(0, 40),
    },
    null,
    2
  )
);
