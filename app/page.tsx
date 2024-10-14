import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero";
import CTA from "./sections/CTA";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <CTA />
    </main>
  );
}
