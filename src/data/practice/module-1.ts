import type { PracticeProblem } from "@/lib/types";

export const module1Practice: PracticeProblem[] = [
  {
    "id": "m1-t1-p01",
    "topicId": "m1-t1",
    "slug": "hello-world",
    "title": "Hello, World!",
    "difficulty": "easy",
    "order": 1,
    "description": "Print exactly one line: Hello, World!",
    "examples": [
      {
        "input": "Run your program",
        "output": "Hello, World!",
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
    "starterCode": "print(\"Hello, World!\")",
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
    "description": "Write a program that prints exactly two lines:\n\n• First line: Alex\n• Second line: Data Science\n\nUse two print() calls. Do not add extra blank lines or spaces.",
    "examples": [
      {
        "input": "Your program runs (no input needed)",
        "output": "Alex\nData Science",
        "explanation": "The autograder checks for these two lines in order. Your own name is not used — use the exact text shown."
      }
    ],
    "constraints": [
      "Use exactly two print() statements.",
      "Line 1 must be exactly: Alex",
      "Line 2 must be exactly: Data Science",
      "No extra lines, spaces, or blank lines."
    ],
    "hints": [
      "You need two separate print() calls.",
      "Each print() produces one line of output.",
      "Use Run public tests to check your work."
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
    "description": "Print the numbers 1, 2, and 3 — each on its own line.",
    "examples": [
      {
        "input": "Your program runs (no input needed)",
        "output": "1\n2\n3",
        "explanation": "Three lines: 1, then 2, then 3."
      }
    ],
    "constraints": [
      "Use Python 3 syntax.",
      "Output must be exactly three lines: 1, 2, and 3."
    ],
    "hints": [
      "You can use three print() calls, or a loop with range(1, 4).",
      "Each number should be on its own line.",
      "Click Run public tests to verify before Submit."
    ],
    "starterCode": "for i in range(1, 4):\n    print(i)",
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
    "description": "Add a comment describing the next line, then print Python is fun.",
    "examples": [
      {
        "input": "Run your program",
        "output": "Python is fun",
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
    "starterCode": "# Describe the program\nprint(\"Python is fun\")",
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
    "description": "Print three lines: ====, Welcome to PyPath, ====",
    "examples": [
      {
        "input": "Run your program",
        "output": "====",
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
    "starterCode": "print(\"====\")\nprint(\"Welcome to PyPath\")\nprint(\"====\")",
    "publicTests": [
      {
        "id": "m1-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "====\nWelcome to PyPath\n====",
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
    "description": "Set variables name and topic, then print: I am NAME learning TOPIC.",
    "examples": [
      {
        "input": "Run your program",
        "output": "I am Sam learning Python",
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
    "starterCode": "name = \"Sam\"\ntopic = \"Python\"\nprint(\"I am\", name, \"learning\", topic)",
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
    "description": "Print the result of 17 + 25.",
    "examples": [
      {
        "input": "Run your program",
        "output": "42",
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
    "starterCode": "print(17 + 25)",
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
    "description": "Write a short program related to Choosing Python. Print the word Ready on one line.",
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
    "description": "Create two variables relevant to Choosing Python and print them separated by a comma.",
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
    "description": "Use a for loop to print numbers 1 through 4 for practice on Choosing Python.",
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
    "description": "Create a list of three items about Choosing Python and print the second item (index 1).",
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
    "description": "Write a short program related to Setting up Python Environment. Print the word Ready on one line.",
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
    "description": "Create two variables relevant to Setting up Python Environment and print them separated by a comma.",
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
    "description": "Use a for loop to print numbers 1 through 4 for practice on Setting up Python Environment.",
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
    "description": "Create a list of three items about Setting up Python Environment and print the second item (index 1).",
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
    "description": "Write a short program related to Python IDEs. Print the word Ready on one line.",
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
    "description": "Create two variables relevant to Python IDEs and print them separated by a comma.",
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
    "description": "Use a for loop to print numbers 1 through 4 for practice on Python IDEs.",
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
    "description": "Create a list of three items about Python IDEs and print the second item (index 1).",
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
        "id": "m1-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
