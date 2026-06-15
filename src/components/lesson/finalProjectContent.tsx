import type { ReactNode } from "react";

export type FinalProjectSection =
  | "overview"
  | "data"
  | "logic"
  | "functions"
  | "capstone";

export type ConceptRow = {
  module: string;
  concepts: string;
  usedInProject: string;
};

export const PROJECT_TITLE = "Student Grade Manager";

export const PROJECT_SUMMARY =
  "A command-line grade manager that stores students and scores, calculates averages, flags pass/fail, and prints a formatted class report — using every major Python concept from Modules 1–13.";

export const CONCEPT_MAP: ConceptRow[] = [
  {
    module: "M1 — Intro & Setup",
    concepts: "Comments, running programs",
    usedInProject: "# docstrings and section comments in each function",
  },
  {
    module: "M2 — Syntax & Types",
    concepts: "print(), variables, int/float/str/bool, typecasting",
    usedInProject: "Store names, scores, averages; cast input with int()",
  },
  {
    module: "M3 — Operators",
    concepts: "Arithmetic, comparison, logical, membership (in)",
    usedInProject: "Average >= 60, and/or for filters, name in students",
  },
  {
    module: "M4 — Strings",
    concepts: "f-strings, strip(), upper(), formatting",
    usedInProject: "Report lines: f\"{name}: {avg:.1f}\"",
  },
  {
    module: "M5 — Lists",
    concepts: "create, append(), len(), indexing, slicing",
    usedInProject: "Each student has a list of grade scores",
  },
  {
    module: "M6 — Tuples",
    concepts: "Immutable records, packing",
    usedInProject: "Grade record tuples: (subject, score)",
  },
  {
    module: "M7 — Sets",
    concepts: "Unique values, add(), union",
    usedInProject: "Track unique subject names across the class",
  },
  {
    module: "M8 — Dictionaries",
    concepts: "keys, values, .get(), .items()",
    usedInProject: "Main database: student name → list of grades",
  },
  {
    module: "M9 — Conditionals",
    concepts: "if / elif / else",
    usedInProject: "Pass if avg >= 60, letter grades A–F",
  },
  {
    module: "M10 — Loops",
    concepts: "for, while, range(), break",
    usedInProject: "Loop students; sum grades with for",
  },
  {
    module: "M11 — Comprehensions",
    concepts: "List & dict comprehensions",
    usedInProject: "passing = [n for n,a in avgs.items() if a >= 60]",
  },
  {
    module: "M12 — Functions",
    concepts: "def, return, arguments",
    usedInProject: "average(), letter_grade(), print_report()",
  },
  {
    module: "M13 — Lambda",
    concepts: "lambda, sorted(key=...)",
    usedInProject: "Sort students by average: sorted(..., key=lambda x: x[1])",
  },
];

export type StepBlock = {
  id: string;
  title: string;
  description: string;
  code: string;
  output?: string;
  annotation?: ReactNode;
  practiceIndex?: number;
};

export const BUILD_PHASES = [
  {
    id: "data",
    label: "Step 1",
    title: "Data Model",
    icon: "📦",
    modules: "M5–M8",
    summary: "dict + list + set + tuple",
    snippet: `students = {"Alice": [85, 92]}
subjects = {"Math", "Science"}`,
  },
  {
    id: "logic",
    label: "Step 2",
    title: "Logic & Loops",
    icon: "🔀",
    modules: "M3, M9–M11",
    summary: "loops, if/elif, comprehensions",
    snippet: `for name, grades in students.items():
    avg = sum(grades) / len(grades)`,
  },
  {
    id: "functions",
    label: "Step 3",
    title: "Functions & Report",
    icon: "🧩",
    modules: "M4, M12–M13",
    summary: "def, f-strings, lambda sort",
    snippet: `def average(scores):
    return sum(scores) / len(scores)`,
  },
  {
    id: "capstone",
    label: "Capstone",
    title: "Full Program",
    icon: "🎯",
    modules: "All M1–M13",
    summary: "integrated grade manager",
    snippet: `print("=== Class Report ===")
# ... full report ...`,
  },
] as const;

export const SECTION_CONTENT: Record<
  FinalProjectSection,
  {
    label: string;
    labelVariant: "green" | "blue" | "teal" | "purple" | "orange";
    heading: string;
    intro: string;
    steps: StepBlock[];
    tip?: ReactNode;
  }
