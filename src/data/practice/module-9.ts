import type { PracticeProblem } from "@/lib/types";

export const module9Practice: PracticeProblem[] = [
  {
    "id": "m9-t1-p01",
    "topicId": "m9-t1",
    "slug": "if-basic",
    "title": "if Statement: Simple if",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set x=10, if x>5: print(\"yes\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "if"
        },
        {
          "type": "text",
          "value": " to run code only when condition is True."
        }
      ],
      "editorPlaceholder": "# if x > 5",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "yes"
      }
    ],
    "constraints": [
      "Use if statement",
      "Output: yes"
    ],
    "hints": [
      "x = 10\\nif x > 5:\\n    print(\"yes\")"
    ],
    "starterCode": "",
    "approach": "Set x=10, if x>5: print(\"yes\").\n\nReference solution:\nx = 10\nif x > 5:\n    print(\"yes\")",
    "publicTests": [
      {
        "id": "m9-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "yes",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "yes",
        "visibility": "public"
      }
    ],
    "solutionCode": "x = 10\nif x > 5:\n    print(\"yes\")"
  },
  {
    "id": "m9-t1-p02",
    "topicId": "m9-t1",
    "slug": "if-false",
    "title": "if Statement: if Skipped",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set x=2, if x>5: print(\"yes\"). Print \"done\" after.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "x"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "When condition is False, if block is skipped."
        }
      ],
      "editorPlaceholder": "# if skipped",
      "successDetail": "Correct! if block was skipped."
    },
    "examples": [
      {
        "output": "done"
      }
    ],
    "constraints": [
      "Output: done"
    ],
    "hints": [
      "x = 2\\nif x > 5:\\n    print(\"yes\")\\nprint(\"done\")"
    ],
    "starterCode": "",
    "approach": "Set x=2, if x>5: print(\"yes\"). Print \"done\" after.\n\nReference solution:\nx = 2\nif x > 5:\n    print(\"yes\")\nprint(\"done\")",
    "publicTests": [
      {
        "id": "m9-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "done",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "done",
        "visibility": "public"
      }
    ],
    "solutionCode": "x = 2\nif x > 5:\n    print(\"yes\")\nprint(\"done\")"
  },
  {
    "id": "m9-t1-p03",
    "topicId": "m9-t1",
    "slug": "if-zero",
    "title": "if Statement: if with Zero",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set n=0, if n: print(\"nonzero\") else: print(\"zero\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "0 is falsy in Python."
        }
      ],
      "editorPlaceholder": "# if n",
      "successDetail": "Correct!",
      "requiresVariables": [
        "n"
      ]
    },
    "examples": [
      {
        "output": "zero"
      }
    ],
    "constraints": [
      "Output: zero"
    ],
    "hints": [
      "n = 0\\nif n:\\n    print(\"nonzero\")\\nelse:\\n    print(\"zero\")"
    ],
    "starterCode": "",
    "approach": "Set n=0, if n: print(\"nonzero\") else: print(\"zero\").\n\nReference solution:\nn = 0\nif n:\n    print(\"nonzero\")\nelse:\n    print(\"zero\")",
    "publicTests": [
      {
        "id": "m9-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "zero",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"n\" in globals(), \"Expected a variable named n\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "zero",
        "visibility": "public"
      }
    ],
    "solutionCode": "n = 0\nif n:\n    print(\"nonzero\")\nelse:\n    print(\"zero\")"
  },
  {
    "id": "m9-t1-p04",
    "topicId": "m9-t1",
    "slug": "if-score",
    "title": "if Statement: Score Check",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score=75, if score>=60: print(\"Pass\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Check score with "
        },
        {
          "type": "code",
          "value": "if score >= 60"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# if score",
      "successDetail": "Correct!",
      "requiresVariables": [
        "score"
      ]
    },
    "examples": [
      {
        "output": "Pass"
      }
    ],
    "constraints": [
      "Output: Pass"
    ],
    "hints": [
      "score = 75\\nif score >= 60:\\n    print(\"Pass\")"
    ],
    "starterCode": "",
    "approach": "Set score=75, if score>=60: print(\"Pass\").\n\nReference solution:\nscore = 75\nif score >= 60:\n    print(\"Pass\")",
    "publicTests": [
      {
        "id": "m9-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Pass",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 75\nif score >= 60:\n    print(\"Pass\")"
  },
  {
    "id": "m9-t1-p05",
    "topicId": "m9-t1",
    "slug": "if-string",
    "title": "if Statement: if with String",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set name=\"Ana\", if name: print(\"Hello\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "name"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Non-empty strings are truthy."
        }
      ],
      "editorPlaceholder": "# if name",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Hello"
      }
    ],
    "constraints": [
      "Output: Hello"
    ],
    "hints": [
      "name = \"Ana\"\\nif name:\\n    print(\"Hello\")"
    ],
    "starterCode": "",
    "approach": "Set name=\"Ana\", if name: print(\"Hello\").\n\nReference solution:\nname = \"Ana\"\nif name:\n    print(\"Hello\")",
    "publicTests": [
      {
        "id": "m9-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "Hello",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"name\" in globals(), \"Expected a variable named name\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "name = \"Ana\"\nif name:\n    print(\"Hello\")"
  },
  {
    "id": "m9-t1-p06",
    "topicId": "m9-t1",
    "slug": "if-and",
    "title": "if Statement: if with and",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set age=20, score=80, if age>=18 and score>=60: print(\"ok\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "age",
        "score"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Combine conditions with "
        },
        {
          "type": "code",
          "value": "and"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# if and",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "ok"
      }
    ],
    "constraints": [
      "Output: ok"
    ],
    "hints": [
      "age=20\\nscore=80\\nif age>=18 and score>=60:\\n    print(\"ok\")"
    ],
    "starterCode": "",
    "approach": "Set age=20, score=80, if age>=18 and score>=60: print(\"ok\").\n\nReference solution:\nage=20\nscore=80\nif age>=18 and score>=60:\n    print(\"ok\")",
    "publicTests": [
      {
        "id": "m9-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "ok",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"age\" in globals(), \"Expected a variable named age\"\nassert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "ok",
        "visibility": "public"
      }
    ],
    "solutionCode": "age=20\nscore=80\nif age>=18 and score>=60:\n    print(\"ok\")"
  },
  {
    "id": "m9-t1-p07",
    "topicId": "m9-t1",
    "slug": "if-list",
    "title": "if Statement: if with List",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set items=[1,2], if len(items)>0: print(\"has items\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "items"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Check list length in condition."
        }
      ],
      "editorPlaceholder": "# if list",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "has items"
      }
    ],
    "constraints": [
      "Output: has items"
    ],
    "hints": [
      "items=[1,2]\\nif len(items)>0:\\n    print(\"has items\")"
    ],
    "starterCode": "",
    "approach": "Set items=[1,2], if len(items)>0: print(\"has items\").\n\nReference solution:\nitems=[1,2]\nif len(items)>0:\n    print(\"has items\")",
    "publicTests": [
      {
        "id": "m9-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "has items",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"items\" in globals(), \"Expected a variable named items\"",
        "visibility": "public"
      },
      {
        "id": "m9-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "has items",
        "visibility": "public"
      }
    ],
    "solutionCode": "items=[1,2]\nif len(items)>0:\n    print(\"has items\")"
  },
  {
    "id": "m9-t2-p01",
    "topicId": "m9-t2",
    "slug": "if-else-pass",
    "title": "if-else: Pass or Fail",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set score=75, if score>=60: print(\"Pass\") else: print(\"Fail\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "if/else"
        },
        {
          "type": "text",
          "value": " for two outcomes."
        }
      ],
      "editorPlaceholder": "# if else",
      "successDetail": "Correct!",
      "requiresVariables": [
        "score"
      ]
    },
    "examples": [
      {
        "output": "Pass"
      }
    ],
    "constraints": [
      "Output: Pass"
    ],
    "hints": [
      "score=75\\nif score>=60:\\n    print(\"Pass\")\\nelse:\\n    print(\"Fail\")"
    ],
    "starterCode": "",
    "approach": "Set score=75, if score>=60: print(\"Pass\") else: print(\"Fail\").\n\nReference solution:\nscore=75\nif score>=60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
    "publicTests": [
      {
        "id": "m9-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Pass",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Pass",
        "visibility": "public"
      }
    ],
    "solutionCode": "score=75\nif score>=60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
  },
  {
    "id": "m9-t2-p02",
    "topicId": "m9-t2",
    "slug": "if-else-even",
    "title": "if-else: Even or Odd",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set n=4, if n%2==0: print(\"even\") else: print(\"odd\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "%"
        },
        {
          "type": "text",
          "value": " to check even/odd."
        }
      ],
      "editorPlaceholder": "# even odd",
      "successDetail": "Correct!",
      "requiresVariables": [
        "n"
      ]
    },
    "examples": [
      {
        "output": "even"
      }
    ],
    "constraints": [
      "Output: even"
    ],
    "hints": [
      "n=4\\nif n%2==0:\\n    print(\"even\")\\nelse:\\n    print(\"odd\")"
    ],
    "starterCode": "",
    "approach": "Set n=4, if n%2==0: print(\"even\") else: print(\"odd\").\n\nReference solution:\nn=4\nif n%2==0:\n    print(\"even\")\nelse:\n    print(\"odd\")",
    "publicTests": [
      {
        "id": "m9-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "even",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"n\" in globals(), \"Expected a variable named n\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "even",
        "visibility": "public"
      }
    ],
    "solutionCode": "n=4\nif n%2==0:\n    print(\"even\")\nelse:\n    print(\"odd\")"
  },
  {
    "id": "m9-t2-p03",
    "topicId": "m9-t2",
    "slug": "if-else-compare",
    "title": "if-else: Compare Two Values",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set a=5, b=3, if a>b: print(\"a wins\") else: print(\"b wins\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compare two variables."
        }
      ],
      "editorPlaceholder": "# compare",
      "successDetail": "Correct!",
      "requiresVariables": [
        "a",
        "b"
      ]
    },
    "examples": [
      {
        "output": "a wins"
      }
    ],
    "constraints": [
      "Output: a wins"
    ],
    "hints": [
      "a=5\\nb=3\\nif a>b:\\n    print(\"a wins\")\\nelse:\\n    print(\"b wins\")"
    ],
    "starterCode": "",
    "approach": "Set a=5, b=3, if a>b: print(\"a wins\") else: print(\"b wins\").\n\nReference solution:\na=5\nb=3\nif a>b:\n    print(\"a wins\")\nelse:\n    print(\"b wins\")",
    "publicTests": [
      {
        "id": "m9-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "a wins",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"a\" in globals(), \"Expected a variable named a\"\nassert \"b\" in globals(), \"Expected a variable named b\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "a wins",
        "visibility": "public"
      }
    ],
    "solutionCode": "a=5\nb=3\nif a>b:\n    print(\"a wins\")\nelse:\n    print(\"b wins\")"
  },
  {
    "id": "m9-t2-p04",
    "topicId": "m9-t2",
    "slug": "if-else-sign",
    "title": "if-else: Positive or Negative",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set x=-3, if x>=0: print(\"pos\") else: print(\"neg\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Check sign of a number."
        }
      ],
      "editorPlaceholder": "# sign",
      "successDetail": "Correct!",
      "requiresVariables": [
        "x"
      ]
    },
    "examples": [
      {
        "output": "neg"
      }
    ],
    "constraints": [
      "Output: neg"
    ],
    "hints": [
      "x=-3\\nif x>=0:\\n    print(\"pos\")\\nelse:\\n    print(\"neg\")"
    ],
    "starterCode": "",
    "approach": "Set x=-3, if x>=0: print(\"pos\") else: print(\"neg\").\n\nReference solution:\nx=-3\nif x>=0:\n    print(\"pos\")\nelse:\n    print(\"neg\")",
    "publicTests": [
      {
        "id": "m9-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "neg",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "neg",
        "visibility": "public"
      }
    ],
    "solutionCode": "x=-3\nif x>=0:\n    print(\"pos\")\nelse:\n    print(\"neg\")"
  },
  {
    "id": "m9-t2-p05",
    "topicId": "m9-t2",
    "slug": "if-else-empty",
    "title": "if-else: Empty String",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set s=\"\", if s: print(\"has text\") else: print(\"empty\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Empty string is falsy."
        }
      ],
      "editorPlaceholder": "# empty str",
      "successDetail": "Correct!",
      "requiresVariables": [
        "s"
      ]
    },
    "examples": [
      {
        "output": "empty"
      }
    ],
    "constraints": [
      "Output: empty"
    ],
    "hints": [
      "s=\"\"\\nif s:\\n    print(\"has text\")\\nelse:\\n    print(\"empty\")"
    ],
    "starterCode": "",
    "approach": "Set s=\"\", if s: print(\"has text\") else: print(\"empty\").\n\nReference solution:\ns=\"\"\nif s:\n    print(\"has text\")\nelse:\n    print(\"empty\")",
    "publicTests": [
      {
        "id": "m9-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "empty",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"s\" in globals(), \"Expected a variable named s\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "empty",
        "visibility": "public"
      }
    ],
    "solutionCode": "s=\"\"\nif s:\n    print(\"has text\")\nelse:\n    print(\"empty\")"
  },
  {
    "id": "m9-t2-p06",
    "topicId": "m9-t2",
    "slug": "if-else-nested",
    "title": "if-else: Nested if-else",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set x = 10. Use nested if: if x > 0, then if x > 5 print \"positive\" else print \"small\"; otherwise print \"non-positive\".",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Simple if-else on positive check."
        }
      ],
      "editorPlaceholder": "# nested",
      "successDetail": "Correct!",
      "requiresVariables": [
        "x"
      ]
    },
    "examples": [
      {
        "output": "positive"
      }
    ],
    "constraints": [
      "Output: positive"
    ],
    "hints": [
      "Put a second if/else inside the x > 0 branch."
    ],
    "starterCode": "",
    "approach": "Set x = 10. Use nested if: if x > 0, then if x > 5 print \"positive\" else print \"small\"; otherwise print \"non-positive\".\n\nReference solution:\nx = 10\nif x > 0:\n    if x > 5:\n        print(\"positive\")\n    else:\n        print(\"small\")\nelse:\n    print(\"non-positive\")",
    "publicTests": [
      {
        "id": "m9-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "positive",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"x\" in globals(), \"Expected a variable named x\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "positive",
        "visibility": "public"
      }
    ],
    "solutionCode": "x = 10\nif x > 0:\n    if x > 5:\n        print(\"positive\")\n    else:\n        print(\"small\")\nelse:\n    print(\"non-positive\")"
  },
  {
    "id": "m9-t2-p07",
    "topicId": "m9-t2",
    "slug": "if-else-login",
    "title": "if-else: Login Check",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set user=\"admin\", if user==\"admin\": print(\"welcome\") else: print(\"denied\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compare string for login."
        }
      ],
      "editorPlaceholder": "# login",
      "successDetail": "Correct!",
      "requiresVariables": [
        "user"
      ]
    },
    "examples": [
      {
        "output": "welcome"
      }
    ],
    "constraints": [
      "Output: welcome"
    ],
    "hints": [
      "user=\"admin\"\\nif user==\"admin\":\\n    print(\"welcome\")\\nelse:\\n    print(\"denied\")"
    ],
    "starterCode": "",
    "approach": "Set user=\"admin\", if user==\"admin\": print(\"welcome\") else: print(\"denied\").\n\nReference solution:\nuser=\"admin\"\nif user==\"admin\":\n    print(\"welcome\")\nelse:\n    print(\"denied\")",
    "publicTests": [
      {
        "id": "m9-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "welcome",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"user\" in globals(), \"Expected a variable named user\"",
        "visibility": "public"
      },
      {
        "id": "m9-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "welcome",
        "visibility": "public"
      }
    ],
    "solutionCode": "user=\"admin\"\nif user==\"admin\":\n    print(\"welcome\")\nelse:\n    print(\"denied\")"
  },
  {
    "id": "m9-t3-p01",
    "topicId": "m9-t3",
    "slug": "elif-grade-a",
    "title": "if-elif-else: Grade A",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set score=90, if score>=90: print(\"A\") elif score>=80: print(\"B\") else: print(\"C\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "elif"
        },
        {
          "type": "text",
          "value": " for multiple conditions."
        }
      ],
      "editorPlaceholder": "# elif grades",
      "successDetail": "Correct!",
      "requiresVariables": [
        "score"
      ]
    },
    "examples": [
      {
        "output": "A"
      }
    ],
    "constraints": [
      "Output: A"
    ],
    "hints": [
      "score=90\\nif score>=90:\\n    print(\"A\")\\nelif score>=80:\\n    print(\"B\")\\nelse:\\n    print(\"C\")"
    ],
    "starterCode": "",
    "approach": "Set score=90, if score>=90: print(\"A\") elif score>=80: print(\"B\") else: print(\"C\").\n\nReference solution:\nscore=90\nif score>=90:\n    print(\"A\")\nelif score>=80:\n    print(\"B\")\nelse:\n    print(\"C\")",
    "publicTests": [
      {
        "id": "m9-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "A",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "A",
        "visibility": "public"
      }
    ],
    "solutionCode": "score=90\nif score>=90:\n    print(\"A\")\nelif score>=80:\n    print(\"B\")\nelse:\n    print(\"C\")"
  },
  {
    "id": "m9-t3-p02",
    "topicId": "m9-t3",
    "slug": "elif-grade-b",
    "title": "if-elif-else: Grade B",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set score=85, use if/elif/else for grades, print B.",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Score 85 should print B."
        }
      ],
      "editorPlaceholder": "# grade B",
      "successDetail": "Correct!",
      "requiresVariables": [
        "score"
      ]
    },
    "examples": [
      {
        "output": "B"
      }
    ],
    "constraints": [
      "Output: B"
    ],
    "hints": [
      "score=85\\nif score>=90: print(\"A\")\\nelif score>=80: print(\"B\")\\nelse: print(\"C\")"
    ],
    "starterCode": "",
    "approach": "Set score=85, use if/elif/else for grades, print B.\n\nReference solution:\nscore=85\nif score>=90: print(\"A\")\nelif score>=80: print(\"B\")\nelse: print(\"C\")",
    "publicTests": [
      {
        "id": "m9-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "B",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "B",
        "visibility": "public"
      }
    ],
    "solutionCode": "score=85\nif score>=90: print(\"A\")\nelif score>=80: print(\"B\")\nelse: print(\"C\")"
  },
  {
    "id": "m9-t3-p03",
    "topicId": "m9-t3",
    "slug": "elif-grade-c",
    "title": "if-elif-else: Grade C",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set score=70, use if/elif/else, print C.",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Score 70 falls to else branch."
        }
      ],
      "editorPlaceholder": "# grade C",
      "successDetail": "Correct!",
      "requiresVariables": [
        "score"
      ]
    },
    "examples": [
      {
        "output": "C"
      }
    ],
    "constraints": [
      "Output: C"
    ],
    "hints": [
      "score=70\\nif score>=90: print(\"A\")\\nelif score>=80: print(\"B\")\\nelse: print(\"C\")"
    ],
    "starterCode": "",
    "approach": "Set score=70, use if/elif/else, print C.\n\nReference solution:\nscore=70\nif score>=90: print(\"A\")\nelif score>=80: print(\"B\")\nelse: print(\"C\")",
    "publicTests": [
      {
        "id": "m9-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "C",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "C",
        "visibility": "public"
      }
    ],
    "solutionCode": "score=70\nif score>=90: print(\"A\")\nelif score>=80: print(\"B\")\nelse: print(\"C\")"
  },
  {
    "id": "m9-t3-p04",
    "topicId": "m9-t3",
    "slug": "elif-weather",
    "title": "if-elif-else: Weather Categories",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set temp=25, if temp>30: print(\"hot\") elif temp>20: print(\"warm\") else: print(\"cool\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Chain elif for temperature."
        }
      ],
      "editorPlaceholder": "# weather",
      "successDetail": "Correct!",
      "requiresVariables": [
        "temp"
      ]
    },
    "examples": [
      {
        "output": "warm"
      }
    ],
    "constraints": [
      "Output: warm"
    ],
    "hints": [
      "temp=25\\nif temp>30: print(\"hot\")\\nelif temp>20: print(\"warm\")\\nelse: print(\"cool\")"
    ],
    "starterCode": "",
    "approach": "Set temp=25, if temp>30: print(\"hot\") elif temp>20: print(\"warm\") else: print(\"cool\").\n\nReference solution:\ntemp=25\nif temp>30: print(\"hot\")\nelif temp>20: print(\"warm\")\nelse: print(\"cool\")",
    "publicTests": [
      {
        "id": "m9-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "warm",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"temp\" in globals(), \"Expected a variable named temp\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "warm",
        "visibility": "public"
      }
    ],
    "solutionCode": "temp=25\nif temp>30: print(\"hot\")\nelif temp>20: print(\"warm\")\nelse: print(\"cool\")"
  },
  {
    "id": "m9-t3-p05",
    "topicId": "m9-t3",
    "slug": "elif-three",
    "title": "if-elif-else: Three Branches",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set n=0, if n>0: print(\"pos\") elif n<0: print(\"neg\") else: print(\"zero\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Handle positive, negative, and zero."
        }
      ],
      "editorPlaceholder": "# three way",
      "successDetail": "Correct!",
      "requiresVariables": [
        "n"
      ]
    },
    "examples": [
      {
        "output": "zero"
      }
    ],
    "constraints": [
      "Output: zero"
    ],
    "hints": [
      "n=0\\nif n>0: print(\"pos\")\\nelif n<0: print(\"neg\")\\nelse: print(\"zero\")"
    ],
    "starterCode": "",
    "approach": "Set n=0, if n>0: print(\"pos\") elif n<0: print(\"neg\") else: print(\"zero\").\n\nReference solution:\nn=0\nif n>0: print(\"pos\")\nelif n<0: print(\"neg\")\nelse: print(\"zero\")",
    "publicTests": [
      {
        "id": "m9-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "zero",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"n\" in globals(), \"Expected a variable named n\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "zero",
        "visibility": "public"
      }
    ],
    "solutionCode": "n=0\nif n>0: print(\"pos\")\nelif n<0: print(\"neg\")\nelse: print(\"zero\")"
  },
  {
    "id": "m9-t3-p06",
    "topicId": "m9-t3",
    "slug": "elif-speed",
    "title": "if-elif-else: Speed Limit",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set speed=55, if speed>65: print(\"ticket\") elif speed>50: print(\"warning\") else: print(\"ok\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Multiple elif for speed check."
        }
      ],
      "editorPlaceholder": "# speed",
      "successDetail": "Correct!",
      "requiresVariables": [
        "speed"
      ]
    },
    "examples": [
      {
        "output": "warning"
      }
    ],
    "constraints": [
      "Output: warning"
    ],
    "hints": [
      "speed=55\\nif speed>65: print(\"ticket\")\\nelif speed>50: print(\"warning\")\\nelse: print(\"ok\")"
    ],
    "starterCode": "",
    "approach": "Set speed=55, if speed>65: print(\"ticket\") elif speed>50: print(\"warning\") else: print(\"ok\").\n\nReference solution:\nspeed=55\nif speed>65: print(\"ticket\")\nelif speed>50: print(\"warning\")\nelse: print(\"ok\")",
    "publicTests": [
      {
        "id": "m9-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "warning",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"speed\" in globals(), \"Expected a variable named speed\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "warning",
        "visibility": "public"
      }
    ],
    "solutionCode": "speed=55\nif speed>65: print(\"ticket\")\nelif speed>50: print(\"warning\")\nelse: print(\"ok\")"
  },
  {
    "id": "m9-t3-p07",
    "topicId": "m9-t3",
    "slug": "elif-menu",
    "title": "if-elif-else: Menu Choice",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set choice=\"b\", if choice==\"a\": print(\"add\") elif choice==\"b\": print(\"view\") else: print(\"exit\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use elif for menu options."
        }
      ],
      "editorPlaceholder": "# menu",
      "successDetail": "Correct!",
      "requiresVariables": [
        "choice"
      ]
    },
    "examples": [
      {
        "output": "view"
      }
    ],
    "constraints": [
      "Output: view"
    ],
    "hints": [
      "choice=\"b\"\\nif choice==\"a\": print(\"add\")\\nelif choice==\"b\": print(\"view\")\\nelse: print(\"exit\")"
    ],
    "starterCode": "",
    "approach": "Set choice=\"b\", if choice==\"a\": print(\"add\") elif choice==\"b\": print(\"view\") else: print(\"exit\").\n\nReference solution:\nchoice=\"b\"\nif choice==\"a\": print(\"add\")\nelif choice==\"b\": print(\"view\")\nelse: print(\"exit\")",
    "publicTests": [
      {
        "id": "m9-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "view",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"choice\" in globals(), \"Expected a variable named choice\"",
        "visibility": "public"
      },
      {
        "id": "m9-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "view",
        "visibility": "public"
      }
    ],
    "solutionCode": "choice=\"b\"\nif choice==\"a\": print(\"add\")\nelif choice==\"b\": print(\"view\")\nelse: print(\"exit\")"
  }
];
