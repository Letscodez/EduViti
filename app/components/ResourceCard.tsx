// components/ResourceCard.tsx
import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: string; // Path to the icon image
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, bgColor, icon }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md bg-white/10 border-[1px] border-primary/50 text-center`}>
      <div className="flex justify-center mb-4">
        <img src={icon} alt={`${title} icon`} className="h-16 w-16" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ResourceCard;
