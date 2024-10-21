import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero";
import CTA from "./sections/CTA";
import Capabilities from "./sections/capabilities";
import BenefitsSection from "./sections/Benifits";
import EducatorCarousel from "./sections/Carousel";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <CTA />
      <Capabilities />
      <BenefitsSection />
      <EducatorCarousel />
    </main>
  );
}
