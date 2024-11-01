import Image from 'next/image';

import { maths } from '@/data/classes/9';

export default function MathsBooks() {
  // Sample data structure for book information
  

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font- text-primary mb-8 mt-8 bg-white/10 h-20 md:py-4 md:mx-40 rounded-lg border border-primary/30 ">Grade 9 Maths Extra Books & Solutions</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-16 ">
        {maths.books.map((book) => (
          <a
            
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-primary/30 rounded-lg p-4 text-white w-40 hover:shadow-lg hover:scale-105 transform transition duration-200 hover:text-primary "
          >
            <Image
              src={book.thumbnail}
              alt={book.title}
              className="rounded-md mb-4 h-44"
            />
            <span className="block text-sm font-medium ">{book.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
