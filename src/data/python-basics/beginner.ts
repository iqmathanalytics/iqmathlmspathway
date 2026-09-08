import { buildBasicsProblem, buildScriptProblem } from "./helpers";

/**
 * Beginner Python Basics — script/print drills until Functions.
 * Factorial stays as a function problem.
 */
export const beginnerProblems = [
  buildScriptProblem({
    order: 0,
    slug: "hello-name",
    title: "Hello, Name",
    difficulty: "easy",
    category: "strings",
    description: `Read a person's name from standard input and greet them.

Your program should:

1. Read one line of input (the name)
2. Print exactly: Hello, {name}!

This is a classic input/output drill — the same pattern used on platforms like HackerRank.`,
    examples: [
      {
        input: "Alice",
        output: "Hello, Alice!",
        explanation: 'The name "Alice" is read, then printed inside the greeting.',
      },
      {
        input: "Bob",
        output: "Hello, Bob!",
      },
    ],
    constraints: [
      "Input is a single line of text (the name)",
      'Output must match Hello, {name}! with no extra spaces',
    ],
    hints: [
      "Use name = input() to read a line from stdin.",
      'Use an f-string or concatenation: print(f"Hello, {name}!")',
    ],
    approach: `Read the name with input(), then print the greeting with the name inserted.`,
    starterCode: `# Read a name and print: Hello, {name}!
name = input()
# TODO: print the greeting
`,
    solutionCode: `name = input()
print(f"Hello, {name}!")`,
    tests: [
      { label: "Alice", stdin: "Alice", expectedStdout: "Hello, Alice!" },
      { label: "Bob", stdin: "Bob", expectedStdout: "Hello, Bob!" },
      { label: "World", stdin: "World", expectedStdout: "Hello, World!" },
    ],
  }),

  buildScriptProblem({
    order: 1,
    slug: "variable-assignment",
    title: "Variable Assignment",
    difficulty: "easy",
    category: "variables",
    description: `Create these variables and print them on one line, separated by spaces:

- name = "Alice"
- age = 20
- gpa = 3.75
- is_enrolled = True

Print exactly: Alice 20 3.75 True`,
    examples: [{ output: "Alice 20 3.75 True" }],
    constraints: ["Use the exact values listed", "Print all four values with spaces between them"],
    hints: [
      "Assign each value to a variable.",
      'Use print(name, age, gpa, is_enrolled) — print separates args with spaces.',
    ],
    approach: `Store each value in a named variable, then print them together.`,
    starterCode: `# TODO: assign name, age, gpa, is_enrolled and print them
`,
    solutionCode: `name = "Alice"
age = 20
gpa = 3.75
is_enrolled = True
print(name, age, gpa, is_enrolled)`,
    tests: [{ label: "Prints student fields", expectedStdout: "Alice 20 3.75 True" }],
  }),

  buildScriptProblem({
    order: 2,
    slug: "string-manipulation",
    title: "String Manipulation",
    difficulty: "easy",
    category: "strings",
    description: `Given sentence = "Python is fun"

Print four lines:

1. Uppercase
2. Lowercase
3. Length (as a number)
4. Reversed string`,
    examples: [
      {
        output: "PYTHON IS FUN\npython is fun\n13\nnuf si nohtyP",
      },
    ],
    constraints: ["Use the exact sentence shown", "Print one result per line in that order"],
    hints: ["upper(), lower(), len(), and s[::-1]"],
    approach: `Apply string methods and slicing, printing each result on its own line.`,
    starterCode: `sentence = "Python is fun"
# TODO: print upper, lower, length, reversed
`,
    solutionCode: `sentence = "Python is fun"
print(sentence.upper())
print(sentence.lower())
print(len(sentence))
print(sentence[::-1])`,
    tests: [
      {
        label: "Four-line string report",
        expectedStdout: "PYTHON IS FUN\npython is fun\n13\nnuf si nohtyP",
      },
    ],
  }),

  buildScriptProblem({
    order: 3,
    slug: "mathematical-operations",
    title: "Mathematical Operations",
    difficulty: "easy",
    category: "numbers",
    description: `With a = 17 and b = 5, print five lines:

1. a + b
2. a - b
3. a * b
4. a // b  (integer division)
5. a % b   (remainder)`,
    examples: [{ output: "22\n12\n85\n3\n2" }],
    constraints: ["Use integer division // and modulo %"],
    hints: ["print each expression on its own line"],
    approach: `Compute each arithmetic operation and print the results in order.`,
    starterCode: `a = 17
b = 5
# TODO: print sum, difference, product, //, %
`,
    solutionCode: `a = 17
b = 5
print(a + b)
print(a - b)
print(a * b)
print(a // b)
print(a % b)`,
    tests: [{ label: "Five arithmetic results", expectedStdout: "22\n12\n85\n3\n2" }],
  }),

  buildScriptProblem({
    order: 4,
    slug: "list-operations",
    title: "List Operations",
    difficulty: "easy",
    category: "lists",
    description: `Start with nums = [3, 1, 4]

1. Append 1
2. Sort the list ascending
3. Print the list
4. Print the length`,
    examples: [{ output: "[1, 1, 3, 4]\n4" }],
    constraints: ["Mutate the list with append and sort"],
    hints: ["list.append(x) and list.sort()"],
    approach: `Append, sort in place, then print the list and its length.`,
    starterCode: `nums = [3, 1, 4]
# TODO: append 1, sort, print list and length
`,
    solutionCode: `nums = [3, 1, 4]
nums.append(1)
nums.sort()
print(nums)
print(len(nums))`,
    tests: [{ label: "Sorted list and length", expectedStdout: "[1, 1, 3, 4]\n4" }],
  }),

  buildScriptProblem({
    order: 5,
    slug: "tuples-and-unpacking",
    title: "Tuples and Unpacking",
    difficulty: "easy",
    category: "tuples",
    description: `point = (10, 20)

Unpack into x and y, then print:

1. x
2. y
3. The tuple itself`,
    examples: [{ output: "10\n20\n(10, 20)" }],
    constraints: ["Use tuple unpacking: x, y = point"],
    hints: ["Tuples are immutable; unpacking assigns each element"],
    approach: `Unpack the pair, then print each part and the original tuple.`,
    starterCode: `point = (10, 20)
# TODO: unpack and print
`,
    solutionCode: `point = (10, 20)
x, y = point
print(x)
print(y)
print(point)`,
    tests: [{ label: "Unpacked values", expectedStdout: "10\n20\n(10, 20)" }],
  }),

  buildScriptProblem({
    order: 6,
    slug: "dictionary-operations",
    title: "Dictionary Operations",
    difficulty: "easy",
    category: "dictionaries",
    description: `Create student = {"name": "Riya", "score": 88}

1. Print the name
2. Print the score
3. Add key "city" with value "Pune"
4. Print the full dictionary`,
    examples: [
      {
        output: "Riya\n88\n{'name': 'Riya', 'score': 88, 'city': 'Pune'}",
      },
    ],
    constraints: ["Access values with student[\"key\"]"],
    hints: ["Assign student[\"city\"] = \"Pune\" to add a key"],
    approach: `Read existing keys, add city, then print the dict.`,
    starterCode: `student = {"name": "Riya", "score": 88}
# TODO: print name, score; add city; print dict
`,
    solutionCode: `student = {"name": "Riya", "score": 88}
print(student["name"])
print(student["score"])
student["city"] = "Pune"
print(student)`,
    tests: [
      {
        label: "Dict updates",
        expectedStdout: "Riya\n88\n{'name': 'Riya', 'score': 88, 'city': 'Pune'}",
      },
    ],
  }),

  buildScriptProblem({
    order: 7,
    slug: "set-operations",
    title: "Set Operations",
    difficulty: "easy",
    category: "sets",
    description: `a = {1, 2, 3}
b = {3, 4, 5}

Print three lines as sorted lists (so order is stable):

1. Union of a and b
2. Intersection
3. Difference a - b`,
    examples: [{ output: "[1, 2, 3, 4, 5]\n[3]\n[1, 2]" }],
    constraints: ["Convert results with sorted(...) before printing"],
    hints: ["a | b, a & b, a - b"],
    approach: `Use set operators, sort for stable output, print each result.`,
    starterCode: `a = {1, 2, 3}
b = {3, 4, 5}
# TODO: print sorted union, intersection, difference
`,
    solutionCode: `a = {1, 2, 3}
b = {3, 4, 5}
print(sorted(a | b))
print(sorted(a & b))
print(sorted(a - b))`,
    tests: [
      {
        label: "Set algebra",
        expectedStdout: "[1, 2, 3, 4, 5]\n[3]\n[1, 2]",
      },
    ],
  }),

  buildScriptProblem({
    order: 8,
    slug: "restaurant-bill",
    title: "Restaurant Bill",
    difficulty: "easy",
    category: "operators",
    description: `bill = 1200
tip_rate = 0.1

Compute tip = bill * tip_rate and total = bill + tip.

Print two lines:

1. tip as an integer (use int(tip))
2. total as an integer (use int(total))`,
    examples: [{ output: "120\n1320" }],
    constraints: ["Use * and + only"],
    hints: ["int() truncates toward zero for these positive values"],
    approach: `Multiply for tip, add for total, cast to int for clean output.`,
    starterCode: `bill = 1200
tip_rate = 0.1
# TODO: compute tip and total, print as ints
`,
    solutionCode: `bill = 1200
tip_rate = 0.1
tip = bill * tip_rate
total = bill + tip
print(int(tip))
print(int(total))`,
    tests: [{ label: "Tip and total", expectedStdout: "120\n1320" }],
  }),

  buildScriptProblem({
    order: 9,
    slug: "temperature-label",
    title: "Temperature Label",
    difficulty: "easy",
    category: "conditionals",
    description: `temp = 32

Print one word:

- "Hot" if temp > 30
- "Mild" if 15 <= temp <= 30
- "Cold" otherwise`,
    examples: [{ output: "Hot" }],
    constraints: ["Use if / elif / else"],
    hints: ["Check the Hot branch first"],
    approach: `Branch on temperature ranges and print the label.`,
    starterCode: `temp = 32
# TODO: print Hot / Mild / Cold
`,
    solutionCode: `temp = 32
if temp > 30:
    print("Hot")
elif temp >= 15:
    print("Mild")
else:
    print("Cold")`,
    tests: [{ label: "Hot day", expectedStdout: "Hot" }],
  }),

  buildScriptProblem({
    order: 10,
    slug: "loan-eligibility",
    title: "Loan Eligibility",
    difficulty: "easy",
    category: "conditionals",
    description: `age = 28
income = 45000

Print "Eligible" if age >= 21 and income >= 30000, otherwise print "Not eligible".`,
    examples: [{ output: "Eligible" }],
    constraints: ["Use and to combine both conditions"],
    hints: ["Both age and income must pass"],
    approach: `Combine boolean checks with and, then print the decision.`,
    starterCode: `age = 28
income = 45000
# TODO: print Eligible or Not eligible
`,
    solutionCode: `age = 28
income = 45000
if age >= 21 and income >= 30000:
    print("Eligible")
else:
    print("Not eligible")`,
    tests: [{ label: "Eligible applicant", expectedStdout: "Eligible" }],
  }),

  buildScriptProblem({
    order: 11,
    slug: "multiplication-table",
    title: "Multiplication Table",
    difficulty: "easy",
    category: "loops",
    description: `n = 5

Print the multiplication table for n from 1 to 5, one product per line:

5
10
15
20
25`,
    examples: [{ output: "5\n10\n15\n20\n25" }],
    constraints: ["Use a for loop with range"],
    hints: ["for i in range(1, 6): print(n * i)"],
    approach: `Loop multipliers 1..5 and print n * i each time.`,
    starterCode: `n = 5
# TODO: print n*1 .. n*5
`,
    solutionCode: `n = 5
for i in range(1, 6):
    print(n * i)`,
    tests: [{ label: "Table for 5", expectedStdout: "5\n10\n15\n20\n25" }],
  }),

  buildScriptProblem({
    order: 12,
    slug: "sum-of-evens",
    title: "Sum of Even Numbers",
    difficulty: "easy",
    category: "loops",
    description: `nums = [1, 2, 3, 4, 5, 6]

Sum only the even numbers and print the total.`,
    examples: [{ output: "12" }],
    constraints: ["Use a loop and % 2 == 0"],
    hints: ["Initialize total = 0 before the loop"],
    approach: `Accumulate even values, then print the sum.`,
    starterCode: `nums = [1, 2, 3, 4, 5, 6]
# TODO: sum evens and print
`,
    solutionCode: `nums = [1, 2, 3, 4, 5, 6]
total = 0
for n in nums:
    if n % 2 == 0:
        total += n
print(total)`,
    tests: [{ label: "Even sum", expectedStdout: "12" }],
  }),

  buildScriptProblem({
    order: 13,
    slug: "until-quit",
    title: "Loop Until Quit",
    difficulty: "easy",
    category: "loops",
    description: `Read lines from input until the word quit (lowercase).

For each non-quit line, print it in uppercase.

Sample stdin:

hello
world
quit`,
    examples: [
      {
        input: "hello\nworld\nquit",
        output: "HELLO\nWORLD",
      },
    ],
    constraints: ["Use a while True loop and break on quit", "Compare the raw line to \"quit\""],
    hints: ["line = input() inside the loop"],
    approach: `Read until quit; uppercase and print other lines.`,
    starterCode: `# TODO: read until quit; print other lines uppercased
`,
    solutionCode: `while True:
    line = input()
    if line == "quit":
        break
    print(line.upper())`,
    tests: [
      {
        label: "Upper until quit",
        stdin: "hello\nworld\nquit",
        expectedStdout: "HELLO\nWORLD",
      },
    ],
  }),

  buildBasicsProblem({
    order: 14,
    slug: "factorial",
    title: "Factorial Function",
    difficulty: "easy",
    category: "functions",
    description: `Write a function factorial(n) that returns n! for n >= 0.

0! is 1.`,
    examples: [
      { input: "factorial(5)", output: "120" },
      { input: "factorial(0)", output: "1" },
    ],
    constraints: ["n is a non-negative integer", "Do not use math.factorial"],
    hints: ["Multiply in a loop from 1 to n", "Start result at 1"],
    approach: `Iterate 1..n accumulating the product; return 1 for n == 0.`,
    starterCode: `def factorial(n):
    # Write your code here
    pass
`,
    solutionCode: `def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
`,
    tests: [
      { label: "5!", call: "factorial(5)", expected: "120" },
      { label: "0!", call: "factorial(0)", expected: "1" },
      { label: "3!", call: "factorial(3)", expected: "6" },
    ],
  }),

  buildScriptProblem({
    order: 15,
    slug: "membership-check",
    title: "Membership Check",
    difficulty: "easy",
    category: "operators",
    description: `items = ["apple", "banana", "cherry"]

Print True if "banana" is in items, otherwise False.
Then print True if "mango" is not in items.`,
    examples: [{ output: "True\nTrue" }],
    constraints: ["Use in and not in"],
    hints: ['"banana" in items'],
    approach: `Use membership operators and print each boolean.`,
    starterCode: `items = ["apple", "banana", "cherry"]
# TODO: print membership checks
`,
    solutionCode: `items = ["apple", "banana", "cherry"]
print("banana" in items)
print("mango" not in items)`,
    tests: [{ label: "in / not in", expectedStdout: "True\nTrue" }],
  }),

  buildScriptProblem({
    order: 16,
    slug: "letter-grade",
    title: "Letter Grade",
    difficulty: "easy",
    category: "conditionals",
    description: `score = 85

Print the letter grade:

- A if score >= 90
- B if score >= 80
- C if score >= 70
- D if score >= 60
- F otherwise`,
    examples: [{ output: "B" }],
    constraints: ["Check from highest grade downward"],
    hints: ["Use if / elif / else chain"],
    approach: `Cascade thresholds from A down to F.`,
    starterCode: `score = 85
# TODO: print letter grade
`,
    solutionCode: `score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")`,
    tests: [{ label: "Score 85 → B", expectedStdout: "B" }],
  }),
];
