/**
 * Run every lesson `type: "code"` snippet with system Python.
 * Usage: node scripts/audit-lesson-example-codes.mjs
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const dir = "src/data/lessons";
const files = fs
  .readdirSync(dir)
  .filter((f) => f.startsWith("module-") && f.endsWith(".ts"))
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

function extractCodes(src, file) {
  const results = [];
  // Topic keys for context
  const topicRe = /"([^"]+)":\s*\{[\s\S]*?title:\s*"([^"]+)"/g;
  // Simpler: pull all code blocks with surrounding 200 chars for topic guess
  const re =
    /type:\s*["']code["'][\s\S]*?code:\s*((?:`[\s\S]*?`)|(?:"(?:\\.|[^"\\])*"))/g;
  let m;
  let idx = 0;
  while ((m = re.exec(src))) {
    let code = m[1];
    if (code.startsWith("`")) code = code.slice(1, -1);
    else code = JSON.parse(code);
    idx += 1;
    // Find nearest title before this match
    const before = src.slice(0, m.index);
    const titles = [...before.matchAll(/title:\s*"([^"]+)"/g)];
    const title = titles.length ? titles[titles.length - 1][1] : `code#${idx}`;
    results.push({ file, title, kind: "code", code });
  }
  return results;
}

function prepareViz(code) {
  return `import matplotlib as _mpl\n_mpl.use("Agg")\n${code}\n`;
}

function isViz(code) {
  return (
    /^\s*import\s+matplotlib\b/m.test(code) ||
    /^\s*from\s+matplotlib\b/m.test(code) ||
    /^\s*import\s+seaborn\b/m.test(code) ||
    /^\s*from\s+seaborn\b/m.test(code) ||
    /\bplt\.(show|plot|bar|scatter|hist)\s*\(/.test(code) ||
    /\bsns\.\w+\s*\(/.test(code)
  );
}

function runPython(code) {
  const r = spawnSync("python", ["-c", code], {
    encoding: "utf8",
    timeout: 20000,
    maxBuffer: 2_000_000,
    windowsHide: true,
    env: { ...process.env, MPLBACKEND: "Agg" },
  });
  return {
    ok: r.status === 0,
    stdout: (r.stdout || "").replace(/\r\n/g, "\n").trimEnd(),
    stderr: (r.stderr || "").replace(/\r\n/g, "\n").trimEnd(),
    status: r.status,
    error: r.error ? String(r.error.message || r.error) : null,
  };
}

const all = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  all.push(...extractCodes(src, f));
}

const failures = [];
const emptyOut = [];
const ok = [];

for (const item of all) {
  let code = item.code;
  // Skip pure comments / empty
  if (!code.trim() || code.trim().split("\n").every((l) => !l.trim() || l.trim().startsWith("#"))) {
    emptyOut.push({ ...item, reason: "empty-or-comments-only" });
    continue;
  }
  if (isViz(code)) code = prepareViz(code);

  // Provide dummy stdin for input() examples
  const needsInput = /\binput\s*\(/.test(code);
  const r = spawnSync("python", ["-c", code], {
    encoding: "utf8",
    timeout: 20000,
    maxBuffer: 2_000_000,
    windowsHide: true,
    input: needsInput ? "42\nhello\n3\n" : undefined,
    env: { ...process.env, MPLBACKEND: "Agg" },
  });
  const result = {
    ok: r.status === 0,
    stdout: (r.stdout || "").replace(/\r\n/g, "\n").trimEnd(),
    stderr: (r.stderr || "").replace(/\r\n/g, "\n").trimEnd(),
    error: r.error ? String(r.error.message || r.error) : null,
  };

  if (!result.ok) {
    failures.push({
      file: item.file,
      title: item.title,
      stderr: (result.stderr || result.error || "").slice(0, 400),
      preview: item.code.slice(0, 120).replace(/\n/g, "\\n"),
    });
  } else if (!result.stdout.trim() && !isViz(item.code)) {
    emptyOut.push({
      file: item.file,
      title: item.title,
      reason: "no-stdout",
      preview: item.code.slice(0, 120).replace(/\n/g, "\\n"),
    });
  } else {
    ok.push(item);
  }
}

console.log(`Total: ${all.length}`);
console.log(`OK: ${ok.length}`);
console.log(`Failures: ${failures.length}`);
console.log(`Empty output (non-viz): ${emptyOut.length}`);
console.log("\n=== FAILURES ===");
for (const f of failures) {
  console.log(`\n[${f.file}] ${f.title}`);
  console.log(`  code: ${f.preview}`);
  console.log(`  err: ${f.stderr}`);
}
console.log("\n=== EMPTY OUTPUT ===");
for (const e of emptyOut) {
  console.log(`[${e.file}] ${e.title} (${e.reason}) — ${e.preview || ""}`);
}
