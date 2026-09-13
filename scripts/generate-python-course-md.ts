import fs from "fs";
import path from "path";
import { getModulesByCourse } from "../src/data/curriculum.ts";
import { getModuleGuide } from "../src/data/module-guides.ts";
import { getPracticeCountByTopic } from "../src/data/practice/index.ts";
import { courses } from "../src/data/courses.ts";

const course = courses.find((c) => c.id === "python");
const mods = getModulesByCourse("python");
const lines: string[] = [];

lines.push(`# ${course?.name ?? "Python for Data Science"}`);
lines.push("");
if (course?.tagline) {
  lines.push(`> ${course.tagline}`);
  lines.push("");
}
if (course?.description) {
  lines.push(course.description);
  lines.push("");
}

const topics = mods.flatMap((m) => m.topics);
const published = topics.filter((t) => t.published);
const practice = published.reduce(
  (acc, t) => acc + getPracticeCountByTopic(t.id),
  0
);
const minutes = published.reduce((acc, t) => acc + t.estimatedMinutes, 0);

lines.push("## Course snapshot");
lines.push("");
lines.push("| | |");
lines.push("|---|---|");
lines.push("| **Course ID** | `python` |");
lines.push(`| **Level** | ${course?.level ?? ""} |`);
lines.push(`| **Modules** | ${mods.length} |`);
lines.push(
  `| **Topics (subtopics)** | ${topics.length} (${published.length} published) |`
);
lines.push(
  `| **Estimated lesson time** | ~${minutes} minutes (~${Math.round(minutes / 60)} hours) |`
);
lines.push(`| **Module practice challenges** | ${practice} |`);
lines.push(
  "| **Prerequisites** | None — this course assumes zero prior coding experience |"
);
lines.push("");

lines.push("## Course Overview & Learning Path");
lines.push("");
lines.push(
  "This curriculum progressively builds Python skills in three phases:"
);
lines.push("");
lines.push(
  "- **Phase 1: Foundations** (Modules 1–12): Master Python syntax, data structures, and control flow — the building blocks of all programming."
);
lines.push(
  "- **Phase 2: Data Science** (Modules 13–17): Apply Python to real data using NumPy, Pandas, and visualization libraries."
);
lines.push(
  "- **Phase 3: Project** (Module 18): Synthesize everything in a real-world capstone analysis."
);
lines.push("");
lines.push(
  "By the end, you will be able to load, clean, explore, and visualize datasets independently using professional-grade Python tools."
);
lines.push("");
lines.push("---");
lines.push("");

lines.push("## Learning path");
lines.push("");
const phases = [...new Set(mods.map((m) => m.phase))];
for (const phase of phases) {
  lines.push(`### Phase: \`${phase}\``);
  lines.push("");
  for (const m of mods.filter((x) => x.phase === phase)) {
    lines.push(`${m.id}. **${m.name}** (\`${m.slug}\`)`);
  }
  lines.push("");
}

lines.push("---");
lines.push("");
lines.push("## Modules in detail");
lines.push("");

for (const m of mods) {
  const guide = getModuleGuide(m.slug);
  const topicMinutes = m.topics.reduce((a, t) => a + t.estimatedMinutes, 0);
  const topicPractice = m.topics.reduce(
    (a, t) => a + getPracticeCountByTopic(t.id),
    0
  );

  lines.push(`## Module ${m.id}: ${m.name}`);
  lines.push("");
  lines.push(`- **Slug:** \`${m.slug}\``);
  lines.push(`- **Phase:** \`${m.phase}\``);
  lines.push(`- **Topics:** ${m.topics.length}`);
  lines.push(`- **Duration:** ~${topicMinutes} minutes`);
  lines.push(`- **Practice Challenges:** ${topicPractice}`);
  lines.push("");

  if (guide) {
    lines.push("### Overview");
    lines.push("");
    for (const para of guide.overview.split("\n\n")) {
      lines.push(para);
      lines.push("");
    }

    if (guide.learningOutcomes?.length) {
      lines.push("### Learning Outcomes");
      lines.push("");
      lines.push("By the end of this module, you will:");
      for (const o of guide.learningOutcomes) {
        lines.push(`- ${o}`);
      }
      lines.push("");
    }

    if (guide.keyFunctions?.length) {
      lines.push("### Key functions & concepts");
      lines.push("");
      for (const f of guide.keyFunctions) {
        lines.push(`- **\`${f.name}\`** — ${f.explanation}`);
      }
      lines.push("");
    }
  } else {
    lines.push(m.description);
    lines.push("");
  }

  lines.push("### Subtopics");
  lines.push("");
  lines.push("| # | Topic | Minutes | Practice | Description |");
  lines.push("|---|-------|---------|----------|-------------|");
  m.topics.forEach((t, i) => {
    const expl = (guide?.topics?.[t.id] ?? t.description).replace(/\|/g, "/");
    const pc = getPracticeCountByTopic(t.id);
    const title = t.published ? t.title : `${t.title} *(unpublished)*`;
    lines.push(
      `| ${i + 1} | ${title} | ${t.estimatedMinutes} | ${pc} | ${expl} |`
    );
  });
  lines.push("");

  if (guide?.pitfalls?.length || guide?.tips?.length) {
    lines.push("### Common Pitfalls & Tips");
    lines.push("");
    for (const p of guide.pitfalls ?? []) {
      lines.push(`- **Pitfall:** ${p.pitfall} → **Tip:** ${p.tip}`);
    }
    for (const tip of guide.tips ?? []) {
      lines.push(`- **Tip:** ${tip}`);
    }
    lines.push("");
  }

  lines.push("---");
  lines.push("");
}

lines.push("## Notes");
lines.push("");
lines.push(
  "- Module practice challenges live under Learn (`/learn/<module>/<topic>/challenges`) and are **separate** from the standalone Practice hub."
);
lines.push(
  "- Standalone Practice hub (Python Basics & Algorithms) is a different problem bank under `/practice`."
);
lines.push(
  "- This document is generated from the enhanced curriculum guides in `src/data/python-module-guides.ts`."
);
lines.push("");
lines.push(
  "*This curriculum is designed to be completed in ~16 hours of active learning. Spacing it over 4–8 weeks allows time for practice and projects.*"
);
lines.push("");

const outDir = path.join(process.cwd(), "docs");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "python-for-data-science-course.md");
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath} (${lines.length} lines)`);
