'use client'
import React from 'react';
import { chemistry } from '@/data/classes/9';
import ChapterCard from '@/app/components/chapters';
import BackButton from '@/app/components/backbtn';

const Grade9ChemistryNotes = () => {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-white text-center mt-6">Grade 9 <span className="text-primary">Chemistry</span> Notes</h1>
      <div className="flex flex-wrap mt-14 -mx-3">
        {chemistry.notes.map((chapter) => (
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

export default Grade9ChemistryNotes;
