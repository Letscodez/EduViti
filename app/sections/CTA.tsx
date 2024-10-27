import React from "react";
import Btn from "../components/btn";
import Image from "next/image";
import { cardData } from "@/data/main"; // Import cardData

const CTA: React.FC = () => {
  return (
    <section className="text-white py-24 sm:py-12 px-4 space-y-24 sm:space-y-32">
      {/* Main CTA Section */}
      <div className="max-w-7xl mx-auto text-start flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10">
          <h1 className="sm:text-start text-center text-4xl md:text-5xl font-bold mb-4 leading-tight ml-0">
            Explore Knowledge and Elevate Your Learning with StudySite!
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start">
          <p className="sm:text-start text-center mb-8 text-white/80 text-lg md:text-xl leading-relaxed">
            Join our vibrant community to access exclusive resources,
            knowledgeable books, and free courses that will drive you to explore
            everything.
          </p>
          <Btn />
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col items-center text-center">
            <div className="bg-[#06d6a0] rounded-full p-4 mb-4">
              <Image
                src={card.image}
                alt={card.title}
                width={60}
                height={60}
                priority
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-white/80">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(CTA);
