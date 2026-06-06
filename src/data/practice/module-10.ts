import type { PracticeProblem } from "@/lib/types";

export const module10Practice: PracticeProblem[] = [
  {
    "id": "m10-t1-p01",
    "topicId": "m10-t1",
    "slug": "while-count",
    "title": "while Loop: Count with while",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use while to print 1, 2, 3 on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "while"
        },
        {
          "type": "text",
          "value": " loop with a counter."
        }
      ],
      "editorPlaceholder": "# while loop",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2\n3"
      }
    ],
    "constraints": [
      "Use while",
      "Print 1, 2, 3"
    ],
    "hints": [
      "n=1\\nwhile n<=3:\\n    print(n)\\n    n+=1"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t1-p02",
    "topicId": "m10-t1",
    "slug": "while-sum",
    "title": "while Loop: Sum to 5",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Use while to print 1+2+3+4+5 result: 15.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Accumulate sum in a while loop."
        }
      ],
      "editorPlaceholder": "# while sum",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Output: 15"
    ],
    "hints": [
      "total=0\\nn=1\\nwhile n<=5:\\n    total+=n\\n    n+=1\\nprint(total)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t1-p03",
    "topicId": "m10-t1",
    "slug": "while-condition",
    "title": "while Loop: while Until Done",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set x=3, while x>0: print(x); x-=1. Output 3,2,1.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop while condition is true."
        }
      ],
      "editorPlaceholder": "# while x>0",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "3\n2\n1"
      }
    ],
    "constraints": [
      "Print 3, 2, 1"
    ],
    "hints": [
      "x=3\\nwhile x>0:\\n    print(x)\\n    x-=1"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "3\n2\n1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t1-p04",
    "topicId": "m10-t1",
    "slug": "while-break",
    "title": "while Loop: while with break",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use while True, print 1,2 then break.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "break"
        },
        {
          "type": "text",
          "value": " to exit loop early."
        }
      ],
      "editorPlaceholder": "# while break",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2"
      }
    ],
    "constraints": [
      "Output 1 then 2"
    ],
    "hints": [
      "n=0\\nwhile True:\\n    n+=1\\n    print(n)\\n    if n==2: break"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t1-p05",
    "topicId": "m10-t1",
    "slug": "while-input-sim",
    "title": "while Loop: Simulated Input Loop",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set count=0, while count<3: print(\"tick\"); count+=1.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Repeat exactly 3 times with while."
        }
      ],
      "editorPlaceholder": "# while 3x",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "tick\ntick\ntick"
      }
    ],
    "constraints": [
      "Print tick three times"
    ],
    "hints": [
      "count=0\\nwhile count<3:\\n    print(\"tick\")\\n    count+=1"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "tick\ntick\ntick",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t1-p06",
    "topicId": "m10-t1",
    "slug": "while-factorial",
    "title": "while Loop: Factorial Setup",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Use while to compute 4! = 24 and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Multiply numbers 1 to 4 in a while loop."
        }
      ],
      "editorPlaceholder": "# factorial",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "24"
      }
    ],
    "constraints": [
      "Output: 24"
    ],
    "hints": [
      "n=4\\nresult=1\\nwhile n>0:\\n    result*=n\\n    n-=1\\nprint(result)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "24",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t1-p07",
    "topicId": "m10-t1",
    "slug": "while-infinite-guard",
    "title": "while Loop: Guard Variable",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set running=True, n=0, while running: print(n); n+=1; if n>=3: running=False.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use a flag variable to stop the loop."
        }
      ],
      "editorPlaceholder": "# guard",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "0\n1\n2"
      }
    ],
    "constraints": [
      "Print 0, 1, 2"
    ],
    "hints": [
      "running=True\\nn=0\\nwhile running:\\n    print(n)\\n    n+=1\\n    if n>=3: running=False"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "0\n1\n2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p01",
    "topicId": "m10-t2",
    "slug": "for-range",
    "title": "for Loop: for with range",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use for i in range(1,4): print(i).",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop with "
        },
        {
          "type": "code",
          "value": "range(1,4)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# for range",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2\n3"
      }
    ],
    "constraints": [
      "Print 1, 2, 3"
    ],
    "hints": [
      "for i in range(1,4):\\n    print(i)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p02",
    "topicId": "m10-t2",
    "slug": "for-list",
    "title": "for Loop: for over List",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "For item in [\"a\",\"b\",\"c\"]: print(item).",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop directly over a list."
        }
      ],
      "editorPlaceholder": "# for list",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "a\nb\nc"
      }
    ],
    "constraints": [
      "Print a, b, c"
    ],
    "hints": [
      "for item in [\"a\",\"b\",\"c\"]:\\n    print(item)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "a\nb\nc",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p03",
    "topicId": "m10-t2",
    "slug": "for-string",
    "title": "for Loop: for over String",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "For char in \"hi\": print(char).",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop over each character."
        }
      ],
      "editorPlaceholder": "# for string",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "h\ni"
      }
    ],
    "constraints": [
      "Print h then i"
    ],
    "hints": [
      "for char in \"hi\":\\n    print(char)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "h\ni",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p04",
    "topicId": "m10-t2",
    "slug": "for-accumulate",
    "title": "for Loop: Accumulate in for",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use for to sum [1,2,3,4] and print 10.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build a total inside a for loop."
        }
      ],
      "editorPlaceholder": "# for sum",
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
      "total=0\\nfor n in [1,2,3,4]:\\n    total+=n\\nprint(total)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p05",
    "topicId": "m10-t2",
    "slug": "for-enumerate",
    "title": "for Loop: Index with range",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print index:value for [\"x\",\"y\"] as 0:x and 1:y.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use index with range and list length."
        }
      ],
      "editorPlaceholder": "# index loop",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "0:x\n1:y"
      }
    ],
    "constraints": [
      "Print 0:x and 1:y"
    ],
    "hints": [
      "items=[\"x\",\"y\"]\\nfor i in range(len(items)):\\n    print(f\"{i}:{items[i]}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "0:x\n1:y",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p06",
    "topicId": "m10-t2",
    "slug": "for-nested",
    "title": "for Loop: Nested for",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Use nested for to print 1,2 for two rows.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Nested loops run inner loop fully each outer step."
        }
      ],
      "editorPlaceholder": "# nested",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2\n1\n2"
      }
    ],
    "constraints": [
      "Four lines: 1,2,1,2"
    ],
    "hints": [
      "for _ in range(2):\\n    for n in [1,2]:\\n        print(n)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n1\n2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t2-p07",
    "topicId": "m10-t2",
    "slug": "for-else",
    "title": "for Loop: for Complete",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Loop [1,2,3] printing each — just print all items.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Complete for loop over a list."
        }
      ],
      "editorPlaceholder": "# for complete",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2\n3"
      }
    ],
    "constraints": [
      "Print 1, 2, 3"
    ],
    "hints": [
      "for n in [1,2,3]:\\n    print(n)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p01",
    "topicId": "m10-t3",
    "slug": "break-basic",
    "title": "break and continue: break Early",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Loop 1-5, break at 3, print numbers before break: 1,2.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "break"
        },
        {
          "type": "text",
          "value": " to stop the loop."
        }
      ],
      "editorPlaceholder": "# break",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2"
      }
    ],
    "constraints": [
      "Print 1 and 2 only"
    ],
    "hints": [
      "for i in range(1,6):\\n    if i==3: break\\n    print(i)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p02",
    "topicId": "m10-t3",
    "slug": "continue-skip",
    "title": "break and continue: continue Skip",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Loop 1-4, skip 2 with continue, print 1,3,4.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "continue"
        },
        {
          "type": "text",
          "value": " to skip an iteration."
        }
      ],
      "editorPlaceholder": "# continue",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n3\n4"
      }
    ],
    "constraints": [
      "Skip 2"
    ],
    "hints": [
      "for i in range(1,5):\\n    if i==2: continue\\n    print(i)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "1\n3\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p03",
    "topicId": "m10-t3",
    "slug": "break-search",
    "title": "break and continue: Search with break",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Find 3 in [1,2,3,4], print \"found\" when found.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "break when target found."
        }
      ],
      "editorPlaceholder": "# search",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "found"
      }
    ],
    "constraints": [
      "Output: found"
    ],
    "hints": [
      "for n in [1,2,3,4]:\\n    if n==3:\\n        print(\"found\")\\n        break"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "found",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p04",
    "topicId": "m10-t3",
    "slug": "continue-even",
    "title": "break and continue: Skip Odds",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print even numbers 2,4 from range(1,5) using continue.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Skip odd numbers with continue."
        }
      ],
      "editorPlaceholder": "# skip odds",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2\n4"
      }
    ],
    "constraints": [
      "Print 2 and 4"
    ],
    "hints": [
      "for i in range(1,5):\\n    if i%2!=0: continue\\n    print(i)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "2\n4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p05",
    "topicId": "m10-t3",
    "slug": "break-while",
    "title": "break and continue: break in while",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Use while with break when n reaches 3.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "break works in while loops too."
        }
      ],
      "editorPlaceholder": "# while break",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2"
      }
    ],
    "constraints": [
      "Print 1, 2"
    ],
    "hints": [
      "n=0\\nwhile True:\\n    n+=1\\n    if n==3: break\\n    print(n)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p06",
    "topicId": "m10-t3",
    "slug": "continue-string",
    "title": "break and continue: Skip Spaces",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "For c in \"a b\", skip spaces with continue, print a and b.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "continue to skip unwanted characters."
        }
      ],
      "editorPlaceholder": "# skip space",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "a\nb"
      }
    ],
    "constraints": [
      "Print a and b"
    ],
    "hints": [
      "for c in \"a b\":\\n    if c==\" \": continue\\n    print(c)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "a\nb",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t3-p07",
    "topicId": "m10-t3",
    "slug": "break-nested",
    "title": "break and continue: break Inner Only",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Nested loop, break inner at j=2, print pairs until break.",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "break only exits innermost loop."
        }
      ],
      "editorPlaceholder": "# nested break",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n1\n2"
      }
    ],
    "constraints": [
      "Use break in inner loop"
    ],
    "hints": [
      "for i in range(1,3):\\n    for j in range(1,4):\\n        if j==3: break\\n        print(j)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "1\n1\n2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p01",
    "topicId": "m10-t4",
    "slug": "pass-if",
    "title": "pass: pass in if",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set x=5, if x>0: pass, then print \"ok\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "pass"
        },
        {
          "type": "text",
          "value": " as a placeholder that does nothing."
        }
      ],
      "editorPlaceholder": "# pass",
      "successDetail": "Correct! pass does nothing but satisfies syntax."
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
      "x=5\\nif x>0:\\n    pass\\nprint(\"ok\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "ok",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p02",
    "topicId": "m10-t4",
    "slug": "pass-else",
    "title": "pass: pass in else",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set x=0, if x: print(\"yes\") else: pass, print \"done\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "pass in else branch."
        }
      ],
      "editorPlaceholder": "# pass else",
      "successDetail": "Correct!"
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
      "x=0\\nif x:\\n    print(\"yes\")\\nelse:\\n    pass\\nprint(\"done\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "done",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p03",
    "topicId": "m10-t4",
    "slug": "pass-loop",
    "title": "pass: pass in Loop",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "for i in range(3): pass, then print \"finished\".",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Empty loop body with pass."
        }
      ],
      "editorPlaceholder": "# pass loop",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "finished"
      }
    ],
    "constraints": [
      "Output: finished"
    ],
    "hints": [
      "for i in range(3):\\n    pass\\nprint(\"finished\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "finished",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p04",
    "topicId": "m10-t4",
    "slug": "pass-function",
    "title": "pass: pass in Function",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def todo(): pass, call todo(), print \"called\".",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "todo",
      "introSegments": [
        {
          "type": "text",
          "value": "Stub function with pass."
        }
      ],
      "editorPlaceholder": "# pass fn",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "called"
      }
    ],
    "constraints": [
      "Output: called"
    ],
    "hints": [
      "def todo():\\n    pass\\ntodo()\\nprint(\"called\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "called",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p05",
    "topicId": "m10-t4",
    "slug": "pass-class-stub",
    "title": "pass: Future Code Block",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set show=False, if show: pass, print \"ready\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "pass marks where code will go later."
        }
      ],
      "editorPlaceholder": "# placeholder",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "ready"
      }
    ],
    "constraints": [
      "Output: ready"
    ],
    "hints": [
      "show=False\\nif show:\\n    pass\\nprint(\"ready\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "ready",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p06",
    "topicId": "m10-t4",
    "slug": "pass-try-stub",
    "title": "pass: Empty except Block",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Use try/except with pass in except, print \"safe\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "pass in except block as placeholder."
        }
      ],
      "editorPlaceholder": "# try pass",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "safe"
      }
    ],
    "constraints": [
      "Output: safe"
    ],
    "hints": [
      "try:\\n    x=1\\nexcept:\\n    pass\\nprint(\"safe\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "safe",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t4-p07",
    "topicId": "m10-t4",
    "slug": "pass-multiple",
    "title": "pass: Multiple pass",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def a(): pass and def b(): pass, print \"stubs\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Multiple stub functions with pass."
        }
      ],
      "editorPlaceholder": "# stubs",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "stubs"
      }
    ],
    "constraints": [
      "Output: stubs"
    ],
    "hints": [
      "def a(): pass\\ndef b(): pass\\nprint(\"stubs\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "stubs",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p01",
    "topicId": "m10-t5",
    "slug": "range-basic",
    "title": "range(): range(5)",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print list(range(5)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# range(5)",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "range(5) gives 0 through 4."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[0, 1, 2, 3, 4]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 1, 2, 3, 4]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 1, 2, 3, 4]"
    ],
    "hints": [
      "print(list(range(5)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 1, 2, 3, 4]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p02",
    "topicId": "m10-t5",
    "slug": "range-start",
    "title": "range(): range(2,6)",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print list(range(2,6)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# range(2,6)",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "range(start, stop) — stop is excluded."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[2, 3, 4, 5]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[2, 3, 4, 5]"
      }
    ],
    "constraints": [
      "Output must be exactly: [2, 3, 4, 5]"
    ],
    "hints": [
      "print(list(range(2,6)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[2, 3, 4, 5]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p03",
    "topicId": "m10-t5",
    "slug": "range-step",
    "title": "range(): range with Step",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print list(range(0,10,2)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# step",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Third argument is step size."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[0, 2, 4, 6, 8]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[0, 2, 4, 6, 8]"
      }
    ],
    "constraints": [
      "Output must be exactly: [0, 2, 4, 6, 8]"
    ],
    "hints": [
      "print(list(range(0,10,2)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[0, 2, 4, 6, 8]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p04",
    "topicId": "m10-t5",
    "slug": "range-for",
    "title": "range(): for with range",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "for i in range(1,4): print(i).",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Combine range with for."
        }
      ],
      "editorPlaceholder": "# for range",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1\n2\n3"
      }
    ],
    "constraints": [
      "Print 1,2,3"
    ],
    "hints": [
      "for i in range(1,4):\\n    print(i)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "1\n2\n3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p05",
    "topicId": "m10-t5",
    "slug": "range-len",
    "title": "range(): range(len())",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set a=[10,20,30], for i in range(len(a)): print(a[i]).",
    "challengeContent": {
      "outputOnly": true,
      "requiresForLoop": true,
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use range(len(list)) for indexes."
        }
      ],
      "editorPlaceholder": "# range len",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "10\n20\n30"
      }
    ],
    "constraints": [
      "Print 10,20,30"
    ],
    "hints": [
      "a=[10,20,30]\\nfor i in range(len(a)):\\n    print(a[i])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "10\n20\n30",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p06",
    "topicId": "m10-t5",
    "slug": "range-reverse",
    "title": "range(): Count Down",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print list(range(5,0,-1)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# down",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Negative step counts down."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[5, 4, 3, 2, 1]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[5, 4, 3, 2, 1]"
      }
    ],
    "constraints": [
      "Output must be exactly: [5, 4, 3, 2, 1]"
    ],
    "hints": [
      "print(list(range(5,0,-1)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "[5, 4, 3, 2, 1]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m10-t5-p07",
    "topicId": "m10-t5",
    "slug": "range-sum",
    "title": "range(): Sum with range",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Sum range(1,6) and print 15.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Sum numbers from range(1,6)."
        }
      ],
      "editorPlaceholder": "# sum range",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Output: 15"
    ],
    "hints": [
      "total=0\\nfor i in range(1,6):\\n    total+=i\\nprint(total)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m10-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ]
  }
];
