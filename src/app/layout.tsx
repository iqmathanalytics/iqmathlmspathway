import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppProviders } from "@/components/providers/AppProviders";
import { ChunkErrorRecovery } from "@/components/providers/ChunkErrorRecovery";
import { PLATFORM_BRAND, PLATFORM_LOGO, PLATFORM_NAME, PLATFORM_TAGLINE } from "@/data/curriculum";

export const metadata: Metadata = {
  title: `${PLATFORM_NAME} — Python, SQL, Agentic AI & MBA Analytics`,
  description: PLATFORM_TAGLINE,
  applicationName: PLATFORM_BRAND,
  icons: {
    icon: PLATFORM_LOGO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="flex min-h-screen flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <ChunkErrorRecovery />
        <AppProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
