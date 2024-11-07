import React from "react";

interface ChapterCardProps {
  title: string;
  fileId: string; // URL for the download
}

const ChapterCard: React.FC<ChapterCardProps> = ({ title, fileId }) => {
  return (
    <div className="w-full p-3 bg-white/10 rounded-lg hover:underline hover:underline-offset-3 hover:text-white/50 shadow-md border border-primary/30 hover:scale-[1.03] duration-200 cursor-pointer flex items-center justify-between">
      <a href={`https://drive.google.com/file/d/${fileId}`} className="text-lg flex flex-row items-center justify-center gap-2  text-white/90" target="blank">
        ⁍ <span className="">{title}</span>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 128 128"
          className="fill-current text-white"
        >
          <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
        </svg>
      </a>
      <a
        href={`https://drive.google.com/uc?export=download&id=${fileId}`}
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
