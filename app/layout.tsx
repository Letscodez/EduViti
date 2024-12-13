import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css"; // Importing global styles
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "EduViti - Your all in one Online Study platform.",
    template: "%s | EduViti",
  },
  description:
      "EduViti is an explorable platform offering Maths and Science materials, including exclusive notes, video lectures, question banks, and more, making it easy for students to access everything!",
  keywords:
    "education, learning, online education, study platform, maths, science, free study material",
  openGraph: {
    description:
      "EduViti is an explorable platform offering Maths and Science materials, including exclusive notes, video lectures, question banks, and more, making it easy for students to access everything!",
    title: "EduViti - Your all in one Online Study platform.",
    type: "website",
    url: "https://EduViti.me/",
    siteName: "EduViti",
  },
  twitter: {
    creatorId: "@EduVitiOfficial",
    description:
      "EduViti is an online learning platform offering Maths and Science resources including notes, video lectures, and more.",
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
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
