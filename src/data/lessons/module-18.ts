import type { TopicLesson } from "@/lib/types";

export const module18Lessons: Record<string, TopicLesson> = {
  "m18-t1": {
    topicId: "m18-t1",
    intro: "Every project starts by defining a clear question and the dataset that can answer it — here: Retail Sales Analysis.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-overview",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Every project starts by clearly defining the question you are trying to answer and identifying the dataset that can answer it. For this capstone: \"Which product categories and regions drive the most revenue, and are there seasonal trends?\"" },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "\"\"\"\nProject: Retail Sales Analysis\nGoal: Identify which product categories and regions drive the most revenue,\nand detect any seasonal sales trends.\nDataset: retail_sales.csv\nColumns: date, region, category, units_sold, revenue\n\"\"\"\nprint(\"Problem: Which regions and categories drive revenue?\")\nprint(\"Success: Rank regions/categories by revenue and note seasonal patterns.\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a clear one-paragraph problem statement (as a triple-quoted string) for this retail sales capstone, then print it. Include the question, dataset columns, and what success looks like.",
        starterCode: "# TODO: Write a problem statement comment/string and print it\nstatement = \"\"\"\nProject: Retail Sales Analysis\nGoal: Identify which categories and regions drive the most revenue,\nand flag any seasonal patterns.\nDataset columns: date, region, category, units_sold, revenue\nSuccess metric: Rank regions and categories by revenue.\n\"\"\"\nprint(statement)",
      },
    ],
    keyTakeaways: [
      "State the business/analysis question clearly.",
      "Name the dataset and key columns.",
      "Define what a successful answer looks like.",
    ],
  },
  "m18-t2": {
    topicId: "m18-t2",
    intro: "Model each sale as a consistent record — a class or a planned DataFrame schema keeps region, category, units, and revenue aligned.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-data",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Define the structure of your data — what each row represents, what columns exist, and their types — often using a Python class or a planned DataFrame schema. For this project each row is one sale: date, region, category, units_sold, revenue." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "class SaleRecord:\n    def __init__(self, region, category, units_sold, revenue):\n        self.region = region\n        self.category = category\n        self.units_sold = units_sold\n        self.revenue = revenue\n\n    def revenue_per_unit(self):\n        return self.revenue / self.units_sold if self.units_sold else 0\n\ns = SaleRecord(\"North\", \"Electronics\", 3, 120)\nprint(s.region, s.category, s.revenue_per_unit())" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a class Sale with attributes region, category, and revenue, and a method is_high_value() that returns True when revenue >= 150.",
        starterCode: "# TODO: Sale with is_high_value()\nclass Sale:\n    def __init__(self, region, category, revenue):\n        self.region = region\n        self.category = category\n        self.revenue = revenue\n\n    def is_high_value(self):\n        return self.revenue >= 150\n\ns = Sale(\"South\", \"Furniture\", 180)\nprint(s.region, s.is_high_value())",
      },
    ],
    keyTakeaways: [
      "Classes keep related fields and methods together.",
      "Each instance holds its own attribute values.",
      "Methods compute derived values from attributes.",
    ],
  },
  "m18-t3": {
    topicId: "m18-t3",
    intro: "Use loops and conditionals to categorize and process each sale in the dataset.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-logic",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Apply loops and conditionals to process each record — e.g., labeling high-value sales, filtering a region, or computing derived totals across the dataset." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "sales = [\n    {\"region\": \"North\", \"revenue\": 120},\n    {\"region\": \"South\", \"revenue\": 180},\n    {\"region\": \"East\", \"revenue\": 90},\n]\n\nfor s in sales:\n    if s[\"revenue\"] >= 150:\n        band = \"High\"\n    elif s[\"revenue\"] >= 100:\n        band = \"Standard\"\n    else:\n        band = \"Low\"\n    print(s[\"region\"], band)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a list of sale dicts with revenue, loop through and print \"High\" for revenue > 150, else \"Standard\".",
        starterCode: "# TODO: Label each sale High or Standard\nsales = [\n    {\"region\": \"A\", \"revenue\": 180},\n    {\"region\": \"B\", \"revenue\": 90},\n    {\"region\": \"C\", \"revenue\": 151},\n]\nfor s in sales:\n    label = \"High\" if s[\"revenue\"] > 150 else \"Standard\"\n    print(s[\"region\"], label)",
      },
    ],
    keyTakeaways: [
      "Loop once per record.",
      "Use if/elif/else to categorize.",
      "Print or collect derived labels for reporting.",
    ],
  },
  "m18-t4": {
    topicId: "m18-t4",
    intro: "Wrap repeated logic into functions like generate_report that return key sales statistics.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-functions",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Wrap repeated logic into functions to generate a clean summary report — e.g., a function that takes a sales DataFrame and returns total revenue and the top region." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\n\ndef generate_report(df):\n    region_totals = df.groupby(\"region\")[\"revenue\"].sum()\n    report = {\n        \"total_rows\": len(df),\n        \"total_revenue\": df[\"revenue\"].sum(),\n        \"top_region\": region_totals.idxmax(),\n    }\n    return report\n\ndf = pd.DataFrame({\"region\": [\"North\", \"South\", \"North\"], \"revenue\": [120, 180, 90]})\nprint(generate_report(df))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a function summarize(df) that returns a dict with count, mean, min, and max for a column named revenue.",
        starterCode: "# TODO: summarize(df) for column \"revenue\"\nimport pandas as pd\n\ndef summarize(df):\n    return {\n        \"count\": df[\"revenue\"].count(),\n        \"mean\": df[\"revenue\"].mean(),\n        \"min\": df[\"revenue\"].min(),\n        \"max\": df[\"revenue\"].max(),\n    }\n\ndf = pd.DataFrame({\"revenue\": [120, 180, 90]})\nprint(summarize(df))",
      },
    ],
    keyTakeaways: [
      "Functions keep reporting logic reusable.",
      "Return a dict of named metrics for clarity.",
      "idxmax() helps find the top row for a metric.",
    ],
  },
  "m18-t5": {
    topicId: "m18-t5",
    intro: "Combine load → clean → explore → visualize → report into one end-to-end pipeline. Use an in-memory DataFrame if no CSV is available.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-capstone",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Combine everything: load a dataset, clean it, explore it (EDA), visualize key findings, and present a final written summary of insights — the complete data science workflow end-to-end. Use **Open in Google Colab** for the visualization step so the bar chart actually appears." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. Load (in-memory stand-in for CSV)\ndf = pd.DataFrame({\n    \"date\": [\"2024-01-15\", \"2024-02-10\", \"2024-03-05\", \"2024-04-20\", \"2024-06-08\", \"2024-11-22\"],\n    \"region\": [\"North\", \"South\", \"East\", \"North\", \"South\", \"South\"],\n    \"category\": [\"Electronics\", \"Furniture\", \"Electronics\", \"Clothing\", \"Electronics\", \"Furniture\"],\n    \"revenue\": [120, 180, None, 90, 200, 150],\n})\n\n# 2. Clean\ndf = df.dropna()\ndf = df.drop_duplicates()\n\n# 3. Explore\nprint(df.describe())\nprint(df.groupby(\"region\")[\"revenue\"].sum())\nprint(df.groupby(\"category\")[\"revenue\"].sum())\n\n# 4. Visualize\ndf.groupby(\"region\")[\"revenue\"].sum().plot(kind=\"bar\")\nplt.title(\"Revenue by Region\")\nplt.show()\n\n# 5. Report\ntop_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()\nprint(f\"Insight: {top_region} generates the highest revenue.\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Using a sales dataset with columns region, category, revenue (create it in memory), write a full mini pipeline that removes missing values, computes total revenue per region, and prints which region performed best.",
        starterCode: "# TODO: Full mini pipeline\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"North\", \"South\", \"East\", \"West\", \"North\"],\n    \"category\": [\"Electronics\", \"Furniture\", \"Electronics\", \"Clothing\", \"Furniture\"],\n    \"revenue\": [200, 180, None, 90, 50],\n})\ndf = df.dropna()\ntotals = df.groupby(\"region\")[\"revenue\"].sum()\nprint(totals)\nprint(\"Best region:\", totals.idxmax())",
      },
    ],
    keyTakeaways: [
      "Pipeline order: load → clean → explore → visualize → report.",
      "dropna / drop_duplicates before aggregations.",
      "End with a clear written insight, not only charts.",
    ],
  },
};
