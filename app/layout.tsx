import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Cursor from "./components/Cursor";
import { metadata_base } from "@/data/metadata";

export const metadata: Metadata = metadata_base;

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${fredoka.className} layout`}>
        <Cursor />

        {children}
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
