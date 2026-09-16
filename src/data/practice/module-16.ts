import type { PracticeProblem } from "@/lib/types";

export const module16Practice: PracticeProblem[] = [
  {
    "id": "m16-t1-p01",
    "topicId": "m16-t1",
    "slug": "plt-first-chart",
    "title": "Matplotlib: Your First Line Chart",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create a figure with plt.subplots, plot three months of revenue as a line, and print a confirmation.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "fig, ax = plt.subplots()"
        },
        {
          "type": "text",
          "value": ", plot "
        },
        {
          "type": "code",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": " against "
        },
        {
          "type": "code",
          "value": "[10, 20, 30]"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "ax.plot"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "chart ready"
        },
        {
          "type": "text",
          "value": ". The tests inspect the chart you built, not the text."
        }
      ],
      "editorPlaceholder": "# fig, ax = plt.subplots()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! The tests read the real line data off your axes.",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "plt.subplots() returns a figure and an axes — draw on the axes.",
          "ax.plot(x, y) adds a line to the axes.",
          "The preview pane cannot show images, so print a line to confirm it ran."
        ]
      }
    },
    "examples": [
      {
        "output": "chart ready"
      }
    ],
    "constraints": [
      "Use fig, ax = plt.subplots()",
      "Draw with ax.plot()",
      "Print a confirmation line"
    ],
    "hints": [
      "fig, ax = plt.subplots()",
      "ax.plot([1, 2, 3], [10, 20, 30])"
    ],
    "starterCode": "# TODO: build a line chart on ax\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n\nprint(\"chart ready\")",
    "publicTests": [
      {
        "id": "m16-t1-p01-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p01-t2",
        "label": "exactly one line was drawn",
        "assertCode": "assert (len(ax.lines)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p01-t3",
        "label": "the y values are plotted",
        "assertCode": "assert (ax.lines[0].get_ydata().tolist()) == ([10, 20, 30]), \"Expected \" + repr([10, 20, 30]) + \", got \" + repr(ax.lines[0].get_ydata().tolist())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p01-t4",
        "label": "the x values are plotted",
        "assertCode": "assert (ax.lines[0].get_xdata().tolist()) == ([1, 2, 3]), \"Expected \" + repr([1, 2, 3]) + \", got \" + repr(ax.lines[0].get_xdata().tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Create a figure with plt.subplots, plot three months of revenue as a line, and print a confirmation.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n\nprint(\"chart ready\")"
  },
  {
    "id": "m16-t1-p02",
    "topicId": "m16-t1",
    "slug": "plt-title",
    "title": "Matplotlib: Give the Chart a Title",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Plot the revenue line and set the chart title to \"Monthly Revenue\" with ax.set_title.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Add "
        },
        {
          "type": "code",
          "value": "ax.set_title(\"Monthly Revenue\")"
        },
        {
          "type": "text",
          "value": " to your chart. An untitled chart is unreadable in a report."
        }
      ],
      "editorPlaceholder": "# ax.set_title(\"Monthly Revenue\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "ax.set_title(text) sets the heading above the axes.",
          "ax.get_title() reads it back — that is what the test checks."
        ]
      }
    },
    "examples": [
      {
        "output": "titled"
      }
    ],
    "constraints": [
      "Title must be exactly \"Monthly Revenue\"",
      "Keep the line on the chart"
    ],
    "hints": [
      "ax.set_title(\"Monthly Revenue\")"
    ],
    "starterCode": "# TODO: plot and add a title\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_title(\"Monthly Revenue\")\n\nprint(\"titled\")",
    "publicTests": [
      {
        "id": "m16-t1-p02-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p02-t2",
        "label": "the title is set",
        "assertCode": "assert (ax.get_title()) == (\"Monthly Revenue\"), \"Expected \" + repr(\"Monthly Revenue\") + \", got \" + repr(ax.get_title())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p02-t3",
        "label": "the line is still drawn",
        "assertCode": "assert (len(ax.lines)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      }
    ],
    "approach": "Plot the revenue line and set the chart title to \"Monthly Revenue\" with ax.set_title.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_title(\"Monthly Revenue\")\n\nprint(\"titled\")"
  },
  {
    "id": "m16-t1-p03",
    "topicId": "m16-t1",
    "slug": "plt-axis-labels",
    "title": "Matplotlib: Label Both Axes",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Set the x label to \"Month\" and the y label to \"Revenue\" on your chart.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "ax.set_xlabel(\"Month\")"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "ax.set_ylabel(\"Revenue\")"
        },
        {
          "type": "text",
          "value": ". Axis labels tell the reader what the numbers mean."
        }
      ],
      "editorPlaceholder": "# ax.set_xlabel(\"Month\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "set_xlabel and set_ylabel take plain strings.",
          "Always state the unit if there is one."
        ]
      }
    },
    "examples": [
      {
        "output": "labelled"
      }
    ],
    "constraints": [
      "x label \"Month\"",
      "y label \"Revenue\""
    ],
    "hints": [
      "ax.set_xlabel(\"Month\")",
      "ax.set_ylabel(\"Revenue\")"
    ],
    "starterCode": "# TODO: label both axes\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_xlabel(\"Month\")\nax.set_ylabel(\"Revenue\")\n\nprint(\"labelled\")",
    "publicTests": [
      {
        "id": "m16-t1-p03-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p03-t2",
        "label": "x label is set",
        "assertCode": "assert (ax.get_xlabel()) == (\"Month\"), \"Expected \" + repr(\"Month\") + \", got \" + repr(ax.get_xlabel())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p03-t3",
        "label": "y label is set",
        "assertCode": "assert (ax.get_ylabel()) == (\"Revenue\"), \"Expected \" + repr(\"Revenue\") + \", got \" + repr(ax.get_ylabel())",
        "visibility": "public"
      }
    ],
    "approach": "Set the x label to \"Month\" and the y label to \"Revenue\" on your chart.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_xlabel(\"Month\")\nax.set_ylabel(\"Revenue\")\n\nprint(\"labelled\")"
  },
  {
    "id": "m16-t1-p04",
    "topicId": "m16-t1",
    "slug": "plt-figure-size",
    "title": "Matplotlib: Set the Figure Size",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create the figure with figsize=(6, 4) and print the size Matplotlib reports.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Pass "
        },
        {
          "type": "code",
          "value": "figsize=(6, 4)"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "plt.subplots"
        },
        {
          "type": "text",
          "value": ", plot the line, then print "
        },
        {
          "type": "code",
          "value": "fig.get_size_inches().tolist()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# fig, ax = plt.subplots(figsize=(6, 4))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "fig",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "figsize is measured in inches, width first.",
          "Sizing the figure is how you stop labels from overlapping."
        ]
      }
    },
    "examples": [
      {
        "output": "[6.0, 4.0]"
      }
    ],
    "constraints": [
      "Pass figsize=(6, 4)",
      "Print the reported size as a list"
    ],
    "hints": [
      "fig, ax = plt.subplots(figsize=(6, 4))",
      "print(fig.get_size_inches().tolist())"
    ],
    "starterCode": "# TODO: size the figure 6 by 4 inches\nimport matplotlib.pyplot as plt\n\nfig, ax = None, None\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(6, 4))\nax.plot([1, 2, 3], [10, 20, 30])\n\nprint(fig.get_size_inches().tolist())",
    "publicTests": [
      {
        "id": "m16-t1-p04-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p04-t2",
        "label": "figure is 6 by 4 inches",
        "assertCode": "assert (fig.get_size_inches().tolist()) == ([6.0, 4.0]), \"Expected \" + repr([6.0, 4.0]) + \", got \" + repr(fig.get_size_inches().tolist())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p04-t3",
        "label": "the line was drawn",
        "assertCode": "assert (len(ax.lines)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      }
    ],
    "approach": "Create the figure with figsize=(6, 4) and print the size Matplotlib reports.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(6, 4))\nax.plot([1, 2, 3], [10, 20, 30])\n\nprint(fig.get_size_inches().tolist())"
  },
  {
    "id": "m16-t1-p05",
    "topicId": "m16-t1",
    "slug": "plt-two-lines",
    "title": "Matplotlib: Compare Two Series",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Plot two labelled lines on the same axes and add a legend so they can be told apart.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Plot "
        },
        {
          "type": "code",
          "value": "[10, 20, 30]"
        },
        {
          "type": "text",
          "value": " labelled \"2024\" and "
        },
        {
          "type": "code",
          "value": "[15, 18, 40]"
        },
        {
          "type": "text",
          "value": " labelled \"2025\" on the same "
        },
        {
          "type": "code",
          "value": "ax"
        },
        {
          "type": "text",
          "value": ", then call "
        },
        {
          "type": "code",
          "value": "ax.legend()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.plot(..., label='2024')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Call ax.plot twice — both lines land on the same axes.",
          "Pass label= on each call, then ax.legend() picks the labels up.",
          "Without a legend, two lines are meaningless."
        ]
      }
    },
    "examples": [
      {
        "output": "two lines"
      }
    ],
    "constraints": [
      "Both lines on the same axes",
      "Labels \"2024\" and \"2025\" in that order",
      "Call ax.legend()"
    ],
    "hints": [
      "ax.plot([1, 2, 3], [10, 20, 30], label=\"2024\")",
      "ax.legend()"
    ],
    "starterCode": "# TODO: plot both years and add a legend\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], label=\"2024\")\nax.plot([1, 2, 3], [15, 18, 40], label=\"2025\")\nax.legend()\n\nprint(\"two lines\")",
    "publicTests": [
      {
        "id": "m16-t1-p05-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p05-t2",
        "label": "two lines were drawn",
        "assertCode": "assert (len(ax.lines)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p05-t3",
        "label": "a legend was added",
        "assertCode": "assert ax.get_legend() is not None, \"Call ax.legend() after plotting both lines\"",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p05-t4",
        "label": "both series are labelled",
        "assertCode": "assert ([t.get_text() for t in ax.get_legend().get_texts()]) == ([\"2024\", \"2025\"]), \"Expected \" + repr([\"2024\", \"2025\"]) + \", got \" + repr([t.get_text() for t in ax.get_legend().get_texts()])",
        "visibility": "public"
      }
    ],
    "approach": "Plot two labelled lines on the same axes and add a legend so they can be told apart.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], label=\"2024\")\nax.plot([1, 2, 3], [15, 18, 40], label=\"2025\")\nax.legend()\n\nprint(\"two lines\")"
  },
  {
    "id": "m16-t1-p06",
    "topicId": "m16-t1",
    "slug": "plt-savefig",
    "title": "Matplotlib: Save the Chart to a File",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Plot the line, save the figure to chart.png with fig.savefig, and print a confirmation.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Save your chart with "
        },
        {
          "type": "code",
          "value": "fig.savefig(\"chart.png\")"
        },
        {
          "type": "text",
          "value": " — that is how a chart gets into a report or an email."
        }
      ],
      "editorPlaceholder": "# fig.savefig(\"chart.png\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "fig",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "savefig writes an image file from the figure.",
          "The extension chooses the format: .png, .pdf, .svg.",
          "In a script, save instead of show."
        ]
      }
    },
    "examples": [
      {
        "output": "saved"
      }
    ],
    "constraints": [
      "File name must be chart.png",
      "Use fig.savefig()"
    ],
    "hints": [
      "fig.savefig(\"chart.png\")"
    ],
    "starterCode": "# TODO: plot and save the figure\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nfig.savefig(\"chart.png\")\n\nprint(\"saved\")",
    "publicTests": [
      {
        "id": "m16-t1-p06-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p06-t2",
        "label": "chart.png was written",
        "assertCode": "assert __import__(\"os\").path.exists(\"chart.png\"), \"Expected fig.savefig to create chart.png\"",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p06-t3",
        "label": "the file is not empty",
        "assertCode": "assert __import__(\"os\").path.getsize(\"chart.png\") > 0, \"The saved image should contain data\"",
        "visibility": "public"
      }
    ],
    "approach": "Plot the line, save the figure to chart.png with fig.savefig, and print a confirmation.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nfig.savefig(\"chart.png\")\n\nprint(\"saved\")"
  },
  {
    "id": "m16-t1-p07",
    "topicId": "m16-t1",
    "slug": "plt-complete-chart",
    "title": "Matplotlib: A Report-Ready Chart",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Build one chart with a line, a title, both axis labels, and save it to report.png.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Put it all together: plot the revenue line, set the title "
        },
        {
          "type": "code",
          "value": "Q1 Revenue"
        },
        {
          "type": "text",
          "value": ", label the axes "
        },
        {
          "type": "code",
          "value": "Month"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "Revenue"
        },
        {
          "type": "text",
          "value": ", then save to "
        },
        {
          "type": "code",
          "value": "report.png"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# plot, title, labels, savefig",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "fig",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Order does not matter — plot, then decorate, then save.",
          "Save last so the file includes every change.",
          "A chart is only finished when a stranger can read it."
        ]
      }
    },
    "examples": [
      {
        "output": "report chart ready"
      }
    ],
    "constraints": [
      "Title \"Q1 Revenue\", labels \"Month\" and \"Revenue\"",
      "Save to report.png"
    ],
    "hints": [
      "ax.set_title(\"Q1 Revenue\")",
      "fig.savefig(\"report.png\")"
    ],
    "starterCode": "# TODO: build the full chart and save it\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [120, 150, 170])\nax.set_title(\"Q1 Revenue\")\nax.set_xlabel(\"Month\")\nax.set_ylabel(\"Revenue\")\nfig.savefig(\"report.png\")\n\nprint(\"report chart ready\")",
    "publicTests": [
      {
        "id": "m16-t1-p07-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p07-t2",
        "label": "title is set",
        "assertCode": "assert (ax.get_title()) == (\"Q1 Revenue\"), \"Expected \" + repr(\"Q1 Revenue\") + \", got \" + repr(ax.get_title())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p07-t3",
        "label": "x label is set",
        "assertCode": "assert (ax.get_xlabel()) == (\"Month\"), \"Expected \" + repr(\"Month\") + \", got \" + repr(ax.get_xlabel())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p07-t4",
        "label": "y label is set",
        "assertCode": "assert (ax.get_ylabel()) == (\"Revenue\"), \"Expected \" + repr(\"Revenue\") + \", got \" + repr(ax.get_ylabel())",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p07-t5",
        "label": "a line was plotted",
        "assertCode": "assert (len(ax.lines)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      },
      {
        "id": "m16-t1-p07-t6",
        "label": "report.png was saved",
        "assertCode": "assert __import__(\"os\").path.exists(\"report.png\"), \"Save the finished chart to report.png\"",
        "visibility": "public"
      }
    ],
    "approach": "Build one chart with a line, a title, both axis labels, and save it to report.png.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [120, 150, 170])\nax.set_title(\"Q1 Revenue\")\nax.set_xlabel(\"Month\")\nax.set_ylabel(\"Revenue\")\nfig.savefig(\"report.png\")\n\nprint(\"report chart ready\")"
  },
  {
    "id": "m16-t2-p01",
    "topicId": "m16-t2",
    "slug": "chart-line-trend",
    "title": "Charts: A Line for Trends",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Use a line chart to show revenue rising over four weeks and check the plotted values.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Line charts are for change over time. Plot weeks "
        },
        {
          "type": "code",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": " against "
        },
        {
          "type": "code",
          "value": "[10, 14, 13, 20]"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "ax.plot"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.plot(weeks, revenue)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Use a line when the x axis is ordered — dates, weeks, months.",
          "The line implies the points are connected in sequence."
        ]
      }
    },
    "examples": [
      {
        "output": "line drawn"
      }
    ],
    "constraints": [
      "Use ax.plot",
      "Plot all four weeks"
    ],
    "hints": [
      "ax.plot([1, 2, 3, 4], [10, 14, 13, 20])"
    ],
    "starterCode": "# TODO: plot the weekly trend\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3, 4], [10, 14, 13, 20])\n\nprint(\"line drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p01-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p01-t2",
        "label": "one line",
        "assertCode": "assert (len(ax.lines)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p01-t3",
        "label": "four weeks of values",
        "assertCode": "assert (ax.lines[0].get_ydata().tolist()) == ([10, 14, 13, 20]), \"Expected \" + repr([10, 14, 13, 20]) + \", got \" + repr(ax.lines[0].get_ydata().tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Use a line chart to show revenue rising over four weeks and check the plotted values.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3, 4], [10, 14, 13, 20])\n\nprint(\"line drawn\")"
  },
  {
    "id": "m16-t2-p02",
    "topicId": "m16-t2",
    "slug": "chart-bar-categories",
    "title": "Charts: A Bar for Categories",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Use ax.bar to compare revenue across three product categories and check the bar heights.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Bar charts compare separate categories. Use "
        },
        {
          "type": "code",
          "value": "ax.bar([\"pen\", \"book\", \"bag\"], [30, 70, 40])"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.bar(categories, values)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Use bars when the x axis has no natural order.",
          "Each bar becomes a patch you can inspect afterwards.",
          "Bars must start at zero or they mislead."
        ]
      }
    },
    "examples": [
      {
        "output": "bars drawn"
      }
    ],
    "constraints": [
      "Use ax.bar",
      "Three categories in the given order"
    ],
    "hints": [
      "ax.bar([\"pen\", \"book\", \"bag\"], [30, 70, 40])"
    ],
    "starterCode": "# TODO: draw one bar per category\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.bar([\"pen\", \"book\", \"bag\"], [30, 70, 40])\n\nprint(\"bars drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p02-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p02-t2",
        "label": "three bars",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p02-t3",
        "label": "bar heights match the revenue",
        "assertCode": "assert ([p.get_height() for p in ax.patches]) == ([30.0, 70.0, 40.0]), \"Expected \" + repr([30.0, 70.0, 40.0]) + \", got \" + repr([p.get_height() for p in ax.patches])",
        "visibility": "public"
      }
    ],
    "approach": "Use ax.bar to compare revenue across three product categories and check the bar heights.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.bar([\"pen\", \"book\", \"bag\"], [30, 70, 40])\n\nprint(\"bars drawn\")"
  },
  {
    "id": "m16-t2-p03",
    "topicId": "m16-t2",
    "slug": "chart-scatter-relationship",
    "title": "Charts: A Scatter for Relationships",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Use ax.scatter to show how units sold relates to revenue and confirm the points were added.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Scatter plots show how two numeric variables move together. Use "
        },
        {
          "type": "code",
          "value": "ax.scatter([2, 4, 6], [20, 38, 61])"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.scatter(units, revenue)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Scatter draws unconnected points — no order is implied.",
          "It is the first chart to reach for when checking correlation.",
          "Points are stored as a collection, not as lines."
        ]
      }
    },
    "examples": [
      {
        "output": "points drawn"
      }
    ],
    "constraints": [
      "Use ax.scatter, not ax.plot",
      "Three points"
    ],
    "hints": [
      "ax.scatter([2, 4, 6], [20, 38, 61])"
    ],
    "starterCode": "# TODO: scatter units against revenue\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.scatter([2, 4, 6], [20, 38, 61])\n\nprint(\"points drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p03-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p03-t2",
        "label": "one scatter collection",
        "assertCode": "assert (len(ax.collections)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.collections))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p03-t3",
        "label": "no lines were drawn",
        "assertCode": "assert (len(ax.lines)) == (0), \"Expected \" + repr(0) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p03-t4",
        "label": "three points",
        "assertCode": "assert (len(ax.collections[0].get_offsets())) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.collections[0].get_offsets()))",
        "visibility": "public"
      }
    ],
    "approach": "Use ax.scatter to show how units sold relates to revenue and confirm the points were added.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.scatter([2, 4, 6], [20, 38, 61])\n\nprint(\"points drawn\")"
  },
  {
    "id": "m16-t2-p04",
    "topicId": "m16-t2",
    "slug": "chart-histogram-bins",
    "title": "Charts: A Histogram for Distributions",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Use ax.hist with 4 bins to show how order values are distributed and check the bin count.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Histograms show the shape of one numeric column. Use "
        },
        {
          "type": "code",
          "value": "ax.hist(values, bins=4)"
        },
        {
          "type": "text",
          "value": " on "
        },
        {
          "type": "code",
          "value": "[5, 7, 8, 12, 13, 15, 21, 22]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.hist(values, bins=4)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A histogram groups values into bins and counts them.",
          "bins=4 gives four bars — the bin count changes the story, so choose it deliberately.",
          "A bar chart compares categories; a histogram shows a distribution."
        ]
      }
    },
    "examples": [
      {
        "output": "histogram drawn"
      }
    ],
    "constraints": [
      "Use ax.hist with bins=4",
      "Plot all eight values"
    ],
    "hints": [
      "ax.hist(values, bins=4)"
    ],
    "starterCode": "# TODO: draw a 4-bin histogram\nimport matplotlib.pyplot as plt\n\nvalues = [5, 7, 8, 12, 13, 15, 21, 22]\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nvalues = [5, 7, 8, 12, 13, 15, 21, 22]\nfig, ax = plt.subplots()\nax.hist(values, bins=4)\n\nprint(\"histogram drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p04-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p04-t2",
        "label": "four bins were drawn",
        "assertCode": "assert (len(ax.patches)) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p04-t3",
        "label": "every value was counted",
        "assertCode": "assert (sum(p.get_height() for p in ax.patches)) == (8.0), \"Expected \" + repr(8.0) + \", got \" + repr(sum(p.get_height() for p in ax.patches))",
        "visibility": "public"
      }
    ],
    "approach": "Use ax.hist with 4 bins to show how order values are distributed and check the bin count.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nvalues = [5, 7, 8, 12, 13, 15, 21, 22]\nfig, ax = plt.subplots()\nax.hist(values, bins=4)\n\nprint(\"histogram drawn\")"
  },
  {
    "id": "m16-t2-p05",
    "topicId": "m16-t2",
    "slug": "chart-horizontal-bar",
    "title": "Charts: Horizontal Bars for Long Labels",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use ax.barh so long category names stay readable, then check the bar widths.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "When labels are long, turn the bars sideways with "
        },
        {
          "type": "code",
          "value": "ax.barh"
        },
        {
          "type": "text",
          "value": ". Plot "
        },
        {
          "type": "code",
          "value": "[\"stationery\", \"media\"]"
        },
        {
          "type": "text",
          "value": " against "
        },
        {
          "type": "code",
          "value": "[50, 70]"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.barh(categories, values)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "barh takes the categories first, then the widths.",
          "Horizontal bars are measured with get_width(), not get_height()."
        ]
      }
    },
    "examples": [
      {
        "output": "horizontal bars drawn"
      }
    ],
    "constraints": [
      "Use ax.barh",
      "Two categories in the given order"
    ],
    "hints": [
      "ax.barh([\"stationery\", \"media\"], [50, 70])"
    ],
    "starterCode": "# TODO: draw horizontal bars\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.barh([\"stationery\", \"media\"], [50, 70])\n\nprint(\"horizontal bars drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p05-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p05-t2",
        "label": "two bars",
        "assertCode": "assert (len(ax.patches)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p05-t3",
        "label": "widths carry the values",
        "assertCode": "assert ([p.get_width() for p in ax.patches]) == ([50.0, 70.0]), \"Expected \" + repr([50.0, 70.0]) + \", got \" + repr([p.get_width() for p in ax.patches])",
        "visibility": "public"
      }
    ],
    "approach": "Use ax.barh so long category names stay readable, then check the bar widths.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.barh([\"stationery\", \"media\"], [50, 70])\n\nprint(\"horizontal bars drawn\")"
  },
  {
    "id": "m16-t2-p06",
    "topicId": "m16-t2",
    "slug": "chart-pie-share",
    "title": "Charts: A Pie for Shares of a Whole",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Use ax.pie to show each region's share of revenue and confirm three wedges were drawn.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Pie charts show parts of one total. Use "
        },
        {
          "type": "code",
          "value": "ax.pie([50, 30, 20], labels=[\"South\", \"North\", \"East\"])"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.pie(values, labels=[...])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The values are converted to percentages of their sum.",
          "Only use a pie when the parts really add up to a meaningful whole.",
          "Each wedge is a patch on the axes."
        ]
      }
    },
    "examples": [
      {
        "output": "pie drawn"
      }
    ],
    "constraints": [
      "Use ax.pie with labels=",
      "Three wedges"
    ],
    "hints": [
      "ax.pie([50, 30, 20], labels=[\"South\", \"North\", \"East\"])"
    ],
    "starterCode": "# TODO: draw the revenue share pie\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.pie([50, 30, 20], labels=[\"South\", \"North\", \"East\"])\n\nprint(\"pie drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p06-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p06-t2",
        "label": "three wedges",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p06-t3",
        "label": "the regions are labelled",
        "assertCode": "assert \"South\" in [t.get_text() for t in ax.texts], \"Pass labels= so each wedge is named\"",
        "visibility": "public"
      }
    ],
    "approach": "Use ax.pie to show each region's share of revenue and confirm three wedges were drawn.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.pie([50, 30, 20], labels=[\"South\", \"North\", \"East\"])\n\nprint(\"pie drawn\")"
  },
  {
    "id": "m16-t2-p07",
    "topicId": "m16-t2",
    "slug": "chart-pick-the-right-one",
    "title": "Charts: Pick the Right Chart",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Given category totals, choose a bar chart, sort the bars from largest to smallest, and label the axes.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "You have revenue per category in a dict. Categories are unordered, so a "
        },
        {
          "type": "code",
          "value": "bar"
        },
        {
          "type": "text",
          "value": " chart is right. Sort the categories from largest to smallest, plot them, and label the y axis "
        },
        {
          "type": "code",
          "value": "Revenue"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# names = sorted(totals, key=totals.get, reverse=True)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax",
        "names"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "sorted(totals, key=totals.get, reverse=True) ranks the keys by value.",
          "Ranked bars let the reader compare at a glance.",
          "Build the matching value list in the same order."
        ]
      }
    },
    "examples": [
      {
        "output": "ranked bars drawn"
      }
    ],
    "constraints": [
      "Sort the categories by revenue, largest first",
      "Store the sorted names in names",
      "Label the y axis \"Revenue\""
    ],
    "hints": [
      "names = sorted(totals, key=totals.get, reverse=True)",
      "values = [totals[name] for name in names]"
    ],
    "starterCode": "# TODO: rank the categories, then plot bars\nimport matplotlib.pyplot as plt\n\ntotals = {\"pen\": 30, \"book\": 70, \"bag\": 40}\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\ntotals = {\"pen\": 30, \"book\": 70, \"bag\": 40}\nnames = sorted(totals, key=totals.get, reverse=True)\nvalues = [totals[name] for name in names]\n\nfig, ax = plt.subplots()\nax.bar(names, values)\nax.set_ylabel(\"Revenue\")\n\nprint(\"ranked bars drawn\")",
    "publicTests": [
      {
        "id": "m16-t2-p07-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p07-t2",
        "label": "categories are ranked",
        "assertCode": "assert (names) == ([\"book\", \"bag\", \"pen\"]), \"Expected \" + repr([\"book\", \"bag\", \"pen\"]) + \", got \" + repr(names)",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p07-t3",
        "label": "three bars",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p07-t4",
        "label": "bars follow the ranking",
        "assertCode": "assert ([p.get_height() for p in ax.patches]) == ([70.0, 40.0, 30.0]), \"Expected \" + repr([70.0, 40.0, 30.0]) + \", got \" + repr([p.get_height() for p in ax.patches])",
        "visibility": "public"
      },
      {
        "id": "m16-t2-p07-t5",
        "label": "y axis is labelled",
        "assertCode": "assert (ax.get_ylabel()) == (\"Revenue\"), \"Expected \" + repr(\"Revenue\") + \", got \" + repr(ax.get_ylabel())",
        "visibility": "public"
      }
    ],
    "approach": "Given category totals, choose a bar chart, sort the bars from largest to smallest, and label the axes.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\ntotals = {\"pen\": 30, \"book\": 70, \"bag\": 40}\nnames = sorted(totals, key=totals.get, reverse=True)\nvalues = [totals[name] for name in names]\n\nfig, ax = plt.subplots()\nax.bar(names, values)\nax.set_ylabel(\"Revenue\")\n\nprint(\"ranked bars drawn\")"
  },
  {
    "id": "m16-t3-p01",
    "topicId": "m16-t3",
    "slug": "custom-color",
    "title": "Custom: Set the Line Colour",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Plot the line in green by passing color=\"green\" to ax.plot.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Pass "
        },
        {
          "type": "code",
          "value": "color=\"green\""
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "ax.plot"
        },
        {
          "type": "text",
          "value": ". Colour should carry meaning — green for growth, red for loss."
        }
      ],
      "editorPlaceholder": "# ax.plot(..., color=\"green\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "color accepts names, hex codes, or RGB tuples."
        ]
      }
    },
    "examples": [
      {
        "output": "green line"
      }
    ],
    "constraints": [
      "Use color=\"green\"",
      "One line on the chart"
    ],
    "hints": [
      "ax.plot([1, 2, 3], [10, 20, 30], color=\"green\")"
    ],
    "starterCode": "# TODO: make the line green\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], color=\"green\")\n\nprint(\"green line\")",
    "publicTests": [
      {
        "id": "m16-t3-p01-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p01-t2",
        "label": "line colour is green",
        "assertCode": "assert (ax.lines[0].get_color()) == (\"green\"), \"Expected \" + repr(\"green\") + \", got \" + repr(ax.lines[0].get_color())",
        "visibility": "public"
      }
    ],
    "approach": "Plot the line in green by passing color=\"green\" to ax.plot.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], color=\"green\")\n\nprint(\"green line\")"
  },
  {
    "id": "m16-t3-p02",
    "topicId": "m16-t3",
    "slug": "custom-linestyle",
    "title": "Custom: Dash the Line",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Draw the line as dashes by passing linestyle=\"--\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Pass "
        },
        {
          "type": "code",
          "value": "linestyle=\"--\""
        },
        {
          "type": "text",
          "value": " to draw dashes. Dashed lines usually mean a forecast or a target."
        }
      ],
      "editorPlaceholder": "# ax.plot(..., linestyle=\"--\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Common styles: \"-\" solid, \"--\" dashed, \":\" dotted."
        ]
      }
    },
    "examples": [
      {
        "output": "dashed line"
      }
    ],
    "constraints": [
      "Use linestyle=\"--\""
    ],
    "hints": [
      "ax.plot([1, 2, 3], [10, 20, 30], linestyle=\"--\")"
    ],
    "starterCode": "# TODO: dash the line\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], linestyle=\"--\")\n\nprint(\"dashed line\")",
    "publicTests": [
      {
        "id": "m16-t3-p02-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p02-t2",
        "label": "line style is dashed",
        "assertCode": "assert (ax.lines[0].get_linestyle()) == (\"--\"), \"Expected \" + repr(\"--\") + \", got \" + repr(ax.lines[0].get_linestyle())",
        "visibility": "public"
      }
    ],
    "approach": "Draw the line as dashes by passing linestyle=\"--\".\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], linestyle=\"--\")\n\nprint(\"dashed line\")"
  },
  {
    "id": "m16-t3-p03",
    "topicId": "m16-t3",
    "slug": "custom-marker",
    "title": "Custom: Mark Each Data Point",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Show the individual data points by passing marker=\"o\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Pass "
        },
        {
          "type": "code",
          "value": "marker=\"o\""
        },
        {
          "type": "text",
          "value": " so each measured point is visible, not just the connecting line."
        }
      ],
      "editorPlaceholder": "# ax.plot(..., marker=\"o\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Markers matter when you have few points — they show what was measured."
        ]
      }
    },
    "examples": [
      {
        "output": "markers added"
      }
    ],
    "constraints": [
      "Use marker=\"o\""
    ],
    "hints": [
      "ax.plot([1, 2, 3], [10, 20, 30], marker=\"o\")"
    ],
    "starterCode": "# TODO: add circular markers\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], marker=\"o\")\n\nprint(\"markers added\")",
    "publicTests": [
      {
        "id": "m16-t3-p03-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p03-t2",
        "label": "marker is a circle",
        "assertCode": "assert (ax.lines[0].get_marker()) == (\"o\"), \"Expected \" + repr(\"o\") + \", got \" + repr(ax.lines[0].get_marker())",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p03-t3",
        "label": "the line is still there",
        "assertCode": "assert (len(ax.lines)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.lines))",
        "visibility": "public"
      }
    ],
    "approach": "Show the individual data points by passing marker=\"o\".\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], marker=\"o\")\n\nprint(\"markers added\")"
  },
  {
    "id": "m16-t3-p04",
    "topicId": "m16-t3",
    "slug": "custom-legend",
    "title": "Custom: Add a Legend",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Label the line \"Revenue\" and show a legend so the reader knows what it is.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Pass "
        },
        {
          "type": "code",
          "value": "label=\"Revenue\""
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "ax.plot"
        },
        {
          "type": "text",
          "value": ", then call "
        },
        {
          "type": "code",
          "value": "ax.legend()"
        },
        {
          "type": "text",
          "value": ". The label alone does nothing until the legend is drawn."
        }
      ],
      "editorPlaceholder": "# ax.plot(..., label=\"Revenue\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "label= names the series; ax.legend() renders the box.",
          "Forgetting the legend call is the most common plotting mistake."
        ]
      }
    },
    "examples": [
      {
        "output": "legend added"
      }
    ],
    "constraints": [
      "Label must be \"Revenue\"",
      "Call ax.legend()"
    ],
    "hints": [
      "ax.plot(..., label=\"Revenue\")",
      "ax.legend()"
    ],
    "starterCode": "# TODO: label the line and show the legend\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], label=\"Revenue\")\nax.legend()\n\nprint(\"legend added\")",
    "publicTests": [
      {
        "id": "m16-t3-p04-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p04-t2",
        "label": "a legend exists",
        "assertCode": "assert ax.get_legend() is not None, \"Call ax.legend() to draw the legend\"",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p04-t3",
        "label": "the legend shows the label",
        "assertCode": "assert ([t.get_text() for t in ax.get_legend().get_texts()]) == ([\"Revenue\"]), \"Expected \" + repr([\"Revenue\"]) + \", got \" + repr([t.get_text() for t in ax.get_legend().get_texts()])",
        "visibility": "public"
      }
    ],
    "approach": "Label the line \"Revenue\" and show a legend so the reader knows what it is.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], label=\"Revenue\")\nax.legend()\n\nprint(\"legend added\")"
  },
  {
    "id": "m16-t3-p05",
    "topicId": "m16-t3",
    "slug": "custom-axis-limits",
    "title": "Custom: Fix the Y Axis Range",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Force the y axis to run from 0 to 100 with ax.set_ylim and print the range.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Call "
        },
        {
          "type": "code",
          "value": "ax.set_ylim(0, 100)"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "ax.get_ylim()"
        },
        {
          "type": "text",
          "value": ". Starting bars and lines at zero keeps the chart honest."
        }
      ],
      "editorPlaceholder": "# ax.set_ylim(0, 100)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Matplotlib auto-scales by default, which can exaggerate small changes.",
          "set_ylim pins the range so charts stay comparable."
        ]
      }
    },
    "examples": [
      {
        "output": "(0.0, 100.0)"
      }
    ],
    "constraints": [
      "Use ax.set_ylim(0, 100)",
      "Print ax.get_ylim()"
    ],
    "hints": [
      "ax.set_ylim(0, 100)",
      "print(ax.get_ylim())"
    ],
    "starterCode": "# TODO: pin the y axis from 0 to 100\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_ylim(0, 100)\n\nprint(ax.get_ylim())",
    "publicTests": [
      {
        "id": "m16-t3-p05-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p05-t2",
        "label": "y axis runs 0 to 100",
        "assertCode": "assert (ax.get_ylim()) == ((0.0, 100.0)), \"Expected \" + repr((0.0, 100.0)) + \", got \" + repr(ax.get_ylim())",
        "visibility": "public"
      }
    ],
    "approach": "Force the y axis to run from 0 to 100 with ax.set_ylim and print the range.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_ylim(0, 100)\n\nprint(ax.get_ylim())"
  },
  {
    "id": "m16-t3-p06",
    "topicId": "m16-t3",
    "slug": "custom-ticks",
    "title": "Custom: Control the X Ticks",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Set the x ticks to exactly 1, 2, 3 with ax.set_xticks and print them as a list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Call "
        },
        {
          "type": "code",
          "value": "ax.set_xticks([1, 2, 3])"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "ax.get_xticks().tolist()"
        },
        {
          "type": "text",
          "value": " — no more half-month ticks like 1.5."
        }
      ],
      "editorPlaceholder": "# ax.set_xticks([1, 2, 3])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Automatic ticks can land on meaningless values.",
          "set_xticks takes the exact positions you want."
        ]
      }
    },
    "examples": [
      {
        "output": "[1.0, 2.0, 3.0]"
      }
    ],
    "constraints": [
      "Use ax.set_xticks([1, 2, 3])",
      "Print them with .tolist()"
    ],
    "hints": [
      "ax.set_xticks([1, 2, 3])",
      "print(ax.get_xticks().tolist())"
    ],
    "starterCode": "# TODO: set the x ticks explicitly\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_xticks([1, 2, 3])\n\nprint(ax.get_xticks().tolist())",
    "publicTests": [
      {
        "id": "m16-t3-p06-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p06-t2",
        "label": "three ticks are set",
        "assertCode": "assert (ax.get_xticks().tolist()) == ([1.0, 2.0, 3.0]), \"Expected \" + repr([1.0, 2.0, 3.0]) + \", got \" + repr(ax.get_xticks().tolist())",
        "visibility": "public"
      }
    ],
    "approach": "Set the x ticks to exactly 1, 2, 3 with ax.set_xticks and print them as a list.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30])\nax.set_xticks([1, 2, 3])\n\nprint(ax.get_xticks().tolist())"
  },
  {
    "id": "m16-t3-p07",
    "topicId": "m16-t3",
    "slug": "custom-styled-chart",
    "title": "Custom: Style a Chart End to End",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Draw a thick red dashed line with a legend, a title, and a y axis pinned from 0 to 50.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Draw the line in "
        },
        {
          "type": "code",
          "value": "red"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "linewidth=3"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "linestyle=\"--\""
        },
        {
          "type": "text",
          "value": ", label "
        },
        {
          "type": "code",
          "value": "Target"
        },
        {
          "type": "text",
          "value": ", title "
        },
        {
          "type": "code",
          "value": "Sales vs Target"
        },
        {
          "type": "text",
          "value": ", and y limits "
        },
        {
          "type": "code",
          "value": "0"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "50"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.plot(..., color='red', linewidth=3, ...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "All style options can go in the single ax.plot call.",
          "Then set the title, the legend, and the limits.",
          "A dashed red line is the convention for a target you have not hit."
        ]
      }
    },
    "examples": [
      {
        "output": "styled chart ready"
      }
    ],
    "constraints": [
      "color=\"red\", linewidth=3, linestyle=\"--\", label=\"Target\"",
      "Title \"Sales vs Target\" and y limits 0 to 50"
    ],
    "hints": [
      "ax.plot(..., color=\"red\", linewidth=3, linestyle=\"--\", label=\"Target\")",
      "ax.set_ylim(0, 50) then ax.legend()"
    ],
    "starterCode": "# TODO: apply every style option\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], color=\"red\", linewidth=3, linestyle=\"--\", label=\"Target\")\nax.set_title(\"Sales vs Target\")\nax.set_ylim(0, 50)\nax.legend()\n\nprint(\"styled chart ready\")",
    "publicTests": [
      {
        "id": "m16-t3-p07-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p07-t2",
        "label": "colour is red",
        "assertCode": "assert (ax.lines[0].get_color()) == (\"red\"), \"Expected \" + repr(\"red\") + \", got \" + repr(ax.lines[0].get_color())",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p07-t3",
        "label": "line is thick",
        "assertCode": "assert (ax.lines[0].get_linewidth()) == (3.0), \"Expected \" + repr(3.0) + \", got \" + repr(ax.lines[0].get_linewidth())",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p07-t4",
        "label": "line is dashed",
        "assertCode": "assert (ax.lines[0].get_linestyle()) == (\"--\"), \"Expected \" + repr(\"--\") + \", got \" + repr(ax.lines[0].get_linestyle())",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p07-t5",
        "label": "title is set",
        "assertCode": "assert (ax.get_title()) == (\"Sales vs Target\"), \"Expected \" + repr(\"Sales vs Target\") + \", got \" + repr(ax.get_title())",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p07-t6",
        "label": "y limits are pinned",
        "assertCode": "assert (ax.get_ylim()) == ((0.0, 50.0)), \"Expected \" + repr((0.0, 50.0)) + \", got \" + repr(ax.get_ylim())",
        "visibility": "public"
      },
      {
        "id": "m16-t3-p07-t7",
        "label": "legend is shown",
        "assertCode": "assert ax.get_legend() is not None, \"Call ax.legend() so the Target label appears\"",
        "visibility": "public"
      }
    ],
    "approach": "Draw a thick red dashed line with a legend, a title, and a y axis pinned from 0 to 50.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 20, 30], color=\"red\", linewidth=3, linestyle=\"--\", label=\"Target\")\nax.set_title(\"Sales vs Target\")\nax.set_ylim(0, 50)\nax.legend()\n\nprint(\"styled chart ready\")"
  },
  {
    "id": "m16-t4-p01",
    "topicId": "m16-t4",
    "slug": "tidy-long-frame",
    "title": "Statistical Plots: Start From Tidy Data",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Build a tidy long-format DataFrame with one row per observation and print its shape.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Statistical plotting libraries expect "
        },
        {
          "type": "code",
          "value": "tidy"
        },
        {
          "type": "text",
          "value": " data: one row per observation, one column per variable. Build "
        },
        {
          "type": "code",
          "value": "df"
        },
        {
          "type": "text",
          "value": " with category, year, and revenue columns and print its shape."
        }
      ],
      "editorPlaceholder": "# df = pd.DataFrame({ ... })",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Tidy (long) format means repeating the category on each row.",
          "Every statistical chart in this topic starts from a frame shaped like this.",
          "Seaborn is not available in the in-browser runtime, so build the same statistical view with pandas and Matplotlib. The lesson's seaborn version runs in Colab."
        ]
      }
    },
    "examples": [
      {
        "output": "(6, 3)"
      }
    ],
    "constraints": [
      "One row per observation",
      "Column order: category, year, revenue",
      "Output must be exactly: (6, 3)"
    ],
    "hints": [
      "df = pd.DataFrame({\"category\": [...], \"year\": [...], \"revenue\": [...]})"
    ],
    "starterCode": "# TODO: build the tidy frame\nimport pandas as pd\n\ndf = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nprint(df.shape)",
    "publicTests": [
      {
        "id": "m16-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "(6, 3)",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p01-t2",
        "label": "six observations, three columns",
        "assertCode": "assert (df.shape) == ((6, 3)), \"Expected \" + repr((6, 3)) + \", got \" + repr(df.shape)",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p01-t3",
        "label": "columns are category, year, revenue",
        "assertCode": "assert (list(df.columns)) == ([\"category\", \"year\", \"revenue\"]), \"Expected \" + repr([\"category\", \"year\", \"revenue\"]) + \", got \" + repr(list(df.columns))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p01-t4",
        "label": "each category appears twice",
        "assertCode": "assert (int((df[\"category\"] == \"pen\").sum())) == (2), \"Expected \" + repr(2) + \", got \" + repr(int((df[\"category\"] == \"pen\").sum()))",
        "visibility": "public"
      }
    ],
    "approach": "Build a tidy long-format DataFrame with one row per observation and print its shape.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nprint(df.shape)"
  },
  {
    "id": "m16-t4-p02",
    "topicId": "m16-t4",
    "slug": "category-means",
    "title": "Statistical Plots: The Numbers Behind a Bar Plot",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Group the tidy frame by category and print the mean revenue per category as a dict.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "A statistical bar plot draws one bar per group using the group's mean. Compute "
        },
        {
          "type": "code",
          "value": "df.groupby(\"category\")[\"revenue\"].mean()"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "means"
        },
        {
          "type": "text",
          "value": " and print it as a dict of floats."
        }
      ],
      "editorPlaceholder": "# means = df.groupby(\"category\")[\"revenue\"].mean()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "pd",
        "df",
        "means"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A bar plot in seaborn is a groupby mean plus a bar chart.",
          "Knowing the numbers first means you can check the chart is right.",
          "Seaborn is not available in the in-browser runtime, so build the same statistical view with pandas and Matplotlib. The lesson's seaborn version runs in Colab."
        ]
      }
    },
    "examples": [
      {
        "output": "{'bag': 25.0, 'book': 80.0, 'pen': 35.0}"
      }
    ],
    "constraints": [
      "Use groupby().mean()",
      "Print values as floats via round(float(v), 2)"
    ],
    "hints": [
      "means = df.groupby(\"category\")[\"revenue\"].mean()",
      "print({k: round(float(v), 2) for k, v in means.items()})"
    ],
    "starterCode": "# TODO: mean revenue per category\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = None\n",
    "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\nprint({k: round(float(v), 2) for k, v in means.items()})",
    "publicTests": [
      {
        "id": "m16-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "{'bag': 25.0, 'book': 80.0, 'pen': 35.0}",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p02-t2",
        "label": "book average",
        "assertCode": "assert (round(float(means[\"book\"]), 2)) == (80.0), \"Expected \" + repr(80.0) + \", got \" + repr(round(float(means[\"book\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p02-t3",
        "label": "pen average",
        "assertCode": "assert (round(float(means[\"pen\"]), 2)) == (35.0), \"Expected \" + repr(35.0) + \", got \" + repr(round(float(means[\"pen\"]), 2))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p02-t4",
        "label": "bag average",
        "assertCode": "assert (round(float(means[\"bag\"]), 2)) == (25.0), \"Expected \" + repr(25.0) + \", got \" + repr(round(float(means[\"bag\"]), 2))",
        "visibility": "public"
      }
    ],
    "approach": "Group the tidy frame by category and print the mean revenue per category as a dict.\n\nReference solution:\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\nprint({k: round(float(v), 2) for k, v in means.items()})"
  },
  {
    "id": "m16-t4-p03",
    "topicId": "m16-t4",
    "slug": "bar-plot-of-means",
    "title": "Statistical Plots: Bar Plot of Group Means",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Chart the mean revenue per category as bars and check the bar heights match the means.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compute the group means, then draw them with "
        },
        {
          "type": "code",
          "value": "ax.bar(means.index, means.values)"
        },
        {
          "type": "text",
          "value": ". This is what a seaborn bar plot does under the hood."
        }
      ],
      "editorPlaceholder": "# ax.bar(means.index, means.values)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "pd",
        "ax",
        "means"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "The index holds the category names, the values hold the means.",
          "Groups come back sorted, so the bars are bag, book, pen.",
          "Seaborn is not available in the in-browser runtime, so build the same statistical view with pandas and Matplotlib. The lesson's seaborn version runs in Colab."
        ]
      }
    },
    "examples": [
      {
        "output": "mean bars drawn"
      }
    ],
    "constraints": [
      "Compute the means with groupby — do not type them",
      "One bar per category"
    ],
    "hints": [
      "ax.bar(means.index, means.values)"
    ],
    "starterCode": "# TODO: plot the group means as bars\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\n\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\n\nprint(\"mean bars drawn\")",
    "publicTests": [
      {
        "id": "m16-t4-p03-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p03-t2",
        "label": "one bar per category",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p03-t3",
        "label": "bar heights are the group means",
        "assertCode": "assert ([p.get_height() for p in ax.patches]) == ([25.0, 80.0, 35.0]), \"Expected \" + repr([25.0, 80.0, 35.0]) + \", got \" + repr([p.get_height() for p in ax.patches])",
        "visibility": "public"
      }
    ],
    "approach": "Chart the mean revenue per category as bars and check the bar heights match the means.\n\nReference solution:\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\n\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\n\nprint(\"mean bars drawn\")"
  },
  {
    "id": "m16-t4-p04",
    "topicId": "m16-t4",
    "slug": "count-plot",
    "title": "Statistical Plots: Count Plot",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Count the rows per category with value_counts and draw them as bars in a fixed order.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "df[\"category\"].value_counts().sort_index()"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "counts"
        },
        {
          "type": "text",
          "value": ", then bar-chart it. Sorting the index keeps the order predictable."
        }
      ],
      "editorPlaceholder": "# counts = df[\"category\"].value_counts().sort_index()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "pd",
        "ax",
        "counts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "value_counts() orders by frequency, which is unstable when counts tie.",
          "sort_index() puts the categories in alphabetical order instead.",
          "A count plot answers 'how many rows', not 'how much revenue'."
        ]
      }
    },
    "examples": [
      {
        "output": "counts drawn"
      }
    ],
    "constraints": [
      "Use value_counts().sort_index()",
      "Store it in counts before plotting"
    ],
    "hints": [
      "counts = df[\"category\"].value_counts().sort_index()",
      "ax.bar(counts.index, counts.values)"
    ],
    "starterCode": "# TODO: count rows per category, then plot\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\ncounts = None\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\ncounts = df[\"category\"].value_counts().sort_index()\n\nfig, ax = plt.subplots()\nax.bar(counts.index, counts.values)\n\nprint(\"counts drawn\")",
    "publicTests": [
      {
        "id": "m16-t4-p04-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p04-t2",
        "label": "categories in alphabetical order",
        "assertCode": "assert (list(counts.index)) == ([\"bag\", \"book\", \"pen\"]), \"Expected \" + repr([\"bag\", \"book\", \"pen\"]) + \", got \" + repr(list(counts.index))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p04-t3",
        "label": "each category has 2 rows",
        "assertCode": "assert ([int(v) for v in counts.values]) == ([2, 2, 2]), \"Expected \" + repr([2, 2, 2]) + \", got \" + repr([int(v) for v in counts.values])",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p04-t4",
        "label": "three bars drawn",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      }
    ],
    "approach": "Count the rows per category with value_counts and draw them as bars in a fixed order.\n\nReference solution:\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\ncounts = df[\"category\"].value_counts().sort_index()\n\nfig, ax = plt.subplots()\nax.bar(counts.index, counts.values)\n\nprint(\"counts drawn\")"
  },
  {
    "id": "m16-t4-p05",
    "topicId": "m16-t4",
    "slug": "grouped-bars-by-year",
    "title": "Statistical Plots: Group Bars by a Second Variable",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Draw two sets of bars — one per year — so each category can be compared across years.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "This is what seaborn's "
        },
        {
          "type": "code",
          "value": "hue"
        },
        {
          "type": "text",
          "value": " does. Pivot the frame so each year is a column, then call "
        },
        {
          "type": "code",
          "value": "ax.bar"
        },
        {
          "type": "text",
          "value": " twice with an x offset."
        }
      ],
      "editorPlaceholder": "# pivot = df.pivot_table(..., columns='year')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "pd",
        "ax",
        "pivot"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "pivot_table with columns=\"year\" gives one column per year.",
          "Offset the x positions by half a bar width so the pairs sit side by side.",
          "Two bar calls over three categories gives six patches."
        ]
      }
    },
    "examples": [
      {
        "output": "grouped bars drawn"
      }
    ],
    "constraints": [
      "Two ax.bar calls, one per year",
      "Offset the x positions so bars sit side by side",
      "Add a legend"
    ],
    "hints": [
      "pivot = df.pivot_table(values=\"revenue\", index=\"category\", columns=\"year\", aggfunc=\"sum\", fill_value=0)",
      "ax.bar([p - 0.2 for p in positions], pivot[2024].values, width=0.4, label=\"2024\")"
    ],
    "starterCode": "# TODO: one bar group per year\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\npivot = None\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"category\", columns=\"year\", aggfunc=\"sum\", fill_value=0)\npositions = range(len(pivot.index))\n\nfig, ax = plt.subplots()\nax.bar([p - 0.2 for p in positions], pivot[2024].values, width=0.4, label=\"2024\")\nax.bar([p + 0.2 for p in positions], pivot[2025].values, width=0.4, label=\"2025\")\nax.legend()\n\nprint(\"grouped bars drawn\")",
    "publicTests": [
      {
        "id": "m16-t4-p05-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p05-t2",
        "label": "six bars in total",
        "assertCode": "assert (len(ax.patches)) == (6), \"Expected \" + repr(6) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p05-t3",
        "label": "one column per year",
        "assertCode": "assert (list(pivot.columns)) == ([2024, 2025]), \"Expected \" + repr([2024, 2025]) + \", got \" + repr(list(pivot.columns))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p05-t4",
        "label": "both years are in the legend",
        "assertCode": "assert len(ax.get_legend().get_texts()) == 2, \"Label both bar groups and call ax.legend()\"",
        "visibility": "public"
      }
    ],
    "approach": "Draw two sets of bars — one per year — so each category can be compared across years.\n\nReference solution:\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\npivot = df.pivot_table(values=\"revenue\", index=\"category\", columns=\"year\", aggfunc=\"sum\", fill_value=0)\npositions = range(len(pivot.index))\n\nfig, ax = plt.subplots()\nax.bar([p - 0.2 for p in positions], pivot[2024].values, width=0.4, label=\"2024\")\nax.bar([p + 0.2 for p in positions], pivot[2025].values, width=0.4, label=\"2025\")\nax.legend()\n\nprint(\"grouped bars drawn\")"
  },
  {
    "id": "m16-t4-p06",
    "topicId": "m16-t4",
    "slug": "label-statistical-chart",
    "title": "Statistical Plots: Label the Statistic",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Title the mean-revenue chart and label the y axis so the reader knows it shows an average.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "A bar of averages must say so. Set the title to "
        },
        {
          "type": "code",
          "value": "Average Revenue by Category"
        },
        {
          "type": "text",
          "value": " and the y label to "
        },
        {
          "type": "code",
          "value": "Mean revenue"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.set_title(\"Average Revenue by Category\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "pd",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Readers assume bars are totals unless you tell them otherwise.",
          "Naming the statistic prevents the most common misreading of a chart.",
          "Seaborn is not available in the in-browser runtime, so build the same statistical view with pandas and Matplotlib. The lesson's seaborn version runs in Colab."
        ]
      }
    },
    "examples": [
      {
        "output": "labelled statistic"
      }
    ],
    "constraints": [
      "Title \"Average Revenue by Category\"",
      "Y label \"Mean revenue\""
    ],
    "hints": [
      "ax.set_title(\"Average Revenue by Category\")",
      "ax.set_ylabel(\"Mean revenue\")"
    ],
    "starterCode": "# TODO: title and label the chart\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\n",
    "solutionCode": "import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\n\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\nax.set_title(\"Average Revenue by Category\")\nax.set_ylabel(\"Mean revenue\")\n\nprint(\"labelled statistic\")",
    "publicTests": [
      {
        "id": "m16-t4-p06-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p06-t2",
        "label": "title names the statistic",
        "assertCode": "assert (ax.get_title()) == (\"Average Revenue by Category\"), \"Expected \" + repr(\"Average Revenue by Category\") + \", got \" + repr(ax.get_title())",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p06-t3",
        "label": "y label names the statistic",
        "assertCode": "assert (ax.get_ylabel()) == (\"Mean revenue\"), \"Expected \" + repr(\"Mean revenue\") + \", got \" + repr(ax.get_ylabel())",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p06-t4",
        "label": "the bars are still there",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      }
    ],
    "approach": "Title the mean-revenue chart and label the y axis so the reader knows it shows an average.\n\nReference solution:\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nmeans = df.groupby(\"category\")[\"revenue\"].mean()\n\nfig, ax = plt.subplots()\nax.bar(means.index, means.values)\nax.set_title(\"Average Revenue by Category\")\nax.set_ylabel(\"Mean revenue\")\n\nprint(\"labelled statistic\")"
  },
  {
    "id": "m16-t4-p07",
    "topicId": "m16-t4",
    "slug": "ranked-statistical-chart",
    "title": "Statistical Plots: Rank the Groups",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Sort the group means from largest to smallest, chart them, and label the axes.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compute the category means, sort them descending with "
        },
        {
          "type": "code",
          "value": "sort_values(ascending=False)"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "ranked"
        },
        {
          "type": "text",
          "value": ", chart the bars, and label the y axis "
        },
        {
          "type": "code",
          "value": "Mean revenue"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ranked = ...sort_values(ascending=False)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "pd",
        "ax",
        "ranked"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "sort_values on a Series reorders by the values, keeping the labels attached.",
          "Ranked bars are far easier to read than alphabetical ones.",
          "book (80) leads, then pen (35), then bag (25)."
        ]
      }
    },
    "examples": [
      {
        "output": "ranked means drawn"
      }
    ],
    "constraints": [
      "Sort with sort_values(ascending=False)",
      "Store it in ranked before plotting",
      "Label the y axis \"Mean revenue\""
    ],
    "hints": [
      "ranked = df.groupby(\"category\")[\"revenue\"].mean().sort_values(ascending=False)",
      "ax.bar(ranked.index, ranked.values)"
    ],
    "starterCode": "# TODO: rank the means, then chart them\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nranked = None\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nranked = df.groupby(\"category\")[\"revenue\"].mean().sort_values(ascending=False)\n\nfig, ax = plt.subplots()\nax.bar(ranked.index, ranked.values)\nax.set_ylabel(\"Mean revenue\")\n\nprint(\"ranked means drawn\")",
    "publicTests": [
      {
        "id": "m16-t4-p07-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p07-t2",
        "label": "groups are ranked",
        "assertCode": "assert (list(ranked.index)) == ([\"book\", \"pen\", \"bag\"]), \"Expected \" + repr([\"book\", \"pen\", \"bag\"]) + \", got \" + repr(list(ranked.index))",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p07-t3",
        "label": "bars follow the ranking",
        "assertCode": "assert ([p.get_height() for p in ax.patches]) == ([80.0, 35.0, 25.0]), \"Expected \" + repr([80.0, 35.0, 25.0]) + \", got \" + repr([p.get_height() for p in ax.patches])",
        "visibility": "public"
      },
      {
        "id": "m16-t4-p07-t4",
        "label": "y axis is labelled",
        "assertCode": "assert (ax.get_ylabel()) == (\"Mean revenue\"), \"Expected \" + repr(\"Mean revenue\") + \", got \" + repr(ax.get_ylabel())",
        "visibility": "public"
      }
    ],
    "approach": "Sort the group means from largest to smallest, chart them, and label the axes.\n\nReference solution:\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.DataFrame({\n    \"category\": [\"pen\", \"book\", \"pen\", \"book\", \"bag\", \"bag\"],\n    \"year\": [2024, 2024, 2025, 2025, 2024, 2025],\n    \"revenue\": [30, 70, 40, 90, 20, 30],\n})\n\nranked = df.groupby(\"category\")[\"revenue\"].mean().sort_values(ascending=False)\n\nfig, ax = plt.subplots()\nax.bar(ranked.index, ranked.values)\nax.set_ylabel(\"Mean revenue\")\n\nprint(\"ranked means drawn\")"
  },
  {
    "id": "m16-t5-p01",
    "topicId": "m16-t5",
    "slug": "cat-boxplot",
    "title": "Distributions: A Box Plot",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Draw a box plot of order values, storing the returned dict so the median line can be checked.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Call "
        },
        {
          "type": "code",
          "value": "bp = ax.boxplot(values)"
        },
        {
          "type": "text",
          "value": " on "
        },
        {
          "type": "code",
          "value": "[10, 12, 13, 15, 40]"
        },
        {
          "type": "text",
          "value": ". The returned dict holds the artists, including the median line."
        }
      ],
      "editorPlaceholder": "# bp = ax.boxplot(values)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax",
        "bp"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A box plot shows the median, the quartiles, and the outliers at a glance.",
          "boxplot returns a dict with keys like boxes, medians, and whiskers.",
          "40 sits far from the rest, so it is drawn as an outlier point."
        ]
      }
    },
    "examples": [
      {
        "output": "box drawn"
      }
    ],
    "constraints": [
      "Use ax.boxplot",
      "Store the returned dict in bp"
    ],
    "hints": [
      "bp = ax.boxplot(values)"
    ],
    "starterCode": "# TODO: draw the box plot and keep the result\nimport matplotlib.pyplot as plt\n\nvalues = [10, 12, 13, 15, 40]\nfig, ax = plt.subplots()\nbp = None\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nvalues = [10, 12, 13, 15, 40]\nfig, ax = plt.subplots()\nbp = ax.boxplot(values)\n\nprint(\"box drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p01-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p01-t2",
        "label": "bp has the right type",
        "assertCode": "assert \"bp\" in globals(), \"Expected a variable named bp\"\nassert isinstance(bp, dict), \"Expected bp to be dict, got \" + type(bp).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p01-t3",
        "label": "one median line",
        "assertCode": "assert (len(bp[\"medians\"])) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(bp[\"medians\"]))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p01-t4",
        "label": "one box",
        "assertCode": "assert (len(bp[\"boxes\"])) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(bp[\"boxes\"]))",
        "visibility": "public"
      }
    ],
    "approach": "Draw a box plot of order values, storing the returned dict so the median line can be checked.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nvalues = [10, 12, 13, 15, 40]\nfig, ax = plt.subplots()\nbp = ax.boxplot(values)\n\nprint(\"box drawn\")"
  },
  {
    "id": "m16-t5-p02",
    "topicId": "m16-t5",
    "slug": "cat-histogram-shape",
    "title": "Distributions: Histogram Shape",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Draw a 5-bin histogram of order values and confirm every value was counted.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Draw "
        },
        {
          "type": "code",
          "value": "ax.hist(values, bins=5)"
        },
        {
          "type": "text",
          "value": " for ten order values. The bar heights must add up to the number of orders."
        }
      ],
      "editorPlaceholder": "# ax.hist(values, bins=5)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Each bar counts how many values fall in that bin.",
          "The heights always sum to the number of observations."
        ]
      }
    },
    "examples": [
      {
        "output": "distribution drawn"
      }
    ],
    "constraints": [
      "Use bins=5",
      "Plot all ten values"
    ],
    "hints": [
      "ax.hist(values, bins=5)"
    ],
    "starterCode": "# TODO: draw a 5-bin histogram\nimport matplotlib.pyplot as plt\n\nvalues = [5, 6, 8, 11, 12, 14, 15, 19, 21, 25]\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nvalues = [5, 6, 8, 11, 12, 14, 15, 19, 21, 25]\nfig, ax = plt.subplots()\nax.hist(values, bins=5)\n\nprint(\"distribution drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p02-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p02-t2",
        "label": "five bins",
        "assertCode": "assert (len(ax.patches)) == (5), \"Expected \" + repr(5) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p02-t3",
        "label": "all ten values counted",
        "assertCode": "assert (sum(p.get_height() for p in ax.patches)) == (10.0), \"Expected \" + repr(10.0) + \", got \" + repr(sum(p.get_height() for p in ax.patches))",
        "visibility": "public"
      }
    ],
    "approach": "Draw a 5-bin histogram of order values and confirm every value was counted.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nvalues = [5, 6, 8, 11, 12, 14, 15, 19, 21, 25]\nfig, ax = plt.subplots()\nax.hist(values, bins=5)\n\nprint(\"distribution drawn\")"
  },
  {
    "id": "m16-t5-p03",
    "topicId": "m16-t5",
    "slug": "cat-count-bars",
    "title": "Categorical: Count Each Category",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Count how often each region appears using a dict and draw the counts as bars.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Given a list of regions, count them into "
        },
        {
          "type": "code",
          "value": "counts"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "Counter"
        },
        {
          "type": "text",
          "value": ", then bar-chart the sorted categories."
        }
      ],
      "editorPlaceholder": "# counts = Counter(regions)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax",
        "counts"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "collections.Counter counts occurrences in one call.",
          "sorted(counts) gives the category names in a stable order.",
          "Build the matching heights list from the same sorted names."
        ]
      }
    },
    "examples": [
      {
        "output": "category counts drawn"
      }
    ],
    "constraints": [
      "Use Counter to count",
      "Sort the category names before plotting"
    ],
    "hints": [
      "counts = Counter(regions)",
      "names = sorted(counts)"
    ],
    "starterCode": "# TODO: count the regions, then plot\nimport matplotlib.pyplot as plt\nfrom collections import Counter\n\nregions = [\"South\", \"North\", \"South\", \"East\", \"South\"]\ncounts = None\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\nfrom collections import Counter\n\nregions = [\"South\", \"North\", \"South\", \"East\", \"South\"]\ncounts = Counter(regions)\nnames = sorted(counts)\nheights = [counts[name] for name in names]\n\nfig, ax = plt.subplots()\nax.bar(names, heights)\n\nprint(\"category counts drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p03-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p03-t2",
        "label": "South appears three times",
        "assertCode": "assert (counts[\"South\"]) == (3), \"Expected \" + repr(3) + \", got \" + repr(counts[\"South\"])",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p03-t3",
        "label": "three distinct regions",
        "assertCode": "assert (len(counts)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(counts))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p03-t4",
        "label": "three bars",
        "assertCode": "assert (len(ax.patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p03-t5",
        "label": "bar heights are the counts",
        "assertCode": "assert ([p.get_height() for p in ax.patches]) == ([1.0, 1.0, 3.0]), \"Expected \" + repr([1.0, 1.0, 3.0]) + \", got \" + repr([p.get_height() for p in ax.patches])",
        "visibility": "public"
      }
    ],
    "approach": "Count how often each region appears using a dict and draw the counts as bars.\n\nReference solution:\nimport matplotlib.pyplot as plt\nfrom collections import Counter\n\nregions = [\"South\", \"North\", \"South\", \"East\", \"South\"]\ncounts = Counter(regions)\nnames = sorted(counts)\nheights = [counts[name] for name in names]\n\nfig, ax = plt.subplots()\nax.bar(names, heights)\n\nprint(\"category counts drawn\")"
  },
  {
    "id": "m16-t5-p04",
    "topicId": "m16-t5",
    "slug": "cat-grouped-comparison",
    "title": "Categorical: Compare Two Groups",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Draw side-by-side bars for two regions across three categories and add a legend.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Plot "
        },
        {
          "type": "code",
          "value": "south = [30, 70, 20]"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "north = [40, 20, 10]"
        },
        {
          "type": "text",
          "value": " as two offset bar groups with a legend."
        }
      ],
      "editorPlaceholder": "# ax.bar([p - 0.2 for p in positions], south, width=0.4, ...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Use a width of 0.4 and shift each group by 0.2 either side.",
          "Two calls over three categories gives six patches.",
          "Side-by-side beats stacked when you want to compare values directly."
        ]
      }
    },
    "examples": [
      {
        "output": "comparison drawn"
      }
    ],
    "constraints": [
      "Two ax.bar calls with width=0.4",
      "Labels \"South\" then \"North\"",
      "Call ax.legend()"
    ],
    "hints": [
      "ax.bar([p - 0.2 for p in positions], south, width=0.4, label=\"South\")",
      "ax.legend()"
    ],
    "starterCode": "# TODO: draw both regions side by side\nimport matplotlib.pyplot as plt\n\nsouth = [30, 70, 20]\nnorth = [40, 20, 10]\npositions = [0, 1, 2]\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nsouth = [30, 70, 20]\nnorth = [40, 20, 10]\npositions = [0, 1, 2]\n\nfig, ax = plt.subplots()\nax.bar([p - 0.2 for p in positions], south, width=0.4, label=\"South\")\nax.bar([p + 0.2 for p in positions], north, width=0.4, label=\"North\")\nax.legend()\n\nprint(\"comparison drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p04-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p04-t2",
        "label": "six bars in total",
        "assertCode": "assert (len(ax.patches)) == (6), \"Expected \" + repr(6) + \", got \" + repr(len(ax.patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p04-t3",
        "label": "both regions are in the legend",
        "assertCode": "assert ([t.get_text() for t in ax.get_legend().get_texts()]) == ([\"South\", \"North\"]), \"Expected \" + repr([\"South\", \"North\"]) + \", got \" + repr([t.get_text() for t in ax.get_legend().get_texts()])",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p04-t4",
        "label": "bars are narrowed so they fit side by side",
        "assertCode": "assert all(abs(p.get_width() - 0.4) < 1e-9 for p in ax.patches), \"Pass width=0.4 to both bar calls\"",
        "visibility": "public"
      }
    ],
    "approach": "Draw side-by-side bars for two regions across three categories and add a legend.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nsouth = [30, 70, 20]\nnorth = [40, 20, 10]\npositions = [0, 1, 2]\n\nfig, ax = plt.subplots()\nax.bar([p - 0.2 for p in positions], south, width=0.4, label=\"South\")\nax.bar([p + 0.2 for p in positions], north, width=0.4, label=\"North\")\nax.legend()\n\nprint(\"comparison drawn\")"
  },
  {
    "id": "m16-t5-p05",
    "topicId": "m16-t5",
    "slug": "cat-heatmap",
    "title": "Categorical: A Heatmap of a Matrix",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Show a region-by-category matrix as a heatmap with ax.imshow and add a title.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "ax.imshow(matrix)"
        },
        {
          "type": "text",
          "value": " on "
        },
        {
          "type": "code",
          "value": "[[30, 70], [40, 20]]"
        },
        {
          "type": "text",
          "value": " and title it "
        },
        {
          "type": "code",
          "value": "Revenue Heatmap"
        },
        {
          "type": "text",
          "value": ". Colour replaces numbers when the grid gets large."
        }
      ],
      "editorPlaceholder": "# ax.imshow(matrix)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "imshow draws a 2-D array as coloured cells.",
          "It is the Matplotlib engine behind a seaborn heatmap.",
          "The image is stored on ax.images."
        ]
      }
    },
    "examples": [
      {
        "output": "heatmap drawn"
      }
    ],
    "constraints": [
      "Use ax.imshow",
      "Title \"Revenue Heatmap\""
    ],
    "hints": [
      "ax.imshow(matrix)",
      "ax.set_title(\"Revenue Heatmap\")"
    ],
    "starterCode": "# TODO: draw the heatmap and title it\nimport matplotlib.pyplot as plt\n\nmatrix = [[30, 70], [40, 20]]\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nmatrix = [[30, 70], [40, 20]]\nfig, ax = plt.subplots()\nax.imshow(matrix)\nax.set_title(\"Revenue Heatmap\")\n\nprint(\"heatmap drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p05-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p05-t2",
        "label": "one image was drawn",
        "assertCode": "assert (len(ax.images)) == (1), \"Expected \" + repr(1) + \", got \" + repr(len(ax.images))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p05-t3",
        "label": "title is set",
        "assertCode": "assert (ax.get_title()) == (\"Revenue Heatmap\"), \"Expected \" + repr(\"Revenue Heatmap\") + \", got \" + repr(ax.get_title())",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p05-t4",
        "label": "the matrix has 2 rows and 2 columns",
        "assertCode": "assert (ax.images[0].get_array().shape) == ((2, 2)), \"Expected \" + repr((2, 2)) + \", got \" + repr(ax.images[0].get_array().shape)",
        "visibility": "public"
      }
    ],
    "approach": "Show a region-by-category matrix as a heatmap with ax.imshow and add a title.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nmatrix = [[30, 70], [40, 20]]\nfig, ax = plt.subplots()\nax.imshow(matrix)\nax.set_title(\"Revenue Heatmap\")\n\nprint(\"heatmap drawn\")"
  },
  {
    "id": "m16-t5-p06",
    "topicId": "m16-t5",
    "slug": "cat-scatter-two-groups",
    "title": "Categorical: Colour Points by Group",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Scatter two groups of points in separate calls so each gets its own colour, then add a legend.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Call "
        },
        {
          "type": "code",
          "value": "ax.scatter"
        },
        {
          "type": "text",
          "value": " once per group, labelling them "
        },
        {
          "type": "code",
          "value": "South"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "North"
        },
        {
          "type": "text",
          "value": ", then call "
        },
        {
          "type": "code",
          "value": "ax.legend()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# ax.scatter(..., label=\"South\")",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "ax"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "One scatter call per group is the simplest way to colour by category.",
          "Each call adds its own collection, so you get two entries in the legend.",
          "This is what seaborn's hue parameter automates."
        ]
      }
    },
    "examples": [
      {
        "output": "groups drawn"
      }
    ],
    "constraints": [
      "One ax.scatter call per group",
      "Labels \"South\" then \"North\"",
      "Call ax.legend()"
    ],
    "hints": [
      "ax.scatter([1, 2, 3], [10, 20, 30], label=\"South\")",
      "ax.legend()"
    ],
    "starterCode": "# TODO: scatter each group separately\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.scatter([1, 2, 3], [10, 20, 30], label=\"South\")\nax.scatter([1, 2, 3], [15, 12, 25], label=\"North\")\nax.legend()\n\nprint(\"groups drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p06-t1",
        "label": "ax is a Matplotlib Axes",
        "assertCode": "assert \"ax\" in globals(), \"Expected a variable named ax from plt.subplots()\"\nassert hasattr(ax, \"plot\"), \"Expected ax to be a Matplotlib Axes, got \" + type(ax).__name__",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p06-t2",
        "label": "two collections, one per group",
        "assertCode": "assert (len(ax.collections)) == (2), \"Expected \" + repr(2) + \", got \" + repr(len(ax.collections))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p06-t3",
        "label": "both groups are labelled",
        "assertCode": "assert ([t.get_text() for t in ax.get_legend().get_texts()]) == ([\"South\", \"North\"]), \"Expected \" + repr([\"South\", \"North\"]) + \", got \" + repr([t.get_text() for t in ax.get_legend().get_texts()])",
        "visibility": "public"
      }
    ],
    "approach": "Scatter two groups of points in separate calls so each gets its own colour, then add a legend.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.scatter([1, 2, 3], [10, 20, 30], label=\"South\")\nax.scatter([1, 2, 3], [15, 12, 25], label=\"North\")\nax.legend()\n\nprint(\"groups drawn\")"
  },
  {
    "id": "m16-t5-p07",
    "topicId": "m16-t5",
    "slug": "cat-two-panel-dashboard",
    "title": "Categorical: A Two-Panel Dashboard",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Use plt.subplots(1, 2) to put a histogram beside a bar chart, each with its own title.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Create "
        },
        {
          "type": "code",
          "value": "fig, axes = plt.subplots(1, 2)"
        },
        {
          "type": "text",
          "value": ". Draw a 4-bin histogram of the order values on "
        },
        {
          "type": "code",
          "value": "axes[0]"
        },
        {
          "type": "text",
          "value": " titled "
        },
        {
          "type": "code",
          "value": "Orders"
        },
        {
          "type": "text",
          "value": ", and category bars on "
        },
        {
          "type": "code",
          "value": "axes[1]"
        },
        {
          "type": "text",
          "value": " titled "
        },
        {
          "type": "code",
          "value": "Revenue"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# fig, axes = plt.subplots(1, 2)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "plt",
        "axes"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "plt.subplots(1, 2) returns an array of two axes.",
          "Each axes is decorated independently — that is how dashboards are built.",
          "Distribution on the left, comparison on the right."
        ]
      }
    },
    "examples": [
      {
        "output": "dashboard drawn"
      }
    ],
    "constraints": [
      "Use plt.subplots(1, 2) and name the result axes",
      "Histogram on the left with bins=4, bars on the right",
      "Titles \"Orders\" and \"Revenue\""
    ],
    "hints": [
      "fig, axes = plt.subplots(1, 2)",
      "axes[0].hist(values, bins=4) then axes[0].set_title(\"Orders\")"
    ],
    "starterCode": "# TODO: build both panels\nimport matplotlib.pyplot as plt\n\nvalues = [5, 8, 12, 15, 19, 21]\nrevenue = [30, 70, 40]\nfig, axes = plt.subplots(1, 2)\n",
    "solutionCode": "import matplotlib.pyplot as plt\n\nvalues = [5, 8, 12, 15, 19, 21]\nrevenue = [30, 70, 40]\n\nfig, axes = plt.subplots(1, 2)\naxes[0].hist(values, bins=4)\naxes[0].set_title(\"Orders\")\naxes[1].bar([\"pen\", \"book\", \"bag\"], revenue)\naxes[1].set_title(\"Revenue\")\n\nprint(\"dashboard drawn\")",
    "publicTests": [
      {
        "id": "m16-t5-p07-t1",
        "label": "two panels were created",
        "assertCode": "assert \"axes\" in globals(), \"Expected a variable named axes from plt.subplots(1, 2)\"\nassert len(axes) == 2, \"Expected 2 panels, got \" + str(len(axes))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p07-t2",
        "label": "left panel has 4 histogram bins",
        "assertCode": "assert (len(axes[0].patches)) == (4), \"Expected \" + repr(4) + \", got \" + repr(len(axes[0].patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p07-t3",
        "label": "right panel has 3 bars",
        "assertCode": "assert (len(axes[1].patches)) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(axes[1].patches))",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p07-t4",
        "label": "left panel title",
        "assertCode": "assert (axes[0].get_title()) == (\"Orders\"), \"Expected \" + repr(\"Orders\") + \", got \" + repr(axes[0].get_title())",
        "visibility": "public"
      },
      {
        "id": "m16-t5-p07-t5",
        "label": "right panel title",
        "assertCode": "assert (axes[1].get_title()) == (\"Revenue\"), \"Expected \" + repr(\"Revenue\") + \", got \" + repr(axes[1].get_title())",
        "visibility": "public"
      }
    ],
    "approach": "Use plt.subplots(1, 2) to put a histogram beside a bar chart, each with its own title.\n\nReference solution:\nimport matplotlib.pyplot as plt\n\nvalues = [5, 8, 12, 15, 19, 21]\nrevenue = [30, 70, 40]\n\nfig, axes = plt.subplots(1, 2)\naxes[0].hist(values, bins=4)\naxes[0].set_title(\"Orders\")\naxes[1].bar([\"pen\", \"book\", \"bag\"], revenue)\naxes[1].set_title(\"Revenue\")\n\nprint(\"dashboard drawn\")"
  }
];
