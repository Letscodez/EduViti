import React, { useState } from "react";
import { search_list } from "@/data/search.query";

const SearchBar = ({
  placeholder = "Search for Courses, Topics, or Materials..",
}) => {
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
    <div className="w-full max-w-lg border border-primary/30 flex flex-row hover:scale-105 rounded-lg text-white justify-center bg-black/30 items-center relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 bg-transparent py-2 border-r border-white/30 placeholder-gray-300 text-ellipsis focus:outline-none"
        onChange={handleSearch}
        value={search}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="30px"
        height="30px"
        className="fill-current text-primary mx-4 "
      >
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
      </svg>

      {/* Results Panel */}
      {search && (
        <div className="w-full max-w-lg bg-bg rounded-lg shadow-bg shadow p-4 text-white space-y-4 absolute top-[100%] left-0 mt-2 z-10 flex flex-col max-h-56 overflow-y-auto scroll-smooth">
          <h3 className="text-lg font-semibold text-primary">Your Search:</h3>
          {search_results.length === 0 && (
            <p className="text-md text-gray-300">
              No results found for your search.
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
    </div>
  );
};

export default SearchBar;
