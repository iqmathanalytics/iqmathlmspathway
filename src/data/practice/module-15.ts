import type { PracticeProblem } from "@/lib/types";

export const module15Practice: PracticeProblem[] = [
  {
    "id": "m15-t1-p01",
    "topicId": "m15-t1",
    "slug": "m15_t1-1",
    "title": "Series and DataFrames: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Series and DataFrames. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Series and DataFrames"
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
        "id": "m15-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Series and DataFrames. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m15-t1-p02",
    "topicId": "m15-t1",
    "slug": "m15_t1-2",
    "title": "Series and DataFrames: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Series and DataFrames and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Series and DataFrames and print them separated by a comma."
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
      "Create two variables related to Series and DataFrames",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Series and DataFrames and print them comma-separated. Key points: Create two variables related to Series and DataFrames Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m15-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m15-t1-p03",
    "topicId": "m15-t1",
    "slug": "m15_t1-3",
    "title": "Series and DataFrames: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Series and DataFrames.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Series and DataFrames."
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
    "approach": "Use a for loop to print 1 through 4 for Series and DataFrames. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m15-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m15-t1-p04",
    "topicId": "m15-t1",
    "slug": "m15_t1-4",
    "title": "Series and DataFrames: Condition",
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
        "id": "m15-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m15-t1-p05",
    "topicId": "m15-t1",
    "slug": "m15_t1-5",
    "title": "Series and DataFrames: Function Stub",
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
        "id": "m15-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m15-t1-p06",
    "topicId": "m15-t1",
    "slug": "m15_t1-6",
    "title": "Series and DataFrames: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Series and DataFrames. Print the "
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
        "id": "m15-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m15-t1-p07",
    "topicId": "m15-t1",
    "slug": "m15_t1-7",
    "title": "Series and DataFrames: Dict Lookup",
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
        "id": "m15-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m15-t2-p01",
    "topicId": "m15-t2",
    "slug": "m15_t2-1",
    "title": "Reading and Writing Data: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Reading and Writing Data. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Reading and Writing Data"
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
        "id": "m15-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Reading and Writing Data. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m15-t2-p02",
    "topicId": "m15-t2",
    "slug": "m15_t2-2",
    "title": "Reading and Writing Data: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Reading and Writing Data and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Reading and Writing Data and print them separated by a comma."
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
      "Create two variables related to Reading and Writing Data",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Reading and Writing Data and print them comma-separated. Key points: Create two variables related to Reading and Writing Data Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m15-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m15-t2-p03",
    "topicId": "m15-t2",
    "slug": "m15_t2-3",
    "title": "Reading and Writing Data: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Reading and Writing Data.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Reading and Writing Data."
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
    "approach": "Use a for loop to print 1 through 4 for Reading and Writing Data. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m15-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m15-t2-p04",
    "topicId": "m15-t2",
    "slug": "m15_t2-4",
    "title": "Reading and Writing Data: Condition",
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
        "id": "m15-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m15-t2-p05",
    "topicId": "m15-t2",
    "slug": "m15_t2-5",
    "title": "Reading and Writing Data: Function Stub",
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
        "id": "m15-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m15-t2-p06",
    "topicId": "m15-t2",
    "slug": "m15_t2-6",
    "title": "Reading and Writing Data: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Reading and Writing Data. Print the "
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
        "id": "m15-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m15-t2-p07",
    "topicId": "m15-t2",
    "slug": "m15_t2-7",
    "title": "Reading and Writing Data: Dict Lookup",
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
        "id": "m15-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m15-t3-p01",
    "topicId": "m15-t3",
    "slug": "m15_t3-1",
    "title": "Indexing Filtering and Selecting: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Indexing Filtering and Selecting. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Indexing Filtering and Selecting"
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
        "id": "m15-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Indexing Filtering and Selecting. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m15-t3-p02",
    "topicId": "m15-t3",
    "slug": "m15_t3-2",
    "title": "Indexing Filtering and Selecting: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Indexing Filtering and Selecting and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Indexing Filtering and Selecting and print them separated by a comma."
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
      "Create two variables related to Indexing Filtering and Selecting",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Indexing Filtering and Selecting and print them comma-separated. Key points: Create two variables related to Indexing Filtering and Selecting Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m15-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m15-t3-p03",
    "topicId": "m15-t3",
    "slug": "m15_t3-3",
    "title": "Indexing Filtering and Selecting: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Indexing Filtering and Selecting.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Indexing Filtering and Selecting."
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
    "approach": "Use a for loop to print 1 through 4 for Indexing Filtering and Selecting. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m15-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m15-t3-p04",
    "topicId": "m15-t3",
    "slug": "m15_t3-4",
    "title": "Indexing Filtering and Selecting: Condition",
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
        "id": "m15-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m15-t3-p05",
    "topicId": "m15-t3",
    "slug": "m15_t3-5",
    "title": "Indexing Filtering and Selecting: Function Stub",
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
        "id": "m15-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m15-t3-p06",
    "topicId": "m15-t3",
    "slug": "m15_t3-6",
    "title": "Indexing Filtering and Selecting: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Indexing Filtering and Selecting. Print the "
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
        "id": "m15-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m15-t3-p07",
    "topicId": "m15-t3",
    "slug": "m15_t3-7",
    "title": "Indexing Filtering and Selecting: Dict Lookup",
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
        "id": "m15-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m15-t4-p01",
    "topicId": "m15-t4",
    "slug": "m15_t4-1",
    "title": "Data Cleaning: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Data Cleaning. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Data Cleaning"
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
        "id": "m15-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Data Cleaning. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m15-t4-p02",
    "topicId": "m15-t4",
    "slug": "m15_t4-2",
    "title": "Data Cleaning: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Data Cleaning and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Data Cleaning and print them separated by a comma."
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
      "Create two variables related to Data Cleaning",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Data Cleaning and print them comma-separated. Key points: Create two variables related to Data Cleaning Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m15-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m15-t4-p03",
    "topicId": "m15-t4",
    "slug": "m15_t4-3",
    "title": "Data Cleaning: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Data Cleaning.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Data Cleaning."
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
    "approach": "Use a for loop to print 1 through 4 for Data Cleaning. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m15-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m15-t4-p04",
    "topicId": "m15-t4",
    "slug": "m15_t4-4",
    "title": "Data Cleaning: Condition",
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
        "id": "m15-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m15-t4-p05",
    "topicId": "m15-t4",
    "slug": "m15_t4-5",
    "title": "Data Cleaning: Function Stub",
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
        "id": "m15-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m15-t4-p06",
    "topicId": "m15-t4",
    "slug": "m15_t4-6",
    "title": "Data Cleaning: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Data Cleaning. Print the "
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
        "id": "m15-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m15-t4-p07",
    "topicId": "m15-t4",
    "slug": "m15_t4-7",
    "title": "Data Cleaning: Dict Lookup",
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
        "id": "m15-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m15-t5-p01",
    "topicId": "m15-t5",
    "slug": "m15_t5-1",
    "title": "GroupBy Merging and Joining: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to GroupBy Merging and Joining. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "GroupBy Merging and Joining"
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
        "id": "m15-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to GroupBy Merging and Joining. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m15-t5-p02",
    "topicId": "m15-t5",
    "slug": "m15_t5-2",
    "title": "GroupBy Merging and Joining: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about GroupBy Merging and Joining and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to GroupBy Merging and Joining and print them separated by a comma."
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
      "Create two variables related to GroupBy Merging and Joining",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about GroupBy Merging and Joining and print them comma-separated. Key points: Create two variables related to GroupBy Merging and Joining Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m15-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m15-t5-p03",
    "topicId": "m15-t5",
    "slug": "m15_t5-3",
    "title": "GroupBy Merging and Joining: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for GroupBy Merging and Joining.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for GroupBy Merging and Joining."
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
    "approach": "Use a for loop to print 1 through 4 for GroupBy Merging and Joining. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m15-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m15-t5-p04",
    "topicId": "m15-t5",
    "slug": "m15_t5-4",
    "title": "GroupBy Merging and Joining: Condition",
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
        "id": "m15-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m15-t5-p05",
    "topicId": "m15-t5",
    "slug": "m15_t5-5",
    "title": "GroupBy Merging and Joining: Function Stub",
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
        "id": "m15-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m15-t5-p06",
    "topicId": "m15-t5",
    "slug": "m15_t5-6",
    "title": "GroupBy Merging and Joining: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about GroupBy Merging and Joining. Print the "
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
        "id": "m15-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m15-t5-p07",
    "topicId": "m15-t5",
    "slug": "m15_t5-7",
    "title": "GroupBy Merging and Joining: Dict Lookup",
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
        "id": "m15-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  },
  {
    "id": "m15-t6-p01",
    "topicId": "m15-t6",
    "slug": "m15_t6-1",
    "title": "Pivot Tables: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Pivot Tables. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Pivot Tables"
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
        "id": "m15-t6-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Ready\")",
    "approach": "Write a short program related to Pivot Tables. Print Ready on one line.\n\nKey points: Use: print(\"Ready\")\n\nA correct solution looks like this:\nprint(\"Ready\")"
  },
  {
    "id": "m15-t6-p02",
    "topicId": "m15-t6",
    "slug": "m15_t6-2",
    "title": "Pivot Tables: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Pivot Tables and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Pivot Tables and print them separated by a comma."
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
      "Create two variables related to Pivot Tables",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "approach": "Create two variables about Pivot Tables and print them comma-separated. Key points: Create two variables related to Pivot Tables Use comma in print: print(a, b, sep=\",\") Output must be exactly A,B A correct solution looks like this: a = \"A\" b = \"B\" print(a, b, sep=\",\")",
    "publicTests": [
      {
        "id": "m15-t6-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = \"A\"\nb = \"B\"\nprint(a, b, sep=\",\")"
  },
  {
    "id": "m15-t6-p03",
    "topicId": "m15-t6",
    "slug": "m15_t6-3",
    "title": "Pivot Tables: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Pivot Tables.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Pivot Tables."
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
    "approach": "Use a for loop to print 1 through 4 for Pivot Tables. Key points: Example: for i in range(1, 5): then indent print(i) on the next line A correct solution looks like this: for i in range(1, 5): print(i)",
    "publicTests": [
      {
        "id": "m15-t6-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ],
    "solutionCode": "for i in range(1, 5):\n    print(i)"
  },
  {
    "id": "m15-t6-p04",
    "topicId": "m15-t6",
    "slug": "m15_t6-4",
    "title": "Pivot Tables: Condition",
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
        "id": "m15-t6-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m15-t6-p05",
    "topicId": "m15-t6",
    "slug": "m15_t6-5",
    "title": "Pivot Tables: Function Stub",
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
        "id": "m15-t6-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m15-t6-p06",
    "topicId": "m15-t6",
    "slug": "m15_t6-6",
    "title": "Pivot Tables: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Pivot Tables. Print the "
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
        "id": "m15-t6-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "approach": "1. A list holds values in order: items = [\"a\", \"middle\", \"c\"] 2. items[0] is the first item, items[1] is the second. 3. print(items[1]) displays the second item on its own line.\n\nA correct solution looks like this:\nitems = [\"a\", \"middle\", \"c\"]\nprint(items[1])"
  },
  {
    "id": "m15-t6-p07",
    "topicId": "m15-t6",
    "slug": "m15_t6-7",
    "title": "Pivot Tables: Dict Lookup",
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
        "id": "m15-t6-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "approach": "1. A dictionary stores key-value pairs: d = {\"topic\": \"Python\"} 2. Use the key inside square brackets: d[\"topic\"] 3. print(d[\"topic\"]) displays Python on the screen.\n\nA correct solution looks like this:\nd = {\"topic\": \"Python\"}\nprint(d[\"topic\"])"
  }
];
