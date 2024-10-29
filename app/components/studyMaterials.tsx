import React from "react";

const StudyMaterials = () => {
  // Sample data for study materials
  const materials = [
    {
      title: "Math Study Guide",
      description: "Comprehensive notes on calculus and algebra.",
      link: "#",
    },
    {
      title: "Biology Flashcards",
      description: "Interactive flashcards for key biology concepts.",
      link: "#",
    },
    {
      title: "History Timeline",
      description: "A visual timeline of major historical events.",
      link: "#",
    },
    {
      title: "Physics Problem Sets",
      description: "Challenging problems with solutions xyzxyzxyz.",
      link: "#",
    },
    {
      title: "Literature Reading List",
      description: "Must-read books and summaries xyzxyzxyz.",
      link: "#",
    },
    {
      title: "Chemistry Lab Manual",
      description: "Step-by-step guide for chemistry experiments.",
      link: "#",
    },
    // Add more materials as needed
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Study Materials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {/* <div className="max-w-7xl min-w-5xl mx-auto flex flex-wrap justify-center gap-6 pt-3"> */}
        {materials.map((material, index) => (
          <div
            key={index}
            className="bg-white/10 border hover:scale-105 border-[#06D6A0] p-4 rounded-lg shadow-2xl hover:shadow-xl duration-100"
          >
            <h2 className="text-xl font-semibold">{material.title}</h2>
            <p className="mt-2 text-base">{material.description}</p>
            <a
              href={material.link}
              className="mt-4 inline-block px-4 hover:scale-95 py-2 bg-primary text-black rounded-lg hover:opacity-85 transition"
            >
              View Material
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;
