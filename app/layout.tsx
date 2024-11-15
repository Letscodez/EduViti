import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css"; // Importing global styles
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "EduViti - All in One Online study platform.",
  description: "Empower your learning journey with us for brighter futures.",
  keywords: "education, learning, online education, study platform, maths, science, free study material",
  openGraph: {
    description: "EduViti is an explorable platform offering Maths and Science materials, including exclusive notes, video lectures, question banks, and more, making it easy for students to access everything!",
    title: "EduViti - Your all in one Online Study platform.",
    type: "website",
    url: "https://EduViti.me/",
    siteName: "EduViti",
    images: [
      {
        url: "https://EduViti.me/images/og.png",
        width: 1200,
        height: 630,
        alt: "EduViti homepage showcasing Maths and Science learning resources.",
      },
    ],
  },
  twitter: {
    creatorId: "@EduVitiOfficial",
    description: "EduViti is an online learning platform offering Maths and Science resources including notes, video lectures, and more.",
    site: "https://EduViti.me/",
    creator: "@EduVitiOfficial",
    title: "EduViti - Your all in one Online Study platform.",
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06d6a0" />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link
          rel="preconnect"
          href="https://cdn.example.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.example.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${fredoka.className} overflow-y-scroll overflow-x-hidden bg-gradient-to-r from-bg via-[#2e4640] to-bg`}
      >
        {children}
        <Analytics mode="development" />
        <SpeedInsights />
      </body>
    </html>
  );
}
