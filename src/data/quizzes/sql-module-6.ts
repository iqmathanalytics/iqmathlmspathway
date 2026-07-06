import type { TopicQuiz } from "@/lib/types";

export const sqlModule6Quizzes: Record<string, TopicQuiz> = {
  "sql-m6-t1": {
    topicId: "sql-m6-t1",
    title: "Quick check: Introduction to SQL Functions",
    questions: [
      {
        id: "q1",
        question: "Scalar functions differ from aggregates because they…",
        options: [
          "Only work on NULL values",
          "Transform one row's value at a time",
          "Always return multiple rows",
          "Cannot be used in SELECT",
        ],
        correctIndex: 1,
        explanation: "Scalar functions like UPPER() operate per row; COUNT() summarizes groups.",
      },
      {
        id: "q2",
        question: "UPPER(Country) in SELECT will…",
        options: [
          "Delete lowercase letters from the table",
          "Return Country in uppercase in the result only",
          "Sort the table permanently",
          "Join two tables",
        ],
        correctIndex: 1,
        explanation: "Functions transform output; they don't change stored data.",
      },
    ],
  },
  "sql-m6-t2": {
    topicId: "sql-m6-t2",
    title: "Quick check: String Functions",
    questions: [
      {
        id: "q1",
        question: "In SQLite, how do you concatenate FirstName and LastName?",
        options: ["CONCAT(FirstName, LastName)", "FirstName + LastName", "FirstName || LastName", "JOIN(FirstName, LastName)"],
        correctIndex: 2,
        explanation: "SQLite uses || for string concatenation.",
      },
      {
        id: "q2",
        question: "SUBSTR(ProductName, 1, 3) returns…",
        options: [
          "The last 3 characters",
          "Characters starting at position 1, length 3",
          "The product ID",
          "Always NULL",
        ],
        correctIndex: 1,
        explanation: "SUBSTR(string, start, length) — positions are 1-based in SQLite.",
      },
    ],
  },
  "sql-m6-t3": {
    topicId: "sql-m6-t3",
    title: "Quick check: Numeric Functions",
    questions: [
      {
        id: "q1",
        question: "ROUND(19.567, 2) returns…",
        options: ["19", "19.57", "20", "19.567"],
        correctIndex: 1,
        explanation: "ROUND with 2 decimal places gives 19.57.",
      },
      {
        id: "q2",
        question: "ABS(-15) returns…",
        options: ["-15", "15", "0", "NULL"],
        correctIndex: 1,
        explanation: "ABS returns the non-negative magnitude.",
      },
    ],
  },
  "sql-m6-t4": {
    topicId: "sql-m6-t4",
    title: "Quick check: Date & Time Functions",
    questions: [
      {
        id: "q1",
        question: "strftime('%Y', OrderDate) extracts…",
        options: ["The month name", "The four-digit year", "The day of week only", "The hour"],
        correctIndex: 1,
        explanation: "%Y is the year component in strftime format codes.",
      },
      {
        id: "q2",
        question: "Northwind OrderDate values are typically stored as…",
        options: [
          "Binary blobs",
          "ISO text like YYYY-MM-DD",
          "Unix timestamps only",
          "Images",
        ],
        correctIndex: 1,
        explanation: "SQLite stores dates as TEXT, INTEGER, or REAL — Northwind uses ISO date strings.",
      },
    ],
  },
  "sql-m6-t5": {
    topicId: "sql-m6-t5",
    title: "Quick check: CASE Expressions",
    questions: [
      {
        id: "q1",
        question: "CASE is used to…",
        options: [
          "Create a new table",
          "Return different values based on conditions",
          "Delete rows",
          "Only sort data",
        ],
        correctIndex: 1,
        explanation: "CASE is conditional logic inside a query expression.",
      },
      {
        id: "q2",
        question: "CASE WHEN UnitPrice < 10 THEN 'Cheap' ELSE 'Other' END is valid in…",
        options: ["SELECT only", "SELECT and ORDER BY", "DROP TABLE", "CREATE INDEX only"],
        correctIndex: 1,
        explanation: "CASE expressions work in SELECT, WHERE, ORDER BY, and more.",
      },
    ],
  },
  "sql-m6-t6": {
    topicId: "sql-m6-t6",
    title: "Quick check: COALESCE & NULLIF",
    questions: [
      {
        id: "q1",
        question: "COALESCE(Region, 'N/A') returns…",
        options: [
          "Always 'N/A'",
          "Region if not NULL, otherwise 'N/A'",
          "NULL always",
          "The word COALESCE",
        ],
        correctIndex: 1,
        explanation: "COALESCE picks the first non-NULL value.",
      },
      {
        id: "q2",
        question: "NULLIF(UnitsInStock, 0) returns NULL when…",
        options: [
          "UnitsInStock is any positive number",
          "UnitsInStock equals 0",
          "UnitsInStock is NULL",
          "Never",
        ],
        correctIndex: 1,
        explanation: "NULLIF(a,b) returns NULL when a = b, otherwise returns a.",
      },
    ],
  },
};
