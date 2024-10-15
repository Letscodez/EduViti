import React from "react";
import Btn from "../components/btn";
import Image from "next/image";
import { cardData } from "@/data/main"; // Import cardData

const CTA: React.FC = () => {
  return (
    <section className="text-white py-12 px-4 space-y-24">
      <div className="max-w-7xl mx-auto text-start flex flex-col md:flex-row items-center">
        <div className="md:max-w-1/2 mb-6 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 outfit leading-tight">
            Explore Knowledge and Elevate Your Learning with Learnix!
          </h1>
        </div>
        <div className="flex flex-col items-start md:items-start md:ml-6">
          <p className="mb-8 text-white/80 text-lg md:text-xl leading-relaxed">
            Join our vibrant community to access exclusive resources,
            personalized support, and collaborative opportunities that drive
            academic success for every student.
          </p>
          <Btn />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            <div className="text-white rounded-full p-4 mb-4">
              <Image
                src={card.image} // Access image from cardData
                alt={card.title}
                width={60} // Set your preferred width
                height={60} // Set your preferred height
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-center text-white/80">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;
