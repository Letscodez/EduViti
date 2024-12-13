// components/ResourceCard.tsx
import React from "react";
import Image from "next/image";
interface ResourceCardProps {
  title: string;
  description?: string;
  icon: string;
  url?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
  url,
}) => {
  return (
    <a
      href={url}
      className={`p-6 rounded-xl bg-white/15 shadow-xl transition-transform transform hover:scale-105 border border-primary/50 text-center  `}
    >
      <div className="flex justify-center mb-4 ">
        <Image
          src={icon}
          width={16}
          height={16}
          alt={`${title} icon`}
          className="h-12 w-12 "
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white ">{title}</h3>
      <p className="text-gray-300 ">{description}</p>
    </a>
  );
};

export default ResourceCard;
