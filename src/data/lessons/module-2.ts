import type { TopicLesson } from "@/lib/types";

export const module2Lessons: Record<string, TopicLesson> = {
  "m2-t1": {
    topicId: "m2-t1",
    intro:
      "Programs show things with print() and ask for things with input() — that's how your code talks to people.",
    blocks: [
      {
        type: "infographic",
        infographic: "input-output",
      },
      {
        type: "practice",
        practicePrompt:
          "Print your favorite food. Then use input() to ask your name and greet yourself.",
        starterCode:
          'print("My favorite food is pizza")\nname = input("Your name? ")\nprint("Hello", name)',
      },
    ],
    keyTakeaways: [
      "print() shows output on the screen.",
      "input() reads text from the user (always as a string).",
      "You can print words, numbers, and several items separated by commas.",
    ],
  },
  "m2-t2": {
    topicId: "m2-t2",
    intro:
      "Comments are notes for humans — Python ignores them, but they help you remember what your code does.",
    blocks: [
      {
        type: "infographic",
        infographic: "comments",
      },
      {
        type: "practice",
        practicePrompt:
          "Add a comment above each print line explaining what it does.",
        starterCode:
          'print("Lesson 1")\nprint("Lesson 2")\nprint("Done!")',
      },
    ],
    keyTakeaways: [
      "# starts a single-line comment.",
      "Comments are for humans; Python ignores them.",
      "Use comments to explain tricky parts of your code.",
    ],
  },
  "m2-t3": {
    topicId: "m2-t3",
    intro:
      "A variable is like a labeled box — store a value under a name, then use that name to get it back.",
    blocks: [
      {
        type: "infographic",
        infographic: "variables",
      },
      {
        type: "practice",
        practicePrompt:
          "Create variables for your city and a number you like. Print both. Then change the number and print again.",
        starterCode:
          'city = "London"\nfavorite_number = 7\nprint(city, favorite_number)\n\nfavorite_number = 99\nprint("Updated number:", favorite_number)',
      },
    ],
    keyTakeaways: [
      "Variables store values under a name.",
      "Use = to assign or update a value.",
      "Pick clear names like total_score, not x.",
    ],
  },
  "m2-t4": {
    topicId: "m2-t4",
    intro:
      "Every value in Python has a type — int, float, str, and bool are the four you'll use first.",
    blocks: [
      {
        type: "infographic",
        infographic: "data-types",
      },
      {
        type: "practice",
        practicePrompt:
          "Create one variable of each type (int, float, str, bool). Print each value and its type.",
        starterCode:
          'count = 100\nrate = 0.05\nlabel = "sales"\nactive = False\n\nprint(count, type(count))\nprint(rate, type(rate))\nprint(label, type(label))\nprint(active, type(active))',
      },
    ],
    keyTakeaways: [
      "int = whole numbers, float = decimals, str = text, bool = True/False.",
      "type(x) shows the type of x.",
      "Choosing the right type helps avoid bugs later.",
    ],
  },
  "m2-t5": {
    topicId: "m2-t5",
    intro:
      "Typecasting converts a value from one type to another — like turning text \"42\" into the number 42.",
    blocks: [
      {
        type: "infographic",
        infographic: "typecasting",
      },
      {
        type: "practice",
        practiceLabel: "Casting basics",
        ideOnly: true,
        practicePrompt: "Run each line and check the output in the console.",
        starterCode:
          '# str → int: needed before doing math\ntext_age = "21"\nage      = int(text_age)\nprint(age + 1)        # 22\n\n# int → str: needed to join with text\nscore = 100\nprint("Score: " + str(score))  # "Score: 100"\n\n# float → int: drops the decimal\nprice = 9.99\nprint(int(price))      # 9  (not rounded!)',
      },
      {
        type: "practice",
        practiceLabel: "Valid vs invalid",
        ideOnly: true,
        practicePrompt:
          "Run line by line. Comment out lines that raise ValueError to continue.",
        starterCode:
          'int("hello")   # ValueError — "hello" is not a number\nint("21")      # fine — looks like a number\nint("21.5")    # ValueError — use float() first\nfloat("21.5")  # fine',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Convert the string variables to numbers, add them, and print the result.",
        starterCode:
          'a = "10"\nb = "20"\n\n# Convert a and b to integers, then print their sum\nsum_ab = int(a) + int(b)\nprint(sum_ab)',
      },
    ],
    keyTakeaways: [
      "Use int(), float(), str(), bool() to convert types.",
      "input() gives strings — cast before math.",
      "Invalid conversions raise errors; use sensible input.",
    ],
  },
};
