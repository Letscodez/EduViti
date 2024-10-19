import type { Metadata } from "next";
import localFont from "next/font/local"; // Remove if not used
import "./globals.css"; // Importing global styles

// Metadata for the page
export const metadata: Metadata = {
  title: "Learnix - Grow together, Glow Together",
  description: "Empower your learning journey with us for brighter futures.",
    keywords: "education, learning, community, study, free, growing",  
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Defining the type of children prop
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-y-scroll overflow-x-hidden">
        <div className="bg-gradient-to-r from-[#333333] via-[#2a5248] to-[#333333] min-h-screen">
          {children} {/* Rendering children */}
        </div>
      </body>
    </html>
  );
}
