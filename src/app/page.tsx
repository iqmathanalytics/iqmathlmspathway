import { getModulesByCourse } from "@/data/curriculum";
import { HomeHero } from "./HomeHero";
import { HomeCourses } from "./HomeCourses";
import { HomeFeatures } from "./HomeFeatures";
import { HomeRoadmap } from "./HomeRoadmap";
import { HomeCTA } from "./HomeCTA";

export default function HomePage() {
  const pythonModules = getModulesByCourse("python");
  const agenticAiModules = getModulesByCourse("agentic-ai");

  return (
    <div className="bg-white">
      {/* 1. Hero — platform intro with two CTAs */}
      <HomeHero />

      {/* 2. Course cards — choose Python or Agentic AI */}
      <HomeCourses />

      {/* 3. Platform features — why learn here */}
      <HomeFeatures />

      {/* 4. Curriculum roadmap — switchable between Python and Agentic AI */}
      <HomeRoadmap pythonModules={pythonModules} agenticAiModules={agenticAiModules} />

      {/* 5. CTA — start either course */}
      <HomeCTA />
    </div>
  );
}
