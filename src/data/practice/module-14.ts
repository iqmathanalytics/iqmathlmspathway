import type { PracticeProblem } from "@/lib/types";

export const module14Practice: PracticeProblem[] = [
  {
    "id": "m14-t1-p01",
    "topicId": "m14-t1",
    "slug": "np-first-array",
    "title": "NumPy: Your First Array",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create a NumPy array named arr from [3, 6, 9] and print it as a plain list with .tolist().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Import NumPy as "
        },
        {
          "type": "code",
          "value": "np"
        },
        {
          "type": "text",
          "value": ", build "
        },
        {
          "type": "code",
          "value": "arr"
        },
        {
          "type": "text",
          "value": " from "
        },
        {
          "type": "code",
          "value": "[3, 6, 9]"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "np.array()"
        },
        {
          "type": "text",
          "value": ", and print "
        },
        {
          "type": "code",
          "value": "arr.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# arr = np.array([...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! arr is a real ndarray, not a Python list.",
      "requiresVariables": [
        "np",
        "arr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "import numpy as np is the universal convention.",
          "np.array(list) converts a Python list into an ndarray.",
          ".tolist() converts it back, which prints cleanly on every platform."
        ]
      }
    },
    "examples": [
      {
        "output": "[3, 6, 9]"
      }
    ],
    "constraints": [
      "Use np.array() — a plain list will not pass",
      "Name the array arr",
      "Print with .tolist()"
    ],
    "hints": [
      "arr = np.array([3, 6, 9])",
      "print(arr.tolist())"
    ],
    "starterCode": "# TODO: build the array and print it as a list\nimport numpy as np\n\narr = None\n",
    "solutionCode": "import numpy as np\n\narr = np.array([3, 6, 9])\nprint(arr.tolist())",
    "publicTests": [
      {
        "id": "m14-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[3, 6, 9]",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p01-t2",
        "label": "arr is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"arr\" in globals(), \"Expected a variable named arr\"\nassert isinstance(arr, _np.ndarray), \"Expected arr to be a NumPy array, got \" + type(arr).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p01-t3",
        "label": "arr holds the given values",
        "assertCode": "assert (arr.tolist()) == ([3, 6, 9]), \"Expected \" + repr([3, 6, 9]) + \", got \" + repr(arr.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Create a NumPy array named arr from [3, 6, 9] and print it as a plain list with .tolist().\n\nReference solution:\nimport numpy as np\n\narr = np.array([3, 6, 9])\nprint(arr.tolist())"
  },
  {
    "id": "m14-t1-p02",
    "topicId": "m14-t1",
    "slug": "np-vectorized-double",
    "title": "NumPy: Double Every Value at Once",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Multiply the whole array by 2 in one expression and print the result as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "NumPy applies maths to every element at once. Print "
        },
        {
          "type": "code",
          "value": "(arr * 2).tolist()"
        },
        {
          "type": "text",
          "value": " — no loop needed."
        }
      ],
      "editorPlaceholder": "# print((arr * 2).tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "arr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "arr * 2 multiplies every element — this is called vectorisation.",
          "On a Python list, * 2 would repeat the list instead."
        ]
      }
    },
    "examples": [
      {
        "output": "[6, 12, 18]"
      }
    ],
    "constraints": [
      "No for loop",
      "Do not modify arr",
      "Output must be exactly: [6, 12, 18]"
    ],
    "hints": [
      "print((arr * 2).tolist())"
    ],
    "starterCode": "# TODO: double every value without a loop\nimport numpy as np\n\narr = np.array([3, 6, 9])\n",
    "solutionCode": "import numpy as np\n\narr = np.array([3, 6, 9])\nprint((arr * 2).tolist())",
    "publicTests": [
      {
        "id": "m14-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[6, 12, 18]",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p02-t2",
        "label": "arr is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"arr\" in globals(), \"Expected a variable named arr\"\nassert isinstance(arr, _np.ndarray), \"Expected arr to be a NumPy array, got \" + type(arr).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p02-t3",
        "label": "arr itself is unchanged",
        "assertCode": "assert (arr.tolist()) == ([3, 6, 9]), \"Expected \" + repr([3, 6, 9]) + \", got \" + repr(arr.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p02-t4",
        "label": "doubling works elementwise",
        "assertCode": "assert ((arr * 2).tolist()) == ([6, 12, 18]), \"Expected \" + repr([6, 12, 18]) + \", got \" + repr((arr * 2).tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Multiply the whole array by 2 in one expression and print the result as a list.\n\nReference solution:\nimport numpy as np\n\narr = np.array([3, 6, 9])\nprint((arr * 2).tolist())"
  },
  {
    "id": "m14-t1-p03",
    "topicId": "m14-t1",
    "slug": "np-array-sum",
    "title": "NumPy: Total an Array",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the sum of the array using arr.sum() wrapped in int().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(arr.sum())"
        },
        {
          "type": "text",
          "value": ". Wrapping in "
        },
        {
          "type": "code",
          "value": "int()"
        },
        {
          "type": "text",
          "value": " turns the NumPy scalar into a plain Python int."
        }
      ],
      "editorPlaceholder": "# print(int(arr.sum()))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "arr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "arr.sum() adds every element.",
          "NumPy returns its own scalar type — int() makes the output predictable."
        ]
      }
    },
    "examples": [
      {
        "output": "18"
      }
    ],
    "constraints": [
      "Use arr.sum()",
      "Wrap the result in int()",
      "Output must be exactly: 18"
    ],
    "hints": [
      "print(int(arr.sum()))"
    ],
    "starterCode": "# TODO: total the array\nimport numpy as np\n\narr = np.array([3, 6, 9])\n",
    "solutionCode": "import numpy as np\n\narr = np.array([3, 6, 9])\nprint(int(arr.sum()))",
    "publicTests": [
      {
        "id": "m14-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "18",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p03-t2",
        "label": "arr is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"arr\" in globals(), \"Expected a variable named arr\"\nassert isinstance(arr, _np.ndarray), \"Expected arr to be a NumPy array, got \" + type(arr).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p03-t3",
        "label": "the total is correct",
        "assertCode": "assert (int(arr.sum())) == (18), \"Expected \" + repr(18) + \", got \" + repr(int(arr.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Print the sum of the array using arr.sum() wrapped in int().\n\nReference solution:\nimport numpy as np\n\narr = np.array([3, 6, 9])\nprint(int(arr.sum()))"
  },
  {
    "id": "m14-t1-p04",
    "topicId": "m14-t1",
    "slug": "np-array-type",
    "title": "NumPy: What Type Is It?",
    "difficulty": "easy",
    "order": 4,
    "layout": "challenge",
    "description": "Print the class name of a NumPy array using type(arr).__name__ to confirm it is an ndarray.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "type(arr).__name__"
        },
        {
          "type": "text",
          "value": ". The answer, "
        },
        {
          "type": "code",
          "value": "ndarray"
        },
        {
          "type": "text",
          "value": ", is the N-dimensional array at the heart of NumPy."
        }
      ],
      "editorPlaceholder": "# print(type(arr).__name__)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "arr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "type(x) gives the class; .__name__ gives its name as a string.",
          "Every NumPy array is an ndarray no matter its shape."
        ]
      }
    },
    "examples": [
      {
        "output": "ndarray"
      }
    ],
    "constraints": [
      "Use type(arr).__name__ — do not type the word yourself",
      "Output must be exactly: ndarray"
    ],
    "hints": [
      "print(type(arr).__name__)"
    ],
    "starterCode": "# TODO: print the class name of the array\nimport numpy as np\n\narr = np.array([3, 6, 9])\n",
    "solutionCode": "import numpy as np\n\narr = np.array([3, 6, 9])\nprint(type(arr).__name__)",
    "publicTests": [
      {
        "id": "m14-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "ndarray",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p04-t2",
        "label": "arr is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"arr\" in globals(), \"Expected a variable named arr\"\nassert isinstance(arr, _np.ndarray), \"Expected arr to be a NumPy array, got \" + type(arr).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p04-t3",
        "label": "the class name is ndarray",
        "assertCode": "assert (type(arr).__name__) == (\"ndarray\"), \"Expected \" + repr(\"ndarray\") + \", got \" + repr(type(arr).__name__)",
        "visibility": "public"
      }
    ],
    "approach": "Print the class name of a NumPy array using type(arr).__name__ to confirm it is an ndarray.\n\nReference solution:\nimport numpy as np\n\narr = np.array([3, 6, 9])\nprint(type(arr).__name__)"
  },
  {
    "id": "m14-t1-p05",
    "topicId": "m14-t1",
    "slug": "np-add-arrays",
    "title": "NumPy: Add Two Arrays",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Add two arrays elementwise into a variable named total and print it as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Add "
        },
        {
          "type": "code",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "[10, 20, 30]"
        },
        {
          "type": "text",
          "value": " elementwise into "
        },
        {
          "type": "code",
          "value": "total"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "total.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# total = a + b",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "total"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "a + b pairs up matching positions when the shapes match.",
          "The result is a new array — neither input changes."
        ]
      }
    },
    "examples": [
      {
        "output": "[11, 22, 33]"
      }
    ],
    "constraints": [
      "Use + on the arrays",
      "Store the result in total",
      "No loops"
    ],
    "hints": [
      "total = a + b",
      "print(total.tolist())"
    ],
    "starterCode": "# TODO: add the two arrays\nimport numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\ntotal = None\n",
    "solutionCode": "import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\ntotal = a + b\nprint(total.tolist())",
    "publicTests": [
      {
        "id": "m14-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "[11, 22, 33]",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p05-t2",
        "label": "total is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"total\" in globals(), \"Expected a variable named total\"\nassert isinstance(total, _np.ndarray), \"Expected total to be a NumPy array, got \" + type(total).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p05-t3",
        "label": "elementwise sum",
        "assertCode": "assert (total.tolist()) == ([11, 22, 33]), \"Expected \" + repr([11, 22, 33]) + \", got \" + repr(total.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p05-t4",
        "label": "input a is unchanged",
        "assertCode": "assert (a.tolist()) == ([1, 2, 3]), \"Expected \" + repr([1, 2, 3]) + \", got \" + repr(a.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Add two arrays elementwise into a variable named total and print it as a list.\n\nReference solution:\nimport numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\ntotal = a + b\nprint(total.tolist())"
  },
  {
    "id": "m14-t1-p06",
    "topicId": "m14-t1",
    "slug": "np-list-vs-array",
    "title": "NumPy: List vs Array Multiplication",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Show that * 2 repeats a Python list but doubles a NumPy array by printing both results.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "numbers * 2"
        },
        {
          "type": "text",
          "value": " for the Python list, then "
        },
        {
          "type": "code",
          "value": "(arr * 2).tolist()"
        },
        {
          "type": "text",
          "value": " for the array. Same operator, very different meaning."
        }
      ],
      "editorPlaceholder": "# print(numbers * 2)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "numbers",
        "arr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "For a list, * 2 concatenates the list with itself.",
          "For an array, * 2 multiplies every element.",
          "This is the single biggest surprise when moving from lists to NumPy."
        ]
      }
    },
    "examples": [
      {
        "output": "[1, 2, 1, 2]\n[2, 4]"
      }
    ],
    "constraints": [
      "Keep numbers as a plain list and arr as an array",
      "Print the list result first"
    ],
    "hints": [
      "print(numbers * 2)",
      "print((arr * 2).tolist())"
    ],
    "starterCode": "# TODO: print the list result, then the array result\nimport numpy as np\n\nnumbers = [1, 2]\narr = np.array([1, 2])\n",
    "solutionCode": "import numpy as np\n\nnumbers = [1, 2]\narr = np.array([1, 2])\nprint(numbers * 2)\nprint((arr * 2).tolist())",
    "publicTests": [
      {
        "id": "m14-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 1, 2]\n[2, 4]",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p06-t2",
        "label": "numbers has the right type",
        "assertCode": "assert \"numbers\" in globals(), \"Expected a variable named numbers\"\nassert isinstance(numbers, list), \"Expected numbers to be list, got \" + type(numbers).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p06-t3",
        "label": "arr is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"arr\" in globals(), \"Expected a variable named arr\"\nassert isinstance(arr, _np.ndarray), \"Expected arr to be a NumPy array, got \" + type(arr).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p06-t4",
        "label": "list repeats",
        "assertCode": "assert (numbers * 2) == ([1, 2, 1, 2]), \"Expected \" + repr([1, 2, 1, 2]) + \", got \" + repr(numbers * 2)",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p06-t5",
        "label": "array doubles",
        "assertCode": "assert ((arr * 2).tolist()) == ([2, 4]), \"Expected \" + repr([2, 4]) + \", got \" + repr((arr * 2).tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Show that * 2 repeats a Python list but doubles a NumPy array by printing both results.\n\nReference solution:\nimport numpy as np\n\nnumbers = [1, 2]\narr = np.array([1, 2])\nprint(numbers * 2)\nprint((arr * 2).tolist())"
  },
  {
    "id": "m14-t1-p07",
    "topicId": "m14-t1",
    "slug": "np-astype-float",
    "title": "NumPy: Convert to Floats",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Convert an integer array to float64 with astype and print the converted values.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Convert "
        },
        {
          "type": "code",
          "value": "arr"
        },
        {
          "type": "text",
          "value": " to floats with "
        },
        {
          "type": "code",
          "value": "astype(\"float64\")"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "floats"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "floats.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# floats = arr.astype('float64')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "arr",
        "floats"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "An array has one dtype for every element.",
          "astype(\"float64\") returns a new array — the original keeps its dtype.",
          "Float conversion matters before dividing, or integer division will surprise you."
        ]
      }
    },
    "examples": [
      {
        "output": "[3.0, 6.0, 9.0]"
      }
    ],
    "constraints": [
      "Use astype(\"float64\")",
      "Do not change arr itself",
      "Output must be exactly: [3.0, 6.0, 9.0]"
    ],
    "hints": [
      "floats = arr.astype(\"float64\")",
      "print(floats.tolist())"
    ],
    "starterCode": "# TODO: convert the array to float64\nimport numpy as np\n\narr = np.array([3, 6, 9])\nfloats = None\n",
    "solutionCode": "import numpy as np\n\narr = np.array([3, 6, 9])\nfloats = arr.astype(\"float64\")\nprint(floats.tolist())",
    "publicTests": [
      {
        "id": "m14-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[3.0, 6.0, 9.0]",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p07-t2",
        "label": "floats is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"floats\" in globals(), \"Expected a variable named floats\"\nassert isinstance(floats, _np.ndarray), \"Expected floats to be a NumPy array, got \" + type(floats).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p07-t3",
        "label": "dtype is float64",
        "assertCode": "assert (str(floats.dtype)) == (\"float64\"), \"Expected \" + repr(\"float64\") + \", got \" + repr(str(floats.dtype))",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p07-t4",
        "label": "values converted",
        "assertCode": "assert (floats.tolist()) == ([3.0, 6.0, 9.0]), \"Expected \" + repr([3.0, 6.0, 9.0]) + \", got \" + repr(floats.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t1-p07-t5",
        "label": "the original array stays integer",
        "assertCode": "assert arr.dtype.kind == \"i\", \"astype returns a new array — arr should still hold integers\"",
        "visibility": "public"
      }
    ],
    "approach": "Convert an integer array to float64 with astype and print the converted values.\n\nReference solution:\nimport numpy as np\n\narr = np.array([3, 6, 9])\nfloats = arr.astype(\"float64\")\nprint(floats.tolist())"
  },
  {
    "id": "m14-t2-p01",
    "topicId": "m14-t2",
    "slug": "np-zeros",
    "title": "Creation: An Array of Zeros",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create a length-4 array of zeros with np.zeros and print it as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "np.zeros(4)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "blanks"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "blanks.tolist()"
        },
        {
          "type": "text",
          "value": ". Note the values are floats."
        }
      ],
      "editorPlaceholder": "# blanks = np.zeros(4)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "blanks"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.zeros(n) pre-allocates an array you fill in later.",
          "The default dtype is float64, so you get 0.0 not 0."
        ]
      }
    },
    "examples": [
      {
        "output": "[0.0, 0.0, 0.0, 0.0]"
      }
    ],
    "constraints": [
      "Use np.zeros()",
      "Length must be 4",
      "Print with .tolist()"
    ],
    "hints": [
      "blanks = np.zeros(4)"
    ],
    "starterCode": "# TODO: make four zeros\nimport numpy as np\n\nblanks = None\n",
    "solutionCode": "import numpy as np\n\nblanks = np.zeros(4)\nprint(blanks.tolist())",
    "publicTests": [
      {
        "id": "m14-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[0.0, 0.0, 0.0, 0.0]",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p01-t2",
        "label": "four zeros created",
        "assertCode": "assert (blanks.tolist()) == ([0.0, 0.0, 0.0, 0.0]), \"Expected \" + repr([0.0, 0.0, 0.0, 0.0]) + \", got \" + repr(blanks.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p01-t3",
        "label": "length is 4",
        "assertCode": "assert (len(blanks)) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(blanks))",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p01-t4",
        "label": "dtype is float64",
        "assertCode": "assert (str(blanks.dtype)) == (\"float64\"), \"Expected \" + repr(\"float64\") + \", got \" + repr(str(blanks.dtype))",
        "visibility": "public"
      }
    ],
    "approach": "Create a length-4 array of zeros with np.zeros and print it as a list.\n\nReference solution:\nimport numpy as np\n\nblanks = np.zeros(4)\nprint(blanks.tolist())"
  },
  {
    "id": "m14-t2-p02",
    "topicId": "m14-t2",
    "slug": "np-arange",
    "title": "Creation: Even Numbers with arange",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Use np.arange to build the even numbers from 0 up to (not including) 10 and print them.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "np.arange(0, 10, 2)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "evens"
        },
        {
          "type": "text",
          "value": " and print the list. The stop value is excluded, just like "
        },
        {
          "type": "code",
          "value": "range()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# evens = np.arange(0, 10, 2)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "evens"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.arange(start, stop, step) works like range() but returns an array.",
          "10 is not included — the last value is 8."
        ]
      }
    },
    "examples": [
      {
        "output": "[0, 2, 4, 6, 8]"
      }
    ],
    "constraints": [
      "Use np.arange with a step of 2",
      "Output must be exactly: [0, 2, 4, 6, 8]"
    ],
    "hints": [
      "evens = np.arange(0, 10, 2)"
    ],
    "starterCode": "# TODO: build the even numbers below 10\nimport numpy as np\n\nevens = None\n",
    "solutionCode": "import numpy as np\n\nevens = np.arange(0, 10, 2)\nprint(evens.tolist())",
    "publicTests": [
      {
        "id": "m14-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[0, 2, 4, 6, 8]",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p02-t2",
        "label": "evens are 0 to 8",
        "assertCode": "assert (evens.tolist()) == ([0, 2, 4, 6, 8]), \"Expected \" + repr([0, 2, 4, 6, 8]) + \", got \" + repr(evens.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p02-t3",
        "label": "10 is excluded",
        "assertCode": "assert 10 not in evens.tolist(), \"arange excludes the stop value — 10 should not appear\"",
        "visibility": "public"
      }
    ],
    "approach": "Use np.arange to build the even numbers from 0 up to (not including) 10 and print them.\n\nReference solution:\nimport numpy as np\n\nevens = np.arange(0, 10, 2)\nprint(evens.tolist())"
  },
  {
    "id": "m14-t2-p03",
    "topicId": "m14-t2",
    "slug": "np-linspace",
    "title": "Creation: Evenly Spaced with linspace",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Use np.linspace to build 5 evenly spaced values from 0 to 1 inclusive and print them.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "np.linspace(0, 1, 5)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "grid"
        },
        {
          "type": "text",
          "value": " and print the list. Unlike arange, the stop value "
        },
        {
          "type": "code",
          "value": "1"
        },
        {
          "type": "text",
          "value": " is included."
        }
      ],
      "editorPlaceholder": "# grid = np.linspace(0, 1, 5)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.linspace(start, stop, count) picks how many points you want.",
          "Use it for plot axes and probability grids where the endpoints matter."
        ]
      }
    },
    "examples": [
      {
        "output": "[0.0, 0.25, 0.5, 0.75, 1.0]"
      }
    ],
    "constraints": [
      "Use np.linspace",
      "Exactly 5 values",
      "Print with .tolist()"
    ],
    "hints": [
      "grid = np.linspace(0, 1, 5)"
    ],
    "starterCode": "# TODO: five points from 0 to 1\nimport numpy as np\n\ngrid = None\n",
    "solutionCode": "import numpy as np\n\ngrid = np.linspace(0, 1, 5)\nprint(grid.tolist())",
    "publicTests": [
      {
        "id": "m14-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[0.0, 0.25, 0.5, 0.75, 1.0]",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p03-t2",
        "label": "five evenly spaced points",
        "assertCode": "assert (grid.tolist()) == ([0.0, 0.25, 0.5, 0.75, 1.0]), \"Expected \" + repr([0.0, 0.25, 0.5, 0.75, 1.0]) + \", got \" + repr(grid.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p03-t3",
        "label": "count is 5",
        "assertCode": "assert (len(grid)) == (5), \"Expected \" + repr(5) + \", got \" + repr(len(grid))",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p03-t4",
        "label": "the endpoint is included",
        "assertCode": "assert grid.tolist()[-1] == 1.0, \"linspace includes the stop value — the last item should be 1.0\"",
        "visibility": "public"
      }
    ],
    "approach": "Use np.linspace to build 5 evenly spaced values from 0 to 1 inclusive and print them.\n\nReference solution:\nimport numpy as np\n\ngrid = np.linspace(0, 1, 5)\nprint(grid.tolist())"
  },
  {
    "id": "m14-t2-p04",
    "topicId": "m14-t2",
    "slug": "np-shape",
    "title": "Properties: Read the Shape",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create a 2x3 array from nested lists and print its .shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "grid"
        },
        {
          "type": "text",
          "value": " from "
        },
        {
          "type": "code",
          "value": "[[1, 2, 3], [4, 5, 6]]"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "grid.shape"
        },
        {
          "type": "text",
          "value": " — rows first, then columns."
        }
      ],
      "editorPlaceholder": "# grid = np.array([[...], [...]])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Nested lists become a 2-D array.",
          ".shape is a tuple of plain ints, so it prints as (2, 3)."
        ]
      }
    },
    "examples": [
      {
        "output": "(2, 3)"
      }
    ],
    "constraints": [
      "Build a 2x3 array",
      "Print .shape",
      "Output must be exactly: (2, 3)"
    ],
    "hints": [
      "grid = np.array([[1, 2, 3], [4, 5, 6]])",
      "print(grid.shape)"
    ],
    "starterCode": "# TODO: build the 2x3 array and print its shape\nimport numpy as np\n\ngrid = None\n",
    "solutionCode": "import numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\nprint(grid.shape)",
    "publicTests": [
      {
        "id": "m14-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "(2, 3)",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p04-t2",
        "label": "grid is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"grid\" in globals(), \"Expected a variable named grid\"\nassert isinstance(grid, _np.ndarray), \"Expected grid to be a NumPy array, got \" + type(grid).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p04-t3",
        "label": "shape is 2 rows by 3 columns",
        "assertCode": "assert (grid.shape) == ((2, 3)), \"Expected \" + repr((2, 3)) + \", got \" + repr(grid.shape)",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p04-t4",
        "label": "values are correct",
        "assertCode": "assert (grid.tolist()) == ([[1, 2, 3], [4, 5, 6]]), \"Expected \" + repr([[1, 2, 3], [4, 5, 6]]) + \", got \" + repr(grid.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Create a 2x3 array from nested lists and print its .shape.\n\nReference solution:\nimport numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\nprint(grid.shape)"
  },
  {
    "id": "m14-t2-p05",
    "topicId": "m14-t2",
    "slug": "np-dtype",
    "title": "Properties: Check the dtype",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Create an array with an explicit \"float64\" dtype and print str(arr.dtype).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "np.array([1, 2, 3], dtype=\"float64\")"
        },
        {
          "type": "text",
          "value": " as "
        },
        {
          "type": "code",
          "value": "arr"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "str(arr.dtype)"
        },
        {
          "type": "text",
          "value": ". Setting dtype explicitly keeps results identical everywhere."
        }
      ],
      "editorPlaceholder": "# arr = np.array([1, 2, 3], dtype='float64')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "arr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Every array has exactly one dtype for all its elements.",
          "The default integer width depends on the machine — so state it when it matters."
        ]
      }
    },
    "examples": [
      {
        "output": "float64"
      }
    ],
    "constraints": [
      "Pass dtype=\"float64\" to np.array",
      "Output must be exactly: float64"
    ],
    "hints": [
      "arr = np.array([1, 2, 3], dtype=\"float64\")",
      "print(str(arr.dtype))"
    ],
    "starterCode": "# TODO: create a float64 array and print its dtype\nimport numpy as np\n\narr = None\n",
    "solutionCode": "import numpy as np\n\narr = np.array([1, 2, 3], dtype=\"float64\")\nprint(str(arr.dtype))",
    "publicTests": [
      {
        "id": "m14-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "float64",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p05-t2",
        "label": "arr is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"arr\" in globals(), \"Expected a variable named arr\"\nassert isinstance(arr, _np.ndarray), \"Expected arr to be a NumPy array, got \" + type(arr).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p05-t3",
        "label": "dtype is float64",
        "assertCode": "assert (str(arr.dtype)) == (\"float64\"), \"Expected \" + repr(\"float64\") + \", got \" + repr(str(arr.dtype))",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p05-t4",
        "label": "values stored as floats",
        "assertCode": "assert (arr.tolist()) == ([1.0, 2.0, 3.0]), \"Expected \" + repr([1.0, 2.0, 3.0]) + \", got \" + repr(arr.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Create an array with an explicit \"float64\" dtype and print str(arr.dtype).\n\nReference solution:\nimport numpy as np\n\narr = np.array([1, 2, 3], dtype=\"float64\")\nprint(str(arr.dtype))"
  },
  {
    "id": "m14-t2-p06",
    "topicId": "m14-t2",
    "slug": "np-ndim-size",
    "title": "Properties: Dimensions and Size",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print how many dimensions the 2x3 array has, then how many elements it holds.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For the 2x3 array, print "
        },
        {
          "type": "code",
          "value": "grid.ndim"
        },
        {
          "type": "text",
          "value": " then "
        },
        {
          "type": "code",
          "value": "grid.size"
        },
        {
          "type": "text",
          "value": " — the number of axes, then the total element count."
        }
      ],
      "editorPlaceholder": "# print(grid.ndim)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".ndim is the number of axes (2 for a table).",
          ".size is rows * columns, not the shape."
        ]
      }
    },
    "examples": [
      {
        "output": "2\n6"
      }
    ],
    "constraints": [
      "Print ndim on line 1 and size on line 2"
    ],
    "hints": [
      "print(grid.ndim)",
      "print(grid.size)"
    ],
    "starterCode": "# TODO: print ndim then size\nimport numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\n",
    "solutionCode": "import numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\nprint(grid.ndim)\nprint(grid.size)",
    "publicTests": [
      {
        "id": "m14-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "2\n6",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p06-t2",
        "label": "two dimensions",
        "assertCode": "assert (grid.ndim) == (2), \"Expected \" + repr(2) + \", got \" + repr(grid.ndim)",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p06-t3",
        "label": "six elements",
        "assertCode": "assert (grid.size) == (6), \"Expected \" + repr(6) + \", got \" + repr(grid.size)",
        "visibility": "public"
      }
    ],
    "approach": "Print how many dimensions the 2x3 array has, then how many elements it holds.\n\nReference solution:\nimport numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\nprint(grid.ndim)\nprint(grid.size)"
  },
  {
    "id": "m14-t2-p07",
    "topicId": "m14-t2",
    "slug": "np-reshape",
    "title": "Properties: Reshape a Range",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Build np.arange(6), reshape it into 2 rows by 3 columns, and print the nested list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "np.arange(6)"
        },
        {
          "type": "text",
          "value": " and reshape it to "
        },
        {
          "type": "code",
          "value": "(2, 3)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "grid"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "grid.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# grid = np.arange(6).reshape(2, 3)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "reshape only works when the element count matches: 2 * 3 == 6.",
          "Values fill row by row.",
          "The result shares data with the original — it is a view, not a copy."
        ]
      }
    },
    "examples": [
      {
        "output": "[[0, 1, 2], [3, 4, 5]]"
      }
    ],
    "constraints": [
      "Use np.arange(6) and .reshape(2, 3)",
      "Output must be exactly: [[0, 1, 2], [3, 4, 5]]"
    ],
    "hints": [
      "grid = np.arange(6).reshape(2, 3)"
    ],
    "starterCode": "# TODO: reshape 6 values into 2 rows of 3\nimport numpy as np\n\ngrid = None\n",
    "solutionCode": "import numpy as np\n\ngrid = np.arange(6).reshape(2, 3)\nprint(grid.tolist())",
    "publicTests": [
      {
        "id": "m14-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[[0, 1, 2], [3, 4, 5]]",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p07-t2",
        "label": "grid is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"grid\" in globals(), \"Expected a variable named grid\"\nassert isinstance(grid, _np.ndarray), \"Expected grid to be a NumPy array, got \" + type(grid).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p07-t3",
        "label": "shape is (2, 3)",
        "assertCode": "assert (grid.shape) == ((2, 3)), \"Expected \" + repr((2, 3)) + \", got \" + repr(grid.shape)",
        "visibility": "public"
      },
      {
        "id": "m14-t2-p07-t4",
        "label": "values fill row by row",
        "assertCode": "assert (grid.tolist()) == ([[0, 1, 2], [3, 4, 5]]), \"Expected \" + repr([[0, 1, 2], [3, 4, 5]]) + \", got \" + repr(grid.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Build np.arange(6), reshape it into 2 rows by 3 columns, and print the nested list.\n\nReference solution:\nimport numpy as np\n\ngrid = np.arange(6).reshape(2, 3)\nprint(grid.tolist())"
  },
  {
    "id": "m14-t3-p01",
    "topicId": "m14-t3",
    "slug": "np-index-first",
    "title": "Indexing: The First Element",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print the first element of the sales array using index 0.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(sales[0])"
        },
        {
          "type": "text",
          "value": " — indexing an array works exactly like a list."
        }
      ],
      "editorPlaceholder": "# print(int(sales[0]))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Index 0 is the first element.",
          "int() keeps the printed value a plain integer."
        ]
      }
    },
    "examples": [
      {
        "output": "10"
      }
    ],
    "constraints": [
      "Use index 0",
      "Output must be exactly: 10"
    ],
    "hints": [
      "print(int(sales[0]))"
    ],
    "starterCode": "# TODO: print the first value\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(int(sales[0]))",
    "publicTests": [
      {
        "id": "m14-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "10",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p01-t2",
        "label": "sales is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"sales\" in globals(), \"Expected a variable named sales\"\nassert isinstance(sales, _np.ndarray), \"Expected sales to be a NumPy array, got \" + type(sales).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p01-t3",
        "label": "first element",
        "assertCode": "assert (int(sales[0])) == (10), \"Expected \" + repr(10) + \", got \" + repr(int(sales[0]))",
        "visibility": "public"
      }
    ],
    "approach": "Print the first element of the sales array using index 0.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(int(sales[0]))"
  },
  {
    "id": "m14-t3-p02",
    "topicId": "m14-t3",
    "slug": "np-slice-middle",
    "title": "Indexing: Slice the Middle",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print elements at index 1 and 2 using a slice, as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "sales[1:3].tolist()"
        },
        {
          "type": "text",
          "value": ". The start is included, the stop is not."
        }
      ],
      "editorPlaceholder": "# print(sales[1:3].tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "arr[1:3] returns index 1 and 2.",
          "Slicing an array returns another array."
        ]
      }
    },
    "examples": [
      {
        "output": "[20, 30]"
      }
    ],
    "constraints": [
      "Use a slice, not two indexes",
      "Output must be exactly: [20, 30]"
    ],
    "hints": [
      "print(sales[1:3].tolist())"
    ],
    "starterCode": "# TODO: slice index 1 and 2\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(sales[1:3].tolist())",
    "publicTests": [
      {
        "id": "m14-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[20, 30]",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p02-t2",
        "label": "slice holds two values",
        "assertCode": "assert (sales[1:3].tolist()) == ([20, 30]), \"Expected \" + repr([20, 30]) + \", got \" + repr(sales[1:3].tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p02-t3",
        "label": "the array is unchanged",
        "assertCode": "assert (sales.tolist()) == ([10, 20, 30, 40, 50]), \"Expected \" + repr([10, 20, 30, 40, 50]) + \", got \" + repr(sales.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Print elements at index 1 and 2 using a slice, as a list.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(sales[1:3].tolist())"
  },
  {
    "id": "m14-t3-p03",
    "topicId": "m14-t3",
    "slug": "np-negative-index",
    "title": "Indexing: Count From the End",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the last element of the array using a negative index.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(sales[-1])"
        },
        {
          "type": "text",
          "value": " — negative indexes count backwards from the end."
        }
      ],
      "editorPlaceholder": "# print(int(sales[-1]))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "-1 is the last element, -2 the second to last."
        ]
      }
    },
    "examples": [
      {
        "output": "50"
      }
    ],
    "constraints": [
      "Use a negative index",
      "Output must be exactly: 50"
    ],
    "hints": [
      "print(int(sales[-1]))"
    ],
    "starterCode": "# TODO: print the last value\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(int(sales[-1]))",
    "publicTests": [
      {
        "id": "m14-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "50",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p03-t2",
        "label": "last element",
        "assertCode": "assert (int(sales[-1])) == (50), \"Expected \" + repr(50) + \", got \" + repr(int(sales[-1]))",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p03-t3",
        "label": "second to last works too",
        "assertCode": "assert (int(sales[-2])) == (40), \"Expected \" + repr(40) + \", got \" + repr(int(sales[-2]))",
        "visibility": "public"
      }
    ],
    "approach": "Print the last element of the array using a negative index.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(int(sales[-1]))"
  },
  {
    "id": "m14-t3-p04",
    "topicId": "m14-t3",
    "slug": "np-2d-element",
    "title": "Indexing: One Cell of a 2-D Array",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print the value in row 1, column 2 of a 2-D array using grid[1, 2].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[[10, 20, 30], [40, 50, 60]]"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "int(grid[1, 2])"
        },
        {
          "type": "text",
          "value": " — row first, then column, in one pair of brackets."
        }
      ],
      "editorPlaceholder": "# print(int(grid[1, 2]))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "grid[1, 2] is the NumPy way; grid[1][2] also works but is slower.",
          "Both indexes start at 0."
        ]
      }
    },
    "examples": [
      {
        "output": "60"
      }
    ],
    "constraints": [
      "Use grid[row, column]",
      "Output must be exactly: 60"
    ],
    "hints": [
      "print(int(grid[1, 2]))"
    ],
    "starterCode": "# TODO: read row 1, column 2\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\n",
    "solutionCode": "import numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nprint(int(grid[1, 2]))",
    "publicTests": [
      {
        "id": "m14-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "60",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p04-t2",
        "label": "row 1 column 2",
        "assertCode": "assert (int(grid[1, 2])) == (60), \"Expected \" + repr(60) + \", got \" + repr(int(grid[1, 2]))",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p04-t3",
        "label": "shape is (2, 3)",
        "assertCode": "assert (grid.shape) == ((2, 3)), \"Expected \" + repr((2, 3)) + \", got \" + repr(grid.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Print the value in row 1, column 2 of a 2-D array using grid[1, 2].\n\nReference solution:\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nprint(int(grid[1, 2]))"
  },
  {
    "id": "m14-t3-p05",
    "topicId": "m14-t3",
    "slug": "np-2d-column",
    "title": "Indexing: Take a Whole Column",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print the first column of a 2-D array using grid[:, 0] as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "grid[:, 0].tolist()"
        },
        {
          "type": "text",
          "value": ". The "
        },
        {
          "type": "code",
          "value": ":"
        },
        {
          "type": "text",
          "value": " means every row, and "
        },
        {
          "type": "code",
          "value": "0"
        },
        {
          "type": "text",
          "value": " picks the first column."
        }
      ],
      "editorPlaceholder": "# print(grid[:, 0].tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Column selection is the everyday move for feature extraction.",
          "grid[0, :] would give the first row instead."
        ]
      }
    },
    "examples": [
      {
        "output": "[10, 40]"
      }
    ],
    "constraints": [
      "Use grid[:, 0]",
      "Output must be exactly: [10, 40]"
    ],
    "hints": [
      "print(grid[:, 0].tolist())"
    ],
    "starterCode": "# TODO: take column 0\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\n",
    "solutionCode": "import numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nprint(grid[:, 0].tolist())",
    "publicTests": [
      {
        "id": "m14-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "[10, 40]",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p05-t2",
        "label": "first column",
        "assertCode": "assert (grid[:, 0].tolist()) == ([10, 40]), \"Expected \" + repr([10, 40]) + \", got \" + repr(grid[:, 0].tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p05-t3",
        "label": "first row is different",
        "assertCode": "assert (grid[0, :].tolist()) == ([10, 20, 30]), \"Expected \" + repr([10, 20, 30]) + \", got \" + repr(grid[0, :].tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Print the first column of a 2-D array using grid[:, 0] as a list.\n\nReference solution:\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nprint(grid[:, 0].tolist())"
  },
  {
    "id": "m14-t3-p06",
    "topicId": "m14-t3",
    "slug": "np-boolean-mask",
    "title": "Indexing: Filter with a Boolean Mask",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Keep only the sales above 25 using boolean indexing and print them as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "sales[sales > 25].tolist()"
        },
        {
          "type": "text",
          "value": " — the condition builds a True/False mask that selects the rows you keep."
        }
      ],
      "editorPlaceholder": "# print(sales[sales > 25].tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "sales > 25 produces an array of booleans.",
          "Indexing with that mask keeps only the True positions.",
          "This is how filtering works in pandas too."
        ]
      }
    },
    "examples": [
      {
        "output": "[30, 40, 50]"
      }
    ],
    "constraints": [
      "Use boolean indexing — no loop, no filter()",
      "Output must be exactly: [30, 40, 50]"
    ],
    "hints": [
      "print(sales[sales > 25].tolist())"
    ],
    "starterCode": "# TODO: keep values above 25\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(sales[sales > 25].tolist())",
    "publicTests": [
      {
        "id": "m14-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[30, 40, 50]",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p06-t2",
        "label": "values above 25 kept",
        "assertCode": "assert (sales[sales > 25].tolist()) == ([30, 40, 50]), \"Expected \" + repr([30, 40, 50]) + \", got \" + repr(sales[sales > 25].tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p06-t3",
        "label": "the mask itself is boolean",
        "assertCode": "assert ((sales > 25).tolist()) == ([False, False, True, True, True]), \"Expected \" + repr([False, False, True, True, True]) + \", got \" + repr((sales > 25).tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Keep only the sales above 25 using boolean indexing and print them as a list.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(sales[sales > 25].tolist())"
  },
  {
    "id": "m14-t3-p07",
    "topicId": "m14-t3",
    "slug": "np-step-slice",
    "title": "Indexing: Every Other Value",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print every second element of the array using a step slice.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "sales[::2].tolist()"
        },
        {
          "type": "text",
          "value": " — the third slice number is the step. Handy for downsampling a series."
        }
      ],
      "editorPlaceholder": "# print(sales[::2].tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "arr[start:stop:step] — leave start and stop empty to cover everything.",
          "A step of 2 takes index 0, 2, 4, …"
        ]
      }
    },
    "examples": [
      {
        "output": "[10, 30, 50]"
      }
    ],
    "constraints": [
      "Use a step slice",
      "Output must be exactly: [10, 30, 50]"
    ],
    "hints": [
      "print(sales[::2].tolist())"
    ],
    "starterCode": "# TODO: take every second value\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(sales[::2].tolist())",
    "publicTests": [
      {
        "id": "m14-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[10, 30, 50]",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p07-t2",
        "label": "every second value",
        "assertCode": "assert (sales[::2].tolist()) == ([10, 30, 50]), \"Expected \" + repr([10, 30, 50]) + \", got \" + repr(sales[::2].tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t3-p07-t3",
        "label": "offset by one gives the others",
        "assertCode": "assert (sales[1::2].tolist()) == ([20, 40]), \"Expected \" + repr([20, 40]) + \", got \" + repr(sales[1::2].tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Print every second element of the array using a step slice.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40, 50])\nprint(sales[::2].tolist())"
  },
  {
    "id": "m14-t4-p01",
    "topicId": "m14-t4",
    "slug": "np-add-scalar",
    "title": "Operations: Add a Number to Every Element",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Add 10 to every element of an array and print the result as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "(prices + 10).tolist()"
        },
        {
          "type": "text",
          "value": " — the scalar is broadcast to every element."
        }
      ],
      "editorPlaceholder": "# print((prices + 10).tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "prices"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A single number stretches to match the array's shape.",
          "That is the simplest form of broadcasting."
        ]
      }
    },
    "examples": [
      {
        "output": "[15, 25, 35]"
      }
    ],
    "constraints": [
      "No loop",
      "Do not modify prices",
      "Output must be exactly: [15, 25, 35]"
    ],
    "hints": [
      "print((prices + 10).tolist())"
    ],
    "starterCode": "# TODO: add 10 to every price\nimport numpy as np\n\nprices = np.array([5, 15, 25])\n",
    "solutionCode": "import numpy as np\n\nprices = np.array([5, 15, 25])\nprint((prices + 10).tolist())",
    "publicTests": [
      {
        "id": "m14-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[15, 25, 35]",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p01-t2",
        "label": "each element grew by 10",
        "assertCode": "assert ((prices + 10).tolist()) == ([15, 25, 35]), \"Expected \" + repr([15, 25, 35]) + \", got \" + repr((prices + 10).tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p01-t3",
        "label": "prices is unchanged",
        "assertCode": "assert (prices.tolist()) == ([5, 15, 25]), \"Expected \" + repr([5, 15, 25]) + \", got \" + repr(prices.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Add 10 to every element of an array and print the result as a list.\n\nReference solution:\nimport numpy as np\n\nprices = np.array([5, 15, 25])\nprint((prices + 10).tolist())"
  },
  {
    "id": "m14-t4-p02",
    "topicId": "m14-t4",
    "slug": "np-multiply-arrays",
    "title": "Operations: Units Times Price",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Multiply a units array by a price array elementwise to get revenue and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Multiply "
        },
        {
          "type": "code",
          "value": "units"
        },
        {
          "type": "text",
          "value": " by "
        },
        {
          "type": "code",
          "value": "price"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "revenue.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# revenue = units * price",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "revenue"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Matching shapes multiply position by position.",
          "This one line replaces a whole loop over rows."
        ]
      }
    },
    "examples": [
      {
        "output": "[20, 90, 40]"
      }
    ],
    "constraints": [
      "Use * on the two arrays",
      "Store the result in revenue"
    ],
    "hints": [
      "revenue = units * price"
    ],
    "starterCode": "# TODO: revenue = units * price\nimport numpy as np\n\nunits = np.array([2, 9, 4])\nprice = np.array([10, 10, 10])\nrevenue = None\n",
    "solutionCode": "import numpy as np\n\nunits = np.array([2, 9, 4])\nprice = np.array([10, 10, 10])\nrevenue = units * price\nprint(revenue.tolist())",
    "publicTests": [
      {
        "id": "m14-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[20, 90, 40]",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p02-t2",
        "label": "revenue is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"revenue\" in globals(), \"Expected a variable named revenue\"\nassert isinstance(revenue, _np.ndarray), \"Expected revenue to be a NumPy array, got \" + type(revenue).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p02-t3",
        "label": "elementwise product",
        "assertCode": "assert (revenue.tolist()) == ([20, 90, 40]), \"Expected \" + repr([20, 90, 40]) + \", got \" + repr(revenue.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Multiply a units array by a price array elementwise to get revenue and print it.\n\nReference solution:\nimport numpy as np\n\nunits = np.array([2, 9, 4])\nprice = np.array([10, 10, 10])\nrevenue = units * price\nprint(revenue.tolist())"
  },
  {
    "id": "m14-t4-p03",
    "topicId": "m14-t4",
    "slug": "np-broadcast-row",
    "title": "Operations: Broadcast a Row",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Add a 3-element row to every row of a 2x3 array and print the nested result.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Add "
        },
        {
          "type": "code",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": " to every row of "
        },
        {
          "type": "code",
          "value": "grid"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "shifted"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "shifted.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# shifted = grid + row",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "shifted"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A (3,) array stretches across both rows of a (2, 3) array.",
          "Broadcasting needs the trailing dimensions to match — here both are 3.",
          "No loop and no copying of the row."
        ]
      }
    },
    "examples": [
      {
        "output": "[[11, 22, 33], [41, 52, 63]]"
      }
    ],
    "constraints": [
      "Rely on broadcasting — no loop",
      "Store the result in shifted"
    ],
    "hints": [
      "shifted = grid + row"
    ],
    "starterCode": "# TODO: add the row to every row\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nrow = np.array([1, 2, 3])\nshifted = None\n",
    "solutionCode": "import numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nrow = np.array([1, 2, 3])\nshifted = grid + row\nprint(shifted.tolist())",
    "publicTests": [
      {
        "id": "m14-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[[11, 22, 33], [41, 52, 63]]",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p03-t2",
        "label": "shifted is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"shifted\" in globals(), \"Expected a variable named shifted\"\nassert isinstance(shifted, _np.ndarray), \"Expected shifted to be a NumPy array, got \" + type(shifted).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p03-t3",
        "label": "the row was added to both rows",
        "assertCode": "assert (shifted.tolist()) == ([[11, 22, 33], [41, 52, 63]]), \"Expected \" + repr([[11, 22, 33], [41, 52, 63]]) + \", got \" + repr(shifted.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p03-t4",
        "label": "shape is preserved",
        "assertCode": "assert (shifted.shape) == ((2, 3)), \"Expected \" + repr((2, 3)) + \", got \" + repr(shifted.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Add a 3-element row to every row of a 2x3 array and print the nested result.\n\nReference solution:\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nrow = np.array([1, 2, 3])\nshifted = grid + row\nprint(shifted.tolist())"
  },
  {
    "id": "m14-t4-p04",
    "topicId": "m14-t4",
    "slug": "np-comparison-mask",
    "title": "Operations: Build a Comparison Mask",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Compare an array against 25 and print the resulting boolean mask as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store "
        },
        {
          "type": "code",
          "value": "sales > 25"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "mask"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "mask.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# mask = sales > 25",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "mask"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Comparison operators are vectorised too.",
          "The mask has the same length as the array.",
          "int(mask.sum()) would then count how many passed."
        ]
      }
    },
    "examples": [
      {
        "output": "[False, False, True, True]"
      }
    ],
    "constraints": [
      "Store the comparison in mask",
      "Print with .tolist()"
    ],
    "hints": [
      "mask = sales > 25"
    ],
    "starterCode": "# TODO: build the boolean mask\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nmask = None\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nmask = sales > 25\nprint(mask.tolist())",
    "publicTests": [
      {
        "id": "m14-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "[False, False, True, True]",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p04-t2",
        "label": "mask flags values above 25",
        "assertCode": "assert (mask.tolist()) == ([False, False, True, True]), \"Expected \" + repr([False, False, True, True]) + \", got \" + repr(mask.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p04-t3",
        "label": "mask is boolean",
        "assertCode": "assert (str(mask.dtype)) == (\"bool\"), \"Expected \" + repr(\"bool\") + \", got \" + repr(str(mask.dtype))",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p04-t4",
        "label": "two values passed",
        "assertCode": "assert (int(mask.sum())) == (2), \"Expected \" + repr(2) + \", got \" + repr(int(mask.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Compare an array against 25 and print the resulting boolean mask as a list.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nmask = sales > 25\nprint(mask.tolist())"
  },
  {
    "id": "m14-t4-p05",
    "topicId": "m14-t4",
    "slug": "np-where",
    "title": "Operations: Label Values with np.where",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use np.where to turn sales into 1 when above 25 and 0 otherwise, then print the list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "np.where(sales > 25, 1, 0)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "flags"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "flags.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# flags = np.where(sales > 25, 1, 0)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "flags"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.where(condition, value_if_true, value_if_false) works elementwise.",
          "It is the vectorised version of an if/else — used constantly for feature flags."
        ]
      }
    },
    "examples": [
      {
        "output": "[0, 0, 1, 1]"
      }
    ],
    "constraints": [
      "Use np.where",
      "Store the result in flags",
      "No loop"
    ],
    "hints": [
      "flags = np.where(sales > 25, 1, 0)"
    ],
    "starterCode": "# TODO: flag the high sales with 1\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nflags = None\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nflags = np.where(sales > 25, 1, 0)\nprint(flags.tolist())",
    "publicTests": [
      {
        "id": "m14-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "[0, 0, 1, 1]",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p05-t2",
        "label": "high sales flagged",
        "assertCode": "assert (flags.tolist()) == ([0, 0, 1, 1]), \"Expected \" + repr([0, 0, 1, 1]) + \", got \" + repr(flags.tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p05-t3",
        "label": "two rows flagged",
        "assertCode": "assert (int(flags.sum())) == (2), \"Expected \" + repr(2) + \", got \" + repr(int(flags.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Use np.where to turn sales into 1 when above 25 and 0 otherwise, then print the list.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nflags = np.where(sales > 25, 1, 0)\nprint(flags.tolist())"
  },
  {
    "id": "m14-t4-p06",
    "topicId": "m14-t4",
    "slug": "np-dot-product",
    "title": "Operations: Dot Product for Total Revenue",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Use np.dot to multiply units by prices and sum in one step, then print the total.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(np.dot(units, price))"
        },
        {
          "type": "text",
          "value": " — multiply matching elements and add them up in a single call."
        }
      ],
      "editorPlaceholder": "# print(int(np.dot(units, price)))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "units",
        "price"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.dot(a, b) is sum(a * b) for 1-D arrays.",
          "It is the core operation behind linear models."
        ]
      }
    },
    "examples": [
      {
        "output": "80"
      }
    ],
    "constraints": [
      "Use np.dot",
      "Output must be exactly: 80"
    ],
    "hints": [
      "print(int(np.dot(units, price)))"
    ],
    "starterCode": "# TODO: total revenue with a dot product\nimport numpy as np\n\nunits = np.array([2, 3, 1])\nprice = np.array([10, 20, 0])\n",
    "solutionCode": "import numpy as np\n\nunits = np.array([2, 3, 1])\nprice = np.array([10, 20, 0])\nprint(int(np.dot(units, price)))",
    "publicTests": [
      {
        "id": "m14-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "80",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p06-t2",
        "label": "dot product is the revenue",
        "assertCode": "assert (int(np.dot(units, price))) == (80), \"Expected \" + repr(80) + \", got \" + repr(int(np.dot(units, price)))",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p06-t3",
        "label": "it matches the manual sum",
        "assertCode": "assert (int(np.dot(units, price))) == (int((units * price).sum())), \"Expected \" + repr(int((units * price).sum())) + \", got \" + repr(int(np.dot(units, price)))",
        "visibility": "public"
      }
    ],
    "approach": "Use np.dot to multiply units by prices and sum in one step, then print the total.\n\nReference solution:\nimport numpy as np\n\nunits = np.array([2, 3, 1])\nprice = np.array([10, 20, 0])\nprint(int(np.dot(units, price)))"
  },
  {
    "id": "m14-t4-p07",
    "topicId": "m14-t4",
    "slug": "np-standardize",
    "title": "Operations: Standardise an Array",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Subtract the mean and divide by the standard deviation, then print the values rounded to 2 decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Standardise "
        },
        {
          "type": "code",
          "value": "[10, 20, 30]"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "(values - values.mean()) / values.std()"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "scaled"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "np.round(scaled, 2).tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# scaled = (values - values.mean()) / values.std()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "values",
        "scaled"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Both the subtraction and the division broadcast over the whole array.",
          "Standardising puts features on the same scale before modelling.",
          "np.round(arr, 2) rounds every element at once."
        ]
      }
    },
    "examples": [
      {
        "output": "[-1.22, 0.0, 1.22]"
      }
    ],
    "constraints": [
      "Use .mean() and .std() — do not hardcode 20 or 8.16",
      "Round only when printing",
      "Output must be exactly: [-1.22, 0.0, 1.22]"
    ],
    "hints": [
      "scaled = (values - values.mean()) / values.std()",
      "print(np.round(scaled, 2).tolist())"
    ],
    "starterCode": "# TODO: standardise the values\nimport numpy as np\n\nvalues = np.array([10, 20, 30])\nscaled = None\n",
    "solutionCode": "import numpy as np\n\nvalues = np.array([10, 20, 30])\nscaled = (values - values.mean()) / values.std()\nprint(np.round(scaled, 2).tolist())",
    "publicTests": [
      {
        "id": "m14-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[-1.22, 0.0, 1.22]",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p07-t2",
        "label": "scaled is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"scaled\" in globals(), \"Expected a variable named scaled\"\nassert isinstance(scaled, _np.ndarray), \"Expected scaled to be a NumPy array, got \" + type(scaled).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p07-t3",
        "label": "values are standardised",
        "assertCode": "assert (np.round(scaled, 2).tolist()) == ([-1.22, 0.0, 1.22]), \"Expected \" + repr([-1.22, 0.0, 1.22]) + \", got \" + repr(np.round(scaled, 2).tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p07-t4",
        "label": "the mean of the result is 0",
        "assertCode": "assert abs(float(scaled.mean())) < 1e-9, \"A standardised array must have mean 0\"",
        "visibility": "public"
      },
      {
        "id": "m14-t4-p07-t5",
        "label": "the middle value sits at the mean",
        "assertCode": "assert abs(float(scaled[1])) < 1e-9, \"20 is the mean, so its standardised value should be 0\"",
        "visibility": "public"
      }
    ],
    "approach": "Subtract the mean and divide by the standard deviation, then print the values rounded to 2 decimals.\n\nReference solution:\nimport numpy as np\n\nvalues = np.array([10, 20, 30])\nscaled = (values - values.mean()) / values.std()\nprint(np.round(scaled, 2).tolist())"
  },
  {
    "id": "m14-t5-p01",
    "topicId": "m14-t5",
    "slug": "np-mean",
    "title": "Stats: Average of an Array",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print the mean of the sales array as a plain float.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "float(np.mean(sales))"
        },
        {
          "type": "text",
          "value": " for "
        },
        {
          "type": "code",
          "value": "[10, 20, 30, 40]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(float(np.mean(sales)))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.mean(arr) and arr.mean() do the same thing.",
          "float() makes the printed value a plain Python float."
        ]
      }
    },
    "examples": [
      {
        "output": "25.0"
      }
    ],
    "constraints": [
      "Use np.mean or .mean()",
      "Output must be exactly: 25.0"
    ],
    "hints": [
      "print(float(np.mean(sales)))"
    ],
    "starterCode": "# TODO: print the average\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(float(np.mean(sales)))",
    "publicTests": [
      {
        "id": "m14-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "25.0",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p01-t2",
        "label": "sales is a NumPy array",
        "assertCode": "import numpy as _np\nassert \"sales\" in globals(), \"Expected a variable named sales\"\nassert isinstance(sales, _np.ndarray), \"Expected sales to be a NumPy array, got \" + type(sales).__name__",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p01-t3",
        "label": "mean is correct",
        "assertCode": "assert (float(np.mean(sales))) == (25.0), \"Expected \" + repr(25.0) + \", got \" + repr(float(np.mean(sales)))",
        "visibility": "public"
      }
    ],
    "approach": "Print the mean of the sales array as a plain float.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(float(np.mean(sales)))"
  },
  {
    "id": "m14-t5-p02",
    "topicId": "m14-t5",
    "slug": "np-max-min",
    "title": "Stats: Best and Worst Day",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print the maximum then the minimum of the sales array as ints.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(sales.max())"
        },
        {
          "type": "text",
          "value": " then "
        },
        {
          "type": "code",
          "value": "int(sales.min())"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(int(sales.max()))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".max() and .min() scan the whole array.",
          "Print the maximum first."
        ]
      }
    },
    "examples": [
      {
        "output": "40\n10"
      }
    ],
    "constraints": [
      "Maximum on line 1, minimum on line 2"
    ],
    "hints": [
      "print(int(sales.max()))",
      "print(int(sales.min()))"
    ],
    "starterCode": "# TODO: print max then min\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(int(sales.max()))\nprint(int(sales.min()))",
    "publicTests": [
      {
        "id": "m14-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "40\n10",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p02-t2",
        "label": "maximum",
        "assertCode": "assert (int(sales.max())) == (40), \"Expected \" + repr(40) + \", got \" + repr(int(sales.max()))",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p02-t3",
        "label": "minimum",
        "assertCode": "assert (int(sales.min())) == (10), \"Expected \" + repr(10) + \", got \" + repr(int(sales.min()))",
        "visibility": "public"
      }
    ],
    "approach": "Print the maximum then the minimum of the sales array as ints.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(int(sales.max()))\nprint(int(sales.min()))"
  },
  {
    "id": "m14-t5-p03",
    "topicId": "m14-t5",
    "slug": "np-median",
    "title": "Stats: The Median",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the median of [10, 20, 30, 40] — the average of the two middle values.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "float(np.median(sales))"
        },
        {
          "type": "text",
          "value": ". With an even count, the median is the average of the two middle values."
        }
      ],
      "editorPlaceholder": "# print(float(np.median(sales)))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.median sorts internally, so the input order does not matter.",
          "The median resists outliers far better than the mean."
        ]
      }
    },
    "examples": [
      {
        "output": "25.0"
      }
    ],
    "constraints": [
      "Use np.median",
      "Output must be exactly: 25.0"
    ],
    "hints": [
      "print(float(np.median(sales)))"
    ],
    "starterCode": "# TODO: print the median\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(float(np.median(sales)))",
    "publicTests": [
      {
        "id": "m14-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "25.0",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p03-t2",
        "label": "median of four values",
        "assertCode": "assert (float(np.median(sales))) == (25.0), \"Expected \" + repr(25.0) + \", got \" + repr(float(np.median(sales)))",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p03-t3",
        "label": "order does not matter",
        "assertCode": "assert (float(np.median(np.array([40, 10, 30, 20])))) == (25.0), \"Expected \" + repr(25.0) + \", got \" + repr(float(np.median(np.array([40, 10, 30, 20]))))",
        "visibility": "public"
      }
    ],
    "approach": "Print the median of [10, 20, 30, 40] — the average of the two middle values.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(float(np.median(sales)))"
  },
  {
    "id": "m14-t5-p04",
    "topicId": "m14-t5",
    "slug": "np-std-round",
    "title": "Stats: Standard Deviation",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print the standard deviation of the sales array rounded to 2 decimal places.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "round(float(sales.std()), 2)"
        },
        {
          "type": "text",
          "value": " — how far values spread from the mean."
        }
      ],
      "editorPlaceholder": "# print(round(float(sales.std()), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "NumPy's .std() is the population standard deviation by default.",
          "Round when printing so the output is stable."
        ]
      }
    },
    "examples": [
      {
        "output": "11.18"
      }
    ],
    "constraints": [
      "Use .std()",
      "Round to 2 decimals",
      "Output must be exactly: 11.18"
    ],
    "hints": [
      "print(round(float(sales.std()), 2))"
    ],
    "starterCode": "# TODO: print the standard deviation to 2 decimals\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(round(float(sales.std()), 2))",
    "publicTests": [
      {
        "id": "m14-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "11.18",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p04-t2",
        "label": "std rounded to 2 dp",
        "assertCode": "assert (round(float(sales.std()), 2)) == (11.18), \"Expected \" + repr(11.18) + \", got \" + repr(round(float(sales.std()), 2))",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p04-t3",
        "label": "variance is std squared",
        "assertCode": "assert abs(float(sales.var()) - float(sales.std()) ** 2) < 1e-9, \"var() should equal std() squared\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the standard deviation of the sales array rounded to 2 decimal places.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(round(float(sales.std()), 2))"
  },
  {
    "id": "m14-t5-p05",
    "topicId": "m14-t5",
    "slug": "np-argmax",
    "title": "Stats: Which Day Was Best?",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use np.argmax to print the index of the largest value rather than the value itself.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(np.argmax(sales))"
        },
        {
          "type": "text",
          "value": " — argmax returns the position of the maximum, which is how you find "
        },
        {
          "type": "code",
          "value": "which"
        },
        {
          "type": "text",
          "value": " row won."
        }
      ],
      "editorPlaceholder": "# print(int(np.argmax(sales)))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "argmax gives an index; max gives a value.",
          "Use the index to look up the matching label in another array."
        ]
      }
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Use np.argmax",
      "Output must be exactly: 3"
    ],
    "hints": [
      "print(int(np.argmax(sales)))"
    ],
    "starterCode": "# TODO: print the index of the largest value\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(int(np.argmax(sales)))",
    "publicTests": [
      {
        "id": "m14-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p05-t2",
        "label": "index of the maximum",
        "assertCode": "assert (int(np.argmax(sales))) == (3), \"Expected \" + repr(3) + \", got \" + repr(int(np.argmax(sales)))",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p05-t3",
        "label": "that index really holds the max",
        "assertCode": "assert (int(sales[np.argmax(sales)])) == (int(sales.max())), \"Expected \" + repr(int(sales.max())) + \", got \" + repr(int(sales[np.argmax(sales)]))",
        "visibility": "public"
      }
    ],
    "approach": "Use np.argmax to print the index of the largest value rather than the value itself.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nprint(int(np.argmax(sales)))"
  },
  {
    "id": "m14-t5-p06",
    "topicId": "m14-t5",
    "slug": "np-axis-mean",
    "title": "Stats: Column Averages",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Compute the mean down each column of a 2-D array with axis=0 and print the list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[[10, 20], [30, 40]]"
        },
        {
          "type": "text",
          "value": " print "
        },
        {
          "type": "code",
          "value": "grid.mean(axis=0).tolist()"
        },
        {
          "type": "text",
          "value": " — axis=0 collapses the rows, giving one mean per column."
        }
      ],
      "editorPlaceholder": "# print(grid.mean(axis=0).tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "grid"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "axis=0 goes down the columns; axis=1 goes across the rows.",
          "Getting the axis right is most of the work in 2-D statistics."
        ]
      }
    },
    "examples": [
      {
        "output": "[20.0, 30.0]"
      }
    ],
    "constraints": [
      "Use axis=0",
      "Output must be exactly: [20.0, 30.0]"
    ],
    "hints": [
      "print(grid.mean(axis=0).tolist())"
    ],
    "starterCode": "# TODO: mean of each column\nimport numpy as np\n\ngrid = np.array([[10, 20], [30, 40]])\n",
    "solutionCode": "import numpy as np\n\ngrid = np.array([[10, 20], [30, 40]])\nprint(grid.mean(axis=0).tolist())",
    "publicTests": [
      {
        "id": "m14-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[20.0, 30.0]",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p06-t2",
        "label": "column means",
        "assertCode": "assert (grid.mean(axis=0).tolist()) == ([20.0, 30.0]), \"Expected \" + repr([20.0, 30.0]) + \", got \" + repr(grid.mean(axis=0).tolist())",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p06-t3",
        "label": "row means differ",
        "assertCode": "assert (grid.mean(axis=1).tolist()) == ([15.0, 35.0]), \"Expected \" + repr([15.0, 35.0]) + \", got \" + repr(grid.mean(axis=1).tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Compute the mean down each column of a 2-D array with axis=0 and print the list.\n\nReference solution:\nimport numpy as np\n\ngrid = np.array([[10, 20], [30, 40]])\nprint(grid.mean(axis=0).tolist())"
  },
  {
    "id": "m14-t5-p07",
    "topicId": "m14-t5",
    "slug": "np-stats-summary",
    "title": "Stats: A One-Line Summary",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Compute mean, median, and standard deviation of a sales array and print them in one formatted line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[12, 15, 20, 25, 28]"
        },
        {
          "type": "text",
          "value": " compute "
        },
        {
          "type": "code",
          "value": "mean"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "median"
        },
        {
          "type": "text",
          "value": ", and "
        },
        {
          "type": "code",
          "value": "std"
        },
        {
          "type": "text",
          "value": " (rounded to 2 decimals) and print the summary line."
        }
      ],
      "editorPlaceholder": "# mean = float(np.mean(sales))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "mean",
        "median",
        "std"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Wrap each result in float() and round the standard deviation to 2 decimals.",
          "Build the line with f\"mean={mean}, median={median}, std={std}\"",
          "This three-number summary is the first thing to check on any new column."
        ]
      }
    },
    "examples": [
      {
        "output": "mean=20.0, median=20.0, std=5.97"
      }
    ],
    "constraints": [
      "Use np.mean, np.median, and np.std",
      "Round only the standard deviation, to 2 decimals",
      "Output must be exactly: mean=20.0, median=20.0, std=5.97"
    ],
    "hints": [
      "mean = float(np.mean(sales))",
      "print(f\"mean={mean}, median={median}, std={std}\")"
    ],
    "starterCode": "# TODO: compute the three statistics\nimport numpy as np\n\nsales = np.array([12, 15, 20, 25, 28])\nmean = 0.0\nmedian = 0.0\nstd = 0.0\n",
    "solutionCode": "import numpy as np\n\nsales = np.array([12, 15, 20, 25, 28])\nmean = float(np.mean(sales))\nmedian = float(np.median(sales))\nstd = round(float(np.std(sales)), 2)\nprint(f\"mean={mean}, median={median}, std={std}\")",
    "publicTests": [
      {
        "id": "m14-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "mean=20.0, median=20.0, std=5.97",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p07-t2",
        "label": "mean is computed",
        "assertCode": "assert (mean) == (20.0), \"Expected \" + repr(20.0) + \", got \" + repr(mean)",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p07-t3",
        "label": "median is computed",
        "assertCode": "assert (median) == (20.0), \"Expected \" + repr(20.0) + \", got \" + repr(median)",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p07-t4",
        "label": "std is rounded to 2 dp",
        "assertCode": "assert (std) == (5.97), \"Expected \" + repr(5.97) + \", got \" + repr(std)",
        "visibility": "public"
      },
      {
        "id": "m14-t5-p07-t5",
        "label": "values come from NumPy, not typed by hand",
        "assertCode": "assert abs(mean - float(np.mean(sales))) < 1e-9 and abs(median - float(np.median(sales))) < 1e-9, \"Compute mean and median from the array with NumPy\"",
        "visibility": "public"
      }
    ],
    "approach": "Compute mean, median, and standard deviation of a sales array and print them in one formatted line.\n\nReference solution:\nimport numpy as np\n\nsales = np.array([12, 15, 20, 25, 28])\nmean = float(np.mean(sales))\nmedian = float(np.median(sales))\nstd = round(float(np.std(sales)), 2)\nprint(f\"mean={mean}, median={median}, std={std}\")"
  }
];
