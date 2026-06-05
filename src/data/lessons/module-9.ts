import type { TopicLesson } from "@/lib/types";

export const module9Lessons: Record<string, TopicLesson> = {
  "m9-t1": {
    topicId: "m9-t1",
    intro:
      "Conditional statements let Python choose whether to run a block of code. The if statement runs code only when a condition evaluates to True.",
    blocks: [
      { type: "heading", content: "The if statement" },
      {
        type: "paragraph",
        content:
          "Write if, then a condition, then a colon. The indented block below runs only when the condition is True.",
      },
      {
        type: "code",
        code:
          'age = 18\nif age >= 18:\n    print("You can vote.")\n\nscore = 55\nif score >= 60:\n    print("Pass")  # not printed',
      },
      {
        type: "visual",
        diagram: {
          title: "if condition is True → run block",
          variant: "flow",
          nodes: [
            { id: "c", label: "Condition", sublabel: "age >= 18" },
            { id: "t", label: "True?", sublabel: "Yes" },
            { id: "run", label: "Run block", sublabel: "print(...)" },
          ],
          arrows: [
            { from: "c", to: "t" },
            { from: "t", to: "run" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Indentation (usually 4 spaces) defines the block. All lines in the block must align.",
      },
      {
        type: "practice",
        practicePrompt:
          "Set temperature = 30. If it is above 25, print \"Hot day\". Run with different values.",
        starterCode:
          'temperature = 30\nif temperature > 25:\n    print("Hot day")',
      },
    ],
    keyTakeaways: [
      "if condition: followed by an indented block.",
      "The block runs only when the condition is True.",
      "Conditions often use comparison operators (==, <, >=).",
    ],
  },
  "m9-t2": {
    topicId: "m9-t2",
    intro:
      "When you need two opposite outcomes, use if-else. One block runs if the condition is True; the other runs when it is False.",
    blocks: [
      {
        type: "code",
        code:
          'score = 72\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
      },
      {
        type: "visual",
        diagram: {
          title: "Two branches",
          variant: "compare",
          nodes: [
            { id: "if", label: "if True", sublabel: "First block" },
            { id: "else", label: "else", sublabel: "Otherwise block" },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "else must align with if (same indentation level). It has no condition — it catches all cases where if was False.",
      },
      {
        type: "practice",
        practicePrompt:
          "Set number = 7. Print \"Even\" if divisible by 2, else print \"Odd\". Hint: number % 2 == 0",
        starterCode:
          'number = 7\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
      },
    ],
    keyTakeaways: [
      "if-else provides exactly two paths.",
      "else runs when the if condition is False.",
      "Only one of the two blocks executes.",
    ],
  },
  "m9-t3": {
    topicId: "m9-t3",
    intro:
      "For three or more possibilities, chain elif (else if) between if and else. Python checks conditions top to bottom and uses the first match.",
    blocks: [
      {
        type: "code",
        code:
          'grade = 85\nif grade >= 90:\n    print("A")\nelif grade >= 80:\n    print("B")\nelif grade >= 70:\n    print("C")\nelse:\n    print("F")',
      },
      {
        type: "visual",
        diagram: {
          title: "Check top to bottom — first match wins",
          variant: "stack",
          nodes: [
            { id: "1", label: "if >= 90", sublabel: "A" },
            { id: "2", label: "elif >= 80", sublabel: "B" },
            { id: "3", label: "elif >= 70", sublabel: "C" },
            { id: "4", label: "else", sublabel: "F" },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "Order matters: put more specific or higher thresholds first when ranges overlap.",
      },
      {
        type: "code",
        code:
          'role = "admin"\nif role == "admin":\n    print("Full access")\nelif role == "editor":\n    print("Edit access")\nelse:\n    print("View only")',
      },
      {
        type: "practice",
        practicePrompt:
          "Set temp = 15. Print \"Freezing\" if below 0, \"Cold\" if below 15, \"Warm\" if below 30, else \"Hot\".",
        starterCode:
          'temp = 15\nif temp < 0:\n    print("Freezing")\nelif temp < 15:\n    print("Cold")\nelif temp < 30:\n    print("Warm")\nelse:\n    print("Hot")',
      },
    ],
    keyTakeaways: [
      "elif adds more conditions between if and else.",
      "Only the first True branch runs.",
      "else is optional but handles the remaining cases.",
    ],
  },
};
