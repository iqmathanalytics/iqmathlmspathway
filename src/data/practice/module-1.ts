import type { PracticeProblem } from "@/lib/types";

export const module1Practice: PracticeProblem[] = [
  {
    "id": "m1-t1-p01",
    "topicId": "m1-t1",
    "slug": "hello-world",
    "title": "Hello, World!",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Your very first Python challenge! Write a program that prints Hello, World! exactly to the screen.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Your very first Python challenge! Write a program that prints "
        },
        { "type": "code", "value": "Hello, World!" },
        { "type": "text", "value": " exactly to the screen." }
      ],
      "learnSection": {
        "title": "What you need to know",
        "body": "In Python, the print() function displays text on the screen. Whatever you put inside the parentheses (wrapped in quotes) gets printed.",
        "codeExample": "print(\"anything you want here\")"
      },
      "inputLabel": "No input needed"
    },
    "examples": [
      {
        "input": "No input needed",
        "output": "Hello, World!"
      }
    ],
    "constraints": [
      "Use Python 3 syntax",
      "Output must match exactly — capital H, comma after Hello, and an exclamation mark",
      "Print exactly one line (no extra blank lines)"
    ],
    "hints": [
      "Use the print() function — it's Python's way of displaying output on the screen.",
      "Put your text inside quotes: print(\"your text\") — single or double quotes both work.",
      "The exact answer is: print(\"Hello, World!\") — capital H, comma, space, then World!"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hello, World!",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t1-p02",
    "topicId": "m1-t1",
    "slug": "two-lines",
    "title": "Two Lines of Output",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Write a program that prints exactly two lines: Alex and Data Science.",
    "challengeContent": {
      "introLead": "Write a program that prints exactly two lines:",
      "introBullets": [
        [
          { "type": "text", "value": "First line: " },
          { "type": "code", "value": "Alex" }
        ],
        [
          { "type": "text", "value": "Second line: " },
          { "type": "code", "value": "Data Science" }
        ]
      ],
      "introFooter": [
        { "type": "text", "value": "Use two " },
        { "type": "code", "value": "print()" },
        {
          "type": "text",
          "value": " calls. Do not add extra blank lines or spaces."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Each print() call outputs one line automatically — Python adds a newline at the end for you.",
          "To print two lines, simply write two print() statements one after the other.",
          "The order matters — the first print() appears on line 1, the second on line 2."
        ],
        "codePreview": {
          "comment": "# Example: printing two lines",
          "lines": ["Line one", "Line two"]
        }
      },
      "inputLabel": "No input needed",
      "editorPlaceholder": "# Write your two print() statements here...",
      "liveCheckRules": [
        {
          "id": "count",
          "label": "2 print() calls",
          "kind": "print-count",
          "expected": 2
        },
        {
          "id": "line1",
          "label": "Line 1: Alex",
          "kind": "print-value",
          "index": 0,
          "expected": "Alex"
        },
        {
          "id": "line2",
          "label": "Line 2: Data Science",
          "kind": "print-value",
          "index": 1,
          "expected": "Data Science"
        }
      ],
      "emptyMessage": "Nothing to run! Write your two print() statements first.",
      "successDetail": "You printed two lines perfectly!"
    },
    "examples": [
      {
        "input": "No input needed",
        "output": "Alex\nData Science"
      }
    ],
    "constraints": [
      "Use exactly two print() statements",
      "Line 1 must be exactly: Alex",
      "Line 2 must be exactly: Data Science",
      "No extra lines, spaces, or blank lines"
    ],
    "hints": [
      "You need two separate print() statements — one for each line of output.",
      "First print should output Alex and the second should output Data Science — in that exact order.",
      "The full solution is: print(\"Alex\") then print(\"Data Science\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "Alex\nData Science",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t1-p03",
    "topicId": "m1-t1",
    "slug": "print-numbers",
    "title": "Print Three Numbers",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the numbers 1, 2, and 3 — each on its own line.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Print the numbers " },
        { "type": "code", "value": "1" },
        { "type": "text", "value": ", " },
        { "type": "code", "value": "2" },
        { "type": "text", "value": ", and " },
        { "type": "code", "value": "3" },
        {
          "type": "text",
          "value": " — each on its own line. You can use strings or numbers inside "
        },
        { "type": "code", "value": "print()" },
        { "type": "text", "value": " — both work!" }
      ],
      "approaches": {
        "title": "Two valid approaches",
        "items": [
          {
            "title": "Using numbers",
            "note": "Pass the number directly — no quotes needed.",
            "lines": [
              { "type": "number", "value": "1" },
              { "type": "number", "value": "2" },
              { "type": "number", "value": "3" }
            ]
          },
          {
            "title": "Using strings",
            "note": "Wrap in quotes — Python prints the same output.",
            "lines": [
              { "type": "string", "value": "1" },
              { "type": "string", "value": "2" },
              { "type": "string", "value": "3" }
            ]
          }
        ]
      },
      "inputLabel": "No input needed",
      "editorPlaceholder": "# Write your three print() statements here...",
      "liveCheckRules": [
        {
          "id": "p1",
          "label": "prints 1",
          "kind": "print-contains",
          "value": "1"
        },
        {
          "id": "p2",
          "label": "prints 2",
          "kind": "print-contains",
          "value": "2"
        },
        {
          "id": "p3",
          "label": "prints 3",
          "kind": "print-contains",
          "value": "3"
        },
        {
          "id": "order",
          "label": "correct order",
          "kind": "print-sequence",
          "expected": ["1", "2", "3"]
        }
      ],
      "emptyMessage": "Nothing to run! Write your three print() statements first.",
      "successDetail": "Three numbers, three lines — perfect!",
      "printCountHint": "one for each number"
    },
    "examples": [
      {
        "input": "No input needed",
        "output": "1\n2\n3"
      }
    ],
    "constraints": [
      "Use Python 3 syntax",
      "Output must be exactly three lines: 1, 2, 3",
      "No extra lines, spaces, or blank lines"
    ],
    "hints": [
      "You need three separate print() statements — one for each number.",
      "You can write print(1) (number) or print(\"1\") (string) — both produce the same output.",
      "Full solution: print(1), print(2), print(3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t1-p04",
    "topicId": "m1-t1",
    "slug": "comment-then-print",
    "title": "Comment and Print",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Add a comment describing the next line, then print Python is fun.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Add a comment describing the next line, then print " },
        { "type": "code", "value": "Python is fun" },
        { "type": "text", "value": "." }
      ],
      "outputOnly": true,
      "requiresComment": true,
      "editorPlaceholder": "# write comment + print statement here",
      "emptyMessage": "Write a comment and a print() statement first.",
      "successDetail": "Correct! Your comment and print statement work perfectly."
    },
    "examples": [
      {
        "output": "Python is fun"
      }
    ],
    "constraints": [
      "Include a comment line starting with #",
      "Use print() to output exactly: Python is fun"
    ],
    "hints": [
      "Start with a comment line like # This prints a message, then add print(\"Python is fun\") on the next line."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Python is fun",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t1-p05",
    "topicId": "m1-t1",
    "slug": "multiple-prints",
    "title": "Build a Mini Banner",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print three lines: ====, Welcome to Python, ====",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Print three lines exactly: " },
        { "type": "code", "value": "====" },
        { "type": "text", "value": ", " },
        { "type": "code", "value": "Welcome to Python" },
        { "type": "text", "value": ", " },
        { "type": "code", "value": "====" },
        { "type": "text", "value": "." }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# print banner here",
      "liveCheckRules": [
        {
          "id": "line1",
          "label": "Line 1: ====",
          "kind": "print-value",
          "index": 0,
          "expected": "===="
        },
        {
          "id": "line2",
          "label": "Line 2: Welcome to Python",
          "kind": "print-value",
          "index": 1,
          "expected": "Welcome to Python"
        },
        {
          "id": "line3",
          "label": "Line 3: ====",
          "kind": "print-value",
          "index": 2,
          "expected": "===="
        },
        {
          "id": "order",
          "label": "correct order",
          "kind": "print-sequence",
          "expected": ["====", "Welcome to Python", "===="]
        }
      ],
      "emptyMessage": "Write three print() statements to build the banner.",
      "successDetail": "Your mini banner looks perfect!",
      "printCountHint": "one for each banner line"
    },
    "examples": [
      {
        "output": "====\nWelcome to Python\n===="
      }
    ],
    "constraints": [
      "Use exactly three print() statements",
      "Line 1 and line 3 must be exactly ====",
      "Line 2 must be exactly Welcome to Python",
      "No extra lines or blank lines"
    ],
    "hints": [
      "Use three print() statements. Example: print(\"====\"), print(\"Welcome to Python\"), print(\"====\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "====\nWelcome to Python\n====",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t1-p06",
    "topicId": "m1-t1",
    "slug": "format-intro",
    "title": "Intro Sentence",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Create two variables and print a sentence that introduces who you are and what you are learning.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create variables " },
        { "type": "code", "value": "name" },
        { "type": "text", "value": " and " },
        { "type": "code", "value": "topic" },
        { "type": "text", "value": ". Set " },
        { "type": "code", "value": "name = \"Sam\"" },
        { "type": "text", "value": " and " },
        { "type": "code", "value": "topic = \"Python\"" },
        { "type": "text", "value": ", then print this exact sentence: " },
        { "type": "code", "value": "I am Sam learning Python" }
      ],
      "outputOnly": true,
      "requiresVariables": ["name", "topic"],
      "editorPlaceholder": "# set name and topic, then print the sentence",
      "liveCheckRules": [
        {
          "id": "sentence",
          "label": "prints intro sentence",
          "kind": "print-value",
          "index": 0,
          "expected": "I am Sam learning Python"
        }
      ],
      "emptyMessage": "Create name and topic variables, then use print() to build the sentence.",
      "successDetail": "Perfect! You combined variables into a sentence."
    },
    "examples": [
      {
        "output": "I am Sam learning Python"
      }
    ],
    "constraints": [
      "Create two variables: name and topic",
      "Set name to Sam and topic to Python",
      "Output must be exactly: I am Sam learning Python"
    ],
    "hints": [
      "Example: name = \"Sam\", topic = \"Python\", then print(\"I am\", name, \"learning\", topic)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "I am Sam learning Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t1-p07",
    "topicId": "m1-t1",
    "slug": "calc-print",
    "title": "Print a Sum",
    "difficulty": "medium",
    "order": 7,
    "layout": "challenge",
    "description": "Use print() to show the result of adding 17 and 25.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Use " },
        { "type": "code", "value": "print()" },
        { "type": "text", "value": " to show the result of " },
        { "type": "code", "value": "17 + 25" },
        { "type": "text", "value": "." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Python can do math inside print() — no quotes needed around numbers.",
          "The + operator adds two numbers together.",
          "print(17 + 25) calculates the sum and prints the answer automatically."
        ],
        "codePreview": {
          "comment": "# Example output",
          "lines": ["42"]
        }
      },
      "outputOnly": true,
      "editorPlaceholder": "# print the sum of 17 and 25",
      "liveCheckRules": [
        {
          "id": "sum",
          "label": "prints 42",
          "kind": "print-value",
          "index": 0,
          "expected": "42"
        }
      ],
      "emptyMessage": "Use print() with an addition expression like 17 + 25.",
      "successDetail": "Correct! 17 + 25 equals 42."
    },
    "examples": [
      {
        "output": "42"
      }
    ],
    "constraints": [
      "Use print() with an addition expression",
      "Output must be exactly: 42",
      "No extra lines or text"
    ],
    "hints": [
      "Try: print(17 + 25) — Python adds the numbers and prints the result."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "42",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p01",
    "topicId": "m1-t2",
    "slug": "m1_t2-1",
    "title": "Choosing Python: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a simple program that prints the word Ready on a single line.",
    "challengeContent": {
      "badgeVariant": "blue",
      "introSegments": [
        { "type": "text", "value": "Write a simple program that prints the word " },
        { "type": "code", "value": "Ready" },
        { "type": "text", "value": " on a single line." }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# print Ready here",
      "liveCheckRules": [
        {
          "id": "ready",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! You're ready to learn Python."
    },
    "examples": [
      {
        "output": "Ready"
      }
    ],
    "constraints": [
      "Use a single print() statement",
      "Output must be exactly: Ready"
    ],
    "hints": [
      "Use a single print statement: print(\"Ready\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p02",
    "topicId": "m1-t2",
    "slug": "m1_t2-2",
    "title": "Choosing Python: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables related to Choosing Python and print them separated by a comma.",
    "challengeContent": {
      "badgeVariant": "blue",
      "introSegments": [
        { "type": "text", "value": "Create two variables related to Choosing Python and print them separated by a comma." }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create two variables and print with comma",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two variables printed with a comma separator."
    },
    "examples": [
      {
        "output": "A,B"
      }
    ],
    "constraints": [
      "Create two variables before printing",
      "Print output must be exactly: A,B",
      "Use a comma separator between the two values"
    ],
    "hints": [
      "Create two variables like lang and choice",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p03",
    "topicId": "m1-t2",
    "slug": "m1_t2-3",
    "title": "Choosing Python: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print numbers from 1 to 4 for basic practice.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Use a " },
        { "type": "code", "value": "for" },
        { "type": "text", "value": " loop to print numbers from 1 to 4 for basic practice." }
      ],
      "outputOnly": true,
      "requiresForLoop": true,
      "editorPlaceholder": "# use for loop to print 1 to 4",
      "emptyMessage": "Use a for loop with print() to display the numbers.",
      "successDetail": "Correct! Your loop printed 1 through 4 perfectly."
    },
    "examples": [
      {
        "output": "1\n2\n3\n4"
      }
    ],
    "constraints": [
      "Use a for loop with range()",
      "Print numbers 1, 2, 3, and 4 — each on its own line",
      "No extra lines or blank lines"
    ],
    "hints": [
      "Example: for i in range(1, 5): then indent print(i) on the next line"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p04",
    "topicId": "m1-t2",
    "slug": "m1_t2-4",
    "title": "Choosing Python: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else print Fail.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Set " },
        { "type": "code", "value": "score = 75" },
        { "type": "text", "value": ". If score is greater than or equal to 60, print " },
        { "type": "code", "value": "Pass" },
        { "type": "text", "value": ", otherwise print " },
        { "type": "code", "value": "Fail" },
        { "type": "text", "value": "." }
      ],
      "outputOnly": true,
      "requiresIfCondition": true,
      "editorPlaceholder": "# set score and apply condition",
      "emptyMessage": "Define score and use an if condition to print the result.",
      "successDetail": "Correct! Your condition evaluated to Pass."
    },
    "examples": [
      {
        "output": "Pass"
      }
    ],
    "constraints": [
      "Define score = 75",
      "Use an if/else to compare score against 60",
      "Output must be exactly: Pass"
    ],
    "hints": [
      "Example: score = 75, then if score >= 60: print(\"Pass\") else: print(\"Fail\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p05",
    "topicId": "m1-t2",
    "slug": "m1_t2-5",
    "title": "Choosing Python: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define a function greet() that prints Hello, and call it once.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Define a function " },
        { "type": "code", "value": "greet()" },
        { "type": "text", "value": " that prints " },
        { "type": "code", "value": "Hello" },
        { "type": "text", "value": ", and call it once." }
      ],
      "outputOnly": true,
      "requiresFunction": "greet",
      "editorPlaceholder": "# define greet() and call it",
      "emptyMessage": "Define greet() with a print inside, then call it.",
      "successDetail": "Correct! Your function printed Hello."
    },
    "examples": [
      {
        "output": "Hello"
      }
    ],
    "constraints": [
      "Define a function named greet",
      "The function must print Hello",
      "Call greet() once after defining it"
    ],
    "hints": [
      "Example: def greet(): print(\"Hello\") on the next indented line, then call greet() on its own line"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p06",
    "topicId": "m1-t2",
    "slug": "m1_t2-6",
    "title": "Choosing Python: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list with three items and print the second item (at index 1).",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create a list with three items about Choosing Python. Print the " },
        { "type": "code", "value": "second item" },
        { "type": "text", "value": " using index " },
        { "type": "code", "value": "1" },
        { "type": "text", "value": " (Python counts from 0, so index 1 is the middle item)." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds multiple values in order: items = [\"a\", \"middle\", \"c\"]",
          "Use square brackets to access one item: items[0] is first, items[1] is second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": ["middle"]
        }
      },
      "outputOnly": true,
      "requiresListAccess": true,
      "editorPlaceholder": "# create a list and print items[1]",
      "liveCheckRules": [
        {
          "id": "middle",
          "label": "prints middle",
          "kind": "print-value",
          "index": 0,
          "expected": "middle"
        }
      ],
      "emptyMessage": "Create a list with three items, then print the item at index 1.",
      "successDetail": "Correct! You accessed the second list item with items[1]."
    },
    "examples": [
      {
        "output": "middle"
      }
    ],
    "constraints": [
      "Create a list with exactly three items",
      "Print the item at index 1 (the second item)",
      "Output must be exactly: middle"
    ],
    "hints": [
      "Example: items = [\"a\", \"middle\", \"c\"], then print(items[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t2-p07",
    "topicId": "m1-t2",
    "slug": "m1_t2-7",
    "title": "Choosing Python: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dictionary with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create a dictionary with key " },
        { "type": "code", "value": "topic" },
        { "type": "text", "value": " and value " },
        { "type": "code", "value": "Python" },
        { "type": "text", "value": ". Print the value using " },
        { "type": "code", "value": "d[\"topic\"]" },
        { "type": "text", "value": "." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets to get a value: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": ["Python"]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "python",
          "label": "prints Python",
          "kind": "print-value",
          "index": 0,
          "expected": "Python"
        }
      ],
      "emptyMessage": "Create a dictionary with key topic, then print its value.",
      "successDetail": "Correct! You looked up a dictionary value by key."
    },
    "examples": [
      {
        "output": "Python"
      }
    ],
    "constraints": [
      "Create a dictionary with key topic",
      "The value must be Python",
      "Print the value using the key topic"
    ],
    "hints": [
      "Example: d = {\"topic\": \"Python\"}, then print(d[\"topic\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p01",
    "topicId": "m1-t3",
    "slug": "m1_t3-1",
    "title": "Setting up Python Environment: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Setting up Python Environment. Print the word Ready on one line.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Write a short program related to Setting up Python Environment. Print the word " },
        { "type": "code", "value": "Ready" },
        { "type": "text", "value": " on one line." }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "ready",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! Your environment is ready to go."
    },
    "examples": [
      {
        "output": "Ready"
      }
    ],
    "constraints": [
      "Use a single print() statement",
      "Output must be exactly: Ready"
    ],
    "hints": [
      "Use: print(\"Ready\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p02",
    "topicId": "m1-t3",
    "slug": "m1_t3-2",
    "title": "Setting up Python Environment: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables relevant to Setting up Python Environment and print them separated by a comma.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create two variables relevant to Setting up Python Environment and print them separated by a comma." }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two variables printed with a comma separator."
    },
    "examples": [
      {
        "output": "A,B"
      }
    ],
    "constraints": [
      "Create two variables before printing",
      "Print output must be exactly: A,B",
      "Use a comma separator between the two values"
    ],
    "hints": [
      "Create two variables like env and python",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p03",
    "topicId": "m1-t3",
    "slug": "m1_t3-3",
    "title": "Setting up Python Environment: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print numbers from 1 to 4 for basic practice.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Use a " },
        { "type": "code", "value": "for" },
        { "type": "text", "value": " loop to print numbers from 1 to 4. This is basic loop practice for Setting up Python Environment." }
      ],
      "outputOnly": true,
      "requiresForLoop": true,
      "editorPlaceholder": "# use for loop to print 1 to 4",
      "emptyMessage": "Use a for loop with print() to display the numbers.",
      "successDetail": "Correct! Your loop printed 1 through 4 perfectly."
    },
    "examples": [
      {
        "output": "1\n2\n3\n4"
      }
    ],
    "constraints": [
      "Use a for loop with range()",
      "Print numbers 1, 2, 3, and 4 — each on its own line",
      "No extra lines or blank lines"
    ],
    "hints": [
      "Example: for i in range(1, 5): then indent print(i) on the next line"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p04",
    "topicId": "m1-t3",
    "slug": "m1_t3-4",
    "title": "Setting up Python Environment: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else print Fail.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Set " },
        { "type": "code", "value": "score = 75" },
        { "type": "text", "value": ". If " },
        { "type": "code", "value": "score >= 60" },
        { "type": "text", "value": ", print " },
        { "type": "code", "value": "Pass" },
        { "type": "text", "value": ", otherwise print " },
        { "type": "code", "value": "Fail" },
        { "type": "text", "value": "." }
      ],
      "outputOnly": true,
      "requiresIfCondition": true,
      "editorPlaceholder": "# write if-else condition",
      "emptyMessage": "Define score and use an if condition to print the result.",
      "successDetail": "Correct! Your condition evaluated to Pass."
    },
    "examples": [
      {
        "output": "Pass"
      }
    ],
    "constraints": [
      "Define score = 75",
      "Use an if/else to compare score against 60",
      "Output must be exactly: Pass"
    ],
    "hints": [
      "Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p05",
    "topicId": "m1-t3",
    "slug": "m1_t3-5",
    "title": "Setting up Python Environment: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it once.",
    "challengeContent": {
      "badgeVariant": "blue",
      "introSegments": [
        { "type": "text", "value": "Define " },
        { "type": "code", "value": "greet()" },
        { "type": "text", "value": " that prints " },
        { "type": "code", "value": "Hello" },
        { "type": "text", "value": " and call it once." }
      ],
      "outputOnly": true,
      "requiresFunction": "greet",
      "editorPlaceholder": "# define greet() function",
      "emptyMessage": "Define greet() with a print inside, then call it.",
      "successDetail": "Correct! Your function printed Hello."
    },
    "examples": [
      {
        "output": "Hello"
      }
    ],
    "constraints": [
      "Define a function named greet",
      "The function must print Hello",
      "Call greet() once after defining it"
    ],
    "hints": [
      "Example: def greet(): print(\"Hello\") on the next indented line, then call greet() on its own line"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p06",
    "topicId": "m1-t3",
    "slug": "m1_t3-6",
    "title": "Setting up Python Environment: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list with three items and print the second item (at index 1).",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create a list with three items about Setting up Python Environment. Print the " },
        { "type": "code", "value": "second item" },
        { "type": "text", "value": " using index " },
        { "type": "code", "value": "1" },
        { "type": "text", "value": " (Python counts from 0, so index 1 is the middle item)." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds multiple values in order: items = [\"a\", \"middle\", \"c\"]",
          "Use square brackets to access one item: items[0] is first, items[1] is second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": ["middle"]
        }
      },
      "outputOnly": true,
      "requiresListAccess": true,
      "editorPlaceholder": "# create a list and print items[1]",
      "liveCheckRules": [
        {
          "id": "middle",
          "label": "prints middle",
          "kind": "print-value",
          "index": 0,
          "expected": "middle"
        }
      ],
      "emptyMessage": "Create a list with three items, then print the item at index 1.",
      "successDetail": "Correct! You accessed the second list item with items[1]."
    },
    "examples": [
      {
        "output": "middle"
      }
    ],
    "constraints": [
      "Create a list with exactly three items",
      "Print the item at index 1 (the second item)",
      "Output must be exactly: middle"
    ],
    "hints": [
      "Example: items = [\"a\", \"middle\", \"c\"], then print(items[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t3-p07",
    "topicId": "m1-t3",
    "slug": "m1_t3-7",
    "title": "Setting up Python Environment: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dictionary with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create a dictionary with key " },
        { "type": "code", "value": "topic" },
        { "type": "text", "value": " and value " },
        { "type": "code", "value": "Python" },
        { "type": "text", "value": ". Print the value using " },
        { "type": "code", "value": "d[\"topic\"]" },
        { "type": "text", "value": "." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets to get a value: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": ["Python"]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "python",
          "label": "prints Python",
          "kind": "print-value",
          "index": 0,
          "expected": "Python"
        }
      ],
      "emptyMessage": "Create a dictionary with key topic, then print its value.",
      "successDetail": "Correct! You looked up a dictionary value by key."
    },
    "examples": [
      {
        "output": "Python"
      }
    ],
    "constraints": [
      "Create a dictionary with key topic",
      "The value must be Python",
      "Print the value using the key topic"
    ],
    "hints": [
      "Example: d = {\"topic\": \"Python\"}, then print(d[\"topic\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p01",
    "topicId": "m1-t4",
    "slug": "m1_t4-1",
    "title": "Python IDEs: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Python IDEs. Print the word Ready on one line.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Write a short program related to Python IDEs. Print the word " },
        { "type": "code", "value": "Ready" },
        { "type": "text", "value": " on one line." }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "ready",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! You're ready to code in your IDE."
    },
    "examples": [
      {
        "output": "Ready"
      }
    ],
    "constraints": [
      "Use a single print() statement",
      "Output must be exactly: Ready"
    ],
    "hints": [
      "Use: print(\"Ready\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p02",
    "topicId": "m1-t4",
    "slug": "m1_t4-2",
    "title": "Python IDEs: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables relevant to Python IDEs and print them separated by a comma.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create two variables relevant to Python IDEs and print them separated by a comma." }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two variables printed with a comma separator."
    },
    "examples": [
      {
        "output": "A,B"
      }
    ],
    "constraints": [
      "Create two variables before printing",
      "Print output must be exactly: A,B",
      "Use a comma separator between the two values"
    ],
    "hints": [
      "Create two variables like editor and python",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p03",
    "topicId": "m1-t4",
    "slug": "m1_t4-3",
    "title": "Python IDEs: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print numbers from 1 to 4 for basic practice.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Use a " },
        { "type": "code", "value": "for" },
        { "type": "text", "value": " loop to print numbers from 1 to 4. This is basic loop practice for Python IDEs." }
      ],
      "outputOnly": true,
      "requiresForLoop": true,
      "editorPlaceholder": "# use for loop to print 1 to 4",
      "emptyMessage": "Use a for loop with print() to display the numbers.",
      "successDetail": "Correct! Your loop printed 1 through 4 perfectly."
    },
    "examples": [
      {
        "output": "1\n2\n3\n4"
      }
    ],
    "constraints": [
      "Use a for loop with range()",
      "Print numbers 1, 2, 3, and 4 — each on its own line",
      "No extra lines or blank lines"
    ],
    "hints": [
      "Example: for i in range(1, 5): then indent print(i) on the next line"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p04",
    "topicId": "m1-t4",
    "slug": "m1_t4-4",
    "title": "Python IDEs: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else print Fail.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Set " },
        { "type": "code", "value": "score = 75" },
        { "type": "text", "value": ". If " },
        { "type": "code", "value": "score >= 60" },
        { "type": "text", "value": ", print " },
        { "type": "code", "value": "Pass" },
        { "type": "text", "value": ", otherwise print " },
        { "type": "code", "value": "Fail" },
        { "type": "text", "value": "." }
      ],
      "outputOnly": true,
      "requiresIfCondition": true,
      "editorPlaceholder": "# write if-else condition",
      "emptyMessage": "Define score and use an if condition to print the result.",
      "successDetail": "Correct! Your condition evaluated to Pass."
    },
    "examples": [
      {
        "output": "Pass"
      }
    ],
    "constraints": [
      "Define score = 75",
      "Use an if/else to compare score against 60",
      "Output must be exactly: Pass"
    ],
    "hints": [
      "Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p05",
    "topicId": "m1-t4",
    "slug": "m1_t4-5",
    "title": "Python IDEs: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it once.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Define " },
        { "type": "code", "value": "greet()" },
        { "type": "text", "value": " that prints " },
        { "type": "code", "value": "Hello" },
        { "type": "text", "value": " and call it once." }
      ],
      "outputOnly": true,
      "requiresFunction": "greet",
      "editorPlaceholder": "# define greet() function",
      "emptyMessage": "Define greet() with a print inside, then call it.",
      "successDetail": "Correct! Your function printed Hello."
    },
    "examples": [
      {
        "output": "Hello"
      }
    ],
    "constraints": [
      "Define a function named greet",
      "The function must print Hello",
      "Call greet() once after defining it"
    ],
    "hints": [
      "Example: def greet(): print(\"Hello\") on the next indented line, then call greet() on its own line"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p06",
    "topicId": "m1-t4",
    "slug": "m1_t4-6",
    "title": "Python IDEs: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list with three items and print the second item (at index 1).",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create a list with three items about Python IDEs. Print the " },
        { "type": "code", "value": "second item" },
        { "type": "text", "value": " using index " },
        { "type": "code", "value": "1" },
        { "type": "text", "value": " (Python counts from 0, so index 1 is the middle item)." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds multiple values in order: items = [\"a\", \"middle\", \"c\"]",
          "Use square brackets to access one item: items[0] is first, items[1] is second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": ["middle"]
        }
      },
      "outputOnly": true,
      "requiresListAccess": true,
      "editorPlaceholder": "# create a list and print items[1]",
      "liveCheckRules": [
        {
          "id": "middle",
          "label": "prints middle",
          "kind": "print-value",
          "index": 0,
          "expected": "middle"
        }
      ],
      "emptyMessage": "Create a list with three items, then print the item at index 1.",
      "successDetail": "Correct! You accessed the second list item with items[1]."
    },
    "examples": [
      {
        "output": "middle"
      }
    ],
    "constraints": [
      "Create a list with exactly three items",
      "Print the item at index 1 (the second item)",
      "Output must be exactly: middle"
    ],
    "hints": [
      "Example: items = [\"a\", \"middle\", \"c\"], then print(items[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m1-t4-p07",
    "topicId": "m1-t4",
    "slug": "m1_t4-7",
    "title": "Python IDEs: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dictionary with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        { "type": "text", "value": "Create a dictionary with key " },
        { "type": "code", "value": "topic" },
        { "type": "text", "value": " and value " },
        { "type": "code", "value": "Python" },
        { "type": "text", "value": ". Print the value using " },
        { "type": "code", "value": "d[\"topic\"]" },
        { "type": "text", "value": "." }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets to get a value: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": ["Python"]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "python",
          "label": "prints Python",
          "kind": "print-value",
          "index": 0,
          "expected": "Python"
        }
      ],
      "emptyMessage": "Create a dictionary with key topic, then print its value.",
      "successDetail": "Correct! You looked up a dictionary value by key."
    },
    "examples": [
      {
        "output": "Python"
      }
    ],
    "constraints": [
      "Create a dictionary with key topic",
      "The value must be Python",
      "Print the value using the key topic"
    ],
    "hints": [
      "Example: d = {\"topic\": \"Python\"}, then print(d[\"topic\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m1-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
