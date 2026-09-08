import type { TopicLesson } from "@/lib/types";

export const module3Lessons: Record<string, TopicLesson> = {
  "m3-t1": {
    topicId: "m3-t1",
    intro: "Arithmetic operators perform math: add, subtract, multiply, divide, and more.",
    blocks: [
      {
        type: "infographic",
        infographic: "math-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`+ - * / % // **` perform addition, subtraction, multiplication, division, modulus (remainder), floor division, and exponentiation." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "a, b = 17, 5\nprint(a + b, a - b, a * b, a / b, a % b, a // b, a ** b)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `a=13, b=4`, print the result of every arithmetic operator applied to them.",
        starterCode: "# TODO: Given a=20, b=6, print all 7 arithmetic operator results",
      },
    ],
    keyTakeaways: [
      "+ - * / do basic arithmetic; // is floor division; % is remainder; ** is power.",
      "Division with / always returns a float in Python 3.",
      "Operator precedence follows standard math rules.",
    ],
  },
  "m3-t2": {
    topicId: "m3-t2",
    intro: "Assignment operators store values and update variables in place.",
    blocks: [
      {
        type: "infographic",
        infographic: "assignment-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Assignment operators combine assignment with an operation: `=, +=, -=, *=, /=, %=, //=, **=`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "x = 10\nx += 5   # x = 15\nx -= 3   # x = 12\nx *= 2   # x = 24\nprint(x)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Start with `score = 50`. Add 10, subtract 5, then double it using assignment operators. Print the result.",
        starterCode: "# TODO: Start with x=100, apply -=20, *=2, //=3, print final value",
      },
    ],
    keyTakeaways: [
      "= assigns; +=, -=, *=, /= update in place.",
      "Augmented assignment is shorter and clearer for counters.",
      "The right-hand side is evaluated before the update.",
    ],
  },
  "m3-t3": {
    topicId: "m3-t3",
    intro: "Comparison operators compare values and return True or False.",
    blocks: [
      {
        type: "infographic",
        infographic: "comparison-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`== != > < >= <=` compare two values and return a boolean." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "print(5 == 5, 5 != 3, 7 > 2, 7 < 2, 5 >= 5, 4 <= 3)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `a=8, b=8`, check and print results of all 6 comparisons.",
        starterCode: "# TODO: Compare two user-input numbers using all 6 comparison operators",
      },
    ],
    keyTakeaways: [
      "== and != test equality; < > <= >= compare order.",
      "Comparisons return bool values.",
      "You can chain comparisons in Python (e.g. 1 < x < 10).",
    ],
  },
  "m3-t4": {
    topicId: "m3-t4",
    intro: "Logical operators combine boolean conditions with and, or, and not.",
    blocks: [
      {
        type: "infographic",
        infographic: "logical-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`and`, `or`, `not` combine boolean expressions. `and` needs both True; `or` needs at least one True; `not` inverts a boolean." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "age = 25\nhas_id = True\nprint(age >= 18 and has_id)\nprint(age < 18 or has_id)\nprint(not has_id)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `x=15`, check if `x` is between 10 and 20 (inclusive) using logical `and`.",
        starterCode: "# TODO: Check if a number is between 10 and 20 using 'and'",
      },
    ],
    keyTakeaways: [
      "and requires both sides True; or needs one; not flips a bool.",
      "Short-circuit evaluation skips unnecessary work.",
      "Combine logical operators carefully with parentheses.",
    ],
  },
  "m3-t5": {
    topicId: "m3-t5",
    intro: "Identity operators check whether two names refer to the same object in memory.",
    blocks: [
      {
        type: "infographic",
        infographic: "identity-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`is` and `is not` check whether two variables reference the *same object* in memory, not just equal values." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "a = [1, 2, 3]\nb = a\nc = [1, 2, 3]\nprint(a is b)      # True (same object)\nprint(a is c)      # False (different objects, same values)\nprint(a == c)      # True (equal values)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `x = None`, write code to check if `x is None` and print the result.",
        starterCode: "# TODO: Create two variables pointing to the same list and two pointing to different lists with equal values; test 'is'",
      },
    ],
    keyTakeaways: [
      "is / is not compare object identity, not equality.",
      "Use == for value equality in most cases.",
      "None checks often use is None.",
    ],
  },
  "m3-t6": {
    topicId: "m3-t6",
    intro: "Membership operators test whether a value appears inside a sequence or collection.",
    blocks: [
      {
        type: "infographic",
        infographic: "membership-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`in` and `not in` check whether a value exists within a sequence (list, string, tuple, set, dict keys)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "fruits = [\"apple\", \"banana\", \"mango\"]\nprint(\"banana\" in fruits)      # True\nprint(\"grape\" not in fruits)   # True\nprint(\"a\" in \"banana\")         # True" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a list `nums = [2,4,6,8,10]`, check if `5` and `8` are in the list using membership operators.",
        starterCode: "# TODO: Check if the number 7 is in a list of numbers 1-10",
      },
    ],
    keyTakeaways: [
      "in / not in test membership in sequences and collections.",
      "Works with strings, lists, tuples, sets, and dict keys.",
      "Membership checks are a clean alternative to loops for simple lookups.",
    ],
  },
  "m3-t7": {
    topicId: "m3-t7",
    intro: "Bitwise operators work on the binary representation of integers.",
    blocks: [
      {
        type: "infographic",
        infographic: "bitwise-operators",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Operate on binary representations of integers: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (right shift)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "a, b = 6, 3   # 110, 011 in binary\nprint(a & b)   # 2\nprint(a | b)   # 7\nprint(a ^ b)   # 5\nprint(~a)      # -7\nprint(a << 1)  # 12\nprint(a >> 1)  # 3" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `a=5, b=9`, compute `a & b`, `a | b`, and `a ^ b`.",
        starterCode: "# TODO: Given a=12, b=10, print results of &, |, ^, ~, <<, >>",
      },
    ],
    keyTakeaways: [
      "& | ^ ~ << >> operate on bits of integers.",
      "Useful for flags, masks, and low-level work.",
      "Know binary basics before relying on bitwise ops.",
    ],
  },
};
