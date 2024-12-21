import React from "react";
import { capabilities } from "@/data/capabilities"; // Import capabilities data

const Capabilities: React.FC = () => {
  return (
    <section className="md:block hidden px-4">
      <h1 className="text-lg font-light text-center text-primary mb-4">
        Our Capabilities
      </h1>
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        We Can Help You With...
      </h2>
      <div className="max-w-7xl min-w-5xl mx-auto flex flex-wrap justify-center gap-6 pt-3">
        {capabilities.map(({ id, title }) => (
          <div
            key={id}
            className="bg-primary text-[#222] p-4 rounded-lg shadow-md hover:bg-primary/70 duration-100 flex items-center justify-center"
            aria-label={title} // Adding accessibility for screen readers
          >
            <p className="text-md font-medium whitespace-nowrap overflow-hidden text-ellipsis text-center">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Capabilities); // Use React.memo to prevent unnecessary re-renders
