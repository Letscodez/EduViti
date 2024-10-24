import React from "react";


interface BtnProps {
  className ?: string;
  displayText ?: string;
}

const Btn = ({ className, displayText }: BtnProps) => {
  return (
    <button className={`${className} bg-primary text-xs sm:text-sm text-bg font-bold py-3 px-6 rounded-md hover:bg-[#06d69eea] transition-colors duration-100 ease-in-out max-h-12`}>
      {displayText ? displayText : "Start Learning"}
    </button>
  );
};

export default Btn;