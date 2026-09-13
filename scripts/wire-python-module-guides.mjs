import fs from "fs";

const src = fs.readFileSync("src/data/module-guides.ts", "utf8");
const start = src.indexOf('  "sql-foundations":');
const end = src.indexOf("};\n\nexport function getModuleGuide");
if (start < 0 || end < 0) {
  throw new Error(`markers not found start=${start} end=${end}`);
}
const sqlBody = src.slice(start, end);

const out = `/**
 * Learner-facing explanations for course modules:
 * overview, outcomes, key functions, topics, and pitfalls.
 */
import { PYTHON_MODULE_GUIDES } from "./python-module-guides";

export interface ModuleFunctionGuide {
  name: string;
  explanation: string;
}

export interface ModulePitfall {
  pitfall: string;
  tip: string;
}

export interface ModuleGuide {
  /** Longer module explanation shown under the title. */
  overview: string;
  /** What learners should be able to do after this module. */
  learningOutcomes?: string[];
  /** Important functions, methods, or concepts taught in this module. */
  keyFunctions: ModuleFunctionGuide[];
  /** Richer explanations keyed by topic id (e.g. m1-t1). */
  topics: Record<string, string>;
  /** Common mistakes and how to avoid them. */
  pitfalls?: ModulePitfall[];
  /** Extra study tips. */
  tips?: string[];
}

const SQL_MODULE_GUIDES: Record<string, ModuleGuide> = {
${sqlBody}};

export const MODULE_GUIDES: Record<string, ModuleGuide> = {
  ...PYTHON_MODULE_GUIDES,
  ...SQL_MODULE_GUIDES,
};

export function getModuleGuide(moduleSlug: string): ModuleGuide | undefined {
  return MODULE_GUIDES[moduleSlug];
}

export function getTopicExplanation(
  moduleSlug: string,
  topicId: string,
  fallback: string
): string {
  return MODULE_GUIDES[moduleSlug]?.topics[topicId] ?? fallback;
}
`;

fs.writeFileSync("src/data/module-guides.ts", out);
console.log("rewrote module-guides.ts bytes=", out.length);
