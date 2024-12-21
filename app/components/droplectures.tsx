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
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {list.map((chapter, index) => (
        <div
          key={index}
          className="bg-[#5a776b]/20 border border-primary/30  p-4 rounded-lg shadow-lg"
          onClick={() => handleToggle(index)}
        >
          <h2 className="text-xl font-medium text-white flex items-center justify-between">
            ⁍ {chapter.name}
            <ChevronDownIcon
              className={`duration-200 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
          {activeIndex === index && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {chapter.options.map((option, idx) => (
                <a
                  href={option.path}
                  target="_blank"
                  key={idx}
                  className="bg-white/10 border border-primary/30 rounded-md flex flex-col items-center p-4"
                >
                  <div className="relative w-full h-0 pb-[56.25%] mb-4">
                    <Image
                      src={option.thumbnail}
                      alt={`${chapter.name} thumbnail`}
                      fill
                      className="absolute inset-0 rounded-md hover:scale-[1.02] transition-transform duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-gray-300 hover:underline duration-100 hover:scale-105 font-semibold">
                      {option.channel}
                    </p>
                    <button className="bg-primary text-bg px-4 py-2 rounded-lg hover:scale-105 hover:bg-primary/80 transition">
                      Watch Now
                    </button>
                  </div>
                </a>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default LecturesCard;
