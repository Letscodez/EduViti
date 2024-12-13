import { pen, reload, rocket } from "@/images/main";
import { StaticImageData } from "next/image";

interface CardDataType {
  id: number;
  image: StaticImageData; // Using StaticImageData for Next.js Image optimization
  title: string;
  description: string;
}

// Card data array
export const cardData: CardDataType[] = [
  {
    id: 1,
    image: rocket, // Use the imported image
    title: "Curated Study Resources",
    description:
      "Access a variety of well-organized materials tailored for school and college students.",
  },
  {
    id: 2,
    image: pen, // Use the imported image
    title: "Comprehensive PDF Library",
    description:
      "Instant access to downloadable textbooks, study guides, and exam prep resources.",
  },
  {
    id: 3,
    image: reload, // Use the imported image
    title: "Free Available Courses",
    description:
      "These courses are handpicked, covering essential topics in areas like science and mathematics, all available at no cost.",
  },
];
