import type { TopicQuiz } from "@/lib/types";

export const module5Quizzes: Record<string, TopicQuiz> = {
  "m5-t1": {
    topicId: "m5-t1",
    title: "Quick check: Creating Lists",
    questions: [
      {
        id: "q1",
        question: "Which creates a list?",
        options: ["(1, 2)", "[1, 2]", "{1, 2}", "1, 2"],
        correctIndex: 1,
        explanation: "Square brackets [] define a list.",
      },
      {
        id: "q2",
        question: "len([\"a\", \"b\", \"c\"]) equals?",
        options: ["2", "3", "abc", "Error"],
        correctIndex: 1,
        explanation: "There are three items in the list.",
      },
    ],
  },
  "m5-t2": {
    topicId: "m5-t2",
    title: "Quick check: List Properties",
    questions: [
      {
        id: "q1",
        question: "Mutable means:",
        options: ["Cannot change", "Can be changed after creation", "Only strings", "No order"],
        correctIndex: 1,
        explanation: "Mutable lists can be modified — add, remove, update items.",
      },
      {
        id: "q2",
        question: "Can a list contain the same value twice?",
        options: ["No, never", "Yes", "Only numbers", "Only strings"],
        correctIndex: 1,
        explanation: "Lists allow duplicate values.",
      },
    ],
  },
  "m5-t3": {
    topicId: "m5-t3",
    title: "Quick check: Indexing Lists",
    questions: [
      {
        id: "q1",
        question: 'What is ["x","y","z"][0]?',
        options: ["x", "y", "z", "0"],
        correctIndex: 0,
        explanation: "Index 0 is the first element.",
      },
      {
        id: "q2",
        question: "Index -1 gives:",
        options: ["First item", "Last item", "Empty list", "Error always"],
        correctIndex: 1,
        explanation: "-1 accesses the last item.",
      },
    ],
  },
  "m5-t4": {
    topicId: "m5-t4",
    title: "Quick check: Slicing Lists",
    questions: [
      {
        id: "q1",
        question: "What is [0,1,2,3,4][1:4]?",
        options: ["[0,1,2]", "[1,2,3]", "[1,2,3,4]", "[0,1,2,3]"],
        correctIndex: 1,
        explanation: "Indexes 1, 2, 3 — end 4 is excluded.",
      },
      {
        id: "q2",
        question: "Does slicing change the original list?",
        options: ["Yes, always", "No, it returns a new list", "Only for strings", "Only if empty"],
        correctIndex: 1,
        explanation: "Slicing copies a portion; the original stays the same.",
      },
    ],
  },
  "m5-t5": {
    topicId: "m5-t5",
    title: "Quick check: List Methods",
    questions: [
      {
        id: "q1",
        question: "Which method adds one item to the end?",
        options: ["pop()", "append()", "remove()", "sort()"],
        correctIndex: 1,
        explanation: "append(x) adds x to the end of the list.",
      },
      {
        id: "q2",
        question: "After nums = [3,1,2] and nums.sort(), nums is:",
        options: ["[3,1,2]", "[1,2,3]", "[2,3,1]", "[]"],
        correctIndex: 1,
        explanation: "sort() orders the list in ascending order in place.",
      },
    ],
  },
  "m5-t6": {
    topicId: "m5-t6",
    title: "Quick check: Modifying Lists",
    questions: [
      {
        id: "q1",
        question: "To change the second item in lst, you write:",
        options: ["lst(1) = x", "lst[1] = x", "lst{1} = x", "change lst 1 x"],
        correctIndex: 1,
        explanation: "Use lst[index] = new_value; index 1 is the second item.",
      },
      {
        id: "q2",
        question: "extend() is used to:",
        options: ["Make list longer by adding all items from another list", "Delete the list", "Convert to string", "Sort only"],
        correctIndex: 0,
        explanation: "extend adds each element from the iterable to the list.",
      },
    ],
  },
};
