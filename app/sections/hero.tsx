import { heroImage } from "@/images/main";
import Image from "next/image";
import { title } from "@/images/main";
import React from "react";
import Btn from "../components/btn";
import Slide from "../components/slide";

const HeroSection = () => {
  return (
    <section className="w-screen min-h-screen space-y-6">
      <div className="flex flex-col mt-28 md:flex-row md:justify-center items-center bg-gradient-to-r text-white ml-8">
        {/* Left side: Text content */}
        <div className="md:w-1/2 mb-8 md:mb-0 mx-4 flex flex-col items-center md:items-start justify-center">
          <Image src={title} height={80} width={350} alt="Hero Title" />
          <h2 className="text-[#06d6a0] text-2xl overlock-regular-italic mb-4 text-center md:text-start">
            "Glow Together, Grow Together"
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-white text-center md:text-start">
            Elevate Your Learning Journey with Learnix
          </h3>
          <p className="text-gray-300 mb-8 text-center md:text-start">
            Your go-to platform for curated modules, concept maps, NCERTs, and
            more—all designed to help you ace your exams and excel in academics
            for free!
          </p>

          {/* LETS GROW TOGETHER section */}
          <div className="flex items-center justify-center md:justify-start mb-8 max-w-[480px] w-full">
            <div className="flex-grow bg-[#06d6a0] h-[1px]" />
            <p className="text-white font-semibold text-center mx-4 tracking-wider">
              LETS GROW TOGETHER
            </p>
            <div className="flex-grow bg-[#06d6a0] h-[1px]" />
          </div>

          <div className="flex justify-center md:justify-start w-full">
            <Btn />
          </div>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="md:rounded-l-3xl rounded-3xl shadow-2xl"
            width={600}
            height={400}
          />
        </div>
      </div>
        <Slide />
    </section>
  );
};

export default HeroSection;
