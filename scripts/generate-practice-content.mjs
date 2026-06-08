/**
 * Generates practice problem modules and hidden-test seed SQL.
 * Run: node scripts/generate-practice-content.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getTopicTasks } from "./practice-topic-registry.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const seg = (type, value) => ({ type, value });

function printValueRule(id, expected, index = 0) {
  return {
    id,
    label: `prints ${expected.split("\n")[0]}`,
    kind: "print-value",
    index,
    expected,
  };
}

function printCountRule(id, expected) {
  return {
    id,
    label: `${expected} print() calls`,
    kind: "print-count",
    expected,
  };
}

function printSequenceRule(id, expected) {
  return {
    id,
    label: "correct order",
    kind: "print-sequence",
    expected,
  };
}

/** Standard 7-task pattern used for most curriculum topics. */
function standardChallenge(order, topicTitle, expected) {
  switch (order) {
    case 1:
      return {
        introSegments: [
          seg("text", "Write a short program related to "),
          seg("code", topicTitle),
          seg("text", ". Print the word "),
          seg("code", expected),
          seg("text", " on one line."),
        ],
        outputOnly: true,
        editorPlaceholder: "# Write your solution here",
        liveCheckRules: [printValueRule("out", expected)],
        emptyMessage: "Use print() to display output.",
        successDetail: "Correct! Great warm-up.",
        constraints: [
          "Use a single print() statement",
          `Output must be exactly: ${expected}`,
        ],
        hints: [`Use: print("${expected}")`],
      };
    case 2:
      return {
        introSegments: [
          seg(
            "text",
            `Create two variables related to ${topicTitle} and print them separated by a comma.`
          ),
        ],
        outputOnly: true,
        expectCommaPrint: true,
        editorPlaceholder: "# create variables and print A,B format",
        emptyMessage: "Create two variables and use print() to display them.",
        successDetail: "Correct! Two values printed with a comma separator.",
        constraints: [
          "Create two variables before printing",
          "Print output must be exactly: A,B",
          "Use a comma separator between the two values",
        ],
        hints: [
          `Create two variables related to ${topicTitle}`,
          'Use comma in print: print(a, b, sep=",")',
          "Output must be exactly A,B",
        ],
      };
    case 3:
      return {
        introSegments: [
          seg("text", "Use a "),
          seg("code", "for"),
          seg("text", ` loop to print numbers from 1 to 4. Practice loops for ${topicTitle}.`),
        ],
        outputOnly: true,
        requiresForLoop: true,
        editorPlaceholder: "# use for loop to print 1 to 4",
        emptyMessage: "Use a for loop with print() to display the numbers.",
        successDetail: "Correct! Your loop printed 1 through 4 perfectly.",
        constraints: [
          "Use a for loop with range()",
          "Print numbers 1, 2, 3, and 4 — each on its own line",
          "No extra lines or blank lines",
        ],
        hints: [
          "Example: for i in range(1, 5): then indent print(i) on the next line",
        ],
      };
    case 4:
      return {
        introSegments: [
          seg("text", "Set "),
          seg("code", "score = 75"),
          seg("text", ". If "),
          seg("code", "score >= 60"),
          seg("text", ", print "),
          seg("code", "Pass"),
          seg("text", ", otherwise print "),
          seg("code", "Fail"),
          seg("text", "."),
        ],
        outputOnly: true,
        requiresIfCondition: true,
        editorPlaceholder: "# write if-else condition",
        emptyMessage: "Define score and use an if condition to print the result.",
        successDetail: "Correct! Your condition evaluated to Pass.",
        constraints: [
          "Define score = 75",
          "Use an if/else to compare score against 60",
          "Output must be exactly: Pass",
        ],
        hints: [
          'Example: score = 75, if score >= 60: print("Pass") else: print("Fail")',
        ],
      };
    case 5:
      return {
        introSegments: [
          seg("text", "Define "),
          seg("code", "greet()"),
          seg("text", " that prints "),
          seg("code", "Hello"),
          seg("text", " and call it once."),
        ],
        outputOnly: true,
        requiresFunction: "greet",
        editorPlaceholder: "# define greet() function",
        emptyMessage: "Define greet() with a print inside, then call it.",
        successDetail: "Correct! Your function printed Hello.",
        constraints: [
          "Define a function named greet",
          "The function must print Hello",
          "Call greet() once after defining it",
        ],
        hints: [
          'Example: def greet(): print("Hello") on the next line, then call greet()',
        ],
      };
    case 6:
      return {
        introSegments: [
          seg("text", `Create a list with three items about ${topicTitle}. Print the `),
          seg("code", "second item"),
          seg("text", " using index "),
          seg("code", "1"),
          seg("text", " (Python counts from 0, so index 1 is the middle item)."),
        ],
        steps: {
          title: "What you need to know",
          items: [
            'A list holds values in order: items = ["a", "middle", "c"]',
            "items[0] is the first item, items[1] is the second.",
            "print(items[1]) displays the second item on its own line.",
          ],
          codePreview: { comment: "# Expected output", lines: ["middle"] },
        },
        outputOnly: true,
        requiresListAccess: true,
        editorPlaceholder: "# create a list and print items[1]",
        liveCheckRules: [printValueRule("middle", expected)],
        emptyMessage: "Create a list with three items, then print the item at index 1.",
        successDetail: "Correct! You accessed the second list item with items[1].",
        constraints: [
          "Create a list with exactly three items",
          "Print the item at index 1 (the second item)",
          `Output must be exactly: ${expected}`,
        ],
        hints: [`Example: items = ["a", "${expected}", "c"], then print(items[1])`],
      };
    case 7:
      return {
        introSegments: [
          seg("text", "Create a dictionary with key "),
          seg("code", "topic"),
          seg("text", " and value "),
          seg("code", expected),
          seg("text", ". Print the value using "),
          seg("code", 'd["topic"]'),
          seg("text", "."),
        ],
        steps: {
          title: "What you need to know",
          items: [
            `A dictionary stores key-value pairs: d = {"topic": "${expected}"}`,
            'Use the key inside square brackets: d["topic"]',
            `print(d["topic"]) displays ${expected} on the screen.`,
          ],
          codePreview: { comment: "# Expected output", lines: [expected] },
        },
        outputOnly: true,
        requiresDictKey: "topic",
        editorPlaceholder: '# create dict and print d["topic"]',
        liveCheckRules: [printValueRule("val", expected)],
        emptyMessage: "Create a dictionary with key topic, then print its value.",
        successDetail: "Correct! You looked up a dictionary value by key.",
        constraints: [
          "Create a dictionary with key topic",
          `The value must be ${expected}`,
          "Print the value using the key topic",
        ],
        hints: [`Example: d = {"topic": "${expected}"}, then print(d["topic"])`],
      };
    default:
      return null;
  }
}

