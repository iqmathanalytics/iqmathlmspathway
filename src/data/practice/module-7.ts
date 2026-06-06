import type { PracticeProblem } from "@/lib/types";

export const module7Practice: PracticeProblem[] = [
  {
    "id": "m7-t1-p01",
    "topicId": "m7-t1",
    "slug": "create-set",
    "title": "Set Syntax: Create a Set",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create s = {1, 2, 3} and print s (order may vary).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Curly braces create a set (no key:value)."
        }
      ],
      "editorPlaceholder": "# s = {1,2,3}",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{1, 2, 3}"
      }
    ],
    "constraints": [
      "Create set {1,2,3}"
    ],
    "hints": [
      "s = {1, 2, 3}\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t1-p02",
    "topicId": "m7-t1",
    "slug": "set-func",
    "title": "Set Syntax: set() Function",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print set([1,2,2,3]).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# set()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Sets remove duplicates.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "set()"
        },
        {
          "type": "text",
          "value": " to remove duplicates."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "{1, 2, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 2, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 2, 3}"
    ],
    "hints": [
      "print(set([1,2,2,3]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t1-p03",
    "topicId": "m7-t1",
    "slug": "unique",
    "title": "Set Syntax: Unique Values",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print len({1,1,2,2,3}).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# unique",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Sets only keep unique values."
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
      "print(len({1,1,2,2,3}))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t1-p04",
    "topicId": "m7-t1",
    "slug": "empty-set",
    "title": "Set Syntax: Empty Set",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create s = set(), print len(s).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "set()"
        },
        {
          "type": "text",
          "value": " for empty set — not {}."
        }
      ],
      "editorPlaceholder": "# set()",
      "successDetail": "Correct! {} is a dict, not empty set."
    },
    "examples": [
      {
        "output": "0"
      }
    ],
    "constraints": [
      "Output: 0"
    ],
    "hints": [
      "s = set()\\nprint(len(s))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t1-p05",
    "topicId": "m7-t1",
    "slug": "in-set",
    "title": "Set Syntax: Membership",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print 2 in {1,2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# in set",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Check membership with "
        },
        {
          "type": "code",
          "value": "in"
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
      "print(2 in {1,2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t1-p06",
    "topicId": "m7-t1",
    "slug": "mixed-set",
    "title": "Set Syntax: Mixed Types",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print {1, \"a\"} — sets can mix types.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Sets can hold different types."
        }
      ],
      "editorPlaceholder": "# mixed set",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{'a', 1}"
      }
    ],
    "constraints": [
      "Create set with int and str"
    ],
    "hints": [
      "print({1, \"a\"})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "{'a', 1}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t1-p07",
    "topicId": "m7-t1",
    "slug": "from-string",
    "title": "Set Syntax: Set from String",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print set(\"hello\") — unique letters.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "set(string) gives unique characters."
        }
      ],
      "editorPlaceholder": "# set(\"hello\")",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{'h', 'e', 'l', 'o'}"
      }
    ],
    "constraints": [
      "Use set on a string"
    ],
    "hints": [
      "print(set(\"hello\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "{'h', 'e', 'l', 'o'}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p01",
    "topicId": "m7-t2",
    "slug": "add",
    "title": "Updating Sets: add()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set s={1}, s.add(2), print s.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".add()"
        },
        {
          "type": "text",
          "value": " to add one item."
        }
      ],
      "editorPlaceholder": "# add",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{1, 2}"
      }
    ],
    "constraints": [
      "Output contains 1 and 2"
    ],
    "hints": [
      "s = {1}\\ns.add(2)\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p02",
    "topicId": "m7-t2",
    "slug": "remove",
    "title": "Updating Sets: remove()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set s={1,2,3}, s.remove(2), print s.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".remove()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# remove",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{1, 3}"
      }
    ],
    "constraints": [
      "Output: {1, 3}"
    ],
    "hints": [
      "s = {1,2,3}\\ns.remove(2)\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p03",
    "topicId": "m7-t2",
    "slug": "discard",
    "title": "Updating Sets: discard()",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set s={1,2}, s.discard(3), print s.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "discard() removes if present, no error if missing."
        }
      ],
      "editorPlaceholder": "# discard",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{1, 2}"
      }
    ],
    "constraints": [
      "Output: {1, 2}"
    ],
    "hints": [
      "s = {1,2}\\ns.discard(3)\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p04",
    "topicId": "m7-t2",
    "slug": "update",
    "title": "Updating Sets: update()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set s={1}, s.update({2,3}), print s.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".update()"
        },
        {
          "type": "text",
          "value": " to add multiple."
        }
      ],
      "editorPlaceholder": "# update",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "{1, 2, 3}"
      }
    ],
    "constraints": [
      "Output: {1, 2, 3}"
    ],
    "hints": [
      "s = {1}\\ns.update({2,3})\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p05",
    "topicId": "m7-t2",
    "slug": "pop-set",
    "title": "Updating Sets: pop()",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set s={1,2,3}, print s.pop() — removes arbitrary item.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "pop() removes and returns any item."
        }
      ],
      "editorPlaceholder": "# pop",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Print one item from set"
    ],
    "hints": [
      "s = {1,2,3}\\nprint(s.pop())"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p06",
    "topicId": "m7-t2",
    "slug": "clear-set",
    "title": "Updating Sets: clear()",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set s={1,2}, s.clear(), print s.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "clear() empties the set."
        }
      ],
      "editorPlaceholder": "# clear",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "set()"
      }
    ],
    "constraints": [
      "Output: set()"
    ],
    "hints": [
      "s = {1,2}\\ns.clear()\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "set()",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t2-p07",
    "topicId": "m7-t2",
    "slug": "add-dup",
    "title": "Updating Sets: Add Duplicate",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set s={1,2}, s.add(2), print s.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Adding duplicate has no effect."
        }
      ],
      "editorPlaceholder": "# add dup",
      "successDetail": "Correct! Sets ignore duplicates."
    },
    "examples": [
      {
        "output": "{1, 2}"
      }
    ],
    "constraints": [
      "Output: {1, 2}"
    ],
    "hints": [
      "s = {1,2}\\ns.add(2)\\nprint(s)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p01",
    "topicId": "m7-t3",
    "slug": "union",
    "title": "Set Operations: Union |",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print {1,2} | {2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2} | {2,3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2} | {2,3} = {1, 2, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2} | {2,3}"
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
          "expected": "{1, 2, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 2, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 2, 3}"
    ],
    "hints": [
      "print({1,2} | {2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p02",
    "topicId": "m7-t3",
    "slug": "intersection",
    "title": "Set Operations: Intersection &",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print {1,2,3} & {2,3,4}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2,3} & {2,3,4}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2,3} & {2,3,4} = {2, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2,3} & {2,3,4}"
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
          "expected": "{2, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{2, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {2, 3}"
    ],
    "hints": [
      "print({1,2,3} & {2,3,4})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "{2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p03",
    "topicId": "m7-t3",
    "slug": "difference",
    "title": "Set Operations: Difference -",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print {1,2,3} - {2}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2,3} - {2}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2,3} - {2} = {1, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2,3} - {2}"
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
          "expected": "{1, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 3}"
    ],
    "hints": [
      "print({1,2,3} - {2})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p04",
    "topicId": "m7-t3",
    "slug": "symmetric",
    "title": "Set Operations: Symmetric ^",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print {1,2} ^ {2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2} ^ {2,3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2} ^ {2,3} = {1, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2} ^ {2,3}"
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
          "expected": "{1, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 3}"
    ],
    "hints": [
      "print({1,2} ^ {2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p05",
    "topicId": "m7-t3",
    "slug": "subset",
    "title": "Set Operations: Subset <=",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print {1,2} <= {1,2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2} <= {1,2,3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2} <= {1,2,3} = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2} <= {1,2,3}"
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
      "print({1,2} <= {1,2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p06",
    "topicId": "m7-t3",
    "slug": "superset",
    "title": "Set Operations: Superset >=",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print {1,2,3} >= {1,2}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2,3} >= {1,2}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2,3} >= {1,2} = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2,3} >= {1,2}"
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
      "print({1,2,3} >= {1,2})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t3-p07",
    "topicId": "m7-t3",
    "slug": "disjoint",
    "title": "Set Operations: Disjoint isdisjoint",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print {1,2}.isdisjoint({3,4}).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2}.isdisjoint({3,4})",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2}.isdisjoint({3,4}) = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2}.isdisjoint({3,4})"
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
      "print({1,2}.isdisjoint({3,4}))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p01",
    "topicId": "m7-t4",
    "slug": "union",
    "title": "Set Methods: Union |",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print {1,2} | {2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2} | {2,3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2} | {2,3} = {1, 2, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2} | {2,3}"
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
          "expected": "{1, 2, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 2, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 2, 3}"
    ],
    "hints": [
      "print({1,2} | {2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p02",
    "topicId": "m7-t4",
    "slug": "intersection",
    "title": "Set Methods: Intersection &",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print {1,2,3} & {2,3,4}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2,3} & {2,3,4}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2,3} & {2,3,4} = {2, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2,3} & {2,3,4}"
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
          "expected": "{2, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{2, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {2, 3}"
    ],
    "hints": [
      "print({1,2,3} & {2,3,4})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "{2, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p03",
    "topicId": "m7-t4",
    "slug": "difference",
    "title": "Set Methods: Difference -",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print {1,2,3} - {2}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2,3} - {2}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2,3} - {2} = {1, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2,3} - {2}"
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
          "expected": "{1, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 3}"
    ],
    "hints": [
      "print({1,2,3} - {2})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p04",
    "topicId": "m7-t4",
    "slug": "symmetric",
    "title": "Set Methods: Symmetric ^",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print {1,2} ^ {2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2} ^ {2,3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2} ^ {2,3} = {1, 3}.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2} ^ {2,3}"
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
          "expected": "{1, 3}",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "{1, 3}"
      }
    ],
    "constraints": [
      "Output must be exactly: {1, 3}"
    ],
    "hints": [
      "print({1,2} ^ {2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "{1, 3}",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p05",
    "topicId": "m7-t4",
    "slug": "subset",
    "title": "Set Methods: Subset <=",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print {1,2} <= {1,2,3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2} <= {1,2,3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2} <= {1,2,3} = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2} <= {1,2,3}"
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
      "print({1,2} <= {1,2,3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p06",
    "topicId": "m7-t4",
    "slug": "superset",
    "title": "Set Methods: Superset >=",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print {1,2,3} >= {1,2}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2,3} >= {1,2}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2,3} >= {1,2} = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2,3} >= {1,2}"
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
      "print({1,2,3} >= {1,2})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m7-t4-p07",
    "topicId": "m7-t4",
    "slug": "disjoint",
    "title": "Set Methods: Disjoint isdisjoint",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print {1,2}.isdisjoint({3,4}).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# {1,2}.isdisjoint({3,4})",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! {1,2}.isdisjoint({3,4}) = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "{1,2}.isdisjoint({3,4})"
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
      "print({1,2}.isdisjoint({3,4}))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  }
];
