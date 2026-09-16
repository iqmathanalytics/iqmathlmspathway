import type { PracticeProblem } from "@/lib/types";

export const module6Practice: PracticeProblem[] = [
  {
    "id": "m6-t1-p01",
    "topicId": "m6-t1",
    "slug": "create-tuple",
    "title": "Tuple Syntax: Create a Tuple",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create t = (1, 2, 3) and print t.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Tuples use "
        },
        {
          "type": "code",
          "value": "( )"
        },
        {
          "type": "text",
          "value": " parentheses."
        }
      ],
      "editorPlaceholder": "# t = (1,2,3)",
      "successDetail": "Correct! Parentheses create tuples."
    },
    "examples": [
      {
        "output": "(1, 2, 3)"
      }
    ],
    "constraints": [
      "Output: (1, 2, 3)"
    ],
    "hints": [
      "t = (1, 2, 3)\\nprint(t)"
    ],
    "starterCode": "",
    "approach": "Create t = (1, 2, 3) and print t.\n\nReference solution:\nt = (1, 2, 3)\nprint(t)",
    "publicTests": [
      {
        "id": "m6-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(1, 2, 3)",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "(1, 2, 3)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1, 2, 3)\nprint(t)"
  },
  {
    "id": "m6-t1-p02",
    "topicId": "m6-t1",
    "slug": "index",
    "title": "Tuple Syntax: Index a Tuple",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set t=(\"a\",\"b\",\"c\"), print t[1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Tuple indexing works like lists: "
        },
        {
          "type": "code",
          "value": "t[1]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# t[1]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "b"
      }
    ],
    "constraints": [
      "Output: b"
    ],
    "hints": [
      "t = (\"a\",\"b\",\"c\")\\nprint(t[1])"
    ],
    "starterCode": "",
    "approach": "Set t=(\"a\",\"b\",\"c\"), print t[1].\n\nReference solution:\nt = (\"a\",\"b\",\"c\")\nprint(t[1])",
    "publicTests": [
      {
        "id": "m6-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "b",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "b",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (\"a\",\"b\",\"c\")\nprint(t[1])"
  },
  {
    "id": "m6-t1-p03",
    "topicId": "m6-t1",
    "slug": "immutable",
    "title": "Tuple Syntax: Tuple Immutability",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set t=(1,2), try concept: print t[0] (read-only access).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Tuples are "
        },
        {
          "type": "code",
          "value": "immutable"
        },
        {
          "type": "text",
          "value": " — you can read but not change items."
        }
      ],
      "editorPlaceholder": "# read t[0]",
      "successDetail": "Correct! Reading tuple items is allowed."
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Output: 1"
    ],
    "hints": [
      "t = (1,2)\\nprint(t[0])"
    ],
    "starterCode": "",
    "approach": "Set t=(1,2), try concept: print t[0] (read-only access).\n\nReference solution:\nt = (1,2)\nprint(t[0])",
    "publicTests": [
      {
        "id": "m6-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1,2)\nprint(t[0])"
  },
  {
    "id": "m6-t1-p04",
    "topicId": "m6-t1",
    "slug": "len-t",
    "title": "Tuple Syntax: Tuple Length",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set t=(1,2,3,4), print len(t).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use len() on a tuple."
        }
      ],
      "editorPlaceholder": "# len(t)",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Output: 4"
    ],
    "hints": [
      "t = (1,2,3,4)\\nprint(len(t))"
    ],
    "starterCode": "",
    "approach": "Set t=(1,2,3,4), print len(t).\n\nReference solution:\nt = (1,2,3,4)\nprint(len(t))",
    "publicTests": [
      {
        "id": "m6-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "4",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1,2,3,4)\nprint(len(t))"
  },
  {
    "id": "m6-t1-p05",
    "topicId": "m6-t1",
    "slug": "slice-t",
    "title": "Tuple Syntax: Slice a Tuple",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set t=(0,1,2,3), print t[1:3].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Slice tuples like lists: "
        },
        {
          "type": "code",
          "value": "t[1:3]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# slice",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "(1, 2)"
      }
    ],
    "constraints": [
      "Output: (1, 2)"
    ],
    "hints": [
      "t = (0,1,2,3)\\nprint(t[1:3])"
    ],
    "starterCode": "",
    "approach": "Set t=(0,1,2,3), print t[1:3].\n\nReference solution:\nt = (0,1,2,3)\nprint(t[1:3])",
    "publicTests": [
      {
        "id": "m6-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (0,1,2,3)\nprint(t[1:3])"
  },
  {
    "id": "m6-t1-p06",
    "topicId": "m6-t1",
    "slug": "count-t",
    "title": "Tuple Syntax: count()",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print (1,2,2,3).count(2).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# count",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! count() works on tuples.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".count()"
        },
        {
          "type": "text",
          "value": " on a tuple."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "2",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output must be exactly: 2"
    ],
    "hints": [
      "print((1,2,2,3).count(2))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((1,2,2,3).count(2))",
    "approach": "Print (1,2,2,3).count(2).\n\nReference solution:\nprint((1,2,2,3).count(2))"
  },
  {
    "id": "m6-t1-p07",
    "topicId": "m6-t1",
    "slug": "index-t",
    "title": "Tuple Syntax: index()",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print (\"x\",\"y\",\"z\").index(\"y\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# index",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".index(\"y\")"
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
          "expected": "1",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Output must be exactly: 1"
    ],
    "hints": [
      "print((\"x\",\"y\",\"z\").index(\"y\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m6-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((\"x\",\"y\",\"z\").index(\"y\"))",
    "approach": "Print (\"x\",\"y\",\"z\").index(\"y\").\n\nReference solution:\nprint((\"x\",\"y\",\"z\").index(\"y\"))"
  },
  {
    "id": "m6-t2-p01",
    "topicId": "m6-t2",
    "slug": "ordered-t",
    "title": "Tuple Properties: Ordered",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print (3,1,2) — order preserved.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# tuple",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Tuples preserve order."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "(3, 1, 2)",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "(3, 1, 2)"
      }
    ],
    "constraints": [
      "Output must be exactly: (3, 1, 2)"
    ],
    "hints": [
      "print((3,1,2))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(3, 1, 2)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "(3, 1, 2)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "(3, 1, 2)",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((3,1,2))",
    "approach": "Print (3,1,2) — order preserved.\n\nReference solution:\nprint((3,1,2))"
  },
  {
    "id": "m6-t2-p02",
    "topicId": "m6-t2",
    "slug": "immutable-t",
    "title": "Tuple Properties: Immutable",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print len((1,2,3)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# len",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Tuples are immutable.",
      "introSegments": [
        {
          "type": "text",
          "value": "Tuples cannot be changed after creation."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "3",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Output must be exactly: 3"
    ],
    "hints": [
      "print(len((1,2,3)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(len((1,2,3)))",
    "approach": "Print len((1,2,3)).\n\nReference solution:\nprint(len((1,2,3)))"
  },
  {
    "id": "m6-t2-p03",
    "topicId": "m6-t2",
    "slug": "dup-t",
    "title": "Tuple Properties: Duplicates",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print (1,1,2).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# dup",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Tuples allow duplicates."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "(1, 1, 2)",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "(1, 1, 2)"
      }
    ],
    "constraints": [
      "Output must be exactly: (1, 1, 2)"
    ],
    "hints": [
      "print((1,1,2))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "(1, 1, 2)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "(1, 1, 2)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "(1, 1, 2)",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((1,1,2))",
    "approach": "Print (1,1,2).\n\nReference solution:\nprint((1,1,2))"
  },
  {
    "id": "m6-t2-p04",
    "topicId": "m6-t2",
    "slug": "mixed-t",
    "title": "Tuple Properties: Mixed Types",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print (1, \"a\", True).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# mixed",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Tuples can hold mixed types."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "(1, 'a', True)",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "(1, 'a', True)"
      }
    ],
    "constraints": [
      "Output must be exactly: (1, 'a', True)"
    ],
    "hints": [
      "print((1, \"a\", True))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "(1, 'a', True)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "(1, 'a', True)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "(1, 'a', True)",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((1, \"a\", True))",
    "approach": "Print (1, \"a\", True).\n\nReference solution:\nprint((1, \"a\", True))"
  },
  {
    "id": "m6-t2-p05",
    "topicId": "m6-t2",
    "slug": "single-t",
    "title": "Tuple Properties: Single Item",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print (42,) — note the comma.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# (42,)",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Single-item tuple needs "
        },
        {
          "type": "code",
          "value": "(42,)"
        },
        {
          "type": "text",
          "value": " comma."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "(42,)",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "(42,)"
      }
    ],
    "constraints": [
      "Output must be exactly: (42,)"
    ],
    "hints": [
      "print((42,))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "(42,)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "(42,)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "(42,)",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((42,))",
    "approach": "Print (42,) — note the comma.\n\nReference solution:\nprint((42,))"
  },
  {
    "id": "m6-t2-p06",
    "topicId": "m6-t2",
    "slug": "no-brackets",
    "title": "Tuple Properties: Without Parentheses",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set t = 1, 2, 3 (tuple packing), print t.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Comma creates a tuple: "
        },
        {
          "type": "code",
          "value": "t = 1, 2, 3"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# packing",
      "successDetail": "Correct! Tuple packing with commas."
    },
    "examples": [
      {
        "output": "(1, 2, 3)"
      }
    ],
    "constraints": [
      "Output: (1, 2, 3)"
    ],
    "hints": [
      "t = 1, 2, 3\\nprint(t)"
    ],
    "starterCode": "",
    "approach": "Set t = 1, 2, 3 (tuple packing), print t.\n\nReference solution:\nt = 1, 2, 3\nprint(t)",
    "publicTests": [
      {
        "id": "m6-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "(1, 2, 3)",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "(1, 2, 3)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = 1, 2, 3\nprint(t)"
  },
  {
    "id": "m6-t2-p07",
    "topicId": "m6-t2",
    "slug": "unpack-t",
    "title": "Tuple Properties: Unpacking",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set t = (10, 20), unpack to a, b = t, print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "t",
        "a",
        "b"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Unpack tuple into variables."
        }
      ],
      "editorPlaceholder": "# unpack",
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
      "t = (10, 20)\\na, b = t\\nprint(a)"
    ],
    "starterCode": "",
    "approach": "Set t = (10, 20), unpack to a, b = t, print a.\n\nReference solution:\nt = (10, 20)\na, b = t\nprint(a)",
    "publicTests": [
      {
        "id": "m6-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"\nassert \"a\" in globals(), \"Expected a variable named a\"\nassert \"b\" in globals(), \"Expected a variable named b\"",
        "visibility": "public"
      },
      {
        "id": "m6-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (10, 20)\na, b = t\nprint(a)"
  },
  {
    "id": "m6-t3-p01",
    "topicId": "m6-t3",
    "slug": "first-item",
    "title": "Indexing Tuples: First Item",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\") and print t[0].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Index "
        },
        {
          "type": "code",
          "value": "0"
        },
        {
          "type": "text",
          "value": " is the first item in a tuple."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "P"
      }
    ],
    "constraints": [
      "Output must match: P"
    ],
    "hints": [
      "t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(t[0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "P",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "P",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(t[0])",
    "approach": "Set t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\") and print t[0].\n\nReference solution:\nt = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(t[0])"
  },
  {
    "id": "m6-t3-p02",
    "topicId": "m6-t3",
    "slug": "last-item",
    "title": "Indexing Tuples: Last Item",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\") and print t[-1].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\") and print t[-1]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "n"
      }
    ],
    "constraints": [
      "Output must match: n"
    ],
    "hints": [
      "Negative indexes count from the end: t[-1] is the last item."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "n",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "n",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(t[-1])",
    "approach": "Set t = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\") and print t[-1].\n\nReference solution:\nt = (\"P\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(t[-1])"
  },
  {
    "id": "m6-t3-p03",
    "topicId": "m6-t3",
    "slug": "middle-item",
    "title": "Indexing Tuples: Middle Item",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set colors = (\"red\", \"green\", \"blue\") and print colors[1].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set colors = (\"red\", \"green\", \"blue\") and print colors[1]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "colors"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "green"
      }
    ],
    "constraints": [
      "Output must match: green"
    ],
    "hints": [
      "colors = (\"red\", \"green\", \"blue\")\nprint(colors[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "green",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"colors\" in globals(), \"Expected a variable named colors\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "green",
        "visibility": "public"
      }
    ],
    "solutionCode": "colors = (\"red\", \"green\", \"blue\")\nprint(colors[1])",
    "approach": "Set colors = (\"red\", \"green\", \"blue\") and print colors[1].\n\nReference solution:\ncolors = (\"red\", \"green\", \"blue\")\nprint(colors[1])"
  },
  {
    "id": "m6-t3-p04",
    "topicId": "m6-t3",
    "slug": "nested-index",
    "title": "Indexing Tuples: Nested Index",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set grid = ((1, 2), (3, 4)) and print grid[1][0].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set grid = ((1, 2), (3, 4)) and print grid[1][0]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "grid"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Output must match: 3"
    ],
    "hints": [
      "grid[1] is the second inner tuple; grid[1][0] is its first value."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"grid\" in globals(), \"Expected a variable named grid\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "grid = ((1, 2), (3, 4))\nprint(grid[1][0])",
    "approach": "Set grid = ((1, 2), (3, 4)) and print grid[1][0].\n\nReference solution:\ngrid = ((1, 2), (3, 4))\nprint(grid[1][0])"
  },
  {
    "id": "m6-t3-p05",
    "topicId": "m6-t3",
    "slug": "two-indexes",
    "title": "Indexing Tuples: Two Indexes",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set nums = (5, 10, 15). Print nums[0] and nums[2] on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set nums = (5, 10, 15). Print nums[0] and nums[2] on separate lines."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "nums"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "5\n15"
      }
    ],
    "constraints": [
      "Output must match: 5 / 15"
    ],
    "hints": [
      "Use two print() calls, one for each index."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "5\n15",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"nums\" in globals(), \"Expected a variable named nums\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "5\n15",
        "visibility": "public"
      }
    ],
    "solutionCode": "nums = (5, 10, 15)\nprint(nums[0])\nprint(nums[2])",
    "approach": "Set nums = (5, 10, 15). Print nums[0] and nums[2] on separate lines.\n\nReference solution:\nnums = (5, 10, 15)\nprint(nums[0])\nprint(nums[2])"
  },
  {
    "id": "m6-t3-p06",
    "topicId": "m6-t3",
    "slug": "last-via-len",
    "title": "Indexing Tuples: Last via len",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set items = (4, 8, 12) and print items[len(items) - 1].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set items = (4, 8, 12) and print items[len(items) - 1]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "items"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "12"
      }
    ],
    "constraints": [
      "Output must match: 12"
    ],
    "hints": [
      "len(items) - 1 is the last valid index."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "12",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"items\" in globals(), \"Expected a variable named items\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "12",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = (4, 8, 12)\nprint(items[len(items) - 1])",
    "approach": "Set items = (4, 8, 12) and print items[len(items) - 1].\n\nReference solution:\nitems = (4, 8, 12)\nprint(items[len(items) - 1])"
  },
  {
    "id": "m6-t3-p07",
    "topicId": "m6-t3",
    "slug": "second-last",
    "title": "Indexing Tuples: Second-Last Item",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set scores = (10, 20, 30) and print scores[-2].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set scores = (10, 20, 30) and print scores[-2]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "scores"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "20"
      }
    ],
    "constraints": [
      "Output must match: 20"
    ],
    "hints": [
      "t[-2] is the second item from the end."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "20",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"scores\" in globals(), \"Expected a variable named scores\"",
        "visibility": "public"
      },
      {
        "id": "m6-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "20",
        "visibility": "public"
      }
    ],
    "solutionCode": "scores = (10, 20, 30)\nprint(scores[-2])",
    "approach": "Set scores = (10, 20, 30) and print scores[-2].\n\nReference solution:\nscores = (10, 20, 30)\nprint(scores[-2])"
  },
  {
    "id": "m6-t4-p01",
    "topicId": "m6-t4",
    "slug": "basic-slice",
    "title": "Slicing Tuples: Basic Slice",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set t = (0, 1, 2, 3, 4) and print t[1:3].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (0, 1, 2, 3, 4) and print t[1:3]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "(1, 2)"
      }
    ],
    "constraints": [
      "Output must match: (1, 2)"
    ],
    "hints": [
      "A slice t[start:stop] includes start and excludes stop."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (0, 1, 2, 3, 4)\nprint(t[1:3])",
    "approach": "Set t = (0, 1, 2, 3, 4) and print t[1:3].\n\nReference solution:\nt = (0, 1, 2, 3, 4)\nprint(t[1:3])"
  },
  {
    "id": "m6-t4-p02",
    "topicId": "m6-t4",
    "slug": "from-start",
    "title": "Slicing Tuples: From Start",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set t = (0, 1, 2, 3) and print t[:2].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (0, 1, 2, 3) and print t[:2]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "(0, 1)"
      }
    ],
    "constraints": [
      "Output must match: (0, 1)"
    ],
    "hints": [
      "Omitting the start index slices from the beginning."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "(0, 1)",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "(0, 1)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (0, 1, 2, 3)\nprint(t[:2])",
    "approach": "Set t = (0, 1, 2, 3) and print t[:2].\n\nReference solution:\nt = (0, 1, 2, 3)\nprint(t[:2])"
  },
  {
    "id": "m6-t4-p03",
    "topicId": "m6-t4",
    "slug": "to-end",
    "title": "Slicing Tuples: To End",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set t = (0, 1, 2, 3) and print t[2:].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (0, 1, 2, 3) and print t[2:]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "(2, 3)"
      }
    ],
    "constraints": [
      "Output must match: (2, 3)"
    ],
    "hints": [
      "Omitting the stop index slices through the end."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "(2, 3)",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "(2, 3)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (0, 1, 2, 3)\nprint(t[2:])",
    "approach": "Set t = (0, 1, 2, 3) and print t[2:].\n\nReference solution:\nt = (0, 1, 2, 3)\nprint(t[2:])"
  },
  {
    "id": "m6-t4-p04",
    "topicId": "m6-t4",
    "slug": "step-slice",
    "title": "Slicing Tuples: Step Slice",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set t = (0, 1, 2, 3, 4) and print t[::2].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (0, 1, 2, 3, 4) and print t[::2]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "(0, 2, 4)"
      }
    ],
    "constraints": [
      "Output must match: (0, 2, 4)"
    ],
    "hints": [
      "The third number is the step: t[::2] takes every second item."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "(0, 2, 4)",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "(0, 2, 4)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (0, 1, 2, 3, 4)\nprint(t[::2])",
    "approach": "Set t = (0, 1, 2, 3, 4) and print t[::2].\n\nReference solution:\nt = (0, 1, 2, 3, 4)\nprint(t[::2])"
  },
  {
    "id": "m6-t4-p05",
    "topicId": "m6-t4",
    "slug": "reverse-tuple",
    "title": "Slicing Tuples: Reverse",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set t = (1, 2, 3) and print t[::-1].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (1, 2, 3) and print t[::-1]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "(3, 2, 1)"
      }
    ],
    "constraints": [
      "Output must match: (3, 2, 1)"
    ],
    "hints": [
      "A step of -1 reverses the tuple."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "(3, 2, 1)",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "(3, 2, 1)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1, 2, 3)\nprint(t[::-1])",
    "approach": "Set t = (1, 2, 3) and print t[::-1].\n\nReference solution:\nt = (1, 2, 3)\nprint(t[::-1])"
  },
  {
    "id": "m6-t4-p06",
    "topicId": "m6-t4",
    "slug": "copy-slice",
    "title": "Slicing Tuples: Copy a Slice",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set t = (10, 20, 30, 40) and print t[1:4].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (10, 20, 30, 40) and print t[1:4]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "(20, 30, 40)"
      }
    ],
    "constraints": [
      "Output must match: (20, 30, 40)"
    ],
    "hints": [
      "t[1:4] keeps indexes 1, 2, and 3."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "(20, 30, 40)",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "(20, 30, 40)",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (10, 20, 30, 40)\nprint(t[1:4])",
    "approach": "Set t = (10, 20, 30, 40) and print t[1:4].\n\nReference solution:\nt = (10, 20, 30, 40)\nprint(t[1:4])"
  },
  {
    "id": "m6-t4-p07",
    "topicId": "m6-t4",
    "slug": "empty-slice",
    "title": "Slicing Tuples: Empty Slice",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set t = (1, 2, 3) and print t[2:2].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (1, 2, 3) and print t[2:2]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "()"
      }
    ],
    "constraints": [
      "Output must match: ()"
    ],
    "hints": [
      "When start equals stop, the slice is an empty tuple ()."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "()",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t4-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "()",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1, 2, 3)\nprint(t[2:2])",
    "approach": "Set t = (1, 2, 3) and print t[2:2].\n\nReference solution:\nt = (1, 2, 3)\nprint(t[2:2])"
  },
  {
    "id": "m6-t5-p01",
    "topicId": "m6-t5",
    "slug": "count-named",
    "title": "Tuple Methods: count()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set t = (1, 2, 2, 3) and print t.count(2).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (1, 2, 2, 3) and print t.count(2)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ]
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output must match: 2"
    ],
    "hints": [
      "count(value) returns how many times value appears."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1, 2, 2, 3)\nprint(t.count(2))",
    "approach": "Set t = (1, 2, 2, 3) and print t.count(2).\n\nReference solution:\nt = (1, 2, 2, 3)\nprint(t.count(2))"
  },
  {
    "id": "m6-t5-p02",
    "topicId": "m6-t5",
    "slug": "index-named",
    "title": "Tuple Methods: index()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set t = (\"x\", \"y\", \"z\") and print t.index(\"y\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (\"x\", \"y\", \"z\") and print t.index(\"y\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ]
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Output must match: 1"
    ],
    "hints": [
      "index(value) returns the first position of value."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (\"x\", \"y\", \"z\")\nprint(t.index(\"y\"))",
    "approach": "Set t = (\"x\", \"y\", \"z\") and print t.index(\"y\").\n\nReference solution:\nt = (\"x\", \"y\", \"z\")\nprint(t.index(\"y\"))"
  },
  {
    "id": "m6-t5-p03",
    "topicId": "m6-t5",
    "slug": "count-missing",
    "title": "Tuple Methods: count Missing Value",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set t = (1, 2, 3) and print t.count(9).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (1, 2, 3) and print t.count(9)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ]
    },
    "examples": [
      {
        "output": "0"
      }
    ],
    "constraints": [
      "Output must match: 0"
    ],
    "hints": [
      "If the value is not present, count() returns 0."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1, 2, 3)\nprint(t.count(9))",
    "approach": "Set t = (1, 2, 3) and print t.count(9).\n\nReference solution:\nt = (1, 2, 3)\nprint(t.count(9))"
  },
  {
    "id": "m6-t5-p04",
    "topicId": "m6-t5",
    "slug": "index-first",
    "title": "Tuple Methods: index First Match",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set t = (\"a\", \"b\", \"a\") and print t.index(\"a\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (\"a\", \"b\", \"a\") and print t.index(\"a\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ]
    },
    "examples": [
      {
        "output": "0"
      }
    ],
    "constraints": [
      "Output must match: 0"
    ],
    "hints": [
      "index() stops at the first match, so the answer is 0."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (\"a\", \"b\", \"a\")\nprint(t.index(\"a\"))",
    "approach": "Set t = (\"a\", \"b\", \"a\") and print t.index(\"a\").\n\nReference solution:\nt = (\"a\", \"b\", \"a\")\nprint(t.index(\"a\"))"
  },
  {
    "id": "m6-t5-p05",
    "topicId": "m6-t5",
    "slug": "count-letters",
    "title": "Tuple Methods: count Letters",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set letters = (\"n\", \"a\", \"n\", \"a\") and print letters.count(\"a\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set letters = (\"n\", \"a\", \"n\", \"a\") and print letters.count(\"a\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "letters"
      ]
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output must match: 2"
    ],
    "hints": [
      "letters.count(\"a\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"letters\" in globals(), \"Expected a variable named letters\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "letters = (\"n\", \"a\", \"n\", \"a\")\nprint(letters.count(\"a\"))",
    "approach": "Set letters = (\"n\", \"a\", \"n\", \"a\") and print letters.count(\"a\").\n\nReference solution:\nletters = (\"n\", \"a\", \"n\", \"a\")\nprint(letters.count(\"a\"))"
  },
  {
    "id": "m6-t5-p06",
    "topicId": "m6-t5",
    "slug": "count-and-index",
    "title": "Tuple Methods: count and index",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set t = (1, 2, 2, 3). Print t.count(2) then t.index(3) on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set t = (1, 2, 2, 3). Print t.count(2) then t.index(3) on separate lines."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "t"
      ]
    },
    "examples": [
      {
        "output": "2\n3"
      }
    ],
    "constraints": [
      "Output must match: 2 / 3"
    ],
    "hints": [
      "Use two print() calls."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "2\n3",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"t\" in globals(), \"Expected a variable named t\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "2\n3",
        "visibility": "public"
      }
    ],
    "solutionCode": "t = (1, 2, 2, 3)\nprint(t.count(2))\nprint(t.index(3))",
    "approach": "Set t = (1, 2, 2, 3). Print t.count(2) then t.index(3) on separate lines.\n\nReference solution:\nt = (1, 2, 2, 3)\nprint(t.count(2))\nprint(t.index(3))"
  },
  {
    "id": "m6-t5-p07",
    "topicId": "m6-t5",
    "slug": "index-letter",
    "title": "Tuple Methods: index a Letter",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set letters = (\"p\", \"y\", \"t\", \"h\", \"o\", \"n\") and print letters.index(\"o\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set letters = (\"p\", \"y\", \"t\", \"h\", \"o\", \"n\") and print letters.index(\"o\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "letters"
      ]
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Output must match: 4"
    ],
    "hints": [
      "Counting from 0, \"o\" is at index 4."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "4",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"letters\" in globals(), \"Expected a variable named letters\"",
        "visibility": "public"
      },
      {
        "id": "m6-t5-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ],
    "solutionCode": "letters = (\"p\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(letters.index(\"o\"))",
    "approach": "Set letters = (\"p\", \"y\", \"t\", \"h\", \"o\", \"n\") and print letters.index(\"o\").\n\nReference solution:\nletters = (\"p\", \"y\", \"t\", \"h\", \"o\", \"n\")\nprint(letters.index(\"o\"))"
  }
];
