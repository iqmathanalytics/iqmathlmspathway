import type { TopicQuiz } from "@/lib/types";

export const module17Quizzes: Record<string, TopicQuiz> = {
  "m17-t1": {
    topicId: "m17-t1",
    title: "Quick check: Descriptive Statistics",
    questions: [
      {
        id: "q1",
        question: "What is the mean?",
        options: [
          "Most frequent value",
          "Average of values",
          "Middle sorted value always",
          "Max − min",
        ],
        correctIndex: 1,
        explanation: "sum divided by count.",
      },
      {
        id: "q2",
        question: "What is the median?",
        options: [
          "Average",
          "Middle value when sorted",
          "Variance",
          "Mode",
        ],
        correctIndex: 1,
        explanation: "Robust center for skewed data.",
      },
    ],
  },
  "m17-t2": {
    topicId: "m17-t2",
    title: "Quick check: Data Distributions",
    questions: [
      {
        id: "q1",
        question: "If mean > median, the distribution is often…",
        options: [
          "Left-skewed",
          "Right-skewed",
          "Uniform always",
          "Empty",
        ],
        correctIndex: 1,
        explanation: "A long right tail pulls the mean up.",
      },
      {
        id: "q2",
        question: "What chart shows distribution shape well?",
        options: [
          "Pie of filenames",
          "Histogram",
          "Only scatter of IDs",
          "Network graph",
        ],
        correctIndex: 1,
        explanation: "Histograms reveal skew and modality.",
      },
    ],
  },
  "m17-t3": {
    topicId: "m17-t3",
    title: "Quick check: Correlation and Covariance",
    questions: [
      {
        id: "q1",
        question: "Correlation of -1 means…",
        options: [
          "No link",
          "Perfect negative linear relationship",
          "Perfect positive",
          "Error",
        ],
        correctIndex: 1,
        explanation: "Variables move in exact opposite directions linearly.",
      },
      {
        id: "q2",
        question: "How do you correlate two Series in Pandas?",
        options: [
          "s1.corr(s2)",
          "s1.merge(s2)",
          "s1.pivot(s2)",
          "s1.dropna only",
        ],
        correctIndex: 0,
        explanation: "corr computes Pearson correlation by default.",
      },
    ],
  },
  "m17-t4": {
    topicId: "m17-t4",
    title: "Quick check: Outlier Detection",
    questions: [
      {
        id: "q1",
        question: "IQR method flags points outside…",
        options: [
          "The mean only",
          "Q1−1.5·IQR and Q3+1.5·IQR fences",
          "Only max",
          "Only mode",
        ],
        correctIndex: 1,
        explanation: "Tukey fences are a common rule of thumb.",
      },
      {
        id: "q2",
        question: "Z-score outlier rule often uses |z| greater than about…",
        options: [
          "0.1",
          "3",
          "100",
          "0",
        ],
        correctIndex: 1,
        explanation: "|z| > 3 is a common threshold.",
      },
    ],
  },
  "m17-t5": {
    topicId: "m17-t5",
    title: "Module 17 Quiz",
    questions: [
      {
        id: "q1",
        question: "What does \"mean\" measure in a dataset?",
        options: [
          "The most frequent value",
          "The arithmetic average of values",
          "The middle value only",
          "The range",
        ],
        correctIndex: 1,
        explanation: "mean = sum / count.",
      },
      {
        id: "q2",
        question: "What does \"median\" represent?",
        options: [
          "The average squared error",
          "The middle value when data are sorted",
          "The tallest bar in a histogram",
          "Always equal to the mean",
        ],
        correctIndex: 1,
        explanation: "Median is robust to extreme outliers compared to the mean.",
      },
      {
        id: "q3",
        question: "What is \"mode\"?",
        options: [
          "The average",
          "The most frequently occurring value",
          "The variance",
          "The IQR",
        ],
        correctIndex: 1,
        explanation: "A distribution can be unimodal, bimodal, etc.",
      },
      {
        id: "q4",
        question: "What does standard deviation measure?",
        options: [
          "Only the maximum",
          "How spread out values are around the mean",
          "Missingness rate",
          "Correlation sign",
        ],
        correctIndex: 1,
        explanation: "Larger std → more dispersion.",
      },
      {
        id: "q5",
        question: "What does a correlation of -1 mean?",
        options: [
          "No relationship",
          "Perfect negative linear relationship",
          "Perfect positive relationship",
          "Data error always",
        ],
        correctIndex: 1,
        explanation: "As one variable increases, the other decreases perfectly linearly.",
      },
      {
        id: "q6",
        question: "What is the IQR method used for?",
        options: [
          "Computing means only",
          "Detecting outliers using Q1/Q3 fences",
          "Training neural nets",
          "Sorting strings",
        ],
        correctIndex: 1,
        explanation: "Values outside Q1−1.5·IQR or Q3+1.5·IQR are often flagged.",
      },
      {
        id: "q7",
        question: "What does it mean if mean > median in a distribution?",
        options: [
          "Left-skewed typically",
          "Often right-skewed (long right tail)",
          "Perfectly symmetric",
          "No variance",
        ],
        correctIndex: 1,
        explanation: "A long right tail pulls the mean above the median.",
      },
      {
        id: "q8",
        question: "What Python method computes correlation between two columns?",
        options: [
          "df.pivot()",
          "df['a'].corr(df['b']) (or df.corr())",
          "df.merge()",
          "df.explode()",
        ],
        correctIndex: 1,
        explanation: "Series.corr or DataFrame.corr compute pairwise correlations.",
      },
      {
        id: "q9",
        question: "What is the first step typically done in EDA?",
        options: [
          "Train a model",
          "Load and inspect the data (shape, dtypes, samples)",
          "Deploy to production",
          "Delete outliers blindly",
        ],
        correctIndex: 1,
        explanation: "Understand structure before cleaning or modeling.",
      },
      {
        id: "q10",
        question: "Why do we check for missing values during EDA?",
        options: [
          "Missing values never matter",
          "They can bias analysis and need handling",
          "Only for plotting colors",
          "To increase file size",
        ],
        correctIndex: 1,
        explanation: "Decide whether to drop, impute, or investigate missingness.",
      },
    ],
  },
};
