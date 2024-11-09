import Navbar from "./components/navbar";
import Btn from "./components/btn";
import HeroSection from "./sections/hero";
import CTA from "./sections/CTA";
import Capabilities from "./sections/capabilities";
import EducatorCarousel from "./sections/Carousel";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";
import BenefitsSection from "./sections/Benifits";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Home() {
  return (
    <>
      <Navbar homeBtn={false} />
      <main className="space-y-12 sm:space-y-24">
        <HeroSection />
        <CTA />
        <Capabilities />
        <BenefitsSection />
        <MacbookScroll />
        <EducatorCarousel />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