/** Custom challenge configs keyed by topicId + slug. */
const CUSTOM_CHALLENGES = {
  "m2-t1:print-name": (expected) => ({
    introSegments: [
      seg("text", "Use "),
      seg("code", "print()"),
      seg("text", " to display a name on one line. Print "),
      seg("code", expected),
      seg("text", "."),
    ],
    outputOnly: true,
    editorPlaceholder: "# print your name here",
    liveCheckRules: [printValueRule("name", expected)],
    emptyMessage: "Use print() with your name in quotes.",
    successDetail: "Correct! You printed a name.",
    constraints: ["Use a single print() statement", `Output must be exactly: ${expected}`],
    hints: [`Try: print("${expected}")`],
  }),
  "m2-t1:print-sum": (expected) => ({
    introSegments: [
      seg("text", "Use "),
      seg("code", "print()"),
      seg("text", " to show the result of "),
      seg("code", "10 + 5"),
      seg("text", "."),
    ],
    steps: {
      title: "What you need to know",
      items: [
        "Python can add numbers inside print() — no quotes around numbers.",
        "print(10 + 5) calculates the sum and prints the answer.",
      ],
      codePreview: { comment: "# Expected output", lines: [expected] },
    },
    outputOnly: true,
    editorPlaceholder: "# print the sum of 10 and 5",
    liveCheckRules: [printValueRule("sum", expected)],
    emptyMessage: "Use print() with an addition like 10 + 5.",
    successDetail: `Correct! 10 + 5 equals ${expected}.`,
    constraints: ["Use print() with an addition expression", `Output must be exactly: ${expected}`],
    hints: ["Try: print(10 + 5)"],
  }),
  "m2-t1:two-prints": (expected) => ({
    introLead: "Print exactly two lines:",
    introBullets: [
      [seg("text", "Line 1: "), seg("code", "Hello")],
      [seg("text", "Line 2: "), seg("code", "Python")],
    ],
    introFooter: [
      seg("text", "Use two "),
      seg("code", "print()"),
      seg("text", " calls — one for each line."),
    ],
    outputOnly: true,
    editorPlaceholder: "# write two print() statements",
    liveCheckRules: [
      printCountRule("count", 2),
      printValueRule("l1", "Hello", 0),
      printValueRule("l2", "Python", 1),
      printSequenceRule("order", expected.split("\n")),
    ],
    emptyMessage: "Write two print() statements — one per line.",
    successDetail: "Correct! Two lines printed perfectly.",
    constraints: [
      "Use exactly two print() statements",
      "Line 1 must be Hello, line 2 must be Python",
    ],
    hints: ['First: print("Hello"), then: print("Python")'],
  }),
  "m2-t1:input-echo": (expected) => ({
    introSegments: [
      seg("text", "Set "),
      seg("code", 'name = "Mia"'),
      seg("text", ", then print "),
      seg("code", expected),
      seg("text", " using string concatenation with "),
      seg("code", "+"),
      seg("text", "."),
    ],
    outputOnly: true,
    requiresVariables: ["name"],
    editorPlaceholder: "# set name and build the greeting",
    liveCheckRules: [printValueRule("greet", expected)],
    emptyMessage: 'Create name = "Mia" and print a greeting with +.',
    successDetail: "Correct! You combined a variable into a sentence.",
    constraints: [
      'Define name = "Mia"',
      "Use + to join strings",
      `Output must be exactly: ${expected}`,
    ],
    hints: ['Try: name = "Mia" then print("Hello, " + name)'],
  }),
  "m2-t1:format-output": (expected) => ({
    introSegments: [
      seg("text", "Set "),
      seg("code", 'name = "Leo"'),
      seg("text", " and "),
      seg("code", "age = 20"),
      seg("text", ". Use an "),
      seg("code", "f-string"),
      seg("text", " to print: "),
      seg("code", expected),
    ],
    outputOnly: true,
    requiresVariables: ["name", "age"],
    editorPlaceholder: "# use an f-string to format output",
    liveCheckRules: [printValueRule("fmt", expected)],
    emptyMessage: "Create name and age, then print with an f-string.",
    successDetail: "Correct! Your f-string formatted the output.",
    constraints: [
      'Define name = "Leo" and age = 20',
      "Use an f-string inside print()",
      `Output must be exactly: ${expected}`,
    ],
    hints: ['Try: print(f"Name: {name}, Age: {age}")'],
  }),
  "m2-t1:multi-values": (expected) => ({
    introSegments: [
      seg("text", "Print "),
      seg("code", "1"),
      seg("text", ", "),
      seg("code", "2"),
      seg("text", ", and "),
      seg("code", "3"),
      seg("text", " on one line using a single "),
      seg("code", "print()"),
      seg("text", " call (values separated by spaces)."),
    ],
    outputOnly: true,
    editorPlaceholder: "# print 1, 2, 3 in one print() call",
    liveCheckRules: [printValueRule("vals", expected)],
    emptyMessage: "Use one print() with three values: print(1, 2, 3).",
    successDetail: "Correct! One print() showed all three values.",
    constraints: [
      "Use a single print() call with three values",
      `Output must be exactly: ${expected}`,
    ],
    hints: ["Try: print(1, 2, 3) — commas add spaces between values"],
  }),
  "m2-t1:sep-end": (expected) => ({
    introSegments: [
      seg("text", "Print "),
      seg("code", "a"),
      seg("text", ", "),
      seg("code", "b"),
      seg("text", ", and "),
      seg("code", "c"),
      seg("text", " on one line separated by dashes using "),
      seg("code", 'sep="-"'),
      seg("text", "."),
    ],
    outputOnly: true,
    editorPlaceholder: '# print with sep="-"',
    liveCheckRules: [printValueRule("sep", expected)],
    emptyMessage: 'Use print("a", "b", "c", sep="-").',
    successDetail: "Correct! Custom separator worked.",
    constraints: [
      'Use print with sep="-"',
      `Output must be exactly: ${expected}`,
    ],
    hints: ['Try: print("a", "b", "c", sep="-")'],
  }),
  "m2-t3:assign-int": (expected) => ({
    introSegments: [
      seg("text", "Create a variable "),
      seg("code", "age"),
      seg("text", ", set it to "),
      seg("code", "21"),
      seg("text", ", and print it."),
    ],
    outputOnly: true,
    requiresVariables: ["age"],
    editorPlaceholder: "# create age and print it",
    liveCheckRules: [printValueRule("age", expected)],
    emptyMessage: "Create age = 21 and print(age).",
    successDetail: "Correct! You stored and printed an integer.",
    constraints: ["Create variable age = 21", `Output must be exactly: ${expected}`],
    hints: ["Try: age = 21 then print(age)"],
  }),
  "m2-t3:assign-str": (expected) => ({
    introSegments: [
      seg("text", "Create "),
      seg("code", 'city = "Pune"'),
      seg("text", " and print the value of "),
      seg("code", "city"),
      seg("text", "."),
    ],
    outputOnly: true,
    requiresVariables: ["city"],
    editorPlaceholder: "# create city and print it",
    liveCheckRules: [printValueRule("city", expected)],
    emptyMessage: 'Create city = "Pune" and print(city).',
    successDetail: "Correct! You stored and printed a string.",
    constraints: ['Create city = "Pune"', `Output must be exactly: ${expected}`],
    hints: ['Try: city = "Pune" then print(city)'],
  }),
  "m2-t3:reassign": (expected) => ({
    introSegments: [
      seg("text", "Set "),
      seg("code", "x = 1"),
      seg("text", ", then change it to "),
      seg("code", "x = 2"),
      seg("text", " and print "),
      seg("code", "x"),
      seg("text", "."),
    ],
    outputOnly: true,
    requiresVariables: ["x"],
    editorPlaceholder: "# assign x twice and print",
    liveCheckRules: [printValueRule("x", expected)],
    emptyMessage: "Set x = 1, then x = 2, then print(x).",
    successDetail: "Correct! Reassigning changed the value to 2.",
    constraints: ["Assign x twice", `Final output must be exactly: ${expected}`],
    hints: ["Try: x = 1, x = 2, print(x) — the last assignment wins"],
  }),
  "m2-t3:two-vars": (expected) => ({
    introSegments: [
      seg("text", "Create "),
      seg("code", "width = 5"),
      seg("text", " and "),
      seg("code", "height = 3"),
      seg("text", ", then print their product "),
      seg("code", "width * height"),
      seg("text", "."),
    ],
    outputOnly: true,
    requiresVariables: ["width", "height"],
    editorPlaceholder: "# width, height, then print product",
    liveCheckRules: [printValueRule("prod", expected)],
    emptyMessage: "Create width and height, then print(width * height).",
    successDetail: "Correct! 5 × 3 = 15.",
    constraints: [
      "Create width = 5 and height = 3",
      "Print the product, not the variables separately",
      `Output must be exactly: ${expected}`,
    ],
    hints: ["Try: width = 5, height = 3, print(width * height)"],
  }),
  "m2-t3:swap": (expected) => ({
    introSegments: [
      seg("text", "Start with "),
      seg("code", "a = 1"),
      seg("text", " and "),
      seg("code", "b = 2"),
      seg("text", ". Swap their values, then print "),
      seg("code", "a"),
      seg("text", " on line 1 and "),
      seg("code", "b"),
      seg("text", " on line 2."),
    ],
    outputOnly: true,
    requiresVariables: ["a", "b"],
    editorPlaceholder: "# swap a and b, print both",
    liveCheckRules: [
      printCountRule("count", 2),
      printValueRule("a", "2", 0),
      printValueRule("b", "1", 1),
      printSequenceRule("order", expected.split("\n")),
    ],
    emptyMessage: "Swap a and b using a, b = b, a, then print both.",
    successDetail: "Correct! Values swapped successfully.",
    constraints: [
      "Start with a = 1 and b = 2",
      "Swap using a, b = b, a",
      "Print a then b — output must be 2 then 1",
    ],
    hints: ["Try: a, b = 1, 2 then a, b = b, a then print(a) and print(b)"],
  }),
  "m2-t3:naming": (expected) => ({
    introSegments: [
      seg("text", "Use a descriptive variable name "),
      seg("code", "total_score"),
      seg("text", ", set it to "),
      seg("code", "88"),
      seg("text", ", and print it."),
    ],
    outputOnly: true,
    requiresVariables: ["total_score"],
    editorPlaceholder: "# use total_score variable",
    liveCheckRules: [printValueRule("score", expected)],
    emptyMessage: "Create total_score = 88 and print it.",
    successDetail: "Correct! Descriptive names make code easier to read.",
    constraints: [
      "Use the variable name total_score",
      `Output must be exactly: ${expected}`,
    ],
    hints: ["Try: total_score = 88 then print(total_score)"],
  }),
  "m2-t3:multi-assign": (expected) => ({
    introSegments: [
      seg("text", "Assign three values at once: "),
      seg("code", "x, y, z = 1, 2, 3"),
      seg("text", ". Print their sum "),
      seg("code", "x + y + z"),
      seg("text", "."),
    ],
    outputOnly: true,
    requiresVariables: ["x", "y", "z"],
    editorPlaceholder: "# multiple assignment, then print sum",
    liveCheckRules: [printValueRule("sum", expected)],
    emptyMessage: "Use x, y, z = 1, 2, 3 then print(x + y + z).",
    successDetail: "Correct! 1 + 2 + 3 = 6.",
    constraints: [
      "Use x, y, z = 1, 2, 3",
      "Print the sum of all three",
      `Output must be exactly: ${expected}`,
    ],
    hints: ["Try: x, y, z = 1, 2, 3 then print(x + y + z)"],
  }),
};

