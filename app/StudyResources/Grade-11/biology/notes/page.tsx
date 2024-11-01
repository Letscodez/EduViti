'use client'
import React from 'react';
import { biology } from '@/data/classes/11';
import ChapterCard from '@/app/components/chapters';
import BackButton from '@/app/components/backbtn';


export default function Grade11BiologyNotes () {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-white text-center mt-6"> Grade 11 <span className='text-primary'>Biology</span> Notes</h1>
      <div className="flex flex-wrap mt-14 -mx-3">
        {biology.notes.map((chapter) => (
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

