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
  {
    label: "Study Material",
    sublinks: [
      { label: "Class 9", path: "/study/class-9" },
      { label: "Class 10", path: "/study/class-10" },
      { label: "Class 11", path: "/study/class-11" },
      { label: "Class 12", path: "/study/class-12" },
    ],
  },
  {
    label: "Preferred Books",
    sublinks: [
      { label: "Conceptual & Theory Books", path: "/study/conceptual-theory-books" },
      { label: "Reference Books", path: "/study/reference-books" },
      { label: "Sample Papers", path: "/study/sample-papers" },
      { label: "PYQ Series", path: "/study/previous-year-questions" },
    ],
  },
  {
    label: "Free Courses",
    sublinks: [
      { label: "JEE", path: "/study/jee" },
      { label: "NEET", path: "/study/neet" },
      { label: "CBSE", path: "/study/cbse" },
      { label: "ICSE", path: "/study/icse" },
      { label: "State Boards", path: "/study/state-boards" },
    ],
  },
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
    title: "Explore New Horizons!",
    description: "Study materials for all levels",
  },
  {
    id: 2,
    title: "Unlock Your Potential!",
    description: "Join our learning community",
  },
  {
    id: 3,
    title: "Excel Academically!",
    description: "Curated resources and guides",
  },
  {
    id: 4,
    title: "Interactive Learning Awaits!",
    description: "Concept maps and guides",
  },
  {
    id: 5,
    title: "Start Your Journey!",
    description: "Expert-selected content for you",
  },
  {
    id: 6,
    title: "Sharpen Your Skills!",
    description: "Practice modules available",
  },
  {
    id: 7,
    title: "Learn Anytime!",
    description: "Mobile-friendly resources",
  },
  {
    id: 8,
    title: "Find Success Here!",
    description: "Courses and study guides",
  },
  {
    id: 9,
    title: "Fuel Your Passion!",
    description: "Insights across subjects",
  },
  {
    id: 10,
    title: "Transform Your Studies!",
    description: "Innovative learning tools",
  },
];

const capabilities = [
  {
    id: 1,
    title: "Knowledgeable Books",
  },
  {
    id: 2,
    title: "Handpicked Courses",
  },
  {
    id: 3,
    title: "Comprehensive Study Notes",
  },
  {
    id: 4,
    title: "Extensive Question Banks",
  },
  {
    id: 5,
    title: "Preferred Video Lectures",
  },
  {
    id: 6,
    title: "Downloadable PDF Resources",
  },
  {
    id: 7,
    title: "Engaging Learning Modules ",
  },
  {
    id: 8,
    title: "Efficient Study ",
  },
  {
    id: 9,
    title: "PYQ's",
  },
  {
    id: 10,
    title: "Regular Content Updates",
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
      "Engage with structured modules that simplify complex concepts and enhance your understanding.",
  },
  {
    icon: book_svg,
    title: "Concise Revision Notes",
    description:
      "Quick summaries to help you revise effectively and gain deeper insights into topics.",
  },
  {
    icon: templates_svg,
    title: "Comprehensive Study Materials",
    description:
      "Access essential textbooks, exercises, and practice questions tailored for effective learning.",
  },
  {
    icon: focused_svg,
    title: "Focused Learning Pathways",
    description:
      "Stay on track with a streamlined syllabus designed for academic excellence.",
  },
  {
    icon: support_svg,
    title: "Extensive Support Resources",
    description:
      "Utilize additional study materials to reinforce your understanding and elevate your learning journey.",
  },
  {
    icon: support_svg,
    title: "Visual Concept Maps",
    description:
      "Break down complex topics with easy-to-follow visual aids for better retention.",
  },
  {
    icon: qbank_svg,
    title: "Diverse Question Banks",
    description:
      "Explore a wide array of questions to master each subject efficiently.",
  },
  {
    icon: lectures_svg,
    title: "Curated Video Lectures",
    description:
      "Watch selected video content to clarify challenging topics in an engaging and accessible format.",
  },
  {
    icon: concise_svg,
    title: "Quick Reference Notes",
    description:
      "Utilize short notes summarizing key concepts for fast, efficient revision.",
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

type FAQType = {
  id: number;
  question: string;
  answer: string;
};

const FAQs: FAQType[] = [
  {
    id: 1,
    question: "How can I contribute to Eduvity?",
    answer:
      "We welcome contributions in the form of study materials, video lectures, or offering guidance to students. You can be part of our vision for a better academic future!",
  },
  {
    id: 2,
    question: "What are the perks of being part of the team?",
    answer:
      "Yes, all the study materials on our platform are available for free. You can access them at any time and use them to enhance your learning experience.",
  },
  {
    id: 3,
    question: "Is teaching experience required to join?",
    answer:
      "Yes, you can download the study materials, including notes, question banks, and other resources, for offline use. This way, you can study even when you're not connected to the internet.",
  },
  {
    id: 4,
    question: "Is there any benefit for contributors?",
    answer:
      "Yes, we offer a study planner tool that helps you organize your study schedule, set goals, and track your progress. You can use this tool to stay on track with your studies and manage your time effectively.",
  },
];

type LinkType = {
  name: string;
  path: string;
  icon: StaticImageData | any;
};

const links: LinkType[] = [
  { name: "Modules", path: "/study/modules", icon: rocket },
  { name: "Video Lectures", path: "/study/videos", icon: lectures_svg },
  { name: "Concept Maps", path: "/study/concept-maps", icon: maps_svg },
  { name: "Question Banks", path: "/study/question-banks", icon: qbank_svg },
  { name: "Notes", path: "/study/notes", icon: book_svg },
];

const slidesData = [...raw_slidesData];
const educators = raw_educators.slice().sort(() => Math.random() - 0.5);
export {
  navLinks,
  cardData,
  slidesData,
  capabilities,
  benefitsData,
  educators,
  FAQs,
  links,
};
