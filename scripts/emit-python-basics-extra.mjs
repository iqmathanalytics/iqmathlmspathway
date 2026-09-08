/**
 * Emit TypeScript practice problems from *_basics-specs-*.mjs
 * → src/data/python-basics/extra-{beginner,intermediate,advanced}.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { easySpecs } from "./_basics-specs-easy.mjs";
import { mediumSpecs } from "./_basics-specs-medium.mjs";
import { hardSpecs } from "./_basics-specs-hard.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src", "data", "python-basics");

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function normalizeStarter(s) {
  if (s == null) return "# Write your script here\n";
  // Fix accidental literal \n sequences from escaped strings
  return s.replace(/\\n/g, "\n").replace(/\n?$/, "\n");
}

function emitExamples(examples) {
  return examples
    .map((ex) => {
      const parts = [];
      if (ex.input != null) parts.push(`input: \`${esc(ex.input)}\``);
      if (ex.output != null) parts.push(`output: \`${esc(ex.output)}\``);
      return `{ ${parts.join(", ")} }`;
    })
    .join(",\n      ");
}

function emitScript(spec, order, difficulty) {
  const tests = spec.tests
    .map((t) => {
      const bits = [
        `label: \`${esc(t.label)}\``,
        `expectedStdout: \`${esc(t.expectedStdout)}\``,
      ];
      if (t.stdin != null) bits.push(`stdin: \`${esc(t.stdin)}\``);
      return `{ ${bits.join(", ")} }`;
    })
    .join(",\n      ");

  return `  buildScriptProblem({
    order: ${order},
    slug: "${spec.slug}",
    title: "${esc(spec.title).replace(/`/g, "")}",
    difficulty: "${difficulty}",
    category: "${spec.category}",
    description: \`${esc(spec.description)}\`,
    examples: [
      ${emitExamples(spec.examples ?? [])}
    ],
    constraints: ${JSON.stringify(spec.constraints ?? [])},
    hints: ${JSON.stringify(spec.hints ?? [])},
    approach: \`${esc(spec.approach ?? "")}\`,
    starterCode: \`${esc(normalizeStarter(spec.starter))}\`,
    solutionCode: \`${esc(spec.solution)}\`,
    tests: [
      ${tests}
    ],
  })`;
}

function emitFunc(spec, order, difficulty) {
  const tests = spec.tests
    .map((t) => {
      if (t.kind === "custom" || t.code) {
        return `{
        kind: "custom" as const,
        label: \`${esc(t.label)}\`,
        code: \`${esc(t.code)}\`,
      }`;
      }
      return `{ label: \`${esc(t.label)}\`, call: \`${esc(t.call)}\`, expected: \`${esc(t.expected)}\` }`;
    })
    .join(",\n      ");

  return `  buildBasicsProblem({
    order: ${order},
    slug: "${spec.slug}",
    title: "${String(spec.title).replace(/"/g, '\\"')}",
    difficulty: "${difficulty}",
    category: "${spec.category}",
    description: \`${esc(spec.description)}\`,
    examples: [
      ${emitExamples(spec.examples ?? [])}
    ],
    constraints: ${JSON.stringify(spec.constraints ?? [])},
    hints: ${JSON.stringify(spec.hints ?? [])},
    approach: \`${esc(spec.approach ?? "")}\`,
    starterCode: \`${esc(normalizeStarter(spec.starter))}\`,
    solutionCode: \`${esc(spec.solution)}\`,
    tests: [
      ${tests}
    ],
  })`;
}

function emitFile(specs, difficulty, startOrder, exportName, header) {
  let order = startOrder;
  const bodies = specs.map((spec) => {
    const o = order++;
    return spec.mode === "script"
      ? emitScript(spec, o, difficulty)
      : emitFunc(spec, o, difficulty);
  });

  return `import { buildBasicsProblem, buildScriptProblem } from "./helpers";

/**
 * ${header}
 * Auto-generated from scripts/_basics-specs-*.mjs — do not hand-edit heavily;
 * re-run: node scripts/emit-python-basics-extra.mjs
 */
export const ${exportName} = [
${bodies.join(",\n\n")},
];
`;
}

const beginnerExtra = emitFile(
  easySpecs,
  "easy",
  35,
  "beginnerExtraProblems",
  "Extra Beginner (easy) Python Basics — expands bank toward 70 easy"
);
const intermediateExtra = emitFile(
  mediumSpecs,
  "medium",
  100,
  "intermediateExtraProblems",
  "Extra Intermediate (medium) Python Basics — expands bank toward 50 medium"
);
const advancedExtra = emitFile(
  hardSpecs,
  "hard",
  200,
  "advancedExtraProblems",
  "Extra Advanced (hard) Python Basics — expands bank toward 30 hard"
);

fs.writeFileSync(path.join(outDir, "extra-beginner.ts"), beginnerExtra);
fs.writeFileSync(path.join(outDir, "extra-intermediate.ts"), intermediateExtra);
fs.writeFileSync(path.join(outDir, "extra-advanced.ts"), advancedExtra);

console.log("Wrote extra-beginner.ts, extra-intermediate.ts, extra-advanced.ts");
console.log({
  easy: easySpecs.length,
  medium: mediumSpecs.length,
  hard: hardSpecs.length,
  totalExtra: easySpecs.length + mediumSpecs.length + hardSpecs.length,
});
