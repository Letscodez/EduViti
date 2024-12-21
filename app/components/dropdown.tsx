"use client";
import { useState, useEffect, ReactElement } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Define the types for the sublinks and link prop
interface Sublink {
  label: string;
  path: string;
}

interface Link {
  label: string;
  sublinks: Sublink[];
}

interface DropdownProps {
  link: Link;
}

const Dropdown = ({ link }: DropdownProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout: ReturnType<typeof setTimeout>; // Typing for setTimeout

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => clearTimeout(hoverTimeout);
  });

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={link.label}
    >
      <li key={link.label} className="flex items-center space-x-1 ">
        <span className="text-white/90 duration-100 hover:text-[#06d6a0] transition-colors ease-in-out">
          {link.label}
        </span>
        <ChevronDownIcon
          className={`h-6 w-6 text-white duration-100 ${
            isHovered ? "rotate-180" : "rotate-0"
          }`}
        />
      </li>

      {/* Dropdown Menu */}
      {isHovered && (
        <div
          className="absolute duration-200 border border-primary/20 mt-6 w-48 rounded-lg shadow-lg bg-bg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-2 text-white/90">
            {link.sublinks.map((sublink) => (
              <a
                key={sublink.label}
                href={sublink.path}
                className="rounded-lg block px-4 py-2 text-sm hover:bg-white/20 hover:scale-105 hover:text-[#06D6A0]"
              >
                {sublink.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
