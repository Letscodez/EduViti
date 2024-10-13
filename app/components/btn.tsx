import React from "react";


interface BtnProps {
  className ?: string;
}

const Btn = ({ className }: BtnProps) => {
  return (
    <button className={`${className} bg-[#06d6a0] text-[#333333] font-bold py-3 px-6 rounded-md hover:bg-[#06d69eea] transition-colors duration-100 ease-in-out`}>
      Start Learning
    </button>
  );
};

export default Btn;