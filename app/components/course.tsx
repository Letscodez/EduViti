import React from 'react';
import Image from 'next/image';

type CourseCardProps = {
  name: string;
  description: string;
  thumbnail: string;
  channel: string;
  path: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ name, description, thumbnail, channel, path }) => {
  return (
    <div className="bg-white/10 border border-primary/30 rounded-md flex flex-col p-4">
      <div className="relative w-full h-0 pb-[56.25%] mb-4">
        <Image
          src={thumbnail}
          alt={`${name} thumbnail`}
          layout="responsive"  // New approach for aspect ratio in Next.js 13
          width={100}           // Set width for the image
          height={56.25}        // Set height for the aspect ratio
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-gray-300 text-sm mb-4">{channel}</p>

      <a
        href={path}
        className="bg-primary text-bg px-4 py-2 flex items-center justify-center rounded-lg hover:bg-primary/80 transition"
      >
        Watch Now
      </a>
    </div>
  );
};

export default CourseCard;
