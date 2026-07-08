import type { SqlDatabaseId } from "@/lib/sql-runtime";

export interface SchemaColumn {
  name: string;
  type: string;
  primaryKey?: boolean;
  foreignKey?: { table: string; column: string };
}

export interface SchemaTable {
  name: string;
  x: number;
  y: number;
  columns: SchemaColumn[];
}

export interface SchemaRelationship {
  fromTable: string;
  fromColumn: string;
  toTable: string;
  toColumn: string;
}

export interface SqlSchemaModel {
  databaseId: SqlDatabaseId;
  title: string;
  subtitle: string;
  canvasWidth: number;
  canvasHeight: number;
  tables: SchemaTable[];
  relationships: SchemaRelationship[];
}

function col(
  name: string,
  type: string,
  opts?: { primaryKey?: boolean; foreignKey?: { table: string; column: string } }
): SchemaColumn {
  return { name, type, ...opts };
}

/**
 * Layout (non-overlapping, left-to-right business flow):
 *
 *  CustomerDemographics          Employees          Categories     Suppliers
 *  CustomerCustomerDemo             |                  |
 *  Customers -------- Orders ---- Order Details -- Products
 *                        |              |
 *                    Shippers     EmployeeTerritories
 *                                      |
 *                                 Territories -- Regions
 */
