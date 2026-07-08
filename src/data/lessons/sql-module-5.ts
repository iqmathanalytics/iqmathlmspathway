import type { TopicLesson } from "@/lib/types";

export const sqlModule5Lessons: Record<string, TopicLesson> = {
  "sql-m5-t1": {
    topicId: "sql-m5-t1",
    intro:
      "Analytics starts with aggregates — one number that summarizes thousands of rows. How many customers do we have? What is average product price? Total freight billed? Aggregates answer headline KPIs before you slice data with GROUP BY.",
    blocks: [
      { type: "infographic", infographic: "sql-aggregates-intro" },
      {
        type: "heading",
        content: "The big five aggregates",
      },
      {
        type: "list",
        items: [
          "COUNT — how many rows (or non-NULL values)",
          "SUM — total of a numeric column",
          "AVG — arithmetic mean",
          "MIN / MAX — smallest and largest value",
        ],
      },
      {
        type: "tip",
        content:
          "WHERE filters rows before aggregates run. GROUP BY (next topics) creates multiple summary rows instead of one.",
      },
      {
        type: "practice",
        practiceLabel: "Customer base size",
        practicePrompt:
          "Executive dashboard: total number of customers in Northwind.",
        starterCode: `SELECT COUNT(*) AS TotalCustomers
FROM Customers;`,
      },
      {
        type: "practice",
        practiceLabel: "Catalog price snapshot",
        practicePrompt:
          "Average, min, and max UnitPrice across all products in one query.",
        starterCode: `SELECT
  ROUND(AVG(UnitPrice), 2) AS AvgPrice,
  MIN(UnitPrice) AS Cheapest,
  MAX(UnitPrice) AS Priciest
FROM Products;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders at a glance",
        practicePrompt:
          "How many orders exist, and what is total freight revenue?",
        starterCode: `SELECT
  COUNT(*) AS OrderCount,
  ROUND(SUM(Freight), 2) AS TotalFreight,
  ROUND(AVG(Freight), 2) AS AvgFreightPerOrder
FROM Orders;`,
      },
      {
        type: "practice",
        practiceLabel: "Active catalog only",
        practicePrompt:
          "Same price stats but only for products still sold (Discontinued = 0).",
        starterCode: `SELECT
  COUNT(*) AS ActiveProducts,
  ROUND(AVG(UnitPrice), 2) AS AvgActivePrice
FROM Products
WHERE Discontinued = 0;`,
      },
    ],
    keyTakeaways: [
      "Aggregates collapse many rows into one (or few) summary values.",
      "Apply WHERE before aggregating to limit which rows count.",
      "ROUND keeps currency and averages readable in reports.",
    ],
  },
  "sql-m5-t2": {
    topicId: "sql-m5-t2",
    intro:
      "COUNT, MIN, and MAX answer “how many?” and “what are the extremes?” — essential for data quality checks, inventory bounds, and date ranges.",
    blocks: [
      { type: "infographic", infographic: "sql-count-min-max" },
      {
        type: "heading",
        content: "COUNT(*) vs COUNT(column)",
      },
      {
        type: "paragraph",
        content:
          "COUNT(*) always counts rows. COUNT(Region) skips NULL — the difference tells you how many customers lack a region value. Use that gap for data-cleansing reports.",
      },
      {
        type: "practice",
        practiceLabel: "NULL impact on COUNT",
        practicePrompt:
          "Compare COUNT(*) with COUNT(Region) and COUNT(Fax) on Customers.",
        starterCode: `SELECT
  COUNT(*) AS AllCustomers,
  COUNT(Region) AS WithRegion,
  COUNT(Fax) AS WithFax
FROM Customers;`,
      },
      {
        type: "practice",
        practiceLabel: "Product price extremes",
        practicePrompt:
          "Cheapest and most expensive product — include ProductName using subquery preview (run MIN/MAX first).",
        starterCode: `SELECT
  MIN(UnitPrice) AS Cheapest,
  MAX(UnitPrice) AS MostExpensive,
  MAX(UnitPrice) - MIN(UnitPrice) AS PriceSpread
FROM Products;`,
      },
      {
        type: "practice",
        practiceLabel: "Order date range",
        practicePrompt:
          "When did Northwind's first and last orders occur?",
        starterCode: `SELECT
  MIN(OrderDate) AS FirstOrder,
  MAX(OrderDate) AS LastOrder,
  COUNT(*) AS TotalOrders
FROM Orders
WHERE OrderDate IS NOT NULL;`,
      },
      {
        type: "practice",
        practiceLabel: "Stock extremes",
        practicePrompt:
          "Minimum and maximum UnitsInStock among active products.",
        starterCode: `SELECT
  MIN(UnitsInStock) AS LowestStock,
  MAX(UnitsInStock) AS HighestStock,
  COUNT(*) AS ActiveSKUs
FROM Products
WHERE Discontinued = 0;`,
      },
    ],
    keyTakeaways: [
      "COUNT(column) ignores NULLs; COUNT(*) does not.",
      "MIN/MAX work on numbers, dates, and text (lexicographic order).",
      "Extreme-value reports often pair with GROUP BY for per-category ranges.",
    ],
  },
  "sql-m5-t3": {
    topicId: "sql-m5-t3",
    intro:
      "SUM totals revenue and inventory; AVG smooths outliers for typical price or freight. Together they power financial and operations dashboards.",
    blocks: [
      { type: "infographic", infographic: "sql-sum-avg" },
      {
        type: "practice",
        practiceLabel: "Freight economics",
        practicePrompt:
          "Total freight collected and average freight per order.",
        starterCode: `SELECT
  ROUND(SUM(Freight), 2) AS TotalFreight,
  ROUND(AVG(Freight), 2) AS AvgFreight,
  COUNT(*) AS OrderCount
FROM Orders;`,
      },
      {
        type: "practice",
        practiceLabel: "Inventory valuation",
        practicePrompt:
          "Estimate total stock value: SUM(UnitsInStock * UnitPrice) for active products.",
        starterCode: `SELECT
  SUM(UnitsInStock) AS TotalUnits,
  ROUND(SUM(UnitsInStock * UnitPrice), 2) AS InventoryValue,
  ROUND(AVG(UnitPrice), 2) AS AvgUnitPrice
FROM Products
WHERE Discontinued = 0;`,
      },
      {
        type: "practice",
        practiceLabel: "Gross line revenue",
        practicePrompt:
          "Total revenue from all order lines before discounts.",
        starterCode: `SELECT
  COUNT(*) AS LineItems,
  SUM(Quantity) AS UnitsSold,
  ROUND(SUM(Quantity * UnitPrice), 2) AS GrossLineRevenue
FROM [Order Details];`,
      },
      {
        type: "practice",
        practiceLabel: "Revenue after discount",
        practicePrompt:
          "Apply Discount per line: Quantity * UnitPrice * (1 - Discount).",
        starterCode: `SELECT
  ROUND(SUM(Quantity * UnitPrice * (1 - Discount)), 2) AS NetLineRevenue
FROM [Order Details];`,
      },
    ],
    keyTakeaways: [
      "SUM adds values; AVG divides sum by count of non-NULL values.",
      "Multiply columns inside SUM for line totals (quantity × price).",
      "Filter with WHERE before SUM/AVG when the report scope is subset.",
    ],
  },
  "sql-m5-t4": {
    topicId: "sql-m5-t4",
    intro:
      "GROUP BY splits data into buckets — one row per country, category, or employee — with aggregates computed inside each bucket. This is the core of BI reporting.",
    blocks: [
      { type: "infographic", infographic: "sql-group-by-basics" },
      {
        type: "heading",
        content: "Golden rule",
      },
      {
        type: "paragraph",
        content:
          "Every column in SELECT must either be in GROUP BY or wrapped in an aggregate. Break this rule and SQL returns an error (or nonsense in permissive engines).",
      },
      {
        type: "practice",
        practiceLabel: "Customers per country",
        practicePrompt:
          "Count customers in each country. Sort by headcount descending.",
        starterCode: `SELECT
  Country,
  COUNT(*) AS CustomerCount
FROM Customers
WHERE Country IS NOT NULL
GROUP BY Country
ORDER BY CustomerCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Catalog depth by category",
        practicePrompt:
          "JOIN Categories to Products, then count products per category name.",
        starterCode: `SELECT
  c.CategoryName,
  COUNT(p.ProductID) AS ProductCount,
  ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
ORDER BY ProductCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Sales rep workload",
        practicePrompt:
          "Orders handled per employee — join Employees to Orders, GROUP BY employee.",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  COUNT(o.OrderID) AS OrdersHandled,
  ROUND(SUM(o.Freight), 2) AS TotalFreight
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
ORDER BY OrdersHandled DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Supplier portfolio",
        practicePrompt:
          "How many products does each supplier provide? Include supplier country.",
        starterCode: `SELECT
  s.CompanyName AS Supplier,
  s.Country,
  COUNT(p.ProductID) AS ProductCount
FROM Suppliers s
LEFT JOIN Products p ON s.SupplierID = p.SupplierID
GROUP BY s.SupplierID
ORDER BY ProductCount DESC;`,
      },
    ],
    keyTakeaways: [
      "GROUP BY creates one output row per unique group key.",
      "Non-aggregated SELECT columns must appear in GROUP BY.",
      "JOIN before GROUP BY when labels live in another table.",
    ],
  },
  "sql-m5-t5": {
    topicId: "sql-m5-t5",
    intro:
      "Adding GROUP BY columns refines buckets: not just country, but country + city; not just employee, but employee + year. Finer groups reveal local patterns hidden in national totals.",
    blocks: [
      { type: "infographic", infographic: "sql-group-by-multiple" },
      {
        type: "practice",
        practiceLabel: "City-level customer map",
        practicePrompt:
          "Count customers grouped by Country and City together.",
        starterCode: `SELECT
  Country,
  City,
  COUNT(*) AS CustomerCount
FROM Customers
WHERE Country IS NOT NULL AND City IS NOT NULL
GROUP BY Country, City
ORDER BY Country, CustomerCount DESC
LIMIT 30;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders by year",
        practicePrompt:
          "Use strftime('%Y', OrderDate) to count orders per calendar year.",
        starterCode: `SELECT
  strftime('%Y', OrderDate) AS OrderYear,
  COUNT(*) AS OrderCount,
  ROUND(SUM(Freight), 2) AS YearFreight
FROM Orders
WHERE OrderDate IS NOT NULL
GROUP BY OrderYear
ORDER BY OrderYear;`,
      },
      {
        type: "practice",
        practiceLabel: "Rep performance by year",
        practicePrompt:
          "GROUP BY employee and order year — who peaked in which year?",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  strftime('%Y', o.OrderDate) AS OrderYear,
  COUNT(o.OrderID) AS OrdersHandled
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
WHERE o.OrderDate IS NOT NULL
GROUP BY e.EmployeeID, OrderYear
ORDER BY OrderYear, OrdersHandled DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Category × supplier counts",
        practicePrompt:
          "Products per CategoryName and Supplier country — two business dimensions.",
        starterCode: `SELECT
  c.CategoryName,
  s.Country AS SupplierCountry,
  COUNT(p.ProductID) AS ProductCount
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID
GROUP BY c.CategoryName, s.Country
ORDER BY ProductCount DESC
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "Multiple GROUP BY columns define finer-grained buckets.",
      "strftime extracts year/month for time-series GROUP BY in SQLite.",
      "More GROUP BY columns = more rows in the result.",
    ],
  },
  "sql-m5-t6": {
    topicId: "sql-m5-t6",
    intro:
      "WHERE filters rows before grouping; HAVING filters groups after aggregation. “Countries with more than 5 customers” or “categories averaging over $25” require HAVING — WHERE cannot use COUNT(*) or AVG().",
    blocks: [
      { type: "infographic", infographic: "sql-having" },
      {
        type: "heading",
        content: "WHERE vs HAVING",
      },
      {
        type: "list",
        items: [
          "WHERE — filters raw rows (Country = 'Germany') before GROUP BY",
          "HAVING — filters grouped results (COUNT(*) > 5) after GROUP BY",
          "You can use both: WHERE for row filter, HAVING for group filter",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Large markets only",
        practicePrompt:
          "Countries with more than 5 customers. HAVING COUNT(*) > 5.",
        starterCode: `SELECT
  Country,
  COUNT(*) AS CustomerCount
FROM Customers
WHERE Country IS NOT NULL
GROUP BY Country
HAVING COUNT(*) > 5
ORDER BY CustomerCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Premium categories",
        practicePrompt:
          "Categories whose average product price exceeds $25.",
        starterCode: `SELECT
  c.CategoryName,
  COUNT(p.ProductID) AS ProductCount,
  ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
HAVING AVG(p.UnitPrice) > 25
ORDER BY AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "High-volume reps",
        practicePrompt:
          "Employees who handled more than 200 orders.",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  COUNT(o.OrderID) AS OrdersHandled
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
HAVING COUNT(o.OrderID) > 200
ORDER BY OrdersHandled DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "WHERE + HAVING together",
        practicePrompt:
          "European countries (WHERE) with more than 3 customers (HAVING).",
        starterCode: `SELECT
  Country,
  COUNT(*) AS CustomerCount
FROM Customers
WHERE Country IN ('Germany', 'France', 'UK', 'Spain', 'Italy', 'Austria', 'Sweden')
GROUP BY Country
HAVING COUNT(*) > 3
ORDER BY CustomerCount DESC;`,
      },
    ],
    keyTakeaways: [
      "HAVING filters groups; never use aggregates in WHERE.",
      "Clause order: … WHERE … GROUP BY … HAVING … ORDER BY … LIMIT.",
      "Combine WHERE (row scope) and HAVING (group threshold) for precise reports.",
    ],
  },
};
