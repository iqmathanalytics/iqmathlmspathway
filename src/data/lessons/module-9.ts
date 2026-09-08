import type { TopicLesson } from "@/lib/types";

export const module9Lessons: Record<string, TopicLesson> = {
  "m9-t1": {
    topicId: "m9-t1",
    intro: "An if statement runs a block of code only when a condition is True.",
    blocks: [
      {
        type: "infographic",
        infographic: "if-statement",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`if` executes a block only when its condition evaluates to True." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "age = 20\nif age >= 18:\n    print(\"You are an adult.\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `marks = 75`, print `\"Pass\"` if marks are 40 or above.",
        starterCode: "# TODO: Check if a number is positive and print a message if so",
      },
    ],
    keyTakeaways: [
      "Indentation defines the if body in Python.",
      "The condition must evaluate to a truthy or falsy value.",
      "Only the True branch runs; otherwise nothing happens.",
    ],
  },
  "m9-t2": {
    topicId: "m9-t2",
    intro: "if-else chooses between two paths: one when the condition is true, one when it is false.",
    blocks: [
      {
        type: "infographic",
        infographic: "if-else",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`else` provides an alternative block that runs when the `if` condition is False." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "num = 7\nif num % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a number, print `\"Even\"` if divisible by 2, otherwise `\"Odd\"`.",
        starterCode: "# TODO: Check if a number is even or odd and print accordingly",
      },
    ],
    keyTakeaways: [
      "else covers the False path.",
      "Exactly one of the two branches runs.",
      "Keep conditions simple and readable.",
    ],
  },
  "m9-t3": {
    topicId: "m9-t3",
    intro: "if-elif-else chains multiple conditions so you can pick among several paths.",
    blocks: [
      {
        type: "infographic",
        infographic: "if-elif-else",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`elif` checks additional conditions in sequence when prior ones are False; `else` catches all remaining cases." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 75:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"F\"\nprint(grade)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `temperature = 15`, print `\"Cold\"` if below 10, `\"Mild\"` if 10–25, `\"Hot\"` if above 25.",
        starterCode: "# TODO: Grade a score: 90+ =A, 75-89=B, 60-74=C, below60=F",
      },
    ],
    keyTakeaways: [
      "elif adds more conditions in order.",
      "Python checks branches top to bottom and stops at the first match.",
      "else is optional for a final fallback.",
    ],
  },
};
