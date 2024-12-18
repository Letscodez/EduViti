import React from "react";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Grid background */}
      <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
        {/* Grid Rows */}
        {[
          [2, 5, 1, 4],
          [5, 3, 2, 2],
          [4, 7, 1],
          [4, 2, 2, 2, 2],
          [2, 5, 1, 4],
          [4, 7, 1],
          [5, 1, 3, 3],
          [2, 5, 1, 4],
        ].map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((colSpan, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`col-span-${colSpan} bg-gray-800 rounded animate-pulse hover:scale-105 transition-transform`}
              ></div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center space-y-4">
        <h2 className="text-white text-4xl md:text-8xl font-bold flex flex-row items-center">
          Coming
          <div className="relative text-sm mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up-fill text-[#06d6a0]"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <div className="absolute -top-12 transform -rotate-45 text-[#06d6a0]">
              <p className="font-light text-base text-white bg-[#06d6a0] rounded-md px-2 py-0">
                super
              </p>
            </div>
          </div>
          Soon
        </h2>
        <h3 className="text-gray-300 text-xl md:text-xl">
          Check out our different study materials{" "}
          <a href="/StartLearning" className="text-primary underline">
            now
          </a>
        </h3>
      </div>
    </div>
  );
};

export default ComingSoon;
