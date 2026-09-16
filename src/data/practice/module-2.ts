import type { PracticeProblem } from "@/lib/types";

export const module2Practice: PracticeProblem[] = [
  {
    "id": "m2-t1-p01",
    "topicId": "m2-t1",
    "slug": "print-name",
    "title": "Print Your Name",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use print() to display your name on one line.",
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
          "value": " to display a name on one line. Print "
        },
        {
          "type": "code",
          "value": "Jordan"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# print your name here",
      "liveCheckRules": [
        {
          "id": "name",
          "label": "prints Jordan",
          "kind": "print-value",
          "index": 0,
          "expected": "Jordan"
        }
      ],
      "emptyMessage": "Use print() with your name in quotes.",
      "successDetail": "Correct! You printed a name."
    },
    "examples": [
      {
        "output": "Jordan"
      }
    ],
    "constraints": [
      "Use a single print() statement",
      "Output must be exactly: Jordan"
    ],
    "hints": [
      "Try: print(\"Jordan\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Jordan",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "Jordan",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Jordan",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Jordan\")",
    "approach": "Use print() to display your name on one line.\n\nReference solution:\nprint(\"Jordan\")"
  },
  {
    "id": "m2-t1-p02",
    "topicId": "m2-t1",
    "slug": "print-sum",
    "title": "Print a Calculation",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print the result of 10 + 5.",
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
          "value": "10 + 5"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Python can add numbers inside print() — no quotes around numbers.",
          "print(10 + 5) calculates the sum and prints the answer."
        ],
        "codePreview": {
          "comment": "# Expected output",
          "lines": [
            "15"
          ]
        }
      },
      "outputOnly": true,
      "editorPlaceholder": "# print the sum of 10 and 5",
      "emptyMessage": "Use print() with an addition like 10 + 5.",
      "successDetail": "Correct! 10 + 5 equals 15."
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Use print() with an addition expression",
      "Output must be exactly: 15"
    ],
    "hints": [
      "Try: print(10 + 5)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "15",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "15",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(10 + 5)",
    "approach": "Print the result of 10 + 5.\n\n1. Python can add numbers inside print() — no quotes around numbers.\n2. print(10 + 5) calculates the sum and prints the answer.\n\nReference solution:\nprint(10 + 5)"
  },
  {
    "id": "m2-t1-p03",
    "topicId": "m2-t1",
    "slug": "two-prints",
    "title": "Two Messages",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print Hello on line 1 and Python on line 2.",
    "challengeContent": {
      "introLead": "Print exactly two lines:",
      "introBullets": [
        [
          {
            "type": "text",
            "value": "Line 1: "
          },
          {
            "type": "code",
            "value": "Hello"
          }
        ],
        [
          {
            "type": "text",
            "value": "Line 2: "
          },
          {
            "type": "code",
            "value": "Python"
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
          "value": " calls — one for each line."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# write two print() statements",
      "liveCheckRules": [
        {
          "id": "count",
          "label": "2 print() calls",
          "kind": "print-count",
          "expected": 2
        },
        {
          "id": "l1",
          "label": "prints Hello",
          "kind": "print-value",
          "index": 0,
          "expected": "Hello"
        },
        {
          "id": "l2",
          "label": "prints Python",
          "kind": "print-value",
          "index": 1,
          "expected": "Python"
        },
        {
          "id": "order",
          "label": "correct order",
          "kind": "print-sequence",
          "expected": [
            "Hello",
            "Python"
          ]
        }
      ],
      "emptyMessage": "Write two print() statements — one per line.",
      "successDetail": "Correct! Two lines printed perfectly."
    },
    "examples": [
      {
        "output": "Hello\nPython"
      }
    ],
    "constraints": [
      "Use exactly two print() statements",
      "Line 1 must be Hello, line 2 must be Python"
    ],
    "hints": [
      "First: print(\"Hello\"), then: print(\"Python\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "Hello\nPython",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "Hello\nPython",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p03-t3",
        "label": "Multi-line Format",
        "expectedStdout": "Hello\nPython",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Hello\")\nprint(\"Python\")",
    "approach": "Print Hello on line 1 and Python on line 2.\n\nReference solution:\nprint(\"Hello\")\nprint(\"Python\")"
  },
  {
    "id": "m2-t1-p04",
    "topicId": "m2-t1",
    "slug": "input-echo",
    "title": "Echo Input (Simulated)",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set name = \"Mia\" then print Hello, Mia using concatenation.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "name = \"Mia\""
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "Hello, Mia"
        },
        {
          "type": "text",
          "value": " using string concatenation with "
        },
        {
          "type": "code",
          "value": "+"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "name"
      ],
      "editorPlaceholder": "# set name and build the greeting",
      "liveCheckRules": [
        {
          "id": "greet",
          "label": "prints Hello, Mia",
          "kind": "print-value",
          "index": 0,
          "expected": "Hello, Mia"
        }
      ],
      "emptyMessage": "Create name = \"Mia\" and print a greeting with +.",
      "successDetail": "Correct! You combined a variable into a sentence."
    },
    "examples": [
      {
        "output": "Hello, Mia"
      }
    ],
    "constraints": [
      "Define name = \"Mia\"",
      "Use + to join strings",
      "Output must be exactly: Hello, Mia"
    ],
    "hints": [
      "Try: name = \"Mia\" then print(\"Hello, \" + name)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Hello, Mia",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"name\" in globals(), \"Expected a variable named name\"",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hello, Mia",
        "visibility": "public"
      }
    ],
    "solutionCode": "name = \"Mia\"\nprint(\"Hello, \" + name)",
    "approach": "Set name = \"Mia\" then print Hello, Mia using concatenation.\n\nReference solution:\nname = \"Mia\"\nprint(\"Hello, \" + name)"
  },
  {
    "id": "m2-t1-p05",
    "topicId": "m2-t1",
    "slug": "format-output",
    "title": "Formatted Output",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use f-string: name = \"Leo\", age = 20, print Name: Leo, Age: 20",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "name = \"Leo\""
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "age = 20"
        },
        {
          "type": "text",
          "value": ". Use an "
        },
        {
          "type": "code",
          "value": "f-string"
        },
        {
          "type": "text",
          "value": " to print: "
        },
        {
          "type": "code",
          "value": "Name: Leo, Age: 20"
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "name",
        "age"
      ],
      "editorPlaceholder": "# use an f-string to format output",
      "emptyMessage": "Create name and age, then print with an f-string.",
      "successDetail": "Correct! Your f-string formatted the output."
    },
    "examples": [
      {
        "output": "Name: Leo, Age: 20"
      }
    ],
    "constraints": [
      "Define name = \"Leo\" and age = 20",
      "Use an f-string inside print()",
      "Output must be exactly: Name: Leo, Age: 20"
    ],
    "hints": [
      "Try: print(f\"Name: {name}, Age: {age}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "Name: Leo, Age: 20",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"name\" in globals(), \"Expected a variable named name\"\nassert \"age\" in globals(), \"Expected a variable named age\"",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "Name: Leo, Age: 20",
        "visibility": "public"
      }
    ],
    "solutionCode": "name = \"Leo\"\nage = 20\nprint(f\"Name: {name}, Age: {age}\")",
    "approach": "Use f-string: name = \"Leo\", age = 20, print Name: Leo, Age: 20\n\nReference solution:\nname = \"Leo\"\nage = 20\nprint(f\"Name: {name}, Age: {age}\")"
  },
  {
    "id": "m2-t1-p06",
    "topicId": "m2-t1",
    "slug": "multi-values",
    "title": "Print Three Values",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print 1, 2, 3 using one print with default separator.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
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
          "value": " on one line using a single "
        },
        {
          "type": "code",
          "value": "print()"
        },
        {
          "type": "text",
          "value": " call (values separated by spaces)."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# print 1, 2, 3 in one print() call",
      "emptyMessage": "Use one print() with three values: print(1, 2, 3).",
      "successDetail": "Correct! One print() showed all three values."
    },
    "examples": [
      {
        "output": "1 2 3"
      }
    ],
    "constraints": [
      "Use a single print() call with three values",
      "Output must be exactly: 1 2 3"
    ],
    "hints": [
      "Try: print(1, 2, 3) — commas add spaces between values"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "1 2 3",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "1 2 3",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "1 2 3",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(1, 2, 3)",
    "approach": "Print 1, 2, 3 using one print with default separator.\n\nReference solution:\nprint(1, 2, 3)"
  },
  {
    "id": "m2-t1-p07",
    "topicId": "m2-t1",
    "slug": "sep-end",
    "title": "Custom Separator",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print a, b, c separated by dashes using sep='-'.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "a"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "b"
        },
        {
          "type": "text",
          "value": ", and "
        },
        {
          "type": "code",
          "value": "c"
        },
        {
          "type": "text",
          "value": " on one line separated by dashes using "
        },
        {
          "type": "code",
          "value": "sep=\"-\""
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "editorPlaceholder": "# print with sep=\"-\"",
      "liveCheckRules": [
        {
          "id": "sep",
          "label": "prints a-b-c",
          "kind": "print-value",
          "index": 0,
          "expected": "a-b-c"
        }
      ],
      "emptyMessage": "Use print(\"a\", \"b\", \"c\", sep=\"-\").",
      "successDetail": "Correct! Custom separator worked."
    },
    "examples": [
      {
        "output": "a-b-c"
      }
    ],
    "constraints": [
      "Use print with sep=\"-\"",
      "Output must be exactly: a-b-c"
    ],
    "hints": [
      "Try: print(\"a\", \"b\", \"c\", sep=\"-\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      },
      {
        "id": "m2-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"a\", \"b\", \"c\", sep=\"-\")",
    "approach": "Print a, b, c separated by dashes using sep='-'.\n\nReference solution:\nprint(\"a\", \"b\", \"c\", sep=\"-\")"
  },
  {
    "id": "m2-t2-p01",
    "topicId": "m2-t2",
    "slug": "comment-greeting",
    "title": "Comments: Comment Then Print",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Add a comment line starting with #, then print Hi.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# add a comment, then print",
      "emptyMessage": "Add a # comment and a print() call.",
      "successDetail": "Correct! Comments describe code without running.",
      "requiresComment": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Add a "
        },
        {
          "type": "code",
          "value": "#"
        },
        {
          "type": "text",
          "value": " comment, then print "
        },
        {
          "type": "code",
          "value": "Hi"
        },
        {
          "type": "text",
          "value": "."
        }
      ]
    },
    "examples": [
      {
        "output": "Hi"
      }
    ],
    "constraints": [
      "Include a comment line starting with #",
      "Output must be exactly: Hi"
    ],
    "hints": [
      "Example: # greeting message\\nprint(\"Hi\")"
    ],
    "starterCode": "",
    "approach": "Add a comment line starting with #, then print Hi.\n\nReference solution:\n# greeting message\nprint(\"Hi\")",
    "publicTests": [
      {
        "id": "m2-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Hi",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "Hi",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hi",
        "visibility": "public"
      }
    ],
    "solutionCode": "# greeting message\nprint(\"Hi\")"
  },
  {
    "id": "m2-t2-p02",
    "topicId": "m2-t2",
    "slug": "comment-two-lines",
    "title": "Comments: Comment Two Prints",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Add one comment, then print Line1 and Line2 on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# describe the program",
      "emptyMessage": "Add a comment and two print() calls.",
      "successDetail": "Correct! Comments help readers understand your code.",
      "requiresComment": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Add a comment, then print "
        },
        {
          "type": "code",
          "value": "Line1"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "Line2"
        },
        {
          "type": "text",
          "value": " on separate lines."
        }
      ]
    },
    "examples": [
      {
        "output": "Line1\nLine2"
      }
    ],
    "constraints": [
      "Include at least one # comment",
      "Print Line1 then Line2"
    ],
    "hints": [
      "Add # then print(\"Line1\") and print(\"Line2\")"
    ],
    "starterCode": "",
    "approach": "Add one comment, then print Line1 and Line2 on separate lines.\n\nReference solution:\n# two lines of output\nprint(\"Line1\")\nprint(\"Line2\")",
    "publicTests": [
      {
        "id": "m2-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "Line1\nLine2",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "Line1\nLine2",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p02-t3",
        "label": "Multi-line Format",
        "expectedStdout": "Line1\nLine2",
        "visibility": "public"
      }
    ],
    "solutionCode": "# two lines of output\nprint(\"Line1\")\nprint(\"Line2\")"
  },
  {
    "id": "m2-t2-p03",
    "topicId": "m2-t2",
    "slug": "comment-variable",
    "title": "Comments: Comment a Variable",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Add a comment above x = 5, then print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# explain the variable",
      "emptyMessage": "Comment the variable assignment, then print x.",
      "successDetail": "Correct! Comments can explain variables too.",
      "requiresComment": true,
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Add a comment above "
        },
        {
          "type": "code",
          "value": "x = 5"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "x"
        },
        {
          "type": "text",
          "value": "."
        }
      ]
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Add a # comment above the assignment",
      "Create x = 5 and print(x)"
    ],
    "hints": [
      "# store a number\\nx = 5\\nprint(x)"
    ],
    "starterCode": "",
    "approach": "Add a comment above x = 5, then print x.\n\nReference solution:\n# store a number\nx = 5\nprint(x)",
    "publicTests": [
      {
        "id": "m2-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "5",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "# store a number\nx = 5\nprint(x)"
  },
  {
    "id": "m2-t2-p04",
    "topicId": "m2-t2",
    "slug": "comment-each-step",
    "title": "Comments: Comment Each Step",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use two comment lines — one before each print statement. Print A then B.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# comment each print",
      "emptyMessage": "Add a comment before each print() call.",
      "successDetail": "Correct! Step-by-step comments make code easy to follow.",
      "requiresComment": true
    },
    "examples": [
      {
        "output": "A\nB"
      }
    ],
    "constraints": [
      "Use two separate # comment lines",
      "Print A on line 1, B on line 2"
    ],
    "hints": [
      "# first value\\nprint(\"A\")\\n# second value\\nprint(\"B\")"
    ],
    "starterCode": "",
    "approach": "Use two comment lines — one before each print statement. Print A then B.\n\nReference solution:\n# first value\nprint(\"A\")\n# second value\nprint(\"B\")",
    "publicTests": [
      {
        "id": "m2-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "A\nB",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "A\nB",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p04-t3",
        "label": "Multi-line Format",
        "expectedStdout": "A\nB",
        "visibility": "public"
      }
    ],
    "solutionCode": "# first value\nprint(\"A\")\n# second value\nprint(\"B\")"
  },
  {
    "id": "m2-t2-p05",
    "topicId": "m2-t2",
    "slug": "comment-before-loop",
    "title": "Comments: Comment a Loop",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Add a comment explaining the loop, then use for i in range(1, 4): print(i).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# explain the loop",
      "emptyMessage": "Add a comment and a for loop.",
      "successDetail": "Correct! Comments work great above loops.",
      "requiresComment": true,
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "1\n2\n3"
      }
    ],
    "constraints": [
      "Include a # comment",
      "Use for and range(1, 4)",
      "Print 1, 2, 3 each on its own line"
    ],
    "hints": [
      "# print numbers 1 to 3\\nfor i in range(1, 4):\\n    print(i)"
    ],
    "starterCode": "",
    "approach": "Add a comment explaining the loop, then use for i in range(1, 4): print(i).\n\nReference solution:\n# print numbers 1 to 3\nfor i in range(1, 4):\n    print(i)",
    "publicTests": [
      {
        "id": "m2-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p05-t3",
        "label": "Multi-line Format",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ],
    "solutionCode": "# print numbers 1 to 3\nfor i in range(1, 4):\n    print(i)"
  },
  {
    "id": "m2-t2-p06",
    "topicId": "m2-t2",
    "slug": "comment-function",
    "title": "Comments: Comment a Function",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Add a comment above def greet():, print Hello inside, call greet().",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# describe the function",
      "emptyMessage": "Comment the function, define it, and call it.",
      "successDetail": "Correct! Comments explain what functions do.",
      "requiresComment": true,
      "requiresFunction": "greet"
    },
    "examples": [
      {
        "output": "Hello"
      }
    ],
    "constraints": [
      "Include a # comment",
      "Define greet() that prints Hello",
      "Call greet()"
    ],
    "hints": [
      "# says hello\\ndef greet():\\n    print(\"Hello\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Add a comment above def greet():, print Hello inside, call greet().\n\nReference solution:\n# says hello\ndef greet():\n    print(\"Hello\")\ngreet()",
    "publicTests": [
      {
        "id": "m2-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "Hello",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"greet\" in globals() and callable(globals()[\"greet\"]), \"Expected a function named greet\"",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "# says hello\ndef greet():\n    print(\"Hello\")\ngreet()"
  },
  {
    "id": "m2-t2-p07",
    "topicId": "m2-t2",
    "slug": "comment-full-program",
    "title": "Comments: Fully Commented Program",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Add comments for: variable setup, condition, and output. Set score=80, if score>=60 print Pass else Fail.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# comment each section",
      "emptyMessage": "Comment variable, condition, and output sections.",
      "successDetail": "Correct! Well-commented code is easier to maintain.",
      "requiresComment": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "Pass"
      }
    ],
    "constraints": [
      "Use at least two # comments",
      "score = 80 with if/else",
      "Output Pass"
    ],
    "hints": [
      "Add comments before score=80 and before the if statement"
    ],
    "starterCode": "",
    "approach": "Add comments for: variable setup, condition, and output. Set score=80, if score>=60 print Pass else Fail.\n\nReference solution:\n# set the score\nscore = 80\n# check the pass mark\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
    "publicTests": [
      {
        "id": "m2-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "Pass",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m2-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "# set the score\nscore = 80\n# check the pass mark\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m2-t3-p01",
    "topicId": "m2-t3",
    "slug": "assign-int",
    "title": "Store an Integer",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create age = 21 and print age.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create a variable "
        },
        {
          "type": "code",
          "value": "age"
        },
        {
          "type": "text",
          "value": ", set it to "
        },
        {
          "type": "code",
          "value": "21"
        },
        {
          "type": "text",
          "value": ", and print it."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "age"
      ],
      "editorPlaceholder": "# create age and print it",
      "emptyMessage": "Create age = 21 and print(age).",
      "successDetail": "Correct! You stored and printed an integer."
    },
    "examples": [
      {
        "output": "21"
      }
    ],
    "constraints": [
      "Create variable age = 21",
      "Output must be exactly: 21"
    ],
    "hints": [
      "Try: age = 21 then print(age)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "21",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"age\" in globals(), \"Expected a variable named age\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "21",
        "visibility": "public"
      }
    ],
    "solutionCode": "age = 21\nprint(age)",
    "approach": "Create age = 21 and print age.\n\nReference solution:\nage = 21\nprint(age)"
  },
  {
    "id": "m2-t3-p02",
    "topicId": "m2-t3",
    "slug": "assign-str",
    "title": "Store a String",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create city = \"Pune\" and print city.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "city = \"Pune\""
        },
        {
          "type": "text",
          "value": " and print the value of "
        },
        {
          "type": "code",
          "value": "city"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "city"
      ],
      "editorPlaceholder": "# create city and print it",
      "emptyMessage": "Create city = \"Pune\" and print(city).",
      "successDetail": "Correct! You stored and printed a string."
    },
    "examples": [
      {
        "output": "Pune"
      }
    ],
    "constraints": [
      "Create city = \"Pune\"",
      "Output must be exactly: Pune"
    ],
    "hints": [
      "Try: city = \"Pune\" then print(city)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "Pune",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"city\" in globals(), \"Expected a variable named city\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "Pune",
        "visibility": "public"
      }
    ],
    "solutionCode": "city = \"Pune\"\nprint(city)",
    "approach": "Create city = \"Pune\" and print city.\n\nReference solution:\ncity = \"Pune\"\nprint(city)"
  },
  {
    "id": "m2-t3-p03",
    "topicId": "m2-t3",
    "slug": "reassign",
    "title": "Reassign Variable",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set x = 1, then x = 2, print x.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "x = 1"
        },
        {
          "type": "text",
          "value": ", then change it to "
        },
        {
          "type": "code",
          "value": "x = 2"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "x"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "x"
      ],
      "editorPlaceholder": "# assign x twice and print",
      "emptyMessage": "Set x = 1, then x = 2, then print(x).",
      "successDetail": "Correct! Reassigning changed the value to 2."
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Assign x twice",
      "Final output must be exactly: 2"
    ],
    "hints": [
      "Try: x = 1, x = 2, print(x) — the last assignment wins"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "x = 1\nx = 2\nprint(x)",
    "approach": "Set x = 1, then x = 2, print x.\n\nReference solution:\nx = 1\nx = 2\nprint(x)"
  },
  {
    "id": "m2-t3-p04",
    "topicId": "m2-t3",
    "slug": "two-vars",
    "title": "Two Variables",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create width = 5 and height = 3, print width * height.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "width = 5"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "height = 3"
        },
        {
          "type": "text",
          "value": ", then print their product "
        },
        {
          "type": "code",
          "value": "width * height"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "width",
        "height"
      ],
      "editorPlaceholder": "# width, height, then print product",
      "emptyMessage": "Create width and height, then print(width * height).",
      "successDetail": "Correct! 5 × 3 = 15."
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Create width = 5 and height = 3",
      "Print the product, not the variables separately",
      "Output must be exactly: 15"
    ],
    "hints": [
      "Try: width = 5, height = 3, print(width * height)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "15",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"width\" in globals(), \"Expected a variable named width\"\nassert \"height\" in globals(), \"Expected a variable named height\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ],
    "solutionCode": "width = 5\nheight = 3\nprint(width * height)",
    "approach": "Create width = 5 and height = 3, print width * height.\n\nReference solution:\nwidth = 5\nheight = 3\nprint(width * height)"
  },
  {
    "id": "m2-t3-p05",
    "topicId": "m2-t3",
    "slug": "swap",
    "title": "Swap Values",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Swap a and b. Start a=1, b=2. Print a then b.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Start with "
        },
        {
          "type": "code",
          "value": "a = 1"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "b = 2"
        },
        {
          "type": "text",
          "value": ". Swap their values, then print "
        },
        {
          "type": "code",
          "value": "a"
        },
        {
          "type": "text",
          "value": " on line 1 and "
        },
        {
          "type": "code",
          "value": "b"
        },
        {
          "type": "text",
          "value": " on line 2."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "a",
        "b"
      ],
      "editorPlaceholder": "# swap a and b, print both",
      "liveCheckRules": [
        {
          "id": "count",
          "label": "2 print() calls",
          "kind": "print-count",
          "expected": 2
        },
        {
          "id": "order",
          "label": "correct order",
          "kind": "print-sequence",
          "expected": [
            "2",
            "1"
          ]
        }
      ],
      "emptyMessage": "Swap a and b using a, b = b, a, then print both.",
      "successDetail": "Correct! Values swapped successfully."
    },
    "examples": [
      {
        "output": "2\n1"
      }
    ],
    "constraints": [
      "Start with a = 1 and b = 2",
      "Swap using a, b = b, a",
      "Print a then b — output must be 2 then 1"
    ],
    "hints": [
      "Try: a, b = 1, 2 then a, b = b, a then print(a) and print(b)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "2\n1",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"a\" in globals(), \"Expected a variable named a\"\nassert \"b\" in globals(), \"Expected a variable named b\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p05-t3",
        "label": "Multi-line Format",
        "expectedStdout": "2\n1",
        "visibility": "public"
      }
    ],
    "solutionCode": "a, b = 1, 2\na, b = b, a\nprint(a)\nprint(b)",
    "approach": "Swap a and b. Start a=1, b=2. Print a then b.\n\nReference solution:\na, b = 1, 2\na, b = b, a\nprint(a)\nprint(b)"
  },
  {
    "id": "m2-t3-p06",
    "topicId": "m2-t3",
    "slug": "naming",
    "title": "Descriptive Names",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Use total_score = 88 and print it.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Use a descriptive variable name "
        },
        {
          "type": "code",
          "value": "total_score"
        },
        {
          "type": "text",
          "value": ", set it to "
        },
        {
          "type": "code",
          "value": "88"
        },
        {
          "type": "text",
          "value": ", and print it."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "total_score"
      ],
      "editorPlaceholder": "# use total_score variable",
      "emptyMessage": "Create total_score = 88 and print it.",
      "successDetail": "Correct! Descriptive names make code easier to read."
    },
    "examples": [
      {
        "output": "88"
      }
    ],
    "constraints": [
      "Use the variable name total_score",
      "Output must be exactly: 88"
    ],
    "hints": [
      "Try: total_score = 88 then print(total_score)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "88",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"total_score\" in globals(), \"Expected a variable named total_score\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "88",
        "visibility": "public"
      }
    ],
    "solutionCode": "total_score = 88\nprint(total_score)",
    "approach": "Use total_score = 88 and print it.\n\nReference solution:\ntotal_score = 88\nprint(total_score)"
  },
  {
    "id": "m2-t3-p07",
    "topicId": "m2-t3",
    "slug": "multi-assign",
    "title": "Multiple Assignment",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Use x, y, z = 1, 2, 3 and print their sum.",
    "challengeContent": {
      "introSegments": [
        {
          "type": "text",
          "value": "Assign three values at once: "
        },
        {
          "type": "code",
          "value": "x, y, z = 1, 2, 3"
        },
        {
          "type": "text",
          "value": ". Print their sum "
        },
        {
          "type": "code",
          "value": "x + y + z"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "outputOnly": true,
      "requiresVariables": [
        "x",
        "y",
        "z"
      ],
      "editorPlaceholder": "# multiple assignment, then print sum",
      "emptyMessage": "Use x, y, z = 1, 2, 3 then print(x + y + z).",
      "successDetail": "Correct! 1 + 2 + 3 = 6."
    },
    "examples": [
      {
        "output": "6"
      }
    ],
    "constraints": [
      "Use x, y, z = 1, 2, 3",
      "Print the sum of all three",
      "Output must be exactly: 6"
    ],
    "hints": [
      "Try: x, y, z = 1, 2, 3 then print(x + y + z)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "6",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"\nassert \"y\" in globals(), \"Expected a variable named y\"\nassert \"z\" in globals(), \"Expected a variable named z\"",
        "visibility": "public"
      },
      {
        "id": "m2-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "6",
        "visibility": "public"
      }
    ],
    "solutionCode": "x, y, z = 1, 2, 3\nprint(x + y + z)",
    "approach": "Use x, y, z = 1, 2, 3 and print their sum.\n\nReference solution:\nx, y, z = 1, 2, 3\nprint(x + y + z)"
  },
  {
    "id": "m2-t4-p01",
    "topicId": "m2-t4",
    "slug": "store-int",
    "title": "Data Types: Store an Integer",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create age = 21 and print age.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# integer variable",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 21 is an int.",
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "age = 21"
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "requiresVariables": [
        "age"
      ]
    },
    "examples": [
      {
        "output": "21"
      }
    ],
    "constraints": [
      "Output must be exactly: 21"
    ],
    "hints": [
      "age = 21\\nprint(age)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "21",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"age\" in globals(), \"Expected a variable named age\"",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "21",
        "visibility": "public"
      }
    ],
    "solutionCode": "age = 21\nprint(age)",
    "approach": "Create age = 21 and print age.\n\nReference solution:\nage = 21\nprint(age)"
  },
  {
    "id": "m2-t4-p02",
    "topicId": "m2-t4",
    "slug": "store-float",
    "title": "Data Types: Store a Float",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create pi = 3.14 and print pi.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# float variable",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 3.14 is a float.",
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "pi = 3.14"
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "requiresVariables": [
        "pi"
      ]
    },
    "examples": [
      {
        "output": "3.14"
      }
    ],
    "constraints": [
      "Output must be exactly: 3.14"
    ],
    "hints": [
      "pi = 3.14\\nprint(pi)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "3.14",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pi\" in globals(), \"Expected a variable named pi\"",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "3.14",
        "visibility": "public"
      }
    ],
    "solutionCode": "pi = 3.14\nprint(pi)",
    "approach": "Create pi = 3.14 and print pi.\n\nReference solution:\npi = 3.14\nprint(pi)"
  },
  {
    "id": "m2-t4-p03",
    "topicId": "m2-t4",
    "slug": "store-str",
    "title": "Data Types: Store a String",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Create name = \"Ana\" and print name.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# string variable",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Ana is a str.",
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "name = \"Ana\""
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "requiresVariables": [
        "name"
      ]
    },
    "examples": [
      {
        "output": "Ana"
      }
    ],
    "constraints": [
      "Output must be exactly: Ana"
    ],
    "hints": [
      "name = \"Ana\"\\nprint(name)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "Ana",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"name\" in globals(), \"Expected a variable named name\"",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "Ana",
        "visibility": "public"
      }
    ],
    "solutionCode": "name = \"Ana\"\nprint(name)",
    "approach": "Create name = \"Ana\" and print name.\n\nReference solution:\nname = \"Ana\"\nprint(name)"
  },
  {
    "id": "m2-t4-p04",
    "topicId": "m2-t4",
    "slug": "store-bool",
    "title": "Data Types: Store a Boolean",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Create active = True and print active.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# boolean variable",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! True is a bool.",
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "active = True"
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "requiresVariables": [
        "active"
      ]
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must be exactly: True"
    ],
    "hints": [
      "active = True\\nprint(active)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"active\" in globals(), \"Expected a variable named active\"",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "active = True\nprint(active)",
    "approach": "Create active = True and print active.\n\nReference solution:\nactive = True\nprint(active)"
  },
  {
    "id": "m2-t4-p05",
    "topicId": "m2-t4",
    "slug": "type-int",
    "title": "Data Types: Check int Type",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print the type of 42 using type().",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print type of 42",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 42 is an integer.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "type()"
        },
        {
          "type": "text",
          "value": " to print the type of "
        },
        {
          "type": "code",
          "value": "42"
        },
        {
          "type": "text",
          "value": "."
        }
      ]
    },
    "examples": [
      {
        "output": "<class 'int'>"
      }
    ],
    "constraints": [
      "Output must be exactly: <class 'int'>"
    ],
    "hints": [
      "print(type(42))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "<class 'int'>",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "<class 'int'>",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "<class 'int'>",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(type(42))",
    "approach": "Print the type of 42 using type().\n\nReference solution:\nprint(type(42))"
  },
  {
    "id": "m2-t4-p06",
    "topicId": "m2-t4",
    "slug": "type-str",
    "title": "Data Types: Check str Type",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print the type of \"hello\" using type().",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print type of \"hello\"",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! \"hello\" is a string.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the type of "
        },
        {
          "type": "code",
          "value": "\"hello\""
        },
        {
          "type": "text",
          "value": " using type()."
        }
      ]
    },
    "examples": [
      {
        "output": "<class 'str'>"
      }
    ],
    "constraints": [
      "Output must be exactly: <class 'str'>"
    ],
    "hints": [
      "print(type(\"hello\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "<class 'str'>",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "<class 'str'>",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "<class 'str'>",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(type(\"hello\"))",
    "approach": "Print the type of \"hello\" using type().\n\nReference solution:\nprint(type(\"hello\"))"
  },
  {
    "id": "m2-t4-p07",
    "topicId": "m2-t4",
    "slug": "two-types",
    "title": "Data Types: Two Types",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print type(10) on line 1 and type(3.5) on line 2.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print two types",
      "emptyMessage": "Print type(10) then type(3.5) on separate lines.",
      "successDetail": "Correct! int and float are different types."
    },
    "examples": [
      {
        "output": "<class 'int'>\n<class 'float'>"
      }
    ],
    "constraints": [
      "Two print() calls with type()",
      "Line 1: <class 'int'>",
      "Line 2: <class 'float'>"
    ],
    "hints": [
      "print(type(10))\\nprint(type(3.5))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "<class 'int'>\n<class 'float'>",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "<class 'int'>\n<class 'float'>",
        "visibility": "public"
      },
      {
        "id": "m2-t4-p07-t3",
        "label": "Multi-line Format",
        "expectedStdout": "<class 'int'>\n<class 'float'>",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(type(10))\nprint(type(3.5))",
    "approach": "Print type(10) on line 1 and type(3.5) on line 2.\n\nReference solution:\nprint(type(10))\nprint(type(3.5))"
  },
  {
    "id": "m2-t5-p01",
    "topicId": "m2-t5",
    "slug": "cast-int",
    "title": "Typecasting: String to int",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Convert \"7\" to an integer and print it.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# int(\"7\")",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! int() converts strings to numbers.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "int(\"7\")"
        },
        {
          "type": "text",
          "value": " and print the result."
        }
      ]
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Output must be exactly: 7"
    ],
    "hints": [
      "print(int(\"7\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "7",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "7",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(int(\"7\"))",
    "approach": "Convert \"7\" to an integer and print it.\n\nReference solution:\nprint(int(\"7\"))"
  },
  {
    "id": "m2-t5-p02",
    "topicId": "m2-t5",
    "slug": "cast-float",
    "title": "Typecasting: String to float",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Convert \"3.5\" to float and print it.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# float(\"3.5\")",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! float() handles decimals.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "float(\"3.5\")"
        },
        {
          "type": "text",
          "value": " and print the result."
        }
      ]
    },
    "examples": [
      {
        "output": "3.5"
      }
    ],
    "constraints": [
      "Output must be exactly: 3.5"
    ],
    "hints": [
      "print(float(\"3.5\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "3.5",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "3.5",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "3.5",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(float(\"3.5\"))",
    "approach": "Convert \"3.5\" to float and print it.\n\nReference solution:\nprint(float(\"3.5\"))"
  },
  {
    "id": "m2-t5-p03",
    "topicId": "m2-t5",
    "slug": "cast-str",
    "title": "Typecasting: Number to string",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Convert 42 to a string and print it.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# str(42)",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! str() converts numbers to text.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "str(42)"
        },
        {
          "type": "text",
          "value": " and print the result."
        }
      ]
    },
    "examples": [
      {
        "output": "42"
      }
    ],
    "constraints": [
      "Output must be exactly: 42"
    ],
    "hints": [
      "print(str(42))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "42",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "42",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "42",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(str(42))",
    "approach": "Convert 42 to a string and print it.\n\nReference solution:\nprint(str(42))"
  },
  {
    "id": "m2-t5-p04",
    "topicId": "m2-t5",
    "slug": "cast-truncate",
    "title": "Typecasting: Float to int",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Convert 9.9 to int and print it (truncates to 9).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# int(9.9)",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! int(9.9) becomes 9.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "int(9.9)"
        },
        {
          "type": "text",
          "value": " — Python drops the decimal part."
        }
      ]
    },
    "examples": [
      {
        "output": "9"
      }
    ],
    "constraints": [
      "Output must be exactly: 9"
    ],
    "hints": [
      "print(int(9.9))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "9",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "9",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "9",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(int(9.9))",
    "approach": "Convert 9.9 to int and print it (truncates to 9).\n\nReference solution:\nprint(int(9.9))"
  },
  {
    "id": "m2-t5-p05",
    "topicId": "m2-t5",
    "slug": "cast-add-strings",
    "title": "Typecasting: Add Cast Values",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print int(\"5\") + int(\"3\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# add cast values",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Cast first, then add.",
      "introSegments": [
        {
          "type": "text",
          "value": "Convert "
        },
        {
          "type": "code",
          "value": "\"5\""
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "\"3\""
        },
        {
          "type": "text",
          "value": " to ints and add them."
        }
      ]
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output must be exactly: 8"
    ],
    "hints": [
      "print(int(\"5\") + int(\"3\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "8",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "8",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(int(\"5\") + int(\"3\"))",
    "approach": "Print int(\"5\") + int(\"3\").\n\nReference solution:\nprint(int(\"5\") + int(\"3\"))"
  },
  {
    "id": "m2-t5-p06",
    "topicId": "m2-t5",
    "slug": "cast-concat",
    "title": "Typecasting: Concat with str()",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print \"Score: \" + str(100).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# str for concatenation",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! str() lets you join text and numbers.",
      "introSegments": [
        {
          "type": "text",
          "value": "Combine text and a number using "
        },
        {
          "type": "code",
          "value": "str()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints Score: 100",
          "kind": "print-value",
          "index": 0,
          "expected": "Score: 100"
        }
      ]
    },
    "examples": [
      {
        "output": "Score: 100"
      }
    ],
    "constraints": [
      "Output must be exactly: Score: 100"
    ],
    "hints": [
      "print(\"Score: \" + str(100))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m2-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "Score: 100",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "Score: 100",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "Score: 100",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"Score: \" + str(100))",
    "approach": "Print \"Score: \" + str(100).\n\nReference solution:\nprint(\"Score: \" + str(100))"
  },
  {
    "id": "m2-t5-p07",
    "topicId": "m2-t5",
    "slug": "cast-bool-int",
    "title": "Typecasting: bool to int",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print int(True) and int(False) on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# bool to int",
      "emptyMessage": "Print int(True) then int(False).",
      "successDetail": "Correct! True becomes 1 and False becomes 0.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(True)"
        },
        {
          "type": "text",
          "value": " on line 1 and "
        },
        {
          "type": "code",
          "value": "int(False)"
        },
        {
          "type": "text",
          "value": " on line 2."
        }
      ]
    },
    "examples": [
      {
        "output": "1\n0"
      }
    ],
    "constraints": [
      "Two print() calls",
      "Line 1: 1",
      "Line 2: 0"
    ],
    "hints": [
      "print(int(True))\\nprint(int(False))"
    ],
    "starterCode": "",
    "approach": "Print int(True) and int(False) on separate lines.\n\nReference solution:\nprint(int(True))\nprint(int(False))",
    "publicTests": [
      {
        "id": "m2-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "1\n0",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "1\n0",
        "visibility": "public"
      },
      {
        "id": "m2-t5-p07-t3",
        "label": "Multi-line Format",
        "expectedStdout": "1\n0",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(int(True))\nprint(int(False))"
  }
];
