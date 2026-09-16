import type { PracticeProblem } from "@/lib/types";

export const module8Practice: PracticeProblem[] = [
  {
    "id": "m8-t1-p01",
    "topicId": "m8-t1",
    "slug": "create-dict",
    "title": "Dictionary Syntax: Create a Dict",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create d = {\"name\": \"Ana\", \"age\": 20} and print d[\"name\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "name",
      "introSegments": [
        {
          "type": "text",
          "value": "Dictionaries use "
        },
        {
          "type": "code",
          "value": "{key: value}"
        },
        {
          "type": "text",
          "value": " syntax."
        }
      ],
      "editorPlaceholder": "# create dict",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Ana"
      }
    ],
    "constraints": [
      "Output: Ana"
    ],
    "hints": [
      "d = {\"name\":\"Ana\",\"age\":20}\\nprint(d[\"name\"])"
    ],
    "starterCode": "",
    "approach": "Create d = {\"name\": \"Ana\", \"age\": 20} and print d[\"name\"].\n\nReference solution:\nd = {\"name\":\"Ana\",\"age\":20}\nprint(d[\"name\"])",
    "publicTests": [
      {
        "id": "m8-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Ana",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"name\" in d, \"Expected d to contain key name\"",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Ana",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"name\":\"Ana\",\"age\":20}\nprint(d[\"name\"])"
  },
  {
    "id": "m8-t1-p02",
    "topicId": "m8-t1",
    "slug": "empty-dict",
    "title": "Dictionary Syntax: Empty Dict",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create d = {}, print len(d).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Empty dict with "
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
      "editorPlaceholder": "# {}",
      "successDetail": "Correct!"
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
      "d = {}\\nprint(len(d))"
    ],
    "starterCode": "",
    "approach": "Create d = {}, print len(d).\n\nReference solution:\nd = {}\nprint(len(d))",
    "publicTests": [
      {
        "id": "m8-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {}\nprint(len(d))"
  },
  {
    "id": "m8-t1-p03",
    "topicId": "m8-t1",
    "slug": "dict-func",
    "title": "Dictionary Syntax: dict() Constructor",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print dict(name=\"Bob\", age=25)[\"name\"].",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# dict()",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "dict()"
        },
        {
          "type": "text",
          "value": " with keyword args."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "Bob",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "Bob"
      }
    ],
    "constraints": [
      "Output must be exactly: Bob"
    ],
    "hints": [
      "print(dict(name=\"Bob\", age=25)[\"name\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "Bob",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p03-t2",
        "label": "Exact Output",
        "expectedStdout": "Bob",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "Bob",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(dict(name=\"Bob\", age=25)[\"name\"])",
    "approach": "Print dict(name=\"Bob\", age=25)[\"name\"].\n\nReference solution:\nprint(dict(name=\"Bob\", age=25)[\"name\"])"
  },
  {
    "id": "m8-t1-p04",
    "topicId": "m8-t1",
    "slug": "access-bracket",
    "title": "Dictionary Syntax: Bracket Access",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set d={\"x\":10}, print d[\"x\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "x",
      "introSegments": [
        {
          "type": "text",
          "value": "Access with "
        },
        {
          "type": "code",
          "value": "d[\"key\"]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# d[key]",
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
      "d = {\"x\":10}\\nprint(d[\"x\"])"
    ],
    "starterCode": "",
    "approach": "Set d={\"x\":10}, print d[\"x\"].\n\nReference solution:\nd = {\"x\":10}\nprint(d[\"x\"])",
    "publicTests": [
      {
        "id": "m8-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"x\" in d, \"Expected d to contain key x\"",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"x\":10}\nprint(d[\"x\"])"
  },
  {
    "id": "m8-t1-p05",
    "topicId": "m8-t1",
    "slug": "nested-dict",
    "title": "Dictionary Syntax: Nested Dict",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set d={\"user\":{\"name\":\"Kim\"}}, print d[\"user\"][\"name\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "requiresListAccess": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Access nested dict values."
        }
      ],
      "editorPlaceholder": "# nested",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Kim"
      }
    ],
    "constraints": [
      "Output: Kim"
    ],
    "hints": [
      "d = {\"user\":{\"name\":\"Kim\"}}\\nprint(d[\"user\"][\"name\"])"
    ],
    "starterCode": "",
    "approach": "Set d={\"user\":{\"name\":\"Kim\"}}, print d[\"user\"][\"name\"].\n\nReference solution:\nd = {\"user\":{\"name\":\"Kim\"}}\nprint(d[\"user\"][\"name\"])",
    "publicTests": [
      {
        "id": "m8-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "Kim",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "Kim",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"user\":{\"name\":\"Kim\"}}\nprint(d[\"user\"][\"name\"])"
  },
  {
    "id": "m8-t1-p06",
    "topicId": "m8-t1",
    "slug": "change-value",
    "title": "Dictionary Syntax: Change Value",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set d={\"a\":1}, d[\"a\"]=2, print d[\"a\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "a",
      "introSegments": [
        {
          "type": "text",
          "value": "Dicts are mutable — change values."
        }
      ],
      "editorPlaceholder": "# change",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output: 2"
    ],
    "hints": [
      "d = {\"a\":1}\\nd[\"a\"]=2\\nprint(d[\"a\"])"
    ],
    "starterCode": "",
    "approach": "Set d={\"a\":1}, d[\"a\"]=2, print d[\"a\"].\n\nReference solution:\nd = {\"a\":1}\nd[\"a\"]=2\nprint(d[\"a\"])",
    "publicTests": [
      {
        "id": "m8-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"a\" in d, \"Expected d to contain key a\"",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\":1}\nd[\"a\"]=2\nprint(d[\"a\"])"
  },
  {
    "id": "m8-t1-p07",
    "topicId": "m8-t1",
    "slug": "add-key",
    "title": "Dictionary Syntax: Add New Key",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set d={\"a\":1}, d[\"b\"]=2, print d[\"b\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "b",
      "introSegments": [
        {
          "type": "text",
          "value": "Add new key-value pairs."
        }
      ],
      "editorPlaceholder": "# add key",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output: 2"
    ],
    "hints": [
      "d = {\"a\":1}\\nd[\"b\"]=2\\nprint(d[\"b\"])"
    ],
    "starterCode": "",
    "approach": "Set d={\"a\":1}, d[\"b\"]=2, print d[\"b\"].\n\nReference solution:\nd = {\"a\":1}\nd[\"b\"]=2\nprint(d[\"b\"])",
    "publicTests": [
      {
        "id": "m8-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"b\" in d, \"Expected d to contain key b\"",
        "visibility": "public"
      },
      {
        "id": "m8-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\":1}\nd[\"b\"]=2\nprint(d[\"b\"])"
  },
  {
    "id": "m8-t2-p01",
    "topicId": "m8-t2",
    "slug": "keys",
    "title": "Keys and Values: keys()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set d={\"a\":1,\"b\":2}, print list(d.keys()).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "a",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".keys()"
        },
        {
          "type": "text",
          "value": " to get all keys."
        }
      ],
      "editorPlaceholder": "# keys",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "['a', 'b']"
      }
    ],
    "constraints": [
      "Print keys as list"
    ],
    "hints": [
      "d = {\"a\":1,\"b\":2}\\nprint(list(d.keys()))"
    ],
    "starterCode": "",
    "approach": "Set d={\"a\":1,\"b\":2}, print list(d.keys()).\n\nReference solution:\nd = {\"a\":1,\"b\":2}\nprint(list(d.keys()))",
    "publicTests": [
      {
        "id": "m8-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"a\" in d, \"Expected d to contain key a\"",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\":1,\"b\":2}\nprint(list(d.keys()))"
  },
  {
    "id": "m8-t2-p02",
    "topicId": "m8-t2",
    "slug": "values",
    "title": "Keys and Values: values()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set d={\"a\":1,\"b\":2}, print list(d.values()).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".values()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# values",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[1, 2]"
      }
    ],
    "constraints": [
      "Print values"
    ],
    "hints": [
      "d = {\"a\":1,\"b\":2}\\nprint(list(d.values()))"
    ],
    "starterCode": "",
    "approach": "Set d={\"a\":1,\"b\":2}, print list(d.values()).\n\nReference solution:\nd = {\"a\":1,\"b\":2}\nprint(list(d.values()))",
    "publicTests": [
      {
        "id": "m8-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\":1,\"b\":2}\nprint(list(d.values()))"
  },
  {
    "id": "m8-t2-p03",
    "topicId": "m8-t2",
    "slug": "items",
    "title": "Keys and Values: items()",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set d={\"x\":1}, print list(d.items()).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "d"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".items()"
        },
        {
          "type": "text",
          "value": " for key-value pairs."
        }
      ],
      "editorPlaceholder": "# items",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "[('x', 1)]"
      }
    ],
    "constraints": [
      "Print items"
    ],
    "hints": [
      "d = {\"x\":1}\\nprint(list(d.items()))"
    ],
    "starterCode": "",
    "approach": "Set d={\"x\":1}, print list(d.items()).\n\nReference solution:\nd = {\"x\":1}\nprint(list(d.items()))",
    "publicTests": [
      {
        "id": "m8-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[('x', 1)]",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "[('x', 1)]",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"x\":1}\nprint(list(d.items()))"
  },
  {
    "id": "m8-t2-p04",
    "topicId": "m8-t2",
    "slug": "get",
    "title": "Keys and Values: get()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print {\"a\":1}.get(\"b\", 0).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# get",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct! get() returns default if key missing.",
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".get(\"b\", 0)"
        },
        {
          "type": "text",
          "value": " for safe access."
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
      "print({\"a\":1}.get(\"b\", 0))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p04-t2",
        "label": "Exact Output",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "print({\"a\":1}.get(\"b\", 0))",
    "approach": "Print {\"a\":1}.get(\"b\", 0).\n\nReference solution:\nprint({\"a\":1}.get(\"b\", 0))"
  },
  {
    "id": "m8-t2-p05",
    "topicId": "m8-t2",
    "slug": "in-dict",
    "title": "Keys and Values: Key Membership",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print \"name\" in {\"name\":\"Ana\"}.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# in dict",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Check if key exists with "
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
      "print(\"name\" in {\"name\":\"Ana\"})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p05-t2",
        "label": "Exact Output",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(\"name\" in {\"name\":\"Ana\"})",
    "approach": "Print \"name\" in {\"name\":\"Ana\"}.\n\nReference solution:\nprint(\"name\" in {\"name\":\"Ana\"})"
  },
  {
    "id": "m8-t2-p06",
    "topicId": "m8-t2",
    "slug": "len-dict",
    "title": "Keys and Values: Dict Length",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print len({\"a\":1,\"b\":2,\"c\":3}).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# len",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "len() counts key-value pairs."
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
      "print(len({\"a\":1,\"b\":2,\"c\":3}))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p06-t2",
        "label": "Exact Output",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ],
    "solutionCode": "print(len({\"a\":1,\"b\":2,\"c\":3}))",
    "approach": "Print len({\"a\":1,\"b\":2,\"c\":3}).\n\nReference solution:\nprint(len({\"a\":1,\"b\":2,\"c\":3}))"
  },
  {
    "id": "m8-t2-p07",
    "topicId": "m8-t2",
    "slug": "lookup-lang",
    "title": "Keys and Values: Look Up a Key",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set d = {\"lang\": \"Python\"} and print d[\"lang\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresDictKey": "lang",
      "introSegments": [
        {
          "type": "text",
          "value": "Look up a value by key."
        }
      ],
      "editorPlaceholder": "# d[\"topic\"]",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ]
    },
    "examples": [
      {
        "output": "Python"
      }
    ],
    "constraints": [
      "Output: Python"
    ],
    "hints": [
      "d = {\"lang\": \"Python\"}\nprint(d[\"lang\"])"
    ],
    "starterCode": "",
    "approach": "Set d = {\"lang\": \"Python\"} and print d[\"lang\"].\n\nReference solution:\nd = {\"lang\": \"Python\"}\nprint(d[\"lang\"])",
    "publicTests": [
      {
        "id": "m8-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "Python",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"lang\" in d, \"Expected d to contain key lang\"",
        "visibility": "public"
      },
      {
        "id": "m8-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"lang\": \"Python\"}\nprint(d[\"lang\"])"
  },
  {
    "id": "m8-t3-p01",
    "topicId": "m8-t3",
    "slug": "bracket-access",
    "title": "Accessing Dictionaries: Bracket Access",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set d = {\"city\": \"Pune\"} and print d[\"city\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"city\": \"Pune\"} and print d[\"city\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "city"
    },
    "examples": [
      {
        "output": "Pune"
      }
    ],
    "constraints": [
      "Output must match: Pune"
    ],
    "hints": [
      "Use the key in square brackets: d[\"city\"]."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Pune",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"city\" in d, \"Expected d to contain key city\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Pune",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"city\": \"Pune\"}\nprint(d[\"city\"])",
    "approach": "Set d = {\"city\": \"Pune\"} and print d[\"city\"].\n\nReference solution:\nd = {\"city\": \"Pune\"}\nprint(d[\"city\"])"
  },
  {
    "id": "m8-t3-p02",
    "topicId": "m8-t3",
    "slug": "get-existing",
    "title": "Accessing Dictionaries: get() Existing Key",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set d = {\"n\": 5} and print d.get(\"n\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"n\": 5} and print d.get(\"n\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ]
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Output must match: 5"
    ],
    "hints": [
      "get(key) returns the value when the key exists."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "5",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"n\": 5}\nprint(d.get(\"n\"))",
    "approach": "Set d = {\"n\": 5} and print d.get(\"n\").\n\nReference solution:\nd = {\"n\": 5}\nprint(d.get(\"n\"))"
  },
  {
    "id": "m8-t3-p03",
    "topicId": "m8-t3",
    "slug": "get-default",
    "title": "Accessing Dictionaries: get() Default",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1} and print d.get(\"z\", 0).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1} and print d.get(\"z\", 0)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
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
      "The second argument is returned when the key is missing."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1}\nprint(d.get(\"z\", 0))",
    "approach": "Set d = {\"a\": 1} and print d.get(\"z\", 0).\n\nReference solution:\nd = {\"a\": 1}\nprint(d.get(\"z\", 0))"
  },
  {
    "id": "m8-t3-p04",
    "topicId": "m8-t3",
    "slug": "nested-access",
    "title": "Accessing Dictionaries: Nested Access",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set person = {\"name\": \"Ria\", \"addr\": {\"city\": \"Goa\"}} and print person[\"addr\"][\"city\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set person = {\"name\": \"Ria\", \"addr\": {\"city\": \"Goa\"}} and print person[\"addr\"][\"city\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "person"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "Goa"
      }
    ],
    "constraints": [
      "Output must match: Goa"
    ],
    "hints": [
      "Chain brackets: person[\"addr\"][\"city\"]."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Goa",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"person\" in globals(), \"Expected a variable named person\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Goa",
        "visibility": "public"
      }
    ],
    "solutionCode": "person = {\"name\": \"Ria\", \"addr\": {\"city\": \"Goa\"}}\nprint(person[\"addr\"][\"city\"])",
    "approach": "Set person = {\"name\": \"Ria\", \"addr\": {\"city\": \"Goa\"}} and print person[\"addr\"][\"city\"].\n\nReference solution:\nperson = {\"name\": \"Ria\", \"addr\": {\"city\": \"Goa\"}}\nprint(person[\"addr\"][\"city\"])"
  },
  {
    "id": "m8-t3-p05",
    "topicId": "m8-t3",
    "slug": "two-keys",
    "title": "Accessing Dictionaries: Two Keys",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1, \"b\": 2}. Print d[\"a\"] then d[\"b\"] on separate lines.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1, \"b\": 2}. Print d[\"a\"] then d[\"b\"] on separate lines."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "a"
    },
    "examples": [
      {
        "output": "1\n2"
      }
    ],
    "constraints": [
      "Output must match: 1 / 2"
    ],
    "hints": [
      "Use two print() calls."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "1\n2",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"a\" in d, \"Expected d to contain key a\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "1\n2",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1, \"b\": 2}\nprint(d[\"a\"])\nprint(d[\"b\"])",
    "approach": "Set d = {\"a\": 1, \"b\": 2}. Print d[\"a\"] then d[\"b\"] on separate lines.\n\nReference solution:\nd = {\"a\": 1, \"b\": 2}\nprint(d[\"a\"])\nprint(d[\"b\"])"
  },
  {
    "id": "m8-t3-p06",
    "topicId": "m8-t3",
    "slug": "get-none",
    "title": "Accessing Dictionaries: get() Missing",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1} and print d.get(\"missing\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1} and print d.get(\"missing\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ]
    },
    "examples": [
      {
        "output": "None"
      }
    ],
    "constraints": [
      "Output must match: None"
    ],
    "hints": [
      "get() without a default returns None when the key is missing."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "None",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "None",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1}\nprint(d.get(\"missing\"))",
    "approach": "Set d = {\"a\": 1} and print d.get(\"missing\").\n\nReference solution:\nd = {\"a\": 1}\nprint(d.get(\"missing\"))"
  },
  {
    "id": "m8-t3-p07",
    "topicId": "m8-t3",
    "slug": "safe-nested-get",
    "title": "Accessing Dictionaries: Safe Nested get()",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set d = {\"user\": {\"id\": 7}} and print d.get(\"user\", {}).get(\"id\", 0).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"user\": {\"id\": 7}} and print d.get(\"user\", {}).get(\"id\", 0)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
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
      "Chain get() so a missing outer key still returns a dict to call get() on."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "7",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "7",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"user\": {\"id\": 7}}\nprint(d.get(\"user\", {}).get(\"id\", 0))",
    "approach": "Set d = {\"user\": {\"id\": 7}} and print d.get(\"user\", {}).get(\"id\", 0).\n\nReference solution:\nd = {\"user\": {\"id\": 7}}\nprint(d.get(\"user\", {}).get(\"id\", 0))"
  },
  {
    "id": "m8-t4-p01",
    "topicId": "m8-t4",
    "slug": "update",
    "title": "Dictionary Methods: update()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1}, then d.update({\"b\": 2}), then print d[\"b\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1}, then d.update({\"b\": 2}), then print d[\"b\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ],
      "requiresDictKey": "b"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output must match: 2"
    ],
    "hints": [
      "update() merges another dict into d."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"d\" in globals() and \"b\" in d, \"Expected d to contain key b\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1}\nd.update({\"b\": 2})\nprint(d[\"b\"])",
    "approach": "Set d = {\"a\": 1}, then d.update({\"b\": 2}), then print d[\"b\"].\n\nReference solution:\nd = {\"a\": 1}\nd.update({\"b\": 2})\nprint(d[\"b\"])"
  },
  {
    "id": "m8-t4-p02",
    "topicId": "m8-t4",
    "slug": "pop",
    "title": "Dictionary Methods: pop()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1, \"b\": 2} and print d.pop(\"a\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1, \"b\": 2} and print d.pop(\"a\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ]
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
      "pop(key) returns the value and removes the key."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1, \"b\": 2}\nprint(d.pop(\"a\"))",
    "approach": "Set d = {\"a\": 1, \"b\": 2} and print d.pop(\"a\").\n\nReference solution:\nd = {\"a\": 1, \"b\": 2}\nprint(d.pop(\"a\"))"
  },
  {
    "id": "m8-t4-p03",
    "topicId": "m8-t4",
    "slug": "pop-default",
    "title": "Dictionary Methods: pop() Default",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1} and print d.pop(\"z\", 0).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1} and print d.pop(\"z\", 0)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
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
      "A default stops pop() from raising KeyError."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1}\nprint(d.pop(\"z\", 0))",
    "approach": "Set d = {\"a\": 1} and print d.pop(\"z\", 0).\n\nReference solution:\nd = {\"a\": 1}\nprint(d.pop(\"z\", 0))"
  },
  {
    "id": "m8-t4-p04",
    "topicId": "m8-t4",
    "slug": "clear-dict",
    "title": "Dictionary Methods: clear()",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1}, then d.clear(), then print d.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1}, then d.clear(), then print d."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ]
    },
    "examples": [
      {
        "output": "{}"
      }
    ],
    "constraints": [
      "Output must match: {}"
    ],
    "hints": [
      "clear() leaves an empty dict {}."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "{}",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "{}",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1}\nd.clear()\nprint(d)",
    "approach": "Set d = {\"a\": 1}, then d.clear(), then print d.\n\nReference solution:\nd = {\"a\": 1}\nd.clear()\nprint(d)"
  },
  {
    "id": "m8-t4-p05",
    "topicId": "m8-t4",
    "slug": "setdefault",
    "title": "Dictionary Methods: setdefault()",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set d = {}, then print d.setdefault(\"x\", 10).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {}, then print d.setdefault(\"x\", 10)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
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
      "setdefault inserts the default if the key is missing, then returns that value."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {}\nprint(d.setdefault(\"x\", 10))",
    "approach": "Set d = {}, then print d.setdefault(\"x\", 10).\n\nReference solution:\nd = {}\nprint(d.setdefault(\"x\", 10))"
  },
  {
    "id": "m8-t4-p06",
    "topicId": "m8-t4",
    "slug": "copy-dict",
    "title": "Dictionary Methods: copy()",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1}, e = d.copy(), then e[\"a\"] = 9. Print d[\"a\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1}, e = d.copy(), then e[\"a\"] = 9. Print d[\"a\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d",
        "e"
      ],
      "requiresDictKey": "a"
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
      "copy() is a separate dict, so changing e does not change d."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"\nassert \"e\" in globals(), \"Expected a variable named e\"\nassert \"d\" in globals() and \"a\" in d, \"Expected d to contain key a\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1}\ne = d.copy()\ne[\"a\"] = 9\nprint(d[\"a\"])",
    "approach": "Set d = {\"a\": 1}, e = d.copy(), then e[\"a\"] = 9. Print d[\"a\"].\n\nReference solution:\nd = {\"a\": 1}\ne = d.copy()\ne[\"a\"] = 9\nprint(d[\"a\"])"
  },
  {
    "id": "m8-t4-p07",
    "topicId": "m8-t4",
    "slug": "pop-then-len",
    "title": "Dictionary Methods: pop then len",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set d = {\"a\": 1, \"b\": 2}, pop \"a\", then print len(d).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set d = {\"a\": 1, \"b\": 2}, pop \"a\", then print len(d)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "d"
      ]
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
      "After pop, one key remains, so len(d) is 1."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"d\" in globals(), \"Expected a variable named d\"",
        "visibility": "public"
      },
      {
        "id": "m8-t4-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "d = {\"a\": 1, \"b\": 2}\nd.pop(\"a\")\nprint(len(d))",
    "approach": "Set d = {\"a\": 1, \"b\": 2}, pop \"a\", then print len(d).\n\nReference solution:\nd = {\"a\": 1, \"b\": 2}\nd.pop(\"a\")\nprint(len(d))"
  },
  {
    "id": "m8-t5-p01",
    "topicId": "m8-t5",
    "slug": "read-nested",
    "title": "Nested Dictionaries: Read Inner Value",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Set team = {\"lead\": {\"name\": \"Asha\"}} and print team[\"lead\"][\"name\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set team = {\"lead\": {\"name\": \"Asha\"}} and print team[\"lead\"][\"name\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "team"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "Asha"
      }
    ],
    "constraints": [
      "Output must match: Asha"
    ],
    "hints": [
      "team[\"lead\"] is a dict; then use [\"name\"]."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Asha",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"team\" in globals(), \"Expected a variable named team\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Asha",
        "visibility": "public"
      }
    ],
    "solutionCode": "team = {\"lead\": {\"name\": \"Asha\"}}\nprint(team[\"lead\"][\"name\"])",
    "approach": "Set team = {\"lead\": {\"name\": \"Asha\"}} and print team[\"lead\"][\"name\"].\n\nReference solution:\nteam = {\"lead\": {\"name\": \"Asha\"}}\nprint(team[\"lead\"][\"name\"])"
  },
  {
    "id": "m8-t5-p02",
    "topicId": "m8-t5",
    "slug": "change-nested",
    "title": "Nested Dictionaries: Change Inner Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Set rec = {\"score\": {\"math\": 70}}, set rec[\"score\"][\"math\"] = 90, then print rec[\"score\"][\"math\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set rec = {\"score\": {\"math\": 70}}, set rec[\"score\"][\"math\"] = 90, then print rec[\"score\"][\"math\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rec"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "90"
      }
    ],
    "constraints": [
      "Output must match: 90"
    ],
    "hints": [
      "Assign to the inner key the same way you read it."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "90",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rec\" in globals(), \"Expected a variable named rec\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "90",
        "visibility": "public"
      }
    ],
    "solutionCode": "rec = {\"score\": {\"math\": 70}}\nrec[\"score\"][\"math\"] = 90\nprint(rec[\"score\"][\"math\"])",
    "approach": "Set rec = {\"score\": {\"math\": 70}}, set rec[\"score\"][\"math\"] = 90, then print rec[\"score\"][\"math\"].\n\nReference solution:\nrec = {\"score\": {\"math\": 70}}\nrec[\"score\"][\"math\"] = 90\nprint(rec[\"score\"][\"math\"])"
  },
  {
    "id": "m8-t5-p03",
    "topicId": "m8-t5",
    "slug": "add-inner-key",
    "title": "Nested Dictionaries: Add Inner Key",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Set rec = {\"score\": {\"math\": 70}}, set rec[\"score\"][\"sci\"] = 80, then print rec[\"score\"][\"sci\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set rec = {\"score\": {\"math\": 70}}, set rec[\"score\"][\"sci\"] = 80, then print rec[\"score\"][\"sci\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rec"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "80"
      }
    ],
    "constraints": [
      "Output must match: 80"
    ],
    "hints": [
      "New inner keys are added with assignment."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "80",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rec\" in globals(), \"Expected a variable named rec\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "80",
        "visibility": "public"
      }
    ],
    "solutionCode": "rec = {\"score\": {\"math\": 70}}\nrec[\"score\"][\"sci\"] = 80\nprint(rec[\"score\"][\"sci\"])",
    "approach": "Set rec = {\"score\": {\"math\": 70}}, set rec[\"score\"][\"sci\"] = 80, then print rec[\"score\"][\"sci\"].\n\nReference solution:\nrec = {\"score\": {\"math\": 70}}\nrec[\"score\"][\"sci\"] = 80\nprint(rec[\"score\"][\"sci\"])"
  },
  {
    "id": "m8-t5-p04",
    "topicId": "m8-t5",
    "slug": "list-of-dicts",
    "title": "Nested Dictionaries: List of Dicts",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Set users = [{\"name\": \"Dev\"}, {\"name\": \"Nia\"}] and print users[1][\"name\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set users = [{\"name\": \"Dev\"}, {\"name\": \"Nia\"}] and print users[1][\"name\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "users"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "Nia"
      }
    ],
    "constraints": [
      "Output must match: Nia"
    ],
    "hints": [
      "Index the list first, then the dict key."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Nia",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"users\" in globals(), \"Expected a variable named users\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "Nia",
        "visibility": "public"
      }
    ],
    "solutionCode": "users = [{\"name\": \"Dev\"}, {\"name\": \"Nia\"}]\nprint(users[1][\"name\"])",
    "approach": "Set users = [{\"name\": \"Dev\"}, {\"name\": \"Nia\"}] and print users[1][\"name\"].\n\nReference solution:\nusers = [{\"name\": \"Dev\"}, {\"name\": \"Nia\"}]\nprint(users[1][\"name\"])"
  },
  {
    "id": "m8-t5-p05",
    "topicId": "m8-t5",
    "slug": "three-level",
    "title": "Nested Dictionaries: Three Levels",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Set data = {\"org\": {\"team\": {\"n\": 4}}} and print data[\"org\"][\"team\"][\"n\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set data = {\"org\": {\"team\": {\"n\": 4}}} and print data[\"org\"][\"team\"][\"n\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "data"
      ],
      "requiresListAccess": true
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
      "Chain three keys in order."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "4",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"data\" in globals(), \"Expected a variable named data\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ],
    "solutionCode": "data = {\"org\": {\"team\": {\"n\": 4}}}\nprint(data[\"org\"][\"team\"][\"n\"])",
    "approach": "Set data = {\"org\": {\"team\": {\"n\": 4}}} and print data[\"org\"][\"team\"][\"n\"].\n\nReference solution:\ndata = {\"org\": {\"team\": {\"n\": 4}}}\nprint(data[\"org\"][\"team\"][\"n\"])"
  },
  {
    "id": "m8-t5-p06",
    "topicId": "m8-t5",
    "slug": "inner-keys",
    "title": "Nested Dictionaries: Inner keys()",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Set profile = {\"contact\": {\"email\": \"a@x.com\", \"phone\": \"99\"}} and print sorted(profile[\"contact\"].keys()).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set profile = {\"contact\": {\"email\": \"a@x.com\", \"phone\": \"99\"}} and print sorted(profile[\"contact\"].keys())."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "profile"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "['email', 'phone']"
      }
    ],
    "constraints": [
      "Output must match: ['email', 'phone']"
    ],
    "hints": [
      "sorted(...) keeps the key list in a stable order."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "['email', 'phone']",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"profile\" in globals(), \"Expected a variable named profile\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "['email', 'phone']",
        "visibility": "public"
      }
    ],
    "solutionCode": "profile = {\"contact\": {\"email\": \"a@x.com\", \"phone\": \"99\"}}\nprint(sorted(profile[\"contact\"].keys()))",
    "approach": "Set profile = {\"contact\": {\"email\": \"a@x.com\", \"phone\": \"99\"}} and print sorted(profile[\"contact\"].keys()).\n\nReference solution:\nprofile = {\"contact\": {\"email\": \"a@x.com\", \"phone\": \"99\"}}\nprint(sorted(profile[\"contact\"].keys()))"
  },
  {
    "id": "m8-t5-p07",
    "topicId": "m8-t5",
    "slug": "safe-inner-get",
    "title": "Nested Dictionaries: Safe Inner get()",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Set row = {\"meta\": {}} and print row.get(\"meta\", {}).get(\"id\", \"none\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Set row = {\"meta\": {}} and print row.get(\"meta\", {}).get(\"id\", \"none\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "row"
      ]
    },
    "examples": [
      {
        "output": "none"
      }
    ],
    "constraints": [
      "Output must match: none"
    ],
    "hints": [
      "The inner dict has no id, so the default none is printed."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "none",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"row\" in globals(), \"Expected a variable named row\"",
        "visibility": "public"
      },
      {
        "id": "m8-t5-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "none",
        "visibility": "public"
      }
    ],
    "solutionCode": "row = {\"meta\": {}}\nprint(row.get(\"meta\", {}).get(\"id\", \"none\"))",
    "approach": "Set row = {\"meta\": {}} and print row.get(\"meta\", {}).get(\"id\", \"none\").\n\nReference solution:\nrow = {\"meta\": {}}\nprint(row.get(\"meta\", {}).get(\"id\", \"none\"))"
  }
];
