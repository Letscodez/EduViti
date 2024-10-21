import React from "react";
import Image from "next/image";
import { benefitsData, BenefitType } from "@/data/main";
import Btn from "../components/btn";

const BenefitsSection = () => {
  return (
    <section className="space-y-24 flex-col w-full mx-6 py-16 px-4 md:px-8 text-white mr-12">
      {/* Heading and description */}

      <div className="items-start mb-6 max-w-7xl mx-auto text-center md:text-start flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10 flex flex-col justify-start">
          <h3 className="text-lg font-mono text-[#06D6A0] mb-4">BENEFITS</h3>
          <div className="w-full mb-6 text-center md:text-start md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Join the Eduvity Community?
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex md:mt-10 flex-col items-center md:items-start">
          <p className="sm:text-start text-center mb-8 text-white/80 text-lg md:text-xl leading-relaxed">
            We believe in empowering students with all the tools they need to
            succeed. Our study resources and features are crafted to ensure your
            academic success and growth.
          </p>
          <Btn />
        </div>
      </div>

      {/* Features grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {benefitsData.map((benefit: BenefitType, index: number) => (
          <div
            key={index}
            className="flex p-8 border-y border-[#666]/50 flex-col items-start text-center sm:text-left"
          >
            <Image
              src={benefit.icon}
              className="text-4xl mb-3 size-10"
              alt="icon"
            />
            <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
// change toh humko 4-5 krna hoti achha baki jo template me hoti vahi use karti ?
export default BenefitsSection;
