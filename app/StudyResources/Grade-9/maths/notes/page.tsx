'use client'
import React from 'react';
import { maths_chapters } from '@/data/classes/9';
import ChapterCard from '@/app/components/chapters';
import BackButton from '@/app/components/backbtn';

const Grade9MathsNotes = () => {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6 mt-6 text-white text-center ">Grade 9 Maths Notes</h1>
      <div className="flex flex-wrap mt-14 -mx-3">
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

export default Grade9MathsNotes;
