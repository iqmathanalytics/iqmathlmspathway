/**
 * Module 16 — Data Visualization.
 *
 * Two deliberate design decisions:
 *
 * 1. Plotting tasks use assertOnly tests. The runner appends a
 *    "[Chart created …]" banner to any code it detects as a chart
 *    (prepareVisualizationRunCode), so exact-stdout grading would be brittle.
 *    Instead the tests inspect the real Axes the learner built, which is a
 *    stronger check than matching text anyway.
 *
 * 2. Seaborn is not in the Pyodide package set, so the Seaborn topics build the
 *    same statistical views with pandas + Matplotlib and say so up front.
 *    The lesson still shows the seaborn API for Colab.
 *
 * Only long-stable Matplotlib APIs are asserted (ax.patches, ax.lines,
 * ax.collections, get_title) because the browser runs matplotlib 3.5.
 */
import { conceptTask, seg, assertEquals, assertTrue } from "./practice-task-kit.mjs";

const IMPORT = "import matplotlib.pyplot as plt";

function assertHasAxes() {
  return {
    label: "ax is a Matplotlib Axes",
    code: `assert "ax" in globals(), "Expected a variable named ax from plt.subplots()"\nassert hasattr(ax, "plot"), "Expected ax to be a Matplotlib Axes, got " + type(ax).__name__`,
  };
}

