"use client";
import React, { useState } from "react";
import ResourceCard from "@/app/components/ResourceCard";
import Sidebar from "@/app/components/sidebar";
import { resources } from "@/data/resource";
import { links } from "@/data/classes/12";

const StudySection: React.FC = () => {
  const [selected, setSelected] = useState(links[0].path);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <section className="flex bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333]">
      <Sidebar
        links={links}
        selected={selected}
        setSelected={setSelected}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <div
        className={`${isSidebarVisible ? "lg:ml-72" : "ml-0"} py-8 flex-grow px-6 min-h-screen flex flex-col items-center space-y-14`}
      >
        {links.map(
          (link) =>
            selected === link.path && (
              <h2
                key={link.name}
                className="text-3xl font-bold mb-12 text-white mt-10"
              >
                Grade 12 Study{" "}
                <span className="text-primary">{link.name} !</span>
              </h2>
            ),
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-16">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
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
