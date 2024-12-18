import React from "react";
import Image from "next/image";
import { vector_svg } from "@/images/main";
type FooterProps = {
  isLearning?: boolean;
};

const Footer: React.FC<FooterProps> = ({ isLearning }) => {
  return (
    <footer
      className={` ${isLearning ? "bg-none" : "bg-[#353535]"} text-white  min-h-auto`}
    >
      {/* <section className="bg-gray-900 py-16 text-center"> */}
      <div
        className={`${isLearning ? "bg-white/5" : "bg-white -mt-40"} max-w-screen border-b border-primary/50 h-96`}
      ></div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333] rounded-3xl p-10 text-white max-w-7xl mx-auto border-solid border-[1px] border-[#06D6A0] -mt-44 place-items-center h-96 ">
          <h2 className="font-bold mb-6 max-w-lg text-center text-4xl sm:text-6xl mt-4 xs:text-96">
            Script your future with EduViti!
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-60 text-center">
            Take the advantages of ours to improve yourself !
          </p>
          <a
            href="/StartLearning"
            className="bg-[#06D6A0] text-black font-semibold py-3 px-8 rounded-lg hover:opacity-80 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <Image src={vector_svg} alt="img" width={30} height={30} />
          </a>
        </div>
      </div>
      {/* </section> */}
      <div className="container mx-auto flex flex-row justify-between items-center md:px-32 px-6 mt-32">
        {/* Left Section (Logo and Description) */}
        <div className="sm:w-auto w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-primary font-mono">EduViti</h2>
          <p className="mt-2 max-w-xs">
            EduViti – All in One Online study platform.
          </p>
        </div>

        {/* Right Section (Contact Info) */}
        <div className="flex flex-col items-center md:items-end text-right">
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a href="mailto:info@learnix.com" className="hover:text-white">
                EduViti@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/EduViti_official"
                className="hover:text-white"
              >
                Instagram - @EduViti_official
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-teal-400"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 6.081 4.388 11.11 10.125 12.1v-8.51H7.078v-3.59h3.047V9.797c0-3.007 1.792-4.657 4.533-4.657 1.312 0 2.684.236 2.684.236v2.953h-1.513c-1.492 0-1.957.926-1.957 1.876v2.24h3.328l-.532 3.59h-2.796v8.51C19.612 23.407 24 18.379 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-teal-400"
                aria-label="Connect on LinkedIn"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.77 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.23 0 22.23 0zM7.07 20.27H3.34V9.03h3.73v11.24zm-1.87-12.8C4.12 7.47 3.44 6.8 3.44 6c0-.79.68-1.47 1.51-1.47.83 0 1.51.68 1.51 1.47s-.68 1.47-1.51 1.47zm15.82 12.8h-3.73v-5.95c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.55-2.28 3.14v6.05h-3.73V9.03h3.58v1.53h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.75v6.9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <hr className="w-[83%] mx-auto mt-8 opacity-40" />
      <div className="text-center text-sm text-gray-400 hover:text-teal-400 mt-8">
        Copyright © 2024 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
