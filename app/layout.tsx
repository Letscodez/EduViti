import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css"; // Importing global styles

// Metadata for the page
export const metadata: Metadata = {
  title: "StudySite - All in One Online study platform.",
  description: "Empower your learning journey with us for brighter futures.",
  keywords: "education, learning, community, study, free, growing",
};

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
});

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Defining the type of children prop
}>) {
  return (
    <html lang="en">
      <head>
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

        {/* Add more preconnects if needed */}
      </head>

      <body
        className={`${fredoka.className} overflow-y-scroll overflow-x-hidden`}
      >
        <div className="bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333] min-h-screen">
          {children} {/* Rendering children */}
        </div>
      </body>
    </html>
  );
}
