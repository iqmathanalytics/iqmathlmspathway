/**
 * Module 15 topics 1-3 — Series/DataFrames, IO, and selection.
 *
 * Determinism rules: never print a Series or DataFrame repr (spacing and dtype
 * lines differ between pandas 2.2 in the browser and newer pandas locally).
 * Print .tolist(), .shape, list(df.columns), int(), float(), or round() instead.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

const PD = "import pandas as _pd";

const SALES_DF = `df = pd.DataFrame({
    "item": ["pen", "book", "bag"],
    "region": ["South", "North", "South"],
    "revenue": [30, 40, 70],
})`;

function assertIsFrame(name) {
  return {
    label: `${name} is a DataFrame`,
    code: `${PD}\nassert "${name}" in globals(), "Expected a variable named ${name}"\nassert isinstance(${name}, _pd.DataFrame), "Expected ${name} to be a DataFrame, got " + type(${name}).__name__`,
  };
}

function assertIsSeries(name) {
  return {
    label: `${name} is a Series`,
    code: `${PD}\nassert "${name}" in globals(), "Expected a variable named ${name}"\nassert isinstance(${name}, _pd.Series), "Expected ${name} to be a Series, got " + type(${name}).__name__`,
  };
}

export function pandasBasicsTasks() {
  return [
    conceptTask({
      slug: "pd-series-create",
      title: "pandas: Your First Series",
      level: "easy",
      description:
        "Create a pandas Series named sales from [10, 20, 30] and print its values with .tolist().",
      expected: "[10, 20, 30]",
      intro: [
        seg("text", "Import pandas as "),
        seg("code", "pd"),
        seg("text", ", build "),
        seg("code", "sales"),
        seg("text", " with "),
        seg("code", "pd.Series([10, 20, 30])"),
        seg("text", ", and print "),
        seg("code", "sales.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "A Series is one labelled column of data.",
        "import pandas as pd is the standard alias.",
        ".tolist() prints the values without the index or dtype line.",
      ],
      starter: "# TODO: build the Series\nimport pandas as pd\n\nsales = None\n",
      solution: "import pandas as pd\n\nsales = pd.Series([10, 20, 30])\nprint(sales.tolist())",
      checks: [
        assertIsSeries("sales"),
        assertEquals("values are correct", "sales.tolist()", "[10, 20, 30]"),
      ],
      vars: ["pd", "sales"],
      constraints: [
        "Use pd.Series() — a plain list will not pass",
        "Name it sales",
        "Print with .tolist()",
      ],
      hints: ["sales = pd.Series([10, 20, 30])", "print(sales.tolist())"],
      success: "Correct! A Series is the building block of every DataFrame column.",
      placeholder: "# sales = pd.Series([...])",
    }),

    conceptTask({
      slug: "pd-series-labels",
      title: "pandas: Label the Index",
      level: "easy",
      description:
        'Create a Series with region labels as the index and print the value for "North".',
      expected: "400",
      intro: [
        seg("text", "Build "),
        seg("code", "pd.Series([250, 400], index=[\"South\", \"North\"])"),
        seg("text", " as "),
        seg("code", "revenue"),
        seg("text", ", then print "),
        seg("code", 'int(revenue["North"])'),
        seg("text", "."),
      ],
      steps: [
        "A Series index can be text, not just numbers.",
        "That makes lookups read like a dictionary.",
      ],
      starter:
        "# TODO: label the index, then look up North\nimport pandas as pd\n\nrevenue = None\n",
      solution:
        'import pandas as pd\n\nrevenue = pd.Series([250, 400], index=["South", "North"])\nprint(int(revenue["North"]))',
      checks: [
        assertIsSeries("revenue"),
        assertEquals("index holds the region labels", "list(revenue.index)", '["South", "North"]'),
        assertEquals("North lookup", "int(revenue[\"North\"])", "400"),
      ],
      vars: ["pd", "revenue"],
      constraints: [
        "Pass index= to pd.Series",
        "Look up by label, not position",
        "Output must be exactly: 400",
      ],
      hints: ['revenue = pd.Series([250, 400], index=["South", "North"])', 'print(int(revenue["North"]))'],
      placeholder: "# revenue = pd.Series([...], index=[...])",
    }),

    conceptTask({
      slug: "pd-dataframe-columns",
      title: "pandas: Build a DataFrame",
      level: "easy",
      description:
        "Create a DataFrame from a dict of columns and print its column names as a list.",
      expected: "['item', 'region', 'revenue']",
      intro: [
        seg("text", "Build "),
        seg("code", "df"),
        seg("text", " from a dict with keys "),
        seg("code", "item"),
        seg("text", ", "),
        seg("code", "region"),
        seg("text", ", "),
        seg("code", "revenue"),
        seg("text", ", then print "),
        seg("code", "list(df.columns)"),
        seg("text", "."),
      ],
      steps: [
        "pd.DataFrame(dict) makes each key a column.",
        "df.columns is an Index — wrap it in list() to print it plainly.",
      ],
      starter: `# TODO: build the DataFrame\nimport pandas as pd\n\ndf = None\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(list(df.columns))`,
      checks: [
        assertIsFrame("df"),
        assertEquals("three columns in order", "list(df.columns)", '["item", "region", "revenue"]'),
        assertEquals("three rows of data", "len(df)", "3"),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Use pd.DataFrame with a dict",
        "Column order: item, region, revenue",
        "Print with list(df.columns)",
      ],
      hints: ['df = pd.DataFrame({"item": [...], "region": [...], "revenue": [...]})', "print(list(df.columns))"],
      placeholder: "# df = pd.DataFrame({ ... })",
    }),

    conceptTask({
      slug: "pd-dataframe-shape",
      title: "pandas: Rows and Columns",
      level: "medium",
      description: "Print the shape of the sales DataFrame as (rows, columns).",
      expected: "(3, 3)",
      intro: [
        seg("text", "Print "),
        seg("code", "df.shape"),
        seg("text", " — the first number is rows, the second is columns. It is the first thing to check after loading data."),
      ],
      steps: [
        ".shape is a tuple of plain ints.",
        "len(df) gives just the row count.",
      ],
      starter: `# TODO: print the shape\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(df.shape)`,
      checks: [
        assertIsFrame("df"),
        assertEquals("3 rows and 3 columns", "df.shape", "(3, 3)"),
      ],
      vars: ["pd", "df"],
      constraints: ["Print df.shape", "Output must be exactly: (3, 3)"],
      hints: ["print(df.shape)"],
      placeholder: "# print(df.shape)",
    }),

    conceptTask({
      slug: "pd-column-sum",
      title: "pandas: Total a Column",
      level: "medium",
      description: "Print the total revenue by summing the revenue column.",
      expected: "140",
      intro: [
        seg("text", "Print "),
        seg("code", 'int(df["revenue"].sum())'),
        seg("text", " — selecting a column gives a Series, and a Series knows how to sum itself."),
      ],
      steps: [
        'df["revenue"] selects one column as a Series.',
        ".sum() aggregates it; int() keeps the printed value plain.",
      ],
      starter: `# TODO: total the revenue column\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(int(df["revenue"].sum()))`,
      checks: [
        assertIsFrame("df"),
        assertEquals("total revenue", 'int(df["revenue"].sum())', "140"),
        assertEquals("the column is untouched", 'df["revenue"].tolist()', "[30, 40, 70]"),
      ],
      vars: ["pd", "df"],
      constraints: ["Select the column, then call .sum()", "Output must be exactly: 140"],
      hints: ['print(int(df["revenue"].sum()))'],
      placeholder: '# print(int(df["revenue"].sum()))',
    }),

    conceptTask({
      slug: "pd-column-mean",
      title: "pandas: Average a Column",
      level: "medium",
      description:
        "Print the mean revenue rounded to two decimal places.",
      expected: "46.67",
      intro: [
        seg("text", "Print "),
        seg("code", 'round(float(df["revenue"].mean()), 2)'),
        seg("text", ". Rounding keeps the output readable and stable."),
      ],
      steps: [
        ".mean() ignores missing values automatically.",
        "round(value, 2) trims the long decimal tail.",
      ],
      starter: `# TODO: average the revenue column\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(round(float(df["revenue"].mean()), 2))`,
      checks: [
        assertEquals("mean rounded to 2 dp", 'round(float(df["revenue"].mean()), 2)', "46.67"),
        assertTrue(
          "the mean comes from the column",
          'abs(float(df["revenue"].mean()) - 140 / 3) < 1e-9',
          "Compute the mean from the revenue column",
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use .mean()", "Round to 2 decimals", "Output must be exactly: 46.67"],
      hints: ['print(round(float(df["revenue"].mean()), 2))'],
      placeholder: '# print(round(float(df["revenue"].mean()), 2))',
    }),

    conceptTask({
      slug: "pd-add-column",
      title: "pandas: Add a Calculated Column",
      level: "hard",
      description:
        "Add a total column equal to units times price and print the new column as a list.",
      expected: "[20, 60, 20]",
      intro: [
        seg("text", "Given "),
        seg("code", "units"),
        seg("text", " and "),
        seg("code", "price"),
        seg("text", " columns, create "),
        seg("code", 'df["total"]'),
        seg("text", " as their product and print "),
        seg("code", 'df["total"].tolist()'),
        seg("text", "."),
      ],
      steps: [
        "Multiplying two columns works elementwise — no loop.",
        "Assigning to a new key adds a column in place.",
        "This is the everyday way to build derived features.",
      ],
      starter:
        '# TODO: add the total column\nimport pandas as pd\n\ndf = pd.DataFrame({\n    "units": [2, 3, 4],\n    "price": [10, 20, 5],\n})\n',
      solution:
        'import pandas as pd\n\ndf = pd.DataFrame({\n    "units": [2, 3, 4],\n    "price": [10, 20, 5],\n})\n\ndf["total"] = df["units"] * df["price"]\nprint(df["total"].tolist())',
      checks: [
        assertIsFrame("df"),
        assertTrue(
          "a total column was added",
          '"total" in df.columns',
          'Expected a new column named "total"',
        ),
        assertEquals("totals are units * price", 'df["total"].tolist()', "[20, 60, 20]"),
        assertEquals("the frame now has 3 columns", "df.shape", "(3, 3)"),
      ],
      vars: ["pd", "df"],
      constraints: [
        'Name the new column "total"',
        "Multiply the two columns — no loop",
        "Output must be exactly: [20, 60, 20]",
      ],
      hints: ['df["total"] = df["units"] * df["price"]', 'print(df["total"].tolist())'],
      placeholder: '# df["total"] = ...',
    }),
  ];
}

export function pandasIoTasks() {
  return [
    conceptTask({
      slug: "pd-read-csv-string",
      title: "IO: Read CSV Text",
      level: "easy",
      description:
        "Use StringIO and pd.read_csv to load CSV text into a DataFrame, then print its shape.",
      expected: "(2, 2)",
      intro: [
        seg("text", "Wrap the CSV text in "),
        seg("code", "StringIO"),
        seg("text", ", load it with "),
        seg("code", "pd.read_csv"),
        seg("text", " into "),
        seg("code", "df"),
        seg("text", ", and print "),
        seg("code", "df.shape"),
        seg("text", "."),
      ],
      steps: [
        "read_csv normally takes a filename, but it accepts any file-like object.",
        "StringIO turns a string into a file-like object.",
        "The header row becomes the column names, so 3 lines give 2 rows.",
      ],
      starter:
        '# TODO: read the CSV text into a DataFrame\nimport pandas as pd\nfrom io import StringIO\n\ncsv_text = "item,revenue\\npen,30\\nbook,70\\n"\ndf = None\n',
      solution:
        'import pandas as pd\nfrom io import StringIO\n\ncsv_text = "item,revenue\\npen,30\\nbook,70\\n"\ndf = pd.read_csv(StringIO(csv_text))\n\nprint(df.shape)',
      checks: [
        assertIsFrame("df"),
        assertEquals("header became column names", "list(df.columns)", '["item", "revenue"]'),
        assertEquals("two data rows", "df.shape", "(2, 2)"),
        assertEquals("numbers were parsed as ints", 'int(df["revenue"].sum())', "100"),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Use pd.read_csv with StringIO",
        "Do not build the DataFrame by hand",
        "Output must be exactly: (2, 2)",
      ],
      hints: ["df = pd.read_csv(StringIO(csv_text))", "print(df.shape)"],
      placeholder: "# df = pd.read_csv(StringIO(csv_text))",
    }),

    conceptTask({
      slug: "pd-to-csv-file",
      title: "IO: Write a CSV File",
      level: "easy",
      description:
        "Save a DataFrame to sales_out.csv without the index, then print the file's header line.",
      expected: "item,revenue",
      intro: [
        seg("text", "Write "),
        seg("code", "df"),
        seg("text", " to "),
        seg("code", "sales_out.csv"),
        seg("text", " with "),
        seg("code", "index=False"),
        seg("text", ", then open the file and print its first line."),
      ],
      steps: [
        "to_csv(path, index=False) leaves out the row numbers.",
        "Without index=False you get a stray unnamed first column.",
        "read().splitlines()[0] is the header row.",
      ],
      starter:
        '# TODO: write the CSV, then print its header line\nimport pandas as pd\n\ndf = pd.DataFrame({"item": ["pen", "book"], "revenue": [30, 70]})\n',
      solution:
        'import pandas as pd\n\ndf = pd.DataFrame({"item": ["pen", "book"], "revenue": [30, 70]})\ndf.to_csv("sales_out.csv", index=False)\n\nwith open("sales_out.csv") as f:\n    header = f.read().splitlines()[0]\n\nprint(header)',
      checks: [
        assertTrue(
          "the CSV file was written",
          '__import__("os").path.exists("sales_out.csv")',
          "Expected sales_out.csv to exist",
        ),
        assertEquals(
          "the index column was excluded",
          'open("sales_out.csv").read().splitlines()[0]',
          '"item,revenue"'
        ),
        assertEquals(
          "header plus two data rows",
          'len(open("sales_out.csv").read().splitlines())',
          "3"
        ),
      ],
      vars: ["pd", "df"],
      constraints: [
        "File name must be sales_out.csv",
        "Pass index=False",
        "Output must be exactly: item,revenue",
      ],
      hints: ['df.to_csv("sales_out.csv", index=False)', "print(f.read().splitlines()[0])"],
      placeholder: '# df.to_csv("sales_out.csv", index=False)',
    }),

    conceptTask({
      slug: "pd-read-csv-file",
      title: "IO: Load a CSV From Disk",
      level: "medium",
      description:
        "Write a CSV with open(), load it with pd.read_csv, and print the total of its revenue column.",
      expected: "100",
      intro: [
        seg("text", "Write the CSV to "),
        seg("code", "revenue.csv"),
        seg("text", ", load it with "),
        seg("code", "pd.read_csv"),
        seg("text", " into "),
        seg("code", "df"),
        seg("text", ", then print the revenue total."),
      ],
      steps: [
        "This is the everyday pipeline: file on disk to DataFrame to number.",
        "read_csv infers the numeric type, so .sum() works right away.",
      ],
      starter:
        '# TODO: load the file and total the column\nimport pandas as pd\n\nwith open("revenue.csv", "w") as f:\n    f.write("item,revenue\\npen,30\\nbook,70\\n")\n\ndf = None\n',
      solution:
        'import pandas as pd\n\nwith open("revenue.csv", "w") as f:\n    f.write("item,revenue\\npen,30\\nbook,70\\n")\n\ndf = pd.read_csv("revenue.csv")\nprint(int(df["revenue"].sum()))',
      checks: [
        assertIsFrame("df"),
        assertEquals("two rows loaded", "df.shape", "(2, 2)"),
        assertEquals("revenue total", 'int(df["revenue"].sum())', "100"),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Read the file with pd.read_csv",
        "Do not build the DataFrame by hand",
        "Output must be exactly: 100",
      ],
      hints: ['df = pd.read_csv("revenue.csv")', 'print(int(df["revenue"].sum()))'],
      placeholder: '# df = pd.read_csv("revenue.csv")',
    }),

    conceptTask({
      slug: "pd-json-records",
      title: "IO: JSON Records to DataFrame",
      level: "medium",
      description:
        "Parse a JSON array of records with json.loads and build a DataFrame from it, then print its columns.",
      expected: "['item', 'revenue']",
      intro: [
        seg("text", "Parse the JSON text with "),
        seg("code", "json.loads"),
        seg("text", " into "),
        seg("code", "records"),
        seg("text", ", build "),
        seg("code", "df"),
        seg("text", " with "),
        seg("code", "pd.DataFrame(records)"),
        seg("text", ", and print its columns."),
      ],
      steps: [
        "A JSON array of objects becomes a list of dicts.",
        "pd.DataFrame(list_of_dicts) uses the dict keys as columns.",
        "This is the usual shape of an API response.",
      ],
      starter:
        '# TODO: build a DataFrame from the records\nimport json\nimport pandas as pd\n\nresponse = \'[{"item": "pen", "revenue": 30}, {"item": "book", "revenue": 70}]\'\nrecords = []\ndf = None\n',
      solution:
        'import json\nimport pandas as pd\n\nresponse = \'[{"item": "pen", "revenue": 30}, {"item": "book", "revenue": 70}]\'\nrecords = json.loads(response)\ndf = pd.DataFrame(records)\n\nprint(list(df.columns))',
      checks: [
        assertType("records", "list"),
        assertIsFrame("df"),
        assertEquals("columns come from the keys", "list(df.columns)", '["item", "revenue"]'),
        assertEquals("both records loaded", "df.shape", "(2, 2)"),
      ],
      vars: ["json", "pd", "records", "df"],
      constraints: [
        "Parse with json.loads first",
        "Build the frame with pd.DataFrame(records)",
        "Output must be exactly: ['item', 'revenue']",
      ],
      hints: ["records = json.loads(response)", "df = pd.DataFrame(records)"],
      placeholder: "# records = json.loads(response)",
    }),

    conceptTask({
      slug: "pd-to-json-file",
      title: "IO: Export to JSON",
      level: "medium",
      description:
        "Export a DataFrame to JSON records, load the file back with json.load, and print the first item.",
      expected: "pen",
      intro: [
        seg("text", "Write "),
        seg("code", "df"),
        seg("text", " to "),
        seg("code", "sales.json"),
        seg("text", " using "),
        seg("code", 'orient="records"'),
        seg("text", ", read it back with "),
        seg("code", "json.load"),
        seg("text", " into "),
        seg("code", "records"),
        seg("text", ", and print the first item's name."),
      ],
      steps: [
        'orient="records" produces a list of objects — the friendliest shape for APIs.',
        "Loading it back proves the export is valid JSON.",
      ],
      starter:
        '# TODO: export to JSON, then read it back\nimport json\nimport pandas as pd\n\ndf = pd.DataFrame({"item": ["pen", "book"], "revenue": [30, 70]})\nrecords = []\n',
      solution:
        'import json\nimport pandas as pd\n\ndf = pd.DataFrame({"item": ["pen", "book"], "revenue": [30, 70]})\ndf.to_json("sales.json", orient="records")\n\nwith open("sales.json") as f:\n    records = json.load(f)\n\nprint(records[0]["item"])',
      checks: [
        assertType("records", "list"),
        assertEquals("both records exported", "len(records)", "2"),
        assertEquals("first record is the pen", 'records[0]["item"]', '"pen"'),
        assertEquals("revenue survived the export", 'records[1]["revenue"]', "70"),
      ],
      vars: ["json", "pd", "records"],
      constraints: [
        'Export with orient="records"',
        "Read the file back with json.load",
        "Output must be exactly: pen",
      ],
      hints: ['df.to_json("sales.json", orient="records")', "records = json.load(f)"],
      placeholder: '# df.to_json("sales.json", orient="records")',
    }),

    conceptTask({
      slug: "pd-write-selected-columns",
      title: "IO: Export Only Some Columns",
      level: "medium",
      description:
        "Write just the item and revenue columns to a CSV and print the header line.",
      expected: "item,revenue",
      intro: [
        seg("text", "Select "),
        seg("code", '["item", "revenue"]'),
        seg("text", " from "),
        seg("code", "df"),
        seg("text", ", write it to "),
        seg("code", "subset.csv"),
        seg("text", " without the index, and print the header line."),
      ],
      steps: [
        "df[[\"a\", \"b\"]] with a list of names selects several columns.",
        "The result is a smaller DataFrame you can write straight out.",
      ],
      starter: `# TODO: export only two columns\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nsubset = df[["item", "revenue"]]\nsubset.to_csv("subset.csv", index=False)\n\nwith open("subset.csv") as f:\n    print(f.read().splitlines()[0])`,
      checks: [
        assertEquals(
          "only two columns were written",
          'open("subset.csv").read().splitlines()[0]',
          '"item,revenue"'
        ),
        assertEquals(
          "all three rows were written",
          'len(open("subset.csv").read().splitlines())',
          "4"
        ),
        assertEquals("the original frame still has 3 columns", "df.shape", "(3, 3)"),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Select the columns with a list of names",
        "Write to subset.csv with index=False",
        "Output must be exactly: item,revenue",
      ],
      hints: ['subset = df[["item", "revenue"]]', 'subset.to_csv("subset.csv", index=False)'],
      placeholder: '# subset = df[["item", "revenue"]]',
    }),

    conceptTask({
      slug: "pd-csv-roundtrip",
      title: "IO: Round-Trip a DataFrame",
      level: "hard",
      description:
        "Write a DataFrame to CSV, read it back into a new variable, and print the reloaded shape and revenue total.",
      expected: "(3, 3)\n140",
      intro: [
        seg("text", "Write "),
        seg("code", "df"),
        seg("text", " to "),
        seg("code", "roundtrip.csv"),
        seg("text", ", read it back as "),
        seg("code", "reloaded"),
        seg("text", ", then print "),
        seg("code", "reloaded.shape"),
        seg("text", " and the revenue total."),
      ],
      steps: [
        "A round trip is how you check an export really preserved the data.",
        "index=False on the way out keeps the shape identical on the way back.",
        "Print the shape first, then the total.",
      ],
      starter: `# TODO: write, reload, and verify\nimport pandas as pd\n\n${SALES_DF}\n\nreloaded = None\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\ndf.to_csv("roundtrip.csv", index=False)\nreloaded = pd.read_csv("roundtrip.csv")\n\nprint(reloaded.shape)\nprint(int(reloaded["revenue"].sum()))`,
      checks: [
        assertIsFrame("reloaded"),
        assertEquals("shape survived the round trip", "reloaded.shape", "df.shape"),
        assertEquals("columns survived too", "list(reloaded.columns)", "list(df.columns)"),
        assertEquals("revenue total matches", 'int(reloaded["revenue"].sum())', "140"),
      ],
      vars: ["pd", "df", "reloaded"],
      constraints: [
        "Use index=False when writing",
        "Reload into a variable named reloaded",
        "Print the shape, then the total",
      ],
      hints: ['df.to_csv("roundtrip.csv", index=False)', 'reloaded = pd.read_csv("roundtrip.csv")'],
      placeholder: '# df.to_csv("roundtrip.csv", index=False)',
    }),
  ];
}

export function pandasSelectionTasks() {
  return [
    conceptTask({
      slug: "pd-select-column",
      title: "Select: One Column",
      level: "easy",
      description: "Select the region column and print its values as a list.",
      expected: "['South', 'North', 'South']",
      intro: [
        seg("text", "Print "),
        seg("code", 'df["region"].tolist()'),
        seg("text", " — square brackets with a column name give you that column as a Series."),
      ],
      steps: [
        'df["region"] returns a Series.',
        ".tolist() prints the values without the index.",
      ],
      starter: `# TODO: print the region column\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(df["region"].tolist())`,
      checks: [
        assertEquals("region values", 'df["region"].tolist()', '["South", "North", "South"]'),
        assertTrue(
          "selecting a column gives a Series",
          'type(df["region"]).__name__ == "Series"',
          'Expected df["region"] to be a Series',
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Select by column name", "Print with .tolist()"],
      hints: ['print(df["region"].tolist())'],
      placeholder: '# print(df["region"].tolist())',
    }),

    conceptTask({
      slug: "pd-loc-cell",
      title: "Select: One Cell with loc",
      level: "easy",
      description:
        "Use df.loc to read the revenue of row 1 and print it as an int.",
      expected: "40",
      intro: [
        seg("text", "Print "),
        seg("code", 'int(df.loc[1, "revenue"])'),
        seg("text", " — "),
        seg("code", "loc"),
        seg("text", " takes the row label first, then the column name."),
      ],
      steps: [
        "loc works with labels: row index label, then column name.",
        "The default index labels are 0, 1, 2 …",
      ],
      starter: `# TODO: read row 1's revenue\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(int(df.loc[1, "revenue"]))`,
      checks: [
        assertEquals("row 1 revenue", 'int(df.loc[1, "revenue"])', "40"),
        assertEquals("row 1 is the book", 'df.loc[1, "item"]', '"book"'),
      ],
      vars: ["pd", "df"],
      constraints: ["Use df.loc[row, column]", "Output must be exactly: 40"],
      hints: ['print(int(df.loc[1, "revenue"]))'],
      placeholder: '# print(int(df.loc[1, "revenue"]))',
    }),

    conceptTask({
      slug: "pd-iloc-row",
      title: "Select: By Position with iloc",
      level: "easy",
      description:
        "Use df.iloc to read the first row by position and print its item name.",
      expected: "pen",
      intro: [
        seg("text", "Print "),
        seg("code", 'df.iloc[0]["item"]'),
        seg("text", " — "),
        seg("code", "iloc"),
        seg("text", " is positional, so it works even when the index labels are not numbers."),
      ],
      steps: [
        "iloc[0] is always the first row, whatever the index says.",
        "loc uses labels; iloc uses positions.",
      ],
      starter: `# TODO: read the first row by position\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nprint(df.iloc[0]["item"])`,
      checks: [
        assertEquals("first row item", 'df.iloc[0]["item"]', '"pen"'),
        assertEquals("last row item", 'df.iloc[-1]["item"]', '"bag"'),
      ],
      vars: ["pd", "df"],
      constraints: ["Use df.iloc", "Output must be exactly: pen"],
      hints: ['print(df.iloc[0]["item"])'],
      placeholder: '# print(df.iloc[0]["item"])',
    }),

    conceptTask({
      slug: "pd-filter-rows",
      title: "Select: Filter Rows by Value",
      level: "medium",
      description:
        "Keep rows where revenue is above 35 and print the matching item names.",
      expected: "['book', 'bag']",
      intro: [
        seg("text", "Filter with "),
        seg("code", 'df[df["revenue"] > 35]'),
        seg("text", " and print the "),
        seg("code", "item"),
        seg("text", " column of the result as a list."),
      ],
      steps: [
        'df["revenue"] > 35 builds a True/False mask.',
        "Passing the mask back into df keeps only the True rows.",
        "This is boolean indexing, the same idea as in NumPy.",
      ],
      starter: `# TODO: keep the high-revenue rows\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nhigh = df[df["revenue"] > 35]\nprint(high["item"].tolist())`,
      checks: [
        assertEquals(
          "only rows above 35 kept",
          'df[df["revenue"] > 35]["item"].tolist()',
          '["book", "bag"]'
        ),
        assertEquals("the original frame is unchanged", "len(df)", "3"),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Use boolean indexing — no loop",
        "Do not modify df",
        "Output must be exactly: ['book', 'bag']",
      ],
      hints: ['high = df[df["revenue"] > 35]', 'print(high["item"].tolist())'],
      placeholder: '# high = df[df["revenue"] > 35]',
    }),

    conceptTask({
      slug: "pd-isin",
      title: "Select: Match a List of Values",
      level: "medium",
      description:
        'Use .isin() to count how many rows are in the South region and print the count.',
      expected: "2",
      intro: [
        seg("text", "Use "),
        seg("code", 'df["region"].isin(["South"])'),
        seg("text", " to filter, then print how many rows matched."),
      ],
      steps: [
        ".isin(list) tests membership for every row at once.",
        "It is much cleaner than chaining several == checks with |.",
        "len() of the filtered frame gives the count.",
      ],
      starter: `# TODO: count the South rows with isin\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nsouth = df[df["region"].isin(["South"])]\nprint(len(south))`,
      checks: [
        assertEquals(
          "two South rows",
          'len(df[df["region"].isin(["South"])])',
          "2"
        ),
        assertEquals(
          "isin also matches several values",
          'len(df[df["region"].isin(["South", "North"])])',
          "3"
        ),
      ],
      vars: ["pd", "df"],
      constraints: ["Use .isin()", "Output must be exactly: 2"],
      hints: ['south = df[df["region"].isin(["South"])]', "print(len(south))"],
      placeholder: '# south = df[df["region"].isin(["South"])]',
    }),

    conceptTask({
      slug: "pd-multi-condition",
      title: "Select: Two Conditions at Once",
      level: "medium",
      description:
        "Combine two conditions with & to keep South rows above 25 revenue, then print the item names.",
      expected: "['pen', 'bag']",
      intro: [
        seg("text", "Combine "),
        seg("code", 'df["revenue"] > 25'),
        seg("text", " and "),
        seg("code", 'df["region"] == "South"'),
        seg("text", " with "),
        seg("code", "&"),
        seg("text", ", then print the matching item names."),
      ],
      steps: [
        "Use & for and, | for or — the words and/or do not work on Series.",
        "Wrap each condition in its own brackets, or precedence will bite you.",
      ],
      starter: `# TODO: combine both conditions\nimport pandas as pd\n\n${SALES_DF}\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nmatches = df[(df["revenue"] > 25) & (df["region"] == "South")]\nprint(matches["item"].tolist())`,
      checks: [
        assertEquals(
          "both conditions applied",
          '(df[(df["revenue"] > 25) & (df["region"] == "South")])["item"].tolist()',
          '["pen", "bag"]'
        ),
        assertEquals(
          "the North row was excluded",
          'len(df[(df["revenue"] > 25) & (df["region"] == "South")])',
          "2"
        ),
      ],
      vars: ["pd", "df"],
      constraints: [
        "Use & with each condition in brackets",
        "Output must be exactly: ['pen', 'bag']",
      ],
      hints: [
        'matches = df[(df["revenue"] > 25) & (df["region"] == "South")]',
        'print(matches["item"].tolist())',
      ],
      placeholder: "# matches = df[( ... ) & ( ... )]",
    }),

    conceptTask({
      slug: "pd-loc-rows-columns",
      title: "Select: Rows and Columns Together",
      level: "hard",
      description:
        "Use df.loc with a condition and a column list to print item and revenue for rows of 40 or more.",
      expected: "[['book', 40], ['bag', 70]]",
      intro: [
        seg("text", "Use "),
        seg("code", 'df.loc[df["revenue"] >= 40, ["item", "revenue"]]'),
        seg("text", " and print "),
        seg("code", ".values.tolist()"),
        seg("text", " to see the selected block as nested lists."),
      ],
      steps: [
        "loc takes a row selector and a column selector at the same time.",
        "The row selector can be a boolean mask.",
        ".values.tolist() turns the block into plain nested lists.",
      ],
      starter: `# TODO: select rows and columns in one call\nimport pandas as pd\n\n${SALES_DF}\n\nblock = None\n`,
      solution: `import pandas as pd\n\n${SALES_DF}\n\nblock = df.loc[df["revenue"] >= 40, ["item", "revenue"]]\nprint(block.values.tolist())`,
      checks: [
        assertEquals(
          "only the two big rows, two columns",
          "block.values.tolist()",
          '[["book", 40], ["bag", 70]]'
        ),
        assertEquals("the region column was dropped", "list(block.columns)", '["item", "revenue"]'),
        assertEquals("the original frame is unchanged", "df.shape", "(3, 3)"),
      ],
      vars: ["pd", "df", "block"],
      constraints: [
        "Do it in a single df.loc call",
        "Keep only the item and revenue columns",
        "Output must be exactly: [['book', 40], ['bag', 70]]",
      ],
      hints: [
        'block = df.loc[df["revenue"] >= 40, ["item", "revenue"]]',
        "print(block.values.tolist())",
      ],
      placeholder: "# block = df.loc[mask, [columns]]",
    }),
  ];
}
