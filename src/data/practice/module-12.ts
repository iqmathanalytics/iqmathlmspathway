import type { PracticeProblem } from "@/lib/types";

export const module12Practice: PracticeProblem[] = [
  {
    "id": "m12-t1-p01",
    "topicId": "m12-t1",
    "slug": "define-hello",
    "title": "Creating Functions: Define a Function",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def hello(): print(\"hello\"), then call hello().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def hello(): print(\"hello\"), then call hello()."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "hello"
    },
    "examples": [
      {
        "output": "hello"
      }
    ],
    "constraints": [
      "Output must match: hello"
    ],
    "hints": [
      "def hello():\n    print(\"hello\")\nhello()"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "hello",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"hello\" in globals() and callable(globals()[\"hello\"]), \"Expected a function named hello\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "hello",
        "visibility": "public"
      }
    ],
    "solutionCode": "def hello():\n    print(\"hello\")\nhello()",
    "approach": "Define def hello(): print(\"hello\"), then call hello().\n\nReference solution:\ndef hello():\n    print(\"hello\")\nhello()"
  },
  {
    "id": "m12-t1-p02",
    "topicId": "m12-t1",
    "slug": "return-add",
    "title": "Creating Functions: Return Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def add(left, right): return left + right, then print add(4, 6).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def add(left, right): return left + right, then print add(4, 6)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "add"
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must match: 10"
    ],
    "hints": [
      "Use return, then print the function call."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"add\" in globals() and callable(globals()[\"add\"]), \"Expected a function named add\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def add(left, right):\n    return left + right\nprint(add(4, 6))",
    "approach": "Define def add(left, right): return left + right, then print add(4, 6).\n\nReference solution:\ndef add(left, right):\n    return left + right\nprint(add(4, 6))"
  },
  {
    "id": "m12-t1-p03",
    "topicId": "m12-t1",
    "slug": "shout-param",
    "title": "Creating Functions: Parameter",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def shout(word): print(word.upper()), then call shout(\"go\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def shout(word): print(word.upper()), then call shout(\"go\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "shout"
    },
    "examples": [
      {
        "output": "GO"
      }
    ],
    "constraints": [
      "Output must match: GO"
    ],
    "hints": [
      "def shout(word):\n    print(word.upper())\nshout(\"go\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "GO",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"shout\" in globals() and callable(globals()[\"shout\"]), \"Expected a function named shout\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "GO",
        "visibility": "public"
      }
    ],
    "solutionCode": "def shout(word):\n    print(word.upper())\nshout(\"go\")",
    "approach": "Define def shout(word): print(word.upper()), then call shout(\"go\").\n\nReference solution:\ndef shout(word):\n    print(word.upper())\nshout(\"go\")"
  },
  {
    "id": "m12-t1-p04",
    "topicId": "m12-t1",
    "slug": "default-greet",
    "title": "Creating Functions: Default Parameter",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def greet(name=\"there\"): print(f\"Hi {name}\"), then call greet() with no argument.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def greet(name=\"there\"): print(f\"Hi {name}\"), then call greet() with no argument."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "greet"
    },
    "examples": [
      {
        "output": "Hi there"
      }
    ],
    "constraints": [
      "Output must match: Hi there"
    ],
    "hints": [
      "The default is used when you call greet() with no argument."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Hi there",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"greet\" in globals() and callable(globals()[\"greet\"]), \"Expected a function named greet\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hi there",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet(name=\"there\"):\n    print(f\"Hi {name}\")\ngreet()",
    "approach": "Define def greet(name=\"there\"): print(f\"Hi {name}\"), then call greet() with no argument.\n\nReference solution:\ndef greet(name=\"there\"):\n    print(f\"Hi {name}\")\ngreet()"
  },
  {
    "id": "m12-t1-p05",
    "topicId": "m12-t1",
    "slug": "two-returns",
    "title": "Creating Functions: Multiple Returns",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def bounds(left, right): return min(left, right), max(left, right). Print bounds(8, 3)[0].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def bounds(left, right): return min(left, right), max(left, right). Print bounds(8, 3)[0]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "bounds"
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
      "return a, b makes a tuple. Index 0 is the smaller value."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"bounds\" in globals() and callable(globals()[\"bounds\"]), \"Expected a function named bounds\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def bounds(left, right):\n    return min(left, right), max(left, right)\nprint(bounds(8, 3)[0])",
    "approach": "Define def bounds(left, right): return min(left, right), max(left, right). Print bounds(8, 3)[0].\n\nReference solution:\ndef bounds(left, right):\n    return min(left, right), max(left, right)\nprint(bounds(8, 3)[0])"
  },
  {
    "id": "m12-t1-p06",
    "topicId": "m12-t1",
    "slug": "local-return",
    "title": "Creating Functions: Local Variable",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def local_ten(): value = 10; return value. Print local_ten().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def local_ten(): value = 10; return value. Print local_ten()."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "local_ten"
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must match: 10"
    ],
    "hints": [
      "value lives inside the function. return it, then print the call."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"local_ten\" in globals() and callable(globals()[\"local_ten\"]), \"Expected a function named local_ten\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def local_ten():\n    value = 10\n    return value\nprint(local_ten())",
    "approach": "Define def local_ten(): value = 10; return value. Print local_ten().\n\nReference solution:\ndef local_ten():\n    value = 10\n    return value\nprint(local_ten())"
  },
  {
    "id": "m12-t1-p07",
    "topicId": "m12-t1",
    "slug": "compose-fns",
    "title": "Creating Functions: Function Calling Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def double(n): return n * 2 and def quadruple(n): return double(double(n)). Print quadruple(3).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def double(n): return n * 2 and def quadruple(n): return double(double(n)). Print quadruple(3)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "quadruple"
    },
    "examples": [
      {
        "output": "12"
      }
    ],
    "constraints": [
      "Output must match: 12"
    ],
    "hints": [
      "quadruple should call double twice."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "12",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"quadruple\" in globals() and callable(globals()[\"quadruple\"]), \"Expected a function named quadruple\"",
        "visibility": "public"
      },
      {
        "id": "m12-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "12",
        "visibility": "public"
      }
    ],
    "solutionCode": "def double(n):\n    return n * 2\ndef quadruple(n):\n    return double(double(n))\nprint(quadruple(3))",
    "approach": "Define def double(n): return n * 2 and def quadruple(n): return double(double(n)). Print quadruple(3).\n\nReference solution:\ndef double(n):\n    return n * 2\ndef quadruple(n):\n    return double(double(n))\nprint(quadruple(3))"
  },
  {
    "id": "m12-t2-p01",
    "topicId": "m12-t2",
    "slug": "call-len",
    "title": "Calling Functions: Call len",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print len(\"code\"). This calls a built-in function.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print len(\"code\"). This calls a built-in function."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Output must match: 4"
    ],
    "hints": [
      "print(len(\"code\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "4",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p01-t2",
        "label": "Exact Output",
        "expectedStdout": "4",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(len(\"code\"))",
    "approach": "Print len(\"code\"). This calls a built-in function.\n\nReference solution:\nprint(len(\"code\"))"
  },
  {
    "id": "m12-t2-p02",
    "topicId": "m12-t2",
    "slug": "call-max",
    "title": "Calling Functions: Call max",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print max(3, 9, 5).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print max(3, 9, 5)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
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
      "print(max(3, 9, 5))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "9",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p02-t2",
        "label": "Exact Output",
        "expectedStdout": "9",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "9",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(max(3, 9, 5))",
    "approach": "Print max(3, 9, 5).\n\nReference solution:\nprint(max(3, 9, 5))"
  },
  {
    "id": "m12-t2-p03",
    "topicId": "m12-t2",
    "slug": "call-twice",
    "title": "Calling Functions: Call Twice",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def show(msg): print(msg). Call it twice: show(\"ready\") then show(\"go\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def show(msg): print(msg). Call it twice: show(\"ready\") then show(\"go\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "show"
    },
    "examples": [
      {
        "output": "ready\ngo"
      }
    ],
    "constraints": [
      "Output must match: ready / go"
    ],
    "hints": [
      "Define once, then call the same function twice."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "ready\ngo",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"show\" in globals() and callable(globals()[\"show\"]), \"Expected a function named show\"",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "ready\ngo",
        "visibility": "public"
      }
    ],
    "solutionCode": "def show(msg):\n    print(msg)\nshow(\"ready\")\nshow(\"go\")",
    "approach": "Define def show(msg): print(msg). Call it twice: show(\"ready\") then show(\"go\").\n\nReference solution:\ndef show(msg):\n    print(msg)\nshow(\"ready\")\nshow(\"go\")"
  },
  {
    "id": "m12-t2-p04",
    "topicId": "m12-t2",
    "slug": "call-with-variable",
    "title": "Calling Functions: Pass a Variable",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set name = \"Ada\". Define def greet(who): print(\"Hi \" + who). Call greet(name).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set name = \"Ada\". Define def greet(who): print(\"Hi \" + who). Call greet(name)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "name"
      ],
      "requiresFunction": "greet"
    },
    "examples": [
      {
        "output": "Hi Ada"
      }
    ],
    "constraints": [
      "Output must match: Hi Ada"
    ],
    "hints": [
      "Pass the variable name into greet, not the string again."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Hi Ada",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"name\" in globals(), \"Expected a variable named name\"\nassert \"greet\" in globals() and callable(globals()[\"greet\"]), \"Expected a function named greet\"",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Hi Ada",
        "visibility": "public"
      }
    ],
    "solutionCode": "name = \"Ada\"\ndef greet(who):\n    print(\"Hi \" + who)\ngreet(name)",
    "approach": "Set name = \"Ada\". Define def greet(who): print(\"Hi \" + who). Call greet(name).\n\nReference solution:\nname = \"Ada\"\ndef greet(who):\n    print(\"Hi \" + who)\ngreet(name)"
  },
  {
    "id": "m12-t2-p05",
    "topicId": "m12-t2",
    "slug": "keyword-call",
    "title": "Calling Functions: Keyword Arguments",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def pair(left, right): print(left, right). Call pair(right=2, left=1).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def pair(left, right): print(left, right). Call pair(right=2, left=1)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "pair"
    },
    "examples": [
      {
        "output": "1 2"
      }
    ],
    "constraints": [
      "Output must match: 1 2"
    ],
    "hints": [
      "Keyword names pick the parameters even if the order is swapped."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "1 2",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pair\" in globals() and callable(globals()[\"pair\"]), \"Expected a function named pair\"",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "1 2",
        "visibility": "public"
      }
    ],
    "solutionCode": "def pair(left, right):\n    print(left, right)\npair(right=2, left=1)",
    "approach": "Define def pair(left, right): print(left, right). Call pair(right=2, left=1).\n\nReference solution:\ndef pair(left, right):\n    print(left, right)\npair(right=2, left=1)"
  },
  {
    "id": "m12-t2-p06",
    "topicId": "m12-t2",
    "slug": "store-return",
    "title": "Calling Functions: Store the Return",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def triple(n): return n * 3. Set result = triple(5), then print result.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def triple(n): return n * 3. Set result = triple(5), then print result."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "result"
      ],
      "requiresFunction": "triple"
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Output must match: 15"
    ],
    "hints": [
      "Save the return value in result before printing."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "15",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"result\" in globals(), \"Expected a variable named result\"\nassert \"triple\" in globals() and callable(globals()[\"triple\"]), \"Expected a function named triple\"",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ],
    "solutionCode": "def triple(n):\n    return n * 3\nresult = triple(5)\nprint(result)",
    "approach": "Define def triple(n): return n * 3. Set result = triple(5), then print result.\n\nReference solution:\ndef triple(n):\n    return n * 3\nresult = triple(5)\nprint(result)"
  },
  {
    "id": "m12-t2-p07",
    "topicId": "m12-t2",
    "slug": "nested-calls",
    "title": "Calling Functions: Nested Calls",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def inc(n): return n + 1 and def twice(n): return n * 2. Print twice(inc(4)).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def inc(n): return n + 1 and def twice(n): return n * 2. Print twice(inc(4))."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "twice"
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must match: 10"
    ],
    "hints": [
      "inc(4) is 5, then twice(5) is 10."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"twice\" in globals() and callable(globals()[\"twice\"]), \"Expected a function named twice\"",
        "visibility": "public"
      },
      {
        "id": "m12-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def inc(n):\n    return n + 1\ndef twice(n):\n    return n * 2\nprint(twice(inc(4)))",
    "approach": "Define def inc(n): return n + 1 and def twice(n): return n * 2. Print twice(inc(4)).\n\nReference solution:\ndef inc(n):\n    return n + 1\ndef twice(n):\n    return n * 2\nprint(twice(inc(4)))"
  },
  {
    "id": "m12-t3-p01",
    "topicId": "m12-t3",
    "slug": "positional-args",
    "title": "Function Arguments: Positional Args",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def product(left, right): return left * right. Print product(6, 7).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def product(left, right): return left * right. Print product(6, 7)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "product"
    },
    "examples": [
      {
        "output": "42"
      }
    ],
    "constraints": [
      "Output must match: 42"
    ],
    "hints": [
      "The first argument fills left, the second fills right."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "42",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"product\" in globals() and callable(globals()[\"product\"]), \"Expected a function named product\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "42",
        "visibility": "public"
      }
    ],
    "solutionCode": "def product(left, right):\n    return left * right\nprint(product(6, 7))",
    "approach": "Define def product(left, right): return left * right. Print product(6, 7).\n\nReference solution:\ndef product(left, right):\n    return left * right\nprint(product(6, 7))"
  },
  {
    "id": "m12-t3-p02",
    "topicId": "m12-t3",
    "slug": "keyword-args",
    "title": "Function Arguments: Keyword Args",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def label(title, year): print(f\"{title} {year}\"). Call label(title=\"Py\", year=1991).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def label(title, year): print(f\"{title} {year}\"). Call label(title=\"Py\", year=1991)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "label"
    },
    "examples": [
      {
        "output": "Py 1991"
      }
    ],
    "constraints": [
      "Output must match: Py 1991"
    ],
    "hints": [
      "Pass arguments by name: title=..., year=..."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "Py 1991",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"label\" in globals() and callable(globals()[\"label\"]), \"Expected a function named label\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "Py 1991",
        "visibility": "public"
      }
    ],
    "solutionCode": "def label(title, year):\n    print(f\"{title} {year}\")\nlabel(title=\"Py\", year=1991)",
    "approach": "Define def label(title, year): print(f\"{title} {year}\"). Call label(title=\"Py\", year=1991).\n\nReference solution:\ndef label(title, year):\n    print(f\"{title} {year}\")\nlabel(title=\"Py\", year=1991)"
  },
  {
    "id": "m12-t3-p03",
    "topicId": "m12-t3",
    "slug": "mixed-args",
    "title": "Function Arguments: Mixed Args",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def meet(first, last): print(first, last). Call meet(\"Ada\", last=\"Lovelace\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def meet(first, last): print(first, last). Call meet(\"Ada\", last=\"Lovelace\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "meet"
    },
    "examples": [
      {
        "output": "Ada Lovelace"
      }
    ],
    "constraints": [
      "Output must match: Ada Lovelace"
    ],
    "hints": [
      "Positional first, then a keyword for last."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "Ada Lovelace",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"meet\" in globals() and callable(globals()[\"meet\"]), \"Expected a function named meet\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "Ada Lovelace",
        "visibility": "public"
      }
    ],
    "solutionCode": "def meet(first, last):\n    print(first, last)\nmeet(\"Ada\", last=\"Lovelace\")",
    "approach": "Define def meet(first, last): print(first, last). Call meet(\"Ada\", last=\"Lovelace\").\n\nReference solution:\ndef meet(first, last):\n    print(first, last)\nmeet(\"Ada\", last=\"Lovelace\")"
  },
  {
    "id": "m12-t3-p04",
    "topicId": "m12-t3",
    "slug": "default-power",
    "title": "Function Arguments: Default Argument",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def power(base, exp=2): return base ** exp. Print power(5) then print power(2, 3).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def power(base, exp=2): return base ** exp. Print power(5) then print power(2, 3)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "power"
    },
    "examples": [
      {
        "output": "25\n8"
      }
    ],
    "constraints": [
      "Output must match: 25 / 8"
    ],
    "hints": [
      "power(5) uses exp=2. power(2, 3) overrides the default."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "25\n8",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"power\" in globals() and callable(globals()[\"power\"]), \"Expected a function named power\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "25\n8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def power(base, exp=2):\n    return base ** exp\nprint(power(5))\nprint(power(2, 3))",
    "approach": "Define def power(base, exp=2): return base ** exp. Print power(5) then print power(2, 3).\n\nReference solution:\ndef power(base, exp=2):\n    return base ** exp\nprint(power(5))\nprint(power(2, 3))"
  },
  {
    "id": "m12-t3-p05",
    "topicId": "m12-t3",
    "slug": "star-args",
    "title": "Function Arguments: *args",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def total(*nums): return sum(nums). Print total(1, 2, 3, 4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def total(*nums): return sum(nums). Print total(1, 2, 3, 4)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "total"
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must match: 10"
    ],
    "hints": [
      "*nums collects extra positional arguments into a tuple."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"total\" in globals() and callable(globals()[\"total\"]), \"Expected a function named total\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def total(*nums):\n    return sum(nums)\nprint(total(1, 2, 3, 4))",
    "approach": "Define def total(*nums): return sum(nums). Print total(1, 2, 3, 4).\n\nReference solution:\ndef total(*nums):\n    return sum(nums)\nprint(total(1, 2, 3, 4))"
  },
  {
    "id": "m12-t3-p06",
    "topicId": "m12-t3",
    "slug": "star-kwargs",
    "title": "Function Arguments: **kwargs",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def show_info(**data): print(data[\"role\"]). Call show_info(name=\"Ada\", role=\"analyst\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def show_info(**data): print(data[\"role\"]). Call show_info(name=\"Ada\", role=\"analyst\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "show_info"
    },
    "examples": [
      {
        "output": "analyst"
      }
    ],
    "constraints": [
      "Output must match: analyst"
    ],
    "hints": [
      "**data collects keyword arguments into a dict."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "analyst",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"show_info\" in globals() and callable(globals()[\"show_info\"]), \"Expected a function named show_info\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "analyst",
        "visibility": "public"
      }
    ],
    "solutionCode": "def show_info(**data):\n    print(data[\"role\"])\nshow_info(name=\"Ada\", role=\"analyst\")",
    "approach": "Define def show_info(**data): print(data[\"role\"]). Call show_info(name=\"Ada\", role=\"analyst\").\n\nReference solution:\ndef show_info(**data):\n    print(data[\"role\"])\nshow_info(name=\"Ada\", role=\"analyst\")"
  },
  {
    "id": "m12-t3-p07",
    "topicId": "m12-t3",
    "slug": "join-args",
    "title": "Function Arguments: Join *args",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def join_words(*words): return \"-\".join(words). Print join_words(\"a\", \"b\", \"c\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def join_words(*words): return \"-\".join(words). Print join_words(\"a\", \"b\", \"c\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "join_words"
    },
    "examples": [
      {
        "output": "a-b-c"
      }
    ],
    "constraints": [
      "Output must match: a-b-c"
    ],
    "hints": [
      "\"-\".join(words) glues the collected arguments together."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"join_words\" in globals() and callable(globals()[\"join_words\"]), \"Expected a function named join_words\"",
        "visibility": "public"
      },
      {
        "id": "m12-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "a-b-c",
        "visibility": "public"
      }
    ],
    "solutionCode": "def join_words(*words):\n    return \"-\".join(words)\nprint(join_words(\"a\", \"b\", \"c\"))",
    "approach": "Define def join_words(*words): return \"-\".join(words). Print join_words(\"a\", \"b\", \"c\").\n\nReference solution:\ndef join_words(*words):\n    return \"-\".join(words)\nprint(join_words(\"a\", \"b\", \"c\"))"
  },
  {
    "id": "m12-t4-p01",
    "topicId": "m12-t4",
    "slug": "local-print",
    "title": "Variables in Functions: Local Variable",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def demo(): count = 7; print(count). Call demo(). count stays inside the function.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def demo(): count = 7; print(count). Call demo(). count stays inside the function."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "demo"
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Output must match: 7"
    ],
    "hints": [
      "Create count inside the function, then print it there."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "7",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"demo\" in globals() and callable(globals()[\"demo\"]), \"Expected a function named demo\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ],
    "solutionCode": "def demo():\n    count = 7\n    print(count)\ndemo()",
    "approach": "Define def demo(): count = 7; print(count). Call demo(). count stays inside the function.\n\nReference solution:\ndef demo():\n    count = 7\n    print(count)\ndemo()"
  },
  {
    "id": "m12-t4-p02",
    "topicId": "m12-t4",
    "slug": "read-global",
    "title": "Variables in Functions: Read a Global",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set message = \"outside\". Define def show(): print(message). Call show().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set message = \"outside\". Define def show(): print(message). Call show()."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "message"
      ],
      "requiresFunction": "show"
    },
    "examples": [
      {
        "output": "outside"
      }
    ],
    "constraints": [
      "Output must match: outside"
    ],
    "hints": [
      "Functions can read a name defined outside if they do not assign to it."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "outside",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"message\" in globals(), \"Expected a variable named message\"\nassert \"show\" in globals() and callable(globals()[\"show\"]), \"Expected a function named show\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "outside",
        "visibility": "public"
      }
    ],
    "solutionCode": "message = \"outside\"\ndef show():\n    print(message)\nshow()",
    "approach": "Set message = \"outside\". Define def show(): print(message). Call show().\n\nReference solution:\nmessage = \"outside\"\ndef show():\n    print(message)\nshow()"
  },
  {
    "id": "m12-t4-p03",
    "topicId": "m12-t4",
    "slug": "shadow-global",
    "title": "Variables in Functions: Local Shadows Global",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set value = 1. Inside def demo(): set value = 2 and print it. Call demo(), then print value again.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set value = 1. Inside def demo(): set value = 2 and print it. Call demo(), then print value again."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "value"
      ],
      "requiresFunction": "demo"
    },
    "examples": [
      {
        "output": "2\n1"
      }
    ],
    "constraints": [
      "Output must match: 2 / 1"
    ],
    "hints": [
      "The assignment inside demo makes a local value. The global stays 1."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "2\n1",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"value\" in globals(), \"Expected a variable named value\"\nassert \"demo\" in globals() and callable(globals()[\"demo\"]), \"Expected a function named demo\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "2\n1",
        "visibility": "public"
      }
    ],
    "solutionCode": "value = 1\ndef demo():\n    value = 2\n    print(value)\ndemo()\nprint(value)",
    "approach": "Set value = 1. Inside def demo(): set value = 2 and print it. Call demo(), then print value again.\n\nReference solution:\nvalue = 1\ndef demo():\n    value = 2\n    print(value)\ndemo()\nprint(value)"
  },
  {
    "id": "m12-t4-p04",
    "topicId": "m12-t4",
    "slug": "global-keyword",
    "title": "Variables in Functions: global Keyword",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set score = 0. Define def add_one(): use global score, then score = score + 1. Call add_one() and print score.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set score = 0. Define def add_one(): use global score, then score = score + 1. Call add_one() and print score."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "score"
      ],
      "requiresFunction": "add_one"
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Output must match: 1"
    ],
    "hints": [
      "global score lets the function update the outer name."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"score\" in globals(), \"Expected a variable named score\"\nassert \"add_one\" in globals() and callable(globals()[\"add_one\"]), \"Expected a function named add_one\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "score = 0\ndef add_one():\n    global score\n    score = score + 1\nadd_one()\nprint(score)",
    "approach": "Set score = 0. Define def add_one(): use global score, then score = score + 1. Call add_one() and print score.\n\nReference solution:\nscore = 0\ndef add_one():\n    global score\n    score = score + 1\nadd_one()\nprint(score)"
  },
  {
    "id": "m12-t4-p05",
    "topicId": "m12-t4",
    "slug": "param-is-local",
    "title": "Variables in Functions: Parameter Is Local",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set count = 5. Define def bump(count): count = count + 10; print(count). Call bump(count), then print count.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set count = 5. Define def bump(count): count = count + 10; print(count). Call bump(count), then print count."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "count"
      ],
      "requiresFunction": "bump"
    },
    "examples": [
      {
        "output": "15\n5"
      }
    ],
    "constraints": [
      "Output must match: 15 / 5"
    ],
    "hints": [
      "The parameter count is local, so the outer count stays 5."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "15\n5",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"count\" in globals(), \"Expected a variable named count\"\nassert \"bump\" in globals() and callable(globals()[\"bump\"]), \"Expected a function named bump\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "15\n5",
        "visibility": "public"
      }
    ],
    "solutionCode": "count = 5\ndef bump(count):\n    count = count + 10\n    print(count)\nbump(count)\nprint(count)",
    "approach": "Set count = 5. Define def bump(count): count = count + 10; print(count). Call bump(count), then print count.\n\nReference solution:\ncount = 5\ndef bump(count):\n    count = count + 10\n    print(count)\nbump(count)\nprint(count)"
  },
  {
    "id": "m12-t4-p06",
    "topicId": "m12-t4",
    "slug": "return-local",
    "title": "Variables in Functions: Return a Local",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def make(): inner = 42; return inner. Set result = make(), then print result.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def make(): inner = 42; return inner. Set result = make(), then print result."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "result"
      ],
      "requiresFunction": "make"
    },
    "examples": [
      {
        "output": "42"
      }
    ],
    "constraints": [
      "Output must match: 42"
    ],
    "hints": [
      "return sends the local value out. Store it in result."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "42",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"result\" in globals(), \"Expected a variable named result\"\nassert \"make\" in globals() and callable(globals()[\"make\"]), \"Expected a function named make\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "42",
        "visibility": "public"
      }
    ],
    "solutionCode": "def make():\n    inner = 42\n    return inner\nresult = make()\nprint(result)",
    "approach": "Define def make(): inner = 42; return inner. Set result = make(), then print result.\n\nReference solution:\ndef make():\n    inner = 42\n    return inner\nresult = make()\nprint(result)"
  },
  {
    "id": "m12-t4-p07",
    "topicId": "m12-t4",
    "slug": "nested-read",
    "title": "Variables in Functions: Nested Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def outer(): set label = \"ok\", then def inner(): print(label). Call inner() from outer, then call outer().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def outer(): set label = \"ok\", then def inner(): print(label). Call inner() from outer, then call outer()."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "outer"
    },
    "examples": [
      {
        "output": "ok"
      }
    ],
    "constraints": [
      "Output must match: ok"
    ],
    "hints": [
      "inner can read label from the enclosing outer function."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "ok",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"outer\" in globals() and callable(globals()[\"outer\"]), \"Expected a function named outer\"",
        "visibility": "public"
      },
      {
        "id": "m12-t4-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "ok",
        "visibility": "public"
      }
    ],
    "solutionCode": "def outer():\n    label = \"ok\"\n    def inner():\n        print(label)\n    inner()\nouter()",
    "approach": "Define def outer(): set label = \"ok\", then def inner(): print(label). Call inner() from outer, then call outer().\n\nReference solution:\ndef outer():\n    label = \"ok\"\n    def inner():\n        print(label)\n    inner()\nouter()"
  },
  {
    "id": "m12-t5-p01",
    "topicId": "m12-t5",
    "slug": "countdown-rec",
    "title": "Recursion: Base Case",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def countdown(n): print(n); if n > 1: countdown(n - 1). Call countdown(3).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def countdown(n): print(n); if n > 1: countdown(n - 1). Call countdown(3)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "countdown",
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "3\n2\n1"
      }
    ],
    "constraints": [
      "Output must match: 3 / 2 / 1"
    ],
    "hints": [
      "Print first, then recurse while n is still greater than 1."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "3\n2\n1",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"countdown\" in globals() and callable(globals()[\"countdown\"]), \"Expected a function named countdown\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "3\n2\n1",
        "visibility": "public"
      }
    ],
    "solutionCode": "def countdown(n):\n    print(n)\n    if n > 1:\n        countdown(n - 1)\ncountdown(3)",
    "approach": "Define def countdown(n): print(n); if n > 1: countdown(n - 1). Call countdown(3).\n\nReference solution:\ndef countdown(n):\n    print(n)\n    if n > 1:\n        countdown(n - 1)\ncountdown(3)"
  },
  {
    "id": "m12-t5-p02",
    "topicId": "m12-t5",
    "slug": "factorial-rec",
    "title": "Recursion: Factorial",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def fact(n): return 1 if n <= 1 else n * fact(n - 1). Print fact(5).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def fact(n): return 1 if n <= 1 else n * fact(n - 1). Print fact(5)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "fact",
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "120"
      }
    ],
    "constraints": [
      "Output must match: 120"
    ],
    "hints": [
      "Stop at 1, otherwise multiply n by fact(n - 1)."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "120",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"fact\" in globals() and callable(globals()[\"fact\"]), \"Expected a function named fact\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "120",
        "visibility": "public"
      }
    ],
    "solutionCode": "def fact(n):\n    return 1 if n <= 1 else n * fact(n - 1)\nprint(fact(5))",
    "approach": "Define def fact(n): return 1 if n <= 1 else n * fact(n - 1). Print fact(5).\n\nReference solution:\ndef fact(n):\n    return 1 if n <= 1 else n * fact(n - 1)\nprint(fact(5))"
  },
  {
    "id": "m12-t5-p03",
    "topicId": "m12-t5",
    "slug": "sum-rec",
    "title": "Recursion: Recursive Sum",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def rsum(n): return 0 if n <= 0 else n + rsum(n - 1). Print rsum(5).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def rsum(n): return 0 if n <= 0 else n + rsum(n - 1). Print rsum(5)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "rsum",
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "15"
      }
    ],
    "constraints": [
      "Output must match: 15"
    ],
    "hints": [
      "1+2+3+4+5 = 15. The base case is 0."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "15",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rsum\" in globals() and callable(globals()[\"rsum\"]), \"Expected a function named rsum\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ],
    "solutionCode": "def rsum(n):\n    return 0 if n <= 0 else n + rsum(n - 1)\nprint(rsum(5))",
    "approach": "Define def rsum(n): return 0 if n <= 0 else n + rsum(n - 1). Print rsum(5).\n\nReference solution:\ndef rsum(n):\n    return 0 if n <= 0 else n + rsum(n - 1)\nprint(rsum(5))"
  },
  {
    "id": "m12-t5-p04",
    "topicId": "m12-t5",
    "slug": "fib-rec",
    "title": "Recursion: Fibonacci",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def fib(n): return n if n <= 1 else fib(n - 1) + fib(n - 2). Print fib(6).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def fib(n): return n if n <= 1 else fib(n - 1) + fib(n - 2). Print fib(6)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "fib",
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output must match: 8"
    ],
    "hints": [
      "fib(6) is 8: 0, 1, 1, 2, 3, 5, 8."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "8",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"fib\" in globals() and callable(globals()[\"fib\"]), \"Expected a function named fib\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def fib(n):\n    return n if n <= 1 else fib(n - 1) + fib(n - 2)\nprint(fib(6))",
    "approach": "Define def fib(n): return n if n <= 1 else fib(n - 1) + fib(n - 2). Print fib(6).\n\nReference solution:\ndef fib(n):\n    return n if n <= 1 else fib(n - 1) + fib(n - 2)\nprint(fib(6))"
  },
  {
    "id": "m12-t5-p05",
    "topicId": "m12-t5",
    "slug": "power-rec",
    "title": "Recursion: Power",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def power(base, exp): return 1 if exp == 0 else base * power(base, exp - 1). Print power(2, 3).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def power(base, exp): return 1 if exp == 0 else base * power(base, exp - 1). Print power(2, 3)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "power",
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output must match: 8"
    ],
    "hints": [
      "Anything to the power 0 is 1. Otherwise multiply base by a smaller power."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "8",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"power\" in globals() and callable(globals()[\"power\"]), \"Expected a function named power\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def power(base, exp):\n    return 1 if exp == 0 else base * power(base, exp - 1)\nprint(power(2, 3))",
    "approach": "Define def power(base, exp): return 1 if exp == 0 else base * power(base, exp - 1). Print power(2, 3).\n\nReference solution:\ndef power(base, exp):\n    return 1 if exp == 0 else base * power(base, exp - 1)\nprint(power(2, 3))"
  },
  {
    "id": "m12-t5-p06",
    "topicId": "m12-t5",
    "slug": "rlen-rec",
    "title": "Recursion: Recursive Length",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def rlen(text): return 0 if text == \"\" else 1 + rlen(text[1:]). Print rlen(\"abc\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def rlen(text): return 0 if text == \"\" else 1 + rlen(text[1:]). Print rlen(\"abc\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "rlen",
      "requiresIfCondition": true,
      "requiresListAccess": true
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
      "Each call peels off one character until the string is empty."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rlen\" in globals() and callable(globals()[\"rlen\"]), \"Expected a function named rlen\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def rlen(text):\n    return 0 if text == \"\" else 1 + rlen(text[1:])\nprint(rlen(\"abc\"))",
    "approach": "Define def rlen(text): return 0 if text == \"\" else 1 + rlen(text[1:]). Print rlen(\"abc\").\n\nReference solution:\ndef rlen(text):\n    return 0 if text == \"\" else 1 + rlen(text[1:])\nprint(rlen(\"abc\"))"
  },
  {
    "id": "m12-t5-p07",
    "topicId": "m12-t5",
    "slug": "print-down-rec",
    "title": "Recursion: Silent Base",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def print_down(n): if n >= 1: print(n); print_down(n - 1). Call print_down(2).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define def print_down(n): if n >= 1: print(n); print_down(n - 1). Call print_down(2)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "print_down",
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "2\n1"
      }
    ],
    "constraints": [
      "Output must match: 2 / 1"
    ],
    "hints": [
      "When n is 0 the if is false, so recursion stops without printing."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "2\n1",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"print_down\" in globals() and callable(globals()[\"print_down\"]), \"Expected a function named print_down\"",
        "visibility": "public"
      },
      {
        "id": "m12-t5-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "2\n1",
        "visibility": "public"
      }
    ],
    "solutionCode": "def print_down(n):\n    if n >= 1:\n        print(n)\n        print_down(n - 1)\nprint_down(2)",
    "approach": "Define def print_down(n): if n >= 1: print(n); print_down(n - 1). Call print_down(2).\n\nReference solution:\ndef print_down(n):\n    if n >= 1:\n        print(n)\n        print_down(n - 1)\nprint_down(2)"
  },
  {
    "id": "m12-t6-p01",
    "topicId": "m12-t6",
    "slug": "basic-lambda",
    "title": "Lambda Functions: Basic Lambda",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set double = lambda x: x * 2, then print double(5).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set double = lambda x: x * 2, then print double(5)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "double"
      ]
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must match: 10"
    ],
    "hints": [
      "double = lambda x: x * 2\nprint(double(5))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"double\" in globals(), \"Expected a variable named double\"",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "double = lambda x: x * 2\nprint(double(5))",
    "approach": "Set double = lambda x: x * 2, then print double(5).\n\nReference solution:\ndouble = lambda x: x * 2\nprint(double(5))"
  },
  {
    "id": "m12-t6-p02",
    "topicId": "m12-t6",
    "slug": "lambda-add",
    "title": "Lambda Functions: Lambda Add",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set add = lambda left, right: left + right, then print add(3, 4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set add = lambda left, right: left + right, then print add(3, 4)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "add"
      ]
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Output must match: 7"
    ],
    "hints": [
      "add = lambda left, right: left + right\nprint(add(3, 4))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "7",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"add\" in globals(), \"Expected a variable named add\"",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ],
    "solutionCode": "add = lambda left, right: left + right\nprint(add(3, 4))",
    "approach": "Set add = lambda left, right: left + right, then print add(3, 4).\n\nReference solution:\nadd = lambda left, right: left + right\nprint(add(3, 4))"
  },
  {
    "id": "m12-t6-p03",
    "topicId": "m12-t6",
    "slug": "lambda-square",
    "title": "Lambda Functions: Lambda Square",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set square = lambda x: x ** 2, then print square(4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set square = lambda x: x ** 2, then print square(4)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "square"
      ]
    },
    "examples": [
      {
        "output": "16"
      }
    ],
    "constraints": [
      "Output must match: 16"
    ],
    "hints": [
      "square = lambda x: x ** 2\nprint(square(4))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "16",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"square\" in globals(), \"Expected a variable named square\"",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "16",
        "visibility": "public"
      }
    ],
    "solutionCode": "square = lambda x: x ** 2\nprint(square(4))",
    "approach": "Set square = lambda x: x ** 2, then print square(4).\n\nReference solution:\nsquare = lambda x: x ** 2\nprint(square(4))"
  },
  {
    "id": "m12-t6-p04",
    "topicId": "m12-t6",
    "slug": "map-lambda",
    "title": "Lambda Functions: map with Lambda",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set doubled = list(map(lambda x: x * 2, [1, 2, 3])). Print doubled.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set doubled = list(map(lambda x: x * 2, [1, 2, 3])). Print doubled."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "doubled"
      ]
    },
    "examples": [
      {
        "output": "[2, 4, 6]"
      }
    ],
    "constraints": [
      "Output must match: [2, 4, 6]"
    ],
    "hints": [
      "map applies the lambda to each item. Wrap it in list()."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "[2, 4, 6]",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"doubled\" in globals(), \"Expected a variable named doubled\"",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "[2, 4, 6]",
        "visibility": "public"
      }
    ],
    "solutionCode": "doubled = list(map(lambda x: x * 2, [1, 2, 3]))\nprint(doubled)",
    "approach": "Set doubled = list(map(lambda x: x * 2, [1, 2, 3])). Print doubled.\n\nReference solution:\ndoubled = list(map(lambda x: x * 2, [1, 2, 3]))\nprint(doubled)"
  },
  {
    "id": "m12-t6-p05",
    "topicId": "m12-t6",
    "slug": "filter-lambda",
    "title": "Lambda Functions: filter with Lambda",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Set big = list(filter(lambda x: x > 2, [1, 2, 3, 4])). Print big.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set big = list(filter(lambda x: x > 2, [1, 2, 3, 4])). Print big."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "big"
      ]
    },
    "examples": [
      {
        "output": "[3, 4]"
      }
    ],
    "constraints": [
      "Output must match: [3, 4]"
    ],
    "hints": [
      "filter keeps items where the lambda is True."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "[3, 4]",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"big\" in globals(), \"Expected a variable named big\"",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "[3, 4]",
        "visibility": "public"
      }
    ],
    "solutionCode": "big = list(filter(lambda x: x > 2, [1, 2, 3, 4]))\nprint(big)",
    "approach": "Set big = list(filter(lambda x: x > 2, [1, 2, 3, 4])). Print big.\n\nReference solution:\nbig = list(filter(lambda x: x > 2, [1, 2, 3, 4]))\nprint(big)"
  },
  {
    "id": "m12-t6-p06",
    "topicId": "m12-t6",
    "slug": "sorted-lambda",
    "title": "Lambda Functions: sorted with Lambda",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set ordered = sorted([\"bb\", \"a\", \"ccc\"], key=lambda word: len(word)). Print ordered.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set ordered = sorted([\"bb\", \"a\", \"ccc\"], key=lambda word: len(word)). Print ordered."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "ordered"
      ]
    },
    "examples": [
      {
        "output": "['a', 'bb', 'ccc']"
      }
    ],
    "constraints": [
      "Output must match: ['a', 'bb', 'ccc']"
    ],
    "hints": [
      "key=lambda word: len(word) sorts by string length."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "['a', 'bb', 'ccc']",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"ordered\" in globals(), \"Expected a variable named ordered\"",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "['a', 'bb', 'ccc']",
        "visibility": "public"
      }
    ],
    "solutionCode": "ordered = sorted([\"bb\", \"a\", \"ccc\"], key=lambda word: len(word))\nprint(ordered)",
    "approach": "Set ordered = sorted([\"bb\", \"a\", \"ccc\"], key=lambda word: len(word)). Print ordered.\n\nReference solution:\nordered = sorted([\"bb\", \"a\", \"ccc\"], key=lambda word: len(word))\nprint(ordered)"
  },
  {
    "id": "m12-t6-p07",
    "topicId": "m12-t6",
    "slug": "immediate-lambda",
    "title": "Lambda Functions: Immediate Call",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print (lambda x: x + 1)(9).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print (lambda x: x + 1)(9)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must match: 10"
    ],
    "hints": [
      "The extra parentheses call the lambda right away with 9."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p07-t2",
        "label": "Exact Output",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m12-t6-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((lambda x: x + 1)(9))",
    "approach": "Print (lambda x: x + 1)(9).\n\nReference solution:\nprint((lambda x: x + 1)(9))"
  }
];
