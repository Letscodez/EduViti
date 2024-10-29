import React from "react";

interface BtnProps {
  className?: string;
  displayText?: string;
  url?: string;
}

const Btn = ({ className, displayText,url }: BtnProps) => {
  return (
    <a href={displayText ? url : "/StartLearning"}>
      <button
        className={`${className} bg-primary text-xs sm:text-sm text-bg font-bold py-3 px-6 rounded-lg hover:opacity-75 duration-100 ease-in-out max-h-12`}
      >
        {displayText ? displayText : "Start Learning"}
      </button>
    </a>
  );
};

export default Btn;
