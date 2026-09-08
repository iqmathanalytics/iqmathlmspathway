import type { TopicQuiz } from "@/lib/types";

export const module16Quizzes: Record<string, TopicQuiz> = {
  "m16-t1": {
    topicId: "m16-t1",
    title: "Quick check: Introduction to Matplotlib",
    questions: [
      {
        id: "q1",
        question: "Which call displays a figure?",
        options: [
          "plt.show()",
          "plt.hide()",
          "plt.csv()",
          "sns.mean()",
        ],
        correctIndex: 0,
        explanation: "show renders the current plot.",
      },
      {
        id: "q2",
        question: "What is Matplotlib mainly used for?",
        options: [
          "HTTP APIs",
          "Creating plots and charts",
          "Virtual envs",
          "SQL joins",
        ],
        correctIndex: 1,
        explanation: "It is Python's core plotting library.",
      },
    ],
  },
  "m16-t2": {
    topicId: "m16-t2",
    title: "Quick check: Line, Bar, Scatter, and Histogram",
    questions: [
      {
        id: "q1",
        question: "Best chart for trends over time?",
        options: [
          "Pie only",
          "Line plot",
          "Heatmap only",
          "Box only",
        ],
        correctIndex: 1,
        explanation: "Lines show change across ordered x.",
      },
      {
        id: "q2",
        question: "What does a histogram show?",
        options: [
          "Category labels only",
          "Distribution of a numeric variable",
          "Only correlations",
          "File sizes",
        ],
        correctIndex: 1,
        explanation: "Bins count how values fall.",
      },
    ],
  },
  "m16-t3": {
    topicId: "m16-t3",
    title: "Quick check: Customizing Plots",
    questions: [
      {
        id: "q1",
        question: "How do you set a title?",
        options: [
          "plt.title(...)",
          "plt.legend only",
          "plt.grid only",
          "plt.scatter only",
        ],
        correctIndex: 0,
        explanation: "title labels the plot.",
      },
      {
        id: "q2",
        question: "How do you add a legend?",
        options: [
          "plt.legend()",
          "plt.xlabel only",
          "plt.clf only",
          "plt.close only",
        ],
        correctIndex: 0,
        explanation: "legend explains labeled series.",
      },
    ],
  },
  "m16-t4": {
    topicId: "m16-t4",
    title: "Quick check: Introduction to Seaborn",
    questions: [
      {
        id: "q1",
        question: "Seaborn builds on which library?",
        options: [
          "requests",
          "Matplotlib",
          "Flask",
          "pathlib",
        ],
        correctIndex: 1,
        explanation: "Seaborn is a statistical layer on Matplotlib.",
      },
      {
        id: "q2",
        question: "Why use Seaborn?",
        options: [
          "Replace Pandas",
          "High-level statistical plots with less code",
          "Faster disk I/O",
          "Create venvs",
        ],
        correctIndex: 1,
        explanation: "Nice defaults for common statistical charts.",
      },
    ],
  },
  "m16-t5": {
    topicId: "m16-t5",
    title: "Module 16 Quiz",
    questions: [
      {
        id: "q1",
        question: "What function displays a Matplotlib plot?",
        options: [
          "plt.show()",
          "plt.display()",
          "plt.render()",
          "sns.show()",
        ],
        correctIndex: 0,
        explanation: "plt.show() opens/renders the current figure.",
      },
      {
        id: "q2",
        question: "Which plot type is best for showing trends over time?",
        options: [
          "Pie chart only",
          "Line plot",
          "Boxplot only",
          "Heatmap only",
        ],
        correctIndex: 1,
        explanation: "Line charts emphasize change across an ordered x-axis like time.",
      },
      {
        id: "q3",
        question: "Which plot type is best for showing category comparisons?",
        options: [
          "Scatter only",
          "Bar chart",
          "3D surface only",
          "QQ plot only",
        ],
        correctIndex: 1,
        explanation: "Bars make it easy to compare magnitudes across categories.",
      },
      {
        id: "q4",
        question: "What does plt.scatter() visualize?",
        options: [
          "Only frequencies",
          "Relationship between two numeric variables as points",
          "Only time series",
          "Confusion matrices",
        ],
        correctIndex: 1,
        explanation: "Each point is an (x, y) pair.",
      },
      {
        id: "q5",
        question: "What does plt.hist() show?",
        options: [
          "Correlation matrix",
          "Distribution of a variable via bins",
          "Category counts only as bars of text",
          "Network graphs",
        ],
        correctIndex: 1,
        explanation: "Histograms show how values fall into intervals.",
      },
      {
        id: "q6",
        question: "What library builds on Matplotlib for statistical plots?",
        options: [
          "NumPy",
          "Seaborn",
          "requests",
          "pathlib",
        ],
        correctIndex: 1,
        explanation: "Seaborn provides high-level statistical graphics.",
      },
      {
        id: "q7",
        question: "What does sns.heatmap() typically visualize?",
        options: [
          "Audio waveforms",
          "A matrix of values with color intensity",
          "Only timelines",
          "3D meshes",
        ],
        correctIndex: 1,
        explanation: "Common for correlation matrices and 2D grids of numbers.",
      },
      {
        id: "q8",
        question: "How do you add a legend to a plot?",
        options: [
          "plt.legend()",
          "plt.title() only",
          "plt.grid()",
          "sns.legend_force()",
        ],
        correctIndex: 0,
        explanation: "Call plt.legend() after plotting labeled series.",
      },
      {
        id: "q9",
        question: "What does sns.countplot() show?",
        options: [
          "Numeric scatter",
          "Counts of observations per category",
          "Regression lines only",
          "Boxplots of residuals",
        ],
        correctIndex: 1,
        explanation: "countplot is a bar chart of frequency per category.",
      },
      {
        id: "q10",
        question: "What function sets a plot's title?",
        options: [
          "plt.caption()",
          "plt.title()",
          "plt.header()",
          "plt.name()",
        ],
        correctIndex: 1,
        explanation: "plt.title(\"...\") labels the figure/axes title.",
      },
    ],
  },
};
