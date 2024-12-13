import React from "react";
import { maths } from "@/data/classes/10";
import SetsCard from "@/app/components/sets";
import BackButton from "@/app/components/backbtn";

export default function Grade10MathsSamplePapers() {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 10 <span className="text-primary">Maths</span> Sample Papers
      </h1>
      <div className="grid gap-6 mt-14">
        {maths.sample_paper.map((chapter) => (
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
