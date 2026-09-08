/**
 * Add `approach` explanations to all curriculum module practice problems.
 * Rewrites each module-*.ts from the in-memory problem objects (safe).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "src/data/practice");

type Problem = {
  id: string;
  title: string;
  description: string;
  hints: string[];
  solutionCode?: string;
  approach?: string;
  challengeContent?: {
    learnSection?: { body: string; codeExample?: string };
    steps?: { items: string[]; codePreview?: { lines: string[] } };
  };
  [key: string]: unknown;
};

function buildApproach(p: Problem): string {
  const parts: string[] = [];
  const learn = p.challengeContent?.learnSection?.body?.trim();
  const steps = p.challengeContent?.steps?.items?.filter(Boolean) ?? [];

  if (learn) parts.push(learn);
  if (steps.length) {
    parts.push(steps.map((s, i) => `${i + 1}. ${s}`).join(" "));
  }

  if (parts.length === 0) {
    parts.push(p.description.trim());
    if (p.hints.length) {
      parts.push(
        "Key points: " +
          p.hints.map((h) => h.replace(/\s+/g, " ").trim()).join(" ")
      );
    }
  }

  if (p.solutionCode?.trim()) {
    parts.push(
      `A correct solution looks like this:\n${p.solutionCode.trim()}`
    );
  }

  return parts.join("\n\n").trim();
}

function serialize(value: unknown, indent: number): string {
  const pad = " ".repeat(indent);
  const pad2 = " ".repeat(indent + 2);

  if (value === null) return "null";
  if (typeof value === "boolean" || typeof value === "number") {
    return String(value);
  }
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => `${pad2}${serialize(v, indent + 2)}`);
    return `[\n${items.join(",\n")}\n${pad}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    const lines = entries.map(
      ([k, v]) => `${pad2}${JSON.stringify(k)}: ${serialize(v, indent + 2)}`
    );
    return `{\n${lines.join(",\n")}\n${pad}}`;
  }
  return "null";
}

async function main() {
  const files = fs
    .readdirSync(DIR)
    .filter((f) => /^module-\d+\.ts$/.test(f))
    .sort((a, b) => {
      const na = Number(a.match(/\d+/)?.[0] ?? 0);
      const nb = Number(b.match(/\d+/)?.[0] ?? 0);
      return na - nb;
    });

  let updatedProblems = 0;
  let filesTouched = 0;

  for (const file of files) {
    const full = path.join(DIR, file);
    const mod = await import(`${pathToFileURL(full).href}?t=${Date.now()}`);
    const exportKey = Object.keys(mod).find((k) => /Practice$/.test(k));
    if (!exportKey) continue;

    const problems = (mod[exportKey] as Problem[]).map((p) => {
      if (p.approach?.trim()) return p;
      const approach = buildApproach(p);
      if (!approach) return p;
      updatedProblems += 1;
      // Keep approach near the end for readability
      const { solutionCode, ...rest } = p;
      return {
        ...rest,
        ...(solutionCode !== undefined ? { solutionCode } : {}),
        approach,
      };
    });

    const num = file.match(/module-(\d+)/)?.[1] ?? "?";
    const contents = `import type { PracticeProblem } from "@/lib/types";

export const module${num}Practice: PracticeProblem[] = ${serialize(
      problems,
      0
    )};
`;

    fs.writeFileSync(full, contents);
    filesTouched += 1;
    console.log(`wrote ${file} (${problems.length} problems)`);
  }

  console.log(JSON.stringify({ filesTouched, updatedProblems }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
