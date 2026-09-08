import type { PracticeProblem } from "@/lib/types";

export const module13Practice: PracticeProblem[] = [
  {
    "id": "m13-t1-p01",
    "topicId": "m13-t1",
    "slug": "m13_t1-1",
    "title": "Reading and Writing Files: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Reading and Writing Files. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Reading and Writing Files"
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
        "id": "m13-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p02",
    "topicId": "m13-t1",
    "slug": "m13_t1-2",
    "title": "Reading and Writing Files: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Reading and Writing Files and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Reading and Writing Files and print them separated by a comma."
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
      "Create two variables related to Reading and Writing Files",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p03",
    "topicId": "m13-t1",
    "slug": "m13_t1-3",
    "title": "Reading and Writing Files: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Reading and Writing Files.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Reading and Writing Files."
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
    "publicTests": [
      {
        "id": "m13-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p04",
    "topicId": "m13-t1",
    "slug": "m13_t1-4",
    "title": "Reading and Writing Files: Condition",
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
    "publicTests": [
      {
        "id": "m13-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p05",
    "topicId": "m13-t1",
    "slug": "m13_t1-5",
    "title": "Reading and Writing Files: Function Stub",
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
    "publicTests": [
      {
        "id": "m13-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p06",
    "topicId": "m13-t1",
    "slug": "m13_t1-6",
    "title": "Reading and Writing Files: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Reading and Writing Files. Print the "
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
        "id": "m13-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p07",
    "topicId": "m13-t1",
    "slug": "m13_t1-7",
    "title": "Reading and Writing Files: Dict Lookup",
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
        "id": "m13-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p01",
    "topicId": "m13-t2",
    "slug": "m13_t2-1",
    "title": "Working with File Paths: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Working with File Paths. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Working with File Paths"
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
        "id": "m13-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p02",
    "topicId": "m13-t2",
    "slug": "m13_t2-2",
    "title": "Working with File Paths: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Working with File Paths and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Working with File Paths and print them separated by a comma."
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
      "Create two variables related to Working with File Paths",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p03",
    "topicId": "m13-t2",
    "slug": "m13_t2-3",
    "title": "Working with File Paths: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Working with File Paths.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Working with File Paths."
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
    "publicTests": [
      {
        "id": "m13-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p04",
    "topicId": "m13-t2",
    "slug": "m13_t2-4",
    "title": "Working with File Paths: Condition",
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
    "publicTests": [
      {
        "id": "m13-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p05",
    "topicId": "m13-t2",
    "slug": "m13_t2-5",
    "title": "Working with File Paths: Function Stub",
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
    "publicTests": [
      {
        "id": "m13-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p06",
    "topicId": "m13-t2",
    "slug": "m13_t2-6",
    "title": "Working with File Paths: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Working with File Paths. Print the "
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
        "id": "m13-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t2-p07",
    "topicId": "m13-t2",
    "slug": "m13_t2-7",
    "title": "Working with File Paths: Dict Lookup",
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
        "id": "m13-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p01",
    "topicId": "m13-t3",
    "slug": "m13_t3-1",
    "title": "try-except-finally: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to try-except-finally. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "try-except-finally"
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
        "id": "m13-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p02",
    "topicId": "m13-t3",
    "slug": "m13_t3-2",
    "title": "try-except-finally: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about try-except-finally and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to try-except-finally and print them separated by a comma."
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
      "Create two variables related to try-except-finally",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p03",
    "topicId": "m13-t3",
    "slug": "m13_t3-3",
    "title": "try-except-finally: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for try-except-finally.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for try-except-finally."
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
    "publicTests": [
      {
        "id": "m13-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p04",
    "topicId": "m13-t3",
    "slug": "m13_t3-4",
    "title": "try-except-finally: Condition",
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
    "publicTests": [
      {
        "id": "m13-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p05",
    "topicId": "m13-t3",
    "slug": "m13_t3-5",
    "title": "try-except-finally: Function Stub",
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
    "publicTests": [
      {
        "id": "m13-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p06",
    "topicId": "m13-t3",
    "slug": "m13_t3-6",
    "title": "try-except-finally: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about try-except-finally. Print the "
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
        "id": "m13-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t3-p07",
    "topicId": "m13-t3",
    "slug": "m13_t3-7",
    "title": "try-except-finally: Dict Lookup",
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
        "id": "m13-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p01",
    "topicId": "m13-t4",
    "slug": "m13_t4-1",
    "title": "Raising Custom Exceptions: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Raising Custom Exceptions. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Raising Custom Exceptions"
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
        "id": "m13-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p02",
    "topicId": "m13-t4",
    "slug": "m13_t4-2",
    "title": "Raising Custom Exceptions: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Raising Custom Exceptions and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Raising Custom Exceptions and print them separated by a comma."
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
      "Create two variables related to Raising Custom Exceptions",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p03",
    "topicId": "m13-t4",
    "slug": "m13_t4-3",
    "title": "Raising Custom Exceptions: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Raising Custom Exceptions.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Raising Custom Exceptions."
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
    "publicTests": [
      {
        "id": "m13-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p04",
    "topicId": "m13-t4",
    "slug": "m13_t4-4",
    "title": "Raising Custom Exceptions: Condition",
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
    "publicTests": [
      {
        "id": "m13-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p05",
    "topicId": "m13-t4",
    "slug": "m13_t4-5",
    "title": "Raising Custom Exceptions: Function Stub",
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
    "publicTests": [
      {
        "id": "m13-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p06",
    "topicId": "m13-t4",
    "slug": "m13_t4-6",
    "title": "Raising Custom Exceptions: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Raising Custom Exceptions. Print the "
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
        "id": "m13-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t4-p07",
    "topicId": "m13-t4",
    "slug": "m13_t4-7",
    "title": "Raising Custom Exceptions: Dict Lookup",
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
        "id": "m13-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p01",
    "topicId": "m13-t5",
    "slug": "m13_t5-1",
    "title": "Working with APIs: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Working with APIs. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Working with APIs"
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
        "id": "m13-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p02",
    "topicId": "m13-t5",
    "slug": "m13_t5-2",
    "title": "Working with APIs: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Working with APIs and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Working with APIs and print them separated by a comma."
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
      "Create two variables related to Working with APIs",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p03",
    "topicId": "m13-t5",
    "slug": "m13_t5-3",
    "title": "Working with APIs: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Working with APIs.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Working with APIs."
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
    "publicTests": [
      {
        "id": "m13-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p04",
    "topicId": "m13-t5",
    "slug": "m13_t5-4",
    "title": "Working with APIs: Condition",
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
    "publicTests": [
      {
        "id": "m13-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p05",
    "topicId": "m13-t5",
    "slug": "m13_t5-5",
    "title": "Working with APIs: Function Stub",
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
    "publicTests": [
      {
        "id": "m13-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p06",
    "topicId": "m13-t5",
    "slug": "m13_t5-6",
    "title": "Working with APIs: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Working with APIs. Print the "
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
        "id": "m13-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t5-p07",
    "topicId": "m13-t5",
    "slug": "m13_t5-7",
    "title": "Working with APIs: Dict Lookup",
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
        "id": "m13-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
