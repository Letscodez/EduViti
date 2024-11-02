import Image from "next/image";
import { heroImage, title } from "@/images/main";
import React from "react";
import Btn from "../components/btn";
import SearchBar from "../components/searchBar";
const HeroSection = () => {
  return (
    <section className="w-screen min-h-screen pt-32 md:pt-16 flex items-center px-4 sm:px-12 flex-col md:flex-row justify-center text-white">
      <div className="md:w-1/2 px-4 md:px-0 md:mb-0 flex flex-col md:items-start md:justify-start items-center justify-center animate-backinleft">
        <Image
          src={title}
          alt="Hero Title"
          height={90}
          width={670}
          className="sm:ml-0 ml-3 back-in-left w-[280px] sm:w-[320px]"
          priority
        />

        <h1 className="text-[#06d6a0] back-in-left2 2xl:text-3xl text-2xl overlock-regular-italic my-4 text-center md:text-start">
          "Know Together, Grow Together"
        </h1>
        <h2 className="text-2xl font-semibold back-in-left3 mb-4 text-white text-center md:text-start">
          Empowering Your Learning journey with EduViti !
        </h2>
        <p className="2xl:text-2xl text-lg back-in-left4 text-gray-300 mb-8 text-center md:text-start">
          Discover an all-in-one platform for curated modules,
          textbooks,recommended books, and free courses.
        </p>
        <div className="sm:hidden block back-in-left5">
          <SearchBar/>
        </div>
        {/* LET'S GROW TOGETHER section */}
        <div className="invisible md:visible sm:back-in-left5 back-in-left6 flex items-center  justify-center md:justify-start mb-8 max-w-[480px] w-full">
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
      <div className="md:w-1/2 back-in-up flex justify-center md:justify-end">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="md:rounded-l-3xl rounded-3xl shadow-2xl w-11/12"
          width={600}
          height={400}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
