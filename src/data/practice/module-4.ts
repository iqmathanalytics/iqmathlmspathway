import type { PracticeProblem } from "@/lib/types";

export const module4Practice: PracticeProblem[] = [
  {
    "id": "m4-t1-p01",
    "topicId": "m4-t1",
    "slug": "dbl-quotes",
    "title": "Creating Strings: Double Quotes",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print \"Hello\" using double quotes.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print(\"Hello\")",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Double quotes create strings.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": " with double quotes."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Hello",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Hello"
      }
    ],
    "constraints": [
      "Output must be exactly: Hello"
    ],
    "hints": [
      "print(\"Hello\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t1-p02",
    "topicId": "m4-t1",
    "slug": "single-quotes",
    "title": "Creating Strings: Single Quotes",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print 'Python' using single quotes.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print('Python')",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Single quotes work too.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print Python with single quotes."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Python",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Python"
      }
    ],
    "constraints": [
      "Output must be exactly: Python"
    ],
    "hints": [
      "print('Python')"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t1-p03",
    "topicId": "m4-t1",
    "slug": "concat",
    "title": "Creating Strings: Concatenate",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print \"Py\" + \"thon\".",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# \"Py\"+\"thon\"",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! + joins strings.",
      "introSegments": [
        {
          "type": "text",
          "value": "Join "
        },
        {
          "type": "code",
          "value": "\"Py\" + \"thon\""
        },
        {
          "type": "text",
          "value": " with +."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Python",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Python"
      }
    ],
    "constraints": [
      "Output must be exactly: Python"
    ],
    "hints": [
      "print(\"Py\" + \"thon\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t1-p04",
    "topicId": "m4-t1",
    "slug": "repeat",
    "title": "Creating Strings: Repeat String",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Print \"Ha\" * 3.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# \"Ha\"*3",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! * repeats strings.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "\"Ha\" * 3"
        },
        {
          "type": "text",
          "value": " to repeat a string."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "HaHaHa",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "HaHaHa"
      }
    ],
    "constraints": [
      "Output must be exactly: HaHaHa"
    ],
    "hints": [
      "print(\"Ha\" * 3)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "HaHaHa",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t1-p05",
    "topicId": "m4-t1",
    "slug": "newline",
    "title": "Creating Strings: Newline Character",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print \"Line1\\nLine2\" (two lines).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# use \\n",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! \\n creates a new line.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "\\n"
        },
        {
          "type": "text",
          "value": " for a line break inside a string."
        }
      ]
    },
    "examples": [
      {
        "output": "Line1\nLine2"
      }
    ],
    "constraints": [
      "Output must be exactly: Line1"
    ],
    "hints": [
      "print(\"Line1\\nLine2\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Line1\nLine2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t1-p06",
    "topicId": "m4-t1",
    "slug": "len-empty",
    "title": "Creating Strings: Empty String Length",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print len(\"\") — length of empty string.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# len(\"\")",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Empty string has length 0.",
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "len(\"\")"
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
      "print(len(\"\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t1-p07",
    "topicId": "m4-t1",
    "slug": "multi-concat",
    "title": "Creating Strings: Build a Word",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print \"Data\" + \" \" + \"Science\".",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# join strings",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! You built a phrase from parts.",
      "introSegments": [
        {
          "type": "text",
          "value": "Join three strings with + to make "
        },
        {
          "type": "code",
          "value": "Data Science"
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
          "expected": "Data Science",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Data Science"
      }
    ],
    "constraints": [
      "Output must be exactly: Data Science"
    ],
    "hints": [
      "print(\"Data\" + \" \" + \"Science\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Data Science",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p01",
    "topicId": "m4-t2",
    "slug": "fstring-name",
    "title": "Formatting Strings: f-string Name",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set name=\"Ana\", print f\"Hello, {name}\".",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "name"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Set "
        },
        {
          "type": "code",
          "value": "name = \"Ana\""
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "f\"Hello, {name}\""
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# f-string greeting",
      "successDetail": "Correct! f-strings embed variables."
    },
    "examples": [
      {
        "output": "Hello, Ana"
      }
    ],
    "constraints": [
      "Use f-string",
      "Output: Hello, Ana"
    ],
    "hints": [
      "name = \"Ana\"\\nprint(f\"Hello, {name}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hello, Ana",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p02",
    "topicId": "m4-t2",
    "slug": "fstring-math",
    "title": "Formatting Strings: f-string Math",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print f\"2 + 3 = {2 + 3}\".",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# f-string math",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! f-strings can include expressions.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use an f-string with an expression inside "
        },
        {
          "type": "code",
          "value": "{}"
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
          "expected": "2 + 3 = 5",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "2 + 3 = 5"
      }
    ],
    "constraints": [
      "Output must be exactly: 2 + 3 = 5"
    ],
    "hints": [
      "print(f\"2 + 3 = {2 + 3}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "2 + 3 = 5",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p03",
    "topicId": "m4-t2",
    "slug": "format-method",
    "title": "Formatting Strings: .format()",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print \"Score: {}\".format(90).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .format()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! .format() fills in placeholders.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".format()"
        },
        {
          "type": "text",
          "value": " to insert a value."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Score: 90",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Score: 90"
      }
    ],
    "constraints": [
      "Output must be exactly: Score: 90"
    ],
    "hints": [
      "print(\"Score: {}\".format(90))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Score: 90",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p04",
    "topicId": "m4-t2",
    "slug": "fstring-two",
    "title": "Formatting Strings: Two Variables",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set x=3, y=4, print f\"{x} + {y} = {x+y}\".",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "x",
        "y"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use f-string with "
        },
        {
          "type": "code",
          "value": "x"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "y"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# two vars in f-string",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "3 + 4 = 7"
      }
    ],
    "constraints": [
      "Use f-string with x and y"
    ],
    "hints": [
      "x = 3\\ny = 4\\nprint(f\"{x} + {y} = {x+y}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "3 + 4 = 7",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p05",
    "topicId": "m4-t2",
    "slug": "format-index",
    "title": "Formatting Strings: Indexed format",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print \"{1} {0}\".format(\"World\", \"Hello\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# indexed format",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! Index 0 and 1 control order.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use indexed "
        },
        {
          "type": "code",
          "value": ".format()"
        },
        {
          "type": "text",
          "value": " placeholders."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Hello World",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Hello World"
      }
    ],
    "constraints": [
      "Output must be exactly: Hello World"
    ],
    "hints": [
      "print(\"{1} {0}\".format(\"World\", \"Hello\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Hello World",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p06",
    "topicId": "m4-t2",
    "slug": "fstring-float",
    "title": "Formatting Strings: Format a Float",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print f\"Pi is {3.14159:.2f}\".",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# format float",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! :.2f rounds to 2 decimals.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ":.2f"
        },
        {
          "type": "text",
          "value": " to show 2 decimal places."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Pi is 3.14",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Pi is 3.14"
      }
    ],
    "constraints": [
      "Output must be exactly: Pi is 3.14"
    ],
    "hints": [
      "print(f\"Pi is {3.14159:.2f}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "Pi is 3.14",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t2-p07",
    "topicId": "m4-t2",
    "slug": "percent-style",
    "title": "Formatting Strings: Percent Format",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print \"Value: %d\" % 42.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# percent format",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! %d inserts an integer.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use old-style "
        },
        {
          "type": "code",
          "value": "%"
        },
        {
          "type": "text",
          "value": " formatting."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Value: 42",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Value: 42"
      }
    ],
    "constraints": [
      "Output must be exactly: Value: 42"
    ],
    "hints": [
      "print(\"Value: %d\" % 42)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Value: 42",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p01",
    "topicId": "m4-t3",
    "slug": "first-char",
    "title": "Indexing Strings: First Character",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Print the first character with "
        },
        {
          "type": "code",
          "value": "s[0]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# s[0]",
      "successDetail": "Correct! Index 0 is the first character."
    },
    "examples": [
      {
        "output": "P"
      }
    ],
    "constraints": [
      "Use index 0",
      "Output: P"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "P",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p02",
    "topicId": "m4-t3",
    "slug": "last-char",
    "title": "Indexing Strings: Last Character",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[5].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Print the last character with "
        },
        {
          "type": "code",
          "value": "s[5]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# s[5]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "n"
      }
    ],
    "constraints": [
      "Use index 5",
      "Output: n"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[5])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "n",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p03",
    "topicId": "m4-t3",
    "slug": "negative-index",
    "title": "Indexing Strings: Negative Index",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[-1] (last char).",
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
          "value": "s[-1]"
        },
        {
          "type": "text",
          "value": " to get the last character."
        }
      ],
      "editorPlaceholder": "# s[-1]",
      "successDetail": "Correct! -1 counts from the end."
    },
    "examples": [
      {
        "output": "n"
      }
    ],
    "constraints": [
      "Use s[-1]"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[-1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "n",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p04",
    "topicId": "m4-t3",
    "slug": "middle-char",
    "title": "Indexing Strings: Middle Character",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set word=\"code\", print word[1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "word"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Print index 1 of "
        },
        {
          "type": "code",
          "value": "code"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# word[1]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "o"
      }
    ],
    "constraints": [
      "Output: o"
    ],
    "hints": [
      "word = \"code\"\\nprint(word[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "o",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p05",
    "topicId": "m4-t3",
    "slug": "index-h",
    "title": "Indexing Strings: Index in hello",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set s=\"hello\", print s[2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "What letter is at index 2 in hello?"
        }
      ],
      "editorPlaceholder": "# s[2]",
      "successDetail": "Correct! Index 2 is the third letter."
    },
    "examples": [
      {
        "output": "l"
      }
    ],
    "constraints": [
      "Output: l"
    ],
    "hints": [
      "s = \"hello\"\\nprint(s[2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "l",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p06",
    "topicId": "m4-t3",
    "slug": "two-indexes",
    "title": "Indexing Strings: Two Characters",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[0] and s[2] on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Print first and third characters on separate lines."
        }
      ],
      "editorPlaceholder": "# two indexes",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "P\nt"
      }
    ],
    "constraints": [
      "Line 1: P",
      "Line 2: t"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[0])\\nprint(s[2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "P\nt",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t3-p07",
    "topicId": "m4-t3",
    "slug": "out-of-range",
    "title": "Indexing Strings: Index Concept",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set s=\"Hi\", print s[0] + s[1] using concatenation.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Build the string from "
        },
        {
          "type": "code",
          "value": "s[0]"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "s[1]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# concat indexes",
      "successDetail": "Correct! You combined indexed characters."
    },
    "examples": [
      {
        "output": "Hi"
      }
    ],
    "constraints": [
      "Output: Hi"
    ],
    "hints": [
      "s = \"Hi\"\\nprint(s[0] + s[1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Hi",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p01",
    "topicId": "m4-t4",
    "slug": "slice-start",
    "title": "Slicing Strings: Slice Start",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[0:2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Slice "
        },
        {
          "type": "code",
          "value": "s[0:2]"
        },
        {
          "type": "text",
          "value": " gets characters at index 0 and 1."
        }
      ],
      "editorPlaceholder": "# s[0:2]",
      "successDetail": "Correct! [0:2] means start at 0, stop before 2."
    },
    "examples": [
      {
        "output": "Py"
      }
    ],
    "constraints": [
      "Output: Py"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[0:2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Py",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p02",
    "topicId": "m4-t4",
    "slug": "slice-end",
    "title": "Slicing Strings: Slice to End",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[2:].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Slice "
        },
        {
          "type": "code",
          "value": "s[2:]"
        },
        {
          "type": "text",
          "value": " from index 2 to the end."
        }
      ],
      "editorPlaceholder": "# s[2:]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "thon"
      }
    ],
    "constraints": [
      "Output: thon"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[2:])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "thon",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p03",
    "topicId": "m4-t4",
    "slug": "slice-begin",
    "title": "Slicing Strings: Slice from Start",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[:3].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Slice "
        },
        {
          "type": "code",
          "value": "s[:3]"
        },
        {
          "type": "text",
          "value": " from start to index 3."
        }
      ],
      "editorPlaceholder": "# s[:3]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Pyt"
      }
    ],
    "constraints": [
      "Output: Pyt"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[:3])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Pyt",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p04",
    "topicId": "m4-t4",
    "slug": "slice-step",
    "title": "Slicing Strings: Slice with Step",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[::2].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Every 2nd character: "
        },
        {
          "type": "code",
          "value": "s[::2]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# s[::2]",
      "successDetail": "Correct! ::2 skips every other character."
    },
    "examples": [
      {
        "output": "Pto"
      }
    ],
    "constraints": [
      "Output: Pto"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[::2])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Pto",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p05",
    "topicId": "m4-t4",
    "slug": "reverse",
    "title": "Slicing Strings: Reverse String",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set s=\"Python\", print s[::-1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Reverse with "
        },
        {
          "type": "code",
          "value": "s[::-1]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# reverse",
      "successDetail": "Correct! [::-1] reverses the string."
    },
    "examples": [
      {
        "output": "nohtyP"
      }
    ],
    "constraints": [
      "Output: nohtyP"
    ],
    "hints": [
      "s = \"Python\"\\nprint(s[::-1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "nohtyP",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p06",
    "topicId": "m4-t4",
    "slug": "slice-word",
    "title": "Slicing Strings: Slice a Word",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set w=\"Data\", print w[1:].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "w"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Print from index 1 to end of Data."
        }
      ],
      "editorPlaceholder": "# w[1:]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "ata"
      }
    ],
    "constraints": [
      "Output: ata"
    ],
    "hints": [
      "w = \"Data\"\\nprint(w[1:])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "ata",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t4-p07",
    "topicId": "m4-t4",
    "slug": "slice-middle",
    "title": "Slicing Strings: Extract Middle",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set s=\"hello\", print s[1:4].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "s"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Extract middle characters with "
        },
        {
          "type": "code",
          "value": "s[1:4]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# s[1:4]",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "ell"
      }
    ],
    "constraints": [
      "Output: ell"
    ],
    "hints": [
      "s = \"hello\"\\nprint(s[1:4])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "ell",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p01",
    "topicId": "m4-t5",
    "slug": "upper",
    "title": "String Methods: upper()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print \"hello\".upper().",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .upper()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! upper() makes ALL CAPS.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".upper()"
        },
        {
          "type": "text",
          "value": " to capitalize."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "HELLO",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "HELLO"
      }
    ],
    "constraints": [
      "Output must be exactly: HELLO"
    ],
    "hints": [
      "print(\"hello\".upper())"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "HELLO",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p02",
    "topicId": "m4-t5",
    "slug": "lower",
    "title": "String Methods: lower()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print \"HELLO\".lower().",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .lower()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! lower() makes all lowercase.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".lower()"
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
          "expected": "hello",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "hello"
      }
    ],
    "constraints": [
      "Output must be exactly: hello"
    ],
    "hints": [
      "print(\"HELLO\".lower())"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "hello",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p03",
    "topicId": "m4-t5",
    "slug": "strip",
    "title": "String Methods: strip()",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print \"  hi  \".strip().",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .strip()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! strip() trims whitespace.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".strip()"
        },
        {
          "type": "text",
          "value": " to remove extra spaces."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "hi",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "hi"
      }
    ],
    "constraints": [
      "Output must be exactly: hi"
    ],
    "hints": [
      "print(\"  hi  \".strip())"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "hi",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p04",
    "topicId": "m4-t5",
    "slug": "split",
    "title": "String Methods: split()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print \"a,b,c\".split(\",\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .split()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! split() returns a list.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".split(\",\")"
        },
        {
          "type": "text",
          "value": " to split a string."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "['a', 'b', 'c']",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "['a', 'b', 'c']"
      }
    ],
    "constraints": [
      "Output must be exactly: ['a', 'b', 'c']"
    ],
    "hints": [
      "print(\"a,b,c\".split(\",\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "['a', 'b', 'c']",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p05",
    "topicId": "m4-t5",
    "slug": "join",
    "title": "String Methods: join()",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print \"-\".join([\"a\",\"b\",\"c\"]).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .join()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! join() connects list items.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".join()"
        },
        {
          "type": "text",
          "value": " to join list items."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "a-b-c",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "a-b-c"
      }
    ],
    "constraints": [
      "Output must be exactly: a-b-c"
    ],
    "hints": [
      "print(\"-\".join([\"a\", \"b\", \"c\"]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p06",
    "topicId": "m4-t5",
    "slug": "replace",
    "title": "String Methods: replace()",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print \"hello\".replace(\"l\",\"L\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .replace()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! replace() swaps text.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".replace()"
        },
        {
          "type": "text",
          "value": " to swap characters."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "heLLo",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "heLLo"
      }
    ],
    "constraints": [
      "Output must be exactly: heLLo"
    ],
    "hints": [
      "print(\"hello\".replace(\"l\", \"L\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "heLLo",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m4-t5-p07",
    "topicId": "m4-t5",
    "slug": "count",
    "title": "String Methods: count()",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print \"banana\".count(\"a\").",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# .count()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! count() finds how many times a letter appears.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".count(\"a\")"
        },
        {
          "type": "text",
          "value": " to count occurrences."
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
      "print(\"banana\".count(\"a\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m4-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  }
];
