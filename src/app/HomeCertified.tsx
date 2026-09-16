import Link from "next/link";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import {
  CERT_CATALOG_PATH,
  CERTIFICATION_PROGRAMS,
} from "@/data/certification/catalog";

export function HomeCertified() {
  const live = CERTIFICATION_PROGRAMS.filter((p) => p.status === "live");

  return (
    <section
      id="get-certified"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
            Get Certified
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
            IQmath certifications
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Standalone programs with practice, a timed exam, and a verified
            certificate. The first program is live; more will be added to this
            section.
          </p>
        </div>
        <Link
          href={CERT_CATALOG_PATH}
          className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-700"
        >
          <Award className="h-4 w-4" />
          Browse certifications
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {live.map((program) => (
          <article
            key={program.id}
            className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-accent-50/40 p-6 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                {program.short}
              </p>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                Live
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-slate-100">
              {program.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300">
              {program.tagline}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700 dark:text-slate-300">
              {program.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-300" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={program.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300"
            >
              Open {program.short}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}

        <article className="flex flex-col justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-6 dark:border-slate-600 dark:bg-slate-900/40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            Next programs
          </p>
          <h3 className="mt-3 text-xl font-semibold text-gray-800 dark:text-slate-100">
            More certifications coming
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300">
            Each new certification will be a separate card in this section, with
            its own practice set and exam.
          </p>
        </article>
      </div>
    </section>
  );
}
