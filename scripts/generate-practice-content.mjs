/**
 * Generates practice problem modules and hidden-test seed SQL.
 * Run: node scripts/generate-practice-content.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const TOPIC_TEMPLATES = {
  "m1-t1": {
    theme: "Introduction to Programming",
    tasks: [
      ["hello-world", "Hello, World!", "easy", "Print exactly one line: Hello, World!", 'print("Hello, World!")', "Hello, World!"],
      ["two-lines", "Two Lines of Output", "easy", "Print your name on the first line and your goal (e.g. Data Science) on the second.", 'print("Alex")\nprint("Data Science")', "Alex\nData Science"],
      ["print-numbers", "Print Three Numbers", "easy", "Print the numbers 1, 2, and 3 on separate lines.", "for i in range(1, 4):\n    print(i)", "1\n2\n3"],
      ["comment-then-print", "Comment and Print", "easy", "Add a comment describing the next line, then print Python is fun.", '# Describe the program\nprint("Python is fun")', "Python is fun"],
      ["multiple-prints", "Build a Mini Banner", "medium", "Print three lines: ====, Welcome to PyPath, ====", 'print("====")\nprint("Welcome to PyPath")\nprint("====")', "====\nWelcome to PyPath\n===="],
      ["format-intro", "Intro Sentence", "medium", "Set variables name and topic, then print: I am NAME learning TOPIC.", 'name = "Sam"\ntopic = "Python"\nprint("I am", name, "learning", topic)', "I am Sam learning Python"],
      ["calc-print", "Print a Sum", "medium", "Print the result of 17 + 25.", "print(17 + 25)", "42"],
    ],
  },
};

function defaultTemplate(topicId, title) {
  const slug = topicId.replace(/-/g, "_");
  return {
    theme: title,
    tasks: [
      [`${slug}-1`, `${title}: Warm-up`, "easy", `Write a short program related to ${title}. Print the word Ready on one line.`, 'print("Ready")', "Ready"],
      [`${slug}-2`, `${title}: Output Two Values`, "easy", `Create two variables relevant to ${title} and print them separated by a comma.`, 'a = "A"\nb = "B"\nprint(a + "," + b)', "A,B"],
      [`${slug}-3`, `${title}: Simple Loop`, "medium", `Use a for loop to print numbers 1 through 4 for practice on ${title}.`, "for i in range(1, 5):\n    print(i)", "1\n2\n3\n4"],
      [`${slug}-4`, `${title}: Condition`, "medium", `Set score = 75. If score >= 60 print Pass else print Fail.`, "score = 75\nif score >= 60:\n    print('Pass')\nelse:\n    print('Fail')", "Pass"],
      [`${slug}-5`, `${title}: Function Stub`, "medium", `Define greet() that prints Hello and call it once.`, 'def greet():\n    print("Hello")\n\ngreet()', "Hello"],
      [`${slug}-6`, `${title}: List Practice`, "hard", `Create a list of three items about ${title} and print the second item (index 1).`, 'items = ["a", "middle", "c"]\nprint(items[1])', "middle"],
      [`${slug}-7`, `${title}: Dict Lookup`, "hard", `Create a dict with key topic and print its value using the key topic.`, 'd = {"topic": "Python"}\nprint(d["topic"])', "Python"],
    ],
  };
}

const CURRICULUM_TOPICS = [
  ["m1-t1", "Introduction to Programming"],
  ["m1-t2", "Choosing Python"],
  ["m1-t3", "Setting up Python Environment"],
  ["m1-t4", "Python IDEs"],
  ["m2-t1", "Input and Output"],
  ["m2-t2", "Comments"],
  ["m2-t3", "Variables"],
  ["m2-t4", "Data Types"],
  ["m2-t5", "Typecasting"],
  ["m3-t1", "Arithmetic Operators"],
  ["m3-t2", "Assignment Operators"],
  ["m3-t3", "Comparison Operators"],
  ["m3-t4", "Logical Operators"],
  ["m3-t5", "Identity Operators"],
  ["m3-t6", "Membership Operators"],
  ["m3-t7", "Bitwise Operators"],
  ["m4-t1", "Creating Strings"],
  ["m4-t2", "Formatting Strings"],
  ["m4-t3", "Indexing Strings"],
  ["m4-t4", "Slicing Strings"],
  ["m4-t5", "String Methods"],
  ["m5-t1", "Creating Lists"],
  ["m5-t2", "List Properties"],
  ["m5-t3", "Indexing Lists"],
  ["m5-t4", "Slicing Lists"],
  ["m5-t5", "List Methods"],
  ["m5-t6", "Modifying Lists"],
  ["m6-t1", "Tuple Syntax"],
  ["m6-t2", "Tuple Properties"],
  ["m6-t3", "Indexing Tuples"],
  ["m6-t4", "Slicing Tuples"],
  ["m6-t5", "Tuple Methods"],
  ["m7-t1", "Set Syntax"],
  ["m7-t2", "Updating Sets"],
  ["m7-t3", "Set Operations"],
  ["m7-t4", "Set Methods"],
  ["m8-t1", "Dictionary Syntax"],
  ["m8-t2", "Keys and Values"],
  ["m8-t3", "Accessing Dictionaries"],
  ["m8-t4", "Dictionary Methods"],
  ["m9-t1", "if Statement"],
  ["m9-t2", "if-else"],
  ["m9-t3", "if-elif-else"],
  ["m10-t1", "while Loop"],
  ["m10-t2", "for Loop"],
  ["m10-t3", "break and continue"],
  ["m10-t4", "pass"],
  ["m10-t5", "range()"],
  ["m11-t1", "List Comprehension Syntax"],
  ["m11-t2", "Uses of Comprehensions"],
  ["m11-t3", "Dictionary Comprehensions"],
  ["m12-t1", "Creating Functions"],
  ["m12-t2", "Calling Functions"],
  ["m12-t3", "Function Arguments"],
  ["m12-t4", "Variables in Functions"],
  ["m12-t5", "Recursion"],
  ["m13-t1", "Lambda Functions"],
];

const ENHANCED = {
  "m2-t1": {
    tasks: [
      ["print-name", "Print Your Name", "easy", "Use print() to display your name on one line.", 'print("Jordan")', "Jordan"],
      ["print-sum", "Print a Calculation", "easy", "Print the result of 10 + 5.", "print(10 + 5)", "15"],
      ["two-prints", "Two Messages", "easy", "Print Hello on line 1 and Python on line 2.", 'print("Hello")\nprint("Python")', "Hello\nPython"],
      ["input-echo", "Echo Input (Simulated)", "medium", "Set name = \"Mia\" then print Hello, Mia using concatenation.", 'name = "Mia"\nprint("Hello, " + name)', "Hello, Mia"],
      ["format-output", "Formatted Output", "medium", "Use an f-string: name = \"Leo\", age = 20, print Name: Leo, Age: 20", 'name = "Leo"\nage = 20\nprint(f"Name: {name}, Age: {age}")', "Name: Leo, Age: 20"],
      ["multi-values", "Print Three Values", "medium", "Print 1, 2, 3 using one print with default separator.", "print(1, 2, 3)", "1 2 3"],
      ["sep-end", "Custom Separator", "hard", "Print a, b, c on one line separated by dashes using sep='-'.", 'print("a", "b", "c", sep="-")', "a-b-c"],
    ],
  },
  "m2-t3": {
    tasks: [
      ["assign-int", "Store an Integer", "easy", "Create age = 21 and print age.", "age = 21\nprint(age)", "21"],
      ["assign-str", "Store a String", "easy", "Create city = \"Pune\" and print city.", 'city = "Pune"\nprint(city)', "Pune"],
      ["reassign", "Reassign Variable", "easy", "Set x = 1, then x = 2, print x.", "x = 1\nx = 2\nprint(x)", "2"],
      ["two-vars", "Two Variables", "medium", "Create width = 5 and height = 3, print width * height.", "width = 5\nheight = 3\nprint(width * height)", "15"],
      ["swap", "Swap Values", "medium", "Swap a and b. Start a=1, b=2. Print a then b.", "a, b = 1, 2\na, b = b, a\nprint(a)\nprint(b)", "2\n1"],
      ["naming", "Descriptive Names", "medium", "Use total_score = 88 and print it.", "total_score = 88\nprint(total_score)", "88"],
      ["multi-assign", "Multiple Assignment", "hard", "Use x, y, z = 1, 2, 3 and print their sum.", "x, y, z = 1, 2, 3\nprint(x + y + z)", "6"],
    ],
  },
};

function getTemplate(topicId, title) {
  if (TOPIC_TEMPLATES[topicId]) return TOPIC_TEMPLATES[topicId];
  if (ENHANCED[topicId]) return { theme: title, tasks: ENHANCED[topicId].tasks };
  return defaultTemplate(topicId, title);
}

function buildProblem(topicId, order, slug, title, difficulty, description, _starterCode, expected) {
  const id = `${topicId}-p${String(order).padStart(2, "0")}`;
  return {
    id,
    topicId,
    slug,
    title,
    difficulty,
    order,
    description,
    examples: [{ input: "", output: expected }],
    constraints: ["Use Python 3 syntax.", "Output must match exactly (including spaces and newlines)."],
    hints: [
      "Read the problem description and example output carefully.",
      "Use Run to test your code, then Run public tests before Submit.",
    ],
    starterCode: "",
    publicTests: [
      {
        id: `${id}-t1`,
        label: "Sample test",
        expectedStdout: expected,
        visibility: "public",
      },
    ],
  };
}

const allProblems = [];
const hiddenInserts = [];

for (const [topicId, title] of CURRICULUM_TOPICS) {
  const tpl = getTemplate(topicId, title);
  tpl.tasks.forEach((task, i) => {
    const [slug, pTitle, diff, desc, starter, expected] = task;
    const order = i + 1;
    const p = buildProblem(topicId, order, slug, pTitle, diff, desc, starter, expected);
    allProblems.push(p);
    hiddenInserts.push({
      problem_id: p.id,
      tests_json: {
        tests: [
          { expectedStdout: expected },
          { setup: "# hidden check", expectedStdout: expected },
        ],
      },
    });
  });
}

const byModule = {};
for (const p of allProblems) {
  const mod = p.topicId.match(/^m(\d+)/)[1];
  if (!byModule[mod]) byModule[mod] = [];
  byModule[mod].push(p);
}

const practiceDir = path.join(root, "src", "data", "practice");
fs.mkdirSync(practiceDir, { recursive: true });

for (const [mod, problems] of Object.entries(byModule)) {
  const content = `import type { PracticeProblem } from "@/lib/types";

export const module${mod}Practice: PracticeProblem[] = ${JSON.stringify(problems, null, 2)};
`;
  fs.writeFileSync(path.join(practiceDir, `module-${mod}.ts`), content);
}

const indexContent = `import type { PracticeProblem } from "@/lib/types";
import { modules } from "@/data/curriculum";
import { getPracticeCountByTopic } from "./meta";
${Object.keys(byModule)
  .sort((a, b) => Number(a) - Number(b))
  .map((m) => `import { module${m}Practice } from "./module-${m}";`)
  .join("\n")}

const allProblems: PracticeProblem[] = [
${Object.keys(byModule)
  .sort((a, b) => Number(a) - Number(b))
  .map((m) => `  ...module${m}Practice,`)
  .join("\n")}
];

export { getPracticeCountByTopic, getTotalPracticeCount } from "./meta";

export function getAllPracticeProblems(): PracticeProblem[] {
  return allProblems;
}

export function getProblemsByTopic(topicId: string): PracticeProblem[] {
  return allProblems.filter((p) => p.topicId === topicId).sort((a, b) => a.order - b.order);
}

export function getProblemBySlug(
  topicId: string,
  problemSlug: string
): PracticeProblem | undefined {
  return allProblems.find((p) => p.topicId === topicId && p.slug === problemSlug);
}

export function getProblemModuleTopic(problem: PracticeProblem) {
  for (const mod of modules) {
    const topic = mod.topics.find((t) => t.id === problem.topicId);
    if (topic) return { module: mod, topic };
  }
  return null;
}

export function getPracticeStaticParams() {
  const params: { moduleSlug: string; topicSlug: string; problemSlug: string }[] = [];
  for (const p of allProblems) {
    const ctx = getProblemModuleTopic(p);
    if (ctx && ctx.topic.published) {
      params.push({
        moduleSlug: ctx.module.slug,
        topicSlug: ctx.topic.slug,
        problemSlug: p.slug,
      });
    }
  }
  return params;
}

export function getPracticeStatsByModule(moduleId: number) {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return { total: 0, topics: [] as { topicId: string; count: number }[] };
  const topics = mod.topics
    .filter((t) => t.published)
    .map((t) => ({ topicId: t.id, count: getPracticeCountByTopic(t.id) }));
  return { total: topics.reduce((s, t) => s + t.count, 0), topics };
}
`;

fs.writeFileSync(path.join(practiceDir, "index.ts"), indexContent);

const topicCounts = {};
for (const p of allProblems) {
  topicCounts[p.topicId] = (topicCounts[p.topicId] || 0) + 1;
}
const metaContent = `/** Auto-generated — run npm run generate:practice */
export const TOTAL_PRACTICE_COUNT = ${allProblems.length};

export const TOPIC_PRACTICE_COUNTS: Record<string, number> = ${JSON.stringify(topicCounts, null, 2)};

export function getPracticeCountByTopic(topicId: string): number {
  return TOPIC_PRACTICE_COUNTS[topicId] ?? 0;
}

export function getTotalPracticeCount(): number {
  return TOTAL_PRACTICE_COUNT;
}
`;
fs.writeFileSync(path.join(practiceDir, "meta.ts"), metaContent);

const values = hiddenInserts.map(
  (h) =>
    `  ('${h.problem_id}', '${JSON.stringify(h.tests_json).replace(/'/g, "''")}'::jsonb)`
);
const sql = [
  "-- Auto-generated hidden tests seed",
  "insert into public.practice_hidden_tests (problem_id, tests_json) values",
  values.join(",\n"),
  "on conflict (problem_id) do update set tests_json = excluded.tests_json, updated_at = now();",
].join("\n");
fs.writeFileSync(path.join(root, "supabase", "migrations", "002_seed_hidden_tests.sql"), sql);

console.log(`Generated ${allProblems.length} problems across ${Object.keys(byModule).length} modules.`);