function resolveChallenge(topicId, slug, order, topicTitle, expected) {
  const customKey = `${topicId}:${slug}`;
  if (CUSTOM_CHALLENGES[customKey]) {
    const cfg = CUSTOM_CHALLENGES[customKey](expected);
    return cfg;
  }
  return standardChallenge(order, topicTitle, expected);
}

const TOPIC_TEMPLATES = {
  "m1-t1": {
    theme: "Introduction to Programming",
    tasks: [
      ["hello-world", "Hello, World!", "easy", "Print exactly one line: Hello, World!", "Hello, World!"],
      ["two-lines", "Two Lines of Output", "easy", "Print Alex on line 1 and Data Science on line 2.", "Alex\nData Science"],
      ["print-numbers", "Print Three Numbers", "easy", "Print 1, 2, and 3 each on its own line.", "1\n2\n3"],
      ["comment-then-print", "Comment and Print", "easy", "Add a comment, then print Python is fun.", "Python is fun"],
      ["multiple-prints", "Build a Mini Banner", "medium", "Print ====, Welcome to Python, ====", "====\nWelcome to Python\n===="],
      ["format-intro", "Intro Sentence", "medium", "Create name and topic variables, print intro sentence.", "I am Sam learning Python"],
      ["calc-print", "Print a Sum", "medium", "Print the result of 17 + 25.", "42"],
    ],
  },
};

