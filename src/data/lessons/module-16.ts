import type { TopicLesson } from "@/lib/types";

export const module16Lessons: Record<string, TopicLesson> = {
  "m16-t1": {
    topicId: "m16-t1",
    intro: "matplotlib.pyplot is the core plotting library. Create data, call a plot function, then plt.show(). Use Google Colab to see the chart — the browser IDE cannot display plots.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`matplotlib.pyplot` is the core plotting library. Basic workflow: create data, call a plot function, then `plt.show()`. The browser IDE cannot display charts — use the **Open in Google Colab** button on the example or practice code to see the plot." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\ny = [10, 20, 25, 30]\nprint(\"x =\", x)\nprint(\"y =\", y)\nplt.plot(x, y)\nplt.title(\"Simple Plot\")\nplt.show()" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Plot a line chart of daily temperatures [22, 24, 23, 26, 28] over 5 days.",
        starterCode: "# TODO: Line chart of temperatures\nimport matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\ntemps = [22, 24, 23, 26, 28]\nprint(\"days =\", days)\nprint(\"temps =\", temps)\nplt.plot(days, temps)\nplt.title(\"Daily Temperatures\")\nplt.show()",
      },
    ],
    keyTakeaways: [
      "import matplotlib.pyplot as plt is standard.",
      "plt.plot(x, y) draws a line chart.",
      "plt.show() displays the figure — open Google Colab to see it.",
    ],
  },
  "m16-t2": {
    topicId: "m16-t2",
    intro: "plot for trends, bar for categories, scatter for relationships, hist for distributions.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`plt.plot()` for trends, `plt.bar()` for categories, `plt.scatter()` for relationships between two variables, `plt.hist()` for distributions." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import matplotlib.pyplot as plt\ncategories = [\"A\", \"B\", \"C\"]\nvalues = [10, 25, 15]\nprint(\"Bar data:\", dict(zip(categories, values)))\nplt.bar(categories, values)\nplt.show()\n\nprint(\"Scatter points:\", list(zip([1, 2, 3, 4], [10, 15, 7, 20])))\nplt.scatter([1, 2, 3, 4], [10, 15, 7, 20])\nplt.show()\n\nprint(\"Histogram sample:\", [1, 2, 2, 3, 3, 3, 4, 4, 4, 4])\nplt.hist([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], bins=4)\nplt.show()" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a scatter plot showing hours studied [1, 2, 3, 4, 5] vs exam scores [50, 55, 65, 70, 85].",
        starterCode: "# TODO: Scatter hours vs scores\nimport matplotlib.pyplot as plt\nhours = [1, 2, 3, 4, 5]\nscores = [50, 55, 65, 70, 85]\nprint(list(zip(hours, scores)))\nplt.scatter(hours, scores)\nplt.xlabel(\"Hours\")\nplt.ylabel(\"Score\")\nplt.show()",
      },
    ],
    keyTakeaways: [
      "bar charts compare categories.",
      "scatter plots show relationships between two numeric variables.",
      "histograms show how values are distributed.",
    ],
  },
  "m16-t3": {
    topicId: "m16-t3",
    intro: "Titles, axis labels, legends, and styles make plots readable and presentation-ready.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`.title()`, `.xlabel()`, `.ylabel()`, `.legend()`, and `plt.style.use()` improve readability and presentation of plots." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import matplotlib.pyplot as plt\nsales = [10, 20, 30]\nprofit = [5, 15, 25]\nprint(\"Sales:\", sales)\nprint(\"Profit:\", profit)\nplt.plot([1, 2, 3], sales, label=\"Sales\")\nplt.plot([1, 2, 3], profit, label=\"Profit\")\nplt.title(\"Sales vs Profit\")\nplt.xlabel(\"Month\")\nplt.ylabel(\"Amount\")\nplt.legend()\nplt.show()" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a line plot with title \"Weekly Progress\", x-label \"Week\", y-label \"Score\", and a legend labeled \"My Score\".",
        starterCode: "# TODO: Customized line plot\nimport matplotlib.pyplot as plt\nweeks = [1, 2, 3, 4]\nscores = [60, 65, 70, 80]\nprint(\"weeks =\", weeks)\nprint(\"scores =\", scores)\nplt.plot(weeks, scores, label=\"My Score\")\nplt.title(\"Weekly Progress\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"Score\")\nplt.legend()\nplt.show()",
      },
    ],
    keyTakeaways: [
      "Always label axes and give a clear title.",
      "legend() shows labels from plot(..., label=...).",
      "Styles change the overall look of figures.",
    ],
  },
  "m16-t4": {
    topicId: "m16-t4",
    intro: "Seaborn builds attractive statistical plots on top of Matplotlib and works well with DataFrames.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Seaborn builds on Matplotlib to create attractive statistical plots with less code, and integrates well with Pandas DataFrames." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\"category\": [\"A\", \"B\", \"A\", \"B\"], \"value\": [10, 20, 15, 25]})\nprint(df)\nprint(df.groupby(\"category\")[\"value\"].mean())\nsns.barplot(data=df, x=\"category\", y=\"value\")\nplt.show()" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Use Seaborn to create a boxplot of score grouped by class from a DataFrame.",
        starterCode: "# TODO: Boxplot score by class\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"class\": [\"A\", \"A\", \"B\", \"B\", \"A\", \"B\"],\n    \"score\": [70, 80, 65, 90, 75, 85],\n})\nprint(df)\nprint(df.groupby(\"class\")[\"score\"].describe())\nsns.boxplot(data=df, x=\"class\", y=\"score\")\nplt.show()",
      },
    ],
    keyTakeaways: [
      "sns works directly with DataFrame columns.",
      "barplot / boxplot need less boilerplate than raw Matplotlib.",
      "Still call plt.show() — use Google Colab to see the chart.",
    ],
  },
  "m16-t5": {
    topicId: "m16-t5",
    intro: "boxplot, countplot, heatmap, and pairplot reveal distributions, counts, and relationships.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Seaborn offers specialized plots: `sns.boxplot()` (distribution/outliers), `sns.countplot()` (category counts), `sns.heatmap()` (correlation matrices), `sns.pairplot()` (pairwise relationships)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\"x\": [1, 2, 3, 4, 5], \"y\": [2, 4, 5, 4, 5]})\ncorr = df.corr()\nprint(corr)\nsns.heatmap(corr, annot=True)\nplt.show()" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a DataFrame with a categorical column gender, use sns.countplot() to show the count of each category.",
        starterCode: "# TODO: Countplot of gender\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\"gender\": [\"M\", \"F\", \"M\", \"M\", \"F\"]})\nprint(df[\"gender\"].value_counts())\nsns.countplot(data=df, x=\"gender\")\nplt.show()",
      },
    ],
    keyTakeaways: [
      "countplot shows category frequencies.",
      "heatmap is ideal for correlation matrices.",
      "annot=True writes numbers inside heatmap cells.",
    ],
  },
};
