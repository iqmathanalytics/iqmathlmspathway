import type { PracticeProblem } from "@/lib/types";
import { modules } from "@/data/curriculum";
import { getPracticeCountByTopic } from "./meta";
import { module1Practice } from "./module-1";
import { module2Practice } from "./module-2";
import { module3Practice } from "./module-3";
import { module4Practice } from "./module-4";
import { module5Practice } from "./module-5";
import { module6Practice } from "./module-6";
import { module7Practice } from "./module-7";
import { module8Practice } from "./module-8";
import { module9Practice } from "./module-9";
import { module10Practice } from "./module-10";
import { module11Practice } from "./module-11";
import { module12Practice } from "./module-12";
import { module13Practice } from "./module-13";
import { module14Practice } from "./module-14";
import { sqlModule1Practice } from "./sql-module-1";
import { sqlModule2Practice } from "./sql-module-2";
import { sqlModule3Practice } from "./sql-module-3";
import { sqlModule4Practice } from "./sql-module-4";
import { sqlModule5Practice } from "./sql-module-5";
import { sqlModule6Practice } from "./sql-module-6";
import { sqlModule7Practice } from "./sql-module-7";
import { sqlModule8Practice } from "./sql-module-8";
import { sqlModule9Practice } from "./sql-module-9";

const allProblems: PracticeProblem[] = [
  ...module1Practice,
  ...module2Practice,
  ...module3Practice,
  ...module4Practice,
  ...module5Practice,
  ...module6Practice,
  ...module7Practice,
  ...module8Practice,
  ...module9Practice,
  ...module10Practice,
  ...module11Practice,
  ...module12Practice,
  ...module13Practice,
  ...module14Practice,
  ...sqlModule1Practice,
  ...sqlModule2Practice,
  ...sqlModule3Practice,
  ...sqlModule4Practice,
  ...sqlModule5Practice,
  ...sqlModule6Practice,
  ...sqlModule7Practice,
  ...sqlModule8Practice,
  ...sqlModule9Practice,
];

export { getPracticeCountByTopic, getTotalPracticeCount } from "./meta";

export function getAllPracticeProblems(): PracticeProblem[] {
  return allProblems;
}

export function getProblemsByTopic(topicId: string): PracticeProblem[] {
  return allProblems.filter((p) => p.topicId === topicId).sort((a, b) => a.order - b.order);
}

export function getProblemBySlug(
  topicId: string,
  problemSlug: string
): PracticeProblem | undefined {
  return allProblems.find((p) => p.topicId === topicId && p.slug === problemSlug);
}

export function getProblemModuleTopic(problem: PracticeProblem) {
  for (const mod of modules) {
    const topic = mod.topics.find((t) => t.id === problem.topicId);
    if (topic) return { module: mod, topic };
  }
  return null;
}

export function getPracticeStaticParams() {
  const params: { moduleSlug: string; topicSlug: string; problemSlug: string }[] = [];
  for (const p of allProblems) {
    const ctx = getProblemModuleTopic(p);
    if (ctx && ctx.topic.published) {
      params.push({
        moduleSlug: ctx.module.slug,
        topicSlug: ctx.topic.slug,
        problemSlug: p.slug,
      });
    }
  }
  return params;
}

export function getPracticeStatsByModule(moduleId: number) {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return { total: 0, topics: [] as { topicId: string; count: number }[] };
  const topics = mod.topics
    .filter((t) => t.published)
    .map((t) => ({ topicId: t.id, count: getPracticeCountByTopic(t.id) }));
  return { total: topics.reduce((s, t) => s + t.count, 0), topics };
}
