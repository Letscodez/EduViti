import React from "react";

interface ChapterCardProps {
  title: string;
  url: string; // URL for the download
}

const ChapterCard: React.FC<ChapterCardProps> = ({ title, url }) => {
  return (
    <div className="w-full p-3 bg-white/10 rounded-lg shadow-md border border-primary/30 hover:scale-[1.03] duration-200 cursor-pointer flex items-center justify-between">
      <h3 className="text-lg text-white/90">⁍ {title}</h3>
      <a
        href={url}
        className="inline-block px-4 py-2 text-bg bg-primary rounded-lg hover:bg-primary/80 transition"
        download
      >
        Download
      </a>
    </div>
  );
};

export default ChapterCard;
