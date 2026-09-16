import type { PracticeProblem } from "@/lib/types";

export const module15Practice: PracticeProblem[] = [
  {
    "id": "m15-t1-p01",
    "topicId": "m15-t1",
    "slug": "pd-series-create",
    "title": "pandas: Your First Series",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create a pandas Series named sales from [10, 20, 30] and print its values with .tolist().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Import pandas as "
        },
        {
          "type": "code",
          "value": "pd"
        },
        {
          "type": "text",
          "value": ", build "
        },
        {
          "type": "code",
          "value": "sales"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "pd.Series([10, 20, 30])"
        },
        {
          "type": "text",
          "value": ", and print "
        },
        {
          "type": "code",
          "value": "sales.tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# sales = pd.Series([...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! A Series is the building block of every DataFrame column.",
      "requiresVariables": [
        "pd",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A Series is one labelled column of data.",
          "import pandas as pd is the standard alias.",
          ".tolist() prints the values without the index or dtype line."
        ]
      }
    },
    "examples": [
      {
        "output": "[10, 20, 30]"
      }
    ],
    "constraints": [
      "Use pd.Series() — a plain list will not pass",
      "Name it sales",
      "Print with .tolist()"
    ],
    "hints": [
      "sales = pd.Series([10, 20, 30])",
      "print(sales.tolist())"
    ],
    "starterCode": "# TODO: build the Series\nimport pandas as pd\n\nsales = None\n",
    "solutionCode": "import pandas as pd\n\nsales = pd.Series([10, 20, 30])\nprint(sales.tolist())",
    "publicTests": [
      {
        "id": "m15-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[10, 20, 30]",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p01-t2",
        "label": "sales is a Series",
        "assertCode": "import pandas as _pd\nassert \"sales\" in globals(), \"Expected a variable named sales\"\nassert isinstance(sales, _pd.Series), \"Expected sales to be a Series, got \" + type(sales).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p01-t3",
        "label": "values are correct",
        "assertCode": "assert (sales.tolist()) == ([10, 20, 30]), \"Expected \" + repr([10, 20, 30]) + \", got \" + repr(sales.tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Create a pandas Series named sales from [10, 20, 30] and print its values with .tolist().\n\nReference solution:\nimport pandas as pd\n\nsales = pd.Series([10, 20, 30])\nprint(sales.tolist())"
  },
  {
    "id": "m15-t1-p02",
    "topicId": "m15-t1",
    "slug": "pd-series-labels",
    "title": "pandas: Label the Index",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create a Series with region labels as the index and print the value for \"North\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "pd.Series([250, 400], index=[\"South\", \"North\"])"
        },
        {
          "type": "text",
          "value": " as "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "int(revenue[\"North\"])"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# revenue = pd.Series([...], index=[...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "revenue"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A Series index can be text, not just numbers.",
          "That makes lookups read like a dictionary."
        ]
      }
    },
    "examples": [
      {
        "output": "400"
      }
    ],
    "constraints": [
      "Pass index= to pd.Series",
      "Look up by label, not position",
      "Output must be exactly: 400"
    ],
    "hints": [
      "revenue = pd.Series([250, 400], index=[\"South\", \"North\"])",
      "print(int(revenue[\"North\"]))"
    ],
    "starterCode": "# TODO: label the index, then look up North\nimport pandas as pd\n\nrevenue = None\n",
    "solutionCode": "import pandas as pd\n\nrevenue = pd.Series([250, 400], index=[\"South\", \"North\"])\nprint(int(revenue[\"North\"]))",
    "publicTests": [
      {
        "id": "m15-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "400",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p02-t2",
        "label": "revenue is a Series",
        "assertCode": "import pandas as _pd\nassert \"revenue\" in globals(), \"Expected a variable named revenue\"\nassert isinstance(revenue, _pd.Series), \"Expected revenue to be a Series, got \" + type(revenue).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p02-t3",
        "label": "index holds the region labels",
        "assertCode": "assert (list(revenue.index)) == ([\"South\", \"North\"]), \"Expected \" + repr([\"South\", \"North\"]) + \", got \" + repr(list(revenue.index))",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p02-t4",
        "label": "North lookup",
        "assertCode": "assert (int(revenue[\"North\"])) == (400), \"Expected \" + repr(400) + \", got \" + repr(int(revenue[\"North\"]))",
        "visibility": "public"
      }
    ],
    "approach": "Create a Series with region labels as the index and print the value for \"North\".\n\nReference solution:\nimport pandas as pd\n\nrevenue = pd.Series([250, 400], index=[\"South\", \"North\"])\nprint(int(revenue[\"North\"]))"
  },
  {
    "id": "m15-t1-p03",
    "topicId": "m15-t1",
    "slug": "pd-dataframe-columns",
    "title": "pandas: Build a DataFrame",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Create a DataFrame from a dict of columns and print its column names as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": " from a dict with keys "
        },
        {
          "type": "code",
          "value": "item"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "region"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "list(df.columns)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# df = pd.DataFrame({ ... })",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "pd.DataFrame(dict) makes each key a column.",
          "df.columns is an Index — wrap it in list() to print it plainly."
        ]
      }
    },
    "examples": [
      {
        "output": "['item', 'region', 'revenue']"
      }
    ],
    "constraints": [
      "Use pd.DataFrame with a dict",
      "Column order: item, region, revenue",
      "Print with list(df.columns)"
    ],
    "hints": [
      "df = pd.DataFrame({\"item\": [...], \"region\": [...], \"revenue\": [...]})",
      "print(list(df.columns))"
    ],
    "starterCode": "# TODO: build the DataFrame\nimport pandas as pd\n\ndf = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(list(df.columns))",
    "publicTests": [
      {
        "id": "m15-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "['item', 'region', 'revenue']",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p03-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p03-t3",
        "label": "three columns in order",
        "assertCode": "assert (list(df.columns)) == ([\"item\", \"region\", \"revenue\"]), \"Expected \" + repr([\"item\", \"region\", \"revenue\"]) + \", got \" + repr(list(df.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p03-t4",
        "label": "three rows of data",
        "assertCode": "assert (len(df)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(df))",
        "visibility": "public"
      }
    ],
    "approach": "Create a DataFrame from a dict of columns and print its column names as a list.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(list(df.columns))"
  },
  {
    "id": "m15-t1-p04",
    "topicId": "m15-t1",
    "slug": "pd-dataframe-shape",
    "title": "pandas: Rows and Columns",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print the shape of the sales DataFrame as (rows, columns).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "df.shape"
        },
        {
          "type": "text",
          "value": " — the first number is rows, the second is columns. It is the first thing to check after loading data."
        }
      ],
      "editorPlaceholder": "# print(df.shape)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".shape is a tuple of plain ints.",
          "len(df) gives just the row count."
        ]
      }
    },
    "examples": [
      {
        "output": "(3, 3)"
      }
    ],
    "constraints": [
      "Print df.shape",
      "Output must be exactly: (3, 3)"
    ],
    "hints": [
      "print(df.shape)"
    ],
    "starterCode": "# TODO: print the shape\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(df.shape)",
    "publicTests": [
      {
        "id": "m15-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "(3, 3)",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p04-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p04-t3",
        "label": "3 rows and 3 columns",
        "assertCode": "assert (df.shape) == ((3, 3)), \"Expected \" + repr((3, 3)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Print the shape of the sales DataFrame as (rows, columns).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(df.shape)"
  },
  {
    "id": "m15-t1-p05",
    "topicId": "m15-t1",
    "slug": "pd-column-sum",
    "title": "pandas: Total a Column",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print the total revenue by summing the revenue column.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(df[\"revenue\"].sum())"
        },
        {
          "type": "text",
          "value": " — selecting a column gives a Series, and a Series knows how to sum itself."
        }
      ],
      "editorPlaceholder": "# print(int(df[\"revenue\"].sum()))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "df[\"revenue\"] selects one column as a Series.",
          ".sum() aggregates it; int() keeps the printed value plain."
        ]
      }
    },
    "examples": [
      {
        "output": "140"
      }
    ],
    "constraints": [
      "Select the column, then call .sum()",
      "Output must be exactly: 140"
    ],
    "hints": [
      "print(int(df[\"revenue\"].sum()))"
    ],
    "starterCode": "# TODO: total the revenue column\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(int(df[\"revenue\"].sum()))",
    "publicTests": [
      {
        "id": "m15-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "140",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p05-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p05-t3",
        "label": "total revenue",
        "assertCode": "assert (int(df[\"revenue\"].sum())) == (140), \"Expected \" + repr(140) + \", got \" + repr(int(df[\"revenue\"].sum()))",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p05-t4",
        "label": "the column is untouched",
        "assertCode": "assert (df[\"revenue\"].tolist()) == ([30, 40, 70]), \"Expected \" + repr([30, 40, 70]) + \", got \" + repr(df[\"revenue\"].tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Print the total revenue by summing the revenue column.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(int(df[\"revenue\"].sum()))"
  },
  {
    "id": "m15-t1-p06",
    "topicId": "m15-t1",
    "slug": "pd-column-mean",
    "title": "pandas: Average a Column",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print the mean revenue rounded to two decimal places.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "round(float(df[\"revenue\"].mean()), 2)"
        },
        {
          "type": "text",
          "value": ". Rounding keeps the output readable and stable."
        }
      ],
      "editorPlaceholder": "# print(round(float(df[\"revenue\"].mean()), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".mean() ignores missing values automatically.",
          "round(value, 2) trims the long decimal tail."
        ]
      }
    },
    "examples": [
      {
        "output": "46.67"
      }
    ],
    "constraints": [
      "Use .mean()",
      "Round to 2 decimals",
      "Output must be exactly: 46.67"
    ],
    "hints": [
      "print(round(float(df[\"revenue\"].mean()), 2))"
    ],
    "starterCode": "# TODO: average the revenue column\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(round(float(df[\"revenue\"].mean()), 2))",
    "publicTests": [
      {
        "id": "m15-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "46.67",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p06-t2",
        "label": "mean rounded to 2 dp",
        "assertCode": "assert (round(float(df[\"revenue\"].mean()), 2)) == (46.67), \"Expected \" + repr(46.67) + \", got \" + repr(round(float(df[\"revenue\"].mean()), 2))",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p06-t3",
        "label": "the mean comes from the column",
        "assertCode": "assert abs(float(df[\"revenue\"].mean()) - 140 / 3) < 1e-9, \"Compute the mean from the revenue column\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the mean revenue rounded to two decimal places.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(round(float(df[\"revenue\"].mean()), 2))"
  },
  {
    "id": "m15-t1-p07",
    "topicId": "m15-t1",
    "slug": "pd-add-column",
    "title": "pandas: Add a Calculated Column",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Add a total column equal to units times price and print the new column as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Given "
        },
        {
          "type": "code",
          "value": "units"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "price"
        },
        {
          "type": "text",
          "value": " columns, create "
        },
        {
          "type": "code",
          "value": "df[\"total\"]"
        },
        {
          "type": "text",
          "value": " as their product and print "
        },
        {
          "type": "code",
          "value": "df[\"total\"].tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# df[\"total\"] = ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Multiplying two columns works elementwise — no loop.",
          "Assigning to a new key adds a column in place.",
          "This is the everyday way to build derived features."
        ]
      }
    },
    "examples": [
      {
        "output": "[20, 60, 20]"
      }
    ],
    "constraints": [
      "Name the new column \"total\"",
      "Multiply the two columns — no loop",
      "Output must be exactly: [20, 60, 20]"
    ],
    "hints": [
      "df[\"total\"] = df[\"units\"] * df[\"price\"]",
      "print(df[\"total\"].tolist())"
    ],
    "starterCode": "# TODO: add the total column\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"units\": [2, 3, 4],\n    \"price\": [10, 20, 5],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"units\": [2, 3, 4],\n    \"price\": [10, 20, 5],\n})\n\ndf[\"total\"] = df[\"units\"] * df[\"price\"]\nprint(df[\"total\"].tolist())",
    "publicTests": [
      {
        "id": "m15-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[20, 60, 20]",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p07-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p07-t3",
        "label": "a total column was added",
        "assertCode": "assert \"total\" in df.columns, \"Expected a new column named \\\"total\\\"\"",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p07-t4",
        "label": "totals are units * price",
        "assertCode": "assert (df[\"total\"].tolist()) == ([20, 60, 20]), \"Expected \" + repr([20, 60, 20]) + \", got \" + repr(df[\"total\"].tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t1-p07-t5",
        "label": "the frame now has 3 columns",
        "assertCode": "assert (df.shape) == ((3, 3)), \"Expected \" + repr((3, 3)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Add a total column equal to units times price and print the new column as a list.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"units\": [2, 3, 4],\n    \"price\": [10, 20, 5],\n})\n\ndf[\"total\"] = df[\"units\"] * df[\"price\"]\nprint(df[\"total\"].tolist())"
  },
  {
    "id": "m15-t2-p01",
    "topicId": "m15-t2",
    "slug": "pd-read-csv-string",
    "title": "IO: Read CSV Text",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use StringIO and pd.read_csv to load CSV text into a DataFrame, then print its shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Wrap the CSV text in "
        },
        {
          "type": "code",
          "value": "StringIO"
        },
        {
          "type": "text",
          "value": ", load it with "
        },
        {
          "type": "code",
          "value": "pd.read_csv"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": ", and print "
        },
        {
          "type": "code",
          "value": "df.shape"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# df = pd.read_csv(StringIO(csv_text))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "read_csv normally takes a filename, but it accepts any file-like object.",
          "StringIO turns a string into a file-like object.",
          "The header row becomes the column names, so 3 lines give 2 rows."
        ]
      }
    },
    "examples": [
      {
        "output": "(2, 2)"
      }
    ],
    "constraints": [
      "Use pd.read_csv with StringIO",
      "Do not build the DataFrame by hand",
      "Output must be exactly: (2, 2)"
    ],
    "hints": [
      "df = pd.read_csv(StringIO(csv_text))",
      "print(df.shape)"
    ],
    "starterCode": "# TODO: read the CSV text into a DataFrame\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"item,revenue\\npen,30\\nbook,70\\n\"\ndf = None\n",
    "solutionCode": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"item,revenue\\npen,30\\nbook,70\\n\"\ndf = pd.read_csv(StringIO(csv_text))\n\nprint(df.shape)",
    "publicTests": [
      {
        "id": "m15-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(2, 2)",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p01-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p01-t3",
        "label": "header became column names",
        "assertCode": "assert (list(df.columns)) == ([\"item\", \"revenue\"]), \"Expected \" + repr([\"item\", \"revenue\"]) + \", got \" + repr(list(df.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p01-t4",
        "label": "two data rows",
        "assertCode": "assert (df.shape) == ((2, 2)), \"Expected \" + repr((2, 2)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p01-t5",
        "label": "numbers were parsed as ints",
        "assertCode": "assert (int(df[\"revenue\"].sum())) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(df[\"revenue\"].sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Use StringIO and pd.read_csv to load CSV text into a DataFrame, then print its shape.\n\nReference solution:\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = \"item,revenue\\npen,30\\nbook,70\\n\"\ndf = pd.read_csv(StringIO(csv_text))\n\nprint(df.shape)"
  },
  {
    "id": "m15-t2-p02",
    "topicId": "m15-t2",
    "slug": "pd-to-csv-file",
    "title": "IO: Write a CSV File",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Save a DataFrame to sales_out.csv without the index, then print the file's header line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "sales_out.csv"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "index=False"
        },
        {
          "type": "text",
          "value": ", then open the file and print its first line."
        }
      ],
      "editorPlaceholder": "# df.to_csv(\"sales_out.csv\", index=False)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "to_csv(path, index=False) leaves out the row numbers.",
          "Without index=False you get a stray unnamed first column.",
          "read().splitlines()[0] is the header row."
        ]
      }
    },
    "examples": [
      {
        "output": "item,revenue"
      }
    ],
    "constraints": [
      "File name must be sales_out.csv",
      "Pass index=False",
      "Output must be exactly: item,revenue"
    ],
    "hints": [
      "df.to_csv(\"sales_out.csv\", index=False)",
      "print(f.read().splitlines()[0])"
    ],
    "starterCode": "# TODO: write the CSV, then print its header line\nimport pandas as pd\n\ndf = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\ndf.to_csv(\"sales_out.csv\", index=False)\n\nwith open(\"sales_out.csv\") as f:\n    header = f.read().splitlines()[0]\n\nprint(header)",
    "publicTests": [
      {
        "id": "m15-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "item,revenue",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p02-t2",
        "label": "the CSV file was written",
        "assertCode": "assert __import__(\"os\").path.exists(\"sales_out.csv\"), \"Expected sales_out.csv to exist\"",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p02-t3",
        "label": "the index column was excluded",
        "assertCode": "assert (open(\"sales_out.csv\").read().splitlines()[0]) == (\"item,revenue\"), \"Expected \" + repr(\"item,revenue\") + \", got \" + repr(open(\"sales_out.csv\").read().splitlines()[0])",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p02-t4",
        "label": "header plus two data rows",
        "assertCode": "assert (len(open(\"sales_out.csv\").read().splitlines())) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(open(\"sales_out.csv\").read().splitlines()))",
        "visibility": "public"
      }
    ],
    "approach": "Save a DataFrame to sales_out.csv without the index, then print the file's header line.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\ndf.to_csv(\"sales_out.csv\", index=False)\n\nwith open(\"sales_out.csv\") as f:\n    header = f.read().splitlines()[0]\n\nprint(header)"
  },
  {
    "id": "m15-t2-p03",
    "topicId": "m15-t2",
    "slug": "pd-read-csv-file",
    "title": "IO: Load a CSV From Disk",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Write a CSV with open(), load it with pd.read_csv, and print the total of its revenue column.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write the CSV to "
        },
        {
          "type": "code",
          "value": "revenue.csv"
        },
        {
          "type": "text",
          "value": ", load it with "
        },
        {
          "type": "code",
          "value": "pd.read_csv"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": ", then print the revenue total."
        }
      ],
      "editorPlaceholder": "# df = pd.read_csv(\"revenue.csv\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "This is the everyday pipeline: file on disk to DataFrame to number.",
          "read_csv infers the numeric type, so .sum() works right away."
        ]
      }
    },
    "examples": [
      {
        "output": "100"
      }
    ],
    "constraints": [
      "Read the file with pd.read_csv",
      "Do not build the DataFrame by hand",
      "Output must be exactly: 100"
    ],
    "hints": [
      "df = pd.read_csv(\"revenue.csv\")",
      "print(int(df[\"revenue\"].sum()))"
    ],
    "starterCode": "# TODO: load the file and total the column\nimport pandas as pd\n\nwith open(\"revenue.csv\", \"w\") as f:\n    f.write(\"item,revenue\\npen,30\\nbook,70\\n\")\n\ndf = None\n",
    "solutionCode": "import pandas as pd\n\nwith open(\"revenue.csv\", \"w\") as f:\n    f.write(\"item,revenue\\npen,30\\nbook,70\\n\")\n\ndf = pd.read_csv(\"revenue.csv\")\nprint(int(df[\"revenue\"].sum()))",
    "publicTests": [
      {
        "id": "m15-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "100",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p03-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p03-t3",
        "label": "two rows loaded",
        "assertCode": "assert (df.shape) == ((2, 2)), \"Expected \" + repr((2, 2)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p03-t4",
        "label": "revenue total",
        "assertCode": "assert (int(df[\"revenue\"].sum())) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(df[\"revenue\"].sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Write a CSV with open(), load it with pd.read_csv, and print the total of its revenue column.\n\nReference solution:\nimport pandas as pd\n\nwith open(\"revenue.csv\", \"w\") as f:\n    f.write(\"item,revenue\\npen,30\\nbook,70\\n\")\n\ndf = pd.read_csv(\"revenue.csv\")\nprint(int(df[\"revenue\"].sum()))"
  },
  {
    "id": "m15-t2-p04",
    "topicId": "m15-t2",
    "slug": "pd-json-records",
    "title": "IO: JSON Records to DataFrame",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Parse a JSON array of records with json.loads and build a DataFrame from it, then print its columns.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Parse the JSON text with "
        },
        {
          "type": "code",
          "value": "json.loads"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "records"
        },
        {
          "type": "text",
          "value": ", build "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "pd.DataFrame(records)"
        },
        {
          "type": "text",
          "value": ", and print its columns."
        }
      ],
      "editorPlaceholder": "# records = json.loads(response)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "pd",
        "records",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A JSON array of objects becomes a list of dicts.",
          "pd.DataFrame(list_of_dicts) uses the dict keys as columns.",
          "This is the usual shape of an API response."
        ]
      }
    },
    "examples": [
      {
        "output": "['item', 'revenue']"
      }
    ],
    "constraints": [
      "Parse with json.loads first",
      "Build the frame with pd.DataFrame(records)",
      "Output must be exactly: ['item', 'revenue']"
    ],
    "hints": [
      "records = json.loads(response)",
      "df = pd.DataFrame(records)"
    ],
    "starterCode": "# TODO: build a DataFrame from the records\nimport json\nimport pandas as pd\n\nresponse = '[{\"item\": \"pen\", \"revenue\": 30}, {\"item\": \"book\", \"revenue\": 70}]'\nrecords = []\ndf = None\n",
    "solutionCode": "import json\nimport pandas as pd\n\nresponse = '[{\"item\": \"pen\", \"revenue\": 30}, {\"item\": \"book\", \"revenue\": 70}]'\nrecords = json.loads(response)\ndf = pd.DataFrame(records)\n\nprint(list(df.columns))",
    "publicTests": [
      {
        "id": "m15-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "['item', 'revenue']",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p04-t2",
        "label": "records has the right type",
        "assertCode": "assert \"records\" in globals(), \"Expected a variable named records\"\nassert isinstance(records, list), \"Expected records to be list, got \" + type(records).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p04-t3",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p04-t4",
        "label": "columns come from the keys",
        "assertCode": "assert (list(df.columns)) == ([\"item\", \"revenue\"]), \"Expected \" + repr([\"item\", \"revenue\"]) + \", got \" + repr(list(df.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p04-t5",
        "label": "both records loaded",
        "assertCode": "assert (df.shape) == ((2, 2)), \"Expected \" + repr((2, 2)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Parse a JSON array of records with json.loads and build a DataFrame from it, then print its columns.\n\nReference solution:\nimport json\nimport pandas as pd\n\nresponse = '[{\"item\": \"pen\", \"revenue\": 30}, {\"item\": \"book\", \"revenue\": 70}]'\nrecords = json.loads(response)\ndf = pd.DataFrame(records)\n\nprint(list(df.columns))"
  },
  {
    "id": "m15-t2-p05",
    "topicId": "m15-t2",
    "slug": "pd-to-json-file",
    "title": "IO: Export to JSON",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Export a DataFrame to JSON records, load the file back with json.load, and print the first item.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "sales.json"
        },
        {
          "type": "text",
          "value": " using "
        },
        {
          "type": "code",
          "value": "orient=\"records\""
        },
        {
          "type": "text",
          "value": ", read it back with "
        },
        {
          "type": "code",
          "value": "json.load"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "records"
        },
        {
          "type": "text",
          "value": ", and print the first item's name."
        }
      ],
      "editorPlaceholder": "# df.to_json(\"sales.json\", orient=\"records\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "pd",
        "records"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "orient=\"records\" produces a list of objects — the friendliest shape for APIs.",
          "Loading it back proves the export is valid JSON."
        ]
      }
    },
    "examples": [
      {
        "output": "pen"
      }
    ],
    "constraints": [
      "Export with orient=\"records\"",
      "Read the file back with json.load",
      "Output must be exactly: pen"
    ],
    "hints": [
      "df.to_json(\"sales.json\", orient=\"records\")",
      "records = json.load(f)"
    ],
    "starterCode": "# TODO: export to JSON, then read it back\nimport json\nimport pandas as pd\n\ndf = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\nrecords = []\n",
    "solutionCode": "import json\nimport pandas as pd\n\ndf = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\ndf.to_json(\"sales.json\", orient=\"records\")\n\nwith open(\"sales.json\") as f:\n    records = json.load(f)\n\nprint(records[0][\"item\"])",
    "publicTests": [
      {
        "id": "m15-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "pen",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p05-t2",
        "label": "records has the right type",
        "assertCode": "assert \"records\" in globals(), \"Expected a variable named records\"\nassert isinstance(records, list), \"Expected records to be list, got \" + type(records).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p05-t3",
        "label": "both records exported",
        "assertCode": "assert (len(records)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(records))",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p05-t4",
        "label": "first record is the pen",
        "assertCode": "assert (records[0][\"item\"]) == (\"pen\"), \"Expected \" + repr(\"pen\") + \", got \" + repr(records[0][\"item\"])",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p05-t5",
        "label": "revenue survived the export",
        "assertCode": "assert (records[1][\"revenue\"]) == (70), \"Expected \" + repr(70) + \", got \" + repr(records[1][\"revenue\"])",
        "visibility": "public"
      }
    ],
    "approach": "Export a DataFrame to JSON records, load the file back with json.load, and print the first item.\n\nReference solution:\nimport json\nimport pandas as pd\n\ndf = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\ndf.to_json(\"sales.json\", orient=\"records\")\n\nwith open(\"sales.json\") as f:\n    records = json.load(f)\n\nprint(records[0][\"item\"])"
  },
  {
    "id": "m15-t2-p06",
    "topicId": "m15-t2",
    "slug": "pd-write-selected-columns",
    "title": "IO: Export Only Some Columns",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Write just the item and revenue columns to a CSV and print the header line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Select "
        },
        {
          "type": "code",
          "value": "[\"item\", \"revenue\"]"
        },
        {
          "type": "text",
          "value": " from "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": ", write it to "
        },
        {
          "type": "code",
          "value": "subset.csv"
        },
        {
          "type": "text",
          "value": " without the index, and print the header line."
        }
      ],
      "editorPlaceholder": "# subset = df[[\"item\", \"revenue\"]]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "df[[\"a\", \"b\"]] with a list of names selects several columns.",
          "The result is a smaller DataFrame you can write straight out."
        ]
      }
    },
    "examples": [
      {
        "output": "item,revenue"
      }
    ],
    "constraints": [
      "Select the columns with a list of names",
      "Write to subset.csv with index=False",
      "Output must be exactly: item,revenue"
    ],
    "hints": [
      "subset = df[[\"item\", \"revenue\"]]",
      "subset.to_csv(\"subset.csv\", index=False)"
    ],
    "starterCode": "# TODO: export only two columns\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nsubset = df[[\"item\", \"revenue\"]]\nsubset.to_csv(\"subset.csv\", index=False)\n\nwith open(\"subset.csv\") as f:\n    print(f.read().splitlines()[0])",
    "publicTests": [
      {
        "id": "m15-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "item,revenue",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p06-t2",
        "label": "only two columns were written",
        "assertCode": "assert (open(\"subset.csv\").read().splitlines()[0]) == (\"item,revenue\"), \"Expected \" + repr(\"item,revenue\") + \", got \" + repr(open(\"subset.csv\").read().splitlines()[0])",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p06-t3",
        "label": "all three rows were written",
        "assertCode": "assert (len(open(\"subset.csv\").read().splitlines())) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(open(\"subset.csv\").read().splitlines()))",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p06-t4",
        "label": "the original frame still has 3 columns",
        "assertCode": "assert (df.shape) == ((3, 3)), \"Expected \" + repr((3, 3)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Write just the item and revenue columns to a CSV and print the header line.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nsubset = df[[\"item\", \"revenue\"]]\nsubset.to_csv(\"subset.csv\", index=False)\n\nwith open(\"subset.csv\") as f:\n    print(f.read().splitlines()[0])"
  },
  {
    "id": "m15-t2-p07",
    "topicId": "m15-t2",
    "slug": "pd-csv-roundtrip",
    "title": "IO: Round-Trip a DataFrame",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Write a DataFrame to CSV, read it back into a new variable, and print the reloaded shape and revenue total.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "roundtrip.csv"
        },
        {
          "type": "text",
          "value": ", read it back as "
        },
        {
          "type": "code",
          "value": "reloaded"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "reloaded.shape"
        },
        {
          "type": "text",
          "value": " and the revenue total."
        }
      ],
      "editorPlaceholder": "# df.to_csv(\"roundtrip.csv\", index=False)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "reloaded"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A round trip is how you check an export really preserved the data.",
          "index=False on the way out keeps the shape identical on the way back.",
          "Print the shape first, then the total."
        ]
      }
    },
    "examples": [
      {
        "output": "(3, 3)\n140"
      }
    ],
    "constraints": [
      "Use index=False when writing",
      "Reload into a variable named reloaded",
      "Print the shape, then the total"
    ],
    "hints": [
      "df.to_csv(\"roundtrip.csv\", index=False)",
      "reloaded = pd.read_csv(\"roundtrip.csv\")"
    ],
    "starterCode": "# TODO: write, reload, and verify\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nreloaded = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndf.to_csv(\"roundtrip.csv\", index=False)\nreloaded = pd.read_csv(\"roundtrip.csv\")\n\nprint(reloaded.shape)\nprint(int(reloaded[\"revenue\"].sum()))",
    "publicTests": [
      {
        "id": "m15-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "(3, 3)\n140",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p07-t2",
        "label": "reloaded is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"reloaded\" in globals(), \"Expected a variable named reloaded\"\nassert isinstance(reloaded, _pd.DataFrame), \"Expected reloaded to be a DataFrame, got \" + type(reloaded).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p07-t3",
        "label": "shape survived the round trip",
        "assertCode": "assert (reloaded.shape) == (df.shape), \"Expected \" + repr(df.shape) + \", got \" + repr(reloaded.shape)",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p07-t4",
        "label": "columns survived too",
        "assertCode": "assert (list(reloaded.columns)) == (list(df.columns)), \"Expected \" + repr(list(df.columns)) + \", got \" + repr(list(reloaded.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t2-p07-t5",
        "label": "revenue total matches",
        "assertCode": "assert (int(reloaded[\"revenue\"].sum())) == (140), \"Expected \" + repr(140) + \", got \" + repr(int(reloaded[\"revenue\"].sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Write a DataFrame to CSV, read it back into a new variable, and print the reloaded shape and revenue total.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndf.to_csv(\"roundtrip.csv\", index=False)\nreloaded = pd.read_csv(\"roundtrip.csv\")\n\nprint(reloaded.shape)\nprint(int(reloaded[\"revenue\"].sum()))"
  },
  {
    "id": "m15-t3-p01",
    "topicId": "m15-t3",
    "slug": "pd-select-column",
    "title": "Select: One Column",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Select the region column and print its values as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "df[\"region\"].tolist()"
        },
        {
          "type": "text",
          "value": " — square brackets with a column name give you that column as a Series."
        }
      ],
      "editorPlaceholder": "# print(df[\"region\"].tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "df[\"region\"] returns a Series.",
          ".tolist() prints the values without the index."
        ]
      }
    },
    "examples": [
      {
        "output": "['South', 'North', 'South']"
      }
    ],
    "constraints": [
      "Select by column name",
      "Print with .tolist()"
    ],
    "hints": [
      "print(df[\"region\"].tolist())"
    ],
    "starterCode": "# TODO: print the region column\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(df[\"region\"].tolist())",
    "publicTests": [
      {
        "id": "m15-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "['South', 'North', 'South']",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p01-t2",
        "label": "region values",
        "assertCode": "assert (df[\"region\"].tolist()) == ([\"South\", \"North\", \"South\"]), \"Expected \" + repr([\"South\", \"North\", \"South\"]) + \", got \" + repr(df[\"region\"].tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p01-t3",
        "label": "selecting a column gives a Series",
        "assertCode": "assert type(df[\"region\"]).__name__ == \"Series\", \"Expected df[\\\"region\\\"] to be a Series\"",
        "visibility": "public"
      }
    ],
    "approach": "Select the region column and print its values as a list.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(df[\"region\"].tolist())"
  },
  {
    "id": "m15-t3-p02",
    "topicId": "m15-t3",
    "slug": "pd-loc-cell",
    "title": "Select: One Cell with loc",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Use df.loc to read the revenue of row 1 and print it as an int.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(df.loc[1, \"revenue\"])"
        },
        {
          "type": "text",
          "value": " — "
        },
        {
          "type": "code",
          "value": "loc"
        },
        {
          "type": "text",
          "value": " takes the row label first, then the column name."
        }
      ],
      "editorPlaceholder": "# print(int(df.loc[1, \"revenue\"]))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "loc works with labels: row index label, then column name.",
          "The default index labels are 0, 1, 2 …"
        ]
      }
    },
    "examples": [
      {
        "output": "40"
      }
    ],
    "constraints": [
      "Use df.loc[row, column]",
      "Output must be exactly: 40"
    ],
    "hints": [
      "print(int(df.loc[1, \"revenue\"]))"
    ],
    "starterCode": "# TODO: read row 1's revenue\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(int(df.loc[1, \"revenue\"]))",
    "publicTests": [
      {
        "id": "m15-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "40",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p02-t2",
        "label": "row 1 revenue",
        "assertCode": "assert (int(df.loc[1, \"revenue\"])) == (40), \"Expected \" + repr(40) + \", got \" + repr(int(df.loc[1, \"revenue\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p02-t3",
        "label": "row 1 is the book",
        "assertCode": "assert (df.loc[1, \"item\"]) == (\"book\"), \"Expected \" + repr(\"book\") + \", got \" + repr(df.loc[1, \"item\"])",
        "visibility": "public"
      }
    ],
    "approach": "Use df.loc to read the revenue of row 1 and print it as an int.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(int(df.loc[1, \"revenue\"]))"
  },
  {
    "id": "m15-t3-p03",
    "topicId": "m15-t3",
    "slug": "pd-iloc-row",
    "title": "Select: By Position with iloc",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Use df.iloc to read the first row by position and print its item name.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "df.iloc[0][\"item\"]"
        },
        {
          "type": "text",
          "value": " — "
        },
        {
          "type": "code",
          "value": "iloc"
        },
        {
          "type": "text",
          "value": " is positional, so it works even when the index labels are not numbers."
        }
      ],
      "editorPlaceholder": "# print(df.iloc[0][\"item\"])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "iloc[0] is always the first row, whatever the index says.",
          "loc uses labels; iloc uses positions."
        ]
      }
    },
    "examples": [
      {
        "output": "pen"
      }
    ],
    "constraints": [
      "Use df.iloc",
      "Output must be exactly: pen"
    ],
    "hints": [
      "print(df.iloc[0][\"item\"])"
    ],
    "starterCode": "# TODO: read the first row by position\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(df.iloc[0][\"item\"])",
    "publicTests": [
      {
        "id": "m15-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "pen",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p03-t2",
        "label": "first row item",
        "assertCode": "assert (df.iloc[0][\"item\"]) == (\"pen\"), \"Expected \" + repr(\"pen\") + \", got \" + repr(df.iloc[0][\"item\"])",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p03-t3",
        "label": "last row item",
        "assertCode": "assert (df.iloc[-1][\"item\"]) == (\"bag\"), \"Expected \" + repr(\"bag\") + \", got \" + repr(df.iloc[-1][\"item\"])",
        "visibility": "public"
      }
    ],
    "approach": "Use df.iloc to read the first row by position and print its item name.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nprint(df.iloc[0][\"item\"])"
  },
  {
    "id": "m15-t3-p04",
    "topicId": "m15-t3",
    "slug": "pd-filter-rows",
    "title": "Select: Filter Rows by Value",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define high_items(frame) that returns item names where revenue is above 35. Print high_items(df).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define high_items(frame) that returns item names where revenue is above 35. Print high_items(df)."
        }
      ],
      "editorPlaceholder": "# high = df[df[\"revenue\"] > 35]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "df[\"revenue\"] > 35 builds a True/False mask.",
          "Passing the mask back into df keeps only the True rows.",
          "This is boolean indexing, the same idea as in NumPy."
        ]
      },
      "requiresFunction": "high_items"
    },
    "examples": [
      {
        "output": "['book', 'bag']"
      }
    ],
    "constraints": [
      "Define high_items(frame)",
      "Filter with revenue > 35",
      "Output must be exactly: ['book', 'bag']"
    ],
    "hints": [
      "return frame[frame[\"revenue\"] > 35][\"item\"].tolist()"
    ],
    "starterCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef high_items(frame):\n    pass\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef high_items(frame):\n    return frame[frame[\"revenue\"] > 35][\"item\"].tolist()\n\nprint(high_items(df))",
    "publicTests": [
      {
        "id": "m15-t3-p04-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "['book', 'bag']"
      },
      {
        "id": "m15-t3-p04-t2",
        "visibility": "public",
        "label": "sample frame",
        "assertCode": "assert high_items(df) == [\"book\", \"bag\"], \"Expected ['book', 'bag'] for the sample frame\""
      },
      {
        "id": "m15-t3-p04-t3",
        "visibility": "public",
        "label": "another frame",
        "assertCode": "other = pd.DataFrame({\"item\": [\"a\", \"b\"], \"revenue\": [10, 50]})\nassert high_items(other) == [\"b\"], \"Filter the argument, do not hardcode the sample items\""
      }
    ],
    "approach": "Define high_items(frame) that returns item names where revenue is above 35. Print high_items(df).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef high_items(frame):\n    return frame[frame[\"revenue\"] > 35][\"item\"].tolist()\n\nprint(high_items(df))"
  },
  {
    "id": "m15-t3-p05",
    "topicId": "m15-t3",
    "slug": "pd-isin",
    "title": "Select: Match a List of Values",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Define south_count(frame) that uses .isin([\"South\"]) and returns how many rows match. Print south_count(df).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define south_count(frame) that uses .isin([\"South\"]) and returns how many rows match. Print south_count(df)."
        }
      ],
      "editorPlaceholder": "# south = df[df[\"region\"].isin([\"South\"])]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".isin(list) tests membership for every row at once.",
          "It is much cleaner than chaining several == checks with |.",
          "len() of the filtered frame gives the count."
        ]
      },
      "requiresFunction": "south_count"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Define south_count(frame)",
      "Use .isin([\"South\"])",
      "Output must be exactly: 2"
    ],
    "hints": [
      "return len(frame[frame[\"region\"].isin([\"South\"])])"
    ],
    "starterCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef south_count(frame):\n    pass\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef south_count(frame):\n    return len(frame[frame[\"region\"].isin([\"South\"])])\n\nprint(south_count(df))",
    "publicTests": [
      {
        "id": "m15-t3-p05-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "2"
      },
      {
        "id": "m15-t3-p05-t2",
        "visibility": "public",
        "label": "sample frame",
        "assertCode": "assert south_count(df) == 2, \"Expected 2 South rows in the sample\""
      },
      {
        "id": "m15-t3-p05-t3",
        "visibility": "public",
        "label": "another frame",
        "assertCode": "other = pd.DataFrame({\"region\": [\"East\", \"South\"]})\nassert south_count(other) == 1, \"Count the argument, do not hardcode 2\""
      }
    ],
    "approach": "Define south_count(frame) that uses .isin([\"South\"]) and returns how many rows match. Print south_count(df).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef south_count(frame):\n    return len(frame[frame[\"region\"].isin([\"South\"])])\n\nprint(south_count(df))"
  },
  {
    "id": "m15-t3-p06",
    "topicId": "m15-t3",
    "slug": "pd-multi-condition",
    "title": "Select: Two Conditions at Once",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Define south_above(frame, floor) that keeps South rows with revenue above floor using &. Print south_above(df, 25).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define south_above(frame, floor) that keeps South rows with revenue above floor using &. Print south_above(df, 25)."
        }
      ],
      "editorPlaceholder": "# matches = df[( ... ) & ( ... )]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Use & for and, | for or — the words and/or do not work on Series.",
          "Wrap each condition in its own brackets, or precedence will bite you."
        ]
      },
      "requiresFunction": "south_above"
    },
    "examples": [
      {
        "output": "['pen', 'bag']"
      }
    ],
    "constraints": [
      "Define south_above(frame, floor)",
      "Use & with each condition in brackets",
      "Output must be exactly: ['pen', 'bag']"
    ],
    "hints": [
      "matches = frame[(frame[\"revenue\"] > floor) & (frame[\"region\"] == \"South\")]"
    ],
    "starterCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef south_above(frame, floor):\n    pass\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef south_above(frame, floor):\n    matches = frame[(frame[\"revenue\"] > floor) & (frame[\"region\"] == \"South\")]\n    return matches[\"item\"].tolist()\n\nprint(south_above(df, 25))",
    "publicTests": [
      {
        "id": "m15-t3-p06-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "['pen', 'bag']"
      },
      {
        "id": "m15-t3-p06-t2",
        "visibility": "public",
        "label": "sample frame",
        "assertCode": "assert south_above(df, 25) == [\"pen\", \"bag\"], \"Expected ['pen', 'bag'] for floor 25\""
      },
      {
        "id": "m15-t3-p06-t3",
        "visibility": "public",
        "label": "a higher floor",
        "assertCode": "assert south_above(df, 50) == [\"bag\"], \"Only bag is South and above 50\""
      }
    ],
    "approach": "Define south_above(frame, floor) that keeps South rows with revenue above floor using &. Print south_above(df, 25).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef south_above(frame, floor):\n    matches = frame[(frame[\"revenue\"] > floor) & (frame[\"region\"] == \"South\")]\n    return matches[\"item\"].tolist()\n\nprint(south_above(df, 25))"
  },
  {
    "id": "m15-t3-p07",
    "topicId": "m15-t3",
    "slug": "pd-loc-rows-columns",
    "title": "Select: Rows and Columns Together",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Use df.loc with a condition and a column list to print item and revenue for rows of 40 or more.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "df.loc[df[\"revenue\"] >= 40, [\"item\", \"revenue\"]]"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": ".values.tolist()"
        },
        {
          "type": "text",
          "value": " to see the selected block as nested lists."
        }
      ],
      "editorPlaceholder": "# block = df.loc[mask, [columns]]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "block"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "loc takes a row selector and a column selector at the same time.",
          "The row selector can be a boolean mask.",
          ".values.tolist() turns the block into plain nested lists."
        ]
      }
    },
    "examples": [
      {
        "output": "[['book', 40], ['bag', 70]]"
      }
    ],
    "constraints": [
      "Do it in a single df.loc call",
      "Keep only the item and revenue columns",
      "Output must be exactly: [['book', 40], ['bag', 70]]"
    ],
    "hints": [
      "block = df.loc[df[\"revenue\"] >= 40, [\"item\", \"revenue\"]]",
      "print(block.values.tolist())"
    ],
    "starterCode": "# TODO: select rows and columns in one call\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nblock = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nblock = df.loc[df[\"revenue\"] >= 40, [\"item\", \"revenue\"]]\nprint(block.values.tolist())",
    "publicTests": [
      {
        "id": "m15-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[['book', 40], ['bag', 70]]",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p07-t2",
        "label": "only the two big rows, two columns",
        "assertCode": "assert (block.values.tolist()) == ([[\"book\", 40], [\"bag\", 70]]), \"Expected \" + repr([[\"book\", 40], [\"bag\", 70]]) + \", got \" + repr(block.values.tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p07-t3",
        "label": "the region column was dropped",
        "assertCode": "assert (list(block.columns)) == ([\"item\", \"revenue\"]), \"Expected \" + repr([\"item\", \"revenue\"]) + \", got \" + repr(list(block.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t3-p07-t4",
        "label": "the original frame is unchanged",
        "assertCode": "assert (df.shape) == ((3, 3)), \"Expected \" + repr((3, 3)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Use df.loc with a condition and a column list to print item and revenue for rows of 40 or more.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nblock = df.loc[df[\"revenue\"] >= 40, [\"item\", \"revenue\"]]\nprint(block.values.tolist())"
  },
  {
    "id": "m15-t4-p01",
    "topicId": "m15-t4",
    "slug": "pd-count-missing",
    "title": "Cleaning: Count Missing Values",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Count how many revenue values are missing using isna().sum() and print the count.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(df[\"revenue\"].isna().sum())"
        },
        {
          "type": "text",
          "value": " — the first question to ask about any new column."
        }
      ],
      "editorPlaceholder": "# print(int(df[\"revenue\"].isna().sum()))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "isna() returns True for each missing value.",
          "Summing booleans counts the Trues.",
          "None in a numeric column becomes NaN when pandas loads it."
        ]
      }
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Use isna().sum()",
      "Do not modify the data",
      "Output must be exactly: 1"
    ],
    "hints": [
      "print(int(df[\"revenue\"].isna().sum()))"
    ],
    "starterCode": "# TODO: count the missing revenue values\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(int(df[\"revenue\"].isna().sum()))",
    "publicTests": [
      {
        "id": "m15-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p01-t2",
        "label": "df is a DataFrame",
        "assertCode": "import pandas as _pd\nassert \"df\" in globals(), \"Expected a variable named df\"\nassert isinstance(df, _pd.DataFrame), \"Expected df to be a DataFrame, got \" + type(df).__name__",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p01-t3",
        "label": "one value is missing",
        "assertCode": "assert (int(df[\"revenue\"].isna().sum())) == (1), \"Expected \" + repr(1) + \", got \" + repr(int(df[\"revenue\"].isna().sum()))",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p01-t4",
        "label": "the missing value was not filled in",
        "assertCode": "assert df[\"revenue\"].isna().any(), \"Do not fill the gap yet — this task only counts it\"",
        "visibility": "public"
      }
    ],
    "approach": "Count how many revenue values are missing using isna().sum() and print the count.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(int(df[\"revenue\"].isna().sum()))"
  },
  {
    "id": "m15-t4-p02",
    "topicId": "m15-t4",
    "slug": "pd-fillna",
    "title": "Cleaning: Fill the Gaps",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Replace missing revenue with 0 using fillna and print the filled values as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "df[\"revenue\"].fillna(0).tolist()"
        },
        {
          "type": "text",
          "value": ". The values stay floats because the column held a NaN."
        }
      ],
      "editorPlaceholder": "# print(df[\"revenue\"].fillna(0).tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "fillna(value) returns a new Series — the original is untouched.",
          "Filling with 0 is right for counts, but a mean may suit measurements better."
        ]
      }
    },
    "examples": [
      {
        "output": "[30.0, 0.0, 70.0]"
      }
    ],
    "constraints": [
      "Use fillna(0)",
      "Output must be exactly: [30.0, 0.0, 70.0]"
    ],
    "hints": [
      "print(df[\"revenue\"].fillna(0).tolist())"
    ],
    "starterCode": "# TODO: fill the missing revenue with 0\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(df[\"revenue\"].fillna(0).tolist())",
    "publicTests": [
      {
        "id": "m15-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[30.0, 0.0, 70.0]",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p02-t2",
        "label": "gap filled with 0",
        "assertCode": "assert (df[\"revenue\"].fillna(0).tolist()) == ([30.0, 0.0, 70.0]), \"Expected \" + repr([30.0, 0.0, 70.0]) + \", got \" + repr(df[\"revenue\"].fillna(0).tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p02-t3",
        "label": "no missing values remain after filling",
        "assertCode": "assert (int(df[\"revenue\"].fillna(0).isna().sum())) == (0), \"Expected \" + repr(0) + \", got \" + repr(int(df[\"revenue\"].fillna(0).isna().sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Replace missing revenue with 0 using fillna and print the filled values as a list.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(df[\"revenue\"].fillna(0).tolist())"
  },
  {
    "id": "m15-t4-p03",
    "topicId": "m15-t4",
    "slug": "pd-dropna",
    "title": "Cleaning: Drop Incomplete Rows",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Drop rows with any missing value using dropna and print the resulting shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "df.dropna().shape"
        },
        {
          "type": "text",
          "value": " — one row goes away, so 3 rows become 2."
        }
      ],
      "editorPlaceholder": "# print(df.dropna().shape)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "dropna() removes any row containing a missing value.",
          "Dropping loses data, so prefer filling when the column is important."
        ]
      }
    },
    "examples": [
      {
        "output": "(2, 3)"
      }
    ],
    "constraints": [
      "Use dropna()",
      "Output must be exactly: (2, 3)"
    ],
    "hints": [
      "print(df.dropna().shape)"
    ],
    "starterCode": "# TODO: drop the incomplete row\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(df.dropna().shape)",
    "publicTests": [
      {
        "id": "m15-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "(2, 3)",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p03-t2",
        "label": "two complete rows remain",
        "assertCode": "assert (df.dropna().shape) == ((2, 3)), \"Expected \" + repr((2, 3)) + \", got \" + repr(df.dropna().shape)",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p03-t3",
        "label": "the original frame still has 3 rows",
        "assertCode": "assert (len(df)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(df))",
        "visibility": "public"
      }
    ],
    "approach": "Drop rows with any missing value using dropna and print the resulting shape.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(df.dropna().shape)"
  },
  {
    "id": "m15-t4-p04",
    "topicId": "m15-t4",
    "slug": "pd-strip-strings",
    "title": "Cleaning: Trim Whitespace",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use .str.strip() to remove stray spaces from the region column and print the cleaned values.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "The region values have stray spaces. Print "
        },
        {
          "type": "code",
          "value": "df[\"region\"].str.strip().tolist()"
        },
        {
          "type": "text",
          "value": " to clean them."
        }
      ],
      "editorPlaceholder": "# print(df[\"region\"].str.strip().tolist())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".str gives you Python string methods across the whole column.",
          "Untrimmed values are a classic bug: \" South\" and \"South\" group separately."
        ]
      }
    },
    "examples": [
      {
        "output": "['South', 'North', 'South']"
      }
    ],
    "constraints": [
      "Use .str.strip()",
      "Do not rebuild the column by hand",
      "Output must be exactly: ['South', 'North', 'South']"
    ],
    "hints": [
      "print(df[\"region\"].str.strip().tolist())"
    ],
    "starterCode": "# TODO: trim the whitespace\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(df[\"region\"].str.strip().tolist())",
    "publicTests": [
      {
        "id": "m15-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "['South', 'North', 'South']",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p04-t2",
        "label": "values are trimmed",
        "assertCode": "assert (df[\"region\"].str.strip().tolist()) == ([\"South\", \"North\", \"South\"]), \"Expected \" + repr([\"South\", \"North\", \"South\"]) + \", got \" + repr(df[\"region\"].str.strip().tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p04-t3",
        "label": "the raw column really had spaces",
        "assertCode": "assert df[\"region\"].tolist() != [\"South\", \"North\", \"South\"], \"Do not retype the values — clean them with .str.strip()\"",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p04-t4",
        "label": "trimming makes the two South rows match",
        "assertCode": "assert (df[\"region\"].str.strip().tolist().count(\"South\")) == (2), \"Expected \" + repr(2) + \", got \" + repr(df[\"region\"].str.strip().tolist().count(\"South\"))",
        "visibility": "public"
      }
    ],
    "approach": "Use .str.strip() to remove stray spaces from the region column and print the cleaned values.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nprint(df[\"region\"].str.strip().tolist())"
  },
  {
    "id": "m15-t4-p05",
    "topicId": "m15-t4",
    "slug": "pd-drop-duplicates",
    "title": "Cleaning: Remove Duplicate Rows",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Drop duplicate rows with drop_duplicates and print how many unique rows remain.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "The pen row appears twice. Print "
        },
        {
          "type": "code",
          "value": "len(df.drop_duplicates())"
        },
        {
          "type": "text",
          "value": " to see how many unique rows are left."
        }
      ],
      "editorPlaceholder": "# print(len(df.drop_duplicates()))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "drop_duplicates() keeps the first occurrence of each identical row.",
          "Duplicates usually come from re-running an import — they silently inflate totals."
        ]
      }
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Use drop_duplicates()",
      "Output must be exactly: 2"
    ],
    "hints": [
      "print(len(df.drop_duplicates()))"
    ],
    "starterCode": "# TODO: drop the duplicate row\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"pen\", \"bag\"],\n    \"revenue\": [30, 30, 70],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"pen\", \"bag\"],\n    \"revenue\": [30, 30, 70],\n})\n\nprint(len(df.drop_duplicates()))",
    "publicTests": [
      {
        "id": "m15-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p05-t2",
        "label": "two unique rows",
        "assertCode": "assert (len(df.drop_duplicates())) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(df.drop_duplicates()))",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p05-t3",
        "label": "the original still has 3 rows",
        "assertCode": "assert (len(df)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(df))",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p05-t4",
        "label": "the duplicate inflated the total",
        "assertCode": "assert (int(df[\"revenue\"].sum()) - int(df.drop_duplicates()[\"revenue\"].sum())) == (30), \"Expected \" + repr(30) + \", got \" + repr(int(df[\"revenue\"].sum()) - int(df.drop_duplicates()[\"revenue\"].sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Drop duplicate rows with drop_duplicates and print how many unique rows remain.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"pen\", \"bag\"],\n    \"revenue\": [30, 30, 70],\n})\n\nprint(len(df.drop_duplicates()))"
  },
  {
    "id": "m15-t4-p06",
    "topicId": "m15-t4",
    "slug": "pd-astype-int",
    "title": "Cleaning: Fix the Column Type",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Fill the missing revenue then convert the column to int with astype and print the values.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Chain "
        },
        {
          "type": "code",
          "value": "fillna(0)"
        },
        {
          "type": "text",
          "value": " then "
        },
        {
          "type": "code",
          "value": "astype(int)"
        },
        {
          "type": "text",
          "value": " on the revenue column and print the list. You must fill first — "
        },
        {
          "type": "code",
          "value": "NaN"
        },
        {
          "type": "text",
          "value": " cannot become an int."
        }
      ],
      "editorPlaceholder": "# revenue = df[\"revenue\"].fillna(0).astype(int)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "revenue"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A single NaN forces the whole column to float.",
          "Fill the gaps, then astype(int) to get clean whole numbers.",
          "Converting before filling raises an error."
        ]
      }
    },
    "examples": [
      {
        "output": "[30, 0, 70]"
      }
    ],
    "constraints": [
      "fillna(0) before astype(int)",
      "Store the result in revenue",
      "Output must be exactly: [30, 0, 70]"
    ],
    "hints": [
      "revenue = df[\"revenue\"].fillna(0).astype(int)",
      "print(revenue.tolist())"
    ],
    "starterCode": "# TODO: fill, then convert to int\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nrevenue = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nrevenue = df[\"revenue\"].fillna(0).astype(int)\nprint(revenue.tolist())",
    "publicTests": [
      {
        "id": "m15-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[30, 0, 70]",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p06-t2",
        "label": "values are whole numbers",
        "assertCode": "assert (revenue.tolist()) == ([30, 0, 70]), \"Expected \" + repr([30, 0, 70]) + \", got \" + repr(revenue.tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p06-t3",
        "label": "the column is an integer type",
        "assertCode": "assert revenue.dtype.kind == \"i\", \"Expected an integer dtype after astype(int)\"",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p06-t4",
        "label": "the total is unchanged",
        "assertCode": "assert (int(revenue.sum())) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(revenue.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Fill the missing revenue then convert the column to int with astype and print the values.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\nrevenue = df[\"revenue\"].fillna(0).astype(int)\nprint(revenue.tolist())"
  },
  {
    "id": "m15-t4-p07",
    "topicId": "m15-t4",
    "slug": "pd-clean-pipeline",
    "title": "Cleaning: A Full Cleaning Pass",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Trim the region text, fill missing revenue, convert it to int, then print the cleaned regions and the total.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Clean both columns in place: trim "
        },
        {
          "type": "code",
          "value": "region"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": ".str.strip()"
        },
        {
          "type": "text",
          "value": " and fix "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "fillna(0).astype(int)"
        },
        {
          "type": "text",
          "value": ". Then print the region list and the revenue total."
        }
      ],
      "editorPlaceholder": "# df[\"region\"] = df[\"region\"].str.strip()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Assign back to df[\"region\"] and df[\"revenue\"] to keep the changes.",
          "Clean text before grouping and fix types before doing maths.",
          "Print the regions first, then the total."
        ]
      }
    },
    "examples": [
      {
        "output": "['South', 'North', 'South']\n100"
      }
    ],
    "constraints": [
      "Assign the cleaned values back into df",
      "Print the region list, then the total"
    ],
    "hints": [
      "df[\"region\"] = df[\"region\"].str.strip()",
      "df[\"revenue\"] = df[\"revenue\"].fillna(0).astype(int)"
    ],
    "starterCode": "# TODO: clean both columns, then report\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\ndf[\"region\"] = df[\"region\"].str.strip()\ndf[\"revenue\"] = df[\"revenue\"].fillna(0).astype(int)\n\nprint(df[\"region\"].tolist())\nprint(int(df[\"revenue\"].sum()))",
    "publicTests": [
      {
        "id": "m15-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "['South', 'North', 'South']\n100",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p07-t2",
        "label": "regions were trimmed in place",
        "assertCode": "assert (df[\"region\"].tolist()) == ([\"South\", \"North\", \"South\"]), \"Expected \" + repr([\"South\", \"North\", \"South\"]) + \", got \" + repr(df[\"region\"].tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p07-t3",
        "label": "revenue was filled and converted",
        "assertCode": "assert (df[\"revenue\"].tolist()) == ([30, 0, 70]), \"Expected \" + repr([30, 0, 70]) + \", got \" + repr(df[\"revenue\"].tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p07-t4",
        "label": "revenue is now an integer column",
        "assertCode": "assert df[\"revenue\"].dtype.kind == \"i\", \"Expected the revenue column to be integers after cleaning\"",
        "visibility": "public"
      },
      {
        "id": "m15-t4-p07-t5",
        "label": "total revenue",
        "assertCode": "assert (int(df[\"revenue\"].sum())) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(df[\"revenue\"].sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Trim the region text, fill missing revenue, convert it to int, then print the cleaned regions and the total.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\" South\", \"North \", \"South\"],\n    \"revenue\": [30.0, None, 70.0],\n})\n\ndf[\"region\"] = df[\"region\"].str.strip()\ndf[\"revenue\"] = df[\"revenue\"].fillna(0).astype(int)\n\nprint(df[\"region\"].tolist())\nprint(int(df[\"revenue\"].sum()))"
  },
  {
    "id": "m15-t5-p01",
    "topicId": "m15-t5",
    "slug": "pd-groupby-sum",
    "title": "GroupBy: Revenue per Region",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define region_totals(frame) that groups by region, sums revenue, and returns a dict of ints. Print region_totals(df).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define region_totals(frame) that groups by region, sums revenue, and returns a dict of ints. Print region_totals(df)."
        }
      ],
      "editorPlaceholder": "# totals = df.groupby(\"region\")[\"revenue\"].sum()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "groupby splits the rows, then the aggregation combines each group.",
          "Groups come back sorted by key, so North comes before South.",
          "int(v) keeps the printed dict free of NumPy types."
        ]
      },
      "requiresFunction": "region_totals"
    },
    "examples": [
      {
        "output": "{'North': 40, 'South': 100}"
      }
    ],
    "constraints": [
      "Define region_totals(frame)",
      "Use groupby",
      "Output must be exactly: {'North': 40, 'South': 100}"
    ],
    "hints": [
      "totals = frame.groupby(\"region\")[\"revenue\"].sum()"
    ],
    "starterCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef region_totals(frame):\n    pass\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef region_totals(frame):\n    totals = frame.groupby(\"region\")[\"revenue\"].sum()\n    return {k: int(v) for k, v in totals.items()}\n\nprint(region_totals(df))",
    "publicTests": [
      {
        "id": "m15-t5-p01-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "{'North': 40, 'South': 100}"
      },
      {
        "id": "m15-t5-p01-t2",
        "visibility": "public",
        "label": "sample frame",
        "assertCode": "assert region_totals(df) == {\"North\": 40, \"South\": 100}"
      },
      {
        "id": "m15-t5-p01-t3",
        "visibility": "public",
        "label": "another frame",
        "assertCode": "other = pd.DataFrame({\"region\": [\"East\", \"East\"], \"revenue\": [5, 7]})\nassert region_totals(other) == {\"East\": 12}, \"Group the argument, do not hardcode North/South\""
      }
    ],
    "approach": "Define region_totals(frame) that groups by region, sums revenue, and returns a dict of ints. Print region_totals(df).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ndef region_totals(frame):\n    totals = frame.groupby(\"region\")[\"revenue\"].sum()\n    return {k: int(v) for k, v in totals.items()}\n\nprint(region_totals(df))"
  },
  {
    "id": "m15-t5-p02",
    "topicId": "m15-t5",
    "slug": "pd-groupby-size",
    "title": "GroupBy: Rows per Region",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Count how many rows each region has using groupby().size() and print it as a dict.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "df.groupby(\"region\").size()"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "counts"
        },
        {
          "type": "text",
          "value": " and print it as a dict of ints."
        }
      ],
      "editorPlaceholder": "# counts = df.groupby(\"region\").size()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "counts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".size() counts rows per group — no column needed.",
          "It counts every row, including ones with missing values."
        ]
      }
    },
    "examples": [
      {
        "output": "{'North': 1, 'South': 2}"
      }
    ],
    "constraints": [
      "Use groupby().size()",
      "Output must be exactly: {'North': 1, 'South': 2}"
    ],
    "hints": [
      "counts = df.groupby(\"region\").size()"
    ],
    "starterCode": "# TODO: count rows per region\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ncounts = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ncounts = df.groupby(\"region\").size()\nprint({k: int(v) for k, v in counts.items()})",
    "publicTests": [
      {
        "id": "m15-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "{'North': 1, 'South': 2}",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p02-t2",
        "label": "South has 2 rows",
        "assertCode": "assert (int(counts[\"South\"])) == (2), \"Expected \" + repr(2) + \", got \" + repr(int(counts[\"South\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p02-t3",
        "label": "North has 1 row",
        "assertCode": "assert (int(counts[\"North\"])) == (1), \"Expected \" + repr(1) + \", got \" + repr(int(counts[\"North\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p02-t4",
        "label": "counts add up to the frame length",
        "assertCode": "assert (int(counts.sum())) == (3), \"Expected \" + repr(3) + \", got \" + repr(int(counts.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Count how many rows each region has using groupby().size() and print it as a dict.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\ncounts = df.groupby(\"region\").size()\nprint({k: int(v) for k, v in counts.items()})"
  },
  {
    "id": "m15-t5-p03",
    "topicId": "m15-t5",
    "slug": "pd-groupby-mean",
    "title": "GroupBy: Average per Region",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Group by region, average the revenue, and print the result rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".mean()"
        },
        {
          "type": "text",
          "value": " instead of "
        },
        {
          "type": "code",
          "value": ".sum()"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "{k: round(float(v), 2) for k, v in averages.items()}"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# averages = df.groupby(\"region\")[\"revenue\"].mean()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "averages"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Swapping the aggregation is the only change from summing.",
          "South averages 50.0 from 30 and 70; North has a single row."
        ]
      }
    },
    "examples": [
      {
        "output": "{'North': 40.0, 'South': 50.0}"
      }
    ],
    "constraints": [
      "Use .mean()",
      "Round to 2 decimals when printing",
      "Output must be exactly: {'North': 40.0, 'South': 50.0}"
    ],
    "hints": [
      "averages = df.groupby(\"region\")[\"revenue\"].mean()"
    ],
    "starterCode": "# TODO: average revenue per region\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\naverages = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\naverages = df.groupby(\"region\")[\"revenue\"].mean()\nprint({k: round(float(v), 2) for k, v in averages.items()})",
    "publicTests": [
      {
        "id": "m15-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "{'North': 40.0, 'South': 50.0}",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p03-t2",
        "label": "South average",
        "assertCode": "assert (round(float(averages[\"South\"]), 2)) == (50.0), \"Expected \" + repr(50.0) + \", got \" + repr(round(float(averages[\"South\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p03-t3",
        "label": "North average",
        "assertCode": "assert (round(float(averages[\"North\"]), 2)) == (40.0), \"Expected \" + repr(40.0) + \", got \" + repr(round(float(averages[\"North\"]), 2))",
        "visibility": "public"
      }
    ],
    "approach": "Group by region, average the revenue, and print the result rounded to two decimals.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\naverages = df.groupby(\"region\")[\"revenue\"].mean()\nprint({k: round(float(v), 2) for k, v in averages.items()})"
  },
  {
    "id": "m15-t5-p04",
    "topicId": "m15-t5",
    "slug": "pd-merge-on-key",
    "title": "Merge: Join Sales to the Catalogue",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Merge the sales and catalog frames on \"item\" and print the merged column names.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "pd.merge(sales, catalog, on=\"item\")"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "merged"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "list(merged.columns)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# merged = pd.merge(sales, catalog, on=\"item\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "merged"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "merge is a SQL join: matching rows are lined up on the key.",
          "The key column appears once; the other columns come along.",
          "The default is an inner join, so unmatched rows drop out."
        ]
      }
    },
    "examples": [
      {
        "output": "['item', 'revenue', 'category']"
      }
    ],
    "constraints": [
      "Merge on the \"item\" column",
      "Store the result in merged",
      "Output must be exactly: ['item', 'revenue', 'category']"
    ],
    "hints": [
      "merged = pd.merge(sales, catalog, on=\"item\")",
      "print(list(merged.columns))"
    ],
    "starterCode": "# TODO: join the two frames on item\nimport pandas as pd\n\nsales = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"revenue\": [30, 70, 20],\n})\ncatalog = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"category\": [\"stationery\", \"media\", \"stationery\"],\n})\n\nmerged = None\n",
    "solutionCode": "import pandas as pd\n\nsales = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"revenue\": [30, 70, 20],\n})\ncatalog = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"category\": [\"stationery\", \"media\", \"stationery\"],\n})\n\nmerged = pd.merge(sales, catalog, on=\"item\")\nprint(list(merged.columns))",
    "publicTests": [
      {
        "id": "m15-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "['item', 'revenue', 'category']",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p04-t2",
        "label": "columns from both frames",
        "assertCode": "assert (list(merged.columns)) == ([\"item\", \"revenue\", \"category\"]), \"Expected \" + repr([\"item\", \"revenue\", \"category\"]) + \", got \" + repr(list(merged.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p04-t3",
        "label": "all three items matched",
        "assertCode": "assert (len(merged)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(merged))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p04-t4",
        "label": "the pen row kept its category",
        "assertCode": "assert (merged.loc[merged[\"item\"] == \"pen\", \"category\"].iloc[0]) == (\"stationery\"), \"Expected \" + repr(\"stationery\") + \", got \" + repr(merged.loc[merged[\"item\"] == \"pen\", \"category\"].iloc[0])",
        "visibility": "public"
      }
    ],
    "approach": "Merge the sales and catalog frames on \"item\" and print the merged column names.\n\nReference solution:\nimport pandas as pd\n\nsales = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"revenue\": [30, 70, 20],\n})\ncatalog = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"category\": [\"stationery\", \"media\", \"stationery\"],\n})\n\nmerged = pd.merge(sales, catalog, on=\"item\")\nprint(list(merged.columns))"
  },
  {
    "id": "m15-t5-p05",
    "topicId": "m15-t5",
    "slug": "pd-merge-then-group",
    "title": "Merge: Group After Joining",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Merge sales with the catalogue, then group by category and print revenue totals as a dict.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Merge on "
        },
        {
          "type": "code",
          "value": "item"
        },
        {
          "type": "text",
          "value": ", then group by "
        },
        {
          "type": "code",
          "value": "category"
        },
        {
          "type": "text",
          "value": " and sum the revenue into "
        },
        {
          "type": "code",
          "value": "totals"
        },
        {
          "type": "text",
          "value": ". Print it as a dict of ints."
        }
      ],
      "editorPlaceholder": "# merged = pd.merge(...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "totals"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Joining first gives you the column you want to group by.",
          "Merge then group is the backbone of most reporting queries.",
          "stationery combines the pen (30) and pencil (20)."
        ]
      }
    },
    "examples": [
      {
        "output": "{'media': 70, 'stationery': 50}"
      }
    ],
    "constraints": [
      "Merge before grouping",
      "Group by category",
      "Output must be exactly: {'media': 70, 'stationery': 50}"
    ],
    "hints": [
      "merged = pd.merge(sales, catalog, on=\"item\")",
      "totals = merged.groupby(\"category\")[\"revenue\"].sum()"
    ],
    "starterCode": "# TODO: merge, then total by category\nimport pandas as pd\n\nsales = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"revenue\": [30, 70, 20],\n})\ncatalog = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"category\": [\"stationery\", \"media\", \"stationery\"],\n})\n\ntotals = None\n",
    "solutionCode": "import pandas as pd\n\nsales = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"revenue\": [30, 70, 20],\n})\ncatalog = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"category\": [\"stationery\", \"media\", \"stationery\"],\n})\n\nmerged = pd.merge(sales, catalog, on=\"item\")\ntotals = merged.groupby(\"category\")[\"revenue\"].sum()\nprint({k: int(v) for k, v in totals.items()})",
    "publicTests": [
      {
        "id": "m15-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "{'media': 70, 'stationery': 50}",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p05-t2",
        "label": "stationery total",
        "assertCode": "assert (int(totals[\"stationery\"])) == (50), \"Expected \" + repr(50) + \", got \" + repr(int(totals[\"stationery\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p05-t3",
        "label": "media total",
        "assertCode": "assert (int(totals[\"media\"])) == (70), \"Expected \" + repr(70) + \", got \" + repr(int(totals[\"media\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p05-t4",
        "label": "nothing was lost in the join",
        "assertCode": "assert (int(totals.sum())) == (120), \"Expected \" + repr(120) + \", got \" + repr(int(totals.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Merge sales with the catalogue, then group by category and print revenue totals as a dict.\n\nReference solution:\nimport pandas as pd\n\nsales = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"revenue\": [30, 70, 20],\n})\ncatalog = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"pencil\"],\n    \"category\": [\"stationery\", \"media\", \"stationery\"],\n})\n\nmerged = pd.merge(sales, catalog, on=\"item\")\ntotals = merged.groupby(\"category\")[\"revenue\"].sum()\nprint({k: int(v) for k, v in totals.items()})"
  },
  {
    "id": "m15-t5-p06",
    "topicId": "m15-t5",
    "slug": "pd-concat",
    "title": "Concat: Stack Two Months",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Stack two DataFrames with pd.concat and print the combined shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Stack "
        },
        {
          "type": "code",
          "value": "january"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "february"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "pd.concat([january, february], ignore_index=True)"
        },
        {
          "type": "text",
          "value": " and print the shape."
        }
      ],
      "editorPlaceholder": "# combined = pd.concat([...], ignore_index=True)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "combined"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "concat stacks rows; merge joins columns — do not mix them up.",
          "ignore_index=True renumbers the rows so the index has no duplicates."
        ]
      }
    },
    "examples": [
      {
        "output": "(4, 2)"
      }
    ],
    "constraints": [
      "Use pd.concat with ignore_index=True",
      "Store the result in combined",
      "Output must be exactly: (4, 2)"
    ],
    "hints": [
      "combined = pd.concat([january, february], ignore_index=True)"
    ],
    "starterCode": "# TODO: stack the two months\nimport pandas as pd\n\njanuary = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\nfebruary = pd.DataFrame({\"item\": [\"bag\", \"pencil\"], \"revenue\": [40, 20]})\ncombined = None\n",
    "solutionCode": "import pandas as pd\n\njanuary = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\nfebruary = pd.DataFrame({\"item\": [\"bag\", \"pencil\"], \"revenue\": [40, 20]})\ncombined = pd.concat([january, february], ignore_index=True)\n\nprint(combined.shape)",
    "publicTests": [
      {
        "id": "m15-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "(4, 2)",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p06-t2",
        "label": "four rows, two columns",
        "assertCode": "assert (combined.shape) == ((4, 2)), \"Expected \" + repr((4, 2)) + \", got \" + repr(combined.shape)",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p06-t3",
        "label": "the index was renumbered",
        "assertCode": "assert (list(combined.index)) == ([0, 1, 2, 3]), \"Expected \" + repr([0, 1, 2, 3]) + \", got \" + repr(list(combined.index))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p06-t4",
        "label": "revenue from both months",
        "assertCode": "assert (int(combined[\"revenue\"].sum())) == (160), \"Expected \" + repr(160) + \", got \" + repr(int(combined[\"revenue\"].sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Stack two DataFrames with pd.concat and print the combined shape.\n\nReference solution:\nimport pandas as pd\n\njanuary = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"revenue\": [30, 70]})\nfebruary = pd.DataFrame({\"item\": [\"bag\", \"pencil\"], \"revenue\": [40, 20]})\ncombined = pd.concat([january, february], ignore_index=True)\n\nprint(combined.shape)"
  },
  {
    "id": "m15-t5-p07",
    "topicId": "m15-t5",
    "slug": "pd-groupby-agg",
    "title": "GroupBy: Two Aggregations at Once",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Use agg([\"sum\", \"max\"]) per region and print the South total then the South maximum.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "df.groupby(\"region\")[\"revenue\"].agg([\"sum\", \"max\"])"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "summary"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "int(summary.loc[\"South\", \"sum\"])"
        },
        {
          "type": "text",
          "value": " and the South maximum."
        }
      ],
      "editorPlaceholder": "# summary = df.groupby(\"region\")[\"revenue\"].agg([...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "summary"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "agg takes a list of aggregation names and returns one column each.",
          "The result is a DataFrame indexed by group, so loc[region, name] reads a cell.",
          "Print the sum first, then the max."
        ]
      }
    },
    "examples": [
      {
        "output": "100\n70"
      }
    ],
    "constraints": [
      "Use agg([\"sum\", \"max\"]) — one call, not two",
      "Print the sum, then the max"
    ],
    "hints": [
      "summary = df.groupby(\"region\")[\"revenue\"].agg([\"sum\", \"max\"])",
      "print(int(summary.loc[\"South\", \"sum\"]))"
    ],
    "starterCode": "# TODO: aggregate twice in one call\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nsummary = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nsummary = df.groupby(\"region\")[\"revenue\"].agg([\"sum\", \"max\"])\n\nprint(int(summary.loc[\"South\", \"sum\"]))\nprint(int(summary.loc[\"South\", \"max\"]))",
    "publicTests": [
      {
        "id": "m15-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "100\n70",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p07-t2",
        "label": "both aggregations present",
        "assertCode": "assert (list(summary.columns)) == ([\"sum\", \"max\"]), \"Expected \" + repr([\"sum\", \"max\"]) + \", got \" + repr(list(summary.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p07-t3",
        "label": "South total",
        "assertCode": "assert (int(summary.loc[\"South\", \"sum\"])) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(summary.loc[\"South\", \"sum\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p07-t4",
        "label": "South maximum",
        "assertCode": "assert (int(summary.loc[\"South\", \"max\"])) == (70), \"Expected \" + repr(70) + \", got \" + repr(int(summary.loc[\"South\", \"max\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t5-p07-t5",
        "label": "one row per region",
        "assertCode": "assert (len(summary)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(summary))",
        "visibility": "public"
      }
    ],
    "approach": "Use agg([\"sum\", \"max\"]) per region and print the South total then the South maximum.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"item\": [\"pen\", \"book\", \"bag\"],\n    \"region\": [\"South\", \"North\", \"South\"],\n    \"revenue\": [30, 40, 70],\n})\n\nsummary = df.groupby(\"region\")[\"revenue\"].agg([\"sum\", \"max\"])\n\nprint(int(summary.loc[\"South\", \"sum\"]))\nprint(int(summary.loc[\"South\", \"max\"]))"
  },
  {
    "id": "m15-t6-p01",
    "topicId": "m15-t6",
    "slug": "pd-pivot-basic",
    "title": "Pivot: Totals by Region",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Build a pivot table of revenue summed by region and print it as a dict of ints.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "pivot"
        },
        {
          "type": "text",
          "value": ", then print the "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": " column as a dict of ints."
        }
      ],
      "editorPlaceholder": "# pivot = df.pivot_table(...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "index= chooses the row grouping.",
          "aggfunc= chooses how values combine — sum here.",
          "With one value column, the result has a single column named revenue."
        ]
      }
    },
    "examples": [
      {
        "output": "{'North': 60, 'South': 100}"
      }
    ],
    "constraints": [
      "Use pivot_table with index and aggfunc",
      "Output must be exactly: {'North': 60, 'South': 100}"
    ],
    "hints": [
      "pivot = df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")",
      "print({k: int(v) for k, v in pivot[\"revenue\"].items()})"
    ],
    "starterCode": "# TODO: pivot revenue by region\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")\nprint({k: int(v) for k, v in pivot[\"revenue\"].items()})",
    "publicTests": [
      {
        "id": "m15-t6-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "{'North': 60, 'South': 100}",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p01-t2",
        "label": "South total",
        "assertCode": "assert (int(pivot.loc[\"South\", \"revenue\"])) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(pivot.loc[\"South\", \"revenue\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p01-t3",
        "label": "North total",
        "assertCode": "assert (int(pivot.loc[\"North\", \"revenue\"])) == (60), \"Expected \" + repr(60) + \", got \" + repr(int(pivot.loc[\"North\", \"revenue\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p01-t4",
        "label": "one row per region",
        "assertCode": "assert (len(pivot)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(pivot))",
        "visibility": "public"
      }
    ],
    "approach": "Build a pivot table of revenue summed by region and print it as a dict of ints.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")\nprint({k: int(v) for k, v in pivot[\"revenue\"].items()})"
  },
  {
    "id": "m15-t6-p02",
    "topicId": "m15-t6",
    "slug": "pd-pivot-columns",
    "title": "Pivot: Region by Category Grid",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Add columns=\"category\" to build a region-by-category grid and print its values as nested lists.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Add "
        },
        {
          "type": "code",
          "value": "columns=\"category\""
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "fill_value=0"
        },
        {
          "type": "text",
          "value": " to the pivot, then print "
        },
        {
          "type": "code",
          "value": "pivot.values.tolist()"
        },
        {
          "type": "text",
          "value": ". Rows are regions, columns are categories, both sorted."
        }
      ],
      "editorPlaceholder": "# pivot = df.pivot_table(..., columns='category', fill_value=0)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "index becomes the rows and columns becomes the columns — a cross-tab.",
          "fill_value=0 replaces empty combinations so the values stay integers.",
          "Row order is North, South; column order is bag, pen."
        ]
      }
    },
    "examples": [
      {
        "output": "[[20, 40], [70, 30]]"
      }
    ],
    "constraints": [
      "Pass columns=\"category\" and fill_value=0",
      "Output must be exactly: [[20, 40], [70, 30]]"
    ],
    "hints": [
      "pivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)",
      "print(pivot.values.tolist())"
    ],
    "starterCode": "# TODO: build the cross-tab\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nprint(pivot.values.tolist())",
    "publicTests": [
      {
        "id": "m15-t6-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "[[20, 40], [70, 30]]",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p02-t2",
        "label": "grid values",
        "assertCode": "assert (pivot.values.tolist()) == ([[20, 40], [70, 30]]), \"Expected \" + repr([[20, 40], [70, 30]]) + \", got \" + repr(pivot.values.tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p02-t3",
        "label": "rows are the regions",
        "assertCode": "assert (list(pivot.index)) == ([\"North\", \"South\"]), \"Expected \" + repr([\"North\", \"South\"]) + \", got \" + repr(list(pivot.index))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p02-t4",
        "label": "columns are the categories",
        "assertCode": "assert (list(pivot.columns)) == ([\"bag\", \"pen\"]), \"Expected \" + repr([\"bag\", \"pen\"]) + \", got \" + repr(list(pivot.columns))",
        "visibility": "public"
      }
    ],
    "approach": "Add columns=\"category\" to build a region-by-category grid and print its values as nested lists.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nprint(pivot.values.tolist())"
  },
  {
    "id": "m15-t6-p03",
    "topicId": "m15-t6",
    "slug": "pd-pivot-index",
    "title": "Pivot: Read the Row Labels",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the pivot table's row labels with list(pivot.index).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "list(pivot.index)"
        },
        {
          "type": "text",
          "value": " — the pivot's row labels are the values of the column you grouped by."
        }
      ],
      "editorPlaceholder": "# print(list(pivot.index))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The index holds the group keys, sorted alphabetically.",
          "Knowing the order matters before you read values by position."
        ]
      }
    },
    "examples": [
      {
        "output": "['North', 'South']"
      }
    ],
    "constraints": [
      "Use list(pivot.index)",
      "Output must be exactly: ['North', 'South']"
    ],
    "hints": [
      "print(list(pivot.index))"
    ],
    "starterCode": "# TODO: print the row labels\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")\nprint(list(pivot.index))",
    "publicTests": [
      {
        "id": "m15-t6-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "['North', 'South']",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p03-t2",
        "label": "row labels sorted",
        "assertCode": "assert (list(pivot.index)) == ([\"North\", \"South\"]), \"Expected \" + repr([\"North\", \"South\"]) + \", got \" + repr(list(pivot.index))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p03-t3",
        "label": "two groups",
        "assertCode": "assert (len(pivot.index)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(pivot.index))",
        "visibility": "public"
      }
    ],
    "approach": "Print the pivot table's row labels with list(pivot.index).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", aggfunc=\"sum\")\nprint(list(pivot.index))"
  },
  {
    "id": "m15-t6-p04",
    "topicId": "m15-t6",
    "slug": "pd-pivot-lookup",
    "title": "Pivot: Read One Cell",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Look up the South/pen cell of the cross-tab pivot and print it as an int.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(pivot.loc[\"South\", \"pen\"])"
        },
        {
          "type": "text",
          "value": " — with a cross-tab, "
        },
        {
          "type": "code",
          "value": "loc[row, column]"
        },
        {
          "type": "text",
          "value": " reads one combination."
        }
      ],
      "editorPlaceholder": "# print(int(pivot.loc[\"South\", \"pen\"]))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The row label is the region and the column label is the category.",
          "This is how you answer 'how much did pens make in the South?'"
        ]
      }
    },
    "examples": [
      {
        "output": "30"
      }
    ],
    "constraints": [
      "Use pivot.loc[row, column]",
      "Output must be exactly: 30"
    ],
    "hints": [
      "print(int(pivot.loc[\"South\", \"pen\"]))"
    ],
    "starterCode": "# TODO: read the South pen cell\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nprint(int(pivot.loc[\"South\", \"pen\"]))",
    "publicTests": [
      {
        "id": "m15-t6-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "30",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p04-t2",
        "label": "South pen revenue",
        "assertCode": "assert (int(pivot.loc[\"South\", \"pen\"])) == (30), \"Expected \" + repr(30) + \", got \" + repr(int(pivot.loc[\"South\", \"pen\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p04-t3",
        "label": "North bag revenue",
        "assertCode": "assert (int(pivot.loc[\"North\", \"bag\"])) == (20), \"Expected \" + repr(20) + \", got \" + repr(int(pivot.loc[\"North\", \"bag\"]))",
        "visibility": "public"
      }
    ],
    "approach": "Look up the South/pen cell of the cross-tab pivot and print it as an int.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nprint(int(pivot.loc[\"South\", \"pen\"]))"
  },
  {
    "id": "m15-t6-p05",
    "topicId": "m15-t6",
    "slug": "pd-pivot-mean",
    "title": "Pivot: Averages Instead of Totals",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Switch the pivot aggfunc to \"mean\" and print the grid values as nested lists.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Change "
        },
        {
          "type": "code",
          "value": "aggfunc"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "\"mean\""
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "pivot.values.tolist()"
        },
        {
          "type": "text",
          "value": ". Each cell has one row here, so the averages match the values — but they print as floats."
        }
      ],
      "editorPlaceholder": "# aggfunc='mean'",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "aggfunc is the only change from the summed version.",
          "Averaging always produces floats, even when the inputs are integers."
        ]
      }
    },
    "examples": [
      {
        "output": "[[20.0, 40.0], [70.0, 30.0]]"
      }
    ],
    "constraints": [
      "Use aggfunc=\"mean\"",
      "Output must be exactly: [[20.0, 40.0], [70.0, 30.0]]"
    ],
    "hints": [
      "pivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"mean\", fill_value=0)"
    ],
    "starterCode": "# TODO: average instead of summing\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"mean\", fill_value=0)\nprint(pivot.values.tolist())",
    "publicTests": [
      {
        "id": "m15-t6-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "[[20.0, 40.0], [70.0, 30.0]]",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p05-t2",
        "label": "values are floats",
        "assertCode": "assert (pivot.values.tolist()) == ([[20.0, 40.0], [70.0, 30.0]]), \"Expected \" + repr([[20.0, 40.0], [70.0, 30.0]]) + \", got \" + repr(pivot.values.tolist())",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p05-t3",
        "label": "shape is 2 by 2",
        "assertCode": "assert (pivot.shape) == ((2, 2)), \"Expected \" + repr((2, 2)) + \", got \" + repr(pivot.shape)",
        "visibility": "public"
      }
    ],
    "approach": "Switch the pivot aggfunc to \"mean\" and print the grid values as nested lists.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"mean\", fill_value=0)\nprint(pivot.values.tolist())"
  },
  {
    "id": "m15-t6-p06",
    "topicId": "m15-t6",
    "slug": "pd-pivot-columns-list",
    "title": "Pivot: Read the Column Labels",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print the cross-tab pivot's column labels with list(pivot.columns).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "list(pivot.columns)"
        },
        {
          "type": "text",
          "value": " — these come from the distinct values of the column you pivoted on, sorted."
        }
      ],
      "editorPlaceholder": "# print(list(pivot.columns))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Every distinct category becomes its own column.",
          "New categories in next month's data would add new columns automatically."
        ]
      }
    },
    "examples": [
      {
        "output": "['bag', 'pen']"
      }
    ],
    "constraints": [
      "Use list(pivot.columns)",
      "Output must be exactly: ['bag', 'pen']"
    ],
    "hints": [
      "print(list(pivot.columns))"
    ],
    "starterCode": "# TODO: print the column labels\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nprint(list(pivot.columns))",
    "publicTests": [
      {
        "id": "m15-t6-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "['bag', 'pen']",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p06-t2",
        "label": "column labels sorted",
        "assertCode": "assert (list(pivot.columns)) == ([\"bag\", \"pen\"]), \"Expected \" + repr([\"bag\", \"pen\"]) + \", got \" + repr(list(pivot.columns))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p06-t3",
        "label": "two categories",
        "assertCode": "assert (len(pivot.columns)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(pivot.columns))",
        "visibility": "public"
      }
    ],
    "approach": "Print the cross-tab pivot's column labels with list(pivot.columns).\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nprint(list(pivot.columns))"
  },
  {
    "id": "m15-t6-p07",
    "topicId": "m15-t6",
    "slug": "pd-pivot-row-totals",
    "title": "Pivot: Total Each Row",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Sum across the pivot's columns with axis=1 to get a total per region and print it as a dict.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build the cross-tab, then use "
        },
        {
          "type": "code",
          "value": "pivot.sum(axis=1)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "region_totals"
        },
        {
          "type": "text",
          "value": " and print it as a dict of ints."
        }
      ],
      "editorPlaceholder": "# region_totals = pivot.sum(axis=1)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "pivot",
        "region_totals"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "axis=1 sums across the columns, giving one number per row.",
          "axis=0 would total each category instead.",
          "This is the margin row you see at the edge of a spreadsheet pivot."
        ]
      }
    },
    "examples": [
      {
        "output": "{'North': 60, 'South': 100}"
      }
    ],
    "constraints": [
      "Use sum(axis=1)",
      "Store the result in region_totals",
      "Output must be exactly: {'North': 60, 'South': 100}"
    ],
    "hints": [
      "region_totals = pivot.sum(axis=1)",
      "print({k: int(v) for k, v in region_totals.items()})"
    ],
    "starterCode": "# TODO: total each region across categories\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nregion_totals = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nregion_totals = pivot.sum(axis=1)\nprint({k: int(v) for k, v in region_totals.items()})",
    "publicTests": [
      {
        "id": "m15-t6-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "{'North': 60, 'South': 100}",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p07-t2",
        "label": "South row total",
        "assertCode": "assert (int(region_totals[\"South\"])) == (100), \"Expected \" + repr(100) + \", got \" + repr(int(region_totals[\"South\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p07-t3",
        "label": "North row total",
        "assertCode": "assert (int(region_totals[\"North\"])) == (60), \"Expected \" + repr(60) + \", got \" + repr(int(region_totals[\"North\"]))",
        "visibility": "public"
      },
      {
        "id": "m15-t6-p07-t4",
        "label": "the totals match the whole frame",
        "assertCode": "assert (int(region_totals.sum())) == (int(df[\"revenue\"].sum())), \"Expected \" + repr(int(df[\"revenue\"].sum())) + \", got \" + repr(int(region_totals.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Sum across the pivot's columns with axis=1 to get a total per region and print it as a dict.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"South\", \"North\", \"North\"],\n    \"category\": [\"pen\", \"bag\", \"pen\", \"bag\"],\n    \"revenue\": [30, 70, 40, 20],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"region\", columns=\"category\", aggfunc=\"sum\", fill_value=0)\nregion_totals = pivot.sum(axis=1)\nprint({k: int(v) for k, v in region_totals.items()})"
  }
];