function defaultTemplate(topicId, title) {
  const slug = topicId.replace(/-/g, "_");
  return {
    theme: title,
    tasks: [
      [`${slug}-1`, `${title}: Warm-up`, "easy", `Write a short program related to ${title}. Print Ready on one line.`, "Ready"],
      [`${slug}-2`, `${title}: Output Two Values`, "easy", `Create two variables about ${title} and print them comma-separated.`, "A,B"],
      [`${slug}-3`, `${title}: Simple Loop`, "medium", `Use a for loop to print 1 through 4 for ${title}.`, "1\n2\n3\n4"],
      [`${slug}-4`, `${title}: Condition`, "medium", `Set score = 75. If score >= 60 print Pass else Fail.`, "Pass"],
      [`${slug}-5`, `${title}: Function Stub`, "medium", `Define greet() that prints Hello and call it.`, "Hello"],
      [`${slug}-6`, `${title}: List Practice`, "hard", `Create a list of three items and print index 1.`, "middle"],
      [`${slug}-7`, `${title}: Dict Lookup`, "hard", `Create a dict with key topic and print its value.`, "Python"],
    ],
  };
}

const CURRICULUM_TOPICS = [
  ["m1-t1", "Introduction to Programming"],
  ["m1-t2", "Choosing Python"],
  ["m1-t3", "Setting up Python Environment"],
  ["m1-t4", "Python IDEs"],
  ["m2-t1", "Input and Output"],
  ["m2-t2", "Comments"],
  ["m2-t3", "Variables"],
  ["m2-t4", "Data Types"],
  ["m2-t5", "Typecasting"],
  ["m3-t1", "Arithmetic Operators"],
  ["m3-t2", "Assignment Operators"],
  ["m3-t3", "Comparison Operators"],
  ["m3-t4", "Logical Operators"],
  ["m3-t5", "Identity Operators"],
  ["m3-t6", "Membership Operators"],
  ["m3-t7", "Bitwise Operators"],
  ["m4-t1", "Creating Strings"],
  ["m4-t2", "Formatting Strings"],
  ["m4-t3", "Indexing Strings"],
  ["m4-t4", "Slicing Strings"],
  ["m4-t5", "String Methods"],
  ["m5-t1", "Creating Lists"],
  ["m5-t2", "List Properties"],
  ["m5-t3", "Indexing Lists"],
  ["m5-t4", "Slicing Lists"],
  ["m5-t5", "List Methods"],
  ["m5-t6", "Modifying Lists"],
  ["m6-t1", "Tuple Syntax"],
  ["m6-t2", "Tuple Properties"],
  ["m6-t3", "Indexing Tuples"],
  ["m6-t4", "Slicing Tuples"],
  ["m6-t5", "Tuple Methods"],
  ["m7-t1", "Set Syntax"],
  ["m7-t2", "Updating Sets"],
  ["m7-t3", "Set Operations"],
  ["m7-t4", "Set Methods"],
  ["m8-t1", "Dictionary Syntax"],
  ["m8-t2", "Keys and Values"],
  ["m8-t3", "Accessing Dictionaries"],
  ["m8-t4", "Dictionary Methods"],
  ["m9-t1", "if Statement"],
  ["m9-t2", "if-else"],
  ["m9-t3", "if-elif-else"],
  ["m10-t1", "while Loop"],
  ["m10-t2", "for Loop"],
  ["m10-t3", "break and continue"],
  ["m10-t4", "pass"],
  ["m10-t5", "range()"],
  ["m11-t1", "List Comprehension Syntax"],
  ["m11-t2", "Uses of Comprehensions"],
  ["m11-t3", "Dictionary Comprehensions"],
  ["m12-t1", "Creating Functions"],
  ["m12-t2", "Calling Functions"],
  ["m12-t3", "Function Arguments"],
  ["m12-t4", "Variables in Functions"],
  ["m12-t5", "Recursion"],
  ["m13-t1", "Lambda Functions"],
];

