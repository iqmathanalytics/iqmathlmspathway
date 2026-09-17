import type { ReactNode } from "react";

export type FinalProjectSection =
  | "overview"
  | "data"
  | "logic"
  | "functions"
  | "capstone";

export type ConceptRow = {
  module: string;
  concepts: string;
  usedInProject: string;
};

export const PROJECT_TITLE = "Retail Sales Analysis Capstone";

export const PROJECT_SUMMARY =
  "An end-to-end retail sales project: define the question, model sales records, process them with loops and conditionals, wrap reports in functions, then load, clean, explore, visualize, and summarize insights — drawing on Modules 1–17.";

export const CONCEPT_MAP: ConceptRow[] = [
  {
    module: "M1 — Intro & Setup",
    concepts: "Comments, running programs, Jupyter",
    usedInProject: "Docstrings and section comments in each pipeline step",
  },
  {
    module: "M2 — Syntax & Types",
    concepts: "print(), variables, int/float/str/bool, typecasting",
    usedInProject: "Store region names, units_sold, and revenue as the right types",
  },
  {
    module: "M3 — Operators",
    concepts: "Arithmetic, comparison, logical, membership (in)",
    usedInProject: "revenue >= 150, units * price, region in totals",
  },
  {
    module: "M4 — Strings",
    concepts: "f-strings, strip(), upper(), formatting",
    usedInProject: 'Report lines: f"{region}: revenue {total:.0f}"',
  },
  {
    module: "M5 — Lists",
    concepts: "create, append(), len(), indexing, slicing",
    usedInProject: "A list of sale records you can append to",
  },
  {
    module: "M6 — Tuples",
    concepts: "Immutable records, packing",
    usedInProject: "Fixed sale tuples: (region, category, revenue)",
  },
  {
    module: "M7 — Sets",
    concepts: "Unique values, add(), union",
    usedInProject: "Track unique regions and product categories",
  },
  {
    module: "M8 — Dictionaries",
    concepts: "keys, values, .get(), .items()",
    usedInProject: "Each sale is a dict; region → total revenue",
  },
  {
    module: "M9 — Conditionals",
    concepts: "if / elif / else",
    usedInProject: "High / Standard / Low value bands for each sale",
  },
  {
    module: "M10 — Loops",
    concepts: "for, while, range(), break",
    usedInProject: "Loop sales and accumulate region totals",
  },
  {
    module: "M11 — Comprehensions",
    concepts: "List & dict comprehensions",
    usedInProject: "high = [r for r, v in totals.items() if v >= 150]",
  },
  {
    module: "M12 — Functions",
    concepts: "def, return, arguments, lambda",
    usedInProject: "total_by_region(), top_category(), sorted(..., key=lambda)",
  },
  {
    module: "M13 — Files & Exceptions",
    concepts: "open(), csv/json, try/except",
    usedInProject: "Load retail_sales.csv safely before analysis",
  },
  {
    module: "M14 — NumPy",
    concepts: "ndarray, mean, std, vectorized ops",
    usedInProject: "Fast stats on the revenue column",
  },
  {
    module: "M15 — Pandas",
    concepts: "DataFrame, dropna, groupby, idxmax",
    usedInProject: "Clean sales and rank regions/categories by revenue",
  },
  {
    module: "M16 — Visualization",
    concepts: "Matplotlib / Seaborn charts",
    usedInProject: "Bar chart of revenue by region",
  },
  {
    module: "M17 — Stats & EDA",
    concepts: "describe(), distributions, correlation",
    usedInProject: "Explore shape and outliers before the written insight",
  },
];

export type StepBlock = {
  id: string;
  title: string;
  description: string;
  code: string;
  output?: string;
  annotation?: ReactNode;
  practiceIndex?: number;
};

export const BUILD_PHASES = [
  {
    id: "data",
    label: "Step 1",
    title: "Data Model",
    icon: "📦",
    modules: "M5–M8",
    summary: "dict + list + set + tuple",
    snippet: `sales = [{"region": "North", "revenue": 120}]
categories = {"Electronics", "Furniture"}`,
  },
  {
    id: "logic",
    label: "Step 2",
    title: "Logic & Loops",
    icon: "🔀",
    modules: "M3, M9–M11",
    summary: "loops, if/elif, comprehensions",
    snippet: `for sale in sales:
    totals[sale["region"]] = totals.get(sale["region"], 0) + sale["revenue"]`,
  },
  {
    id: "functions",
    label: "Step 3",
    title: "Functions & Report",
    icon: "🧩",
    modules: "M4, M12–M13",
    summary: "def, f-strings, csv load",
    snippet: `def total_by_region(sales, region):
    return sum(s["revenue"] for s in sales if s["region"] == region)`,
  },
  {
    id: "capstone",
    label: "Capstone",
    title: "Full Pipeline",
    icon: "🎯",
    modules: "All M1–M17",
    summary: "pandas + EDA + charts",
    snippet: `print("=== Retail Sales Report ===")
# load → clean → explore → visualize → insight`,
  },
] as const;

