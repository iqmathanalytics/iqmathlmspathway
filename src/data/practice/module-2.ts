import type { PracticeProblem } from "@/lib/types";

export const module2Practice: PracticeProblem[] = [
  {
    "id": "m2-t1-p01",
    "topicId": "m2-t1",
    "slug": "print-name",
    "title": "Print Your Name",
    "difficulty": "easy",
    "order": 1,
    "description": "Use print() to display your name on one line.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Jordan",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(\"Jordan\")",
    "publicTests": [
      {
        "id": "m2-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Jordan",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t1-p02",
    "topicId": "m2-t1",
    "slug": "print-sum",
    "title": "Print a Calculation",
    "difficulty": "easy",
    "order": 2,
    "description": "Print the result of 10 + 5.",
    "examples": [
      {
        "input": "Run your program",
        "output": "15",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(10 + 5)",
    "publicTests": [
      {
        "id": "m2-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t1-p03",
    "topicId": "m2-t1",
    "slug": "two-prints",
    "title": "Two Messages",
    "difficulty": "easy",
    "order": 3,
    "description": "Print Hello on line 1 and Python on line 2.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Hello",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(\"Hello\")\nprint(\"Python\")",
    "publicTests": [
      {
        "id": "m2-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Hello\nPython",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t1-p04",
    "topicId": "m2-t1",
    "slug": "input-echo",
    "title": "Echo Input (Simulated)",
    "difficulty": "medium",
    "order": 4,
    "description": "Set name = \"Mia\" then print Hello, Mia using concatenation.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Hello, Mia",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "name = \"Mia\"\nprint(\"Hello, \" + name)",
    "publicTests": [
      {
        "id": "m2-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Hello, Mia",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t1-p05",
    "topicId": "m2-t1",
    "slug": "format-output",
    "title": "Formatted Output",
    "difficulty": "medium",
    "order": 5,
    "description": "Use an f-string: name = \"Leo\", age = 20, print Name: Leo, Age: 20",
    "examples": [
      {
        "input": "Run your program",
        "output": "Name: Leo, Age: 20",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "name = \"Leo\"\nage = 20\nprint(f\"Name: {name}, Age: {age}\")",
    "publicTests": [
      {
        "id": "m2-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Name: Leo, Age: 20",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t1-p06",
    "topicId": "m2-t1",
    "slug": "multi-values",
    "title": "Print Three Values",
    "difficulty": "medium",
    "order": 6,
    "description": "Print 1, 2, 3 using one print with default separator.",
    "examples": [
      {
        "input": "Run your program",
        "output": "1 2 3",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(1, 2, 3)",
    "publicTests": [
      {
        "id": "m2-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "1 2 3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t1-p07",
    "topicId": "m2-t1",
    "slug": "sep-end",
    "title": "Custom Separator",
    "difficulty": "hard",
    "order": 7,
    "description": "Print a, b, c on one line separated by dashes using sep='-'.",
    "examples": [
      {
        "input": "Run your program",
        "output": "a-b-c",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(\"a\", \"b\", \"c\", sep=\"-\")",
    "publicTests": [
      {
        "id": "m2-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p01",
    "topicId": "m2-t2",
    "slug": "m2_t2-1",
    "title": "Comments: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to Comments. Print the word Ready on one line.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Ready",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(\"Ready\")",
    "publicTests": [
      {
        "id": "m2-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p02",
    "topicId": "m2-t2",
    "slug": "m2_t2-2",
    "title": "Comments: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to Comments and print them separated by a comma.",
    "examples": [
      {
        "input": "Run your program",
        "output": "A,B",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "a = \"A\"\nb = \"B\"\nprint(a + \",\" + b)",
    "publicTests": [
      {
        "id": "m2-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p03",
    "topicId": "m2-t2",
    "slug": "m2_t2-3",
    "title": "Comments: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on Comments.",
    "examples": [
      {
        "input": "Run your program",
        "output": "1",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "for i in range(1, 5):\n    print(i)",
    "publicTests": [
      {
        "id": "m2-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p04",
    "topicId": "m2-t2",
    "slug": "m2_t2-4",
    "title": "Comments: Condition",
    "difficulty": "medium",
    "order": 4,
    "description": "Set score = 75. If score >= 60 print Pass else print Fail.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Pass",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "score = 75\nif score >= 60:\n    print('Pass')\nelse:\n    print('Fail')",
    "publicTests": [
      {
        "id": "m2-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p05",
    "topicId": "m2-t2",
    "slug": "m2_t2-5",
    "title": "Comments: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "description": "Define greet() that prints Hello and call it once.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Hello",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "def greet():\n    print(\"Hello\")\n\ngreet()",
    "publicTests": [
      {
        "id": "m2-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p06",
    "topicId": "m2-t2",
    "slug": "m2_t2-6",
    "title": "Comments: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about Comments and print the second item (index 1).",
    "examples": [
      {
        "input": "Run your program",
        "output": "middle",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "publicTests": [
      {
        "id": "m2-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t2-p07",
    "topicId": "m2-t2",
    "slug": "m2_t2-7",
    "title": "Comments: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "description": "Create a dict with key topic and print its value using the key topic.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Python",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "publicTests": [
      {
        "id": "m2-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p01",
    "topicId": "m2-t3",
    "slug": "assign-int",
    "title": "Store an Integer",
    "difficulty": "easy",
    "order": 1,
    "description": "Create age = 21 and print age.",
    "examples": [
      {
        "input": "Run your program",
        "output": "21",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "age = 21\nprint(age)",
    "publicTests": [
      {
        "id": "m2-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "21",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p02",
    "topicId": "m2-t3",
    "slug": "assign-str",
    "title": "Store a String",
    "difficulty": "easy",
    "order": 2,
    "description": "Create city = \"Pune\" and print city.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Pune",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "city = \"Pune\"\nprint(city)",
    "publicTests": [
      {
        "id": "m2-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "Pune",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p03",
    "topicId": "m2-t3",
    "slug": "reassign",
    "title": "Reassign Variable",
    "difficulty": "easy",
    "order": 3,
    "description": "Set x = 1, then x = 2, print x.",
    "examples": [
      {
        "input": "Run your program",
        "output": "2",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "x = 1\nx = 2\nprint(x)",
    "publicTests": [
      {
        "id": "m2-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p04",
    "topicId": "m2-t3",
    "slug": "two-vars",
    "title": "Two Variables",
    "difficulty": "medium",
    "order": 4,
    "description": "Create width = 5 and height = 3, print width * height.",
    "examples": [
      {
        "input": "Run your program",
        "output": "15",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "width = 5\nheight = 3\nprint(width * height)",
    "publicTests": [
      {
        "id": "m2-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p05",
    "topicId": "m2-t3",
    "slug": "swap",
    "title": "Swap Values",
    "difficulty": "medium",
    "order": 5,
    "description": "Swap a and b. Start a=1, b=2. Print a then b.",
    "examples": [
      {
        "input": "Run your program",
        "output": "2",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "a, b = 1, 2\na, b = b, a\nprint(a)\nprint(b)",
    "publicTests": [
      {
        "id": "m2-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "2\n1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p06",
    "topicId": "m2-t3",
    "slug": "naming",
    "title": "Descriptive Names",
    "difficulty": "medium",
    "order": 6,
    "description": "Use total_score = 88 and print it.",
    "examples": [
      {
        "input": "Run your program",
        "output": "88",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "total_score = 88\nprint(total_score)",
    "publicTests": [
      {
        "id": "m2-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "88",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t3-p07",
    "topicId": "m2-t3",
    "slug": "multi-assign",
    "title": "Multiple Assignment",
    "difficulty": "hard",
    "order": 7,
    "description": "Use x, y, z = 1, 2, 3 and print their sum.",
    "examples": [
      {
        "input": "Run your program",
        "output": "6",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "x, y, z = 1, 2, 3\nprint(x + y + z)",
    "publicTests": [
      {
        "id": "m2-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "6",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p01",
    "topicId": "m2-t4",
    "slug": "m2_t4-1",
    "title": "Data Types: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to Data Types. Print the word Ready on one line.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Ready",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(\"Ready\")",
    "publicTests": [
      {
        "id": "m2-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p02",
    "topicId": "m2-t4",
    "slug": "m2_t4-2",
    "title": "Data Types: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to Data Types and print them separated by a comma.",
    "examples": [
      {
        "input": "Run your program",
        "output": "A,B",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "a = \"A\"\nb = \"B\"\nprint(a + \",\" + b)",
    "publicTests": [
      {
        "id": "m2-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p03",
    "topicId": "m2-t4",
    "slug": "m2_t4-3",
    "title": "Data Types: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on Data Types.",
    "examples": [
      {
        "input": "Run your program",
        "output": "1",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "for i in range(1, 5):\n    print(i)",
    "publicTests": [
      {
        "id": "m2-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p04",
    "topicId": "m2-t4",
    "slug": "m2_t4-4",
    "title": "Data Types: Condition",
    "difficulty": "medium",
    "order": 4,
    "description": "Set score = 75. If score >= 60 print Pass else print Fail.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Pass",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "score = 75\nif score >= 60:\n    print('Pass')\nelse:\n    print('Fail')",
    "publicTests": [
      {
        "id": "m2-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p05",
    "topicId": "m2-t4",
    "slug": "m2_t4-5",
    "title": "Data Types: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "description": "Define greet() that prints Hello and call it once.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Hello",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "def greet():\n    print(\"Hello\")\n\ngreet()",
    "publicTests": [
      {
        "id": "m2-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p06",
    "topicId": "m2-t4",
    "slug": "m2_t4-6",
    "title": "Data Types: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about Data Types and print the second item (index 1).",
    "examples": [
      {
        "input": "Run your program",
        "output": "middle",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "publicTests": [
      {
        "id": "m2-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t4-p07",
    "topicId": "m2-t4",
    "slug": "m2_t4-7",
    "title": "Data Types: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "description": "Create a dict with key topic and print its value using the key topic.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Python",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "publicTests": [
      {
        "id": "m2-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p01",
    "topicId": "m2-t5",
    "slug": "m2_t5-1",
    "title": "Typecasting: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to Typecasting. Print the word Ready on one line.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Ready",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "print(\"Ready\")",
    "publicTests": [
      {
        "id": "m2-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p02",
    "topicId": "m2-t5",
    "slug": "m2_t5-2",
    "title": "Typecasting: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to Typecasting and print them separated by a comma.",
    "examples": [
      {
        "input": "Run your program",
        "output": "A,B",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "a = \"A\"\nb = \"B\"\nprint(a + \",\" + b)",
    "publicTests": [
      {
        "id": "m2-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p03",
    "topicId": "m2-t5",
    "slug": "m2_t5-3",
    "title": "Typecasting: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on Typecasting.",
    "examples": [
      {
        "input": "Run your program",
        "output": "1",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "for i in range(1, 5):\n    print(i)",
    "publicTests": [
      {
        "id": "m2-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p04",
    "topicId": "m2-t5",
    "slug": "m2_t5-4",
    "title": "Typecasting: Condition",
    "difficulty": "medium",
    "order": 4,
    "description": "Set score = 75. If score >= 60 print Pass else print Fail.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Pass",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "score = 75\nif score >= 60:\n    print('Pass')\nelse:\n    print('Fail')",
    "publicTests": [
      {
        "id": "m2-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p05",
    "topicId": "m2-t5",
    "slug": "m2_t5-5",
    "title": "Typecasting: Function Stub",
    "difficulty": "medium",
    "order": 5,
    "description": "Define greet() that prints Hello and call it once.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Hello",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "def greet():\n    print(\"Hello\")\n\ngreet()",
    "publicTests": [
      {
        "id": "m2-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p06",
    "topicId": "m2-t5",
    "slug": "m2_t5-6",
    "title": "Typecasting: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about Typecasting and print the second item (index 1).",
    "examples": [
      {
        "input": "Run your program",
        "output": "middle",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "items = [\"a\", \"middle\", \"c\"]\nprint(items[1])",
    "publicTests": [
      {
        "id": "m2-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m2-t5-p07",
    "topicId": "m2-t5",
    "slug": "m2_t5-7",
    "title": "Typecasting: Dict Lookup",
    "difficulty": "hard",
    "order": 7,
    "description": "Create a dict with key topic and print its value using the key topic.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Python",
        "explanation": "Your stdout should match exactly."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must match exactly (including spaces and newlines)."
    ],
    "hints": [
      "Read the expected output carefully before coding.",
      "Use print() for output unless the problem says otherwise.",
      "Test locally with Run, then use Run public tests."
    ],
    "starterCode": "d = {\"topic\": \"Python\"}\nprint(d[\"topic\"])",
    "publicTests": [
      {
        "id": "m2-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