> = {
  overview: {
    label: "🏆 Overview",
    labelVariant: "orange",
    heading: "What you will build",
    intro:
      "The Student Grade Manager is the capstone for this course. You will combine variables, collections, control flow, functions, and more into one working program.",
    steps: [
      {
        id: "sample-output",
        title: "Task 1 — Preview the report",
        description:
          "Run this code first to see what your finished program will print.",
        code: `print("=== Class Report ===")
print("Alice: avg 85.0 — PASS (B)")
print("Bob: avg 83.0 — PASS (B)")
print("Top student: Alice (85.0)")`,
        output: `=== Class Report ===
Alice: avg 85.0 — PASS (B)
Bob: avg 83.0 — PASS (B)
Top student: Alice (85.0)`,
        practiceIndex: 0,
      },
      {
        id: "data-shape",
        title: "Task 2 — Data shape",
        description:
          "After task 1, create the students dict and print it. A set holds unique subject names.",
        code: `students = {
    "Alice": [85, 92, 78],
    "Bob": [70, 88, 91],
}
subjects = {"Math", "Science", "English"}
print(students)`,
        output: `{'Alice': [85, 92, 78], 'Bob': [70, 88, 91]}`,
        practiceIndex: 1,
      },
    ],
    tip: (
      <>
        Complete Modules 1–13 first, then build this project step by step. Each
        topic in this module adds one layer to the same program.
      </>
    ),
  },
  data: {
    label: "📦 Step 1",
    labelVariant: "green",
    heading: "Data model — dict, list, set, tuple",
    intro:
      "Start with the core data structures. A dictionary holds students; each value is a list of grades. Use a set for subjects and tuples for fixed records.",
    steps: [
      {
        id: "student-dict",
        title: "Create the student database",
        description:
          "Use a dict with string keys and list values. Lists are mutable so you can append new scores later.",
        code: `students = {}
students["Alice"] = [85, 92]
students["Bob"] = [70, 88]
print(students)`,
        output: `{'Alice': [85, 92], 'Bob': [70, 88]}`,
        practiceIndex: 0,
      },
      {
        id: "subject-set",
        title: "Track subjects with a set",
        description:
          "Sets keep only unique subject names — perfect for the class subject list.",
        code: `subjects = set()
subjects.add("Math")
subjects.add("Science")
subjects.add("Math")  # duplicate ignored
print(subjects)`,
        output: `{'Science', 'Math'}`,
        practiceIndex: 1,
      },
      {
        id: "tuple-record",
        title: "Immutable grade record (tuple)",
        description:
          "Store a (subject, score) pair as a tuple when you need a fixed record.",
        code: `record = ("Math", 85)
subject, score = record
print(subject, score)`,
        output: `Math 85`,
        practiceIndex: 2,
      },
      {
        id: "append-grade",
        title: "Add a grade with append()",
        description:
          "Use list.append() to add a new score to a student's list.",
        code: `students = {"Alice": [85]}
students["Alice"].append(92)
print(students["Alice"])`,
        output: `[85, 92]`,
        practiceIndex: 3,
      },
      {
        id: "data-challenge",
        title: "Challenge — add a new student",
        description:
          "Create Cara with two grades, append a third, and print her full list.",
        code: `students = {"Cara": [55, 48]}
students["Cara"].append(62)
print(students["Cara"])`,
        output: `[55, 48, 62]`,
        practiceIndex: 4,
      },
    ],
  },
  logic: {
    label: "🔀 Step 2",
    labelVariant: "blue",
    heading: "Logic & loops — process every student",
    intro:
      "Use for loops to walk the database, conditionals for pass/fail and letter grades, and comprehensions to filter results.",
    steps: [
      {
        id: "avg-loop",
        title: "Calculate average with a loop",
        description:
          "Sum scores with a for loop, then divide by len(). Use arithmetic operators from Module 3.",
        code: `grades = [85, 92, 78]
total = 0
for g in grades:
    total += g
avg = total / len(grades)
print(avg)`,
        output: `85.0`,
        practiceIndex: 0,
      },
      {
        id: "pass-fail",
        title: "Pass or fail with if/elif/else",
        description:
          "Compare the average to 60 using comparison operators.",
        code: `avg = 75
if avg >= 60:
    status = "PASS"
elif avg >= 50:
    status = "RETAKE"
else:
    status = "FAIL"
print(status)`,
        output: `PASS`,
        practiceIndex: 1,
      },
      {
        id: "dict-loop",
        title: "Loop over dictionary items",
        description:
          "Use .items() to get name and grades for each student.",
        code: `students = {"Alice": [90], "Bob": [55]}
for name, grades in students.items():
    print(name, sum(grades) / len(grades))`,
        output: `Alice 90.0
Bob 55.0`,
        practiceIndex: 2,
      },
      {
        id: "comprehension",
        title: "List comprehension — passing students",
        description:
          "Build a list of names where average >= 60 in one line.",
        code: `averages = {"Alice": 85, "Bob": 55, "Cara": 72}
passing = [n for n, a in averages.items() if a >= 60]
print(passing)`,
        output: `['Alice', 'Cara']`,
        practiceIndex: 3,
      },
      {
        id: "logic-challenge",
        title: "Challenge — elif bands",
        description:
          "Given grades [40, 55, 62], print FAIL, RETAKE, or PASS using elif.",
        code: `grades = [40, 55, 62]
avg = sum(grades) / len(grades)
if avg >= 60:
    print("PASS")
elif avg >= 50:
    print("RETAKE")
else:
    print("FAIL")`,
        output: `PASS`,
        practiceIndex: 4,
      },
    ],
  },
  functions: {
    label: "🧩 Step 3",
    labelVariant: "purple",
    heading: "Functions & formatted report",
    intro:
      "Refactor repeated logic into functions. Use f-strings for clean output and lambda to sort the leaderboard.",
    steps: [
      {
        id: "fn-average",
        title: "average() function",
        description:
          "Encapsulate the sum/len logic in a reusable function with return.",
        code: `def average(scores):
    if len(scores) == 0:
        return 0
    return sum(scores) / len(scores)

print(average([85, 92, 78]))`,
        output: `85.0`,
        practiceIndex: 0,
      },
      {
        id: "fn-letter",
        title: "letter_grade() with elif chain",
        description:
          "Map numeric average to a letter grade A–F.",
        code: `def letter_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    return "F"

print(letter_grade(85))`,
        output: `B`,
        practiceIndex: 1,
      },
      {
        id: "fstring-line",
        title: "Formatted report line",
        description:
          "Use an f-string with :.1f to show one decimal place.",
        code: `name = "Alice"
avg = 85.333
line = f"{name}: avg {avg:.1f} — PASS (B)"
print(line)`,
        output: `Alice: avg 85.3 — PASS (B)`,
        practiceIndex: 2,
      },
      {
        id: "lambda-sort",
        title: "Sort by average with lambda",
        description:
          "sorted() with key=lambda picks the ranking order.",
        code: `ranking = [("Alice", 85), ("Bob", 91), ("Cara", 72)]
ranking.sort(key=lambda x: x[1], reverse=True)
print(ranking[0])`,
        output: `('Bob', 91)`,
        practiceIndex: 3,
      },
      {
        id: "fn-challenge",
        title: "Challenge — status() helper",
        description: "Write status(avg) returning PASS or FAIL. Test with 72.",
        code: `def status(avg):
    return "PASS" if avg >= 60 else "FAIL"

print(status(72))`,
        output: `PASS`,
        practiceIndex: 4,
      },
    ],
  },
  capstone: {
    label: "🎯 Capstone",
    labelVariant: "orange",
    heading: "Complete Student Grade Manager",
    intro:
      "Put it all together. Run this program to see the full project using concepts from every module.",
    steps: [
      {
        id: "full-program",
        title: "Full integrated program",
        description:
          "Copy, run in the IDE, and study how each module's concepts connect.",
        code: `# Student Grade Manager — Final Project
students = {
    "Alice": [85, 92, 78],
    "Bob": [70, 88, 91],
    "Cara": [55, 48, 62],
}
subjects = {"Math", "Science", "English"}

def average(scores):
    return sum(scores) / len(scores) if scores else 0

def letter_grade(avg):
    if avg >= 90: return "A"
    if avg >= 80: return "B"
    if avg >= 70: return "C"
    if avg >= 60: return "D"
    return "F"

def status(avg):
    return "PASS" if avg >= 60 else "FAIL"

print("=== Class Report ===")
averages = {}
for name, grades in students.items():
    avg = average(grades)
    averages[name] = avg
    print(f"{name}: avg {avg:.1f} — {status(avg)} ({letter_grade(avg)})")

top = max(averages.items(), key=lambda x: x[1])
print(f"Top student: {top[0]} ({top[1]:.1f})")

passing = [n for n, a in averages.items() if a >= 60]
print(f"Passing ({len(passing)}): {passing}")
print(f"Subjects: {subjects}")`,
        output: `=== Class Report ===
Alice: avg 85.0 — PASS (B)
Bob: avg 83.0 — PASS (B)
Cara: avg 55.0 — FAIL (F)
Top student: Alice (85.0)
Passing (2): ['Alice', 'Bob']
Subjects: {'English', 'Math', 'Science'}`,
        practiceIndex: 0,
      },
      {
        id: "extend-project",
        title: "Extend it yourself",
        description:
          "Add a new student, a fourth score, or a dict comprehension for letter counts.",
        code: `# Try: add student
students["Dan"] = [88, 76, 94]
subjects.add("History")

# Dict comprehension — count per letter grade
grades_count = {
    g: sum(1 for a in averages.values() if letter_grade(a) == g)
    for g in "ABCDF"
}
print(grades_count)`,
        output: `{'A': 1, 'B': 1, 'C': 0, 'D': 0, 'F': 1}`,
        practiceIndex: 1,
      },
      {
        id: "capstone-challenge",
        title: "Challenge — grade histogram",
        description:
          "Count how many students earn each letter grade with a dict comprehension.",
        code: `def letter_grade(avg):
    if avg >= 90: return "A"
    if avg >= 80: return "B"
    if avg >= 70: return "C"
    if avg >= 60: return "D"
    return "F"

averages = {"Alice": 85, "Bob": 55, "Cara": 92}
counts = {g: sum(1 for a in averages.values() if letter_grade(a) == g) for g in "ABCDF"}
print(counts)`,
        output: `{'A': 1, 'B': 1, 'C': 0, 'D': 0, 'F': 1}`,
        practiceIndex: 2,
      },
    ],
    tip: (
      <>
        Congratulations — you have used variables, all major collections,
        operators, conditionals, loops, comprehensions, functions, and lambda in
        one real program. This is the foundation for data science scripts in
        Python.
      </>
    ),
  },
};
