import type { TopicLesson } from "@/lib/types";

export const sqlModule4Lessons: Record<string, TopicLesson> = {
  "sql-m4-t1": {
    topicId: "sql-m4-t1",
    intro:
      "Normalized databases split data across tables. JOINs connect related rows through foreign keys so you can answer questions that span multiple tables.",
    blocks: [
      { type: "infographic", infographic: "sql-why-joins" },
      {
        type: "practice",
        practiceLabel: "See the link",
        practicePrompt:
          "Preview how Customers and Orders connect — select CustomerID from both tables (LIMIT 5 each). Run them one at a time or together.",
        starterCode: `SELECT CustomerID, CompanyName FROM Customers LIMIT 5;

SELECT CustomerID, OrderID, OrderDate FROM Orders LIMIT 5;`,
      },
      {
        type: "practice",
        practiceLabel: "Foreign keys in Products",
        practicePrompt: "List ProductName with its CategoryID and SupplierID to see outgoing foreign keys.",
        starterCode: `SELECT ProductName, CategoryID, SupplierID, UnitPrice
FROM Products
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Tables relate via foreign keys pointing to primary keys.",
      "JOINs combine related rows at query time instead of duplicating data.",
      "Northwind links Customers→Orders, Products→Categories, and more.",
    ],
  },
  "sql-m4-t2": {
    topicId: "sql-m4-t2",
    intro:
      "INNER JOIN is the most common join type — it returns only rows that have a match on both sides of the relationship.",
    blocks: [
      { type: "infographic", infographic: "sql-inner-join" },
      {
        type: "practice",
        practiceLabel: "Customer orders",
        practicePrompt: "Join Customers and Orders. Show CompanyName, OrderID, and OrderDate (latest first).",
        starterCode: `SELECT c.CompanyName, o.OrderID, o.OrderDate
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
ORDER BY o.OrderDate DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Products with categories",
        practicePrompt: "Join Products to Categories to show ProductName, CategoryName, and UnitPrice.",
        starterCode: `SELECT p.ProductName, c.CategoryName, p.UnitPrice
FROM Products p
INNER JOIN Categories c ON p.CategoryID = c.CategoryID
ORDER BY c.CategoryName, p.UnitPrice DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Order line items",
        practicePrompt:
          "Join [Order Details], Products, and Orders. Show OrderID, ProductName, Quantity, and UnitPrice.",
        starterCode: `SELECT
  o.OrderID,
  p.ProductName,
  od.Quantity,
  od.UnitPrice
FROM [Order Details] od
INNER JOIN Orders o ON od.OrderID = o.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "INNER JOIN keeps rows only when the ON condition matches in both tables.",
      "Use table aliases for readability.",
      "Chain multiple JOINs for three or more tables.",
    ],
  },
  "sql-m4-t3": {
    topicId: "sql-m4-t3",
    intro:
      "Sometimes you need every row from one table even when there is no match. LEFT JOIN preserves the left table; RIGHT JOIN preserves the right.",
    blocks: [
      { type: "infographic", infographic: "sql-left-right-join" },
      {
        type: "practice",
        practiceLabel: "All customers with orders",
        practicePrompt:
          "LEFT JOIN Customers to Orders. Customers without orders show NULL for order columns.",
        starterCode: `SELECT c.CompanyName, o.OrderID, o.OrderDate
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
ORDER BY c.CompanyName
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Suppliers and products",
        practicePrompt: "LEFT JOIN Suppliers to Products. List every supplier and their product names.",
        starterCode: `SELECT s.CompanyName AS Supplier, p.ProductName
FROM Suppliers s
LEFT JOIN Products p ON s.SupplierID = p.SupplierID
ORDER BY s.CompanyName, p.ProductName
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "RIGHT JOIN equivalent",
        practicePrompt:
          "SQLite has no RIGHT JOIN — swap tables to get the same effect. Show products with supplier country.",
        starterCode: `SELECT p.ProductName, s.CompanyName, s.Country
FROM Suppliers s
LEFT JOIN Products p ON s.SupplierID = p.SupplierID
ORDER BY s.Country, p.ProductName
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "LEFT JOIN keeps all left-table rows; unmatched right columns are NULL.",
      "RIGHT JOIN is rare in SQLite — swap tables and use LEFT JOIN instead.",
      "Filter NULL after a LEFT JOIN to find rows with no match.",
    ],
  },
  "sql-m4-t4": {
    topicId: "sql-m4-t4",
    intro:
      "FULL OUTER, CROSS, and self joins handle edge cases: all rows from both sides, every combination, and hierarchies within one table.",
    blocks: [
      { type: "infographic", infographic: "sql-full-cross-self-join" },
      {
        type: "practice",
        practiceLabel: "Employee → manager",
        practicePrompt: "Self-join Employees to show each employee and their manager's name.",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  m.FirstName || ' ' || m.LastName AS Manager
FROM Employees e
LEFT JOIN Employees m ON e.ReportsTo = m.EmployeeID;`,
      },
      {
        type: "practice",
        practiceLabel: "CROSS JOIN sample",
        practicePrompt:
          "CROSS JOIN Categories and Suppliers — a small Cartesian product (use LIMIT!).",
        starterCode: `SELECT c.CategoryName, s.CompanyName AS Supplier
FROM Categories c
CROSS JOIN Suppliers s
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders with employees",
        practicePrompt: "INNER JOIN Orders to Employees to see who handled each order.",
        starterCode: `SELECT
  o.OrderID,
  o.OrderDate,
  e.FirstName || ' ' || e.LastName AS Employee
FROM Orders o
INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
ORDER BY o.OrderDate DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Self JOIN links a table to itself (e.g. employee/manager).",
      "CROSS JOIN pairs every row from both tables — always use LIMIT when exploring.",
      "FULL OUTER JOIN combines unmatched rows from both sides (not native in SQLite).",
    ],
  },
};
