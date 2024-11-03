import React, { useState } from 'react';
import { maths } from '@/data/classes/9';


const DropdownLectures: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
      <button
        onClick={toggleDropdown}
        className="w-full bg-teal-500 px-4 py-2 text-left font-semibold text-white rounded-lg hover:bg-teal-600"
      >
        {isOpen ? 'Hide Video Lectures' : 'Show Video Lectures'}
      </button>

      {isOpen && (
        <div className="mt-4">
          {maths.video_lectures.map((lecture) => (
            <div key={lecture.id} className="bg-gray-800 p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-600 h-32 rounded-lg mb-4">
                <img src={`/videos/grade9-maths-${lecture.id}.jpg`} alt={`${lecture.title} thumbnail`} className="w-full h-full object-cover rounded-lg" />
              </div>
              <h2 className="text-lg font-semibold">{lecture.title}</h2>
              <p className="text-gray-300 text-sm mb-2">{lecture.description}</p>
              <button className="mt-2 bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600">Watch Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownLectures;
