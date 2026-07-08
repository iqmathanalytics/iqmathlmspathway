import type { TopicLesson } from "@/lib/types";

export const sqlModule7Lessons: Record<string, TopicLesson> = {
  "sql-m7-t1": {
    topicId: "sql-m7-t1",
    intro:
      "Sometimes the value you need for a filter does not exist until you query for it — the average price, the list of customer IDs who ordered last month, a summary table of revenue by region. Subqueries nest one SELECT inside another to solve exactly that.",
    blocks: [
      { type: "infographic", infographic: "sql-subqueries-intro" },
      {
        type: "heading",
        content: "Where subqueries appear",
      },
      {
        type: "list",
        items: [
          "WHERE — filter using a computed threshold or IN list",
          "SELECT — per-row scalar calculations",
          "FROM — inline derived tables (covered later in this module)",
          "HAVING — filter groups using subquery results",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Above catalog average",
        practicePrompt:
          "Products priced higher than the average UnitPrice — classic scalar subquery in WHERE.",
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
        practiceLabel: "Priced at the maximum",
        practicePrompt:
          "Products matching the single highest UnitPrice in the catalog.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice = (
  SELECT MAX(UnitPrice) FROM Products
);`,
      },
      {
        type: "practice",
        practiceLabel: "Below median-ish threshold",
        practicePrompt:
          "Products cheaper than the overall average — the inverse filter.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice < (
  SELECT AVG(UnitPrice) FROM Products
)
ORDER BY UnitPrice ASC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders after first order date",
        practicePrompt:
          "Orders placed after the earliest order in the system (scalar subquery on dates).",
        starterCode: `SELECT OrderID, OrderDate, CustomerID
FROM Orders
WHERE OrderDate > (
  SELECT MIN(OrderDate) FROM Orders WHERE OrderDate IS NOT NULL
)
ORDER BY OrderDate DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Subqueries are SELECT statements nested in parentheses.",
      "The inner query often runs first conceptually and feeds the outer query.",
      "Use table details to verify columns before writing nested logic.",
    ],
  },
  "sql-m7-t2": {
    topicId: "sql-m7-t2",
    intro:
      "IN and NOT IN test membership in a set returned by a subquery — cleaner than chaining many OR conditions. Watch NULLs in NOT IN: a single NULL in the subquery list can make the whole predicate fail unexpectedly.",
    blocks: [
      { type: "infographic", infographic: "sql-subqueries-where" },
      {
        type: "tip",
        content:
          "When NOT IN misbehaves due to NULLs, switch to NOT EXISTS — covered in the last topic of this module.",
      },
      {
        type: "practice",
        practiceLabel: "Shared supplier countries",
        practicePrompt:
          "Customers located in a country where we also have a supplier.",
        starterCode: `SELECT CompanyName, Country, City
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
        practiceLabel: "Seafood category products",
        practicePrompt:
          "Products in the Seafood category via CategoryID subquery.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE CategoryID IN (
  SELECT CategoryID FROM Categories WHERE CategoryName = 'Seafood'
)
ORDER BY UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Never sold products",
        practicePrompt:
          "Products absent from [Order Details] — filter NULL ProductIDs out of subquery.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE ProductID NOT IN (
  SELECT ProductID
  FROM [Order Details]
  WHERE ProductID IS NOT NULL
)
ORDER BY ProductName;`,
      },
      {
        type: "practice",
        practiceLabel: "Top customer countries by volume",
        practicePrompt:
          "Customers in countries with more than 4 customers (IN on grouped subquery).",
        starterCode: `SELECT CompanyName, Country
FROM Customers
WHERE Country IN (
  SELECT Country
  FROM Customers
  WHERE Country IS NOT NULL
  GROUP BY Country
  HAVING COUNT(*) > 4
)
ORDER BY Country, CompanyName;`,
      },
    ],
    keyTakeaways: [
      "IN (subquery) replaces value IN (v1, v2, …) when the list is dynamic.",
      "NOT IN requires NULL-aware subqueries or use NOT EXISTS instead.",
      "Subqueries in IN can themselves use GROUP BY and HAVING.",
    ],
  },
  "sql-m7-t3": {
    topicId: "sql-m7-t3",
    intro:
      "Scalar subqueries return exactly one value — one row, one column. They power threshold comparisons in WHERE and per-row metrics in SELECT, like each customer's order count without a GROUP BY on the outer query.",
    blocks: [
      { type: "infographic", infographic: "sql-scalar-subqueries" },
      {
        type: "practice",
        practiceLabel: "Premium vs average",
        practicePrompt:
          "Products above average price with category name via JOIN.",
        starterCode: `SELECT p.ProductName, c.CategoryName, p.UnitPrice
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
WHERE p.UnitPrice > (SELECT AVG(UnitPrice) FROM Products)
ORDER BY p.UnitPrice DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Order count in SELECT",
        practicePrompt:
          "Each customer's CompanyName and order count — scalar subquery per row.",
        starterCode: `SELECT
  c.CompanyName,
  c.Country,
  (SELECT COUNT(*) FROM Orders o WHERE o.CustomerID = c.CustomerID) AS OrderCount
FROM Customers c
ORDER BY OrderCount DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Freight vs order average",
        practicePrompt:
          "Orders whose Freight exceeds the average Freight (scalar in WHERE).",
        starterCode: `SELECT OrderID, CustomerID, Freight
FROM Orders
WHERE Freight > (
  SELECT AVG(Freight) FROM Orders
)
ORDER BY Freight DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Line total in SELECT",
        practicePrompt:
          "Per customer: company name and total line revenue (correlated scalar preview using SUM subquery).",
        starterCode: `SELECT
  c.CompanyName,
  (
    SELECT ROUND(SUM(od.Quantity * od.UnitPrice), 2)
    FROM Orders o
    INNER JOIN [Order Details] od ON od.OrderID = o.OrderID
    WHERE o.CustomerID = c.CustomerID
  ) AS TotalRevenue
FROM Customers c
ORDER BY TotalRevenue DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Scalar subqueries must return one row and one column.",
      "In SELECT, they compute a different value for each outer row.",
      "If the subquery might return multiple rows, use IN or EXISTS instead of =.",
    ],
  },
  "sql-m7-t4": {
    topicId: "sql-m7-t4",
    intro:
      "A FROM subquery builds a temporary result set — aggregate first, filter second. It is the inline cousin of a CTE: same power, slightly denser syntax. Always alias the derived table.",
    blocks: [
      { type: "infographic", infographic: "sql-subqueries-from" },
      {
        type: "heading",
        content: "Derived table pattern",
      },
      {
        type: "paragraph",
        content:
          "Inner query: GROUP BY and aggregates. Outer query: JOIN to lookup tables, ORDER BY, LIMIT. This two-step shape appears constantly in analytics SQL.",
      },
      {
        type: "practice",
        practiceLabel: "Category price dashboard",
        practicePrompt:
          "Derived stats per CategoryID, joined to Categories for readable names.",
        starterCode: `SELECT
  cat.CategoryName,
  stats.ProductCount,
  stats.AvgPrice,
  stats.MaxPrice
FROM (
  SELECT
    CategoryID,
    COUNT(*) AS ProductCount,
    ROUND(AVG(UnitPrice), 2) AS AvgPrice,
    MAX(UnitPrice) AS MaxPrice
  FROM Products
  GROUP BY CategoryID
) AS stats
INNER JOIN Categories cat ON cat.CategoryID = stats.CategoryID
ORDER BY stats.AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Top suppliers by SKU count",
        practicePrompt:
          "Subquery counts products per supplier; outer query joins Suppliers, top 8.",
        starterCode: `SELECT s.CompanyName, s.Country, pc.ProductCount
FROM (
  SELECT SupplierID, COUNT(*) AS ProductCount
  FROM Products
  GROUP BY SupplierID
) AS pc
INNER JOIN Suppliers s ON s.SupplierID = pc.SupplierID
ORDER BY pc.ProductCount DESC
LIMIT 8;`,
      },
      {
        type: "practice",
        practiceLabel: "High-value order lines",
        practicePrompt:
          "Derived table of lines over $500; join Products for names.",
        starterCode: `SELECT
  p.ProductName,
  big.OrderID,
  big.LineTotal
FROM (
  SELECT
    OrderID,
    ProductID,
    ROUND(Quantity * UnitPrice * (1 - Discount), 2) AS LineTotal
  FROM [Order Details]
  WHERE Quantity * UnitPrice > 500
) AS big
INNER JOIN Products p ON p.ProductID = big.ProductID
ORDER BY big.LineTotal DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Customer order frequency",
        practicePrompt:
          "Subquery: orders per customer; outer: join Customers, filter HAVING count > 10.",
        starterCode: `SELECT c.CompanyName, oc.OrderCount
FROM (
  SELECT CustomerID, COUNT(*) AS OrderCount
  FROM Orders
  GROUP BY CustomerID
  HAVING COUNT(*) > 10
) AS oc
INNER JOIN Customers c ON c.CustomerID = oc.CustomerID
ORDER BY oc.OrderCount DESC;`,
      },
    ],
    keyTakeaways: [
      "FROM (SELECT …) AS alias is a derived table — mandatory alias.",
      "Aggregate inside, present and filter outside.",
      "CTEs (Module 9) rewrite the same pattern for readability.",
    ],
  },
  "sql-m7-t5": {
    topicId: "sql-m7-t5",
    intro:
      "Correlated subqueries reference the outer row — the inner query re-evaluates per candidate. They express row-relative logic: “above this category's average,” “this customer's latest order,” “employees who manage someone.”",
    blocks: [
      { type: "infographic", infographic: "sql-correlated-subqueries" },
      {
        type: "practice",
        practiceLabel: "Above category average",
        practicePrompt:
          "Products priced higher than their own category's average UnitPrice.",
        starterCode: `SELECT
  p.ProductName,
  c.CategoryName,
  p.UnitPrice
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
        practiceLabel: "Managers with reports",
        practicePrompt:
          "Employees who have at least one direct report (correlated COUNT > 0).",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Manager,
  e.Title
FROM Employees e
WHERE (
  SELECT COUNT(*)
  FROM Employees r
  WHERE r.ReportsTo = e.EmployeeID
) > 0
ORDER BY Manager;`,
      },
      {
        type: "practice",
        practiceLabel: "Latest order per customer",
        practicePrompt:
          "Rows where OrderDate equals the MAX date for that customer.",
        starterCode: `SELECT
  c.CompanyName,
  o.OrderID,
  o.OrderDate
FROM Customers c
INNER JOIN Orders o ON o.CustomerID = c.CustomerID
WHERE o.OrderDate = (
  SELECT MAX(o2.OrderDate)
  FROM Orders o2
  WHERE o2.CustomerID = c.CustomerID
)
ORDER BY o.OrderDate DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Products above supplier average",
        practicePrompt:
          "Each product priced above the average price of products from the same supplier.",
        starterCode: `SELECT
  p.ProductName,
  s.CompanyName AS Supplier,
  p.UnitPrice
FROM Products p
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID
WHERE p.UnitPrice > (
  SELECT AVG(p2.UnitPrice)
  FROM Products p2
  WHERE p2.SupplierID = p.SupplierID
)
ORDER BY s.CompanyName, p.UnitPrice DESC
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "Correlation = inner query references outer table columns.",
      "Classic pattern: compare row value to aggregate scoped to that row.",
      "Often rewriteable as JOIN + GROUP BY — subqueries teach the logic clearly.",
    ],
  },
  "sql-m7-t6": {
    topicId: "sql-m7-t6",
    intro:
      "EXISTS answers “is there at least one match?” without returning subquery columns. NOT EXISTS finds rows with no partner — the NULL-safe alternative to NOT IN for absence queries.",
    blocks: [
      { type: "infographic", infographic: "sql-exists-not-exists" },
      {
        type: "heading",
        content: "EXISTS vs IN",
      },
      {
        type: "paragraph",
        content:
          "IN checks value membership in a list. EXISTS checks row presence — often faster and safer when the subquery might return NULLs or duplicate keys.",
      },
      {
        type: "practice",
        practiceLabel: "Active customers",
        practicePrompt:
          "Customers with at least one order using EXISTS.",
        starterCode: `SELECT c.CompanyName, c.Country, c.City
FROM Customers c
WHERE EXISTS (
  SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID
)
ORDER BY c.CompanyName
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Prospects only",
        practicePrompt:
          "Customers who have never placed an order — NOT EXISTS.",
        starterCode: `SELECT c.CompanyName, c.Country, c.ContactName
FROM Customers c
WHERE NOT EXISTS (
  SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID
)
ORDER BY c.Country, c.CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Suppliers without catalog",
        practicePrompt:
          "Suppliers with zero products listed — NOT EXISTS on Products.",
        starterCode: `SELECT s.CompanyName, s.Country
FROM Suppliers s
WHERE NOT EXISTS (
  SELECT 1 FROM Products p WHERE p.SupplierID = s.SupplierID
)
ORDER BY s.CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Products never discontinued",
        practicePrompt:
          "Categories that have at least one non-discontinued product (EXISTS with extra WHERE).",
        starterCode: `SELECT c.CategoryName
FROM Categories c
WHERE EXISTS (
  SELECT 1
  FROM Products p
  WHERE p.CategoryID = c.CategoryID
    AND p.Discontinued = 0
)
ORDER BY c.CategoryName;`,
      },
    ],
    keyTakeaways: [
      "EXISTS returns TRUE/FALSE — selected columns inside do not matter.",
      "SELECT 1 is idiomatic inside EXISTS subqueries.",
      "Prefer NOT EXISTS over NOT IN when testing for absence with nullable keys.",
    ],
  },
};
