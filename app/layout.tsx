import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "EduViti - Your all in one Online Study platform.",
    template: "%s | EduViti",
  },
  description:
    "EduViti is an explorable platform offering Maths and Science materials...",
  keywords: "education, learning, online education, study platform...",
  openGraph: {
    description: "EduViti is an explorable platform...",
    title: "EduViti - Your all in one Online Study platform.",
    type: "website",
    url: "https://EduViti.me/",
    siteName: "EduViti",
  },
  twitter: {
    creatorId: "@EduVitiOfficial",
    description: "EduViti is an online learning platform...",
    site: "https://EduViti.me/",
    creator: "@EduVitiOfficial",
    title: "EduViti - Your all in one Online Study platform.",
    card: "summary_large_image",
  },
  applicationName: "EduViti",
  category: "website",
};

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
    <html lang="en">
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
      <body
        className={`${fredoka.className} overflow-y-scroll overflow-x-hidden bg-gradient-to-r from-bg via-[#2e4640] to-bg`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
