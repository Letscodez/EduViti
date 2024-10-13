import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
    </main>
  );
}
