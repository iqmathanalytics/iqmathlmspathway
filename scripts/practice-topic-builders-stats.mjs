/**
 * Module 17 topics 1-3 — descriptive statistics, distributions, correlation.
 * Uses the statistics module, NumPy, and pandas. Every printed value is a plain
 * int/float/list/dict so the browser and local interpreters agree.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

const SALES = "sales = [12, 15, 20, 25, 28]";

export function descriptiveStatsTasks() {
  return [
    conceptTask({
      slug: "desc-mean",
      title: "Descriptive: The Mean",
      level: "easy",
      description:
        "Use statistics.mean to print the average of five daily sales figures.",
      expected: "20",
      intro: [
        seg("text", "Import "),
        seg("code", "statistics"),
        seg("text", " and print "),
        seg("code", "statistics.mean(sales)"),
        seg("text", " for "),
        seg("code", "[12, 15, 20, 25, 28]"),
        seg("text", "."),
      ],
      steps: [
        "The mean is the sum divided by the count.",
        "statistics is in the standard library — no install needed.",
        "It returns an int when the result is whole.",
      ],
      starter: `# TODO: print the mean\nimport statistics\n\n${SALES}\n`,
      solution: `import statistics\n\n${SALES}\nprint(statistics.mean(sales))`,
      checks: [
        assertTrue("statistics was imported", '"statistics" in globals()', "Import statistics first"),
        assertEquals("mean is correct", "statistics.mean(sales)", "20"),
        assertEquals("the data is unchanged", "sales", "[12, 15, 20, 25, 28]"),
      ],
      vars: ["statistics", "sales"],
      constraints: ["Use statistics.mean", "Output must be exactly: 20"],
      hints: ["print(statistics.mean(sales))"],
      placeholder: "# print(statistics.mean(sales))",
    }),

    conceptTask({
      slug: "desc-median",
      title: "Descriptive: The Median",
      level: "easy",
      description: "Use statistics.median to print the middle value of the sales list.",
      expected: "20",
      intro: [
        seg("text", "Print "),
        seg("code", "statistics.median(sales)"),
        seg("text", ". With five sorted values, the median is the third one."),
      ],
      steps: [
        "The median splits the data in half.",
        "It barely moves when one value is extreme, unlike the mean.",
      ],
      starter: `# TODO: print the median\nimport statistics\n\n${SALES}\n`,
      solution: `import statistics\n\n${SALES}\nprint(statistics.median(sales))`,
      checks: [
        assertEquals("median is correct", "statistics.median(sales)", "20"),
        assertTrue(
          "median resists an outlier",
          "statistics.median(sales + [500]) < statistics.mean(sales + [500])",
          "Adding a huge value should move the mean far more than the median",
        ),
      ],
      vars: ["statistics", "sales"],
      constraints: ["Use statistics.median", "Output must be exactly: 20"],
      hints: ["print(statistics.median(sales))"],
      placeholder: "# print(statistics.median(sales))",
    }),

    conceptTask({
      slug: "desc-mode",
      title: "Descriptive: The Mode",
      level: "easy",
      description:
        "Use statistics.mode to print the most common customer rating.",
      expected: "5",
      intro: [
        seg("text", "For ratings "),
        seg("code", "[4, 5, 5, 3, 5]"),
        seg("text", " print "),
        seg("code", "statistics.mode(ratings)"),
        seg("text", " — the value that appears most often."),
      ],
      steps: [
        "The mode is the only average that works on categories.",
        "Use it for ratings, regions, and product names.",
      ],
      starter:
        "# TODO: print the most common rating\nimport statistics\n\nratings = [4, 5, 5, 3, 5]\n",
      solution:
        "import statistics\n\nratings = [4, 5, 5, 3, 5]\nprint(statistics.mode(ratings))",
      checks: [
        assertEquals("mode is the most frequent value", "statistics.mode(ratings)", "5"),
        assertEquals("5 really appears three times", "ratings.count(5)", "3"),
      ],
      vars: ["statistics", "ratings"],
      constraints: ["Use statistics.mode", "Output must be exactly: 5"],
      hints: ["print(statistics.mode(ratings))"],
      placeholder: "# print(statistics.mode(ratings))",
    }),

    conceptTask({
      slug: "desc-range",
      title: "Descriptive: The Range",
      level: "medium",
      description:
        "Compute max minus min into a variable named spread and print it.",
      expected: "16",
      intro: [
        seg("text", "Store "),
        seg("code", "max(sales) - min(sales)"),
        seg("text", " in "),
        seg("code", "spread"),
        seg("text", " and print it. The range is the crudest measure of spread."),
      ],
      steps: [
        "Range = max - min.",
        "It uses only two values, so a single outlier dominates it.",
      ],
      starter: `# TODO: compute the range\n${SALES}\nspread = 0\n`,
      solution: `${SALES}\nspread = max(sales) - min(sales)\nprint(spread)`,
      checks: [
        assertEquals("spread is max minus min", "spread", "16"),
        assertEquals("computed from the data", "spread", "max(sales) - min(sales)"),
      ],
      vars: ["sales", "spread"],
      constraints: [
        "Use max() and min() — do not type 16",
        "Store the result in spread",
      ],
      hints: ["spread = max(sales) - min(sales)"],
      placeholder: "# spread = max(sales) - min(sales)",
    }),

    conceptTask({
      slug: "desc-variance",
      title: "Descriptive: The Variance",
      level: "medium",
      description:
        "Use statistics.pvariance to print the population variance rounded to two decimals.",
      expected: "35.6",
      intro: [
        seg("text", "Print "),
        seg("code", "round(statistics.pvariance(sales), 2)"),
        seg("text", " — the average squared distance from the mean."),
      ],
      steps: [
        "pvariance treats the data as the whole population.",
        "variance() would divide by n-1 for a sample instead.",
        "Variance is in squared units, which is why the standard deviation is easier to read.",
      ],
      starter: `# TODO: print the population variance\nimport statistics\n\n${SALES}\n`,
      solution: `import statistics\n\n${SALES}\nprint(round(statistics.pvariance(sales), 2))`,
      checks: [
        assertEquals("variance is correct", "round(statistics.pvariance(sales), 2)", "35.6"),
        assertTrue(
          "sample variance is larger",
          "statistics.variance(sales) > statistics.pvariance(sales)",
          "Dividing by n-1 gives a larger number than dividing by n",
        ),
      ],
      vars: ["statistics", "sales"],
      constraints: ["Use statistics.pvariance", "Round to 2 decimals", "Output must be exactly: 35.6"],
      hints: ["print(round(statistics.pvariance(sales), 2))"],
      placeholder: "# print(round(statistics.pvariance(sales), 2))",
    }),

    conceptTask({
      slug: "desc-stdev",
      title: "Descriptive: The Standard Deviation",
      level: "medium",
      description:
        "Use statistics.pstdev to print the standard deviation rounded to two decimals.",
      expected: "5.97",
      intro: [
        seg("text", "Print "),
        seg("code", "round(statistics.pstdev(sales), 2)"),
        seg("text", " — the square root of the variance, back in the original units."),
      ],
      steps: [
        "The standard deviation says how far a typical value sits from the mean.",
        "It is the number you actually report, unlike variance.",
      ],
      starter: `# TODO: print the standard deviation\nimport statistics\n\n${SALES}\n`,
      solution: `import statistics\n\n${SALES}\nprint(round(statistics.pstdev(sales), 2))`,
      checks: [
        assertEquals("standard deviation is correct", "round(statistics.pstdev(sales), 2)", "5.97"),
        assertTrue(
          "it is the square root of the variance",
          "abs(statistics.pstdev(sales) ** 2 - statistics.pvariance(sales)) < 1e-9",
          "pstdev squared should equal pvariance",
        ),
      ],
      vars: ["statistics", "sales"],
      constraints: ["Use statistics.pstdev", "Round to 2 decimals", "Output must be exactly: 5.97"],
      hints: ["print(round(statistics.pstdev(sales), 2))"],
      placeholder: "# print(round(statistics.pstdev(sales), 2))",
    }),

    conceptTask({
      slug: "desc-summary-line",
      title: "Descriptive: A Summary Line",
      level: "hard",
      description:
        "Compute count, mean, and median as floats and print them in one formatted summary line.",
      expected: "count=5, mean=20.0, median=20.0",
      intro: [
        seg("text", "Store "),
        seg("code", "count"),
        seg("text", ", "),
        seg("code", "mean"),
        seg("text", ", and "),
        seg("code", "median"),
        seg("text", " (the last two as floats) and print "),
        seg("code", "count=5, mean=20.0, median=20.0"),
        seg("text", "."),
      ],
      steps: [
        "len() gives the count.",
        "Wrap mean and median in float() so both print with a decimal point.",
        "When mean and median match, the data is symmetric.",
      ],
      starter: `# TODO: build the summary\nimport statistics\n\n${SALES}\ncount = 0\nmean = 0.0\nmedian = 0.0\n`,
      solution: `import statistics\n\n${SALES}\ncount = len(sales)\nmean = float(statistics.mean(sales))\nmedian = float(statistics.median(sales))\nprint(f"count={count}, mean={mean}, median={median}")`,
      checks: [
        assertEquals("count is the number of values", "count", "5"),
        assertEquals("mean is a float", "mean", "20.0"),
        assertEquals("median is a float", "median", "20.0"),
        assertType("mean", "float"),
      ],
      vars: ["statistics", "count", "mean", "median"],
      constraints: [
        "Use len(), statistics.mean, and statistics.median",
        "Wrap mean and median in float()",
        "Output must be exactly: count=5, mean=20.0, median=20.0",
      ],
      hints: [
        "mean = float(statistics.mean(sales))",
        'print(f"count={count}, mean={mean}, median={median}")',
      ],
      placeholder: "# count = len(sales)",
    }),
  ];
}

export function distributionTasks() {
  return [
    conceptTask({
      slug: "dist-histogram-counts",
      title: "Distributions: Count Values per Bin",
      level: "easy",
      description:
        "Use np.histogram with explicit bin edges and print the counts per bin as a list.",
      expected: "[1, 2, 3]",
      intro: [
        seg("text", "For "),
        seg("code", "[5, 12, 15, 22, 25, 28]"),
        seg("text", " with edges "),
        seg("code", "[0, 10, 20, 30]"),
        seg("text", ", print "),
        seg("code", "counts.tolist()"),
        seg("text", " from "),
        seg("code", "np.histogram"),
        seg("text", "."),
      ],
      steps: [
        "np.histogram returns the counts and the edges — take index 0 for counts.",
        "Explicit edges make the bins reproducible.",
        "This is the data behind every histogram chart.",
      ],
      starter:
        "# TODO: count the values in each bin\nimport numpy as np\n\nvalues = [5, 12, 15, 22, 25, 28]\ncounts = None\n",
      solution:
        "import numpy as np\n\nvalues = [5, 12, 15, 22, 25, 28]\ncounts, edges = np.histogram(values, bins=[0, 10, 20, 30])\n\nprint(counts.tolist())",
      checks: [
        assertEquals("counts per bin", "counts.tolist()", "[1, 2, 3]"),
        assertEquals("every value was counted", "int(counts.sum())", "6"),
      ],
      vars: ["np", "counts"],
      constraints: [
        "Use np.histogram with bins=[0, 10, 20, 30]",
        "Output must be exactly: [1, 2, 3]",
      ],
      hints: ["counts, edges = np.histogram(values, bins=[0, 10, 20, 30])", "print(counts.tolist())"],
      placeholder: "# counts, edges = np.histogram(...)",
    }),

    conceptTask({
      slug: "dist-value-counts",
      title: "Distributions: Frequency of Each Rating",
      level: "easy",
      description:
        "Use value_counts with sort_index to print how many times each rating appears.",
      expected: "{3: 1, 4: 2, 5: 3}",
      intro: [
        seg("text", "For ratings "),
        seg("code", "[3, 4, 4, 5, 5, 5]"),
        seg("text", " print the frequency of each value as a dict, sorted by rating."),
      ],
      steps: [
        "value_counts() orders by frequency, which is unstable when counts tie.",
        "sort_index() orders by the rating instead.",
        "Convert keys and values with int() so the dict prints plainly.",
      ],
      starter:
        "# TODO: count each rating\nimport pandas as pd\n\nratings = pd.Series([3, 4, 4, 5, 5, 5])\ncounts = None\n",
      solution:
        'import pandas as pd\n\nratings = pd.Series([3, 4, 4, 5, 5, 5])\ncounts = ratings.value_counts().sort_index()\n\nprint({int(k): int(v) for k, v in counts.items()})',
      checks: [
        assertEquals("three 5-star ratings", 'int(counts[5])', "3"),
        assertEquals("one 3-star rating", 'int(counts[3])', "1"),
        assertEquals("sorted by rating", "[int(k) for k in counts.index]", "[3, 4, 5]"),
      ],
      vars: ["pd", "counts"],
      constraints: [
        "Use value_counts().sort_index()",
        "Output must be exactly: {3: 1, 4: 2, 5: 3}",
      ],
      hints: [
        "counts = ratings.value_counts().sort_index()",
        "print({int(k): int(v) for k, v in counts.items()})",
      ],
      placeholder: "# counts = ratings.value_counts().sort_index()",
    }),

    conceptTask({
      slug: "dist-quartiles",
      title: "Distributions: The Quartiles",
      level: "medium",
      description:
        "Use np.percentile to print the 25th, 50th, and 75th percentiles as a list.",
      expected: "[20.0, 30.0, 40.0]",
      intro: [
        seg("text", "For "),
        seg("code", "[10, 20, 30, 40, 50]"),
        seg("text", " print "),
        seg("code", "np.percentile(values, [25, 50, 75]).tolist()"),
        seg("text", "."),
      ],
      steps: [
        "Percentiles split sorted data into shares.",
        "The 50th percentile is the median.",
        "Q1 and Q3 are the edges of the box in a box plot.",
      ],
      starter:
        "# TODO: print the three quartiles\nimport numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nquartiles = None\n",
      solution:
        "import numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nquartiles = np.percentile(values, [25, 50, 75])\n\nprint(quartiles.tolist())",
      checks: [
        assertEquals("quartiles are correct", "quartiles.tolist()", "[20.0, 30.0, 40.0]"),
        assertEquals(
          "the middle quartile is the median",
          "float(quartiles[1])",
          "float(np.median(values))"
        ),
      ],
      vars: ["np", "quartiles"],
      constraints: [
        "Use np.percentile with [25, 50, 75]",
        "Output must be exactly: [20.0, 30.0, 40.0]",
      ],
      hints: ["quartiles = np.percentile(values, [25, 50, 75])", "print(quartiles.tolist())"],
      placeholder: "# quartiles = np.percentile(values, [25, 50, 75])",
    }),

    conceptTask({
      slug: "dist-skew",
      title: "Distributions: Measure the Skew",
      level: "medium",
      description:
        "Use the pandas .skew() method to print how lopsided a right-skewed series is, to two decimals.",
      expected: "1.97",
      intro: [
        seg("text", "For "),
        seg("code", "[2, 3, 3, 4, 10]"),
        seg("text", " print "),
        seg("code", "round(float(values.skew()), 2)"),
        seg("text", ". A positive result means a long tail to the right."),
      ],
      steps: [
        "Skew near 0 means symmetric; positive means a right tail.",
        "Right-skewed data is normal for revenue and income.",
        "Skew is why you often report the median rather than the mean.",
      ],
      starter:
        "# TODO: measure the skew\nimport pandas as pd\n\nvalues = pd.Series([2, 3, 3, 4, 10])\n",
      solution:
        "import pandas as pd\n\nvalues = pd.Series([2, 3, 3, 4, 10])\nprint(round(float(values.skew()), 2))",
      checks: [
        assertEquals("skew is correct", "round(float(values.skew()), 2)", "1.97"),
        assertTrue(
          "the distribution is right-skewed",
          "float(values.skew()) > 0",
          "A long right tail gives a positive skew",
        ),
        assertTrue(
          "the mean is pulled above the median",
          "float(values.mean()) > float(values.median())",
          "Right skew drags the mean above the median",
        ),
      ],
      vars: ["pd", "values"],
      constraints: ["Use .skew()", "Round to 2 decimals", "Output must be exactly: 1.97"],
      hints: ["print(round(float(values.skew()), 2))"],
      placeholder: "# print(round(float(values.skew()), 2))",
    }),

    conceptTask({
      slug: "dist-cut-bins",
      title: "Distributions: Bucket Into Labelled Bins",
      level: "medium",
      description:
        "Use pd.cut with low/mid/high labels and print how many values fall in each bucket.",
      expected: "{'low': 1, 'mid': 2, 'high': 3}",
      intro: [
        seg("text", "Bucket "),
        seg("code", "[5, 12, 15, 22, 25, 28]"),
        seg("text", " with "),
        seg("code", "pd.cut"),
        seg("text", " using edges "),
        seg("code", "[0, 10, 20, 30]"),
        seg("text", " and labels "),
        seg("code", "low, mid, high"),
        seg("text", ", then print the counts."),
      ],
      steps: [
        "pd.cut turns a numeric column into labelled categories.",
        "The labels keep their given order, so sort_index gives low, mid, high.",
        "Binning is how continuous data becomes a segment you can report on.",
      ],
      starter:
        '# TODO: bucket the values, then count them\nimport pandas as pd\n\nvalues = pd.Series([5, 12, 15, 22, 25, 28])\nbuckets = None\n',
      solution:
        'import pandas as pd\n\nvalues = pd.Series([5, 12, 15, 22, 25, 28])\nbuckets = pd.cut(values, bins=[0, 10, 20, 30], labels=["low", "mid", "high"])\ncounts = buckets.value_counts().sort_index()\n\nprint({str(k): int(v) for k, v in counts.items()})',
      checks: [
        assertEquals("three values are high", 'int(counts["high"])', "3"),
        assertEquals("one value is low", 'int(counts["low"])', "1"),
        assertEquals(
          "labels keep their given order",
          "[str(k) for k in counts.index]",
          '["low", "mid", "high"]'
        ),
      ],
      vars: ["pd", "buckets"],
      constraints: [
        "Use pd.cut with the given edges and labels",
        "Output must be exactly: {'low': 1, 'mid': 2, 'high': 3}",
      ],
      hints: [
        'buckets = pd.cut(values, bins=[0, 10, 20, 30], labels=["low", "mid", "high"])',
        "counts = buckets.value_counts().sort_index()",
      ],
      placeholder: "# buckets = pd.cut(values, bins=[...], labels=[...])",
    }),

    conceptTask({
      slug: "dist-min-max-scale",
      title: "Distributions: Scale to 0-1",
      level: "medium",
      description:
        "Min-max scale an array so the smallest value becomes 0 and the largest becomes 1.",
      expected: "[0.0, 0.33, 0.67, 1.0]",
      intro: [
        seg("text", "Scale "),
        seg("code", "[10, 20, 30, 40]"),
        seg("text", " with "),
        seg("code", "(values - values.min()) / (values.max() - values.min())"),
        seg("text", " into "),
        seg("code", "scaled"),
        seg("text", ", then print it rounded to 2 decimals."),
      ],
      steps: [
        "Min-max scaling squeezes any range into 0 to 1.",
        "The smallest value always becomes 0 and the largest 1.",
        "Use it before comparing columns measured in different units.",
      ],
      starter:
        "# TODO: scale the values to 0-1\nimport numpy as np\n\nvalues = np.array([10, 20, 30, 40])\nscaled = None\n",
      solution:
        "import numpy as np\n\nvalues = np.array([10, 20, 30, 40])\nscaled = (values - values.min()) / (values.max() - values.min())\n\nprint(np.round(scaled, 2).tolist())",
      checks: [
        assertEquals("values scaled to 0-1", "np.round(scaled, 2).tolist()", "[0.0, 0.33, 0.67, 1.0]"),
        assertTrue(
          "the smallest value became 0",
          "abs(float(scaled.min())) < 1e-9",
          "After min-max scaling the minimum must be 0",
        ),
        assertTrue(
          "the largest value became 1",
          "abs(float(scaled.max()) - 1.0) < 1e-9",
          "After min-max scaling the maximum must be 1",
        ),
      ],
      vars: ["np", "scaled"],
      constraints: [
        "Use .min() and .max() — do not hardcode 10 or 40",
        "Round only when printing",
      ],
      hints: [
        "scaled = (values - values.min()) / (values.max() - values.min())",
        "print(np.round(scaled, 2).tolist())",
      ],
      placeholder: "# scaled = (values - values.min()) / ...",
    }),

    conceptTask({
      slug: "dist-spread-summary",
      title: "Distributions: Range and IQR",
      level: "hard",
      description:
        "Print the full range on line 1 and the interquartile range on line 2 to compare the two spread measures.",
      expected: "40\n20.0",
      intro: [
        seg("text", "For "),
        seg("code", "[10, 20, 30, 40, 50]"),
        seg("text", " print "),
        seg("code", "spread"),
        seg("text", " (max minus min), then "),
        seg("code", "iqr"),
        seg("text", " (Q3 minus Q1)."),
      ],
      steps: [
        "Range uses the two extremes; IQR uses the middle half.",
        "np.percentile returns floats, so the IQR prints as 20.0.",
        "IQR is the spread measure that ignores outliers.",
      ],
      starter:
        "# TODO: compute both spread measures\nimport numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nspread = 0\niqr = 0.0\n",
      solution:
        "import numpy as np\n\nvalues = [10, 20, 30, 40, 50]\nspread = max(values) - min(values)\nq1, q3 = np.percentile(values, [25, 75])\niqr = q3 - q1\n\nprint(spread)\nprint(iqr)",
      checks: [
        assertEquals("range is max minus min", "spread", "40"),
        assertEquals("IQR is Q3 minus Q1", "round(float(iqr), 2)", "20.0"),
        assertTrue(
          "IQR is narrower than the range",
          "float(iqr) < spread",
          "The middle half must span less than the whole range",
        ),
      ],
      vars: ["np", "spread", "iqr"],
      constraints: [
        "Use np.percentile for Q1 and Q3",
        "Print the range first, then the IQR",
      ],
      hints: ["q1, q3 = np.percentile(values, [25, 75])", "iqr = q3 - q1"],
      placeholder: "# q1, q3 = np.percentile(values, [25, 75])",
    }),
  ];
}

export function correlationTasks() {
  const UNITS = "units = [1, 2, 3, 4, 5]";
  const REVENUE = "revenue = [12, 18, 22, 33, 38]";
  return [
    conceptTask({
      slug: "corr-perfect-positive",
      title: "Correlation: A Perfect Positive",
      level: "easy",
      description:
        "Use np.corrcoef on two arrays that move together exactly and print the coefficient.",
      expected: "1.0",
      intro: [
        seg("text", "For "),
        seg("code", "[1, 2, 3]"),
        seg("text", " and "),
        seg("code", "[2, 4, 6]"),
        seg("text", " print "),
        seg("code", "round(float(np.corrcoef(a, b)[0, 1]), 2)"),
        seg("text", "."),
      ],
      steps: [
        "corrcoef returns a matrix; the [0, 1] cell is the correlation between the two inputs.",
        "1.0 means a perfect straight-line relationship.",
        "Correlation has no units, so it always sits between -1 and 1.",
      ],
      starter:
        "# TODO: print the correlation\nimport numpy as np\n\na = [1, 2, 3]\nb = [2, 4, 6]\n",
      solution:
        "import numpy as np\n\na = [1, 2, 3]\nb = [2, 4, 6]\nprint(round(float(np.corrcoef(a, b)[0, 1]), 2))",
      checks: [
        assertEquals("correlation is 1.0", "round(float(np.corrcoef(a, b)[0, 1]), 2)", "1.0"),
        assertEquals("the matrix is 2 by 2", "np.corrcoef(a, b).shape", "(2, 2)"),
      ],
      vars: ["np", "a", "b"],
      constraints: ["Use np.corrcoef and index [0, 1]", "Output must be exactly: 1.0"],
      hints: ["print(round(float(np.corrcoef(a, b)[0, 1]), 2))"],
      placeholder: "# print(round(float(np.corrcoef(a, b)[0, 1]), 2))",
    }),

    conceptTask({
      slug: "corr-perfect-negative",
      title: "Correlation: A Perfect Negative",
      level: "easy",
      description:
        "Print the correlation of two arrays that move in exactly opposite directions.",
      expected: "-1.0",
      intro: [
        seg("text", "For "),
        seg("code", "[1, 2, 3]"),
        seg("text", " and "),
        seg("code", "[6, 4, 2]"),
        seg("text", " print the correlation. As one rises the other falls."),
      ],
      steps: [
        "-1.0 is just as strong a relationship as 1.0, only inverted.",
        "The sign tells you the direction, the size tells you the strength.",
      ],
      starter:
        "# TODO: print the negative correlation\nimport numpy as np\n\na = [1, 2, 3]\nb = [6, 4, 2]\n",
      solution:
        "import numpy as np\n\na = [1, 2, 3]\nb = [6, 4, 2]\nprint(round(float(np.corrcoef(a, b)[0, 1]), 2))",
      checks: [
        assertEquals("correlation is -1.0", "round(float(np.corrcoef(a, b)[0, 1]), 2)", "-1.0"),
        assertTrue(
          "the strength is still perfect",
          "abs(float(np.corrcoef(a, b)[0, 1])) == 1.0",
          "The magnitude should be 1 even though the sign is negative",
        ),
      ],
      vars: ["np", "a", "b"],
      constraints: ["Use np.corrcoef", "Output must be exactly: -1.0"],
      hints: ["print(round(float(np.corrcoef(a, b)[0, 1]), 2))"],
      placeholder: "# print(round(float(np.corrcoef(a, b)[0, 1]), 2))",
    }),

    conceptTask({
      slug: "corr-real-data",
      title: "Correlation: Units vs Revenue",
      level: "medium",
      description:
        "Print the correlation between units sold and revenue for five real-looking observations.",
      expected: "0.99",
      intro: [
        seg("text", "For "),
        seg("code", "units"),
        seg("text", " and "),
        seg("code", "revenue"),
        seg("text", " print the correlation rounded to 2 decimals. Real data is rarely exactly 1."),
      ],
      steps: [
        "0.99 is a very strong positive relationship.",
        "Strong correlation is not causation — sales drive both here.",
      ],
      starter: `# TODO: correlate units and revenue\nimport numpy as np\n\n${UNITS}\n${REVENUE}\n`,
      solution: `import numpy as np\n\n${UNITS}\n${REVENUE}\nprint(round(float(np.corrcoef(units, revenue)[0, 1]), 2))`,
      checks: [
        assertEquals(
          "correlation is 0.99",
          "round(float(np.corrcoef(units, revenue)[0, 1]), 2)",
          "0.99"
        ),
        assertTrue(
          "it is strong but not perfect",
          "float(np.corrcoef(units, revenue)[0, 1]) < 1.0",
          "Real data should fall just short of a perfect 1.0",
        ),
      ],
      vars: ["np", "units", "revenue"],
      constraints: ["Use np.corrcoef", "Round to 2 decimals", "Output must be exactly: 0.99"],
      hints: ["print(round(float(np.corrcoef(units, revenue)[0, 1]), 2))"],
      placeholder: "# print(round(float(np.corrcoef(units, revenue)[0, 1]), 2))",
    }),

    conceptTask({
      slug: "corr-negative-real",
      title: "Correlation: Price vs Demand",
      level: "medium",
      description:
        "Print the correlation between price and units sold, which should come out negative.",
      expected: "-0.91",
      intro: [
        seg("text", "For price "),
        seg("code", "[1, 2, 3, 4, 5]"),
        seg("text", " and demand "),
        seg("code", "[30, 22, 26, 14, 10]"),
        seg("text", " print the correlation. Higher price, lower demand."),
      ],
      steps: [
        "-0.91 is strong and negative — the classic demand curve.",
        "The single bump at 26 keeps it from reaching -1.",
      ],
      starter:
        "# TODO: correlate price and demand\nimport numpy as np\n\nprice = [1, 2, 3, 4, 5]\ndemand = [30, 22, 26, 14, 10]\n",
      solution:
        "import numpy as np\n\nprice = [1, 2, 3, 4, 5]\ndemand = [30, 22, 26, 14, 10]\nprint(round(float(np.corrcoef(price, demand)[0, 1]), 2))",
      checks: [
        assertEquals(
          "correlation is -0.91",
          "round(float(np.corrcoef(price, demand)[0, 1]), 2)",
          "-0.91"
        ),
        assertTrue(
          "the relationship is negative",
          "float(np.corrcoef(price, demand)[0, 1]) < 0",
          "Demand falls as price rises, so the correlation must be negative",
        ),
      ],
      vars: ["np", "price", "demand"],
      constraints: ["Use np.corrcoef", "Output must be exactly: -0.91"],
      hints: ["print(round(float(np.corrcoef(price, demand)[0, 1]), 2))"],
      placeholder: "# print(round(float(np.corrcoef(price, demand)[0, 1]), 2))",
    }),

    conceptTask({
      slug: "cov-value",
      title: "Covariance: The Unscaled Cousin",
      level: "medium",
      description:
        "Use np.cov to print the covariance of units and revenue, rounded to two decimals.",
      expected: "16.75",
      intro: [
        seg("text", "Print "),
        seg("code", "round(float(np.cov(units, revenue)[0, 1]), 2)"),
        seg("text", ". Covariance shows direction but its size depends on the units."),
      ],
      steps: [
        "Covariance and correlation share a sign but not a scale.",
        "Correlation is covariance divided by both standard deviations.",
        "That is why correlation is comparable across datasets and covariance is not.",
      ],
      starter: `# TODO: print the covariance\nimport numpy as np\n\n${UNITS}\n${REVENUE}\n`,
      solution: `import numpy as np\n\n${UNITS}\n${REVENUE}\nprint(round(float(np.cov(units, revenue)[0, 1]), 2))`,
      checks: [
        assertEquals(
          "covariance is 16.75",
          "round(float(np.cov(units, revenue)[0, 1]), 2)",
          "16.75"
        ),
        assertTrue(
          "covariance and correlation agree on direction",
          "float(np.cov(units, revenue)[0, 1]) > 0 and float(np.corrcoef(units, revenue)[0, 1]) > 0",
          "Both should be positive for this data",
        ),
      ],
      vars: ["np", "units", "revenue"],
      constraints: ["Use np.cov and index [0, 1]", "Output must be exactly: 16.75"],
      hints: ["print(round(float(np.cov(units, revenue)[0, 1]), 2))"],
      placeholder: "# print(round(float(np.cov(units, revenue)[0, 1]), 2))",
    }),

    conceptTask({
      slug: "corr-dataframe",
      title: "Correlation: Straight From a DataFrame",
      level: "medium",
      description:
        "Build a DataFrame of units and revenue and read the correlation out of df.corr().",
      expected: "0.99",
      intro: [
        seg("text", "Build "),
        seg("code", "df"),
        seg("text", " with units and revenue columns, then print "),
        seg("code", 'round(float(df.corr().loc["units", "revenue"]), 2)'),
        seg("text", "."),
      ],
      steps: [
        "df.corr() correlates every numeric column with every other.",
        "loc[row, column] pulls out the pair you care about.",
        "This is how you scan a whole dataset for relationships at once.",
      ],
      starter: `# TODO: correlate the two columns\nimport pandas as pd\n\ndf = pd.DataFrame({"units": [1, 2, 3, 4, 5], "revenue": [12, 18, 22, 33, 38]})\n`,
      solution: `import pandas as pd\n\ndf = pd.DataFrame({"units": [1, 2, 3, 4, 5], "revenue": [12, 18, 22, 33, 38]})\nprint(round(float(df.corr().loc["units", "revenue"]), 2))`,
      checks: [
        assertEquals(
          "correlation from the frame",
          'round(float(df.corr().loc["units", "revenue"]), 2)',
          "0.99"
        ),
        assertEquals(
          "a column correlates perfectly with itself",
          'round(float(df.corr().loc["units", "units"]), 2)',
          "1.0"
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use df.corr()", "Output must be exactly: 0.99"],
      hints: ['print(round(float(df.corr().loc["units", "revenue"]), 2))'],
      placeholder: "# print(round(float(df.corr().loc['units', 'revenue']), 2))",
    }),

    conceptTask({
      slug: "corr-matrix-strength",
      title: "Correlation: Matrix and Verdict",
      level: "hard",
      description:
        "Print the rounded correlation matrix, then print whether the relationship is strong or weak.",
      expected: "[[1.0, 0.99], [0.99, 1.0]]\nstrong",
      intro: [
        seg("text", "Print "),
        seg("code", "np.round(df.corr().values, 2).tolist()"),
        seg("text", ", then print "),
        seg("code", "strong"),
        seg("text", " if the absolute correlation is above "),
        seg("code", "0.7"),
        seg("text", " and "),
        seg("code", "weak"),
        seg("text", " otherwise."),
      ],
      steps: [
        "The diagonal is always 1.0 — every column matches itself.",
        "The matrix is symmetric, so [0][1] equals [1][0].",
        "Above 0.7 in absolute terms is the usual rule of thumb for strong.",
      ],
      starter: `# TODO: print the matrix, then the verdict\nimport numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({"units": [1, 2, 3, 4, 5], "revenue": [12, 18, 22, 33, 38]})\nverdict = ""\n`,
      solution: `import numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({"units": [1, 2, 3, 4, 5], "revenue": [12, 18, 22, 33, 38]})\nmatrix = df.corr()\nprint(np.round(matrix.values, 2).tolist())\n\nstrength = abs(float(matrix.loc["units", "revenue"]))\nverdict = "strong" if strength > 0.7 else "weak"\nprint(verdict)`,
      checks: [
        assertEquals("verdict is strong", "verdict", '"strong"'),
        assertEquals(
          "matrix rounds as expected",
          "np.round(matrix.values, 2).tolist()",
          "[[1.0, 0.99], [0.99, 1.0]]"
        ),
        assertTrue(
          "the diagonal is 1.0",
          "abs(float(matrix.iloc[0, 0]) - 1.0) < 1e-9",
          "Every column correlates perfectly with itself",
        ),
      ],
      vars: ["np", "pd", "verdict"],
      constraints: [
        "Print the matrix first, then the verdict",
        "Decide the verdict with a 0.7 threshold — do not type it",
      ],
      hints: [
        "print(np.round(matrix.values, 2).tolist())",
        'verdict = "strong" if strength > 0.7 else "weak"',
      ],
      placeholder: "# matrix = df.corr()",
    }),
  ];
}
