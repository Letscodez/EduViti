import React from "react";
import { educators } from "@/data/educator";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const EducatorCarousel: React.FC = () => {
  return (
    <section className="lg:w-5/6 md:w-11/12 w-full mx-auto text-white lg:p-20 px-4 rounded-lg">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Guiding You to <span className="text-[#06D6A0]">Success!</span>
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Honoring Educators Who Inspire Excellence. Recognizing the dedication of
        teachers who shape the future of academic success.
      </p>

      <AnimatedTestimonials testimonials={educators} />
    </section>
  );
};

export default React.memo(EducatorCarousel);
