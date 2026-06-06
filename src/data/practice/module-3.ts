import type { PracticeProblem } from "@/lib/types";

export const module3Practice: PracticeProblem[] = [
  {
    "id": "m3-t1-p01",
    "topicId": "m3-t1",
    "slug": "add",
    "title": "Arithmetic Operators: Addition",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print 10 + 3.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 10 + 3",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 10 + 3 = 13.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "10 + 3"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 13",
          "kind": "print-value",
          "index": 0,
          "expected": "13"
        }
      ]
    },
    "examples": [
      {
        "output": "13"
      }
    ],
    "constraints": [
      "Output must be exactly: 13"
    ],
    "hints": [
      "print(10 + 3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "13",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t1-p02",
    "topicId": "m3-t1",
    "slug": "subtract",
    "title": "Arithmetic Operators: Subtraction",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print 20 - 5.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 20 - 5",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 20 - 5 = 15.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "20 - 5"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 15",
          "kind": "print-value",
          "index": 0,
          "expected": "15"
        }
      ]
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Output must be exactly: 15"
    ],
    "hints": [
      "print(20 - 5)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t1-p03",
    "topicId": "m3-t1",
    "slug": "multiply",
    "title": "Arithmetic Operators: Multiplication",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print 4 * 6.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 4 * 6",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 4 * 6 = 24.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "4 * 6"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 24",
          "kind": "print-value",
          "index": 0,
          "expected": "24"
        }
      ]
    },
    "examples": [
      {
        "output": "24"
      }
    ],
    "constraints": [
      "Output must be exactly: 24"
    ],
    "hints": [
      "print(4 * 6)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "24",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t1-p04",
    "topicId": "m3-t1",
    "slug": "divide",
    "title": "Arithmetic Operators: Division",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Print 20 / 4.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 20 / 4",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 20 / 4 = 5.0.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "20 / 4"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 5.0",
          "kind": "print-value",
          "index": 0,
          "expected": "5.0"
        }
      ]
    },
    "examples": [
      {
        "output": "5.0"
      }
    ],
    "constraints": [
      "Output must be exactly: 5.0"
    ],
    "hints": [
      "print(20 / 4)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "5.0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t1-p05",
    "topicId": "m3-t1",
    "slug": "floor-div",
    "title": "Arithmetic Operators: Floor Division",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print 17 // 5 (whole number division).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 17 // 5",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 17 // 5 = 3.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "17 // 5"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 3",
          "kind": "print-value",
          "index": 0,
          "expected": "3"
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
      "print(17 // 5)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t1-p06",
    "topicId": "m3-t1",
    "slug": "modulo",
    "title": "Arithmetic Operators: Modulo",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print 17 % 5 (remainder).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 17 % 5",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 17 % 5 = 2.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "17 % 5"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 2",
          "kind": "print-value",
          "index": 0,
          "expected": "2"
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
      "print(17 % 5)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t1-p07",
    "topicId": "m3-t1",
    "slug": "power",
    "title": "Arithmetic Operators: Exponent",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print 2 ** 3 (2 to the power of 3).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 2 ** 3",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 2 ** 3 = 8.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "2 ** 3"
        },
        {
          "type": "text",
          "value": " inside print()."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 8",
          "kind": "print-value",
          "index": 0,
          "expected": "8"
        }
      ]
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output must be exactly: 8"
    ],
    "hints": [
      "print(2 ** 3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p01",
    "topicId": "m3-t2",
    "slug": "assign-basic",
    "title": "Assignment Operators: Basic Assignment",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set x = 10, then print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x = 10",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x = 10, x is 10.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 10, then print x."
        }
      ]
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 10"
    ],
    "hints": [
      "Start with x = a number, use x = 10, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p02",
    "topicId": "m3-t2",
    "slug": "add-assign",
    "title": "Assignment Operators: Add Assign +=",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set x = 10, then x += 5, print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x += 5",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x += 5, x is 15.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 10, then x += 5, print x."
        }
      ]
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 15"
    ],
    "hints": [
      "Start with x = a number, use x += 5, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p03",
    "topicId": "m3-t2",
    "slug": "sub-assign",
    "title": "Assignment Operators: Subtract Assign -=",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set x = 10, then x -= 3, print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x -= 3",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x -= 3, x is 7.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 10, then x -= 3, print x."
        }
      ]
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 7"
    ],
    "hints": [
      "Start with x = a number, use x -= 3, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p04",
    "topicId": "m3-t2",
    "slug": "mul-assign",
    "title": "Assignment Operators: Multiply Assign *=",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set x = 4, then x *= 3, print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x *= 3",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x *= 3, x is 12.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 4, then x *= 3, print x."
        }
      ]
    },
    "examples": [
      {
        "output": "12"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 12"
    ],
    "hints": [
      "Start with x = a number, use x *= 3, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "12",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p05",
    "topicId": "m3-t2",
    "slug": "div-assign",
    "title": "Assignment Operators: Divide Assign /=",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set x = 20, then x /= 4, print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x /= 4",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x /= 4, x is 5.0.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 20, then x /= 4, print x."
        }
      ]
    },
    "examples": [
      {
        "output": "5.0"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 5.0"
    ],
    "hints": [
      "Start with x = a number, use x /= 4, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "5.0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p06",
    "topicId": "m3-t2",
    "slug": "mod-assign",
    "title": "Assignment Operators: Modulo Assign %=",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set x = 17, then x %= 5, print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x %= 5",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x %= 5, x is 2.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 17, then x %= 5, print x."
        }
      ]
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 2"
    ],
    "hints": [
      "Start with x = a number, use x %= 5, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t2-p07",
    "topicId": "m3-t2",
    "slug": "pow-assign",
    "title": "Assignment Operators: Power Assign **=",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set x = 2, then x **= 3, print x.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use x **= 3",
      "emptyMessage": "Assign to x, apply the operator, then print x.",
      "successDetail": "Correct! After x **= 3, x is 8.",
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set x = 2, then x **= 3, print x."
        }
      ]
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Use variable x",
      "Final output: 8"
    ],
    "hints": [
      "Start with x = a number, use x **= 3, then print(x)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p01",
    "topicId": "m3-t3",
    "slug": "gt",
    "title": "Comparison Operators: Greater Than",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print whether 5 > 3 is true.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 5 > 3",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 > 3 is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "5 > 3"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(5 > 3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p02",
    "topicId": "m3-t3",
    "slug": "eq",
    "title": "Comparison Operators: Equal To",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print whether 2 == 2 is true.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 2 == 2",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 2 == 2 is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "2 == 2"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(2 == 2)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p03",
    "topicId": "m3-t3",
    "slug": "neq",
    "title": "Comparison Operators: Not Equal",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print whether 1 != 0 is true.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 1 != 0",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 1 != 0 is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "1 != 0"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(1 != 0)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p04",
    "topicId": "m3-t3",
    "slug": "lte",
    "title": "Comparison Operators: Less or Equal",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print whether 4 <= 4 is true.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 4 <= 4",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 4 <= 4 is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "4 <= 4"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(4 <= 4)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p05",
    "topicId": "m3-t3",
    "slug": "lt-false",
    "title": "Comparison Operators: Less Than False",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print whether 10 < 5 is false.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 10 < 5",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 10 < 5 is False.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "10 < 5"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints False",
          "kind": "print-value",
          "index": 0,
          "expected": "False"
        }
      ]
    },
    "examples": [
      {
        "output": "False"
      }
    ],
    "constraints": [
      "Output must be exactly: False"
    ],
    "hints": [
      "print(10 < 5)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "False",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p06",
    "topicId": "m3-t3",
    "slug": "gte",
    "title": "Comparison Operators: Greater or Equal",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print whether 7 >= 7 is true.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print 7 >= 7",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 7 >= 7 is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "7 >= 7"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(7 >= 7)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t3-p07",
    "topicId": "m3-t3",
    "slug": "compare-vars",
    "title": "Comparison Operators: Compare Variables",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set a=10, b=5, print a > b.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print a > b",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! a > b is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the result of "
        },
        {
          "type": "code",
          "value": "a > b"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(a > b)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p01",
    "topicId": "m3-t4",
    "slug": "and-true",
    "title": "Logical Operators: and True",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print True and True.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# True and True",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! True and True = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "True and True"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(True and True)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p02",
    "topicId": "m3-t4",
    "slug": "and-false",
    "title": "Logical Operators: and False",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print True and False.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# True and False",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! True and False = False.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "True and False"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints False",
          "kind": "print-value",
          "index": 0,
          "expected": "False"
        }
      ]
    },
    "examples": [
      {
        "output": "False"
      }
    ],
    "constraints": [
      "Output must be exactly: False"
    ],
    "hints": [
      "print(True and False)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "False",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p03",
    "topicId": "m3-t4",
    "slug": "or-true",
    "title": "Logical Operators: or True",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print False or True.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# False or True",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! False or True = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "False or True"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(False or True)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p04",
    "topicId": "m3-t4",
    "slug": "not-false",
    "title": "Logical Operators: not False",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print not False.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# not False",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! not False = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "not False"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(not False)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p05",
    "topicId": "m3-t4",
    "slug": "not-true",
    "title": "Logical Operators: not True",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print not True.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# not True",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! not True = False.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "not True"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints False",
          "kind": "print-value",
          "index": 0,
          "expected": "False"
        }
      ]
    },
    "examples": [
      {
        "output": "False"
      }
    ],
    "constraints": [
      "Output must be exactly: False"
    ],
    "hints": [
      "print(not True)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "False",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p06",
    "topicId": "m3-t4",
    "slug": "and-compare",
    "title": "Logical Operators: and with Comparison",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print 5 > 3 and 2 < 4.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 > 3 and 2 < 4",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 > 3 and 2 < 4 = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 > 3 and 2 < 4"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(5 > 3 and 2 < 4)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t4-p07",
    "topicId": "m3-t4",
    "slug": "or-compare",
    "title": "Logical Operators: or with Comparison",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print 5 > 10 or 3 == 3.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 > 10 or 3 == 3",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 > 10 or 3 == 3 = True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 > 10 or 3 == 3"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(5 > 10 or 3 == 3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p01",
    "topicId": "m3-t5",
    "slug": "is-none",
    "title": "Identity Operators: is None",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set x = None, print x is None.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# x is None",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! is checks same object.",
      "introSegments": [
        {
          "type": "text",
          "value": "Check if "
        },
        {
          "type": "code",
          "value": "x is None"
        },
        {
          "type": "text",
          "value": " when x = None."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
        }
      ],
      "requiresVariables": [
        "x"
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
      "x = None\\nprint(x is None)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p02",
    "topicId": "m3-t5",
    "slug": "is-same-list",
    "title": "Identity Operators: Same List Reference",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set a = [1,2]; b = a; print a is b.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# same reference",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Same object, same reference.",
      "introSegments": [
        {
          "type": "text",
          "value": "When b points to the same list as a, "
        },
        {
          "type": "code",
          "value": "a is b"
        },
        {
          "type": "text",
          "value": " is True."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "a = [1, 2]\\nb = a\\nprint(a is b)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p03",
    "topicId": "m3-t5",
    "slug": "is-diff-list",
    "title": "Identity Operators: Different Lists",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set a = [1]; b = [1]; print a is b.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# different objects",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Different objects in memory.",
      "introSegments": [
        {
          "type": "text",
          "value": "Two separate lists with same values: "
        },
        {
          "type": "code",
          "value": "a is b"
        },
        {
          "type": "text",
          "value": " is False."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints False",
          "kind": "print-value",
          "index": 0,
          "expected": "False"
        }
      ]
    },
    "examples": [
      {
        "output": "False"
      }
    ],
    "constraints": [
      "Output must be exactly: False"
    ],
    "hints": [
      "a = [1]\\nb = [1]\\nprint(a is b)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "False",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p04",
    "topicId": "m3-t5",
    "slug": "is-not",
    "title": "Identity Operators: is not",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set x = 5, print x is not None.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# is not None",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! is not is the opposite of is.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "is not"
        },
        {
          "type": "text",
          "value": " to check x is not None."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "x = 5\\nprint(x is not None)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p05",
    "topicId": "m3-t5",
    "slug": "is-int",
    "title": "Identity Operators: Small int is",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print 5 is 5.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 is 5",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Python may reuse small integers.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 is 5"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(5 is 5)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p06",
    "topicId": "m3-t5",
    "slug": "is-not-diff",
    "title": "Identity Operators: is not Different",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set a = [1,2]; b = [1,2]; print a is not b.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# is not b",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Same values, different objects.",
      "introSegments": [
        {
          "type": "text",
          "value": "Different list objects: "
        },
        {
          "type": "code",
          "value": "a is not b"
        },
        {
          "type": "text",
          "value": " is True."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "a = [1, 2]\\nb = [1, 2]\\nprint(a is not b)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t5-p07",
    "topicId": "m3-t5",
    "slug": "none-check-fn",
    "title": "Identity Operators: None in Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define f() returning None, print f() is None.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# function returns None",
      "emptyMessage": "Define f() that returns None, check with is None.",
      "successDetail": "Correct! None checks use is, not ==.",
      "requiresFunction": "f",
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "f()"
        },
        {
          "type": "text",
          "value": " returning None, print "
        },
        {
          "type": "code",
          "value": "f() is None"
        },
        {
          "type": "text",
          "value": "."
        }
      ]
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Define function f",
      "Return None",
      "Print f() is None"
    ],
    "hints": [
      "def f():\\n    return None\\nprint(f() is None)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p01",
    "topicId": "m3-t6",
    "slug": "in-str",
    "title": "Membership Operators: in String",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print \"a\" in \"abc\".",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# \"a\" in \"abc\"",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! \"a\" in \"abc\" is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "\"a\" in \"abc\""
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(\"a\" in \"abc\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p01-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p02",
    "topicId": "m3-t6",
    "slug": "not-in-str",
    "title": "Membership Operators: not in String",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print \"z\" not in \"abc\".",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# \"z\" not in \"abc\"",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! \"z\" not in \"abc\" is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "\"z\" not in \"abc\""
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(\"z\" not in \"abc\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p02-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p03",
    "topicId": "m3-t6",
    "slug": "in-list",
    "title": "Membership Operators: in List",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print 2 in [1, 2, 3].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 2 in [1, 2, 3]",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 2 in [1, 2, 3] is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "2 in [1, 2, 3]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(2 in [1, 2, 3])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p03-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p04",
    "topicId": "m3-t6",
    "slug": "not-in-list",
    "title": "Membership Operators: not in List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print 5 not in [1, 2, 3].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 not in [1, 2, 3]",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 not in [1, 2, 3] is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 not in [1, 2, 3]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(5 not in [1, 2, 3])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p04-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p05",
    "topicId": "m3-t6",
    "slug": "in-set",
    "title": "Membership Operators: in Set",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print 3 in {1, 2, 3}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 3 in {1, 2, 3}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 3 in {1, 2, 3} is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "3 in {1, 2, 3}"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(3 in {1, 2, 3})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p06",
    "topicId": "m3-t6",
    "slug": "in-dict",
    "title": "Membership Operators: in Dictionary",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print \"name\" in {\"name\": \"Ana\", \"age\": 20}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# \"name\" in {\"name\": \"Ana\", \"age\": 20}",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! \"name\" in {\"name\": \"Ana\", \"age\": 20} is True.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "\"name\" in {\"name\": \"Ana\", \"age\": 20}"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints True",
          "kind": "print-value",
          "index": 0,
          "expected": "True"
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
      "print(\"name\" in {\"name\": \"Ana\", \"age\": 20})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p06-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t6-p07",
    "topicId": "m3-t6",
    "slug": "in-loop",
    "title": "Membership Operators: Check in Loop",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print 2 in [1,2,3] and 5 in [1,2,3] on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# membership checks",
      "emptyMessage": "Print two in/not in checks on separate lines.",
      "successDetail": "Correct! in works on lists, strings, and more.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "2 in [1,2,3]"
        },
        {
          "type": "text",
          "value": " then "
        },
        {
          "type": "code",
          "value": "5 in [1,2,3]"
        },
        {
          "type": "text",
          "value": " on separate lines."
        }
      ]
    },
    "examples": [
      {
        "output": "True\nFalse"
      }
    ],
    "constraints": [
      "Two print() calls",
      "Line 1: True",
      "Line 2: False"
    ],
    "hints": [
      "print(2 in [1, 2, 3])\\nprint(5 in [1, 2, 3])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t6-p07-t1",
        "label": "Sample test",
        "expectedStdout": "True\nFalse",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p01",
    "topicId": "m3-t7",
    "slug": "and-bit",
    "title": "Bitwise Operators: Bitwise AND &",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print 5 & 1.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 & 1",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 & 1 = 1.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 & 1"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 1",
          "kind": "print-value",
          "index": 0,
          "expected": "1"
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
      "print(5 & 1)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p01-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p02",
    "topicId": "m3-t7",
    "slug": "or-bit",
    "title": "Bitwise Operators: Bitwise OR |",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print 5 | 2.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 | 2",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 | 2 = 7.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 | 2"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 7",
          "kind": "print-value",
          "index": 0,
          "expected": "7"
        }
      ]
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Output must be exactly: 7"
    ],
    "hints": [
      "print(5 | 2)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p02-t1",
        "label": "Sample test",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p03",
    "topicId": "m3-t7",
    "slug": "xor-bit",
    "title": "Bitwise Operators: Bitwise XOR ^",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print 5 ^ 1.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 5 ^ 1",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 5 ^ 1 = 4.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "5 ^ 1"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 4",
          "kind": "print-value",
          "index": 0,
          "expected": "4"
        }
      ]
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Output must be exactly: 4"
    ],
    "hints": [
      "print(5 ^ 1)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p03-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p04",
    "topicId": "m3-t7",
    "slug": "left-shift",
    "title": "Bitwise Operators: Left Shift <<",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print 3 << 1.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 3 << 1",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 3 << 1 = 6.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "3 << 1"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 6",
          "kind": "print-value",
          "index": 0,
          "expected": "6"
        }
      ]
    },
    "examples": [
      {
        "output": "6"
      }
    ],
    "constraints": [
      "Output must be exactly: 6"
    ],
    "hints": [
      "print(3 << 1)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p04-t1",
        "label": "Sample test",
        "expectedStdout": "6",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p05",
    "topicId": "m3-t7",
    "slug": "right-shift",
    "title": "Bitwise Operators: Right Shift >>",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print 8 >> 1.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 8 >> 1",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 8 >> 1 = 4.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "8 >> 1"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 4",
          "kind": "print-value",
          "index": 0,
          "expected": "4"
        }
      ]
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Output must be exactly: 4"
    ],
    "hints": [
      "print(8 >> 1)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p05-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p06",
    "topicId": "m3-t7",
    "slug": "and-mask",
    "title": "Bitwise Operators: AND Mask",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print 12 & 10.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# 12 & 10",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! 12 & 10 = 8.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "12 & 10"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 8",
          "kind": "print-value",
          "index": 0,
          "expected": "8"
        }
      ]
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output must be exactly: 8"
    ],
    "hints": [
      "print(12 & 10)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p06-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m3-t7-p07",
    "topicId": "m3-t7",
    "slug": "combo-bit",
    "title": "Bitwise Operators: Combined Bitwise",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print (5 & 3) | 2.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# (5 & 3) | 2",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! (5 & 3) | 2 = 3.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "(5 & 3) | 2"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "label": "prints 3",
          "kind": "print-value",
          "index": 0,
          "expected": "3"
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
      "print((5 & 3) | 2)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m3-t7-p07-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  }
];
