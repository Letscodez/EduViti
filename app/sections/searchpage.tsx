import React from "react";
import { search_svg } from "@/images/main";

const SearchPage = () => {
  return ( 
    <section className="flex flex-col items-center w-screen pt-32 justify-end text-white px-6 space-y-12">
  
      <h2 className="text-4xl md:text-5xl max-w-[500px] font-bold text-center">
        Discover New Learning{" "}
        <span className="text-primary">Opportunities</span>
      </h2>
      <p className="text-lg md:text-xl text-center text-white/80 max-w-xl leading-relaxed">
        Search through our vast library of study materials and find the
        resources that fit your goals.
      </p>
      <div className="w-full max-w-lg flex flex-row hover:scale-105 animate-bounce duration-1000 rounded-lg shadow-bg shadow text-white justify-center bg-white/10 items-center">
        <input
          type="text"
          placeholder="Search for Courses, Topics, or Materials.."
          className="w-full px-4 bg-white/0 py-3 border-r border-white/20 placeholder-gray-400 focus-within:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="30px"
          className="fill-current text-primary mx-4 my-3 cursor-pointer"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
        </svg>
      </div>
      <a
        href="#discover"
        className="text-md max-w-96 text-centerc  text-gray-300 font-medium hover:text-white transition duration-100"
      >
        Discover new possibilities!
      </a>
      
    </section>
  );
};

export default SearchPage;
