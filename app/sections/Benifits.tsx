import React from "react";
import Image from "next/image";
import { benefitsData, BenefitType } from "@/data/benifit"; // Ensure that benefitsData contains 4-5 items
import Btn from "../components/btn";

const BenefitsSection = () => {
  return (
    <section className="sm:space-y-0 space-y-24 flex-col w-full md:mx-6 justify-center px-4 md:px-8 text-white mr-12">
      {/* Heading and description */}
      <div className="items-start mb-6 max-w-7xl mx-auto text-center md:text-start flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10 flex flex-col justify-start">
          <h1 className="text-lg font-mono text-[#06D6A0] mb-4">BENEFITS</h1>
          <div className="w-full mb-6 text-center md:text-start md:mb-0 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Choose EduViti for Your Learning Journey?
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex md:mt-10 flex-col items-center md:items-start">
          <span className="sm:text-start text-center mb-8 text-white/80 text-lg md:text-xl leading-relaxed">
            At EduViti, we empower students by providing a comprehensive suite
            of educational resources designed to enhance your learning
            experience and support your learning growth.{" "}
            <span className="animate-ping duration-600">❘</span>
          </span>
          <Btn />
        </div>
      </div>

      {/* Features grid - Limit to 4-5 benefits */}
      <div className="sm:hidden grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {benefitsData
          .slice(0, 5)
          .map(({ icon, title, description }: BenefitType) => (
            <div
              key={title}
              className="flex p-8 border-y border-[#666]/50 flex-col sm:text-start text-center"
            >
              <Image
                src={icon}
                className="text-4xl sm:mx-0 mx-auto mb-3 size-10"
                alt={title}
                width={50}
                height={50}
              />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default React.memo(BenefitsSection); // Prevent unnecessary re-renders
