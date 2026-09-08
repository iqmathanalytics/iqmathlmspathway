import type { TopicQuiz } from "@/lib/types";

export const module5Quizzes: Record<string, TopicQuiz> = {
  "m5-t1": {
    topicId: "m5-t1",
    title: "Quick check: Creating Lists",
    questions: [
      {
        id: "q1",
        question: "How do you write an empty list?",
        options: [
          "{}",
          "[]",
          "()",
          "set()",
        ],
        correctIndex: 1,
        explanation: "[] is an empty list.",
      },
      {
        id: "q2",
        question: "Can a list hold mixed types?",
        options: [
          "No",
          "Yes",
          "Only ints",
          "Only strings",
        ],
        correctIndex: 1,
        explanation: "Lists can contain any mix of objects.",
      },
    ],
  },
  "m5-t2": {
    topicId: "m5-t2",
    title: "Quick check: List Properties",
    questions: [
      {
        id: "q1",
        question: "Are lists ordered?",
        options: [
          "No",
          "Yes — order is preserved",
          "Only after sort",
          "Never",
        ],
        correctIndex: 1,
        explanation: "Lists keep insertion order.",
      },
      {
        id: "q2",
        question: "Can lists contain duplicates?",
        options: [
          "No",
          "Yes",
          "Only numbers",
          "Only after copy",
        ],
        correctIndex: 1,
        explanation: "Duplicates are allowed.",
      },
    ],
  },
  "m5-t3": {
    topicId: "m5-t3",
    title: "Quick check: Indexing Lists",
    questions: [
      {
        id: "q1",
        question: "What does my_list[0] return?",
        options: [
          "The last item",
          "The first item",
          "The length",
          "A copy of the list",
        ],
        correctIndex: 1,
        explanation: "Index 0 is the first element.",
      },
      {
        id: "q2",
        question: "What does my_list[-1] return?",
        options: [
          "The first item",
          "The last item",
          "Always None",
          "Error always",
        ],
        correctIndex: 1,
        explanation: "-1 indexes from the end.",
      },
    ],
  },
  "m5-t4": {
    topicId: "m5-t4",
    title: "Quick check: Slicing Lists",
    questions: [
      {
        id: "q1",
        question: "What does a[1:3] include?",
        options: [
          "Indexes 1 and 2",
          "Indexes 1, 2, and 3",
          "Only index 3",
          "The whole list",
        ],
        correctIndex: 0,
        explanation: "Stop index is exclusive.",
      },
      {
        id: "q2",
        question: "Does slicing a list return a new list?",
        options: [
          "No — it mutates",
          "Yes",
          "It returns a tuple",
          "It returns a set",
        ],
        correctIndex: 1,
        explanation: "Slices create a new list object.",
      },
    ],
  },
  "m5-t5": {
    topicId: "m5-t5",
    title: "Quick check: List Methods",
    questions: [
      {
        id: "q1",
        question: "What does append(x) do?",
        options: [
          "Inserts at front",
          "Adds x at the end",
          "Sorts",
          "Removes x",
        ],
        correctIndex: 1,
        explanation: "append grows the list by one at the end.",
      },
      {
        id: "q2",
        question: "What does sort() return?",
        options: [
          "A new sorted list",
          "None (sorts in place)",
          "A tuple",
          "True",
        ],
        correctIndex: 1,
        explanation: "list.sort() mutates and returns None.",
      },
    ],
  },
  "m5-t6": {
    topicId: "m5-t6",
    title: "Module 5 Quiz",
    questions: [
      {
        id: "q1",
        question: "How do you create an empty list?",
        options: [
          "{}",
          "[]",
          "()",
          "set()",
        ],
        correctIndex: 1,
        explanation: "[] creates an empty list; {} creates an empty dict.",
      },
      {
        id: "q2",
        question: "What does .append() do?",
        options: [
          "Sorts the list",
          "Adds an item to the end of the list",
          "Removes the last item",
          "Reverses the list",
        ],
        correctIndex: 1,
        explanation: "append(x) grows the list by one element at the end.",
      },
      {
        id: "q3",
        question: "What is my_list[-1]?",
        options: [
          "The first item",
          "The last item",
          "Always an error",
          "The length",
        ],
        correctIndex: 1,
        explanation: "Negative indexes count from the end; -1 is the last element.",
      },
      {
        id: "q4",
        question: "What does my_list[1:3] return?",
        options: [
          "Only index 1",
          "A new list of items at indexes 1 and 2",
          "Items 1 through 3 inclusive",
          "The whole list",
        ],
        correctIndex: 1,
        explanation: "Slices stop before the end index, so [1:3] is indexes 1 and 2.",
      },
      {
        id: "q5",
        question: "What does .sort() do to a list in place?",
        options: [
          "Returns a new sorted list only",
          "Sorts the list itself and returns None",
          "Removes duplicates",
          "Converts to a tuple",
        ],
        correctIndex: 1,
        explanation: "list.sort() mutates the list; use sorted(list) for a new list.",
      },
      {
        id: "q6",
        question: "What does .remove(value) do?",
        options: [
          "Removes all occurrences",
          "Removes the first occurrence of value",
          "Removes by index only",
          "Clears the list",
        ],
        correctIndex: 1,
        explanation: "remove deletes the first matching value; ValueError if missing.",
      },
      {
        id: "q7",
        question: "Are lists mutable or immutable?",
        options: [
          "Immutable",
          "Mutable — you can change contents",
          "Immutable after append",
          "Only mutable if empty",
        ],
        correctIndex: 1,
        explanation: "Lists can be changed in place with assignment, append, etc.",
      },
      {
        id: "q8",
        question: "What does len([1, 2, 3]) return?",
        options: [
          "2",
          "3",
          "6",
          "[1, 2, 3]",
        ],
        correctIndex: 1,
        explanation: "len returns the number of elements: 3.",
      },
      {
        id: "q9",
        question: "What does .pop() do without an argument?",
        options: [
          "Removes the first item",
          "Removes and returns the last item",
          "Clears the list",
          "Sorts then removes",
        ],
        correctIndex: 1,
        explanation: "pop() defaults to the last index.",
      },
      {
        id: "q10",
        question: "How do you combine two lists?",
        options: [
          "list1 & list2",
          "list1 + list2 (or extend)",
          "list1 ** list2",
          "list1 / list2",
        ],
        correctIndex: 1,
        explanation: "Use + to concatenate or .extend() to add all items in place.",
      },
    ],
  },
};
