import type { TopicQuiz } from "@/lib/types";

export const module3Quizzes: Record<string, TopicQuiz> = {
  "m3-t1": {
    topicId: "m3-t1",
    title: "Quick check: Arithmetic Operators",
    questions: [
      {
        id: "q1",
        question: "What is 2 ** 3?",
        options: [
          "5",
          "6",
          "8",
          "9",
        ],
        correctIndex: 2,
        explanation: "** is exponentiation: 2³ = 8.",
      },
      {
        id: "q2",
        question: "What does 10 // 3 equal?",
        options: [
          "3.33",
          "3",
          "1",
          "30",
        ],
        correctIndex: 1,
        explanation: "// is floor division.",
      },
    ],
  },
  "m3-t2": {
    topicId: "m3-t2",
    title: "Quick check: Assignment Operators",
    questions: [
      {
        id: "q1",
        question: "What does x += 2 do if x is 5?",
        options: [
          "Sets x to 2",
          "Sets x to 7",
          "Compares x to 2",
          "Deletes x",
        ],
        correctIndex: 1,
        explanation: "+= adds and reassigns: x becomes 7.",
      },
      {
        id: "q2",
        question: "Which is an assignment operator?",
        options: [
          "==",
          "+=",
          "and",
          "in",
        ],
        correctIndex: 1,
        explanation: "+=, -=, *=, etc. update a variable in place.",
      },
    ],
  },
  "m3-t3": {
    topicId: "m3-t3",
    title: "Quick check: Comparison Operators",
    questions: [
      {
        id: "q1",
        question: "What does == check?",
        options: [
          "Assignment",
          "Equality of values",
          "Identity only",
          "Membership",
        ],
        correctIndex: 1,
        explanation: "== compares values.",
      },
      {
        id: "q2",
        question: "What is the result of 3 != 4?",
        options: [
          "False",
          "True",
          "3",
          "Error",
        ],
        correctIndex: 1,
        explanation: "!= means not equal.",
      },
    ],
  },
  "m3-t4": {
    topicId: "m3-t4",
    title: "Quick check: Logical Operators",
    questions: [
      {
        id: "q1",
        question: "When is True and False?",
        options: [
          "True",
          "False",
          "None",
          "Error",
        ],
        correctIndex: 1,
        explanation: "and needs both sides true.",
      },
      {
        id: "q2",
        question: "What does not False equal?",
        options: [
          "False",
          "True",
          "0",
          "None",
        ],
        correctIndex: 1,
        explanation: "not flips the boolean.",
      },
    ],
  },
  "m3-t5": {
    topicId: "m3-t5",
    title: "Quick check: Identity Operators",
    questions: [
      {
        id: "q1",
        question: "What does is compare?",
        options: [
          "Values only",
          "Object identity (same object in memory)",
          "Lengths only",
          "Types only",
        ],
        correctIndex: 1,
        explanation: "is checks whether two names point to the same object.",
      },
      {
        id: "q2",
        question: "Which is usually preferred for value equality of numbers?",
        options: [
          "is",
          "==",
          "===",
          "equals",
        ],
        correctIndex: 1,
        explanation: "Use == for values; is for identity (e.g. None).",
      },
    ],
  },
  "m3-t6": {
    topicId: "m3-t6",
    title: "Quick check: Membership Operators",
    questions: [
      {
        id: "q1",
        question: "What does 'a' in 'cat' return?",
        options: [
          "False",
          "True",
          "Error",
          "'a'",
        ],
        correctIndex: 1,
        explanation: "in checks whether the left value appears in the right container.",
      },
      {
        id: "q2",
        question: "What does not in check?",
        options: [
          "Assignment",
          "That a value is absent from a container",
          "Sorting",
          "Type casting",
        ],
        correctIndex: 1,
        explanation: "not in is the negation of membership.",
      },
    ],
  },
  "m3-t7": {
    topicId: "m3-t7",
    title: "Module 3 Quiz",
    questions: [
      {
        id: "q1",
        question: "What operator is used for exponentiation in Python?",
        options: [
          "^",
          "**",
          "exp()",
          "^^",
        ],
        correctIndex: 1,
        explanation: "** raises a number to a power (e.g. 2 ** 3 == 8).",
      },
      {
        id: "q2",
        question: "What does % return in 10 % 3?",
        options: [
          "3.33",
          "1 (the remainder)",
          "0",
          "30",
        ],
        correctIndex: 1,
        explanation: "% is the modulo operator; 10 divided by 3 leaves remainder 1.",
      },
      {
        id: "q3",
        question: "What does // do differently from /?",
        options: [
          "// multiplies",
          "// does floor (integer) division; / does true division",
          "// is only for lists",
          "They are identical",
        ],
        correctIndex: 1,
        explanation: "10 // 3 is 3; 10 / 3 is 3.333...",
      },
      {
        id: "q4",
        question: "What is the output of 5 == 5.0?",
        options: [
          "False",
          "True",
          "Error",
          "5",
        ],
        correctIndex: 1,
        explanation: "== compares values; 5 and 5.0 are numerically equal.",
      },
      {
        id: "q5",
        question: "What does the and operator require to return True?",
        options: [
          "At least one side True",
          "Both sides True",
          "Neither side True",
          "Only the left side True",
        ],
        correctIndex: 1,
        explanation: "and is True only when both operands are truthy.",
      },
      {
        id: "q6",
        question: "What is the difference between is and ==?",
        options: [
          "They are identical",
          "is checks identity (same object); == checks value equality",
          "is only works on numbers",
          "== checks memory address only",
        ],
        correctIndex: 1,
        explanation: "is compares object identity; == compares equal values.",
      },
      {
        id: "q7",
        question: "What does in check for in 3 in [1, 2, 3]?",
        options: [
          "Whether 3 is the length",
          "Whether 3 is a member of the list",
          "Whether the list is sorted",
          "Whether 3 is a key",
        ],
        correctIndex: 1,
        explanation: "in tests membership; 3 is in the list, so the result is True.",
      },
      {
        id: "q8",
        question: "What is ~5 in bitwise operations?",
        options: [
          "5",
          "-6",
          "0",
          "True",
        ],
        correctIndex: 1,
        explanation: "~n equals -(n + 1) for integers; ~5 is -6.",
      },
      {
        id: "q9",
        question: "What does x += 1 do?",
        options: [
          "Compares x to 1",
          "Adds 1 to x and stores the result back in x",
          "Prints x + 1",
          "Deletes x",
        ],
        correctIndex: 1,
        explanation: "+= is an in-place assignment: x = x + 1.",
      },
      {
        id: "q10",
        question: "What is the output of not True?",
        options: [
          "True",
          "False",
          "None",
          "Error",
        ],
        correctIndex: 1,
        explanation: "not flips a boolean; not True is False.",
      },
    ],
  },
};