export const NORTHWIND_SCHEMA_MODEL: SqlSchemaModel = {
  databaseId: "northwind",
  title: "Northwind data model",
  subtitle: "Tables and foreign-key relationships in the Northwind sample database.",
  canvasWidth: 1860,
  canvasHeight: 1280,
  tables: [
    {
      name: "CustomerDemographics",
      x: 40,
      y: 40,
      columns: [
        col("CustomerTypeID", "TEXT", { primaryKey: true }),
        col("CustomerDesc", "TEXT"),
      ],
    },
    {
      name: "CustomerCustomerDemo",
      x: 40,
      y: 180,
      columns: [
        col("CustomerID", "TEXT", {
          primaryKey: true,
          foreignKey: { table: "Customers", column: "CustomerID" },
        }),
        col("CustomerTypeID", "TEXT", {
          primaryKey: true,
          foreignKey: { table: "CustomerDemographics", column: "CustomerTypeID" },
        }),
      ],
    },
    {
      name: "Customers",
      x: 40,
      y: 340,
      columns: [
        col("CustomerID", "TEXT", { primaryKey: true }),
        col("CompanyName", "TEXT"),
        col("ContactName", "TEXT"),
        col("ContactTitle", "TEXT"),
        col("Address", "TEXT"),
        col("City", "TEXT"),
        col("Region", "TEXT"),
        col("PostalCode", "TEXT"),
        col("Country", "TEXT"),
        col("Phone", "TEXT"),
        col("Fax", "TEXT"),
      ],
    },
    {
      name: "Employees",
      x: 360,
      y: 40,
      columns: [
        col("EmployeeID", "INTEGER", { primaryKey: true }),
        col("LastName", "TEXT"),
        col("FirstName", "TEXT"),
        col("Title", "TEXT"),
        col("TitleOfCourtesy", "TEXT"),
        col("BirthDate", "DATE"),
        col("HireDate", "DATE"),
        col("Address", "TEXT"),
        col("City", "TEXT"),
        col("Region", "TEXT"),
        col("PostalCode", "TEXT"),
        col("Country", "TEXT"),
        col("HomePhone", "TEXT"),
        col("Extension", "TEXT"),
        col("Photo", "BLOB"),
        col("Notes", "TEXT"),
        col("ReportsTo", "INTEGER", {
          foreignKey: { table: "Employees", column: "EmployeeID" },
        }),
        col("PhotoPath", "TEXT"),
      ],
    },
    {
      name: "Orders",
      x: 360,
      y: 560,
      columns: [
        col("OrderID", "INTEGER", { primaryKey: true }),
        col("CustomerID", "TEXT", {
          foreignKey: { table: "Customers", column: "CustomerID" },
        }),
        col("EmployeeID", "INTEGER", {
          foreignKey: { table: "Employees", column: "EmployeeID" },
        }),
        col("OrderDate", "DATETIME"),
        col("RequiredDate", "DATETIME"),
        col("ShippedDate", "DATETIME"),
        col("ShipVia", "INTEGER", {
          foreignKey: { table: "Shippers", column: "ShipperID" },
        }),
        col("Freight", "NUMERIC"),
        col("ShipName", "TEXT"),
        col("ShipAddress", "TEXT"),
        col("ShipCity", "TEXT"),
        col("ShipRegion", "TEXT"),
        col("ShipPostalCode", "TEXT"),
        col("ShipCountry", "TEXT"),
      ],
    },
    {
      name: "Shippers",
      x: 40,
      y: 720,
      columns: [
        col("ShipperID", "INTEGER", { primaryKey: true }),
        col("CompanyName", "TEXT"),
        col("Phone", "TEXT"),
      ],
    },
    {
      name: "Order Details",
      x: 680,
      y: 560,
      columns: [
        col("OrderID", "INTEGER", {
          primaryKey: true,
          foreignKey: { table: "Orders", column: "OrderID" },
        }),
        col("ProductID", "INTEGER", {
          primaryKey: true,
          foreignKey: { table: "Products", column: "ProductID" },
        }),
        col("UnitPrice", "NUMERIC"),
        col("Quantity", "INTEGER"),
        col("Discount", "REAL"),
      ],
    },
    {
      name: "EmployeeTerritories",
      x: 680,
      y: 820,
      columns: [
        col("EmployeeID", "INTEGER", {
          primaryKey: true,
          foreignKey: { table: "Employees", column: "EmployeeID" },
        }),
        col("TerritoryID", "TEXT", {
          primaryKey: true,
          foreignKey: { table: "Territories", column: "TerritoryID" },
        }),
      ],
    },
    {
      name: "Territories",
      x: 1000,
      y: 900,
      columns: [
        col("TerritoryID", "TEXT", { primaryKey: true }),
        col("TerritoryDescription", "TEXT"),
        col("RegionID", "INTEGER", {
          foreignKey: { table: "Regions", column: "RegionID" },
        }),
      ],
    },
    {
      name: "Regions",
      x: 1320,
      y: 980,
      columns: [
        col("RegionID", "INTEGER", { primaryKey: true }),
        col("RegionDescription", "TEXT"),
      ],
    },
    {
      name: "Categories",
      x: 1320,
      y: 40,
      columns: [
        col("CategoryID", "INTEGER", { primaryKey: true }),
        col("CategoryName", "TEXT"),
        col("Description", "TEXT"),
        col("Picture", "BLOB"),
      ],
    },
    {
      name: "Suppliers",
      x: 1000,
      y: 40,
      columns: [
        col("SupplierID", "INTEGER", { primaryKey: true }),
        col("CompanyName", "TEXT"),
        col("ContactName", "TEXT"),
        col("ContactTitle", "TEXT"),
        col("Address", "TEXT"),
        col("City", "TEXT"),
        col("Region", "TEXT"),
        col("PostalCode", "TEXT"),
        col("Country", "TEXT"),
        col("Phone", "TEXT"),
        col("Fax", "TEXT"),
        col("HomePage", "TEXT"),
      ],
    },
    {
      name: "Products",
      x: 1000,
      y: 420,
      columns: [
        col("ProductID", "INTEGER", { primaryKey: true }),
        col("ProductName", "TEXT"),
        col("SupplierID", "INTEGER", {
          foreignKey: { table: "Suppliers", column: "SupplierID" },
        }),
        col("CategoryID", "INTEGER", {
          foreignKey: { table: "Categories", column: "CategoryID" },
        }),
        col("QuantityPerUnit", "TEXT"),
        col("UnitPrice", "NUMERIC"),
        col("UnitsInStock", "INTEGER"),
        col("UnitsOnOrder", "INTEGER"),
        col("ReorderLevel", "INTEGER"),
        col("Discontinued", "TEXT"),
      ],
    },
  ],
  relationships: [
    {
      fromTable: "CustomerCustomerDemo",
      fromColumn: "CustomerTypeID",
      toTable: "CustomerDemographics",
      toColumn: "CustomerTypeID",
    },
    {
      fromTable: "CustomerCustomerDemo",
      fromColumn: "CustomerID",
      toTable: "Customers",
      toColumn: "CustomerID",
    },
    {
      fromTable: "Orders",
      fromColumn: "CustomerID",
      toTable: "Customers",
      toColumn: "CustomerID",
    },
    {
      fromTable: "Orders",
      fromColumn: "EmployeeID",
      toTable: "Employees",
      toColumn: "EmployeeID",
    },
    {
      fromTable: "Orders",
      fromColumn: "ShipVia",
      toTable: "Shippers",
      toColumn: "ShipperID",
    },
    {
      fromTable: "Order Details",
      fromColumn: "OrderID",
      toTable: "Orders",
      toColumn: "OrderID",
    },
    {
      fromTable: "Order Details",
      fromColumn: "ProductID",
      toTable: "Products",
      toColumn: "ProductID",
    },
    {
      fromTable: "Products",
      fromColumn: "SupplierID",
      toTable: "Suppliers",
      toColumn: "SupplierID",
    },
    {
      fromTable: "Products",
      fromColumn: "CategoryID",
      toTable: "Categories",
      toColumn: "CategoryID",
    },
    {
      fromTable: "Employees",
      fromColumn: "ReportsTo",
      toTable: "Employees",
      toColumn: "EmployeeID",
    },
    {
      fromTable: "EmployeeTerritories",
      fromColumn: "EmployeeID",
      toTable: "Employees",
      toColumn: "EmployeeID",
    },
    {
      fromTable: "EmployeeTerritories",
      fromColumn: "TerritoryID",
      toTable: "Territories",
      toColumn: "TerritoryID",
    },
    {
      fromTable: "Territories",
      fromColumn: "RegionID",
      toTable: "Regions",
      toColumn: "RegionID",
    },
  ],
};

