import { Suspense } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero";
import CTA from "./sections/CTA";
import Capabilities from "./sections/capabilities";
import EducatorCarousel from "./sections/Carousel";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";
import BenefitsSection from "./sections/Benifits";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 h-40 w-full rounded-md"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
    </div>
  );
}
export default function Home() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
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
    </Suspense>
  );
}
