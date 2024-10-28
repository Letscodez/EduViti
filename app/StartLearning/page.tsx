"use client";

import React from "react";
import StudyMaterials from "../components/studyMaterials";
import Navbar2 from "../components/navbar2";

const StartLearning = () => {
  return (
    <section className="bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333] min-h-screen text-white px-6 md:px-12 py-16">
        <Navbar2/>
      <div className="container max-w-5xl mx-auto mt-12 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Kickstart Your Learning Journey
        </h1>
        <p className="text-lg md:text-xl text-center text-white/80 leading-relaxed mb-8">
          Dive into a world of structured, high-quality study resources
          designed to help you excel. From interactive modules to question banks, 
          we’ve got everything you need to stay ahead.
        </p>

      </div>
      <StudyMaterials/>
    </section>
  );
};

export default StartLearning;
