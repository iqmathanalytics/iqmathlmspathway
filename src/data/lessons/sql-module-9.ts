import type { TopicLesson } from "@/lib/types";

export const sqlModule9Lessons: Record<string, TopicLesson> = {
  "sql-m9-t1": {
    topicId: "sql-m9-t1",
    intro:
      "A Common Table Expression (CTE) names a subquery at the top of your statement with WITH … AS. You read the query top-down: define intermediate steps first, then write the main SELECT that uses them. CTEs make multi-step SQL easier to follow than deeply nested subqueries.",
    blocks: [
      { type: "infographic", infographic: "sql-ctes-intro" },
      {
        type: "heading",
        content: "Basic CTE syntax",
      },
      {
        type: "paragraph",
        content:
          "WITH CteName AS (SELECT …) followed by your main query. The CTE exists only for that one statement — it is not stored like a view.",
      },
      {
        type: "practice",
        practiceLabel: "Premium products CTE",
        practicePrompt:
          "Define ExpensiveProducts (UnitPrice > 50), join Categories for names.",
        starterCode: `WITH ExpensiveProducts AS (
  SELECT ProductName, UnitPrice, CategoryID
  FROM Products
  WHERE UnitPrice > 50
)
SELECT ep.ProductName, c.CategoryName, ep.UnitPrice
FROM ExpensiveProducts ep
INNER JOIN Categories c ON c.CategoryID = ep.CategoryID
ORDER BY ep.UnitPrice DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Well-stocked inventory",
        practicePrompt:
          "CTE WellStocked: products with UnitsInStock > 50; list by stock level.",
        starterCode: `WITH WellStocked AS (
  SELECT ProductName, UnitsInStock, UnitPrice, ReorderLevel
  FROM Products
  WHERE UnitsInStock > 50
    AND Discontinued = 0
)
SELECT ProductName, UnitsInStock, UnitPrice
FROM WellStocked
ORDER BY UnitsInStock DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Recent orders CTE",
        practicePrompt:
          "CTE RecentOrders: orders from 1998; join Customers for company names.",
        starterCode: `WITH RecentOrders AS (
  SELECT OrderID, CustomerID, OrderDate, Freight
  FROM Orders
  WHERE OrderDate >= '1998-01-01'
)
SELECT ro.OrderID, c.CompanyName, ro.OrderDate, ro.Freight
FROM RecentOrders ro
INNER JOIN Customers c ON c.CustomerID = ro.CustomerID
ORDER BY ro.OrderDate DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Low-stock alert",
        practicePrompt:
          "CTE LowStock: active products below ReorderLevel; include category.",
        starterCode: `WITH LowStock AS (
  SELECT ProductName, CategoryID, UnitsInStock, ReorderLevel
  FROM Products
  WHERE UnitsInStock < ReorderLevel
    AND Discontinued = 0
)
SELECT ls.ProductName, c.CategoryName, ls.UnitsInStock, ls.ReorderLevel
FROM LowStock ls
INNER JOIN Categories c ON c.CategoryID = ls.CategoryID
ORDER BY ls.UnitsInStock ASC;`,
      },
    ],
    keyTakeaways: [
      "WITH name AS (SELECT …) declares a named result set for one query.",
      "Reference the CTE like a table in the main SELECT.",
      "CTEs improve readability for multi-step logic.",
    ],
  },
  "sql-m9-t2": {
    topicId: "sql-m9-t2",
    intro:
      "CTEs and subqueries in FROM solve the same problems — both build inline result sets. CTEs win when you want named steps, top-down readability, or when the same intermediate set is referenced more than once in one statement.",
    blocks: [
      { type: "infographic", infographic: "sql-ctes-vs-subqueries" },
      {
        type: "heading",
        content: "When to choose a CTE",
      },
      {
        type: "list",
        items: [
          "Multiple steps that deserve clear names",
          "Same subquery referenced twice in one statement",
          "Long pipelines where nested parentheses become hard to read",
          "Recursive queries (covered later in this module)",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Category averages — CTE",
        practicePrompt:
          "CategoryStats CTE with average price per category; join Categories.",
        starterCode: `WITH CategoryStats AS (
  SELECT
    CategoryID,
    COUNT(*) AS ProductCount,
    ROUND(AVG(UnitPrice), 2) AS AvgPrice
  FROM Products
  GROUP BY CategoryID
)
SELECT c.CategoryName, cs.ProductCount, cs.AvgPrice
FROM CategoryStats cs
INNER JOIN Categories c ON c.CategoryID = cs.CategoryID
ORDER BY cs.AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Above and below average",
        practicePrompt:
          "CTE AvgPrice = catalog average; UNION ALL products above and below.",
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
      {
        type: "practice",
        practiceLabel: "Same logic as derived table",
        practicePrompt:
          "Rewrite a FROM subquery as a CTE — supplier product counts.",
        starterCode: `WITH SupplierCounts AS (
  SELECT SupplierID, COUNT(*) AS ProductCount
  FROM Products
  GROUP BY SupplierID
)
SELECT s.CompanyName, sc.ProductCount
FROM SupplierCounts sc
INNER JOIN Suppliers s ON s.SupplierID = sc.SupplierID
ORDER BY sc.ProductCount DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Filter using CTE threshold",
        practicePrompt:
          "CTE HighFreightOrders (Freight > 100); join Customers, list top freight.",
        starterCode: `WITH HighFreightOrders AS (
  SELECT OrderID, CustomerID, Freight
  FROM Orders
  WHERE Freight > 100
)
SELECT c.CompanyName, h.OrderID, h.Freight
FROM HighFreightOrders h
INNER JOIN Customers c ON c.CustomerID = h.CustomerID
ORDER BY h.Freight DESC
LIMIT 12;`,
      },
    ],
    keyTakeaways: [
      "CTEs and derived tables are often interchangeable.",
      "CTEs are easier to read when logic has multiple named steps.",
      "Referencing a CTE twice avoids duplicating an identical subquery.",
    ],
  },
  "sql-m9-t3": {
    topicId: "sql-m9-t3",
    intro:
      "One WITH clause can define many CTEs separated by commas. Later CTEs can reference earlier ones — building a pipeline from raw tables to a final report, one step at a time.",
    blocks: [
      { type: "infographic", infographic: "sql-multiple-ctes" },
      {
        type: "tip",
        content:
          "Name each CTE after what it represents — OrderTotals, BigOrders, TopCustomers — so readers can follow the pipeline without parsing nested SQL.",
      },
      {
        type: "practice",
        practiceLabel: "Big orders pipeline",
        practicePrompt:
          "OrderTotals → BigOrders (> 1000) → join Customers for company names.",
        starterCode: `WITH
  OrderTotals AS (
    SELECT
      OrderID,
      ROUND(SUM(Quantity * UnitPrice * (1 - Discount)), 2) AS OrderTotal
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
        practiceLabel: "Top sellers pipeline",
        practicePrompt:
          "ProductSales CTE → TopSellers (> 200 units) → join Products.",
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
ORDER BY ts.UnitsSold DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Three-step customer ranking",
        practicePrompt:
          "CustomerOrders → ActiveCustomers (> 5 orders) → join for country.",
        starterCode: `WITH
  CustomerOrders AS (
    SELECT CustomerID, COUNT(*) AS OrderCount
    FROM Orders
    GROUP BY CustomerID
  ),
  ActiveCustomers AS (
    SELECT CustomerID, OrderCount
    FROM CustomerOrders
    WHERE OrderCount > 5
  )
SELECT c.CompanyName, c.Country, ac.OrderCount
FROM ActiveCustomers ac
INNER JOIN Customers c ON c.CustomerID = ac.CustomerID
ORDER BY ac.OrderCount DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Category price tiers",
        practicePrompt:
          "CategoryStats → PremiumCategories (AvgPrice > 30) → final report.",
        starterCode: `WITH
  CategoryStats AS (
    SELECT CategoryID, ROUND(AVG(UnitPrice), 2) AS AvgPrice, COUNT(*) AS ProductCount
    FROM Products
    GROUP BY CategoryID
  ),
  PremiumCategories AS (
    SELECT CategoryID, AvgPrice, ProductCount
    FROM CategoryStats
    WHERE AvgPrice > 30
  )
SELECT c.CategoryName, pc.AvgPrice, pc.ProductCount
FROM PremiumCategories pc
INNER JOIN Categories c ON c.CategoryID = pc.CategoryID
ORDER BY pc.AvgPrice DESC;`,
      },
    ],
    keyTakeaways: [
      "Comma-separate multiple CTEs after a single WITH.",
      "Later CTEs may reference earlier CTEs in the same statement.",
      "Pipelines make complex reports easier to follow step by step.",
    ],
  },
  "sql-m9-t4": {
    topicId: "sql-m9-t4",
    intro:
      "Aggregate inside a CTE, then JOIN to dimension tables and filter on the summary. This pattern keeps GROUP BY logic separate from presentation — the workhorse of analytics SQL.",
    blocks: [
      { type: "infographic", infographic: "sql-ctes-joins-aggregates" },
      {
        type: "heading",
        content: "Aggregate-then-join pattern",
      },
      {
        type: "paragraph",
        content:
          "Step 1: GROUP BY in the CTE to produce facts (revenue, counts, averages). Step 2: JOIN to Customers, Categories, or Suppliers for readable labels. Step 3: ORDER BY and LIMIT for top-N reports.",
      },
      {
        type: "practice",
        practiceLabel: "Top customers by revenue",
        practicePrompt:
          "CustomerRevenue CTE with SUM(line totals); join Customers, top 10.",
        starterCode: `WITH CustomerRevenue AS (
  SELECT
    o.CustomerID,
    ROUND(SUM(od.Quantity * od.UnitPrice * (1 - od.Discount)), 2) AS TotalRevenue
  FROM Orders o
  INNER JOIN [Order Details] od ON od.OrderID = o.OrderID
  GROUP BY o.CustomerID
)
SELECT c.CompanyName, c.Country, cr.TotalRevenue
FROM CustomerRevenue cr
INNER JOIN Customers c ON c.CustomerID = cr.CustomerID
ORDER BY cr.TotalRevenue DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Prolific suppliers",
        practicePrompt:
          "SupplierCounts CTE; join Suppliers; filter suppliers with 5+ products.",
        starterCode: `WITH SupplierCounts AS (
  SELECT SupplierID, COUNT(*) AS ProductCount
  FROM Products
  GROUP BY SupplierID
)
SELECT s.CompanyName, s.Country, sc.ProductCount
FROM SupplierCounts sc
INNER JOIN Suppliers s ON s.SupplierID = sc.SupplierID
WHERE sc.ProductCount >= 5
ORDER BY sc.ProductCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Category revenue ranking",
        practicePrompt:
          "Sum revenue by category in a CTE; join Categories, order by revenue.",
        starterCode: `WITH CategoryRevenue AS (
  SELECT
    p.CategoryID,
    SUM(od.Quantity * od.UnitPrice * (1 - od.Discount)) AS Revenue
  FROM [Order Details] od
  INNER JOIN Products p ON p.ProductID = od.ProductID
  GROUP BY p.CategoryID
)
SELECT c.CategoryName, ROUND(cr.Revenue, 2) AS Revenue
FROM CategoryRevenue cr
INNER JOIN Categories c ON c.CategoryID = cr.CategoryID
ORDER BY cr.Revenue DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Monthly order volume",
        practicePrompt:
          "OrdersByMonth CTE with COUNT per year-month; list busiest months.",
        starterCode: `WITH OrdersByMonth AS (
  SELECT
    strftime('%Y-%m', OrderDate) AS YearMonth,
    COUNT(*) AS OrderCount
  FROM Orders
  WHERE OrderDate IS NOT NULL
  GROUP BY strftime('%Y-%m', OrderDate)
)
SELECT YearMonth, OrderCount
FROM OrdersByMonth
ORDER BY OrderCount DESC
LIMIT 12;`,
      },
    ],
    keyTakeaways: [
      "Aggregate in the CTE; join and filter in the outer query.",
      "Keeps GROUP BY columns out of wide presentation SELECT lists.",
      "Natural pattern for top-N and dashboard-style reports.",
    ],
  },
  "sql-m9-t5": {
    topicId: "sql-m9-t5",
    intro:
      "WITH RECURSIVE runs a CTE that references itself. An anchor query seeds the first rows; UNION ALL adds rows from a recursive part until no new rows appear. Always include a stop condition — without it, recursion runs until the database limits it.",
    blocks: [
      { type: "infographic", infographic: "sql-recursive-ctes-intro" },
      {
        type: "heading",
        content: "Recursive CTE structure",
      },
      {
        type: "list",
        items: [
          "WITH RECURSIVE name AS ( … )",
          "Anchor SELECT — starting rows (no self-reference)",
          "UNION ALL",
          "Recursive SELECT — references the CTE name, with a WHERE that eventually stops",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Numbers 1 through 10",
        practicePrompt:
          "Classic recursive demo: generate integers 1 to 10.",
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
        practicePrompt:
          "Recursive CTE: 1, 2, 4, 8, … up to 128.",
        starterCode: `WITH RECURSIVE powers(p) AS (
  SELECT 1
  UNION ALL
  SELECT p * 2 FROM powers WHERE p < 128
)
SELECT p FROM powers;`,
      },
      {
        type: "practice",
        practiceLabel: "Countdown from 10",
        practicePrompt:
          "Recursive CTE counting down: 10, 9, 8, … 1.",
        starterCode: `WITH RECURSIVE countdown(n) AS (
  SELECT 10
  UNION ALL
  SELECT n - 1 FROM countdown WHERE n > 1
)
SELECT n FROM countdown;`,
      },
      {
        type: "practice",
        practiceLabel: "Date sequence",
        practicePrompt:
          "Generate 7 consecutive dates starting from the earliest order date.",
        starterCode: `WITH RECURSIVE date_seq(d) AS (
  SELECT MIN(OrderDate) FROM Orders WHERE OrderDate IS NOT NULL
  UNION ALL
  SELECT date(d, '+1 day') FROM date_seq WHERE d < date((SELECT MIN(OrderDate) FROM Orders), '+6 days')
)
SELECT d AS OrderDate FROM date_seq;`,
      },
    ],
    keyTakeaways: [
      "Recursive CTEs require WITH RECURSIVE in SQLite.",
      "Anchor + UNION ALL + recursive SELECT is the standard shape.",
      "Always include a condition that stops recursion.",
    ],
  },
  "sql-m9-t6": {
    topicId: "sql-m9-t6",
    intro:
      "Northwind employees form a tree via ReportsTo — each employee points to their manager's EmployeeID. A recursive CTE walks from top managers down through every report, tracking depth with a Level column for indentation and filtering.",
    blocks: [
      { type: "infographic", infographic: "sql-recursive-employee-hierarchy" },
      {
        type: "tip",
        content:
          "ReportsTo IS NULL identifies top-level executives with no manager. The recursive part joins Employees.ReportsTo to the CTE's EmployeeID to walk down one level at a time.",
      },
      {
        type: "practice",
        practiceLabel: "Full org chart",
        practicePrompt:
          "OrgChart recursive CTE from employees with no manager; show Level and full name.",
        starterCode: `WITH RECURSIVE OrgChart AS (
  SELECT EmployeeID, FirstName, LastName, Title, ReportsTo, 0 AS Level
  FROM Employees
  WHERE ReportsTo IS NULL

  UNION ALL

  SELECT e.EmployeeID, e.FirstName, e.LastName, e.Title, e.ReportsTo, oc.Level + 1
  FROM Employees e
  INNER JOIN OrgChart oc ON e.ReportsTo = oc.EmployeeID
)
SELECT
  Level,
  FirstName || ' ' || LastName AS FullName,
  Title
FROM OrgChart
ORDER BY Level, FullName;`,
      },
      {
        type: "practice",
        practiceLabel: "Subtree from one manager",
        practicePrompt:
          "Start recursion from EmployeeID 2 (Andrew Fuller) instead of NULL anchor.",
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
        practicePrompt:
          "Non-recursive baseline: employees who report directly to EmployeeID 2.",
        starterCode: `SELECT
  FirstName || ' ' || LastName AS FullName,
  Title,
  ReportsTo
FROM Employees
WHERE ReportsTo = 2
ORDER BY LastName;`,
      },
      {
        type: "practice",
        practiceLabel: "Headcount by level",
        practicePrompt:
          "Build the full OrgChart recursively, then COUNT employees at each hierarchy level.",
        starterCode: `WITH RECURSIVE OrgChart AS (
  SELECT EmployeeID, FirstName, LastName, Title, 0 AS Level
  FROM Employees
  WHERE ReportsTo IS NULL

  UNION ALL

  SELECT e.EmployeeID, e.FirstName, e.LastName, e.Title, oc.Level + 1
  FROM Employees e
  INNER JOIN OrgChart oc ON e.ReportsTo = oc.EmployeeID
)
SELECT Level, COUNT(*) AS Headcount
FROM OrgChart
GROUP BY Level
ORDER BY Level;`,
      },
    ],
    keyTakeaways: [
      "ReportsTo links each employee to their manager's EmployeeID.",
      "Anchor picks roots; recursive part follows ReportsTo edges downward.",
      "Level helps display hierarchy depth and limit how far recursion goes.",
    ],
  },
};
