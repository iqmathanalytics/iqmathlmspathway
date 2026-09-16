/**
 * Module 15 topics 4-6 — cleaning, grouping/merging, and pivot tables.
 *
 * Group results are printed as dicts of pure Python values
 * ({k: int(v) for ...}) because a Series repr differs between pandas versions.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

const PD = "import pandas as _pd";

const DIRTY_DF = `df = pd.DataFrame({
    "item": ["pen", "book", "bag"],
    "region": [" South", "North ", "South"],
    "revenue": [30.0, None, 70.0],
})`;

const REGION_DF = `df = pd.DataFrame({
    "item": ["pen", "book", "bag"],
    "region": ["South", "North", "South"],
    "revenue": [30, 40, 70],
})`;

const PIVOT_DF = `df = pd.DataFrame({
    "region": ["South", "South", "North", "North"],
    "category": ["pen", "bag", "pen", "bag"],
    "revenue": [30, 70, 40, 20],
})`;

function assertIsFrame(name) {
  return {
    label: `${name} is a DataFrame`,
    code: `${PD}\nassert "${name}" in globals(), "Expected a variable named ${name}"\nassert isinstance(${name}, _pd.DataFrame), "Expected ${name} to be a DataFrame, got " + type(${name}).__name__`,
  };
}

export function pandasCleaningTasks() {
  return [
    conceptTask({
      slug: "pd-count-missing",
      title: "Cleaning: Count Missing Values",
      level: "easy",
      description:
        "Count how many revenue values are missing using isna().sum() and print the count.",
      expected: "1",
      intro: [
        seg("text", "Print "),
        seg("code", 'int(df["revenue"].isna().sum())'),
        seg("text", " — the first question to ask about any new column."),
      ],
      steps: [
        "isna() returns True for each missing value.",
        "Summing booleans counts the Trues.",
        "None in a numeric column becomes NaN when pandas loads it.",
      ],
      starter: `# TODO: count the missing revenue values\nimport pandas as pd\n\n${DIRTY_DF}\n`,
      solution: `import pandas as pd\n\n${DIRTY_DF}\n\nprint(int(df["revenue"].isna().sum()))`,
      checks: [
        assertIsFrame("df"),
        assertEquals("one value is missing", 'int(df["revenue"].isna().sum())', "1"),
        assertTrue(
          "the missing value was not filled in",
          'df["revenue"].isna().any()',
          "Do not fill the gap yet — this task only counts it",
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use isna().sum()", "Do not modify the data", "Output must be exactly: 1"],
      hints: ['print(int(df["revenue"].isna().sum()))'],
      placeholder: '# print(int(df["revenue"].isna().sum()))',
    }),

    conceptTask({
      slug: "pd-fillna",
      title: "Cleaning: Fill the Gaps",
      level: "easy",
      description:
        "Replace missing revenue with 0 using fillna and print the filled values as a list.",
      expected: "[30.0, 0.0, 70.0]",
      intro: [
        seg("text", "Print "),
        seg("code", 'df["revenue"].fillna(0).tolist()'),
        seg("text", ". The values stay floats because the column held a NaN."),
      ],
      steps: [
        "fillna(value) returns a new Series — the original is untouched.",
        "Filling with 0 is right for counts, but a mean may suit measurements better.",
      ],
      starter: `# TODO: fill the missing revenue with 0\nimport pandas as pd\n\n${DIRTY_DF}\n`,
      solution: `import pandas as pd\n\n${DIRTY_DF}\n\nprint(df["revenue"].fillna(0).tolist())`,
      checks: [
        assertEquals("gap filled with 0", 'df["revenue"].fillna(0).tolist()', "[30.0, 0.0, 70.0]"),
        assertEquals(
          "no missing values remain after filling",
          'int(df["revenue"].fillna(0).isna().sum())',
          "0"
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use fillna(0)", "Output must be exactly: [30.0, 0.0, 70.0]"],
      hints: ['print(df["revenue"].fillna(0).tolist())'],
      placeholder: '# print(df["revenue"].fillna(0).tolist())',
    }),

    conceptTask({
      slug: "pd-dropna",
      title: "Cleaning: Drop Incomplete Rows",
      level: "easy",
      description:
        "Drop rows with any missing value using dropna and print the resulting shape.",
      expected: "(2, 3)",
      intro: [
        seg("text", "Print "),
        seg("code", "df.dropna().shape"),
        seg("text", " — one row goes away, so 3 rows become 2."),
      ],
      steps: [
        "dropna() removes any row containing a missing value.",
        "Dropping loses data, so prefer filling when the column is important.",
      ],
      starter: `# TODO: drop the incomplete row\nimport pandas as pd\n\n${DIRTY_DF}\n`,
      solution: `import pandas as pd\n\n${DIRTY_DF}\n\nprint(df.dropna().shape)`,
      checks: [
        assertEquals("two complete rows remain", "df.dropna().shape", "(2, 3)"),
        assertEquals("the original frame still has 3 rows", "len(df)", "3"),
      ],
      vars: ["pd", "df"],
      constraints: ["Use dropna()", "Output must be exactly: (2, 3)"],
      hints: ["print(df.dropna().shape)"],
      placeholder: "# print(df.dropna().shape)",
    }),

    conceptTask({
      slug: "pd-strip-strings",
      title: "Cleaning: Trim Whitespace",
      level: "medium",
      description:
        "Use .str.strip() to remove stray spaces from the region column and print the cleaned values.",
      expected: "['South', 'North', 'South']",
      intro: [
        seg("text", "The region values have stray spaces. Print "),
        seg("code", 'df["region"].str.strip().tolist()'),
        seg("text", " to clean them."),
      ],
      steps: [
        ".str gives you Python string methods across the whole column.",
        'Untrimmed values are a classic bug: " South" and "South" group separately.',
      ],
      starter: `# TODO: trim the whitespace\nimport pandas as pd\n\n${DIRTY_DF}\n`,
      solution: `import pandas as pd\n\n${DIRTY_DF}\n\nprint(df["region"].str.strip().tolist())`,
      checks: [
        assertEquals(
          "values are trimmed",
          'df["region"].str.strip().tolist()',
          '["South", "North", "South"]'
        ),
        assertTrue(
          "the raw column really had spaces",
          'df["region"].tolist() != ["South", "North", "South"]',
          "Do not retype the values — clean them with .str.strip()",
        ),
        assertEquals(
          "trimming makes the two South rows match",
          'df["region"].str.strip().tolist().count("South")',
          "2"
        ),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Use .str.strip()",
        "Do not rebuild the column by hand",
        "Output must be exactly: ['South', 'North', 'South']",
      ],
      hints: ['print(df["region"].str.strip().tolist())'],
      placeholder: '# print(df["region"].str.strip().tolist())',
    }),

    conceptTask({
      slug: "pd-drop-duplicates",
      title: "Cleaning: Remove Duplicate Rows",
      level: "medium",
      description:
        "Drop duplicate rows with drop_duplicates and print how many unique rows remain.",
      expected: "2",
      intro: [
        seg("text", "The pen row appears twice. Print "),
        seg("code", "len(df.drop_duplicates())"),
        seg("text", " to see how many unique rows are left."),
      ],
      steps: [
        "drop_duplicates() keeps the first occurrence of each identical row.",
        "Duplicates usually come from re-running an import — they silently inflate totals.",
      ],
      starter:
        '# TODO: drop the duplicate row\nimport pandas as pd\n\ndf = pd.DataFrame({\n    "item": ["pen", "pen", "bag"],\n    "revenue": [30, 30, 70],\n})\n',
      solution:
        'import pandas as pd\n\ndf = pd.DataFrame({\n    "item": ["pen", "pen", "bag"],\n    "revenue": [30, 30, 70],\n})\n\nprint(len(df.drop_duplicates()))',
      checks: [
        assertEquals("two unique rows", "len(df.drop_duplicates())", "2"),
        assertEquals("the original still has 3 rows", "len(df)", "3"),
        assertEquals(
          "the duplicate inflated the total",
          'int(df["revenue"].sum()) - int(df.drop_duplicates()["revenue"].sum())',
          "30"
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use drop_duplicates()", "Output must be exactly: 2"],
      hints: ["print(len(df.drop_duplicates()))"],
      placeholder: "# print(len(df.drop_duplicates()))",
    }),

    conceptTask({
      slug: "pd-astype-int",
      title: "Cleaning: Fix the Column Type",
      level: "medium",
      description:
        "Fill the missing revenue then convert the column to int with astype and print the values.",
      expected: "[30, 0, 70]",
      intro: [
        seg("text", "Chain "),
        seg("code", "fillna(0)"),
        seg("text", " then "),
        seg("code", "astype(int)"),
        seg("text", " on the revenue column and print the list. You must fill first — "),
        seg("code", "NaN"),
        seg("text", " cannot become an int."),
      ],
      steps: [
        "A single NaN forces the whole column to float.",
        "Fill the gaps, then astype(int) to get clean whole numbers.",
        "Converting before filling raises an error.",
      ],
      starter: `# TODO: fill, then convert to int\nimport pandas as pd\n\n${DIRTY_DF}\n\nrevenue = None\n`,
      solution: `import pandas as pd\n\n${DIRTY_DF}\n\nrevenue = df["revenue"].fillna(0).astype(int)\nprint(revenue.tolist())`,
      checks: [
        assertEquals("values are whole numbers", "revenue.tolist()", "[30, 0, 70]"),
        assertTrue(
          "the column is an integer type",
          'revenue.dtype.kind == "i"',
          "Expected an integer dtype after astype(int)",
        ),
        assertEquals("the total is unchanged", "int(revenue.sum())", "100"),
      ],
      vars: ["pd", "df", "revenue"],
      constraints: [
        "fillna(0) before astype(int)",
        "Store the result in revenue",
        "Output must be exactly: [30, 0, 70]",
      ],
      hints: ['revenue = df["revenue"].fillna(0).astype(int)', "print(revenue.tolist())"],
      placeholder: '# revenue = df["revenue"].fillna(0).astype(int)',
    }),

    conceptTask({
      slug: "pd-clean-pipeline",
      title: "Cleaning: A Full Cleaning Pass",
      level: "hard",
      description:
        "Trim the region text, fill missing revenue, convert it to int, then print the cleaned regions and the total.",
      expected: "['South', 'North', 'South']\n100",
      intro: [
        seg("text", "Clean both columns in place: trim "),
        seg("code", "region"),
        seg("text", " with "),
        seg("code", ".str.strip()"),
        seg("text", " and fix "),
        seg("code", "revenue"),
        seg("text", " with "),
        seg("code", "fillna(0).astype(int)"),
        seg("text", ". Then print the region list and the revenue total."),
      ],
      steps: [
        "Assign back to df[\"region\"] and df[\"revenue\"] to keep the changes.",
        "Clean text before grouping and fix types before doing maths.",
        "Print the regions first, then the total.",
      ],
      starter: `# TODO: clean both columns, then report\nimport pandas as pd\n\n${DIRTY_DF}\n`,
      solution: `import pandas as pd\n\n${DIRTY_DF}\n\ndf["region"] = df["region"].str.strip()\ndf["revenue"] = df["revenue"].fillna(0).astype(int)\n\nprint(df["region"].tolist())\nprint(int(df["revenue"].sum()))`,
      checks: [
        assertEquals(
          "regions were trimmed in place",
          'df["region"].tolist()',
          '["South", "North", "South"]'
        ),
        assertEquals("revenue was filled and converted", 'df["revenue"].tolist()', "[30, 0, 70]"),
        assertTrue(
          "revenue is now an integer column",
          'df["revenue"].dtype.kind == "i"',
          "Expected the revenue column to be integers after cleaning",
        ),
        assertEquals("total revenue", 'int(df["revenue"].sum())', "100"),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Assign the cleaned values back into df",
        "Print the region list, then the total",
      ],
      hints: [
        'df["region"] = df["region"].str.strip()',
        'df["revenue"] = df["revenue"].fillna(0).astype(int)',
      ],
      placeholder: '# df["region"] = df["region"].str.strip()',
    }),
  ];
}

export function pandasGroupTasks() {
  const CATALOG = `sales = pd.DataFrame({
    "item": ["pen", "book", "pencil"],
    "revenue": [30, 70, 20],
})
catalog = pd.DataFrame({
    "item": ["pen", "book", "pencil"],
    "category": ["stationery", "media", "stationery"],
})`;

  return [
    conceptTask({
      slug: "pd-groupby-sum",
      title: "GroupBy: Revenue per Region",
      level: "easy",
      description:
        "Group by region, sum the revenue, and print the result as a dict of ints.",
      expected: "{'North': 40, 'South': 100}",
      intro: [
        seg("text", "Group with "),
        seg("code", 'df.groupby("region")["revenue"].sum()'),
        seg("text", ", then print "),
        seg("code", "{k: int(v) for k, v in totals.items()}"),
        seg("text", " so the numbers print as plain ints."),
      ],
      steps: [
        "groupby splits the rows, then the aggregation combines each group.",
        "Groups come back sorted by key, so North comes before South.",
        "int(v) keeps the printed dict free of NumPy types.",
      ],
      starter: `# TODO: sum revenue per region\nimport pandas as pd\n\n${REGION_DF}\n\ntotals = None\n`,
      solution: `import pandas as pd\n\n${REGION_DF}\n\ntotals = df.groupby("region")["revenue"].sum()\nprint({k: int(v) for k, v in totals.items()})`,
      checks: [
        assertEquals("South total", 'int(totals["South"])', "100"),
        assertEquals("North total", 'int(totals["North"])', "40"),
        assertEquals("one row per region", "len(totals)", "2"),
      ],
      vars: ["pd", "df", "totals"],
      constraints: [
        "Use groupby",
        "Convert values with int() when printing",
        "Output must be exactly: {'North': 40, 'South': 100}",
      ],
      hints: [
        'totals = df.groupby("region")["revenue"].sum()',
        "print({k: int(v) for k, v in totals.items()})",
      ],
      placeholder: '# totals = df.groupby("region")["revenue"].sum()',
    }),

    conceptTask({
      slug: "pd-groupby-size",
      title: "GroupBy: Rows per Region",
      level: "easy",
      description:
        "Count how many rows each region has using groupby().size() and print it as a dict.",
      expected: "{'North': 1, 'South': 2}",
      intro: [
        seg("text", "Use "),
        seg("code", 'df.groupby("region").size()'),
        seg("text", " into "),
        seg("code", "counts"),
        seg("text", " and print it as a dict of ints."),
      ],
      steps: [
        ".size() counts rows per group — no column needed.",
        "It counts every row, including ones with missing values.",
      ],
      starter: `# TODO: count rows per region\nimport pandas as pd\n\n${REGION_DF}\n\ncounts = None\n`,
      solution: `import pandas as pd\n\n${REGION_DF}\n\ncounts = df.groupby("region").size()\nprint({k: int(v) for k, v in counts.items()})`,
      checks: [
        assertEquals("South has 2 rows", 'int(counts["South"])', "2"),
        assertEquals("North has 1 row", 'int(counts["North"])', "1"),
        assertEquals("counts add up to the frame length", "int(counts.sum())", "3"),
      ],
      vars: ["pd", "df", "counts"],
      constraints: ["Use groupby().size()", "Output must be exactly: {'North': 1, 'South': 2}"],
      hints: ['counts = df.groupby("region").size()'],
      placeholder: '# counts = df.groupby("region").size()',
    }),

    conceptTask({
      slug: "pd-groupby-mean",
      title: "GroupBy: Average per Region",
      level: "medium",
      description:
        "Group by region, average the revenue, and print the result rounded to two decimals.",
      expected: "{'North': 40.0, 'South': 50.0}",
      intro: [
        seg("text", "Use "),
        seg("code", ".mean()"),
        seg("text", " instead of "),
        seg("code", ".sum()"),
        seg("text", " and print "),
        seg("code", "{k: round(float(v), 2) for k, v in averages.items()}"),
        seg("text", "."),
      ],
      steps: [
        "Swapping the aggregation is the only change from summing.",
        "South averages 50.0 from 30 and 70; North has a single row.",
      ],
      starter: `# TODO: average revenue per region\nimport pandas as pd\n\n${REGION_DF}\n\naverages = None\n`,
      solution: `import pandas as pd\n\n${REGION_DF}\n\naverages = df.groupby("region")["revenue"].mean()\nprint({k: round(float(v), 2) for k, v in averages.items()})`,
      checks: [
        assertEquals("South average", "round(float(averages[\"South\"]), 2)", "50.0"),
        assertEquals("North average", "round(float(averages[\"North\"]), 2)", "40.0"),
      ],
      vars: ["pd", "df", "averages"],
      constraints: [
        "Use .mean()",
        "Round to 2 decimals when printing",
        "Output must be exactly: {'North': 40.0, 'South': 50.0}",
      ],
      hints: ['averages = df.groupby("region")["revenue"].mean()'],
      placeholder: '# averages = df.groupby("region")["revenue"].mean()',
    }),

    conceptTask({
      slug: "pd-merge-on-key",
      title: "Merge: Join Sales to the Catalogue",
      level: "medium",
      description:
        'Merge the sales and catalog frames on "item" and print the merged column names.',
      expected: "['item', 'revenue', 'category']",
      intro: [
        seg("text", "Use "),
        seg("code", 'pd.merge(sales, catalog, on="item")'),
        seg("text", " into "),
        seg("code", "merged"),
        seg("text", " and print "),
        seg("code", "list(merged.columns)"),
        seg("text", "."),
      ],
      steps: [
        "merge is a SQL join: matching rows are lined up on the key.",
        "The key column appears once; the other columns come along.",
        "The default is an inner join, so unmatched rows drop out.",
      ],
      starter: `# TODO: join the two frames on item\nimport pandas as pd\n\n${CATALOG}\n\nmerged = None\n`,
      solution: `import pandas as pd\n\n${CATALOG}\n\nmerged = pd.merge(sales, catalog, on="item")\nprint(list(merged.columns))`,
      checks: [
        assertEquals(
          "columns from both frames",
          "list(merged.columns)",
          '["item", "revenue", "category"]'
        ),
        assertEquals("all three items matched", "len(merged)", "3"),
        assertEquals(
          "the pen row kept its category",
          'merged.loc[merged["item"] == "pen", "category"].iloc[0]',
          '"stationery"'
        ),
      ],
      vars: ["pd", "merged"],
      constraints: [
        'Merge on the "item" column',
        "Store the result in merged",
        "Output must be exactly: ['item', 'revenue', 'category']",
      ],
      hints: ['merged = pd.merge(sales, catalog, on="item")', "print(list(merged.columns))"],
      placeholder: '# merged = pd.merge(sales, catalog, on="item")',
    }),

    conceptTask({
      slug: "pd-merge-then-group",
      title: "Merge: Group After Joining",
      level: "medium",
      description:
        "Merge sales with the catalogue, then group by category and print revenue totals as a dict.",
      expected: "{'media': 70, 'stationery': 50}",
      intro: [
        seg("text", "Merge on "),
        seg("code", "item"),
        seg("text", ", then group by "),
        seg("code", "category"),
        seg("text", " and sum the revenue into "),
        seg("code", "totals"),
        seg("text", ". Print it as a dict of ints."),
      ],
      steps: [
        "Joining first gives you the column you want to group by.",
        "Merge then group is the backbone of most reporting queries.",
        "stationery combines the pen (30) and pencil (20).",
      ],
      starter: `# TODO: merge, then total by category\nimport pandas as pd\n\n${CATALOG}\n\ntotals = None\n`,
      solution: `import pandas as pd\n\n${CATALOG}\n\nmerged = pd.merge(sales, catalog, on="item")\ntotals = merged.groupby("category")["revenue"].sum()\nprint({k: int(v) for k, v in totals.items()})`,
      checks: [
        assertEquals("stationery total", 'int(totals["stationery"])', "50"),
        assertEquals("media total", 'int(totals["media"])', "70"),
        assertEquals("nothing was lost in the join", "int(totals.sum())", "120"),
      ],
      vars: ["pd", "totals"],
      constraints: [
        "Merge before grouping",
        "Group by category",
        "Output must be exactly: {'media': 70, 'stationery': 50}",
      ],
      hints: [
        'merged = pd.merge(sales, catalog, on="item")',
        'totals = merged.groupby("category")["revenue"].sum()',
      ],
      placeholder: "# merged = pd.merge(...)",
    }),

    conceptTask({
      slug: "pd-concat",
      title: "Concat: Stack Two Months",
      level: "medium",
      description:
        "Stack two DataFrames with pd.concat and print the combined shape.",
      expected: "(4, 2)",
      intro: [
        seg("text", "Stack "),
        seg("code", "january"),
        seg("text", " and "),
        seg("code", "february"),
        seg("text", " with "),
        seg("code", "pd.concat([january, february], ignore_index=True)"),
        seg("text", " and print the shape."),
      ],
      steps: [
        "concat stacks rows; merge joins columns — do not mix them up.",
        "ignore_index=True renumbers the rows so the index has no duplicates.",
      ],
      starter:
        '# TODO: stack the two months\nimport pandas as pd\n\njanuary = pd.DataFrame({"item": ["pen", "book"], "revenue": [30, 70]})\nfebruary = pd.DataFrame({"item": ["bag", "pencil"], "revenue": [40, 20]})\ncombined = None\n',
      solution:
        'import pandas as pd\n\njanuary = pd.DataFrame({"item": ["pen", "book"], "revenue": [30, 70]})\nfebruary = pd.DataFrame({"item": ["bag", "pencil"], "revenue": [40, 20]})\ncombined = pd.concat([january, february], ignore_index=True)\n\nprint(combined.shape)',
      checks: [
        assertEquals("four rows, two columns", "combined.shape", "(4, 2)"),
        assertEquals("the index was renumbered", "list(combined.index)", "[0, 1, 2, 3]"),
        assertEquals("revenue from both months", 'int(combined["revenue"].sum())', "160"),
      ],
      vars: ["pd", "combined"],
      constraints: [
        "Use pd.concat with ignore_index=True",
        "Store the result in combined",
        "Output must be exactly: (4, 2)",
      ],
      hints: ["combined = pd.concat([january, february], ignore_index=True)"],
      placeholder: "# combined = pd.concat([...], ignore_index=True)",
    }),

    conceptTask({
      slug: "pd-groupby-agg",
      title: "GroupBy: Two Aggregations at Once",
      level: "hard",
      description:
        'Use agg(["sum", "max"]) per region and print the South total then the South maximum.',
      expected: "100\n70",
      intro: [
        seg("text", "Use "),
        seg("code", 'df.groupby("region")["revenue"].agg(["sum", "max"])'),
        seg("text", " into "),
        seg("code", "summary"),
        seg("text", ", then print "),
        seg("code", 'int(summary.loc["South", "sum"])'),
        seg("text", " and the South maximum."),
      ],
      steps: [
        "agg takes a list of aggregation names and returns one column each.",
        "The result is a DataFrame indexed by group, so loc[region, name] reads a cell.",
        "Print the sum first, then the max.",
      ],
      starter: `# TODO: aggregate twice in one call\nimport pandas as pd\n\n${REGION_DF}\n\nsummary = None\n`,
      solution: `import pandas as pd\n\n${REGION_DF}\n\nsummary = df.groupby("region")["revenue"].agg(["sum", "max"])\n\nprint(int(summary.loc["South", "sum"]))\nprint(int(summary.loc["South", "max"]))`,
      checks: [
        assertEquals("both aggregations present", "list(summary.columns)", '["sum", "max"]'),
        assertEquals("South total", 'int(summary.loc["South", "sum"])', "100"),
        assertEquals("South maximum", 'int(summary.loc["South", "max"])', "70"),
        assertEquals("one row per region", "len(summary)", "2"),
      ],
      vars: ["pd", "df", "summary"],
      constraints: [
        'Use agg(["sum", "max"]) — one call, not two',
        "Print the sum, then the max",
      ],
      hints: [
        'summary = df.groupby("region")["revenue"].agg(["sum", "max"])',
        'print(int(summary.loc["South", "sum"]))',
      ],
      placeholder: '# summary = df.groupby("region")["revenue"].agg([...])',
    }),
  ];
}

export function pandasPivotTasks() {
  return [
    conceptTask({
      slug: "pd-pivot-basic",
      title: "Pivot: Totals by Region",
      level: "easy",
      description:
        "Build a pivot table of revenue summed by region and print it as a dict of ints.",
      expected: "{'North': 60, 'South': 100}",
      intro: [
        seg("text", "Use "),
        seg("code", 'df.pivot_table(values="revenue", index="region", aggfunc="sum")'),
        seg("text", " into "),
        seg("code", "pivot"),
        seg("text", ", then print the "),
        seg("code", "revenue"),
        seg("text", " column as a dict of ints."),
      ],
      steps: [
        "index= chooses the row grouping.",
        "aggfunc= chooses how values combine — sum here.",
        "With one value column, the result has a single column named revenue.",
      ],
      starter: `# TODO: pivot revenue by region\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = None\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", aggfunc="sum")\nprint({k: int(v) for k, v in pivot["revenue"].items()})`,
      checks: [
        assertEquals("South total", 'int(pivot.loc["South", "revenue"])', "100"),
        assertEquals("North total", 'int(pivot.loc["North", "revenue"])', "60"),
        assertEquals("one row per region", "len(pivot)", "2"),
      ],
      vars: ["pd", "df", "pivot"],
      constraints: [
        "Use pivot_table with index and aggfunc",
        "Output must be exactly: {'North': 60, 'South': 100}",
      ],
      hints: [
        'pivot = df.pivot_table(values="revenue", index="region", aggfunc="sum")',
        'print({k: int(v) for k, v in pivot["revenue"].items()})',
      ],
      placeholder: "# pivot = df.pivot_table(...)",
    }),

    conceptTask({
      slug: "pd-pivot-columns",
      title: "Pivot: Region by Category Grid",
      level: "easy",
      description:
        "Add columns=\"category\" to build a region-by-category grid and print its values as nested lists.",
      expected: "[[20, 40], [70, 30]]",
      intro: [
        seg("text", "Add "),
        seg("code", 'columns="category"'),
        seg("text", " and "),
        seg("code", "fill_value=0"),
        seg("text", " to the pivot, then print "),
        seg("code", "pivot.values.tolist()"),
        seg("text", ". Rows are regions, columns are categories, both sorted."),
      ],
      steps: [
        "index becomes the rows and columns becomes the columns — a cross-tab.",
        "fill_value=0 replaces empty combinations so the values stay integers.",
        "Row order is North, South; column order is bag, pen.",
      ],
      starter: `# TODO: build the cross-tab\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = None\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\nprint(pivot.values.tolist())`,
      checks: [
        assertEquals("grid values", "pivot.values.tolist()", "[[20, 40], [70, 30]]"),
        assertEquals("rows are the regions", "list(pivot.index)", '["North", "South"]'),
        assertEquals("columns are the categories", "list(pivot.columns)", '["bag", "pen"]'),
      ],
      vars: ["pd", "df", "pivot"],
      constraints: [
        'Pass columns="category" and fill_value=0',
        "Output must be exactly: [[20, 40], [70, 30]]",
      ],
      hints: [
        'pivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)',
        "print(pivot.values.tolist())",
      ],
      placeholder: "# pivot = df.pivot_table(..., columns='category', fill_value=0)",
    }),

    conceptTask({
      slug: "pd-pivot-index",
      title: "Pivot: Read the Row Labels",
      level: "easy",
      description:
        "Print the pivot table's row labels with list(pivot.index).",
      expected: "['North', 'South']",
      intro: [
        seg("text", "Print "),
        seg("code", "list(pivot.index)"),
        seg("text", " — the pivot's row labels are the values of the column you grouped by."),
      ],
      steps: [
        "The index holds the group keys, sorted alphabetically.",
        "Knowing the order matters before you read values by position.",
      ],
      starter: `# TODO: print the row labels\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", aggfunc="sum")\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", aggfunc="sum")\nprint(list(pivot.index))`,
      checks: [
        assertEquals("row labels sorted", "list(pivot.index)", '["North", "South"]'),
        assertEquals("two groups", "len(pivot.index)", "2"),
      ],
      vars: ["pd", "pivot"],
      constraints: ["Use list(pivot.index)", "Output must be exactly: ['North', 'South']"],
      hints: ["print(list(pivot.index))"],
      placeholder: "# print(list(pivot.index))",
    }),

    conceptTask({
      slug: "pd-pivot-lookup",
      title: "Pivot: Read One Cell",
      level: "medium",
      description:
        "Look up the South/pen cell of the cross-tab pivot and print it as an int.",
      expected: "30",
      intro: [
        seg("text", "Print "),
        seg("code", 'int(pivot.loc["South", "pen"])'),
        seg("text", " — with a cross-tab, "),
        seg("code", "loc[row, column]"),
        seg("text", " reads one combination."),
      ],
      steps: [
        "The row label is the region and the column label is the category.",
        "This is how you answer 'how much did pens make in the South?'",
      ],
      starter: `# TODO: read the South pen cell\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\nprint(int(pivot.loc["South", "pen"]))`,
      checks: [
        assertEquals("South pen revenue", 'int(pivot.loc["South", "pen"])', "30"),
        assertEquals("North bag revenue", 'int(pivot.loc["North", "bag"])', "20"),
      ],
      vars: ["pd", "pivot"],
      constraints: ["Use pivot.loc[row, column]", "Output must be exactly: 30"],
      hints: ['print(int(pivot.loc["South", "pen"]))'],
      placeholder: '# print(int(pivot.loc["South", "pen"]))',
    }),

    conceptTask({
      slug: "pd-pivot-mean",
      title: "Pivot: Averages Instead of Totals",
      level: "medium",
      description:
        'Switch the pivot aggfunc to "mean" and print the grid values as nested lists.',
      expected: "[[20.0, 40.0], [70.0, 30.0]]",
      intro: [
        seg("text", "Change "),
        seg("code", "aggfunc"),
        seg("text", " to "),
        seg("code", '"mean"'),
        seg("text", " and print "),
        seg("code", "pivot.values.tolist()"),
        seg("text", ". Each cell has one row here, so the averages match the values — but they print as floats."),
      ],
      steps: [
        "aggfunc is the only change from the summed version.",
        "Averaging always produces floats, even when the inputs are integers.",
      ],
      starter: `# TODO: average instead of summing\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = None\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="mean", fill_value=0)\nprint(pivot.values.tolist())`,
      checks: [
        assertEquals("values are floats", "pivot.values.tolist()", "[[20.0, 40.0], [70.0, 30.0]]"),
        assertEquals("shape is 2 by 2", "pivot.shape", "(2, 2)"),
      ],
      vars: ["pd", "df", "pivot"],
      constraints: [
        'Use aggfunc="mean"',
        "Output must be exactly: [[20.0, 40.0], [70.0, 30.0]]",
      ],
      hints: ['pivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="mean", fill_value=0)'],
      placeholder: "# aggfunc='mean'",
    }),

    conceptTask({
      slug: "pd-pivot-columns-list",
      title: "Pivot: Read the Column Labels",
      level: "medium",
      description:
        "Print the cross-tab pivot's column labels with list(pivot.columns).",
      expected: "['bag', 'pen']",
      intro: [
        seg("text", "Print "),
        seg("code", "list(pivot.columns)"),
        seg("text", " — these come from the distinct values of the column you pivoted on, sorted."),
      ],
      steps: [
        "Every distinct category becomes its own column.",
        "New categories in next month's data would add new columns automatically.",
      ],
      starter: `# TODO: print the column labels\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\nprint(list(pivot.columns))`,
      checks: [
        assertEquals("column labels sorted", "list(pivot.columns)", '["bag", "pen"]'),
        assertEquals("two categories", "len(pivot.columns)", "2"),
      ],
      vars: ["pd", "pivot"],
      constraints: ["Use list(pivot.columns)", "Output must be exactly: ['bag', 'pen']"],
      hints: ["print(list(pivot.columns))"],
      placeholder: "# print(list(pivot.columns))",
    }),

    conceptTask({
      slug: "pd-pivot-row-totals",
      title: "Pivot: Total Each Row",
      level: "hard",
      description:
        "Sum across the pivot's columns with axis=1 to get a total per region and print it as a dict.",
      expected: "{'North': 60, 'South': 100}",
      intro: [
        seg("text", "Build the cross-tab, then use "),
        seg("code", "pivot.sum(axis=1)"),
        seg("text", " into "),
        seg("code", "region_totals"),
        seg("text", " and print it as a dict of ints."),
      ],
      steps: [
        "axis=1 sums across the columns, giving one number per row.",
        "axis=0 would total each category instead.",
        "This is the margin row you see at the edge of a spreadsheet pivot.",
      ],
      starter: `# TODO: total each region across categories\nimport pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\nregion_totals = None\n`,
      solution: `import pandas as pd\n\n${PIVOT_DF}\n\npivot = df.pivot_table(values="revenue", index="region", columns="category", aggfunc="sum", fill_value=0)\nregion_totals = pivot.sum(axis=1)\nprint({k: int(v) for k, v in region_totals.items()})`,
      checks: [
        assertEquals("South row total", 'int(region_totals["South"])', "100"),
        assertEquals("North row total", 'int(region_totals["North"])', "60"),
        assertEquals(
          "the totals match the whole frame",
          "int(region_totals.sum())",
          'int(df["revenue"].sum())'
        ),
      ],
      vars: ["pd", "pivot", "region_totals"],
      constraints: [
        "Use sum(axis=1)",
        "Store the result in region_totals",
        "Output must be exactly: {'North': 60, 'South': 100}",
      ],
      hints: ["region_totals = pivot.sum(axis=1)", "print({k: int(v) for k, v in region_totals.items()})"],
      placeholder: "# region_totals = pivot.sum(axis=1)",
    }),
  ];
}
