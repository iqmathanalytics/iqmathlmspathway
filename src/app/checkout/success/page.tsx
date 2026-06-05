import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className={`${PAGE_CONTAINER} py-16 text-center`}>
      <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
      <h1 className="mt-4 text-2xl font-bold text-gray-900">Payment successful</h1>
      <p className="mt-2 text-gray-600">
        Premium practice is unlocking on your account. This may take a few seconds.
      </p>
      <Link
        href="/practice"
        className="mt-8 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Start practicing
      </Link>
    </div>
  );
}
