import React from "react";
import { benefitsData, BenefitType } from "@/data/main";

const BenefitsSection = () => {
  return (
    <section className="w-full mx-6 py-16 px-4 md:px-8 text-white mr-12">
      {/* Heading and description */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-[#06d6a0] text-lg font-semibold tracking-wide uppercase mb-3">
          Benefits
        </h2>
        <h3 className="text-3xl font-bold mb-4">Why Join the Eduvity Community?</h3>
        <p className="text-gray-400 leading-relaxed">
          We believe in empowering students with all the tools they need to succeed. 
          Our study resources and features are crafted to ensure your academic success and growth.
        </p>
        <button className="mt-6 py-2 px-6 rounded-lg bg-[#06d6a0] text-[#1a1a1a] font-semibold hover:bg-[#05b88c]">
          Start Learning
        </button>
      </div>

      {/* Features grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {benefitsData.map((benefit: BenefitType, index: number) => (
          <div key={index} className="flex flex-col items-start text-center sm:text-left">
            <div className="text-4xl mb-3">{benefit.icon}</div>
            <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
