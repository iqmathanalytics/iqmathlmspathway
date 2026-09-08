import dynamic from "next/dynamic";
import { HomeHero } from "./HomeHero";

const HomeCourses = dynamic(() =>
  import("./HomeCourses").then((m) => m.HomeCourses)
);

const HomeFeatures = dynamic(() =>
  import("./HomeFeatures").then((m) => m.HomeFeatures)
);
const HomeLearningFlow = dynamic(() =>
  import("./HomeLearningFlow").then((m) => m.HomeLearningFlow)
);
const HomeProjectOutcomes = dynamic(() =>
  import("./HomeProjectOutcomes").then((m) => m.HomeProjectOutcomes)
);
const HomeCTA = dynamic(() => import("./HomeCTA").then((m) => m.HomeCTA));

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100">
      <HomeHero />
      <HomeCourses />
      <HomeFeatures />
      <HomeLearningFlow />
      <HomeProjectOutcomes />
      <HomeCTA />
    </div>
  );
}
