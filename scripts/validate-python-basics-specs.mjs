/**
 * Validate all extra basics specs: run solutions against expected stdout / asserts.
 */
import { spawnSync } from "node:child_process";
import { easySpecs } from "./_basics-specs-easy.mjs";
import { mediumSpecs } from "./_basics-specs-medium.mjs";
import { hardSpecs } from "./_basics-specs-hard.mjs";

const all = [
  ...easySpecs.map((s) => ({ ...s, difficulty: "easy" })),
  ...mediumSpecs.map((s) => ({ ...s, difficulty: "medium" })),
  ...hardSpecs.map((s) => ({ ...s, difficulty: "hard" })),
];

function runPython(code, stdin = "") {
  const r = spawnSync("python", ["-c", code], {
    input: stdin,
    encoding: "utf8",
    timeout: 8000,
    maxBuffer: 2_000_000,
  });
  return {
    ok: r.status === 0,
    stdout: (r.stdout || "").replace(/\r\n/g, "\n").replace(/\n$/, ""),
    stderr: (r.stderr || "").trim(),
    status: r.status,
  };
}

const failures = [];

for (const spec of all) {
  if (spec.mode === "script") {
    for (const t of spec.tests) {
      const res = runPython(spec.solution, t.stdin ?? "");
      const expected = String(t.expectedStdout).replace(/\r\n/g, "\n").replace(/\n$/, "");
      const actual = res.stdout.replace(/\n$/, "");
      if (!res.ok || actual !== expected) {
        failures.push({
          slug: spec.slug,
          label: t.label,
          kind: "script",
          expected,
          actual,
          stderr: res.stderr,
        });
      }
    }
  } else {
    for (const t of spec.tests) {
      let code;
      if (t.kind === "custom" || t.code) {
        code = `${spec.solution}\n\n${t.code}`;
      } else {
        code = `${spec.solution}\n\n_got = ${t.call}\n_exp = ${t.expected}\nassert _got == _exp, f"Expected {_exp!r}, got {_got!r}"`;
      }
      const res = runPython(code);
      if (!res.ok) {
        failures.push({
          slug: spec.slug,
          label: t.label,
          kind: "func",
          stderr: res.stderr || res.stdout,
        });
      }
    }
  }
}

if (failures.length) {
  console.error(`FAILED ${failures.length} / ${all.length} specs`);
  for (const f of failures.slice(0, 40)) {
    console.error(JSON.stringify(f, null, 2));
  }
  if (failures.length > 40) console.error(`... and ${failures.length - 40} more`);
  process.exit(1);
}

console.log(`OK: validated ${all.length} extra specs (${all.reduce((n, s) => n + s.tests.length, 0)} tests)`);
