import type { TopicLesson } from "@/lib/types";

export const sqlModule9Lessons: Record<string, TopicLesson> = {
  "sql-m9-t1": {
    topicId: "sql-m9-t1",
    intro:
      "A Common Table Expression (CTE) names a subquery with WITH … AS. You read the query top-down: define intermediate results first, then write the main SELECT that uses them.",
    blocks: [
      { type: "infographic", infographic: "sql-ctes-intro" },
      {
        type: "practice",
        practiceLabel: "Expensive products CTE",
        practicePrompt: "Define ExpensiveProducts (UnitPrice > 50), join Categories, list by price.",
        starterCode: `WITH ExpensiveProducts AS (
  SELECT ProductName, UnitPrice, CategoryID
  FROM Products
  WHERE UnitPrice > 50
)
SELECT ep.ProductName, c.CategoryName, ep.UnitPrice
FROM ExpensiveProducts ep
INNER JOIN Categories c ON c.CategoryID = ep.CategoryID
ORDER BY ep.UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "High-stock CTE",
        practicePrompt: "CTE WellStocked: products with UnitsInStock > 50; select name and stock.",
        starterCode: `WITH WellStocked AS (
  SELECT ProductName, UnitsInStock, UnitPrice
  FROM Products
  WHERE UnitsInStock > 50
)
SELECT ProductName, UnitsInStock, UnitPrice
FROM WellStocked
ORDER BY UnitsInStock DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "WITH name AS (SELECT …) declares a named result set.",
      "Reference the CTE like a table in the following query.",
      "CTEs improve readability for multi-step logic.",
    ],
  },
  "sql-m9-t2": {
    topicId: "sql-m9-t2",
    intro:
      "CTEs and subqueries in FROM solve similar problems. CTEs shine when you want clear step names or when the same intermediate set is used more than once in one statement.",
    blocks: [
      { type: "infographic", infographic: "sql-ctes-vs-subqueries" },
      {
        type: "practice",
        practiceLabel: "Category averages — CTE version",
        practicePrompt: "Rewrite category average price logic using WITH CategoryStats.",
        starterCode: `WITH CategoryStats AS (
  SELECT CategoryID, ROUND(AVG(UnitPrice), 2) AS AvgPrice
  FROM Products
  GROUP BY CategoryID
)
SELECT c.CategoryName, cs.AvgPrice
FROM CategoryStats cs
INNER JOIN Categories c ON c.CategoryID = cs.CategoryID
ORDER BY cs.AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Reuse the CTE twice",
        practicePrompt: "CTE AvgPrice = overall average; list products above and below that average using two references.",
        starterCode: `WITH AvgPrice AS (
  SELECT AVG(UnitPrice) AS CatalogAvg FROM Products
)
SELECT 'Above avg' AS Bucket, p.ProductName, p.UnitPrice
FROM Products p, AvgPrice a
WHERE p.UnitPrice > a.CatalogAvg
UNION ALL
SELECT 'Below avg', p.ProductName, p.UnitPrice
FROM Products p, AvgPrice a
WHERE p.UnitPrice <= a.CatalogAvg
ORDER BY Bucket, UnitPrice DESC
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "CTEs and derived tables are often interchangeable.",
      "CTEs are easier to read when logic has multiple steps.",
      "Referencing a CTE twice avoids duplicating a subquery.",
    ],
  },
  "sql-m9-t3": {
    topicId: "sql-m9-t3",
    intro:
      "One WITH clause can define many CTEs separated by commas. Later CTEs can build on earlier ones — a pipeline from raw tables to final report.",
    blocks: [
      { type: "infographic", infographic: "sql-multiple-ctes" },
      {
        type: "practice",
        practiceLabel: "Big orders pipeline",
        practicePrompt: "OrderTotals → BigOrders (> 1000) → join Customers for company names.",
        starterCode: `WITH
  OrderTotals AS (
    SELECT OrderID, SUM(Quantity * UnitPrice) AS OrderTotal
    FROM [Order Details]
    GROUP BY OrderID
  ),
  BigOrders AS (
    SELECT OrderID, OrderTotal
    FROM OrderTotals
    WHERE OrderTotal > 1000
  )
SELECT o.OrderID, c.CompanyName, bo.OrderTotal
FROM BigOrders bo
INNER JOIN Orders o ON o.OrderID = bo.OrderID
INNER JOIN Customers c ON c.CustomerID = o.CustomerID
ORDER BY bo.OrderTotal DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Three-step product ranking",
        practicePrompt: "ProductSales CTE, then TopSellers (> 200 units), then join Products.",
        starterCode: `WITH
  ProductSales AS (
    SELECT ProductID, SUM(Quantity) AS UnitsSold
    FROM [Order Details]
    GROUP BY ProductID
  ),
  TopSellers AS (
    SELECT ProductID, UnitsSold
    FROM ProductSales
    WHERE UnitsSold > 200
  )
SELECT p.ProductName, ts.UnitsSold
FROM TopSellers ts
INNER JOIN Products p ON p.ProductID = ts.ProductID
ORDER BY ts.UnitsSold DESC;`,
      },
    ],
    keyTakeaways: [
      "Comma-separate multiple CTEs after a single WITH.",
      "Later CTEs may reference earlier CTEs in the same query.",
      "Pipelines make complex reports easier to follow.",
    ],
  },
  "sql-m9-t4": {
    topicId: "sql-m9-t4",
    intro:
      "Aggregate inside a CTE, then JOIN to dimension tables and filter on the summary. This pattern keeps GROUP BY logic separate from presentation.",
    blocks: [
      { type: "infographic", infographic: "sql-ctes-joins-aggregates" },
      {
        type: "practice",
        practiceLabel: "Top customers by revenue",
        practicePrompt: "CustomerRevenue CTE with SUM(line totals); join Customers, top 10.",
        starterCode: `WITH CustomerRevenue AS (
  SELECT
    o.CustomerID,
    ROUND(SUM(od.Quantity * od.UnitPrice), 2) AS TotalRevenue
  FROM Orders o
  INNER JOIN [Order Details] od ON od.OrderID = o.OrderID
  GROUP BY o.CustomerID
)
SELECT c.CompanyName, cr.TotalRevenue
FROM CustomerRevenue cr
INNER JOIN Customers c ON c.CustomerID = cr.CustomerID
ORDER BY cr.TotalRevenue DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Supplier product counts",
        practicePrompt: "CTE counts products per supplier; join Suppliers, HAVING-equivalent filter in outer WHERE.",
        starterCode: `WITH SupplierCounts AS (
  SELECT SupplierID, COUNT(*) AS ProductCount
  FROM Products
  GROUP BY SupplierID
)
SELECT s.CompanyName, sc.ProductCount
FROM SupplierCounts sc
INNER JOIN Suppliers s ON s.SupplierID = sc.SupplierID
WHERE sc.ProductCount >= 5
ORDER BY sc.ProductCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Category revenue share",
        practicePrompt: "Sum revenue by category in a CTE; join Categories and order by revenue.",
        starterCode: `WITH CategoryRevenue AS (
  SELECT
    p.CategoryID,
    SUM(od.Quantity * od.UnitPrice) AS Revenue
  FROM [Order Details] od
  INNER JOIN Products p ON p.ProductID = od.ProductID
  GROUP BY p.CategoryID
)
SELECT c.CategoryName, ROUND(cr.Revenue, 2) AS Revenue
FROM CategoryRevenue cr
INNER JOIN Categories c ON c.CategoryID = cr.CategoryID
ORDER BY cr.Revenue DESC;`,
      },
    ],
    keyTakeaways: [
      "Aggregate in the CTE, join and filter in the outer query.",
      "Keeps GROUP BY columns out of wide SELECT lists.",
      "Natural pattern for top-N per group reports.",
    ],
  },
  "sql-m9-t5": {
    topicId: "sql-m9-t5",
    intro:
      "WITH RECURSIVE runs a CTE that references itself. An anchor query seeds rows; UNION ALL adds rows from a recursive part until no new rows appear.",
    blocks: [
      { type: "infographic", infographic: "sql-recursive-ctes-intro" },
      {
        type: "practice",
        practiceLabel: "Numbers 1–10",
        practicePrompt: "Classic recursive demo: generate integers 1 through 10.",
        starterCode: `WITH RECURSIVE nums(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM nums WHERE n < 10
)
SELECT n FROM nums;`,
      },
      {
        type: "practice",
        practiceLabel: "Powers of two",
        practicePrompt: "Recursive CTE: 1, 2, 4, 8, … up to 128.",
        starterCode: `WITH RECURSIVE powers(p) AS (
  SELECT 1
  UNION ALL
  SELECT p * 2 FROM powers WHERE p < 128
)
SELECT p FROM powers;`,
      },
      {
        type: "practice",
        practiceLabel: "Count employees by level",
        practicePrompt: "Preview: list employees with ReportsTo IS NULL (managers with no boss).",
        starterCode: `SELECT EmployeeID, FirstName, LastName, Title, ReportsTo
FROM Employees
WHERE ReportsTo IS NULL;`,
      },
    ],
    keyTakeaways: [
      "Recursive CTEs need WITH RECURSIVE in SQLite.",
      "Anchor + UNION ALL + recursive SELECT is the standard shape.",
      "Always include a condition that stops recursion.",
    ],
  },
  "sql-m9-t6": {
    topicId: "sql-m9-t6",
    intro:
      "Northwind employees form a tree via ReportsTo. A recursive CTE walks from top managers down through every report, tracking depth with a Level column.",
    blocks: [
      { type: "infographic", infographic: "sql-recursive-employee-hierarchy" },
      {
        type: "practice",
        practiceLabel: "Full org chart",
        practicePrompt: "Build OrgChart recursive CTE from employees with no manager; show Level and full name.",
        starterCode: `WITH RECURSIVE OrgChart AS (
  SELECT EmployeeID, FirstName, LastName, Title, ReportsTo, 0 AS Level
  FROM Employees
  WHERE ReportsTo IS NULL

  UNION ALL

  SELECT e.EmployeeID, e.FirstName, e.LastName, e.Title, e.ReportsTo, oc.Level + 1
  FROM Employees e
  INNER JOIN OrgChart oc ON e.ReportsTo = oc.EmployeeID
)
SELECT Level, FirstName || ' ' || LastName AS FullName, Title
FROM OrgChart
ORDER BY Level, FullName;`,
      },
      {
        type: "practice",
        practiceLabel: "Subtree from one manager",
        practicePrompt: "Start recursion from EmployeeID 2 (Andrew Fuller) instead of NULL anchor.",
        starterCode: `WITH RECURSIVE Subtree AS (
  SELECT EmployeeID, FirstName, LastName, Title, 0 AS Level
  FROM Employees
  WHERE EmployeeID = 2

  UNION ALL

  SELECT e.EmployeeID, e.FirstName, e.LastName, e.Title, st.Level + 1
  FROM Employees e
  INNER JOIN Subtree st ON e.ReportsTo = st.EmployeeID
)
SELECT Level, FirstName || ' ' || LastName AS FullName, Title
FROM Subtree
ORDER BY Level, FullName;`,
      },
      {
        type: "practice",
        practiceLabel: "Direct reports only",
        practicePrompt: "Non-recursive: employees who report to EmployeeID 2.",
        starterCode: `SELECT FirstName || ' ' || LastName AS FullName, Title
FROM Employees
WHERE ReportsTo = 2
ORDER BY LastName;`,
      },
    ],
    keyTakeaways: [
      "ReportsTo links each employee to their manager's EmployeeID.",
      "Anchor picks roots; recursive part follows ReportsTo edges.",
      "Level helps display indentation and limit depth.",
    ],
  },
};