export const SECTION_CONTENT: Record<
  FinalProjectSection,
  {
    label: string;
    labelVariant: "green" | "blue" | "teal" | "purple" | "orange";
    heading: string;
    intro: string;
    steps: StepBlock[];
    tip?: ReactNode;
  }
> = {
  overview: {
    label: "🏆 Overview",
    labelVariant: "orange",
    heading: "What you will build",
    intro:
      "The Retail Sales Analysis Capstone is the finale for this course. You will combine Python foundations, NumPy/Pandas skills, visualization, and EDA into one working analysis pipeline that answers: which regions and categories drive revenue, and are there seasonal patterns?",
    steps: [
      {
        id: "sample-output",
        title: "Task 1 — Preview the report",
        description:
          "Run this code first to see what your finished program will print.",
        code: `print("=== Retail Sales Report ===")
print("North: revenue 210 — Standard")
print("South: revenue 380 — High")
print("Top region: South (380)")`,
        output: `=== Retail Sales Report ===
North: revenue 210 — Standard
South: revenue 380 — High
Top region: South (380)`,
        practiceIndex: 0,
      },
      {
        id: "data-shape",
        title: "Task 2 — Data shape",
        description:
          "After task 1, create the sales list and print it. A set holds unique region names.",
        code: `sales = [
    {"region": "North", "category": "Electronics", "revenue": 120},
    {"region": "South", "category": "Furniture", "revenue": 180},
    {"region": "North", "category": "Clothing", "revenue": 90},
    {"region": "South", "category": "Electronics", "revenue": 200},
]
regions = {"North", "South", "East"}
print(sales)`,
        output: `[{'region': 'North', 'category': 'Electronics', 'revenue': 120}, {'region': 'South', 'category': 'Furniture', 'revenue': 180}, {'region': 'North', 'category': 'Clothing', 'revenue': 90}, {'region': 'South', 'category': 'Electronics', 'revenue': 200}]`,
        practiceIndex: 1,
      },
    ],
    tip: (
      <>
        Complete Modules 1–17 first, then build this project step by step. Each
        topic in this module adds one layer to the same retail analysis.
      </>
    ),
  },
  data: {
    label: "📦 Step 1",
    labelVariant: "green",
    heading: "Data model — dict, list, set, tuple",
    intro:
      "Start with the core data structures. A list holds sale records; each sale is a dictionary. Use a set for unique categories and tuples for fixed (region, category, revenue) records.",
    steps: [
      {
        id: "sales-list",
        title: "Create the sales records",
        description:
          "Use a list of dicts so you can append new sales later. Keys stay consistent: region, category, revenue.",
        code: `sales = []
sales.append({"region": "North", "category": "Electronics", "revenue": 120})
sales.append({"region": "South", "category": "Furniture", "revenue": 180})
print(sales)`,
        output: `[{'region': 'North', 'category': 'Electronics', 'revenue': 120}, {'region': 'South', 'category': 'Furniture', 'revenue': 180}]`,
        practiceIndex: 0,
      },
      {
        id: "category-set",
        title: "Track categories with a set",
        description:
          "Sets keep only unique category names — perfect for the product list.",
        code: `categories = set()
categories.add("Electronics")
categories.add("Furniture")
categories.add("Electronics")  # duplicate ignored
print(sorted(categories))`,
        output: `['Electronics', 'Furniture']`,
        practiceIndex: 1,
      },
      {
        id: "tuple-record",
        title: "Immutable sale record (tuple)",
        description:
          "Store a (region, category, revenue) triple as a tuple when you need a fixed record.",
        code: `record = ("North", "Electronics", 120)
region, category, revenue = record
print(region, category, revenue)`,
        output: `North Electronics 120`,
        practiceIndex: 2,
      },
      {
        id: "append-sale",
        title: "Add a sale with append()",
        description:
          "Use list.append() to add a new sale dict to the records.",
        code: `sales = [{"region": "North", "revenue": 120}]
sales.append({"region": "East", "revenue": 95})
print(len(sales), sales[-1]["region"])`,
        output: `2 East`,
        practiceIndex: 3,
      },
      {
        id: "data-challenge",
        title: "Challenge — add a West sale",
        description:
          "Create a West Clothing sale, append a West Electronics sale, and print the list.",
        code: `sales = [{"region": "West", "category": "Clothing", "revenue": 70}]
sales.append({"region": "West", "category": "Electronics", "revenue": 140})
print(sales)`,
        output: `[{'region': 'West', 'category': 'Clothing', 'revenue': 70}, {'region': 'West', 'category': 'Electronics', 'revenue': 140}]`,
        practiceIndex: 4,
      },
    ],
  },
  logic: {
    label: "🔀 Step 2",
    labelVariant: "blue",
    heading: "Logic & loops — process every sale",
    intro:
      "Use for loops to walk the sales list, conditionals for High/Standard/Low value bands, and comprehensions to filter strong regions.",
    steps: [
      {
        id: "sum-loop",
        title: "Total revenue with a loop",
        description:
          "Add each sale with a for loop. Use arithmetic operators from Module 3.",
        code: `revenues = [120, 180, 90, 200]
total = 0
for r in revenues:
    total += r
print(total)`,
        output: `590`,
        practiceIndex: 0,
      },
      {
        id: "value-band",
        title: "Value band with if/elif/else",
        description:
          "Compare revenue to 150 and 100 using comparison operators.",
        code: `revenue = 180
if revenue >= 150:
    band = "High"
elif revenue >= 100:
    band = "Standard"
else:
    band = "Low"
print(band)`,
        output: `High`,
        practiceIndex: 1,
      },
      {
        id: "dict-loop",
        title: "Loop over region totals",
        description:
          "Use .items() to print each region and its revenue.",
        code: `totals = {"North": 210, "South": 380}
for region, revenue in totals.items():
    print(region, revenue)`,
        output: `North 210
South 380`,
        practiceIndex: 2,
      },
      {
        id: "comprehension",
        title: "List comprehension — strong regions",
        description:
          "Build a list of regions where total revenue >= 150 in one line.",
        code: `totals = {"North": 210, "South": 380, "East": 90}
high = [r for r, v in totals.items() if v >= 150]
print(high)`,
        output: `['North', 'South']`,
        practiceIndex: 3,
      },
      {
        id: "logic-challenge",
        title: "Challenge — elif bands",
        description:
          "Given revenues [70, 120, 180], print Low, Standard, or High using elif.",
        code: `revenues = [70, 120, 180]
for revenue in revenues:
    if revenue >= 150:
        print("High")
    elif revenue >= 100:
        print("Standard")
    else:
        print("Low")`,
        output: `Low
Standard
High`,
        practiceIndex: 4,
      },
    ],
  },
  functions: {
    label: "🧩 Step 3",
    labelVariant: "purple",
    heading: "Functions & formatted report",
    intro:
      "Refactor repeated logic into functions. Use f-strings for clean output and lambda to rank regions.",
    steps: [
      {
        id: "fn-total",
        title: "total_by_region() function",
        description:
          "Encapsulate the filter-and-sum logic in a reusable function with return.",
        code: `def total_by_region(sales, region):
    return sum(s["revenue"] for s in sales if s["region"] == region)

sales = [
    {"region": "North", "revenue": 120},
    {"region": "South", "revenue": 180},
    {"region": "North", "revenue": 90},
]
print(total_by_region(sales, "North"))`,
        output: `210`,
        practiceIndex: 0,
      },
      {
        id: "fn-top",
        title: "top_category() helper",
        description:
          "Accumulate category totals, then return the winning category.",
        code: `def top_category(sales):
    totals = {}
    for s in sales:
        totals[s["category"]] = totals.get(s["category"], 0) + s["revenue"]
    return max(totals, key=totals.get)

sales = [
    {"category": "Electronics", "revenue": 120},
    {"category": "Furniture", "revenue": 180},
    {"category": "Electronics", "revenue": 200},
]
print(top_category(sales))`,
        output: `Electronics`,
        practiceIndex: 1,
      },
      {
        id: "fstring-line",
        title: "Formatted report line",
        description:
          "Use an f-string with :.0f to show a whole-number revenue.",
        code: `region = "South"
revenue = 380.5
line = f"{region}: revenue {revenue:.0f} — High"
print(line)`,
        output: `South: revenue 380 — High`,
        practiceIndex: 2,
      },
      {
        id: "lambda-sort",
        title: "Sort regions with lambda",
        description:
          "sorted() with key=lambda picks the ranking order.",
        code: `ranking = [("North", 210), ("South", 380), ("East", 90)]
ranking.sort(key=lambda x: x[1], reverse=True)
print(ranking[0])`,
        output: `('South', 380)`,
        practiceIndex: 3,
      },
      {
        id: "fn-challenge",
        title: "Challenge — value_band() helper",
        description:
          "Write value_band(revenue) returning High or Standard. Test with 180.",
        code: `def value_band(revenue):
    return "High" if revenue >= 150 else "Standard"

print(value_band(180))`,
        output: `High`,
        practiceIndex: 4,
      },
    ],
  },
  capstone: {
    label: "🎯 Capstone",
    labelVariant: "orange",
    heading: "Complete retail sales pipeline",
    intro:
      "Put it all together. Load (in-memory) sales, clean missing values, explore with groupby, and print a stakeholder insight. Use Open in Google Colab if you want the bar chart to render.",
    steps: [
      {
        id: "full-program",
        title: "Full integrated program",
        description:
          "Copy, run in the IDE, and study how each module's concepts connect on the same retail dataset.",
        code: `# Retail Sales Analysis — Capstone
import pandas as pd

df = pd.DataFrame({
    "date": ["2024-01-15", "2024-02-10", "2024-03-05",
             "2024-04-20", "2024-06-08", "2024-11-22"],
    "region": ["North", "South", "East", "North", "South", "South"],
    "category": ["Electronics", "Furniture", "Electronics",
                 "Clothing", "Electronics", "Furniture"],
    "units_sold": [3, 2, 1, 5, 4, 1],
    "revenue": [120, 180, None, 90, 200, 150],
})

# 1. Clean
df = df.dropna().drop_duplicates()

# 2. Explore
region_totals = df.groupby("region")["revenue"].sum()
category_totals = df.groupby("category")["revenue"].sum()
print("=== Retail Sales Report ===")
print("By region:", region_totals.to_dict())
print("By category:", category_totals.to_dict())

# 3. Insight
top_region = region_totals.idxmax()
top_category = category_totals.idxmax()
print(f"Top region: {top_region} ({region_totals.max():.0f})")
print(f"Top category: {top_category} ({category_totals.max():.0f})")
print(f"Insight: {top_region} generates the highest revenue.")`,
        output: `=== Retail Sales Report ===
By region: {'North': 210.0, 'South': 530.0}
By category: {'Clothing': 90.0, 'Electronics': 320.0, 'Furniture': 330.0}
Top region: South (530)
Top category: Furniture (330)
Insight: South generates the highest revenue.`,
        practiceIndex: 0,
      },
      {
        id: "extend-project",
        title: "Extend it yourself",
        description:
          "Add a West sale, then reprint unique regions. This is how you grow the same pipeline.",
        code: `import pandas as pd

df = pd.DataFrame({
    "region": ["North", "South", "North", "South"],
    "category": ["Electronics", "Furniture", "Clothing", "Electronics"],
    "revenue": [120, 180, 90, 200],
})
extra = pd.DataFrame([{"region": "West", "category": "Clothing", "revenue": 80}])
df = pd.concat([df, extra], ignore_index=True)
print(sorted(df["region"].unique()))`,
        output: `['North', 'South', 'West']`,
        practiceIndex: 1,
      },
      {
        id: "capstone-challenge",
        title: "Challenge — category ranking",
        description:
          "Group by category, print totals as a dict, and name the top category with idxmax().",
        code: `import pandas as pd

df = pd.DataFrame({
    "category": ["Electronics", "Furniture", "Electronics", "Clothing"],
    "revenue": [120, 180, 200, 90],
})
totals = df.groupby("category")["revenue"].sum()
print(totals.to_dict())
print("Top category:", totals.idxmax())`,
        output: `{'Clothing': 90, 'Electronics': 320, 'Furniture': 180}
Top category: Electronics`,
        practiceIndex: 2,
      },
    ],
    tip: (
      <>
        Congratulations — you have used collections, operators, conditionals,
        loops, functions, Pandas, and EDA in one retail pipeline. That is the
        same load → clean → explore → visualize → report flow used in real data
        work.
      </>
    ),
  },
};
