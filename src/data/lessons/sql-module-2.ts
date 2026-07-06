import type { TopicLesson } from "@/lib/types";

export const sqlModule2Lessons: Record<string, TopicLesson> = {
  "sql-m2-t1": {
    topicId: "sql-m2-t1",
    intro:
      "SELECT is how you read data from a database. Starting here, every exercise uses the Northwind sample database — the same classic dataset used in SQL courses worldwide.",
    blocks: [
      { type: "infographic", infographic: "sql-select-statement" },
      {
        type: "practice",
        practiceLabel: "Explore Northwind tables",
        practicePrompt:
          "List all user tables in the Northwind database. You should see Customers, Products, Orders, and more.",
        starterCode: `SELECT name
FROM sqlite_master
WHERE type = 'table'
ORDER BY name;`,
      },
      {
        type: "practice",
        practiceLabel: "Preview customers",
        practicePrompt: "Select CustomerID, CompanyName, and Country for the first 10 customers.",
        starterCode: `SELECT CustomerID, CompanyName, Country
FROM Customers
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Product catalog",
        practicePrompt: "Show ProductName and UnitPrice for all products (preview with LIMIT 15).",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "SELECT … FROM … is the fundamental pattern for reading data.",
      "Module 2+ uses the Northwind database (Customers, Products, Orders, etc.).",
      "Prefer listing columns explicitly instead of SELECT * in real projects.",
    ],
  },
  "sql-m2-t2": {
    topicId: "sql-m2-t2",
    intro:
      "Rename columns with AS and build calculated fields — tax-inclusive prices, full names, and custom labels for reports.",
    blocks: [
      { type: "infographic", infographic: "sql-column-aliases" },
      {
        type: "practice",
        practiceLabel: "Price with tax",
        practicePrompt: "Show each product name, unit price, and price with 18% GST as PriceWithGST.",
        starterCode: `SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice * 1.18, 2) AS PriceWithGST
FROM Products
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Employee full names",
        practicePrompt: "Concatenate FirstName and LastName into a column called FullName.",
        starterCode: `SELECT
  FirstName || ' ' || LastName AS FullName,
  Title,
  City
FROM Employees;`,
      },
      {
        type: "practice",
        practiceLabel: "Order freight in dollars",
        practicePrompt: "From Orders, show OrderID, CustomerID, and Freight rounded to 2 decimals.",
        starterCode: `SELECT
  OrderID,
  CustomerID,
  ROUND(Freight, 2) AS FreightAmount
FROM Orders
LIMIT 10;`,
      },
    ],
    keyTakeaways: [
      "AS renames a column in the result set.",
      "You can use arithmetic (+, -, *, /) and string concatenation (||) in SELECT.",
      "ROUND() controls decimal precision for display.",
    ],
  },
  "sql-m2-t3": {
    topicId: "sql-m2-t3",
    intro:
      "DISTINCT finds unique values; LIMIT controls how many rows you get back. Together they are essential for exploration and top-N reports.",
    blocks: [
      { type: "infographic", infographic: "sql-distinct-limit" },
      {
        type: "practice",
        practiceLabel: "Countries we serve",
        practicePrompt: "List every distinct country where we have customers, sorted alphabetically.",
        starterCode: `SELECT DISTINCT Country
FROM Customers
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Top 5 products by price",
        practicePrompt: "Show the 5 most expensive products by UnitPrice (highest first).",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
ORDER BY UnitPrice DESC
LIMIT 5;`,
      },
      {
        type: "practice",
        practiceLabel: "Distinct categories in use",
        practicePrompt:
          "Find distinct CategoryID values used by products. (You will JOIN to Categories in a later module.)",
        starterCode: `SELECT DISTINCT CategoryID
FROM Products
ORDER BY CategoryID;`,
      },
    ],
    keyTakeaways: [
      "DISTINCT removes duplicate rows from the result.",
      "LIMIT n returns at most n rows — pair with ORDER BY for top-N queries.",
      "ORDER BY DESC sorts highest-to-lowest; ASC is the default.",
    ],
  },
  "sql-m2-t4": {
    topicId: "sql-m2-t4",
    intro:
      "NULL represents missing data. Northwind customers often have no Region — learn to filter and replace NULLs correctly.",
    blocks: [
      { type: "infographic", infographic: "sql-null-handling" },
      {
        type: "practice",
        practiceLabel: "Customers missing a region",
        practicePrompt: "Find customers where Region IS NULL. Show CompanyName and Country.",
        starterCode: `SELECT CompanyName, Country, Region
FROM Customers
WHERE Region IS NULL
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Replace NULL with a label",
        practicePrompt: "Use COALESCE to show 'Not specified' when Region is NULL.",
        starterCode: `SELECT
  CompanyName,
  Country,
  COALESCE(Region, 'Not specified') AS Region
FROM Customers
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Products with no reorder level",
        practicePrompt:
          "Some products have NULL ReorderLevel. List ProductName and UnitsInStock where ReorderLevel IS NULL.",
        starterCode: `SELECT ProductName, UnitsInStock, ReorderLevel
FROM Products
WHERE ReorderLevel IS NULL;`,
      },
    ],
    keyTakeaways: [
      "Use IS NULL / IS NOT NULL — never = NULL.",
      "COALESCE returns the first non-NULL argument.",
      "NULL behaves differently in comparisons and aggregates.",
    ],
  },
};
