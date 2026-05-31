import type { TopicLesson } from "@/lib/types";

export const module2Lessons: Record<string, TopicLesson> = {
  "m2-t1": {
    topicId: "m2-t1",
    intro:
      "Output means showing something on the screen. Input means asking the user to type something. These two ideas are how your programs talk to people.",
    blocks: [
      {
        type: "heading",
        content: "Output with print()",
      },
      {
        type: "paragraph",
        content:
          "The print() function displays text (or numbers) in the console. Whatever you put inside the parentheses is shown as output.",
      },
      {
        type: "code",
        code: 'print("Hello, world!")\nprint(42)\nprint("I love Python", "for data science")',
      },
      {
        type: "visual",
        diagram: {
          title: "How print() works",
          variant: "flow",
          nodes: [
            { id: "code", label: "print(...)", sublabel: "Your code" },
            { id: "py", label: "Python", sublabel: "Runs it" },
            { id: "out", label: "Console", sublabel: "Text appears" },
          ],
          arrows: [
            { from: "code", to: "py" },
            { from: "py", to: "out" },
          ],
        },
      },
      {
        type: "heading",
        content: "Input with input()",
      },
      {
        type: "paragraph",
        content:
          "input() waits for the user to type something and press Enter. It always gives you back a string (text), even if the user types numbers.",
      },
      {
        type: "code",
        code: 'name = input("What is your name? ")\nprint("Nice to meet you,", name)',
      },
      {
        type: "tip",
        content:
          "In the browser IDE, input() may show a small popup box. On your own computer it works in the terminal the same way.",
      },
      {
        type: "practice",
        practicePrompt:
          "Print your favorite food. Then (optional) use input() to ask your name and greet yourself.",
        starterCode:
          'print("My favorite food is pizza")\n\n# Uncomment below to try input:\n# name = input("Your name? ")\n# print("Hello", name)',
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
      "Comments are notes for humans. Python ignores them — they help you remember what your code does.",
    blocks: [
      {
        type: "heading",
        content: "Single-line comments",
      },
      {
        type: "paragraph",
        content: "Start a comment with the # symbol. Everything after # on that line is ignored.",
      },
      {
        type: "code",
        code: '# This is a comment — Python skips it\nprint("This runs")  # comment at end of line',
      },
      {
        type: "heading",
        content: "Multi-line comments (doc style)",
      },
      {
        type: "paragraph",
        content:
          "For longer notes, you can use triple quotes \"\"\" ... \"\"\" as a string that you don't assign to anything — Python still runs fine.",
      },
      {
        type: "code",
        code: '"""\nThis explains the program below.\nWe print a welcome message.\n"""\nprint("Welcome!")',
      },
      {
        type: "visual",
        diagram: {
          title: "What Python sees",
          variant: "compare",
          nodes: [
            { id: "you", label: "You write", sublabel: "Code + comments" },
            { id: "run", label: "Python runs", sublabel: "Only real code" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Good comments explain WHY, not obvious things. Example: # Convert age to days for chart",
      },
      {
        type: "practice",
        practicePrompt: "Add a comment above each print line explaining what it does.",
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
      "A variable is like a labeled box. You put a value inside, and later you can use the label to get that value back.",
    blocks: [
      {
        type: "heading",
        content: "Creating variables",
      },
      {
        type: "paragraph",
        content:
          "Use a name, then = , then a value. The name should describe what you store (e.g. age, name, score).",
      },
      {
        type: "code",
        code: 'name = "Asha"\nage = 20\nprint(name)\nprint(age)',
      },
      {
        type: "visual",
        diagram: {
          title: "Variables are labeled boxes",
          variant: "stack",
          nodes: [
            { id: "n", label: "name", sublabel: '"Asha"' },
            { id: "a", label: "age", sublabel: "20" },
          ],
        },
      },
      {
        type: "heading",
        content: "Changing a variable",
      },
      {
        type: "paragraph",
        content:
          "You can put a new value in the same box anytime. The old value is replaced.",
      },
      {
        type: "code",
        code: "score = 10\nprint(score)\nscore = 15  # updated!\nprint(score)",
      },
      {
        type: "list",
        items: [
          "Names use letters, numbers, underscore — no spaces.",
          "Start with a letter or underscore (not a number).",
          "Python is case-sensitive: Age and age are different.",
        ],
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
      "Every value in Python has a type — it tells Python what kind of data you have. This matters a lot for data science later.",
    blocks: [
      {
        type: "heading",
        content: "The four types you'll use first",
      },
      {
        type: "visual",
        diagram: {
          title: "Common data types",
          variant: "stack",
          nodes: [
            { id: "int", label: "int", sublabel: "Whole numbers: 7, -3, 0" },
            { id: "float", label: "float", sublabel: "Decimals: 3.14, 2.0" },
            { id: "str", label: "str", sublabel: 'Text: "hello"' },
            { id: "bool", label: "bool", sublabel: "True or False" },
          ],
        },
      },
      {
        type: "code",
        code:
          'age = 25           # int\nprice = 9.99       # float\nname = "Sam"       # str\nis_student = True  # bool\n\nprint(type(age), type(price), type(name), type(is_student))',
      },
      {
        type: "heading",
        content: "Checking types with type()",
      },
      {
        type: "paragraph",
        content:
          "type(value) tells you what kind of value it is. Useful when debugging or learning.",
      },
      {
        type: "tip",
        content:
          "In data science, you'll mostly work with numbers (int/float) and text (str) in tables — Pandas handles types for you later.",
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
      "Typecasting means converting a value from one type to another — like turning text \"42\" into the number 42.",
    blocks: [
      {
        type: "heading",
        content: "Why cast types?",
      },
      {
        type: "paragraph",
        content:
          "input() always returns a string. If you want to do math on what the user typed, you must convert to int or float first.",
      },
      {
        type: "visual",
        diagram: {
          title: "String → number for math",
          variant: "flow",
          nodes: [
            { id: "in", label: '"25"', sublabel: "string from input" },
            { id: "cast", label: "int()", sublabel: "convert" },
            { id: "num", label: "25", sublabel: "number" },
          ],
          arrows: [
            { from: "in", to: "cast" },
            { from: "cast", to: "num" },
          ],
        },
      },
      {
        type: "heading",
        content: "Common conversion functions",
      },
      {
        type: "list",
        items: [
          "int(x) — whole number",
          "float(x) — decimal number",
          "str(x) — text",
          "bool(x) — True or False",
        ],
      },
      {
        type: "code",
        code:
          'text_age = "21"\nage = int(text_age)\nprint(age + 1)  # 22\n\nprice = 9.99\nprint(str(price))  # "9.99" as text',
      },
      {
        type: "tip",
        content:
          'int("hello") will cause an error — you can only cast strings that look like numbers.',
      },
      {
        type: "practice",
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
