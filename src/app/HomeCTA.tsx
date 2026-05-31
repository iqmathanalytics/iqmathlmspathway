import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PLATFORM_NAME } from "@/data/curriculum";

export function HomeCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-14 text-center shadow-xl sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.25),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(55,118,171,0.2),transparent_50%)]" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to write your first line of Python?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-300">
            Open Module 1, use the built-in IDE, and start building skills for data
            science.
          </p>
          <Link
            href="/learn/introduction-and-setup/introduction-to-programming"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
          >
            Begin Module 1
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-6 text-sm text-gray-500">{PLATFORM_NAME}</p>
        </div>
      </div>
    </section>
  );
}
