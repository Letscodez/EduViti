"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { materials } from "@/data/studyMaterials";

const StudyMaterials = () => {
  return (
    <div className="p-6 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 mt-8 text-center text-primary">
        Study Materials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:mx-2 xl:mx-28">
        {materials.map((material, index) => (
          <CardContainer
            key={index}
            className="relative bg-white/10 hover:scale-105 border hover: border-primary/50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform flex flex-col lg:flex-row group"
          >
            <div className="absolute inset-0 scale-125 bg-blue-500 opacity-0 blur-3xl rounded-lg transition-opacity duration-300 group-hover:opacity-5"></div>
            <CardItem translateZ={70} translateX={10} className="min-w-[40%]">
              <Image
                src={material.image}
                height={200}
                width={200}
                alt={material.title}
                className="lg:h-full h-4/5 mx-auto rounded-lg object-cover border border-primary/50 my-auto group-hover/card:shadow-xl"
              />
            </CardItem>
            <CardBody className="group/card lg:ml-5 lg:text-start text-center mt-2 space-y-2">
              <CardItem
                as="h2"
                translateZ={50}
                className="text-md text-primary font-semibold"
              >
                {material.title}
              </CardItem>
              <CardItem as="h3" translateZ={30} className="text-lg">
                {material.subtitle}
              </CardItem>
              <CardItem
                as="p"
                translateZ={25}
                className="text-sm text-gray-200"
              >
                → {material.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;
