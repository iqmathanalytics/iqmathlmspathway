import { redirect } from "next/navigation";

export const metadata = { title: "PAPC Certificate · Get Certified" };

/** Legacy URL — PAPC lives under /certification/papc. */
export default function LegacyCertificationCertificatePage() {
  redirect("/certification/papc/certificate");
}
