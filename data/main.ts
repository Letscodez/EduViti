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

type ResourceType = {
  title: string;
  description: string;
  icon: StaticImageData | any;
};
const resources: ResourceType[] = [
  {
    title: "Notes",
    description: "Iconic notes, easy to understand and download",
    icon: concise_svg,
  },
  {
    title: "Question Banks",
    description:
      "Explore Question Banks packed with curated questions across all key subjects.",
    icon: qbank_svg,
  },
  {
    title: "PYQ's",
    description:
      "Get access to free CBSE Previous Year Question Papers (PYQs) right here!",
    icon: maps_svg,
  },
  {
    title: "Sample Paper",
    description: "CBSE released sample paper, solved by experts",
    icon: openbook_svg,
  },
  {
    title: "Books & Solutions",
    description:
      "All books are available like RD Sharma, RS Aggarwal, HC Verma, etc. ",
    icon: bookdown_svg,
  },
  {
    title: "Preferred Video Lectures",
    description:
      "Dedicated Preferred Video Lectures on specific Chapter & Topics.",
    icon: book_svg,
  },
];
// Navigation links array
const navLinks = [
  {
    label: "Study Resources",
    sublinks: [
      { label: "Grade 9 Materials", path: "/StudyResources/Grade-9" },
      { label: "Grade 10 Materials", path: "/StudyResources/Grade-10" },
      { label: "Grade 11 Materials", path: "/StudyResources/Grade-11" },
      { label: "Grade 12 Materials", path: "/StudyResources/Grade-12" },
    ],
  },
  {
    label: "Recommended Books",
    sublinks: [
      {
        label: "Conceptual & Theory Books",
        path: "/RecommendedBooks/conceptual&theory-books",
      },
      { label: "Reference Books", path: "/RecommendedBooks/reference-books" },
      { label: "Sample Papers", path: "/RecommendedBooks/sample-papers" },
      {
        label: "Previous Year Questions",
        path: "/RecommendedBooks/previous-year-questions",
      },
    ],
  },
  {
    label: "Free Online Courses",
    sublinks: [
      { label: "JEE Preparation", path: "/FreeOnlineCourses/JEE-preparation" },
      {
        label: "NEET Preparation",
        path: "/FreeOnlineCourses/NEET-preparation",
      },
      { label: "CBSE Courses", path: "/FreeOnlineCourses/CBSE-courses" },
      { label: "ICSE Courses", path: "/FreeOnlineCourses/ICSE-courses" },
      {
        label: "State Board Courses",
        path: "/FreeOnlineCourses/state-board-courses",
      },
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
    title: "Free Interesting Books",
    description:
      "Engage with curated books that simplify complex concepts and enhance your understanding.",
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
    title: "Focused Learning Content",
    description:
      "Stay on track with a streamlined available content designed for academic excellence.",
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
    title: "Question Banks",
    description:
      "Explore a wide array of questions to master each subject efficiently.",
  },
  {
    icon: lectures_svg,
    title: "Free Video Lectures",
    description:
      "Watch selected video content to clarify challenging topics in an engaging and accessible format.",
  },
  {
    icon: concise_svg,
    title: "Quick One-Paged Notes",
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
    question: "How can I contribute to StudySite?",
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
  { name: "Maths", path: "/StudyResources/Grade-9/maths", icon: rocket },
  {
    name: "Physics",
    path: "/StudyResources/Grade-9/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/StudyResources/Grade-9/chemistry",
    icon: maps_svg,
  },
  { name: "Biology", path: "/StudyResources/Grade-9/biology", icon: qbank_svg },
];
const links2: LinkType[] = [
  { name: "Maths", path: "/StudyResources/Grade-10/maths", icon: rocket },
  {
    name: "Physics",
    path: "/StudyResources/Grade-10/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/StudyResources/Grade-10/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/StudyResources/Grade-10/biology",
    icon: qbank_svg,
  },
];
const links3: LinkType[] = [
  { name: "Maths", path: "/StudyResources/Grade-11/maths", icon: rocket },
  {
    name: "Physics",
    path: "/StudyResources/Grade-11/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/StudyResources/Grade-11/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/StudyResources/Grade-11/biology",
    icon: qbank_svg,
  },
];
const links4: LinkType[] = [
  { name: "Maths", path: "/StudyResources/Grade-12/maths", icon: rocket },
  {
    name: "Physics",
    path: "/StudyResources/Grade-12/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/StudyResources/Grade-12/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/StudyResources/Grade-12/biology",
    icon: qbank_svg,
  },
];

const books: LinkType[] = [
  {
    name: "Maths",
    path: "/RecommendedBooks/conceptual&theory-books/maths",
    icon: rocket,
  },
  {
    name: "Physics",
    path: "/RecommendedBooks/conceptual&theory-books/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/RecommendedBooks/conceptual&theory-books/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/RecommendedBooks/conceptual&theory-books/biology",
    icon: qbank_svg,
  },
];
const books2: LinkType[] = [
  {
    name: "Maths",
    path: "/RecommendedBooks/reference-books/maths",
    icon: rocket,
  },
  {
    name: "Physics",
    path: "/RecommendedBooks/reference-books/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/RecommendedBooks/reference-books/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/RecommendedBooks/reference-books/biology",
    icon: qbank_svg,
  },
];
const books3: LinkType[] = [
  {
    name: "Maths",
    path: "/RecommendedBooks/sample-papers/maths",
    icon: rocket,
  },
  {
    name: "Physics",
    path: "/RecommendedBooks/sample-papers/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/RecommendedBooks/sample-papers/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/RecommendedBooks/sample-papers/biology",
    icon: qbank_svg,
  },
];
const books4: LinkType[] = [
  {
    name: "Maths",
    path: "/RecommendedBooks/previous-year-questions/maths",
    icon: rocket,
  },
  {
    name: "Physics",
    path: "/RecommendedBooks/previous-year-questions/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/RecommendedBooks/previous-year-questions/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/RecommendedBooks/previous-year-questions/biology",
    icon: qbank_svg,
  },
];
const courses: LinkType[] = [
  { name: "Maths", path: "/FreeOnlineCourses/JEE-preparation", icon: rocket },
  {
    name: "Physics",
    path: "/FreeOnlineCourses/JEE-preparation",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/FreeOnlineCourses/JEE-preparation",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/FreeOnlineCourses/JEE-preparation",
    icon: qbank_svg,
  },
];
const courses2: LinkType[] = [
  { name: "Maths", path: "/FreeOnlineCourses/NEET-preparation", icon: rocket },
  {
    name: "Physics",
    path: "/FreeOnlineCourses/NEET-preparation",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/FreeOnlineCourses/NEET-preparation",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/FreeOnlineCourses/NEET-preparation",
    icon: qbank_svg,
  },
];
const courses3: LinkType[] = [
  { name: "Maths", path: "/FreeOnlineCourses/CBSE-courses", icon: rocket },
  {
    name: "Physics",
    path: "/FreeOnlineCourses/CBSE-courses",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/FreeOnlineCourses/CBSE-courses",
    icon: maps_svg,
  },
  { name: "Biology", path: "/FreeOnlineCourses/CBSE-courses", icon: qbank_svg },
];
const courses4: LinkType[] = [
  { name: "Maths", path: "/FreeOnlineCourses/ICSE-courses", icon: rocket },
  {
    name: "Physics",
    path: "/FreeOnlineCourses/ICSE-courses",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/FreeOnlineCourses/ICSE-courses",
    icon: maps_svg,
  },
  { name: "Biology", path: "/FreeOnlineCourses/ICSE-courses", icon: qbank_svg },
];
const courses5: LinkType[] = [
  {
    name: "Maths",
    path: "/FreeOnlineCourses/state-board-courses",
    icon: rocket,
  },
  {
    name: "Physics",
    path: "/FreeOnlineCourses/state-board-courses",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/FreeOnlineCourses/state-board-courses",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/FreeOnlineCourses/state-board-courses",
    icon: qbank_svg,
  },
];

const educators = raw_educators.slice().sort(() => Math.random() - 0.5);
export {
  navLinks,
  cardData,
  capabilities,
  benefitsData,
  educators,
  FAQs,
  links,
  books,
  resources,
  courses,
  links2,
  links3,
  links4,
};
