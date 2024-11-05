'use client';
import React, {useState} from "react";
import Sidebar3 from "@/app/components/sideBar3";
import ResourceCard from "@/app/components/ResourceCard";
import { resources } from "@/data/resource";
import { coursesjee } from "@/data/main";
// Define the resource data

const StudySection: React.FC = () => {
  const [selected, setSelected] = useState(coursesjee[0].path);

  return (
    <section className="flex bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333]">
      <Sidebar3 links={coursesjee} selected={selected} setSelected={setSelected} />
      <div className="py-8 flex-grow px-6 min-h-screen flex flex-col items-center space-y-14">
        <h2 className="text-3xl font-bold mb-12 text-white mt-10">Our Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title} // Use a unique key for each card
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySection;
