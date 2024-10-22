import { StaticImageData } from "next/image";
import {
  pen,
  rocket,
  reload,
  book_svg,
  bookdown_svg,
  openbook_svg,
  templates_svg,
  focused_svg,
  support_svg,
  maps_svg,
  concise_svg,
  qbank_svg,
  lectures_svg,
  sachinsir,
  rajwantsir,
  mohitsir,
  khansir,
} from "@/images/main"; // Import your images

// Navigation links array
const navLinks = [
  { label: "Modules", url: "/modules" },
  { label: "Notes", url: "/notes" },
  { label: "Question Banks", url: "/question-banks" },
  { label: "Concept Maps", url: "/concept-maps" },
  { label: "Video Lectures", url: "/video-lectures" },
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
// Define an interface for the slide structure
interface Slide {
  id: number;
  title: string;
  description: string;
}

// Use the interface for the slidesData array
const raw_slidesData: Slide[] = [
  {
    id: 1,
    title: "Explore Knowledge Today!",
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
  {
    id: 4,
    title: "Dive into Learning!",
    description: "Discover engaging materials",
  },
  {
    id: 5,
    title: "Your Success Awaits!",
    description: "Start your journey here",
  },
  {
    id: 6,
    title: "Enhance Your Skills!",
    description: "Utilize our resources",
  },
  {
    id: 7,
    title: "Start Learning Now!",
    description: "Kickstart your studies today",
  },
  {
    id: 8,
    title: "Find What Excels!",
    description: "Locate essential resources",
  },
  {
    id: 9,
    title: "Ignite Your Curiosity!",
    description: "Explore and learn more",
  },
  {
    id: 10,
    title: "Transform Your Routine!",
    description: "Revamp your study habits",
  },
];

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
export interface BenefitType {
  icon?: StaticImageData | any;
  title: string;
  description: string;
}
const benefitsData: BenefitType[] = [
  {
    icon: openbook_svg,
    title: "Interactive Learning Modules",
    description:
      "Explore structured modules designed to simplify complex topics and enhance understanding.",
  },
  {
    icon: book_svg,
    title: "Concise Notes",
    description:
      "Quick, to-the-point summaries for effective revision and deeper insights.",
  },
  {
    icon: templates_svg,
    title: "NCERT & Exemplars",
    description:
      "All essential chapters, exercises, and practice questions from NCERT and Exemplar materials.",
  },
  {
    icon: focused_svg,
    title: "Focused Syllabus",
    description:
      "Stay updated with a streamlined syllabus tailored for high performance.",
  },
  {
    icon: support_svg,
    title: "Support Material",
    description:
      "Extra study resources to reinforce your understanding and boost your academic journey.",
  },
  {
    icon: maps_svg,
    title: "Concept Maps",
    description: "Simplify complex topics with easy-to-follow visual aids.",
  },
  {
    icon: qbank_svg,
    title: "Question Banks",
    description: "A broad collection of questions for mastering each subject.",
  },
  {
    icon: lectures_svg,
    title: "Preferred Video Lectures",
    description:
      "Handpicked video content to explain tricky topics in an engaging way.",
  },
  {
    icon: concise_svg,
    title: "Short Notes",
    description:
      "Quick, short notes summarizing key concepts for fast, efficient revision.",
  },
];

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

const educators: EducatorType[] = [...raw_educators].sort(
  () => Math.random() - 0.5
);
const slidesData = [...raw_slidesData].sort(() => Math.random() - 0.5);
// Exporting navLinks and cardData, as well as the type for use in other files
export {
  navLinks,
  cardData,
  slidesData,
  capabilities,
  benefitsData,
  educators,
};
