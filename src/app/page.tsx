import { HomeHero } from "./HomeHero";
import { HomeCourses } from "./HomeCourses";
import { HomeFeatures } from "./HomeFeatures";
import { HomeLearningFlow } from "./HomeLearningFlow";
import { HomeProjectOutcomes } from "./HomeProjectOutcomes";
import { HomeCTA } from "./HomeCTA";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <HomeHero />
      <HomeCourses />
      <HomeFeatures />
      <HomeLearningFlow />
      <HomeProjectOutcomes />
      <HomeCTA />
    </div>
  );
}
