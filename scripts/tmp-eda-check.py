import pandas as pd

df = pd.DataFrame({
    "region": ["South", "North", "South", "East", "North"],
    "category": ["pen", "book", "bag", "pen", "bag"],
    "units": [10, 5, 8, 12, 6],
    "revenue": [100.0, 150.0, None, 120.0, 90.0],
})

print("shape", df.shape)
print("missing", int(df.isna().sum().sum()))
print("mean", round(float(df["revenue"].mean()), 2))
print("groupmeans", {k: round(float(v), 2) for k, v in df.groupby("region")["revenue"].mean().items()})
print("sums", {k: round(float(v), 2) for k, v in df.groupby("region")["revenue"].sum().items()})
print("top", df.groupby("region")["revenue"].sum().idxmax())
print("corr", round(float(df[["units", "revenue"]].corr().loc["units", "revenue"]), 2))
print("total", round(float(df["revenue"].sum()), 2))
print("unitsum", int(df["units"].sum()))
print("regions", int(df["region"].nunique()))
print("counts", {str(k): int(v) for k, v in df["region"].value_counts().sort_index().items()})
