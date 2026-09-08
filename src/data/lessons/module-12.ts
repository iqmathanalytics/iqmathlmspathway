import type { TopicLesson } from "@/lib/types";

export const module12Lessons: Record<string, TopicLesson> = {
  "m12-t1": {
    topicId: "m12-t1",
    intro: "Functions package reusable logic with def and return — essential for clean data science code.",
    blocks: [
      {
        type: "infographic",
        infographic: "functions-creating",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Functions are defined with `def name(parameters):` and can return a value with `return`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "def greet(name):\n    return f\"Hello, {name}!\"\n\ndef add(a, b):\n    return a + b\n\nprint(greet(\"Asha\"))\nprint(add(2, 3))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a function is_even(n) that returns True if n is even, else False.",
        starterCode: "# TODO: Return True if n is even\ndef is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))\nprint(is_even(7))",
      },
    ],
    keyTakeaways: [
      "def name(params): defines a function.",
      "return sends a value back to the caller.",
      "Call the function to run its body.",
    ],
  },
  "m12-t2": {
    topicId: "m12-t2",
    intro: "You call a function by writing its name followed by parentheses and arguments.",
    blocks: [
      {
        type: "infographic",
        infographic: "functions-calling",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "You call a function by writing its name followed by parentheses with arguments: `function_name(args)`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "def multiply(a, b):\n    return a * b\n\nresult = multiply(4, 5)\nprint(result)   # 20" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Define a function area_of_circle(r) returning 3.14 * r * r, then call it with r=5.",
        starterCode: "# TODO: Define and call area_of_circle\ndef area_of_circle(r):\n    return 3.14 * r * r\n\nprint(area_of_circle(5))",
      },
    ],
    keyTakeaways: [
      "Calling runs the function body.",
      "Arguments fill the parameters.",
      "Capture return values in variables when needed.",
    ],
  },
  "m12-t3": {
    topicId: "m12-t3",
    intro: "Python supports positional, keyword, default, *args, and **kwargs arguments.",
    blocks: [
      {
        type: "infographic",
        infographic: "function-arguments",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Python supports positional, keyword, default, `*args` (variable positional), and `**kwargs` (variable keyword) arguments." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "def describe(name, age=18, *hobbies, **extra):\n    print(name, age, hobbies, extra)\n\ndescribe(\"Ravi\", 25, \"reading\", \"gaming\", city=\"Delhi\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a function total(*nums) that returns the sum of any number of arguments passed to it.",
        starterCode: "# TODO: Sum any number of arguments\ndef total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3))\nprint(total())",
      },
    ],
    keyTakeaways: [
      "Positional args follow definition order.",
      "Default args fill in when omitted.",
      "*args and **kwargs collect extras.",
    ],
  },
  "m12-t4": {
    topicId: "m12-t4",
    intro: "Local variables live inside a function. Globals can be read inside, but need the global keyword to modify.",
    blocks: [
      {
        type: "infographic",
        infographic: "function-variables",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Variables defined inside a function (local scope) are not visible outside it. Variables outside functions (global scope) can be read inside functions, but need the `global` keyword to be modified." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "x = 10   # global\n\ndef show():\n    y = 5   # local\n    print(x, y)\n\nshow()\n\ndef modify_global():\n    global x\n    x = 99\n\nmodify_global()\nprint(x)   # 99" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a function increment() that increases a global variable count by 1 each time it is called. Call it 3 times and print count.",
        starterCode: "# TODO: Increment global count\ncount = 0\n\ndef increment():\n    global count\n    count += 1\n\nincrement()\nincrement()\nincrement()\nprint(count)",
      },
    ],
    keyTakeaways: [
      "Local names exist only inside the function.",
      "Reading globals is fine; assigning needs global.",
      "Prefer returning values over mutating globals.",
    ],
  },
  "m12-t5": {
    topicId: "m12-t5",
    intro: "A recursive function calls itself on a smaller problem until a base case stops it.",
    blocks: [
      {
        type: "infographic",
        infographic: "function-recursion",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "A recursive function calls itself to solve smaller sub-problems, with a base case to stop the recursion." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))   # 120" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a recursive function fibonacci(n) that returns the nth Fibonacci number (0-indexed: 0, 1, 1, 2, 3, 5...).",
        starterCode: "# TODO: Recursive Fibonacci (0-indexed)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(0))\nprint(fibonacci(1))\nprint(fibonacci(5))",
      },
    ],
    keyTakeaways: [
      "Every recursive function needs a base case.",
      "Each call should move toward the base case.",
      "Deep recursion can hit RecursionError.",
    ],
  },
  "m12-t6": {
    topicId: "m12-t6",
    intro: "lambda creates small anonymous one-line functions — often used with map, filter, and sorted.",
    blocks: [
      {
        type: "infographic",
        infographic: "lambda-functions",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`lambda` creates small, anonymous, one-line functions: `lambda args: expression`. Often used with `map()`, `filter()`, `sorted()`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "square = lambda x: x ** 2\nprint(square(6))   # 36\n\nnums = [5, 2, 8, 1]\nprint(sorted(nums, key=lambda x: -x))   # [8,5,2,1]" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Use a lambda function with filter() to extract even numbers from [1, 2, 3, 4, 5, 6, 7, 8].",
        starterCode: "# TODO: Filter evens with lambda\nnums = [1, 2, 3, 4, 5, 6, 7, 8]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)",
      },
    ],
    keyTakeaways: [
      "lambda args: expression is anonymous.",
      "Great for short callbacks to map/filter/sorted.",
      "Use def for multi-line or named logic.",
    ],
  },
};
