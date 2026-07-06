import type { TopicLesson } from "@/lib/types";

export const sqlModule5Lessons: Record<string, TopicLesson> = {
  "sql-m5-t1": {
    topicId: "sql-m5-t1",
    intro:
      "Aggregate functions turn many rows into a single summary — how many customers, average price, total freight. They are the foundation of analytics in SQL.",
    blocks: [
      { type: "infographic", infographic: "sql-aggregates-intro" },
      {
        type: "practice",
        practiceLabel: "How many customers?",
        practicePrompt: "Use COUNT(*) to count all rows in Customers.",
        starterCode: `SELECT COUNT(*) AS TotalCustomers
FROM Customers;`,
      },
      {
        type: "practice",
        practiceLabel: "Average product price",
        practicePrompt: "Find the average UnitPrice across all products (round to 2 decimals).",
        starterCode: `SELECT ROUND(AVG(UnitPrice), 2) AS AvgUnitPrice
FROM Products;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders overview",
        practicePrompt: "Count orders and show total freight using COUNT and SUM in one query.",
        starterCode: `SELECT
  COUNT(*) AS OrderCount,
  ROUND(SUM(Freight), 2) AS TotalFreight
FROM Orders;`,
      },
    ],
    keyTakeaways: [
      "Aggregates collapse many rows into one summary value.",
      "Common functions: COUNT, SUM, AVG, MIN, MAX.",
      "WHERE filters rows before aggregates run.",
    ],
  },
  "sql-m5-t2": {
    topicId: "sql-m5-t2",
    intro:
      "COUNT tells you how many rows exist. MIN and MAX find the smallest and largest values — great for price ranges and date extremes.",
    blocks: [
      { type: "infographic", infographic: "sql-count-min-max" },
      {
        type: "practice",
        practiceLabel: "COUNT(*) vs COUNT(column)",
        practicePrompt:
          "Compare COUNT(*) with COUNT(Region) on Customers — Region has NULLs, so counts differ.",
        starterCode: `SELECT
  COUNT(*) AS AllCustomers,
  COUNT(Region) AS CustomersWithRegion
FROM Customers;`,
      },
      {
        type: "practice",
        practiceLabel: "Price range",
        practicePrompt: "Find the cheapest and most expensive product UnitPrice.",
        starterCode: `SELECT
  MIN(UnitPrice) AS Cheapest,
  MAX(UnitPrice) AS MostExpensive
FROM Products;`,
      },
      {
        type: "practice",
        practiceLabel: "Order date span",
        practicePrompt: "What is the earliest and latest OrderDate in the Orders table?",
        starterCode: `SELECT
  MIN(OrderDate) AS FirstOrder,
  MAX(OrderDate) AS LastOrder
FROM Orders;`,
      },
    ],
    keyTakeaways: [
      "COUNT(*) counts every row; COUNT(col) skips NULLs.",
      "MIN and MAX work on numbers, dates, and text (alphabetical).",
      "Combine several aggregates in one SELECT.",
    ],
  },
  "sql-m5-t3": {
    topicId: "sql-m5-t3",
    intro:
      "SUM adds values up; AVG computes the mean. Use them for revenue totals, inventory sums, and average ratings or prices.",
    blocks: [
      { type: "infographic", infographic: "sql-sum-avg" },
      {
        type: "practice",
        practiceLabel: "Total freight",
        practicePrompt: "Sum all Freight charges and compute the average per order.",
        starterCode: `SELECT
  ROUND(SUM(Freight), 2) AS TotalFreight,
  ROUND(AVG(Freight), 2) AS AvgFreight
FROM Orders;`,
      },
      {
        type: "practice",
        practiceLabel: "Stock on hand",
        practicePrompt: "For active products only (Discontinued = 0), sum UnitsInStock and average UnitPrice.",
        starterCode: `SELECT
  SUM(UnitsInStock) AS TotalUnits,
  ROUND(AVG(UnitPrice), 2) AS AvgPrice
FROM Products
WHERE Discontinued = 0;`,
      },
      {
        type: "practice",
        practiceLabel: "Line-item revenue",
        practicePrompt:
          "On [Order Details], compute total line revenue as SUM(Quantity * UnitPrice).",
        starterCode: `SELECT ROUND(SUM(Quantity * UnitPrice), 2) AS TotalLineRevenue
FROM [Order Details];`,
      },
    ],
    keyTakeaways: [
      "SUM adds numeric columns; AVG divides sum by non-NULL count.",
      "ROUND() keeps currency readable.",
      "Filter with WHERE before aggregating when possible.",
    ],
  },
  "sql-m5-t4": {
    topicId: "sql-m5-t4",
    intro:
      "GROUP BY creates one result row per unique combination of grouping columns, with aggregates computed inside each bucket.",
    blocks: [
      { type: "infographic", infographic: "sql-group-by-basics" },
      {
        type: "practice",
        practiceLabel: "Customers per country",
        practicePrompt: "Count customers in each Country. Sort by count descending.",
        starterCode: `SELECT Country, COUNT(*) AS CustomerCount
FROM Customers
GROUP BY Country
ORDER BY CustomerCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Products per category",
        practicePrompt: "Join Categories and Products, then count products per category name.",
        starterCode: `SELECT c.CategoryName, COUNT(p.ProductID) AS ProductCount
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
ORDER BY ProductCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders per employee",
        practicePrompt: "Count how many orders each employee handled.",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  COUNT(o.OrderID) AS OrdersHandled
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
ORDER BY OrdersHandled DESC;`,
      },
    ],
    keyTakeaways: [
      "GROUP BY splits data into groups before aggregating.",
      "Non-aggregated SELECT columns must appear in GROUP BY.",
      "JOIN then GROUP BY is common for labeled groups.",
    ],
  },
  "sql-m5-t5": {
    topicId: "sql-m5-t5",
    intro:
      "Adding more columns to GROUP BY creates smaller, more specific groups — customers per city within each country, or orders per employee per year.",
    blocks: [
      { type: "infographic", infographic: "sql-group-by-multiple" },
      {
        type: "practice",
        practiceLabel: "Country and city",
        practicePrompt: "Count customers grouped by both Country and City.",
        starterCode: `SELECT Country, City, COUNT(*) AS CustomerCount
FROM Customers
GROUP BY Country, City
ORDER BY Country, City
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders by year",
        practicePrompt:
          "Group orders by year (use strftime('%Y', OrderDate)) and count them.",
        starterCode: `SELECT
  strftime('%Y', OrderDate) AS OrderYear,
  COUNT(*) AS OrderCount
FROM Orders
GROUP BY OrderYear
ORDER BY OrderYear;`,
      },
      {
        type: "practice",
        practiceLabel: "Employee orders per year",
        practicePrompt: "Group by employee and order year — who handled how many orders each year?",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  strftime('%Y', o.OrderDate) AS OrderYear,
  COUNT(o.OrderID) AS OrdersHandled
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID, OrderYear
ORDER BY Employee, OrderYear;`,
      },
    ],
    keyTakeaways: [
      "Multiple GROUP BY columns create finer-grained buckets.",
      "Order of GROUP BY columns does not change the groups, only presentation.",
      "Use strftime for date parts in SQLite.",
    ],
  },
  "sql-m5-t6": {
    topicId: "sql-m5-t6",
    intro:
      "HAVING filters groups after aggregation — countries with more than 5 customers, categories with average price above a threshold, employees with over 100 orders.",
    blocks: [
      { type: "infographic", infographic: "sql-having" },
      {
        type: "practice",
        practiceLabel: "Countries with many customers",
        practicePrompt: "Countries with more than 5 customers (HAVING COUNT(*) > 5).",
        starterCode: `SELECT Country, COUNT(*) AS CustomerCount
FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5
ORDER BY CustomerCount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "High-average categories",
        practicePrompt: "Categories whose average product price exceeds $25.",
        starterCode: `SELECT c.CategoryName, ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
HAVING AVG(p.UnitPrice) > 25
ORDER BY AvgPrice DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "Busy employees",
        practicePrompt: "Employees who handled more than 200 orders.",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  COUNT(o.OrderID) AS OrdersHandled
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
HAVING COUNT(o.OrderID) > 200
ORDER BY OrdersHandled DESC;`,
      },
    ],
    keyTakeaways: [
      "HAVING filters groups; WHERE filters individual rows.",
      "HAVING can use aggregate expressions like COUNT(*) or AVG(col).",
      "Comes after GROUP BY in the query.",
    ],
  },
};
