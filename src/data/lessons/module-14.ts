import type { TopicLesson } from "@/lib/types";

export const module14Lessons: Record<string, TopicLesson> = {
  "m14-t1": {
    topicId: "m14-t1",
    intro:
      "Welcome to the Final Project. You will build a Student Grade Manager that uses every major Python concept from Modules 1–13.",
    blocks: [
      { type: "infographic", infographic: "final-project-overview" },
      {
        type: "practice",
        practiceLabel: "Preview output",
        ideOnly: true,
        practicePrompt:
          "Run the code to see what the finished class report looks like.",
        starterCode:
          'print("=== Class Report ===")\nprint("Alice: avg 85.0 — PASS (B)")\nprint("Bob: avg 83.0 — PASS (B)")\nprint("Top student: Alice (85.0)")',
      },
      {
        type: "practice",
        practiceLabel: "Data shape",
        ideOnly: true,
        practicePrompt:
          "Create the students dict and print it.",
        starterCode:
          'students = {"Alice": [85, 92], "Bob": [70, 88]}\nprint(students)',
      },
    ],
    keyTakeaways: [
      "The capstone combines all 13 modules into one Student Grade Manager.",
      "Core data: dict of names → list of scores, plus a set of subjects.",
      "Build in four steps: data → logic → functions → full capstone.",
    ],
  },
  "m14-t2": {
    topicId: "m14-t2",
    intro:
      "Step 1 sets up the data layer using dictionaries, lists, sets, and tuples from Modules 5–8.",
    blocks: [
      { type: "infographic", infographic: "final-project-data" },
      {
        type: "practice",
        practiceLabel: "Student dict",
        ideOnly: true,
        practicePrompt: "Create students dict with Alice and Bob, then print.",
        starterCode:
          'students = {}\nstudents["Alice"] = [85, 92]\nstudents["Bob"] = [70, 88]\nprint(students)',
      },
      {
        type: "practice",
        practiceLabel: "Subject set",
        ideOnly: true,
        practicePrompt: "Build a set of subjects and print it.",
        starterCode:
          'subjects = set()\nsubjects.add("Math")\nsubjects.add("Science")\nsubjects.add("Math")\nprint(subjects)',
      },
      {
        type: "practice",
        practiceLabel: "Tuple record",
        ideOnly: true,
        practicePrompt: "Unpack a (subject, score) tuple and print both values.",
        starterCode:
          'record = ("Math", 85)\nsubject, score = record\nprint(subject, score)',
      },
      {
        type: "practice",
        practiceLabel: "Append grade",
        ideOnly: true,
        practicePrompt: "Append 92 to Alice's grade list.",
        starterCode:
          'students = {"Alice": [85]}\nstudents["Alice"].append(92)\nprint(students["Alice"])',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Create students with Cara: [55, 48]. Add score 62 with append. Print Cara's list.",
        starterCode:
          'students = {"Cara": [55, 48]}\nstudents["Cara"].append(62)\nprint(students["Cara"])',
      },
    ],
    keyTakeaways: [
      "dict stores student name → list of grades.",
      "set() tracks unique subject names.",
      "tuple packs immutable (subject, score) records.",
    ],
  },
  "m14-t3": {
    topicId: "m14-t3",
    intro:
      "Step 2 adds processing: loops, conditionals, operators, and comprehensions from Modules 3, 9–11.",
    blocks: [
      { type: "infographic", infographic: "final-project-logic" },
      {
        type: "practice",
        practiceLabel: "Average loop",
        ideOnly: true,
        practicePrompt: "Calculate average of [85, 92, 78] using a for loop.",
        starterCode:
          "grades = [85, 92, 78]\ntotal = 0\nfor g in grades:\n    total += g\nprint(total / len(grades))",
      },
      {
        type: "practice",
        practiceLabel: "Pass / fail",
        ideOnly: true,
        practicePrompt: "Set status to PASS if avg >= 60 else FAIL. avg = 75.",
        starterCode:
          'avg = 75\nif avg >= 60:\n    status = "PASS"\nelse:\n    status = "FAIL"\nprint(status)',
      },
      {
        type: "practice",
        practiceLabel: "Dict loop",
        ideOnly: true,
        practicePrompt: "Loop students.items() and print each name and average.",
        starterCode:
          'students = {"Alice": [90], "Bob": [60]}\nfor name, grades in students.items():\n    print(name, sum(grades) / len(grades))',
      },
      {
        type: "practice",
        practiceLabel: "Comprehension",
        ideOnly: true,
        practicePrompt:
          "Use a list comprehension to get names with average >= 60.",
        starterCode:
          'averages = {"Alice": 85, "Bob": 55, "Cara": 72}\npassing = [n for n, a in averages.items() if a >= 60]\nprint(passing)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        ideOnly: true,
        practicePrompt:
          "Given grades = [40, 55, 62], use elif to print FAIL, RETAKE, or PASS (60+ pass, 50+ retake).",
        starterCode:
          "grades = [40, 55, 62]\navg = sum(grades) / len(grades)\nif avg >= 60:\n    print('PASS')\nelif avg >= 50:\n    print('RETAKE')\nelse:\n    print('FAIL')",
      },
    ],
    keyTakeaways: [
      "for loops sum grades and walk the student dict.",
      "if/elif/else assigns pass, retake, or fail.",
      "List comprehensions filter passing students in one line.",
    ],
  },
  "m14-t4": {
    topicId: "m14-t4",
    intro:
      "Step 3 wraps logic in functions and formats output with f-strings and lambda sorting.",
    blocks: [
      { type: "infographic", infographic: "final-project-functions" },
      {
        type: "practice",
        practiceLabel: "average()",
        ideOnly: true,
        practicePrompt: "Write average(scores) that returns sum/len.",
        starterCode:
          "def average(scores):\n    return sum(scores) / len(scores)\n\nprint(average([85, 92, 78]))",
      },
      {
        type: "practice",
        practiceLabel: "letter_grade()",
        ideOnly: true,
        practicePrompt: "Write letter_grade(avg) returning A–F.",
        starterCode:
          'def letter_grade(avg):\n    if avg >= 90: return "A"\n    if avg >= 80: return "B"\n    if avg >= 70: return "C"\n    if avg >= 60: return "D"\n    return "F"\n\nprint(letter_grade(85))',
      },
      {
        type: "practice",
        practiceLabel: "f-string report",
        ideOnly: true,
        practicePrompt: 'Print f"{name}: avg {avg:.1f} — PASS (B)"',
        starterCode:
          'name = "Alice"\navg = 85.333\nprint(f"{name}: avg {avg:.1f} — PASS (B)")',
      },
      {
        type: "practice",
        practiceLabel: "Lambda sort",
        ideOnly: true,
        practicePrompt: "Sort ranking by score descending with lambda.",
        starterCode:
          'ranking = [("Alice", 85), ("Bob", 91)]\nranking.sort(key=lambda x: x[1], reverse=True)\nprint(ranking[0])',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        ideOnly: true,
        practicePrompt:
          "Define status(avg) returning PASS or FAIL. Print status(72).",
        starterCode:
          'def status(avg):\n    return "PASS" if avg >= 60 else "FAIL"\n\nprint(status(72))',
      },
    ],
    keyTakeaways: [
      "Functions keep average, letter_grade, and status reusable.",
      "f-strings format report lines with fixed decimals.",
      "lambda sorts the leaderboard by average.",
    ],
  },
  "m14-t5": {
    topicId: "m14-t5",
    intro:
      "Assemble the complete Student Grade Manager. Run it, study it, then extend it with your own features.",
    blocks: [
      { type: "infographic", infographic: "final-project-capstone" },
      {
        type: "practice",
        practiceLabel: "Full program",
        practicePrompt:
          "Run the complete Student Grade Manager and read the output.",
        starterCode:
          'students = {"Alice": [85, 92, 78], "Bob": [70, 88, 91], "Cara": [55, 48, 62]}\nsubjects = {"Math", "Science", "English"}\n\ndef average(scores):\n    return sum(scores) / len(scores) if scores else 0\n\ndef letter_grade(avg):\n    if avg >= 90: return "A"\n    if avg >= 80: return "B"\n    if avg >= 70: return "C"\n    if avg >= 60: return "D"\n    return "F"\n\ndef status(avg):\n    return "PASS" if avg >= 60 else "FAIL"\n\nprint("=== Class Report ===")\naverages = {}\nfor name, grades in students.items():\n    avg = average(grades)\n    averages[name] = avg\n    print(f"{name}: avg {avg:.1f} — {status(avg)} ({letter_grade(avg)})")\n\ntop = max(averages.items(), key=lambda x: x[1])\nprint(f"Top student: {top[0]} ({top[1]:.1f})")\npassing = [n for n, a in averages.items() if a >= 60]\nprint(f"Passing ({len(passing)}): {passing}")\nprint(f"Subjects: {subjects}")',
      },
      {
        type: "practice",
        practiceLabel: "Extend",
        ideOnly: true,
        practicePrompt:
          "Add student Dan with grades [88, 76, 94] and print the updated dict.",
        starterCode:
          'students = {"Alice": [85], "Bob": [70]}\nstudents["Dan"] = [88, 76, 94]\nprint(students)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Build a dict comprehension counting how many students get each letter grade (A–F) from averages = {\"Alice\": 85, \"Bob\": 55, \"Cara\": 92}.",
        starterCode:
          'def letter_grade(avg):\n    if avg >= 90: return "A"\n    if avg >= 80: return "B"\n    if avg >= 70: return "C"\n    if avg >= 60: return "D"\n    return "F"\n\naverages = {"Alice": 85, "Bob": 55, "Cara": 92}\ncounts = {g: sum(1 for a in averages.values() if letter_grade(a) == g) for g in "ABCDF"}\nprint(counts)',
      },
    ],
    keyTakeaways: [
      "The capstone uses dict, list, set, loops, conditionals, functions, f-strings, comprehensions, and lambda.",
      "You can extend the project with new students, subjects, or reports.",
      "This project pattern mirrors real data-cleaning scripts in data science.",
    ],
  },
};
