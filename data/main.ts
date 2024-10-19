import { StaticImageData } from "next/image";
import { pen, reload, rocket } from "@/images/main"; // Import your images

// Navigation links array
const navLinks = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
];

// Card data interface for strong typing
interface CardDataType {
  id: number;
  image: StaticImageData; // Using StaticImageData for Next.js Image optimization
  title: string;
  description: string;
}

// Card data array
const cardData: CardDataType[] = [
  {
    id: 1,
    image: rocket, // Use the imported image
    title: "Explore Interactive Modules",
    description:
      "Engage with hands-on learning experiences tailored to your curriculum.",
  },
  {
    id: 2,
    image: pen, // Use the imported image
    title: "Instant PDF Access",
    description:
      "Downloadable materials, including NCERT textbooks and exam preparation resources.",
  },
  {
    id: 3,
    image: reload, // Use the imported image
    title: "Revisions Made Simple",
    description:
      "Concise, one-page notes summarize key concepts for quick exam preparation.",
  },
];
const slidesData = [
  {
    id: 1,
    title: "Explore the World of Knowledge!",
    description: "Explore our question banks",
  },
  {
    id: 2,
    title: "Unlock Your Potential!",
    description: "Join our study community",
  },
  {
    id: 3,
    title: "Achieve Academic Success!",
    description: "Access a wealth of resources",
  },
];
// data/main.ts

// data/main.ts

const capabilities = [
  {
    id: 1,
    title: "Interactive Modules",
  },
  {
    id: 2,
    title: "One-Page Concept Maps",
  },
  {
    id: 3,
    title: "Detailed Notes",
  },
  {
    id: 4,
    title: "Question Banks",
  },
  {
    id: 5,
    title: "Video Lectures",
  },
  {
    id: 6,
    title: "Mock Tests",
  },
  {
    id: 7,
    title: "PDF Resources",
  },
  {
    id: 8,
    title: "Study Planner",
  },
  {
    id: 9,
    title: "Interactive Quizzes",
  },
  {
    id: 10,
    title: "Community Support",
  },
];

// Exporting navLinks and cardData, as well as the type for use in other files
export { navLinks, cardData, slidesData, capabilities };
export type { CardDataType };
