import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-96 justify-center overflow-hidden w-full z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center z-0">
        {/* Animated light effects */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic blur-3xl from-primary/30 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 right-1/2 transform translate-x-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500/50 text-white blur-3xl [--conic-position:from_290deg_at_center_top]"
        ></motion.div>

        {/* Backdrop and blur effects */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10"></div>

        <motion.div
          initial={{ width: "1rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[5rem] z-30 h-36 w-64 rounded-full bg-gradient-to-br from-primary/50 to-cyan-500/60 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 transform -translate-x-1/2 z-20 h-0.5 top-1 bg-gradient-to-br to-primary from-cyan-500"
        ></motion.div>
      </div>

      {/* Content and children */}
      <div className="absolute z-50 flex flex-col items-center w-full px-5 py-16 text-white">
        {children}
      </div>
    </div>
  );
};
