'use client';
import React from "react";
import Image from "next/image";
import maths_guide from "@/images/maths_guide.webp";

const StudyMaterials = () => {
  const materials = [
    {
      title: "Notes",
      description: "Unlock high-impact learning with notes that make complex topics simple.",
      image: maths_guide,
    },
    {
      title: "Question Banks",
      description: "Prepare smarter with question banks designed to challenge, reinforce, and boost your confidence.",
      image: "/images/biology_flashcards.webp",
    },
    {
      title: "Video Lectures",
      description: "Preferred Video Lectures of top teachers available online.",
      image: "/images/history_timeline.webp",
    },
    {
      title: "Research Books",
      description: "Research books provide in-depth analysis,advancing knowledge in various fields.",
      image: "/images/physics_problem_sets.webp",
    },
    {
      title: "Free Courses",
      description: "Explore a curated selection of free online courses from top institutions worldwide, designed to enhance your skills and knowledge without any cost.",
      image: "/images/literature_reading_list.webp",
    },
    {
      title: "Chemistry Lab Manual",
      description: "Step-by-step guide for chemistry experiments.",
      image: "/images/chemistry_lab_manual.webp",
    },
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 mt-8 text-center text-primary">
        Study Materials
      </h1>
      <div className="flex flex-wrap justify-center gap-6 md:mx-40">
        {materials.map((material, index) => (
          <div
            key={index}
            className="bg-white/10 border border-primary/50 p-4 mt-8 rounded-lg shadow-2xl hover:shadow-xl transition-transform duration-100 hover:scale-105 flex flex-col items-center justify-evenly h-60 min-w-72 max-w-72 md:max-w-full md:min-w-full "
          >
            <Image
              src={material.image}
              height={100}
              width={100}
              alt={material.title}
            />
            <h2 className="text-xl font-semibold mt-4">{material.title}</h2>
            <p className="mt-2 text-base text-center">{material.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;
