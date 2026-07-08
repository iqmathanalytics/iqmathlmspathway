import type { TopicLesson } from "@/lib/types";

export const sqlModule3Lessons: Record<string, TopicLesson> = {
  "sql-m3-t1": {
    topicId: "sql-m3-t1",
    intro:
      "Without WHERE, SELECT returns every row in the table — fine for tiny samples, dangerous on production tables with millions of records. WHERE is your filter: it evaluates a condition for each row and keeps only those where the result is true.",
    blocks: [
      { type: "infographic", infographic: "sql-where-clause" },
      {
        type: "heading",
        content: "Filter mechanics",
      },
      {
        type: "list",
        items: [
          "WHERE runs after FROM, before SELECT projection is returned",
          "Text literals use single quotes: 'Germany', not Germany",
          "Numbers compare without quotes: UnitPrice > 50",
          "Use the table details panel to see column names before filtering",
        ],
      },
      {
        type: "practice",
        practiceLabel: "German customer list",
        practicePrompt:
          "Sales needs every customer in Germany with city and contact name for a regional campaign.",
        starterCode: `SELECT CompanyName, ContactName, City, Country
FROM Customers
WHERE Country = 'Germany'
ORDER BY City, CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Premium product catalog",
        practicePrompt:
          "Merchandising wants products priced above $50, sorted by price descending.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE UnitPrice > 50
ORDER BY UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "London sales team",
        practicePrompt:
          "List employees based in London with their title — useful for office directory exports.",
        starterCode: `SELECT
  FirstName,
  LastName,
  Title,
  City,
  Country
FROM Employees
WHERE City = 'London'
ORDER BY LastName;`,
      },
      {
        type: "practice",
        practiceLabel: "Low stock alert",
        practicePrompt:
          "Find products with fewer than 10 units in stock that are still active (Discontinued = 0).",
        starterCode: `SELECT ProductName, UnitsInStock, UnitPrice, Discontinued
FROM Products
WHERE UnitsInStock < 10
  AND Discontinued = 0
ORDER BY UnitsInStock ASC;`,
      },
    ],
    keyTakeaways: [
      "WHERE filters rows — only matching records reach the result set.",
      "String comparisons are case-sensitive in SQLite unless you use COLLATE.",
      "Combine filters with AND in later topics; start with single conditions first.",
    ],
  },
  "sql-m3-t2": {
    topicId: "sql-m3-t2",
    intro:
      "Business rules rarely use a single condition. “Active products in a price band” needs AND. “Customers in Germany or France” needs OR. Parentheses prevent logic bugs when you mix both.",
    blocks: [
      { type: "infographic", infographic: "sql-comparison-logical" },
      {
        type: "heading",
        content: "Operator reference",
      },
      {
        type: "list",
        items: [
          "Comparisons: =, <>, <, >, <=, >=",
          "AND — all conditions must be true",
          "OR — at least one condition must be true",
          "NOT — inverts a condition",
          "AND binds tighter than OR — use ( ) when unsure",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Mid-range active products",
        practicePrompt:
          "Products still sold (Discontinued = 0) priced from $10 through $25 inclusive. Sort by price.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock, Discontinued
FROM Products
WHERE UnitPrice >= 10
  AND UnitPrice <= 25
  AND Discontinued = 0
ORDER BY UnitPrice;`,
      },
      {
        type: "practice",
        practiceLabel: "DACH + France customers",
        practicePrompt:
          "Customers in Germany, Austria, or France using OR. Show company and country.",
        starterCode: `SELECT CompanyName, Country, City
FROM Customers
WHERE Country = 'Germany'
   OR Country = 'Austria'
   OR Country = 'France'
ORDER BY Country, CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Exclude discontinued",
        practicePrompt:
          "List sellable products using NOT Discontinued (SQLite treats 0 as false).",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE NOT Discontinued
ORDER BY ProductName;`,
      },
      {
        type: "practice",
        practiceLabel: "Parentheses matter",
        practicePrompt:
          "Customers in UK OR in Germany with City = 'London'. Without parentheses, OR would return too many rows.",
        starterCode: `SELECT CompanyName, City, Country
FROM Customers
WHERE Country = 'UK'
   OR (Country = 'Germany' AND City = 'London')
ORDER BY Country, City;`,
      },
    ],
    keyTakeaways: [
      "AND narrows results; OR widens them.",
      "Use parentheses to make mixed logic explicit and readable.",
      "<> and != both mean “not equal” in SQLite.",
    ],
  },
  "sql-m3-t3": {
    topicId: "sql-m3-t3",
    intro:
      "IN, BETWEEN, and LIKE are readable shortcuts for patterns you would otherwise write with multiple ORs or range comparisons. They appear constantly in reporting and search features.",
    blocks: [
      { type: "infographic", infographic: "sql-in-between-like" },
      {
        type: "heading",
        content: "Pattern cheat sheet",
      },
      {
        type: "list",
        items: [
          "IN ('A', 'B') — value matches any item in the list",
          "BETWEEN x AND y — inclusive range on numbers or dates",
          "LIKE 'C%' — starts with C; '%oil%' — contains oil",
          "_ matches exactly one character: LIKE 'Ch_' matches Cha, Che, …",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Priority markets",
        practicePrompt:
          "Customers in Germany, France, UK, or USA using IN. Sort by country then company.",
        starterCode: `SELECT CompanyName, Country, City
FROM Customers
WHERE Country IN ('Germany', 'France', 'UK', 'USA')
ORDER BY Country, CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Budget-friendly products",
        practicePrompt:
          "Products priced BETWEEN 5 AND 15 dollars. Include stock level.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE UnitPrice BETWEEN 5 AND 15
ORDER BY UnitPrice;`,
      },
      {
        type: "practice",
        practiceLabel: "Catalog letter C",
        practicePrompt:
          "Product names starting with 'C' using LIKE 'C%'.",
        starterCode: `SELECT ProductName, UnitPrice, CategoryID
FROM Products
WHERE ProductName LIKE 'C%'
ORDER BY ProductName;`,
      },
      {
        type: "practice",
        practiceLabel: "Contact title search",
        practicePrompt:
          "Customers whose ContactTitle contains 'Manager' anywhere in the text.",
        starterCode: `SELECT CompanyName, ContactName, ContactTitle
FROM Customers
WHERE ContactTitle LIKE '%Manager%'
ORDER BY CompanyName
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "IN replaces long OR chains on the same column.",
      "BETWEEN includes both endpoints — same as >= AND <=.",
      "LIKE is case-insensitive for ASCII only if you add COLLATE NOCASE.",
    ],
  },
  "sql-m3-t4": {
    topicId: "sql-m3-t4",
    intro:
      "ORDER BY is the presentation layer of SQL — same filtered rows, different story depending on sort. Multi-column sorts break ties: country first, then company name within each country.",
    blocks: [
      { type: "infographic", infographic: "sql-order-by" },
      {
        type: "heading",
        content: "Clause order reminder",
      },
      {
        type: "paragraph",
        content:
          "Logical evaluation order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. You write SELECT first, but the engine applies filters before sorting.",
      },
      {
        type: "practice",
        practiceLabel: "Customer directory sort",
        practicePrompt:
          "Sort customers by Country ascending, then CompanyName ascending. Preview 25 rows.",
        starterCode: `SELECT Country, CompanyName, City, ContactName
FROM Customers
ORDER BY Country ASC, CompanyName ASC
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Price leaderboard",
        practicePrompt:
          "Top 10 most expensive products. ORDER BY UnitPrice DESC with LIMIT.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
ORDER BY UnitPrice DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Recent orders",
        practicePrompt:
          "15 most recent orders by OrderDate. Newest first.",
        starterCode: `SELECT OrderID, OrderDate, CustomerID, Freight
FROM Orders
WHERE OrderDate IS NOT NULL
ORDER BY OrderDate DESC
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Filtered + sorted report",
        practicePrompt:
          "German customers sorted by city Z→A (DESC), then company A→Z. Combine WHERE and ORDER BY.",
        starterCode: `SELECT City, CompanyName, ContactName
FROM Customers
WHERE Country = 'Germany'
ORDER BY City DESC, CompanyName ASC;`,
      },
    ],
    keyTakeaways: [
      "ASC is default; DESC reverses the sort direction.",
      "ORDER BY columns are evaluated left to right for tie-breaking.",
      "WHERE filters first, ORDER BY sorts what remains — always both for ranked reports.",
    ],
  },
};
