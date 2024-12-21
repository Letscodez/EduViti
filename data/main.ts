import { lectures_svg, maps_svg, qbank_svg, rocket } from "@/images/main";
import { LinkType } from "./classes/linkType";
// ok
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
const coursesjee: LinkType[] = [
  { name: "One-Shot Courses", path: "one-shot", icon: rocket },
  {
    name: "Revision Series",
    path: "revision",
    icon: lectures_svg,
  },
  {
    name: "Mock Test Series",
    path: "test",
    icon: maps_svg,
  },
  {
    name: "Problem-Solving Workshops",
    path: "workshops",
    icon: qbank_svg,
  },
];
const coursesneet: LinkType[] = [
  { name: "One-Shot Courses", path: "one-shot", icon: rocket },
  {
    name: "Revision Series",
    path: "revision",
    icon: lectures_svg,
  },
  {
    name: "Mock Test Series",
    path: "test",
    icon: maps_svg,
  },
  {
    name: "Problem-Solving Workshops",
    path: "workshops",
    icon: qbank_svg,
  },
];
const coursescbse: LinkType[] = [
  { name: "Class 9", path: "/FreeOnlineCourses/CBSE/class-9", icon: rocket },
  {
    name: "Class 10",
    path: "/FreeOnlineCourses/CBSE/class-10",
    icon: lectures_svg,
  },
  {
    name: "Class 11",
    path: "/FreeOnlineCourses/CBSE/class-11",
    icon: maps_svg,
  },
  {
    name: "Class 12",
    path: "/FreeOnlineCourses/CBSE/class-12",
    icon: qbank_svg,
  },
];
const coursescomputerscience: LinkType[] = [
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

export { books, coursesjee, coursesneet, coursescbse, coursescomputerscience };
