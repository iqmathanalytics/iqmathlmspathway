/** Auto-generated — run npm run generate:practice */
export const TOTAL_PRACTICE_COUNT = 429;

export const TOPIC_PRACTICE_COUNTS: Record<string, number> = {
  "m1-t1": 7,
  "m1-t2": 7,
  "m1-t3": 7,
  "m1-t4": 7,
  "m2-t1": 7,
  "m2-t2": 7,
  "m2-t3": 7,
  "m2-t4": 7,
  "m2-t5": 7,
  "m3-t1": 7,
  "m3-t2": 7,
  "m3-t3": 7,
  "m3-t4": 7,
  "m3-t5": 7,
  "m3-t6": 7,
  "m3-t7": 7,
  "m4-t1": 7,
  "m4-t2": 7,
  "m4-t3": 7,
  "m4-t4": 7,
  "m4-t5": 7,
  "m5-t1": 7,
  "m5-t2": 7,
  "m5-t3": 7,
  "m5-t4": 7,
  "m5-t5": 7,
  "m5-t6": 7,
  "m6-t1": 7,
  "m6-t2": 7,
  "m6-t3": 7,
  "m6-t4": 7,
  "m6-t5": 7,
  "m7-t1": 7,
  "m7-t2": 7,
  "m7-t3": 7,
  "m7-t4": 7,
  "m8-t1": 7,
  "m8-t2": 7,
  "m8-t3": 7,
  "m8-t4": 7,
  "m9-t1": 7,
  "m9-t2": 7,
  "m9-t3": 7,
  "m10-t1": 7,
  "m10-t2": 7,
  "m10-t3": 7,
  "m10-t4": 7,
  "m10-t5": 7,
  "m11-t1": 7,
  "m11-t2": 7,
  "m11-t3": 7,
  "m12-t1": 7,
  "m12-t2": 7,
  "m12-t3": 7,
  "m12-t4": 7,
  "m12-t5": 7,
  "m13-t1": 7,
  "m14-t1": 5,
  "m14-t2": 6,
  "m14-t3": 6,
  "m14-t4": 6,
  "m14-t5": 7
};

export function getPracticeCountByTopic(topicId: string): number {
  return TOPIC_PRACTICE_COUNTS[topicId] ?? 0;
}

export function getTotalPracticeCount(): number {
  return TOTAL_PRACTICE_COUNT;
}

/** Sum practice problems for a specific set of topic IDs (used for course-scoped stats). */
export function getPracticeCountForTopics(topicIds: string[]): number {
  return topicIds.reduce((sum, id) => sum + (TOPIC_PRACTICE_COUNTS[id] ?? 0), 0);
}
