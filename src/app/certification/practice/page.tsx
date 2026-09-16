import { redirect } from "next/navigation";

export const metadata = { title: "PAPC Practice · Get Certified" };

/** Legacy URL — PAPC lives under /certification/papc. */
export default function LegacyCertificationPracticePage() {
  redirect("/certification/papc/practice");
}