const ENHANCED = {
  "m2-t1": {
    tasks: [
      ["print-name", "Print Your Name", "easy", "Use print() to display your name on one line.", "Jordan"],
      ["print-sum", "Print a Calculation", "easy", "Print the result of 10 + 5.", "15"],
      ["two-prints", "Two Messages", "easy", "Print Hello on line 1 and Python on line 2.", "Hello\nPython"],
      ["input-echo", "Echo Input (Simulated)", "medium", 'Set name = "Mia" then print Hello, Mia using concatenation.', "Hello, Mia"],
      ["format-output", "Formatted Output", "medium", 'Use f-string: name = "Leo", age = 20, print Name: Leo, Age: 20', "Name: Leo, Age: 20"],
      ["multi-values", "Print Three Values", "medium", "Print 1, 2, 3 using one print with default separator.", "1 2 3"],
      ["sep-end", "Custom Separator", "hard", "Print a, b, c separated by dashes using sep='-'.", "a-b-c"],
    ],
  },
  "m2-t3": {
    tasks: [
      ["assign-int", "Store an Integer", "easy", "Create age = 21 and print age.", "21"],
      ["assign-str", "Store a String", "easy", 'Create city = "Pune" and print city.', "Pune"],
      ["reassign", "Reassign Variable", "easy", "Set x = 1, then x = 2, print x.", "2"],
      ["two-vars", "Two Variables", "medium", "Create width = 5 and height = 3, print width * height.", "15"],
      ["swap", "Swap Values", "medium", "Swap a and b. Start a=1, b=2. Print a then b.", "2\n1"],
      ["naming", "Descriptive Names", "medium", "Use total_score = 88 and print it.", "88"],
      ["multi-assign", "Multiple Assignment", "hard", "Use x, y, z = 1, 2, 3 and print their sum.", "6"],
    ],
  },
};

