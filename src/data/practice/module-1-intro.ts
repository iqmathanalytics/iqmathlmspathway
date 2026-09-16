import type { PracticeProblem } from "@/lib/types";

/** Hand-crafted "Introduction to Programming" challenges. Not generated — do not overwrite. */
export const module1IntroPractice: PracticeProblem[] = [
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
        {
          "type": "code",
          "value": "Hello, World!"
        },
        {
          "type": "text",
          "value": " exactly to the screen."
        }
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
    "approach": "In Python, the print() function displays text on the screen. Whatever you put inside the parentheses (wrapped in quotes) gets printed. A correct solution looks like this: print(\"Hello, World!\")",
    "publicTests": [
      {
        "id": "m1-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Hello, World!",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "Hello, World!",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hello, World!",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Hello, World!\")"
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
          {
            "type": "text",
            "value": "First line: "
          },
          {
            "type": "code",
            "value": "Alex"
          }
        ],
        [
          {
            "type": "text",
            "value": "Second line: "
          },
          {
            "type": "code",
            "value": "Data Science"
          }
        ]
      ],
      "introFooter": [
        {
          "type": "text",
          "value": "Use two "
        },
        {
          "type": "code",
          "value": "print()"
        },
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
          "lines": [
            "Line one",
            "Line two"
          ]
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
        "label": "Sample Case",
        "expectedStdout": "Alex\nData Science",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "Alex\nData Science",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p02-t3",
        "label": "Multi-line Format",
        "expectedStdout": "Alex\nData Science",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Alex\")\nprint(\"Data Science\")",
    "approach": "1. Each print() call outputs one line automatically — Python adds a newline at the end for you. 2. To print two lines, simply write two print() statements one after the other. 3. The order matters — the first print() appears on line 1, the second on line 2.\n\nA correct solution looks like this:\nprint(\"Alex\")\nprint(\"Data Science\")"
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
        {
          "type": "text",
          "value": "Print the numbers "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "2"
        },
        {
          "type": "text",
          "value": ", and "
        },
        {
          "type": "code",
          "value": "3"
        },
        {
          "type": "text",
          "value": " — each on its own line. You can use strings or numbers inside "
        },
        {
          "type": "code",
          "value": "print()"
        },
        {
          "type": "text",
          "value": " — both work!"
        }
      ],
      "approaches": {
        "title": "Two valid approaches",
        "items": [
          {
            "title": "Using numbers",
            "note": "Pass the number directly — no quotes needed.",
            "lines": [
              {
                "type": "number",
                "value": "1"
              },
              {
                "type": "number",
                "value": "2"
              },
              {
                "type": "number",
                "value": "3"
              }
            ]
          },
          {
            "title": "Using strings",
            "note": "Wrap in quotes — Python prints the same output.",
            "lines": [
              {
                "type": "string",
                "value": "1"
              },
              {
                "type": "string",
                "value": "2"
              },
              {
                "type": "string",
                "value": "3"
              }
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
          "expected": [
            "1",
            "2",
            "3"
          ]
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
        "label": "Sample Case",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p03-t3",
        "label": "Multi-line Format",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(1)\nprint(2)\nprint(3)",
    "approach": "Print the numbers 1, 2, and 3 — each on its own line.\n\nKey points: You need three separate print() statements — one for each number. You can write print(1) (number) or print(\"1\") (string) — both produce the same output. Full solution: print(1), print(2), print(3)\n\nA correct solution looks like this:\nprint(1)\nprint(2)\nprint(3)"
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
        {
          "type": "text",
          "value": "Add a comment describing the next line, then print "
        },
        {
          "type": "code",
          "value": "Python is fun"
        },
        {
          "type": "text",
          "value": "."
        }
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
    "approach": "Add a comment describing the next line, then print Python is fun. Key points: Start with a comment line like # This prints a message, then add print(\"Python is fun\") on the next line. A correct solution looks like this: # This prints a message\nprint(\"Python is fun\")",
    "publicTests": [
      {
        "id": "m1-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Python is fun",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "Python is fun",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Python is fun",
        "visibility": "public"
      }
    ],
    "solutionCode": "# This prints a message\nprint(\"Python is fun\")"
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
        {
          "type": "text",
          "value": "Print three lines exactly: "
        },
        {
          "type": "code",
          "value": "===="
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "Welcome to Python"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "===="
        },
        {
          "type": "text",
          "value": "."
        }
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
          "expected": [
            "====",
            "Welcome to Python",
            "===="
          ]
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
        "label": "Sample Case",
        "expectedStdout": "====\nWelcome to Python\n====",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "====\nWelcome to Python\n====",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p05-t3",
        "label": "Multi-line Format",
        "expectedStdout": "====\nWelcome to Python\n====",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"====\")\nprint(\"Welcome to Python\")\nprint(\"====\")",
    "approach": "Print three lines: ====, Welcome to Python, ====\n\nKey points: Use three print() statements. Example: print(\"====\"), print(\"Welcome to Python\"), print(\"====\")\n\nA correct solution looks like this:\nprint(\"====\")\nprint(\"Welcome to Python\")\nprint(\"====\")"
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
        {
          "type": "text",
          "value": "Create variables "
        },
        {
          "type": "code",
          "value": "name"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "topic"
        },
        {
          "type": "text",
          "value": ". Set "
        },
        {
          "type": "code",
          "value": "name = \"Sam\""
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "topic = \"Python\""
        },
        {
          "type": "text",
          "value": ", then print this exact sentence: "
        },
        {
          "type": "code",
          "value": "I am Sam learning Python"
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "name",
        "topic"
      ],
      "editorPlaceholder": "# set name and topic, then print the sentence",
      "liveCheckRules": [
        {
          "id": "sentence",
          "label": "one print() builds the sentence",
          "kind": "print-count",
          "expected": 1
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
        "label": "Sample Case",
        "expectedStdout": "I am Sam learning Python",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "I am Sam learning Python",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "I am Sam learning Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "name = \"Sam\"\ntopic = \"Python\"\nprint(\"I am\", name, \"learning\", topic)",
    "approach": "Create two variables and print a sentence that introduces who you are and what you are learning.\n\nKey points: Example: name = \"Sam\", topic = \"Python\", then print(\"I am\", name, \"learning\", topic)\n\nA correct solution looks like this:\nname = \"Sam\"\ntopic = \"Python\"\nprint(\"I am\", name, \"learning\", topic)"
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
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "print()"
        },
        {
          "type": "text",
          "value": " to show the result of "
        },
        {
          "type": "code",
          "value": "17 + 25"
        },
        {
          "type": "text",
          "value": "."
        }
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
          "lines": [
            "42"
          ]
        }
      },
      "outputOnly": true,
      "editorPlaceholder": "# print the sum of 17 and 25",
      "liveCheckRules": [
        {
          "id": "sum",
          "label": "one print() shows the sum",
          "kind": "print-count",
          "expected": 1
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
        "label": "Sample Case",
        "expectedStdout": "42",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "42",
        "visibility": "public"
      },
      {
        "id": "m1-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "42",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(17 + 25)",
    "approach": "1. Python can do math inside print() — no quotes needed around numbers. 2. The + operator adds two numbers together. 3. print(17 + 25) calculates the sum and prints the answer automatically.\n\nA correct solution looks like this:\nprint(17 + 25)"
  }
];
