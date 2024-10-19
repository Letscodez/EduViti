import React from "react";
import { capabilities } from "@/data/main"; // Import capabilities data

const Capabilities: React.FC = () => {
  return (
    <section className="px-4 py-12">
      <h3 className="text-lg font-light text-center text-primary mb-4">Our Capabilities</h3>
      <h3 className="text-4xl font-bold text-center text-white mb-8">We Can Help You With...</h3>
      <div className="max-w-7xl min-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {capabilities.map((capability) => (
          <div
            key={capability.id}
            className="bg-primary text-[#222] p-4 rounded-lg shadow-md hover:bg-primary/70 cursor-pointer duration-100 flex items-center justify-center"
          >
            <p className="text-md font-medium whitespace-nowrap overflow-hidden text-ellipsis text-center">
              {capability.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
