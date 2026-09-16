/**
 * Helpers for concept-true practice tasks.
 *
 * Every task built here ships:
 *  - an exact-stdout test (what the learner sees as "Expected output"), and
 *  - assert tests that inspect the objects the learner had to create, so a
 *    hardcoded print() of the right answer still fails.
 *
 * Output rules (the browser runs Pyodide 0.26.4 = numpy 1.26 / pandas 2.2,
 * while CI verification uses the local interpreter):
 *  - print only pure Python values (int, float, str, bool, list, tuple, dict)
 *  - never print an ndarray/Series/DataFrame repr — use .tolist(), int(), float()
 *  - use Path(...).as_posix() so paths do not differ on Windows
 */

export const seg = (type, value) => ({ type, value });

/**
 * @param {object} spec
 * @param {string} spec.slug
 * @param {string} spec.title
 * @param {"easy"|"medium"|"hard"} spec.level
 * @param {string} spec.description  Plain-text summary (search + report use this).
 * @param {string} spec.expected     Exact stdout of the reference solution.
 * @param {Array<{type: string, value: string}>} spec.intro
 * @param {string} spec.starter      Pre-filled editor code (imports + TODO).
 * @param {string} spec.solution     Reference solution.
 * @param {Array<{label: string, code: string}>} spec.checks  Assert tests.
 * @param {string[]} spec.constraints
 * @param {string[]} spec.hints
 * @param {string[]} [spec.vars]     Variable names the learner must define.
 * @param {string[]} [spec.steps]    "What you need to know" bullets.
 * @param {string} [spec.placeholder]
 * @param {string} [spec.success]
 * @param {string} [spec.approach]
 * @param {boolean} [spec.assertOnly] Skip the stdout test (charts add a banner line).
 */
export function conceptTask(spec) {
  const {
    slug,
    title,
    level,
    description,
    expected,
    intro,
    starter,
    solution,
    checks,
    constraints,
    hints,
    vars: requiredVars,
    steps,
    placeholder,
    success,
    approach,
    assertOnly,
  } = spec;

  if (!checks || checks.length === 0) {
    throw new Error(`${slug}: every concept task needs at least one assert check`);
  }

  const tests = [];
  if (!assertOnly) {
    tests.push({ label: "Sample Case", expectedStdout: expected });
  }
  for (const check of checks) {
    tests.push({ label: check.label, assertCode: check.code });
  }

  const challenge = {
    outputOnly: true,
    introSegments: intro,
    editorPlaceholder: placeholder ?? "# Write your solution here",
    emptyMessage: "Write your solution, then print the result.",
    successDetail: success ?? "Correct!",
    constraints,
    hints,
    starter,
    solution,
    tests,
    approach: approach ?? `${description}\n\nReference solution:\n${solution}`,
  };

  if (requiredVars?.length) challenge.requiresVariables = requiredVars;
  if (steps?.length) {
    challenge.steps = { title: "What you need to know", items: steps };
  }

  return [slug, title, level, description, expected, challenge];
}

/**
 * Assert that a name exists and is an instance of a type.
 *
 * Messages are built with repr() concatenation rather than f-strings: the
 * expressions often contain quotes (data["status"]) and nesting them inside an
 * f-string is a syntax error on older interpreters.
 */
export function assertType(name, typeExpr, importLine = "") {
  const prefix = importLine ? `${importLine}\n` : "";
  return {
    label: `${name} has the right type`,
    code:
      `${prefix}assert "${name}" in globals(), "Expected a variable named ${name}"\n` +
      `assert isinstance(${name}, ${typeExpr}), "Expected ${name} to be ${typeExpr}, got " + type(${name}).__name__`,
  };
}

/**
 * Assert a Python expression equals a literal, reporting expected vs got.
 * Both sides are parenthesised so a comparison inside `expr` cannot turn the
 * assert into a chained comparison (a == b >= c).
 */
export function assertEquals(label, expr, expectedLiteral) {
  return {
    label,
    code: `assert (${expr}) == (${expectedLiteral}), "Expected " + repr(${expectedLiteral}) + ", got " + repr(${expr})`,
  };
}

/** Assert a boolean expression holds. */
export function assertTrue(label, expr, message) {
  return {
    label,
    code: `assert ${expr}, ${JSON.stringify(message)}`,
  };
}
