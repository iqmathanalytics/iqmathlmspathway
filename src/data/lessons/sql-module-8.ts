import type { TopicLesson } from "@/lib/types";

export const sqlModule8Lessons: Record<string, TopicLesson> = {
  "sql-m8-t1": {
    topicId: "sql-m8-t1",
    intro:
      "A view is a named query you can SELECT from like a table. It does not duplicate data — it re-runs the saved SQL whenever you read from the view.",
    blocks: [
      { type: "infographic", infographic: "sql-views-intro" },
      {
        type: "practice",
        practiceLabel: "Read an existing view",
        practicePrompt:
          "Northwind may already define views. Try listing views, then query one if present — or preview customer order counts with a plain SELECT (view preview).",
        starterCode: `SELECT c.CompanyName, COUNT(o.OrderID) AS OrderCount
FROM Customers c
LEFT JOIN Orders o ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerID, c.CompanyName
ORDER BY OrderCount DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Simple catalog preview",
        practicePrompt: "Join Products, Categories, and Suppliers — this is the kind of query you'd wrap in a view.",
        starterCode: `SELECT
  p.ProductName,
  c.CategoryName,
  s.CompanyName AS SupplierName,
  p.UnitPrice
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID
ORDER BY p.UnitPrice DESC
LIMIT 12;`,
      },
    ],
    keyTakeaways: [
      "Views are virtual tables defined by a stored SELECT.",
      "Underlying tables hold the data; views simplify access.",
      "Views are ideal for reusing complex JOIN logic.",
    ],
  },
  "sql-m8-t2": {
    topicId: "sql-m8-t2",
    intro:
      "CREATE VIEW saves a query definition. After creating a view in the SQL IDE, SELECT from it by name — views persist for your session on the Northwind database.",
    blocks: [
      { type: "infographic", infographic: "sql-creating-views" },
      {
        type: "practice",
        practiceLabel: "Product catalog view",
        practicePrompt: "Create v_ProductCatalog, then SELECT the 10 most expensive products from the view.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_ProductCatalog AS
SELECT
  p.ProductID,
  p.ProductName,
  c.CategoryName,
  s.CompanyName AS SupplierName,
  p.UnitPrice
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
        practicePrompt: "Create v_CustomerOrders with CompanyName and OrderCount, then list customers with zero orders.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_CustomerOrders AS
SELECT
  c.CustomerID,
  c.CompanyName,
  COUNT(o.OrderID) AS OrderCount
FROM Customers c
LEFT JOIN Orders o ON o.CustomerID = c.CustomerID
GROUP BY c.CustomerID, c.CompanyName;

SELECT CompanyName, OrderCount
FROM v_CustomerOrders
WHERE OrderCount = 0
ORDER BY CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Expensive products view",
        practicePrompt: "Create v_ExpensiveProducts (UnitPrice > 50) and count how many rows it contains.",
        starterCode: `CREATE VIEW IF NOT EXISTS v_ExpensiveProducts AS
SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > 50;

SELECT COUNT(*) AS ExpensiveProductCount FROM v_ExpensiveProducts;`,
      },
    ],
    keyTakeaways: [
      "CREATE VIEW … AS SELECT … stores the query.",
      "Use IF NOT EXISTS to avoid errors when re-running setup.",
      "DROP VIEW removes a view before redefining it.",
    ],
  },
  "sql-m8-t3": {
    topicId: "sql-m8-t3",
    intro:
      "Set operations combine the rows from two SELECT statements — UNION stacks them, INTERSECT finds overlap, EXCEPT finds rows only in the first set.",
    blocks: [
      { type: "infographic", infographic: "sql-set-operations-intro" },
      {
        type: "practice",
        practiceLabel: "Two single-column lists",
        practicePrompt: "Combine distinct Cities from Customers and Suppliers with UNION (filter NULLs).",
        starterCode: `SELECT City FROM Customers WHERE City IS NOT NULL
UNION
SELECT City FROM Suppliers WHERE City IS NOT NULL
ORDER BY City
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Tagged sources",
        practicePrompt: "Stack customer and supplier company names with a Source column using UNION ALL.",
        starterCode: `SELECT CompanyName AS Name, 'Customer' AS Source
FROM Customers
UNION ALL
SELECT CompanyName AS Name, 'Supplier' AS Source
FROM Suppliers
ORDER BY Name
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "Both SELECTs need the same number of columns.",
      "Matching columns should have compatible types.",
      "Result column names come from the first SELECT.",
    ],
  },
  "sql-m8-t4": {
    topicId: "sql-m8-t4",
    intro:
      "UNION merges result sets and removes duplicates. UNION ALL keeps every row — faster when duplicates are acceptable or impossible.",
    blocks: [
      { type: "infographic", infographic: "sql-union-union-all" },
      {
        type: "practice",
        practiceLabel: "All countries",
        practicePrompt: "List every distinct Country from Customers and Suppliers using UNION.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
UNION
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "UNION ALL with counts",
        practicePrompt: "Use UNION ALL to build a two-row summary: total customers and total suppliers.",
        starterCode: `SELECT 'Customers' AS Entity, COUNT(*) AS Total FROM Customers
UNION ALL
SELECT 'Suppliers' AS Entity, COUNT(*) AS Total FROM Suppliers;`,
      },
      {
        type: "practice",
        practiceLabel: "Contact names",
        practicePrompt: "Combine ContactName from Customers and Suppliers with a Role column.",
        starterCode: `SELECT ContactName, 'Customer' AS Role FROM Customers
UNION ALL
SELECT ContactName, 'Supplier' AS Role FROM Suppliers
ORDER BY ContactName
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "UNION removes duplicate rows across the combined set.",
      "UNION ALL preserves duplicates — prefer it when safe.",
      "ORDER BY applies to the final combined result.",
    ],
  },
  "sql-m8-t5": {
    topicId: "sql-m8-t5",
    intro:
      "INTERSECT returns rows that appear in both queries — useful for finding overlap between two lists without writing IN or EXISTS.",
    blocks: [
      { type: "infographic", infographic: "sql-intersect" },
      {
        type: "practice",
        practiceLabel: "Shared countries",
        practicePrompt: "Countries that appear in both Customers and Suppliers.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
INTERSECT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Shared cities",
        practicePrompt: "Cities present in both customer and supplier address lists.",
        starterCode: `SELECT City FROM Customers WHERE City IS NOT NULL
INTERSECT
SELECT City FROM Suppliers WHERE City IS NOT NULL
ORDER BY City;`,
      },
      {
        type: "practice",
        practiceLabel: "Categories with discontinued products",
        practicePrompt: "CategoryIDs that have at least one discontinued product (INTERSECT Categories with discontinued Product CategoryIDs).",
        starterCode: `SELECT CategoryID FROM Categories
INTERSECT
SELECT CategoryID FROM Products WHERE Discontinued = 1
ORDER BY CategoryID;`,
      },
    ],
    keyTakeaways: [
      "INTERSECT keeps only rows found in both result sets.",
      "Filter NULLs when comparing text columns.",
      "Equivalent to inner join on the compared column in many cases.",
    ],
  },
  "sql-m8-t6": {
    topicId: "sql-m8-t6",
    intro:
      "EXCEPT returns rows from the first SELECT that are not in the second — set difference. Order matters: A EXCEPT B is not the same as B EXCEPT A.",
    blocks: [
      { type: "infographic", infographic: "sql-except" },
      {
        type: "practice",
        practiceLabel: "Customer-only countries",
        practicePrompt: "Countries in Customers but not in Suppliers.",
        starterCode: `SELECT Country FROM Customers WHERE Country IS NOT NULL
EXCEPT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Supplier-only countries",
        practicePrompt: "Reverse the EXCEPT — countries with suppliers but no customers.",
        starterCode: `SELECT Country FROM Suppliers WHERE Country IS NOT NULL
EXCEPT
SELECT Country FROM Customers WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Categories without discontinued items",
        practicePrompt: "CategoryIDs that have no discontinued products.",
        starterCode: `SELECT CategoryID FROM Categories
EXCEPT
SELECT CategoryID FROM Products WHERE Discontinued = 1
ORDER BY CategoryID;`,
      },
    ],
    keyTakeaways: [
      "EXCEPT is asymmetric — first query minus second.",
      "SQLite uses EXCEPT; Oracle uses MINUS for the same idea.",
      "NOT IN and NOT EXISTS can express similar logic.",
    ],
  },
};
