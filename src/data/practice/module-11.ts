import type { PracticeProblem } from "@/lib/types";

export const module11Practice: PracticeProblem[] = [
  {
    "id": "m11-t1-p01",
    "topicId": "m11-t1",
    "slug": "lc-basic",
    "title": "List Comprehension Syntax: Basic List Comp",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print [x for x in range(3)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# list comp",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "List comprehension: "
        },
        {
          "type": "code",
          "value": "[x for x in range(3)]"
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
          "expected": "[0, 1, 2]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 1, 2]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 1, 2]"
    ],
    "hints": [
      "print([x for x in range(3)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p02",
    "topicId": "m11-t1",
    "slug": "lc-squares",
    "title": "List Comprehension Syntax: Squares",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print [x*x for x in range(1,4)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# squares",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Square each number in comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[1, 4, 9]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[1, 4, 9]"
      }
    ],
    "constraints": [
      "Output must be exactly: [1, 4, 9]"
    ],
    "hints": [
      "print([x*x for x in range(1,4)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 4, 9]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p03",
    "topicId": "m11-t1",
    "slug": "lc-filter",
    "title": "List Comprehension Syntax: Filter Evens",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print [x for x in range(6) if x%2==0].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# filter",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Add "
        },
        {
          "type": "code",
          "value": "if"
        },
        {
          "type": "text",
          "value": " to filter items."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[0, 2, 4]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 2, 4]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 2, 4]"
    ],
    "hints": [
      "print([x for x in range(6) if x%2==0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 2, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p04",
    "topicId": "m11-t1",
    "slug": "lc-string",
    "title": "List Comprehension Syntax: Uppercase List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print [c.upper() for c in [\"a\",\"b\"]].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# upper",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Transform each item in comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "['A', 'B']",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "['A', 'B']"
      }
    ],
    "constraints": [
      "Output must be exactly: ['A', 'B']"
    ],
    "hints": [
      "print([c.upper() for c in [\"a\",\"b\"]])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "['A', 'B']",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p05",
    "topicId": "m11-t1",
    "slug": "lc-nested",
    "title": "List Comprehension Syntax: Nested Comp",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print [j for i in range(2) for j in range(2)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# nested",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Nested comprehension loops."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[0, 1, 0, 1]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 1, 0, 1]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 1, 0, 1]"
    ],
    "hints": [
      "print([j for i in range(2) for j in range(2)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1, 0, 1]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p06",
    "topicId": "m11-t1",
    "slug": "lc-len",
    "title": "List Comprehension Syntax: Lengths",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print [len(w) for w in [\"hi\",\"hey\"]].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# len comp",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Apply function in comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[2, 3]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[2, 3]"
      }
    ],
    "constraints": [
      "Output must be exactly: [2, 3]"
    ],
    "hints": [
      "print([len(w) for w in [\"hi\",\"hey\"]])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t1-p07",
    "topicId": "m11-t1",
    "slug": "lc-condition",
    "title": "List Comprehension Syntax: Conditional Expression",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print [x if x%2==0 else -x for x in range(1,4)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# cond",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "if/else inside comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[-1, 2, -3]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[-1, 2, -3]"
      }
    ],
    "constraints": [
      "Output must be exactly: [-1, 2, -3]"
    ],
    "hints": [
      "print([x if x%2==0 else -x for x in range(1,4)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[-1, 2, -3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p01",
    "topicId": "m11-t2",
    "slug": "lc-basic",
    "title": "Uses of Comprehensions: Basic List Comp",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print [x for x in range(3)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# list comp",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "List comprehension: "
        },
        {
          "type": "code",
          "value": "[x for x in range(3)]"
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
          "expected": "[0, 1, 2]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 1, 2]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 1, 2]"
    ],
    "hints": [
      "print([x for x in range(3)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p02",
    "topicId": "m11-t2",
    "slug": "lc-squares",
    "title": "Uses of Comprehensions: Squares",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print [x*x for x in range(1,4)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# squares",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Square each number in comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[1, 4, 9]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[1, 4, 9]"
      }
    ],
    "constraints": [
      "Output must be exactly: [1, 4, 9]"
    ],
    "hints": [
      "print([x*x for x in range(1,4)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 4, 9]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p03",
    "topicId": "m11-t2",
    "slug": "lc-filter",
    "title": "Uses of Comprehensions: Filter Evens",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print [x for x in range(6) if x%2==0].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# filter",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Add "
        },
        {
          "type": "code",
          "value": "if"
        },
        {
          "type": "text",
          "value": " to filter items."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[0, 2, 4]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 2, 4]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 2, 4]"
    ],
    "hints": [
      "print([x for x in range(6) if x%2==0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 2, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p04",
    "topicId": "m11-t2",
    "slug": "lc-string",
    "title": "Uses of Comprehensions: Uppercase List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print [c.upper() for c in [\"a\",\"b\"]].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# upper",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Transform each item in comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "['A', 'B']",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "['A', 'B']"
      }
    ],
    "constraints": [
      "Output must be exactly: ['A', 'B']"
    ],
    "hints": [
      "print([c.upper() for c in [\"a\",\"b\"]])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "['A', 'B']",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p05",
    "topicId": "m11-t2",
    "slug": "lc-nested",
    "title": "Uses of Comprehensions: Nested Comp",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print [j for i in range(2) for j in range(2)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# nested",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Nested comprehension loops."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[0, 1, 0, 1]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 1, 0, 1]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 1, 0, 1]"
    ],
    "hints": [
      "print([j for i in range(2) for j in range(2)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1, 0, 1]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p06",
    "topicId": "m11-t2",
    "slug": "lc-len",
    "title": "Uses of Comprehensions: Lengths",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print [len(w) for w in [\"hi\",\"hey\"]].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# len comp",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Apply function in comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[2, 3]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[2, 3]"
      }
    ],
    "constraints": [
      "Output must be exactly: [2, 3]"
    ],
    "hints": [
      "print([len(w) for w in [\"hi\",\"hey\"]])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t2-p07",
    "topicId": "m11-t2",
    "slug": "lc-condition",
    "title": "Uses of Comprehensions: Conditional Expression",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print [x if x%2==0 else -x for x in range(1,4)].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# cond",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "if/else inside comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[-1, 2, -3]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[-1, 2, -3]"
      }
    ],
    "constraints": [
      "Output must be exactly: [-1, 2, -3]"
    ],
    "hints": [
      "print([x if x%2==0 else -x for x in range(1,4)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[-1, 2, -3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p01",
    "topicId": "m11-t3",
    "slug": "dc-basic",
    "title": "Dictionary Comprehensions: Basic Dict Comp",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print {x:x*2 for x in range(3)}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# dict comp",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Dict comprehension: "
        },
        {
          "type": "code",
          "value": "{k:v for ...}"
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
          "expected": "{0: 0, 1: 2, 2: 4}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{0: 0, 1: 2, 2: 4}"
      }
    ],
    "constraints": [
      "Output must be exactly: {0: 0, 1: 2, 2: 4}"
    ],
    "hints": [
      "print({x:x*2 for x in range(3)})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "{0: 0, 1: 2, 2: 4}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p02",
    "topicId": "m11-t3",
    "slug": "dc-keys",
    "title": "Dictionary Comprehensions: From List",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print {c:len(c) for c in [\"a\",\"ab\"]}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# from list",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Build dict from list."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "{'a': 1, 'ab': 2}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{'a': 1, 'ab': 2}"
      }
    ],
    "constraints": [
      "Output must be exactly: {'a': 1, 'ab': 2}"
    ],
    "hints": [
      "print({c:len(c) for c in [\"a\",\"ab\"]})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "{'a': 1, 'ab': 2}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p03",
    "topicId": "m11-t3",
    "slug": "dc-filter",
    "title": "Dictionary Comprehensions: Filter Dict Comp",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print {x:x for x in range(5) if x%2==1}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# filter",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Filter in dict comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "{1: 1, 3: 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1: 1, 3: 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1: 1, 3: 3}"
    ],
    "hints": [
      "print({x:x for x in range(5) if x%2==1})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "{1: 1, 3: 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p04",
    "topicId": "m11-t3",
    "slug": "dc-invert",
    "title": "Dictionary Comprehensions: Invert Keys Values",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print {v:k for k,v in {\"a\":1,\"b\":2}.items()}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# invert",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Swap keys and values."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "{1: 'a', 2: 'b'}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1: 'a', 2: 'b'}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1: 'a', 2: 'b'}"
    ],
    "hints": [
      "print({v:k for k,v in {\"a\":1,\"b\":2}.items()})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "{1: 'a', 2: 'b'}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p05",
    "topicId": "m11-t3",
    "slug": "dc-string",
    "title": "Dictionary Comprehensions: Char Positions",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print {c:i for i,c in enumerate(\"ab\")}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# enum",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Dict comp with enumerate."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "{'a': 0, 'b': 1}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{'a': 0, 'b': 1}"
      }
    ],
    "constraints": [
      "Output must be exactly: {'a': 0, 'b': 1}"
    ],
    "hints": [
      "print({c:i for i,c in enumerate(\"ab\")})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "{'a': 0, 'b': 1}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p06",
    "topicId": "m11-t3",
    "slug": "dc-conditional",
    "title": "Dictionary Comprehensions: Conditional Values",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print {x:(\"even\" if x%2==0 else \"odd\") for x in range(3)}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Conditional expression in dict comp."
        }
      ],
      "editorPlaceholder": "# cond dict",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{0: 'even', 1: 'odd', 2: 'even'}"
      }
    ],
    "constraints": [
      "Use dict comprehension"
    ],
    "hints": [
      "print({x:(\"even\" if x%2==0 else \"odd\") for x in range(3)})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "{0: 'even', 1: 'odd', 2: 'even'}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m11-t3-p07",
    "topicId": "m11-t3",
    "slug": "dc-merge",
    "title": "Dictionary Comprehensions: Combine Two Lists",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print {k:v for k,v in zip([\"a\",\"b\"],[1,2])}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# zip",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use zip in dict comprehension."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "{'a': 1, 'b': 2}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{'a': 1, 'b': 2}"
      }
    ],
    "constraints": [
      "Output must be exactly: {'a': 1, 'b': 2}"
    ],
    "hints": [
      "print({k:v for k,v in zip([\"a\",\"b\"],[1,2])})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "{'a': 1, 'b': 2}",
        "visibility": "public"
      }
    ]
  }
];
