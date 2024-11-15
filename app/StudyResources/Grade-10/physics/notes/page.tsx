'use client'
import React from 'react';
import { physics } from '@/data/classes/10';
import ChapterCard from '@/app/components/chapters';
import BackButton from '@/app/components/backbtn';

const Grade9PhysicsNotes = () => {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-white text-center mt-6">Grade 10 <span className="text-primary">Physics</span> Notes</h1>
      <div className="flex flex-wrap mt-14 -mx-3">
        {physics.notes.map((chapter) => (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">

            <ChapterCard
              title={chapter.name}
              fileId={chapter.path}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Grade9PhysicsNotes;
