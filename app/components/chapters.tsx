import React from "react";

interface ChapterCardProps {
  title: string;
  fileId: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ title, fileId }) => {
  return (
    <div className="w-full p-3 bg-white/10 rounded-lg hover:text-white/50 shadow-md border border-primary/30 hover:scale-[1.03] duration-200  flex items-center justify-between">
      <a
        href={
          fileId !== "xyz"
            ? `https://drive.google.com/file/d/${fileId}`
            : `https://eduviti.me/not-found`
        }
        target="_blank"
        className="text-lg flex flex-row items-center justify-center gap-2  text-white/90"
      >
        ⁍ <span className="hover:underline underline-offset-3">{title}</span>↗
      </a>
      <a
        href={
          fileId !== "xyz"
            ? `https://drive.google.com/uc?export=download&id=${fileId}`
            : `https://eduviti.me/not-found`
        }
        className="items-center gap-2 justify-center flex flex-row px-4 py-2 text-bg bg-primary rounded-lg hover:bg-primary/80 transition no-underline"
        download
      >
        Download
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30px"
          height="30px"
          viewBox="0 0 30 30"
          className="fill-current text-bg"
        >
          <path d="M15,3C8.3798828,3,3,8.3798828,3,14.9897461C3,21.6098633,8.3798828,27,15,27c6.6098633,0,12-5.3901367,12-12.0102539 C27,8.3798828,21.6098633,3,15,3z M11.8898926,12.7397461c0.3900146-0.3898926,1.0300293-0.3898926,1.4200439,0L14,13.4299316 v-3.75c0-0.5500488,0.4499512-1,1-1c0.5499268,0,1,0.4499512,1,1v3.75l0.6899414-0.6901855 c0.3900146-0.3898926,1.0200195-0.3898926,1.4099121,0c0.3901367,0.3901367,0.3901367,1.0200195,0,1.4101563L15.75,16.5 c-0.10007,0.0375023-0.2827549,0.4153214-0.9500732,0.3198242c-0.2220755-0.0494175-0.3810625-0.1408482-0.5100098-0.2700195 l-2.4000244-2.3999023C11.5,13.7597656,11.5,13.1298828,11.8898926,12.7397461z M19,21.3198242h-8c-0.5500488,0-1-0.4499512-1-1 c0-0.5600586,0.4499512-1,1-1h8c0.5499268,0,1,0.4399414,1,1C20,20.869873,19.5499268,21.3198242,19,21.3198242z"></path>
        </svg>
      </a>
    </div>
  );
};

export default ChapterCard;
