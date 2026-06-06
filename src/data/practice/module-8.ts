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
    "publicTests": [
      {
        "id": "m8-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "Ana",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "Bob",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "10",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "Kim",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t1-p06-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t1-p07-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ]
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
    "publicTests": [
      {
        "id": "m8-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[('x', 1)]",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
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
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t2-p07",
    "topicId": "m8-t2",
    "slug": "topic-lookup",
    "title": "Keys and Values: Topic Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create d={\"topic\":\"Python\"}, print d[\"topic\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresDictKey": "topic",
      "introSegments": [
        {
          "type": "text",
          "value": "Look up value by key."
        }
      ],
      "editorPlaceholder": "# d[\"topic\"]",
      "successDetail": "Correct!"
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
      "d = {\"topic\":\"Python\"}\\nprint(d[\"topic\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t2-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p01",
    "topicId": "m8-t3",
    "slug": "keys",
    "title": "Accessing Dictionaries: keys()",
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
    "publicTests": [
      {
        "id": "m8-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p02",
    "topicId": "m8-t3",
    "slug": "values",
    "title": "Accessing Dictionaries: values()",
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
    "publicTests": [
      {
        "id": "m8-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p03",
    "topicId": "m8-t3",
    "slug": "items",
    "title": "Accessing Dictionaries: items()",
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
    "publicTests": [
      {
        "id": "m8-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[('x', 1)]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p04",
    "topicId": "m8-t3",
    "slug": "get",
    "title": "Accessing Dictionaries: get()",
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
        "id": "m8-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p05",
    "topicId": "m8-t3",
    "slug": "in-dict",
    "title": "Accessing Dictionaries: Key Membership",
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
        "id": "m8-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p06",
    "topicId": "m8-t3",
    "slug": "len-dict",
    "title": "Accessing Dictionaries: Dict Length",
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
        "id": "m8-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t3-p07",
    "topicId": "m8-t3",
    "slug": "topic-lookup",
    "title": "Accessing Dictionaries: Topic Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create d={\"topic\":\"Python\"}, print d[\"topic\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresDictKey": "topic",
      "introSegments": [
        {
          "type": "text",
          "value": "Look up value by key."
        }
      ],
      "editorPlaceholder": "# d[\"topic\"]",
      "successDetail": "Correct!"
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
      "d = {\"topic\":\"Python\"}\\nprint(d[\"topic\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t3-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p01",
    "topicId": "m8-t4",
    "slug": "keys",
    "title": "Dictionary Methods: keys()",
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
    "publicTests": [
      {
        "id": "m8-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "['a', 'b']",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p02",
    "topicId": "m8-t4",
    "slug": "values",
    "title": "Dictionary Methods: values()",
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
    "publicTests": [
      {
        "id": "m8-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "[1, 2]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p03",
    "topicId": "m8-t4",
    "slug": "items",
    "title": "Dictionary Methods: items()",
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
    "publicTests": [
      {
        "id": "m8-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "[('x', 1)]",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p04",
    "topicId": "m8-t4",
    "slug": "get",
    "title": "Dictionary Methods: get()",
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
        "id": "m8-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p05",
    "topicId": "m8-t4",
    "slug": "in-dict",
    "title": "Dictionary Methods: Key Membership",
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
        "id": "m8-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p06",
    "topicId": "m8-t4",
    "slug": "len-dict",
    "title": "Dictionary Methods: Dict Length",
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
        "id": "m8-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m8-t4-p07",
    "topicId": "m8-t4",
    "slug": "topic-lookup",
    "title": "Dictionary Methods: Topic Lookup",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create d={\"topic\":\"Python\"}, print d[\"topic\"].",
    "challengeContent": {
      "outputOnly": true,
      "requiresDictKey": "topic",
      "introSegments": [
        {
          "type": "text",
          "value": "Look up value by key."
        }
      ],
      "editorPlaceholder": "# d[\"topic\"]",
      "successDetail": "Correct!"
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
      "d = {\"topic\":\"Python\"}\\nprint(d[\"topic\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m8-t4-p07-t1",
        "label": "Sample test",
        "expectedStdout": "Python",
        "visibility": "public"
      }
    ]
  }
];
