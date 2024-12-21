import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-green-500"></div>
        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-red-500"></div>
      </div>
    </div>
  );
};

export default Loading;
