import type { TopicLesson } from "@/lib/types";

export const sqlModule6Lessons: Record<string, TopicLesson> = {
  "sql-m6-t1": {
    topicId: "sql-m6-t1",
    intro:
      "Scalar functions transform individual values row-by-row — uppercase a name, round a price, extract a year from a date. Aggregates summarize groups; functions polish each cell. Together they power every report column you ship to stakeholders.",
    blocks: [
      { type: "infographic", infographic: "sql-functions-intro" },
      {
        type: "heading",
        content: "Where functions live",
      },
      {
        type: "list",
        items: [
          "SELECT — format output columns",
          "WHERE — compare transformed values (UPPER(email) = 'X')",
          "ORDER BY — sort by computed fields",
          "GROUP BY — bucket on expressions (strftime year, price band)",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Normalize country names",
        practicePrompt:
          "Distinct uppercase countries — useful before deduplicating messy text imports.",
        starterCode: `SELECT DISTINCT UPPER(TRIM(Country)) AS CountryNormalized
FROM Customers
WHERE Country IS NOT NULL
ORDER BY CountryNormalized;`,
      },
      {
        type: "practice",
        practiceLabel: "Functions + aggregates",
        practicePrompt:
          "Average price per category, rounded — join Categories to Products, GROUP BY name.",
        starterCode: `SELECT
  c.CategoryName,
  COUNT(p.ProductID) AS ProductCount,
  ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
ORDER BY AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Function in ORDER BY",
        practicePrompt:
          "List customers sorted by LENGTH(CompanyName) descending — longest names first.",
        starterCode: `SELECT CompanyName, Country, LENGTH(CompanyName) AS NameLength
FROM Customers
ORDER BY LENGTH(CompanyName) DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Function in WHERE",
        practicePrompt:
          "Find products whose name starts with 'Ch' using UPPER and LIKE together.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UPPER(ProductName) LIKE 'CH%'
ORDER BY ProductName;`,
      },
    ],
    keyTakeaways: [
      "Scalar functions operate per row; aggregates collapse groups.",
      "Functions never modify stored data — only the query result.",
      "Nest functions: ROUND(AVG(...)) is common in analytics.",
    ],
  },
  "sql-m6-t2": {
    topicId: "sql-m6-t2",
    intro:
      "Dirty text breaks joins and filters — extra spaces, inconsistent casing, cryptic codes. String functions clean and reshape text inside SQL so exports arrive presentation-ready.",
    blocks: [
      { type: "infographic", infographic: "sql-string-functions" },
      {
        type: "heading",
        content: "SQLite string toolkit",
      },
      {
        type: "list",
        items: [
          "UPPER / LOWER — case normalization",
          "TRIM — remove leading/trailing whitespace",
          "SUBSTR — extract part of a string (1-based index)",
          "LENGTH — character count",
          "|| — concatenate",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Company name formatting",
        practicePrompt:
          "Show original, UPPER, and LOWER forms side by side for 12 customers.",
        starterCode: `SELECT
  CompanyName,
  UPPER(CompanyName) AS UpperName,
  LOWER(CompanyName) AS LowerName
FROM Customers
ORDER BY CompanyName
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Product code prefix",
        practicePrompt:
          "First 8 characters of ProductName as SKU prefix plus full LENGTH.",
        starterCode: `SELECT
  ProductName,
  SUBSTR(ProductName, 1, 8) AS SkuPrefix,
  LENGTH(ProductName) AS NameLength
FROM Products
ORDER BY NameLength DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Employee directory export",
        practicePrompt:
          "Build FullName with || and TRIM. Include Title and uppercase City.",
        starterCode: `SELECT
  TRIM(FirstName || ' ' || LastName) AS FullName,
  Title,
  UPPER(City) AS CityUpper
FROM Employees
ORDER BY LastName, FirstName;`,
      },
      {
        type: "practice",
        practiceLabel: "Contact title cleanup",
        practicePrompt:
          "Customers whose ContactTitle contains 'Manager' (case-insensitive via UPPER).",
        starterCode: `SELECT
  CompanyName,
  ContactName,
  ContactTitle
FROM Customers
WHERE UPPER(ContactTitle) LIKE '%MANAGER%'
ORDER BY CompanyName
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "Normalize case before comparing or grouping text.",
      "SUBSTR and LENGTH help parse fixed-width codes.",
      "SQLite concatenates with || — TRIM avoids double-space glitches.",
    ],
  },
  "sql-m6-t3": {
    topicId: "sql-m6-t3",
    intro:
      "Financial SQL leans on numeric functions — ROUND for currency, ABS for variance, CAST when types must align. Small formatting choices prevent embarrassing penny drift in executive decks.",
    blocks: [
      { type: "infographic", infographic: "sql-numeric-functions" },
      {
        type: "practice",
        practiceLabel: "Price display formats",
        practicePrompt:
          "Show UnitPrice rounded to whole dollars and to 2 decimal places.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice, 0) AS WholeDollars,
  ROUND(UnitPrice, 2) AS TwoDecimals
FROM Products
ORDER BY UnitPrice DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "GST pricing column",
        practicePrompt:
          "Compute 18% GST on UnitPrice as PriceWithGST, rounded to 2 decimals.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice * 1.18, 2) AS PriceWithGST,
  ROUND(UnitPrice * 0.18, 2) AS GstAmount
FROM Products
WHERE Discontinued = 0
ORDER BY UnitPrice DESC
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Distance from target",
        practicePrompt:
          "How far is each product's price from a $25 target? Use ABS.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(ABS(UnitPrice - 25), 2) AS DistanceFrom25
FROM Products
ORDER BY DistanceFrom25
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Line discount impact",
        practicePrompt:
          "On [Order Details], show line total before and after Discount.",
        starterCode: `SELECT
  OrderID,
  ProductID,
  Quantity,
  UnitPrice,
  ROUND(Quantity * UnitPrice, 2) AS GrossLine,
  ROUND(Quantity * UnitPrice * (1 - Discount), 2) AS NetLine
FROM [Order Details]
ORDER BY GrossLine DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "ROUND(value, n) controls decimal precision in reports.",
      "ABS measures magnitude of difference — great for tolerance checks.",
      "Combine arithmetic and ROUND in one SELECT expression.",
    ],
  },
  "sql-m6-t4": {
    topicId: "sql-m6-t4",
    intro:
      "Time-series questions — orders per month, shipping delays, hire anniversaries — depend on date functions. SQLite stores Northwind dates as ISO text; strftime and julianday extract and compare them.",
    blocks: [
      { type: "infographic", infographic: "sql-date-time-functions" },
      {
        type: "heading",
        content: "SQLite date helpers",
      },
      {
        type: "list",
        items: [
          "strftime('%Y', date) — four-digit year",
          "strftime('%m', date) — month number",
          "strftime('%Y-%m', date) — year-month bucket",
          "julianday(a) - julianday(b) — day difference",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Decompose order dates",
        practicePrompt:
          "Show OrderID, OrderDate, year, month, and day-of-week name.",
        starterCode: `SELECT
  OrderID,
  OrderDate,
  strftime('%Y', OrderDate) AS OrderYear,
  strftime('%m', OrderDate) AS OrderMonth,
  strftime('%w', OrderDate) AS DayOfWeek
FROM Orders
WHERE OrderDate IS NOT NULL
ORDER BY OrderDate DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Monthly order volume",
        practicePrompt:
          "Count orders per year-month. Sort chronologically.",
        starterCode: `SELECT
  strftime('%Y-%m', OrderDate) AS YearMonth,
  COUNT(*) AS OrderCount,
  ROUND(SUM(Freight), 2) AS MonthFreight
FROM Orders
WHERE OrderDate IS NOT NULL
GROUP BY YearMonth
ORDER BY YearMonth;`,
      },
      {
        type: "practice",
        practiceLabel: "Shipping delay days",
        practicePrompt:
          "Days between RequiredDate and ShippedDate (negative = early).",
        starterCode: `SELECT
  OrderID,
  RequiredDate,
  ShippedDate,
  ROUND(julianday(ShippedDate) - julianday(RequiredDate), 1) AS DaysFromRequired
FROM Orders
WHERE ShippedDate IS NOT NULL
  AND RequiredDate IS NOT NULL
ORDER BY DaysFromRequired DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Employee tenure",
        practicePrompt:
          "Years since HireDate (approximate) using julianday and / 365.25.",
        starterCode: `SELECT
  FirstName || ' ' || LastName AS Employee,
  HireDate,
  ROUND((julianday('now') - julianday(HireDate)) / 365.25, 1) AS YearsEmployed
FROM Employees
WHERE HireDate IS NOT NULL
ORDER BY YearsEmployed DESC;`,
      },
    ],
    keyTakeaways: [
      "strftime formats and extracts parts of date strings.",
      "GROUP BY strftime('%Y-%m', ...) builds monthly reports.",
      "julianday differences measure elapsed days between dates.",
    ],
  },
  "sql-m6-t5": {
    topicId: "sql-m6-t5",
    intro:
      "CASE is SQL's switch statement — bucket prices into tiers, flag stockouts, classify freight. It keeps business rules visible in the query instead of hidden in application code.",
    blocks: [
      { type: "infographic", infographic: "sql-case-expressions" },
      {
        type: "practice",
        practiceLabel: "Product price bands",
        practicePrompt:
          "Label each product Budget / Mid-range / Premium based on UnitPrice thresholds.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  CASE
    WHEN UnitPrice < 10 THEN 'Budget'
    WHEN UnitPrice < 50 THEN 'Mid-range'
    ELSE 'Premium'
  END AS PriceBand
FROM Products
ORDER BY UnitPrice
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Inventory health",
        practicePrompt:
          "Stock status: Out of stock (0), Low (<10), OK otherwise.",
        starterCode: `SELECT
  ProductName,
  UnitsInStock,
  CASE
    WHEN UnitsInStock = 0 THEN 'Out of stock'
    WHEN UnitsInStock < 10 THEN 'Low'
    ELSE 'OK'
  END AS StockStatus
FROM Products
WHERE Discontinued = 0
ORDER BY UnitsInStock;`,
      },
      {
        type: "practice",
        practiceLabel: "Freight size class",
        practicePrompt:
          "Classify order freight as Small / Medium / Large.",
        starterCode: `SELECT
  OrderID,
  Freight,
  CASE
    WHEN Freight < 10 THEN 'Small'
    WHEN Freight < 50 THEN 'Medium'
    ELSE 'Large'
  END AS FreightTier
FROM Orders
ORDER BY Freight DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "CASE in aggregation",
        practicePrompt:
          "Count products per price band in one query using CASE inside SUM.",
        starterCode: `SELECT
  SUM(CASE WHEN UnitPrice < 10 THEN 1 ELSE 0 END) AS BudgetCount,
  SUM(CASE WHEN UnitPrice >= 10 AND UnitPrice < 50 THEN 1 ELSE 0 END) AS MidCount,
  SUM(CASE WHEN UnitPrice >= 50 THEN 1 ELSE 0 END) AS PremiumCount
FROM Products
WHERE Discontinued = 0;`,
      },
    ],
    keyTakeaways: [
      "Searched CASE: CASE WHEN condition THEN result … END",
      "CASE works inside aggregates for pivot-style counts.",
      "ORDER BY can use CASE for custom sort sequences.",
    ],
  },
  "sql-m6-t6": {
    topicId: "sql-m6-t6",
    intro:
      "NULL breaks concatenation and skews averages. COALESCE supplies fallback values for display; NULLIF turns sentinel values (like 0) into real NULLs for cleaner analytics.",
    blocks: [
      { type: "infographic", infographic: "sql-coalesce-nullif" },
      {
        type: "practice",
        practiceLabel: "Region display fix",
        practicePrompt:
          "Replace NULL Region with 'Not specified' for customer reports.",
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
        practiceLabel: "Best contact channel",
        practicePrompt:
          "COALESCE chain: prefer Fax, then Phone, else a default message.",
        starterCode: `SELECT
  CompanyName,
  Phone,
  Fax,
  COALESCE(Fax, Phone, 'No phone/fax on file') AS BestContact
FROM Customers
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "NULLIF zero stock",
        practicePrompt:
          "NULLIF turns zero UnitsInStock into NULL in column StockOrNull.",
        starterCode: `SELECT
  ProductName,
  UnitsInStock,
  NULLIF(UnitsInStock, 0) AS StockOrNull
FROM Products
WHERE Discontinued = 0
ORDER BY UnitsInStock DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "AVG with NULLIF",
        practicePrompt:
          "Average stock ignoring zero-stock items using NULLIF inside AVG.",
        starterCode: `SELECT
  ROUND(AVG(NULLIF(UnitsInStock, 0)), 2) AS AvgStockExcludingZero,
  ROUND(AVG(UnitsInStock), 2) AS AvgStockIncludingZero
FROM Products
WHERE Discontinued = 0;`,
      },
    ],
    keyTakeaways: [
      "COALESCE returns the first non-NULL argument in the list.",
      "IFNULL(x, y) is SQLite shorthand for two-argument COALESCE.",
      "NULLIF(a, b) returns NULL when a equals b — useful for excluding sentinels.",
    ],
  },
};
