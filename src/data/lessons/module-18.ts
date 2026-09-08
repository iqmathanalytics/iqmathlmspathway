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
        practicePrompt: "Write a clear one-paragraph problem statement (as a triple-quoted string) for analyzing a dataset of student exam scores to identify factors affecting performance, then print it.",
        starterCode: "# TODO: Write a problem statement comment/string and print it\nstatement = \"\"\"\nProject: Student Exam Performance\nGoal: Identify which subjects and study factors relate to higher scores.\nDataset columns: student_id, hours_studied, attendance, math, science, english\nSuccess metric: Rank factors correlated with average score.\n\"\"\"\nprint(statement)",
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
    intro: "Model your domain with classes or a planned DataFrame schema — Product and Employee style structures keep records consistent.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-data",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Define the structure of your data — what each row represents, what columns exist, and their types — often using a Python class or a planned DataFrame schema." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "class Product:\n    def __init__(self, name, price, quantity):\n        self.name = name\n        self.price = price\n        self.quantity = quantity\n\n    def total_value(self):\n        return self.price * self.quantity\n\np = Product(\"Notebook\", 50, 3)\nprint(p.name, p.total_value())" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a class Employee with attributes name, salary, department, and a method annual_salary() that returns salary * 12.",
        starterCode: "# TODO: Employee with annual_salary()\nclass Employee:\n    def __init__(self, name, salary, department):\n        self.name = name\n        self.salary = salary\n        self.department = department\n\n    def annual_salary(self):\n        return self.salary * 12\n\ne = Employee(\"Asha\", 5000, \"Data\")\nprint(e.name, e.annual_salary())",
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
    intro: "Use loops and conditionals to categorize and process each record in a dataset.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-logic",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Apply loops and conditionals to process each record — e.g., categorizing, filtering, or computing derived values across a dataset." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "students = [\n    {\"name\": \"Amit\", \"score\": 45},\n    {\"name\": \"Riya\", \"score\": 88},\n    {\"name\": \"Sam\", \"score\": 60},\n]\n\nfor s in students:\n    if s[\"score\"] >= 80:\n        status = \"Excellent\"\n    elif s[\"score\"] >= 50:\n        status = \"Pass\"\n    else:\n        status = \"Fail\"\n    print(s[\"name\"], status)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a list of employee dicts with salary, loop through and print \"High\" for salary > 60000, else \"Standard\".",
        starterCode: "# TODO: Label each employee High or Standard\nemployees = [\n    {\"name\": \"A\", \"salary\": 70000},\n    {\"name\": \"B\", \"salary\": 50000},\n    {\"name\": \"C\", \"salary\": 60001},\n]\nfor e in employees:\n    label = \"High\" if e[\"salary\"] > 60000 else \"Standard\"\n    print(e[\"name\"], label)",
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
    intro: "Wrap repeated logic into functions like generate_report that return key statistics.",
    blocks: [
      {
        type: "infographic",
        infographic: "final-project-functions",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Wrap repeated logic into functions to generate a clean summary report — e.g., a function that takes a DataFrame and returns key statistics." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\n\ndef generate_report(df):\n    report = {\n        \"total_rows\": len(df),\n        \"average_score\": df[\"score\"].mean(),\n        \"top_scorer\": df.loc[df[\"score\"].idxmax(), \"name\"],\n    }\n    return report\n\ndf = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\"], \"score\": [70, 95, 60]})\nprint(generate_report(df))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a function summarize(df) that returns a dict with count, mean, min, and max for a column named value.",
        starterCode: "# TODO: summarize(df) for column \"value\"\nimport pandas as pd\n\ndef summarize(df):\n    return {\n        \"count\": df[\"value\"].count(),\n        \"mean\": df[\"value\"].mean(),\n        \"min\": df[\"value\"].min(),\n        \"max\": df[\"value\"].max(),\n    }\n\ndf = pd.DataFrame({\"value\": [10, 20, 30]})\nprint(summarize(df))",
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
      { type: "code", code: "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. Load (in-memory stand-in for CSV)\ndf = pd.DataFrame({\n    \"region\": [\"North\", \"South\", \"East\", \"North\", \"South\", \"South\"],\n    \"revenue\": [100, 150, None, 120, 180, 180],\n})\n\n# 2. Clean\ndf = df.dropna()\ndf = df.drop_duplicates()\n\n# 3. Explore\nprint(df.describe())\nprint(df.groupby(\"region\")[\"revenue\"].sum())\n\n# 4. Visualize\ndf.groupby(\"region\")[\"revenue\"].sum().plot(kind=\"bar\")\nplt.title(\"Revenue by Region\")\nplt.show()\n\n# 5. Report\ntop_region = df.groupby(\"region\")[\"revenue\"].sum().idxmax()\nprint(f\"Insight: {top_region} generates the highest revenue.\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Using a sales dataset with columns region, revenue (create it in memory), write a full mini pipeline that removes missing values, computes total revenue per region, and prints which region performed best.",
        starterCode: "# TODO: Full mini pipeline\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"region\": [\"North\", \"South\", \"East\", \"West\", \"North\"],\n    \"revenue\": [200, 180, None, 90, 50],\n})\ndf = df.dropna()\ntotals = df.groupby(\"region\")[\"revenue\"].sum()\nprint(totals)\nprint(\"Best region:\", totals.idxmax())",
      },
    ],
    keyTakeaways: [
      "Pipeline order: load → clean → explore → visualize → report.",
      "dropna / drop_duplicates before aggregations.",
      "End with a clear written insight, not only charts.",
    ],
  },
};
