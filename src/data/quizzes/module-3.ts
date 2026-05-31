import type { TopicQuiz } from "@/lib/types";

export const module3Quizzes: Record<string, TopicQuiz> = {
  "m3-t1": {
    topicId: "m3-t1",
    title: "Quick check: Arithmetic Operators",
    questions: [
      {
        id: "q1",
        question: "What is 10 // 3 in Python?",
        options: ["3.333", "3", "1", "30"],
        correctIndex: 1,
        explanation: "// is floor division — whole number part only.",
      },
      {
        id: "q2",
        question: "Which operator means “to the power of”?",
        options: ["*", "/", "**", "%"],
        correctIndex: 2,
        explanation: "** raises to a power, e.g. 2 ** 3 is 8.",
      },
    ],
  },
  "m3-t2": {
    topicId: "m3-t2",
    title: "Quick check: Assignment Operators",
    questions: [
      {
        id: "q1",
        question: "After x = 5 and x += 2, what is x?",
        options: ["52", "7", "3", "10"],
        correctIndex: 1,
        explanation: "+= adds 2 to x: 5 + 2 = 7.",
      },
      {
        id: "q2",
        question: "What does = do in Python?",
        options: ["Compares two values", "Assigns a value to a variable", "Prints output", "Ends the program"],
        correctIndex: 1,
        explanation: "= stores the right-hand value into the variable on the left.",
      },
    ],
  },
  "m3-t3": {
    topicId: "m3-t3",
    title: "Quick check: Comparison Operators",
    questions: [
      {
        id: "q1",
        question: "What is the result of 5 == 5?",
        options: ["5", "True", "False", "Error"],
        correctIndex: 1,
        explanation: "== checks equality and returns True when values match.",
      },
      {
        id: "q2",
        question: "Which symbol means “not equal”?",
        options: ["<>", "!=", "=/=", "not"],
        correctIndex: 1,
        explanation: "!= checks whether two values are different.",
      },
    ],
  },
  "m3-t4": {
    topicId: "m3-t4",
    title: "Quick check: Logical Operators",
    questions: [
      {
        id: "q1",
        question: "True and False equals?",
        options: ["True", "False", "None", "Error"],
        correctIndex: 1,
        explanation: "and needs both sides True — False makes the result False.",
      },
      {
        id: "q2",
        question: "not True equals?",
        options: ["True", "False", "0", "None"],
        correctIndex: 1,
        explanation: "not flips the boolean: not True is False.",
      },
    ],
  },
  "m3-t5": {
    topicId: "m3-t5",
    title: "Quick check: Identity Operators",
    questions: [
      {
        id: "q1",
        question: "When is `is` commonly used with None?",
        options: ["Adding numbers", "Checking if a value is None", "Printing strings", "Looping lists"],
        correctIndex: 1,
        explanation: "value is None is a common and correct pattern.",
      },
      {
        id: "q2",
        question: "[1,2] == [1,2] and [1,2] is [1,2] — which is True?",
        options: ["Only ==", "Only is", "Both", "Neither"],
        correctIndex: 0,
        explanation: "Equal contents (==) but different list objects (is is False).",
      },
    ],
  },
  "m3-t6": {
    topicId: "m3-t6",
    title: "Quick check: Membership Operators",
    questions: [
      {
        id: "q1",
        question: '"a" in "cat" returns?',
        options: ["True", "False", "cat", "Error"],
        correctIndex: 0,
        explanation: "The letter a appears inside the string cat.",
      },
      {
        id: "q2",
        question: "Which operator checks if something is NOT in a collection?",
        options: ["not", "not in", "is not", "!in"],
        correctIndex: 1,
        explanation: "not in returns True when the item is absent.",
      },
    ],
  },
  "m3-t7": {
    topicId: "m3-t7",
    title: "Quick check: Bitwise Operators",
    questions: [
      {
        id: "q1",
        question: "Bitwise operators work on:",
        options: ["Only strings", "Individual bits (0 and 1)", "Only floats", "Colors"],
        correctIndex: 1,
        explanation: "They manipulate binary bits at a low level.",
      },
      {
        id: "q2",
        question: "When starting with data science in Python, bitwise operators are:",
        options: ["The first topic to master", "Rarely needed at first", "Required for print()", "The same as + and -"],
        correctIndex: 1,
        explanation: "Focus on arithmetic and comparison first; bitwise is advanced/optional.",
      },
    ],
  },
};