function getTemplate(topicId, title) {
  if (TOPIC_TEMPLATES[topicId]) return TOPIC_TEMPLATES[topicId];
  if (ENHANCED[topicId]) return { theme: title, tasks: ENHANCED[topicId].tasks };
  const conceptTasks = getTopicTasks(topicId, title);
  if (conceptTasks) return { theme: title, tasks: conceptTasks };
  console.warn(`No concept tasks for ${topicId}, using generic fallback.`);
  return defaultTemplate(topicId, title);
}

function buildProblem(
  topicId,
  order,
  slug,
  title,
  difficulty,
  description,
  expected,
  topicTitle,
  challengeOverride
) {
  const id = `${topicId}-p${String(order).padStart(2, "0")}`;
  const challengeCfg =
    challengeOverride && Object.keys(challengeOverride).length > 0
      ? challengeOverride
      : resolveChallenge(topicId, slug, order, topicTitle, expected);
  const {
    constraints: challengeConstraints,
    hints: challengeHints,
    ...challengeContent
  } = challengeCfg;

  const problem = {
    id,
    topicId,
    slug,
    title,
    difficulty,
    order,
    layout: "challenge",
    description,
    challengeContent,
    examples: [{ output: expected }],
    constraints: challengeConstraints,
    hints: challengeHints,
    starterCode: "",
    publicTests: [
      {
        id: `${id}-t1`,
        label: "Sample test",
        expectedStdout: expected,
        visibility: "public",
      },
    ],
  };

  return problem;
}

