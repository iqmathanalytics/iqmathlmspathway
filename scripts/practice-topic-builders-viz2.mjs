/**
 * Module 16 topics 4-5 — statistical and categorical plots.
 *
 * Seaborn is not part of the Pyodide package set, so these tasks build the same
 * statistical views with pandas + Matplotlib and say so in the prompt. The
 * lesson keeps the seaborn API for learners working in Colab.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

const IMPORT = "import matplotlib.pyplot as plt";
const PANDAS = "import pandas as pd";

const TIDY_DF = `df = pd.DataFrame({
    "category": ["pen", "book", "pen", "book", "bag", "bag"],
    "year": [2024, 2024, 2025, 2025, 2024, 2025],
    "revenue": [30, 70, 40, 90, 20, 30],
})`;

function assertHasAxes() {
  return {
    label: "ax is a Matplotlib Axes",
    code: `assert "ax" in globals(), "Expected a variable named ax from plt.subplots()"\nassert hasattr(ax, "plot"), "Expected ax to be a Matplotlib Axes, got " + type(ax).__name__`,
  };
}

const SEABORN_NOTE =
  "Seaborn is not available in the in-browser runtime, so build the same statistical view with pandas and Matplotlib. The lesson's seaborn version runs in Colab.";

export function seabornStyleTasks() {
  return [
    conceptTask({
      slug: "tidy-long-frame",
      title: "Statistical Plots: Start From Tidy Data",
      level: "easy",
      description:
        "Build a tidy long-format DataFrame with one row per observation and print its shape.",
      expected: "(6, 3)",
      intro: [
        seg("text", "Statistical plotting libraries expect "),
        seg("code", "tidy"),
        seg("text", " data: one row per observation, one column per variable. Build "),
        seg("code", "df"),
        seg("text", " with category, year, and revenue columns and print its shape."),
      ],
      steps: [
        "Tidy (long) format means repeating the category on each row.",
        "Every statistical chart in this topic starts from a frame shaped like this.",
        SEABORN_NOTE,
      ],
      starter: `# TODO: build the tidy frame\n${PANDAS}\n\ndf = None\n`,
      solution: `${PANDAS}\n\n${TIDY_DF}\n\nprint(df.shape)`,
      checks: [
        assertEquals("six observations, three columns", "df.shape", "(6, 3)"),
        assertEquals(
          "columns are category, year, revenue",
          "list(df.columns)",
          '["category", "year", "revenue"]'
        ),
        assertEquals(
          "each category appears twice",
          'int((df["category"] == "pen").sum())',
          "2"
        ),
      ],
      vars: ["pd", "df"],
      constraints: [
        "One row per observation",
        "Column order: category, year, revenue",
        "Output must be exactly: (6, 3)",
      ],
      hints: ['df = pd.DataFrame({"category": [...], "year": [...], "revenue": [...]})'],
      placeholder: "# df = pd.DataFrame({ ... })",
    }),

    conceptTask({
      slug: "category-means",
      title: "Statistical Plots: The Numbers Behind a Bar Plot",
      level: "easy",
      description:
        "Group the tidy frame by category and print the mean revenue per category as a dict.",
      expected: "{'bag': 25.0, 'book': 80.0, 'pen': 35.0}",
      intro: [
        seg("text", "A statistical bar plot draws one bar per group using the group's mean. Compute "),
        seg("code", 'df.groupby("category")["revenue"].mean()'),
        seg("text", " into "),
        seg("code", "means"),
        seg("text", " and print it as a dict of floats."),
      ],
      steps: [
        "A bar plot in seaborn is a groupby mean plus a bar chart.",
        "Knowing the numbers first means you can check the chart is right.",
        SEABORN_NOTE,
      ],
      starter: `# TODO: mean revenue per category\n${PANDAS}\n\n${TIDY_DF}\n\nmeans = None\n`,
      solution: `${PANDAS}\n\n${TIDY_DF}\n\nmeans = df.groupby("category")["revenue"].mean()\nprint({k: round(float(v), 2) for k, v in means.items()})`,
      checks: [
        assertEquals("book average", 'round(float(means["book"]), 2)', "80.0"),
        assertEquals("pen average", 'round(float(means["pen"]), 2)', "35.0"),
        assertEquals("bag average", 'round(float(means["bag"]), 2)', "25.0"),
      ],
      vars: ["pd", "df", "means"],
      constraints: [
        "Use groupby().mean()",
        "Print values as floats via round(float(v), 2)",
      ],
      hints: [
        'means = df.groupby("category")["revenue"].mean()',
        "print({k: round(float(v), 2) for k, v in means.items()})",
      ],
      placeholder: '# means = df.groupby("category")["revenue"].mean()',
    }),

    conceptTask({
      slug: "bar-plot-of-means",
      title: "Statistical Plots: Bar Plot of Group Means",
      level: "medium",
      description:
        "Chart the mean revenue per category as bars and check the bar heights match the means.",
      expected: "mean bars drawn",
      assertOnly: true,
      intro: [
        seg("text", "Compute the group means, then draw them with "),
        seg("code", "ax.bar(means.index, means.values)"),
        seg("text", ". This is what a seaborn bar plot does under the hood."),
      ],
      steps: [
        "The index holds the category names, the values hold the means.",
        "Groups come back sorted, so the bars are bag, book, pen.",
        SEABORN_NOTE,
      ],
      starter: `# TODO: plot the group means as bars\n${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\nmeans = df.groupby("category")["revenue"].mean()\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\nmeans = df.groupby("category")["revenue"].mean()\n\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\n\nprint("mean bars drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("one bar per category", "len(ax.patches)", "3"),
        assertEquals(
          "bar heights are the group means",
          "[p.get_height() for p in ax.patches]",
          "[25.0, 80.0, 35.0]"
        ),
      ],
      vars: ["plt", "pd", "ax", "means"],
      constraints: [
        "Compute the means with groupby — do not type them",
        "One bar per category",
      ],
      hints: ["ax.bar(means.index, means.values)"],
      placeholder: "# ax.bar(means.index, means.values)",
    }),

    conceptTask({
      slug: "count-plot",
      title: "Statistical Plots: Count Plot",
      level: "medium",
      description:
        "Count the rows per category with value_counts and draw them as bars in a fixed order.",
      expected: "counts drawn",
      assertOnly: true,
      intro: [
        seg("text", "Use "),
        seg("code", 'df["category"].value_counts().sort_index()'),
        seg("text", " into "),
        seg("code", "counts"),
        seg("text", ", then bar-chart it. Sorting the index keeps the order predictable."),
      ],
      steps: [
        "value_counts() orders by frequency, which is unstable when counts tie.",
        "sort_index() puts the categories in alphabetical order instead.",
        "A count plot answers 'how many rows', not 'how much revenue'.",
      ],
      starter: `# TODO: count rows per category, then plot\n${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\ncounts = None\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\ncounts = df["category"].value_counts().sort_index()\n\nfig, ax = plt.subplots()\nax.bar(counts.index, counts.values)\n\nprint("counts drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("categories in alphabetical order", "list(counts.index)", '["bag", "book", "pen"]'),
        assertEquals("each category has 2 rows", "[int(v) for v in counts.values]", "[2, 2, 2]"),
        assertEquals("three bars drawn", "len(ax.patches)", "3"),
      ],
      vars: ["plt", "pd", "ax", "counts"],
      constraints: [
        "Use value_counts().sort_index()",
        "Store it in counts before plotting",
      ],
      hints: ['counts = df["category"].value_counts().sort_index()', "ax.bar(counts.index, counts.values)"],
      placeholder: '# counts = df["category"].value_counts().sort_index()',
    }),

    conceptTask({
      slug: "grouped-bars-by-year",
      title: "Statistical Plots: Group Bars by a Second Variable",
      level: "medium",
      description:
        "Draw two sets of bars — one per year — so each category can be compared across years.",
      expected: "grouped bars drawn",
      assertOnly: true,
      intro: [
        seg("text", "This is what seaborn's "),
        seg("code", "hue"),
        seg("text", " does. Pivot the frame so each year is a column, then call "),
        seg("code", "ax.bar"),
        seg("text", " twice with an x offset."),
      ],
      steps: [
        "pivot_table with columns=\"year\" gives one column per year.",
        "Offset the x positions by half a bar width so the pairs sit side by side.",
        "Two bar calls over three categories gives six patches.",
      ],
      starter: `# TODO: one bar group per year\n${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\npivot = None\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\npivot = df.pivot_table(values="revenue", index="category", columns="year", aggfunc="sum", fill_value=0)\npositions = range(len(pivot.index))\n\nfig, ax = plt.subplots()\nax.bar([p - 0.2 for p in positions], pivot[2024].values, width=0.4, label="2024")\nax.bar([p + 0.2 for p in positions], pivot[2025].values, width=0.4, label="2025")\nax.legend()\n\nprint("grouped bars drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("six bars in total", "len(ax.patches)", "6"),
        assertEquals("one column per year", "list(pivot.columns)", "[2024, 2025]"),
        assertTrue(
          "both years are in the legend",
          'len(ax.get_legend().get_texts()) == 2',
          "Label both bar groups and call ax.legend()",
        ),
      ],
      vars: ["plt", "pd", "ax", "pivot"],
      constraints: [
        "Two ax.bar calls, one per year",
        "Offset the x positions so bars sit side by side",
        "Add a legend",
      ],
      hints: [
        'pivot = df.pivot_table(values="revenue", index="category", columns="year", aggfunc="sum", fill_value=0)',
        'ax.bar([p - 0.2 for p in positions], pivot[2024].values, width=0.4, label="2024")',
      ],
      placeholder: "# pivot = df.pivot_table(..., columns='year')",
    }),

    conceptTask({
      slug: "label-statistical-chart",
      title: "Statistical Plots: Label the Statistic",
      level: "medium",
      description:
        "Title the mean-revenue chart and label the y axis so the reader knows it shows an average.",
      expected: "labelled statistic",
      assertOnly: true,
      intro: [
        seg("text", "A bar of averages must say so. Set the title to "),
        seg("code", "Average Revenue by Category"),
        seg("text", " and the y label to "),
        seg("code", "Mean revenue"),
        seg("text", "."),
      ],
      steps: [
        "Readers assume bars are totals unless you tell them otherwise.",
        "Naming the statistic prevents the most common misreading of a chart.",
        SEABORN_NOTE,
      ],
      starter: `# TODO: title and label the chart\n${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\nmeans = df.groupby("category")["revenue"].mean()\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\n`,
      solution: `${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\nmeans = df.groupby("category")["revenue"].mean()\n\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\nax.set_title("Average Revenue by Category")\nax.set_ylabel("Mean revenue")\n\nprint("labelled statistic")`,
      checks: [
        assertHasAxes(),
        assertEquals("title names the statistic", "ax.get_title()", '"Average Revenue by Category"'),
        assertEquals("y label names the statistic", "ax.get_ylabel()", '"Mean revenue"'),
        assertEquals("the bars are still there", "len(ax.patches)", "3"),
      ],
      vars: ["plt", "pd", "ax"],
      constraints: [
        'Title "Average Revenue by Category"',
        'Y label "Mean revenue"',
      ],
      hints: ['ax.set_title("Average Revenue by Category")', 'ax.set_ylabel("Mean revenue")'],
      placeholder: '# ax.set_title("Average Revenue by Category")',
    }),

    conceptTask({
      slug: "ranked-statistical-chart",
      title: "Statistical Plots: Rank the Groups",
      level: "hard",
      description:
        "Sort the group means from largest to smallest, chart them, and label the axes.",
      expected: "ranked means drawn",
      assertOnly: true,
      intro: [
        seg("text", "Compute the category means, sort them descending with "),
        seg("code", "sort_values(ascending=False)"),
        seg("text", " into "),
        seg("code", "ranked"),
        seg("text", ", chart the bars, and label the y axis "),
        seg("code", "Mean revenue"),
        seg("text", "."),
      ],
      steps: [
        "sort_values on a Series reorders by the values, keeping the labels attached.",
        "Ranked bars are far easier to read than alphabetical ones.",
        "book (80) leads, then pen (35), then bag (25).",
      ],
      starter: `# TODO: rank the means, then chart them\n${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\nranked = None\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n${PANDAS}\n\n${TIDY_DF}\n\nranked = df.groupby("category")["revenue"].mean().sort_values(ascending=False)\n\nfig, ax = plt.subplots()\nax.bar(ranked.index, ranked.values)\nax.set_ylabel("Mean revenue")\n\nprint("ranked means drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("groups are ranked", "list(ranked.index)", '["book", "pen", "bag"]'),
        assertEquals(
          "bars follow the ranking",
          "[p.get_height() for p in ax.patches]",
          "[80.0, 35.0, 25.0]"
        ),
        assertEquals("y axis is labelled", "ax.get_ylabel()", '"Mean revenue"'),
      ],
      vars: ["plt", "pd", "ax", "ranked"],
      constraints: [
        "Sort with sort_values(ascending=False)",
        "Store it in ranked before plotting",
        'Label the y axis "Mean revenue"',
      ],
      hints: [
        'ranked = df.groupby("category")["revenue"].mean().sort_values(ascending=False)',
        "ax.bar(ranked.index, ranked.values)",
      ],
      placeholder: "# ranked = ...sort_values(ascending=False)",
    }),
  ];
}

export function categoricalPlotTasks() {
  return [
    conceptTask({
      slug: "cat-boxplot",
      title: "Distributions: A Box Plot",
      level: "easy",
      description:
        "Draw a box plot of order values, storing the returned dict so the median line can be checked.",
      expected: "box drawn",
      assertOnly: true,
      intro: [
        seg("text", "Call "),
        seg("code", "bp = ax.boxplot(values)"),
        seg("text", " on "),
        seg("code", "[10, 12, 13, 15, 40]"),
        seg("text", ". The returned dict holds the artists, including the median line."),
      ],
      steps: [
        "A box plot shows the median, the quartiles, and the outliers at a glance.",
        "boxplot returns a dict with keys like boxes, medians, and whiskers.",
        "40 sits far from the rest, so it is drawn as an outlier point.",
      ],
      starter: `# TODO: draw the box plot and keep the result\n${IMPORT}\n\nvalues = [10, 12, 13, 15, 40]\nfig, ax = plt.subplots()\nbp = None\n`,
      solution: `${IMPORT}\n\nvalues = [10, 12, 13, 15, 40]\nfig, ax = plt.subplots()\nbp = ax.boxplot(values)\n\nprint("box drawn")`,
      checks: [
        assertHasAxes(),
        assertType("bp", "dict"),
        assertEquals("one median line", "len(bp[\"medians\"])", "1"),
        assertEquals("one box", "len(bp[\"boxes\"])", "1"),
      ],
      vars: ["plt", "ax", "bp"],
      constraints: ["Use ax.boxplot", "Store the returned dict in bp"],
      hints: ["bp = ax.boxplot(values)"],
      placeholder: "# bp = ax.boxplot(values)",
    }),

    conceptTask({
      slug: "cat-histogram-shape",
      title: "Distributions: Histogram Shape",
      level: "easy",
      description:
        "Draw a 5-bin histogram of order values and confirm every value was counted.",
      expected: "distribution drawn",
      assertOnly: true,
      intro: [
        seg("text", "Draw "),
        seg("code", "ax.hist(values, bins=5)"),
        seg("text", " for ten order values. The bar heights must add up to the number of orders."),
      ],
      steps: [
        "Each bar counts how many values fall in that bin.",
        "The heights always sum to the number of observations.",
      ],
      starter: `# TODO: draw a 5-bin histogram\n${IMPORT}\n\nvalues = [5, 6, 8, 11, 12, 14, 15, 19, 21, 25]\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nvalues = [5, 6, 8, 11, 12, 14, 15, 19, 21, 25]\nfig, ax = plt.subplots()\nax.hist(values, bins=5)\n\nprint("distribution drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("five bins", "len(ax.patches)", "5"),
        assertEquals(
          "all ten values counted",
          "sum(p.get_height() for p in ax.patches)",
          "10.0"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use bins=5", "Plot all ten values"],
      hints: ["ax.hist(values, bins=5)"],
      placeholder: "# ax.hist(values, bins=5)",
    }),

    conceptTask({
      slug: "cat-count-bars",
      title: "Categorical: Count Each Category",
      level: "medium",
      description:
        "Count how often each region appears using a dict and draw the counts as bars.",
      expected: "category counts drawn",
      assertOnly: true,
      intro: [
        seg("text", "Given a list of regions, count them into "),
        seg("code", "counts"),
        seg("text", " with "),
        seg("code", "Counter"),
        seg("text", ", then bar-chart the sorted categories."),
      ],
      steps: [
        "collections.Counter counts occurrences in one call.",
        "sorted(counts) gives the category names in a stable order.",
        "Build the matching heights list from the same sorted names.",
      ],
      starter: `# TODO: count the regions, then plot\n${IMPORT}\nfrom collections import Counter\n\nregions = ["South", "North", "South", "East", "South"]\ncounts = None\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\nfrom collections import Counter\n\nregions = ["South", "North", "South", "East", "South"]\ncounts = Counter(regions)\nnames = sorted(counts)\nheights = [counts[name] for name in names]\n\nfig, ax = plt.subplots()\nax.bar(names, heights)\n\nprint("category counts drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("South appears three times", 'counts["South"]', "3"),
        assertEquals("three distinct regions", "len(counts)", "3"),
        assertEquals("three bars", "len(ax.patches)", "3"),
        assertEquals(
          "bar heights are the counts",
          "[p.get_height() for p in ax.patches]",
          "[1.0, 1.0, 3.0]"
        ),
      ],
      vars: ["plt", "ax", "counts"],
      constraints: [
        "Use Counter to count",
        "Sort the category names before plotting",
      ],
      hints: ["counts = Counter(regions)", "names = sorted(counts)"],
      placeholder: "# counts = Counter(regions)",
    }),

    conceptTask({
      slug: "cat-grouped-comparison",
      title: "Categorical: Compare Two Groups",
      level: "medium",
      description:
        "Draw side-by-side bars for two regions across three categories and add a legend.",
      expected: "comparison drawn",
      assertOnly: true,
      intro: [
        seg("text", "Plot "),
        seg("code", "south = [30, 70, 20]"),
        seg("text", " and "),
        seg("code", "north = [40, 20, 10]"),
        seg("text", " as two offset bar groups with a legend."),
      ],
      steps: [
        "Use a width of 0.4 and shift each group by 0.2 either side.",
        "Two calls over three categories gives six patches.",
        "Side-by-side beats stacked when you want to compare values directly.",
      ],
      starter: `# TODO: draw both regions side by side\n${IMPORT}\n\nsouth = [30, 70, 20]\nnorth = [40, 20, 10]\npositions = [0, 1, 2]\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nsouth = [30, 70, 20]\nnorth = [40, 20, 10]\npositions = [0, 1, 2]\n\nfig, ax = plt.subplots()\nax.bar([p - 0.2 for p in positions], south, width=0.4, label="South")\nax.bar([p + 0.2 for p in positions], north, width=0.4, label="North")\nax.legend()\n\nprint("comparison drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("six bars in total", "len(ax.patches)", "6"),
        assertEquals(
          "both regions are in the legend",
          "[t.get_text() for t in ax.get_legend().get_texts()]",
          '["South", "North"]'
        ),
        assertTrue(
          "bars are narrowed so they fit side by side",
          "all(abs(p.get_width() - 0.4) < 1e-9 for p in ax.patches)",
          "Pass width=0.4 to both bar calls",
        ),
      ],
      vars: ["plt", "ax"],
      constraints: [
        "Two ax.bar calls with width=0.4",
        'Labels "South" then "North"',
        "Call ax.legend()",
      ],
      hints: [
        'ax.bar([p - 0.2 for p in positions], south, width=0.4, label="South")',
        "ax.legend()",
      ],
      placeholder: "# ax.bar([p - 0.2 for p in positions], south, width=0.4, ...)",
    }),

    conceptTask({
      slug: "cat-heatmap",
      title: "Categorical: A Heatmap of a Matrix",
      level: "medium",
      description:
        "Show a region-by-category matrix as a heatmap with ax.imshow and add a title.",
      expected: "heatmap drawn",
      assertOnly: true,
      intro: [
        seg("text", "Use "),
        seg("code", "ax.imshow(matrix)"),
        seg("text", " on "),
        seg("code", "[[30, 70], [40, 20]]"),
        seg("text", " and title it "),
        seg("code", "Revenue Heatmap"),
        seg("text", ". Colour replaces numbers when the grid gets large."),
      ],
      steps: [
        "imshow draws a 2-D array as coloured cells.",
        "It is the Matplotlib engine behind a seaborn heatmap.",
        "The image is stored on ax.images.",
      ],
      starter: `# TODO: draw the heatmap and title it\n${IMPORT}\n\nmatrix = [[30, 70], [40, 20]]\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nmatrix = [[30, 70], [40, 20]]\nfig, ax = plt.subplots()\nax.imshow(matrix)\nax.set_title("Revenue Heatmap")\n\nprint("heatmap drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("one image was drawn", "len(ax.images)", "1"),
        assertEquals("title is set", "ax.get_title()", '"Revenue Heatmap"'),
        assertEquals(
          "the matrix has 2 rows and 2 columns",
          "ax.images[0].get_array().shape",
          "(2, 2)"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.imshow", 'Title "Revenue Heatmap"'],
      hints: ["ax.imshow(matrix)", 'ax.set_title("Revenue Heatmap")'],
      placeholder: "# ax.imshow(matrix)",
    }),

    conceptTask({
      slug: "cat-scatter-two-groups",
      title: "Categorical: Colour Points by Group",
      level: "medium",
      description:
        "Scatter two groups of points in separate calls so each gets its own colour, then add a legend.",
      expected: "groups drawn",
      assertOnly: true,
      intro: [
        seg("text", "Call "),
        seg("code", "ax.scatter"),
        seg("text", " once per group, labelling them "),
        seg("code", "South"),
        seg("text", " and "),
        seg("code", "North"),
        seg("text", ", then call "),
        seg("code", "ax.legend()"),
        seg("text", "."),
      ],
      steps: [
        "One scatter call per group is the simplest way to colour by category.",
        "Each call adds its own collection, so you get two entries in the legend.",
        "This is what seaborn's hue parameter automates.",
      ],
      starter: `# TODO: scatter each group separately\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.scatter([1, 2, 3], [10, 20, 30], label="South")\nax.scatter([1, 2, 3], [15, 12, 25], label="North")\nax.legend()\n\nprint("groups drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("two collections, one per group", "len(ax.collections)", "2"),
        assertEquals(
          "both groups are labelled",
          "[t.get_text() for t in ax.get_legend().get_texts()]",
          '["South", "North"]'
        ),
      ],
      vars: ["plt", "ax"],
      constraints: [
        "One ax.scatter call per group",
        'Labels "South" then "North"',
        "Call ax.legend()",
      ],
      hints: ['ax.scatter([1, 2, 3], [10, 20, 30], label="South")', "ax.legend()"],
      placeholder: '# ax.scatter(..., label="South")',
    }),

    conceptTask({
      slug: "cat-two-panel-dashboard",
      title: "Categorical: A Two-Panel Dashboard",
      level: "hard",
      description:
        "Use plt.subplots(1, 2) to put a histogram beside a bar chart, each with its own title.",
      expected: "dashboard drawn",
      assertOnly: true,
      intro: [
        seg("text", "Create "),
        seg("code", "fig, axes = plt.subplots(1, 2)"),
        seg("text", ". Draw a 4-bin histogram of the order values on "),
        seg("code", "axes[0]"),
        seg("text", " titled "),
        seg("code", "Orders"),
        seg("text", ", and category bars on "),
        seg("code", "axes[1]"),
        seg("text", " titled "),
        seg("code", "Revenue"),
        seg("text", "."),
      ],
      steps: [
        "plt.subplots(1, 2) returns an array of two axes.",
        "Each axes is decorated independently — that is how dashboards are built.",
        "Distribution on the left, comparison on the right.",
      ],
      starter: `# TODO: build both panels\n${IMPORT}\n\nvalues = [5, 8, 12, 15, 19, 21]\nrevenue = [30, 70, 40]\nfig, axes = plt.subplots(1, 2)\n`,
      solution: `${IMPORT}\n\nvalues = [5, 8, 12, 15, 19, 21]\nrevenue = [30, 70, 40]\n\nfig, axes = plt.subplots(1, 2)\naxes[0].hist(values, bins=4)\naxes[0].set_title("Orders")\naxes[1].bar(["pen", "book", "bag"], revenue)\naxes[1].set_title("Revenue")\n\nprint("dashboard drawn")`,
      checks: [
        {
          label: "two panels were created",
          code: `assert "axes" in globals(), "Expected a variable named axes from plt.subplots(1, 2)"\nassert len(axes) == 2, "Expected 2 panels, got " + str(len(axes))`,
        },
        assertEquals("left panel has 4 histogram bins", "len(axes[0].patches)", "4"),
        assertEquals("right panel has 3 bars", "len(axes[1].patches)", "3"),
        assertEquals("left panel title", "axes[0].get_title()", '"Orders"'),
        assertEquals("right panel title", "axes[1].get_title()", '"Revenue"'),
      ],
      vars: ["plt", "axes"],
      constraints: [
        "Use plt.subplots(1, 2) and name the result axes",
        "Histogram on the left with bins=4, bars on the right",
        'Titles "Orders" and "Revenue"',
      ],
      hints: [
        "fig, axes = plt.subplots(1, 2)",
        'axes[0].hist(values, bins=4) then axes[0].set_title("Orders")',
      ],
      placeholder: "# fig, axes = plt.subplots(1, 2)",
    }),
  ];
}
