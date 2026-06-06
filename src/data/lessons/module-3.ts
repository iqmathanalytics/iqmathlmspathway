import type { TopicLesson } from "@/lib/types";

export const module3Lessons: Record<string, TopicLesson> = {
  "m3-t1": {
    topicId: "m3-t1",
    intro:
      "Arithmetic operators let you do math in Python — add, subtract, multiply, divide, and more. You use them every day in data science for calculations.",
    blocks: [
      {
        type: "infographic",
        infographic: "math-operators",
      },
      {
        type: "practice",
        practiceLabel: "All operators",
        ideOnly: true,
        practicePrompt: "Run the program and check each result in the console.",
        starterCode:
          "print(10 + 3)   # 13\nprint(10 - 3)   # 7\nprint(10 * 3)   # 30\nprint(10 / 3)   # 3.3333333333333335\nprint(10 // 3)  # 3\nprint(10 % 3)   # 1\nprint(2 ** 4)   # 16",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Calculate the area of a rectangle: width 7, height 4. Print the result.",
        starterCode:
          "width = 7\nheight = 4\narea = width * height\nprint(area)",
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
      {
        type: "infographic",
        infographic: "assignment-operators",
      },
      {
        type: "practice",
        practiceLabel: "Basic assign",
        ideOnly: true,
        practicePrompt: "Run the code and watch how points changes.",
        starterCode:
          "points = 0\npoints = points + 10\nprint(points)  # 10",
      },
      {
        type: "practice",
        practiceLabel: "Shortcuts",
        ideOnly: true,
        practicePrompt: "Run each line and check the score after each step.",
        starterCode:
          "score = 50\nscore += 5    # same as score = score + 5\nprint(score)  # 55\n\nscore *= 2\nprint(score)  # 110",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Start with savings = 100. Add 25, then multiply by 2. Print after each step.",
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
        type: "infographic",
        infographic: "comparison-operators",
      },
      {
        type: "practice",
        practiceLabel: "All comparisons",
        ideOnly: true,
        practicePrompt: "Run each line and check True/False in the console.",
        starterCode:
          "age = 18\nprint(age == 18)   # True\nprint(age != 21)   # True\nprint(age > 16)    # True\nprint(age < 16)    # False\nprint(age >= 18)   # True\nprint(age <= 20)   # True",
      },
      {
        type: "practice",
        practiceLabel: "Booleans",
        ideOnly: true,
        practicePrompt: "Run the code and see how comparisons store True or False.",
        starterCode:
          "result = 10 > 5\nprint(result)        # True\nprint(10 == 10)      # True\nprint(10 == 9)       # False",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Set temperature = 32. Print whether it is below 0, equal to 32, and above 100.",
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
        type: "infographic",
        infographic: "logical-operators",
      },
      {
        type: "practice",
        practiceLabel: "Logical basics",
        ideOnly: true,
        practicePrompt: "Run the code and check each True/False result.",
        starterCode:
          "has_ticket = True\nis_adult = True\nprint(has_ticket and is_adult)  # True\n\nprint(True or False)   # True\nprint(not True)        # False",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
        type: "infographic",
        infographic: "identity-operators",
      },
      {
        type: "practice",
        practiceLabel: "Identity vs equality",
        ideOnly: true,
        practicePrompt:
          "Run the code and compare == (values) with is (same object).",
        starterCode:
          "a = [1, 2]\nb = [1, 2]\nc = a\n\nprint(a == b)   # True (same contents)\nprint(a is b)   # False (different objects)\nprint(a is c)   # True (same object)",
      },
      {
        type: "practice",
        practiceLabel: "None check",
        ideOnly: true,
        practicePrompt: "Run the code to see the recommended None check.",
        starterCode:
          'value = None\n\nif value is None:\n    print("No value found")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
        type: "infographic",
        infographic: "membership-operators",
      },
      {
        type: "practice",
        practiceLabel: "List check",
        ideOnly: true,
        practicePrompt: "Run the code and check in / not in with a list.",
        starterCode:
          'fruits = ["apple", "banana", "mango"]\n\nprint("banana" in fruits)      # True\nprint("grape" not in fruits)   # True',
      },
      {
        type: "practice",
        practiceLabel: "String search",
        ideOnly: true,
        practicePrompt: "Run the code and see how in works with strings.",
        starterCode:
          'word = "Python"\n\nprint("P" in word)      # True\nprint("x" in word)      # False\nprint("Py" in word)     # True',
      },
      {
        type: "practice",
        practiceLabel: "Validation",
        ideOnly: true,
        practicePrompt: "Run the code to see role validation with in.",
        starterCode:
          'allowed = ["admin", "editor", "viewer"]\n\nrole = "editor"\n\nif role in allowed:\n    print("Access granted")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Make a list of three colors. Check if 'blue' is in the list.",
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
        type: "infographic",
        infographic: "bitwise-operators",
      },
      {
        type: "practice",
        practiceLabel: "All operators",
        ideOnly: true,
        practicePrompt: "Run each line and check the printed results.",
        starterCode:
          "print(5 & 3)    # 1\nprint(5 | 3)    # 7\nprint(5 ^ 3)    # 6\nprint(~5)       # -6\nprint(5 << 1)   # 10\nprint(5 >> 1)   # 2",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Run the example bitwise lines and observe the numbers printed.",
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
