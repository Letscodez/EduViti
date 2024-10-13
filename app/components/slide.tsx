"use client";
import React, { useState } from "react";

const Slide = () => {
  // State for the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, text: "Join a vibrant community of learners!" },
    { id: 2, text: "Master concepts with interactive modules!" },
    { id: 3, text: "Ace your exams with our curated content!" },
  ];

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-[#222] p-4 rounded-xl mb-6 shadow-lg text-center">
      <button
        onClick={prevSlide}
        className="bg-[#06d6a0] text-white px-4 py-1 rounded-l-lg"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <span className="mx-4">{slides[currentSlide].text}</span>
      <button
        onClick={nextSlide}
        className="bg-[#06d6a0] text-white px-4 py-1 rounded-r-lg"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Slide;
