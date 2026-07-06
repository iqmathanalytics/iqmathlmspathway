import type { TopicLesson } from "@/lib/types";

export const sqlModule3Lessons: Record<string, TopicLesson> = {
  "sql-m3-t1": {
    topicId: "sql-m3-t1",
    intro:
      "A SELECT without WHERE returns every row. The WHERE clause filters rows so you only see records that match your condition.",
    blocks: [
      { type: "infographic", infographic: "sql-where-clause" },
      {
        type: "practice",
        practiceLabel: "Customers in Germany",
        practicePrompt: "List CompanyName and City for all customers in Germany.",
        starterCode: `SELECT CompanyName, City, Country
FROM Customers
WHERE Country = 'Germany';`,
      },
      {
        type: "practice",
        practiceLabel: "Premium products",
        practicePrompt: "Show ProductName and UnitPrice for products costing more than $50.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > 50
ORDER BY UnitPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "London employees",
        practicePrompt: "Find employees who work in London. Show FirstName, LastName, and Title.",
        starterCode: `SELECT FirstName, LastName, Title, City
FROM Employees
WHERE City = 'London';`,
      },
    ],
    keyTakeaways: [
      "WHERE filters rows before they appear in the result.",
      "Text comparisons use single-quoted strings.",
      "Numeric comparisons do not need quotes.",
    ],
  },
  "sql-m3-t2": {
    topicId: "sql-m3-t2",
    intro:
      "Real queries combine multiple conditions. Comparison operators test values; AND, OR, and NOT combine conditions into powerful filters.",
    blocks: [
      { type: "infographic", infographic: "sql-comparison-logical" },
      {
        type: "practice",
        practiceLabel: "Mid-range products",
        practicePrompt:
          "Find active products (Discontinued = 0) priced between $10 and $25 inclusive.",
        starterCode: `SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE UnitPrice >= 10
  AND UnitPrice <= 25
  AND Discontinued = 0
ORDER BY UnitPrice;`,
      },
      {
        type: "practice",
        practiceLabel: "Germany or France",
        practicePrompt: "List customers from Germany OR France. Show CompanyName and Country.",
        starterCode: `SELECT CompanyName, Country
FROM Customers
WHERE Country = 'Germany'
   OR Country = 'France'
ORDER BY Country, CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Exclude discontinued",
        practicePrompt: "Use NOT or Discontinued = 0 to list products still being sold.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE NOT Discontinued
ORDER BY ProductName;`,
      },
    ],
    keyTakeaways: [
      "Use AND when every condition must be true.",
      "Use OR when any condition can be true.",
      "Parentheses clarify mixed AND/OR logic.",
    ],
  },
  "sql-m3-t3": {
    topicId: "sql-m3-t3",
    intro:
      "IN, BETWEEN, and LIKE are shorthand for common filtering patterns — membership lists, ranges, and text patterns.",
    blocks: [
      { type: "infographic", infographic: "sql-in-between-like" },
      {
        type: "practice",
        practiceLabel: "Customers in several countries",
        practicePrompt: "Use IN to find customers in Germany, France, or UK.",
        starterCode: `SELECT CompanyName, Country
FROM Customers
WHERE Country IN ('Germany', 'France', 'UK')
ORDER BY Country;`,
      },
      {
        type: "practice",
        practiceLabel: "Affordable products",
        practicePrompt: "Products with UnitPrice BETWEEN 5 AND 15.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice BETWEEN 5 AND 15
ORDER BY UnitPrice;`,
      },
      {
        type: "practice",
        practiceLabel: "Products starting with 'C'",
        practicePrompt: "Use LIKE to find product names that start with the letter C.",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
WHERE ProductName LIKE 'C%'
ORDER BY ProductName;`,
      },
    ],
    keyTakeaways: [
      "IN replaces long chains of OR on the same column.",
      "BETWEEN is inclusive of both endpoints.",
      "LIKE uses % (any length) and _ (single character) wildcards.",
    ],
  },
  "sql-m3-t4": {
    topicId: "sql-m3-t4",
    intro:
      "ORDER BY controls the sequence of rows in your result — alphabetical lists, price rankings, and newest-first reports all start here.",
    blocks: [
      { type: "infographic", infographic: "sql-order-by" },
      {
        type: "practice",
        practiceLabel: "Customers A→Z by country",
        practicePrompt: "Sort customers by Country ascending, then CompanyName ascending.",
        starterCode: `SELECT Country, CompanyName, City
FROM Customers
ORDER BY Country ASC, CompanyName ASC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Most expensive products",
        practicePrompt: "List the 10 highest-priced products (UnitPrice DESC).",
        starterCode: `SELECT ProductName, UnitPrice
FROM Products
ORDER BY UnitPrice DESC
LIMIT 10;`,
      },
      {
        type: "practice",
        practiceLabel: "Recent orders first",
        practicePrompt: "Show OrderID, OrderDate, and CustomerID for the 15 most recent orders.",
        starterCode: `SELECT OrderID, OrderDate, CustomerID
FROM Orders
ORDER BY OrderDate DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "ASC sorts low→high (default); DESC sorts high→low.",
      "Multiple ORDER BY columns break ties left-to-right.",
      "Combine ORDER BY with LIMIT for top-N queries.",
    ],
  },
};
