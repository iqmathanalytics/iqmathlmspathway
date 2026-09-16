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
    "description": "Create s = {1, 2, 3} and print sorted(s) so the order is stable.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create s = {1, 2, 3} and print sorted(s) so the order is stable."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! sorted() turns the set into a list in number order.",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2, 3]"
    ],
    "hints": [
      "s = {1, 2, 3}\nprint(sorted(s))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1, 2, 3}\nprint(sorted(s))",
    "approach": "Create s = {1, 2, 3} and print sorted(s) so the order is stable.\n\nReference solution:\ns = {1, 2, 3}\nprint(sorted(s))"
  },
  {
    "id": "m7-t1-p02",
    "topicId": "m7-t1",
    "slug": "set-function",
    "title": "Set Syntax: set() Function",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print sorted(set([1, 2, 2, 3])). Duplicates are removed.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted(set([1, 2, 2, 3])). Duplicates are removed."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2, 3]"
    ],
    "hints": [
      "print(sorted(set([1, 2, 2, 3])))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted(set([1, 2, 2, 3])))",
    "approach": "Print sorted(set([1, 2, 2, 3])). Duplicates are removed.\n\nReference solution:\nprint(sorted(set([1, 2, 2, 3])))"
  },
  {
    "id": "m7-t1-p03",
    "topicId": "m7-t1",
    "slug": "unique-len",
    "title": "Set Syntax: Unique Values",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print len({1, 1, 2, 2, 3}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print len({1, 1, 2, 2, 3})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
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
      "A set keeps each value once, so the length is 3."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(len({1, 1, 2, 2, 3}))",
    "approach": "Print len({1, 1, 2, 2, 3}).\n\nReference solution:\nprint(len({1, 1, 2, 2, 3}))"
  },
  {
    "id": "m7-t1-p04",
    "topicId": "m7-t1",
    "slug": "empty-set",
    "title": "Set Syntax: Empty Set",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Create s = set() and print len(s). Use set(), not {}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create s = set() and print len(s). Use set(), not {}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
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
      "{} is an empty dict. An empty set is set()."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = set()\nprint(len(s))",
    "approach": "Create s = set() and print len(s). Use set(), not {}.\n\nReference solution:\ns = set()\nprint(len(s))"
  },
  {
    "id": "m7-t1-p05",
    "topicId": "m7-t1",
    "slug": "membership",
    "title": "Set Syntax: Membership",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print 2 in {1, 2, 3}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print 2 in {1, 2, 3}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      "print(2 in {1, 2, 3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(2 in {1, 2, 3})",
    "approach": "Print 2 in {1, 2, 3}.\n\nReference solution:\nprint(2 in {1, 2, 3})"
  },
  {
    "id": "m7-t1-p06",
    "topicId": "m7-t1",
    "slug": "mixed-types",
    "title": "Set Syntax: Mixed Types",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print 1 in {1, \"a\"} — sets can mix types.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print 1 in {1, \"a\"} — sets can mix types."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      "print(1 in {1, \"a\"})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(1 in {1, \"a\"})",
    "approach": "Print 1 in {1, \"a\"} — sets can mix types.\n\nReference solution:\nprint(1 in {1, \"a\"})"
  },
  {
    "id": "m7-t1-p07",
    "topicId": "m7-t1",
    "slug": "set-from-string",
    "title": "Set Syntax: Set from String",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print sorted(set(\"hello\")) — unique letters in order.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted(set(\"hello\")) — unique letters in order."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "['e', 'h', 'l', 'o']"
      }
    ],
    "constraints": [
      "Output must match: ['e', 'h', 'l', 'o']"
    ],
    "hints": [
      "print(sorted(set(\"hello\")))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "['e', 'h', 'l', 'o']",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "['e', 'h', 'l', 'o']",
        "visibility": "public"
      },
      {
        "id": "m7-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "['e', 'h', 'l', 'o']",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted(set(\"hello\")))",
    "approach": "Print sorted(set(\"hello\")) — unique letters in order.\n\nReference solution:\nprint(sorted(set(\"hello\")))"
  },
  {
    "id": "m7-t2-p01",
    "topicId": "m7-t2",
    "slug": "add",
    "title": "Updating Sets: add()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set s = {1}, then s.add(2), then print sorted(s).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {1}, then s.add(2), then print sorted(s)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "[1, 2]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2]"
    ],
    "hints": [
      "s = {1}\ns.add(2)\nprint(sorted(s))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1}\ns.add(2)\nprint(sorted(s))",
    "approach": "Set s = {1}, then s.add(2), then print sorted(s).\n\nReference solution:\ns = {1}\ns.add(2)\nprint(sorted(s))"
  },
  {
    "id": "m7-t2-p02",
    "topicId": "m7-t2",
    "slug": "remove",
    "title": "Updating Sets: remove()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set s = {1, 2, 3}, then s.remove(2), then print sorted(s).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {1, 2, 3}, then s.remove(2), then print sorted(s)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "[1, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 3]"
    ],
    "hints": [
      "remove() deletes a value that must already be in the set."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1, 2, 3}\ns.remove(2)\nprint(sorted(s))",
    "approach": "Set s = {1, 2, 3}, then s.remove(2), then print sorted(s).\n\nReference solution:\ns = {1, 2, 3}\ns.remove(2)\nprint(sorted(s))"
  },
  {
    "id": "m7-t2-p03",
    "topicId": "m7-t2",
    "slug": "discard",
    "title": "Updating Sets: discard()",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set s = {1, 2}, then s.discard(3), then print sorted(s).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {1, 2}, then s.discard(3), then print sorted(s)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "[1, 2]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2]"
    ],
    "hints": [
      "discard() does nothing if the value is missing — no error."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1, 2}\ns.discard(3)\nprint(sorted(s))",
    "approach": "Set s = {1, 2}, then s.discard(3), then print sorted(s).\n\nReference solution:\ns = {1, 2}\ns.discard(3)\nprint(sorted(s))"
  },
  {
    "id": "m7-t2-p04",
    "topicId": "m7-t2",
    "slug": "update",
    "title": "Updating Sets: update()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set s = {1}, then s.update({2, 3}), then print sorted(s).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {1}, then s.update({2, 3}), then print sorted(s)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2, 3]"
    ],
    "hints": [
      "update() adds every item from another set."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1}\ns.update({2, 3})\nprint(sorted(s))",
    "approach": "Set s = {1}, then s.update({2, 3}), then print sorted(s).\n\nReference solution:\ns = {1}\ns.update({2, 3})\nprint(sorted(s))"
  },
  {
    "id": "m7-t2-p05",
    "topicId": "m7-t2",
    "slug": "pop-one",
    "title": "Updating Sets: pop()",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set s = {9}, then print s.pop(). A one-item set makes pop() predictable.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {9}, then print s.pop(). A one-item set makes pop() predictable."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "9"
      }
    ],
    "constraints": [
      "Output must match: 9"
    ],
    "hints": [
      "pop() removes and returns an arbitrary item. With one item, the result is that item."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "9",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "9",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {9}\nprint(s.pop())",
    "approach": "Set s = {9}, then print s.pop(). A one-item set makes pop() predictable.\n\nReference solution:\ns = {9}\nprint(s.pop())"
  },
  {
    "id": "m7-t2-p06",
    "topicId": "m7-t2",
    "slug": "clear",
    "title": "Updating Sets: clear()",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set s = {1, 2}, then s.clear(), then print s.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {1, 2}, then s.clear(), then print s."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "set()"
      }
    ],
    "constraints": [
      "Output must match: set()"
    ],
    "hints": [
      "An empty set prints as set(), not {}."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "set()",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "set()",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1, 2}\ns.clear()\nprint(s)",
    "approach": "Set s = {1, 2}, then s.clear(), then print s.\n\nReference solution:\ns = {1, 2}\ns.clear()\nprint(s)"
  },
  {
    "id": "m7-t2-p07",
    "topicId": "m7-t2",
    "slug": "add-duplicate",
    "title": "Updating Sets: Add Duplicate",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set s = {1, 2}, then s.add(2), then print sorted(s).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set s = {1, 2}, then s.add(2), then print sorted(s)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "[1, 2]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2]"
    ],
    "hints": [
      "Adding a value that is already present leaves the set unchanged."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m7-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ],
    "solutionCode": "s = {1, 2}\ns.add(2)\nprint(sorted(s))",
    "approach": "Set s = {1, 2}, then s.add(2), then print sorted(s).\n\nReference solution:\ns = {1, 2}\ns.add(2)\nprint(sorted(s))"
  },
  {
    "id": "m7-t3-p01",
    "topicId": "m7-t3",
    "slug": "union",
    "title": "Set Operations: Union |",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print sorted({1, 2} | {2, 3}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2} | {2, 3})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2, 3]"
    ],
    "hints": [
      "| is union: items in either set."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2} | {2, 3}))",
    "approach": "Print sorted({1, 2} | {2, 3}).\n\nReference solution:\nprint(sorted({1, 2} | {2, 3}))"
  },
  {
    "id": "m7-t3-p02",
    "topicId": "m7-t3",
    "slug": "intersection",
    "title": "Set Operations: Intersection &",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print sorted({1, 2, 3} & {2, 3, 4}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2, 3} & {2, 3, 4})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [2, 3]"
    ],
    "hints": [
      "& is intersection: items in both sets."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2, 3} & {2, 3, 4}))",
    "approach": "Print sorted({1, 2, 3} & {2, 3, 4}).\n\nReference solution:\nprint(sorted({1, 2, 3} & {2, 3, 4}))"
  },
  {
    "id": "m7-t3-p03",
    "topicId": "m7-t3",
    "slug": "difference",
    "title": "Set Operations: Difference -",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print sorted({1, 2, 3} - {2}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2, 3} - {2})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 3]"
    ],
    "hints": [
      "- keeps items in the first set that are not in the second."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2, 3} - {2}))",
    "approach": "Print sorted({1, 2, 3} - {2}).\n\nReference solution:\nprint(sorted({1, 2, 3} - {2}))"
  },
  {
    "id": "m7-t3-p04",
    "topicId": "m7-t3",
    "slug": "symmetric",
    "title": "Set Operations: Symmetric ^",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print sorted({1, 2} ^ {2, 3}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2} ^ {2, 3})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 3]"
    ],
    "hints": [
      "^ keeps items in one set or the other, but not both."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2} ^ {2, 3}))",
    "approach": "Print sorted({1, 2} ^ {2, 3}).\n\nReference solution:\nprint(sorted({1, 2} ^ {2, 3}))"
  },
  {
    "id": "m7-t3-p05",
    "topicId": "m7-t3",
    "slug": "subset",
    "title": "Set Operations: Subset <=",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print {1, 2} <= {1, 2, 3}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {1, 2} <= {1, 2, 3}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      "<= is True when every item of the left set is in the right set."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({1, 2} <= {1, 2, 3})",
    "approach": "Print {1, 2} <= {1, 2, 3}.\n\nReference solution:\nprint({1, 2} <= {1, 2, 3})"
  },
  {
    "id": "m7-t3-p06",
    "topicId": "m7-t3",
    "slug": "superset",
    "title": "Set Operations: Superset >=",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print {1, 2, 3} >= {1, 2}.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {1, 2, 3} >= {1, 2}."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      ">= is True when the left set contains every item of the right set."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({1, 2, 3} >= {1, 2})",
    "approach": "Print {1, 2, 3} >= {1, 2}.\n\nReference solution:\nprint({1, 2, 3} >= {1, 2})"
  },
  {
    "id": "m7-t3-p07",
    "topicId": "m7-t3",
    "slug": "disjoint",
    "title": "Set Operations: isdisjoint",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print {1, 2}.isdisjoint({3, 4}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {1, 2}.isdisjoint({3, 4})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      "isdisjoint is True when the sets share no items."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({1, 2}.isdisjoint({3, 4}))",
    "approach": "Print {1, 2}.isdisjoint({3, 4}).\n\nReference solution:\nprint({1, 2}.isdisjoint({3, 4}))"
  },
  {
    "id": "m7-t4-p01",
    "topicId": "m7-t4",
    "slug": "union-method",
    "title": "Set Methods: union()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print sorted({1, 2}.union({2, 3})).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2}.union({2, 3}))."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2, 3]"
    ],
    "hints": [
      "union() is the method form of |."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2}.union({2, 3})))",
    "approach": "Print sorted({1, 2}.union({2, 3})).\n\nReference solution:\nprint(sorted({1, 2}.union({2, 3})))"
  },
  {
    "id": "m7-t4-p02",
    "topicId": "m7-t4",
    "slug": "intersection-method",
    "title": "Set Methods: intersection()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print sorted({1, 2, 3}.intersection({2, 3, 4})).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2, 3}.intersection({2, 3, 4}))."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [2, 3]"
    ],
    "hints": [
      "intersection() is the method form of &."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2, 3}.intersection({2, 3, 4})))",
    "approach": "Print sorted({1, 2, 3}.intersection({2, 3, 4})).\n\nReference solution:\nprint(sorted({1, 2, 3}.intersection({2, 3, 4})))"
  },
  {
    "id": "m7-t4-p03",
    "topicId": "m7-t4",
    "slug": "difference-method",
    "title": "Set Methods: difference()",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print sorted({1, 2, 3}.difference({2})).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2, 3}.difference({2}))."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 3]"
    ],
    "hints": [
      "difference() is the method form of -."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2, 3}.difference({2})))",
    "approach": "Print sorted({1, 2, 3}.difference({2})).\n\nReference solution:\nprint(sorted({1, 2, 3}.difference({2})))"
  },
  {
    "id": "m7-t4-p04",
    "topicId": "m7-t4",
    "slug": "symmetric-method",
    "title": "Set Methods: symmetric_difference()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print sorted({1, 2}.symmetric_difference({2, 3})).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print sorted({1, 2}.symmetric_difference({2, 3}))."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 3]"
    ],
    "hints": [
      "symmetric_difference() is the method form of ^."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted({1, 2}.symmetric_difference({2, 3})))",
    "approach": "Print sorted({1, 2}.symmetric_difference({2, 3})).\n\nReference solution:\nprint(sorted({1, 2}.symmetric_difference({2, 3})))"
  },
  {
    "id": "m7-t4-p05",
    "topicId": "m7-t4",
    "slug": "issubset",
    "title": "Set Methods: issubset()",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print {1, 2}.issubset({1, 2, 3}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {1, 2}.issubset({1, 2, 3})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      "issubset() is the method form of <=."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({1, 2}.issubset({1, 2, 3}))",
    "approach": "Print {1, 2}.issubset({1, 2, 3}).\n\nReference solution:\nprint({1, 2}.issubset({1, 2, 3}))"
  },
  {
    "id": "m7-t4-p06",
    "topicId": "m7-t4",
    "slug": "issuperset",
    "title": "Set Methods: issuperset()",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print {1, 2, 3}.issuperset({1, 2}).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print {1, 2, 3}.issuperset({1, 2})."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output must match: True"
    ],
    "hints": [
      "issuperset() is the method form of >=."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({1, 2, 3}.issuperset({1, 2}))",
    "approach": "Print {1, 2, 3}.issuperset({1, 2}).\n\nReference solution:\nprint({1, 2, 3}.issuperset({1, 2}))"
  },
  {
    "id": "m7-t4-p07",
    "topicId": "m7-t4",
    "slug": "copy-set",
    "title": "Set Methods: copy()",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set a = {1, 2}, b = a.copy(), then b.add(3). Print sorted(a) then sorted(b) on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set a = {1, 2}, b = a.copy(), then b.add(3). Print sorted(a) then sorted(b) on separate lines."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "a",
        "b"
      ]
    },
    "examples": [
      {
        "output": "[1, 2]\n[1, 2, 3]"
      }
    ],
    "constraints": [
      "Output must match: [1, 2] / [1, 2, 3]"
    ],
    "hints": [
      "copy() makes a new set, so changing b does not change a."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m7-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2]\n[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"a\" in globals(), \"Expected a variable named a\"\nassert \"b\" in globals(), \"Expected a variable named b\"",
        "visibility": "public"
      },
      {
        "id": "m7-t4-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2]\n[1, 2, 3]",
        "visibility": "public"
      }
    ],
    "solutionCode": "a = {1, 2}\nb = a.copy()\nb.add(3)\nprint(sorted(a))\nprint(sorted(b))",
    "approach": "Set a = {1, 2}, b = a.copy(), then b.add(3). Print sorted(a) then sorted(b) on separate lines.\n\nReference solution:\na = {1, 2}\nb = a.copy()\nb.add(3)\nprint(sorted(a))\nprint(sorted(b))"
  }
];
