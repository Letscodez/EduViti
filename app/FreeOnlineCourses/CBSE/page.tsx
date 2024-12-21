"use client";
import React, { useState } from "react";
import ResourceCard from "@/app/components/ResourceCard";
import { cbse } from "@/data/resource";
import { coursescbse } from "@/data/main";
import Sidebar from "@/app/components/sidebar";
const StudySection: React.FC = () => {
  const [selected, setSelected] = useState(coursescbse[0].path);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  return (
    <section className="flex bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333]">
      <Sidebar
        links={coursescbse}
        selected={selected}
        setSelected={setSelected}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <div
        className={`${isSidebarVisible ? "lg:ml-72" : "ml-0"} py-8 flex-grow px-6 min-h-screen flex flex-col items-center space-y-14`}
      >
        {coursescbse.map(
          (link) =>
            selected === link.path && (
              <h2
                key={link.name}
                className="text-3xl font-bold leading-10 mb-12 text-center text-white mt-10"
              >
                <span className="text-primary text-2xl">{link.name} </span>{" "}
                <br /> Pick a subject to start learning
              </h2>
            ),
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 gap-y-16">
          {cbse.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              icon={resource.icon}
              url={`${selected}/${resource.linkName}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default StudySection;
