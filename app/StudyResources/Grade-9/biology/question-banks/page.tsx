import React from "react";
import { biology } from "@/data/classes/9";
import SetsCard from "@/app/components/sets";
import BackButton from "@/app/components/backbtn";

export default function Grade9BiologyQuestionBanks() {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 9 <span className="text-primary">Biology</span> Question Banks
      </h1>
      <div className="grid gap-6 mt-14">
        {biology.question_banks.map((chapter) => (
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
