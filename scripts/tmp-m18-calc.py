import pandas as pd

raw = pd.DataFrame({
    "date": ["2024-01-05", "2024-01-18", "2024-02-02", "2024-02-14", "2024-03-08", "2024-03-08"],
    "region": ["North", "South", "North", "East", "South", "South"],
    "category": ["pens", "books", "books", "pens", "bags", "bags"],
    "units_sold": [10, 5, 8, 12, 6, 6],
    "revenue": [250.0, 400.0, None, 300.0, 480.0, 480.0],
})

print("raw shape", raw.shape)
print("missing", int(raw.isna().sum().sum()))
print("dupes", int(raw.duplicated().sum()))

df = raw.dropna().drop_duplicates()
print("clean shape", df.shape)
print("clean revenue list", df["revenue"].tolist())
print("clean units list", df["units_sold"].tolist())

tot = df.groupby("region")["revenue"].sum()
print("region totals", {k: round(float(v), 2) for k, v in tot.items()})
print("top region", tot.idxmax())
print("total revenue", round(float(df["revenue"].sum()), 2))
print("mean revenue", round(float(df["revenue"].mean()), 2))
print("units total", int(df["units_sold"].sum()))

cat = df.groupby("category")["revenue"].sum()
print("cat totals", {k: round(float(v), 2) for k, v in cat.items()})
print("top cat", cat.idxmax())

# per-unit price on clean data
df2 = df.copy()
df2["price"] = df2["revenue"] / df2["units_sold"]
print("prices", [round(float(v), 2) for v in df2["price"]])

# month extraction
months = [d[5:7] for d in df["date"]]
print("months", months)
m = df.assign(month=months).groupby("month")["revenue"].sum()
print("month totals", {k: round(float(v), 2) for k, v in m.items()})
print("best month", m.idxmax())

# logic/loop tier labels on records
records = [
    {"region": "North", "revenue": 250.0},
    {"region": "South", "revenue": 400.0},
    {"region": "East", "revenue": 300.0},
    {"region": "South", "revenue": 480.0},
]
for r in records:
    tier = "High" if r["revenue"] >= 400 else "Standard"
    print(r["region"], tier)

totals = {}
for r in records:
    totals[r["region"]] = totals.get(r["region"], 0.0) + r["revenue"]
print("loop totals", {k: round(v, 2) for k, v in totals.items()})

print("idxmax report", df.loc[df["revenue"].idxmax(), "region"])
print("describe count", int(df["revenue"].count()))
print("nunique region", int(df["region"].nunique()))
print("sorted totals", [ (k, round(float(v),2)) for k, v in tot.sort_values(ascending=False).items() ])
