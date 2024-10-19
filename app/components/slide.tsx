"use client"; 
import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { slidesData } from "@/data/main"; 

const Carousel: React.FC = () => {
  const carouselRef = useRef<AliceCarousel | null>(null); // Create a ref for the carousel

  const items = slidesData.map((slide) => (
    <div key={slide.id} className="bg-[#55555562] p-8 sm:rounded-xl shadow-lg flex items-center justify-between h-[12vh] sm:h-[10vh]">
      <h2 className="text-white md:text-start text-center text-lg md:text-2xl font-semibold">
        {slide.title}
      </h2>
      <span className="text-5xl font-black text-[#0ac895] mx-4">&rarr;</span>
      <p className="text-[#0ac895] md:text-start text-center font-semibold text-lg md:text-2xl">
        {slide.description}
      </p>
    </div>
  ));

  return (
    <div className="sm:flex flex-row items-center justify-center">
      <AliceCarousel
        ref={carouselRef}
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={3500}
        disableButtonsControls
        infinite
        autoPlayDirection="rtl"
      />
    </div>
  );
};

export default Carousel;
