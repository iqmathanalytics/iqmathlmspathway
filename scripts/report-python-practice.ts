/**
 * Per-module practice report for Python for Data Science.
 * Run: npx tsx scripts/report-python-practice.ts
 */
import { getModulesByCourse } from "../src/data/curriculum.ts";
import { getProblemsByTopic } from "../src/data/practice/index.ts";
import { spawnSync } from "node:child_process";

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

type Row = {
  module: string;
  topicId: string;
  topic: string;
  problems: number;
  with3Tests: number;
  solutionsOk: number;
  failing: string[];
  missingSol: string[];
  wrongTestCount: string[];
};

const mods = getModulesByCourse("python");
const rows: Row[] = [];
let totalProblems = 0;
let totalOk3 = 0;
let totalSolOk = 0;
const allFailing: { id: string; title: string; error: string }[] = [];

for (const m of mods) {
  for (const t of m.topics) {
    if (!t.published) continue;
    const problems = getProblemsByTopic(t.id);
    const failing: string[] = [];
    const missingSol: string[] = [];
    const wrongTestCount: string[] = [];
    let with3 = 0;
    let solOk = 0;

    for (const p of problems) {
      totalProblems += 1;
      const tests = p.publicTests ?? [];
      if (tests.length === 3) {
        with3 += 1;
        totalOk3 += 1;
      } else {
        wrongTestCount.push(`${p.id}(${tests.length})`);
      }

      if (!p.solutionCode?.trim()) {
        missingSol.push(p.id);
        continue;
      }

      let passAll = true;
      for (const test of tests) {
        const parts: string[] = [];
        if (test.setup) parts.push(test.setup);
        parts.push(p.solutionCode);
        if (test.assertCode) parts.push(test.assertCode);
        const result = runPython(parts.join("\n\n"), test.stdin ?? "");
        if (!result.ok) {
          passAll = false;
          allFailing.push({
            id: p.id,
            title: p.title,
            error: result.stderr.slice(0, 200),
          });
          break;
        }
        if (test.expectedStdout !== undefined) {
          if (result.stdout !== normalize(test.expectedStdout)) {
            passAll = false;
            allFailing.push({
              id: p.id,
              title: p.title,
              error: `stdout mismatch on ${test.id}`,
            });
            break;
          }
        }
      }

      if (passAll) {
        solOk += 1;
        totalSolOk += 1;
      } else {
        failing.push(p.id);
      }
    }

    rows.push({
      module: `M${m.id} ${m.name}`,
      topicId: t.id,
      topic: t.title,
      problems: problems.length,
      with3Tests: with3,
      solutionsOk: solOk,
      failing,
      missingSol,
      wrongTestCount,
    });
  }
}

const emptyTopics = rows.filter((r) => r.problems === 0);
const badTopics = rows.filter(
  (r) =>
    r.failing.length ||
    r.missingSol.length ||
    r.wrongTestCount.length ||
    r.with3Tests !== r.problems
);

console.log(
  JSON.stringify(
    {
      summary: {
        modules: mods.length,
        publishedTopics: rows.length,
        totalProblems,
        withExactly3Tests: totalOk3,
        solutionsPassingAllTests: totalSolOk,
        topicsWithNoPractice: emptyTopics.length,
        topicsWithIssues: badTopics.length,
        failingCount: allFailing.length,
      },
      emptyTopics: emptyTopics.map((r) => ({
        module: r.module,
        topicId: r.topicId,
        topic: r.topic,
      })),
      failingSample: allFailing.slice(0, 20),
      perModule: mods.map((m) => {
        const topicRows = rows.filter((r) => r.topicId.startsWith(`m${m.id}-`));
        return {
          module: `M${m.id}`,
          name: m.name,
          topics: topicRows.length,
          problems: topicRows.reduce((a, r) => a + r.problems, 0),
          with3: topicRows.reduce((a, r) => a + r.with3Tests, 0),
          solutionsOk: topicRows.reduce((a, r) => a + r.solutionsOk, 0),
          issues: topicRows.filter(
            (r) =>
              r.failing.length ||
              r.missingSol.length ||
              r.wrongTestCount.length ||
              r.problems === 0
          ).length,
        };
      }),
    },
    null,
    2
  )
);
