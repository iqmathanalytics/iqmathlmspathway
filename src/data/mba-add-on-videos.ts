/**
 * MBA Add On — video-based Excel & Power BI subtopics.
 * Click a topic title to play the YouTube video in the LMS (Plyr modal).
 */

export interface AddOnVideoTopic {
  id: string;
  title: string;
  description?: string;
  /** YouTube video ID or URL */
  videoUrl?: string;
  estimatedMinutes?: number;
}

export interface AddOnVideoSection {
  sectionSlug: "excel" | "power-bi";
  title: string;
  description: string;
  topics: AddOnVideoTopic[];
}

export const mbaAddOnVideoSections: Record<"excel" | "power-bi", AddOnVideoSection> = {
  excel: {
    sectionSlug: "excel",
    title: "Excel",
    description: "Video lessons — click a topic name to watch.",
    topics: [
      {
        id: "excel-intro",
        title: "Microsoft Excel Introduction",
        videoUrl: "https://youtu.be/mgPSv0jU30s",
      },
      {
        id: "excel-basics",
        title: "Microsoft Excel Basics",
        videoUrl: "https://youtu.be/bqRITVbgA6s",
      },
      {
        id: "excel-formatting-formulas",
        title:
          "Microsoft Excel Formatting, Formula Operations, Math & Textual Functions",
        videoUrl: "https://youtu.be/QhYVwao5SEk",
      },
      {
        id: "excel-logical-lookup",
        title: "Microsoft Excel Logical, Data & Time and Lookup Functions",
        videoUrl: "https://youtu.be/SxcJh2wqE_w",
      },
      {
        id: "excel-pivot-charts",
        title: "Microsoft Excel Pivot Tables, Charts & Pivot Charts",
        videoUrl: "https://youtu.be/ipiIZzkntDc",
      },
      {
        id: "excel-xlookup-data-tools",
        title:
          "Microsoft Excel XLOOKUP Advance, Sorting, Filtering, Data Validation, Text to Columns, Remove Duplicates",
        videoUrl: "https://youtu.be/8T5RtTp3A4Q",
      },
      {
        id: "excel-special-macros",
        title:
          "Microsoft Excel Special Purpose Charts, Named Ranges, Shortcuts, Macros",
        videoUrl: "https://youtu.be/Z68gVwtqpgI",
      },
      {
        id: "excel-power-query-pivot",
        title:
          "Microsoft Excel Import Data from PDF & Websites, Advanced Analytics, Power Query, Power Pivot & DA",
        videoUrl: "https://youtu.be/wDzBCf3-SAg",
      },
      {
        id: "excel-practical-tasks",
        title: "Microsoft Excel Practical Tasks",
        videoUrl: "https://youtu.be/Ze-D0KNCt_o",
      },
      {
        id: "excel-project-1",
        title: "Excel Project Part 1",
        videoUrl: "https://youtu.be/JjO0aVZJQS4",
      },
      {
        id: "excel-project-2",
        title: "Excel Project Part 2",
        videoUrl: "https://youtu.be/BJsyTqnIA8E",
      },
      {
        id: "excel-project-3",
        title: "Excel Project Part 3",
        videoUrl: "https://youtu.be/pVu5o9W97Ak",
      },
    ],
  },
  "power-bi": {
    sectionSlug: "power-bi",
    title: "Power BI",
    description: "Video lessons — click a topic name to watch.",
    topics: [
      {
        id: "power-bi-part-1",
        title: "Power BI Part 1",
        videoUrl: "https://youtu.be/shcbYmnErIU",
      },
      {
        id: "power-bi-part-2",
        title: "Power BI Part 2",
        videoUrl: "https://youtu.be/BVouJDpoETk",
      },
    ],
  },
};

export function getAddOnVideoSection(
  sectionSlug: string
): AddOnVideoSection | undefined {
  if (sectionSlug === "excel" || sectionSlug === "power-bi") {
    return mbaAddOnVideoSections[sectionSlug];
  }
  return undefined;
}
