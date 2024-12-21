"use client";
import React, { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { search_list } from "@/data/search.query";

const SearchPage = () => {
  const [search, setSearch] = useState("");

  // Handle input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Filter and sort results
  const search_results = search_list
    .filter((item) => {
      const searchWords = search.toLowerCase().split(/\s+/); // Split search into words
      const titleWords = item.title.toLowerCase(); // Convert title to lowercase
      // Check if every word in searchWords exists in titleWords
      return searchWords.every((word) => titleWords.includes(word));
    })
    .sort((a, b) => a.preference - b.preference);

  // Highlight matching text
  const highlightMatch = (text: string) => {
    if (!search) return text;
    const searchWords = search.split(/\s+/);
    const regex = new RegExp(`(${searchWords.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      searchWords.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="text-primary font-bold">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <BackgroundLines className="bg-white/5 flex flex-col items-center w-screen pt-32 justify-start text-white px-6 space-y-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-[500px] mt-5 z-50">
        Discover New Learning{" "}
        <span className="text-primary">Opportunities</span>
      </h2>
      <p className="text-lg md:text-xl text-center z-50 text-white/80 max-w-xl leading-relaxed">
        Search through our vast library of study materials and find the
        resources that fit your goals.
      </p>
      <div className="w-full max-w-lg flex flex-row items-center justify-center bg-white/10 rounded-lg shadow-bg shadow text-white hover:scale-[1.02] duration-200">
        <input
          type="text"
          placeholder="Search for Courses, Topics, or Materials.."
          className="w-full px-4 py-3 bg-transparent border-r border-white/20 placeholder-gray-400 focus:outline-none z-50"
          onChange={handleSearch}
          value={search}
          aria-label="Search for study materials"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="30px"
          className="fill-current text-primary mx-4 my-3"
          aria-label="Search"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
        </svg>
      </div>

      {/* Results Panel */}
      {search && (
        <div className="w-full max-w-lg bg-white/10 rounded-lg shadow-bg shadow p-4 text-white space-y-4 -translate-y-[40px] flex flex-col min-h-48 overflow-y-scroll">
          <h3 className="text-lg font-semibold text-primary">Your Search:</h3>
          {search_results.length === 0 && (
            <p className="text-md text-gray-300">
              No results found for &apos;{search}&apos;.
            </p>
          )}
          {search_results.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-md text-gray-300 hover:text-white transition duration-100 block w-full"
            >
              ⁍ {highlightMatch(item.title)}
            </a>
          ))}
        </div>
      )}
      <a
        href="#discover"
        className="text-md text-center z-50 text-gray-300 font-medium hover:underline transition duration-100 "
      >
        Discover new <span className="text-primary">possibilities!</span>
      </a>
    </BackgroundLines>
  );
};

export default SearchPage;
