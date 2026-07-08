import type { TopicQuiz } from "@/lib/types";

export const sqlModule7Quizzes: Record<string, TopicQuiz> = {
  "sql-m7-t1": {
    topicId: "sql-m7-t1",
    title: "Quick check: Introduction to Subqueries",
    questions: [
      {
        id: "q1",
        question: "A subquery is…",
        options: [
          "A table stored on disk",
          "A SELECT nested inside another SQL statement",
          "Only valid in CREATE TABLE",
          "A type of JOIN",
        ],
        correctIndex: 1,
        explanation: "Subqueries nest SELECT inside WHERE, FROM, SELECT, etc.",
      },
      {
        id: "q2",
        question: "Subqueries are often wrapped in…",
        options: ["Square brackets [ ]", "Parentheses ( )", "Curly braces { }", "Angle brackets < >"],
        correctIndex: 1,
        explanation: "Nested SELECT statements use parentheses.",
      },
      {
        id: "q3",
        question: "WHERE UnitPrice > (SELECT AVG(UnitPrice) FROM Products) uses a subquery to…",
        options: [
          "Delete average prices",
          "Compare each row to a computed threshold",
          "Create a new table",
          "Sort products alphabetically",
        ],
        correctIndex: 1,
        explanation: "The inner query computes AVG; the outer filters against it.",
      },
    ],
  },
  "sql-m7-t2": {
    topicId: "sql-m7-t2",
    title: "Quick check: Subqueries in WHERE",
    questions: [
      {
        id: "q1",
        question: "WHERE Country IN (SELECT …) keeps rows when…",
        options: [
          "Country equals every subquery value",
          "Country matches any value returned by the subquery",
          "The subquery returns no rows",
          "Country is NULL",
        ],
        correctIndex: 1,
        explanation: "IN tests membership in the subquery result set.",
      },
      {
        id: "q2",
        question: "NOT IN can behave unexpectedly when the subquery returns…",
        options: ["Only integers", "NULL values", "Duplicate rows", "One row"],
        correctIndex: 1,
        explanation: "NULL in a NOT IN list makes comparisons unknown — often no rows match.",
      },
      {
        id: "q3",
        question: "IN with a subquery is preferable to many OR conditions when…",
        options: [
          "The list of values comes from another table",
          "You need DELETE",
          "There is no WHERE clause",
          "You only have one value",
        ],
        correctIndex: 0,
        explanation: "Dynamic lists from SELECT are cleaner than long OR chains.",
      },
    ],
  },
  "sql-m7-t3": {
    topicId: "sql-m7-t3",
    title: "Quick check: Scalar Subqueries",
    questions: [
      {
        id: "q1",
        question: "A scalar subquery must return…",
        options: [
          "Multiple columns",
          "Exactly one row and one column",
          "At least 100 rows",
          "Only NULL",
        ],
        correctIndex: 1,
        explanation: "Scalar means a single value — safe for = or > comparisons.",
      },
      {
        id: "q2",
        question: "If a subquery might return multiple rows, you should use…",
        options: ["= comparison", "IN or EXISTS", "DROP TABLE", "GROUP BY in outer query only"],
        correctIndex: 1,
        explanation: "= expects one value; IN/EXISTS handle sets of rows.",
      },
      {
        id: "q3",
        question: "(SELECT COUNT(*) FROM Orders o WHERE o.CustomerID = c.CustomerID) in SELECT is…",
        options: [
          "A correlated scalar subquery per customer row",
          "Invalid SQL",
          "An aggregate without GROUP BY on outer query",
          "A CROSS JOIN",
        ],
        correctIndex: 0,
        explanation: "The inner query references outer alias c — recomputed per row.",
      },
    ],
  },
  "sql-m7-t4": {
    topicId: "sql-m7-t4",
    title: "Quick check: Subqueries in FROM",
    questions: [
      {
        id: "q1",
        question: "A subquery in FROM creates a…",
        options: ["Permanent view", "Derived (inline) table", "Foreign key", "Index"],
        correctIndex: 1,
        explanation: "The nested SELECT acts as a temporary table in the query.",
      },
      {
        id: "q2",
        question: "Subqueries in FROM must have…",
        options: ["A PRIMARY KEY", "An alias", "A WHERE clause", "DISTINCT only"],
        correctIndex: 1,
        explanation: "SQL requires an alias for derived tables.",
      },
      {
        id: "q3",
        question: "Aggregating in the inner query then joining in the outer query is useful because…",
        options: [
          "It separates summarize-then-enrich steps clearly",
          "It deletes duplicates permanently",
          "It replaces all JOINs",
          "SQLite forbids GROUP BY in outer queries",
        ],
        correctIndex: 0,
        explanation: "Inner GROUP BY, outer JOIN to dimension tables for labels.",
      },
    ],
  },
  "sql-m7-t5": {
    topicId: "sql-m7-t5",
    title: "Quick check: Correlated Subqueries",
    questions: [
      {
        id: "q1",
        question: "A correlated subquery…",
        options: [
          "Never references the outer query",
          "References columns from the outer query",
          "Only runs once per database",
          "Cannot appear in WHERE",
        ],
        correctIndex: 1,
        explanation: "Correlation links inner logic to each outer row.",
      },
      {
        id: "q2",
        question: "Products priced above their category average typically use…",
        options: [
          "Uncorrelated scalar subquery",
          "Correlated subquery comparing to category AVG",
          "CROSS JOIN only",
          "DROP INDEX",
        ],
        correctIndex: 1,
        explanation: "The inner AVG must filter by the outer row's CategoryID.",
      },
      {
        id: "q3",
        question: "WHERE p.UnitPrice > (SELECT AVG(p2.UnitPrice) FROM Products p2 WHERE p2.CategoryID = p.CategoryID) is correlated because…",
        options: [
          "p.CategoryID in the inner WHERE ties to outer row p",
          "It uses MAX only",
          "There is no WHERE clause",
          "It cannot use AVG",
        ],
        correctIndex: 0,
        explanation: "Inner query depends on each outer product's category.",
      },
    ],
  },
  "sql-m7-t6": {
    topicId: "sql-m7-t6",
    title: "Quick check: EXISTS & NOT EXISTS",
    questions: [
      {
        id: "q1",
        question: "EXISTS returns true when…",
        options: [
          "The subquery returns zero rows",
          "The subquery finds at least one matching row",
          "All columns are NULL",
          "The outer query has no WHERE clause",
        ],
        correctIndex: 1,
        explanation: "EXISTS is a boolean existence test.",
      },
      {
        id: "q2",
        question: "SELECT 1 inside EXISTS is used because…",
        options: [
          "The engine needs the number 1 to count rows",
          "Column values don't matter — only row existence",
          "It is faster than SELECT *",
          "SQLite requires literal 1",
        ],
        correctIndex: 1,
        explanation: "EXISTS ignores selected columns; 1 is a readable placeholder.",
      },
      {
        id: "q3",
        question: "NOT EXISTS is often preferred over NOT IN when…",
        options: [
          "Testing for missing related rows and NULLs may appear",
          "You need to return many columns from the subquery",
          "Sorting is required",
          "Creating indexes",
        ],
        correctIndex: 0,
        explanation: "NOT EXISTS handles absence without NULL pitfalls of NOT IN.",
      },
    ],
  },
};