export function matplotlibIntroTasks() {
  return [
    conceptTask({
      slug: "plt-first-chart",
      title: "Matplotlib: Your First Line Chart",
      level: "easy",
      description:
        "Create a figure with plt.subplots, plot three months of revenue as a line, and print a confirmation.",
      expected: "chart ready",
      assertOnly: true,
      intro: [
        seg("text", "Create "),
        seg("code", "fig, ax = plt.subplots()"),
        seg("text", ", plot "),
        seg("code", "[1, 2, 3]"),
        seg("text", " against "),
        seg("code", "[10, 20, 30]"),
        seg("text", " with "),
        seg("code", "ax.plot"),
        seg("text", ", then print "),
        seg("code", "chart ready"),
        seg("text", ". The tests inspect the chart you built, not the text."),
      ],
      steps: [
        "plt.subplots() returns a figure and an axes — draw on the axes.",
        "ax.plot(x, y) adds a line to the axes.",
        "The preview pane cannot show images, so print a line to confirm it ran.",
      ],
      starter: `# TODO: build a line chart on ax\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n\nprint("chart ready")`,
      checks: [
        assertHasAxes(),
        assertEquals("exactly one line was drawn", "len(ax.lines)", "1"),
        assertEquals(
          "the y values are plotted",
          "ax.lines[0].get_ydata().tolist()",
          "[10, 20, 30]"
        ),
        assertEquals(
          "the x values are plotted",
          "ax.lines[0].get_xdata().tolist()",
          "[1, 2, 3]"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: [
        "Use fig, ax = plt.subplots()",
        "Draw with ax.plot()",
        "Print a confirmation line",
      ],
      hints: ["fig, ax = plt.subplots()", "ax.plot([1, 2, 3], [10, 20, 30])"],
      success: "Correct! The tests read the real line data off your axes.",
      placeholder: "# fig, ax = plt.subplots()",
    }),

    conceptTask({
      slug: "plt-title",
      title: "Matplotlib: Give the Chart a Title",
      level: "easy",
      description:
        'Plot the revenue line and set the chart title to "Monthly Revenue" with ax.set_title.',
      expected: "titled",
      assertOnly: true,
      intro: [
        seg("text", "Add "),
        seg("code", 'ax.set_title("Monthly Revenue")'),
        seg("text", " to your chart. An untitled chart is unreadable in a report."),
      ],
      steps: [
        "ax.set_title(text) sets the heading above the axes.",
        "ax.get_title() reads it back — that is what the test checks.",
      ],
      starter: `# TODO: plot and add a title\n${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_title("Monthly Revenue")\n\nprint("titled")`,
      checks: [
        assertHasAxes(),
        assertEquals("the title is set", "ax.get_title()", '"Monthly Revenue"'),
        assertEquals("the line is still drawn", "len(ax.lines)", "1"),
      ],
      vars: ["plt", "ax"],
      constraints: ['Title must be exactly "Monthly Revenue"', "Keep the line on the chart"],
      hints: ['ax.set_title("Monthly Revenue")'],
      placeholder: '# ax.set_title("Monthly Revenue")',
    }),

    conceptTask({
      slug: "plt-axis-labels",
      title: "Matplotlib: Label Both Axes",
      level: "easy",
      description:
        'Set the x label to "Month" and the y label to "Revenue" on your chart.',
      expected: "labelled",
      assertOnly: true,
      intro: [
        seg("text", "Use "),
        seg("code", 'ax.set_xlabel("Month")'),
        seg("text", " and "),
        seg("code", 'ax.set_ylabel("Revenue")'),
        seg("text", ". Axis labels tell the reader what the numbers mean."),
      ],
      steps: [
        "set_xlabel and set_ylabel take plain strings.",
        "Always state the unit if there is one.",
      ],
      starter: `# TODO: label both axes\n${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_xlabel("Month")\nax.set_ylabel("Revenue")\n\nprint("labelled")`,
      checks: [
        assertHasAxes(),
        assertEquals("x label is set", "ax.get_xlabel()", '"Month"'),
        assertEquals("y label is set", "ax.get_ylabel()", '"Revenue"'),
      ],
      vars: ["plt", "ax"],
      constraints: ['x label "Month"', 'y label "Revenue"'],
      hints: ['ax.set_xlabel("Month")', 'ax.set_ylabel("Revenue")'],
      placeholder: '# ax.set_xlabel("Month")',
    }),

    conceptTask({
      slug: "plt-figure-size",
      title: "Matplotlib: Set the Figure Size",
      level: "medium",
      description:
        "Create the figure with figsize=(6, 4) and print the size Matplotlib reports.",
      expected: "[6.0, 4.0]",
      assertOnly: true,
      intro: [
        seg("text", "Pass "),
        seg("code", "figsize=(6, 4)"),
        seg("text", " to "),
        seg("code", "plt.subplots"),
        seg("text", ", plot the line, then print "),
        seg("code", "fig.get_size_inches().tolist()"),
        seg("text", "."),
      ],
      steps: [
        "figsize is measured in inches, width first.",
        "Sizing the figure is how you stop labels from overlapping.",
      ],
      starter: `# TODO: size the figure 6 by 4 inches\n${IMPORT}\n\nfig, ax = None, None\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots(figsize=(6, 4))\nax.plot([1, 2, 3], [10, 20, 30])\n\nprint(fig.get_size_inches().tolist())`,
      checks: [
        assertHasAxes(),
        assertEquals("figure is 6 by 4 inches", "fig.get_size_inches().tolist()", "[6.0, 4.0]"),
        assertEquals("the line was drawn", "len(ax.lines)", "1"),
      ],
      vars: ["plt", "fig", "ax"],
      constraints: ["Pass figsize=(6, 4)", "Print the reported size as a list"],
      hints: ["fig, ax = plt.subplots(figsize=(6, 4))", "print(fig.get_size_inches().tolist())"],
      placeholder: "# fig, ax = plt.subplots(figsize=(6, 4))",
    }),

    conceptTask({
      slug: "plt-two-lines",
      title: "Matplotlib: Compare Two Series",
      level: "medium",
      description:
        "Plot two labelled lines on the same axes and add a legend so they can be told apart.",
      expected: "two lines",
      assertOnly: true,
      intro: [
        seg("text", "Plot "),
        seg("code", "[10, 20, 30]"),
        seg("text", ' labelled "2024" and '),
        seg("code", "[15, 18, 40]"),
        seg("text", ' labelled "2025" on the same '),
        seg("code", "ax"),
        seg("text", ", then call "),
        seg("code", "ax.legend()"),
        seg("text", "."),
      ],
      steps: [
        "Call ax.plot twice — both lines land on the same axes.",
        "Pass label= on each call, then ax.legend() picks the labels up.",
        "Without a legend, two lines are meaningless.",
      ],
      starter: `# TODO: plot both years and add a legend\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], label="2024")\nax.plot([1, 2, 3], [15, 18, 40], label="2025")\nax.legend()\n\nprint("two lines")`,
      checks: [
        assertHasAxes(),
        assertEquals("two lines were drawn", "len(ax.lines)", "2"),
        assertTrue(
          "a legend was added",
          "ax.get_legend() is not None",
          "Call ax.legend() after plotting both lines",
        ),
        assertEquals(
          "both series are labelled",
          "[t.get_text() for t in ax.get_legend().get_texts()]",
          '["2024", "2025"]'
        ),
      ],
      vars: ["plt", "ax"],
      constraints: [
        "Both lines on the same axes",
        'Labels "2024" and "2025" in that order',
        "Call ax.legend()",
      ],
      hints: ['ax.plot([1, 2, 3], [10, 20, 30], label="2024")', "ax.legend()"],
      placeholder: "# ax.plot(..., label='2024')",
    }),

    conceptTask({
      slug: "plt-savefig",
      title: "Matplotlib: Save the Chart to a File",
      level: "medium",
      description:
        "Plot the line, save the figure to chart.png with fig.savefig, and print a confirmation.",
      expected: "saved",
      assertOnly: true,
      intro: [
        seg("text", "Save your chart with "),
        seg("code", 'fig.savefig("chart.png")'),
        seg("text", " — that is how a chart gets into a report or an email."),
      ],
      steps: [
        "savefig writes an image file from the figure.",
        "The extension chooses the format: .png, .pdf, .svg.",
        "In a script, save instead of show.",
      ],
      starter: `# TODO: plot and save the figure\n${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nfig.savefig("chart.png")\n\nprint("saved")`,
      checks: [
        assertHasAxes(),
        assertTrue(
          "chart.png was written",
          '__import__("os").path.exists("chart.png")',
          "Expected fig.savefig to create chart.png",
        ),
        assertTrue(
          "the file is not empty",
          '__import__("os").path.getsize("chart.png") > 0',
          "The saved image should contain data",
        ),
      ],
      vars: ["plt", "fig", "ax"],
      constraints: ["File name must be chart.png", "Use fig.savefig()"],
      hints: ['fig.savefig("chart.png")'],
      placeholder: '# fig.savefig("chart.png")',
    }),

    conceptTask({
      slug: "plt-complete-chart",
      title: "Matplotlib: A Report-Ready Chart",
      level: "hard",
      description:
        "Build one chart with a line, a title, both axis labels, and save it to report.png.",
      expected: "report chart ready",
      assertOnly: true,
      intro: [
        seg("text", "Put it all together: plot the revenue line, set the title "),
        seg("code", "Q1 Revenue"),
        seg("text", ", label the axes "),
        seg("code", "Month"),
        seg("text", " and "),
        seg("code", "Revenue"),
        seg("text", ", then save to "),
        seg("code", "report.png"),
        seg("text", "."),
      ],
      steps: [
        "Order does not matter — plot, then decorate, then save.",
        "Save last so the file includes every change.",
        "A chart is only finished when a stranger can read it.",
      ],
      starter: `# TODO: build the full chart and save it\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [120, 150, 170])\nax.set_title("Q1 Revenue")\nax.set_xlabel("Month")\nax.set_ylabel("Revenue")\nfig.savefig("report.png")\n\nprint("report chart ready")`,
      checks: [
        assertHasAxes(),
        assertEquals("title is set", "ax.get_title()", '"Q1 Revenue"'),
        assertEquals("x label is set", "ax.get_xlabel()", '"Month"'),
        assertEquals("y label is set", "ax.get_ylabel()", '"Revenue"'),
        assertEquals("a line was plotted", "len(ax.lines)", "1"),
        assertTrue(
          "report.png was saved",
          '__import__("os").path.exists("report.png")',
          "Save the finished chart to report.png",
        ),
      ],
      vars: ["plt", "fig", "ax"],
      constraints: [
        'Title "Q1 Revenue", labels "Month" and "Revenue"',
        "Save to report.png",
      ],
      hints: ['ax.set_title("Q1 Revenue")', 'fig.savefig("report.png")'],
      placeholder: "# plot, title, labels, savefig",
    }),
  ];
}

export function chartTypeTasks() {
  return [
    conceptTask({
      slug: "chart-line-trend",
      title: "Charts: A Line for Trends",
      level: "easy",
      description:
        "Use a line chart to show revenue rising over four weeks and check the plotted values.",
      expected: "line drawn",
      assertOnly: true,
      intro: [
        seg("text", "Line charts are for change over time. Plot weeks "),
        seg("code", "[1, 2, 3, 4]"),
        seg("text", " against "),
        seg("code", "[10, 14, 13, 20]"),
        seg("text", " with "),
        seg("code", "ax.plot"),
        seg("text", "."),
      ],
      steps: [
        "Use a line when the x axis is ordered — dates, weeks, months.",
        "The line implies the points are connected in sequence.",
      ],
      starter: `# TODO: plot the weekly trend\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3, 4], [10, 14, 13, 20])\n\nprint("line drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("one line", "len(ax.lines)", "1"),
        assertEquals(
          "four weeks of values",
          "ax.lines[0].get_ydata().tolist()",
          "[10, 14, 13, 20]"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.plot", "Plot all four weeks"],
      hints: ["ax.plot([1, 2, 3, 4], [10, 14, 13, 20])"],
      placeholder: "# ax.plot(weeks, revenue)",
    }),

    conceptTask({
      slug: "chart-bar-categories",
      title: "Charts: A Bar for Categories",
      level: "easy",
      description:
        "Use ax.bar to compare revenue across three product categories and check the bar heights.",
      expected: "bars drawn",
      assertOnly: true,
      intro: [
        seg("text", "Bar charts compare separate categories. Use "),
        seg("code", 'ax.bar(["pen", "book", "bag"], [30, 70, 40])'),
        seg("text", "."),
      ],
      steps: [
        "Use bars when the x axis has no natural order.",
        "Each bar becomes a patch you can inspect afterwards.",
        "Bars must start at zero or they mislead.",
      ],
      starter: `# TODO: draw one bar per category\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.bar(["pen", "book", "bag"], [30, 70, 40])\n\nprint("bars drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("three bars", "len(ax.patches)", "3"),
        assertEquals(
          "bar heights match the revenue",
          "[p.get_height() for p in ax.patches]",
          "[30.0, 70.0, 40.0]"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.bar", "Three categories in the given order"],
      hints: ['ax.bar(["pen", "book", "bag"], [30, 70, 40])'],
      placeholder: "# ax.bar(categories, values)",
    }),

    conceptTask({
      slug: "chart-scatter-relationship",
      title: "Charts: A Scatter for Relationships",
      level: "easy",
      description:
        "Use ax.scatter to show how units sold relates to revenue and confirm the points were added.",
      expected: "points drawn",
      assertOnly: true,
      intro: [
        seg("text", "Scatter plots show how two numeric variables move together. Use "),
        seg("code", "ax.scatter([2, 4, 6], [20, 38, 61])"),
        seg("text", "."),
      ],
      steps: [
        "Scatter draws unconnected points — no order is implied.",
        "It is the first chart to reach for when checking correlation.",
        "Points are stored as a collection, not as lines.",
      ],
      starter: `# TODO: scatter units against revenue\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.scatter([2, 4, 6], [20, 38, 61])\n\nprint("points drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("one scatter collection", "len(ax.collections)", "1"),
        assertEquals("no lines were drawn", "len(ax.lines)", "0"),
        assertEquals("three points", "len(ax.collections[0].get_offsets())", "3"),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.scatter, not ax.plot", "Three points"],
      hints: ["ax.scatter([2, 4, 6], [20, 38, 61])"],
      placeholder: "# ax.scatter(units, revenue)",
    }),

    conceptTask({
      slug: "chart-histogram-bins",
      title: "Charts: A Histogram for Distributions",
      level: "medium",
      description:
        "Use ax.hist with 4 bins to show how order values are distributed and check the bin count.",
      expected: "histogram drawn",
      assertOnly: true,
      intro: [
        seg("text", "Histograms show the shape of one numeric column. Use "),
        seg("code", "ax.hist(values, bins=4)"),
        seg("text", " on "),
        seg("code", "[5, 7, 8, 12, 13, 15, 21, 22]"),
        seg("text", "."),
      ],
      steps: [
        "A histogram groups values into bins and counts them.",
        "bins=4 gives four bars — the bin count changes the story, so choose it deliberately.",
        "A bar chart compares categories; a histogram shows a distribution.",
      ],
      starter: `# TODO: draw a 4-bin histogram\n${IMPORT}\n\nvalues = [5, 7, 8, 12, 13, 15, 21, 22]\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nvalues = [5, 7, 8, 12, 13, 15, 21, 22]\nfig, ax = plt.subplots()\nax.hist(values, bins=4)\n\nprint("histogram drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("four bins were drawn", "len(ax.patches)", "4"),
        assertEquals(
          "every value was counted",
          "sum(p.get_height() for p in ax.patches)",
          "8.0"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.hist with bins=4", "Plot all eight values"],
      hints: ["ax.hist(values, bins=4)"],
      placeholder: "# ax.hist(values, bins=4)",
    }),

    conceptTask({
      slug: "chart-horizontal-bar",
      title: "Charts: Horizontal Bars for Long Labels",
      level: "medium",
      description:
        "Use ax.barh so long category names stay readable, then check the bar widths.",
      expected: "horizontal bars drawn",
      assertOnly: true,
      intro: [
        seg("text", "When labels are long, turn the bars sideways with "),
        seg("code", "ax.barh"),
        seg("text", ". Plot "),
        seg("code", '["stationery", "media"]'),
        seg("text", " against "),
        seg("code", "[50, 70]"),
        seg("text", "."),
      ],
      steps: [
        "barh takes the categories first, then the widths.",
        "Horizontal bars are measured with get_width(), not get_height().",
      ],
      starter: `# TODO: draw horizontal bars\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.barh(["stationery", "media"], [50, 70])\n\nprint("horizontal bars drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("two bars", "len(ax.patches)", "2"),
        assertEquals(
          "widths carry the values",
          "[p.get_width() for p in ax.patches]",
          "[50.0, 70.0]"
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.barh", "Two categories in the given order"],
      hints: ['ax.barh(["stationery", "media"], [50, 70])'],
      placeholder: "# ax.barh(categories, values)",
    }),

    conceptTask({
      slug: "chart-pie-share",
      title: "Charts: A Pie for Shares of a Whole",
      level: "medium",
      description:
        "Use ax.pie to show each region's share of revenue and confirm three wedges were drawn.",
      expected: "pie drawn",
      assertOnly: true,
      intro: [
        seg("text", "Pie charts show parts of one total. Use "),
        seg("code", 'ax.pie([50, 30, 20], labels=["South", "North", "East"])'),
        seg("text", "."),
      ],
      steps: [
        "The values are converted to percentages of their sum.",
        "Only use a pie when the parts really add up to a meaningful whole.",
        "Each wedge is a patch on the axes.",
      ],
      starter: `# TODO: draw the revenue share pie\n${IMPORT}\n\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\nfig, ax = plt.subplots()\nax.pie([50, 30, 20], labels=["South", "North", "East"])\n\nprint("pie drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("three wedges", "len(ax.patches)", "3"),
        assertTrue(
          "the regions are labelled",
          '"South" in [t.get_text() for t in ax.texts]',
          "Pass labels= so each wedge is named",
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.pie with labels=", "Three wedges"],
      hints: ['ax.pie([50, 30, 20], labels=["South", "North", "East"])'],
      placeholder: "# ax.pie(values, labels=[...])",
    }),

    conceptTask({
      slug: "chart-pick-the-right-one",
      title: "Charts: Pick the Right Chart",
      level: "hard",
      description:
        "Given category totals, choose a bar chart, sort the bars from largest to smallest, and label the axes.",
      expected: "ranked bars drawn",
      assertOnly: true,
      intro: [
        seg("text", "You have revenue per category in a dict. Categories are unordered, so a "),
        seg("code", "bar"),
        seg("text", " chart is right. Sort the categories from largest to smallest, plot them, and label the y axis "),
        seg("code", "Revenue"),
        seg("text", "."),
      ],
      steps: [
        "sorted(totals, key=totals.get, reverse=True) ranks the keys by value.",
        "Ranked bars let the reader compare at a glance.",
        "Build the matching value list in the same order.",
      ],
      starter: `# TODO: rank the categories, then plot bars\n${IMPORT}\n\ntotals = {"pen": 30, "book": 70, "bag": 40}\nfig, ax = plt.subplots()\n`,
      solution: `${IMPORT}\n\ntotals = {"pen": 30, "book": 70, "bag": 40}\nnames = sorted(totals, key=totals.get, reverse=True)\nvalues = [totals[name] for name in names]\n\nfig, ax = plt.subplots()\nax.bar(names, values)\nax.set_ylabel("Revenue")\n\nprint("ranked bars drawn")`,
      checks: [
        assertHasAxes(),
        assertEquals("categories are ranked", "names", '["book", "bag", "pen"]'),
        assertEquals("three bars", "len(ax.patches)", "3"),
        assertEquals(
          "bars follow the ranking",
          "[p.get_height() for p in ax.patches]",
          "[70.0, 40.0, 30.0]"
        ),
        assertEquals("y axis is labelled", "ax.get_ylabel()", '"Revenue"'),
      ],
      vars: ["plt", "ax", "names"],
      constraints: [
        "Sort the categories by revenue, largest first",
        "Store the sorted names in names",
        'Label the y axis "Revenue"',
      ],
      hints: [
        "names = sorted(totals, key=totals.get, reverse=True)",
        "values = [totals[name] for name in names]",
      ],
      placeholder: "# names = sorted(totals, key=totals.get, reverse=True)",
    }),
  ];
}

export function customizePlotTasks() {
  const BASE = `${IMPORT}\n\nfig, ax = plt.subplots()`;
  return [
    conceptTask({
      slug: "custom-color",
      title: "Custom: Set the Line Colour",
      level: "easy",
      description: 'Plot the line in green by passing color="green" to ax.plot.',
      expected: "green line",
      assertOnly: true,
      intro: [
        seg("text", "Pass "),
        seg("code", 'color="green"'),
        seg("text", " to "),
        seg("code", "ax.plot"),
        seg("text", ". Colour should carry meaning — green for growth, red for loss."),
      ],
      steps: ["color accepts names, hex codes, or RGB tuples."],
      starter: `# TODO: make the line green\n${BASE}\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30], color="green")\n\nprint("green line")`,
      checks: [
        assertHasAxes(),
        assertEquals("line colour is green", "ax.lines[0].get_color()", '"green"'),
      ],
      vars: ["plt", "ax"],
      constraints: ['Use color="green"', "One line on the chart"],
      hints: ['ax.plot([1, 2, 3], [10, 20, 30], color="green")'],
      placeholder: '# ax.plot(..., color="green")',
    }),

    conceptTask({
      slug: "custom-linestyle",
      title: "Custom: Dash the Line",
      level: "easy",
      description: 'Draw the line as dashes by passing linestyle="--".',
      expected: "dashed line",
      assertOnly: true,
      intro: [
        seg("text", "Pass "),
        seg("code", 'linestyle="--"'),
        seg("text", " to draw dashes. Dashed lines usually mean a forecast or a target."),
      ],
      steps: ['Common styles: "-" solid, "--" dashed, ":" dotted.'],
      starter: `# TODO: dash the line\n${BASE}\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30], linestyle="--")\n\nprint("dashed line")`,
      checks: [
        assertHasAxes(),
        assertEquals("line style is dashed", "ax.lines[0].get_linestyle()", '"--"'),
      ],
      vars: ["plt", "ax"],
      constraints: ['Use linestyle="--"'],
      hints: ['ax.plot([1, 2, 3], [10, 20, 30], linestyle="--")'],
      placeholder: '# ax.plot(..., linestyle="--")',
    }),

    conceptTask({
      slug: "custom-marker",
      title: "Custom: Mark Each Data Point",
      level: "easy",
      description: 'Show the individual data points by passing marker="o".',
      expected: "markers added",
      assertOnly: true,
      intro: [
        seg("text", "Pass "),
        seg("code", 'marker="o"'),
        seg("text", " so each measured point is visible, not just the connecting line."),
      ],
      steps: ["Markers matter when you have few points — they show what was measured."],
      starter: `# TODO: add circular markers\n${BASE}\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30], marker="o")\n\nprint("markers added")`,
      checks: [
        assertHasAxes(),
        assertEquals("marker is a circle", "ax.lines[0].get_marker()", '"o"'),
        assertEquals("the line is still there", "len(ax.lines)", "1"),
      ],
      vars: ["plt", "ax"],
      constraints: ['Use marker="o"'],
      hints: ['ax.plot([1, 2, 3], [10, 20, 30], marker="o")'],
      placeholder: '# ax.plot(..., marker="o")',
    }),

    conceptTask({
      slug: "custom-legend",
      title: "Custom: Add a Legend",
      level: "medium",
      description:
        'Label the line "Revenue" and show a legend so the reader knows what it is.',
      expected: "legend added",
      assertOnly: true,
      intro: [
        seg("text", "Pass "),
        seg("code", 'label="Revenue"'),
        seg("text", " to "),
        seg("code", "ax.plot"),
        seg("text", ", then call "),
        seg("code", "ax.legend()"),
        seg("text", ". The label alone does nothing until the legend is drawn."),
      ],
      steps: [
        "label= names the series; ax.legend() renders the box.",
        "Forgetting the legend call is the most common plotting mistake.",
      ],
      starter: `# TODO: label the line and show the legend\n${BASE}\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30], label="Revenue")\nax.legend()\n\nprint("legend added")`,
      checks: [
        assertHasAxes(),
        assertTrue(
          "a legend exists",
          "ax.get_legend() is not None",
          "Call ax.legend() to draw the legend",
        ),
        assertEquals(
          "the legend shows the label",
          "[t.get_text() for t in ax.get_legend().get_texts()]",
          '["Revenue"]'
        ),
      ],
      vars: ["plt", "ax"],
      constraints: ['Label must be "Revenue"', "Call ax.legend()"],
      hints: ['ax.plot(..., label="Revenue")', "ax.legend()"],
      placeholder: '# ax.plot(..., label="Revenue")',
    }),

    conceptTask({
      slug: "custom-axis-limits",
      title: "Custom: Fix the Y Axis Range",
      level: "medium",
      description:
        "Force the y axis to run from 0 to 100 with ax.set_ylim and print the range.",
      expected: "(0.0, 100.0)",
      assertOnly: true,
      intro: [
        seg("text", "Call "),
        seg("code", "ax.set_ylim(0, 100)"),
        seg("text", " and print "),
        seg("code", "ax.get_ylim()"),
        seg("text", ". Starting bars and lines at zero keeps the chart honest."),
      ],
      steps: [
        "Matplotlib auto-scales by default, which can exaggerate small changes.",
        "set_ylim pins the range so charts stay comparable.",
      ],
      starter: `# TODO: pin the y axis from 0 to 100\n${BASE}\nax.plot([1, 2, 3], [10, 20, 30])\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_ylim(0, 100)\n\nprint(ax.get_ylim())`,
      checks: [
        assertHasAxes(),
        assertEquals("y axis runs 0 to 100", "ax.get_ylim()", "(0.0, 100.0)"),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.set_ylim(0, 100)", "Print ax.get_ylim()"],
      hints: ["ax.set_ylim(0, 100)", "print(ax.get_ylim())"],
      placeholder: "# ax.set_ylim(0, 100)",
    }),

    conceptTask({
      slug: "custom-ticks",
      title: "Custom: Control the X Ticks",
      level: "medium",
      description:
        "Set the x ticks to exactly 1, 2, 3 with ax.set_xticks and print them as a list.",
      expected: "[1.0, 2.0, 3.0]",
      assertOnly: true,
      intro: [
        seg("text", "Call "),
        seg("code", "ax.set_xticks([1, 2, 3])"),
        seg("text", " and print "),
        seg("code", "ax.get_xticks().tolist()"),
        seg("text", " — no more half-month ticks like 1.5."),
      ],
      steps: [
        "Automatic ticks can land on meaningless values.",
        "set_xticks takes the exact positions you want.",
      ],
      starter: `# TODO: set the x ticks explicitly\n${BASE}\nax.plot([1, 2, 3], [10, 20, 30])\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_xticks([1, 2, 3])\n\nprint(ax.get_xticks().tolist())`,
      checks: [
        assertHasAxes(),
        assertEquals("three ticks are set", "ax.get_xticks().tolist()", "[1.0, 2.0, 3.0]"),
      ],
      vars: ["plt", "ax"],
      constraints: ["Use ax.set_xticks([1, 2, 3])", "Print them with .tolist()"],
      hints: ["ax.set_xticks([1, 2, 3])", "print(ax.get_xticks().tolist())"],
      placeholder: "# ax.set_xticks([1, 2, 3])",
    }),

    conceptTask({
      slug: "custom-styled-chart",
      title: "Custom: Style a Chart End to End",
      level: "hard",
      description:
        "Draw a thick red dashed line with a legend, a title, and a y axis pinned from 0 to 50.",
      expected: "styled chart ready",
      assertOnly: true,
      intro: [
        seg("text", "Draw the line in "),
        seg("code", "red"),
        seg("text", " with "),
        seg("code", "linewidth=3"),
        seg("text", ", "),
        seg("code", 'linestyle="--"'),
        seg("text", ", label "),
        seg("code", "Target"),
        seg("text", ", title "),
        seg("code", "Sales vs Target"),
        seg("text", ", and y limits "),
        seg("code", "0"),
        seg("text", " to "),
        seg("code", "50"),
        seg("text", "."),
      ],
      steps: [
        "All style options can go in the single ax.plot call.",
        "Then set the title, the legend, and the limits.",
        "A dashed red line is the convention for a target you have not hit.",
      ],
      starter: `# TODO: apply every style option\n${BASE}\n`,
      solution: `${BASE}\nax.plot([1, 2, 3], [10, 20, 30], color="red", linewidth=3, linestyle="--", label="Target")\nax.set_title("Sales vs Target")\nax.set_ylim(0, 50)\nax.legend()\n\nprint("styled chart ready")`,
      checks: [
        assertHasAxes(),
        assertEquals("colour is red", "ax.lines[0].get_color()", '"red"'),
        assertEquals("line is thick", "ax.lines[0].get_linewidth()", "3.0"),
        assertEquals("line is dashed", "ax.lines[0].get_linestyle()", '"--"'),
        assertEquals("title is set", "ax.get_title()", '"Sales vs Target"'),
        assertEquals("y limits are pinned", "ax.get_ylim()", "(0.0, 50.0)"),
        assertTrue(
          "legend is shown",
          "ax.get_legend() is not None",
          "Call ax.legend() so the Target label appears",
        ),
      ],
      vars: ["plt", "ax"],
      constraints: [
        'color="red", linewidth=3, linestyle="--", label="Target"',
        'Title "Sales vs Target" and y limits 0 to 50',
      ],
      hints: [
        'ax.plot(..., color="red", linewidth=3, linestyle="--", label="Target")',
        "ax.set_ylim(0, 50) then ax.legend()",
      ],
      placeholder: "# ax.plot(..., color='red', linewidth=3, ...)",
    }),
  ];
}
