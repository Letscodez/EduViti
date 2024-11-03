import React from 'react';
import { navLinks } from '@/data/navlinks'; // Adjust the import path accordingly

const Navigate = () => {
  return (
    <section className="bg-white/5 p-6">
      <h1 className="text-5xl font-bold text-white mb-6 text-center">Welcome to <span className="text-primary">Eduvity!</span></h1>
      <p className="mb-4 text-lg text-gray-200 text-center">
        Explore our categories to find resources tailored for your learning journey.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {navLinks.map((navItem, index) => (
          <div
            key={index}
            className="p-4 bg-white/10 mt-10 rounded-lg shadow-lg transition-shadow duration-200 text-center hover:shadow-xl"
          >
            <h2 className="text-lg tt-me mb-3 text-white">{navItem.label}</h2>
            <ul className="space-y-2">
              {navItem.sublinks.map((sublink, subIndex) => (
                <li key={subIndex}>
                  <a
                    href={sublink.path}
                    className="text-gray-200 hover:text-gray-300 transition-colors"
                  >
                    {sublink.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigate;
