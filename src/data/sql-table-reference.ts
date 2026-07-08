import type { SqlDatabaseId } from "@/lib/sql-runtime";

export interface SqlTableRef {
  name: string;
  description: string;
  role: string;
  keyColumns: string[];
}

export interface SqlTopicTableReference {
  topicId: string;
  databaseId: SqlDatabaseId;
  contextNote: string;
  tables: SqlTableRef[];
}

// ── Learning database (Module 1) ─────────────────────────────────────────────

const LEARNING_DEPARTMENTS: SqlTableRef = {
  name: "departments",
  description: "Organisational units — Engineering, Sales, HR.",
  role: "Lookup / dimension table",
  keyColumns: ["dept_id (PK)", "dept_name", "location"],
};

const LEARNING_EMPLOYEES: SqlTableRef = {
  name: "employees",
  description: "Staff records with salary, hire date, and department assignment.",
  role: "Fact table — one row per employee",
  keyColumns: ["emp_id (PK)", "first_name", "last_name", "dept_id (FK → departments)"],
};

const LEARNING_PROJECTS: SqlTableRef = {
  name: "projects",
  description: "Initiatives owned by departments with budget tracking.",
  role: "Fact table — links to departments",
  keyColumns: ["project_id (PK)", "project_name", "budget", "dept_id (FK)"],
};

// ── Northwind database (Modules 2–9) ─────────────────────────────────────────

const NW_CUSTOMERS: SqlTableRef = {
  name: "Customers",
  description: "Companies that place orders — contact and address details.",
  role: "Dimension — one row per customer",
  keyColumns: ["CustomerID (PK)", "CompanyName", "Country", "City"],
};

const NW_PRODUCTS: SqlTableRef = {
  name: "Products",
  description: "Catalog items with pricing, stock levels, and supplier/category links.",
  role: "Dimension — one row per product",
  keyColumns: ["ProductID (PK)", "ProductName", "UnitPrice", "CategoryID (FK)", "SupplierID (FK)"],
};

const NW_CATEGORIES: SqlTableRef = {
  name: "Categories",
  description: "Product groupings such as Beverages, Seafood, Confections.",
  role: "Lookup table for Products",
  keyColumns: ["CategoryID (PK)", "CategoryName", "Description"],
};

const NW_SUPPLIERS: SqlTableRef = {
  name: "Suppliers",
  description: "Vendors who supply products to Northwind Traders.",
  role: "Lookup table for Products",
  keyColumns: ["SupplierID (PK)", "CompanyName", "Country", "ContactName"],
};

const NW_ORDERS: SqlTableRef = {
  name: "Orders",
  description: "Order headers — who ordered, when, shipping details, and freight.",
  role: "Fact header — links customer, employee, shipper",
  keyColumns: ["OrderID (PK)", "CustomerID (FK)", "EmployeeID (FK)", "OrderDate"],
};

const NW_ORDER_DETAILS: SqlTableRef = {
  name: "Order Details",
  description: "Line items per order — product, quantity, unit price, and discount.",
  role: "Fact detail — many rows per order",
  keyColumns: ["OrderID (FK)", "ProductID (FK)", "Quantity", "UnitPrice", "Discount"],
};

const NW_EMPLOYEES: SqlTableRef = {
  name: "Employees",
  description: "Northwind staff who take orders — includes ReportsTo hierarchy.",
  role: "Dimension + self-referencing hierarchy",
  keyColumns: ["EmployeeID (PK)", "FirstName", "LastName", "Title", "ReportsTo (FK → self)"],
};

