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
    title: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
    description:
      "A comprehensive guide to the field of algorithms, covering a wide range of topics in computer science.",
    image: coming_soon_portrait,
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose and Keith W. Ross",
    description:
      "An in-depth look at computer networking principles from a layered perspective.",
    image: coming_soon_portrait,
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    description:
      "A practical guide to writing clean, maintainable, and efficient code in software development.",
    image: coming_soon_portrait,
  },
  // Add more books here as needed
];

const ComputerScienceBooksList: React.FC = () => {
  return (
    <div className="p-6 text-white min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-bold mb-12 mt-8 text-center text-white">
        Recommended Books for{" "}
        <span className="text-primary">Computer Science</span>
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

export default ComputerScienceBooksList;
