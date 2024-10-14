import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Learnix",
  description: "Grow together, Glow together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className="overflow-x-hidden"  
      className="overflow-y-scroll overflow-x-hidden from-[#333333] via-[#2a5248] to-[#333333]"
      >
        {children}
      </body>
    </html>
  );
}
