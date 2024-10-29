"use client";
import { courses } from "@/data/main";
import { nav_logo, title } from "@/images/main";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar3: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-col bg-gradient-to-bl from-[#2e4640] to-[#333333] text-white h-screen w-96 p-4 border-r border-white/30 ${isSidebarVisible ? "block" : "hidden"}`}>
      <button
        onClick={toggleSidebar}
        className="mb-4 rounded-lg bg-white/20 p-2 transition-all duration-300 absolute left-[17rem] top-6"
      >
        <svg
          role="button"
          aria-label={isSidebarVisible ? "Close Menu" : "Open Menu"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white hover:text-primary cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>

      <div className="flex-grow">
        <a href="/" className="flex items-center mb-4 space-x-3">
          <Image
            src={nav_logo}
            alt="Logo"
            height={60}
            width={60}
            priority
          />
          <Image
            src={title}
            alt="Hero Title"
            height={90}
            width={670}
            className="md:w-32"
            priority
          />
        </a>
        <ul className="space-y-2 mt-10">
          {courses.map((course) => (
            <li key={course.name}>
              <a
                href={course.path}
                className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg space-x-5 transition"
              >
                <Image
                  src={course.icon}
                  alt={`${course.name} icon`}
                  height={24}
                  width={24}
                  className="mr-2"
                />
                <span>{course.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <a
          href="/"
          className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg space-x-5 transition"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary rotate-180 mr-2"
          >
            <path
              d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM20.55 16.05L16.05 20.55C15.45 21.15 14.55 21.15 13.95 20.55C13.35 19.95 13.35 19.05 13.95 18.45L15.9 16.5H10.5C9.6 16.5 9 15.9 9 15C9 14.1 9.6 13.5 10.5 13.5H15.9L13.95 11.55C13.35 10.95 13.35 10.05 13.95 9.45C14.55 8.85 15.45 8.85 16.05 9.45L20.55 13.95C21.15 14.55 21.15 15.45 20.55 16.05Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-white text-xl">Home</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar3;
