import React from "react";
import { books, courses_thumbnail, school } from "@/images/main";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
import Btn from "../components/btn";

const showList = [
  {
    label: "Notes, Question Banks, Video Lectures, and More! Get Started Now!",
    path: "/StudyResources",
    image: school,
  },
  {
    label: "Looking for Free Quality Books? EduViti is the Place!",
    path: "/books",
    image: books,
  },
  {
    label: "Looking out for Free Courses? we have got you covered!",
    path: "/FreeOnlineCourses",
    image: courses_thumbnail,
  },
];

const ShowListComponent = () => {
  return (
    <section id="discover">
      <LampContainer>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          Welcome to <span className="text-primary">EduViti!</span>
        </h1>
        <p className="text-lg text-gray-200 text-center">
          Explore our categories to find resources tailored for your learning
          journey.
        </p>
      </LampContainer>
      <div className="grid gap-6 px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showList.map((item) => (
          <div
            key={item.label}
            className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white/10 hover:shadow-xl border border-primary/40 max-w-[400px] mx-auto"
          >
            {/* Image Container with Hover Effects */}
            <div className="w-full aspect-w-16 aspect-h-10 rounded-t-2xl overflow-hidden relative h-40">
              <Image
                src={item.image}
                alt={item.label}
                className="group-hover:scale-95 group-hover:rounded-xl transform object-cover transition duration-200"
                width={640}
                height={427}
                layout="intrinsic"
              />
            </div>

            {/* Text Content */}
            <div className="p-4 pb-16">
              <h2 className="font-bold text-lg text-white my-4">
                {item.label}
              </h2>
            </div>

            {/* "FREE" Tag and Button - Stick to Bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-row justify-between items-center">
              <h3 className="text-primary text-xs font-black">FREE</h3>
              <Btn
                displayText="Visit Now"
                url={item.path}
                aria-label={`Visit ${item.label}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowListComponent;
