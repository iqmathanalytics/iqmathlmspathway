/**
 * Guards against the generated list catalogs drifting from the problem banks.
 *
 * The list pages render links from *.generated.ts, but the detail routes build
 * their generateStaticParams() from the banks. With output: "export" a link that
 * has no matching param is a hard error ("missing param ... in
 * generateStaticParams()"), so both sides must always agree.
 *
 * Run: npm run check:practice-links
 */
import { modules } from "../src/data/curriculum";
import { getAllPracticeProblems, getPracticeStaticParams } from "../src/data/practice";
import { COURSE_PRACTICE_BY_TOPIC } from "../src/data/course-practice-list.generated";
import { PYTHON_PROGRAMMING_LIST } from "../src/data/python-programming-list.generated";
import { getPythonPracticeStaticParams } from "../src/data/python-practice";
import { getPythonBasicsStaticParams } from "../src/data/python-basics";

const problems: string[] = [];

// --- /learn/[moduleSlug]/[topicSlug]/challenges/[problemSlug] ---
const routable = new Set(
  getPracticeStaticParams().map(
    (p) => `/learn/${p.moduleSlug}/${p.topicSlug}/challenges/${p.problemSlug}`
  )
);
const topicById = new Map(
  modules.flatMap((m) => m.topics.map((t) => [t.id, { module: m, topic: t }] as const))
);

for (const [topicId, items] of Object.entries(COURSE_PRACTICE_BY_TOPIC)) {
  const ctx = topicById.get(topicId);
  if (!ctx) {
    if (!topicId.startsWith("sql-")) {
      problems.push(`list has topic "${topicId}" that is not in any module`);
    }
    continue;
  }
  for (const item of items) {
    const href = `/learn/${ctx.module.slug}/${ctx.topic.slug}/challenges/${item.slug}`;
    if (!routable.has(href)) {
      problems.push(`${href} is linked from the list but has no static param`);
    }
  }
}

// The reverse direction only breaks discoverability, but it is just as stale.
for (const problem of getAllPracticeProblems()) {
  const ctx = topicById.get(problem.topicId);
  if (!ctx || !ctx.topic.published) continue;
  const listed = COURSE_PRACTICE_BY_TOPIC[problem.topicId] ?? [];
  if (!listed.some((item) => item.slug === problem.slug)) {
    problems.push(`${problem.id} (${problem.slug}) exists but is missing from the list`);
  }
}

// --- /practice/python/[difficulty]/[slug] ---
const pythonRoutable = new Set(
  [...getPythonPracticeStaticParams(), ...getPythonBasicsStaticParams()].map(
    (p) => `${p.difficulty}/${p.slug}`
  )
);
for (const item of PYTHON_PROGRAMMING_LIST) {
  if (!pythonRoutable.has(`${item.difficulty}/${item.slug}`)) {
    problems.push(
      `/practice/python/${item.difficulty}/${item.slug} is listed but has no static param`
    );
  }
}

if (problems.length > 0) {
  console.error(`${problems.length} practice link problems:\n`);
  for (const p of problems.slice(0, 40)) console.error(`  - ${p}`);
  if (problems.length > 40) console.error(`  … ${problems.length - 40} more`);
  console.error(`\nRun "npm run generate:practice-lists" to resync the catalogs.`);
  process.exit(1);
}

console.log(
  `All practice links resolve (${routable.size} course challenges, ${PYTHON_PROGRAMMING_LIST.length} python problems).`
);
