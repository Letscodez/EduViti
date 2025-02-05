import BackButton from "@/app/components/backbtn";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { coming_soon_portrait } from "@/data/comingsoon";

type Book = {
  title: string;
  author: string;
  description: string;
  image: StaticImageData | string;
};

const books: Book[] = [
  {
    title: "Fundamentals of Engineering Physics",
    author: "David Halliday",
    description:
      "A comprehensive guide to the basics of physics for engineering students.",
    image: coming_soon_portrait,
  },
  {
    title: "Engineering Mechanics: Dynamics",
    author: "J.L. Meriam",
    description:
      "An essential resource on the dynamics of physical systems in engineering.",
    image: coming_soon_portrait,
  },
  {
    title: "Physics for Scientists and Engineers",
    author: "Raymond A. Serway",
    description:
      "An in-depth exploration of physics concepts tailored for engineering students.",
    image: coming_soon_portrait,
  },
  // Add more books here as needed
];

const EngineeringPhysicsBooksList: React.FC = () => {
  return (
    <div className="p-6 text-white min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-bold mb-12 mt-8 text-center text-white">
        Recommended Books for{" "}
        <span className="text-primary">Engineering Physics</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-auto gap-8 md:mx-2 xl:mx-28 xl:grid-cols-2 2xl:grid-cols-3">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white/5 border border-primary/50 p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col md:flex-col xl:flex-row items-center lg:mb-0 mb-2"
          >
            <Image
              src={book.image}
              height={200}
              width={200}
              alt={book.title}
              className="h-full rounded-lg object-cover border border-primary/50 my-auto"
            />
            <div className="lg:ml-5 h-full lg:text-start text-center mt-2 space-y-2">
              <h2 className="text-lg text-primary/80">{book.title}</h2>
              <p className="text-sm text-gray-200">{book.description}</p>
              <h3 className="text-md text-gray-300 font-mediu ">
                ~{book.author}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineeringPhysicsBooksList;
