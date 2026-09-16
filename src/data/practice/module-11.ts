import type { PracticeProblem } from "@/lib/types";

export const module11Practice: PracticeProblem[] = [
  {
    "id": "m11-t1-p01",
    "topicId": "m11-t1",
    "slug": "basic-list-comp",
    "title": "List Comprehension Syntax: Basic List Comp",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Build nums with a list comprehension: [x for x in range(4)]. Print nums.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build nums with a list comprehension: [x for x in range(4)]. Print nums."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! [x for x in ...] builds a list in one line.",
      "requiresVariables": [
        "nums"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[0, 1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [0, 1, 2, 3]"
    ],
    "hints": [
      "nums = [x for x in range(4)]\nprint(nums)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[0, 1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"nums\" in globals(), \"Expected a variable named nums\"",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "[0, 1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "nums = [x for x in range(4)]\nprint(nums)",
    "approach": "Build nums with a list comprehension: [x for x in range(4)]. Print nums.\n\nReference solution:\nnums = [x for x in range(4)]\nprint(nums)"
  },
  {
    "id": "m11-t1-p02",
    "topicId": "m11-t1",
    "slug": "square-comp",
    "title": "List Comprehension Syntax: Squares",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print [n * n for n in range(1, 5)].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print [n * n for n in range(1, 5)]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[1, 4, 9, 16]"
      }
    ],
    "constraints": [
      "Output must match: [1, 4, 9, 16]"
    ],
    "hints": [
      "print([n * n for n in range(1, 5)])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 4, 9, 16]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 4, 9, 16]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 4, 9, 16]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print([n * n for n in range(1, 5)])",
    "approach": "Print [n * n for n in range(1, 5)].\n\nReference solution:\nprint([n * n for n in range(1, 5)])"
  },
  {
    "id": "m11-t1-p03",
    "topicId": "m11-t1",
    "slug": "filter-evens-comp",
    "title": "List Comprehension Syntax: Filter Evens",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print [n for n in range(8) if n % 2 == 0].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print [n for n in range(8) if n % 2 == 0]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresIfCondition": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[0, 2, 4, 6]"
      }
    ],
    "constraints": [
      "Output must match: [0, 2, 4, 6]"
    ],
    "hints": [
      "Put if n % 2 == 0 at the end of the comprehension."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[0, 2, 4, 6]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "[0, 2, 4, 6]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "[0, 2, 4, 6]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print([n for n in range(8) if n % 2 == 0])",
    "approach": "Print [n for n in range(8) if n % 2 == 0].\n\nReference solution:\nprint([n for n in range(8) if n % 2 == 0])"
  },
  {
    "id": "m11-t1-p04",
    "topicId": "m11-t1",
    "slug": "upper-comp",
    "title": "List Comprehension Syntax: Uppercase List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set words = [\"cat\", \"dog\"]. Print [w.upper() for w in words].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set words = [\"cat\", \"dog\"]. Print [w.upper() for w in words]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "words"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "['CAT', 'DOG']"
      }
    ],
    "constraints": [
      "Output must match: ['CAT', 'DOG']"
    ],
    "hints": [
      "words = [\"cat\", \"dog\"]\nprint([w.upper() for w in words])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "['CAT', 'DOG']",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"words\" in globals(), \"Expected a variable named words\"",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "['CAT', 'DOG']",
        "visibility": "public"
      }
    ],
    "solutionCode": "words = [\"cat\", \"dog\"]\nprint([w.upper() for w in words])",
    "approach": "Set words = [\"cat\", \"dog\"]. Print [w.upper() for w in words].\n\nReference solution:\nwords = [\"cat\", \"dog\"]\nprint([w.upper() for w in words])"
  },
  {
    "id": "m11-t1-p05",
    "topicId": "m11-t1",
    "slug": "nested-comp",
    "title": "List Comprehension Syntax: Nested Comp",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print [j for i in range(1, 3) for j in range(i)]. The second for runs inside the first.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print [j for i in range(1, 3) for j in range(i)]. The second for runs inside the first."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[0, 0, 1]"
      }
    ],
    "constraints": [
      "Output must match: [0, 0, 1]"
    ],
    "hints": [
      "i is 1 then 2, so range(i) is [0] then [0, 1]."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "[0, 0, 1]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "[0, 0, 1]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "[0, 0, 1]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print([j for i in range(1, 3) for j in range(i)])",
    "approach": "Print [j for i in range(1, 3) for j in range(i)]. The second for runs inside the first.\n\nReference solution:\nprint([j for i in range(1, 3) for j in range(i)])"
  },
  {
    "id": "m11-t1-p06",
    "topicId": "m11-t1",
    "slug": "length-comp",
    "title": "List Comprehension Syntax: Lengths",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print [len(w) for w in [\"one\", \"three\", \"a\"]].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print [len(w) for w in [\"one\", \"three\", \"a\"]]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[3, 5, 1]"
      }
    ],
    "constraints": [
      "Output must match: [3, 5, 1]"
    ],
    "hints": [
      "print([len(w) for w in [\"one\", \"three\", \"a\"]])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[3, 5, 1]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "[3, 5, 1]",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "[3, 5, 1]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print([len(w) for w in [\"one\", \"three\", \"a\"]])",
    "approach": "Print [len(w) for w in [\"one\", \"three\", \"a\"]].\n\nReference solution:\nprint([len(w) for w in [\"one\", \"three\", \"a\"]])"
  },
  {
    "id": "m11-t1-p07",
    "topicId": "m11-t1",
    "slug": "ternary-comp",
    "title": "List Comprehension Syntax: Conditional Expression",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print [\"even\" if n % 2 == 0 else \"odd\" for n in range(3)]. The if/else is the value, not a filter.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print [\"even\" if n % 2 == 0 else \"odd\" for n in range(3)]. The if/else is the value, not a filter."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresIfCondition": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "['even', 'odd', 'even']"
      }
    ],
    "constraints": [
      "Output must match: ['even', 'odd', 'even']"
    ],
    "hints": [
      "value_if_true if condition else value_if_false goes before for."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "['even', 'odd', 'even']",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "['even', 'odd', 'even']",
        "visibility": "public"
      },
      {
        "id": "m11-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "['even', 'odd', 'even']",
        "visibility": "public"
      }
    ],
    "solutionCode": "print([\"even\" if n % 2 == 0 else \"odd\" for n in range(3)])",
    "approach": "Print [\"even\" if n % 2 == 0 else \"odd\" for n in range(3)]. The if/else is the value, not a filter.\n\nReference solution:\nprint([\"even\" if n % 2 == 0 else \"odd\" for n in range(3)])"
  },
  {
    "id": "m11-t2-p01",
    "topicId": "m11-t2",
    "slug": "double-prices",
    "title": "Uses of Comprehensions: Double Prices",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set prices = [10, 20, 5]. Print [p * 2 for p in prices].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set prices = [10, 20, 5]. Print [p * 2 for p in prices]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "prices"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[20, 40, 10]"
      }
    ],
    "constraints": [
      "Output must match: [20, 40, 10]"
    ],
    "hints": [
      "prices = [10, 20, 5]\nprint([p * 2 for p in prices])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[20, 40, 10]",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"prices\" in globals(), \"Expected a variable named prices\"",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "[20, 40, 10]",
        "visibility": "public"
      }
    ],
    "solutionCode": "prices = [10, 20, 5]\nprint([p * 2 for p in prices])",
    "approach": "Set prices = [10, 20, 5]. Print [p * 2 for p in prices].\n\nReference solution:\nprices = [10, 20, 5]\nprint([p * 2 for p in prices])"
  },
  {
    "id": "m11-t2-p02",
    "topicId": "m11-t2",
    "slug": "passing-scores",
    "title": "Uses of Comprehensions: Passing Scores",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set scores = [90, 40, 75, 55]. Print the scores that are at least 60 using a comprehension.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set scores = [90, 40, 75, 55]. Print the scores that are at least 60 using a comprehension."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "scores"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[90, 75]"
      }
    ],
    "constraints": [
      "Output must match: [90, 75]"
    ],
    "hints": [
      "print([s for s in scores if s >= 60])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[90, 75]",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"scores\" in globals(), \"Expected a variable named scores\"",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[90, 75]",
        "visibility": "public"
      }
    ],
    "solutionCode": "scores = [90, 40, 75, 55]\nprint([s for s in scores if s >= 60])",
    "approach": "Set scores = [90, 40, 75, 55]. Print the scores that are at least 60 using a comprehension.\n\nReference solution:\nscores = [90, 40, 75, 55]\nprint([s for s in scores if s >= 60])"
  },
  {
    "id": "m11-t2-p03",
    "topicId": "m11-t2",
    "slug": "first-letters",
    "title": "Uses of Comprehensions: First Letters",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set names = [\"Ada\", \"Bob\", \"Cam\"]. Print the first letter of each name using a comprehension.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set names = [\"Ada\", \"Bob\", \"Cam\"]. Print the first letter of each name using a comprehension."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "names"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "['A', 'B', 'C']"
      }
    ],
    "constraints": [
      "Output must match: ['A', 'B', 'C']"
    ],
    "hints": [
      "print([name[0] for name in names])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "['A', 'B', 'C']",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"names\" in globals(), \"Expected a variable named names\"",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "['A', 'B', 'C']",
        "visibility": "public"
      }
    ],
    "solutionCode": "names = [\"Ada\", \"Bob\", \"Cam\"]\nprint([name[0] for name in names])",
    "approach": "Set names = [\"Ada\", \"Bob\", \"Cam\"]. Print the first letter of each name using a comprehension.\n\nReference solution:\nnames = [\"Ada\", \"Bob\", \"Cam\"]\nprint([name[0] for name in names])"
  },
  {
    "id": "m11-t2-p04",
    "topicId": "m11-t2",
    "slug": "flatten-rows",
    "title": "Uses of Comprehensions: Flatten Rows",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set matrix = [[1, 2], [3, 4]]. Flatten it with [x for row in matrix for x in row] and print the result.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set matrix = [[1, 2], [3, 4]]. Flatten it with [x for row in matrix for x in row] and print the result."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "matrix"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[1, 2, 3, 4]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2, 3, 4]"
    ],
    "hints": [
      "Two for clauses: outer rows, then items in each row."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3, 4]",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"matrix\" in globals(), \"Expected a variable named matrix\"",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2, 3, 4]",
        "visibility": "public"
      }
    ],
    "solutionCode": "matrix = [[1, 2], [3, 4]]\nprint([x for row in matrix for x in row])",
    "approach": "Set matrix = [[1, 2], [3, 4]]. Flatten it with [x for row in matrix for x in row] and print the result.\n\nReference solution:\nmatrix = [[1, 2], [3, 4]]\nprint([x for row in matrix for x in row])"
  },
  {
    "id": "m11-t2-p05",
    "topicId": "m11-t2",
    "slug": "strip-words",
    "title": "Uses of Comprehensions: Strip Spaces",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set dirty = [\" a\", \"b \"]. Print [w.strip() for w in dirty].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set dirty = [\" a\", \"b \"]. Print [w.strip() for w in dirty]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "dirty"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "['a', 'b']"
      }
    ],
    "constraints": [
      "Output must match: ['a', 'b']"
    ],
    "hints": [
      "strip() removes leading and trailing spaces."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"dirty\" in globals(), \"Expected a variable named dirty\"",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      }
    ],
    "solutionCode": "dirty = [\" a\", \"b \"]\nprint([w.strip() for w in dirty])",
    "approach": "Set dirty = [\" a\", \"b \"]. Print [w.strip() for w in dirty].\n\nReference solution:\ndirty = [\" a\", \"b \"]\nprint([w.strip() for w in dirty])"
  },
  {
    "id": "m11-t2-p06",
    "topicId": "m11-t2",
    "slug": "index-pairs",
    "title": "Uses of Comprehensions: Index Pairs",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set items = [\"x\", \"y\"]. Print [(i, v) for i, v in enumerate(items)].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set items = [\"x\", \"y\"]. Print [(i, v) for i, v in enumerate(items)]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "items"
      ],
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[(0, 'x'), (1, 'y')]"
      }
    ],
    "constraints": [
      "Output must match: [(0, 'x'), (1, 'y')]"
    ],
    "hints": [
      "enumerate(items) gives (index, value) pairs."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[(0, 'x'), (1, 'y')]",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"items\" in globals(), \"Expected a variable named items\"",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "[(0, 'x'), (1, 'y')]",
        "visibility": "public"
      }
    ],
    "solutionCode": "items = [\"x\", \"y\"]\nprint([(i, v) for i, v in enumerate(items)])",
    "approach": "Set items = [\"x\", \"y\"]. Print [(i, v) for i, v in enumerate(items)].\n\nReference solution:\nitems = [\"x\", \"y\"]\nprint([(i, v) for i, v in enumerate(items)])"
  },
  {
    "id": "m11-t2-p07",
    "topicId": "m11-t2",
    "slug": "cartesian-pairs",
    "title": "Uses of Comprehensions: Cartesian Pairs",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print [(left, right) for left in [1, 2] for right in [3, 4]].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print [(left, right) for left in [1, 2] for right in [3, 4]]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "[(1, 3), (1, 4), (2, 3), (2, 4)]"
      }
    ],
    "constraints": [
      "Output must match: [(1, 3), (1, 4), (2, 3), (2, 4)]"
    ],
    "hints": [
      "The second for runs fully for each value of the first."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[(1, 3), (1, 4), (2, 3), (2, 4)]",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "[(1, 3), (1, 4), (2, 3), (2, 4)]",
        "visibility": "public"
      },
      {
        "id": "m11-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "[(1, 3), (1, 4), (2, 3), (2, 4)]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print([(left, right) for left in [1, 2] for right in [3, 4]])",
    "approach": "Print [(left, right) for left in [1, 2] for right in [3, 4]].\n\nReference solution:\nprint([(left, right) for left in [1, 2] for right in [3, 4]])"
  },
  {
    "id": "m11-t3-p01",
    "topicId": "m11-t3",
    "slug": "basic-dict-comp",
    "title": "Dictionary Comprehensions: Doubled Values",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print {x: x * 2 for x in range(3)}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {x: x * 2 for x in range(3)}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "{0: 0, 1: 2, 2: 4}"
      }
    ],
    "constraints": [
      "Output must match: {0: 0, 1: 2, 2: 4}"
    ],
    "hints": [
      "print({x: x * 2 for x in range(3)})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "{0: 0, 1: 2, 2: 4}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "{0: 0, 1: 2, 2: 4}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "{0: 0, 1: 2, 2: 4}",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({x: x * 2 for x in range(3)})",
    "approach": "Print {x: x * 2 for x in range(3)}.\n\nReference solution:\nprint({x: x * 2 for x in range(3)})"
  },
  {
    "id": "m11-t3-p02",
    "topicId": "m11-t3",
    "slug": "word-lengths-dict",
    "title": "Dictionary Comprehensions: Word Lengths",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set words = [\"hi\", \"hey\"]. Print {w: len(w) for w in words}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set words = [\"hi\", \"hey\"]. Print {w: len(w) for w in words}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "words"
      ],
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "{'hi': 2, 'hey': 3}"
      }
    ],
    "constraints": [
      "Output must match: {'hi': 2, 'hey': 3}"
    ],
    "hints": [
      "print({w: len(w) for w in words})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "{'hi': 2, 'hey': 3}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"words\" in globals(), \"Expected a variable named words\"",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "{'hi': 2, 'hey': 3}",
        "visibility": "public"
      }
    ],
    "solutionCode": "words = [\"hi\", \"hey\"]\nprint({w: len(w) for w in words})",
    "approach": "Set words = [\"hi\", \"hey\"]. Print {w: len(w) for w in words}.\n\nReference solution:\nwords = [\"hi\", \"hey\"]\nprint({w: len(w) for w in words})"
  },
  {
    "id": "m11-t3-p03",
    "topicId": "m11-t3",
    "slug": "odd-squares-dict",
    "title": "Dictionary Comprehensions: Odd Squares",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print {n: n * n for n in range(6) if n % 2 == 1}. Keep only odd keys.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {n: n * n for n in range(6) if n % 2 == 1}. Keep only odd keys."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "{1: 1, 3: 9, 5: 25}"
      }
    ],
    "constraints": [
      "Output must match: {1: 1, 3: 9, 5: 25}"
    ],
    "hints": [
      "The if at the end filters which keys are included."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "{1: 1, 3: 9, 5: 25}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "{1: 1, 3: 9, 5: 25}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "{1: 1, 3: 9, 5: 25}",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({n: n * n for n in range(6) if n % 2 == 1})",
    "approach": "Print {n: n * n for n in range(6) if n % 2 == 1}. Keep only odd keys.\n\nReference solution:\nprint({n: n * n for n in range(6) if n % 2 == 1})"
  },
  {
    "id": "m11-t3-p04",
    "topicId": "m11-t3",
    "slug": "invert-dict",
    "title": "Dictionary Comprehensions: Invert Keys",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set mapping = {\"a\": 1, \"b\": 2}. Print {v: k for k, v in mapping.items()}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set mapping = {\"a\": 1, \"b\": 2}. Print {v: k for k, v in mapping.items()}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "mapping"
      ],
      "requiresForLoop": true,
      "requiresDictKey": "a"
    },
    "examples": [
      {
        "output": "{1: 'a', 2: 'b'}"
      }
    ],
    "constraints": [
      "Output must match: {1: 'a', 2: 'b'}"
    ],
    "hints": [
      "Swap value and key: {v: k for k, v in mapping.items()}."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "{1: 'a', 2: 'b'}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"mapping\" in globals(), \"Expected a variable named mapping\"",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "{1: 'a', 2: 'b'}",
        "visibility": "public"
      }
    ],
    "solutionCode": "mapping = {\"a\": 1, \"b\": 2}\nprint({v: k for k, v in mapping.items()})",
    "approach": "Set mapping = {\"a\": 1, \"b\": 2}. Print {v: k for k, v in mapping.items()}.\n\nReference solution:\nmapping = {\"a\": 1, \"b\": 2}\nprint({v: k for k, v in mapping.items()})"
  },
  {
    "id": "m11-t3-p05",
    "topicId": "m11-t3",
    "slug": "char-index-dict",
    "title": "Dictionary Comprehensions: Character Indexes",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print {ch: i for i, ch in enumerate(\"xy\")}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {ch: i for i, ch in enumerate(\"xy\")}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "{'x': 0, 'y': 1}"
      }
    ],
    "constraints": [
      "Output must match: {'x': 0, 'y': 1}"
    ],
    "hints": [
      "print({ch: i for i, ch in enumerate(\"xy\")})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "{'x': 0, 'y': 1}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "{'x': 0, 'y': 1}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "{'x': 0, 'y': 1}",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({ch: i for i, ch in enumerate(\"xy\")})",
    "approach": "Print {ch: i for i, ch in enumerate(\"xy\")}.\n\nReference solution:\nprint({ch: i for i, ch in enumerate(\"xy\")})"
  },
  {
    "id": "m11-t3-p06",
    "topicId": "m11-t3",
    "slug": "even-odd-labels",
    "title": "Dictionary Comprehensions: Even Odd Labels",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print {n: (\"even\" if n % 2 == 0 else \"odd\") for n in range(3)}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {n: (\"even\" if n % 2 == 0 else \"odd\") for n in range(3)}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "{0: 'even', 1: 'odd', 2: 'even'}"
      }
    ],
    "constraints": [
      "Output must match: {0: 'even', 1: 'odd', 2: 'even'}"
    ],
    "hints": [
      "The if/else chooses the value stored for each key."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "{0: 'even', 1: 'odd', 2: 'even'}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "{0: 'even', 1: 'odd', 2: 'even'}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "{0: 'even', 1: 'odd', 2: 'even'}",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({n: (\"even\" if n % 2 == 0 else \"odd\") for n in range(3)})",
    "approach": "Print {n: (\"even\" if n % 2 == 0 else \"odd\") for n in range(3)}.\n\nReference solution:\nprint({n: (\"even\" if n % 2 == 0 else \"odd\") for n in range(3)})"
  },
  {
    "id": "m11-t3-p07",
    "topicId": "m11-t3",
    "slug": "zip-dict",
    "title": "Dictionary Comprehensions: Zip Two Lists",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set keys = [\"a\", \"b\"] and vals = [10, 20]. Print {k: v for k, v in zip(keys, vals)}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set keys = [\"a\", \"b\"] and vals = [10, 20]. Print {k: v for k, v in zip(keys, vals)}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "keys",
        "vals"
      ],
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "{'a': 10, 'b': 20}"
      }
    ],
    "constraints": [
      "Output must match: {'a': 10, 'b': 20}"
    ],
    "hints": [
      "zip(keys, vals) pairs each key with a value."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m11-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "{'a': 10, 'b': 20}",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"keys\" in globals(), \"Expected a variable named keys\"\nassert \"vals\" in globals(), \"Expected a variable named vals\"",
        "visibility": "public"
      },
      {
        "id": "m11-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "{'a': 10, 'b': 20}",
        "visibility": "public"
      }
    ],
    "solutionCode": "keys = [\"a\", \"b\"]\nvals = [10, 20]\nprint({k: v for k, v in zip(keys, vals)})",
    "approach": "Set keys = [\"a\", \"b\"] and vals = [10, 20]. Print {k: v for k, v in zip(keys, vals)}.\n\nReference solution:\nkeys = [\"a\", \"b\"]\nvals = [10, 20]\nprint({k: v for k, v in zip(keys, vals)})"
  }
];
