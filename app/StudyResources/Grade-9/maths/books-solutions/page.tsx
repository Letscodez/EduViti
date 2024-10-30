import React from 'react';
import { maths_chapters } from '@/data/classes/9';
import ChapterCard from '@/app/components/chapters';

const Grade9MathsBooks = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Grade 9 Maths Books Solutions</h1>
      <div className="flex flex-wrap -mx-3">
        {maths_chapters.map((chapter) => (
          <div key={chapter.name} className="w-1/2 px-3 mb-5">
            <ChapterCard
              title={chapter.name}
              url={chapter.path}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Grade9MathsBooks;
