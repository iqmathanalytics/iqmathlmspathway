import type { TopicLesson } from "@/lib/types";

export const module17Lessons: Record<string, TopicLesson> = {
  "m17-t1": {
    topicId: "m17-t1",
    intro: "Mean, median, mode, and standard deviation summarize center and spread.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Mean (average), median (middle value), mode (most frequent value), and standard deviation (spread) summarize a dataset's central tendency and variability." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndata = pd.Series([10, 20, 20, 30, 40])\nprint(data.mean())    # 24.0\nprint(data.median())  # 20.0\nprint(data.mode()[0]) # 20\nprint(data.std())     # standard deviation" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given data = [4, 8, 6, 5, 3, 8, 9], compute the mean, median, and mode.",
        starterCode: "# TODO: mean, median, mode\nimport pandas as pd\ndata = pd.Series([4, 8, 6, 5, 3, 8, 9])\nprint(data.mean())\nprint(data.median())\nprint(data.mode()[0])",
      },
    ],
    keyTakeaways: [
      "Mean is sensitive to outliers; median is more robust.",
      "Mode is the most frequent value.",
      "Standard deviation measures spread around the mean.",
    ],
  },
  "m17-t2": {
    topicId: "m17-t2",
    intro: "Distributions describe how values are spread — normal, skewed, or uniform. Histograms visualize shape.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "A distribution describes how values are spread — common shapes include normal (bell curve), skewed, and uniform. Histograms and density plots visualize distribution shape. Use **Open in Google Colab** on the example to see the histogram — the browser IDE cannot display charts." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import numpy as np\nimport matplotlib.pyplot as plt\ndata = np.random.normal(loc=50, scale=10, size=1000)\nplt.hist(data, bins=30)\nplt.title(\"Distribution of Data\")\nplt.show()\nprint(\"Skewness check via mean vs median:\", np.mean(data), np.median(data))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a dataset, write code to check if it is roughly symmetric by comparing its mean and median (if close, the distribution is roughly symmetric).",
        starterCode: "# TODO: Compare mean and median\nimport numpy as np\ndata = np.array([10, 12, 11, 13, 12, 14, 11])\nmean = np.mean(data)\nmedian = np.median(data)\nprint(mean, median)\nif abs(mean - median) < 1:\n    print(\"Roughly symmetric\")\nelse:\n    print(\"Possibly skewed\")",
      },
    ],
    keyTakeaways: [
      "Histograms reveal distribution shape.",
      "mean ≈ median suggests symmetry.",
      "mean > median often means right skew.",
    ],
  },
  "m17-t3": {
    topicId: "m17-t3",
    intro: "Correlation measures linear relationship strength (-1 to 1). Covariance is the unstandardized co-movement.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Correlation measures the strength and direction of a linear relationship between two variables (ranges -1 to 1). Covariance measures how two variables vary together (unstandardized)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndf = pd.DataFrame({\"hours_studied\": [1, 2, 3, 4, 5], \"score\": [50, 55, 65, 70, 85]})\nprint(df.corr())\nprint(df.cov())" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given x = [1, 2, 3, 4, 5], y = [2, 4, 6, 8, 10], compute the correlation coefficient between them.",
        starterCode: "# TODO: Correlation of x and y\nimport pandas as pd\ndf = pd.DataFrame({\"x\": [1, 2, 3, 4, 5], \"y\": [2, 4, 6, 8, 10]})\nprint(df.corr())\nprint(df[\"x\"].corr(df[\"y\"]))",
      },
    ],
    keyTakeaways: [
      "Correlation of 1 / -1 means perfect positive / negative linear link.",
      "Near 0 means little linear relationship.",
      "df.corr() returns a correlation matrix.",
    ],
  },
  "m17-t4": {
    topicId: "m17-t4",
    intro: "Outliers are extreme values. Detect them with the IQR rule or Z-scores.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Outliers are unusually extreme values. Common detection methods: IQR (interquartile range) rule and Z-score (how many standard deviations from the mean)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\ndata = pd.Series([10, 12, 14, 15, 13, 100])\nQ1 = data.quantile(0.25)\nQ3 = data.quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\noutliers = data[(data < lower) | (data > upper)]\nprint(outliers)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given data = [10, 12, 11, 13, 12, 200], use the IQR method to detect any outliers.",
        starterCode: "# TODO: IQR outlier detection\nimport pandas as pd\ndata = pd.Series([10, 12, 11, 13, 12, 200])\nQ1 = data.quantile(0.25)\nQ3 = data.quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\nprint(data[(data < lower) | (data > upper)])",
      },
    ],
    keyTakeaways: [
      "IQR = Q3 - Q1.",
      "Values outside Q1-1.5*IQR or Q3+1.5*IQR are outliers.",
      "Always investigate outliers before dropping them.",
    ],
  },
  "m17-t5": {
    topicId: "m17-t5",
    intro: "EDA workflow: load → shape/info/missing → describe → visualize → note findings.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "A typical EDA workflow: load data, check shape/info/missing values, compute summary stats, visualize distributions and relationships, and note initial findings before modeling. Use an in-memory DataFrame when no CSV is available." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import pandas as pd\n\ndf = pd.DataFrame({\n    \"Survived\": [0, 1, 1, 0, 1],\n    \"Age\": [22, 38, None, 35, 28],\n    \"Fare\": [7.25, 71.28, 8.05, 53.1, 8.05],\n})\nprint(df.shape)\nprint(df.info())\nprint(df.describe())\nprint(df.isnull().sum())\nprint(df[\"Survived\"].value_counts())" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a DataFrame df, write code to print the number of rows/columns, summary statistics, and any missing values — a mini EDA report.",
        starterCode: "# TODO: Mini EDA report\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \"region\": [\"North\", \"South\", \"East\", \"West\", \"North\"],\n    \"revenue\": [100, 150, np.nan, 120, 110],\n})\nprint(df.shape)\nprint(df.describe())\nprint(df.isnull().sum())",
      },
    ],
    keyTakeaways: [
      "Start with shape, info, and missing counts.",
      "describe() summarizes numeric columns.",
      "value_counts() reveals category frequencies.",
    ],
  },
};
