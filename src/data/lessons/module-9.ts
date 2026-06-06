import type { TopicLesson } from "@/lib/types";

export const module9Lessons: Record<string, TopicLesson> = {
  "m9-t1": {
    topicId: "m9-t1",
    intro:
      "Conditional statements let Python choose whether to run a block of code. The if statement runs code only when a condition evaluates to True.",
    blocks: [
      {
        type: "infographic",
        infographic: "if-statement",
      },
      {
        type: "practice",
        practiceLabel: "Vote",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how an if block runs when the condition is True.",
        starterCode:
          'age = 18\n\nif age >= 18:\n    print("You can vote.")',
      },
      {
        type: "practice",
        practiceLabel: "Exam",
        ideOnly: true,
        practicePrompt:
          "Run the code and notice no output when the condition is False.",
        starterCode:
          'score = 55\n\nif score >= 60:\n    print("Pass")',
      },
      {
        type: "practice",
        practiceLabel: "Indent",
        ideOnly: true,
        practicePrompt:
          "Run the code and see both statements in the indented block execute.",
        starterCode:
          'age = 20\n\nif age >= 18:\n    print("Adult")\n    print("Eligible")',
      },
      {
        type: "practice",
        practiceLabel: "Temperature",
        ideOnly: true,
        practicePrompt:
          "Run the code and print a message when temperature is above 30.",
        starterCode:
          'temperature = 35\n\nif temperature > 30:\n    print("It\'s a hot day.")',
      },
      {
        type: "practice",
        practiceLabel: "Marks",
        ideOnly: true,
        practicePrompt:
          "Run the code and print Pass when marks are at least 50.",
        starterCode:
          'marks = 75\n\nif marks >= 50:\n    print("Pass")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Set temperature = 30. If it is above 25, print "Hot day". Try different values.',
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
        type: "infographic",
        infographic: "if-else",
      },
      {
        type: "practice",
        practiceLabel: "Pass",
        ideOnly: true,
        practicePrompt:
          "Run the code and see the if block run when score is 72.",
        starterCode:
          'score = 72\n\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
      },
      {
        type: "practice",
        practiceLabel: "Fail",
        ideOnly: true,
        practicePrompt:
          "Run the code and see the else block run when score is 45.",
        starterCode:
          'score = 45\n\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
      },
      {
        type: "practice",
        practiceLabel: "Age",
        ideOnly: true,
        practicePrompt:
          "Run the code and print Adult or Minor based on age.",
        starterCode:
          'age = 15\n\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
      },
      {
        type: "practice",
        practiceLabel: "Temperature",
        ideOnly: true,
        practicePrompt:
          "Run the code and print Hot or Cool based on temperature.",
        starterCode:
          'temperature = 25\n\nif temperature > 30:\n    print("Hot")\nelse:\n    print("Cool")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Set number = 7. Print "Even" if divisible by 2, else print "Odd". Hint: number % 2 == 0',
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
        type: "infographic",
        infographic: "if-elif-else",
      },
      {
        type: "practice",
        practiceLabel: "Grade",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how grade 85 prints B using elif.",
        starterCode:
          'grade = 85\n\nif grade >= 90:\n    print("A")\nelif grade >= 80:\n    print("B")\nelif grade >= 70:\n    print("C")\nelse:\n    print("F")',
      },
      {
        type: "practice",
        practiceLabel: "Role",
        ideOnly: true,
        practicePrompt:
          "Run the code and print access level based on user role.",
        starterCode:
          'role = "admin"\n\nif role == "admin":\n    print("Full access")\nelif role == "editor":\n    print("Edit access")\nelse:\n    print("View only")',
      },
      {
        type: "practice",
        practiceLabel: "Signal",
        ideOnly: true,
        practicePrompt:
          "Run the code and print the action for a yellow traffic signal.",
        starterCode:
          'signal = "yellow"\n\nif signal == "green":\n    print("Go")\nelif signal == "yellow":\n    print("Slow Down")\nelse:\n    print("Stop")',
      },
      {
        type: "practice",
        practiceLabel: "Marks",
        ideOnly: true,
        practicePrompt:
          "Run the code and classify marks using if-elif-else.",
        starterCode:
          'marks = 75\n\nif marks >= 90:\n    print("Excellent")\nelif marks >= 75:\n    print("Good")\nelif marks >= 50:\n    print("Pass")\nelse:\n    print("Fail")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Set temp = 15. Print "Freezing" if below 0, "Cold" if below 15, "Warm" if below 30, else "Hot".',
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
