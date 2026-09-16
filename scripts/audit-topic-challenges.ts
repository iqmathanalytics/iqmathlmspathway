/**
 * Audit module/topic vs challenge relevance, test quality, and difficulty.
 * Run: npx tsx scripts/audit-topic-challenges.ts
 */
import fs from "node:fs";
import path from "node:path";
import { modules } from "../src/data/curriculum";
import { getAllPracticeProblems } from "../src/data/practice";
import { getQuiz, hasQuiz } from "../src/data/quizzes";
import { courseShortName } from "../src/data/courses";

type Flag = {
  severity: "high" | "medium" | "low";
  kind: "unrelated" | "too-simple" | "weak-tests" | "missing" | "quiz-mismatch";
  id: string;
  message: string;
};

function tokens(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9+]+/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2)
  );
}

function overlap(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let n = 0;
  for (const w of a) if (b.has(w)) n += 1;
  return n / Math.min(a.size, 12);
}

const STOP = new Set([
  "the", "and", "for", "with", "that", "this", "from", "your", "you", "are",
  "how", "what", "why", "use", "using", "into", "then", "than", "write",
  "program", "python", "code", "print", "output", "exactly", "line", "lines",
]);

function topicKeywords(title: string, description: string): Set<string> {
  const t = tokens(`${title} ${description}`);
  for (const s of STOP) t.delete(s);
  return t;
}

function uses(code: string, re: RegExp): boolean {
  return re.test(code);
}

