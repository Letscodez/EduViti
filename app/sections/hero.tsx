import { heroImage } from "@/images/main";
import Image from "next/image";
import { title } from "@/images/main";
import React from "react";
import Btn from "../components/btn";
import Slide from "../components/slide"; // Import the Slide component

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#333333] via-[#2a5248] to-[#333333] w-screen min-h-screen text-white">
        {/* Left side: Text content */}
        <div className="md:w-1/2 mb-8 ml-8 md:mb-0">
          <Image src={title} height={80} width={350} alt="Hero Title" />
          <h2 className="text-[#06d6a0] text-2xl overlock-regular-italic mb-4">
            "Glow Together, Grow Together"
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Elevate Your Learning Journey with Learnix
          </h3>
          <p className="text-gray-300 mb-8">
            Your go-to platform for curated modules, concept maps, NCERTs, and
            more—all designed to help you ace your exams and excel in academics
            for free!
          </p>

          {/* LETS GROW TOGETHER section */}
          <div className="flex items-center justify-center mb-8 max-w-[480px]">
            <div className="flex-grow bg-[#06d6a0] h-[1px]" />
            <p className="text-white font-semibold text-center mx-4 tracking-wider">
              LETS GROW TOGETHER
            </p>
            <div className="flex-grow bg-[#06d6a0] h-[1px]" />
          </div>

          <Btn />
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="rounded-l-[32px] shadow-2xl"
            width={600}
            height={400}
          />
        </div>
      </div>
      <Slide /> {/* Add the Slide component */}
    </section>
  );
};

export default HeroSection;
