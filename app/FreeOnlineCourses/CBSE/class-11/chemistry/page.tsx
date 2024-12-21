import React from "react";
import CourseCard from "@/app/components/course";
import BackButton from "@/app/components/backbtn";
import { chemistry } from "@/data/courses/cbse/11";

const Class9MathsCourses = () => {
  // Sample courses data

  return (
    <div className="p-6">
      <BackButton />{" "}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
        Class 11 <span className="text-primary">Chemistry Courses</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chemistry.map((course, index) => (
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
  );
};

export default Class9MathsCourses;
