import type { PracticeProblem } from "@/lib/types";

export const module14Practice: PracticeProblem[] = [
  {
    "id": "m14-t1-p01",
    "topicId": "m14-t1",
    "slug": "m14_t1-1",
    "title": "Introduction to NumPy Arrays: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Introduction to NumPy Arrays. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Introduction to NumPy Arrays"
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
        "id": "m14-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p02",
    "topicId": "m14-t1",
    "slug": "m14_t1-2",
    "title": "Introduction to NumPy Arrays: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Introduction to NumPy Arrays and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Introduction to NumPy Arrays and print them separated by a comma."
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
      "Create two variables related to Introduction to NumPy Arrays",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p03",
    "topicId": "m14-t1",
    "slug": "m14_t1-3",
    "title": "Introduction to NumPy Arrays: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Introduction to NumPy Arrays.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Introduction to NumPy Arrays."
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
        "id": "m14-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p04",
    "topicId": "m14-t1",
    "slug": "m14_t1-4",
    "title": "Introduction to NumPy Arrays: Condition",
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
        "id": "m14-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p05",
    "topicId": "m14-t1",
    "slug": "m14_t1-5",
    "title": "Introduction to NumPy Arrays: Function Stub",
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
        "id": "m14-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p06",
    "topicId": "m14-t1",
    "slug": "m14_t1-6",
    "title": "Introduction to NumPy Arrays: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Introduction to NumPy Arrays. Print the "
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
        "id": "m14-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p07",
    "topicId": "m14-t1",
    "slug": "m14_t1-7",
    "title": "Introduction to NumPy Arrays: Dict Lookup",
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
        "id": "m14-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p01",
    "topicId": "m14-t2",
    "slug": "m14_t2-1",
    "title": "Array Creation and Properties: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Array Creation and Properties. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Array Creation and Properties"
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
        "id": "m14-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p02",
    "topicId": "m14-t2",
    "slug": "m14_t2-2",
    "title": "Array Creation and Properties: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Array Creation and Properties and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Array Creation and Properties and print them separated by a comma."
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
      "Create two variables related to Array Creation and Properties",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p03",
    "topicId": "m14-t2",
    "slug": "m14_t2-3",
    "title": "Array Creation and Properties: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Array Creation and Properties.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Array Creation and Properties."
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
        "id": "m14-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p04",
    "topicId": "m14-t2",
    "slug": "m14_t2-4",
    "title": "Array Creation and Properties: Condition",
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
        "id": "m14-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p05",
    "topicId": "m14-t2",
    "slug": "m14_t2-5",
    "title": "Array Creation and Properties: Function Stub",
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
        "id": "m14-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p06",
    "topicId": "m14-t2",
    "slug": "m14_t2-6",
    "title": "Array Creation and Properties: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Array Creation and Properties. Print the "
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
        "id": "m14-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p07",
    "topicId": "m14-t2",
    "slug": "m14_t2-7",
    "title": "Array Creation and Properties: Dict Lookup",
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
        "id": "m14-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p01",
    "topicId": "m14-t3",
    "slug": "m14_t3-1",
    "title": "Indexing and Slicing Arrays: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Indexing and Slicing Arrays. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Indexing and Slicing Arrays"
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
        "id": "m14-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p02",
    "topicId": "m14-t3",
    "slug": "m14_t3-2",
    "title": "Indexing and Slicing Arrays: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Indexing and Slicing Arrays and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Indexing and Slicing Arrays and print them separated by a comma."
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
      "Create two variables related to Indexing and Slicing Arrays",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p03",
    "topicId": "m14-t3",
    "slug": "m14_t3-3",
    "title": "Indexing and Slicing Arrays: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Indexing and Slicing Arrays.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Indexing and Slicing Arrays."
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
        "id": "m14-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p04",
    "topicId": "m14-t3",
    "slug": "m14_t3-4",
    "title": "Indexing and Slicing Arrays: Condition",
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
        "id": "m14-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p05",
    "topicId": "m14-t3",
    "slug": "m14_t3-5",
    "title": "Indexing and Slicing Arrays: Function Stub",
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
        "id": "m14-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p06",
    "topicId": "m14-t3",
    "slug": "m14_t3-6",
    "title": "Indexing and Slicing Arrays: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Indexing and Slicing Arrays. Print the "
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
        "id": "m14-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p07",
    "topicId": "m14-t3",
    "slug": "m14_t3-7",
    "title": "Indexing and Slicing Arrays: Dict Lookup",
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
        "id": "m14-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p01",
    "topicId": "m14-t4",
    "slug": "m14_t4-1",
    "title": "Array Operations and Broadcasting: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Array Operations and Broadcasting. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Array Operations and Broadcasting"
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
        "id": "m14-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p02",
    "topicId": "m14-t4",
    "slug": "m14_t4-2",
    "title": "Array Operations and Broadcasting: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Array Operations and Broadcasting and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Array Operations and Broadcasting and print them separated by a comma."
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
      "Create two variables related to Array Operations and Broadcasting",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p03",
    "topicId": "m14-t4",
    "slug": "m14_t4-3",
    "title": "Array Operations and Broadcasting: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Array Operations and Broadcasting.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Array Operations and Broadcasting."
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
        "id": "m14-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p04",
    "topicId": "m14-t4",
    "slug": "m14_t4-4",
    "title": "Array Operations and Broadcasting: Condition",
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
        "id": "m14-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p05",
    "topicId": "m14-t4",
    "slug": "m14_t4-5",
    "title": "Array Operations and Broadcasting: Function Stub",
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
        "id": "m14-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p06",
    "topicId": "m14-t4",
    "slug": "m14_t4-6",
    "title": "Array Operations and Broadcasting: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Array Operations and Broadcasting. Print the "
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
        "id": "m14-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p07",
    "topicId": "m14-t4",
    "slug": "m14_t4-7",
    "title": "Array Operations and Broadcasting: Dict Lookup",
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
        "id": "m14-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p01",
    "topicId": "m14-t5",
    "slug": "m14_t5-1",
    "title": "Statistical Functions in NumPy: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write a short program related to Statistical Functions in NumPy. Print Ready on one line.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Write a short program related to "
        },
        {
          "type": "code",
          "value": "Statistical Functions in NumPy"
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
        "id": "m14-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p02",
    "topicId": "m14-t5",
    "slug": "m14_t5-2",
    "title": "Statistical Functions in NumPy: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create two variables about Statistical Functions in NumPy and print them comma-separated.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create two variables related to Statistical Functions in NumPy and print them separated by a comma."
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
      "Create two variables related to Statistical Functions in NumPy",
      "Use comma in print: print(a, b, sep=\",\")",
      "Output must be exactly A,B"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p03",
    "topicId": "m14-t5",
    "slug": "m14_t5-3",
    "title": "Statistical Functions in NumPy: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use a for loop to print 1 through 4 for Statistical Functions in NumPy.",
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
          "value": " loop to print numbers from 1 to 4. Practice loops for Statistical Functions in NumPy."
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
        "id": "m14-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p04",
    "topicId": "m14-t5",
    "slug": "m14_t5-4",
    "title": "Statistical Functions in NumPy: Condition",
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
        "id": "m14-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p05",
    "topicId": "m14-t5",
    "slug": "m14_t5-5",
    "title": "Statistical Functions in NumPy: Function Stub",
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
        "id": "m14-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p06",
    "topicId": "m14-t5",
    "slug": "m14_t5-6",
    "title": "Statistical Functions in NumPy: List Practice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Create a list of three items and print index 1.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a list with three items about Statistical Functions in NumPy. Print the "
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
        "id": "m14-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p07",
    "topicId": "m14-t5",
    "slug": "m14_t5-7",
    "title": "Statistical Functions in NumPy: Dict Lookup",
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
        "id": "m14-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
