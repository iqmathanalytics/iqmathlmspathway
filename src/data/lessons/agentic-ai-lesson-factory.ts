import type { TopicLesson } from "@/lib/types";
import {
  AGENTIC_AI_TOPIC_GUIDES,
  DEFAULT_AGENTIC_AI_TOPIC_GUIDE,
} from "@/data/agentic-ai-topic-guides";

function practiceStarter(topicId: string) {
  const guide = AGENTIC_AI_TOPIC_GUIDES[topicId] ?? DEFAULT_AGENTIC_AI_TOPIC_GUIDE;
  return `# ${guide.title}
# Read the steps, run the file, then change one line to make it your own.

topic = ${JSON.stringify(guide.title)}
goal = ${JSON.stringify(guide.outcome)}
steps = ${JSON.stringify(guide.steps, null, 4)}

print("Topic:", topic)
print("Goal:", goal)
print()

print("Pattern:")
for index, step in enumerate(steps, start=1):
    print(f"{index}. {step}")

print()
print("Example:")
print(${JSON.stringify(guide.example)})
`;
}

function conceptCode(topicId: string) {
  const guide = AGENTIC_AI_TOPIC_GUIDES[topicId] ?? DEFAULT_AGENTIC_AI_TOPIC_GUIDE;
  return `concept = ${JSON.stringify(guide.title)}
pattern = ${JSON.stringify(guide.steps)}

for step in pattern:
    print("->", step)

print("Outcome:", ${JSON.stringify(guide.outcome)})`;
}

export function buildAgenticAiLesson(topicId: string): TopicLesson {
  const guide = AGENTIC_AI_TOPIC_GUIDES[topicId] ?? DEFAULT_AGENTIC_AI_TOPIC_GUIDE;

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      {
        type: "infographic",
        infographic: "agentic-ai-topic",
        content: topicId,
      },
      {
        type: "heading",
        content: "Learn it like a Python concept",
      },
      {
        type: "paragraph",
        content:
          `${guide.hook} ${guide.outcome} Think of this topic as a reusable pattern: understand the idea, see the steps, then turn it into a small Python program.`,
      },
      {
        type: "visual",
        diagram: {
          title: `${guide.title} Pattern`,
          nodes: guide.steps.map((step, index) => ({
            id: `step-${index + 1}`,
            label: `Step ${index + 1}`,
            sublabel: step,
          })),
          arrows: [
            { from: "step-1", to: "step-2" },
            { from: "step-2", to: "step-3" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Where it fits in a real AI app",
      },
      {
        type: "paragraph",
        content: guide.example,
      },
      {
        type: "tip",
        content: guide.caution,
      },
      {
        type: "code",
        content: "agentic-ai-code",
        practiceLabel: `${topicId.replaceAll("-", "_")}.py`,
        code: conceptCode(topicId),
      },
      {
        type: "practice",
        practiceLabel: "Example code",
        ideOnly: true,
        practicePrompt:
          "Run this example code from the lesson window, then compare the output with the concept.",
        starterCode: conceptCode(topicId),
      },
      {
        type: "practice",
        practiceLabel: guide.title,
        practicePrompt:
          "Run the starter code, read the printed pattern, then edit one step or example in your own words.",
        starterCode: practiceStarter(topicId),
      },
    ],
    keyTakeaways: [
      guide.outcome,
      `Core pattern: ${guide.steps.join(" → ")}.`,
      guide.caution,
    ],
  };
}

export function buildAgenticAiLessons(
  topicIds: readonly string[]
): Record<string, TopicLesson> {
  return Object.fromEntries(
    topicIds.map((topicId) => [topicId, buildAgenticAiLesson(topicId)])
  );
}
