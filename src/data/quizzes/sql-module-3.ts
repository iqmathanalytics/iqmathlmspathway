import type { TopicQuiz } from "@/lib/types";

export const sqlModule3Quizzes: Record<string, TopicQuiz> = {
  "sql-m3-t1": {
    topicId: "sql-m3-t1",
    title: "Quick check: The WHERE Clause",
    questions: [
      {
        id: "q1",
        question: "What does WHERE do in a SELECT query?",
        options: [
          "Sorts rows alphabetically",
          "Filters rows that do not match a condition",
          "Creates a new table",
          "Renames columns",
        ],
        correctIndex: 1,
        explanation: "WHERE keeps only rows where the condition evaluates to true.",
      },
      {
        id: "q2",
        question: "Which query finds customers in Brazil?",
        options: [
          "SELECT * FROM Customers WHERE Country = Brazil",
          "SELECT * FROM Customers WHERE Country = 'Brazil'",
          "SELECT * FROM Customers FILTER Country = 'Brazil'",
          "SELECT * FROM Customers HAVING Country = 'Brazil'",
        ],
        correctIndex: 1,
        explanation: "String literals must be wrapped in single quotes.",
      },
    ],
  },
  "sql-m3-t2": {
    topicId: "sql-m3-t2",
    title: "Quick check: Comparison & Logical Operators",
    questions: [
      {
        id: "q1",
        question: "Which operator means 'not equal' in SQL?",
        options: ["!=", "<>", "=/=", "NOT="],
        correctIndex: 1,
        explanation: "<> is standard SQL for not equal (SQLite also accepts !=).",
      },
      {
        id: "q2",
        question: "You want rows where price is over 20 AND stock is under 10. You need…",
        options: [
          "WHERE UnitPrice > 20 OR UnitsInStock < 10",
          "WHERE UnitPrice > 20 AND UnitsInStock < 10",
          "WHERE UnitPrice > 20 NOT UnitsInStock < 10",
          "HAVING UnitPrice > 20 AND UnitsInStock < 10",
        ],
        correctIndex: 1,
        explanation: "AND requires both conditions to be true.",
      },
      {
        id: "q3",
        question: "AND has _____ precedence than OR (binds tighter).",
        options: ["lower", "higher", "the same", "no"],
        correctIndex: 1,
        explanation: "AND is evaluated before OR unless parentheses override it.",
      },
    ],
  },
  "sql-m3-t3": {
    topicId: "sql-m3-t3",
    title: "Quick check: IN, BETWEEN & LIKE",
    questions: [
      {
        id: "q1",
        question: "ProductName LIKE 'Ch%' matches…",
        options: [
          "Only the exact text Ch%",
          "Names starting with Ch",
          "Names ending with Ch",
          "Names containing Ch anywhere",
        ],
        correctIndex: 1,
        explanation: "% matches zero or more characters after Ch.",
      },
      {
        id: "q2",
        question: "UnitPrice BETWEEN 10 AND 20 includes prices of…",
        options: ["10 and 20 only if exact", "10 through 20 inclusive", "11 through 19 only", "Above 20"],
        correctIndex: 1,
        explanation: "BETWEEN includes both boundary values.",
      },
      {
        id: "q3",
        question: "Country IN ('USA', 'UK') is equivalent to…",
        options: [
          "Country = 'USA' AND Country = 'UK'",
          "Country = 'USA' OR Country = 'UK'",
          "Country LIKE 'USA' OR Country LIKE 'UK'",
          "Country BETWEEN 'USA' AND 'UK'",
        ],
        correctIndex: 1,
        explanation: "IN is shorthand for multiple OR comparisons on the same column.",
      },
    ],
  },
  "sql-m3-t4": {
    topicId: "sql-m3-t4",
    title: "Quick check: ORDER BY",
    questions: [
      {
        id: "q1",
        question: "ORDER BY UnitPrice DESC sorts prices…",
        options: [
          "Lowest to highest",
          "Highest to lowest",
          "Alphabetically",
          "Randomly",
        ],
        correctIndex: 1,
        explanation: "DESC means descending — highest values first.",
      },
      {
        id: "q2",
        question: "Typical clause order in a simple query is…",
        options: [
          "SELECT, WHERE, FROM, ORDER BY",
          "FROM, WHERE, SELECT, ORDER BY",
          "SELECT, FROM, WHERE, ORDER BY",
          "WHERE, FROM, SELECT, ORDER BY",
        ],
        correctIndex: 2,
        explanation: "SELECT → FROM → WHERE → ORDER BY → LIMIT is the standard order.",
      },
    ],
  },
};
