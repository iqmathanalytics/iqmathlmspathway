/**
 * Module 17 topics 4-5 — outlier detection and a full EDA pass.
 * The outlier tasks all work on the same order list so the IQR maths carries
 * from one task to the next; the EDA tasks share one small retail frame.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

const ORDERS = "orders = [12, 14, 15, 16, 18, 60]";

const EDA_DF = `df = pd.DataFrame({
    "region": ["South", "North", "South", "East", "North"],
    "category": ["pen", "book", "bag", "pen", "bag"],
    "units": [10, 5, 8, 12, 6],
    "revenue": [100.0, 150.0, None, 120.0, 90.0],
})`;

export function outlierTasks() {
  return [
    conceptTask({
      slug: "outlier-mean-vs-median",
      title: "Outliers: Mean vs Median",
      level: "easy",
      description:
        "Print the mean and then the median of an order list containing one huge value to show how the mean is dragged.",
      expected: "22.5\n15.5",
      intro: [
        seg("text", "For "),
        seg("code", "[12, 14, 15, 16, 18, 60]"),
        seg("text", " print the mean, then the median. The gap between them is your first outlier warning."),
      ],
      steps: [
        "Use float(np.mean(orders)) and float(np.median(orders)).",
        "One large order pulls the mean far above the median.",
        "A big mean-median gap always deserves a second look.",
      ],
      starter: `# TODO: print the mean, then the median\nimport numpy as np\n\n${ORDERS}\n`,
      solution: `import numpy as np\n\n${ORDERS}\nprint(float(np.mean(orders)))\nprint(float(np.median(orders)))`,
      checks: [
        assertEquals("mean is dragged up", "float(np.mean(orders))", "22.5"),
        assertEquals("median stays central", "float(np.median(orders))", "15.5"),
        assertTrue(
          "the mean sits above the median",
          "float(np.mean(orders)) > float(np.median(orders))",
          "The outlier should pull the mean above the median",
        ),
      ],
      vars: ["np", "orders"],
      constraints: ["Print the mean first, then the median", "Wrap both in float()"],
      hints: ["print(float(np.mean(orders)))", "print(float(np.median(orders)))"],
      placeholder: "# print(float(np.mean(orders)))",
    }),

    conceptTask({
      slug: "outlier-iqr-bounds",
      title: "Outliers: Compute the IQR Fences",
      level: "easy",
      description:
        "Compute Q1, Q3, and the 1.5x IQR fences, then print the lower and upper bound rounded to two decimals.",
      expected: "9.38\n22.38",
      intro: [
        seg("text", "Compute "),
        seg("code", "q1, q3 = np.percentile(orders, [25, 75])"),
        seg("text", ", then "),
        seg("code", "lower = q1 - 1.5 * iqr"),
        seg("text", " and "),
        seg("code", "upper = q3 + 1.5 * iqr"),
        seg("text", ". Print both rounded to 2 decimals."),
      ],
      steps: [
        "IQR = Q3 - Q1, the span of the middle half.",
        "The 1.5x fence is the standard cut-off for flagging outliers.",
        "Print the lower bound first.",
      ],
      starter: `# TODO: compute the fences\nimport numpy as np\n\n${ORDERS}\nlower = 0.0\nupper = 0.0\n`,
      solution: `import numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\nprint(round(float(lower), 2))\nprint(round(float(upper), 2))`,
      checks: [
        assertEquals("lower fence", "round(float(lower), 2)", "9.38"),
        assertEquals("upper fence", "round(float(upper), 2)", "22.38"),
        assertTrue(
          "the fences come from the IQR",
          "float(upper) > float(lower)",
          "The upper fence must sit above the lower fence",
        ),
      ],
      vars: ["np", "lower", "upper"],
      constraints: [
        "Use np.percentile for Q1 and Q3",
        "Use the 1.5 x IQR rule",
        "Print the lower bound, then the upper bound",
      ],
      hints: ["q1, q3 = np.percentile(orders, [25, 75])", "lower = q1 - 1.5 * (q3 - q1)"],
      placeholder: "# q1, q3 = np.percentile(orders, [25, 75])",
    }),

    conceptTask({
      slug: "outlier-filter-iqr",
      title: "Outliers: Keep Only the Normal Rows",
      level: "medium",
      description:
        "Use the IQR fences to build a list of values inside the bounds and print it.",
      expected: "[12, 14, 15, 16, 18]",
      intro: [
        seg("text", "Build "),
        seg("code", "clean"),
        seg("text", " with every order between "),
        seg("code", "lower"),
        seg("text", " and "),
        seg("code", "upper"),
        seg("text", ", then print it. The 60 should disappear."),
      ],
      steps: [
        "Filter with a comprehension and an inclusive range test.",
        "Compute the fences from the data — never type them in.",
        "Always report how many rows you dropped.",
      ],
      starter: `# TODO: keep values inside the fences\nimport numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\nclean = []\n`,
      solution: `import numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\nclean = [value for value in orders if lower <= value <= upper]\nprint(clean)`,
      checks: [
        assertEquals("the outlier is gone", "clean", "[12, 14, 15, 16, 18]"),
        assertTrue(
          "60 was excluded",
          "60 not in clean",
          "The 60 order sits outside the fences and should be dropped",
        ),
        assertEquals("the source list is unchanged", "len(orders)", "6"),
      ],
      vars: ["np", "clean"],
      constraints: [
        "Filter with the computed fences",
        "Do not modify orders",
        "Output must be exactly: [12, 14, 15, 16, 18]",
      ],
      hints: ["clean = [value for value in orders if lower <= value <= upper]"],
      placeholder: "# clean = [v for v in orders if ...]",
    }),

    conceptTask({
      slug: "outlier-count",
      title: "Outliers: How Many Are There?",
      level: "medium",
      description:
        "Count how many orders fall outside the IQR fences and print the count.",
      expected: "1",
      intro: [
        seg("text", "Count the orders outside "),
        seg("code", "[lower, upper]"),
        seg("text", " into "),
        seg("code", "outlier_count"),
        seg("text", " and print it."),
      ],
      steps: [
        "Invert the earlier condition: below lower or above upper.",
        "Reporting the count is how you justify cleaning the data.",
      ],
      starter: `# TODO: count the outliers\nimport numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\noutlier_count = 0\n`,
      solution: `import numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\noutlier_count = len([value for value in orders if value < lower or value > upper])\nprint(outlier_count)`,
      checks: [
        assertEquals("one outlier found", "outlier_count", "1"),
        assertType("outlier_count", "int"),
      ],
      vars: ["np", "outlier_count"],
      constraints: [
        "Count values below lower or above upper",
        "Store the count in outlier_count",
        "Output must be exactly: 1",
      ],
      hints: ["outlier_count = len([v for v in orders if v < lower or v > upper])"],
      placeholder: "# outlier_count = len([...])",
    }),

    conceptTask({
      slug: "outlier-zscore",
      title: "Outliers: The Z-Score Method",
      level: "medium",
      description:
        "Convert the orders to z-scores and print the largest one rounded to two decimals.",
      expected: "2.22",
      intro: [
        seg("text", "Compute "),
        seg("code", "z = (values - values.mean()) / values.std()"),
        seg("text", " and print "),
        seg("code", "round(float(z.max()), 2)"),
        seg("text", ". A z-score above 3 is the usual outlier threshold."),
      ],
      steps: [
        "A z-score says how many standard deviations a value sits from the mean.",
        "The outlier inflates the standard deviation, which shrinks its own z-score.",
        "That is why IQR is often the better method for small samples.",
      ],
      starter: `# TODO: compute the z-scores\nimport numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\nz = None\n`,
      solution: `import numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\nz = (values - values.mean()) / values.std()\n\nprint(round(float(z.max()), 2))`,
      checks: [
        assertEquals("largest z-score", "round(float(z.max()), 2)", "2.22"),
        assertTrue(
          "the z-scores average to zero",
          "abs(float(z.mean())) < 1e-9",
          "Z-scores are centred, so their mean must be 0",
        ),
        assertTrue(
          "the largest z-score belongs to the 60",
          "int(np.argmax(z)) == 5",
          "The biggest order should have the highest z-score",
        ),
      ],
      vars: ["np", "z"],
      constraints: [
        "Use .mean() and .std() — no hardcoded numbers",
        "Output must be exactly: 2.22",
      ],
      hints: ["z = (values - values.mean()) / values.std()", "print(round(float(z.max()), 2))"],
      placeholder: "# z = (values - values.mean()) / values.std()",
    }),

    conceptTask({
      slug: "outlier-clip",
      title: "Outliers: Cap Instead of Drop",
      level: "medium",
      description:
        "Use np.clip to cap every order at 20 instead of deleting the outlier, then print the result.",
      expected: "[12, 14, 15, 16, 18, 20]",
      intro: [
        seg("text", "Print "),
        seg("code", "np.clip(values, None, 20).tolist()"),
        seg("text", " — capping keeps the row but limits its influence. This is called winsorising."),
      ],
      steps: [
        "np.clip(values, minimum, maximum) squeezes values into a range.",
        "None as the minimum means no lower limit.",
        "Capping keeps your row count intact, unlike dropping.",
      ],
      starter: `# TODO: cap the values at 20\nimport numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\ncapped = None\n`,
      solution: `import numpy as np\n\nvalues = np.array([12, 14, 15, 16, 18, 60])\ncapped = np.clip(values, None, 20)\n\nprint(capped.tolist())`,
      checks: [
        assertEquals("the 60 was capped to 20", "capped.tolist()", "[12, 14, 15, 16, 18, 20]"),
        assertEquals("no rows were lost", "len(capped)", "6"),
        assertEquals("nothing exceeds the cap", "int(capped.max())", "20"),
      ],
      vars: ["np", "capped"],
      constraints: [
        "Use np.clip with an upper bound of 20",
        "Keep all six values",
        "Output must be exactly: [12, 14, 15, 16, 18, 20]",
      ],
      hints: ["capped = np.clip(values, None, 20)", "print(capped.tolist())"],
      placeholder: "# capped = np.clip(values, None, 20)",
    }),

    conceptTask({
      slug: "outlier-report",
      title: "Outliers: Report What You Removed",
      level: "hard",
      description:
        "Print the list of outlier values, then the mean of the remaining orders rounded to two decimals.",
      expected: "[60]\n15.0",
      intro: [
        seg("text", "Using the IQR fences, build "),
        seg("code", "outliers"),
        seg("text", " and "),
        seg("code", "clean"),
        seg("text", ". Print the outlier list, then the mean of the clean values."),
      ],
      steps: [
        "Build both lists from the same fences so nothing is double counted.",
        "The clean mean (15.0) is far below the raw mean (22.5).",
        "Never remove rows without reporting which ones and why.",
      ],
      starter: `# TODO: report the outliers and the clean mean\nimport numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\noutliers = []\nclean = []\n`,
      solution: `import numpy as np\n\n${ORDERS}\nq1, q3 = np.percentile(orders, [25, 75])\niqr = q3 - q1\nlower = q1 - 1.5 * iqr\nupper = q3 + 1.5 * iqr\n\noutliers = [value for value in orders if value < lower or value > upper]\nclean = [value for value in orders if lower <= value <= upper]\n\nprint(outliers)\nprint(round(float(np.mean(clean)), 2))`,
      checks: [
        assertEquals("the outlier list", "outliers", "[60]"),
        assertEquals("clean mean", "round(float(np.mean(clean)), 2)", "15.0"),
        assertEquals(
          "every order is in exactly one list",
          "len(outliers) + len(clean)",
          "len(orders)"
        ),
        assertTrue(
          "removing the outlier lowered the mean",
          "float(np.mean(clean)) < float(np.mean(orders))",
          "The clean mean should be lower than the raw mean",
        ),
      ],
      vars: ["np", "outliers", "clean"],
      constraints: [
        "Split the data into outliers and clean",
        "Print the outliers, then the clean mean",
      ],
      hints: [
        "outliers = [v for v in orders if v < lower or v > upper]",
        "print(round(float(np.mean(clean)), 2))",
      ],
      placeholder: "# outliers = [...]",
    }),
  ];
}

export function edaTasks() {
  return [
    conceptTask({
      slug: "eda-shape",
      title: "EDA: How Big Is the Dataset?",
      level: "easy",
      description:
        "Load the retail sales frame and print its shape as the first step of any EDA.",
      expected: "(5, 4)",
      intro: [
        seg("text", "Build the retail frame with region, category, units, and revenue, then print "),
        seg("code", "df.shape"),
        seg("text", ". Step one of EDA is always: how many rows and columns?"),
      ],
      steps: [
        "Note that one revenue value is None — that matters later.",
        "Knowing the size tells you whether your later numbers are plausible.",
      ],
      starter: `# TODO: build the frame and print its shape\nimport pandas as pd\n\ndf = None\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\nprint(df.shape)`,
      checks: [
        assertEquals("five rows, four columns", "df.shape", "(5, 4)"),
        assertEquals(
          "columns in order",
          "list(df.columns)",
          '["region", "category", "units", "revenue"]'
        ),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Column order: region, category, units, revenue",
        "Output must be exactly: (5, 4)",
      ],
      hints: ["print(df.shape)"],
      placeholder: "# df = pd.DataFrame({ ... })",
    }),

    conceptTask({
      slug: "eda-missing-total",
      title: "EDA: Count Every Missing Value",
      level: "easy",
      description:
        "Print the total number of missing values across the whole frame using isna().sum().sum().",
      expected: "1",
      intro: [
        seg("text", "Print "),
        seg("code", "int(df.isna().sum().sum())"),
        seg("text", " — the first sum counts per column, the second totals them."),
      ],
      steps: [
        "df.isna() gives a True/False frame the same shape as your data.",
        "Summing twice collapses it to one number.",
        "Step two of EDA is always: what is missing?",
      ],
      starter: `# TODO: total the missing values\nimport pandas as pd\n\n${EDA_DF}\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\nprint(int(df.isna().sum().sum()))`,
      checks: [
        assertEquals("one missing value", "int(df.isna().sum().sum())", "1"),
        assertEquals(
          "it is in the revenue column",
          'int(df["revenue"].isna().sum())',
          "1"
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use isna().sum().sum()", "Output must be exactly: 1"],
      hints: ["print(int(df.isna().sum().sum()))"],
      placeholder: "# print(int(df.isna().sum().sum()))",
    }),

    conceptTask({
      slug: "eda-mean-revenue",
      title: "EDA: Average Revenue",
      level: "medium",
      description:
        "Print the mean revenue rounded to two decimals, noting that pandas skips the missing value.",
      expected: "115.0",
      intro: [
        seg("text", "Print "),
        seg("code", 'round(float(df["revenue"].mean()), 2)'),
        seg("text", ". pandas divides by 4, not 5, because one value is missing."),
      ],
      steps: [
        ".mean() ignores NaN by default.",
        "So the denominator is the count of present values.",
        "Know that rule or your averages will quietly mislead you.",
      ],
      starter: `# TODO: average the revenue\nimport pandas as pd\n\n${EDA_DF}\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\nprint(round(float(df["revenue"].mean()), 2))`,
      checks: [
        assertEquals("mean revenue", 'round(float(df["revenue"].mean()), 2)', "115.0"),
        assertEquals("only four values counted", 'int(df["revenue"].count())', "4"),
        assertTrue(
          "the missing value was skipped, not treated as zero",
          'abs(float(df["revenue"].mean()) - 460 / 4) < 1e-9',
          "The mean divides by 4 present values, not 5 rows",
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use .mean()", "Round to 2 decimals", "Output must be exactly: 115.0"],
      hints: ['print(round(float(df["revenue"].mean()), 2))'],
      placeholder: '# print(round(float(df["revenue"].mean()), 2))',
    }),

    conceptTask({
      slug: "eda-group-means",
      title: "EDA: Revenue per Region",
      level: "medium",
      description:
        "Group by region and print the mean revenue for each as a dict of rounded floats.",
      expected: "{'East': 120.0, 'North': 120.0, 'South': 100.0}",
      intro: [
        seg("text", "Group by "),
        seg("code", "region"),
        seg("text", " and print the mean revenue per region. South has only one usable value because of the missing row."),
      ],
      steps: [
        "groupby().mean() skips missing values within each group.",
        "Regions come back in alphabetical order.",
        "Segment averages are where the story usually is.",
      ],
      starter: `# TODO: mean revenue per region\nimport pandas as pd\n\n${EDA_DF}\n\nby_region = None\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\nby_region = df.groupby("region")["revenue"].mean()\nprint({k: round(float(v), 2) for k, v in by_region.items()})`,
      checks: [
        assertEquals("North average", 'round(float(by_region["North"]), 2)', "120.0"),
        assertEquals("South average", 'round(float(by_region["South"]), 2)', "100.0"),
        assertEquals("three regions", "len(by_region)", "3"),
      ],
      vars: ["pd", "by_region"],
      constraints: [
        "Use groupby().mean()",
        "Print values as rounded floats",
      ],
      hints: [
        'by_region = df.groupby("region")["revenue"].mean()',
        "print({k: round(float(v), 2) for k, v in by_region.items()})",
      ],
      placeholder: '# by_region = df.groupby("region")["revenue"].mean()',
    }),

    conceptTask({
      slug: "eda-top-region",
      title: "EDA: Which Region Leads?",
      level: "medium",
      description:
        "Use groupby sum and idxmax to print the name of the region with the highest total revenue.",
      expected: "North",
      intro: [
        seg("text", "Print "),
        seg("code", 'df.groupby("region")["revenue"].sum().idxmax()'),
        seg("text", " — idxmax returns the label of the largest value, not the value itself."),
      ],
      steps: [
        "max() gives the number; idxmax() gives the name.",
        "The name is what belongs in a report sentence.",
        "North totals 240 from its two rows.",
      ],
      starter: `# TODO: find the leading region\nimport pandas as pd\n\n${EDA_DF}\n\ntop_region = ""\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\ntotals = df.groupby("region")["revenue"].sum()\ntop_region = totals.idxmax()\n\nprint(top_region)`,
      checks: [
        assertEquals("North leads", "top_region", '"North"'),
        assertEquals("North total is 240", 'round(float(totals["North"]), 2)', "240.0"),
        assertTrue(
          "the label was found, not typed",
          "top_region == totals.idxmax()",
          "Use idxmax() to find the leading region",
        ),
      ],
      vars: ["pd", "top_region"],
      constraints: [
        "Use groupby().sum() and idxmax()",
        "Output must be exactly: North",
      ],
      hints: ['totals = df.groupby("region")["revenue"].sum()', "top_region = totals.idxmax()"],
      placeholder: "# top_region = totals.idxmax()",
    }),

    conceptTask({
      slug: "eda-correlation",
      title: "EDA: Do Units Drive Revenue?",
      level: "medium",
      description:
        "Print the correlation between units and revenue for this dataset, rounded to two decimals.",
      expected: "-0.25",
      intro: [
        seg("text", "Print "),
        seg("code", 'round(float(df[["units", "revenue"]].corr().loc["units", "revenue"]), 2)'),
        seg("text", ". The answer is negative here — a good reminder to check rather than assume."),
      ],
      steps: [
        "corr() drops rows where either value is missing.",
        "-0.25 is weak, so units alone do not explain revenue in this sample.",
        "Five rows is far too few to conclude anything — sample size matters.",
      ],
      starter: `# TODO: correlate units and revenue\nimport pandas as pd\n\n${EDA_DF}\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\nprint(round(float(df[["units", "revenue"]].corr().loc["units", "revenue"]), 2))`,
      checks: [
        assertEquals(
          "correlation is -0.25",
          'round(float(df[["units", "revenue"]].corr().loc["units", "revenue"]), 2)',
          "-0.25"
        ),
        assertTrue(
          "the relationship is weak",
          'abs(float(df[["units", "revenue"]].corr().loc["units", "revenue"])) < 0.7',
          "This correlation is weak, well under the 0.7 rule of thumb",
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use .corr()", "Round to 2 decimals", "Output must be exactly: -0.25"],
      hints: ['print(round(float(df[["units", "revenue"]].corr().loc["units", "revenue"]), 2))'],
      placeholder: "# print(round(float(df[[...]].corr().loc[...]), 2))",
    }),

    conceptTask({
      slug: "eda-final-report",
      title: "EDA: Write the Three-Line Summary",
      level: "hard",
      description:
        "Print the row count, the leading region, and the total revenue as a three-line EDA summary.",
      expected: "rows=5\ntop_region=North\ntotal_revenue=460.0",
      intro: [
        seg("text", "Finish the EDA with three lines: "),
        seg("code", "rows=5"),
        seg("text", ", "),
        seg("code", "top_region=North"),
        seg("text", ", and "),
        seg("code", "total_revenue=460.0"),
        seg("text", ". Every number must be computed."),
      ],
      steps: [
        "rows = len(df); total = float(df[\"revenue\"].sum()).",
        "sum() skips the missing value, so the total is 460.0.",
        'Format each line with an f-string like f"rows={rows}"',
      ],
      starter: `# TODO: build the three-line summary\nimport pandas as pd\n\n${EDA_DF}\n\nrows = 0\ntop_region = ""\ntotal_revenue = 0.0\n`,
      solution: `import pandas as pd\n\n${EDA_DF}\n\nrows = len(df)\ntop_region = df.groupby("region")["revenue"].sum().idxmax()\ntotal_revenue = round(float(df["revenue"].sum()), 2)\n\nprint(f"rows={rows}")\nprint(f"top_region={top_region}")\nprint(f"total_revenue={total_revenue}")`,
      checks: [
        assertEquals("row count", "rows", "5"),
        assertEquals("leading region", "top_region", '"North"'),
        assertEquals("total revenue", "total_revenue", "460.0"),
        assertTrue(
          "every figure came from the frame",
          'rows == len(df) and abs(total_revenue - float(df["revenue"].sum())) < 1e-9',
          "Compute the numbers from df rather than typing them",
        ),
      ],
      vars: ["pd", "rows", "top_region", "total_revenue"],
      constraints: [
        "Compute all three values from df",
        "One line each, in the order rows, top_region, total_revenue",
      ],
      hints: [
        'top_region = df.groupby("region")["revenue"].sum().idxmax()',
        'print(f"rows={rows}")',
      ],
      placeholder: "# rows = len(df)",
    }),
  ];
}
