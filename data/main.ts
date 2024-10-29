import { StaticImageData } from "next/image";
import { rocket, maps_svg, qbank_svg, lectures_svg } from "@/images/main"; // Import your images

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

export { links, books, courses, links2, links3, links4 };
