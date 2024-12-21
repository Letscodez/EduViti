import React from "react";
import Image from "next/image";

type CourseCardProps = {
  name: string;
  description: string;
  thumbnail: string;
  channel: string;
  path: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  description,
  thumbnail,
  channel,
  path,
}) => {
  return (
    <div className="bg-white/10 border border-primary/30 rounded-md flex flex-col p-4">
      <div className="relative w-full mb-4" style={{ aspectRatio: "16/9" }}>
        <Image
          src={thumbnail}
          alt={`${name} thumbnail`}
          loading="lazy"
          fill
          className="rounded-lg object-cover border border-primary/40"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-gray-300 text-sm mb-4">{channel}</p>

      <a
        href={path}
        className="bg-primary text-bg px-4 py-2 flex items-center justify-center rounded-lg hover:bg-primary/80 transition-all"
        aria-label={`Watch ${name} course`}
      >
        Watch Now
      </a>
    </div>
  );
};

export default CourseCard;
