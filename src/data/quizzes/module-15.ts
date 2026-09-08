import type { TopicQuiz } from "@/lib/types";

export const module15Quizzes: Record<string, TopicQuiz> = {
  "m15-t1": {
    topicId: "m15-t1",
    title: "Quick check: Series and DataFrames",
    questions: [
      {
        id: "q1",
        question: "What is a Series?",
        options: [
          "A 2D table",
          "A 1D labeled array",
          "A plot",
          "A file mode",
        ],
        correctIndex: 1,
        explanation: "Series is one column-like sequence with an index.",
      },
      {
        id: "q2",
        question: "What is a DataFrame?",
        options: [
          "Only JSON",
          "A 2D labeled table of columns",
          "A NumPy scalar",
          "A set of keys",
        ],
        correctIndex: 1,
        explanation: "DataFrames hold multiple columns.",
      },
    ],
  },
  "m15-t2": {
    topicId: "m15-t2",
    title: "Quick check: Reading and Writing Data",
    questions: [
      {
        id: "q1",
        question: "Which reads a CSV into a DataFrame?",
        options: [
          "pd.read_csv()",
          "pd.write_csv()",
          "np.loadtxt only",
          "open().read()",
        ],
        correctIndex: 0,
        explanation: "read_csv is the standard loader.",
      },
      {
        id: "q2",
        question: "How do you typically save a DataFrame to CSV?",
        options: [
          "df.to_csv(path)",
          "df.save_excel only",
          "print(df)",
          "df.dump()",
        ],
        correctIndex: 0,
        explanation: "to_csv writes tabular text.",
      },
    ],
  },
  "m15-t3": {
    topicId: "m15-t3",
    title: "Quick check: Indexing, Filtering, and Selecting",
    questions: [
      {
        id: "q1",
        question: "loc selects by…?",
        options: [
          "Integer position only",
          "Labels",
          "File name",
          "dtype",
        ],
        correctIndex: 1,
        explanation: "loc is label-based.",
      },
      {
        id: "q2",
        question: "iloc selects by…?",
        options: [
          "Column dtype",
          "Integer position",
          "Regex only",
          "Plot color",
        ],
        correctIndex: 1,
        explanation: "iloc is position-based.",
      },
    ],
  },
  "m15-t4": {
    topicId: "m15-t4",
    title: "Quick check: Data Cleaning",
    questions: [
      {
        id: "q1",
        question: "What does dropna() do?",
        options: [
          "Fills NaNs",
          "Removes missing-value rows/cols",
          "Duplicates only",
          "Renames",
        ],
        correctIndex: 1,
        explanation: "Drop incomplete records when appropriate.",
      },
      {
        id: "q2",
        question: "What does fillna(0) do?",
        options: [
          "Deletes the frame",
          "Replaces NaNs with 0",
          "Sorts values",
          "Computes mean",
        ],
        correctIndex: 1,
        explanation: "Impute a stand-in value.",
      },
    ],
  },
  "m15-t5": {
    topicId: "m15-t5",
    title: "Quick check: GroupBy, Merging, and Joining",
    questions: [
      {
        id: "q1",
        question: "What does groupby() enable?",
        options: [
          "Only sorting",
          "Split-apply-combine aggregations",
          "File encryption",
          "Plot themes",
        ],
        correctIndex: 1,
        explanation: "Aggregate metrics per group.",
      },
      {
        id: "q2",
        question: "What does pd.merge() resemble?",
        options: [
          "A histogram",
          "A SQL join",
          "A for-loop only",
          "A lambda",
        ],
        correctIndex: 1,
        explanation: "Combine tables on keys.",
      },
    ],
  },
  "m15-t6": {
    topicId: "m15-t6",
    title: "Module 15 Quiz",
    questions: [
      {
        id: "q1",
        question: "What's the difference between a Series and a DataFrame?",
        options: [
          "They are the same",
          "Series is 1D labeled; DataFrame is 2D table of columns",
          "Series is always 2D",
          "DataFrame cannot hold numbers",
        ],
        correctIndex: 1,
        explanation: "A DataFrame is like several Series sharing an index.",
      },
      {
        id: "q2",
        question: "What function reads a CSV file into a DataFrame?",
        options: [
          "pd.open_csv()",
          "pd.read_csv()",
          "pd.load_excel()",
          "np.read_csv()",
        ],
        correctIndex: 1,
        explanation: "pd.read_csv(path) is the standard entry point.",
      },
      {
        id: "q3",
        question: "What's the difference between .loc[] and .iloc[]?",
        options: [
          "No difference",
          "loc uses labels; iloc uses integer positions",
          "iloc uses column names only",
          "loc is for NumPy only",
        ],
        correctIndex: 1,
        explanation: "loc['row', 'col'] vs iloc[0, 1].",
      },
      {
        id: "q4",
        question: "What method removes rows with missing values?",
        options: [
          "fillna()",
          "dropna()",
          "drop_na_cols only",
          "replace_null()",
        ],
        correctIndex: 1,
        explanation: "dropna() drops rows (or columns) containing NaN.",
      },
      {
        id: "q5",
        question: "What method fills missing values with a specified value?",
        options: [
          "dropna()",
          "fillna(value)",
          "interpolate only",
          "complete()",
        ],
        correctIndex: 1,
        explanation: "fillna(0) replaces NaNs with 0.",
      },
      {
        id: "q6",
        question: "What does .groupby() do?",
        options: [
          "Sorts the index only",
          "Splits data into groups for aggregation",
          "Merges two frames",
          "Plots charts",
        ],
        correctIndex: 1,
        explanation: "groupby('col').mean() computes per-group means.",
      },
      {
        id: "q7",
        question: "What does pd.merge() do?",
        options: [
          "Deletes duplicates",
          "Joins DataFrames on key columns (like SQL join)",
          "Pivots long to wide only",
          "Reads CSV",
        ],
        correctIndex: 1,
        explanation: "merge combines tables using shared keys.",
      },
      {
        id: "q8",
        question: "What does .drop_duplicates() do?",
        options: [
          "Removes all rows",
          "Removes duplicate rows",
          "Fills NaNs",
          "Renames columns",
        ],
        correctIndex: 1,
        explanation: "Keeps unique rows based on selected columns.",
      },
      {
        id: "q9",
        question: "What is a pivot table used for?",
        options: [
          "Only plotting",
          "Summarizing values across two categorical axes",
          "Reading JSON",
          "Training models",
        ],
        correctIndex: 1,
        explanation: "pivot_table aggregates a value column by row/column categories.",
      },
      {
        id: "q10",
        question: "What does df.shape return?",
        options: [
          "Only column names",
          "A tuple (n_rows, n_columns)",
          "The dtype of index",
          "Memory usage only",
        ],
        correctIndex: 1,
        explanation: "shape tells you the table dimensions.",
      },
    ],
  },
};
