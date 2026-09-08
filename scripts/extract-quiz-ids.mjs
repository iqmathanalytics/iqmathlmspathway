import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../src/data/quizzes");
const ids = [];

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith(".ts") || f === "index.ts" || f === "meta.ts") continue;
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of t.matchAll(/^\s{2}"([^"]+)":\s*\{/gm)) {
    ids.push(m[1]);
  }
}

const guidesPath = path.join(__dirname, "../src/data/agentic-ai-topic-guides.ts");
const guides = fs.readFileSync(guidesPath, "utf8");
for (const m of guides.matchAll(/^\s{2}"([^"]+)":\s*\{/gm)) {
  ids.push(m[1]);
}

const unique = [...new Set(ids)].sort();
const out = `/** Auto-generated quiz topic IDs for lightweight hasQuiz() checks. Run: node scripts/extract-quiz-ids.mjs */
export const QUIZ_TOPIC_IDS = new Set<string>([
${unique.map((id) => `  "${id}",`).join("\n")}
]);

export function hasQuiz(topicId: string): boolean {
  return QUIZ_TOPIC_IDS.has(topicId);
}
`;

fs.writeFileSync(path.join(dir, "meta.ts"), out);
console.log(`Wrote ${unique.length} quiz topic IDs to meta.ts`);
