import React from "react";
import { physics } from "@/data/classes/11";
import SetsCard from "@/app/components/sets";
import BackButton from "@/app/components/backbtn";

export default function Grade9MathsQuestionBanks() {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 11 <span className="text-primary">Physics</span> Sample Papers
      </h1>
      <div className="grid gap-6 mt-14">
        {physics.sample_paper.map((chapter) => (
          <SetsCard
            key={chapter.name}
            title={chapter.name}
            sets={chapter.sets}
          />
        ))}
      </div>
    </main>
  );
}
