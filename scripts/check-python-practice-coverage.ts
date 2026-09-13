/**
 * Report practice coverage for Python curriculum modules only.
 */
import { modules } from "../src/data/curriculum.ts";
import {
  getProblemsByTopic,
  getAllPracticeProblems,
} from "../src/data/practice/index.ts";

const pythonMods = modules.filter((m) => /^m\d+$/.test(m.id) || m.slug.match(/python|fundamentals|data|oop|pandas|numpy|viz|file|error|final|project/i));

// Prefer modules whose topic ids look like mN-tN
const relevant = modules.filter((m) =>
  m.topics.some((t) => /^m\d+-t\d+$/.test(t.id))
);

const gaps: unknown[] = [];
let publishedWithPractice = 0;
let publishedTopics = 0;

for (const m of relevant) {
  for (const t of m.topics) {
    if (!t.published) continue;
    publishedTopics += 1;
    const probs = getProblemsByTopic(t.id);
    if (probs.length === 0) {
      gaps.push({ module: m.slug, topicId: t.id, title: t.title, n: 0 });
      continue;
    }
    publishedWithPractice += 1;
    const bad = probs.filter((p) => (p.publicTests?.length ?? 0) !== 3);
    if (bad.length) {
      gaps.push({
        module: m.slug,
        topicId: t.id,
        title: t.title,
        n: probs.length,
        badTests: bad.length,
      });
    }
  }
}

const all = getAllPracticeProblems().filter((p) => /^m\d+-t/.test(p.topicId));
const testCounts: Record<number, number> = {};
for (const p of all) {
  const n = p.publicTests?.length ?? 0;
  testCounts[n] = (testCounts[n] || 0) + 1;
}

console.log(
  JSON.stringify(
    {
      pythonPublishedTopics: publishedTopics,
      withPractice: publishedWithPractice,
      gaps: gaps.length,
      gapSample: gaps.slice(0, 20),
      problems: all.length,
      testCounts,
    },
    null,
    2
  )
);
