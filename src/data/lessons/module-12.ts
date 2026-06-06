import type { TopicLesson } from "@/lib/types";

export const module12Lessons: Record<string, TopicLesson> = {
  "m12-t1": {
    topicId: "m12-t1",
    intro:
      "A function groups steps under one name so you can reuse them. You define it with def, run its body when you call it, and optionally return a value.",
    blocks: [
      {
        type: "infographic",
        infographic: "functions-creating",
      },
      {
        type: "practice",
        practiceLabel: "Greet",
        ideOnly: true,
        practicePrompt:
          "Run the code and define a simple function that prints a greeting.",
        starterCode:
          'def greet():\n    print("Hello from a function")\n\ngreet()',
      },
      {
        type: "practice",
        practiceLabel: "Parameters",
        ideOnly: true,
        practicePrompt:
          "Run the code and pass a name into the greet function.",
        starterCode:
          'def greet(name):\n    print("Hello", name)\n\ngreet("Sam")',
      },
      {
        type: "practice",
        practiceLabel: "Return",
        ideOnly: true,
        practicePrompt:
          "Run the code and use return to send a sum back from add().",
        starterCode:
          "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)",
      },
      {
        type: "practice",
        practiceLabel: "Student",
        ideOnly: true,
        practicePrompt:
          "Run the code and print name and age with multiple parameters.",
        starterCode:
          'def student(name, age):\n    print("Name:", name)\n    print("Age:", age)\n\nstudent("Mia", 20)',
      },
      {
        type: "practice",
        practiceLabel: "Area",
        ideOnly: true,
        practicePrompt:
          "Run the code and calculate the area of a rectangle with return.",
        starterCode:
          "def area(length, width):\n    return length * width\n\nresult = area(5, 4)\nprint(result)",
      },
      {
        type: "practice",
        practiceLabel: "Multiply",
        ideOnly: true,
        practicePrompt:
          "Run the code and return the product of two numbers.",
        starterCode:
          "def multiply(a, b):\n    return a * b\n\nprint(multiply(4, 3))",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
      {
        type: "infographic",
        infographic: "function-arguments",
      },
      {
        type: "practice",
        practiceLabel: "Positional",
        ideOnly: true,
        practicePrompt:
          "Run the code and pass arguments by position to describe().",
        starterCode:
          'def describe(name, age):\n    print(name, age)\n\ndescribe("Sam", 30)',
      },
      {
        type: "practice",
        practiceLabel: "Default",
        ideOnly: true,
        practicePrompt:
          "Run the code and call greet() using the default greeting.",
        starterCode:
          'def greet(name, greeting="Hello"):\n    print(greeting, name)\n\ngreet("Alex")',
      },
      {
        type: "practice",
        practiceLabel: "Override",
        ideOnly: true,
        practicePrompt:
          "Run the code and override the default greeting with Hi.",
        starterCode:
          'def greet(name, greeting="Hello"):\n    print(greeting, name)\n\ngreet("Alex", "Hi")',
      },
      {
        type: "practice",
        practiceLabel: "Keyword",
        ideOnly: true,
        practicePrompt:
          "Run the code and pass arguments by parameter name.",
        starterCode:
          'def describe(name, age):\n    print(name, age)\n\ndescribe(age=25, name="Jordan")',
      },
      {
        type: "practice",
        practiceLabel: "Register",
        ideOnly: true,
        practicePrompt:
          "Run the code and register students with and without a custom course.",
        starterCode:
          'def register(name, course="Python"):\n    print("Name:", name)\n    print("Course:", course)\n\nregister("Mia")\nregister("John", "Data Science")',
      },
      {
        type: "practice",
        practiceLabel: "Student",
        ideOnly: true,
        practicePrompt:
          "Run the code and use a default age when only the name is given.",
        starterCode:
          'def student(name, age=18):\n    print(name, age)\n\nstudent("Asha")\nstudent("Rahul", 20)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
      {
        type: "infographic",
        infographic: "function-variables",
      },
      {
        type: "practice",
        practiceLabel: "Local",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how a local variable works inside compute().",
        starterCode:
          "def compute():\n    total = 100\n    return total\n\nprint(compute())",
      },
      {
        type: "practice",
        practiceLabel: "Read Global",
        ideOnly: true,
        practicePrompt:
          "Run the code and read a global variable from inside a function.",
        starterCode:
          "count = 0\n\ndef read_global():\n    print(count)\n\nread_global()",
      },
      {
        type: "practice",
        practiceLabel: "Local Assign",
        ideOnly: true,
        practicePrompt:
          "Run the code and observe that assigning inside a function creates a local variable.",
        starterCode:
          "count = 10\n\ndef reset_wrong():\n    count = 0\n\nreset_wrong()\nprint(count)",
      },
      {
        type: "practice",
        practiceLabel: "global",
        ideOnly: true,
        practicePrompt:
          "Run the code and use the global keyword to modify count.",
        starterCode:
          "count = 10\n\ndef reset():\n    global count\n    count = 0\n\nreset()\nprint(count)",
      },
      {
        type: "practice",
        practiceLabel: "Return",
        ideOnly: true,
        practicePrompt:
          "Run the code and reset a value using return instead of global.",
        starterCode:
          "def reset(value):\n    return 0\n\ncount = 10\ncount = reset(count)\nprint(count)",
      },
      {
        type: "practice",
        practiceLabel: "Marks",
        ideOnly: true,
        practicePrompt:
          "Run the code and check a mark against a global passing_mark.",
        starterCode:
          'passing_mark = 40\n\ndef check(mark):\n    if mark >= passing_mark:\n        return "Pass"\n    return "Fail"\n\nprint(check(55))',
      },
      {
        type: "practice",
        practiceLabel: "Show",
        ideOnly: true,
        practicePrompt:
          "Run the code and print a global value from inside show().",
        starterCode:
          "value = 50\n\ndef show():\n    print(value)\n\nshow()",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
        type: "infographic",
        infographic: "function-recursion",
      },
      {
        type: "practice",
        practiceLabel: "Countdown",
        ideOnly: true,
        practicePrompt:
          "Run the code and watch countdown() call itself until Done.",
        starterCode:
          'def countdown(n):\n    if n <= 0:\n        print("Done")\n        return\n    print(n)\n    countdown(n - 1)\n\ncountdown(3)',
      },
      {
        type: "practice",
        practiceLabel: "Factorial",
        ideOnly: true,
        practicePrompt:
          "Run the code and compute factorial(5) with recursion.",
        starterCode:
          "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))",
      },
      {
        type: "practice",
        practiceLabel: "Sum",
        ideOnly: true,
        practicePrompt:
          "Run the code and sum numbers from 1 to n using recursion.",
        starterCode:
          "def sum_to_n(n):\n    if n == 0:\n        return 0\n    return n + sum_to_n(n - 1)\n\nprint(sum_to_n(4))",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
