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
    title: "Data Science for Business",
    author: "Foster Provost and Tom Fawcett",
    description:
      "An essential introduction to data science, focusing on business applications and decision-making.",
    image: coming_soon_portrait,
  },
  {
    title: "Python for Data Analysis",
    author: "Wes McKinney",
    description:
      "A practical guide to data analysis with Python, focusing on data wrangling, manipulation, and visualization.",
    image: coming_soon_portrait,
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
    description:
      "A comprehensive book on deep learning concepts, techniques, and applications.",
    image: coming_soon_portrait,
  },
  // Add more books here as needed
];

const DataScienceBooksList: React.FC = () => {
  return (
    <div className="p-6 text-white min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-bold mb-12 mt-8 text-center text-white">
        Recommended Books for <span className="text-primary">Data Science</span>
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

export default DataScienceBooksList;
