import type { TopicLesson } from "@/lib/types";

export const sqlModule8Lessons: Record<string, TopicLesson> = {
  "sql-m8-t1": {
    topicId: "sql-m8-t1",
    intro:
      "A view is a saved SELECT with a name — you query it like a table, but it does not store its own copy of the data. Every time you read from a view, the database re-runs the underlying query against the real tables. Views hide complexity and give analysts a stable, reusable interface.",
    blocks: [
      { type: "infographic", infographic: "sql-views-intro" },
      {
        type: "heading",
        content: "Why teams use views",
      },
      {
        type: "list",
        items: [
          "Hide multi-table JOIN logic behind one simple name",
          "Enforce consistent column naming across reports",
          "Grant read access to a subset of columns without exposing base tables",
          "Document business concepts like “active customers” or “product catalog”",
        ],
      },
      {
        type: "tip",
        content:
          "In this IDE, views you create persist for your session on the Northwind database — perfect for practicing CREATE VIEW in the next topic.",
      },
      {
        type: "practice",
        practiceLabel: "Customer order counts",
        practicePrompt:
          "Preview the kind of summary you'd wrap in a view — each customer and their order count.",
        starterCode: `SELECT
  c.CompanyName,
  c.Country,
  COUNT(o.OrderID) AS OrderCount
FROM Customers c
LEFT JOIN Orders o ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerID, c.CompanyName, c.Country
ORDER BY OrderCount DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Full product catalog",
        practicePrompt:
          "Join Products, Categories, and Suppliers — a classic catalog view definition.",
        starterCode: `SELECT
  p.ProductName,
  c.CategoryName,
  s.CompanyName AS SupplierName,
  p.UnitPrice,
  p.UnitsInStock
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID
ORDER BY c.CategoryName, p.ProductName
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Revenue by customer",
        practicePrompt:
          "Total line revenue per customer — another common view for dashboards.",
        starterCode: `SELECT
  c.CompanyName,
  ROUND(SUM(od.Quantity * od.UnitPrice * (1 - od.Discount)), 2) AS TotalRevenue
FROM Customers c
INNER JOIN Orders o ON o.CustomerID = c.CustomerID
INNER JOIN [Order Details] od ON od.OrderID = o.OrderID
GROUP BY c.CustomerID, c.CompanyName
ORDER BY TotalRevenue DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Low-stock alert preview",
        practicePrompt:
          "Products with fewer than 10 units in stock — operational view material.",
        starterCode: `SELECT
  p.ProductName,
  c.CategoryName,
  p.UnitsInStock,
  p.ReorderLevel
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
WHERE p.UnitsInStock < 10
  AND p.Discontinued = 0
ORDER BY p.UnitsInStock ASC;`,
      },
    ],
    keyTakeaways: [
      "Views are virtual tables — named queries, not stored row copies.",
      "SELECT FROM a view executes the saved SQL each time.",
      "Complex JOINs and aggregates are ideal candidates to wrap in views.",
    ],
  },
  "sql-m8-t2": {
    topicId: "sql-m8-t2",
    intro:
      "CREATE VIEW registers a query under a name you can SELECT from repeatedly. Use IF NOT EXISTS when re-running setup scripts, and DROP VIEW when you need to change the definition — SQLite replaces views by dropping and recreating them.",
    blocks: [
      { type: "infographic", infographic: "sql-creating-views" },
      {
        type: "heading",
        content: "CREATE → SELECT workflow",
      },
      {
        type: "paragraph",
        content:
          "Run CREATE VIEW once to define the view, then query it like any table. You can stack multiple statements in the IDE — create the view, then SELECT from it in the same run.",
      },
      {
        type: "practice",
        practiceLabel: "Product catalog view",
        practicePrompt:
          "Create v_ProductCatalog, then list the 10 most expensive products from the view.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_ProductCatalog AS
SELECT
  p.ProductID,
  p.ProductName,
  c.CategoryName,
  s.CompanyName AS SupplierName,
  p.UnitPrice,
  p.UnitsInStock
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID;

SELECT ProductName, CategoryName, UnitPrice
FROM v_ProductCatalog
ORDER BY UnitPrice DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Customer order summary view",
        practicePrompt:
          "Create v_CustomerOrders with order counts, then find customers with zero orders.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_CustomerOrders AS
SELECT
  c.CustomerID,
  c.CompanyName,
  c.Country,
  COUNT(o.OrderID) AS OrderCount
FROM Customers c
LEFT JOIN Orders o ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerID, c.CompanyName, c.Country;

SELECT CompanyName, Country, OrderCount
FROM v_CustomerOrders
WHERE OrderCount = 0
ORDER BY CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Premium products view",
        practicePrompt:
          "Create v_ExpensiveProducts (UnitPrice > 50) and query average price from the view.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_ExpensiveProducts AS
SELECT ProductName, UnitPrice, CategoryID
FROM Products
WHERE UnitPrice > 50;

SELECT
  COUNT(*) AS PremiumCount,
  ROUND(AVG(UnitPrice), 2) AS AvgPremiumPrice
FROM v_ExpensiveProducts;`,
      },
      {
        type: "practice",
        practiceLabel: "Category summary view",
        practicePrompt:
          "Create v_CategoryStats with product count and average price per category, then filter categories with more than 5 products.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_CategoryStats AS
SELECT
  c.CategoryID,
  c.CategoryName,
  COUNT(p.ProductID) AS ProductCount,
  ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Categories c
LEFT JOIN Products p ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryID, c.CategoryName;

SELECT CategoryName, ProductCount, AvgPrice
FROM v_CategoryStats
WHERE ProductCount > 5
ORDER BY AvgPrice DESC;`,
      },
    ],
    keyTakeaways: [
      "CREATE VIEW name AS SELECT … saves the query definition.",
      "IF NOT EXISTS prevents errors when the view already exists.",
      "DROP VIEW name before redefining a view in SQLite.",
    ],
  },
  "sql-m8-t3": {
    topicId: "sql-m8-t3",
    intro:
      "Set operations combine rows from two SELECT statements as if they were mathematical sets. UNION stacks them, INTERSECT finds overlap, EXCEPT finds rows only in the first set. Both queries must return the same number of columns with compatible types.",
    blocks: [
      { type: "infographic", infographic: "sql-set-operations-intro" },
      {
        type: "heading",
        content: "Set operation rules",
      },
      {
        type: "list",
        items: [
          "Same column count in both SELECT statements",
          "Compatible data types in each column position",
          "Column names come from the first SELECT",
          "ORDER BY applies to the final combined result (at the end)",
        ],
      },
      {
        type: "practice",
        practiceLabel: "All cities",
        practicePrompt:
          "Combine distinct Cities from Customers and Suppliers with UNION.",
        starterCode: `SELECT City FROM Customers WHERE City IS NOT NULL
UNION
SELECT City FROM Suppliers WHERE City IS NOT NULL
ORDER BY City
LIMIT 30;`,
      },
      {
        type: "practice",
        practiceLabel: "Tagged company directory",
        practicePrompt:
          "Stack customer and supplier names with a Source column using UNION ALL.",
        starterCode: `SELECT CompanyName AS Name, 'Customer' AS Source, Country
FROM Customers
UNION ALL
SELECT CompanyName AS Name, 'Supplier' AS Source, Country
FROM Suppliers
ORDER BY Country, Name
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Shared countries preview",
        practicePrompt:
          "Countries appearing in both Customers and Suppliers — INTERSECT.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
INTERSECT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Customer-only countries",
        practicePrompt:
          "Countries in Customers but not Suppliers — EXCEPT (set difference).",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
EXCEPT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
    ],
    keyTakeaways: [
      "Set operations merge row sets, not individual column values.",
      "Column count and type compatibility are required.",
      "UNION, INTERSECT, and EXCEPT each answer a different set question.",
    ],
  },
  "sql-m8-t4": {
    topicId: "sql-m8-t4",
    intro:
      "UNION merges two result sets and removes duplicate rows. UNION ALL keeps every row — faster when duplicates are impossible or acceptable. Add literal columns to tag which source each row came from.",
    blocks: [
      { type: "infographic", infographic: "sql-union-union-all" },
      {
        type: "tip",
        content:
          "Use UNION when you want a distinct combined list. Use UNION ALL when stacking labeled rows (e.g. “Customers” vs “Suppliers”) where duplicates across sources are fine.",
      },
      {
        type: "practice",
        practiceLabel: "Distinct countries",
        practicePrompt:
          "Every unique Country from Customers and Suppliers using UNION.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
UNION
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Entity headcount",
        practicePrompt:
          "Two-row summary: total customers and total suppliers via UNION ALL.",
        starterCode: `SELECT 'Customers' AS Entity, COUNT(*) AS Total FROM Customers
UNION ALL
SELECT 'Suppliers' AS Entity, COUNT(*) AS Total FROM Suppliers
UNION ALL
SELECT 'Products' AS Entity, COUNT(*) AS Total FROM Products;`,
      },
      {
        type: "practice",
        practiceLabel: "Combined contacts",
        practicePrompt:
          "Merge ContactName from Customers and Suppliers with a Role column.",
        starterCode: `SELECT ContactName, 'Customer' AS Role, City
FROM Customers
WHERE ContactName IS NOT NULL
UNION ALL
SELECT ContactName, 'Supplier' AS Role, City
FROM Suppliers
WHERE ContactName IS NOT NULL
ORDER BY ContactName
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "UNION vs UNION ALL",
        practicePrompt:
          "Compare row counts: UNION removes duplicate cities; UNION ALL keeps them all.",
        starterCode: `SELECT 'UNION' AS Method, COUNT(*) AS CityCount
FROM (
  SELECT City FROM Customers WHERE City IS NOT NULL
  UNION
  SELECT City FROM Suppliers WHERE City IS NOT NULL
)
UNION ALL
SELECT 'UNION ALL' AS Method, COUNT(*) AS CityCount
FROM (
  SELECT City FROM Customers WHERE City IS NOT NULL
  UNION ALL
  SELECT City FROM Suppliers WHERE City IS NOT NULL
);`,
      },
    ],
    keyTakeaways: [
      "UNION deduplicates across the merged result set.",
      "UNION ALL is faster when you do not need deduplication.",
      "Literal tag columns help identify row source in stacked results.",
    ],
  },
  "sql-m8-t5": {
    topicId: "sql-m8-t5",
    intro:
      "INTERSECT returns only rows that appear in both SELECT statements — set intersection. It is a clean way to find overlap between two lists without writing IN, EXISTS, or a JOIN.",
    blocks: [
      { type: "infographic", infographic: "sql-intersect" },
      {
        type: "heading",
        content: "When INTERSECT shines",
      },
      {
        type: "paragraph",
        content:
          "“Values in list A that also appear in list B” is the classic INTERSECT shape. Filter NULLs before comparing text columns — NULL never equals NULL in set logic.",
      },
      {
        type: "practice",
        practiceLabel: "Shared countries",
        practicePrompt:
          "Countries present in both Customers and Suppliers.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
INTERSECT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Shared cities",
        practicePrompt:
          "Cities that appear in both customer and supplier addresses.",
        starterCode: `SELECT City FROM Customers WHERE City IS NOT NULL
INTERSECT
SELECT City FROM Suppliers WHERE City IS NOT NULL
ORDER BY City;`,
      },
      {
        type: "practice",
        practiceLabel: "Categories with discontinued items",
        practicePrompt:
          "CategoryIDs that have at least one discontinued product.",
        starterCode: `SELECT CategoryID FROM Categories
INTERSECT
SELECT CategoryID FROM Products WHERE Discontinued = 1
ORDER BY CategoryID;`,
      },
      {
        type: "practice",
        practiceLabel: "Suppliers in customer countries",
        practicePrompt:
          "Supplier countries that also have at least one customer — INTERSECT on Country.",
        starterCode: `SELECT Country FROM Suppliers WHERE Country IS NOT NULL
INTERSECT
SELECT Country FROM Customers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
    ],
    keyTakeaways: [
      "INTERSECT keeps rows found in both result sets.",
      "Filter NULLs when comparing text columns.",
      "Often equivalent to an INNER JOIN on the compared column.",
    ],
  },
  "sql-m8-t6": {
    topicId: "sql-m8-t6",
    intro:
      "EXCEPT returns rows from the first SELECT that do not appear in the second — set difference. Order matters: A EXCEPT B is not the same as B EXCEPT A. SQLite uses EXCEPT; Oracle calls the same operation MINUS.",
    blocks: [
      { type: "infographic", infographic: "sql-except" },
      {
        type: "tip",
        content:
          "EXCEPT is asymmetric. “Customer countries minus supplier countries” and “supplier countries minus customer countries” answer different business questions.",
      },
      {
        type: "practice",
        practiceLabel: "Customer-only countries",
        practicePrompt:
          "Countries where we have customers but no suppliers.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
EXCEPT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Supplier-only countries",
        practicePrompt:
          "Reverse the EXCEPT — countries with suppliers but no customers.",
        starterCode: `SELECT Country FROM Suppliers WHERE Country IS NOT NULL
EXCEPT
SELECT Country FROM Customers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Active-only categories",
        practicePrompt:
          "CategoryIDs with no discontinued products in the catalog.",
        starterCode: `SELECT CategoryID FROM Categories
EXCEPT
SELECT CategoryID FROM Products WHERE Discontinued = 1
ORDER BY CategoryID;`,
      },
      {
        type: "practice",
        practiceLabel: "Cities with customers only",
        practicePrompt:
          "Customer cities that are not also supplier cities.",
        starterCode: `SELECT City FROM Customers WHERE City IS NOT NULL
EXCEPT
SELECT City FROM Suppliers WHERE City IS NOT NULL
ORDER BY City
LIMIT 25;`,
      },
    ],
    keyTakeaways: [
      "EXCEPT = rows in first query minus rows in second query.",
      "Order of the two SELECTs changes the answer.",
      "NOT IN and NOT EXISTS can express similar absence logic.",
    ],
  },
};
