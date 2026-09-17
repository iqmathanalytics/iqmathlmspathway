/**
 * Build free-Run demo snippets for function-style practice problems.
 * Appended only on Run (not Test/Submit) so the console shows output.
 */

function lineIndent(line: string): number {
  return line.match(/^ */)?.[0].length ?? 0;
}

function bracketsBalanced(s: string): boolean {
  let paren = 0;
  let square = 0;
  let curly = 0;
  let quote: string | null = null;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (quote) {
      if (ch === "\\" && i + 1 < s.length) {
        i += 1;
        continue;
      }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"') {
      quote = ch;
      continue;
    }
    if (ch === "(") paren += 1;
    else if (ch === ")") paren -= 1;
    else if (ch === "[") square += 1;
    else if (ch === "]") square -= 1;
    else if (ch === "{") curly += 1;
    else if (ch === "}") curly -= 1;
  }
  return paren === 0 && square === 0 && curly === 0;
}

function consumeStatement(lines: string[], start: number): number {
  let buf = lines[start] ?? "";
  let end = start + 1;
  while (end < lines.length && !bracketsBalanced(buf)) {
    buf += `\n${lines[end]}`;
    end += 1;
  }
  return end;
}

function stripEmptyBlocks(lines: string[]): string[] {
  const isHeader = (t: string) =>
    /^(for|while|if|elif|else|try|except|finally|with)\b/.test(t) && t.endsWith(":");

  let out = [...lines];
  let changed = true;
  while (changed) {
    changed = false;
    const next: string[] = [];
    for (let i = 0; i < out.length; i++) {
      const line = out[i] ?? "";
      const t = line.trim();
      if (!isHeader(t)) {
        next.push(line);
        continue;
      }
      const level = lineIndent(line);
      const following = out[i + 1];
      if (!following || lineIndent(following) <= level) {
        changed = true;
        continue;
      }
      next.push(line);
    }
    out = next;
  }
  return out;
}

/** Keep setup/calls, drop asserts, print assigned values (never spoil `_exp`). */
export function buildRunDemoFromAssertCode(code: string): string {
  const lines = code.split("\n").map((l) => l.replace(/\s+$/, ""));
  const kept: string[] = [];

  for (let i = 0; i < lines.length; ) {
    const raw = lines[i] ?? "";
    const t = raw.trim();
    if (!t) {
      i += 1;
      continue;
    }
    if (/^assert\b/.test(t) || /^_exp\s*=/.test(t)) {
      i = consumeStatement(lines, i);
      continue;
    }
    const end = consumeStatement(lines, i);
    kept.push(...lines.slice(i, end).filter((l) => l.trim()));
    i = end;
  }

  const usable = stripEmptyBlocks(kept);

  // Assert-only tests: turn `assert <expr> == ...` into a printable call.
  if (usable.length === 0) {
    for (const line of lines) {
      const t = line.trim();
      const m = t.match(/^assert\s+(.+?)\s*==\s*(.+)$/);
      if (!m) continue;
      const left = m[1].trim();
      // Skip compound boolean asserts (or/and) — too ambiguous for a demo.
      if (/\b(or|and)\b/.test(left)) continue;
      return `_got = ${left}\nprint("result =", _got)`;
    }
    return "";
  }

  const assigned: string[] = [];
  for (const line of usable) {
    const m = line.match(/^([A-Za-z_]\w*)\s*=/);
    if (m?.[1] && m[1] !== "_exp") assigned.push(m[1]);
  }
  const names = [...new Set(assigned)];

  const prints =
    names.length > 0
      ? names
          .map((n) =>
            n === "_got" ? `print("result =", _got)` : `print("${n} =", ${n})`
          )
          .join("\n")
      : `print("Done (no return value to show — add print(...) in your code)")`;

  return `${usable.join("\n")}\n${prints}`;
}

export function buildRunDemoFromEqCall(call: string): string {
  return `_got = ${call}\nprint("result =", _got)`;
}

type DemoTest =
  | { kind: "custom"; code: string }
  | { kind?: "eq"; call: string; expected?: string };

/** Derive demo from the first usable test (custom or eq). */
export function deriveRunDemoCode(options: {
  override?: string;
  tests?: DemoTest[];
  /** @deprecated prefer tests[] */
  assertCode?: string;
  eqCall?: string;
}): string | undefined {
  const override = options.override?.trim();
  if (override) return override;

  if (options.tests?.length) {
    for (const t of options.tests) {
      if (t.kind === "custom") {
        const demo = buildRunDemoFromAssertCode(t.code);
        if (demo) return demo;
        continue;
      }
      if ("call" in t && t.call?.trim()) {
        return buildRunDemoFromEqCall(t.call.trim());
      }
    }
  }

  if (options.eqCall?.trim()) return buildRunDemoFromEqCall(options.eqCall.trim());
  if (options.assertCode?.trim()) {
    const demo = buildRunDemoFromAssertCode(options.assertCode.trim());
    return demo || undefined;
  }
  return undefined;
}