const allProblems = [];
const hiddenInserts = [];

for (const [topicId, title] of CURRICULUM_TOPICS) {
  const tpl = getTemplate(topicId, title);
  tpl.tasks.forEach((taskRow, i) => {
    const [slug, pTitle, diff, desc, expected, challengeOverride] = taskRow;
    const order = i + 1;
    const p = buildProblem(
      topicId,
      order,
      slug,
      pTitle,
      diff,
      desc,
      expected,
      title,
      challengeOverride
    );
    allProblems.push(p);
    hiddenInserts.push({
      problem_id: p.id,
      tests_json: {
        tests: [
          { expectedStdout: expected },
          { setup: "# hidden check", expectedStdout: expected },
        ],
      },
    });
  });
}

const byModule = {};
for (const p of allProblems) {
  const mod = p.topicId.match(/^m(\d+)/)[1];
  if (!byModule[mod]) byModule[mod] = [];
  byModule[mod].push(p);
}

const practiceDir = path.join(root, "src", "data", "practice");
fs.mkdirSync(practiceDir, { recursive: true });

for (const [mod, problems] of Object.entries(byModule)) {
  if (mod === "1") {
    console.log("Skipping module-1.ts (preserving hand-crafted challenge content).");
    continue;
  }
  const content = `import type { PracticeProblem } from "@/lib/types";

export const module${mod}Practice: PracticeProblem[] = ${JSON.stringify(problems, null, 2)};
`;
  fs.writeFileSync(path.join(practiceDir, `module-${mod}.ts`), content);
}

