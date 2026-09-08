import type { TopicLesson } from "@/lib/types";

export const module2Lessons: Record<string, TopicLesson> = {
  "m2-t1": {
    topicId: "m2-t1",
    intro: "Programs talk to users with print() for output and input() for reading typed text.",
    blocks: [
      {
        type: "infographic",
        infographic: "input-output",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`print()` displays output to the console. `input()` pauses the program and reads text typed by the user (always returns a string). These two functions let programs interact with people." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "name = input(\"Enter your name: \")\nprint(\"Hello,\", name)\nage = int(input(\"Enter your age: \"))\nprint(\"Next year you'll be\", age + 1)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a program that asks the user for two numbers and prints their sum.",
        starterCode: "# TODO: Ask the user for a city and print \"Welcome to <city>!\"",
      },
    ],
    keyTakeaways: [
      "print() sends output to the console.",
      "input() always returns a string — cast if you need a number.",
      "Interactive I/O is the foundation of user-facing scripts.",
    ],
  },
  "m2-t2": {
    topicId: "m2-t2",
    intro: "Comments document why code exists. Python ignores them when the program runs.",
    blocks: [
      {
        type: "infographic",
        infographic: "comments",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Comments are notes in code ignored by the interpreter, used to explain logic. Single-line comments start with `#`. Multi-line comments use triple quotes `''' ... '''` as docstrings (technically strings, but commonly used as comments/documentation)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "# This calculates area of a rectangle\nlength = 5\nwidth = 3\narea = length * width  # multiply length by width\nprint(area)\n\n'''\nThis is a multi-line comment\nexplaining a more complex block of code.\n'''" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a small script with at least 3 comments explaining what each part does, calculating the perimeter of a rectangle.",
        starterCode: "# TODO: Add comments explaining each line of a BMI calculator\nweight = 70\nheight = 1.75\nbmi = weight / (height ** 2)\nprint(bmi)",
      },
    ],
    keyTakeaways: [
      "Use # for single-line comments.",
      "Triple quotes can hold multi-line documentation strings.",
      "Comments explain why, not just what.",
    ],
  },
  "m2-t3": {
    topicId: "m2-t3",
    intro: "Variables are names that hold values so you can reuse and update data in your programs.",
    blocks: [
      {
        type: "infographic",
        infographic: "variables",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "A variable is a named reference to a value stored in memory. Python variables are dynamically typed — you don't declare a type; it's inferred from the assigned value. Naming rules: must start with a letter/underscore, case-sensitive, no reserved keywords." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "name = \"Asha\"\nage = 28\nheight = 5.6\nis_student = False\n\nprint(name, age, height, is_student)\nname = \"Rohan\"  # variables can be reassigned\nprint(name)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create variables `price = 50` and `quantity = 3`, then print the total cost.",
        starterCode: "# TODO: Create variables for a product's name, price, and quantity, then print total cost",
      },
    ],
    keyTakeaways: [
      "Assign with =; names should be clear and snake_case.",
      "Variables can hold any type and can be reassigned.",
      "Python is dynamically typed — type follows the value.",
    ],
  },
  "m2-t4": {
    topicId: "m2-t4",
    intro: "Python has built-in types — int, float, str, bool, and more — that shape what you can do with a value.",
    blocks: [
      {
        type: "infographic",
        infographic: "data-types",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Python's core built-in types: `int` (whole numbers), `float` (decimals), `str` (text), `bool` (True/False), plus collections `list`, `tuple`, `set`, `dict` (covered in later modules). Use `type()` to check a variable's type." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "a = 10          # int\nb = 3.14        # float\nc = \"hello\"     # str\nd = True        # bool\n\nprint(type(a), type(b), type(c), type(d))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `x = 7`, `y = 7.0`, `z = \"7\"`, print the type of each variable.",
        starterCode: "# TODO: Create one variable of each basic type and print their types",
      },
    ],
    keyTakeaways: [
      "Common types: int, float, str, bool, list, dict, and None.",
      "type() tells you what kind of value you have.",
      "Choosing the right type prevents bugs later.",
    ],
  },
  "m2-t5": {
    topicId: "m2-t5",
    intro: "Typecasting converts a value from one type to another, such as turning input text into a number.",
    blocks: [
      {
        type: "infographic",
        infographic: "typecasting",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Typecasting converts a value from one type to another using functions like `int()`, `float()`, `str()`, `bool()`. Common use: converting `input()` string results into numbers for math operations." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "num_str = \"25\"\nnum_int = int(num_str)\nprint(num_int + 5)   # 30\n\nprice = \"99.99\"\nprice_float = float(price)\nprint(price_float * 2)  # 199.98\n\ncount = 10\ncount_str = str(count)\nprint(\"Count is \" + count_str)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a string `\"15.5\"`, convert it to a float, multiply by 2, and print the result.",
        starterCode: "# TODO: Convert the string \"42\" to an int and add 8 to it, print the result",
      },
    ],
    keyTakeaways: [
      "int(), float(), str(), and bool() convert between types.",
      "Invalid conversions raise ValueError.",
      "Cast user input before doing math.",
    ],
  },
};
