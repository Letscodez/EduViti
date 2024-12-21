"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import { cardData } from "@/data/card"; // Import cardData

// Dynamically import Btn component
const Btn = dynamic(() => import("../components/btn"), { ssr: false });

// Card Component
const Card: React.FC<{
  image: StaticImageData;
  title: string;
  description: string;
}> = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-[#06d6a0] rounded-full p-4 mb-4">
      <Image src={image} alt={title} width={60} height={60} loading="lazy" />
    </div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-white/80">{description}</p>
  </div>
);

const CTA: React.FC = () => {
  return (
    <section className="text-white md:px-24 px-4 space-y-24 sm:space-y-32">
      {/* Main CTA Section */}
      <div className="max-w-7xl mx-auto text-start flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-10">
          <h1 className="lg:text-start text-center text-4xl lg:text-5xl font-bold mb-4 leading-tight ml-0">
            Explore Knowledge and Elevate Your Learning with EduViti!
          </h1>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col items-center lg:items-start justify-center">
          <span className="lg:text-start text-center mb-8 text-white/80 text-lg lg:text-xl leading-relaxed">
            Join our vibrant community to access exclusive resources,
            knowledgeable books, and free courses that will drive you to explore
            everything.
          </span>
          <Btn />
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 max-w-[1500px] mx-auto relative overflow-hidden">
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(CTA);
