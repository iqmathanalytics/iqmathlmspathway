import { getModulesByCourse, getPublishedTopicCount } from "@/data/curriculum";
import { HomeHero } from "./HomeHero";
import { HomeCourses } from "./HomeCourses";
import { HomeFeatures } from "./HomeFeatures";
import { HomeRoadmap } from "./HomeRoadmap";
import { HomeCTA } from "./HomeCTA";

export default function HomePage() {
  const pythonModules = getModulesByCourse("python");
  const liveTopics = getPublishedTopicCount();

  return (
    <div className="bg-white">
      {/* 1. Hero — platform intro with two CTAs */}
      <HomeHero />

      {/* 2. Course cards — choose Python or Agentic AI */}
      <HomeCourses />

      {/* 3. Platform features — why learn here */}
      <HomeFeatures />

      {/* 4. Python curriculum roadmap — module grid */}
      <HomeRoadmap modules={pythonModules} />

      {/* 5. CTA — start either course */}
      <HomeCTA />
    </div>
  );
}
