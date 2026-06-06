import type { PracticeProblem } from "@/lib/types";

export const module13Practice: PracticeProblem[] = [
  {
    "id": "m13-t1-p01",
    "topicId": "m13-t1",
    "slug": "lambda-basic",
    "title": "Lambda Functions: Basic Lambda",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set f = lambda x: x*2, print f(5).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Lambda is a small anonymous function."
        }
      ],
      "editorPlaceholder": "# lambda x: x*2",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output: 10"
    ],
    "hints": [
      "f = lambda x: x*2\\nprint(f(5))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p02",
    "topicId": "m13-t1",
    "slug": "lambda-add",
    "title": "Lambda Functions: Lambda Add",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set add = lambda a,b: a+b, print add(3,4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Lambda with two parameters."
        }
      ],
      "editorPlaceholder": "# lambda add",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Output: 7"
    ],
    "hints": [
      "add = lambda a,b: a+b\\nprint(add(3,4))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p03",
    "topicId": "m13-t1",
    "slug": "lambda-square",
    "title": "Lambda Functions: Lambda Square",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set sq = lambda x: x**2, print sq(4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use lambda for short operations."
        }
      ],
      "editorPlaceholder": "# lambda square",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "16"
      }
    ],
    "constraints": [
      "Output: 16"
    ],
    "hints": [
      "sq = lambda x: x**2\\nprint(sq(4))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "16",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p04",
    "topicId": "m13-t1",
    "slug": "lambda-map",
    "title": "Lambda Functions: map with Lambda",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print list(map(lambda x: x*2, [1,2,3])).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# map lambda",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "map()"
        },
        {
          "type": "text",
          "value": " with lambda."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[2, 4, 6]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[2, 4, 6]"
      }
    ],
    "constraints": [
      "Output must be exactly: [2, 4, 6]"
    ],
    "hints": [
      "print(list(map(lambda x: x*2, [1,2,3])))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "[2, 4, 6]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p05",
    "topicId": "m13-t1",
    "slug": "lambda-filter",
    "title": "Lambda Functions: filter with Lambda",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print list(filter(lambda x: x>2, [1,2,3,4])).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# filter",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "filter()"
        },
        {
          "type": "text",
          "value": " with lambda."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[3, 4]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[3, 4]"
      }
    ],
    "constraints": [
      "Output must be exactly: [3, 4]"
    ],
    "hints": [
      "print(list(filter(lambda x: x>2, [1,2,3,4])))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[3, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p06",
    "topicId": "m13-t1",
    "slug": "lambda-sorted",
    "title": "Lambda Functions: sorted with Lambda",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print sorted(['bb','a','ccc'], key=lambda s: len(s)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# sorted",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Sort by length using lambda key."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "['a', 'bb', 'ccc']",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "['a', 'bb', 'ccc']"
      }
    ],
    "constraints": [
      "Output must be exactly: ['a', 'bb', 'ccc']"
    ],
    "hints": [
      "print(sorted(['bb','a','ccc'], key=lambda s: len(s)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "['a', 'bb', 'ccc']",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m13-t1-p07",
    "topicId": "m13-t1",
    "slug": "lambda-immediate",
    "title": "Lambda Functions: Immediate Call",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print (lambda x: x+1)(9).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# IIFE",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Call lambda immediately: "
        },
        {
          "type": "code",
          "value": "(lambda x: x+1)(9)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "10",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must be exactly: 10"
    ],
    "hints": [
      "print((lambda x: x+1)(9))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m13-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
  }
];
