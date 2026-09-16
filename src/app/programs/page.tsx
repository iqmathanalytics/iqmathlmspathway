import { ProgramGrid } from "@/components/programs/ProgramGrid";
import { PAGE_CONTAINER } from "@/lib/layout";

export default function ProgramsPage() {
  return (
    <div className={`${PAGE_CONTAINER} py-12 sm:py-16`}>
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
          Programs
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Enroll and start learning
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Published tracks show here. Enroll in Python, SQL, or any course the
          admin has turned on — then continue from your dashboard.
        </p>
        <ProgramGrid />
      </div>
    </div>
  );
}
