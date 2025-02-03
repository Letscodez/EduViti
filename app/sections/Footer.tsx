import React from "react";
import Image from "next/image";
import { vector_svg } from "@/images/main";
import Link from "next/link";
type FooterProps = {
  isLearning?: boolean;
};

const Footer: React.FC<FooterProps> = ({ isLearning }) => {
  return (
    <footer
      className={` ${
        isLearning ? "bg-none" : "bg-[#353535]"
      } text-white  min-h-auto`}
    >
      {/* <section className="bg-gray-900 py-16 text-center"> */}
      <div
        className={`${
          isLearning ? "bg-white/5" : "bg-white -mt-40"
        } max-w-screen border-b border-primary/50 h-96`}
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
            EduViti - All in One Online study platform.
          </p>
        </div>

        {/* Right Section (Contact Info) */}
        <div className="flex flex-col items-center md:items-end text-right">
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a
                href="mailto:info@learnix.com"
                className="hover:text-white"
                aria-label="Email EduViti"
              >
                EduVity.official@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/EduViti_official"
                className="hover:text-white"
                aria-label="Instagram EduViti"
              >
                Instagram - @EduViti_official
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com/matrixdevx"
                target="_blank"
                aria-label="Github"
              >
                <svg
                  height="24"
                  viewBox="0 0 16 16"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </Link>
              <Link
                href="mailto:eduvity.official@gmail.com"
                aria-label="Email EduViti"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current opacity-50 hover:opacity-100"
                  height={24}
                  width={24}
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  ></path>
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  ></polygon>
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <hr className="w-[83%] mx-auto mt-8 opacity-40" />
      <div className="text-center text-sm text-gray-400 hover:text-teal-400 mt-8">
        Copyright &copy; {new Date().getFullYear()} - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
