"use client";
import React, { useState } from "react";
import CourseCard from "@/app/components/course"; // Import the CourseCard component
import { cs } from "@/data/courses/cs";
import Sidebar from "@/app/components/sidebar";
import { coursesjee } from "@/data/main";

const StudySection: React.FC = () => {
  const [selected, setSelected] = useState(coursesjee[0].path); // Initialize with the first course name from coursesjee
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Filter and map courses based on the selected course name from coursesjee
  const filteredCourses = cs.filter((course) => course.category === selected);

  return (
    <section className="flex bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333]">
      <Sidebar
        links={coursesjee} // Passing the links to the sidebar (the main course sections)
        selected={selected}
        setSelected={setSelected}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <div
        className={`${
          isSidebarVisible ? "lg:ml-72" : "ml-0"
        } py-8 flex-grow px-6 min-h-screen flex flex-col items-center space-y-14`}
      >
        <h2 className="text-3xl font-bold mb-6 text-white mt-6">
          Our Video <span className="text-primary">Lectures</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              description={course.description}
              thumbnail={course.thumbnail}
              channel={course.channel}
              path={course.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySection;
