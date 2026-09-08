import type { PracticeProblem } from "@/lib/types";

export const module16Practice: PracticeProblem[] = [
  {
    "id": "m16-t1-p01",
    "topicId": "m16-t1",
    "slug": "m16_t1-1",
    "title": "Introduction to Matplotlib: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Introduction to Matplotlib. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Introduction to Matplotlib"
        },
        {
          "type": "text",
          "value": ". Print the word "
        },
        {
          "type": "code",
          "value": "Ready"
        },
        {
          "type": "text",
          "value": " on one line."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! Great warm-up."
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
        "id": "m16-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Introduction to Matplotlib. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m16-t1-p02",
    "topicId": "m16-t1",
    "slug": "m16_t1-2",
    "title": "Introduction to Matplotlib: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Introduction to Matplotlib and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Introduction to Matplotlib and print them separated by a comma."
        }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two values printed with a comma separator."
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
      "Create two variables related to Introduction to Matplotlib",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Introduction to Matplotlib and print them comma-separated. Key points: Create two variables related to Introduction to Matplotlib Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m16-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m16-t1-p03",
    "topicId": "m16-t1",
    "slug": "m16_t1-3",
    "title": "Introduction to Matplotlib: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Introduction to Matplotlib.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Use a "
        },
        {
          "type": "code",
          "value": "for"
        },
        {
          "type": "text",
          "value": " loop to print numbers from 1 to 4. Practice loops for Introduction to Matplotlib."
        }
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
    "approach": "Use a for loop to print 1 through 4 for Introduction to Matplotlib. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m16-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m16-t1-p04",
    "topicId": "m16-t1",
    "slug": "m16_t1-4",
    "title": "Introduction to Matplotlib: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else Fail.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "score = 75"
        },
        {
          "type": "text",
          "value": ". If "
        },
        {
          "type": "code",
          "value": "score >= 60"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "Pass"
        },
        {
          "type": "text",
          "value": ", otherwise print "
        },
        {
          "type": "code",
          "value": "Fail"
        },
        {
          "type": "text",
          "value": "."
        }
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
    "approach": "Set score = 75. If score >= 60 print Pass else Fail. Key points: Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\") A correct solution looks like this: score = 75 if score >= 60: print(\"Pass\") else: print(\"Fail\")",
    "publicTests": [
      {
        "id": "m16-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m16-t1-p05",
    "topicId": "m16-t1",
    "slug": "m16_t1-5",
    "title": "Introduction to Matplotlib: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "greet()"
        },
        {
          "type": "text",
          "value": " that prints "
        },
        {
          "type": "code",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": " and call it once."
        }
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
      "Example: def greet(): print(\"Hello\") on the next line, then call greet()"
    ],
    "starterCode": "",
    "approach": "Define greet() that prints Hello and call it. Key points: Example: def greet(): print(\"Hello\") on the next line, then call greet() A correct solution looks like this: def greet(): print(\"Hello\") greet()",
    "publicTests": [
      {
        "id": "m16-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m16-t1-p06",
    "topicId": "m16-t1",
    "slug": "m16_t1-6",
    "title": "Introduction to Matplotlib: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Introduction to Matplotlib. Print the "
        },
        {
          "type": "code",
          "value": "second item"
        },
        {
          "type": "text",
          "value": " using index "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": " (Python counts from 0, so index 1 is the middle item)."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds values in order: items = [\"a\", \"middle\", \"c\"]",
          "items[0] is the first item, items[1] is the second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "middle"
          ]
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
        "id": "m16-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m16-t1-p07",
    "topicId": "m16-t1",
    "slug": "m16_t1-7",
    "title": "Introduction to Matplotlib: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dict with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a dictionary with key "
        },
        {
          "type": "code",
          "value": "topic"
        },
        {
          "type": "text",
          "value": " and value "
        },
        {
          "type": "code",
          "value": "Python"
        },
        {
          "type": "text",
          "value": ". Print the value using "
        },
        {
          "type": "code",
          "value": "d[\"topic\"]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "Python"
          ]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "val",
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
        "id": "m16-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m16-t2-p01",
    "topicId": "m16-t2",
    "slug": "m16_t2-1",
    "title": "Line Bar Scatter and Histogram: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Line Bar Scatter and Histogram. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Line Bar Scatter and Histogram"
        },
        {
          "type": "text",
          "value": ". Print the word "
        },
        {
          "type": "code",
          "value": "Ready"
        },
        {
          "type": "text",
          "value": " on one line."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! Great warm-up."
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
        "id": "m16-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Line Bar Scatter and Histogram. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m16-t2-p02",
    "topicId": "m16-t2",
    "slug": "m16_t2-2",
    "title": "Line Bar Scatter and Histogram: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Line Bar Scatter and Histogram and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Line Bar Scatter and Histogram and print them separated by a comma."
        }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two values printed with a comma separator."
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
      "Create two variables related to Line Bar Scatter and Histogram",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Line Bar Scatter and Histogram and print them comma-separated. Key points: Create two variables related to Line Bar Scatter and Histogram Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m16-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m16-t2-p03",
    "topicId": "m16-t2",
    "slug": "m16_t2-3",
    "title": "Line Bar Scatter and Histogram: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Line Bar Scatter and Histogram.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Use a "
        },
        {
          "type": "code",
          "value": "for"
        },
        {
          "type": "text",
          "value": " loop to print numbers from 1 to 4. Practice loops for Line Bar Scatter and Histogram."
        }
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
    "approach": "Use a for loop to print 1 through 4 for Line Bar Scatter and Histogram. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m16-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m16-t2-p04",
    "topicId": "m16-t2",
    "slug": "m16_t2-4",
    "title": "Line Bar Scatter and Histogram: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else Fail.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "score = 75"
        },
        {
          "type": "text",
          "value": ". If "
        },
        {
          "type": "code",
          "value": "score >= 60"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "Pass"
        },
        {
          "type": "text",
          "value": ", otherwise print "
        },
        {
          "type": "code",
          "value": "Fail"
        },
        {
          "type": "text",
          "value": "."
        }
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
    "approach": "Set score = 75. If score >= 60 print Pass else Fail. Key points: Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\") A correct solution looks like this: score = 75 if score >= 60: print(\"Pass\") else: print(\"Fail\")",
    "publicTests": [
      {
        "id": "m16-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m16-t2-p05",
    "topicId": "m16-t2",
    "slug": "m16_t2-5",
    "title": "Line Bar Scatter and Histogram: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "greet()"
        },
        {
          "type": "text",
          "value": " that prints "
        },
        {
          "type": "code",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": " and call it once."
        }
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
      "Example: def greet(): print(\"Hello\") on the next line, then call greet()"
    ],
    "starterCode": "",
    "approach": "Define greet() that prints Hello and call it. Key points: Example: def greet(): print(\"Hello\") on the next line, then call greet() A correct solution looks like this: def greet(): print(\"Hello\") greet()",
    "publicTests": [
      {
        "id": "m16-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m16-t2-p06",
    "topicId": "m16-t2",
    "slug": "m16_t2-6",
    "title": "Line Bar Scatter and Histogram: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Line Bar Scatter and Histogram. Print the "
        },
        {
          "type": "code",
          "value": "second item"
        },
        {
          "type": "text",
          "value": " using index "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": " (Python counts from 0, so index 1 is the middle item)."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds values in order: items = [\"a\", \"middle\", \"c\"]",
          "items[0] is the first item, items[1] is the second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "middle"
          ]
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
        "id": "m16-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m16-t2-p07",
    "topicId": "m16-t2",
    "slug": "m16_t2-7",
    "title": "Line Bar Scatter and Histogram: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dict with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a dictionary with key "
        },
        {
          "type": "code",
          "value": "topic"
        },
        {
          "type": "text",
          "value": " and value "
        },
        {
          "type": "code",
          "value": "Python"
        },
        {
          "type": "text",
          "value": ". Print the value using "
        },
        {
          "type": "code",
          "value": "d[\"topic\"]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "Python"
          ]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "val",
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
        "id": "m16-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m16-t3-p01",
    "topicId": "m16-t3",
    "slug": "m16_t3-1",
    "title": "Customizing Plots: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Customizing Plots. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Customizing Plots"
        },
        {
          "type": "text",
          "value": ". Print the word "
        },
        {
          "type": "code",
          "value": "Ready"
        },
        {
          "type": "text",
          "value": " on one line."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! Great warm-up."
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
        "id": "m16-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Customizing Plots. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m16-t3-p02",
    "topicId": "m16-t3",
    "slug": "m16_t3-2",
    "title": "Customizing Plots: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Customizing Plots and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Customizing Plots and print them separated by a comma."
        }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two values printed with a comma separator."
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
      "Create two variables related to Customizing Plots",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Customizing Plots and print them comma-separated. Key points: Create two variables related to Customizing Plots Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m16-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m16-t3-p03",
    "topicId": "m16-t3",
    "slug": "m16_t3-3",
    "title": "Customizing Plots: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Customizing Plots.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Use a "
        },
        {
          "type": "code",
          "value": "for"
        },
        {
          "type": "text",
          "value": " loop to print numbers from 1 to 4. Practice loops for Customizing Plots."
        }
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
    "approach": "Use a for loop to print 1 through 4 for Customizing Plots. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m16-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m16-t3-p04",
    "topicId": "m16-t3",
    "slug": "m16_t3-4",
    "title": "Customizing Plots: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else Fail.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "score = 75"
        },
        {
          "type": "text",
          "value": ". If "
        },
        {
          "type": "code",
          "value": "score >= 60"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "Pass"
        },
        {
          "type": "text",
          "value": ", otherwise print "
        },
        {
          "type": "code",
          "value": "Fail"
        },
        {
          "type": "text",
          "value": "."
        }
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
    "approach": "Set score = 75. If score >= 60 print Pass else Fail. Key points: Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\") A correct solution looks like this: score = 75 if score >= 60: print(\"Pass\") else: print(\"Fail\")",
    "publicTests": [
      {
        "id": "m16-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m16-t3-p05",
    "topicId": "m16-t3",
    "slug": "m16_t3-5",
    "title": "Customizing Plots: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "greet()"
        },
        {
          "type": "text",
          "value": " that prints "
        },
        {
          "type": "code",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": " and call it once."
        }
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
      "Example: def greet(): print(\"Hello\") on the next line, then call greet()"
    ],
    "starterCode": "",
    "approach": "Define greet() that prints Hello and call it. Key points: Example: def greet(): print(\"Hello\") on the next line, then call greet() A correct solution looks like this: def greet(): print(\"Hello\") greet()",
    "publicTests": [
      {
        "id": "m16-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m16-t3-p06",
    "topicId": "m16-t3",
    "slug": "m16_t3-6",
    "title": "Customizing Plots: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Customizing Plots. Print the "
        },
        {
          "type": "code",
          "value": "second item"
        },
        {
          "type": "text",
          "value": " using index "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": " (Python counts from 0, so index 1 is the middle item)."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds values in order: items = [\"a\", \"middle\", \"c\"]",
          "items[0] is the first item, items[1] is the second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "middle"
          ]
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
        "id": "m16-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m16-t3-p07",
    "topicId": "m16-t3",
    "slug": "m16_t3-7",
    "title": "Customizing Plots: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dict with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a dictionary with key "
        },
        {
          "type": "code",
          "value": "topic"
        },
        {
          "type": "text",
          "value": " and value "
        },
        {
          "type": "code",
          "value": "Python"
        },
        {
          "type": "text",
          "value": ". Print the value using "
        },
        {
          "type": "code",
          "value": "d[\"topic\"]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "Python"
          ]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "val",
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
        "id": "m16-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m16-t4-p01",
    "topicId": "m16-t4",
    "slug": "m16_t4-1",
    "title": "Introduction to Seaborn: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Introduction to Seaborn. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Introduction to Seaborn"
        },
        {
          "type": "text",
          "value": ". Print the word "
        },
        {
          "type": "code",
          "value": "Ready"
        },
        {
          "type": "text",
          "value": " on one line."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! Great warm-up."
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
        "id": "m16-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Introduction to Seaborn. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m16-t4-p02",
    "topicId": "m16-t4",
    "slug": "m16_t4-2",
    "title": "Introduction to Seaborn: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Introduction to Seaborn and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Introduction to Seaborn and print them separated by a comma."
        }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two values printed with a comma separator."
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
      "Create two variables related to Introduction to Seaborn",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Introduction to Seaborn and print them comma-separated. Key points: Create two variables related to Introduction to Seaborn Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m16-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m16-t4-p03",
    "topicId": "m16-t4",
    "slug": "m16_t4-3",
    "title": "Introduction to Seaborn: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Introduction to Seaborn.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Use a "
        },
        {
          "type": "code",
          "value": "for"
        },
        {
          "type": "text",
          "value": " loop to print numbers from 1 to 4. Practice loops for Introduction to Seaborn."
        }
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
    "approach": "Use a for loop to print 1 through 4 for Introduction to Seaborn. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m16-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m16-t4-p04",
    "topicId": "m16-t4",
    "slug": "m16_t4-4",
    "title": "Introduction to Seaborn: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else Fail.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "score = 75"
        },
        {
          "type": "text",
          "value": ". If "
        },
        {
          "type": "code",
          "value": "score >= 60"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "Pass"
        },
        {
          "type": "text",
          "value": ", otherwise print "
        },
        {
          "type": "code",
          "value": "Fail"
        },
        {
          "type": "text",
          "value": "."
        }
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
    "approach": "Set score = 75. If score >= 60 print Pass else Fail. Key points: Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\") A correct solution looks like this: score = 75 if score >= 60: print(\"Pass\") else: print(\"Fail\")",
    "publicTests": [
      {
        "id": "m16-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m16-t4-p05",
    "topicId": "m16-t4",
    "slug": "m16_t4-5",
    "title": "Introduction to Seaborn: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "greet()"
        },
        {
          "type": "text",
          "value": " that prints "
        },
        {
          "type": "code",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": " and call it once."
        }
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
      "Example: def greet(): print(\"Hello\") on the next line, then call greet()"
    ],
    "starterCode": "",
    "approach": "Define greet() that prints Hello and call it. Key points: Example: def greet(): print(\"Hello\") on the next line, then call greet() A correct solution looks like this: def greet(): print(\"Hello\") greet()",
    "publicTests": [
      {
        "id": "m16-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m16-t4-p06",
    "topicId": "m16-t4",
    "slug": "m16_t4-6",
    "title": "Introduction to Seaborn: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Introduction to Seaborn. Print the "
        },
        {
          "type": "code",
          "value": "second item"
        },
        {
          "type": "text",
          "value": " using index "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": " (Python counts from 0, so index 1 is the middle item)."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds values in order: items = [\"a\", \"middle\", \"c\"]",
          "items[0] is the first item, items[1] is the second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "middle"
          ]
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
        "id": "m16-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m16-t4-p07",
    "topicId": "m16-t4",
    "slug": "m16_t4-7",
    "title": "Introduction to Seaborn: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dict with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a dictionary with key "
        },
        {
          "type": "code",
          "value": "topic"
        },
        {
          "type": "text",
          "value": " and value "
        },
        {
          "type": "code",
          "value": "Python"
        },
        {
          "type": "text",
          "value": ". Print the value using "
        },
        {
          "type": "code",
          "value": "d[\"topic\"]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "Python"
          ]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "val",
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
        "id": "m16-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m16-t5-p01",
    "topicId": "m16-t5",
    "slug": "m16_t5-1",
    "title": "Statistical and Categorical Plots: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Statistical and Categorical Plots. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Statistical and Categorical Plots"
        },
        {
          "type": "text",
          "value": ". Print the word "
        },
        {
          "type": "code",
          "value": "Ready"
        },
        {
          "type": "text",
          "value": " on one line."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# Write your solution here",
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints Ready",
          "kind": "print-value",
          "index": 0,
          "expected": "Ready"
        }
      ],
      "emptyMessage": "Use print() to display output.",
      "successDetail": "Correct! Great warm-up."
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
        "id": "m16-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Statistical and Categorical Plots. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m16-t5-p02",
    "topicId": "m16-t5",
    "slug": "m16_t5-2",
    "title": "Statistical and Categorical Plots: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Statistical and Categorical Plots and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Statistical and Categorical Plots and print them separated by a comma."
        }
      ],
      "outputOnly": true,
      "expectCommaPrint": true,
      "editorPlaceholder": "# create variables and print A,B format",
      "emptyMessage": "Create two variables and use print() to display them.",
      "successDetail": "Correct! Two values printed with a comma separator."
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
      "Create two variables related to Statistical and Categorical Plots",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Statistical and Categorical Plots and print them comma-separated. Key points: Create two variables related to Statistical and Categorical Plots Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m16-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m16-t5-p03",
    "topicId": "m16-t5",
    "slug": "m16_t5-3",
    "title": "Statistical and Categorical Plots: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Statistical and Categorical Plots.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Use a "
        },
        {
          "type": "code",
          "value": "for"
        },
        {
          "type": "text",
          "value": " loop to print numbers from 1 to 4. Practice loops for Statistical and Categorical Plots."
        }
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
    "approach": "Use a for loop to print 1 through 4 for Statistical and Categorical Plots. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m16-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m16-t5-p04",
    "topicId": "m16-t5",
    "slug": "m16_t5-4",
    "title": "Statistical and Categorical Plots: Condition",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 75. If score >= 60 print Pass else Fail.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "score = 75"
        },
        {
          "type": "text",
          "value": ". If "
        },
        {
          "type": "code",
          "value": "score >= 60"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "Pass"
        },
        {
          "type": "text",
          "value": ", otherwise print "
        },
        {
          "type": "code",
          "value": "Fail"
        },
        {
          "type": "text",
          "value": "."
        }
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
    "approach": "Set score = 75. If score >= 60 print Pass else Fail. Key points: Example: score = 75, if score >= 60: print(\"Pass\") else: print(\"Fail\") A correct solution looks like this: score = 75 if score >= 60: print(\"Pass\") else: print(\"Fail\")",
    "publicTests": [
      {
        "id": "m16-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m16-t5-p05",
    "topicId": "m16-t5",
    "slug": "m16_t5-5",
    "title": "Statistical and Categorical Plots: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define greet() that prints Hello and call it.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "greet()"
        },
        {
          "type": "text",
          "value": " that prints "
        },
        {
          "type": "code",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": " and call it once."
        }
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
      "Example: def greet(): print(\"Hello\") on the next line, then call greet()"
    ],
    "starterCode": "",
    "approach": "Define greet() that prints Hello and call it. Key points: Example: def greet(): print(\"Hello\") on the next line, then call greet() A correct solution looks like this: def greet(): print(\"Hello\") greet()",
    "publicTests": [
      {
        "id": "m16-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m16-t5-p06",
    "topicId": "m16-t5",
    "slug": "m16_t5-6",
    "title": "Statistical and Categorical Plots: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Statistical and Categorical Plots. Print the "
        },
        {
          "type": "code",
          "value": "second item"
        },
        {
          "type": "text",
          "value": " using index "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": " (Python counts from 0, so index 1 is the middle item)."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds values in order: items = [\"a\", \"middle\", \"c\"]",
          "items[0] is the first item, items[1] is the second.",
          "print(items[1]) displays the second item on its own line."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "middle"
          ]
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
        "id": "m16-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m16-t5-p07",
    "topicId": "m16-t5",
    "slug": "m16_t5-7",
    "title": "Statistical and Categorical Plots: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a dict with key topic and print its value.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a dictionary with key "
        },
        {
          "type": "code",
          "value": "topic"
        },
        {
          "type": "text",
          "value": " and value "
        },
        {
          "type": "code",
          "value": "Python"
        },
        {
          "type": "text",
          "value": ". Print the value using "
        },
        {
          "type": "code",
          "value": "d[\"topic\"]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dictionary stores key-value pairs: d = {\"topic\": \"Python\"}",
          "Use the key inside square brackets: d[\"topic\"]",
          "print(d[\"topic\"]) displays Python on the screen."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "Python"
          ]
        }
      },
      "outputOnly": true,
      "requiresDictKey": "topic",
      "editorPlaceholder": "# create dict and print d[\"topic\"]",
      "liveCheckRules": [
        {
          "id": "val",
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
        "id": "m16-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  }
];
