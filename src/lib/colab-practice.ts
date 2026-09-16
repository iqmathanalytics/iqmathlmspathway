import { isVisualizationCode } from "./visualization-code";
import type { PracticeProblem } from "./types";

/**
 * Python course modules whose challenges lean on the data-science stack: file &
 * API work, NumPy, pandas, matplotlib, statistics/EDA, and the capstone. The
 * in-browser runtime can run these, but charts never display and the library
 * versions are pinned to whatever Pyodide ships, so Colab is the better bench.
 */
const COLAB_MODULES = new Set([13, 14, 15, 16, 17, 18]);

const LIBRARY_IMPORT =
  /^\s*(?:import|from)\s+(?:numpy|pandas|matplotlib|seaborn|scipy|sklearn|statsmodels|plotly|requests)\b/m;

const COMMENT_WIDTH = 78;
const RULE = `# ${"=".repeat(COMMENT_WIDTH - 2)}`;

export function practiceModuleNumber(topicId: string): number | null {
  const match = /^m(\d+)-t\d+/.exec(topicId);
  return match ? Number(match[1]) : null;
}

/** True for topics where every challenge should offer the Colab hand-off. */
export function isColabPracticeTopic(topicId: string): boolean {
  const moduleNumber = practiceModuleNumber(topicId);
  return moduleNumber !== null && COLAB_MODULES.has(moduleNumber);
}

/**
 * True when this specific problem is worth doing in Colab — either it lives in a
 * library-heavy module, or its code imports a data library / draws a chart.
 */
export function isColabPracticeProblem(problem: PracticeProblem): boolean {
  if (isColabPracticeTopic(problem.topicId)) return true;
  const code = `${problem.starterCode ?? ""}\n${problem.solutionCode ?? ""}`;
  return LIBRARY_IMPORT.test(code) || isVisualizationCode(code);
}

function commentBlock(text: string): string {
  const lines: string[] = [];
  for (const paragraph of text.split("\n")) {
    if (!paragraph.trim()) {
      lines.push("#");
      continue;
    }
    let current = "#";
    for (const word of paragraph.trim().split(/\s+/)) {
      if (current === "#") {
        current = `# ${word}`;
      } else if (current.length + word.length + 1 <= COMMENT_WIDTH) {
        current += ` ${word}`;
      } else {
        lines.push(current);
        current = `# ${word}`;
      }
    }
    lines.push(current);
  }
  return lines.join("\n");
}

interface ColabCellInput {
  problem: PracticeProblem;
  moduleName: string;
  topicTitle: string;
  /** The learner's current editor contents; falls back to the starter code. */
  code?: string;
}

/**
 * Builds the cell we drop on the clipboard: the question, the expected output,
 * and the learner's work-in-progress, so Colab opens with full context instead
 * of a blank notebook.
 */
export function buildColabPracticeCell({
  problem,
  moduleName,
  topicTitle,
  code,
}: ColabCellInput): string {
  const expected =
    problem.publicTests?.find((t) => t.expectedStdout !== undefined)
      ?.expectedStdout ??
    problem.examples?.[0]?.output ??
    "";

  const body = code?.trim() || problem.starterCode?.trim() || "";

  const parts = [
    RULE,
    commentBlock(problem.title),
    commentBlock(`${moduleName} · ${topicTitle} · ${problem.difficulty}`),
    RULE,
    commentBlock(`Task:\n${problem.description}`),
  ];

  if (problem.constraints?.length) {
    parts.push("#", commentBlock(`Constraints:\n${problem.constraints.join("\n")}`));
  }

  if (expected) {
    parts.push("#", commentBlock("Expected output:"));
    parts.push(expected.split("\n").map((line) => `#   ${line}`).join("\n"));
  }

  parts.push(
    RULE,
    commentBlock(
      "Colab already has numpy, pandas, matplotlib and scipy installed, and " +
        "charts render inline here. When your output matches, paste the code " +
        "back into the course editor and press Submit & Check."
    ),
    RULE,
    "",
    body || "# Write your solution here"
  );

  return `${parts.join("\n")}\n`;
}
