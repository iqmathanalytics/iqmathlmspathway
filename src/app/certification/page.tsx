import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import {
  CERTIFICATION_PROGRAMS,
  CERT_VERIFY_PATH,
} from "@/data/certification/catalog";
import { CertificationCatalogClient } from "./CertificationCatalogClient";

export const metadata = {
  title: "Get Certified · IQmath Technologies",
};

export default function CertificationCatalogPage() {
  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
          Get Certified
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          IQmath certifications
        </h1>
        <p className="mt-3 text-gray-600">
          Each program is its own path — practice, a timed exam, and a verified
          certificate. Python Advanced Proficiency is live; more programs will
          join this catalog.
        </p>
      </header>

      <CertificationCatalogClient programs={CERTIFICATION_PROGRAMS} />

      <p className="mt-10 text-sm text-gray-500">
        Already have a certificate?{" "}
        <Link href={CERT_VERIFY_PATH} className="font-medium text-brand-700 hover:underline">
          Verify a certificate
        </Link>
        {" · "}
        <Link href="/" className="font-medium text-brand-700 hover:underline">
          Back to home
        </Link>
      </p>
    </div>
  );
}
