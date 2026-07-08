import type { TopicQuiz } from "@/lib/types";

export const sqlModule9Quizzes: Record<string, TopicQuiz> = {
  "sql-m9-t1": {
    topicId: "sql-m9-t1",
    title: "Quick check: Introduction to CTEs",
    questions: [
      {
        id: "q1",
        question: "A CTE is introduced with…",
        options: [
          "CREATE TABLE",
          "WITH name AS (SELECT …)",
          "INSERT INTO",
          "GROUP BY",
        ],
        correctIndex: 1,
        explanation: "CTEs use the WITH clause before the main query.",
      },
      {
        id: "q2",
        question: "After defining a CTE, you reference it…",
        options: [
          "Only in a subquery in another database",
          "Like a table name in the same statement",
          "As a column alias only",
          "After COMMIT",
        ],
        correctIndex: 1,
        explanation: "The CTE name acts as a temporary table in scope for that query.",
      },
      {
        id: "q3",
        question: "Unlike a view, a CTE…",
        options: [
          "Exists only for the duration of one query statement",
          "Is stored permanently on disk",
          "Cannot use JOINs",
          "Requires CREATE VIEW first",
        ],
        correctIndex: 0,
        explanation: "CTEs are inline and scoped to a single statement.",
      },
    ],
  },
  "sql-m9-t2": {
    topicId: "sql-m9-t2",
    title: "Quick check: CTEs vs Subqueries",
    questions: [
      {
        id: "q1",
        question: "A CTE in FROM is most similar to…",
        options: [
          "A subquery in the FROM clause (derived table)",
          "A PRIMARY KEY",
          "UNION ALL",
          "CREATE INDEX",
        ],
        correctIndex: 0,
        explanation: "Both define an inline result set; CTEs name it at the top.",
      },
      {
        id: "q2",
        question: "CTEs are especially helpful when…",
        options: [
          "You never use JOINs",
          "The same intermediate result is used multiple times",
          "You only SELECT one column",
          "The query has no WHERE clause",
        ],
        correctIndex: 1,
        explanation: "Named CTEs avoid repeating identical subqueries.",
      },
      {
        id: "q3",
        question: "CTEs improve readability mainly by…",
        options: [
          "Naming intermediate steps read top-to-bottom",
          "Eliminating the need for WHERE",
          "Storing results permanently",
          "Replacing all JOINs with CROSS JOIN",
        ],
        correctIndex: 0,
        explanation: "Named steps make multi-stage logic easier to follow.",
      },
    ],
  },
  "sql-m9-t3": {
    topicId: "sql-m9-t3",
    title: "Quick check: Multiple CTEs",
    questions: [
      {
        id: "q1",
        question: "Multiple CTEs in one query are separated by…",
        options: ["Semicolons", "Commas", "UNION only", "JOIN"],
        correctIndex: 1,
        explanation: "WITH a AS (...), b AS (...) — comma between CTE definitions.",
      },
      {
        id: "q2",
        question: "A CTE can reference…",
        options: [
          "Only base tables",
          "CTEs defined earlier in the same WITH clause",
          "Tables in other databases only",
          "Nothing — CTEs are isolated",
        ],
        correctIndex: 1,
        explanation: "Later CTEs may use earlier ones in the chain.",
      },
      {
        id: "q3",
        question: "OrderTotals → BigOrders → final SELECT is an example of…",
        options: [
          "A CTE pipeline where later steps build on earlier ones",
          "A recursive CTE",
          "A permanent view",
          "An EXCEPT operation",
        ],
        correctIndex: 0,
        explanation: "Chained CTEs pass summarized data through named steps.",
      },
    ],
  },
  "sql-m9-t4": {
    topicId: "sql-m9-t4",
    title: "Quick check: CTEs with JOINs & Aggregates",
    questions: [
      {
        id: "q1",
        question: "A common pattern is to…",
        options: [
          "JOIN first, then GROUP BY in an outer CTE only",
          "Aggregate in a CTE, then JOIN to lookup tables",
          "Never use GROUP BY with CTEs",
          "Store aggregates permanently in the CTE",
        ],
        correctIndex: 1,
        explanation: "Summarize in the CTE; enrich with JOINs outside.",
      },
      {
        id: "q2",
        question: "CustomerRevenue CTE with SUM per CustomerID is an example of…",
        options: [
          "Recursive CTE",
          "Aggregate-then-join pattern",
          "DDL",
          "EXCEPT",
        ],
        correctIndex: 1,
        explanation: "GROUP BY in CTE, join Customers for names in outer query.",
      },
      {
        id: "q3",
        question: "Why aggregate inside the CTE before joining Customers?",
        options: [
          "To separate summarization from presentation labels",
          "Because JOINs cannot use GROUP BY",
          "SQLite requires it for all queries",
          "To create a permanent table",
        ],
        correctIndex: 0,
        explanation: "Facts in the CTE; dimension names added in the outer query.",
      },
    ],
  },
  "sql-m9-t5": {
    topicId: "sql-m9-t5",
    title: "Quick check: Introduction to Recursive CTEs",
    questions: [
      {
        id: "q1",
        question: "In SQLite, recursive CTEs require…",
        options: [
          "WITH RECURSIVE",
          "CREATE RECURSIVE VIEW",
          "LOOP … END LOOP",
          "No special keyword",
        ],
        correctIndex: 0,
        explanation: "SQLite uses WITH RECURSIVE for self-referencing CTEs.",
      },
      {
        id: "q2",
        question: "A recursive CTE combines anchor and recursive parts with…",
        options: ["INTERSECT", "UNION ALL", "CROSS JOIN", "HAVING"],
        correctIndex: 1,
        explanation: "UNION ALL stacks anchor rows with each recursive iteration.",
      },
      {
        id: "q3",
        question: "WHERE n < 10 in SELECT n + 1 FROM nums WHERE n < 10 is important because…",
        options: [
          "It stops recursion from running forever",
          "It sorts the output",
          "It creates a PRIMARY KEY",
          "It removes duplicate rows",
        ],
        correctIndex: 0,
        explanation: "A termination condition is required for safe recursion.",
      },
    ],
  },
  "sql-m9-t6": {
    topicId: "sql-m9-t6",
    title: "Quick check: Recursive Employee Hierarchy",
    questions: [
      {
        id: "q1",
        question: "In Northwind, ReportsTo links an employee to…",
        options: [
          "Their CustomerID",
          "Their manager's EmployeeID",
          "Their OrderID",
          "Their salary grade",
        ],
        correctIndex: 1,
        explanation: "ReportsTo is a self-referencing foreign key to EmployeeID.",
      },
      {
        id: "q2",
        question: "The anchor query in an org-chart CTE typically selects…",
        options: [
          "All employees",
          "Root nodes (e.g. ReportsTo IS NULL)",
          "Only customers",
          "Discontinued products",
        ],
        correctIndex: 1,
        explanation: "Roots have no manager; recursion walks down the tree.",
      },
      {
        id: "q3",
        question: "INNER JOIN OrgChart oc ON e.ReportsTo = oc.EmployeeID in the recursive part…",
        options: [
          "Adds direct reports of employees already in the CTE",
          "Deletes managers from the result",
          "Joins to the Customers table",
          "Stops recursion immediately",
        ],
        correctIndex: 0,
        explanation: "Each iteration extends the tree one management level deeper.",
      },
    ],
  },
};
