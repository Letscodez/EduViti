import Image from "next/image";
import { heroImage, title } from "@/images/main";
import React from "react";
import Btn from "../components/btn";
import Slide from "../components/slide";

const HeroSection = () => {
  return (
    <section className="w-screen pt-28 min-h-screen space-y-12 lg:space-y-0">
      <div className="heroimg flex ml-2 md:pl-8 flex-col md:flex-row md:justify-center items-center text-white">
        {/* Left side: Text content */}
        <div className="md:w-1/2 mb-8 md:mb-0 mx-4 flex flex-col items-center md:items-start justify-center">
          <Image
            src={title}
            alt="Hero Title"
            height={90}
            width={670}
            className="sm:ml-0 ml-3 md:w-96 w-[320px]"
            priority
            //670x90 dam yeh kya ho gya
          />

          <h1 className="text-[#06d6a0] text-2xl overlock-regular-italic my-4 text-center md:text-start">
            "Glow Together, Grow Together"
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-white text-center md:text-start">
            Elevate Your Learning Journey with Eduvity
          </h2>
          <p className="text-gray-300 mb-8 text-center md:text-start">
            Your go-to platform for curated modules, concept maps, NCERTs, and
            more — all designed to help you ace your exams and excel in academics
            for free!
          </p>

          {/* LET'S GROW TOGETHER section */}
          <div className="flex items-center justify-center md:justify-start mb-8 max-w-[480px] w-full">
            <div className="flex-grow bg-[#06d6a0] h-[1px]" />
            <p className="text-white font-semibold text-center mx-4 tracking-wider">
              LET'S GROW TOGETHER
            </p>
            <div className="flex-grow bg-[#06d6a0] h-[1px]" />
          </div>

          <div className="flex justify-center md:justify-start w-full">
            <Btn />
          </div>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="md:rounded-l-3xl rounded-3xl shadow-2xl w-11/12"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>

      <div className="lg:absolute bottom-0 h-[15vh] sm:right-8 sm:left-8 right-0 left-0">
        <Slide />
      </div>
    </section>
  );
};

export default HeroSection;
