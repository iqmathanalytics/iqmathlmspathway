import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Sparkles } from "lucide-react";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";

const promises = [
  "In-browser IDEs",
  "Premium practice",
  "Verified certificates",
];

export function HomeCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[2rem] px-8 py-14 text-center shadow-2xl shadow-slate-300/70 sm:px-12 lg:py-20">
        <StarfieldBackground animated={false} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(15,117,189,0.28),transparent_55%),radial-gradient(ellipse_70%_55%_at_85%_20%,rgba(140,198,62,0.22),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-semibold text-sky-100 backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent-300" />
            IQmath Technologies · Practice · Certification
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Go pro. Practice. Get certified.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Open a professional track, grind problems in the browser IDE, then sit
            a timed proficiency exam — or ship LangChain agents and RAG desks in
            the live labs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-300">
            {promises.map((promise) => (
              <span key={promise} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-300" />
                {promise}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-brand-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Start learning
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Practice
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/certification"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent-400/50 bg-accent-500/20 px-5 py-3.5 text-sm font-semibold text-accent-100 shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-500/30"
            >
              <Award className="h-4 w-4" />
              Get Certified
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
