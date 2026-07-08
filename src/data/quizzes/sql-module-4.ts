import type { TopicQuiz } from "@/lib/types";

export const sqlModule4Quizzes: Record<string, TopicQuiz> = {
  "sql-m4-t1": {
    topicId: "sql-m4-t1",
    title: "Quick check: Why JOINs?",
    questions: [
      {
        id: "q1",
        question: "Why are orders stored in a separate table from customers?",
        options: [
          "SQL can only have one table per database",
          "To avoid duplicating customer data on every order row",
          "Because orders cannot have dates",
          "To make queries slower",
        ],
        correctIndex: 1,
        explanation: "Normalization stores each fact once; JOINs reunite data when querying.",
      },
      {
        id: "q2",
        question: "In Northwind, Orders.CustomerID is a…",
        options: ["Primary key of Orders", "Foreign key to Customers", "Text label only", "Index name"],
        correctIndex: 1,
        explanation: "CustomerID in Orders references Customers.CustomerID.",
      },
      {
        id: "q3",
        question: "[Order Details] primarily connects…",
        options: [
          "Customers to Suppliers",
          "Orders to Products (line items)",
          "Employees to Territories",
          "Categories to Regions",
        ],
        correctIndex: 1,
        explanation: "Each row is one product line on one order.",
      },
    ],
  },
  "sql-m4-t2": {
    topicId: "sql-m4-t2",
    title: "Quick check: INNER JOIN",
    questions: [
      {
        id: "q1",
        question: "INNER JOIN returns rows when…",
        options: [
          "Either table has a match",
          "Both tables satisfy the ON condition",
          "Only the left table has rows",
          "All rows from both tables always",
        ],
        correctIndex: 1,
        explanation: "INNER JOIN requires a match in both tables.",
      },
      {
        id: "q2",
        question: "Which clause specifies how tables relate?",
        options: ["WHERE", "ON", "HAVING", "GROUP BY"],
        correctIndex: 1,
        explanation: "JOIN ... ON defines the join condition (e.g. c.CustomerID = o.CustomerID).",
      },
      {
        id: "q3",
        question: "Why use table aliases in JOINs?",
        options: [
          "They are required by SQLite",
          "They shorten references and disambiguate shared column names",
          "They make JOINs return more rows",
          "They replace the ON clause",
        ],
        correctIndex: 1,
        explanation: "Aliases like c and o clarify which table a column comes from.",
      },
    ],
  },
  "sql-m4-t3": {
    topicId: "sql-m4-t3",
    title: "Quick check: LEFT & RIGHT JOIN",
    questions: [
      {
        id: "q1",
        question: "After LEFT JOIN, unmatched columns from the right table show as…",
        options: ["0", "EMPTY", "NULL", "ERROR"],
        correctIndex: 2,
        explanation: "Missing matches produce NULL in right-table columns.",
      },
      {
        id: "q2",
        question: "In SQLite, how do you simulate RIGHT JOIN?",
        options: [
          "Use RIGHT JOIN only",
          "Swap tables and use LEFT JOIN",
          "Use CROSS JOIN",
          "Use UNION ALL only",
        ],
        correctIndex: 1,
        explanation: "A RIGHT JOIN is equivalent to swapping the table order in a LEFT JOIN.",
      },
      {
        id: "q3",
        question: "To find customers with NO orders using LEFT JOIN, you add…",
        options: [
          "WHERE OrderID IS NULL",
          "WHERE OrderID = 0",
          "HAVING COUNT(*) = 1",
          "INNER JOIN Orders",
        ],
        correctIndex: 0,
        explanation: "Unmatched orders columns are NULL — filter on that after LEFT JOIN.",
      },
    ],
  },
  "sql-m4-t4": {
    topicId: "sql-m4-t4",
    title: "Quick check: FULL, CROSS & Self JOIN",
    questions: [
      {
        id: "q1",
        question: "A self JOIN is used when…",
        options: [
          "Two unrelated databases are merged",
          "A table is joined to itself",
          "Only one row exists",
          "You need DELETE",
        ],
        correctIndex: 1,
        explanation: "Self joins relate rows within the same table (e.g. employee → manager).",
      },
      {
        id: "q2",
        question: "CROSS JOIN produces…",
        options: [
          "Only matching rows",
          "The Cartesian product of both tables",
          "Only NULL rows",
          "Sorted output only",
        ],
        correctIndex: 1,
        explanation: "Every left row pairs with every right row.",
      },
      {
        id: "q3",
        question: "Employees.ReportsTo in a self JOIN typically joins to…",
        options: [
          "Customers.CustomerID",
          "Employees.EmployeeID (manager's ID)",
          "Orders.OrderID",
          "Products.ProductID",
        ],
        correctIndex: 1,
        explanation: "ReportsTo references another row's EmployeeID in the same table.",
      },
    ],
  },
};
