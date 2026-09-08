import type { TopicLesson } from "@/lib/types";

export const module15Lessons: Record<string, TopicLesson> = {
  "m15-t1": {
    topicId: "m15-t1",
    intro: "A Series is a 1D labeled array; a DataFrame is a 2D labeled table of columns.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "A `Series` is a 1D labeled array; a `DataFrame` is a 2D labeled table (like a spreadsheet) made of multiple Series (columns)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ns = pd.Series([10, 20, 30], index=[\"a\", \"b\", \"c\"])\nprint(s)\n\ndf = pd.DataFrame({\n    \"name\": [\"Ravi\", \"Priya\"],\n    \"age\": [25, 30],\n})\nprint(df)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a DataFrame with columns product and price for 3 products, and print it.",
        starterCode: "# TODO: 3-product DataFrame\nimport pandas as pd\ndf = pd.DataFrame({\n    \"product\": [\"Pen\", \"Notebook\", \"Bag\"],\n    \"price\": [10, 50, 25],\n})\nprint(df)",
      },
    ],
    keyTakeaways: [
      "Series = 1D labeled data.",
      "DataFrame = 2D table of columns.",
      "index and columns label rows and fields.",
    ],
  },
  "m15-t2": {
    topicId: "m15-t2",
    intro: "pd.read_csv / to_csv load and save tabular data. In the browser, build an in-memory DataFrame the same way a CSV would load.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`pd.read_csv()`, `pd.read_excel()`, `pd.read_json()` load data; `.to_csv()`, `.to_excel()`, `.to_json()` save it. When files are unavailable, create the DataFrame in memory and still practice `.shape` and inspection." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\nfrom io import StringIO\n\n# Desktop pattern:\n# df = pd.read_csv(\"sales.csv\")\n# df.to_csv(\"output.csv\", index=False)\n\ncsv_text = \"\"\"name,age\nAsha,20\nSam,22\n\"\"\"\ndf = pd.read_csv(StringIO(csv_text))\nprint(df.head())\nprint(df.shape)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create (or read) a small DataFrame and print the number of rows and columns using .shape.",
        starterCode: "# TODO: Inspect shape of a table\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"name\": [\"Asha\", \"Sam\", \"Riya\"],\n    \"score\": [88, 75, 92],\n})\nprint(df.shape)  # (rows, columns)\nprint(df)",
      },
    ],
    keyTakeaways: [
      "read_csv loads tabular files into a DataFrame.",
      "to_csv(..., index=False) avoids writing the index column.",
      "df.shape returns (rows, columns).",
    ],
  },
  "m15-t3": {
    topicId: "m15-t3",
    intro: "Select with .loc (labels) and .iloc (positions). Boolean masks filter rows.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Use `.loc[]` (label-based) and `.iloc[]` (position-based) to select rows/columns. Boolean masks filter rows matching a condition." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\"], \"age\": [20, 25, 30]})\nprint(df.loc[0])            # first row by label\nprint(df.iloc[1])           # second row by position\nprint(df[df[\"age\"] > 22])   # filter rows where age > 22" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a DataFrame df with column score, filter rows where score >= 60 and print the result.",
        starterCode: "# TODO: Filter score >= 60\nimport pandas as pd\ndf = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\", \"D\"], \"score\": [45, 60, 75, 30]})\nprint(df[df[\"score\"] >= 60])",
      },
    ],
    keyTakeaways: [
      ".loc uses labels; .iloc uses positions.",
      "df[df[col] > x] filters with a boolean mask.",
      "Chaining filters is common in data cleaning.",
    ],
  },
  "m15-t4": {
    topicId: "m15-t4",
    intro: "Handle missing values with isnull, dropna, and fillna; remove repeats with drop_duplicates.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`.isnull()`, `.dropna()`, `.fillna()` handle missing values; `.duplicated()` and `.drop_duplicates()` handle repeated rows." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, None, 3, 3], \"b\": [4, 5, None, 5]})\nprint(df.isnull().sum())\ndf_clean = df.fillna(0)\ndf_no_dup = df.drop_duplicates()\nprint(df_clean)\nprint(df_no_dup)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a DataFrame with a column age containing some NaN values, drop rows where age is missing.",
        starterCode: "# TODO: Drop rows with missing age\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\"], \"age\": [20, np.nan, 30]})\nprint(df.dropna(subset=[\"age\"]))",
      },
    ],
    keyTakeaways: [
      "isnull().sum() counts missing values per column.",
      "dropna removes incomplete rows; fillna replaces them.",
      "drop_duplicates removes repeated rows.",
    ],
  },
  "m15-t5": {
    topicId: "m15-t5",
    intro: "groupby aggregates by category; merge combines tables like SQL joins.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`.groupby()` aggregates data by category; `pd.merge()` and `.join()` combine multiple DataFrames like SQL joins." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndf = pd.DataFrame({\"dept\": [\"HR\", \"IT\", \"HR\", \"IT\"], \"salary\": [40000, 60000, 45000, 65000]})\nprint(df.groupby(\"dept\")[\"salary\"].mean())\n\ndf1 = pd.DataFrame({\"id\": [1, 2], \"name\": [\"A\", \"B\"]})\ndf2 = pd.DataFrame({\"id\": [1, 2], \"score\": [90, 80]})\nmerged = pd.merge(df1, df2, on=\"id\")\nprint(merged)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given two DataFrames — one with id, name and another with id, marks — merge them on id and print the result.",
        starterCode: "# TODO: Merge on id\nimport pandas as pd\ndf1 = pd.DataFrame({\"id\": [1, 2], \"name\": [\"Amit\", \"Riya\"]})\ndf2 = pd.DataFrame({\"id\": [1, 2], \"marks\": [90, 85]})\nprint(pd.merge(df1, df2, on=\"id\"))",
      },
    ],
    keyTakeaways: [
      "groupby(col)[value].mean()/sum() aggregates.",
      "pd.merge(..., on=key) joins tables.",
      "Default merge is an inner join on matching keys.",
    ],
  },
  "m15-t6": {
    topicId: "m15-t6",
    intro: "pivot_table summarizes values across two categorical dimensions — like Excel pivots.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`.pivot_table()` reshapes data, summarizing values across two categorical dimensions (like Excel pivot tables)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndf = pd.DataFrame({\n    \"region\": [\"North\", \"South\", \"North\", \"South\"],\n    \"product\": [\"A\", \"A\", \"B\", \"B\"],\n    \"sales\": [100, 150, 200, 130],\n})\npivot = df.pivot_table(values=\"sales\", index=\"region\", columns=\"product\", aggfunc=\"sum\")\nprint(pivot)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given sales data with columns month, category, revenue, create a pivot table showing total revenue per month per category.",
        starterCode: "# TODO: Pivot total revenue by month x category\nimport pandas as pd\ndf = pd.DataFrame({\n    \"month\": [\"Jan\", \"Jan\", \"Feb\", \"Feb\"],\n    \"category\": [\"A\", \"B\", \"A\", \"B\"],\n    \"revenue\": [100, 150, 120, 180],\n})\npivot = df.pivot_table(values=\"revenue\", index=\"month\", columns=\"category\", aggfunc=\"sum\")\nprint(pivot)",
      },
    ],
    keyTakeaways: [
      "values = the metric to aggregate.",
      "index / columns set the two category axes.",
      "aggfunc chooses sum, mean, count, and more.",
    ],
  },
};
