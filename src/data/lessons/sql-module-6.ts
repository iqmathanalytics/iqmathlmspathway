import type { TopicLesson } from "@/lib/types";

export const sqlModule6Lessons: Record<string, TopicLesson> = {
  "sql-m6-t1": {
    topicId: "sql-m6-t1",
    intro:
      "SQL functions transform data as you query it — formatting text, rounding numbers, parsing dates. They work row-by-row, unlike aggregates that summarize groups.",
    blocks: [
      { type: "infographic", infographic: "sql-functions-intro" },
      {
        type: "practice",
        practiceLabel: "Uppercase countries",
        practicePrompt: "Use UPPER() on Country and list distinct uppercase country names.",
        starterCode: `SELECT DISTINCT UPPER(Country) AS CountryUpper
FROM Customers
ORDER BY CountryUpper;`,
      },
      {
        type: "practice",
        practiceLabel: "Combine function + aggregate",
        practicePrompt: "Average price per category with rounded result (join Categories + Products).",
        starterCode: `SELECT
  c.CategoryName,
  ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
ORDER BY AvgPrice DESC;`,
      },
    ],
    keyTakeaways: [
      "Scalar functions transform one value at a time.",
      "Functions can appear in SELECT, WHERE, ORDER BY, and GROUP BY.",
      "Functions combine naturally with JOINs and aggregates.",
    ],
  },
  "sql-m6-t2": {
    topicId: "sql-m6-t2",
    intro:
      "String functions clean and reshape text — uppercase for comparison, trim whitespace, extract substrings, and concatenate names.",
    blocks: [
      { type: "infographic", infographic: "sql-string-functions" },
      {
        type: "practice",
        practiceLabel: "Format company names",
        practicePrompt: "Show CompanyName in upper and lower case side by side.",
        starterCode: `SELECT
  CompanyName,
  UPPER(CompanyName) AS UpperName,
  LOWER(CompanyName) AS LowerName
FROM Customers
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Substring and length",
        practicePrompt: "First 6 characters of each ProductName and the full name length.",
        starterCode: `SELECT
  ProductName,
  SUBSTR(ProductName, 1, 6) AS Prefix,
  LENGTH(ProductName) AS NameLength
FROM Products
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Employee full names",
        practicePrompt: "Build FullName with || and TRIM any extra spaces.",
        starterCode: `SELECT
  TRIM(FirstName || ' ' || LastName) AS FullName,
  Title
FROM Employees;`,
      },
    ],
    keyTakeaways: [
      "UPPER/LOWER normalize text for comparisons.",
      "SUBSTR extracts part of a string; LENGTH counts characters.",
      "SQLite uses || to concatenate strings.",
    ],
  },
  "sql-m6-t3": {
    topicId: "sql-m6-t3",
    intro:
      "Numeric functions round decimals, measure distance from a target, and cast between types — essential for reports and pricing logic.",
    blocks: [
      { type: "infographic", infographic: "sql-numeric-functions" },
      {
        type: "practice",
        practiceLabel: "Round prices",
        practicePrompt: "Show UnitPrice rounded to 0 and 2 decimal places.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice, 0) AS WholeDollars,
  ROUND(UnitPrice, 2) AS TwoDecimals
FROM Products
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Price with tax",
        practicePrompt: "Compute 18% GST on UnitPrice, rounded to 2 decimals.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice * 1.18, 2) AS PriceWithGST
FROM Products
ORDER BY UnitPrice DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Distance from target price",
        practicePrompt: "Use ABS to show how far each product's price is from $25.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(ABS(UnitPrice - 25), 2) AS DistanceFrom25
FROM Products
ORDER BY DistanceFrom25
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "ROUND(value, decimals) controls precision.",
      "ABS returns the absolute (positive) difference.",
      "CAST converts between numeric types when needed.",
    ],
  },
  "sql-m6-t4": {
    topicId: "sql-m6-t4",
    intro:
      "Dates drive business questions — orders per month, shipping delays, year-over-year trends. SQLite's date functions extract and manipulate date text.",
    blocks: [
      { type: "infographic", infographic: "sql-date-time-functions" },
      {
        type: "practice",
        practiceLabel: "Extract year and month",
        practicePrompt: "From Orders, show OrderID, OrderDate, year, and month using strftime.",
        starterCode: `SELECT
  OrderID,
  OrderDate,
  strftime('%Y', OrderDate) AS OrderYear,
  strftime('%m', OrderDate) AS OrderMonth
FROM Orders
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders by month name",
        practicePrompt: "Use strftime('%Y-%m', OrderDate) to group orders by month (first 12 groups).",
        starterCode: `SELECT
  strftime('%Y-%m', OrderDate) AS YearMonth,
  COUNT(*) AS OrderCount
FROM Orders
GROUP BY YearMonth
ORDER BY YearMonth
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Required vs shipped",
        practicePrompt: "Show days between RequiredDate and ShippedDate for shipped orders.",
        starterCode: `SELECT
  OrderID,
  RequiredDate,
  ShippedDate,
  julianday(ShippedDate) - julianday(RequiredDate) AS DaysLate
FROM Orders
WHERE ShippedDate IS NOT NULL
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "strftime formats and extracts date parts in SQLite.",
      "Dates are often stored as ISO text: YYYY-MM-DD.",
      "julianday() helps compute differences between dates.",
    ],
  },
  "sql-m6-t5": {
    topicId: "sql-m6-t5",
    intro:
      "CASE expressions let you bucket data, label statuses, and implement business rules directly in SQL without post-processing.",
    blocks: [
      { type: "infographic", infographic: "sql-case-expressions" },
      {
        type: "practice",
        practiceLabel: "Price bands",
        practicePrompt: "Label each product Budget / Mid-range / Premium based on UnitPrice.",
        starterCode: `SELECT ProductName, UnitPrice,
  CASE
    WHEN UnitPrice < 10 THEN 'Budget'
    WHEN UnitPrice < 50 THEN 'Mid-range'
    ELSE 'Premium'
  END AS PriceBand
FROM Products
ORDER BY UnitPrice
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Stock status",
        practicePrompt: "Use CASE on UnitsInStock: 'Out of stock' if 0, 'Low' if under 10, else 'OK'.",
        starterCode: `SELECT ProductName, UnitsInStock,
  CASE
    WHEN UnitsInStock = 0 THEN 'Out of stock'
    WHEN UnitsInStock < 10 THEN 'Low'
    ELSE 'OK'
  END AS StockStatus
FROM Products
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Freight tier",
        practicePrompt: "Classify Orders freight as Small / Medium / Large.",
        starterCode: `SELECT OrderID, Freight,
  CASE
    WHEN Freight < 10 THEN 'Small'
    WHEN Freight < 50 THEN 'Medium'
    ELSE 'Large'
  END AS FreightTier
FROM Orders
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "CASE WHEN … THEN … ELSE … END handles multiple conditions.",
      "Simple CASE compares one expression to several values.",
      "CASE works in SELECT, ORDER BY, and aggregates.",
    ],
  },
  "sql-m6-t6": {
    topicId: "sql-m6-t6",
    intro:
      "COALESCE and NULLIF clean up missing data — default labels for NULL regions, and turning sentinel values into real NULLs.",
    blocks: [
      { type: "infographic", infographic: "sql-coalesce-nullif" },
      {
        type: "practice",
        practiceLabel: "Region fallback",
        practicePrompt: "Replace NULL Region with 'Not specified' using COALESCE.",
        starterCode: `SELECT CompanyName, Country,
  COALESCE(Region, 'Not specified') AS Region
FROM Customers
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Contact fallback chain",
        practicePrompt: "Use COALESCE(Fax, Phone, 'No phone/fax') as backup contact.",
        starterCode: `SELECT CompanyName,
  Phone,
  Fax,
  COALESCE(Fax, Phone, 'No phone/fax') AS BestContact
FROM Customers
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "NULLIF for zero stock",
        practicePrompt: "Use NULLIF so zero UnitsInStock becomes NULL in a column called StockOrNull.",
        starterCode: `SELECT ProductName, UnitsInStock,
  NULLIF(UnitsInStock, 0) AS StockOrNull
FROM Products
WHERE Discontinued = 0
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "COALESCE returns the first non-NULL argument.",
      "IFNULL(a, b) in SQLite is a two-argument COALESCE.",
      "NULLIF(a, b) returns NULL when a equals b.",
    ],
  },
};
