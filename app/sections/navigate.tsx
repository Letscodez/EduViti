import React from "react";
import { maths } from "@/images/main";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
const showList = [
  {
    label: "Study Resources For All Classes",
    path: "/StudyResources",
    image: maths,
  },
  {
    label: "Study Resources For All Classes",
    path: "/StudyResources",
    image: maths,
  },
  {
    label: "Study Resources For All Classes",
    path: "/StudyResources",
    image: maths,
  },
];

const ShowListComponent = () => {
  return (
    <section>
      <LampContainer >
      <h1 className="text-5xl font-bold text-white mb-6 text-center">
        Welcome to <span className="text-primary">Eduvity!</span>
      </h1>
      <p className="mb-4 text-lg text-gray-200 text-center">
        Explore our categories to find resources tailored for your learning
        journey.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showList.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white/10 mt-10 rounded-lg shadow-lg transition-shadow duration-200 text-center hover:shadow-xl"
          >
            <Image
              src={item.image}
              alt={item.label}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-primary mb-3">{item.label}</h2>
            <a
              href={item.path}
              className="text-gray-200 hover:text-gray-300 hover:underline transition-colors"
            >
              Visit Now
            </a>
          </div>
        ))}
      </div>
      </LampContainer>
    </section>
  );
};

export default ShowListComponent;
