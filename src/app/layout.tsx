import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { AppProviders } from "@/components/providers/AppProviders";
import { ChunkErrorRecovery } from "@/components/providers/ChunkErrorRecovery";
import { PLATFORM_BRAND, PLATFORM_LOGO, PLATFORM_NAME, PLATFORM_TAGLINE } from "@/data/platform";

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
        className="flex min-h-dvh flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <ChunkErrorRecovery />
        <AppProviders>
          <Header />
          <main className="flex min-h-0 flex-1 flex-col">{children}</main>
          <ConditionalFooter />
        </AppProviders>
      </body>
    </html>
  );
}
