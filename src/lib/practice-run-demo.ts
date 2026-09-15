/**
 * Build free-Run demo snippets for function-style practice problems.
 * Appended only on Run (not Test/Submit) so the console shows output.
 */

/** Keep setup/calls, drop asserts, print assigned values (never spoil `_exp`). */
export function buildRunDemoFromAssertCode(code: string): string {
  const lines = code.split("\n").map((l) => l.replace(/\s+$/, ""));

  const kept = lines.filter((l) => {
    const t = l.trim();
    if (!t) return false;
    if (/^assert\b/.test(t)) return false;
    if (/^_exp\s*=/.test(t)) return false;
    return true;
  });

  // Assert-only tests: turn `assert <expr> == ...` into a printable call.
  if (kept.length === 0) {
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
  for (const line of kept) {
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

  return `${kept.join("\n")}\n${prints}`;
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
