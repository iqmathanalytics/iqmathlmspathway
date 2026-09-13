import fs from "fs";
import path from "path";

const dir = path.join("src", "components", "lesson");
const files = fs.readdirSync(dir).filter((f) => f.endsWith("Infographic.tsx"));
const marker = ": {\n  practiceIndex: number;";
let fixed = 0;
const errors = [];

/** Find matching closing brace, skipping strings/templates/comments. */
function findMatchingBrace(s, openIdx) {
  let depth = 0;
  let i = openIdx;
  let mode = "code"; // code | squote | dquote | template | linecomment | blockcomment
  let templateExprDepth = 0;

  while (i < s.length) {
    const ch = s[i];
    const next = s[i + 1];

    if (mode === "linecomment") {
      if (ch === "\n") mode = "code";
      i++;
      continue;
    }
    if (mode === "blockcomment") {
      if (ch === "*" && next === "/") {
        mode = "code";
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    if (mode === "squote") {
      if (ch === "\\") {
        i += 2;
        continue;
      }
      if (ch === "'") mode = "code";
      i++;
      continue;
    }
    if (mode === "dquote") {
      if (ch === "\\") {
        i += 2;
        continue;
      }
      if (ch === '"') mode = "code";
      i++;
      continue;
    }
    if (mode === "template") {
      if (ch === "\\") {
        i += 2;
        continue;
      }
      if (ch === "`" && templateExprDepth === 0) {
        mode = "code";
        i++;
        continue;
      }
      if (ch === "$" && next === "{") {
        templateExprDepth++;
        i += 2;
        continue;
      }
      if (ch === "{" && templateExprDepth > 0) {
        templateExprDepth++;
        i++;
        continue;
      }
      if (ch === "}" && templateExprDepth > 0) {
        templateExprDepth--;
        i++;
        continue;
      }
      i++;
      continue;
    }

    // code mode
    if (ch === "/" && next === "/") {
      mode = "linecomment";
      i += 2;
      continue;
    }
    if (ch === "/" && next === "*") {
      mode = "blockcomment";
      i += 2;
      continue;
    }
    if (ch === "'") {
      mode = "squote";
      i++;
      continue;
    }
    if (ch === '"') {
      mode = "dquote";
      i++;
      continue;
    }
    if (ch === "`") {
      mode = "template";
      templateExprDepth = 0;
      i++;
      continue;
    }
    if (ch === "{") {
      depth++;
      i++;
      continue;
    }
    if (ch === "}") {
      depth--;
      i++;
      if (depth === 0) return i; // index after closing brace
      continue;
    }
    i++;
  }
  return -1;
}

for (const file of files) {
  if (file === "FinalProjectInfographic.tsx") continue;
  const p = path.join(dir, file);
  let s = fs.readFileSync(p, "utf8");
  const start = s.indexOf(marker);
  if (start < 0) continue;

  const bodyOpen = s.indexOf("}) {", start);
  if (bodyOpen < 0) {
    errors.push(`${file}: missing }) {`);
    continue;
  }

  const braceOpen = bodyOpen + 3; // '{'
  const end = findMatchingBrace(s, braceOpen);
  if (end < 0) {
    errors.push(`${file}: unmatched brace`);
    continue;
  }

  let from = start;
  while (from > 0 && (s[from - 1] === " " || s[from - 1] === "\t")) from--;
  while (from > 0 && s[from - 1] === "\n") from--;

  let to = end;
  while (to < s.length && s[to] === "\n") to++;

  s = s.slice(0, from) + "\n\n" + s.slice(to);

  const withoutImport = s.replace(
    /import\s*\{[^}]*useLessonPractice[^}]*\}\s*from\s*["']@\/components\/lesson\/LessonPracticeContext["'];\s*/g,
    ""
  );
  if (!withoutImport.includes("useLessonPractice")) {
    s = withoutImport;
  }

  if (!s.includes("@/components/lesson/CodeExercisePanel")) {
    s = s.replace(
      /("use client";\s*)/,
      `$1\nimport { CodeExercisePanel } from "@/components/lesson/CodeExercisePanel";\n`
    );
  }

  s = s.replace(/\n{3,}/g, "\n\n");
  fs.writeFileSync(p, s);
  fixed += 1;
}

const remaining = files.filter((f) => {
  if (f === "FinalProjectInfographic.tsx") return false;
  return fs.readFileSync(path.join(dir, f), "utf8").includes(marker);
});

console.log(JSON.stringify({ fixed, errors, remaining }, null, 2));
