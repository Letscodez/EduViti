"use client";
import React from "react";
import Image from "next/image";
import { courses, essentials, notes, qbanks, researchbooks, vlectures } from "@/images/main";

const StudyMaterials = () => {
  const materials = [
    {
      title: "Learning Essentials",
      subtitle: "Top Study Resources, Just a Click Away",
      description: "Find the best online lectures and study materials, gathered from top educators and available to you for free.",
      image: essentials,
    },
    {
      title: "Notes",
      subtitle: "Quick and Powerful Notes",
      description:
        "Unlock high-impact learning with notes that make complex topics simple.",
      image: notes,
    },
    {
      title: "Question Banks",
      subtitle: "Master Topics with Dedicated Practice Sets",
      description:
        "Prepare smarter with question banks designed to challenge, reinforce, and boost your confidence.",
      image: qbanks ,
    },
    {
      title: "Video Lectures",
      subtitle: "Bringing You the Best of Online Learning",
      description: "Access a curated selection of video lectures from top educators worldwide, offering valuable insights and knowledge at no cost.",
      image: vlectures,
    },
    {
      title: "Research Books",
      subtitle: "Dive Deep into the World of Research",
      description:
        "Research books provide in-depth analysis, advancing knowledge in various fields.",
      image: researchbooks,
    },
    {
      title: "Free Courses",
      subtitle: "Learn from the Best for Free",
      description:
        "Explore a curated selection of free online courses from top institutions worldwide, designed to enhance your skills and knowledge without any cost.",
      image: courses,
    },
  ];

  return (
    <div className="p-6 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 mt-8 text-center text-primary">
        Study Materials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-12 gap-8 md:mx-2 xl:mx-28">
        {materials.map((material, index) => (
          <div
            key={index}
            className="bg-white/5 border border-primary/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col md:flex-col xl:flex-row items-center"
          >
            <Image
              src={material.image}
              height={200}
              width={200}
              alt={material.title}
              className="h-full rounded-lg object-cover mb-4"
            />
            <div className="ml-5 h-full">
              <h2 className="text-xl text-primary font-semibold mb-2">{material.title}</h2>
              <h3 className="text-lg mb-4">{material.subtitle}</h3>
              <p className="text-sm ">{material.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;
