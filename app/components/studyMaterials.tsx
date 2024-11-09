"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 my-auto gap-8 md:mx-2 xl:mx-28">
        {materials.map((material, index) => (
          <div
            key={index}
            className="bg-white/5 border border-primary/50 p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col md:flex-col xl:flex-row items-center lg:mb-0 mb-2"
          >
            <Image
              src={material.image}
              height={200}
              width={200}
              alt={material.title}
              className="h-full rounded-lg object-cover border border-primary/50 my-auto"
            />
            <div className="lg:ml-5 h-full lg:mt-0 lg:text-start text-center mt-2 space-y-2">
              <h2 className="text-md text-primary font-semibold ">{material.title}</h2>
              <h3 className="text-lg">{material.subtitle}</h3>
              <p className="text-sm text-gray-200">{material.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={essentials}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  );
};

export default StudyMaterials;