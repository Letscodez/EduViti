import { khansir, mohitsir, rajwantsir, sachinsir } from "@/images/main";
import { StaticImageData } from "next/image";

export interface EducatorType {
  id: number;
  name: string;
  image?: StaticImageData | any;
  quote: string;
}

const raw_educators = [
  {
    quote:
      "The journey of learning is endless. The more you learn, the more you'll realize how much there is to discover.",
    name: "Sachin Jhakar Sir",
    designation: "Educator",
    src: sachinsir, // Replace with actual image path or URL
  },
  {
    quote:
      "Challenges in learning are inevitable, but with discipline and consistency, no obstacle is too great.",
    name: "Rajwant Singh Sir",
    designation: "Educator",
    src: rajwantsir, // Replace with actual image path or URL
  },
  {
    quote:
      "Don't focus on how much time you are putting in, focus on how well you are understanding the subject.",
    name: "Mohit Tyagi Sir",
    designation: "Educator",
    src: mohitsir, // Replace with actual image path or URL
  },
  {
    quote:
      "To be successful in life it is not important how much you have done but how much you can do",
    name: "Khan Sir",
    designation: "Educator",
    src: khansir, // Replace with actual image path or URL
  },
  // Add more educators if necessary
];
export const educators = raw_educators.slice().sort(() => Math.random() - 0.5);
