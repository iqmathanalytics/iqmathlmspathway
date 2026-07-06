import fs from "fs";
import initSqlJs from "sql.js";

const SQL = await initSqlJs();
const db = new SQL.Database(
  fs.readFileSync(new URL("../public/databases/northwind.sqlite", import.meta.url))
);
const one = (sql) => db.exec(sql)[0]?.values[0][0];
console.log("orders", one("SELECT COUNT(*) FROM Orders"));
console.log("customers with orders", one("SELECT COUNT(DISTINCT CustomerID) FROM Orders"));
console.log("customers no orders", one(`
  SELECT COUNT(*) FROM Customers c
  LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
  WHERE o.OrderID IS NULL
`));
console.log("employees with manager", one("SELECT COUNT(*) FROM Employees WHERE ReportsTo IS NOT NULL"));