export const LEARNING_SCHEMA_MODEL: SqlSchemaModel = {
  databaseId: "learning",
  title: "Learning database model",
  subtitle: "Tables and foreign-key relationships in the practice learning database.",
  canvasWidth: 820,
  canvasHeight: 560,
  tables: [
    {
      name: "departments",
      x: 280,
      y: 40,
      columns: [
        col("dept_id", "INTEGER", { primaryKey: true }),
        col("dept_name", "TEXT"),
        col("location", "TEXT"),
      ],
    },
    {
      name: "employees",
      x: 40,
      y: 280,
      columns: [
        col("emp_id", "INTEGER", { primaryKey: true }),
        col("first_name", "TEXT"),
        col("last_name", "TEXT"),
        col("email", "TEXT"),
        col("dept_id", "INTEGER", {
          foreignKey: { table: "departments", column: "dept_id" },
        }),
        col("salary", "REAL"),
        col("hire_date", "TEXT"),
      ],
    },
    {
      name: "projects",
      x: 520,
      y: 280,
      columns: [
        col("project_id", "INTEGER", { primaryKey: true }),
        col("project_name", "TEXT"),
        col("budget", "REAL"),
        col("dept_id", "INTEGER", {
          foreignKey: { table: "departments", column: "dept_id" },
        }),
      ],
    },
  ],
  relationships: [
    { fromTable: "employees", fromColumn: "dept_id", toTable: "departments", toColumn: "dept_id" },
    { fromTable: "projects", fromColumn: "dept_id", toTable: "departments", toColumn: "dept_id" },
  ],
};

export function getSqlSchemaModel(databaseId: SqlDatabaseId): SqlSchemaModel {
  return databaseId === "learning" ? LEARNING_SCHEMA_MODEL : NORTHWIND_SCHEMA_MODEL;
}
