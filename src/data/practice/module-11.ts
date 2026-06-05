import type { PracticeProblem } from "@/lib/types";

export const module11Practice: PracticeProblem[] = [
  {
    "id": "m11-t1-p01",
    "topicId": "m11-t1",
    "slug": "m11_t1-1",
    "title": "List Comprehension Syntax: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to List Comprehension Syntax. Print the word Ready on one line.",
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
        "id": "m11-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p02",
    "topicId": "m11-t1",
    "slug": "m11_t1-2",
    "title": "List Comprehension Syntax: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to List Comprehension Syntax and print them separated by a comma.",
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
        "id": "m11-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p03",
    "topicId": "m11-t1",
    "slug": "m11_t1-3",
    "title": "List Comprehension Syntax: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on List Comprehension Syntax.",
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
        "id": "m11-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p04",
    "topicId": "m11-t1",
    "slug": "m11_t1-4",
    "title": "List Comprehension Syntax: Condition",
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
        "id": "m11-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p05",
    "topicId": "m11-t1",
    "slug": "m11_t1-5",
    "title": "List Comprehension Syntax: Function Stub",
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
        "id": "m11-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p06",
    "topicId": "m11-t1",
    "slug": "m11_t1-6",
    "title": "List Comprehension Syntax: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about List Comprehension Syntax and print the second item (index 1).",
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
        "id": "m11-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p07",
    "topicId": "m11-t1",
    "slug": "m11_t1-7",
    "title": "List Comprehension Syntax: Dict Lookup",
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
        "id": "m11-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p01",
    "topicId": "m11-t2",
    "slug": "m11_t2-1",
    "title": "Uses of Comprehensions: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to Uses of Comprehensions. Print the word Ready on one line.",
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
        "id": "m11-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p02",
    "topicId": "m11-t2",
    "slug": "m11_t2-2",
    "title": "Uses of Comprehensions: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to Uses of Comprehensions and print them separated by a comma.",
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
        "id": "m11-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p03",
    "topicId": "m11-t2",
    "slug": "m11_t2-3",
    "title": "Uses of Comprehensions: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on Uses of Comprehensions.",
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
        "id": "m11-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p04",
    "topicId": "m11-t2",
    "slug": "m11_t2-4",
    "title": "Uses of Comprehensions: Condition",
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
        "id": "m11-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p05",
    "topicId": "m11-t2",
    "slug": "m11_t2-5",
    "title": "Uses of Comprehensions: Function Stub",
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
        "id": "m11-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p06",
    "topicId": "m11-t2",
    "slug": "m11_t2-6",
    "title": "Uses of Comprehensions: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about Uses of Comprehensions and print the second item (index 1).",
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
        "id": "m11-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p07",
    "topicId": "m11-t2",
    "slug": "m11_t2-7",
    "title": "Uses of Comprehensions: Dict Lookup",
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
        "id": "m11-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p01",
    "topicId": "m11-t3",
    "slug": "m11_t3-1",
    "title": "Dictionary Comprehensions: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to Dictionary Comprehensions. Print the word Ready on one line.",
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
        "id": "m11-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p02",
    "topicId": "m11-t3",
    "slug": "m11_t3-2",
    "title": "Dictionary Comprehensions: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to Dictionary Comprehensions and print them separated by a comma.",
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
        "id": "m11-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "A,B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p03",
    "topicId": "m11-t3",
    "slug": "m11_t3-3",
    "title": "Dictionary Comprehensions: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on Dictionary Comprehensions.",
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
        "id": "m11-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p04",
    "topicId": "m11-t3",
    "slug": "m11_t3-4",
    "title": "Dictionary Comprehensions: Condition",
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
        "id": "m11-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p05",
    "topicId": "m11-t3",
    "slug": "m11_t3-5",
    "title": "Dictionary Comprehensions: Function Stub",
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
        "id": "m11-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p06",
    "topicId": "m11-t3",
    "slug": "m11_t3-6",
    "title": "Dictionary Comprehensions: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about Dictionary Comprehensions and print the second item (index 1).",
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
        "id": "m11-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p07",
    "topicId": "m11-t3",
    "slug": "m11_t3-7",
    "title": "Dictionary Comprehensions: Dict Lookup",
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
        "id": "m11-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
