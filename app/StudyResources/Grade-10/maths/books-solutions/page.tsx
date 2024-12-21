"use client";
import Image from "next/image";

import { maths } from "@/data/classes/10";
import BackButton from "@/app/components/backbtn";

export default function Grade10MathsBooks() {
  // Sample data structure for book information

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white mx-auto max-w-[450px]">
        Grade 10 <span className="text-primary">Maths</span> Extra Books &
        Solutions
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center mt-16 gap-6">
        {maths.books.map((book) => (
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            key={book.link}
            className="bg-white/10 border border-primary/30 rounded-lg p-3 text-white w-40 hover:shadow-lg hover:scale-105 transform transition duration-200 hover:text-primary"
          >
            <Image
              src={book.thumbnail}
              alt={book.title}
              className="rounded-lg shadow-md shadow-bg mb-3 h-44 hover:scale-105 transform transition duration-200"
            />
            <span className="block text-sm font-medium hover:scale-105 transition duration-200 ">
              {book.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
