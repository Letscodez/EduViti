"use client";

import React from "react";
import dynamic from "next/dynamic";

// Lazy load the AnimatedCursor
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

// Settings for the cursor
const cursorConfig = {
  innerSize: 8,
  outerSize: 35,
  innerScale: 1,
  outerScale: 1.75,
  outerAlpha: 0,
  innerStyle: {
    backgroundColor: "#0beab0",
    zIndex: 999999, // Fixed camelCase for CSS property
  },
  outerStyle: {
    border: "3px solid #f0f0f0",
    zIndex: 999999, // Fixed camelCase for CSS property
  },
  clickables: [
    "a",
    "input",
    "label",
    "select",
    "textarea",
    "button",
    ".link",
    "img",
    "p", // Added flexibility for clickable elements
  ],
  trailingSpeed: 4,
};

const Cursor = () => (
  <div className="md:block hidden">
    <AnimatedCursor {...cursorConfig} />
  </div>
);

export default Cursor;
