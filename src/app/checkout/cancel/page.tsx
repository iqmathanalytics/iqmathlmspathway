import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";

export default function CheckoutCancelPage() {
  return (
    <div className={`${PAGE_CONTAINER} py-16 text-center`}>
      <h1 className="text-2xl font-bold text-gray-900">Checkout cancelled</h1>
      <p className="mt-2 text-gray-600">No charge was made. You can try again anytime.</p>
      <Link href="/checkout" className="mt-6 inline-block text-brand-700 hover:underline">
        Return to checkout
      </Link>
    </div>
  );
}
