import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import { CertificationHubClient } from "./CertificationHubClient";
import { CERT_CATALOG_PATH } from "@/data/certification/catalog";
import {
  PAPC_ASSESSMENT_TITLE,
  PAPC_PASS_PCT,
  PAPC_PRACTICE_COUNT,
  PAPC_QUIZ_MINUTES,
  PAPC_RETAKE_DAYS,
  PAPC_SHORT,
  PAPC_TITLE,
  PAPC_TOTAL_POINTS,
} from "@/data/certification/papc-config";

export const metadata = {
  title: `${PAPC_TITLE} · Get Certified`,
};

export default function PapcProgramPage() {
  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <nav className="text-sm text-gray-500">
        <Link href={CERT_CATALOG_PATH} className="hover:text-brand-700">
          Get Certified
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-800">{PAPC_SHORT}</span>
      </nav>
      <header className="mt-4 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
          {PAPC_SHORT}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">{PAPC_TITLE}</h1>
        <p className="mt-3 text-gray-600">
          Optional IDE practice ({PAPC_PRACTICE_COUNT} problems) plus a locked{" "}
          {PAPC_QUIZ_MINUTES}-minute {PAPC_ASSESSMENT_TITLE} ({PAPC_TOTAL_POINTS}{" "}
          points, pass {PAPC_PASS_PCT}%). Leaving or failing waits {PAPC_RETAKE_DAYS}{" "}
          days. Same access as Practice: Python for Data Science and premium.
        </p>
      </header>
      <CertificationHubClient />
    </div>
  );
}
