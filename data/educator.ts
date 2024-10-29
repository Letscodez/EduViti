import { khansir, mohitsir, rajwantsir, sachinsir } from "@/images/main";
import { StaticImageData } from "next/image";

export interface EducatorType {
  id: number;
  name: string;
  image?: StaticImageData | any;
  quote: string;
}

const raw_educators: EducatorType[] = [
  {
    id: 1,
    name: "Sachin Jhakar Sir",
    image: sachinsir, // Replace with actual image path
    quote:
      "The journey of learning is endless. The more you learn, the more you'll realize how much there is to discover.",
  },
  {
    id: 2,
    name: "Rajwant Singh Sir",
    image: rajwantsir, // Replace with actual image path
    quote:
      "Challenges in learning are inevitable, but with discipline and consistency, no obstacle is too great.",
  },
  {
    id: 3,
    name: "Mohit Tyagi Sir",
    image: mohitsir, // Replace with actual image path
    quote:
      "Don't focus on how much time you are putting in, focus on how well you are understanding the subject.",
  },
  {
    id: 4,
    name: "Khan Sir",
    image: khansir, // Replace with actual image path
    quote:
      "To be successful in life it is not important how much you have done but how much you can do",
  },
  // Add more educators as needed
];
export const educators = raw_educators.slice().sort(() => Math.random() - 0.5);
