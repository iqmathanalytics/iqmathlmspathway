import type { PracticeProblem } from "@/lib/types";

export const module12Practice: PracticeProblem[] = [
  {
    "id": "m12-t1-p01",
    "topicId": "m12-t1",
    "slug": "def-basic",
    "title": "Creating Functions: Define a Function",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def greet(): print(\"Hi\"), call it.",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Define and call a simple function."
        }
      ],
      "editorPlaceholder": "# def greet",
      "successDetail": "Correct!"
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
      "def greet():\\n    print(\"Hi\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(): print(\"Hi\"), call it. Key points: def greet():\\n print(\"Hi\")\\ngreet() A correct solution looks like this: def greet(): print(\"Hi\") greet()",
    "publicTests": [
      {
        "id": "m12-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hi",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hi\")\ngreet()"
  },
  {
    "id": "m12-t1-p02",
    "topicId": "m12-t1",
    "slug": "def-return",
    "title": "Creating Functions: Return Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def add(a,b): return a+b, print add(2,3).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "add",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "return"
        },
        {
          "type": "text",
          "value": " to send back a value."
        }
      ],
      "editorPlaceholder": "# return",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Output: 5"
    ],
    "hints": [
      "def add(a,b):\\n    return a+b\\nprint(add(2,3))"
    ],
    "starterCode": "",
    "approach": "Define def add(a,b): return a+b, print add(2,3). Key points: def add(a,b):\\n return a+b\\nprint(add(2,3)) A correct solution looks like this: def add(a,b): return a+b print(add(2,3))",
    "publicTests": [
      {
        "id": "m12-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "def add(a,b):\n    return a+b\nprint(add(2,3))"
  },
  {
    "id": "m12-t1-p03",
    "topicId": "m12-t1",
    "slug": "def-param",
    "title": "Creating Functions: Parameter",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def shout(name): print(name.upper()), call shout(\"hi\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "shout",
      "introSegments": [
        {
          "type": "text",
          "value": "Pass an argument to a function."
        }
      ],
      "editorPlaceholder": "# param",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "HI"
      }
    ],
    "constraints": [
      "Output: HI"
    ],
    "hints": [
      "def shout(name):\\n    print(name.upper())\\nshout(\"hi\")"
    ],
    "starterCode": "",
    "approach": "Define def shout(name): print(name.upper()), call shout(\"hi\"). Key points: def shout(name):\\n print(name.upper())\\nshout(\"hi\") A correct solution looks like this: def shout(name): print(name.upper()) shout(\"hi\")",
    "publicTests": [
      {
        "id": "m12-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "HI",
        "visibility": "public"
      }
    ],
    "solutionCode": "def shout(name):\n    print(name.upper())\nshout(\"hi\")"
  },
  {
    "id": "m12-t1-p04",
    "topicId": "m12-t1",
    "slug": "def-default",
    "title": "Creating Functions: Default Parameter",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Default parameter values."
        }
      ],
      "editorPlaceholder": "# default",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Hi Guest"
      }
    ],
    "constraints": [
      "Output: Hi Guest"
    ],
    "hints": [
      "def greet(name=\"Guest\"):\\n    print(f\"Hi {name}\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet(). Key points: def greet(name=\"Guest\"):\\n print(f\"Hi {name}\")\\ngreet() A correct solution looks like this: def greet(name=\"Guest\"): print(f\"Hi {name}\") greet()",
    "publicTests": [
      {
        "id": "m12-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Hi Guest",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet(name=\"Guest\"):\n    print(f\"Hi {name}\")\ngreet()"
  },
  {
    "id": "m12-t1-p05",
    "topicId": "m12-t1",
    "slug": "def-multiple-return",
    "title": "Creating Functions: Multiple Returns",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "minmax",
      "introSegments": [
        {
          "type": "text",
          "value": "Return multiple values as tuple."
        }
      ],
      "editorPlaceholder": "# multi return",
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
      "def minmax(a,b):\\n    return min(a,b), max(a,b)\\nprint(minmax(3,7)[0])"
    ],
    "starterCode": "",
    "approach": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0]. Key points: def minmax(a,b):\\n return min(a,b), max(a,b)\\nprint(minmax(3,7)[0]) A correct solution looks like this: def minmax(a,b): return min(a,b), max(a,b) print(minmax(3,7)[0])",
    "publicTests": [
      {
        "id": "m12-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def minmax(a,b):\n    return min(a,b), max(a,b)\nprint(minmax(3,7)[0])"
  },
  {
    "id": "m12-t1-p06",
    "topicId": "m12-t1",
    "slug": "def-scope",
    "title": "Creating Functions: Local Variable",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def f(): x=10; return x, print f().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "f",
      "introSegments": [
        {
          "type": "text",
          "value": "Variables inside functions are local."
        }
      ],
      "editorPlaceholder": "# local",
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
      "def f():\\n    x=10\\n    return x\\nprint(f())"
    ],
    "starterCode": "",
    "approach": "Define def f(): x=10; return x, print f(). Key points: def f():\\n x=10\\n return x\\nprint(f()) A correct solution looks like this: def f(): x=10 return x print(f())",
    "publicTests": [
      {
        "id": "m12-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def f():\n    x=10\n    return x\nprint(f())"
  },
  {
    "id": "m12-t1-p07",
    "topicId": "m12-t1",
    "slug": "def-nested",
    "title": "Creating Functions: Function Calling Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "quad",
      "introSegments": [
        {
          "type": "text",
          "value": "One function can call another."
        }
      ],
      "editorPlaceholder": "# nested fn",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output: 8"
    ],
    "hints": [
      "def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2))"
    ],
    "starterCode": "",
    "approach": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2). Key points: def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2)) A correct solution looks like this: def double(x): return x*2 def quad(x): return double(double(x)) print(quad(2))",
    "publicTests": [
      {
        "id": "m12-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def double(x): return x*2\ndef quad(x): return double(double(x))\nprint(quad(2))"
  },
  {
    "id": "m12-t2-p01",
    "topicId": "m12-t2",
    "slug": "def-basic",
    "title": "Calling Functions: Define a Function",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def greet(): print(\"Hi\"), call it.",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Define and call a simple function."
        }
      ],
      "editorPlaceholder": "# def greet",
      "successDetail": "Correct!"
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
      "def greet():\\n    print(\"Hi\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(): print(\"Hi\"), call it. Key points: def greet():\\n print(\"Hi\")\\ngreet() A correct solution looks like this: def greet(): print(\"Hi\") greet()",
    "publicTests": [
      {
        "id": "m12-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hi",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hi\")\ngreet()"
  },
  {
    "id": "m12-t2-p02",
    "topicId": "m12-t2",
    "slug": "def-return",
    "title": "Calling Functions: Return Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def add(a,b): return a+b, print add(2,3).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "add",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "return"
        },
        {
          "type": "text",
          "value": " to send back a value."
        }
      ],
      "editorPlaceholder": "# return",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Output: 5"
    ],
    "hints": [
      "def add(a,b):\\n    return a+b\\nprint(add(2,3))"
    ],
    "starterCode": "",
    "approach": "Define def add(a,b): return a+b, print add(2,3). Key points: def add(a,b):\\n return a+b\\nprint(add(2,3)) A correct solution looks like this: def add(a,b): return a+b print(add(2,3))",
    "publicTests": [
      {
        "id": "m12-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "def add(a,b):\n    return a+b\nprint(add(2,3))"
  },
  {
    "id": "m12-t2-p03",
    "topicId": "m12-t2",
    "slug": "def-param",
    "title": "Calling Functions: Parameter",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def shout(name): print(name.upper()), call shout(\"hi\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "shout",
      "introSegments": [
        {
          "type": "text",
          "value": "Pass an argument to a function."
        }
      ],
      "editorPlaceholder": "# param",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "HI"
      }
    ],
    "constraints": [
      "Output: HI"
    ],
    "hints": [
      "def shout(name):\\n    print(name.upper())\\nshout(\"hi\")"
    ],
    "starterCode": "",
    "approach": "Define def shout(name): print(name.upper()), call shout(\"hi\"). Key points: def shout(name):\\n print(name.upper())\\nshout(\"hi\") A correct solution looks like this: def shout(name): print(name.upper()) shout(\"hi\")",
    "publicTests": [
      {
        "id": "m12-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "HI",
        "visibility": "public"
      }
    ],
    "solutionCode": "def shout(name):\n    print(name.upper())\nshout(\"hi\")"
  },
  {
    "id": "m12-t2-p04",
    "topicId": "m12-t2",
    "slug": "def-default",
    "title": "Calling Functions: Default Parameter",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Default parameter values."
        }
      ],
      "editorPlaceholder": "# default",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Hi Guest"
      }
    ],
    "constraints": [
      "Output: Hi Guest"
    ],
    "hints": [
      "def greet(name=\"Guest\"):\\n    print(f\"Hi {name}\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet(). Key points: def greet(name=\"Guest\"):\\n print(f\"Hi {name}\")\\ngreet() A correct solution looks like this: def greet(name=\"Guest\"): print(f\"Hi {name}\") greet()",
    "publicTests": [
      {
        "id": "m12-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Hi Guest",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet(name=\"Guest\"):\n    print(f\"Hi {name}\")\ngreet()"
  },
  {
    "id": "m12-t2-p05",
    "topicId": "m12-t2",
    "slug": "def-multiple-return",
    "title": "Calling Functions: Multiple Returns",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "minmax",
      "introSegments": [
        {
          "type": "text",
          "value": "Return multiple values as tuple."
        }
      ],
      "editorPlaceholder": "# multi return",
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
      "def minmax(a,b):\\n    return min(a,b), max(a,b)\\nprint(minmax(3,7)[0])"
    ],
    "starterCode": "",
    "approach": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0]. Key points: def minmax(a,b):\\n return min(a,b), max(a,b)\\nprint(minmax(3,7)[0]) A correct solution looks like this: def minmax(a,b): return min(a,b), max(a,b) print(minmax(3,7)[0])",
    "publicTests": [
      {
        "id": "m12-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def minmax(a,b):\n    return min(a,b), max(a,b)\nprint(minmax(3,7)[0])"
  },
  {
    "id": "m12-t2-p06",
    "topicId": "m12-t2",
    "slug": "def-scope",
    "title": "Calling Functions: Local Variable",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def f(): x=10; return x, print f().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "f",
      "introSegments": [
        {
          "type": "text",
          "value": "Variables inside functions are local."
        }
      ],
      "editorPlaceholder": "# local",
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
      "def f():\\n    x=10\\n    return x\\nprint(f())"
    ],
    "starterCode": "",
    "approach": "Define def f(): x=10; return x, print f(). Key points: def f():\\n x=10\\n return x\\nprint(f()) A correct solution looks like this: def f(): x=10 return x print(f())",
    "publicTests": [
      {
        "id": "m12-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def f():\n    x=10\n    return x\nprint(f())"
  },
  {
    "id": "m12-t2-p07",
    "topicId": "m12-t2",
    "slug": "def-nested",
    "title": "Calling Functions: Function Calling Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "quad",
      "introSegments": [
        {
          "type": "text",
          "value": "One function can call another."
        }
      ],
      "editorPlaceholder": "# nested fn",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output: 8"
    ],
    "hints": [
      "def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2))"
    ],
    "starterCode": "",
    "approach": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2). Key points: def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2)) A correct solution looks like this: def double(x): return x*2 def quad(x): return double(double(x)) print(quad(2))",
    "publicTests": [
      {
        "id": "m12-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def double(x): return x*2\ndef quad(x): return double(double(x))\nprint(quad(2))"
  },
  {
    "id": "m12-t3-p01",
    "topicId": "m12-t3",
    "slug": "def-basic",
    "title": "Function Arguments: Define a Function",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def greet(): print(\"Hi\"), call it.",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Define and call a simple function."
        }
      ],
      "editorPlaceholder": "# def greet",
      "successDetail": "Correct!"
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
      "def greet():\\n    print(\"Hi\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(): print(\"Hi\"), call it. Key points: def greet():\\n print(\"Hi\")\\ngreet() A correct solution looks like this: def greet(): print(\"Hi\") greet()",
    "publicTests": [
      {
        "id": "m12-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hi",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hi\")\ngreet()"
  },
  {
    "id": "m12-t3-p02",
    "topicId": "m12-t3",
    "slug": "def-return",
    "title": "Function Arguments: Return Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def add(a,b): return a+b, print add(2,3).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "add",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "return"
        },
        {
          "type": "text",
          "value": " to send back a value."
        }
      ],
      "editorPlaceholder": "# return",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Output: 5"
    ],
    "hints": [
      "def add(a,b):\\n    return a+b\\nprint(add(2,3))"
    ],
    "starterCode": "",
    "approach": "Define def add(a,b): return a+b, print add(2,3). Key points: def add(a,b):\\n return a+b\\nprint(add(2,3)) A correct solution looks like this: def add(a,b): return a+b print(add(2,3))",
    "publicTests": [
      {
        "id": "m12-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "def add(a,b):\n    return a+b\nprint(add(2,3))"
  },
  {
    "id": "m12-t3-p03",
    "topicId": "m12-t3",
    "slug": "def-param",
    "title": "Function Arguments: Parameter",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def shout(name): print(name.upper()), call shout(\"hi\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "shout",
      "introSegments": [
        {
          "type": "text",
          "value": "Pass an argument to a function."
        }
      ],
      "editorPlaceholder": "# param",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "HI"
      }
    ],
    "constraints": [
      "Output: HI"
    ],
    "hints": [
      "def shout(name):\\n    print(name.upper())\\nshout(\"hi\")"
    ],
    "starterCode": "",
    "approach": "Define def shout(name): print(name.upper()), call shout(\"hi\"). Key points: def shout(name):\\n print(name.upper())\\nshout(\"hi\") A correct solution looks like this: def shout(name): print(name.upper()) shout(\"hi\")",
    "publicTests": [
      {
        "id": "m12-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "HI",
        "visibility": "public"
      }
    ],
    "solutionCode": "def shout(name):\n    print(name.upper())\nshout(\"hi\")"
  },
  {
    "id": "m12-t3-p04",
    "topicId": "m12-t3",
    "slug": "def-default",
    "title": "Function Arguments: Default Parameter",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Default parameter values."
        }
      ],
      "editorPlaceholder": "# default",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Hi Guest"
      }
    ],
    "constraints": [
      "Output: Hi Guest"
    ],
    "hints": [
      "def greet(name=\"Guest\"):\\n    print(f\"Hi {name}\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet(). Key points: def greet(name=\"Guest\"):\\n print(f\"Hi {name}\")\\ngreet() A correct solution looks like this: def greet(name=\"Guest\"): print(f\"Hi {name}\") greet()",
    "publicTests": [
      {
        "id": "m12-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Hi Guest",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet(name=\"Guest\"):\n    print(f\"Hi {name}\")\ngreet()"
  },
  {
    "id": "m12-t3-p05",
    "topicId": "m12-t3",
    "slug": "def-multiple-return",
    "title": "Function Arguments: Multiple Returns",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "minmax",
      "introSegments": [
        {
          "type": "text",
          "value": "Return multiple values as tuple."
        }
      ],
      "editorPlaceholder": "# multi return",
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
      "def minmax(a,b):\\n    return min(a,b), max(a,b)\\nprint(minmax(3,7)[0])"
    ],
    "starterCode": "",
    "approach": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0]. Key points: def minmax(a,b):\\n return min(a,b), max(a,b)\\nprint(minmax(3,7)[0]) A correct solution looks like this: def minmax(a,b): return min(a,b), max(a,b) print(minmax(3,7)[0])",
    "publicTests": [
      {
        "id": "m12-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def minmax(a,b):\n    return min(a,b), max(a,b)\nprint(minmax(3,7)[0])"
  },
  {
    "id": "m12-t3-p06",
    "topicId": "m12-t3",
    "slug": "def-scope",
    "title": "Function Arguments: Local Variable",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def f(): x=10; return x, print f().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "f",
      "introSegments": [
        {
          "type": "text",
          "value": "Variables inside functions are local."
        }
      ],
      "editorPlaceholder": "# local",
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
      "def f():\\n    x=10\\n    return x\\nprint(f())"
    ],
    "starterCode": "",
    "approach": "Define def f(): x=10; return x, print f(). Key points: def f():\\n x=10\\n return x\\nprint(f()) A correct solution looks like this: def f(): x=10 return x print(f())",
    "publicTests": [
      {
        "id": "m12-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def f():\n    x=10\n    return x\nprint(f())"
  },
  {
    "id": "m12-t3-p07",
    "topicId": "m12-t3",
    "slug": "def-nested",
    "title": "Function Arguments: Function Calling Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "quad",
      "introSegments": [
        {
          "type": "text",
          "value": "One function can call another."
        }
      ],
      "editorPlaceholder": "# nested fn",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output: 8"
    ],
    "hints": [
      "def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2))"
    ],
    "starterCode": "",
    "approach": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2). Key points: def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2)) A correct solution looks like this: def double(x): return x*2 def quad(x): return double(double(x)) print(quad(2))",
    "publicTests": [
      {
        "id": "m12-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def double(x): return x*2\ndef quad(x): return double(double(x))\nprint(quad(2))"
  },
  {
    "id": "m12-t4-p01",
    "topicId": "m12-t4",
    "slug": "def-basic",
    "title": "Variables in Functions: Define a Function",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def greet(): print(\"Hi\"), call it.",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Define and call a simple function."
        }
      ],
      "editorPlaceholder": "# def greet",
      "successDetail": "Correct!"
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
      "def greet():\\n    print(\"Hi\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(): print(\"Hi\"), call it. Key points: def greet():\\n print(\"Hi\")\\ngreet() A correct solution looks like this: def greet(): print(\"Hi\") greet()",
    "publicTests": [
      {
        "id": "m12-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Hi",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet():\n    print(\"Hi\")\ngreet()"
  },
  {
    "id": "m12-t4-p02",
    "topicId": "m12-t4",
    "slug": "def-return",
    "title": "Variables in Functions: Return Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def add(a,b): return a+b, print add(2,3).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "add",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "return"
        },
        {
          "type": "text",
          "value": " to send back a value."
        }
      ],
      "editorPlaceholder": "# return",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Output: 5"
    ],
    "hints": [
      "def add(a,b):\\n    return a+b\\nprint(add(2,3))"
    ],
    "starterCode": "",
    "approach": "Define def add(a,b): return a+b, print add(2,3). Key points: def add(a,b):\\n return a+b\\nprint(add(2,3)) A correct solution looks like this: def add(a,b): return a+b print(add(2,3))",
    "publicTests": [
      {
        "id": "m12-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "def add(a,b):\n    return a+b\nprint(add(2,3))"
  },
  {
    "id": "m12-t4-p03",
    "topicId": "m12-t4",
    "slug": "def-param",
    "title": "Variables in Functions: Parameter",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def shout(name): print(name.upper()), call shout(\"hi\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "shout",
      "introSegments": [
        {
          "type": "text",
          "value": "Pass an argument to a function."
        }
      ],
      "editorPlaceholder": "# param",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "HI"
      }
    ],
    "constraints": [
      "Output: HI"
    ],
    "hints": [
      "def shout(name):\\n    print(name.upper())\\nshout(\"hi\")"
    ],
    "starterCode": "",
    "approach": "Define def shout(name): print(name.upper()), call shout(\"hi\"). Key points: def shout(name):\\n print(name.upper())\\nshout(\"hi\") A correct solution looks like this: def shout(name): print(name.upper()) shout(\"hi\")",
    "publicTests": [
      {
        "id": "m12-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "HI",
        "visibility": "public"
      }
    ],
    "solutionCode": "def shout(name):\n    print(name.upper())\nshout(\"hi\")"
  },
  {
    "id": "m12-t4-p04",
    "topicId": "m12-t4",
    "slug": "def-default",
    "title": "Variables in Functions: Default Parameter",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "greet",
      "introSegments": [
        {
          "type": "text",
          "value": "Default parameter values."
        }
      ],
      "editorPlaceholder": "# default",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Hi Guest"
      }
    ],
    "constraints": [
      "Output: Hi Guest"
    ],
    "hints": [
      "def greet(name=\"Guest\"):\\n    print(f\"Hi {name}\")\\ngreet()"
    ],
    "starterCode": "",
    "approach": "Define def greet(name=\"Guest\"): print(f\"Hi {name}\"), call greet(). Key points: def greet(name=\"Guest\"):\\n print(f\"Hi {name}\")\\ngreet() A correct solution looks like this: def greet(name=\"Guest\"): print(f\"Hi {name}\") greet()",
    "publicTests": [
      {
        "id": "m12-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Hi Guest",
        "visibility": "public"
      }
    ],
    "solutionCode": "def greet(name=\"Guest\"):\n    print(f\"Hi {name}\")\ngreet()"
  },
  {
    "id": "m12-t4-p05",
    "topicId": "m12-t4",
    "slug": "def-multiple-return",
    "title": "Variables in Functions: Multiple Returns",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "minmax",
      "introSegments": [
        {
          "type": "text",
          "value": "Return multiple values as tuple."
        }
      ],
      "editorPlaceholder": "# multi return",
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
      "def minmax(a,b):\\n    return min(a,b), max(a,b)\\nprint(minmax(3,7)[0])"
    ],
    "starterCode": "",
    "approach": "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0]. Key points: def minmax(a,b):\\n return min(a,b), max(a,b)\\nprint(minmax(3,7)[0]) A correct solution looks like this: def minmax(a,b): return min(a,b), max(a,b) print(minmax(3,7)[0])",
    "publicTests": [
      {
        "id": "m12-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def minmax(a,b):\n    return min(a,b), max(a,b)\nprint(minmax(3,7)[0])"
  },
  {
    "id": "m12-t4-p06",
    "topicId": "m12-t4",
    "slug": "def-scope",
    "title": "Variables in Functions: Local Variable",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def f(): x=10; return x, print f().",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "f",
      "introSegments": [
        {
          "type": "text",
          "value": "Variables inside functions are local."
        }
      ],
      "editorPlaceholder": "# local",
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
      "def f():\\n    x=10\\n    return x\\nprint(f())"
    ],
    "starterCode": "",
    "approach": "Define def f(): x=10; return x, print f(). Key points: def f():\\n x=10\\n return x\\nprint(f()) A correct solution looks like this: def f(): x=10 return x print(f())",
    "publicTests": [
      {
        "id": "m12-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "def f():\n    x=10\n    return x\nprint(f())"
  },
  {
    "id": "m12-t4-p07",
    "topicId": "m12-t4",
    "slug": "def-nested",
    "title": "Variables in Functions: Function Calling Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "quad",
      "introSegments": [
        {
          "type": "text",
          "value": "One function can call another."
        }
      ],
      "editorPlaceholder": "# nested fn",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output: 8"
    ],
    "hints": [
      "def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2))"
    ],
    "starterCode": "",
    "approach": "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2). Key points: def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2)) A correct solution looks like this: def double(x): return x*2 def quad(x): return double(double(x)) print(quad(2))",
    "publicTests": [
      {
        "id": "m12-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def double(x): return x*2\ndef quad(x): return double(double(x))\nprint(quad(2))"
  },
  {
    "id": "m12-t5-p01",
    "topicId": "m12-t5",
    "slug": "rec-base",
    "title": "Recursion: Base Case",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define def countdown(n): print(n); if n>1: countdown(n-1), call countdown(3).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "countdown",
      "introSegments": [
        {
          "type": "text",
          "value": "Recursion calls itself with a base case."
        }
      ],
      "editorPlaceholder": "# countdown",
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
      "def countdown(n):\\n    print(n)\\n    if n>1:\\n        countdown(n-1)\\ncountdown(3)"
    ],
    "starterCode": "",
    "approach": "Define def countdown(n): print(n); if n>1: countdown(n-1), call countdown(3). Key points: def countdown(n):\\n print(n)\\n if n>1:\\n countdown(n-1)\\ncountdown(3) A correct solution looks like this: def countdown(n): print(n) if n>1: countdown(n-1) countdown(3)",
    "publicTests": [
      {
        "id": "m12-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "3\n2\n1",
        "visibility": "public"
      }
    ],
    "solutionCode": "def countdown(n):\n    print(n)\n    if n>1:\n        countdown(n-1)\ncountdown(3)"
  },
  {
    "id": "m12-t5-p02",
    "topicId": "m12-t5",
    "slug": "rec-factorial",
    "title": "Recursion: Factorial",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define def fact(n): return 1 if n<=1 else n*fact(n-1), print fact(5).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "fact",
      "introSegments": [
        {
          "type": "text",
          "value": "Classic recursive factorial."
        }
      ],
      "editorPlaceholder": "# factorial",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "120"
      }
    ],
    "constraints": [
      "Output: 120"
    ],
    "hints": [
      "def fact(n):\\n    return 1 if n<=1 else n*fact(n-1)\\nprint(fact(5))"
    ],
    "starterCode": "",
    "approach": "Define def fact(n): return 1 if n<=1 else n*fact(n-1), print fact(5). Key points: def fact(n):\\n return 1 if n<=1 else n*fact(n-1)\\nprint(fact(5)) A correct solution looks like this: def fact(n): return 1 if n<=1 else n*fact(n-1) print(fact(5))",
    "publicTests": [
      {
        "id": "m12-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "120",
        "visibility": "public"
      }
    ],
    "solutionCode": "def fact(n):\n    return 1 if n<=1 else n*fact(n-1)\nprint(fact(5))"
  },
  {
    "id": "m12-t5-p03",
    "topicId": "m12-t5",
    "slug": "rec-sum",
    "title": "Recursion: Recursive Sum",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define def rsum(n): return 0 if n<=0 else n+rsum(n-1), print rsum(5).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "rsum",
      "introSegments": [
        {
          "type": "text",
          "value": "Sum 1 to n recursively."
        }
      ],
      "editorPlaceholder": "# rsum",
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
      "def rsum(n):\\n    return 0 if n<=0 else n+rsum(n-1)\\nprint(rsum(5))"
    ],
    "starterCode": "",
    "approach": "Define def rsum(n): return 0 if n<=0 else n+rsum(n-1), print rsum(5). Key points: def rsum(n):\\n return 0 if n<=0 else n+rsum(n-1)\\nprint(rsum(5)) A correct solution looks like this: def rsum(n): return 0 if n<=0 else n+rsum(n-1) print(rsum(5))",
    "publicTests": [
      {
        "id": "m12-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "15",
        "visibility": "public"
      }
    ],
    "solutionCode": "def rsum(n):\n    return 0 if n<=0 else n+rsum(n-1)\nprint(rsum(5))"
  },
  {
    "id": "m12-t5-p04",
    "topicId": "m12-t5",
    "slug": "rec-fib",
    "title": "Recursion: Fibonacci Step",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define def fib(n): return n if n<=1 else fib(n-1)+fib(n-2), print fib(6).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "fib",
      "introSegments": [
        {
          "type": "text",
          "value": "Fibonacci uses two recursive calls."
        }
      ],
      "editorPlaceholder": "# fib",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output: 8"
    ],
    "hints": [
      "def fib(n):\\n    return n if n<=1 else fib(n-1)+fib(n-2)\\nprint(fib(6))"
    ],
    "starterCode": "",
    "approach": "Define def fib(n): return n if n<=1 else fib(n-1)+fib(n-2), print fib(6). Key points: def fib(n):\\n return n if n<=1 else fib(n-1)+fib(n-2)\\nprint(fib(6)) A correct solution looks like this: def fib(n): return n if n<=1 else fib(n-1)+fib(n-2) print(fib(6))",
    "publicTests": [
      {
        "id": "m12-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def fib(n):\n    return n if n<=1 else fib(n-1)+fib(n-2)\nprint(fib(6))"
  },
  {
    "id": "m12-t5-p05",
    "topicId": "m12-t5",
    "slug": "rec-power",
    "title": "Recursion: Power",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define def power(b,e): return 1 if e==0 else b*power(b,e-1), print power(2,3).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "power",
      "introSegments": [
        {
          "type": "text",
          "value": "Recursive exponentiation."
        }
      ],
      "editorPlaceholder": "# power",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "8"
      }
    ],
    "constraints": [
      "Output: 8"
    ],
    "hints": [
      "def power(b,e):\\n    return 1 if e==0 else b*power(b,e-1)\\nprint(power(2,3))"
    ],
    "starterCode": "",
    "approach": "Define def power(b,e): return 1 if e==0 else b*power(b,e-1), print power(2,3). Key points: def power(b,e):\\n return 1 if e==0 else b*power(b,e-1)\\nprint(power(2,3)) A correct solution looks like this: def power(b,e): return 1 if e==0 else b*power(b,e-1) print(power(2,3))",
    "publicTests": [
      {
        "id": "m12-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "8",
        "visibility": "public"
      }
    ],
    "solutionCode": "def power(b,e):\n    return 1 if e==0 else b*power(b,e-1)\nprint(power(2,3))"
  },
  {
    "id": "m12-t5-p06",
    "topicId": "m12-t5",
    "slug": "rec-len",
    "title": "Recursion: Recursive Length",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define def rlen(s): return 0 if s==\"\" else 1+rlen(s[1:]), print rlen(\"abc\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "rlen",
      "introSegments": [
        {
          "type": "text",
          "value": "Count string length recursively."
        }
      ],
      "editorPlaceholder": "# rlen",
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
      "def rlen(s):\\n    return 0 if s==\"\" else 1+rlen(s[1:])\\nprint(rlen(\"abc\"))"
    ],
    "starterCode": "",
    "approach": "Define def rlen(s): return 0 if s==\"\" else 1+rlen(s[1:]), print rlen(\"abc\"). Key points: def rlen(s):\\n return 0 if s==\"\" else 1+rlen(s[1:])\\nprint(rlen(\"abc\")) A correct solution looks like this: def rlen(s): return 0 if s==\"\" else 1+rlen(s[1:]) print(rlen(\"abc\"))",
    "publicTests": [
      {
        "id": "m12-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "def rlen(s):\n    return 0 if s==\"\" else 1+rlen(s[1:])\nprint(rlen(\"abc\"))"
  },
  {
    "id": "m12-t5-p07",
    "topicId": "m12-t5",
    "slug": "rec-countdown-silent",
    "title": "Recursion: Silent Base",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define def print_down(n): if n>=1: print(n); print_down(n-1), call print_down(2).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "print_down",
      "introSegments": [
        {
          "type": "text",
          "value": "Base case when n < 1 stops recursion."
        }
      ],
      "editorPlaceholder": "# print_down",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2\n1"
      }
    ],
    "constraints": [
      "Print 2, 1"
    ],
    "hints": [
      "def print_down(n):\\n    if n>=1:\\n        print(n)\\n        print_down(n-1)\\nprint_down(2)"
    ],
    "starterCode": "",
    "approach": "Define def print_down(n): if n>=1: print(n); print_down(n-1), call print_down(2). Key points: def print_down(n):\\n if n>=1:\\n print(n)\\n print_down(n-1)\\nprint_down(2) A correct solution looks like this: def print_down(n): if n>=1: print(n) print_down(n-1) print_down(2)",
    "publicTests": [
      {
        "id": "m12-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "2\n1",
        "visibility": "public"
      }
    ],
    "solutionCode": "def print_down(n):\n    if n>=1:\n        print(n)\n        print_down(n-1)\nprint_down(2)"
  },
  {
    "id": "m12-t6-p01",
    "topicId": "m12-t6",
    "slug": "lambda-basic",
    "title": "Lambda Functions: Basic Lambda",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set f = lambda x: x*2, print f(5).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Lambda is a small anonymous function."
        }
      ],
      "editorPlaceholder": "# lambda x: x*2",
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
      "f = lambda x: x*2\\nprint(f(5))"
    ],
    "starterCode": "",
    "approach": "Set f = lambda x: x*2, print f(5). Key points: f = lambda x: x*2\\nprint(f(5)) A correct solution looks like this: f = lambda x: x*2 print(f(5))",
    "publicTests": [
      {
        "id": "m12-t6-p01-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "f = lambda x: x*2\nprint(f(5))"
  },
  {
    "id": "m12-t6-p02",
    "topicId": "m12-t6",
    "slug": "lambda-add",
    "title": "Lambda Functions: Lambda Add",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set add = lambda a,b: a+b, print add(3,4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Lambda with two parameters."
        }
      ],
      "editorPlaceholder": "# lambda add",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "7"
      }
    ],
    "constraints": [
      "Output: 7"
    ],
    "hints": [
      "add = lambda a,b: a+b\\nprint(add(3,4))"
    ],
    "starterCode": "",
    "approach": "Set add = lambda a,b: a+b, print add(3,4). Key points: add = lambda a,b: a+b\\nprint(add(3,4)) A correct solution looks like this: add = lambda a,b: a+b print(add(3,4))",
    "publicTests": [
      {
        "id": "m12-t6-p02-t1",
        "label": "Sample test",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ],
    "solutionCode": "add = lambda a,b: a+b\nprint(add(3,4))"
  },
  {
    "id": "m12-t6-p03",
    "topicId": "m12-t6",
    "slug": "lambda-square",
    "title": "Lambda Functions: Lambda Square",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set sq = lambda x: x**2, print sq(4).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use lambda for short operations."
        }
      ],
      "editorPlaceholder": "# lambda square",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "16"
      }
    ],
    "constraints": [
      "Output: 16"
    ],
    "hints": [
      "sq = lambda x: x**2\\nprint(sq(4))"
    ],
    "starterCode": "",
    "approach": "Set sq = lambda x: x**2, print sq(4). Key points: sq = lambda x: x**2\\nprint(sq(4)) A correct solution looks like this: sq = lambda x: x**2 print(sq(4))",
    "publicTests": [
      {
        "id": "m12-t6-p03-t1",
        "label": "Sample test",
        "expectedStdout": "16",
        "visibility": "public"
      }
    ],
    "solutionCode": "sq = lambda x: x**2\nprint(sq(4))"
  },
  {
    "id": "m12-t6-p04",
    "topicId": "m12-t6",
    "slug": "lambda-map",
    "title": "Lambda Functions: map with Lambda",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print list(map(lambda x: x*2, [1,2,3])).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# map lambda",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "map()"
        },
        {
          "type": "text",
          "value": " with lambda."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[2, 4, 6]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[2, 4, 6]"
      }
    ],
    "constraints": [
      "Output must be exactly: [2, 4, 6]"
    ],
    "hints": [
      "print(list(map(lambda x: x*2, [1,2,3])))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p04-t1",
        "label": "Sample test",
        "expectedStdout": "[2, 4, 6]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(list(map(lambda x: x*2, [1,2,3])))",
    "approach": "Print list(map(lambda x: x*2, [1,2,3])).\n\nKey points: print(list(map(lambda x: x*2, [1,2,3])))\n\nA correct solution looks like this:\nprint(list(map(lambda x: x*2, [1,2,3])))"
  },
  {
    "id": "m12-t6-p05",
    "topicId": "m12-t6",
    "slug": "lambda-filter",
    "title": "Lambda Functions: filter with Lambda",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print list(filter(lambda x: x>2, [1,2,3,4])).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# filter",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "filter()"
        },
        {
          "type": "text",
          "value": " with lambda."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "[3, 4]",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "[3, 4]"
      }
    ],
    "constraints": [
      "Output must be exactly: [3, 4]"
    ],
    "hints": [
      "print(list(filter(lambda x: x>2, [1,2,3,4])))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p05-t1",
        "label": "Sample test",
        "expectedStdout": "[3, 4]",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(list(filter(lambda x: x>2, [1,2,3,4])))",
    "approach": "Print list(filter(lambda x: x>2, [1,2,3,4])).\n\nKey points: print(list(filter(lambda x: x>2, [1,2,3,4])))\n\nA correct solution looks like this:\nprint(list(filter(lambda x: x>2, [1,2,3,4])))"
  },
  {
    "id": "m12-t6-p06",
    "topicId": "m12-t6",
    "slug": "lambda-sorted",
    "title": "Lambda Functions: sorted with Lambda",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print sorted(['bb','a','ccc'], key=lambda s: len(s)).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# sorted",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Sort by length using lambda key."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "['a', 'bb', 'ccc']",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "['a', 'bb', 'ccc']"
      }
    ],
    "constraints": [
      "Output must be exactly: ['a', 'bb', 'ccc']"
    ],
    "hints": [
      "print(sorted(['bb','a','ccc'], key=lambda s: len(s)))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p06-t1",
        "label": "Sample test",
        "expectedStdout": "['a', 'bb', 'ccc']",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(sorted(['bb','a','ccc'], key=lambda s: len(s)))",
    "approach": "Print sorted(['bb','a','ccc'], key=lambda s: len(s)).\n\nKey points: print(sorted(['bb','a','ccc'], key=lambda s: len(s)))\n\nA correct solution looks like this:\nprint(sorted(['bb','a','ccc'], key=lambda s: len(s)))"
  },
  {
    "id": "m12-t6-p07",
    "topicId": "m12-t6",
    "slug": "lambda-immediate",
    "title": "Lambda Functions: Immediate Call",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print (lambda x: x+1)(9).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# IIFE",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Call lambda immediately: "
        },
        {
          "type": "code",
          "value": "(lambda x: x+1)(9)"
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
          "expected": "10",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Output must be exactly: 10"
    ],
    "hints": [
      "print((lambda x: x+1)(9))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m12-t6-p07-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "print((lambda x: x+1)(9))",
    "approach": "Print (lambda x: x+1)(9).\n\nKey points: print((lambda x: x+1)(9))\n\nA correct solution looks like this:\nprint((lambda x: x+1)(9))"
  }
];
