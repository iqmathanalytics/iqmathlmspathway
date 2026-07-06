import type { TopicQuiz } from "@/lib/types";

export const sqlModule2Quizzes: Record<string, TopicQuiz> = {
  "sql-m2-t1": {
    topicId: "sql-m2-t1",
    title: "Quick check: The SELECT Statement",
    questions: [
      {
        id: "q1",
        question: "Which clause tells SQL which table to read from?",
        options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
        correctIndex: 1,
        explanation: "FROM specifies the table (or tables) that supply rows.",
      },
      {
        id: "q2",
        question: "In Northwind, which table stores customer company names?",
        options: ["Orders", "Customers", "Products", "Shippers"],
        correctIndex: 1,
        explanation: "The Customers table has CustomerID, CompanyName, Country, and related fields.",
      },
      {
        id: "q3",
        question: "Why avoid SELECT * in production queries?",
        options: [
          "It is invalid SQL syntax",
          "It returns only NULL values",
          "It pulls every column, which is slower and breaks easily when schemas change",
          "It deletes data after reading",
        ],
        correctIndex: 2,
        explanation: "Naming columns explicitly is clearer and more maintainable.",
      },
    ],
  },
  "sql-m2-t2": {
    topicId: "sql-m2-t2",
    title: "Quick check: Column Aliases & Expressions",
    questions: [
      {
        id: "q1",
        question: "What keyword renames a column in the result set?",
        options: ["RENAME", "AS", "ALIAS", "SET"],
        correctIndex: 1,
        explanation: "AS gives a column a display name: SELECT price * 2 AS DoublePrice.",
      },
      {
        id: "q2",
        question: "In SQLite, how do you join two strings in SELECT?",
        options: ["+", "CONCAT only", "||", "&"],
        correctIndex: 2,
        explanation: "SQLite uses || for string concatenation: FirstName || ' ' || LastName.",
      },
    ],
  },
  "sql-m2-t3": {
    topicId: "sql-m2-t3",
    title: "Quick check: DISTINCT & LIMIT",
    questions: [
      {
        id: "q1",
        question: "What does SELECT DISTINCT Country FROM Customers do?",
        options: [
          "Deletes duplicate customers",
          "Returns each country value only once",
          "Sorts countries alphabetically only",
          "Counts customers per country",
        ],
        correctIndex: 1,
        explanation: "DISTINCT removes duplicate rows from the result set.",
      },
      {
        id: "q2",
        question: "To get the 3 highest UnitPrice values from Products, you need…",
        options: [
          "LIMIT 3 only",
          "ORDER BY UnitPrice DESC and LIMIT 3",
          "DISTINCT 3",
          "TOP 3 without ORDER BY",
        ],
        correctIndex: 1,
        explanation: "ORDER BY DESC sorts highest first; LIMIT 3 keeps only three rows.",
      },
    ],
  },
  "sql-m2-t4": {
    topicId: "sql-m2-t4",
    title: "Quick check: NULL Handling",
    questions: [
      {
        id: "q1",
        question: "Which condition correctly finds rows where Region is missing?",
        options: [
          "WHERE Region = NULL",
          "WHERE Region IS NULL",
          "WHERE Region = ''",
          "WHERE Region == NULL",
        ],
        correctIndex: 1,
        explanation: "NULL comparisons require IS NULL or IS NOT NULL.",
      },
      {
        id: "q2",
        question: "What does COALESCE(Region, 'N/A') return when Region is NULL?",
        options: ["NULL", "0", "'N/A'", "An error"],
        correctIndex: 2,
        explanation: "COALESCE returns the first non-NULL value in its argument list.",
      },
      {
        id: "q3",
        question: "In Northwind, many Customers have NULL in which column?",
        options: ["CustomerID", "CompanyName", "Region", "Country"],
        correctIndex: 2,
        explanation: "Region is optional in the Customers table and often NULL.",
      },
    ],
  },
};
