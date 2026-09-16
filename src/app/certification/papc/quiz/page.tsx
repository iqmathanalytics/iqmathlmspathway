import { PAPC_ASSESSMENT_TITLE } from "@/data/certification/papc-config";
import { CertificationQuizClient } from "./CertificationQuizClient";

export const metadata = {
  title: `${PAPC_ASSESSMENT_TITLE} · Get Certified`,
};

export default function CertificationQuizPage() {
  return <CertificationQuizClient />;
}
