"use client";
import Image from "next/image";

import { chemistry } from "@/data/classes/12";
import BackButton from "@/app/components/backbtn";

export default function Grade12ChemistryBooks() {
  // Sample data structure for book information

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-8 mt-8 ">
        Grade 12 <span className="text-primary">Chemistry</span> Extra Books &
        Solutions
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-14 ">
        {chemistry.books.map((book) => (
          <a
            key={book.title}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-primary/30 rounded-lg p-4 text-white w-40 hover:shadow-lg hover:scale-105 transform transition duration-200"
          >
            <Image
              src={book.thumbnail}
              alt={book.title}
              className="rounded-md mb-4 h-44"
            />
            <span className="block text-sm font-medium">{book.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
