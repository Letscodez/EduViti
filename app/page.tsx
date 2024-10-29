import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero";
import CTA from "./sections/CTA";
import Capabilities from "./sections/capabilities";
import BenefitsSection from "./sections/Benifits";
import EducatorCarousel from "./sections/Carousel";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar isStart={false}/>
      <HeroSection />
      <CTA />
      <Capabilities />
      <BenefitsSection />
      <EducatorCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
