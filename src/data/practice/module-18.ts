import type { PracticeProblem } from "@/lib/types";

export const module18Practice: PracticeProblem[] = [
  {
    "id": "m18-t1-p01",
    "topicId": "m18-t1",
    "slug": "retail-question",
    "title": "Project Overview: The Question",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Store the project question in a variable named question: \"Which region earns the most revenue?\" Then print question.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store the project question in a variable named question: \"Which region earns the most revenue?\" Then print question."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "question"
      ]
    },
    "examples": [
      {
        "output": "Which region earns the most revenue?"
      }
    ],
    "constraints": [
      "Output must match: Which region earns the most revenue?"
    ],
    "hints": [
      "question = \"Which region earns the most revenue?\""
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Which region earns the most revenue?",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"question\" in globals(), \"Expected a variable named question\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "Which region earns the most revenue?",
        "visibility": "public"
      }
    ],
    "solutionCode": "question = \"Which region earns the most revenue?\"\nprint(question)",
    "approach": "Store the project question in a variable named question: \"Which region earns the most revenue?\" Then print question.\n\nReference solution:\nquestion = \"Which region earns the most revenue?\"\nprint(question)"
  },
  {
    "id": "m18-t1-p02",
    "topicId": "m18-t1",
    "slug": "retail-columns",
    "title": "Project Overview: Column List",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create columns = [\"region\", \"category\", \"units\", \"revenue\"] and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create columns = [\"region\", \"category\", \"units\", \"revenue\"] and print it."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "columns"
      ],
      "requiresListAccess": true
    },
    "examples": [
      {
        "output": "['region', 'category', 'units', 'revenue']"
      }
    ],
    "constraints": [
      "Output must match: ['region', 'category', 'units', 'revenue']"
    ],
    "hints": [
      "columns = [\"region\", \"category\", \"units\", \"revenue\"]"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "['region', 'category', 'units', 'revenue']",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"columns\" in globals(), \"Expected a variable named columns\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "['region', 'category', 'units', 'revenue']",
        "visibility": "public"
      }
    ],
    "solutionCode": "columns = [\"region\", \"category\", \"units\", \"revenue\"]\nprint(columns)",
    "approach": "Create columns = [\"region\", \"category\", \"units\", \"revenue\"] and print it.\n\nReference solution:\ncolumns = [\"region\", \"category\", \"units\", \"revenue\"]\nprint(columns)"
  },
  {
    "id": "m18-t1-p03",
    "topicId": "m18-t1",
    "slug": "retail-row-count",
    "title": "Project Overview: How Many Rows",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Build the five sample sales rows and print len(rows).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build the five sample sales rows and print len(rows)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
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
      "print(len(rows))"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "5",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(len(rows))",
    "approach": "Build the five sample sales rows and print len(rows).\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(len(rows))"
  },
  {
    "id": "m18-t1-p04",
    "topicId": "m18-t1",
    "slug": "retail-first-region",
    "title": "Project Overview: First Region",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print the region of the first sample row: rows[0][\"region\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the region of the first sample row: rows[0][\"region\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresListAccess": true,
      "requiresDictKey": "region"
    },
    "examples": [
      {
        "output": "South"
      }
    ],
    "constraints": [
      "Output must match: South"
    ],
    "hints": [
      "print(rows[0][\"region\"])"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "South",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "South",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(rows[0][\"region\"])",
    "approach": "Print the region of the first sample row: rows[0][\"region\"].\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(rows[0][\"region\"])"
  },
  {
    "id": "m18-t1-p05",
    "topicId": "m18-t1",
    "slug": "retail-unique-regions",
    "title": "Project Overview: Unique Regions",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print the sorted unique region names from the sample rows.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the sorted unique region names from the sample rows."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "['East', 'North', 'South']"
      }
    ],
    "constraints": [
      "Output must match: ['East', 'North', 'South']"
    ],
    "hints": [
      "print(sorted({row[\"region\"] for row in rows}))"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "['East', 'North', 'South']",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "['East', 'North', 'South']",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(sorted({row[\"region\"] for row in rows}))",
    "approach": "Print the sorted unique region names from the sample rows.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(sorted({row[\"region\"] for row in rows}))"
  },
  {
    "id": "m18-t1-p06",
    "topicId": "m18-t1",
    "slug": "retail-metric",
    "title": "Project Overview: The Metric",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Store metric = \"revenue\" — that is the column the report will total — and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store metric = \"revenue\" — that is the column the report will total — and print it."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "metric"
      ]
    },
    "examples": [
      {
        "output": "revenue"
      }
    ],
    "constraints": [
      "Output must match: revenue"
    ],
    "hints": [
      "metric = \"revenue\"\nprint(metric)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "revenue",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"metric\" in globals(), \"Expected a variable named metric\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "revenue",
        "visibility": "public"
      }
    ],
    "solutionCode": "metric = \"revenue\"\nprint(metric)",
    "approach": "Store metric = \"revenue\" — that is the column the report will total — and print it.\n\nReference solution:\nmetric = \"revenue\"\nprint(metric)"
  },
  {
    "id": "m18-t1-p07",
    "topicId": "m18-t1",
    "slug": "retail-report-title",
    "title": "Project Overview: Report Title",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Store title = \"=== Retail Sales Report ===\" and print title.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store title = \"=== Retail Sales Report ===\" and print title."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "title"
      ]
    },
    "examples": [
      {
        "output": "=== Retail Sales Report ==="
      }
    ],
    "constraints": [
      "Output must match: === Retail Sales Report ==="
    ],
    "hints": [
      "title = \"=== Retail Sales Report ===\""
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "=== Retail Sales Report ===",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"title\" in globals(), \"Expected a variable named title\"",
        "visibility": "public"
      },
      {
        "id": "m18-t1-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "=== Retail Sales Report ===",
        "visibility": "public"
      }
    ],
    "solutionCode": "title = \"=== Retail Sales Report ===\"\nprint(title)",
    "approach": "Store title = \"=== Retail Sales Report ===\" and print title.\n\nReference solution:\ntitle = \"=== Retail Sales Report ===\"\nprint(title)"
  },
  {
    "id": "m18-t2-p01",
    "topicId": "m18-t2",
    "slug": "sale-dict",
    "title": "Data Model: One Sale Dict",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create sale = {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100} and print sale[\"revenue\"].",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create sale = {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100} and print sale[\"revenue\"]."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "sale"
      ],
      "requiresDictKey": "revenue"
    },
    "examples": [
      {
        "output": "100"
      }
    ],
    "constraints": [
      "Output must match: 100"
    ],
    "hints": [
      "print(sale[\"revenue\"])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "100",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"sale\" in globals(), \"Expected a variable named sale\"",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "100",
        "visibility": "public"
      }
    ],
    "solutionCode": "sale = {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100}\nprint(sale[\"revenue\"])",
    "approach": "Create sale = {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100} and print sale[\"revenue\"].\n\nReference solution:\nsale = {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100}\nprint(sale[\"revenue\"])"
  },
  {
    "id": "m18-t2-p02",
    "topicId": "m18-t2",
    "slug": "sale-records",
    "title": "Data Model: A List of Records",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Build the five sample rows and print how many records you stored.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build the five sample rows and print how many records you stored."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
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
      "print(len(rows))"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "5",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "5",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(len(rows))",
    "approach": "Build the five sample rows and print how many records you stored.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nprint(len(rows))"
  },
  {
    "id": "m18-t2-p03",
    "topicId": "m18-t2",
    "slug": "sale-class",
    "title": "Data Model: A Sale Class",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define class Sale with region, category, units, and revenue. Create item = Sale(\"South\", \"pen\", 10, 100) and print item.revenue.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define class Sale with region, category, units, and revenue. Create item = Sale(\"South\", \"pen\", 10, 100) and print item.revenue."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "item"
      ]
    },
    "examples": [
      {
        "output": "100"
      }
    ],
    "constraints": [
      "Output must match: 100"
    ],
    "hints": [
      "Store each argument on self in __init__."
    ],
    "starterCode": "",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "100"
      },
      {
        "label": "Sale stores revenue",
        "assertCode": "assert Sale(\"East\", \"bag\", 3, 50).revenue == 50, \"Sale should store the constructor arguments\""
      }
    ],
    "solutionCode": "class Sale:\n    def __init__(self, region, category, units, revenue):\n        self.region = region\n        self.category = category\n        self.units = units\n        self.revenue = revenue\n\nitem = Sale(\"South\", \"pen\", 10, 100)\nprint(item.revenue)",
    "approach": "Define class Sale with region, category, units, and revenue. Create item = Sale(\"South\", \"pen\", 10, 100) and print item.revenue.\n\nReference solution:\nclass Sale:\n    def __init__(self, region, category, units, revenue):\n        self.region = region\n        self.category = category\n        self.units = units\n        self.revenue = revenue\n\nitem = Sale(\"South\", \"pen\", 10, 100)\nprint(item.revenue)"
  },
  {
    "id": "m18-t2-p04",
    "topicId": "m18-t2",
    "slug": "append-sale",
    "title": "Data Model: Append a Sale",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Start with rows = [{\"region\": \"South\", \"revenue\": 100}]. Append {\"region\": \"East\", \"revenue\": 120} and print len(rows).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Start with rows = [{\"region\": \"South\", \"revenue\": 100}]. Append {\"region\": \"East\", \"revenue\": 120} and print len(rows)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ]
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
      "rows.append({...})"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [{\"region\": \"South\", \"revenue\": 100}]\nrows.append({\"region\": \"East\", \"revenue\": 120})\nprint(len(rows))",
    "approach": "Start with rows = [{\"region\": \"South\", \"revenue\": 100}]. Append {\"region\": \"East\", \"revenue\": 120} and print len(rows).\n\nReference solution:\nrows = [{\"region\": \"South\", \"revenue\": 100}]\nrows.append({\"region\": \"East\", \"revenue\": 120})\nprint(len(rows))"
  },
  {
    "id": "m18-t2-p05",
    "topicId": "m18-t2",
    "slug": "unpack-record",
    "title": "Data Model: Unpack a Record",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "record = (\"South\", 100). Unpack into region, revenue and print revenue.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "record = (\"South\", 100). Unpack into region, revenue and print revenue."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "record",
        "revenue"
      ]
    },
    "examples": [
      {
        "output": "100"
      }
    ],
    "constraints": [
      "Output must match: 100"
    ],
    "hints": [
      "region, revenue = record"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m18-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "100",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"record\" in globals(), \"Expected a variable named record\"\nassert \"revenue\" in globals(), \"Expected a variable named revenue\"",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "100",
        "visibility": "public"
      }
    ],
    "solutionCode": "record = (\"South\", 100)\nregion, revenue = record\nprint(revenue)",
    "approach": "record = (\"South\", 100). Unpack into region, revenue and print revenue.\n\nReference solution:\nrecord = (\"South\", 100)\nregion, revenue = record\nprint(revenue)"
  },
  {
    "id": "m18-t2-p06",
    "topicId": "m18-t2",
    "slug": "sales-frame",
    "title": "Data Model: DataFrame From Rows",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Build a pandas DataFrame from the sample rows and print df.shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build a pandas DataFrame from the sample rows and print df.shape."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ]
    },
    "examples": [
      {
        "output": "(5, 4)"
      }
    ],
    "constraints": [
      "Output must match: (5, 4)"
    ],
    "hints": [
      "df = pd.DataFrame(rows)"
    ],
    "starterCode": "import pandas as pd\n\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "(5, 4)",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pd\" in globals(), \"Expected a variable named pd\"\nassert \"df\" in globals(), \"Expected a variable named df\"",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "(5, 4)",
        "visibility": "public"
      }
    ],
    "solutionCode": "import pandas as pd\n\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ndf = pd.DataFrame(rows)\nprint(df.shape)",
    "approach": "Build a pandas DataFrame from the sample rows and print df.shape.\n\nReference solution:\nimport pandas as pd\n\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ndf = pd.DataFrame(rows)\nprint(df.shape)"
  },
  {
    "id": "m18-t2-p07",
    "topicId": "m18-t2",
    "slug": "missing-revenue",
    "title": "Data Model: Missing Revenue",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "From the sample rows, print how many records have revenue equal to None.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "From the sample rows, print how many records have revenue equal to None."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "missing"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true
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
      "row[\"revenue\"] is None"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"missing\" in globals(), \"Expected a variable named missing\"",
        "visibility": "public"
      },
      {
        "id": "m18-t2-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nmissing = sum(1 for row in rows if row[\"revenue\"] is None)\nprint(missing)",
    "approach": "From the sample rows, print how many records have revenue equal to None.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nmissing = sum(1 for row in rows if row[\"revenue\"] is None)\nprint(missing)"
  },
  {
    "id": "m18-t3-p01",
    "topicId": "m18-t3",
    "slug": "sum-revenue-loop",
    "title": "Logic: Total Known Revenue",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Loop the sample rows and add revenue when it is not None. Print the total.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop the sample rows and add revenue when it is not None. Print the total."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "total"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "460.0"
      }
    ],
    "constraints": [
      "Output must match: 460.0"
    ],
    "hints": [
      "Skip None values inside the loop."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "460.0",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"total\" in globals(), \"Expected a variable named total\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "460.0",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ntotal = 0\nfor row in rows:\n    if row[\"revenue\"] is not None:\n        total += row[\"revenue\"]\nprint(total)",
    "approach": "Loop the sample rows and add revenue when it is not None. Print the total.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ntotal = 0\nfor row in rows:\n    if row[\"revenue\"] is not None:\n        total += row[\"revenue\"]\nprint(total)"
  },
  {
    "id": "m18-t3-p02",
    "topicId": "m18-t3",
    "slug": "count-south",
    "title": "Logic: Count South Rows",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Count how many sample rows have region == \"South\" and print the count.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Count how many sample rows have region == \"South\" and print the count."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "south"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true
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
      "south = [row for row in rows if row[\"region\"] == \"South\"]"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"south\" in globals(), \"Expected a variable named south\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nsouth = [row for row in rows if row[\"region\"] == \"South\"]\nprint(len(south))",
    "approach": "Count how many sample rows have region == \"South\" and print the count.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nsouth = [row for row in rows if row[\"region\"] == \"South\"]\nprint(len(south))"
  },
  {
    "id": "m18-t3-p03",
    "topicId": "m18-t3",
    "slug": "fill-missing-loop",
    "title": "Logic: Fill Missing Revenue",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Loop the sample rows. If revenue is None, set it to 0. Print the revenue values as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop the sample rows. If revenue is None, set it to 0. Print the revenue values as a list."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "[100.0, 150.0, 0, 120.0, 90.0]"
      }
    ],
    "constraints": [
      "Output must match: [100.0, 150.0, 0, 120.0, 90.0]"
    ],
    "hints": [
      "if row[\"revenue\"] is None: row[\"revenue\"] = 0"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[100.0, 150.0, 0, 120.0, 90.0]",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "[100.0, 150.0, 0, 120.0, 90.0]",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nfor row in rows:\n    if row[\"revenue\"] is None:\n        row[\"revenue\"] = 0\nprint([row[\"revenue\"] for row in rows])",
    "approach": "Loop the sample rows. If revenue is None, set it to 0. Print the revenue values as a list.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nfor row in rows:\n    if row[\"revenue\"] is None:\n        row[\"revenue\"] = 0\nprint([row[\"revenue\"] for row in rows])"
  },
  {
    "id": "m18-t3-p04",
    "topicId": "m18-t3",
    "slug": "max-revenue-category",
    "title": "Logic: Category With Max Revenue",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Loop the sample rows, skip None revenue, and print the category of the row with the highest revenue.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop the sample rows, skip None revenue, and print the category of the row with the highest revenue."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "best"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "book"
      }
    ],
    "constraints": [
      "Output must match: book"
    ],
    "hints": [
      "Keep a best row and replace it when you see a larger revenue."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "book",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"best\" in globals(), \"Expected a variable named best\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "book",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nbest = None\nfor row in rows:\n    if row[\"revenue\"] is None:\n        continue\n    if best is None or row[\"revenue\"] > best[\"revenue\"]:\n        best = row\nprint(best[\"category\"])",
    "approach": "Loop the sample rows, skip None revenue, and print the category of the row with the highest revenue.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nbest = None\nfor row in rows:\n    if row[\"revenue\"] is None:\n        continue\n    if best is None or row[\"revenue\"] > best[\"revenue\"]:\n        best = row\nprint(best[\"category\"])"
  },
  {
    "id": "m18-t3-p05",
    "topicId": "m18-t3",
    "slug": "sum-units-loop",
    "title": "Logic: Total Units",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Loop the sample rows and print the sum of units.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop the sample rows and print the sum of units."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "total_units"
      ],
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "41"
      }
    ],
    "constraints": [
      "Output must match: 41"
    ],
    "hints": [
      "total_units += row[\"units\"]"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "41",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p05-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"total_units\" in globals(), \"Expected a variable named total_units\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p05-t3",
        "label": "No Extra Output",
        "expectedStdout": "41",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ntotal_units = 0\nfor row in rows:\n    total_units += row[\"units\"]\nprint(total_units)",
    "approach": "Loop the sample rows and print the sum of units.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ntotal_units = 0\nfor row in rows:\n    total_units += row[\"units\"]\nprint(total_units)"
  },
  {
    "id": "m18-t3-p06",
    "topicId": "m18-t3",
    "slug": "high-revenue-categories",
    "title": "Logic: High Revenue Categories",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Print the categories of rows whose revenue is at least 120. Skip None.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the categories of rows whose revenue is at least 120. Skip None."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "high"
      ],
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "['book', 'pen']"
      }
    ],
    "constraints": [
      "Output must match: ['book', 'pen']"
    ],
    "hints": [
      "Keep rows with revenue >= 120."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "['book', 'pen']",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"high\" in globals(), \"Expected a variable named high\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "['book', 'pen']",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nhigh = [row[\"category\"] for row in rows if row[\"revenue\"] is not None and row[\"revenue\"] >= 120]\nprint(high)",
    "approach": "Print the categories of rows whose revenue is at least 120. Skip None.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\nhigh = [row[\"category\"] for row in rows if row[\"revenue\"] is not None and row[\"revenue\"] >= 120]\nprint(high)"
  },
  {
    "id": "m18-t3-p07",
    "topicId": "m18-t3",
    "slug": "region-counts",
    "title": "Logic: Rows per Region",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Loop the sample rows, count how many times each region appears, and print dict(sorted(counts.items())).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop the sample rows, count how many times each region appears, and print dict(sorted(counts.items()))."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows",
        "counts"
      ],
      "requiresForLoop": true
    },
    "examples": [
      {
        "output": "{'East': 1, 'North': 2, 'South': 2}"
      }
    ],
    "constraints": [
      "Output must match: {'East': 1, 'North': 2, 'South': 2}"
    ],
    "hints": [
      "counts[region] = counts.get(region, 0) + 1"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n",
    "publicTests": [
      {
        "id": "m18-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "{'East': 1, 'North': 2, 'South': 2}",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p07-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"counts\" in globals(), \"Expected a variable named counts\"",
        "visibility": "public"
      },
      {
        "id": "m18-t3-p07-t3",
        "label": "No Extra Output",
        "expectedStdout": "{'East': 1, 'North': 2, 'South': 2}",
        "visibility": "public"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ncounts = {}\nfor row in rows:\n    region = row[\"region\"]\n    counts[region] = counts.get(region, 0) + 1\nprint(dict(sorted(counts.items())))",
    "approach": "Loop the sample rows, count how many times each region appears, and print dict(sorted(counts.items())).\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\ncounts = {}\nfor row in rows:\n    region = row[\"region\"]\n    counts[region] = counts.get(region, 0) + 1\nprint(dict(sorted(counts.items())))"
  },
  {
    "id": "m18-t4-p01",
    "topicId": "m18-t4",
    "slug": "fn-total-revenue",
    "title": "Functions: total_revenue",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define total_revenue(records) that sums revenue, skipping None. Print total_revenue(rows).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define total_revenue(records) that sums revenue, skipping None. Print total_revenue(rows)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresFunction": "total_revenue"
    },
    "examples": [
      {
        "output": "460.0"
      }
    ],
    "constraints": [
      "Output must match: 460.0"
    ],
    "hints": [
      "Skip None with a generator if."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef total_revenue(records):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "460.0"
      },
      {
        "label": "sample rows",
        "assertCode": "assert total_revenue(rows) == 460.0"
      },
      {
        "label": "another list",
        "assertCode": "assert total_revenue([{\"revenue\": 10}, {\"revenue\": None}]) == 10, \"Skip None in the argument\""
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef total_revenue(records):\n    return sum(row[\"revenue\"] for row in records if row[\"revenue\"] is not None)\n\nprint(total_revenue(rows))",
    "approach": "Define total_revenue(records) that sums revenue, skipping None. Print total_revenue(rows).\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef total_revenue(records):\n    return sum(row[\"revenue\"] for row in records if row[\"revenue\"] is not None)\n\nprint(total_revenue(rows))"
  },
  {
    "id": "m18-t4-p02",
    "topicId": "m18-t4",
    "slug": "fn-region-total",
    "title": "Functions: region_total",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define region_total(records, region) that sums that region's known revenue. Print region_total(rows, \"North\").",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define region_total(records, region) that sums that region's known revenue. Print region_total(rows, \"North\")."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresFunction": "region_total"
    },
    "examples": [
      {
        "output": "240.0"
      }
    ],
    "constraints": [
      "Output must match: 240.0"
    ],
    "hints": [
      "Filter by region and skip None."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef region_total(records, region):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "240.0"
      },
      {
        "label": "North",
        "assertCode": "assert region_total(rows, \"North\") == 240.0"
      },
      {
        "label": "East",
        "assertCode": "assert region_total(rows, \"East\") == 120.0"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef region_total(records, region):\n    return sum(row[\"revenue\"] for row in records if row[\"region\"] == region and row[\"revenue\"] is not None)\n\nprint(region_total(rows, \"North\"))",
    "approach": "Define region_total(records, region) that sums that region's known revenue. Print region_total(rows, \"North\").\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef region_total(records, region):\n    return sum(row[\"revenue\"] for row in records if row[\"region\"] == region and row[\"revenue\"] is not None)\n\nprint(region_total(rows, \"North\"))"
  },
  {
    "id": "m18-t4-p03",
    "topicId": "m18-t4",
    "slug": "fn-top-region",
    "title": "Functions: top_region",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Define top_region(records) that returns the region with the largest known revenue total. Print top_region(rows).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define top_region(records) that returns the region with the largest known revenue total. Print top_region(rows)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresFunction": "top_region",
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "North"
      }
    ],
    "constraints": [
      "Output must match: North"
    ],
    "hints": [
      "Build a totals dict, then max(..., key=totals.get)."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef top_region(records):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "North"
      },
      {
        "label": "sample rows",
        "assertCode": "assert top_region(rows) == \"North\""
      },
      {
        "label": "another list",
        "assertCode": "assert top_region([{\"region\": \"West\", \"revenue\": 9}, {\"region\": \"East\", \"revenue\": 3}]) == \"West\""
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef top_region(records):\n    totals = {}\n    for row in records:\n        if row[\"revenue\"] is None:\n            continue\n        totals[row[\"region\"]] = totals.get(row[\"region\"], 0) + row[\"revenue\"]\n    return max(totals, key=totals.get)\n\nprint(top_region(rows))",
    "approach": "Define top_region(records) that returns the region with the largest known revenue total. Print top_region(rows).\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef top_region(records):\n    totals = {}\n    for row in records:\n        if row[\"revenue\"] is None:\n            continue\n        totals[row[\"region\"]] = totals.get(row[\"region\"], 0) + row[\"revenue\"]\n    return max(totals, key=totals.get)\n\nprint(top_region(rows))"
  },
  {
    "id": "m18-t4-p04",
    "topicId": "m18-t4",
    "slug": "fn-format-line",
    "title": "Functions: format_line",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define format_line(region, total) that returns f\"{region}: {total}\". Print format_line(\"North\", 240.0).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define format_line(region, total) that returns f\"{region}: {total}\". Print format_line(\"North\", 240.0)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresFunction": "format_line"
    },
    "examples": [
      {
        "output": "North: 240.0"
      }
    ],
    "constraints": [
      "Output must match: North: 240.0"
    ],
    "hints": [
      "return f\"{region}: {total}\""
    ],
    "starterCode": "",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "North: 240.0"
      },
      {
        "label": "sample call",
        "assertCode": "assert format_line(\"North\", 240.0) == \"North: 240.0\""
      },
      {
        "label": "another call",
        "assertCode": "assert format_line(\"East\", 10) == \"East: 10\""
      }
    ],
    "solutionCode": "def format_line(region, total):\n    return f\"{region}: {total}\"\n\nprint(format_line(\"North\", 240.0))",
    "approach": "Define format_line(region, total) that returns f\"{region}: {total}\". Print format_line(\"North\", 240.0).\n\nReference solution:\ndef format_line(region, total):\n    return f\"{region}: {total}\"\n\nprint(format_line(\"North\", 240.0))"
  },
  {
    "id": "m18-t4-p05",
    "topicId": "m18-t4",
    "slug": "fn-clean-rows",
    "title": "Functions: clean_rows",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Define clean_rows(records) that returns a new list with None revenue replaced by 0. Print the cleaned revenue values.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define clean_rows(records) that returns a new list with None revenue replaced by 0. Print the cleaned revenue values."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresFunction": "clean_rows",
      "requiresForLoop": true,
      "requiresIfCondition": true
    },
    "examples": [
      {
        "output": "[100.0, 150.0, 0, 120.0, 90.0]"
      }
    ],
    "constraints": [
      "Output must match: [100.0, 150.0, 0, 120.0, 90.0]"
    ],
    "hints": [
      "Copy each dict so the original rows stay unchanged."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef clean_rows(records):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "[100.0, 150.0, 0, 120.0, 90.0]"
      },
      {
        "label": "fills None",
        "assertCode": "assert [row[\"revenue\"] for row in clean_rows(rows)] == [100.0, 150.0, 0, 120.0, 90.0]"
      },
      {
        "label": "leaves the original None",
        "assertCode": "assert rows[2][\"revenue\"] is None, \"Do not mutate the original rows\""
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef clean_rows(records):\n    cleaned = []\n    for row in records:\n        copy = dict(row)\n        if copy[\"revenue\"] is None:\n            copy[\"revenue\"] = 0\n        cleaned.append(copy)\n    return cleaned\n\nprint([row[\"revenue\"] for row in clean_rows(rows)])",
    "approach": "Define clean_rows(records) that returns a new list with None revenue replaced by 0. Print the cleaned revenue values.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef clean_rows(records):\n    cleaned = []\n    for row in records:\n        copy = dict(row)\n        if copy[\"revenue\"] is None:\n            copy[\"revenue\"] = 0\n        cleaned.append(copy)\n    return cleaned\n\nprint([row[\"revenue\"] for row in clean_rows(rows)])"
  },
  {
    "id": "m18-t4-p06",
    "topicId": "m18-t4",
    "slug": "fn-average-units",
    "title": "Functions: average_units",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define average_units(records) that returns the mean units as a float. Print average_units(rows).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define average_units(records) that returns the mean units as a float. Print average_units(rows)."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresFunction": "average_units"
    },
    "examples": [
      {
        "output": "8.2"
      }
    ],
    "constraints": [
      "Output must match: 8.2"
    ],
    "hints": [
      "41 units across 5 rows is 8.2"
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef average_units(records):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "8.2"
      },
      {
        "label": "sample rows",
        "assertCode": "assert average_units(rows) == 8.2"
      },
      {
        "label": "another list",
        "assertCode": "assert average_units([{\"units\": 2}, {\"units\": 4}]) == 3.0"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef average_units(records):\n    return sum(row[\"units\"] for row in records) / len(records)\n\nprint(average_units(rows))",
    "approach": "Define average_units(records) that returns the mean units as a float. Print average_units(rows).\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef average_units(records):\n    return sum(row[\"units\"] for row in records) / len(records)\n\nprint(average_units(rows))"
  },
  {
    "id": "m18-t4-p07",
    "topicId": "m18-t4",
    "slug": "fn-report-lines",
    "title": "Functions: report_lines",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define report_lines(records) that returns [\"=== Retail Sales Report ===\", top region, str(total)]. Print the list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define report_lines(records) that returns [\"=== Retail Sales Report ===\", top region, str(total)]. Print the list."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "rows"
      ],
      "requiresFunction": "report_lines"
    },
    "examples": [
      {
        "output": "['=== Retail Sales Report ===', 'North', '460.0']"
      }
    ],
    "constraints": [
      "Output must match: ['=== Retail Sales Report ===', 'North', '460.0']"
    ],
    "hints": [
      "Reuse totals to build the three strings."
    ],
    "starterCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef report_lines(records):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "['=== Retail Sales Report ===', 'North', '460.0']"
      },
      {
        "label": "sample report",
        "assertCode": "assert report_lines(rows) == [\"=== Retail Sales Report ===\", \"North\", \"460.0\"]"
      }
    ],
    "solutionCode": "rows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef total_revenue(records):\n    return sum(row[\"revenue\"] for row in records if row[\"revenue\"] is not None)\n\ndef top_region(records):\n    totals = {}\n    for row in records:\n        if row[\"revenue\"] is None:\n            continue\n        totals[row[\"region\"]] = totals.get(row[\"region\"], 0) + row[\"revenue\"]\n    return max(totals, key=totals.get)\n\ndef report_lines(records):\n    return [\"=== Retail Sales Report ===\", top_region(records), str(total_revenue(records))]\n\nprint(report_lines(rows))",
    "approach": "Define report_lines(records) that returns [\"=== Retail Sales Report ===\", top region, str(total)]. Print the list.\n\nReference solution:\nrows = [\n    {\"region\": \"South\", \"category\": \"pen\", \"units\": 10, \"revenue\": 100.0},\n    {\"region\": \"North\", \"category\": \"book\", \"units\": 5, \"revenue\": 150.0},\n    {\"region\": \"South\", \"category\": \"bag\", \"units\": 8, \"revenue\": None},\n    {\"region\": \"East\", \"category\": \"pen\", \"units\": 12, \"revenue\": 120.0},\n    {\"region\": \"North\", \"category\": \"bag\", \"units\": 6, \"revenue\": 90.0},\n]\n\ndef total_revenue(records):\n    return sum(row[\"revenue\"] for row in records if row[\"revenue\"] is not None)\n\ndef top_region(records):\n    totals = {}\n    for row in records:\n        if row[\"revenue\"] is None:\n            continue\n        totals[row[\"region\"]] = totals.get(row[\"region\"], 0) + row[\"revenue\"]\n    return max(totals, key=totals.get)\n\ndef report_lines(records):\n    return [\"=== Retail Sales Report ===\", top_region(records), str(total_revenue(records))]\n\nprint(report_lines(rows))"
  },
  {
    "id": "m18-t5-p01",
    "topicId": "m18-t5",
    "slug": "load-sales-csv",
    "title": "Capstone: Load the CSV",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use StringIO and pd.read_csv to load the sales CSV text, then print df.shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use StringIO and pd.read_csv to load the sales CSV text, then print df.shape."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ]
    },
    "examples": [
      {
        "output": "(5, 4)"
      }
    ],
    "constraints": [
      "Output must match: (5, 4)"
    ],
    "hints": [
      "df = pd.read_csv(StringIO(csv_text))"
    ],
    "starterCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\n",
    "publicTests": [
      {
        "id": "m18-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(5, 4)",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p01-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pd\" in globals(), \"Expected a variable named pd\"\nassert \"df\" in globals(), \"Expected a variable named df\"",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p01-t3",
        "label": "No Extra Output",
        "expectedStdout": "(5, 4)",
        "visibility": "public"
      }
    ],
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\nprint(df.shape)",
    "approach": "Use StringIO and pd.read_csv to load the sales CSV text, then print df.shape.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\nprint(df.shape)"
  },
  {
    "id": "m18-t5-p02",
    "topicId": "m18-t5",
    "slug": "fill-revenue",
    "title": "Capstone: Fill Missing Revenue",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Load the sales CSV, fill missing revenue with 0, and print the total as a float.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Load the sales CSV, fill missing revenue with 0, and print the total as a float."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ]
    },
    "examples": [
      {
        "output": "460.0"
      }
    ],
    "constraints": [
      "Output must match: 460.0"
    ],
    "hints": [
      "df[\"revenue\"] = df[\"revenue\"].fillna(0)"
    ],
    "starterCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\n",
    "publicTests": [
      {
        "id": "m18-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "460.0",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p02-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pd\" in globals(), \"Expected a variable named pd\"\nassert \"df\" in globals(), \"Expected a variable named df\"",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p02-t3",
        "label": "No Extra Output",
        "expectedStdout": "460.0",
        "visibility": "public"
      }
    ],
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\nprint(float(df[\"revenue\"].sum()))",
    "approach": "Load the sales CSV, fill missing revenue with 0, and print the total as a float.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\nprint(float(df[\"revenue\"].sum()))"
  },
  {
    "id": "m18-t5-p03",
    "topicId": "m18-t5",
    "slug": "region-totals-frame",
    "title": "Capstone: Revenue by Region",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "After filling missing revenue with 0, group by region, sum revenue, and print a dict of ints.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "After filling missing revenue with 0, group by region, sum revenue, and print a dict of ints."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "totals"
      ]
    },
    "examples": [
      {
        "output": "{'East': 120, 'North': 240, 'South': 100}"
      }
    ],
    "constraints": [
      "Output must match: {'East': 120, 'North': 240, 'South': 100}"
    ],
    "hints": [
      "totals = df.groupby(\"region\")[\"revenue\"].sum()"
    ],
    "starterCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\n",
    "publicTests": [
      {
        "id": "m18-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "{'East': 120, 'North': 240, 'South': 100}",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p03-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pd\" in globals(), \"Expected a variable named pd\"\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert \"totals\" in globals(), \"Expected a variable named totals\"",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p03-t3",
        "label": "No Extra Output",
        "expectedStdout": "{'East': 120, 'North': 240, 'South': 100}",
        "visibility": "public"
      }
    ],
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\ntotals = df.groupby(\"region\")[\"revenue\"].sum()\nprint({k: int(v) for k, v in totals.items()})",
    "approach": "After filling missing revenue with 0, group by region, sum revenue, and print a dict of ints.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\ntotals = df.groupby(\"region\")[\"revenue\"].sum()\nprint({k: int(v) for k, v in totals.items()})"
  },
  {
    "id": "m18-t5-p04",
    "topicId": "m18-t5",
    "slug": "units-revenue-corr",
    "title": "Capstone: Units vs Revenue",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "After filling missing revenue with 0, print the correlation of units and revenue rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "After filling missing revenue with 0, print the correlation of units and revenue rounded to two decimals."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ]
    },
    "examples": [
      {
        "output": "-0.07"
      }
    ],
    "constraints": [
      "Output must match: -0.07"
    ],
    "hints": [
      "df[[\"units\", \"revenue\"]].corr()"
    ],
    "starterCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\n",
    "publicTests": [
      {
        "id": "m18-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "-0.07",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p04-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pd\" in globals(), \"Expected a variable named pd\"\nassert \"df\" in globals(), \"Expected a variable named df\"",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p04-t3",
        "label": "No Extra Output",
        "expectedStdout": "-0.07",
        "visibility": "public"
      }
    ],
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\nprint(round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2))",
    "approach": "After filling missing revenue with 0, print the correlation of units and revenue rounded to two decimals.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\nprint(round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2))"
  },
  {
    "id": "m18-t5-p05",
    "topicId": "m18-t5",
    "slug": "region-bar-chart",
    "title": "Capstone: Bar Chart of Regions",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Fill missing revenue, group by region, draw a bar chart of the totals, and print a confirmation.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Fill missing revenue, group by region, draw a bar chart of the totals, and print a confirmation."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "pd",
        "ax",
        "totals"
      ]
    },
    "examples": [],
    "constraints": [],
    "hints": [
      "ax.bar(totals.index, totals.values)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "label": "axes exist",
        "assertCode": "assert \"ax\" in globals() and hasattr(ax, \"bar\"), \"Create fig, ax = plt.subplots() and draw bars\""
      },
      {
        "label": "three region bars",
        "assertCode": "assert len(ax.patches) == 3, \"Expected one bar per region\""
      },
      {
        "label": "North is the tallest",
        "assertCode": "heights = [round(p.get_height(), 2) for p in ax.patches]\nassert max(heights) == 240.0, \"North should total 240 after filling missing revenue\""
      }
    ],
    "solutionCode": "import matplotlib.pyplot as plt\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\ntotals = df.groupby(\"region\")[\"revenue\"].sum().sort_index()\n\nfig, ax = plt.subplots()\nax.bar(totals.index, totals.values)\nprint(\"region bars drawn\")",
    "approach": "Fill missing revenue, group by region, draw a bar chart of the totals, and print a confirmation.\n\nReference solution:\nimport matplotlib.pyplot as plt\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\ntotals = df.groupby(\"region\")[\"revenue\"].sum().sort_index()\n\nfig, ax = plt.subplots()\nax.bar(totals.index, totals.values)\nprint(\"region bars drawn\")"
  },
  {
    "id": "m18-t5-p06",
    "topicId": "m18-t5",
    "slug": "three-line-summary",
    "title": "Capstone: Three-Line Summary",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "After filling missing revenue, print rows, the top region, and total revenue as three labelled lines.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "After filling missing revenue, print rows, the top region, and total revenue as three labelled lines."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "rows",
        "top_region",
        "total_revenue"
      ]
    },
    "examples": [
      {
        "output": "rows=5\ntop_region=North\ntotal_revenue=460.0"
      }
    ],
    "constraints": [
      "Output must match: rows=5 / top_region=North / total_revenue=460.0"
    ],
    "hints": [
      "idxmax() returns the region with the largest total."
    ],
    "starterCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\n",
    "publicTests": [
      {
        "id": "m18-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "rows=5\ntop_region=North\ntotal_revenue=460.0",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p06-t2",
        "label": "Required names and structure",
        "assertCode": "assert \"pd\" in globals(), \"Expected a variable named pd\"\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert \"rows\" in globals(), \"Expected a variable named rows\"\nassert \"top_region\" in globals(), \"Expected a variable named top_region\"\nassert \"total_revenue\" in globals(), \"Expected a variable named total_revenue\"",
        "visibility": "public"
      },
      {
        "id": "m18-t5-p06-t3",
        "label": "No Extra Output",
        "expectedStdout": "rows=5\ntop_region=North\ntotal_revenue=460.0",
        "visibility": "public"
      }
    ],
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\nrows = len(df)\ntop_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()\ntotal_revenue = float(df[\"revenue\"].sum())\nprint(f\"rows={rows}\")\nprint(f\"top_region={top_region}\")\nprint(f\"total_revenue={total_revenue}\")",
    "approach": "After filling missing revenue, print rows, the top region, and total revenue as three labelled lines.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\nrows = len(df)\ntop_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()\ntotal_revenue = float(df[\"revenue\"].sum())\nprint(f\"rows={rows}\")\nprint(f\"top_region={top_region}\")\nprint(f\"total_revenue={total_revenue}\")"
  },
  {
    "id": "m18-t5-p07",
    "topicId": "m18-t5",
    "slug": "run-report",
    "title": "Capstone: run_report",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Define run_report(frame) that prints the title, the top region, and the total. Call it on the cleaned sales frame.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define run_report(frame) that prints the title, the top region, and the total. Call it on the cleaned sales frame."
        }
      ],
      "editorPlaceholder": "# write your solution",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "requiresFunction": "run_report"
    },
    "examples": [
      {
        "output": "=== Retail Sales Report ===\nNorth\n460.0"
      }
    ],
    "constraints": [
      "Output must match: === Retail Sales Report === / North / 460.0"
    ],
    "hints": [
      "Print three lines: title, idxmax(), then the total."
    ],
    "starterCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\n\ndef run_report(frame):\n    pass\n",
    "publicTests": [
      {
        "label": "Sample Case",
        "expectedStdout": "=== Retail Sales Report ===\nNorth\n460.0"
      },
      {
        "label": "callable",
        "assertCode": "assert callable(run_report), \"Define run_report\""
      }
    ],
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\n\ndef run_report(frame):\n    totals = frame.groupby(\"region\")[\"revenue\"].sum()\n    print(\"=== Retail Sales Report ===\")\n    print(totals.idxmax())\n    print(float(frame[\"revenue\"].sum()))\n\nrun_report(df)",
    "approach": "Define run_report(frame) that prints the title, the top region, and the total. Call it on the cleaned sales frame.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"item,region,units,revenue\npen,South,10,100\nbook,North,5,150\nbag,South,8,\npen,East,12,120\nbag,North,6,90\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\ndf[\"revenue\"] = df[\"revenue\"].fillna(0)\n\ndef run_report(frame):\n    totals = frame.groupby(\"region\")[\"revenue\"].sum()\n    print(\"=== Retail Sales Report ===\")\n    print(totals.idxmax())\n    print(float(frame[\"revenue\"].sum()))\n\nrun_report(df)"
  }
];
