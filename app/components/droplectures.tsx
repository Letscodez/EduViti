"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

type LecturesCardProps = {
  list: {
    name: string;
    options: {
      path: string;
      thumbnail: string;
      channel: string;
    }[];
  }[];
};

const LecturesCard: React.FC<LecturesCardProps> = ({ list }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {list.map((chapter, index) => (
        <div
          key={index}
          className="bg-[#5a776b]/20 border border-primary/30 cursor-pointer p-4 rounded-lg shadow-lg"
          onClick={() => handleToggle(index)}
        >
          <h2 className="text-xl font-medium text-white flex items-center justify-between">
            ⁍ {chapter.name}
            <ChevronDownIcon
              className={`duration-200 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
            />
          </h2>
          {activeIndex === index && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {chapter.options.map((option, idx) => (
                <li
                  key={idx}
                  className="bg-white/10 border border-primary/30 rounded-md flex flex-col items-center p-4"
                >
                  <div className="relative w-full h-0 pb-[56.25%] mb-4"> 
                    <Image
                      src={option.thumbnail}
                      alt={`${chapter.name} thumbnail`}
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-gray-300 font-semibold">{option.channel}</p>
                    <a
                      href={option.path}
                      className="bg-primary text-bg px-4 py-2 rounded-lg hover:bg-primary/80 transition"
                    >
                      Watch Now
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default LecturesCard;
