/**
 * Extract CodeExercisePanel snippets from infographics and run with Python.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const dir = "src/components/lesson";
const files = fs.readdirSync(dir).filter((f) => f.endsWith("Infographic.tsx"));

function stripJsxToApproxPython(inner) {
  // Remove JSX tags, keep text; unescape common entities
  let s = inner
    .replace(/\{\s*"\\n"\s*\}/g, "\n")
    .replace(/\{\s*'\\n'\s*\}/g, "\n")
    .replace(/\{\s*`([^`]*)`\s*\}/g, "$1")
    .replace(/\{\s*"([^"]*)"\s*\}/g, "$1")
    .replace(/\{\s*'([^']*)'\s*\}/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "");
  // Collapse leftover JSX expressions
  s = s.replace(/\{[^}]*\}/g, "");
  // Decode common unicode escapes in source like {" // "}
  return s.replace(/[ \t]+\n/g, "\n").trim();
}

const snippets = [];

for (const f of files) {
  if (f === "FinalProjectInfographic.tsx") continue;
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  // Match CodeExercisePanel ... > ... </CodeExercisePanel>
  const re =
    /<CodeExercisePanel\b([^>]*)>([\s\S]*?)<\/CodeExercisePanel>/g;
  let m;
  let i = 0;
  while ((m = re.exec(src))) {
    i += 1;
    const attrs = m[1];
    const filename =
      (attrs.match(/filename="([^"]+)"/) || [])[1] || `panel-${i}`;
    const inner = m[2].trim();
    let code;
    if (inner.startsWith("{") && inner.includes("`")) {
      const cm = inner.match(/`([\s\S]*?)`/);
      code = cm ? cm[1] : stripJsxToApproxPython(inner);
    } else if (
      (inner.startsWith('"') || inner.startsWith("'")) &&
      !inner.includes("<")
    ) {
      try {
        code = JSON.parse(inner.replace(/^'/, '"').replace(/'$/, '"'));
      } catch {
        code = stripJsxToApproxPython(inner);
      }
    } else {
      code = stripJsxToApproxPython(inner);
    }
    snippets.push({ file: f, filename, code });
  }
}

console.log(`Found ${snippets.length} CodeExercisePanel snippets`);

const failures = [];
const empty = [];
let okCount = 0;

for (const s of snippets) {
  const code = s.code;
  if (!code || !code.trim()) {
    empty.push({ ...s, reason: "empty-extract" });
    continue;
  }
  const needsInput = /\binput\s*\(/.test(code);
  const r = spawnSync("python", ["-c", code], {
    encoding: "utf8",
    timeout: 15000,
    windowsHide: true,
    input: needsInput ? "5\n10\nhello\n" : undefined,
    env: { ...process.env, MPLBACKEND: "Agg" },
  });
  if (r.status !== 0) {
    failures.push({
      file: s.file,
      filename: s.filename,
      preview: code.slice(0, 160).replace(/\n/g, "\\n"),
      err: ((r.stderr || "") + (r.error ? String(r.error) : "")).slice(0, 350),
    });
  } else if (!(r.stdout || "").trim()) {
    empty.push({
      ...s,
      reason: "no-stdout",
      preview: code.slice(0, 120).replace(/\n/g, "\\n"),
    });
  } else {
    okCount += 1;
  }
}

console.log(`OK: ${okCount}`);
console.log(`Fail: ${failures.length}`);
console.log(`Empty: ${empty.length}`);
console.log("\n=== FAILURES ===");
for (const f of failures) {
  console.log(`\n[${f.file}] ${f.filename}`);
  console.log(`  ${f.preview}`);
  console.log(`  ERR: ${f.err}`);
}
console.log("\n=== EMPTY / EXTRACT ISSUES ===");
for (const e of empty.slice(0, 80)) {
  console.log(`[${e.file}] ${e.filename} (${e.reason}) ${e.preview || ""}`);
}
if (empty.length > 80) console.log(`... and ${empty.length - 80} more`);
