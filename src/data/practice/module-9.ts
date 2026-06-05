import type { PracticeProblem } from "@/lib/types";

export const module9Practice: PracticeProblem[] = [
  {
    "id": "m9-t1-p01",
    "topicId": "m9-t1",
    "slug": "m9_t1-1",
    "title": "if Statement: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to if Statement. Print the word Ready on one line.",
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
        "id": "m9-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t1-p02",
    "topicId": "m9-t1",
    "slug": "m9_t1-2",
    "title": "if Statement: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to if Statement and print them separated by a comma.",
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
        "id": "m9-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t1-p03",
    "topicId": "m9-t1",
    "slug": "m9_t1-3",
    "title": "if Statement: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on if Statement.",
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
        "id": "m9-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t1-p04",
    "topicId": "m9-t1",
    "slug": "m9_t1-4",
    "title": "if Statement: Condition",
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
        "id": "m9-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t1-p05",
    "topicId": "m9-t1",
    "slug": "m9_t1-5",
    "title": "if Statement: Function Stub",
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
        "id": "m9-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t1-p06",
    "topicId": "m9-t1",
    "slug": "m9_t1-6",
    "title": "if Statement: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about if Statement and print the second item (index 1).",
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
        "id": "m9-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t1-p07",
    "topicId": "m9-t1",
    "slug": "m9_t1-7",
    "title": "if Statement: Dict Lookup",
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
        "id": "m9-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p01",
    "topicId": "m9-t2",
    "slug": "m9_t2-1",
    "title": "if-else: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to if-else. Print the word Ready on one line.",
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
        "id": "m9-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p02",
    "topicId": "m9-t2",
    "slug": "m9_t2-2",
    "title": "if-else: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to if-else and print them separated by a comma.",
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
        "id": "m9-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p03",
    "topicId": "m9-t2",
    "slug": "m9_t2-3",
    "title": "if-else: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on if-else.",
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
        "id": "m9-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p04",
    "topicId": "m9-t2",
    "slug": "m9_t2-4",
    "title": "if-else: Condition",
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
        "id": "m9-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p05",
    "topicId": "m9-t2",
    "slug": "m9_t2-5",
    "title": "if-else: Function Stub",
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
        "id": "m9-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p06",
    "topicId": "m9-t2",
    "slug": "m9_t2-6",
    "title": "if-else: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about if-else and print the second item (index 1).",
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
        "id": "m9-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t2-p07",
    "topicId": "m9-t2",
    "slug": "m9_t2-7",
    "title": "if-else: Dict Lookup",
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
        "id": "m9-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p01",
    "topicId": "m9-t3",
    "slug": "m9_t3-1",
    "title": "if-elif-else: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to if-elif-else. Print the word Ready on one line.",
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
        "id": "m9-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p02",
    "topicId": "m9-t3",
    "slug": "m9_t3-2",
    "title": "if-elif-else: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to if-elif-else and print them separated by a comma.",
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
        "id": "m9-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p03",
    "topicId": "m9-t3",
    "slug": "m9_t3-3",
    "title": "if-elif-else: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on if-elif-else.",
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
        "id": "m9-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p04",
    "topicId": "m9-t3",
    "slug": "m9_t3-4",
    "title": "if-elif-else: Condition",
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
        "id": "m9-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p05",
    "topicId": "m9-t3",
    "slug": "m9_t3-5",
    "title": "if-elif-else: Function Stub",
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
        "id": "m9-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p06",
    "topicId": "m9-t3",
    "slug": "m9_t3-6",
    "title": "if-elif-else: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about if-elif-else and print the second item (index 1).",
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
        "id": "m9-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m9-t3-p07",
    "topicId": "m9-t3",
    "slug": "m9_t3-7",
    "title": "if-elif-else: Dict Lookup",
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
        "id": "m9-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
