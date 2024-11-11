"use client";
import Image from "next/image";
import { heroImage, title } from "@/images/main";
import React from "react";
import Btn from "../components/btn";
import SearchBar from "../components/searchBar";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ReactTyped } from "react-typed";
import { Tilt } from "react-tilt";

const HeroSection = () => {
  const words = [
    "Empower",
    "Speed Up",
    "Boost",
    "Enhance",
    "Elevate",
    "Accelerate",
  ];
  const defaultOptions = {
    reverse: true,
    max: 5, // Very subtle tilt rotation (degrees)
    perspective: 800, // Increasing the perspective will make the tilt even less noticeable
    scale: 1.02, // Slightly smaller scaling effect (2% zoom)
    speed: 400, // Slower speed for a more gradual effect
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)", // Keeping smooth easing
  };

  return (
    <section className="w-screen min-h-screen md:px-24 pt-32 md:pt-16 flex items-center px-4 sm:px-12 flex-col md:flex-row justify-center text-white">
      <div className="md:w-1/2 z-10 px-4 md:px-0 md:mb-0 flex flex-col md:items-start items-center justify-center animate-backinleft space-y-7">
        <Image
          src={title}
          alt="Hero Title"
          height={90}
          width={670}
          className="sm:ml-0 ml-3 back-in-left w-[280px] sm:w-[320px]"
          priority
        />

        <h1 className="text-[#06d6a0] back-in-left2 2xl:text-3xl text-2xl overlock-regular-italic text-center md:text-start">
          "Know Together, Grow Together"
        </h1>
        <h2 className="text-2xl font-semibold back-in-left3 text-gray-100 text-center md:text-start">
          <FlipWords words={words} /> Your Learning journey !
        </h2>
        <span className="2xl:text-2xl text-lg back-in-left4 text-gray-300 text-center md:text-start">
          <ReactTyped
            strings={[
              `Experience an all-in-one platform designed specifically for students. Discover our exclusive free curated modules.`,
              `Experience an all-in-one platform designed specifically for students. Discover our handpicked free video lectures.`,
              `Experience an all-in-one platform designed specifically for students. Discover our recommended books.`,
              `Experience an all-in-one platform designed specifically for students. Discover our exclusive free courses.`,
              `Experience an all-in-one platform designed specifically for students. Discover our exclusive sample papers.`,
            ]}
            typeSpeed={25}
            backSpeed={30}
          />
        </span>
        <div className="sm:hidden block back-in-left ">
          <SearchBar />
        </div>
        {/* LET'S GROW TOGETHER section */}
        <div className="back-in-left flex items-center justify-center md:justify-start max-w-[480px] w-full">
          <div className="flex-grow bg-[#06d6a0] h-[1px]" />
          <p className="text-md 2xl:text-xl text-white font-semibold text-center mx-4 tracking-wider">
            LET'S GROW TOGETHER
          </p>
          <div className="flex-grow bg-[#06d6a0] h-[1px]" />
        </div>

        <div className="flex justify-center back-in-left6 md:justify-start w-full mb-6">
          <Btn />
        </div>
      </div>

      {/* Right side: Image */}
      <Tilt
        options={defaultOptions}
        className="md:w-1/2 z-10 flex justify-center md:justify-end"
      >
        <Image
          src={heroImage}
          alt="Hero Image"
          className="md:rounded-l-3xl rounded-3xl w-11/12 hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500"
          width={600}
          height={400}
          priority
        />
      </Tilt>
      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
