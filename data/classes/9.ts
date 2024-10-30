import { lectures_svg, maps_svg, qbank_svg, rocket } from "@/images/main";
import { LinkType } from "./linkType";

export const links: LinkType[] = [
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
export const maths_chapters = [
  {
    name: "Number Systems",
    path: "/StudyResources/Grade-9/maths/number-systems",
  },
  { name: "Polynomials", path: "/StudyResources/Grade-9/maths/polynomials" },
  {
    name: "Coordinate Geometry",
    path: "/StudyResources/Grade-9/maths/coordinate-geometry",
  },
  {
    name: "Linear Equations in Two Variables",
    path: "/StudyResources/Grade-9/maths/linear-equations",
  },
  {
    name: "Euclid’s Geometry",
    path: "/StudyResources/Grade-9/maths/euclids-geometry",
  },
  {
    name: "Lines and Angles",
    path: "/StudyResources/Grade-9/maths/lines-and-angles",
  },
  { name: "Triangles", path: "/StudyResources/Grade-9/maths/triangles" },
  {
    name: "Quadrilaterals",
    path: "/StudyResources/Grade-9/maths/quadrilaterals",
  },
  {
    name: "Areas of Parallelograms and Triangles",
    path: "/StudyResources/Grade-9/maths/areas-parallelograms-triangles",
  },
  { name: "Circles", path: "/StudyResources/Grade-9/maths/circles" },
  {
    name: "Constructions",
    path: "/StudyResources/Grade-9/maths/constructions",
  },
  {
    name: "Heron’s Formula",
    path: "/StudyResources/Grade-9/maths/herons-formula",
  },
  {
    name: "Surface Areas and Volumes",
    path: "/StudyResources/Grade-9/maths/surface-areas-volumes",
  },
  { name: "Statistics", path: "/StudyResources/Grade-9/maths/statistics" },
  { name: "Probability", path: "/StudyResources/Grade-9/maths/probability" },
];
export const physics_chapters = [
  { name: "Motion", path: "/StudyResources/Grade-9/physics/motion" },
  {
    name: "Force & Laws of Motion",
    path: "/StudyResources/Grade-9/physics/force-&-laws-of-motion",
  },
  { name: "Gravitation", path: "/StudyResources/Grade-9/physics/gravitation" },
  {
    name: "Work and Energy",
    path: "/StudyResources/Grade-9/physics/work-and-energy",
  },
  { name: "Sound", path: "/StudyResources/Grade-9/physics/sound" },
];
export const chemistry_chapters = [
  {
    name: "Matter in Our Surroundings",
    path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
  },
  {
    name: "Is Matter Around Us Pure ",
    path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
  },
  {
    name: "Atoms and Molecules",
    path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
  },
  {
    name: "Structure of The Atom",
    path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
  },
];
export const biology_chapters = [
  {
    name: "The Fundamental Unit of Life",
    path: "/StudyResources/Grade-9/biology/fundamental-unit-of-life",
  },
  { name: "Tissues", path: "/StudyResources/Grade-9/biology/tissues" },
  {
    name: "Diversity in Living Organisms",
    path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
  },
  {
    name: "Why do We Fall Ill",
    path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
  },
  {
    name: "Natural Resources",
    path: "/StudyResources/Grade-9/biology/natural-resources",
  },
  {
    name: "Improvement in Food Resources",
    path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
  },
];
