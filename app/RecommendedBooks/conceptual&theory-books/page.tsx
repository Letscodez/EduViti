"use client";
import Image from "next/image";
import BackButton from "@/app/components/backbtn";
import {
  biology,
  chemistry,
  physics,
  maths,
  cs,
} from "@/images/main";

const categories = [
  {
    title: "Biology",
    thumbnail: biology,
    link: "https://amzn.to/3y1VZcL",
  },
  {
    title: "Chemistry",
    thumbnail: chemistry,
    link: "https://amzn.to/3y1VZcL",
  },
  {
    title: "Physics",
    thumbnail: physics,
    link: "https://amzn.to/3y1VZcL",
  },
  {
    title: "Mathematics",
    thumbnail: maths,
    link: "https://amzn.to/3y1VZcL",
  },
  {
    title: "Computer Science",
    thumbnail: cs,
    link: "https://amzn.to/3y1VZcL",
  },
];

export default function Grade9BiologyBooks() {
  return (
    <div className="p-6 text-center">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl mt-4 font-bold text-white mx-auto max-w-[500px]">
        <span className="text-primary">In-Depth</span> Theoretical & Conceptual{" "}
        <span className="text-primary">Books!</span>
      </h1>
      <h2 className="text-lg mb-6 mt-6 text-gray-200 mx-auto max-w-[600px]">
        Discover essential conceptual and theory books that deepen understanding
        and support academic growth across various subjects.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center mt-16 gap-6">
        {categories.map((book, index) => (
          <a
            key={index}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-primary/30 rounded-lg p-3 text-white w-40 hover:shadow-lg hover:scale-105 transform transition duration-200 hover:text-primary"
          >
            <Image
              src={book.thumbnail}
              alt={book.title}
              width={150}
              height={200}
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
