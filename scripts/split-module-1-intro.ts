/**
 * One-time split: keep the hand-crafted m1-t1 challenges in their own file so the
 * generator can own m1-t2..m1-t5 without touching them.
 * Run: npx tsx scripts/split-module-1-intro.ts
 */
import fs from "node:fs";
import path from "node:path";
import { module1Practice } from "../src/data/practice/module-1";

const intro = module1Practice.filter((p) => p.topicId === "m1-t1");
if (intro.length === 0) throw new Error("No m1-t1 problems found — aborting.");

const out = `import type { PracticeProblem } from "@/lib/types";

/** Hand-crafted "Introduction to Programming" challenges. Not generated — do not overwrite. */
export const module1IntroPractice: PracticeProblem[] = ${JSON.stringify(intro, null, 2)};
`;

const target = path.join("src", "data", "practice", "module-1-intro.ts");
fs.writeFileSync(target, out);
console.log(`Wrote ${intro.length} m1-t1 problems to ${target}`);
