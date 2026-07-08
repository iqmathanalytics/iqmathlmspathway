import type { TopicLesson } from "@/lib/types";

export const sqlModule2Lessons: Record<string, TopicLesson> = {
  "sql-m2-t1": {
    topicId: "sql-m2-t1",
    intro:
      "SELECT is the heartbeat of SQL — every report, dashboard, and API read starts here. From Module 2 onward you work with Northwind Traders, a fictional import/export company with customers, products, orders, and employees. Your job is to ask precise questions and let the database answer.",
    blocks: [
      { type: "infographic", infographic: "sql-select-statement" },
      {
        type: "heading",
        content: "Anatomy of a SELECT",
      },
      {
        type: "list",
        items: [
          "SELECT — which columns (or expressions) appear in the result",
          "FROM — which table supplies the rows",
          "Optional clauses (WHERE, ORDER BY, LIMIT) refine the output — covered in this module and the next",
        ],
      },
      {
        type: "tip",
        content:
          "Use View table details in the SQL IDE panel to inspect Northwind schemas and sample rows before writing queries.",
      },
      {
        type: "practice",
        practiceLabel: "Map the database",
        practicePrompt:
          "List every user table in Northwind. You should see Customers, Products, Orders, Order Details, and more — this is your map for the rest of the course.",
        starterCode: `SELECT name
FROM sqlite_master
WHERE type = 'table'
  AND name NOT LIKE 'sqlite_%'
ORDER BY name;`,
      },
      {
        type: "practice",
        practiceLabel: "Customer directory",
        practicePrompt:
          "Pull CustomerID, CompanyName, ContactName, and Country for 12 customers. Name columns explicitly — avoid SELECT * in production.",
        starterCode: `SELECT
  CustomerID,
  CompanyName,
  ContactName,
  Country
FROM Customers
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Product price list",
        practicePrompt:
          "Show ProductID, ProductName, UnitPrice, and UnitsInStock. Order by price descending to see premium items first.",
        starterCode: `SELECT
  ProductID,
  ProductName,
  UnitPrice,
  UnitsInStock
FROM Products
ORDER BY UnitPrice DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Row counts",
        practicePrompt:
          "How large is each core table? Count rows in Customers, Products, and Orders — useful before writing heavy queries.",
        starterCode: `SELECT 'Customers' AS entity, COUNT(*) AS row_count FROM Customers
UNION ALL
SELECT 'Products', COUNT(*) FROM Products
UNION ALL
SELECT 'Orders', COUNT(*) FROM Orders;`,
      },
    ],
    keyTakeaways: [
      "SELECT … FROM … reads rows from one table.",
      "Northwind models a real business: customers order products via order headers and line items.",
      "List columns by name; use the table details panel to learn schemas quickly.",
    ],
  },
  "sql-m2-t2": {
    topicId: "sql-m2-t2",
    intro:
      "Raw column names are not always presentation-ready. Aliases rename output for reports, and expressions compute new values — tax-inclusive prices, full names, margins — without changing stored data.",
    blocks: [
      { type: "infographic", infographic: "sql-column-aliases" },
      {
        type: "heading",
        content: "Expressions in SELECT",
      },
      {
        type: "paragraph",
        content:
          "Anything you put in the SELECT list is evaluated per row. Arithmetic works on numbers; || concatenates text in SQLite. ROUND() keeps currency readable. The AS keyword labels the result column — aliases exist only in the query output.",
      },
      {
        type: "practice",
        practiceLabel: "GST-inclusive pricing",
        practicePrompt:
          "For each product, show name, base price, and PriceWithGST at 18%. Round to 2 decimal places.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice * 1.18, 2) AS PriceWithGST
FROM Products
ORDER BY UnitPrice DESC
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Employee roster",
        practicePrompt:
          "Build FullName from FirstName and LastName. Include Title and City — this is how HR exports look.",
        starterCode: `SELECT
  EmployeeID,
  FirstName || ' ' || LastName AS FullName,
  Title,
  City,
  Country
FROM Employees
ORDER BY LastName, FirstName;`,
      },
      {
        type: "practice",
        practiceLabel: "Order freight summary",
        practicePrompt:
          "From Orders, show OrderID, CustomerID, OrderDate, and Freight rounded to 2 decimals as FreightUSD.",
        starterCode: `SELECT
  OrderID,
  CustomerID,
  OrderDate,
  ROUND(Freight, 2) AS FreightUSD
FROM Orders
ORDER BY OrderDate DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Stock value estimate",
        practicePrompt:
          "Estimate inventory value per product: UnitsInStock * UnitPrice as StockValue. Show top 10 by value.",
        starterCode: `SELECT
  ProductName,
  UnitsInStock,
  UnitPrice,
  ROUND(UnitsInStock * UnitPrice, 2) AS StockValue
FROM Products
WHERE UnitsInStock > 0
ORDER BY StockValue DESC
LIMIT 10;`,
      },
    ],
    keyTakeaways: [
      "AS renames a column in the result — the underlying table is unchanged.",
      "Use || for string concatenation and ROUND for display precision in SQLite.",
      "Calculated columns are ideal for reports without altering schema.",
    ],
  },
  "sql-m2-t3": {
    topicId: "sql-m2-t3",
    intro:
      "DISTINCT collapses duplicate rows — essential for unique country lists or category sets. LIMIT caps result size; combined with ORDER BY it powers every “top N” report in analytics.",
    blocks: [
      { type: "infographic", infographic: "sql-distinct-limit" },
      {
        type: "heading",
        content: "Top-N pattern",
      },
      {
        type: "paragraph",
        content:
          "The recipe is always ORDER BY metric DESC (or ASC) then LIMIT n. Without ORDER BY, LIMIT returns an arbitrary slice — never use it alone for “top” or “bottom” lists.",
      },
      {
        type: "practice",
        practiceLabel: "Markets we serve",
        practicePrompt:
          "List every distinct customer country, sorted A→Z. How many unique markets does Northwind sell into?",
        starterCode: `SELECT DISTINCT Country
FROM Customers
WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Top 5 premium products",
        practicePrompt:
          "The five most expensive products by UnitPrice. Include ProductName and price.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
ORDER BY UnitPrice DESC
LIMIT 5;`,
      },
      {
        type: "practice",
        practiceLabel: "Cheapest in-stock items",
        practicePrompt:
          "Five cheapest products that still have UnitsInStock > 0 — ORDER BY ascending.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE UnitsInStock > 0
ORDER BY UnitPrice ASC
LIMIT 5;`,
      },
      {
        type: "practice",
        practiceLabel: "Distinct supplier countries",
        practicePrompt:
          "Which countries do our suppliers operate from? Use DISTINCT on Suppliers.Country.",
        starterCode: `SELECT DISTINCT Country
FROM Suppliers
WHERE Country IS NOT NULL
ORDER BY Country;`,
      },
    ],
    keyTakeaways: [
      "DISTINCT removes duplicate combinations of selected columns.",
      "ORDER BY + LIMIT implements top-N and bottom-N queries.",
      "Filter with WHERE before DISTINCT when you need to exclude NULLs or subsets.",
    ],
  },
  "sql-m2-t4": {
    topicId: "sql-m2-t4",
    intro:
      "NULL is not zero and not an empty string — it means “unknown” or “not applicable.” Mishandling NULL breaks filters, joins, and aggregates. Northwind’s optional Region and Fax columns are perfect practice ground.",
    blocks: [
      { type: "infographic", infographic: "sql-null-handling" },
      {
        type: "heading",
        content: "Three rules of NULL",
      },
      {
        type: "list",
        items: [
          "Comparisons with = or <> to NULL are always unknown — use IS NULL / IS NOT NULL",
          "COALESCE(value, fallback) replaces NULL for display",
          "COUNT(column) ignores NULLs; COUNT(*) counts all rows",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Missing region",
        practicePrompt:
          "Find customers with no Region (IS NULL). Show CompanyName, Country, and Region.",
        starterCode: `SELECT CompanyName, Country, Region
FROM Customers
WHERE Region IS NULL
ORDER BY Country, CompanyName
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Friendly region labels",
        practicePrompt:
          "Use COALESCE(Region, 'Not specified') so reports never show blank regions.",
        starterCode: `SELECT
  CompanyName,
  Country,
  COALESCE(Region, 'Not specified') AS Region
FROM Customers
ORDER BY Country, CompanyName
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Products without reorder level",
        practicePrompt:
          "List products where ReorderLevel IS NULL — inventory policy was never set.",
        starterCode: `SELECT ProductName, UnitsInStock, ReorderLevel, Discontinued
FROM Products
WHERE ReorderLevel IS NULL
ORDER BY ProductName;`,
      },
      {
        type: "practice",
        practiceLabel: "NULL-safe contact check",
        practicePrompt:
          "Customers missing a Fax number. Use IS NULL — empty string would need a different filter.",
        starterCode: `SELECT CompanyName, Phone, Fax
FROM Customers
WHERE Fax IS NULL
ORDER BY CompanyName
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Never write WHERE col = NULL — always IS NULL or IS NOT NULL.",
      "COALESCE provides human-readable defaults in SELECT lists.",
      "NULL propagates through expressions unless you handle it explicitly.",
    ],
  },
};
