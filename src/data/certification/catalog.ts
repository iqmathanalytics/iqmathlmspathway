import {
  PAPC_ID,
  PAPC_PRACTICE_COUNT,
  PAPC_QUIZ_MINUTES,
  PAPC_SHORT,
  PAPC_TITLE,
} from "./papc-config";

export type CertificationStatus = "live" | "coming-soon";

export interface CertificationProgram {
  id: string;
  slug: string;
  title: string;
  short: string;
  tagline: string;
  status: CertificationStatus;
  href: string;
  audience: string;
  highlights: string[];
}

/** Public catalog. Header and homepage link here. */
export const CERT_CATALOG_PATH = "/certification";

/** PAPC program routes — add more programs as `/certification/<slug>/…`. */
export const PAPC_BASE_PATH = "/certification/papc";

export const PAPC_PATHS = {
  hub: PAPC_BASE_PATH,
  practice: `${PAPC_BASE_PATH}/practice`,
  problem: (slug: string) => `${PAPC_BASE_PATH}/practice/${slug}`,
  quiz: `${PAPC_BASE_PATH}/quiz`,
  results: `${PAPC_BASE_PATH}/results`,
  certificate: `${PAPC_BASE_PATH}/certificate`,
} as const;

export const CERT_VERIFY_PATH = "/certification/verify";

/**
 * All Get Certified programs. PAPC is the first live one; append new entries
 * here when adding SQL, MBA, or other certifications.
 */
export const CERTIFICATION_PROGRAMS: CertificationProgram[] = [
  {
    id: PAPC_ID,
    slug: "papc",
    title: PAPC_TITLE,
    short: PAPC_SHORT,
    tagline:
      "Advanced Python algorithms, a timed exam, and a verified IQmath certificate.",
    status: "live",
    href: PAPC_PATHS.hub,
    audience: "Python for Data Science + premium",
    highlights: [
      `${PAPC_PRACTICE_COUNT} IDE practice problems`,
      `${PAPC_QUIZ_MINUTES}-minute locked coding exam`,
      "2-year verified certificate",
    ],
  },
];

export function getLiveCertifications(): CertificationProgram[] {
  return CERTIFICATION_PROGRAMS.filter((p) => p.status === "live");
}

export function getCertificationBySlug(
  slug: string
): CertificationProgram | undefined {
  return CERTIFICATION_PROGRAMS.find((p) => p.slug === slug);
}
