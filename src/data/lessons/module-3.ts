import type { TopicLesson } from "@/lib/types";

export const module3Lessons: Record<string, TopicLesson> = {
  "m3-t1": {
    topicId: "m3-t1",
    intro:
      "Arithmetic operators let you do math in Python — add, subtract, multiply, divide, and more. You use them every day in data science for calculations.",
    blocks: [
      { type: "heading", content: "Basic math operators" },
      {
        type: "list",
        items: [
          "+ addition",
          "- subtraction",
          "* multiplication",
          "/ division (always gives float)",
          "// floor division (whole number part)",
          "% modulo (remainder)",
          "** power (exponent)",
        ],
      },
      {
        type: "code",
        code:
          "print(10 + 3)   # 13\nprint(10 - 3)   # 7\nprint(10 * 3)   # 30\nprint(10 / 3)   # 3.333...\nprint(10 // 3)  # 3\nprint(10 % 3)   # 1\nprint(2 ** 4)   # 16",
      },
      {
        type: "visual",
        diagram: {
          title: "10 / 3 vs 10 // 3",
          variant: "compare",
          nodes: [
            { id: "div", label: "10 / 3", sublabel: "3.333... (float)" },
            { id: "floor", label: "10 // 3", sublabel: "3 (drops decimals)" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt: "Calculate the area of a rectangle: width 7, height 4. Print the result.",
        starterCode: "width = 7\nheight = 4\narea = width * height\nprint(area)",
      },
    ],
    keyTakeaways: [
      "Use +, -, *, / for everyday math.",
      "/ gives a float; // gives whole-number division.",
      "% is remainder; ** is power.",
    ],
  },
  "m3-t2": {
    topicId: "m3-t2",
    intro:
      "Assignment operators update a variable. = stores a value; shortcuts like += add and assign in one step.",
    blocks: [
      { type: "heading", content: "The = operator" },
      {
        type: "paragraph",
        content: "= is not “equals” in math — it means “put this value in the variable”.",
      },
      { type: "code", code: "points = 0\npoints = points + 10\nprint(points)  # 10" },
      { type: "heading", content: "Shortcut operators" },
      {
        type: "list",
        items: ["+= add and assign", "-= subtract and assign", "*= multiply and assign", "/= divide and assign"],
      },
      {
        type: "code",
        code: "score = 50\nscore += 5   # same as score = score + 5\nprint(score)  # 55\n\nscore *= 2\nprint(score)  # 110",
      },
      {
        type: "practice",
        practicePrompt: "Start with savings = 100. Add 25, then multiply by 2. Print after each step.",
        starterCode:
          "savings = 100\nsavings += 25\nprint(savings)\nsavings *= 2\nprint(savings)",
      },
    ],
    keyTakeaways: [
      "= assigns a value to a variable.",
      "+=, -=, *=, /= update the variable in one line.",
      "Shortcuts make code shorter and clearer.",
    ],
  },
  "m3-t3": {
    topicId: "m3-t3",
    intro:
      "Comparison operators compare two values. They always give True or False — you will use them heavily in if statements soon.",
    blocks: [
      {
        type: "list",
        items: [
          "== equal to",
          "!= not equal to",
          "> greater than",
          "< less than",
          ">= greater or equal",
          "<= less or equal",
        ],
      },
      {
        type: "code",
        code:
          'age = 18\nprint(age == 18)   # True\nprint(age != 21)   # True\nprint(age > 16)    # True\nprint(age < 16)    # False',
      },
      {
        type: "tip",
        content: "Use == for comparison. A single = is assignment, not comparison!",
      },
      {
        type: "practice",
        practicePrompt: "Set temperature = 32. Print whether it is below 0, equal to 32, and above 100.",
        starterCode:
          "temperature = 32\nprint(temperature < 0)\nprint(temperature == 32)\nprint(temperature > 100)",
      },
    ],
    keyTakeaways: [
      "Comparisons return True or False.",
      "== checks equality; = assigns values.",
      "Use comparisons before decisions (if/else).",
    ],
  },
  "m3-t4": {
    topicId: "m3-t4",
    intro:
      "Logical operators combine True/False values: and (both must be true), or (at least one true), not (flip true/false).",
    blocks: [
      {
        type: "visual",
        diagram: {
          title: "and needs BOTH true",
          variant: "flow",
          nodes: [
            { id: "a", label: "Condition A", sublabel: "True?" },
            { id: "b", label: "Condition B", sublabel: "True?" },
            { id: "r", label: "A and B", sublabel: "True only if both" },
          ],
          arrows: [
            { from: "a", to: "r" },
            { from: "b", to: "r" },
          ],
        },
      },
      {
        type: "code",
        code:
          "has_ticket = True\nis_adult = True\nprint(has_ticket and is_adult)  # True\n\nprint(True or False)   # True\nprint(not True)        # False",
      },
      {
        type: "practice",
        practicePrompt:
          "Create has_id and has_permission booleans. Print results of and, or, and not.",
        starterCode:
          "has_id = True\nhas_permission = False\nprint(has_id and has_permission)\nprint(has_id or has_permission)\nprint(not has_permission)",
      },
    ],
    keyTakeaways: [
      "and — both true; or — at least one true; not — opposite.",
      "Logical operators work on bool values.",
      "Perfect for combining checks in conditions.",
    ],
  },
  "m3-t5": {
    topicId: "m3-t5",
    intro:
      "Identity operators check if two variables point to the same object in memory: is and is not. A common use is comparing a value to None.",
    blocks: [
      {
        type: "paragraph",
        content:
          "== compares values. is checks if two names refer to the exact same thing (same identity).",
      },
      {
        type: "code",
        code:
          "a = [1, 2]\nb = [1, 2]\nc = a\n\nprint(a == b)   # True (same contents)\nprint(a is b)   # False (different lists)\nprint(a is c)   # True (same list object)",
      },
      {
        type: "tip",
        content: "Use `value is None` to check for “no value” — common in data cleaning later.",
      },
      {
        type: "practice",
        practicePrompt: "Create x = None. Print x is None and x is not None.",
        starterCode: "x = None\nprint(x is None)\nprint(x is not None)",
      },
    ],
    keyTakeaways: [
      "is / is not check same object, not just equal values.",
      "Often used with None.",
      "For equal values of numbers/strings, == is usually enough.",
    ],
  },
  "m3-t6": {
    topicId: "m3-t6",
    intro:
      "Membership operators check whether something is inside a collection: in and not in. You will use these with lists, strings, and more.",
    blocks: [
      {
        type: "code",
        code:
          'fruits = ["apple", "banana", "mango"]\nprint("banana" in fruits)      # True\nprint("grape" not in fruits)   # True\n\nword = "Python"\nprint("P" in word)  # True',
      },
      {
        type: "visual",
        diagram: {
          title: "in checks inside a container",
          variant: "stack",
          nodes: [
            { id: "box", label: '["apple", "banana"]', sublabel: "list" },
            { id: "q", label: '"banana" in list?', sublabel: "True" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt: "Make a list of three colors. Check if 'blue' is in the list.",
        starterCode:
          'colors = ["red", "green", "yellow"]\nprint("blue" in colors)\nprint("red" in colors)',
      },
    ],
    keyTakeaways: [
      "in returns True if the item exists inside the collection.",
      "not in is the opposite.",
      "Works on lists, strings, and other sequences.",
    ],
  },
  "m3-t7": {
    topicId: "m3-t7",
    intro:
      "Bitwise operators work on 0s and 1s at the bit level. They are used less often in everyday scripts but matter in systems and performance work.",
    blocks: [
      {
        type: "list",
        items: [
          "& AND",
          "| OR",
          "^ XOR",
          "~ NOT",
          "<< left shift",
          ">> right shift",
        ],
      },
      {
        type: "code",
        code: "print(5 & 3)   # 1\nprint(5 | 3)   # 7\nprint(5 ^ 3)   # 6\nprint(5 << 1)  # 10",
      },
      {
        type: "tip",
        content:
          "Learn what each operator does here; prioritize arithmetic and comparison operators in daily coding.",
      },
      {
        type: "practice",
        practicePrompt: "Run the example bitwise lines and observe the numbers printed.",
        starterCode: "print(5 & 3)\nprint(5 | 3)\nprint(5 ^ 3)\nprint(5 << 1)",
      },
    ],
    keyTakeaways: [
      "Bitwise operators manipulate individual bits.",
      "Uncommon in typical application code.",
      "Arithmetic and comparison operators matter more for data science starters.",
    ],
  },
};
