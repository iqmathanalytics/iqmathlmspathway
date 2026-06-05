import type { PracticeProblem } from "@/lib/types";

export const module13Practice: PracticeProblem[] = [
  {
    "id": "m13-t1-p01",
    "topicId": "m13-t1",
    "slug": "m13_t1-1",
    "title": "Lambda Functions: Warm-up",
    "difficulty": "easy",
    "order": 1,
    "description": "Write a short program related to Lambda Functions. Print the word Ready on one line.",
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
    "title": "Lambda Functions: Output Two Values",
    "difficulty": "easy",
    "order": 2,
    "description": "Create two variables relevant to Lambda Functions and print them separated by a comma.",
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
    "title": "Lambda Functions: Simple Loop",
    "difficulty": "medium",
    "order": 3,
    "description": "Use a for loop to print numbers 1 through 4 for practice on Lambda Functions.",
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
    "title": "Lambda Functions: Condition",
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
    "title": "Lambda Functions: Function Stub",
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
    "title": "Lambda Functions: List Practice",
    "difficulty": "hard",
    "order": 6,
    "description": "Create a list of three items about Lambda Functions and print the second item (index 1).",
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
    "title": "Lambda Functions: Dict Lookup",
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
        "id": "m13-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
