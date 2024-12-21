"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

type SetsCardProps = {
  title: string;
  sets: { name: string; path: string }[];
};
const SetsCard: React.FC<SetsCardProps> = ({ title, sets }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="bg-[#5a776b]/20  border border-primary/30  p-4 rounded-lg shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2 className="text-xl font-medium text-white flex items-center justify-between">
        ⁍ {title}{" "}
        <ChevronDownIcon
          className={`duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </h2>
      {isOpen && (
        <ul className="space-y-2 mt-4 duration-200">
          {sets.map((set, index) => (
            <a
              target="_blank"
              href={
                set.path !== "xyz"
                  ? `https://drive.google.com/file/d/${set.path}/view?usp=drive_link`
                  : `https://eduviti.me/not-found`
              }
              key={index}
              className="flex justify-between items-center bg-white/10 border hover:scale-[1.01] duration-150 border-primary/30 p-2 rounded-md"
            >
              <h3 className="text-gray-300 ml-2 hover:scale-105 duration-150 hover:underline">
                ⁍ {set.name}
              </h3>
              <div
                onClick={
                  set.path !== "xyz"
                    ? () =>
                        (window.location.href = `https://drive.google.com/uc?export=download&id=${set.path}`)
                    : () =>
                        (window.location.href = `https://eduviti.me/not-found`)
                }
                className="items-center gap-2 justify-center flex flex-row px-4 py-2 text-bg hover:scale-105 duration-150 bg-primary rounded-lg hover:bg-primary/80 transition"
              >
                Download
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 30 30"
                  className="fill-current text-bg"
                >
                  <path d="M15,3C8.3798828,3,3,8.3798828,3,14.9897461C3,21.6098633,8.3798828,27,15,27c6.6098633,0,12-5.3901367,12-12.0102539 C27,8.3798828,21.6098633,3,15,3z M11.8898926,12.7397461c0.3900146-0.3898926,1.0300293-0.3898926,1.4200439,0L14,13.4299316 v-3.75c0-0.5500488,0.4499512-1,1-1c0.5499268,0,1,0.4499512,1,1v3.75l0.6899414-0.6901855 c0.3900146-0.3898926,1.0200195-0.3898926,1.4099121,0c0.3901367,0.3901367,0.3901367,1.0200195,0,1.4101563L15.75,16.5 c-0.10007,0.0375023-0.2827549,0.4153214-0.9500732,0.3198242c-0.2220755-0.0494175-0.3810625-0.1408482-0.5100098-0.2700195 l-2.4000244-2.3999023C11.5,13.7597656,11.5,13.1298828,11.8898926,12.7397461z M19,21.3198242h-8c-0.5500488,0-1-0.4499512-1-1 c0-0.5600586,0.4499512-1,1-1h8c0.5499268,0,1,0.4399414,1,1C20,20.869873,19.5499268,21.3198242,19,21.3198242z"></path>
                </svg>
              </div>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SetsCard;
