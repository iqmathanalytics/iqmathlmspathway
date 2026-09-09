const fs = require("fs");
const path = require("path");

const dir = "src/components/lesson";
const skip = new Set(["CodeExercisePanel.tsx", "FinalProjectInfographic.tsx"]);
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx") && !skip.has(f));
const importLine =
  'import { CodeExercisePanel } from "@/components/lesson/CodeExercisePanel";';

const changed = [];
for (const f of files) {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, "utf8");
  const idx = s.indexOf("function CodeExercisePanel(");
  if (idx < 0) continue;

  let start = idx;
  while (start > 0 && s[start - 1] !== "\n") start--;
  if (start > 0 && s[start - 1] === "\n") start--;

  const braceOpen = s.indexOf("{", idx);
  let depth = 0;
  let end = braceOpen;
  for (; end < s.length; end++) {
    if (s[end] === "{") depth++;
    else if (s[end] === "}") {
      depth--;
      if (depth === 0) {
        end++;
        break;
      }
    }
  }
  if (s[end] === "\n") end++;
  s = s.slice(0, start) + "\n" + s.slice(end);

  if (!s.includes('from "@/components/lesson/CodeExercisePanel"')) {
    if (s.includes('from "@/components/lesson/LessonPracticeContext";')) {
      s = s.replace(
        'from "@/components/lesson/LessonPracticeContext";',
        'from "@/components/lesson/LessonPracticeContext";\n' + importLine
      );
    } else if (s.startsWith('"use client";')) {
      s = s.replace('"use client";', '"use client";\n\n' + importLine);
    } else {
      s = importLine + "\n" + s;
    }
  }

  if (
    s.includes("useLessonPractice") &&
    (s.match(/useLessonPractice/g) || []).length === 1
  ) {
    s = s.replace(
      /\nimport \{ useLessonPractice \} from "@\/components\/lesson\/LessonPracticeContext";/,
      ""
    );
  }

  fs.writeFileSync(p, s);
  changed.push(f);
}

console.log("updated", changed.length);
console.log(changed.join("\n"));