/** Topic → tables used in lessons and exercises */
export const SQL_TOPIC_TABLE_REFERENCES: Record<string, SqlTopicTableReference> = {
  // Module 1 — SQL Foundations
  "sql-m1-t1": {
    topicId: "sql-m1-t1",
    databaseId: "learning",
    contextNote: "Module 1 uses a small company database with three core tables.",
    tables: [LEARNING_DEPARTMENTS, LEARNING_EMPLOYEES, LEARNING_PROJECTS],
  },
  "sql-m1-t2": {
    topicId: "sql-m1-t2",
    databaseId: "learning",
    contextNote: "Study how primary and foreign keys connect employees to departments.",
    tables: [LEARNING_EMPLOYEES, LEARNING_DEPARTMENTS, LEARNING_PROJECTS],
  },
  "sql-m1-t3": {
    topicId: "sql-m1-t3",
    databaseId: "learning",
    contextNote: "Run your first SELECT queries against departments and employees.",
    tables: [LEARNING_DEPARTMENTS, LEARNING_EMPLOYEES],
  },
  "sql-m1-t4": {
    topicId: "sql-m1-t4",
    databaseId: "learning",
    contextNote: "Inspect column types and constraints on employee and project data.",
    tables: [LEARNING_EMPLOYEES, LEARNING_DEPARTMENTS, LEARNING_PROJECTS],
  },
  "sql-m1-t5": {
    topicId: "sql-m1-t5",
    databaseId: "learning",
    contextNote: "Practice DQL (SELECT) and preview DML targets on employees.",
    tables: [LEARNING_EMPLOYEES, LEARNING_DEPARTMENTS, LEARNING_PROJECTS],
  },
  "sql-m1-t6": {
    topicId: "sql-m1-t6",
    databaseId: "learning",
    contextNote: "DDL exercises may create temporary tables — existing schema shown for reference.",
    tables: [LEARNING_EMPLOYEES, LEARNING_DEPARTMENTS, LEARNING_PROJECTS],
  },
  "sql-m1-t7": {
    topicId: "sql-m1-t7",
    databaseId: "learning",
    contextNote: "INSERT, UPDATE, and DELETE practice targets employees and departments.",
    tables: [LEARNING_EMPLOYEES, LEARNING_DEPARTMENTS],
  },
  "sql-m1-t8": {
    topicId: "sql-m1-t8",
    databaseId: "learning",
    contextNote: "Combine DQL filters with transactional updates on employee salaries.",
    tables: [LEARNING_EMPLOYEES, LEARNING_DEPARTMENTS, LEARNING_PROJECTS],
  },

  // Module 2 — SELECT Fundamentals
  "sql-m2-t1": {
    topicId: "sql-m2-t1",
    databaseId: "northwind",
    contextNote: "Northwind is a classic trading company dataset used from Module 2 onward.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS],
  },
  "sql-m2-t2": {
    topicId: "sql-m2-t2",
    databaseId: "northwind",
    contextNote: "Build calculated columns on product prices and customer contact fields.",
    tables: [NW_PRODUCTS, NW_CUSTOMERS, NW_EMPLOYEES],
  },
  "sql-m2-t3": {
    topicId: "sql-m2-t3",
    databaseId: "northwind",
    contextNote: "DISTINCT and LIMIT on countries, cities, and product names.",
    tables: [NW_CUSTOMERS, NW_SUPPLIERS, NW_PRODUCTS],
  },
  "sql-m2-t4": {
    topicId: "sql-m2-t4",
    databaseId: "northwind",
    contextNote: "NULLs appear in Region, Fax, and other optional columns.",
    tables: [NW_CUSTOMERS, NW_EMPLOYEES, NW_PRODUCTS],
  },

  // Module 3 — Filtering & Sorting
  "sql-m3-t1": {
    topicId: "sql-m3-t1",
    databaseId: "northwind",
    contextNote: "Filter products by price, stock, and discontinuation status.",
    tables: [NW_PRODUCTS, NW_CUSTOMERS, NW_ORDERS],
  },
  "sql-m3-t2": {
    topicId: "sql-m3-t2",
    databaseId: "northwind",
    contextNote: "Combine AND/OR on product and order filters.",
    tables: [NW_PRODUCTS, NW_ORDERS, NW_CUSTOMERS],
  },
  "sql-m3-t3": {
    topicId: "sql-m3-t3",
    databaseId: "northwind",
    contextNote: "IN, BETWEEN, and LIKE on customer and product text fields.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_CATEGORIES],
  },
  "sql-m3-t4": {
    topicId: "sql-m3-t4",
    databaseId: "northwind",
    contextNote: "ORDER BY on prices, dates, and multi-column sorts.",
    tables: [NW_PRODUCTS, NW_ORDERS, NW_CUSTOMERS],
  },

  // Module 4 — JOINs
  "sql-m4-t1": {
    topicId: "sql-m4-t1",
    databaseId: "northwind",
    contextNote: "See how foreign keys link orders → customers and products → categories.",
    tables: [NW_ORDERS, NW_CUSTOMERS, NW_PRODUCTS, NW_CATEGORIES],
  },
  "sql-m4-t2": {
    topicId: "sql-m4-t2",
    databaseId: "northwind",
    contextNote: "INNER JOIN products to categories and orders to customers.",
    tables: [NW_PRODUCTS, NW_CATEGORIES, NW_ORDERS, NW_CUSTOMERS, NW_ORDER_DETAILS],
  },
  "sql-m4-t3": {
    topicId: "sql-m4-t3",
    databaseId: "northwind",
    contextNote: "LEFT JOIN to include customers or categories with no matches.",
    tables: [NW_CUSTOMERS, NW_ORDERS, NW_CATEGORIES, NW_PRODUCTS, NW_SUPPLIERS],
  },
  "sql-m4-t4": {
    topicId: "sql-m4-t4",
    databaseId: "northwind",
    contextNote: "Self-join Employees.ReportsTo; CROSS JOIN for combinations.",
    tables: [NW_EMPLOYEES, NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS],
  },

  // Module 5 — Aggregates
  "sql-m5-t1": {
    topicId: "sql-m5-t1",
    databaseId: "northwind",
    contextNote: "Aggregate order lines and product catalog statistics.",
    tables: [NW_ORDER_DETAILS, NW_PRODUCTS, NW_ORDERS],
  },
  "sql-m5-t2": {
    topicId: "sql-m5-t2",
    databaseId: "northwind",
    contextNote: "COUNT, MIN, MAX on products and order quantities.",
    tables: [NW_PRODUCTS, NW_ORDER_DETAILS, NW_CUSTOMERS],
  },
  "sql-m5-t3": {
    topicId: "sql-m5-t3",
    databaseId: "northwind",
    contextNote: "SUM and AVG revenue from order line items.",
    tables: [NW_ORDER_DETAILS, NW_ORDERS, NW_PRODUCTS],
  },
  "sql-m5-t4": {
    topicId: "sql-m5-t4",
    databaseId: "northwind",
    contextNote: "GROUP BY country, category, and customer.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_CATEGORIES, NW_ORDER_DETAILS],
  },
  "sql-m5-t5": {
    topicId: "sql-m5-t5",
    databaseId: "northwind",
    contextNote: "Multi-column GROUP BY on country + city and category + supplier.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS],
  },
  "sql-m5-t6": {
    topicId: "sql-m5-t6",
    databaseId: "northwind",
    contextNote: "HAVING filters groups with high totals or counts.",
    tables: [NW_ORDER_DETAILS, NW_CUSTOMERS, NW_ORDERS, NW_PRODUCTS],
  },

  // Module 6 — Functions
  "sql-m6-t1": {
    topicId: "sql-m6-t1",
    databaseId: "northwind",
    contextNote: "Scalar functions on customer, product, and employee fields.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_EMPLOYEES],
  },
  "sql-m6-t2": {
    topicId: "sql-m6-t2",
    databaseId: "northwind",
    contextNote: "String functions on CompanyName, ProductName, and employee names.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_EMPLOYEES, NW_SUPPLIERS],
  },
  "sql-m6-t3": {
    topicId: "sql-m6-t3",
    databaseId: "northwind",
    contextNote: "ROUND, ABS, and arithmetic on UnitPrice and order totals.",
    tables: [NW_PRODUCTS, NW_ORDER_DETAILS],
  },
  "sql-m6-t4": {
    topicId: "sql-m6-t4",
    databaseId: "northwind",
    contextNote: "Date functions on OrderDate, HireDate, and RequiredDate.",
    tables: [NW_ORDERS, NW_EMPLOYEES],
  },
  "sql-m6-t5": {
    topicId: "sql-m6-t5",
    databaseId: "northwind",
    contextNote: "CASE expressions for price tiers, stock status, and regions.",
    tables: [NW_PRODUCTS, NW_CUSTOMERS, NW_ORDERS],
  },
  "sql-m6-t6": {
    topicId: "sql-m6-t6",
    databaseId: "northwind",
    contextNote: "COALESCE and NULLIF on Region, Fax, and UnitsInStock.",
    tables: [NW_CUSTOMERS, NW_PRODUCTS, NW_EMPLOYEES],
  },

  // Module 7 — Subqueries
  "sql-m7-t1": {
    topicId: "sql-m7-t1",
    databaseId: "northwind",
    contextNote: "Subqueries comparing products to catalog averages.",
    tables: [NW_PRODUCTS, NW_CATEGORIES],
  },
  "sql-m7-t2": {
    topicId: "sql-m7-t2",
    databaseId: "northwind",
    contextNote: "IN / NOT IN across customers, suppliers, and order lines.",
    tables: [NW_CUSTOMERS, NW_SUPPLIERS, NW_PRODUCTS, NW_ORDER_DETAILS],
  },
  "sql-m7-t3": {
    topicId: "sql-m7-t3",
    databaseId: "northwind",
    contextNote: "Scalar subqueries for per-customer order counts and price thresholds.",
    tables: [NW_CUSTOMERS, NW_ORDERS, NW_PRODUCTS],
  },
  "sql-m7-t4": {
    topicId: "sql-m7-t4",
    databaseId: "northwind",
    contextNote: "Derived tables from aggregated order lines and category stats.",
    tables: [NW_ORDER_DETAILS, NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS],
  },
  "sql-m7-t5": {
    topicId: "sql-m7-t5",
    databaseId: "northwind",
    contextNote: "Correlated subqueries on category averages and employee reports.",
    tables: [NW_PRODUCTS, NW_CATEGORIES, NW_EMPLOYEES, NW_ORDERS],
  },
  "sql-m7-t6": {
    topicId: "sql-m7-t6",
    databaseId: "northwind",
    contextNote: "EXISTS / NOT EXISTS for customers with orders and suppliers without products.",
    tables: [NW_CUSTOMERS, NW_ORDERS, NW_SUPPLIERS, NW_PRODUCTS],
  },

  // Module 8 — Views & Set Operations
  "sql-m8-t1": {
    topicId: "sql-m8-t1",
    databaseId: "northwind",
    contextNote: "Views wrap joins across products, categories, suppliers, and orders.",
    tables: [NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS, NW_CUSTOMERS, NW_ORDERS],
  },
  "sql-m8-t2": {
    topicId: "sql-m8-t2",
    databaseId: "northwind",
    contextNote: "CREATE VIEW on product catalog and customer order summaries.",
    tables: [NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS, NW_CUSTOMERS, NW_ORDERS],
  },
  "sql-m8-t3": {
    topicId: "sql-m8-t3",
    databaseId: "northwind",
    contextNote: "UNION / INTERSECT / EXCEPT on customer and supplier address lists.",
    tables: [NW_CUSTOMERS, NW_SUPPLIERS],
  },
  "sql-m8-t4": {
    topicId: "sql-m8-t4",
    databaseId: "northwind",
    contextNote: "UNION ALL stacks customer and supplier names with role tags.",
    tables: [NW_CUSTOMERS, NW_SUPPLIERS, NW_EMPLOYEES],
  },
  "sql-m8-t5": {
    topicId: "sql-m8-t5",
    databaseId: "northwind",
    contextNote: "INTERSECT finds shared countries and cities.",
    tables: [NW_CUSTOMERS, NW_SUPPLIERS, NW_PRODUCTS, NW_CATEGORIES],
  },
  "sql-m8-t6": {
    topicId: "sql-m8-t6",
    databaseId: "northwind",
    contextNote: "EXCEPT finds countries only in customers or only in suppliers.",
    tables: [NW_CUSTOMERS, NW_SUPPLIERS, NW_PRODUCTS, NW_CATEGORIES],
  },

  // Module 9 — CTEs
  "sql-m9-t1": {
    topicId: "sql-m9-t1",
    databaseId: "northwind",
    contextNote: "CTEs filter expensive products and high-stock items.",
    tables: [NW_PRODUCTS, NW_CATEGORIES],
  },
  "sql-m9-t2": {
    topicId: "sql-m9-t2",
    databaseId: "northwind",
    contextNote: "Compare CTEs to subqueries on category price averages.",
    tables: [NW_PRODUCTS, NW_CATEGORIES],
  },
  "sql-m9-t3": {
    topicId: "sql-m9-t3",
    databaseId: "northwind",
    contextNote: "Chain CTEs from order lines → big orders → customers.",
    tables: [NW_ORDER_DETAILS, NW_ORDERS, NW_CUSTOMERS, NW_PRODUCTS],
  },
  "sql-m9-t4": {
    topicId: "sql-m9-t4",
    databaseId: "northwind",
    contextNote: "Aggregate revenue in CTEs, then join to customers and categories.",
    tables: [NW_ORDER_DETAILS, NW_ORDERS, NW_CUSTOMERS, NW_PRODUCTS, NW_CATEGORIES, NW_SUPPLIERS],
  },
  "sql-m9-t5": {
    topicId: "sql-m9-t5",
    databaseId: "northwind",
    contextNote: "Recursive CTE demos; Employees for hierarchy preview.",
    tables: [NW_EMPLOYEES, NW_ORDERS],
  },
  "sql-m9-t6": {
    topicId: "sql-m9-t6",
    databaseId: "northwind",
    contextNote: "Walk the ReportsTo org chart with recursive CTEs.",
    tables: [NW_EMPLOYEES],
  },
};

export function getSqlTablesForTopic(topicId: string): SqlTopicTableReference | undefined {
  return SQL_TOPIC_TABLE_REFERENCES[topicId];
}

export function hasSqlTableReference(topicId: string): boolean {
  return topicId in SQL_TOPIC_TABLE_REFERENCES;
}
