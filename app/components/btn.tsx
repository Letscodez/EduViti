"use client";
import React from "react";
import Link from "next/link";
import { Tilt } from "react-tilt";
import { defaultOptions } from "@/data/tilt";

interface BtnProps {
  className?: string;
  displayText?: string;
  url?: string;
}

const Btn = ({
  className = "",
  displayText = "Start Learning",
  url = "/StartLearning",
}: BtnProps) => {
  return (
    <Tilt options={defaultOptions}>
      <Link href={url}>
        <button
          className={`${className} bg-primary text-xs sm:text-sm text-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 duration-200 ease-in-out max-h-12 hover:shadow-xl hover:shadow-primary/30`}
        >
          {displayText}
        </button>
      </Link>
    </Tilt>
  );
};

export default Btn;
