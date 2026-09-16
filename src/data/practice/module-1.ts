import type { PracticeProblem } from "@/lib/types";
import { module1IntroPractice } from "./module-1-intro";

const environmentPractice: PracticeProblem[] = [
  {
    "id": "m1-t2-p01",
    "topicId": "m1-t2",
    "slug": "ds-stack-list",
    "title": "Why Python: The Data Science Stack",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Store the four core data science libraries in a list named stack and print the list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Python leads data science because of its libraries. Store them in a list named "
        },
        {
          "type": "code",
          "value": "stack"
        },
        {
          "type": "text",
          "value": " — NumPy, pandas, Matplotlib, scikit-learn — then print the list."
        }
      ],
      "editorPlaceholder": "# build the stack list",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! That is the toolchain the rest of the course uses.",
      "requiresVariables": [
        "stack"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A list holds values in order: stack = [\"NumPy\", \"pandas\"]",
          "print(stack) shows the whole list with square brackets and quotes.",
          "Keep the spelling exactly as given — pandas is lowercase."
        ]
      }
    },
    "examples": [
      {
        "output": "['NumPy', 'pandas', 'Matplotlib', 'scikit-learn']"
      }
    ],
    "constraints": [
      "Name the list stack",
      "Order: NumPy, pandas, Matplotlib, scikit-learn",
      "Print the list itself, not each item"
    ],
    "hints": [
      "Build it with square brackets: stack = [\"NumPy\", ...]",
      "The full answer is stack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"] then print(stack)"
    ],
    "starterCode": "# TODO: build the stack list, then print it\nstack = []\n",
    "solutionCode": "stack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nprint(stack)",
    "publicTests": [
      {
        "id": "m1-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "['NumPy', 'pandas', 'Matplotlib', 'scikit-learn']",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p01-t2",
        "label": "stack has the right type",
        "assertCode": "assert \"stack\" in globals(), \"Expected a variable named stack\"\nassert isinstance(stack, list), \"Expected stack to be list, got \" + type(stack).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p01-t3",
        "label": "stack has 4 libraries",
        "assertCode": "assert (len(stack)) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(stack))",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p01-t4",
        "label": "stack names are correct",
        "assertCode": "assert (stack) == ([\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]), \"Expected \" + repr([\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]) + \", got \" + repr(stack)",
        "visibility": "public"
      }
    ],
    "approach": "Store the four core data science libraries in a list named stack and print the list.\n\nReference solution:\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nprint(stack)"
  },
  {
    "id": "m1-t2-p02",
    "topicId": "m1-t2",
    "slug": "ds-stack-count",
    "title": "Why Python: Count the Libraries",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Store the data science stack in a list named stack and print how many libraries it holds.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build the same "
        },
        {
          "type": "code",
          "value": "stack"
        },
        {
          "type": "text",
          "value": " list, then print how many libraries it holds using "
        },
        {
          "type": "code",
          "value": "len()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(len(stack))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "stack"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "len(some_list) returns the number of items as an integer.",
          "print(len(stack)) shows the count on its own line."
        ]
      }
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Name the list stack",
      "Use len() to count",
      "Output must be exactly: 4"
    ],
    "hints": [
      "Use print(len(stack))"
    ],
    "starterCode": "# TODO: count the libraries with len()\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\n",
    "solutionCode": "stack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nprint(len(stack))",
    "publicTests": [
      {
        "id": "m1-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "4",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p02-t2",
        "label": "stack has the right type",
        "assertCode": "assert \"stack\" in globals(), \"Expected a variable named stack\"\nassert isinstance(stack, list), \"Expected stack to be list, got \" + type(stack).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p02-t3",
        "label": "stack still holds 4 libraries",
        "assertCode": "assert (len(stack)) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(stack))",
        "visibility": "public"
      }
    ],
    "approach": "Store the data science stack in a list named stack and print how many libraries it holds.\n\nReference solution:\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nprint(len(stack))"
  },
  {
    "id": "m1-t2-p03",
    "topicId": "m1-t2",
    "slug": "ds-one-liner",
    "title": "Why Python: One Line Instead of a Loop",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Store three daily sales values in a list named sales and print the total using the built-in sum().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Analysts pick Python because built-ins replace loops. Store "
        },
        {
          "type": "code",
          "value": "[12, 7, 21]"
        },
        {
          "type": "text",
          "value": " in a list named "
        },
        {
          "type": "code",
          "value": "sales"
        },
        {
          "type": "text",
          "value": " and print the total with "
        },
        {
          "type": "code",
          "value": "sum()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(sum(sales))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "sum(list_of_numbers) adds every item and returns the total.",
          "No loop is needed — that is the readability Python is known for."
        ]
      }
    },
    "examples": [
      {
        "output": "40"
      }
    ],
    "constraints": [
      "Name the list sales",
      "Use sum() — do not add by hand",
      "Output must be exactly: 40"
    ],
    "hints": [
      "print(sum(sales))"
    ],
    "starterCode": "# TODO: total the sales with sum()\nsales = [12, 7, 21]\n",
    "solutionCode": "sales = [12, 7, 21]\nprint(sum(sales))",
    "publicTests": [
      {
        "id": "m1-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "40",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p03-t2",
        "label": "sales has the right type",
        "assertCode": "assert \"sales\" in globals(), \"Expected a variable named sales\"\nassert isinstance(sales, list), \"Expected sales to be list, got \" + type(sales).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p03-t3",
        "label": "sales holds the given values",
        "assertCode": "assert (sales) == ([12, 7, 21]), \"Expected \" + repr([12, 7, 21]) + \", got \" + repr(sales)",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p03-t4",
        "label": "total is correct",
        "assertCode": "assert (sum(sales)) == (40), \"Expected \" + repr(40) + \", got \" + repr(sum(sales))",
        "visibility": "public"
      }
    ],
    "approach": "Store three daily sales values in a list named sales and print the total using the built-in sum().\n\nReference solution:\nsales = [12, 7, 21]\nprint(sum(sales))"
  },
  {
    "id": "m1-t2-p04",
    "topicId": "m1-t2",
    "slug": "ds-library-lookup",
    "title": "Why Python: Pick the Right Library",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create a dict named tools mapping \"arrays\", \"tables\", and \"charts\" to their library, then print the library for tables.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Each job has a library. Build a dict named "
        },
        {
          "type": "code",
          "value": "tools"
        },
        {
          "type": "text",
          "value": " with \"arrays\" → NumPy, \"tables\" → pandas, \"charts\" → Matplotlib, then print the value for "
        },
        {
          "type": "code",
          "value": "\"tables\""
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# tools = { ... }",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "tools"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A dict stores pairs: tools = {\"arrays\": \"NumPy\"}",
          "Look a value up with the key in brackets: tools[\"tables\"]"
        ]
      }
    },
    "examples": [
      {
        "output": "pandas"
      }
    ],
    "constraints": [
      "Name the dict tools",
      "Keys: \"arrays\", \"tables\", \"charts\"",
      "Output must be exactly: pandas"
    ],
    "hints": [
      "Look up with print(tools[\"tables\"])"
    ],
    "starterCode": "# TODO: map each job to its library, then look up \"tables\"\ntools = {}\n",
    "solutionCode": "tools = {\"arrays\": \"NumPy\", \"tables\": \"pandas\", \"charts\": \"Matplotlib\"}\nprint(tools[\"tables\"])",
    "publicTests": [
      {
        "id": "m1-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "pandas",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p04-t2",
        "label": "tools has the right type",
        "assertCode": "assert \"tools\" in globals(), \"Expected a variable named tools\"\nassert isinstance(tools, dict), \"Expected tools to be dict, got \" + type(tools).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p04-t3",
        "label": "tools has 3 entries",
        "assertCode": "assert (len(tools)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(tools))",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p04-t4",
        "label": "arrays maps to NumPy",
        "assertCode": "assert (tools[\"arrays\"]) == (\"NumPy\"), \"Expected \" + repr(\"NumPy\") + \", got \" + repr(tools[\"arrays\"])",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p04-t5",
        "label": "charts maps to Matplotlib",
        "assertCode": "assert (tools[\"charts\"]) == (\"Matplotlib\"), \"Expected \" + repr(\"Matplotlib\") + \", got \" + repr(tools[\"charts\"])",
        "visibility": "public"
      }
    ],
    "approach": "Create a dict named tools mapping \"arrays\", \"tables\", and \"charts\" to their library, then print the library for tables.\n\nReference solution:\ntools = {\"arrays\": \"NumPy\", \"tables\": \"pandas\", \"charts\": \"Matplotlib\"}\nprint(tools[\"tables\"])"
  },
  {
    "id": "m1-t2-p05",
    "topicId": "m1-t2",
    "slug": "ds-membership",
    "title": "Why Python: Is It In the Stack?",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Build the stack list and print whether \"pandas\" is in it using the in operator.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use the "
        },
        {
          "type": "code",
          "value": "in"
        },
        {
          "type": "text",
          "value": " operator to check membership. Print whether "
        },
        {
          "type": "code",
          "value": "\"pandas\""
        },
        {
          "type": "text",
          "value": " is inside your "
        },
        {
          "type": "code",
          "value": "stack"
        },
        {
          "type": "text",
          "value": " list."
        }
      ],
      "editorPlaceholder": "# print(... in stack)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "stack"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "\"pandas\" in stack evaluates to True or False.",
          "print() of that expression shows True or False."
        ]
      }
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Name the list stack",
      "Use the in operator",
      "Output must be exactly: True"
    ],
    "hints": [
      "print(\"pandas\" in stack)"
    ],
    "starterCode": "# TODO: check membership with in\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\n",
    "solutionCode": "stack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nprint(\"pandas\" in stack)",
    "publicTests": [
      {
        "id": "m1-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p05-t2",
        "label": "stack has the right type",
        "assertCode": "assert \"stack\" in globals(), \"Expected a variable named stack\"\nassert isinstance(stack, list), \"Expected stack to be list, got \" + type(stack).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p05-t3",
        "label": "pandas really is in the list",
        "assertCode": "assert \"pandas\" in stack, \"Expected pandas to be one of the items in stack\"",
        "visibility": "public"
      }
    ],
    "approach": "Build the stack list and print whether \"pandas\" is in it using the in operator.\n\nReference solution:\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nprint(\"pandas\" in stack)"
  },
  {
    "id": "m1-t2-p06",
    "topicId": "m1-t2",
    "slug": "ds-numbered-stack",
    "title": "Why Python: Number the Stack",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Loop over the stack list with enumerate() and print each library as a numbered line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop over "
        },
        {
          "type": "code",
          "value": "stack"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "enumerate(stack, 1)"
        },
        {
          "type": "text",
          "value": " and print each library as "
        },
        {
          "type": "code",
          "value": "1. NumPy"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# for number, name in enumerate(stack, 1):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "stack"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "enumerate(stack, 1) yields (1, 'NumPy'), (2, 'pandas'), …",
          "Format each line with an f-string: f\"{n}. {name}\""
        ]
      }
    },
    "examples": [
      {
        "output": "1. NumPy\n2. pandas\n3. Matplotlib\n4. scikit-learn"
      }
    ],
    "constraints": [
      "Use a for loop with enumerate",
      "Start numbering at 1",
      "One library per line"
    ],
    "hints": [
      "for number, name in enumerate(stack, 1):",
      "Inside the loop: print(f\"{number}. {name}\")"
    ],
    "starterCode": "# TODO: print a numbered list\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\n",
    "solutionCode": "stack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nfor number, name in enumerate(stack, 1):\n    print(f\"{number}. {name}\")",
    "publicTests": [
      {
        "id": "m1-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "1. NumPy\n2. pandas\n3. Matplotlib\n4. scikit-learn",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p06-t2",
        "label": "stack has the right type",
        "assertCode": "assert \"stack\" in globals(), \"Expected a variable named stack\"\nassert isinstance(stack, list), \"Expected stack to be list, got \" + type(stack).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p06-t3",
        "label": "stack order is unchanged",
        "assertCode": "assert (stack[3]) == (\"scikit-learn\"), \"Expected \" + repr(\"scikit-learn\") + \", got \" + repr(stack[3])",
        "visibility": "public"
      }
    ],
    "approach": "Loop over the stack list with enumerate() and print each library as a numbered line.\n\nReference solution:\nstack = [\"NumPy\", \"pandas\", \"Matplotlib\", \"scikit-learn\"]\nfor number, name in enumerate(stack, 1):\n    print(f\"{number}. {name}\")"
  },
  {
    "id": "m1-t2-p07",
    "topicId": "m1-t2",
    "slug": "ds-code-saved",
    "title": "Why Python: How Much Code You Save",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Given 3 lines of pandas versus 27 lines by hand, compute and print the percentage of code saved.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "A grouped summary takes "
        },
        {
          "type": "code",
          "value": "3"
        },
        {
          "type": "text",
          "value": " lines in pandas and "
        },
        {
          "type": "code",
          "value": "27"
        },
        {
          "type": "text",
          "value": " lines by hand. Store both in "
        },
        {
          "type": "code",
          "value": "lines_pandas"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "lines_manual"
        },
        {
          "type": "text",
          "value": ", compute the percentage saved into "
        },
        {
          "type": "code",
          "value": "saved"
        },
        {
          "type": "text",
          "value": ", and print the sentence."
        }
      ],
      "editorPlaceholder": "# saved = round(...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "lines_pandas",
        "lines_manual",
        "saved"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Percentage saved = (1 - lines_pandas / lines_manual) * 100",
          "Wrap it in round() to get a whole number.",
          "Build the sentence with an f-string: f\"pandas saves {saved}% of the code\""
        ]
      }
    },
    "examples": [
      {
        "output": "pandas saves 89% of the code"
      }
    ],
    "constraints": [
      "Use the variables lines_pandas, lines_manual, and saved",
      "Compute saved with round() — do not type 89",
      "Output must be exactly: pandas saves 89% of the code"
    ],
    "hints": [
      "saved = round((1 - lines_pandas / lines_manual) * 100)",
      "print(f\"pandas saves {saved}% of the code\")"
    ],
    "starterCode": "# TODO: compute the percentage saved\nlines_pandas = 3\nlines_manual = 27\nsaved = 0\n",
    "solutionCode": "lines_pandas = 3\nlines_manual = 27\nsaved = round((1 - lines_pandas / lines_manual) * 100)\nprint(f\"pandas saves {saved}% of the code\")",
    "publicTests": [
      {
        "id": "m1-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "pandas saves 89% of the code",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p07-t2",
        "label": "saved is computed, not hardcoded text",
        "assertCode": "assert (saved) == (89), \"Expected \" + repr(89) + \", got \" + repr(saved)",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p07-t3",
        "label": "lines_pandas is 3",
        "assertCode": "assert (lines_pandas) == (3), \"Expected \" + repr(3) + \", got \" + repr(lines_pandas)",
        "visibility": "public"
      },
      {
        "id": "m1-t2-p07-t4",
        "label": "lines_manual is 27",
        "assertCode": "assert (lines_manual) == (27), \"Expected \" + repr(27) + \", got \" + repr(lines_manual)",
        "visibility": "public"
      }
    ],
    "approach": "Given 3 lines of pandas versus 27 lines by hand, compute and print the percentage of code saved.\n\nReference solution:\nlines_pandas = 3\nlines_manual = 27\nsaved = round((1 - lines_pandas / lines_manual) * 100)\nprint(f\"pandas saves {saved}% of the code\")"
  },
  {
    "id": "m1-t3-p01",
    "topicId": "m1-t3",
    "slug": "env-python-major",
    "title": "Setup: Check Your Python Version",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Import sys, store sys.version_info.major in major, and print it to confirm you are on Python 3.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Every setup starts by checking the interpreter. Import "
        },
        {
          "type": "code",
          "value": "sys"
        },
        {
          "type": "text",
          "value": ", store "
        },
        {
          "type": "code",
          "value": "sys.version_info.major"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "major"
        },
        {
          "type": "text",
          "value": ", and print it."
        }
      ],
      "editorPlaceholder": "# major = sys.version_info.major",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "sys",
        "major"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "import sys gives you interpreter details.",
          "sys.version_info.major is 3 on every supported install."
        ]
      }
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Import sys",
      "Store the value in major",
      "Output must be exactly: 3"
    ],
    "hints": [
      "major = sys.version_info.major",
      "print(major)"
    ],
    "starterCode": "# TODO: read the major version from sys\nimport sys\n\nmajor = None\n",
    "solutionCode": "import sys\n\nmajor = sys.version_info.major\nprint(major)",
    "publicTests": [
      {
        "id": "m1-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p01-t2",
        "label": "sys was imported",
        "assertCode": "assert \"sys\" in globals(), \"Import sys before reading the version\"",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p01-t3",
        "label": "major comes from sys",
        "assertCode": "assert (major) == (sys.version_info.major), \"Expected \" + repr(sys.version_info.major) + \", got \" + repr(major)",
        "visibility": "public"
      }
    ],
    "approach": "Import sys, store sys.version_info.major in major, and print it to confirm you are on Python 3.\n\nReference solution:\nimport sys\n\nmajor = sys.version_info.major\nprint(major)"
  },
  {
    "id": "m1-t3-p02",
    "topicId": "m1-t3",
    "slug": "env-version-guard",
    "title": "Setup: Require Python 3.8 or Newer",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Compare sys.version_info against (3, 8), store the result in supported, and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Libraries declare a minimum version. Compare "
        },
        {
          "type": "code",
          "value": "sys.version_info >= (3, 8)"
        },
        {
          "type": "text",
          "value": ", store it in "
        },
        {
          "type": "code",
          "value": "supported"
        },
        {
          "type": "text",
          "value": ", and print the result."
        }
      ],
      "editorPlaceholder": "# supported = sys.version_info >= (3, 8)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "sys",
        "supported"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "sys.version_info behaves like a tuple, so it compares with (3, 8).",
          "The comparison gives a bool: True or False."
        ]
      }
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Compare against the tuple (3, 8)",
      "Store the bool in supported",
      "Output: True"
    ],
    "hints": [
      "supported = sys.version_info >= (3, 8)"
    ],
    "starterCode": "# TODO: guard on the minimum version\nimport sys\n\nsupported = None\n",
    "solutionCode": "import sys\n\nsupported = sys.version_info >= (3, 8)\nprint(supported)",
    "publicTests": [
      {
        "id": "m1-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "True",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p02-t2",
        "label": "sys was imported",
        "assertCode": "assert \"sys\" in globals(), \"Import sys to read the version\"",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p02-t3",
        "label": "supported has the right type",
        "assertCode": "assert \"supported\" in globals(), \"Expected a variable named supported\"\nassert isinstance(supported, bool), \"Expected supported to be bool, got \" + type(supported).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p02-t4",
        "label": "supported is the real comparison",
        "assertCode": "assert (supported) == (sys.version_info >= (3, 8)), \"Expected \" + repr(sys.version_info >= (3, 8)) + \", got \" + repr(supported)",
        "visibility": "public"
      }
    ],
    "approach": "Compare sys.version_info against (3, 8), store the result in supported, and print it.\n\nReference solution:\nimport sys\n\nsupported = sys.version_info >= (3, 8)\nprint(supported)"
  },
  {
    "id": "m1-t3-p03",
    "topicId": "m1-t3",
    "slug": "env-import-check",
    "title": "Setup: Confirm a Package Imports",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Import math and print pi rounded to two decimals to prove the interpreter can load modules.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "A working install can import modules. Import "
        },
        {
          "type": "code",
          "value": "math"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "round(math.pi, 2)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# import math",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "math"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "import math loads a module from the standard library.",
          "round(value, 2) keeps two decimal places."
        ]
      }
    },
    "examples": [
      {
        "output": "3.14"
      }
    ],
    "constraints": [
      "Import math",
      "Use round() with 2 decimals",
      "Output must be exactly: 3.14"
    ],
    "hints": [
      "import math then print(round(math.pi, 2))"
    ],
    "starterCode": "# TODO: import math and print pi to 2 decimals\n",
    "solutionCode": "import math\n\nprint(round(math.pi, 2))",
    "publicTests": [
      {
        "id": "m1-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "3.14",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p03-t2",
        "label": "math was imported",
        "assertCode": "assert \"math\" in globals(), \"Import math first\"",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p03-t3",
        "label": "pi is rounded to 2 decimals",
        "assertCode": "assert (round(math.pi, 2)) == (3.14), \"Expected \" + repr(3.14) + \", got \" + repr(round(math.pi, 2))",
        "visibility": "public"
      }
    ],
    "approach": "Import math and print pi rounded to two decimals to prove the interpreter can load modules.\n\nReference solution:\nimport math\n\nprint(round(math.pi, 2))"
  },
  {
    "id": "m1-t3-p04",
    "topicId": "m1-t3",
    "slug": "env-package-installed",
    "title": "Setup: Is NumPy Installed?",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use try/except ImportError to set status to \"installed\" or \"missing\" for numpy, then print status.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "This is how scripts check dependencies. Try to "
        },
        {
          "type": "code",
          "value": "import numpy"
        },
        {
          "type": "text",
          "value": "; set "
        },
        {
          "type": "code",
          "value": "status"
        },
        {
          "type": "text",
          "value": " to \"installed\" on success and \"missing\" in the "
        },
        {
          "type": "code",
          "value": "except ImportError"
        },
        {
          "type": "text",
          "value": " branch, then print it."
        }
      ],
      "editorPlaceholder": "# try: import numpy",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "status"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A failed import raises ImportError — catch it instead of crashing.",
          "Set status inside each branch so exactly one value survives."
        ]
      }
    },
    "examples": [
      {
        "output": "installed"
      }
    ],
    "constraints": [
      "Use try / except ImportError",
      "Store the result in status",
      "Output must be exactly: installed"
    ],
    "hints": [
      "try:\n    import numpy\n    status = \"installed\"",
      "except ImportError:\n    status = \"missing\""
    ],
    "starterCode": "# TODO: detect whether numpy is installed\nstatus = \"unknown\"\n\ntry:\n    pass\nexcept ImportError:\n    pass\n",
    "solutionCode": "try:\n    import numpy\n    status = \"installed\"\nexcept ImportError:\n    status = \"missing\"\n\nprint(status)",
    "publicTests": [
      {
        "id": "m1-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "installed",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p04-t2",
        "label": "status reflects the import",
        "assertCode": "assert (status) == (\"installed\"), \"Expected \" + repr(\"installed\") + \", got \" + repr(status)",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p04-t3",
        "label": "the import was actually attempted",
        "assertCode": "assert \"numpy\" in globals(), \"Import numpy inside the try block\"",
        "visibility": "public"
      }
    ],
    "approach": "Use try/except ImportError to set status to \"installed\" or \"missing\" for numpy, then print status.\n\nReference solution:\ntry:\n    import numpy\n    status = \"installed\"\nexcept ImportError:\n    status = \"missing\"\n\nprint(status)"
  },
  {
    "id": "m1-t3-p05",
    "topicId": "m1-t3",
    "slug": "env-venv-path",
    "title": "Setup: Build the Virtual Env Path",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use pathlib to build the .venv/bin/activate path and print it with as_posix().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Activating a virtual environment runs a script inside it. Build "
        },
        {
          "type": "code",
          "value": "Path(\".venv\") / \"bin\" / \"activate\""
        },
        {
          "type": "text",
          "value": ", store it in "
        },
        {
          "type": "code",
          "value": "activate"
        },
        {
          "type": "text",
          "value": ", and print "
        },
        {
          "type": "code",
          "value": "activate.as_posix()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# activate = Path('.venv') / ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "activate"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "pathlib joins path parts with the / operator.",
          "as_posix() always prints forward slashes, so the output is the same on every OS."
        ]
      }
    },
    "examples": [
      {
        "output": ".venv/bin/activate"
      }
    ],
    "constraints": [
      "Use pathlib.Path and the / operator",
      "Store the path in activate",
      "Print with as_posix()"
    ],
    "hints": [
      "activate = Path(\".venv\") / \"bin\" / \"activate\"",
      "print(activate.as_posix())"
    ],
    "starterCode": "# TODO: join the venv path parts\nfrom pathlib import Path\n\nactivate = None\n",
    "solutionCode": "from pathlib import Path\n\nactivate = Path(\".venv\") / \"bin\" / \"activate\"\nprint(activate.as_posix())",
    "publicTests": [
      {
        "id": "m1-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": ".venv/bin/activate",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p05-t2",
        "label": "Path was imported",
        "assertCode": "assert \"Path\" in globals(), \"Import Path from pathlib\"",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p05-t3",
        "label": "activate is a Path object",
        "assertCode": "assert isinstance(activate, Path), \"Expected activate to be a pathlib.Path, not a plain string\"",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p05-t4",
        "label": "path parts are joined",
        "assertCode": "assert (activate.as_posix()) == (\".venv/bin/activate\"), \"Expected \" + repr(\".venv/bin/activate\") + \", got \" + repr(activate.as_posix())",
        "visibility": "public"
      }
    ],
    "approach": "Use pathlib to build the .venv/bin/activate path and print it with as_posix().\n\nReference solution:\nfrom pathlib import Path\n\nactivate = Path(\".venv\") / \"bin\" / \"activate\"\nprint(activate.as_posix())"
  },
  {
    "id": "m1-t3-p06",
    "topicId": "m1-t3",
    "slug": "env-requirements",
    "title": "Setup: Print requirements.txt",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Loop over a dict of package versions and print each pinned requirement line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "A requirements file pins versions. Build a dict named "
        },
        {
          "type": "code",
          "value": "packages"
        },
        {
          "type": "text",
          "value": " with numpy 1.26.4, pandas 2.2.0, matplotlib 3.5.2 and print one "
        },
        {
          "type": "code",
          "value": "name==version"
        },
        {
          "type": "text",
          "value": " line each."
        }
      ],
      "editorPlaceholder": "# packages = { ... }",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "packages"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "packages.items() gives (name, version) pairs in insertion order.",
          "f\"{name}=={version}\" builds the pinned line."
        ]
      }
    },
    "examples": [
      {
        "output": "numpy==1.26.4\npandas==2.2.0\nmatplotlib==3.5.2"
      }
    ],
    "constraints": [
      "Name the dict packages",
      "Keep the order numpy, pandas, matplotlib",
      "One requirement per line"
    ],
    "hints": [
      "for name, version in packages.items():",
      "print(f\"{name}=={version}\")"
    ],
    "starterCode": "# TODO: print one pinned line per package\npackages = {}\n",
    "solutionCode": "packages = {\"numpy\": \"1.26.4\", \"pandas\": \"2.2.0\", \"matplotlib\": \"3.5.2\"}\nfor name, version in packages.items():\n    print(f\"{name}=={version}\")",
    "publicTests": [
      {
        "id": "m1-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "numpy==1.26.4\npandas==2.2.0\nmatplotlib==3.5.2",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p06-t2",
        "label": "packages has the right type",
        "assertCode": "assert \"packages\" in globals(), \"Expected a variable named packages\"\nassert isinstance(packages, dict), \"Expected packages to be dict, got \" + type(packages).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p06-t3",
        "label": "packages has 3 pins",
        "assertCode": "assert (len(packages)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(packages))",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p06-t4",
        "label": "numpy is pinned",
        "assertCode": "assert (packages[\"numpy\"]) == (\"1.26.4\"), \"Expected \" + repr(\"1.26.4\") + \", got \" + repr(packages[\"numpy\"])",
        "visibility": "public"
      }
    ],
    "approach": "Loop over a dict of package versions and print each pinned requirement line.\n\nReference solution:\npackages = {\"numpy\": \"1.26.4\", \"pandas\": \"2.2.0\", \"matplotlib\": \"3.5.2\"}\nfor name, version in packages.items():\n    print(f\"{name}=={version}\")"
  },
  {
    "id": "m1-t3-p07",
    "topicId": "m1-t3",
    "slug": "env-pip-command",
    "title": "Setup: Build the pip install Command",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Join a list of package names into a single pip install command and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Turn a list of packages into one shell command. Store the names in "
        },
        {
          "type": "code",
          "value": "packages"
        },
        {
          "type": "text",
          "value": ", build the command with "
        },
        {
          "type": "code",
          "value": "\" \".join(packages)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "command"
        },
        {
          "type": "text",
          "value": ", and print it."
        }
      ],
      "editorPlaceholder": "# command = 'pip install ' + ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "packages",
        "command"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "\" \".join(list_of_strings) glues items together with a space.",
          "Prefix the joined names with \"pip install \"."
        ]
      }
    },
    "examples": [
      {
        "output": "pip install numpy pandas matplotlib scikit-learn"
      }
    ],
    "constraints": [
      "Use \" \".join(packages) — do not type the names twice",
      "Store the result in command",
      "Output must be exactly: pip install numpy pandas matplotlib scikit-learn"
    ],
    "hints": [
      "command = \"pip install \" + \" \".join(packages)"
    ],
    "starterCode": "# TODO: build the install command with join()\npackages = [\"numpy\", \"pandas\", \"matplotlib\", \"scikit-learn\"]\ncommand = \"\"\n",
    "solutionCode": "packages = [\"numpy\", \"pandas\", \"matplotlib\", \"scikit-learn\"]\ncommand = \"pip install \" + \" \".join(packages)\nprint(command)",
    "publicTests": [
      {
        "id": "m1-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "pip install numpy pandas matplotlib scikit-learn",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p07-t2",
        "label": "packages has the right type",
        "assertCode": "assert \"packages\" in globals(), \"Expected a variable named packages\"\nassert isinstance(packages, list), \"Expected packages to be list, got \" + type(packages).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p07-t3",
        "label": "packages holds 4 names",
        "assertCode": "assert (len(packages)) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(packages))",
        "visibility": "public"
      },
      {
        "id": "m1-t3-p07-t4",
        "label": "command is built from the list",
        "assertCode": "assert (command) == (\"pip install \" + \" \".join(packages)), \"Expected \" + repr(\"pip install \" + \" \".join(packages)) + \", got \" + repr(command)",
        "visibility": "public"
      }
    ],
    "approach": "Join a list of package names into a single pip install command and print it.\n\nReference solution:\npackages = [\"numpy\", \"pandas\", \"matplotlib\", \"scikit-learn\"]\ncommand = \"pip install \" + \" \".join(packages)\nprint(command)"
  },
  {
    "id": "m1-t4-p01",
    "topicId": "m1-t4",
    "slug": "ide-list",
    "title": "IDEs: List Your Options",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Store the three editors used in this course in a list named ides and print how many there are.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store "
        },
        {
          "type": "code",
          "value": "\"VS Code\", \"PyCharm\", \"Jupyter Lab\""
        },
        {
          "type": "text",
          "value": " in a list named "
        },
        {
          "type": "code",
          "value": "ides"
        },
        {
          "type": "text",
          "value": " and print the count."
        }
      ],
      "editorPlaceholder": "# ides = [ ... ]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "ides"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Lists keep the order you write.",
          "len(ides) counts the editors."
        ]
      }
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Name the list ides",
      "Output must be exactly: 3"
    ],
    "hints": [
      "ides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"] then print(len(ides))"
    ],
    "starterCode": "# TODO: list the editors, then count them\nides = []\n",
    "solutionCode": "ides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\nprint(len(ides))",
    "publicTests": [
      {
        "id": "m1-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p01-t2",
        "label": "ides has the right type",
        "assertCode": "assert \"ides\" in globals(), \"Expected a variable named ides\"\nassert isinstance(ides, list), \"Expected ides to be list, got \" + type(ides).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p01-t3",
        "label": "three editors listed",
        "assertCode": "assert (len(ides)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ides))",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p01-t4",
        "label": "VS Code is one of them",
        "assertCode": "assert \"VS Code\" in ides, \"Expected VS Code to be in the ides list\"",
        "visibility": "public"
      }
    ],
    "approach": "Store the three editors used in this course in a list named ides and print how many there are.\n\nReference solution:\nides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\nprint(len(ides))"
  },
  {
    "id": "m1-t4-p02",
    "topicId": "m1-t4",
    "slug": "ide-best-for",
    "title": "IDEs: Which Editor for Which Job",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Map each editor to what it is best at in a dict named best_for and print the entry for Jupyter Lab.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build a dict named "
        },
        {
          "type": "code",
          "value": "best_for"
        },
        {
          "type": "text",
          "value": " mapping \"VS Code\" → scripts, \"PyCharm\" → large projects, \"Jupyter Lab\" → notebooks, then print the Jupyter Lab value."
        }
      ],
      "editorPlaceholder": "# best_for = { ... }",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "best_for"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Dict keys can contain spaces: best_for[\"Jupyter Lab\"]"
        ]
      }
    },
    "examples": [
      {
        "output": "notebooks"
      }
    ],
    "constraints": [
      "Name the dict best_for",
      "Output must be exactly: notebooks"
    ],
    "hints": [
      "print(best_for[\"Jupyter Lab\"])"
    ],
    "starterCode": "# TODO: map editor to strength\nbest_for = {}\n",
    "solutionCode": "best_for = {\"VS Code\": \"scripts\", \"PyCharm\": \"large projects\", \"Jupyter Lab\": \"notebooks\"}\nprint(best_for[\"Jupyter Lab\"])",
    "publicTests": [
      {
        "id": "m1-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "notebooks",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p02-t2",
        "label": "best_for has the right type",
        "assertCode": "assert \"best_for\" in globals(), \"Expected a variable named best_for\"\nassert isinstance(best_for, dict), \"Expected best_for to be dict, got \" + type(best_for).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p02-t3",
        "label": "three editors mapped",
        "assertCode": "assert (len(best_for)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(best_for))",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p02-t4",
        "label": "VS Code maps to scripts",
        "assertCode": "assert (best_for[\"VS Code\"]) == (\"scripts\"), \"Expected \" + repr(\"scripts\") + \", got \" + repr(best_for[\"VS Code\"])",
        "visibility": "public"
      }
    ],
    "approach": "Map each editor to what it is best at in a dict named best_for and print the entry for Jupyter Lab.\n\nReference solution:\nbest_for = {\"VS Code\": \"scripts\", \"PyCharm\": \"large projects\", \"Jupyter Lab\": \"notebooks\"}\nprint(best_for[\"Jupyter Lab\"])"
  },
  {
    "id": "m1-t4-p03",
    "topicId": "m1-t4",
    "slug": "ide-default-choice",
    "title": "IDEs: Print the Default Choice",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the first editor in the ides list using index 0.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "The first item in "
        },
        {
          "type": "code",
          "value": "ides"
        },
        {
          "type": "text",
          "value": " is the course default. Print "
        },
        {
          "type": "code",
          "value": "ides[0]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(ides[0])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "ides"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Index 0 is the first item.",
          "print(ides[0]) shows just that name."
        ]
      }
    },
    "examples": [
      {
        "output": "VS Code"
      }
    ],
    "constraints": [
      "Use index 0",
      "Output must be exactly: VS Code"
    ],
    "hints": [
      "print(ides[0])"
    ],
    "starterCode": "# TODO: print the first editor\nides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\n",
    "solutionCode": "ides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\nprint(ides[0])",
    "publicTests": [
      {
        "id": "m1-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "VS Code",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p03-t2",
        "label": "ides has the right type",
        "assertCode": "assert \"ides\" in globals(), \"Expected a variable named ides\"\nassert isinstance(ides, list), \"Expected ides to be list, got \" + type(ides).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p03-t3",
        "label": "first editor is VS Code",
        "assertCode": "assert (ides[0]) == (\"VS Code\"), \"Expected \" + repr(\"VS Code\") + \", got \" + repr(ides[0])",
        "visibility": "public"
      }
    ],
    "approach": "Print the first editor in the ides list using index 0.\n\nReference solution:\nides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\nprint(ides[0])"
  },
  {
    "id": "m1-t4-p04",
    "topicId": "m1-t4",
    "slug": "ide-sorted",
    "title": "IDEs: Sort the List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print the editors in alphabetical order using sorted().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "sorted(ides)"
        },
        {
          "type": "text",
          "value": " to list the editors alphabetically. The original list must stay unchanged."
        }
      ],
      "editorPlaceholder": "# print(sorted(ides))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "ides"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "sorted(ides) returns a new sorted list.",
          "ides.sort() would change the original — use sorted() here."
        ]
      }
    },
    "examples": [
      {
        "output": "['Jupyter Lab', 'PyCharm', 'VS Code']"
      }
    ],
    "constraints": [
      "Use sorted() — do not modify ides",
      "Output must be exactly: ['Jupyter Lab', 'PyCharm', 'VS Code']"
    ],
    "hints": [
      "print(sorted(ides))"
    ],
    "starterCode": "# TODO: print the editors alphabetically\nides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\n",
    "solutionCode": "ides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\nprint(sorted(ides))",
    "publicTests": [
      {
        "id": "m1-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "['Jupyter Lab', 'PyCharm', 'VS Code']",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p04-t2",
        "label": "ides has the right type",
        "assertCode": "assert \"ides\" in globals(), \"Expected a variable named ides\"\nassert isinstance(ides, list), \"Expected ides to be list, got \" + type(ides).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p04-t3",
        "label": "the original list order is untouched",
        "assertCode": "assert (ides) == ([\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]), \"Expected \" + repr([\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]) + \", got \" + repr(ides)",
        "visibility": "public"
      }
    ],
    "approach": "Print the editors in alphabetical order using sorted().\n\nReference solution:\nides = [\"VS Code\", \"PyCharm\", \"Jupyter Lab\"]\nprint(sorted(ides))"
  },
  {
    "id": "m1-t4-p05",
    "topicId": "m1-t4",
    "slug": "ide-shortcuts",
    "title": "IDEs: Shortcut Cheat Sheet",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Store two editor shortcuts in a dict named shortcuts and print the count and the run shortcut.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build a dict named "
        },
        {
          "type": "code",
          "value": "shortcuts"
        },
        {
          "type": "text",
          "value": " with \"run cell\" → Shift+Enter and \"command palette\" → Ctrl+Shift+P. Print the number of shortcuts, then the \"run cell\" value."
        }
      ],
      "editorPlaceholder": "# shortcuts = { ... }",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "shortcuts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Print the count first with len(shortcuts).",
          "Then print the value: shortcuts[\"run cell\"]"
        ]
      }
    },
    "examples": [
      {
        "output": "2\nShift+Enter"
      }
    ],
    "constraints": [
      "Name the dict shortcuts",
      "Print the count on line 1 and the shortcut on line 2"
    ],
    "hints": [
      "print(len(shortcuts))",
      "print(shortcuts[\"run cell\"])"
    ],
    "starterCode": "# TODO: build the cheat sheet, print count then the run shortcut\nshortcuts = {}\n",
    "solutionCode": "shortcuts = {\"run cell\": \"Shift+Enter\", \"command palette\": \"Ctrl+Shift+P\"}\nprint(len(shortcuts))\nprint(shortcuts[\"run cell\"])",
    "publicTests": [
      {
        "id": "m1-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "2\nShift+Enter",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p05-t2",
        "label": "shortcuts has the right type",
        "assertCode": "assert \"shortcuts\" in globals(), \"Expected a variable named shortcuts\"\nassert isinstance(shortcuts, dict), \"Expected shortcuts to be dict, got \" + type(shortcuts).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p05-t3",
        "label": "two shortcuts stored",
        "assertCode": "assert (len(shortcuts)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(shortcuts))",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p05-t4",
        "label": "run cell shortcut",
        "assertCode": "assert (shortcuts[\"run cell\"]) == (\"Shift+Enter\"), \"Expected \" + repr(\"Shift+Enter\") + \", got \" + repr(shortcuts[\"run cell\"])",
        "visibility": "public"
      }
    ],
    "approach": "Store two editor shortcuts in a dict named shortcuts and print the count and the run shortcut.\n\nReference solution:\nshortcuts = {\"run cell\": \"Shift+Enter\", \"command palette\": \"Ctrl+Shift+P\"}\nprint(len(shortcuts))\nprint(shortcuts[\"run cell\"])"
  },
  {
    "id": "m1-t4-p06",
    "topicId": "m1-t4",
    "slug": "ide-notebook-support",
    "title": "IDEs: Filter Notebook-Capable Editors",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Given a dict of editor → notebook support, use a comprehension to print only the editors that support notebooks.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Given "
        },
        {
          "type": "code",
          "value": "supports_notebooks"
        },
        {
          "type": "text",
          "value": " mapping each editor to True or False, build a list named "
        },
        {
          "type": "code",
          "value": "notebook_ides"
        },
        {
          "type": "text",
          "value": " of the editors where the value is True, then print it."
        }
      ],
      "editorPlaceholder": "# notebook_ides = [ ... ]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "supports_notebooks",
        "notebook_ides"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Loop the pairs: for name, ok in supports_notebooks.items()",
          "A comprehension with an if keeps only the matching names."
        ]
      }
    },
    "examples": [
      {
        "output": "['VS Code', 'Jupyter Lab']"
      }
    ],
    "constraints": [
      "Build notebook_ides from the dict — do not retype the names",
      "Output must be exactly: ['VS Code', 'Jupyter Lab']"
    ],
    "hints": [
      "notebook_ides = [name for name, ok in supports_notebooks.items() if ok]"
    ],
    "starterCode": "# TODO: keep only the editors that support notebooks\nsupports_notebooks = {\"VS Code\": True, \"PyCharm\": False, \"Jupyter Lab\": True}\nnotebook_ides = []\n",
    "solutionCode": "supports_notebooks = {\"VS Code\": True, \"PyCharm\": False, \"Jupyter Lab\": True}\nnotebook_ides = [name for name, ok in supports_notebooks.items() if ok]\nprint(notebook_ides)",
    "publicTests": [
      {
        "id": "m1-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "['VS Code', 'Jupyter Lab']",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p06-t2",
        "label": "notebook_ides has the right type",
        "assertCode": "assert \"notebook_ides\" in globals(), \"Expected a variable named notebook_ides\"\nassert isinstance(notebook_ides, list), \"Expected notebook_ides to be list, got \" + type(notebook_ides).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p06-t3",
        "label": "only notebook editors kept",
        "assertCode": "assert (notebook_ides) == ([\"VS Code\", \"Jupyter Lab\"]), \"Expected \" + repr([\"VS Code\", \"Jupyter Lab\"]) + \", got \" + repr(notebook_ides)",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p06-t4",
        "label": "PyCharm was filtered out",
        "assertCode": "assert \"PyCharm\" not in notebook_ides, \"PyCharm does not support notebooks — it should not be in the list\"",
        "visibility": "public"
      }
    ],
    "approach": "Given a dict of editor → notebook support, use a comprehension to print only the editors that support notebooks.\n\nReference solution:\nsupports_notebooks = {\"VS Code\": True, \"PyCharm\": False, \"Jupyter Lab\": True}\nnotebook_ides = [name for name, ok in supports_notebooks.items() if ok]\nprint(notebook_ides)"
  },
  {
    "id": "m1-t4-p07",
    "topicId": "m1-t4",
    "slug": "ide-recommend",
    "title": "IDEs: Recommend an Editor",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Write recommend(job) that returns Jupyter Lab for exploration and VS Code for anything else, then print two calls.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "recommend(job)"
        },
        {
          "type": "text",
          "value": " that returns \"Jupyter Lab\" when job is \"exploration\" and \"VS Code\" otherwise. Print "
        },
        {
          "type": "code",
          "value": "recommend(\"exploration\")"
        },
        {
          "type": "text",
          "value": " then "
        },
        {
          "type": "code",
          "value": "recommend(\"deployment\")"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# def recommend(job):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "def recommend(job): starts the function.",
          "Return a value for the exploration case, then return the default."
        ]
      }
    },
    "examples": [
      {
        "output": "Jupyter Lab\nVS Code"
      }
    ],
    "constraints": [
      "Define a function named recommend",
      "Return values — do not print inside the function",
      "Print the two calls in order"
    ],
    "hints": [
      "if job == \"exploration\": return \"Jupyter Lab\"",
      "End the function with return \"VS Code\""
    ],
    "starterCode": "# TODO: return the right editor for the job\ndef recommend(job):\n    pass\n",
    "solutionCode": "def recommend(job):\n    if job == \"exploration\":\n        return \"Jupyter Lab\"\n    return \"VS Code\"\n\nprint(recommend(\"exploration\"))\nprint(recommend(\"deployment\"))",
    "publicTests": [
      {
        "id": "m1-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "Jupyter Lab\nVS Code",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p07-t2",
        "label": "recommend is defined",
        "assertCode": "assert callable(recommend), \"Define a function named recommend\"",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p07-t3",
        "label": "exploration → Jupyter Lab",
        "assertCode": "assert (recommend(\"exploration\")) == (\"Jupyter Lab\"), \"Expected \" + repr(\"Jupyter Lab\") + \", got \" + repr(recommend(\"exploration\"))",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p07-t4",
        "label": "anything else → VS Code",
        "assertCode": "assert (recommend(\"deployment\")) == (\"VS Code\"), \"Expected \" + repr(\"VS Code\") + \", got \" + repr(recommend(\"deployment\"))",
        "visibility": "public"
      },
      {
        "id": "m1-t4-p07-t5",
        "label": "unknown jobs fall back too",
        "assertCode": "assert (recommend(\"scripting\")) == (\"VS Code\"), \"Expected \" + repr(\"VS Code\") + \", got \" + repr(recommend(\"scripting\"))",
        "visibility": "public"
      }
    ],
    "approach": "Write recommend(job) that returns Jupyter Lab for exploration and VS Code for anything else, then print two calls.\n\nReference solution:\ndef recommend(job):\n    if job == \"exploration\":\n        return \"Jupyter Lab\"\n    return \"VS Code\"\n\nprint(recommend(\"exploration\"))\nprint(recommend(\"deployment\"))"
  },
  {
    "id": "m1-t5-p01",
    "topicId": "m1-t5",
    "slug": "nb-cell-result",
    "title": "Notebooks: A Cell Produces a Result",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Store the result of 2 + 3 in a variable named result and print it, like a notebook cell output.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "A notebook cell runs code and shows a result. Store "
        },
        {
          "type": "code",
          "value": "2 + 3"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "result"
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "editorPlaceholder": "# result = 2 + 3",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "result"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "In a notebook, In [1] holds your code and Out [1] shows the value.",
          "In a script you print the value to see it."
        ]
      }
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Store the value in result",
      "Output must be exactly: 5"
    ],
    "hints": [
      "result = 2 + 3 then print(result)"
    ],
    "starterCode": "# TODO: compute the cell result\nresult = None\n",
    "solutionCode": "result = 2 + 3\nprint(result)",
    "publicTests": [
      {
        "id": "m1-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "5",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p01-t2",
        "label": "result is computed",
        "assertCode": "assert (result) == (5), \"Expected \" + repr(5) + \", got \" + repr(result)",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p01-t3",
        "label": "result has the right type",
        "assertCode": "assert \"result\" in globals(), \"Expected a variable named result\"\nassert isinstance(result, int), \"Expected result to be int, got \" + type(result).__name__",
        "visibility": "public"
      }
    ],
    "approach": "Store the result of 2 + 3 in a variable named result and print it, like a notebook cell output.\n\nReference solution:\nresult = 2 + 3\nprint(result)"
  },
  {
    "id": "m1-t5-p02",
    "topicId": "m1-t5",
    "slug": "nb-state-carries",
    "title": "Notebooks: State Carries Between Cells",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Increment a counter twice to show that notebook variables persist between cells, then print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Variables survive from cell to cell. Set "
        },
        {
          "type": "code",
          "value": "counter = 0"
        },
        {
          "type": "text",
          "value": ", add 1 twice (as if in two separate cells), then print "
        },
        {
          "type": "code",
          "value": "counter"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# counter += 1",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "counter"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "counter += 1 adds one to the existing value.",
          "Running the same cell twice keeps adding — a classic notebook surprise."
        ]
      }
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Use += to increment",
      "Output must be exactly: 2"
    ],
    "hints": [
      "counter += 1 twice, then print(counter)"
    ],
    "starterCode": "# TODO: run two 'cells' that each add 1\ncounter = 0\n",
    "solutionCode": "counter = 0\ncounter += 1\ncounter += 1\nprint(counter)",
    "publicTests": [
      {
        "id": "m1-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p02-t2",
        "label": "counter ended at 2",
        "assertCode": "assert (counter) == (2), \"Expected \" + repr(2) + \", got \" + repr(counter)",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p02-t3",
        "label": "counter has the right type",
        "assertCode": "assert \"counter\" in globals(), \"Expected a variable named counter\"\nassert isinstance(counter, int), \"Expected counter to be int, got \" + type(counter).__name__",
        "visibility": "public"
      }
    ],
    "approach": "Increment a counter twice to show that notebook variables persist between cells, then print it.\n\nReference solution:\ncounter = 0\ncounter += 1\ncounter += 1\nprint(counter)"
  },
  {
    "id": "m1-t5-p03",
    "topicId": "m1-t5",
    "slug": "nb-execution-labels",
    "title": "Notebooks: Execution Counter Labels",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Build the list of execution labels In [1] to In [3] and print each on its own line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Each run bumps the execution counter. Build a list named "
        },
        {
          "type": "code",
          "value": "labels"
        },
        {
          "type": "text",
          "value": " holding "
        },
        {
          "type": "code",
          "value": "In [1]"
        },
        {
          "type": "text",
          "value": " through "
        },
        {
          "type": "code",
          "value": "In [3]"
        },
        {
          "type": "text",
          "value": ", then print each label."
        }
      ],
      "editorPlaceholder": "# labels = [ ... ]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "labels"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Use a comprehension over range(1, 4).",
          "Format each label with f\"In [{n}]\""
        ]
      }
    },
    "examples": [
      {
        "output": "In [1]\nIn [2]\nIn [3]"
      }
    ],
    "constraints": [
      "Build labels with range() — do not type the three strings",
      "One label per line"
    ],
    "hints": [
      "labels = [f\"In [{n}]\" for n in range(1, 4)]",
      "Then loop and print each label"
    ],
    "starterCode": "# TODO: build the labels, then print them\nlabels = []\n",
    "solutionCode": "labels = [f\"In [{n}]\" for n in range(1, 4)]\nfor label in labels:\n    print(label)",
    "publicTests": [
      {
        "id": "m1-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "In [1]\nIn [2]\nIn [3]",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p03-t2",
        "label": "labels has the right type",
        "assertCode": "assert \"labels\" in globals(), \"Expected a variable named labels\"\nassert isinstance(labels, list), \"Expected labels to be list, got \" + type(labels).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p03-t3",
        "label": "labels are built for 1 to 3",
        "assertCode": "assert (labels) == ([\"In [1]\", \"In [2]\", \"In [3]\"]), \"Expected \" + repr([\"In [1]\", \"In [2]\", \"In [3]\"]) + \", got \" + repr(labels)",
        "visibility": "public"
      }
    ],
    "approach": "Build the list of execution labels In [1] to In [3] and print each on its own line.\n\nReference solution:\nlabels = [f\"In [{n}]\" for n in range(1, 4)]\nfor label in labels:\n    print(label)"
  },
  {
    "id": "m1-t5-p04",
    "topicId": "m1-t5",
    "slug": "nb-restart-kernel",
    "title": "Notebooks: Restarting Clears State",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Model the kernel namespace as a dict, clear it to simulate a restart, and print how many variables remain.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Restarting the kernel wipes every variable. Put "
        },
        {
          "type": "code",
          "value": "{\"df\": \"loaded\", \"model\": \"trained\"}"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "namespace"
        },
        {
          "type": "text",
          "value": ", call "
        },
        {
          "type": "code",
          "value": ".clear()"
        },
        {
          "type": "text",
          "value": ", then print how many names are left."
        }
      ],
      "editorPlaceholder": "# namespace.clear()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "namespace"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "dict.clear() removes every key in place.",
          "len(namespace) is 0 after a restart — you must re-run your cells."
        ]
      }
    },
    "examples": [
      {
        "output": "0"
      }
    ],
    "constraints": [
      "Use .clear()",
      "Output must be exactly: 0"
    ],
    "hints": [
      "namespace.clear() then print(len(namespace))"
    ],
    "starterCode": "# TODO: clear the namespace, then count what is left\nnamespace = {\"df\": \"loaded\", \"model\": \"trained\"}\n",
    "solutionCode": "namespace = {\"df\": \"loaded\", \"model\": \"trained\"}\nnamespace.clear()\nprint(len(namespace))",
    "publicTests": [
      {
        "id": "m1-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "0",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p04-t2",
        "label": "namespace has the right type",
        "assertCode": "assert \"namespace\" in globals(), \"Expected a variable named namespace\"\nassert isinstance(namespace, dict), \"Expected namespace to be dict, got \" + type(namespace).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p04-t3",
        "label": "namespace was cleared",
        "assertCode": "assert (namespace) == ({}), \"Expected \" + repr({}) + \", got \" + repr(namespace)",
        "visibility": "public"
      }
    ],
    "approach": "Model the kernel namespace as a dict, clear it to simulate a restart, and print how many variables remain.\n\nReference solution:\nnamespace = {\"df\": \"loaded\", \"model\": \"trained\"}\nnamespace.clear()\nprint(len(namespace))"
  },
  {
    "id": "m1-t5-p05",
    "topicId": "m1-t5",
    "slug": "nb-cell-types",
    "title": "Notebooks: Count Markdown vs Code Cells",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Count how many cells are markdown and how many are code, store both in a dict, and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Given "
        },
        {
          "type": "code",
          "value": "cells"
        },
        {
          "type": "text",
          "value": ", build a dict named "
        },
        {
          "type": "code",
          "value": "counts"
        },
        {
          "type": "text",
          "value": " with the number of markdown and code cells, then print it."
        }
      ],
      "editorPlaceholder": "# counts = { ... }",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "cells",
        "counts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "cells.count(\"code\") counts matching items.",
          "Put both counts in a dict with keys markdown and code, in that order."
        ]
      }
    },
    "examples": [
      {
        "output": "{'markdown': 2, 'code': 3}"
      }
    ],
    "constraints": [
      "Count with .count() — do not type the numbers",
      "Key order: markdown then code"
    ],
    "hints": [
      "counts = {\"markdown\": cells.count(\"markdown\"), \"code\": cells.count(\"code\")}"
    ],
    "starterCode": "# TODO: count each cell type\ncells = [\"markdown\", \"code\", \"code\", \"markdown\", \"code\"]\ncounts = {}\n",
    "solutionCode": "cells = [\"markdown\", \"code\", \"code\", \"markdown\", \"code\"]\ncounts = {\"markdown\": cells.count(\"markdown\"), \"code\": cells.count(\"code\")}\nprint(counts)",
    "publicTests": [
      {
        "id": "m1-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "{'markdown': 2, 'code': 3}",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p05-t2",
        "label": "counts has the right type",
        "assertCode": "assert \"counts\" in globals(), \"Expected a variable named counts\"\nassert isinstance(counts, dict), \"Expected counts to be dict, got \" + type(counts).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p05-t3",
        "label": "markdown count",
        "assertCode": "assert (counts[\"markdown\"]) == (2), \"Expected \" + repr(2) + \", got \" + repr(counts[\"markdown\"])",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p05-t4",
        "label": "code count",
        "assertCode": "assert (counts[\"code\"]) == (3), \"Expected \" + repr(3) + \", got \" + repr(counts[\"code\"])",
        "visibility": "public"
      }
    ],
    "approach": "Count how many cells are markdown and how many are code, store both in a dict, and print it.\n\nReference solution:\ncells = [\"markdown\", \"code\", \"code\", \"markdown\", \"code\"]\ncounts = {\"markdown\": cells.count(\"markdown\"), \"code\": cells.count(\"code\")}\nprint(counts)"
  },
  {
    "id": "m1-t5-p06",
    "topicId": "m1-t5",
    "slug": "nb-out-history",
    "title": "Notebooks: Look Up an Old Output",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Store the Out[] history in a dict keyed by execution number and print the value of Out[2].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Notebooks keep past outputs. Store "
        },
        {
          "type": "code",
          "value": "{1: 5, 2: 12, 3: 20}"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "outputs"
        },
        {
          "type": "text",
          "value": " and print the value for execution "
        },
        {
          "type": "code",
          "value": "2"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(outputs[2])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "outputs"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Dict keys can be integers: outputs[2]"
        ]
      }
    },
    "examples": [
      {
        "output": "12"
      }
    ],
    "constraints": [
      "Use the integer key 2",
      "Output must be exactly: 12"
    ],
    "hints": [
      "print(outputs[2])"
    ],
    "starterCode": "# TODO: look up Out[2]\noutputs = {1: 5, 2: 12, 3: 20}\n",
    "solutionCode": "outputs = {1: 5, 2: 12, 3: 20}\nprint(outputs[2])",
    "publicTests": [
      {
        "id": "m1-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "12",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p06-t2",
        "label": "outputs has the right type",
        "assertCode": "assert \"outputs\" in globals(), \"Expected a variable named outputs\"\nassert isinstance(outputs, dict), \"Expected outputs to be dict, got \" + type(outputs).__name__",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p06-t3",
        "label": "three outputs stored",
        "assertCode": "assert (len(outputs)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(outputs))",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p06-t4",
        "label": "Out[2] is 12",
        "assertCode": "assert (outputs[2]) == (12), \"Expected \" + repr(12) + \", got \" + repr(outputs[2])",
        "visibility": "public"
      }
    ],
    "approach": "Store the Out[] history in a dict keyed by execution number and print the value of Out[2].\n\nReference solution:\noutputs = {1: 5, 2: 12, 3: 20}\nprint(outputs[2])"
  },
  {
    "id": "m1-t5-p07",
    "topicId": "m1-t5",
    "slug": "nb-summary",
    "title": "Notebooks: Summarise a Notebook",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Given a list of cell dicts, count the code cells and total their lines, then print a summary line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Each cell is a dict with "
        },
        {
          "type": "code",
          "value": "type"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "lines"
        },
        {
          "type": "text",
          "value": ". Count the code cells into "
        },
        {
          "type": "code",
          "value": "code_cells"
        },
        {
          "type": "text",
          "value": ", total their lines into "
        },
        {
          "type": "code",
          "value": "code_lines"
        },
        {
          "type": "text",
          "value": ", and print the summary."
        }
      ],
      "editorPlaceholder": "# code_cells = ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "cells",
        "code_cells",
        "code_lines"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Filter with a comprehension: [c for c in cells if c[\"type\"] == \"code\"]",
          "sum(c[\"lines\"] for c in ...) totals the lines.",
          "Format with f\"{code_cells} code cells, {code_lines} lines\""
        ]
      }
    },
    "examples": [
      {
        "output": "2 code cells, 8 lines"
      }
    ],
    "constraints": [
      "Skip markdown cells in both numbers",
      "Compute the values — do not type 2 or 8",
      "Output must be exactly: 2 code cells, 8 lines"
    ],
    "hints": [
      "code_cells = len([c for c in cells if c[\"type\"] == \"code\"])",
      "code_lines = sum(c[\"lines\"] for c in cells if c[\"type\"] == \"code\")"
    ],
    "starterCode": "# TODO: summarise only the code cells\ncells = [\n    {\"type\": \"code\", \"lines\": 3},\n    {\"type\": \"markdown\", \"lines\": 2},\n    {\"type\": \"code\", \"lines\": 5},\n]\ncode_cells = 0\ncode_lines = 0\n",
    "solutionCode": "cells = [\n    {\"type\": \"code\", \"lines\": 3},\n    {\"type\": \"markdown\", \"lines\": 2},\n    {\"type\": \"code\", \"lines\": 5},\n]\ncode_cells = len([c for c in cells if c[\"type\"] == \"code\"])\ncode_lines = sum(c[\"lines\"] for c in cells if c[\"type\"] == \"code\")\nprint(f\"{code_cells} code cells, {code_lines} lines\")",
    "publicTests": [
      {
        "id": "m1-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "2 code cells, 8 lines",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p07-t2",
        "label": "code cells counted",
        "assertCode": "assert (code_cells) == (2), \"Expected \" + repr(2) + \", got \" + repr(code_cells)",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p07-t3",
        "label": "markdown lines excluded",
        "assertCode": "assert (code_lines) == (8), \"Expected \" + repr(8) + \", got \" + repr(code_lines)",
        "visibility": "public"
      },
      {
        "id": "m1-t5-p07-t4",
        "label": "source data untouched",
        "assertCode": "assert (len(cells)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(cells))",
        "visibility": "public"
      }
    ],
    "approach": "Given a list of cell dicts, count the code cells and total their lines, then print a summary line.\n\nReference solution:\ncells = [\n    {\"type\": \"code\", \"lines\": 3},\n    {\"type\": \"markdown\", \"lines\": 2},\n    {\"type\": \"code\", \"lines\": 5},\n]\ncode_cells = len([c for c in cells if c[\"type\"] == \"code\"])\ncode_lines = sum(c[\"lines\"] for c in cells if c[\"type\"] == \"code\")\nprint(f\"{code_cells} code cells, {code_lines} lines\")"
  }
];

export const module1Practice: PracticeProblem[] = [
  ...module1IntroPractice,
  ...environmentPractice,
];
