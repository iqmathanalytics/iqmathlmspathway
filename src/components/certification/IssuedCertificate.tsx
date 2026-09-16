"use client";

import { useEffect, useState } from "react";
import { CertificateView } from "@/components/certification/CertificateView";
import { PAPC_TITLE } from "@/data/certification/papc-config";
import { fetchCertificateProgramName } from "@/lib/certification";
import type { CertificateRow } from "@/lib/types";

export function IssuedCertificate({ certificate }: { certificate: CertificateRow }) {
  const [programName, setProgramName] = useState(PAPC_TITLE);

  useEffect(() => {
    void fetchCertificateProgramName(certificate.user_id).then(setProgramName);
  }, [certificate.user_id]);

  return <CertificateView certificate={certificate} programName={programName} />;
}
