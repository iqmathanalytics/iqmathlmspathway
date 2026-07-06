import type { TopicQuiz } from "@/lib/types";

export const sqlModule5Quizzes: Record<string, TopicQuiz> = {
  "sql-m5-t1": {
    topicId: "sql-m5-t1",
    title: "Quick check: What Are Aggregate Functions?",
    questions: [
      {
        id: "q1",
        question: "What does COUNT(*) return?",
        options: [
          "The number of non-NULL values in one column",
          "The total number of rows in the result set",
          "The sum of all columns",
          "Always 1",
        ],
        correctIndex: 1,
        explanation: "COUNT(*) counts every row, including those with NULLs.",
      },
      {
        id: "q2",
        question: "Aggregate functions are used to…",
        options: [
          "Create new tables",
          "Summarize many rows into fewer values",
          "Delete duplicate tables",
          "Sort columns alphabetically only",
        ],
        correctIndex: 1,
        explanation: "Aggregates collapse data — counts, sums, averages, etc.",
      },
    ],
  },
  "sql-m5-t2": {
    topicId: "sql-m5-t2",
    title: "Quick check: COUNT, MIN & MAX",
    questions: [
      {
        id: "q1",
        question: "COUNT(Region) differs from COUNT(*) when…",
        options: [
          "Region has NULL values",
          "Region is a number",
          "The table is empty",
          "Never — they are always equal",
        ],
        correctIndex: 0,
        explanation: "COUNT(column) ignores NULLs; COUNT(*) does not.",
      },
      {
        id: "q2",
        question: "MAX(UnitPrice) on Products returns…",
        options: [
          "The cheapest product",
          "The highest UnitPrice value",
          "The average price",
          "The count of products",
        ],
        correctIndex: 1,
        explanation: "MAX returns the largest value in the column.",
      },
    ],
  },
  "sql-m5-t3": {
    topicId: "sql-m5-t3",
    title: "Quick check: SUM & AVG",
    questions: [
      {
        id: "q1",
        question: "AVG(UnitPrice) is calculated as…",
        options: [
          "SUM(UnitPrice) / COUNT of non-NULL UnitPrice values",
          "MAX - MIN",
          "COUNT(*) only",
          "SUM / COUNT(*) always including NULLs as zero",
        ],
        correctIndex: 0,
        explanation: "AVG divides the sum by the number of non-NULL values.",
      },
      {
        id: "q2",
        question: "SUM(Freight) on Orders gives you…",
        options: [
          "The average freight per order",
          "The total of all freight charges combined",
          "The number of orders",
          "The largest freight value",
        ],
        correctIndex: 1,
        explanation: "SUM adds all values in the column.",
      },
    ],
  },
  "sql-m5-t4": {
    topicId: "sql-m5-t4",
    title: "Quick check: GROUP BY Basics",
    questions: [
      {
        id: "q1",
        question: "GROUP BY Country with COUNT(*) produces…",
        options: [
          "One row per customer",
          "One row per distinct country with a count",
          "Only one row total",
          "An error always",
        ],
        correctIndex: 1,
        explanation: "Each unique Country gets its own aggregate row.",
      },
      {
        id: "q2",
        question: "If SELECT has Country and COUNT(*), GROUP BY must include…",
        options: ["Nothing", "Country", "COUNT(*)", "ORDER BY"],
        correctIndex: 1,
        explanation: "Non-aggregated columns in SELECT must be in GROUP BY.",
      },
    ],
  },
  "sql-m5-t5": {
    topicId: "sql-m5-t5",
    title: "Quick check: GROUP BY Multiple Columns",
    questions: [
      {
        id: "q1",
        question: "GROUP BY Country, City creates groups that are unique by…",
        options: [
          "Country only",
          "City only",
          "Each Country + City pair",
          "Random rows",
        ],
        correctIndex: 2,
        explanation: "Both columns together define each group.",
      },
      {
        id: "q2",
        question: "Grouping orders by strftime('%Y', OrderDate) lets you…",
        options: [
          "Delete old orders",
          "Count orders per calendar year",
          "Join two databases",
          "Remove duplicates only",
        ],
        correctIndex: 1,
        explanation: "Extracting the year creates one group per year.",
      },
    ],
  },
  "sql-m5-t6": {
    topicId: "sql-m5-t6",
    title: "Quick check: The HAVING Clause",
    questions: [
      {
        id: "q1",
        question: "HAVING is used to filter…",
        options: [
          "Individual rows before grouping",
          "Groups after aggregation",
          "Column names only",
          "JOIN conditions",
        ],
        correctIndex: 1,
        explanation: "HAVING applies to grouped results, e.g. COUNT(*) > 5.",
      },
      {
        id: "q2",
        question: "Which is valid for finding countries with more than 5 customers?",
        options: [
          "WHERE COUNT(*) > 5",
          "HAVING COUNT(*) > 5",
          "WHERE CustomerCount > 5 without GROUP BY",
          "FILTER COUNT(*) > 5",
        ],
        correctIndex: 1,
        explanation: "WHERE cannot use aggregate functions; HAVING can.",
      },
      {
        id: "q3",
        question: "Correct clause order includes…",
        options: [
          "HAVING before GROUP BY",
          "GROUP BY before HAVING",
          "HAVING before WHERE",
          "ORDER BY before GROUP BY",
        ],
        correctIndex: 1,
        explanation: "GROUP BY comes before HAVING in standard SQL order.",
      },
    ],
  },
};
