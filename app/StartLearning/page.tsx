import React from "react";
import StudyMaterials from "../components/studyMaterials";
import Navbar from "../components/navbar";
import SearchPage from "../sections/searchpage";
import Footer from "../sections/Footer";
import Navigate from "../sections/navigate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Learning",
  description:
    "Kickstart your learning journey with EduViti. Dive into a world of structured, high-quality study resources designed to help you excel. From interactive modules to question banks, we've got everything you need to stay ahead.",
};

const StartLearning = () => {
  return (
    <main>
      <SearchPage />
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-current text-white/5"
            d="M0,288L40,282.7C80,277,160,267,240,250.7C320,235,400,213,480,197.3C560,181,640,171,720,186.7C800,203,880,245,960,240C1040,235,1120,181,1200,154.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            transform="scale(-1, -1) translate(-1440, -320)"
          ></path>
        </svg>
      </section>
      <Navigate />
      <section
        id="discover"
        className="min-h-screen text-white px-6 md:px-12 py-16"
      >
        <Navbar homeBtn={true} />
        <div className="container max-w-5xl mx-auto mt-12 space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Kickstart Your Learning Journey
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              With <span className="text-primary">EduViti</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-center text-white/80 leading-relaxed mb-8">
            Dive into a world of structured, high-quality study resources
            designed to help you excel. From interactive modules to question
            banks, we&apos;ve got everything you need to stay ahead.
          </p>
        </div>
        <StudyMaterials />
      </section>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-current text-white/5"
            d="M0,288L40,282.7C80,277,160,267,240,250.7C320,235,400,213,480,197.3C560,181,640,171,720,186.7C800,203,880,245,960,240C1040,235,1120,181,1200,154.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
      <Footer isLearning={true} />
    </main>
  );
};

export default StartLearning;
