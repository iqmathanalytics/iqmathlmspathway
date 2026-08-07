import type { Metadata } from "next";
import Script from "next/script";
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
        {/* beforeInteractive avoids unused gtag preload warnings from delayed afterInteractive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NXM93KNGZ8"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NXM93KNGZ8');
          `}
        </Script>
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
