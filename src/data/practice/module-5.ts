import type { PracticeProblem } from "@/lib/types";

export const module5Practice: PracticeProblem[] = [
  {
    "id": "m5-t1-p01",
    "topicId": "m5-t1",
    "slug": "create-list",
    "title": "Creating Lists: Create a List",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create nums = [1, 2, 3] and print nums.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "nums"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": " and print the whole list."
        }
      ],
      "editorPlaceholder": "# nums = [1,2,3]",
      "successDetail": "Correct! Square brackets create a list."
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: [1, 2, 3]"
    ],
    "hints": [
      "nums = [1, 2, 3]\\nprint(nums)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t1-p02",
    "topicId": "m5-t1",
    "slug": "empty-list",
    "title": "Creating Lists: Empty List",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create items = [] and print len(items).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# empty list",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! [] is an empty list.",
      "introSegments": [
        {
          "type": "text",
          "value": "Create an empty list and print its length."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "0",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "0"
      }
    ],
    "constraints": [
      "Output must be exactly: 0"
    ],
    "hints": [
      "items = []\\nprint(len(items))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t1-p03",
    "topicId": "m5-t1",
    "slug": "mixed-list",
    "title": "Creating Lists: Mixed Types",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Create data = [1, \"hi\", True] and print data.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "data"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Lists can hold different types."
        }
      ],
      "editorPlaceholder": "# mixed list",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 'hi', True]"
      }
    ],
    "constraints": [
      "Create list with int, str, bool"
    ],
    "hints": [
      "data = [1, \"hi\", True]\\nprint(data)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 'hi', True]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t1-p04",
    "topicId": "m5-t1",
    "slug": "nested-list",
    "title": "Creating Lists: Nested List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create grid = [[1,2],[3,4]] and print grid[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "grid"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the first inner list."
        }
      ],
      "editorPlaceholder": "# nested list",
      "successDetail": "Correct! Lists can contain other lists."
    },
    "examples": [
      {
        "output": "[1, 2]"
      }
    ],
    "constraints": [
      "Output: [1, 2]"
    ],
    "hints": [
      "grid = [[1,2],[3,4]]\\nprint(grid[0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t1-p05",
    "topicId": "m5-t1",
    "slug": "list-from-range",
    "title": "Creating Lists: list from range",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print list(range(1, 4)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# list(range())",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! list() converts range to a list.",
      "introSegments": [
        {
          "type": "text",
          "value": "Convert "
        },
        {
          "type": "code",
          "value": "range(1,4)"
        },
        {
          "type": "text",
          "value": " to a list."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[1, 2, 3]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must be exactly: [1, 2, 3]"
    ],
    "hints": [
      "print(list(range(1, 4)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t1-p06",
    "topicId": "m5-t1",
    "slug": "repeat-list",
    "title": "Creating Lists: Repeat List",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print [0] * 3.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# [0]*3",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! * repeats list items.",
      "introSegments": [
        {
          "type": "text",
          "value": "Repeat a list with "
        },
        {
          "type": "code",
          "value": "* 3"
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
          "expected": "[0, 0, 0]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 0, 0]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 0, 0]"
    ],
    "hints": [
      "print([0] * 3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 0, 0]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t1-p07",
    "topicId": "m5-t1",
    "slug": "concat-lists",
    "title": "Creating Lists: Concatenate Lists",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print [1, 2] + [3, 4].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# list concat",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! + combines lists.",
      "introSegments": [
        {
          "type": "text",
          "value": "Join two lists with "
        },
        {
          "type": "code",
          "value": "+"
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
          "expected": "[1, 2, 3, 4]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[1, 2, 3, 4]"
      }
    ],
    "constraints": [
      "Output must be exactly: [1, 2, 3, 4]"
    ],
    "hints": [
      "print([1, 2] + [3, 4])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p01",
    "topicId": "m5-t2",
    "slug": "ordered",
    "title": "List Properties: Lists Are Ordered",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set a=[3,1,2], print a — order is preserved.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Lists keep items in the order you add them."
        }
      ],
      "editorPlaceholder": "# ordered list",
      "successDetail": "Correct! Order matters in lists."
    },
    "examples": [
      {
        "output": "[3, 1, 2]"
      }
    ],
    "constraints": [
      "Output: [3, 1, 2]"
    ],
    "hints": [
      "a = [3,1,2]\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[3, 1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p02",
    "topicId": "m5-t2",
    "slug": "mutable",
    "title": "List Properties: Lists Are Mutable",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set a=[1,2], change a[0]=99, print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Lists can be changed after creation."
        }
      ],
      "editorPlaceholder": "# mutable",
      "successDetail": "Correct! Lists are mutable."
    },
    "examples": [
      {
        "output": "[99, 2]"
      }
    ],
    "constraints": [
      "Output: [99, 2]"
    ],
    "hints": [
      "a = [1,2]\\na[0]=99\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[99, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p03",
    "topicId": "m5-t2",
    "slug": "duplicates",
    "title": "List Properties: Allow Duplicates",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print [1, 1, 2].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# duplicates",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Duplicates are allowed.",
      "introSegments": [
        {
          "type": "text",
          "value": "Lists can contain duplicate values."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[1, 1, 2]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[1, 1, 2]"
      }
    ],
    "constraints": [
      "Output must be exactly: [1, 1, 2]"
    ],
    "hints": [
      "print([1, 1, 2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p04",
    "topicId": "m5-t2",
    "slug": "len-list",
    "title": "List Properties: List Length",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set a=[10,20,30,40], print len(a).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "len()"
        },
        {
          "type": "text",
          "value": " to count items."
        }
      ],
      "editorPlaceholder": "# len",
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
      "a = [10,20,30,40]\\nprint(len(a))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p05",
    "topicId": "m5-t2",
    "slug": "type-list",
    "title": "List Properties: List Type",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print type([1,2,3]).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# type",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Check type of a list."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "<class 'list'>",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "<class 'list'>"
      }
    ],
    "constraints": [
      "Output must be exactly: <class 'list'>"
    ],
    "hints": [
      "print(type([1,2,3]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "<class 'list'>",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p06",
    "topicId": "m5-t2",
    "slug": "in-list",
    "title": "List Properties: Check Membership",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print 2 in [1,2,3].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# in list",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "in"
        },
        {
          "type": "text",
          "value": " to check if item exists."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "True",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must be exactly: True"
    ],
    "hints": [
      "print(2 in [1,2,3])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t2-p07",
    "topicId": "m5-t2",
    "slug": "mixed-types",
    "title": "List Properties: Mixed Item Types",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print [1, \"two\", 3.0].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# mixed",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Lists can hold different types together."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[1, 'two', 3.0]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[1, 'two', 3.0]"
      }
    ],
    "constraints": [
      "Output must be exactly: [1, 'two', 3.0]"
    ],
    "hints": [
      "print([1, \"two\", 3.0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 'two', 3.0]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p01",
    "topicId": "m5-t3",
    "slug": "index-first",
    "title": "Indexing Lists: First Item",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set items = [10,20,30], print items[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "items"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print first item with "
        },
        {
          "type": "code",
          "value": "items[0]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# items[0]",
      "successDetail": "Correct! List indexing starts at 0."
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
      "items = [10,20,30]\\nprint(items[0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p02",
    "topicId": "m5-t3",
    "slug": "index-last",
    "title": "Indexing Lists: Last Item",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set items = [10,20,30], print items[-1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "items"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print last item with "
        },
        {
          "type": "code",
          "value": "items[-1]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# items[-1]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "30"
      }
    ],
    "constraints": [
      "Output: 30"
    ],
    "hints": [
      "items = [10,20,30]\\nprint(items[-1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "30",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p03",
    "topicId": "m5-t3",
    "slug": "index-middle",
    "title": "Indexing Lists: Middle Item",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set items = [\"a\",\"middle\",\"c\"], print items[1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "items"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the item at index 1."
        }
      ],
      "editorPlaceholder": "# items[1]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "middle"
      }
    ],
    "constraints": [
      "Output: middle"
    ],
    "hints": [
      "items = [\"a\",\"middle\",\"c\"]\\nprint(items[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "middle",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p04",
    "topicId": "m5-t3",
    "slug": "index-update-read",
    "title": "Indexing Lists: Read After Index",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set nums = [1,2,3], print nums[2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "nums"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the third element (index 2)."
        }
      ],
      "editorPlaceholder": "# nums[2]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Output: 3"
    ],
    "hints": [
      "nums = [1,2,3]\\nprint(nums[2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p05",
    "topicId": "m5-t3",
    "slug": "nested-index",
    "title": "Indexing Lists: Nested Index",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set m = [[1,2],[3,4]], print m[1][0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "m"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Access nested list: "
        },
        {
          "type": "code",
          "value": "m[1][0]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# m[1][0]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Output: 3"
    ],
    "hints": [
      "m = [[1,2],[3,4]]\\nprint(m[1][0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p06",
    "topicId": "m5-t3",
    "slug": "two-indexes",
    "title": "Indexing Lists: Two Indexes",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set a = [5,10,15], print a[0] and a[2] on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print first and last items on separate lines."
        }
      ],
      "editorPlaceholder": "# two indexes",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "5\n15"
      }
    ],
    "constraints": [
      "Line 1: 5",
      "Line 2: 15"
    ],
    "hints": [
      "a = [5,10,15]\\nprint(a[0])\\nprint(a[2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "5\n15",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t3-p07",
    "topicId": "m5-t3",
    "slug": "len-index",
    "title": "Indexing Lists: Last via len",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set items = [4,8,12], print items[len(items)-1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "items"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Get last item using "
        },
        {
          "type": "code",
          "value": "len(items)-1"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# len for last",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "12"
      }
    ],
    "constraints": [
      "Output: 12"
    ],
    "hints": [
      "items = [4,8,12]\\nprint(items[len(items)-1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "12",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p01",
    "topicId": "m5-t4",
    "slug": "slice-basic",
    "title": "Slicing Lists: Basic Slice",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set a = [0,1,2,3,4], print a[1:3].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Slice "
        },
        {
          "type": "code",
          "value": "a[1:3]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# a[1:3]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2]"
      }
    ],
    "constraints": [
      "Output: [1, 2]"
    ],
    "hints": [
      "a = [0,1,2,3,4]\\nprint(a[1:3])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p02",
    "topicId": "m5-t4",
    "slug": "slice-start",
    "title": "Slicing Lists: From Start",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set a = [0,1,2,3], print a[:2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Slice from start: "
        },
        {
          "type": "code",
          "value": "a[:2]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# a[:2]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[0, 1]"
      }
    ],
    "constraints": [
      "Output: [0, 1]"
    ],
    "hints": [
      "a = [0,1,2,3]\\nprint(a[:2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p03",
    "topicId": "m5-t4",
    "slug": "slice-end",
    "title": "Slicing Lists: To End",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set a = [0,1,2,3], print a[2:].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Slice to end: "
        },
        {
          "type": "code",
          "value": "a[2:]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# a[2:]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[2, 3]"
      }
    ],
    "constraints": [
      "Output: [2, 3]"
    ],
    "hints": [
      "a = [0,1,2,3]\\nprint(a[2:])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p04",
    "topicId": "m5-t4",
    "slug": "slice-step",
    "title": "Slicing Lists: Step Slice",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set a = [0,1,2,3,4], print a[::2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Every 2nd item: "
        },
        {
          "type": "code",
          "value": "a[::2]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# a[::2]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[0, 2, 4]"
      }
    ],
    "constraints": [
      "Output: [0, 2, 4]"
    ],
    "hints": [
      "a = [0,1,2,3,4]\\nprint(a[::2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 2, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p05",
    "topicId": "m5-t4",
    "slug": "reverse-list",
    "title": "Slicing Lists: Reverse List",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set a = [1,2,3], print a[::-1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Reverse with "
        },
        {
          "type": "code",
          "value": "a[::-1]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# reverse",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[3, 2, 1]"
      }
    ],
    "constraints": [
      "Output: [3, 2, 1]"
    ],
    "hints": [
      "a = [1,2,3]\\nprint(a[::-1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[3, 2, 1]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p06",
    "topicId": "m5-t4",
    "slug": "copy-slice",
    "title": "Slicing Lists: Copy a Slice",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set a = [10,20,30,40], print a[1:4].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Extract middle portion with "
        },
        {
          "type": "code",
          "value": "a[1:4]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# a[1:4]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[20, 30, 40]"
      }
    ],
    "constraints": [
      "Output: [20, 30, 40]"
    ],
    "hints": [
      "a = [10,20,30,40]\\nprint(a[1:4])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[20, 30, 40]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t4-p07",
    "topicId": "m5-t4",
    "slug": "slice-empty",
    "title": "Slicing Lists: Empty Slice",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set a = [1,2,3], print a[2:2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "When start equals stop, slice is empty: "
        },
        {
          "type": "code",
          "value": "a[2:2]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# a[2:2]",
      "successDetail": "Correct! Same index gives empty list."
    },
    "examples": [
      {
        "output": "[]"
      }
    ],
    "constraints": [
      "Output: []"
    ],
    "hints": [
      "a = [1,2,3]\\nprint(a[2:2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p01",
    "topicId": "m5-t5",
    "slug": "append",
    "title": "List Methods: append()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set a=[1,2], a.append(3), print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".append(3)"
        },
        {
          "type": "text",
          "value": " to add to end."
        }
      ],
      "editorPlaceholder": "# append",
      "successDetail": "Correct! append() adds one item."
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: [1, 2, 3]"
    ],
    "hints": [
      "a = [1,2]\\na.append(3)\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p02",
    "topicId": "m5-t5",
    "slug": "pop",
    "title": "List Methods: pop()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set a=[1,2,3], print a.pop().",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".pop()"
        },
        {
          "type": "text",
          "value": " to remove and return last item."
        }
      ],
      "editorPlaceholder": "# pop",
      "successDetail": "Correct! pop() removes the last item."
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Output: 3"
    ],
    "hints": [
      "a = [1,2,3]\\nprint(a.pop())"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p03",
    "topicId": "m5-t5",
    "slug": "sort",
    "title": "List Methods: sort()",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set a=[3,1,2], a.sort(), print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".sort()"
        },
        {
          "type": "text",
          "value": " to sort in place."
        }
      ],
      "editorPlaceholder": "# sort",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: [1, 2, 3]"
    ],
    "hints": [
      "a = [3,1,2]\\na.sort()\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p04",
    "topicId": "m5-t5",
    "slug": "count",
    "title": "List Methods: count()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print [1,2,2,3].count(2).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# count",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! count() finds occurrences.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".count(2)"
        },
        {
          "type": "text",
          "value": " on a list."
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
      "print([1,2,2,3].count(2))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p05",
    "topicId": "m5-t5",
    "slug": "index-method",
    "title": "List Methods: index()",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print [\"a\",\"b\",\"c\"].index(\"b\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# index",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! index() returns position.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".index(\"b\")"
        },
        {
          "type": "text",
          "value": " to find position."
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
      "print([\"a\",\"b\",\"c\"].index(\"b\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p06",
    "topicId": "m5-t5",
    "slug": "extend",
    "title": "List Methods: extend()",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set a=[1,2], a.extend([3,4]), print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".extend()"
        },
        {
          "type": "text",
          "value": " to add multiple items."
        }
      ],
      "editorPlaceholder": "# extend",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2, 3, 4]"
      }
    ],
    "constraints": [
      "Output: [1, 2, 3, 4]"
    ],
    "hints": [
      "a = [1,2]\\na.extend([3,4])\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t5-p07",
    "topicId": "m5-t5",
    "slug": "remove",
    "title": "List Methods: remove()",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set a=[1,2,3,2], a.remove(2), print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".remove(2)"
        },
        {
          "type": "text",
          "value": " to remove first match."
        }
      ],
      "editorPlaceholder": "# remove",
      "successDetail": "Correct! remove() deletes first occurrence."
    },
    "examples": [
      {
        "output": "[1, 3, 2]"
      }
    ],
    "constraints": [
      "Output: [1, 3, 2]"
    ],
    "hints": [
      "a = [1,2,3,2]\\na.remove(2)\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 3, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p01",
    "topicId": "m5-t6",
    "slug": "change-item",
    "title": "Modifying Lists: Change Item",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set a=[1,2,3], set a[0]=10, print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Change index 0 with "
        },
        {
          "type": "code",
          "value": "a[0] = 10"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# change item",
      "successDetail": "Correct! Lists are mutable."
    },
    "examples": [
      {
        "output": "[10, 2, 3]"
      }
    ],
    "constraints": [
      "Output: [10, 2, 3]"
    ],
    "hints": [
      "a = [1,2,3]\\na[0] = 10\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[10, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p02",
    "topicId": "m5-t6",
    "slug": "insert",
    "title": "Modifying Lists: insert()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set a=[1,3], a.insert(1,2), print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "a.insert(1, 2)"
        },
        {
          "type": "text",
          "value": " to insert at index 1."
        }
      ],
      "editorPlaceholder": "# insert",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output: [1, 2, 3]"
    ],
    "hints": [
      "a = [1,3]\\na.insert(1,2)\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p03",
    "topicId": "m5-t6",
    "slug": "del-item",
    "title": "Modifying Lists: del Statement",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set a=[1,2,3], del a[1], print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "del a[1]"
        },
        {
          "type": "text",
          "value": " to remove index 1."
        }
      ],
      "editorPlaceholder": "# del",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 3]"
      }
    ],
    "constraints": [
      "Output: [1, 3]"
    ],
    "hints": [
      "a = [1,2,3]\\ndel a[1]\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p04",
    "topicId": "m5-t6",
    "slug": "clear",
    "title": "Modifying Lists: clear()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set a=[1,2,3], a.clear(), print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".clear()"
        },
        {
          "type": "text",
          "value": " to empty the list."
        }
      ],
      "editorPlaceholder": "# clear",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[]"
      }
    ],
    "constraints": [
      "Output: []"
    ],
    "hints": [
      "a = [1,2,3]\\na.clear()\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p04-t1",
        "label": "Sample test",
        "expectedStdout": "[]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p05",
    "topicId": "m5-t6",
    "slug": "slice-assign",
    "title": "Modifying Lists: Slice Assignment",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set a=[0,0,0,0], a[1:3]=[10,20], print a.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "a"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Replace a slice: "
        },
        {
          "type": "code",
          "value": "a[1:3] = [10, 20]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# slice assign",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[0, 10, 20, 0]"
      }
    ],
    "constraints": [
      "Output: [0, 10, 20, 0]"
    ],
    "hints": [
      "a = [0,0,0,0]\\na[1:3] = [10,20]\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 10, 20, 0]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p06",
    "topicId": "m5-t6",
    "slug": "append-loop",
    "title": "Modifying Lists: Build with Loop",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Build [0,1,2] using a loop and append, print result.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use a for loop and append to build [0,1,2]."
        }
      ],
      "editorPlaceholder": "# loop + append",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[0, 1, 2]"
      }
    ],
    "constraints": [
      "Use for loop and append",
      "Output: [0, 1, 2]"
    ],
    "hints": [
      "a = []\\nfor i in range(3):\\n    a.append(i)\\nprint(a)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m5-t6-p07",
    "topicId": "m5-t6",
    "slug": "modify-nested",
    "title": "Modifying Lists: Modify Nested",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set m=[[1,2],[3,4]], set m[0][1]=9, print m.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "m"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Change nested value "
        },
        {
          "type": "code",
          "value": "m[0][1] = 9"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# nested modify",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[[1, 9], [3, 4]]"
      }
    ],
    "constraints": [
      "Output: [[1, 9], [3, 4]]"
    ],
    "hints": [
      "m = [[1,2],[3,4]]\\nm[0][1] = 9\\nprint(m)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m5-t6-p07-t1",
        "label": "Sample test",
        "expectedStdout": "[[1, 9], [3, 4]]",
        "visibility": "public"
      }
    ]
  }
];
