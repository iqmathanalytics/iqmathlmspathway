import type { TopicLesson } from "@/lib/types";

export const module12Lessons: Record<string, TopicLesson> = {
  "m12-t1": {
    topicId: "m12-t1",
    intro:
      "A function groups steps under one name so you can reuse them. You define it with def, run its body when you call it, and optionally return a value.",
    blocks: [
      { type: "heading", content: "Define with def" },
      {
        type: "code",
        code:
          'def greet():\n    print("Hello from a function")\n\ngreet()',
      },
      { type: "heading", content: "Return a value" },
      {
        type: "code",
        code:
          "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)  # 8",
      },
      {
        type: "visual",
        diagram: {
          title: "Function structure",
          variant: "stack",
          nodes: [
            { id: "d", label: "def name(...):", sublabel: "Header — name and parameters" },
            { id: "b", label: "Indented body", sublabel: "Code that runs on call" },
            { id: "r", label: "return value", sublabel: "Optional — sends result back" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt:
          "Define square(n) that returns n * n. Print square(6).",
        starterCode:
          "def square(n):\n    return n * n\n\nprint(square(6))",
      },
    ],
    keyTakeaways: [
      "def name(): starts a function definition.",
      "return sends a value back to the caller.",
      "Without return, the function result is None.",
    ],
  },
  "m12-t2": {
    topicId: "m12-t2",
    intro:
      "After you define a function, you call it by name with parentheses. Python jumps to the function body, runs it, then continues where the call left off.",
    blocks: [
      {
        type: "code",
        code:
          'def show_status(score):\n    if score >= 60:\n        print("Pass")\n    else:\n        print("Fail")\n\nshow_status(72)\nshow_status(45)',
      },
      {
        type: "paragraph",
        content:
          "You can call a function many times with different inputs. Built-in functions like print() and len() work the same way — you invoke them with arguments.",
      },
      {
        type: "visual",
        diagram: {
          title: "Call flow",
          variant: "flow",
          nodes: [
            { id: "c", label: "Call function", sublabel: "name(args)" },
            { id: "r", label: "Run body", sublabel: "Execute indented block" },
            { id: "back", label: "Return", sublabel: "Back to caller" },
          ],
          arrows: [
            { from: "c", to: "r" },
            { from: "r", to: "back" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt:
          "Define double(x) returning x * 2. Call it with 10 and print the result.",
        starterCode:
          "def double(x):\n    return x * 2\n\nprint(double(10))",
      },
    ],
    keyTakeaways: [
      "Call with function_name(arguments).",
      "Each call runs the body independently.",
      "Use the returned value or assign it to a variable.",
    ],
  },
  "m12-t3": {
    topicId: "m12-t3",
    intro:
      "Parameters receive values when a function is called. Positional arguments match by order; keyword arguments match by name. Defaults apply when an argument is omitted.",
    blocks: [
      { type: "heading", content: "Positional arguments" },
      {
        type: "code",
        code:
          "def describe(name, age):\n    print(name, age)\n\ndescribe(\"Sam\", 30)",
      },
      { type: "heading", content: "Default values" },
      {
        type: "code",
        code:
          'def greet(name, greeting="Hello"):\n    print(greeting, name)\n\ngreet("Alex")\ngreet("Alex", "Hi")',
      },
      { type: "heading", content: "Keyword arguments" },
      {
        type: "code",
        code:
          'describe(age=25, name="Jordan")  # order does not matter',
      },
      {
        type: "tip",
        content:
          "Put parameters with defaults after those without defaults in the definition.",
      },
      {
        type: "practice",
        practicePrompt:
          "Define power(base, exp=2) returning base ** exp. Print power(3) and power(2, 5).",
        starterCode:
          "def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(2, 5))",
      },
    ],
    keyTakeaways: [
      "Arguments map to parameters by position or by name.",
      "Default values make parameters optional.",
      "Keyword args clarify calls with many parameters.",
    ],
  },
  "m12-t4": {
    topicId: "m12-t4",
    intro:
      "Variables created inside a function are local — they exist only while that function runs. Variables defined outside are global unless you assign to them inside the function.",
    blocks: [
      { type: "heading", content: "Local variables" },
      {
        type: "code",
        code:
          "def compute():\n    total = 100  # local\n    return total\n\ncompute()\n# print(total)  # NameError — total not visible here",
      },
      { type: "heading", content: "Reading globals vs assigning" },
      {
        type: "code",
        code:
          'count = 0\n\ndef read_global():\n    print(count)  # OK — read only\n\ndef reset_wrong():\n    count = 0  # creates NEW local count\n\nread_global()',
      },
      {
        type: "visual",
        diagram: {
          title: "Scope",
          variant: "compare",
          nodes: [
            { id: "l", label: "Local", sublabel: "Inside the function" },
            { id: "g", label: "Global", sublabel: "Module level — shared" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Prefer passing values in and returning results instead of modifying globals — clearer for data work and testing.",
      },
      {
        type: "practice",
        practicePrompt:
          "Define add_tax(price, rate=0.08) that returns price * (1 + rate). Use price = 50 and print add_tax(price).",
        starterCode:
          "price = 50\n\ndef add_tax(amount, rate=0.08):\n    return amount * (1 + rate)\n\nprint(add_tax(price))",
      },
    ],
    keyTakeaways: [
      "Assignments inside a function create local variables.",
      "Globals can be read unless you assign to the same name locally.",
      "Return values instead of relying on global state when possible.",
    ],
  },
  "m12-t5": {
    topicId: "m12-t5",
    intro:
      "Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a base case that stops the calls.",
    blocks: [
      {
        type: "code",
        code:
          "def countdown(n):\n    if n <= 0:\n        print(\"Done\")\n        return\n    print(n)\n    countdown(n - 1)\n\ncountdown(3)",
      },
      {
        type: "paragraph",
        content:
          "Each call waits for the next to finish. The base case (n <= 0 here) prevents infinite recursion.",
      },
      {
        type: "code",
        code:
          "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # 120",
      },
      {
        type: "visual",
        diagram: {
          title: "Recursion pattern",
          variant: "flow",
          nodes: [
            { id: "b", label: "Base case", sublabel: "Stop and return" },
            { id: "r", label: "Recursive case", sublabel: "Call self with smaller input" },
          ],
          arrows: [{ from: "r", to: "b" }],
        },
      },
      {
        type: "practice",
        practicePrompt:
          "Write sum_upto(n) that returns 1 + 2 + ... + n using recursion (base: n <= 0 returns 0).",
        starterCode:
          "def sum_upto(n):\n    if n <= 0:\n        return 0\n    return n + sum_upto(n - 1)\n\nprint(sum_upto(5))",
      },
    ],
    keyTakeaways: [
      "A recursive function calls itself.",
      "Always define a base case that returns without recursing.",
      "Each step should move toward the base case.",
    ],
  },
};
