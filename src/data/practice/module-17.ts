import type { PracticeProblem } from "@/lib/types";

export const module17Practice: PracticeProblem[] = [
  {
    "id": "m17-t1-p01",
    "topicId": "m17-t1",
    "slug": "desc-mean",
    "title": "Descriptive: The Mean",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define mean_of(values) using statistics.mean. Print mean_of([12, 15, 20, 25, 28]).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define mean_of(values) using statistics.mean. Print mean_of([12, 15, 20, 25, 28])."
        }
      ],
      "editorPlaceholder": "# print(statistics.mean(sales))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "statistics"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The mean is the sum divided by the count.",
          "statistics is in the standard library — no install needed.",
          "It returns an int when the result is whole."
        ]
      },
      "requiresFunction": "mean_of"
    },
    "examples": [
      {
        "output": "20"
      }
    ],
    "constraints": [
      "Use statistics.mean",
      "Output must be exactly: 20"
    ],
    "hints": [
      "return statistics.mean(values)"
    ],
    "starterCode": "import statistics\n\ndef mean_of(values):\n    pass\n",
    "solutionCode": "import statistics\n\ndef mean_of(values):\n    return statistics.mean(values)\n\nprint(mean_of([12, 15, 20, 25, 28]))",
    "publicTests": [
      {
        "id": "m17-t1-p01-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "20"
      },
      {
        "id": "m17-t1-p01-t2",
        "visibility": "public",
        "label": "sample list",
        "assertCode": "assert mean_of([12, 15, 20, 25, 28]) == 20"
      },
      {
        "id": "m17-t1-p01-t3",
        "visibility": "public",
        "label": "another list",
        "assertCode": "assert mean_of([10, 10]) == 10, \"Average the argument, do not hardcode 20\""
      }
    ],
    "approach": "Define mean_of(values) using statistics.mean. Print mean_of([12, 15, 20, 25, 28]).\n\nReference solution:\nimport statistics\n\ndef mean_of(values):\n    return statistics.mean(values)\n\nprint(mean_of([12, 15, 20, 25, 28]))"
  },
  {
    "id": "m17-t1-p02",
    "topicId": "m17-t1",
    "slug": "desc-median",
    "title": "Descriptive: The Median",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define median_of(values) using statistics.median. Print median_of([12, 15, 20, 25, 28]).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define median_of(values) using statistics.median. Print median_of([12, 15, 20, 25, 28])."
        }
      ],
      "editorPlaceholder": "# print(statistics.median(sales))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "statistics"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The median splits the data in half.",
          "It barely moves when one value is extreme, unlike the mean."
        ]
      },
      "requiresFunction": "median_of"
    },
    "examples": [
      {
        "output": "20"
      }
    ],
    "constraints": [
      "Use statistics.median",
      "Output must be exactly: 20"
    ],
    "hints": [
      "return statistics.median(values)"
    ],
    "starterCode": "import statistics\n\ndef median_of(values):\n    pass\n",
    "solutionCode": "import statistics\n\ndef median_of(values):\n    return statistics.median(values)\n\nprint(median_of([12, 15, 20, 25, 28]))",
    "publicTests": [
      {
        "id": "m17-t1-p02-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "20"
      },
      {
        "id": "m17-t1-p02-t2",
        "visibility": "public",
        "label": "sample list",
        "assertCode": "assert median_of([12, 15, 20, 25, 28]) == 20"
      },
      {
        "id": "m17-t1-p02-t3",
        "visibility": "public",
        "label": "even count",
        "assertCode": "assert median_of([1, 2, 3, 4]) == 2.5, \"Median of four values is the average of the middle two\""
      }
    ],
    "approach": "Define median_of(values) using statistics.median. Print median_of([12, 15, 20, 25, 28]).\n\nReference solution:\nimport statistics\n\ndef median_of(values):\n    return statistics.median(values)\n\nprint(median_of([12, 15, 20, 25, 28]))"
  },
  {
    "id": "m17-t1-p03",
    "topicId": "m17-t1",
    "slug": "desc-mode",
    "title": "Descriptive: The Mode",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Define mode_of(values) using statistics.mode. Print mode_of([4, 5, 5, 3, 5]).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define mode_of(values) using statistics.mode. Print mode_of([4, 5, 5, 3, 5])."
        }
      ],
      "editorPlaceholder": "# print(statistics.mode(ratings))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "statistics"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The mode is the only average that works on categories.",
          "Use it for ratings, regions, and product names."
        ]
      },
      "requiresFunction": "mode_of"
    },
    "examples": [
      {
        "output": "5"
      }
    ],
    "constraints": [
      "Use statistics.mode",
      "Output must be exactly: 5"
    ],
    "hints": [
      "return statistics.mode(values)"
    ],
    "starterCode": "import statistics\n\ndef mode_of(values):\n    pass\n",
    "solutionCode": "import statistics\n\ndef mode_of(values):\n    return statistics.mode(values)\n\nprint(mode_of([4, 5, 5, 3, 5]))",
    "publicTests": [
      {
        "id": "m17-t1-p03-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "5"
      },
      {
        "id": "m17-t1-p03-t2",
        "visibility": "public",
        "label": "sample list",
        "assertCode": "assert mode_of([4, 5, 5, 3, 5]) == 5"
      },
      {
        "id": "m17-t1-p03-t3",
        "visibility": "public",
        "label": "another list",
        "assertCode": "assert mode_of([1, 1, 2]) == 1, \"Return the mode of the argument\""
      }
    ],
    "approach": "Define mode_of(values) using statistics.mode. Print mode_of([4, 5, 5, 3, 5]).\n\nReference solution:\nimport statistics\n\ndef mode_of(values):\n    return statistics.mode(values)\n\nprint(mode_of([4, 5, 5, 3, 5]))"
  },
  {
    "id": "m17-t1-p04",
    "topicId": "m17-t1",
    "slug": "desc-range",
    "title": "Descriptive: The Range",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Compute max minus min into a variable named spread and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store "
        },
        {
          "type": "code",
          "value": "max(sales) - min(sales)"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "spread"
        },
        {
          "type": "text",
          "value": " and print it. The range is the crudest measure of spread."
        }
      ],
      "editorPlaceholder": "# spread = max(sales) - min(sales)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "sales",
        "spread"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Range = max - min.",
          "It uses only two values, so a single outlier dominates it."
        ]
      }
    },
    "examples": [
      {
        "output": "16"
      }
    ],
    "constraints": [
      "Use max() and min() — do not type 16",
      "Store the result in spread"
    ],
    "hints": [
      "spread = max(sales) - min(sales)"
    ],
    "starterCode": "# TODO: compute the range\nsales = [12, 15, 20, 25, 28]\nspread = 0\n",
    "solutionCode": "sales = [12, 15, 20, 25, 28]\nspread = max(sales) - min(sales)\nprint(spread)",
    "publicTests": [
      {
        "id": "m17-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "16",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p04-t2",
        "label": "spread is max minus min",
        "assertCode": "assert (spread) == (16), \"Expected \" + repr(16) + \", got \" + repr(spread)",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p04-t3",
        "label": "computed from the data",
        "assertCode": "assert (spread) == (max(sales) - min(sales)), \"Expected \" + repr(max(sales) - min(sales)) + \", got \" + repr(spread)",
        "visibility": "public"
      }
    ],
    "approach": "Compute max minus min into a variable named spread and print it.\n\nReference solution:\nsales = [12, 15, 20, 25, 28]\nspread = max(sales) - min(sales)\nprint(spread)"
  },
  {
    "id": "m17-t1-p05",
    "topicId": "m17-t1",
    "slug": "desc-variance",
    "title": "Descriptive: The Variance",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use statistics.pvariance to print the population variance rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "round(statistics.pvariance(sales), 2)"
        },
        {
          "type": "text",
          "value": " — the average squared distance from the mean."
        }
      ],
      "editorPlaceholder": "# print(round(statistics.pvariance(sales), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "statistics",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "pvariance treats the data as the whole population.",
          "variance() would divide by n-1 for a sample instead.",
          "Variance is in squared units, which is why the standard deviation is easier to read."
        ]
      }
    },
    "examples": [
      {
        "output": "35.6"
      }
    ],
    "constraints": [
      "Use statistics.pvariance",
      "Round to 2 decimals",
      "Output must be exactly: 35.6"
    ],
    "hints": [
      "print(round(statistics.pvariance(sales), 2))"
    ],
    "starterCode": "# TODO: print the population variance\nimport statistics\n\nsales = [12, 15, 20, 25, 28]\n",
    "solutionCode": "import statistics\n\nsales = [12, 15, 20, 25, 28]\nprint(round(statistics.pvariance(sales), 2))",
    "publicTests": [
      {
        "id": "m17-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "35.6",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p05-t2",
        "label": "variance is correct",
        "assertCode": "assert (round(statistics.pvariance(sales), 2)) == (35.6), \"Expected \" + repr(35.6) + \", got \" + repr(round(statistics.pvariance(sales), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p05-t3",
        "label": "sample variance is larger",
        "assertCode": "assert statistics.variance(sales) > statistics.pvariance(sales), \"Dividing by n-1 gives a larger number than dividing by n\"",
        "visibility": "public"
      }
    ],
    "approach": "Use statistics.pvariance to print the population variance rounded to two decimals.\n\nReference solution:\nimport statistics\n\nsales = [12, 15, 20, 25, 28]\nprint(round(statistics.pvariance(sales), 2))"
  },
  {
    "id": "m17-t1-p06",
    "topicId": "m17-t1",
    "slug": "desc-stdev",
    "title": "Descriptive: The Standard Deviation",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Use statistics.pstdev to print the standard deviation rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "round(statistics.pstdev(sales), 2)"
        },
        {
          "type": "text",
          "value": " — the square root of the variance, back in the original units."
        }
      ],
      "editorPlaceholder": "# print(round(statistics.pstdev(sales), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "statistics",
        "sales"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The standard deviation says how far a typical value sits from the mean.",
          "It is the number you actually report, unlike variance."
        ]
      }
    },
    "examples": [
      {
        "output": "5.97"
      }
    ],
    "constraints": [
      "Use statistics.pstdev",
      "Round to 2 decimals",
      "Output must be exactly: 5.97"
    ],
    "hints": [
      "print(round(statistics.pstdev(sales), 2))"
    ],
    "starterCode": "# TODO: print the standard deviation\nimport statistics\n\nsales = [12, 15, 20, 25, 28]\n",
    "solutionCode": "import statistics\n\nsales = [12, 15, 20, 25, 28]\nprint(round(statistics.pstdev(sales), 2))",
    "publicTests": [
      {
        "id": "m17-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "5.97",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p06-t2",
        "label": "standard deviation is correct",
        "assertCode": "assert (round(statistics.pstdev(sales), 2)) == (5.97), \"Expected \" + repr(5.97) + \", got \" + repr(round(statistics.pstdev(sales), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p06-t3",
        "label": "it is the square root of the variance",
        "assertCode": "assert abs(statistics.pstdev(sales) ** 2 - statistics.pvariance(sales)) < 1e-9, \"pstdev squared should equal pvariance\"",
        "visibility": "public"
      }
    ],
    "approach": "Use statistics.pstdev to print the standard deviation rounded to two decimals.\n\nReference solution:\nimport statistics\n\nsales = [12, 15, 20, 25, 28]\nprint(round(statistics.pstdev(sales), 2))"
  },
  {
    "id": "m17-t1-p07",
    "topicId": "m17-t1",
    "slug": "desc-summary-line",
    "title": "Descriptive: A Summary Line",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Compute count, mean, and median as floats and print them in one formatted summary line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store "
        },
        {
          "type": "code",
          "value": "count"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "mean"
        },
        {
          "type": "text",
          "value": ", and "
        },
        {
          "type": "code",
          "value": "median"
        },
        {
          "type": "text",
          "value": " (the last two as floats) and print "
        },
        {
          "type": "code",
          "value": "count=5, mean=20.0, median=20.0"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# count = len(sales)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "statistics",
        "count",
        "mean",
        "median"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "len() gives the count.",
          "Wrap mean and median in float() so both print with a decimal point.",
          "When mean and median match, the data is symmetric."
        ]
      }
    },
    "examples": [
      {
        "output": "count=5, mean=20.0, median=20.0"
      }
    ],
    "constraints": [
      "Use len(), statistics.mean, and statistics.median",
      "Wrap mean and median in float()",
      "Output must be exactly: count=5, mean=20.0, median=20.0"
    ],
    "hints": [
      "mean = float(statistics.mean(sales))",
      "print(f\"count={count}, mean={mean}, median={median}\")"
    ],
    "starterCode": "# TODO: build the summary\nimport statistics\n\nsales = [12, 15, 20, 25, 28]\ncount = 0\nmean = 0.0\nmedian = 0.0\n",
    "solutionCode": "import statistics\n\nsales = [12, 15, 20, 25, 28]\ncount = len(sales)\nmean = float(statistics.mean(sales))\nmedian = float(statistics.median(sales))\nprint(f\"count={count}, mean={mean}, median={median}\")",
    "publicTests": [
      {
        "id": "m17-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "count=5, mean=20.0, median=20.0",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p07-t2",
        "label": "count is the number of values",
        "assertCode": "assert (count) == (5), \"Expected \" + repr(5) + \", got \" + repr(count)",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p07-t3",
        "label": "mean is a float",
        "assertCode": "assert (mean) == (20.0), \"Expected \" + repr(20.0) + \", got \" + repr(mean)",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p07-t4",
        "label": "median is a float",
        "assertCode": "assert (median) == (20.0), \"Expected \" + repr(20.0) + \", got \" + repr(median)",
        "visibility": "public"
      },
      {
        "id": "m17-t1-p07-t5",
        "label": "mean has the right type",
        "assertCode": "assert \"mean\" in globals(), \"Expected a variable named mean\"\nassert isinstance(mean, float), \"Expected mean to be float, got \" + type(mean).__name__",
        "visibility": "public"
      }
    ],
    "approach": "Compute count, mean, and median as floats and print them in one formatted summary line.\n\nReference solution:\nimport statistics\n\nsales = [12, 15, 20, 25, 28]\ncount = len(sales)\nmean = float(statistics.mean(sales))\nmedian = float(statistics.median(sales))\nprint(f\"count={count}, mean={mean}, median={median}\")"
  },
  {
    "id": "m17-t2-p01",
    "topicId": "m17-t2",
    "slug": "dist-histogram-counts",
    "title": "Distributions: Count Values per Bin",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use np.histogram with explicit bin edges and print the counts per bin as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[5, 12, 15, 22, 25, 28]"
        },
        {
          "type": "text",
          "value": " with edges "
        },
        {
          "type": "code",
          "value": "[0, 10, 20, 30]"
        },
        {
          "type": "text",
          "value": ", print "
        },
        {
          "type": "code",
          "value": "counts.tolist()"
        },
        {
          "type": "text",
          "value": " from "
        },
        {
          "type": "code",
          "value": "np.histogram"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# counts, edges = np.histogram(...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "counts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.histogram returns the counts and the edges — take index 0 for counts.",
          "Explicit edges make the bins reproducible.",
          "This is the data behind every histogram chart."
        ]
      }
    },
    "examples": [
      {
        "output": "[1, 2, 3]"
      }
    ],
    "constraints": [
      "Use np.histogram with bins=[0, 10, 20, 30]",
      "Output must be exactly: [1, 2, 3]"
    ],
    "hints": [
      "counts, edges = np.histogram(values, bins=[0, 10, 20, 30])",
      "print(counts.tolist())"
    ],
    "starterCode": "# TODO: count the values in each bin\nimport numpy as np\n\nvalues = [5, 12, 15, 22, 25, 28]\ncounts = None\n",
    "solutionCode": "import numpy as np\n\nvalues = [5, 12, 15, 22, 25, 28]\ncounts, edges = np.histogram(values, bins=[0, 10, 20, 30])\n\nprint(counts.tolist())",
    "publicTests": [
      {
        "id": "m17-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "[1, 2, 3]",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p01-t2",
        "label": "counts per bin",
        "assertCode": "assert (counts.tolist()) == ([1, 2, 3]), \"Expected \" + repr([1, 2, 3]) + \", got \" + repr(counts.tolist())",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p01-t3",
        "label": "every value was counted",
        "assertCode": "assert (int(counts.sum())) == (6), \"Expected \" + repr(6) + \", got \" + repr(int(counts.sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Use np.histogram with explicit bin edges and print the counts per bin as a list.\n\nReference solution:\nimport numpy as np\n\nvalues = [5, 12, 15, 22, 25, 28]\ncounts, edges = np.histogram(values, bins=[0, 10, 20, 30])\n\nprint(counts.tolist())"
  },
  {
    "id": "m17-t2-p02",
    "topicId": "m17-t2",
    "slug": "dist-value-counts",
    "title": "Distributions: Frequency of Each Rating",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Use value_counts with sort_index to print how many times each rating appears.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For ratings "
        },
        {
          "type": "code",
          "value": "[3, 4, 4, 5, 5, 5]"
        },
        {
          "type": "text",
          "value": " print the frequency of each value as a dict, sorted by rating."
        }
      ],
      "editorPlaceholder": "# counts = ratings.value_counts().sort_index()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "counts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "value_counts() orders by frequency, which is unstable when counts tie.",
          "sort_index() orders by the rating instead.",
          "Convert keys and values with int() so the dict prints plainly."
        ]
      }
    },
    "examples": [
      {
        "output": "{3: 1, 4: 2, 5: 3}"
      }
    ],
    "constraints": [
      "Use value_counts().sort_index()",
      "Output must be exactly: {3: 1, 4: 2, 5: 3}"
    ],
    "hints": [
      "counts = ratings.value_counts().sort_index()",
      "print({int(k): int(v) for k, v in counts.items()})"
    ],
    "starterCode": "# TODO: count each rating\nimport pandas as pd\n\nratings = pd.Series([3, 4, 4, 5, 5, 5])\ncounts = None\n",
    "solutionCode": "import pandas as pd\n\nratings = pd.Series([3, 4, 4, 5, 5, 5])\ncounts = ratings.value_counts().sort_index()\n\nprint({int(k): int(v) for k, v in counts.items()})",
    "publicTests": [
      {
        "id": "m17-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "{3: 1, 4: 2, 5: 3}",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p02-t2",
        "label": "three 5-star ratings",
        "assertCode": "assert (int(counts[5])) == (3), \"Expected \" + repr(3) + \", got \" + repr(int(counts[5]))",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p02-t3",
        "label": "one 3-star rating",
        "assertCode": "assert (int(counts[3])) == (1), \"Expected \" + repr(1) + \", got \" + repr(int(counts[3]))",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p02-t4",
        "label": "sorted by rating",
        "assertCode": "assert ([int(k) for k in counts.index]) == ([3, 4, 5]), \"Expected \" + repr([3, 4, 5]) + \", got \" + repr([int(k) for k in counts.index])",
        "visibility": "public"
      }
    ],
    "approach": "Use value_counts with sort_index to print how many times each rating appears.\n\nReference solution:\nimport pandas as pd\n\nratings = pd.Series([3, 4, 4, 5, 5, 5])\ncounts = ratings.value_counts().sort_index()\n\nprint({int(k): int(v) for k, v in counts.items()})"
  },
  {
    "id": "m17-t2-p03",
    "topicId": "m17-t2",
    "slug": "dist-quartiles",
    "title": "Distributions: The Quartiles",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use np.percentile to print the 25th, 50th, and 75th percentiles as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[10, 20, 30, 40, 50]"
        },
        {
          "type": "text",
          "value": " print "
        },
        {
          "type": "code",
          "value": "np.percentile(values, [25, 50, 75]).tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# quartiles = np.percentile(values, [25, 50, 75])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "quartiles"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Percentiles split sorted data into shares.",
          "The 50th percentile is the median.",
          "Q1 and Q3 are the edges of the box in a box plot."
        ]
      }
    },
    "examples": [
      {
        "output": "[20.0, 30.0, 40.0]"
      }
    ],
    "constraints": [
      "Use np.percentile with [25, 50, 75]",
      "Output must be exactly: [20.0, 30.0, 40.0]"
    ],
    "hints": [
      "quartiles = np.percentile(values, [25, 50, 75])",
      "print(quartiles.tolist())"
    ],
    "starterCode": "# TODO: print the three quartiles\nimport numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nquartiles = None\n",
    "solutionCode": "import numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nquartiles = np.percentile(values, [25, 50, 75])\n\nprint(quartiles.tolist())",
    "publicTests": [
      {
        "id": "m17-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[20.0, 30.0, 40.0]",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p03-t2",
        "label": "quartiles are correct",
        "assertCode": "assert (quartiles.tolist()) == ([20.0, 30.0, 40.0]), \"Expected \" + repr([20.0, 30.0, 40.0]) + \", got \" + repr(quartiles.tolist())",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p03-t3",
        "label": "the middle quartile is the median",
        "assertCode": "assert (float(quartiles[1])) == (float(np.median(values))), \"Expected \" + repr(float(np.median(values))) + \", got \" + repr(float(quartiles[1]))",
        "visibility": "public"
      }
    ],
    "approach": "Use np.percentile to print the 25th, 50th, and 75th percentiles as a list.\n\nReference solution:\nimport numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nquartiles = np.percentile(values, [25, 50, 75])\n\nprint(quartiles.tolist())"
  },
  {
    "id": "m17-t2-p04",
    "topicId": "m17-t2",
    "slug": "dist-skew",
    "title": "Distributions: Measure the Skew",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use the pandas .skew() method to print how lopsided a right-skewed series is, to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[2, 3, 3, 4, 10]"
        },
        {
          "type": "text",
          "value": " print "
        },
        {
          "type": "code",
          "value": "round(float(values.skew()), 2)"
        },
        {
          "type": "text",
          "value": ". A positive result means a long tail to the right."
        }
      ],
      "editorPlaceholder": "# print(round(float(values.skew()), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "values"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Skew near 0 means symmetric; positive means a right tail.",
          "Right-skewed data is normal for revenue and income.",
          "Skew is why you often report the median rather than the mean."
        ]
      }
    },
    "examples": [
      {
        "output": "1.97"
      }
    ],
    "constraints": [
      "Use .skew()",
      "Round to 2 decimals",
      "Output must be exactly: 1.97"
    ],
    "hints": [
      "print(round(float(values.skew()), 2))"
    ],
    "starterCode": "# TODO: measure the skew\nimport pandas as pd\n\nvalues = pd.Series([2, 3, 3, 4, 10])\n",
    "solutionCode": "import pandas as pd\n\nvalues = pd.Series([2, 3, 3, 4, 10])\nprint(round(float(values.skew()), 2))",
    "publicTests": [
      {
        "id": "m17-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "1.97",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p04-t2",
        "label": "skew is correct",
        "assertCode": "assert (round(float(values.skew()), 2)) == (1.97), \"Expected \" + repr(1.97) + \", got \" + repr(round(float(values.skew()), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p04-t3",
        "label": "the distribution is right-skewed",
        "assertCode": "assert float(values.skew()) > 0, \"A long right tail gives a positive skew\"",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p04-t4",
        "label": "the mean is pulled above the median",
        "assertCode": "assert float(values.mean()) > float(values.median()), \"Right skew drags the mean above the median\"",
        "visibility": "public"
      }
    ],
    "approach": "Use the pandas .skew() method to print how lopsided a right-skewed series is, to two decimals.\n\nReference solution:\nimport pandas as pd\n\nvalues = pd.Series([2, 3, 3, 4, 10])\nprint(round(float(values.skew()), 2))"
  },
  {
    "id": "m17-t2-p05",
    "topicId": "m17-t2",
    "slug": "dist-cut-bins",
    "title": "Distributions: Bucket Into Labelled Bins",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use pd.cut with low/mid/high labels and print how many values fall in each bucket.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Bucket "
        },
        {
          "type": "code",
          "value": "[5, 12, 15, 22, 25, 28]"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "pd.cut"
        },
        {
          "type": "text",
          "value": " using edges "
        },
        {
          "type": "code",
          "value": "[0, 10, 20, 30]"
        },
        {
          "type": "text",
          "value": " and labels "
        },
        {
          "type": "code",
          "value": "low, mid, high"
        },
        {
          "type": "text",
          "value": ", then print the counts."
        }
      ],
      "editorPlaceholder": "# buckets = pd.cut(values, bins=[...], labels=[...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "buckets"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "pd.cut turns a numeric column into labelled categories.",
          "The labels keep their given order, so sort_index gives low, mid, high.",
          "Binning is how continuous data becomes a segment you can report on."
        ]
      }
    },
    "examples": [
      {
        "output": "{'low': 1, 'mid': 2, 'high': 3}"
      }
    ],
    "constraints": [
      "Use pd.cut with the given edges and labels",
      "Output must be exactly: {'low': 1, 'mid': 2, 'high': 3}"
    ],
    "hints": [
      "buckets = pd.cut(values, bins=[0, 10, 20, 30], labels=[\"low\", \"mid\", \"high\"])",
      "counts = buckets.value_counts().sort_index()"
    ],
    "starterCode": "# TODO: bucket the values, then count them\nimport pandas as pd\n\nvalues = pd.Series([5, 12, 15, 22, 25, 28])\nbuckets = None\n",
    "solutionCode": "import pandas as pd\n\nvalues = pd.Series([5, 12, 15, 22, 25, 28])\nbuckets = pd.cut(values, bins=[0, 10, 20, 30], labels=[\"low\", \"mid\", \"high\"])\ncounts = buckets.value_counts().sort_index()\n\nprint({str(k): int(v) for k, v in counts.items()})",
    "publicTests": [
      {
        "id": "m17-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "{'low': 1, 'mid': 2, 'high': 3}",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p05-t2",
        "label": "three values are high",
        "assertCode": "assert (int(counts[\"high\"])) == (3), \"Expected \" + repr(3) + \", got \" + repr(int(counts[\"high\"]))",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p05-t3",
        "label": "one value is low",
        "assertCode": "assert (int(counts[\"low\"])) == (1), \"Expected \" + repr(1) + \", got \" + repr(int(counts[\"low\"]))",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p05-t4",
        "label": "labels keep their given order",
        "assertCode": "assert ([str(k) for k in counts.index]) == ([\"low\", \"mid\", \"high\"]), \"Expected \" + repr([\"low\", \"mid\", \"high\"]) + \", got \" + repr([str(k) for k in counts.index])",
        "visibility": "public"
      }
    ],
    "approach": "Use pd.cut with low/mid/high labels and print how many values fall in each bucket.\n\nReference solution:\nimport pandas as pd\n\nvalues = pd.Series([5, 12, 15, 22, 25, 28])\nbuckets = pd.cut(values, bins=[0, 10, 20, 30], labels=[\"low\", \"mid\", \"high\"])\ncounts = buckets.value_counts().sort_index()\n\nprint({str(k): int(v) for k, v in counts.items()})"
  },
  {
    "id": "m17-t2-p06",
    "topicId": "m17-t2",
    "slug": "dist-min-max-scale",
    "title": "Distributions: Scale to 0-1",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Min-max scale an array so the smallest value becomes 0 and the largest becomes 1.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Scale "
        },
        {
          "type": "code",
          "value": "[10, 20, 30, 40]"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "(values - values.min()) / (values.max() - values.min())"
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
          "value": ", then print it rounded to 2 decimals."
        }
      ],
      "editorPlaceholder": "# scaled = (values - values.min()) / ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "scaled"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Min-max scaling squeezes any range into 0 to 1.",
          "The smallest value always becomes 0 and the largest 1.",
          "Use it before comparing columns measured in different units."
        ]
      }
    },
    "examples": [
      {
        "output": "[0.0, 0.33, 0.67, 1.0]"
      }
    ],
    "constraints": [
      "Use .min() and .max() — do not hardcode 10 or 40",
      "Round only when printing"
    ],
    "hints": [
      "scaled = (values - values.min()) / (values.max() - values.min())",
      "print(np.round(scaled, 2).tolist())"
    ],
    "starterCode": "# TODO: scale the values to 0-1\nimport numpy as np\n\nvalues = np.array([10, 20, 30, 40])\nscaled = None\n",
    "solutionCode": "import numpy as np\n\nvalues = np.array([10, 20, 30, 40])\nscaled = (values - values.min()) / (values.max() - values.min())\n\nprint(np.round(scaled, 2).tolist())",
    "publicTests": [
      {
        "id": "m17-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[0.0, 0.33, 0.67, 1.0]",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p06-t2",
        "label": "values scaled to 0-1",
        "assertCode": "assert (np.round(scaled, 2).tolist()) == ([0.0, 0.33, 0.67, 1.0]), \"Expected \" + repr([0.0, 0.33, 0.67, 1.0]) + \", got \" + repr(np.round(scaled, 2).tolist())",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p06-t3",
        "label": "the smallest value became 0",
        "assertCode": "assert abs(float(scaled.min())) < 1e-9, \"After min-max scaling the minimum must be 0\"",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p06-t4",
        "label": "the largest value became 1",
        "assertCode": "assert abs(float(scaled.max()) - 1.0) < 1e-9, \"After min-max scaling the maximum must be 1\"",
        "visibility": "public"
      }
    ],
    "approach": "Min-max scale an array so the smallest value becomes 0 and the largest becomes 1.\n\nReference solution:\nimport numpy as np\n\nvalues = np.array([10, 20, 30, 40])\nscaled = (values - values.min()) / (values.max() - values.min())\n\nprint(np.round(scaled, 2).tolist())"
  },
  {
    "id": "m17-t2-p07",
    "topicId": "m17-t2",
    "slug": "dist-spread-summary",
    "title": "Distributions: Range and IQR",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print the full range on line 1 and the interquartile range on line 2 to compare the two spread measures.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[10, 20, 30, 40, 50]"
        },
        {
          "type": "text",
          "value": " print "
        },
        {
          "type": "code",
          "value": "spread"
        },
        {
          "type": "text",
          "value": " (max minus min), then "
        },
        {
          "type": "code",
          "value": "iqr"
        },
        {
          "type": "text",
          "value": " (Q3 minus Q1)."
        }
      ],
      "editorPlaceholder": "# q1, q3 = np.percentile(values, [25, 75])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "spread",
        "iqr"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Range uses the two extremes; IQR uses the middle half.",
          "np.percentile returns floats, so the IQR prints as 20.0.",
          "IQR is the spread measure that ignores outliers."
        ]
      }
    },
    "examples": [
      {
        "output": "40\n20.0"
      }
    ],
    "constraints": [
      "Use np.percentile for Q1 and Q3",
      "Print the range first, then the IQR"
    ],
    "hints": [
      "q1, q3 = np.percentile(values, [25, 75])",
      "iqr = q3 - q1"
    ],
    "starterCode": "# TODO: compute both spread measures\nimport numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nspread = 0\niqr = 0.0\n",
    "solutionCode": "import numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nspread = max(values) - min(values)\nq1, q3 = np.percentile(values, [25, 75])\niqr = q3 - q1\n\nprint(spread)\nprint(iqr)",
    "publicTests": [
      {
        "id": "m17-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "40\n20.0",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p07-t2",
        "label": "range is max minus min",
        "assertCode": "assert (spread) == (40), \"Expected \" + repr(40) + \", got \" + repr(spread)",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p07-t3",
        "label": "IQR is Q3 minus Q1",
        "assertCode": "assert (round(float(iqr), 2)) == (20.0), \"Expected \" + repr(20.0) + \", got \" + repr(round(float(iqr), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t2-p07-t4",
        "label": "IQR is narrower than the range",
        "assertCode": "assert float(iqr) < spread, \"The middle half must span less than the whole range\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the full range on line 1 and the interquartile range on line 2 to compare the two spread measures.\n\nReference solution:\nimport numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nspread = max(values) - min(values)\nq1, q3 = np.percentile(values, [25, 75])\niqr = q3 - q1\n\nprint(spread)\nprint(iqr)"
  },
  {
    "id": "m17-t3-p01",
    "topicId": "m17-t3",
    "slug": "corr-perfect-positive",
    "title": "Correlation: A Perfect Positive",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Define corr_of(left, right) using np.corrcoef. Print round(corr_of([1, 2, 3], [2, 4, 6]), 2).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define corr_of(left, right) using np.corrcoef. Print round(corr_of([1, 2, 3], [2, 4, 6]), 2)."
        }
      ],
      "editorPlaceholder": "# print(round(float(np.corrcoef(a, b)[0, 1]), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "corrcoef returns a matrix; the [0, 1] cell is the correlation between the two inputs.",
          "1.0 means a perfect straight-line relationship.",
          "Correlation has no units, so it always sits between -1 and 1."
        ]
      },
      "requiresFunction": "corr_of"
    },
    "examples": [
      {
        "output": "1.0"
      }
    ],
    "constraints": [
      "Use np.corrcoef and index [0, 1]",
      "Output must be exactly: 1.0"
    ],
    "hints": [
      "return float(np.corrcoef(left, right)[0, 1])"
    ],
    "starterCode": "import numpy as np\n\ndef corr_of(left, right):\n    pass\n",
    "solutionCode": "import numpy as np\n\ndef corr_of(left, right):\n    return float(np.corrcoef(left, right)[0, 1])\n\nprint(round(corr_of([1, 2, 3], [2, 4, 6]), 2))",
    "publicTests": [
      {
        "id": "m17-t3-p01-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "1.0"
      },
      {
        "id": "m17-t3-p01-t2",
        "visibility": "public",
        "label": "perfect positive",
        "assertCode": "assert round(corr_of([1, 2, 3], [2, 4, 6]), 2) == 1.0"
      },
      {
        "id": "m17-t3-p01-t3",
        "visibility": "public",
        "label": "perfect negative",
        "assertCode": "assert round(corr_of([1, 2, 3], [6, 4, 2]), 2) == -1.0, \"Correlate the arguments, do not hardcode 1.0\""
      }
    ],
    "approach": "Define corr_of(left, right) using np.corrcoef. Print round(corr_of([1, 2, 3], [2, 4, 6]), 2).\n\nReference solution:\nimport numpy as np\n\ndef corr_of(left, right):\n    return float(np.corrcoef(left, right)[0, 1])\n\nprint(round(corr_of([1, 2, 3], [2, 4, 6]), 2))"
  },
  {
    "id": "m17-t3-p02",
    "topicId": "m17-t3",
    "slug": "corr-perfect-negative",
    "title": "Correlation: A Perfect Negative",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print the correlation of two arrays that move in exactly opposite directions.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
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
          "value": "[6, 4, 2]"
        },
        {
          "type": "text",
          "value": " print the correlation. As one rises the other falls."
        }
      ],
      "editorPlaceholder": "# print(round(float(np.corrcoef(a, b)[0, 1]), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "a",
        "b"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "-1.0 is just as strong a relationship as 1.0, only inverted.",
          "The sign tells you the direction, the size tells you the strength."
        ]
      }
    },
    "examples": [
      {
        "output": "-1.0"
      }
    ],
    "constraints": [
      "Use np.corrcoef",
      "Output must be exactly: -1.0"
    ],
    "hints": [
      "print(round(float(np.corrcoef(a, b)[0, 1]), 2))"
    ],
    "starterCode": "# TODO: print the negative correlation\nimport numpy as np\n\na = [1, 2, 3]\nb = [6, 4, 2]\n",
    "solutionCode": "import numpy as np\n\na = [1, 2, 3]\nb = [6, 4, 2]\nprint(round(float(np.corrcoef(a, b)[0, 1]), 2))",
    "publicTests": [
      {
        "id": "m17-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "-1.0",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p02-t2",
        "label": "correlation is -1.0",
        "assertCode": "assert (round(float(np.corrcoef(a, b)[0, 1]), 2)) == (-1.0), \"Expected \" + repr(-1.0) + \", got \" + repr(round(float(np.corrcoef(a, b)[0, 1]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p02-t3",
        "label": "the strength is still perfect",
        "assertCode": "assert abs(float(np.corrcoef(a, b)[0, 1])) == 1.0, \"The magnitude should be 1 even though the sign is negative\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the correlation of two arrays that move in exactly opposite directions.\n\nReference solution:\nimport numpy as np\n\na = [1, 2, 3]\nb = [6, 4, 2]\nprint(round(float(np.corrcoef(a, b)[0, 1]), 2))"
  },
  {
    "id": "m17-t3-p03",
    "topicId": "m17-t3",
    "slug": "corr-real-data",
    "title": "Correlation: Units vs Revenue",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print the correlation between units sold and revenue for five real-looking observations.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
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
          "value": "revenue"
        },
        {
          "type": "text",
          "value": " print the correlation rounded to 2 decimals. Real data is rarely exactly 1."
        }
      ],
      "editorPlaceholder": "# print(round(float(np.corrcoef(units, revenue)[0, 1]), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "units",
        "revenue"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "0.99 is a very strong positive relationship.",
          "Strong correlation is not causation — sales drive both here."
        ]
      }
    },
    "examples": [
      {
        "output": "0.99"
      }
    ],
    "constraints": [
      "Use np.corrcoef",
      "Round to 2 decimals",
      "Output must be exactly: 0.99"
    ],
    "hints": [
      "print(round(float(np.corrcoef(units, revenue)[0, 1]), 2))"
    ],
    "starterCode": "# TODO: correlate units and revenue\nimport numpy as np\n\nunits = [1, 2, 3, 4, 5]\nrevenue = [12, 18, 22, 33, 38]\n",
    "solutionCode": "import numpy as np\n\nunits = [1, 2, 3, 4, 5]\nrevenue = [12, 18, 22, 33, 38]\nprint(round(float(np.corrcoef(units, revenue)[0, 1]), 2))",
    "publicTests": [
      {
        "id": "m17-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "0.99",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p03-t2",
        "label": "correlation is 0.99",
        "assertCode": "assert (round(float(np.corrcoef(units, revenue)[0, 1]), 2)) == (0.99), \"Expected \" + repr(0.99) + \", got \" + repr(round(float(np.corrcoef(units, revenue)[0, 1]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p03-t3",
        "label": "it is strong but not perfect",
        "assertCode": "assert float(np.corrcoef(units, revenue)[0, 1]) < 1.0, \"Real data should fall just short of a perfect 1.0\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the correlation between units sold and revenue for five real-looking observations.\n\nReference solution:\nimport numpy as np\n\nunits = [1, 2, 3, 4, 5]\nrevenue = [12, 18, 22, 33, 38]\nprint(round(float(np.corrcoef(units, revenue)[0, 1]), 2))"
  },
  {
    "id": "m17-t3-p04",
    "topicId": "m17-t3",
    "slug": "corr-negative-real",
    "title": "Correlation: Price vs Demand",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Print the correlation between price and units sold, which should come out negative.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For price "
        },
        {
          "type": "code",
          "value": "[1, 2, 3, 4, 5]"
        },
        {
          "type": "text",
          "value": " and demand "
        },
        {
          "type": "code",
          "value": "[30, 22, 26, 14, 10]"
        },
        {
          "type": "text",
          "value": " print the correlation. Higher price, lower demand."
        }
      ],
      "editorPlaceholder": "# print(round(float(np.corrcoef(price, demand)[0, 1]), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "price",
        "demand"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "-0.91 is strong and negative — the classic demand curve.",
          "The single bump at 26 keeps it from reaching -1."
        ]
      }
    },
    "examples": [
      {
        "output": "-0.91"
      }
    ],
    "constraints": [
      "Use np.corrcoef",
      "Output must be exactly: -0.91"
    ],
    "hints": [
      "print(round(float(np.corrcoef(price, demand)[0, 1]), 2))"
    ],
    "starterCode": "# TODO: correlate price and demand\nimport numpy as np\n\nprice = [1, 2, 3, 4, 5]\ndemand = [30, 22, 26, 14, 10]\n",
    "solutionCode": "import numpy as np\n\nprice = [1, 2, 3, 4, 5]\ndemand = [30, 22, 26, 14, 10]\nprint(round(float(np.corrcoef(price, demand)[0, 1]), 2))",
    "publicTests": [
      {
        "id": "m17-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "-0.91",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p04-t2",
        "label": "correlation is -0.91",
        "assertCode": "assert (round(float(np.corrcoef(price, demand)[0, 1]), 2)) == (-0.91), \"Expected \" + repr(-0.91) + \", got \" + repr(round(float(np.corrcoef(price, demand)[0, 1]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p04-t3",
        "label": "the relationship is negative",
        "assertCode": "assert float(np.corrcoef(price, demand)[0, 1]) < 0, \"Demand falls as price rises, so the correlation must be negative\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the correlation between price and units sold, which should come out negative.\n\nReference solution:\nimport numpy as np\n\nprice = [1, 2, 3, 4, 5]\ndemand = [30, 22, 26, 14, 10]\nprint(round(float(np.corrcoef(price, demand)[0, 1]), 2))"
  },
  {
    "id": "m17-t3-p05",
    "topicId": "m17-t3",
    "slug": "cov-value",
    "title": "Covariance: The Unscaled Cousin",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use np.cov to print the covariance of units and revenue, rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "round(float(np.cov(units, revenue)[0, 1]), 2)"
        },
        {
          "type": "text",
          "value": ". Covariance shows direction but its size depends on the units."
        }
      ],
      "editorPlaceholder": "# print(round(float(np.cov(units, revenue)[0, 1]), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "units",
        "revenue"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Covariance and correlation share a sign but not a scale.",
          "Correlation is covariance divided by both standard deviations.",
          "That is why correlation is comparable across datasets and covariance is not."
        ]
      }
    },
    "examples": [
      {
        "output": "16.75"
      }
    ],
    "constraints": [
      "Use np.cov and index [0, 1]",
      "Output must be exactly: 16.75"
    ],
    "hints": [
      "print(round(float(np.cov(units, revenue)[0, 1]), 2))"
    ],
    "starterCode": "# TODO: print the covariance\nimport numpy as np\n\nunits = [1, 2, 3, 4, 5]\nrevenue = [12, 18, 22, 33, 38]\n",
    "solutionCode": "import numpy as np\n\nunits = [1, 2, 3, 4, 5]\nrevenue = [12, 18, 22, 33, 38]\nprint(round(float(np.cov(units, revenue)[0, 1]), 2))",
    "publicTests": [
      {
        "id": "m17-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "16.75",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p05-t2",
        "label": "covariance is 16.75",
        "assertCode": "assert (round(float(np.cov(units, revenue)[0, 1]), 2)) == (16.75), \"Expected \" + repr(16.75) + \", got \" + repr(round(float(np.cov(units, revenue)[0, 1]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p05-t3",
        "label": "covariance and correlation agree on direction",
        "assertCode": "assert float(np.cov(units, revenue)[0, 1]) > 0 and float(np.corrcoef(units, revenue)[0, 1]) > 0, \"Both should be positive for this data\"",
        "visibility": "public"
      }
    ],
    "approach": "Use np.cov to print the covariance of units and revenue, rounded to two decimals.\n\nReference solution:\nimport numpy as np\n\nunits = [1, 2, 3, 4, 5]\nrevenue = [12, 18, 22, 33, 38]\nprint(round(float(np.cov(units, revenue)[0, 1]), 2))"
  },
  {
    "id": "m17-t3-p06",
    "topicId": "m17-t3",
    "slug": "corr-dataframe",
    "title": "Correlation: Straight From a DataFrame",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Build a DataFrame of units and revenue and read the correlation out of df.corr().",
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
          "value": " with units and revenue columns, then print "
        },
        {
          "type": "code",
          "value": "round(float(df.corr().loc[\"units\", \"revenue\"]), 2)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(round(float(df.corr().loc['units', 'revenue']), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "df.corr() correlates every numeric column with every other.",
          "loc[row, column] pulls out the pair you care about.",
          "This is how you scan a whole dataset for relationships at once."
        ]
      }
    },
    "examples": [
      {
        "output": "0.99"
      }
    ],
    "constraints": [
      "Use df.corr()",
      "Output must be exactly: 0.99"
    ],
    "hints": [
      "print(round(float(df.corr().loc[\"units\", \"revenue\"]), 2))"
    ],
    "starterCode": "# TODO: correlate the two columns\nimport pandas as pd\n\ndf = pd.DataFrame({\"units\": [1, 2, 3, 4, 5], \"revenue\": [12, 18, 22, 33, 38]})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\"units\": [1, 2, 3, 4, 5], \"revenue\": [12, 18, 22, 33, 38]})\nprint(round(float(df.corr().loc[\"units\", \"revenue\"]), 2))",
    "publicTests": [
      {
        "id": "m17-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "0.99",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p06-t2",
        "label": "correlation from the frame",
        "assertCode": "assert (round(float(df.corr().loc[\"units\", \"revenue\"]), 2)) == (0.99), \"Expected \" + repr(0.99) + \", got \" + repr(round(float(df.corr().loc[\"units\", \"revenue\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p06-t3",
        "label": "a column correlates perfectly with itself",
        "assertCode": "assert (round(float(df.corr().loc[\"units\", \"units\"]), 2)) == (1.0), \"Expected \" + repr(1.0) + \", got \" + repr(round(float(df.corr().loc[\"units\", \"units\"]), 2))",
        "visibility": "public"
      }
    ],
    "approach": "Build a DataFrame of units and revenue and read the correlation out of df.corr().\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\"units\": [1, 2, 3, 4, 5], \"revenue\": [12, 18, 22, 33, 38]})\nprint(round(float(df.corr().loc[\"units\", \"revenue\"]), 2))"
  },
  {
    "id": "m17-t3-p07",
    "topicId": "m17-t3",
    "slug": "corr-matrix-strength",
    "title": "Correlation: Matrix and Verdict",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print the rounded correlation matrix, then print whether the relationship is strong or weak.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "np.round(df.corr().values, 2).tolist()"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "strong"
        },
        {
          "type": "text",
          "value": " if the absolute correlation is above "
        },
        {
          "type": "code",
          "value": "0.7"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "weak"
        },
        {
          "type": "text",
          "value": " otherwise."
        }
      ],
      "editorPlaceholder": "# matrix = df.corr()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "pd",
        "verdict"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The diagonal is always 1.0 — every column matches itself.",
          "The matrix is symmetric, so [0][1] equals [1][0].",
          "Above 0.7 in absolute terms is the usual rule of thumb for strong."
        ]
      }
    },
    "examples": [
      {
        "output": "[[1.0, 0.99], [0.99, 1.0]]\nstrong"
      }
    ],
    "constraints": [
      "Print the matrix first, then the verdict",
      "Decide the verdict with a 0.7 threshold — do not type it"
    ],
    "hints": [
      "print(np.round(matrix.values, 2).tolist())",
      "verdict = \"strong\" if strength > 0.7 else \"weak\""
    ],
    "starterCode": "# TODO: print the matrix, then the verdict\nimport numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({\"units\": [1, 2, 3, 4, 5], \"revenue\": [12, 18, 22, 33, 38]})\nverdict = \"\"\n",
    "solutionCode": "import numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({\"units\": [1, 2, 3, 4, 5], \"revenue\": [12, 18, 22, 33, 38]})\nmatrix = df.corr()\nprint(np.round(matrix.values, 2).tolist())\n\nstrength = abs(float(matrix.loc[\"units\", \"revenue\"]))\nverdict = \"strong\" if strength > 0.7 else \"weak\"\nprint(verdict)",
    "publicTests": [
      {
        "id": "m17-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[[1.0, 0.99], [0.99, 1.0]]\nstrong",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p07-t2",
        "label": "verdict is strong",
        "assertCode": "assert (verdict) == (\"strong\"), \"Expected \" + repr(\"strong\") + \", got \" + repr(verdict)",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p07-t3",
        "label": "matrix rounds as expected",
        "assertCode": "assert (np.round(matrix.values, 2).tolist()) == ([[1.0, 0.99], [0.99, 1.0]]), \"Expected \" + repr([[1.0, 0.99], [0.99, 1.0]]) + \", got \" + repr(np.round(matrix.values, 2).tolist())",
        "visibility": "public"
      },
      {
        "id": "m17-t3-p07-t4",
        "label": "the diagonal is 1.0",
        "assertCode": "assert abs(float(matrix.iloc[0, 0]) - 1.0) < 1e-9, \"Every column correlates perfectly with itself\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the rounded correlation matrix, then print whether the relationship is strong or weak.\n\nReference solution:\nimport numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({\"units\": [1, 2, 3, 4, 5], \"revenue\": [12, 18, 22, 33, 38]})\nmatrix = df.corr()\nprint(np.round(matrix.values, 2).tolist())\n\nstrength = abs(float(matrix.loc[\"units\", \"revenue\"]))\nverdict = \"strong\" if strength > 0.7 else \"weak\"\nprint(verdict)"
  },
  {
    "id": "m17-t4-p01",
    "topicId": "m17-t4",
    "slug": "outlier-mean-vs-median",
    "title": "Outliers: Mean vs Median",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print the mean and then the median of an order list containing one huge value to show how the mean is dragged.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "For "
        },
        {
          "type": "code",
          "value": "[12, 14, 15, 16, 18, 60]"
        },
        {
          "type": "text",
          "value": " print the mean, then the median. The gap between them is your first outlier warning."
        }
      ],
      "editorPlaceholder": "# print(float(np.mean(orders)))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "orders"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Use float(np.mean(orders)) and float(np.median(orders)).",
          "One large order pulls the mean far above the median.",
          "A big mean-median gap always deserves a second look."
        ]
      }
    },
    "examples": [
      {
        "output": "22.5\n15.5"
      }
    ],
    "constraints": [
      "Print the mean first, then the median",
      "Wrap both in float()"
    ],
    "hints": [
      "print(float(np.mean(orders)))",
      "print(float(np.median(orders)))"
    ],
    "starterCode": "# TODO: print the mean, then the median\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\n",
    "solutionCode": "import numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nprint(float(np.mean(orders)))\nprint(float(np.median(orders)))",
    "publicTests": [
      {
        "id": "m17-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "22.5\n15.5",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p01-t2",
        "label": "mean is dragged up",
        "assertCode": "assert (float(np.mean(orders))) == (22.5), \"Expected \" + repr(22.5) + \", got \" + repr(float(np.mean(orders)))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p01-t3",
        "label": "median stays central",
        "assertCode": "assert (float(np.median(orders))) == (15.5), \"Expected \" + repr(15.5) + \", got \" + repr(float(np.median(orders)))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p01-t4",
        "label": "the mean sits above the median",
        "assertCode": "assert float(np.mean(orders)) > float(np.median(orders)), \"The outlier should pull the mean above the median\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the mean and then the median of an order list containing one huge value to show how the mean is dragged.\n\nReference solution:\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nprint(float(np.mean(orders)))\nprint(float(np.median(orders)))"
  },
  {
    "id": "m17-t4-p02",
    "topicId": "m17-t4",
    "slug": "outlier-iqr-bounds",
    "title": "Outliers: Compute the IQR Fences",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Compute Q1, Q3, and the 1.5x IQR fences, then print the lower and upper bound rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compute "
        },
        {
          "type": "code",
          "value": "q1, q3 = np.percentile(orders, [25, 75])"
        },
        {
          "type": "text",
          "value": ", then "
        },
        {
          "type": "code",
          "value": "lower = q1 - 1.5 * iqr"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "upper = q3 + 1.5 * iqr"
        },
        {
          "type": "text",
          "value": ". Print both rounded to 2 decimals."
        }
      ],
      "editorPlaceholder": "# q1, q3 = np.percentile(orders, [25, 75])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "lower",
        "upper"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "IQR = Q3 - Q1, the span of the middle half.",
          "The 1.5x fence is the standard cut-off for flagging outliers.",
          "Print the lower bound first."
        ]
      }
    },
    "examples": [
      {
        "output": "9.38\n22.38"
      }
    ],
    "constraints": [
      "Use np.percentile for Q1 and Q3",
      "Use the 1.5 x IQR rule",
      "Print the lower bound, then the upper bound"
    ],
    "hints": [
      "q1, q3 = np.percentile(orders, [25, 75])",
      "lower = q1 - 1.5 * (q3 - q1)"
    ],
    "starterCode": "# TODO: compute the fences\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nlower = 0.0\nupper = 0.0\n",
    "solutionCode": "import numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\nprint(round(float(lower), 2))\nprint(round(float(upper), 2))",
    "publicTests": [
      {
        "id": "m17-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "9.38\n22.38",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p02-t2",
        "label": "lower fence",
        "assertCode": "assert (round(float(lower), 2)) == (9.38), \"Expected \" + repr(9.38) + \", got \" + repr(round(float(lower), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p02-t3",
        "label": "upper fence",
        "assertCode": "assert (round(float(upper), 2)) == (22.38), \"Expected \" + repr(22.38) + \", got \" + repr(round(float(upper), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p02-t4",
        "label": "the fences come from the IQR",
        "assertCode": "assert float(upper) > float(lower), \"The upper fence must sit above the lower fence\"",
        "visibility": "public"
      }
    ],
    "approach": "Compute Q1, Q3, and the 1.5x IQR fences, then print the lower and upper bound rounded to two decimals.\n\nReference solution:\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\nprint(round(float(lower), 2))\nprint(round(float(upper), 2))"
  },
  {
    "id": "m17-t4-p03",
    "topicId": "m17-t4",
    "slug": "outlier-filter-iqr",
    "title": "Outliers: Keep Only the Normal Rows",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Use the IQR fences to build a list of values inside the bounds and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build "
        },
        {
          "type": "code",
          "value": "clean"
        },
        {
          "type": "text",
          "value": " with every order between "
        },
        {
          "type": "code",
          "value": "lower"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "upper"
        },
        {
          "type": "text",
          "value": ", then print it. The 60 should disappear."
        }
      ],
      "editorPlaceholder": "# clean = [v for v in orders if ...]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "clean"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Filter with a comprehension and an inclusive range test.",
          "Compute the fences from the data — never type them in.",
          "Always report how many rows you dropped."
        ]
      }
    },
    "examples": [
      {
        "output": "[12, 14, 15, 16, 18]"
      }
    ],
    "constraints": [
      "Filter with the computed fences",
      "Do not modify orders",
      "Output must be exactly: [12, 14, 15, 16, 18]"
    ],
    "hints": [
      "clean = [value for value in orders if lower <= value <= upper]"
    ],
    "starterCode": "# TODO: keep values inside the fences\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\nclean = []\n",
    "solutionCode": "import numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\nclean = [value for value in orders if lower <= value <= upper]\nprint(clean)",
    "publicTests": [
      {
        "id": "m17-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "[12, 14, 15, 16, 18]",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p03-t2",
        "label": "the outlier is gone",
        "assertCode": "assert (clean) == ([12, 14, 15, 16, 18]), \"Expected \" + repr([12, 14, 15, 16, 18]) + \", got \" + repr(clean)",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p03-t3",
        "label": "60 was excluded",
        "assertCode": "assert 60 not in clean, \"The 60 order sits outside the fences and should be dropped\"",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p03-t4",
        "label": "the source list is unchanged",
        "assertCode": "assert (len(orders)) == (6), \"Expected \" + repr(6) + \", got \" + repr(len(orders))",
        "visibility": "public"
      }
    ],
    "approach": "Use the IQR fences to build a list of values inside the bounds and print it.\n\nReference solution:\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\nclean = [value for value in orders if lower <= value <= upper]\nprint(clean)"
  },
  {
    "id": "m17-t4-p04",
    "topicId": "m17-t4",
    "slug": "outlier-count",
    "title": "Outliers: How Many Are There?",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Define outlier_count(values) using 1.5x IQR fences. Print outlier_count([12, 14, 15, 16, 18, 60]).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define outlier_count(values) using 1.5x IQR fences. Print outlier_count([12, 14, 15, 16, 18, 60])."
        }
      ],
      "editorPlaceholder": "# outlier_count = len([...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Invert the earlier condition: below lower or above upper.",
          "Reporting the count is how you justify cleaning the data."
        ]
      },
      "requiresFunction": "outlier_count"
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Count values below lower or above upper",
      "Store the count in outlier_count",
      "Output must be exactly: 1"
    ],
    "hints": [
      "Count values below lower or above upper."
    ],
    "starterCode": "import numpy as np\n\ndef outlier_count(values):\n    pass\n",
    "solutionCode": "import numpy as np\n\ndef outlier_count(values):\n    q1, q3 = np.percentile(values, [25, 75])\n    iqr = q3 - q1\n    lower = q1 - 1.5 * iqr\n    upper = q3 + 1.5 * iqr\n    return len([v for v in values if v < lower or v > upper])\n\nprint(outlier_count([12, 14, 15, 16, 18, 60]))",
    "publicTests": [
      {
        "id": "m17-t4-p04-t1",
        "visibility": "public",
        "label": "Sample Case",
        "expectedStdout": "1"
      },
      {
        "id": "m17-t4-p04-t2",
        "visibility": "public",
        "label": "sample list",
        "assertCode": "assert outlier_count([12, 14, 15, 16, 18, 60]) == 1"
      },
      {
        "id": "m17-t4-p04-t3",
        "visibility": "public",
        "label": "no outliers",
        "assertCode": "assert outlier_count([10, 11, 12, 13, 14]) == 0, \"Count outliers in the argument\""
      }
    ],
    "approach": "Define outlier_count(values) using 1.5x IQR fences. Print outlier_count([12, 14, 15, 16, 18, 60]).\n\nReference solution:\nimport numpy as np\n\ndef outlier_count(values):\n    q1, q3 = np.percentile(values, [25, 75])\n    iqr = q3 - q1\n    lower = q1 - 1.5 * iqr\n    upper = q3 + 1.5 * iqr\n    return len([v for v in values if v < lower or v > upper])\n\nprint(outlier_count([12, 14, 15, 16, 18, 60]))"
  },
  {
    "id": "m17-t4-p05",
    "topicId": "m17-t4",
    "slug": "outlier-zscore",
    "title": "Outliers: The Z-Score Method",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Convert the orders to z-scores and print the largest one rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compute "
        },
        {
          "type": "code",
          "value": "z = (values - values.mean()) / values.std()"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "round(float(z.max()), 2)"
        },
        {
          "type": "text",
          "value": ". A z-score above 3 is the usual outlier threshold."
        }
      ],
      "editorPlaceholder": "# z = (values - values.mean()) / values.std()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "z"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A z-score says how many standard deviations a value sits from the mean.",
          "The outlier inflates the standard deviation, which shrinks its own z-score.",
          "That is why IQR is often the better method for small samples."
        ]
      }
    },
    "examples": [
      {
        "output": "2.22"
      }
    ],
    "constraints": [
      "Use .mean() and .std() — no hardcoded numbers",
      "Output must be exactly: 2.22"
    ],
    "hints": [
      "z = (values - values.mean()) / values.std()",
      "print(round(float(z.max()), 2))"
    ],
    "starterCode": "# TODO: compute the z-scores\nimport numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\nz = None\n",
    "solutionCode": "import numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\nz = (values - values.mean()) / values.std()\n\nprint(round(float(z.max()), 2))",
    "publicTests": [
      {
        "id": "m17-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "2.22",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p05-t2",
        "label": "largest z-score",
        "assertCode": "assert (round(float(z.max()), 2)) == (2.22), \"Expected \" + repr(2.22) + \", got \" + repr(round(float(z.max()), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p05-t3",
        "label": "the z-scores average to zero",
        "assertCode": "assert abs(float(z.mean())) < 1e-9, \"Z-scores are centred, so their mean must be 0\"",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p05-t4",
        "label": "the largest z-score belongs to the 60",
        "assertCode": "assert int(np.argmax(z)) == 5, \"The biggest order should have the highest z-score\"",
        "visibility": "public"
      }
    ],
    "approach": "Convert the orders to z-scores and print the largest one rounded to two decimals.\n\nReference solution:\nimport numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\nz = (values - values.mean()) / values.std()\n\nprint(round(float(z.max()), 2))"
  },
  {
    "id": "m17-t4-p06",
    "topicId": "m17-t4",
    "slug": "outlier-clip",
    "title": "Outliers: Cap Instead of Drop",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Use np.clip to cap every order at 20 instead of deleting the outlier, then print the result.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "np.clip(values, None, 20).tolist()"
        },
        {
          "type": "text",
          "value": " — capping keeps the row but limits its influence. This is called winsorising."
        }
      ],
      "editorPlaceholder": "# capped = np.clip(values, None, 20)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "capped"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "np.clip(values, minimum, maximum) squeezes values into a range.",
          "None as the minimum means no lower limit.",
          "Capping keeps your row count intact, unlike dropping."
        ]
      }
    },
    "examples": [
      {
        "output": "[12, 14, 15, 16, 18, 20]"
      }
    ],
    "constraints": [
      "Use np.clip with an upper bound of 20",
      "Keep all six values",
      "Output must be exactly: [12, 14, 15, 16, 18, 20]"
    ],
    "hints": [
      "capped = np.clip(values, None, 20)",
      "print(capped.tolist())"
    ],
    "starterCode": "# TODO: cap the values at 20\nimport numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\ncapped = None\n",
    "solutionCode": "import numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\ncapped = np.clip(values, None, 20)\n\nprint(capped.tolist())",
    "publicTests": [
      {
        "id": "m17-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[12, 14, 15, 16, 18, 20]",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p06-t2",
        "label": "the 60 was capped to 20",
        "assertCode": "assert (capped.tolist()) == ([12, 14, 15, 16, 18, 20]), \"Expected \" + repr([12, 14, 15, 16, 18, 20]) + \", got \" + repr(capped.tolist())",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p06-t3",
        "label": "no rows were lost",
        "assertCode": "assert (len(capped)) == (6), \"Expected \" + repr(6) + \", got \" + repr(len(capped))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p06-t4",
        "label": "nothing exceeds the cap",
        "assertCode": "assert (int(capped.max())) == (20), \"Expected \" + repr(20) + \", got \" + repr(int(capped.max()))",
        "visibility": "public"
      }
    ],
    "approach": "Use np.clip to cap every order at 20 instead of deleting the outlier, then print the result.\n\nReference solution:\nimport numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\ncapped = np.clip(values, None, 20)\n\nprint(capped.tolist())"
  },
  {
    "id": "m17-t4-p07",
    "topicId": "m17-t4",
    "slug": "outlier-report",
    "title": "Outliers: Report What You Removed",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print the list of outlier values, then the mean of the remaining orders rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Using the IQR fences, build "
        },
        {
          "type": "code",
          "value": "outliers"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "clean"
        },
        {
          "type": "text",
          "value": ". Print the outlier list, then the mean of the clean values."
        }
      ],
      "editorPlaceholder": "# outliers = [...]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "np",
        "outliers",
        "clean"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Build both lists from the same fences so nothing is double counted.",
          "The clean mean (15.0) is far below the raw mean (22.5).",
          "Never remove rows without reporting which ones and why."
        ]
      }
    },
    "examples": [
      {
        "output": "[60]\n15.0"
      }
    ],
    "constraints": [
      "Split the data into outliers and clean",
      "Print the outliers, then the clean mean"
    ],
    "hints": [
      "outliers = [v for v in orders if v < lower or v > upper]",
      "print(round(float(np.mean(clean)), 2))"
    ],
    "starterCode": "# TODO: report the outliers and the clean mean\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\noutliers = []\nclean = []\n",
    "solutionCode": "import numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\noutliers = [value for value in orders if value < lower or value > upper]\nclean = [value for value in orders if lower <= value <= upper]\n\nprint(outliers)\nprint(round(float(np.mean(clean)), 2))",
    "publicTests": [
      {
        "id": "m17-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[60]\n15.0",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p07-t2",
        "label": "the outlier list",
        "assertCode": "assert (outliers) == ([60]), \"Expected \" + repr([60]) + \", got \" + repr(outliers)",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p07-t3",
        "label": "clean mean",
        "assertCode": "assert (round(float(np.mean(clean)), 2)) == (15.0), \"Expected \" + repr(15.0) + \", got \" + repr(round(float(np.mean(clean)), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p07-t4",
        "label": "every order is in exactly one list",
        "assertCode": "assert (len(outliers) + len(clean)) == (len(orders)), \"Expected \" + repr(len(orders)) + \", got \" + repr(len(outliers) + len(clean))",
        "visibility": "public"
      },
      {
        "id": "m17-t4-p07-t5",
        "label": "removing the outlier lowered the mean",
        "assertCode": "assert float(np.mean(clean)) < float(np.mean(orders)), \"The clean mean should be lower than the raw mean\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the list of outlier values, then the mean of the remaining orders rounded to two decimals.\n\nReference solution:\nimport numpy as np\n\norders = [12, 14, 15, 16, 18, 60]\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\noutliers = [value for value in orders if value < lower or value > upper]\nclean = [value for value in orders if lower <= value <= upper]\n\nprint(outliers)\nprint(round(float(np.mean(clean)), 2))"
  },
  {
    "id": "m17-t5-p01",
    "topicId": "m17-t5",
    "slug": "eda-shape",
    "title": "EDA: How Big Is the Dataset?",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Load the retail sales frame and print its shape as the first step of any EDA.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build the retail frame with region, category, units, and revenue, then print "
        },
        {
          "type": "code",
          "value": "df.shape"
        },
        {
          "type": "text",
          "value": ". Step one of EDA is always: how many rows and columns?"
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
          "Note that one revenue value is None — that matters later.",
          "Knowing the size tells you whether your later numbers are plausible."
        ]
      }
    },
    "examples": [
      {
        "output": "(5, 4)"
      }
    ],
    "constraints": [
      "Column order: region, category, units, revenue",
      "Output must be exactly: (5, 4)"
    ],
    "hints": [
      "print(df.shape)"
    ],
    "starterCode": "# TODO: build the frame and print its shape\nimport pandas as pd\n\ndf = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(df.shape)",
    "publicTests": [
      {
        "id": "m17-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(5, 4)",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p01-t2",
        "label": "five rows, four columns",
        "assertCode": "assert (df.shape) == ((5, 4)), \"Expected \" + repr((5, 4)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p01-t3",
        "label": "columns in order",
        "assertCode": "assert (list(df.columns)) == ([\"region\", \"category\", \"units\", \"revenue\"]), \"Expected \" + repr([\"region\", \"category\", \"units\", \"revenue\"]) + \", got \" + repr(list(df.columns))",
        "visibility": "public"
      }
    ],
    "approach": "Load the retail sales frame and print its shape as the first step of any EDA.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(df.shape)"
  },
  {
    "id": "m17-t5-p02",
    "topicId": "m17-t5",
    "slug": "eda-missing-total",
    "title": "EDA: Count Every Missing Value",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print the total number of missing values across the whole frame using isna().sum().sum().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "int(df.isna().sum().sum())"
        },
        {
          "type": "text",
          "value": " — the first sum counts per column, the second totals them."
        }
      ],
      "editorPlaceholder": "# print(int(df.isna().sum().sum()))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "df.isna() gives a True/False frame the same shape as your data.",
          "Summing twice collapses it to one number.",
          "Step two of EDA is always: what is missing?"
        ]
      }
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Use isna().sum().sum()",
      "Output must be exactly: 1"
    ],
    "hints": [
      "print(int(df.isna().sum().sum()))"
    ],
    "starterCode": "# TODO: total the missing values\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(int(df.isna().sum().sum()))",
    "publicTests": [
      {
        "id": "m17-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "1",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p02-t2",
        "label": "one missing value",
        "assertCode": "assert (int(df.isna().sum().sum())) == (1), \"Expected \" + repr(1) + \", got \" + repr(int(df.isna().sum().sum()))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p02-t3",
        "label": "it is in the revenue column",
        "assertCode": "assert (int(df[\"revenue\"].isna().sum())) == (1), \"Expected \" + repr(1) + \", got \" + repr(int(df[\"revenue\"].isna().sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Print the total number of missing values across the whole frame using isna().sum().sum().\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(int(df.isna().sum().sum()))"
  },
  {
    "id": "m17-t5-p03",
    "topicId": "m17-t5",
    "slug": "eda-mean-revenue",
    "title": "EDA: Average Revenue",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print the mean revenue rounded to two decimals, noting that pandas skips the missing value.",
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
          "value": ". pandas divides by 4, not 5, because one value is missing."
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
          ".mean() ignores NaN by default.",
          "So the denominator is the count of present values.",
          "Know that rule or your averages will quietly mislead you."
        ]
      }
    },
    "examples": [
      {
        "output": "115.0"
      }
    ],
    "constraints": [
      "Use .mean()",
      "Round to 2 decimals",
      "Output must be exactly: 115.0"
    ],
    "hints": [
      "print(round(float(df[\"revenue\"].mean()), 2))"
    ],
    "starterCode": "# TODO: average the revenue\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(round(float(df[\"revenue\"].mean()), 2))",
    "publicTests": [
      {
        "id": "m17-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "115.0",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p03-t2",
        "label": "mean revenue",
        "assertCode": "assert (round(float(df[\"revenue\"].mean()), 2)) == (115.0), \"Expected \" + repr(115.0) + \", got \" + repr(round(float(df[\"revenue\"].mean()), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p03-t3",
        "label": "only four values counted",
        "assertCode": "assert (int(df[\"revenue\"].count())) == (4), \"Expected \" + repr(4) + \", got \" + repr(int(df[\"revenue\"].count()))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p03-t4",
        "label": "the missing value was skipped, not treated as zero",
        "assertCode": "assert abs(float(df[\"revenue\"].mean()) - 460 / 4) < 1e-9, \"The mean divides by 4 present values, not 5 rows\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the mean revenue rounded to two decimals, noting that pandas skips the missing value.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(round(float(df[\"revenue\"].mean()), 2))"
  },
  {
    "id": "m17-t5-p04",
    "topicId": "m17-t5",
    "slug": "eda-group-means",
    "title": "EDA: Revenue per Region",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Group by region and print the mean revenue for each as a dict of rounded floats.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Group by "
        },
        {
          "type": "code",
          "value": "region"
        },
        {
          "type": "text",
          "value": " and print the mean revenue per region. South has only one usable value because of the missing row."
        }
      ],
      "editorPlaceholder": "# by_region = df.groupby(\"region\")[\"revenue\"].mean()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "by_region"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "groupby().mean() skips missing values within each group.",
          "Regions come back in alphabetical order.",
          "Segment averages are where the story usually is."
        ]
      }
    },
    "examples": [
      {
        "output": "{'East': 120.0, 'North': 120.0, 'South': 100.0}"
      }
    ],
    "constraints": [
      "Use groupby().mean()",
      "Print values as rounded floats"
    ],
    "hints": [
      "by_region = df.groupby(\"region\")[\"revenue\"].mean()",
      "print({k: round(float(v), 2) for k, v in by_region.items()})"
    ],
    "starterCode": "# TODO: mean revenue per region\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nby_region = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nby_region = df.groupby(\"region\")[\"revenue\"].mean()\nprint({k: round(float(v), 2) for k, v in by_region.items()})",
    "publicTests": [
      {
        "id": "m17-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "{'East': 120.0, 'North': 120.0, 'South': 100.0}",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p04-t2",
        "label": "North average",
        "assertCode": "assert (round(float(by_region[\"North\"]), 2)) == (120.0), \"Expected \" + repr(120.0) + \", got \" + repr(round(float(by_region[\"North\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p04-t3",
        "label": "South average",
        "assertCode": "assert (round(float(by_region[\"South\"]), 2)) == (100.0), \"Expected \" + repr(100.0) + \", got \" + repr(round(float(by_region[\"South\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p04-t4",
        "label": "three regions",
        "assertCode": "assert (len(by_region)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(by_region))",
        "visibility": "public"
      }
    ],
    "approach": "Group by region and print the mean revenue for each as a dict of rounded floats.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nby_region = df.groupby(\"region\")[\"revenue\"].mean()\nprint({k: round(float(v), 2) for k, v in by_region.items()})"
  },
  {
    "id": "m17-t5-p05",
    "topicId": "m17-t5",
    "slug": "eda-top-region",
    "title": "EDA: Which Region Leads?",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use groupby sum and idxmax to print the name of the region with the highest total revenue.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "df.groupby(\"region\")[\"revenue\"].sum().idxmax()"
        },
        {
          "type": "text",
          "value": " — idxmax returns the label of the largest value, not the value itself."
        }
      ],
      "editorPlaceholder": "# top_region = totals.idxmax()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "top_region"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "max() gives the number; idxmax() gives the name.",
          "The name is what belongs in a report sentence.",
          "North totals 240 from its two rows."
        ]
      }
    },
    "examples": [
      {
        "output": "North"
      }
    ],
    "constraints": [
      "Use groupby().sum() and idxmax()",
      "Output must be exactly: North"
    ],
    "hints": [
      "totals = df.groupby(\"region\")[\"revenue\"].sum()",
      "top_region = totals.idxmax()"
    ],
    "starterCode": "# TODO: find the leading region\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\ntop_region = \"\"\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\ntotals = df.groupby(\"region\")[\"revenue\"].sum()\ntop_region = totals.idxmax()\n\nprint(top_region)",
    "publicTests": [
      {
        "id": "m17-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "North",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p05-t2",
        "label": "North leads",
        "assertCode": "assert (top_region) == (\"North\"), \"Expected \" + repr(\"North\") + \", got \" + repr(top_region)",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p05-t3",
        "label": "North total is 240",
        "assertCode": "assert (round(float(totals[\"North\"]), 2)) == (240.0), \"Expected \" + repr(240.0) + \", got \" + repr(round(float(totals[\"North\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p05-t4",
        "label": "the label was found, not typed",
        "assertCode": "assert top_region == totals.idxmax(), \"Use idxmax() to find the leading region\"",
        "visibility": "public"
      }
    ],
    "approach": "Use groupby sum and idxmax to print the name of the region with the highest total revenue.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\ntotals = df.groupby(\"region\")[\"revenue\"].sum()\ntop_region = totals.idxmax()\n\nprint(top_region)"
  },
  {
    "id": "m17-t5-p06",
    "topicId": "m17-t5",
    "slug": "eda-correlation",
    "title": "EDA: Do Units Drive Revenue?",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Print the correlation between units and revenue for this dataset, rounded to two decimals.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2)"
        },
        {
          "type": "text",
          "value": ". The answer is negative here — a good reminder to check rather than assume."
        }
      ],
      "editorPlaceholder": "# print(round(float(df[[...]].corr().loc[...]), 2))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "corr() drops rows where either value is missing.",
          "-0.25 is weak, so units alone do not explain revenue in this sample.",
          "Five rows is far too few to conclude anything — sample size matters."
        ]
      }
    },
    "examples": [
      {
        "output": "-0.25"
      }
    ],
    "constraints": [
      "Use .corr()",
      "Round to 2 decimals",
      "Output must be exactly: -0.25"
    ],
    "hints": [
      "print(round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2))"
    ],
    "starterCode": "# TODO: correlate units and revenue\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2))",
    "publicTests": [
      {
        "id": "m17-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "-0.25",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p06-t2",
        "label": "correlation is -0.25",
        "assertCode": "assert (round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2)) == (-0.25), \"Expected \" + repr(-0.25) + \", got \" + repr(round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p06-t3",
        "label": "the relationship is weak",
        "assertCode": "assert abs(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"])) < 0.7, \"This correlation is weak, well under the 0.7 rule of thumb\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the correlation between units and revenue for this dataset, rounded to two decimals.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nprint(round(float(df[[\"units\", \"revenue\"]].corr().loc[\"units\", \"revenue\"]), 2))"
  },
  {
    "id": "m17-t5-p07",
    "topicId": "m17-t5",
    "slug": "eda-final-report",
    "title": "EDA: Write the Three-Line Summary",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Print the row count, the leading region, and the total revenue as a three-line EDA summary.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Finish the EDA with three lines: "
        },
        {
          "type": "code",
          "value": "rows=5"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "top_region=North"
        },
        {
          "type": "text",
          "value": ", and "
        },
        {
          "type": "code",
          "value": "total_revenue=460.0"
        },
        {
          "type": "text",
          "value": ". Every number must be computed."
        }
      ],
      "editorPlaceholder": "# rows = len(df)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "rows",
        "top_region",
        "total_revenue"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "rows = len(df); total = float(df[\"revenue\"].sum()).",
          "sum() skips the missing value, so the total is 460.0.",
          "Format each line with an f-string like f\"rows={rows}\""
        ]
      }
    },
    "examples": [
      {
        "output": "rows=5\ntop_region=North\ntotal_revenue=460.0"
      }
    ],
    "constraints": [
      "Compute all three values from df",
      "One line each, in the order rows, top_region, total_revenue"
    ],
    "hints": [
      "top_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()",
      "print(f\"rows={rows}\")"
    ],
    "starterCode": "# TODO: build the three-line summary\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nrows = 0\ntop_region = \"\"\ntotal_revenue = 0.0\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nrows = len(df)\ntop_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()\ntotal_revenue = round(float(df[\"revenue\"].sum()), 2)\n\nprint(f\"rows={rows}\")\nprint(f\"top_region={top_region}\")\nprint(f\"total_revenue={total_revenue}\")",
    "publicTests": [
      {
        "id": "m17-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "rows=5\ntop_region=North\ntotal_revenue=460.0",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p07-t2",
        "label": "row count",
        "assertCode": "assert (rows) == (5), \"Expected \" + repr(5) + \", got \" + repr(rows)",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p07-t3",
        "label": "leading region",
        "assertCode": "assert (top_region) == (\"North\"), \"Expected \" + repr(\"North\") + \", got \" + repr(top_region)",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p07-t4",
        "label": "total revenue",
        "assertCode": "assert (total_revenue) == (460.0), \"Expected \" + repr(460.0) + \", got \" + repr(total_revenue)",
        "visibility": "public"
      },
      {
        "id": "m17-t5-p07-t5",
        "label": "every figure came from the frame",
        "assertCode": "assert rows == len(df) and abs(total_revenue - float(df[\"revenue\"].sum())) < 1e-9, \"Compute the numbers from df rather than typing them\"",
        "visibility": "public"
      }
    ],
    "approach": "Print the row count, the leading region, and the total revenue as a three-line EDA summary.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"South\", \"North\", \"South\", \"East\", \"North\"],\n    \"category\": [\"pen\", \"book\", \"bag\", \"pen\", \"bag\"],\n    \"units\": [10, 5, 8, 12, 6],\n    \"revenue\": [100.0, 150.0, None, 120.0, 90.0],\n})\n\nrows = len(df)\ntop_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()\ntotal_revenue = round(float(df[\"revenue\"].sum()), 2)\n\nprint(f\"rows={rows}\")\nprint(f\"top_region={top_region}\")\nprint(f\"total_revenue={total_revenue}\")"
  }
];
