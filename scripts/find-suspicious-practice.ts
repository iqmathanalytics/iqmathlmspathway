/**
 * Find practice problems where solution output looks wrong vs problem text.
 * Heuristic: if description/title contains an explicit quoted expected phrase
 * or "print X", compare to solution stdout.
 */
import { spawnSync } from "node:child_process";
import { getAllPracticeProblems } from "../src/data/practice/index.ts";

function normalize(s: string) {
  return String(s ?? "").replace(/\r\n/g, "\n").trimEnd();
}

function run(code: string) {
  const r = spawnSync("python", ["-c", code], {
    encoding: "utf8",
    timeout: 5000,
    windowsHide: true,
    env: { ...process.env, PYTHONHASHSEED: "0" },
  });
  return normalize(r.stdout || "");
}

const suspects: unknown[] = [];
const ps = getAllPracticeProblems().filter((p) => /^m\d+-t/.test(p.topicId));

for (const p of ps) {
  const sol = p.solutionCode?.trim() ?? "";
  if (!sol) continue;
  const out = run(sol);
  const exp = normalize(p.publicTests?.[0]?.expectedStdout ?? "");
  if (out !== exp) {
    suspects.push({ id: p.id, kind: "sol-mismatch", out, exp });
    continue;
  }

  // Look for print("...") targets mentioned in description that don't appear in output
  const desc = `${p.title}\n${p.description}\n${(p.hints || []).join("\n")}`;
  const quoted = [...desc.matchAll(/print\([\"']([^\"']+)[\"']\)/gi)].map((m) => m[1]);
  const unique = [...new Set(quoted)].filter((q) => q.length > 0 && q.length < 80);

  // If hints give exact answer print, solution should produce that
  const exactHint = desc.match(/exact answer is:\s*(.+)$/im);
  if (exactHint) {
    const hintCode = exactHint[1].trim();
    // only single-line print checks
    if (/^print\(/.test(hintCode) && !hintCode.includes(" then ")) {
      const hintOut = run(hintCode);
      if (hintOut && hintOut !== out) {
        suspects.push({
          id: p.id,
          kind: "hint-vs-sol",
          title: p.title,
          hintCode,
          hintOut,
          out,
        });
      }
    }
  }

  // Module-1 style: description says prints X exactly
  const exactly = desc.match(/prints?\s+([A-Za-z0-9 _,.!]+)\s+exactly/i);
  if (exactly) {
    const target = exactly[1].trim();
    if (target && !out.includes(target) && target.length < 40) {
      suspects.push({
        id: p.id,
        kind: "desc-exactly",
        title: p.title,
        target,
        out,
      });
    }
  }
}

console.log(JSON.stringify({ total: ps.length, suspects: suspects.length, sample: suspects.slice(0, 50) }, null, 2));
