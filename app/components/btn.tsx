import React from "react";
import { Tilt } from "react-tilt";
interface BtnProps {
  className?: string;
  displayText?: string;
  url?: string;
}

const Btn = ({ className, displayText, url }: BtnProps) => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 20, // reduced max tilt rotation (degrees)
    perspective: 500, // increased perspective for a softer tilt
    scale: 1.05, // subtle scaling effect
    speed: 1000, // speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit
    axis: null, // Tilt on both axes
    reset: true, // Reset tilt when the user exits the button
    easing: "cubic-bezier(.25,.8,.25,1)", // Standard smooth easing curve
  };
  return (
    <Tilt options={defaultOptions} href={displayText ? url : "/StartLearning"}>
      <button
        className={`${className} bg-primary text-xs sm:text-sm text-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 duration-200 ease-in-out max-h-12 hover:shadow-xl hover:shadow-primary/30`}
      >
        {displayText ? displayText : "Start Learning"}
      </button>
    </Tilt>
  );
};

export default Btn;
