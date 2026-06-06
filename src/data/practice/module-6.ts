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
    "publicTests": [
      {
        "id": "m6-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "(1, 2, 3)",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m6-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "b",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m6-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m6-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m6-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "(3, 1, 2)",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "(1, 1, 2)",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "(1, 'a', True)",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "(42,)",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m6-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "(1, 2, 3)",
        "visibility": "public"
      }
    ]
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
        "a"
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
    "publicTests": [
      {
        "id": "m6-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p01",
    "topicId": "m6-t3",
    "slug": "create",
    "title": "Indexing Tuples: Create a Tuple",
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
          "value": "Create (10, 20) — tuples use ()."
        }
      ],
      "editorPlaceholder": "# create tuple",
      "successDetail": "Correct! Parentheses create tuples."
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: (1, 2, 3)"
    ],
    "hints": [
      "t = (1, 2, 3)\\nprint(t)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p02",
    "topicId": "m6-t3",
    "slug": "index",
    "title": "Indexing Tuples: Index a Tuple",
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
    "publicTests": [
      {
        "id": "m6-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "b",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p03",
    "topicId": "m6-t3",
    "slug": "immutable",
    "title": "Indexing Tuples: Tuple Immutability",
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
    "publicTests": [
      {
        "id": "m6-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p04",
    "topicId": "m6-t3",
    "slug": "len-t",
    "title": "Indexing Tuples: Tuple Length",
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
    "publicTests": [
      {
        "id": "m6-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p05",
    "topicId": "m6-t3",
    "slug": "slice-t",
    "title": "Indexing Tuples: Slice a Tuple",
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
    "publicTests": [
      {
        "id": "m6-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p06",
    "topicId": "m6-t3",
    "slug": "count-t",
    "title": "Indexing Tuples: count()",
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
        "id": "m6-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t3-p07",
    "topicId": "m6-t3",
    "slug": "index-t",
    "title": "Indexing Tuples: index()",
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
        "id": "m6-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p01",
    "topicId": "m6-t4",
    "slug": "create",
    "title": "Slicing Tuples: Create a Tuple",
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
          "value": "Create (10, 20) — tuples use ()."
        }
      ],
      "editorPlaceholder": "# create tuple",
      "successDetail": "Correct! Parentheses create tuples."
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: (1, 2, 3)"
    ],
    "hints": [
      "t = (1, 2, 3)\\nprint(t)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p02",
    "topicId": "m6-t4",
    "slug": "index",
    "title": "Slicing Tuples: Index a Tuple",
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
    "publicTests": [
      {
        "id": "m6-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "b",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p03",
    "topicId": "m6-t4",
    "slug": "immutable",
    "title": "Slicing Tuples: Tuple Immutability",
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
    "publicTests": [
      {
        "id": "m6-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p04",
    "topicId": "m6-t4",
    "slug": "len-t",
    "title": "Slicing Tuples: Tuple Length",
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
    "publicTests": [
      {
        "id": "m6-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p05",
    "topicId": "m6-t4",
    "slug": "slice-t",
    "title": "Slicing Tuples: Slice a Tuple",
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
    "publicTests": [
      {
        "id": "m6-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p06",
    "topicId": "m6-t4",
    "slug": "count-t",
    "title": "Slicing Tuples: count()",
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
        "id": "m6-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t4-p07",
    "topicId": "m6-t4",
    "slug": "index-t",
    "title": "Slicing Tuples: index()",
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
        "id": "m6-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p01",
    "topicId": "m6-t5",
    "slug": "create",
    "title": "Tuple Methods: Create a Tuple",
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
          "value": "Create (10, 20) — tuples use ()."
        }
      ],
      "editorPlaceholder": "# create tuple",
      "successDetail": "Correct! Parentheses create tuples."
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: (1, 2, 3)"
    ],
    "hints": [
      "t = (1, 2, 3)\\nprint(t)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m6-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p02",
    "topicId": "m6-t5",
    "slug": "index",
    "title": "Tuple Methods: Index a Tuple",
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
    "publicTests": [
      {
        "id": "m6-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "b",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p03",
    "topicId": "m6-t5",
    "slug": "immutable",
    "title": "Tuple Methods: Tuple Immutability",
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
    "publicTests": [
      {
        "id": "m6-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p04",
    "topicId": "m6-t5",
    "slug": "len-t",
    "title": "Tuple Methods: Tuple Length",
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
    "publicTests": [
      {
        "id": "m6-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p05",
    "topicId": "m6-t5",
    "slug": "slice-t",
    "title": "Tuple Methods: Slice a Tuple",
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
    "publicTests": [
      {
        "id": "m6-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "(1, 2)",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p06",
    "topicId": "m6-t5",
    "slug": "count-t",
    "title": "Tuple Methods: count()",
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
        "id": "m6-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m6-t5-p07",
    "topicId": "m6-t5",
    "slug": "index-t",
    "title": "Tuple Methods: index()",
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
        "id": "m6-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  }
];
