import React from "react";
import Sidebar1 from "../components/sideBar1";
import ResourceCard from "../components/ResourceCard";

const StudySection: React.FC = () => {
  return (
    <section className="flex bg-bg">
      <Sidebar1 />
      <div className="py-8 ml-72 px-6 bg-bg min-h-screen flex justify-center">
        <h2 className="text-3xl ml-12 font-bold mb-8 text-white">Our Resources</h2>
        <div className="felx flex-col space-y-5">
          <ResourceCard
            title="Notes"
            description="Iconic Padhle notes, easy to understand and download"
            bgColor="bg-green-100"
            icon="/icons/notes-icon.png" // Replace with your icon path
          />
          <ResourceCard
            title="E-Books"
            description="Previous 10 year question papers with solutions"
            bgColor="bg-blue-100"
            icon="/icons/ebooks-icon.png"
          />
          <ResourceCard
            title="One Page Notes"
            description="The entire chapter summed up in one single paper"
            bgColor="bg-green-100"
            icon="/icons/onepage-icon.png"
          />
          <ResourceCard
            title="Sample Paper"
            description="CBSE released sample paper, solved by experts"
            bgColor="bg-blue-100"
            icon="/icons/samplepaper-icon.png"
          />
          <ResourceCard
            title="Cheat Sheets"
            description="Amazing, cool, easy to understand, downloadable"
            bgColor="bg-green-100"
            icon="/icons/cheatsheets-icon.png"
          />
          <ResourceCard
            title="Telegram"
            description="All of the best things available at your fingertips, on your telegram"
            bgColor="bg-blue-100"
            icon="/icons/telegram-icon.png"
          />
        </div>
      </div>
    </section>
  );
};

export default StudySection;
