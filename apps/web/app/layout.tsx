import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--nb-font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--nb-font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NeoBrutalismUI mates",
    template: "%s | NeoBrutalismUI mates",
  },
  description:
    "NeoBrutalismUI mates — a bold neo-brutalism UI kit built with React, Tailwind CSS, and shadcn/ui primitives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="classic"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen bg-background font-body text-foreground">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