const indexContent = `import type { PracticeProblem } from "@/lib/types";
import { modules } from "@/data/curriculum";
import { getPracticeCountByTopic } from "./meta";
${Object.keys(byModule)
  .sort((a, b) => Number(a) - Number(b))
  .map((m) => `import { module${m}Practice } from "./module-${m}";`)
  .join("\n")}

const allProblems: PracticeProblem[] = [
${Object.keys(byModule)
  .sort((a, b) => Number(a) - Number(b))
  .map((m) => `  ...module${m}Practice,`)
  .join("\n")}
];

export { getPracticeCountByTopic, getTotalPracticeCount } from "./meta";

export function getAllPracticeProblems(): PracticeProblem[] {
  return allProblems;
}

export function getProblemsByTopic(topicId: string): PracticeProblem[] {
  return allProblems.filter((p) => p.topicId === topicId).sort((a, b) => a.order - b.order);
}

export function getProblemBySlug(
  topicId: string,
  problemSlug: string
): PracticeProblem | undefined {
  return allProblems.find((p) => p.topicId === topicId && p.slug === problemSlug);
}

export function getProblemModuleTopic(problem: PracticeProblem) {
  for (const mod of modules) {
    const topic = mod.topics.find((t) => t.id === problem.topicId);
    if (topic) return { module: mod, topic };
  }
  return null;
}

export function getPracticeStaticParams() {
  const params: { moduleSlug: string; topicSlug: string; problemSlug: string }[] = [];
  for (const p of allProblems) {
    const ctx = getProblemModuleTopic(p);
    if (ctx && ctx.topic.published) {
      params.push({
        moduleSlug: ctx.module.slug,
        topicSlug: ctx.topic.slug,
        problemSlug: p.slug,
      });
    }
  }
  return params;
}

export function getPracticeStatsByModule(moduleId: number) {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return { total: 0, topics: [] as { topicId: string; count: number }[] };
  const topics = mod.topics
    .filter((t) => t.published)
    .map((t) => ({ topicId: t.id, count: getPracticeCountByTopic(t.id) }));
  return { total: topics.reduce((s, t) => s + t.count, 0), topics };
}
`;

fs.writeFileSync(path.join(practiceDir, "index.ts"), indexContent);

const topicCounts = {};
for (const p of allProblems) {
  topicCounts[p.topicId] = (topicCounts[p.topicId] || 0) + 1;
}
const metaContent = `/** Auto-generated — run npm run generate:practice */
export const TOTAL_PRACTICE_COUNT = ${allProblems.length};

export const TOPIC_PRACTICE_COUNTS: Record<string, number> = ${JSON.stringify(topicCounts, null, 2)};

export function getPracticeCountByTopic(topicId: string): number {
  return TOPIC_PRACTICE_COUNTS[topicId] ?? 0;
}

export function getTotalPracticeCount(): number {
  return TOTAL_PRACTICE_COUNT;
}
`;
fs.writeFileSync(path.join(practiceDir, "meta.ts"), metaContent);

const values = hiddenInserts.map(
  (h) =>
    `  ('${h.problem_id}', '${JSON.stringify(h.tests_json).replace(/'/g, "''")}'::jsonb)`
);
const sql = [
  "-- Auto-generated hidden tests seed",
  "insert into public.practice_hidden_tests (problem_id, tests_json) values",
  values.join(",\n"),
  "on conflict (problem_id) do update set tests_json = excluded.tests_json, updated_at = now();",
].join("\n");
fs.writeFileSync(path.join(root, "supabase", "migrations", "002_seed_hidden_tests.sql"), sql);

console.log(`Generated ${allProblems.length} problems across ${Object.keys(byModule).length} modules.`);
