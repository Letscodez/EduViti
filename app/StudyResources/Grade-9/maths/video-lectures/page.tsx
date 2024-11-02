
import BackButton from '@/app/components/backbtn';
import React from 'react';

const videoLectures = [
  { id: 1, title: 'Introduction to Algebra', description: 'Learn the basics of algebra, including variables, expressions, and equations.' },
  { id: 2, title: 'Understanding Linear Equations', description: 'Explore linear equations and their solutions with practical examples.' },
  { id: 3, title: 'Polynomials Explained', description: 'Dive into the world of polynomials, terms, and their applications.' },
  { id: 4, title: 'Coordinate Geometry Basics', description: 'Understand the fundamentals of coordinate geometry and plotting points on a graph.' },
  { id: 5, title: 'Introduction to Triangles', description: 'A complete guide to triangles, their properties, and types.' },
  { id: 6, title: 'Quadrilaterals and Their Properties', description: 'Study quadrilaterals, their angles, and properties.' },
];

const Grade9MathsLectures = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <BackButton/>
      <h1 className="text-3xl font-bold text-center mb-6">Grade 9 <span className='text-primary'>Mathematics</span> - Video Lectures</h1>
      <p className="text-center mb-10">Access curated video lectures specifically designed for Grade 9 Mathematics to build a strong foundation in essential topics.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLectures.map((lecture) => (
          <div key={lecture.id} className="bg-[#5a776b]/20 p-4 rounded-lg hover:scale-105 shadow-lg hover:shadow-2xl transition duration-300">
            <div className="bg-white/10 h-40 rounded-lg mb-4">
              <img src={`/videos/grade9-maths-${lecture.id}.jpg`} alt={`${lecture.title} thumbnail`} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h2 className="text-xl font-semibold text-primary mb-2">{lecture.title}</h2>
            <p className="text-gray-300">{lecture.description}</p>
            <button className="mt-4 bg-primary px-4 py-2 rounded-lg text-black hover:opacity-80">Watch Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grade9MathsLectures;
