import type { TopicLesson } from "@/lib/types";

export const sqlModule7Lessons: Record<string, TopicLesson> = {
  "sql-m7-t1": {
    topicId: "sql-m7-t1",
    intro:
      "A subquery nests one SELECT inside another. Use them when the filter or data you need is itself the result of a query — averages, lists of IDs, or summary tables.",
    blocks: [
      { type: "infographic", infographic: "sql-subqueries-intro" },
      {
        type: "practice",
        practiceLabel: "Above average price",
        practicePrompt: "List products whose UnitPrice is greater than the average UnitPrice in Products.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (
  SELECT AVG(UnitPrice) FROM Products
)
ORDER BY UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Most expensive product",
        practicePrompt: "Find products with UnitPrice equal to the maximum price (scalar subquery preview).",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice = (
  SELECT MAX(UnitPrice) FROM Products
);`,
      },
    ],
    keyTakeaways: [
      "Subqueries run inside WHERE, FROM, or SELECT.",
      "The inner SELECT often computes a threshold or list of values.",
      "Parentheses wrap the nested SELECT.",
    ],
  },
  "sql-m7-t2": {
    topicId: "sql-m7-t2",
    intro:
      "IN and NOT IN compare a column to every value returned by a subquery. They are ideal for membership tests across tables.",
    blocks: [
      { type: "infographic", infographic: "sql-subqueries-where" },
      {
        type: "practice",
        practiceLabel: "Shared countries",
        practicePrompt: "Customers whose Country appears among Suppliers (use IN with DISTINCT).",
        starterCode: `SELECT CompanyName, Country
FROM Customers
WHERE Country IN (
  SELECT DISTINCT Country
  FROM Suppliers
  WHERE Country IS NOT NULL
)
ORDER BY Country, CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Categories with seafood",
        practicePrompt: "Products in the 'Seafood' category — use CategoryID from a subquery on Categories.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE CategoryID IN (
  SELECT CategoryID FROM Categories WHERE CategoryName = 'Seafood'
)
ORDER BY UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Never ordered",
        practicePrompt: "Products that never appear in Order Details (NOT IN — exclude NULL ProductIDs in subquery).",
        starterCode: `SELECT ProductName
FROM Products
WHERE ProductID NOT IN (
  SELECT ProductID
  FROM [Order Details]
  WHERE ProductID IS NOT NULL
)
ORDER BY ProductName;`,
      },
    ],
    keyTakeaways: [
      "IN matches any value in the subquery result set.",
      "NOT IN can fail silently if the subquery returns NULL — filter NULLs out.",
      "DISTINCT in the subquery avoids duplicate comparisons.",
    ],
  },
  "sql-m7-t3": {
    topicId: "sql-m7-t3",
    intro:
      "Scalar subqueries return a single value — one row, one column. Compare them with =, >, < or embed them in the SELECT list for per-row calculations.",
    blocks: [
      { type: "infographic", infographic: "sql-scalar-subqueries" },
      {
        type: "practice",
        practiceLabel: "Pricier than average",
        practicePrompt: "Products with UnitPrice above the catalog average, ordered by price.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (
  SELECT AVG(UnitPrice) FROM Products
)
ORDER BY UnitPrice DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Order count per customer",
        practicePrompt: "Show each customer's CompanyName and total order count using a scalar subquery in SELECT.",
        starterCode: `SELECT
  c.CompanyName,
  (SELECT COUNT(*) FROM Orders o WHERE o.CustomerID = c.CustomerID) AS OrderCount
FROM Customers c
ORDER BY OrderCount DESC
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Below category max",
        practicePrompt: "For 'Beverages', list products priced below that category's maximum (scalar in WHERE).",
        starterCode: `SELECT p.ProductName, p.UnitPrice
FROM Products p
WHERE p.CategoryID = (
  SELECT CategoryID FROM Categories WHERE CategoryName = 'Beverages'
)
AND p.UnitPrice < (
  SELECT MAX(UnitPrice)
  FROM Products
  WHERE CategoryID = (
    SELECT CategoryID FROM Categories WHERE CategoryName = 'Beverages'
  )
)
ORDER BY p.UnitPrice DESC;`,
      },
    ],
    keyTakeaways: [
      "Scalar subqueries must return exactly one value.",
      "Use them in WHERE for thresholds and in SELECT for per-row metrics.",
      "If multiple rows are possible, use IN instead of =.",
    ],
  },
  "sql-m7-t4": {
    topicId: "sql-m7-t4",
    intro:
      "A subquery in the FROM clause creates a derived table — aggregate or reshape data first, then query the result like any other table. Always alias it.",
    blocks: [
      { type: "infographic", infographic: "sql-subqueries-from" },
      {
        type: "practice",
        practiceLabel: "Category price stats",
        practicePrompt: "Build a derived table of CategoryID, AvgPrice, and ProductCount; join to Categories for names.",
        starterCode: `SELECT cat.CategoryName, stats.AvgPrice, stats.ProductCount
FROM (
  SELECT
    CategoryID,
    ROUND(AVG(UnitPrice), 2) AS AvgPrice,
    COUNT(*) AS ProductCount
  FROM Products
  GROUP BY CategoryID
) AS stats
INNER JOIN Categories cat ON cat.CategoryID = stats.CategoryID
ORDER BY stats.AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Top suppliers by product count",
        practicePrompt: "From a subquery counting products per SupplierID, join Suppliers and show top 5.",
        starterCode: `SELECT s.CompanyName, pc.ProductCount
FROM (
  SELECT SupplierID, COUNT(*) AS ProductCount
  FROM Products
  GROUP BY SupplierID
) AS pc
INNER JOIN Suppliers s ON s.SupplierID = pc.SupplierID
ORDER BY pc.ProductCount DESC
LIMIT 5;`,
      },
      {
        type: "practice",
        practiceLabel: "Heavy order lines",
        practicePrompt: "Derived table: lines with Quantity * UnitPrice > 500; join Products for names.",
        starterCode: `SELECT p.ProductName, big.LineTotal
FROM (
  SELECT ProductID, Quantity * UnitPrice AS LineTotal
  FROM [Order Details]
  WHERE Quantity * UnitPrice > 500
) AS big
INNER JOIN Products p ON p.ProductID = big.ProductID
ORDER BY big.LineTotal DESC
LIMIT 10;`,
      },
    ],
    keyTakeaways: [
      "FROM subqueries are inline views — require an alias.",
      "Aggregate in the subquery, then filter or join in the outer query.",
      "Same pattern as CTEs, but written inline.",
    ],
  },
  "sql-m7-t5": {
    topicId: "sql-m7-t5",
    intro:
      "Correlated subqueries reference the outer query's row. The inner SELECT re-runs for each candidate row — powerful for row-relative comparisons like 'above this category's average'.",
    blocks: [
      { type: "infographic", infographic: "sql-correlated-subqueries" },
      {
        type: "practice",
        practiceLabel: "Above category average",
        practicePrompt: "Products priced higher than the average UnitPrice in their own category.",
        starterCode: `SELECT p.ProductName, p.UnitPrice, c.CategoryName
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
WHERE p.UnitPrice > (
  SELECT AVG(p2.UnitPrice)
  FROM Products p2
  WHERE p2.CategoryID = p.CategoryID
)
ORDER BY c.CategoryName, p.UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Employees with reports",
        practicePrompt: "Employees who have at least one direct report (correlated COUNT in WHERE).",
        starterCode: `SELECT e.FirstName, e.LastName, e.Title
FROM Employees e
WHERE (
  SELECT COUNT(*)
  FROM Employees r
  WHERE r.ReportsTo = e.EmployeeID
) > 0
ORDER BY e.LastName;`,
      },
      {
        type: "practice",
        practiceLabel: "Latest order per customer",
        practicePrompt: "Customers whose most recent OrderDate equals the max for that customer (correlated MAX).",
        starterCode: `SELECT c.CompanyName, o.OrderDate
FROM Customers c
INNER JOIN Orders o ON o.CustomerID = c.CustomerID
WHERE o.OrderDate = (
  SELECT MAX(o2.OrderDate)
  FROM Orders o2
  WHERE o2.CustomerID = c.CustomerID
)
ORDER BY o.OrderDate DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Correlated subqueries tie inner and outer rows via shared columns.",
      "They express 'for this row, compute…' logic.",
      "JOINs or window functions often replace correlated subqueries in production.",
    ],
  },
  "sql-m7-t6": {
    topicId: "sql-m7-t6",
    intro:
      "EXISTS returns true when the subquery finds at least one matching row — without returning subquery data. NOT EXISTS finds rows with no match. Both handle NULLs more predictably than NOT IN.",
    blocks: [
      { type: "infographic", infographic: "sql-exists-not-exists" },
      {
        type: "practice",
        practiceLabel: "Customers with orders",
        practicePrompt: "List customers who have placed at least one order using EXISTS.",
        starterCode: `SELECT c.CompanyName, c.Country
FROM Customers c
WHERE EXISTS (
  SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID
)
ORDER BY c.CompanyName
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Customers without orders",
        practicePrompt: "Find customers who have never ordered using NOT EXISTS.",
        starterCode: `SELECT c.CompanyName, c.Country
FROM Customers c
WHERE NOT EXISTS (
  SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID
)
ORDER BY c.CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Suppliers without products",
        practicePrompt: "Suppliers with no products in the catalog (NOT EXISTS).",
        starterCode: `SELECT s.CompanyName, s.Country
FROM Suppliers s
WHERE NOT EXISTS (
  SELECT 1 FROM Products p WHERE p.SupplierID = s.SupplierID
)
ORDER BY s.CompanyName;`,
      },
    ],
    keyTakeaways: [
      "EXISTS checks for presence of matching rows — result is TRUE/FALSE.",
      "SELECT 1 inside EXISTS is a common convention.",
      "Prefer NOT EXISTS over NOT IN when NULLs may appear.",
    ],
  },
};
