import { modules, getPublishedTopicCount } from "@/data/curriculum";
import { HomeHero } from "./HomeHero";
import { HomeFeatures } from "./HomeFeatures";
import { HomeRoadmap } from "./HomeRoadmap";
import { HomeCTA } from "./HomeCTA";

export default function HomePage() {
  const liveModules = modules.filter((m) =>
    m.topics.some((t) => t.published)
  ).length;
  const liveTopics = getPublishedTopicCount();

  return (
    <div className="bg-white">
      <HomeHero
        liveModules={liveModules}
        liveTopics={liveTopics}
        totalModules={modules.length}
      />
      <HomeFeatures />
      <HomeRoadmap modules={modules} />
      <HomeCTA />
    </div>
  );
}
