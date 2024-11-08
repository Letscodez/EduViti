import Navbar from "./components/navbar";
import HeroSection from "./sections/hero";
import CTA from "./sections/CTA";
import Capabilities from "./sections/capabilities";
import EducatorCarousel from "./sections/Carousel";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Home() {
  return (
    <main>
      <Navbar homeBtn={false} />
      <HeroSection />
      <CTA />
      <Capabilities />
      <section className="py-12 md:min-h-[200vh] overflow-hidden">
        <MacbookScroll />
      </section>
      <EducatorCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
