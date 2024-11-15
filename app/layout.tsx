import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css"; // Importing global styles
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "EduViti - All in One Online study platform.",
  description: "Empower your learning journey with us for brighter futures.",
  keywords: "education, learning, community, study, free, growing",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06d6a0" />
        <meta property="twitter:image" content="https://eduviti.me/images/og.png" />
        <meta property="twitter:card" content="https://eduviti.me/images/og.png"></meta>
        <meta property="twitter:title" content="EduViti - Your all in one Online Study platform."></meta>
        <meta property="twitter:description" content="Eduvity is an explorable platform offering Maths and Science materials, including exclusive notes, video lectures, question banks, and many more, making it super easy for students to access everything!"></meta>
        <meta property="og:image" content="https://eduviti.me/images/og.png"></meta>
        <meta property="og:site_name" content="EduViti" />
        <meta property="og:title" content="EduViti - Your all in one Online Study platform."></meta>
        <meta property="og:description" content="Eduvity is an explorable platform offering Maths and Science materials, including exclusive notes, video lectures, question banks, and many more, making it super easy for students to access everything!" />
        <meta property="og:url" content="https://eduviti.me/"></meta>
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link
          rel="preconnect"
          href="https://cdn.example.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.example.com" />
      </head>
      <body
        className={`${fredoka.className} overflow-y-scroll overflow-x-hidden bg-gradient-to-r from-bg via-[#2e4640] to-bg`}
      >
          {children}
          <Analytics mode="development"/>
          <SpeedInsights />
      </body>
    </html>
  );
}