function main() {
  const problems = getAllPracticeProblems();
  const byTopic = new Map<string, typeof problems>();
  for (const p of problems) {
    const list = byTopic.get(p.topicId) ?? [];
    list.push(p);
    byTopic.set(p.topicId, list);
  }

  const flags: Flag[] = [];
  const topicRows: Array<Record<string, unknown>> = [];
  const courseSummary: Record<
    string,
    { topics: number; published: number; withChallenges: number; challenges: number; flags: number }
  > = {};

  const knownTopicIds = new Set<string>();

  for (const mod of modules) {
    const course = courseShortName(mod.course);
    if (!courseSummary[course]) {
      courseSummary[course] = {
        topics: 0,
        published: 0,
        withChallenges: 0,
        challenges: 0,
        flags: 0,
      };
    }

    for (const topic of mod.topics) {
      knownTopicIds.add(topic.id);
      const cs = courseSummary[course]!;
      cs.topics += 1;
      if (topic.published) cs.published += 1;

      const list = (byTopic.get(topic.id) ?? []).sort((a, b) => a.order - b.order);
      cs.challenges += list.length;
      if (list.length) cs.withChallenges += 1;

      const kw = topicKeywords(topic.title, topic.description);
      const quiz = hasQuiz(topic.id) ? getQuiz(topic.id) : undefined;

      if (topic.published && list.length === 0 && (mod.course === "python" || mod.course === "sql")) {
        flags.push({
          severity: "medium",
          kind: "missing",
          id: topic.id,
          message: `Published topic has 0 coding challenges: ${mod.name} / ${topic.title}`,
        });
      }

      for (const p of list) {
        const blob = `${p.title} ${p.description} ${p.solutionCode ?? ""} ${p.starterCode ?? ""}`;
        const pkw = topicKeywords(p.title, p.description);
        const score = overlap(kw, pkw);
        const sol = p.solutionCode ?? "";
        const tests = p.publicTests ?? [];
        const stdouts = tests.map((t) => t.expectedStdout ?? "").filter(Boolean);
        const uniqueStdout = new Set(stdouts).size;
        const identicalTests = tests.length >= 3 && uniqueStdout <= 1 && stdouts.length === tests.length;
        const printOnly =
          uses(sol, /\bprint\s*\(/) &&
          !uses(sol, /\b(def |for |while |if |class |import |lambda )/) &&
          !uses(sol, /[\[\{]/);
        const numpy = uses(blob, /\bnumpy\b|\bnp\./i);
        const pandas = uses(blob, /\bpandas\b|\bpd\./i);
        const latePython = mod.course === "python" && mod.id >= 14;
        const setupTopic = topic.id === "m1-t2" || topic.id === "m1-t3" || topic.id === "m1-t4" || topic.id === "m1-t5";
        const introTopic = topic.id === "m1-t1";

        let unrelated = false;
        if (setupTopic && printOnly) unrelated = true;
        if (topic.title.toLowerCase().includes("jupyter") && printOnly && !blob.toLowerCase().includes("jupyter") && !blob.toLowerCase().includes("notebook") && !blob.toLowerCase().includes("cell")) {
          unrelated = true;
        }
        if (topic.title.toLowerCase().includes("ide") && printOnly && !/jupyter|vscode|pycharm|anaconda|venv|notebook/i.test(blob)) {
          unrelated = score < 0.08;
        }
        if (topic.title.toLowerCase().includes("why python") && printOnly) unrelated = true;
        if (latePython && printOnly && !numpy && !pandas) unrelated = true;
        if (mod.course === "python" && mod.id >= 14 && !numpy && !pandas && !/plot|matplotlib|seaborn|hist|mean|median|std|corr/i.test(blob) && printOnly) {
          unrelated = true;
        }

        const tooSimple =
          (mod.course === "python" && mod.id >= 5 && printOnly && p.difficulty === "easy") ||
          (mod.course === "python" && mod.id >= 9 && p.difficulty === "easy" && printOnly) ||
          (mod.course === "python" && mod.id >= 12 && !uses(sol, /\bdef |\bfor |\bimport |\bclass /) && p.difficulty !== "hard");

        if (unrelated) {
          flags.push({
            severity: setupTopic || latePython ? "high" : "medium",
            kind: "unrelated",
            id: p.id,
            message: `${mod.name} / ${topic.title} → "${p.title}": challenge is generic print/output, not about this topic.`,
          });
        } else if (tooSimple && !introTopic && !unrelated) {
          flags.push({
            severity: mod.id >= 12 ? "high" : "medium",
            kind: "too-simple",
            id: p.id,
            message: `${mod.name} / ${topic.title} → "${p.title}" (${p.difficulty}): too simple for this module.`,
          });
        }

        if (identicalTests) {
          flags.push({
            severity: "low",
            kind: "weak-tests",
            id: p.id,
            message: `"${p.title}" has ${tests.length} tests with the same expected output.`,
          });
        }

        if (score < 0.05 && !introTopic && !printOnly && kw.size >= 3) {
          flags.push({
            severity: "medium",
            kind: "unrelated",
            id: p.id,
            message: `${topic.title} → "${p.title}": low keyword overlap with topic (title/description don't mention the lesson idea).`,
          });
        }
      }

      if (quiz?.questions?.length) {
        const qblob = quiz.questions.map((q) => q.question).join(" ");
        const qscore = overlap(kw, tokens(qblob));
        if (qscore < 0.04 && kw.size >= 4 && topic.published) {
          flags.push({
            severity: "low",
            kind: "quiz-mismatch",
            id: topic.id,
            message: `Quiz for "${topic.title}" may not mention core topic terms.`,
          });
        }
      }

      topicRows.push({
        course,
        module: mod.name,
        moduleId: mod.id,
        topicId: topic.id,
        topic: topic.title,
        published: topic.published,
        challenges: list.length,
        quizQuestions: quiz?.questions?.length ?? 0,
        sample: list.slice(0, 3).map((p) => p.title),
      });
    }
  }

  for (const p of problems) {
    if (!knownTopicIds.has(p.topicId)) {
      flags.push({
        severity: "high",
        kind: "unrelated",
        id: p.id,
        message: `Orphan challenge "${p.title}" topicId=${p.topicId} is not in the curriculum.`,
      });
    }
  }

  for (const f of flags) {
    const row = topicRows.find((r) => String(r.topicId) === f.id.split("-p")[0] || String(r.topicId) === f.id);
    if (row) {
      const course = String(row.course);
      if (courseSummary[course]) courseSummary[course].flags += 1;
    }
  }

  const byKind = {
    unrelated: flags.filter((f) => f.kind === "unrelated").length,
    tooSimple: flags.filter((f) => f.kind === "too-simple").length,
    weakTests: flags.filter((f) => f.kind === "weak-tests").length,
    missing: flags.filter((f) => f.kind === "missing").length,
    quizMismatch: flags.filter((f) => f.kind === "quiz-mismatch").length,
  };

  const high = flags.filter((f) => f.severity === "high");
  const medium = flags.filter((f) => f.severity === "medium");

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      modules: modules.length,
      topics: topicRows.length,
      challenges: problems.length,
      flags: flags.length,
      byKind,
    },
    courseSummary,
    high: high.slice(0, 80),
    medium: medium.slice(0, 80),
    missing: flags.filter((f) => f.kind === "missing"),
    topicsWithoutChallenges: topicRows.filter(
      (r) => r.published && r.challenges === 0
    ),
  };

  const out = path.join("scripts", "topic-challenge-audit.json");
  fs.writeFileSync(out, JSON.stringify({ ...report, flags, topicRows }, null, 2));
  console.log(
    JSON.stringify(
      {
        file: out,
        totals: report.totals,
        courseSummary,
        highCount: high.length,
        mediumCount: medium.length,
        missing: report.missing.map((f) => f.message),
        highSample: high.slice(0, 25).map((f) => f.message),
        mediumSample: medium.slice(0, 15).map((f) => f.message),
        unpublishedOrNoPractice: report.topicsWithoutChallenges.slice(0, 40),
      },
      null,
      2
    )
  );
}

main();
