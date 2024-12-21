"use client";

import Image from "next/image";
import { heroImage, title } from "@/images/main";
import React from "react";
import Btn from "../components/btn";
import dynamic from "next/dynamic";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ReactTyped } from "react-typed";
import { Tilt } from "react-tilt";

const SearchBar = dynamic(() => import("../components/searchBar"), {
  ssr: false,
});

const TILT_OPTIONS = {
  reverse: true,
  max: 5,
  perspective: 800,
  scale: 1.02,
  speed: 400,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const TYPED_STRINGS = [
  "Discover our exclusive free modules.",
  "Discover our handpicked video lectures.",
  "Discover our recommended books.",
  "Discover our exclusive free courses.",
  "Discover our exclusive sample papers.",
];

const HeroSection = () => (
  <section className="w-screen min-h-screen lg:px-24 pt-32 lg:pt-16 flex items-center px-4 sm:px-12 flex-col lg:flex-row justify-center text-white max-w-[1600px] mx-auto relative overflow-hidden">
    <div className="lg:w-1/2 z-10 px-4lg:px-0 lg:mb-0 flex flex-col lg:items-start items-center justify-center space-y-7">
      <Image
        src={title}
        alt="Hero Title"
        height={90}
        width={670}
        className="sm:ml-0 ml-3 slide-down w-[280px] sm:w-[320px]"
        priority
      />

      <h1 className="text-[#06d6a0] slide-down 2xl:text-3xl text-2xl overlock-regular-italic text-center lg:text-start">
        &quot;Know Together, Grow Together&quot;
      </h1>
      <h2 className="text-2xl font-semibold slide-down text-gray-100 text-center lg:text-start">
        Elevate Your Learning Journey!
      </h2>
      <div className="2xl:text-2xl text-lg slide-down text-gray-300 text-center lg:text-start xl:min-h-[60px] min-h-[85px]">
        <p>
          Experience an all-in-one platform designed specifically for students.
        </p>
        <ReactTyped
          strings={TYPED_STRINGS}
          typeSpeed={25}
          backSpeed={30}
          loop
          shuffle
          smartBackspace
        />
      </div>

      <div className="lg:hidden block back-in-left z-50">
        <SearchBar />
      </div>

      <div className="back-in-left flex items-center justify-center lg:justify-start max-w-[480px] w-full">
        <div className="flex-grow bg-[#06d6a0] h-[1px] slide-right" />
        <p className="text-md 2xl:text-xl text-white font-semibold text-center mx-4 tracking-wider slide-right">
          LET&apos;S GROW TOGETHER
        </p>
        <div className="flex-grow bg-[#06d6a0] h-[1px] slide-right" />
      </div>

      <div className="flex justify-center back-in-left6 lg:justify-start w-full slide-right">
        <Btn />
      </div>
    </div>

    <Tilt
      options={TILT_OPTIONS}
      className="lg:w-1/2 z-[5] lg:mt-0 my-4 flex justify-center lg:justify-end slide-left"
    >
      <Image
        src={heroImage}
        alt="A visual representation of hero section"
        className="lg:rounded-l-3xl rounded-3xl w-11/12 hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500"
        width={600}
        height={400}
        priority
      />
    </Tilt>
    <BackgroundBeams />
  </section>
);

export default HeroSection;
