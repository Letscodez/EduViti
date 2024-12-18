"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

// Define the type for the testimonial data
type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string | StaticImageData;
};

// Define the component props type
type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
};

// AnimatedTestimonials component
export const AnimatedTestimonials = ({
  testimonials,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);
  const [rotateY, setRotateY] = useState<number>(0); // Default to a stable number

  // Handle next testimonial
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // Handle previous testimonial
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Check if the testimonial is the active one
  const isActive = (index: number) => {
    return index === active;
  };

  // Update random rotateY only on the client-side
  useEffect(() => {
    setRotateY(Math.floor(Math.random() * 21) - 10);
  }, []); // Empty dependency array ensures it only runs on mount

  return (
    <div className="max-w-full md:max-w-5xl mx-auto antialiased px-4 md:px-8 lg:px-12 py-20 border rounded-3xl border-primary/40 bg-white/10">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <div className="relative size-64 sm:size-80 lg:scale-110 mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotateY, // Use state value for stable rotation
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateY,
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotateY,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col py-4 md:py-8  md:text-start text-center justify-between">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <p className="text-xl md:text-2xl font-bold text-primary">
              {testimonials[active].name}
            </p>
            <p className="text-sm md:text-base text-white dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base md:text-lg text-gray-200 mt-4 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6 md:pt-8 md:mx-0 mx-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
