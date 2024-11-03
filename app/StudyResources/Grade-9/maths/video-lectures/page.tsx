'use client';
import React from "react";
import { maths } from "@/data/classes/9";
import SetsCard from "@/app/components/sets";
import BackButton from "@/app/components/backbtn";
import DropdownLectures from "@/app/components/droplectures";

export default function Grade9MathsQuestionBanks() {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 9 <span className="text-primary">Maths</span> Video Lectures
      </h1>
      <div className="grid gap-6 mt-14">
        {maths.video_lectures.map((chapter) => (
          <DropdownLectures />
        ))}
      </div>
    </main>
  );
}
