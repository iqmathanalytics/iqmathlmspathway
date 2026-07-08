import type { TopicLesson } from "@/lib/types";

export const sqlModule4Lessons: Record<string, TopicLesson> = {
  "sql-m4-t1": {
    topicId: "sql-m4-t1",
    intro:
      "Real databases are normalized — customer names live in Customers, order dates in Orders, product prices in Products. JOINs reunite related rows at query time using foreign keys, so you never store “Acme Corp” on every order line.",
    blocks: [
      { type: "infographic", infographic: "sql-why-joins" },
      {
        type: "heading",
        content: "Northwind relationship map",
      },
      {
        type: "list",
        items: [
          "Customers.CustomerID ← Orders.CustomerID (who placed the order)",
          "Products.CategoryID → Categories (what type of product)",
          "Products.SupplierID → Suppliers (who ships it)",
          "[Order Details] links Orders ↔ Products (line items)",
        ],
      },
      {
        type: "tip",
        content:
          "Open View table details in the SQL IDE panel to see keys and sample rows before writing JOINs.",
      },
      {
        type: "practice",
        practiceLabel: "Spot the foreign key",
        practicePrompt:
          "Preview CustomerID in Customers and Orders — the matching values are what you join on.",
        starterCode: `SELECT CustomerID, CompanyName
FROM Customers
ORDER BY CustomerID
LIMIT 8;

-- Run next:
-- SELECT CustomerID, OrderID, OrderDate FROM Orders ORDER BY CustomerID LIMIT 8;`,
      },
      {
        type: "practice",
        practiceLabel: "Product outgoing keys",
        practicePrompt:
          "Each product points to a category and supplier via CategoryID and SupplierID.",
        starterCode: `SELECT
  ProductID,
  ProductName,
  CategoryID,
  SupplierID,
  UnitPrice
FROM Products
ORDER BY CategoryID, ProductName
LIMIT 15;`,
      },
      {
        type: "practice",
        practiceLabel: "Order header keys",
        practicePrompt:
          "Orders reference both a customer and the employee who took the order.",
        starterCode: `SELECT
  OrderID,
  CustomerID,
  EmployeeID,
  OrderDate,
  ShipCountry
FROM Orders
ORDER BY OrderDate DESC
LIMIT 12;`,
      },
      {
        type: "practice",
        practiceLabel: "Line-item bridge table",
        practicePrompt:
          "[Order Details] is the classic many-to-many bridge between Orders and Products.",
        starterCode: `SELECT OrderID, ProductID, Quantity, UnitPrice, Discount
FROM [Order Details]
ORDER BY OrderID
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Foreign keys encode relationships; JOINs follow those links in SELECT.",
      "Normalization reduces duplication; JOINs restore a readable view.",
      "Draw the table diagram before writing multi-table queries.",
    ],
  },
  "sql-m4-t2": {
    topicId: "sql-m4-t2",
    intro:
      "INNER JOIN is the default workhorse — if a row has no partner on the other side, it disappears from the result. Use it when you only care about complete relationships: orders that exist, products that have a category, customers who actually bought something.",
    blocks: [
      { type: "infographic", infographic: "sql-inner-join" },
      {
        type: "heading",
        content: "INNER JOIN syntax",
      },
      {
        type: "paragraph",
        content:
          "FROM left_table alias INNER JOIN right_table alias ON left.key = right.key. Always qualify column names (c.CompanyName) once two tables share names like CustomerID.",
      },
      {
        type: "practice",
        practiceLabel: "Customer order history",
        practicePrompt:
          "Join Customers and Orders. Show company name, order ID, and date — newest orders first.",
        starterCode: `SELECT
  c.CompanyName,
  o.OrderID,
  o.OrderDate,
  o.Freight
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
ORDER BY o.OrderDate DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Product catalog with categories",
        practicePrompt:
          "Join Products to Categories for human-readable category names beside each product.",
        starterCode: `SELECT
  p.ProductName,
  c.CategoryName,
  p.UnitPrice,
  p.UnitsInStock
FROM Products p
INNER JOIN Categories c ON p.CategoryID = c.CategoryID
ORDER BY c.CategoryName, p.UnitPrice DESC
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Three-table line items",
        practicePrompt:
          "Join [Order Details] → Orders → Products to see what was sold on each order.",
        starterCode: `SELECT
  o.OrderID,
  o.OrderDate,
  p.ProductName,
  od.Quantity,
  od.UnitPrice,
  ROUND(od.Quantity * od.UnitPrice * (1 - od.Discount), 2) AS LineTotal
FROM [Order Details] od
INNER JOIN Orders o ON od.OrderID = o.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID
ORDER BY o.OrderDate DESC
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Supplier country per product",
        practicePrompt:
          "Products INNER JOIN Suppliers — show product name, supplier name, and supplier country.",
        starterCode: `SELECT
  p.ProductName,
  s.CompanyName AS Supplier,
  s.Country AS SupplierCountry,
  p.UnitPrice
FROM Products p
INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID
ORDER BY s.Country, p.ProductName
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "INNER JOIN drops rows without a match on both sides.",
      "Table aliases (c, o, p) keep queries short and readable.",
      "Chain JOINs left-to-right; each ON clause links the new table to prior ones.",
    ],
  },
  "sql-m4-t3": {
    topicId: "sql-m4-t3",
    intro:
      "LEFT JOIN keeps every row from the left table even when the right side has no match — NULL fills the gaps. That is how you find customers who never ordered, suppliers with no products, or categories with zero items.",
    blocks: [
      { type: "infographic", infographic: "sql-left-right-join" },
      {
        type: "heading",
        content: "Finding gaps with LEFT JOIN",
      },
      {
        type: "paragraph",
        content:
          "Pattern: LEFT JOIN … WHERE right_table.key IS NULL finds left rows with no partner. SQLite has no RIGHT JOIN — swap table order and use LEFT JOIN instead.",
      },
      {
        type: "practice",
        practiceLabel: "All customers, optional orders",
        practicePrompt:
          "LEFT JOIN Customers to Orders. Customers without orders show NULL for order columns.",
        starterCode: `SELECT
  c.CompanyName,
  c.Country,
  o.OrderID,
  o.OrderDate
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
ORDER BY c.CompanyName
LIMIT 25;`,
      },
      {
        type: "practice",
        practiceLabel: "Customers with no orders",
        practicePrompt:
          "Filter WHERE OrderID IS NULL after a LEFT JOIN to find customers who never purchased.",
        starterCode: `SELECT c.CompanyName, c.Country, c.City
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
WHERE o.OrderID IS NULL
ORDER BY c.Country, c.CompanyName;`,
      },
      {
        type: "practice",
        practiceLabel: "Every supplier's products",
        practicePrompt:
          "LEFT JOIN Suppliers to Products — suppliers without catalog items still appear.",
        starterCode: `SELECT
  s.CompanyName AS Supplier,
  s.Country,
  p.ProductName
FROM Suppliers s
LEFT JOIN Products p ON s.SupplierID = p.SupplierID
ORDER BY s.CompanyName, p.ProductName
LIMIT 30;`,
      },
      {
        type: "practice",
        practiceLabel: "RIGHT JOIN via swap",
        practicePrompt:
          "To list all products with supplier info (SQLite has no RIGHT JOIN), put Products on the left.",
        starterCode: `SELECT
  p.ProductName,
  s.CompanyName AS Supplier,
  s.Country
FROM Products p
LEFT JOIN Suppliers s ON p.SupplierID = s.SupplierID
ORDER BY s.Country, p.ProductName
LIMIT 20;`,
      },
    ],
    keyTakeaways: [
      "LEFT JOIN preserves all left-table rows; missing right values are NULL.",
      "WHERE … IS NULL after LEFT JOIN finds rows with no match.",
      "Swap tables to simulate RIGHT JOIN in SQLite.",
    ],
  },
  "sql-m4-t4": {
    topicId: "sql-m4-t4",
    intro:
      "Beyond the everyday INNER and LEFT JOINs, self joins model hierarchies inside one table, and CROSS JOIN generates every combination — powerful for grids and dangerous without LIMIT.",
    blocks: [
      { type: "infographic", infographic: "sql-full-cross-self-join" },
      {
        type: "heading",
        content: "Special join patterns",
      },
      {
        type: "list",
        items: [
          "Self JOIN — same table twice with different aliases (employee → manager)",
          "CROSS JOIN — Cartesian product; rows × rows",
          "FULL OUTER JOIN — unmatched from both sides (use UNION in SQLite)",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Employee and manager",
        practicePrompt:
          "Self-join Employees: ReportsTo points to another EmployeeID (the manager).",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  e.Title,
  m.FirstName || ' ' || m.LastName AS Manager
FROM Employees e
LEFT JOIN Employees m ON e.ReportsTo = m.EmployeeID
ORDER BY Manager, Employee;`,
      },
      {
        type: "practice",
        practiceLabel: "Who reports to whom?",
        practicePrompt:
          "Only employees who have a manager (INNER self join on ReportsTo).",
        starterCode: `SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  m.FirstName || ' ' || m.LastName AS Manager
FROM Employees e
INNER JOIN Employees m ON e.ReportsTo = m.EmployeeID
ORDER BY m.LastName, e.LastName;`,
      },
      {
        type: "practice",
        practiceLabel: "Category × supplier grid",
        practicePrompt:
          "CROSS JOIN every category with every supplier — always LIMIT when exploring.",
        starterCode: `SELECT
  c.CategoryName,
  s.CompanyName AS Supplier,
  s.Country
FROM Categories c
CROSS JOIN Suppliers s
LIMIT 20;`,
      },
      {
        type: "practice",
        practiceLabel: "Orders handled by staff",
        practicePrompt:
          "Join Orders to Employees to see which rep handled each sale.",
        starterCode: `SELECT
  o.OrderID,
  o.OrderDate,
  c.CompanyName AS Customer,
  e.FirstName || ' ' || e.LastName AS SalesRep
FROM Orders o
INNER JOIN Customers c ON c.CustomerID = o.CustomerID
INNER JOIN Employees e ON e.EmployeeID = o.EmployeeID
ORDER BY o.OrderDate DESC
LIMIT 15;`,
      },
    ],
    keyTakeaways: [
      "Self JOIN uses two aliases on the same table for parent/child links.",
      "CROSS JOIN multiplies row counts — use deliberately, not by accident.",
      "Combine INNER + LEFT joins in one query for rich operational reports.",
    ],
  },
};
