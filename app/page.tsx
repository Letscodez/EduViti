import Navbar from "./components/navbar";
import Btn from "./components/btn";
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
      <section className="space-y-24 flex-col w-full md:mx-6 py-16 justify-center px-4 md:px-8 text-white mr-12">
        <div className="items-start mb-6 max-w-7xl mx-auto text-center md:text-start flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10 flex flex-col justify-start">
            <h1 className="text-lg font-mono text-[#06D6A0] mb-4">BENEFITS</h1>
            <div className="w-full mb-6 text-center md:text-start md:mb-0 md:pr-10">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Why Choose EduViti for Your Learning Journey?
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex md:mt-10 flex-col items-center md:items-start">
            <p className="sm:text-start text-center mb-8 text-white/80 text-lg md:text-xl leading-relaxed">
              At EduViti, we empower students by providing a comprehensive suite
              of educational resources designed to enhance your learning
              experience and support your learning growth.
            </p>
            <Btn />
          </div>
        </div>
      </section>
      <MacbookScroll />
      <EducatorCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
