import { redirect } from "next/navigation";

export const metadata = { title: "PAPC Results · Get Certified" };

/** Legacy URL — PAPC lives under /certification/papc. */
export default function LegacyCertificationResultsPage() {
  redirect("/certification/papc/results");
}
