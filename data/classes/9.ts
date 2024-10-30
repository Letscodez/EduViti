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
    { name: "Number Systems", path: "/StudyResources/Grade-9/maths/number-systems" },
    { name: "Polynomials", path: "/StudyResources/Grade-9/maths/polynomials" },
    { name: "Coordinate Geometry", path: "/StudyResources/Grade-9/maths/coordinate-geometry" },
    { name: "Linear Equations in Two Variables", path: "/StudyResources/Grade-9/maths/linear-equations" },
    { name: "Euclid’s Geometry", path: "/StudyResources/Grade-9/maths/euclids-geometry" },
    { name: "Lines and Angles", path: "/StudyResources/Grade-9/maths/lines-and-angles" },
    { name: "Triangles", path: "/StudyResources/Grade-9/maths/triangles" },
    { name: "Quadrilaterals", path: "/StudyResources/Grade-9/maths/quadrilaterals" },
    { name: "Areas of Parallelograms and Triangles", path: "/StudyResources/Grade-9/maths/areas-parallelograms-triangles" },
    { name: "Circles", path: "/StudyResources/Grade-9/maths/circles" },
    { name: "Constructions", path: "/StudyResources/Grade-9/maths/constructions" },
    { name: "Heron’s Formula", path: "/StudyResources/Grade-9/maths/herons-formula" },
    { name: "Surface Areas and Volumes", path: "/StudyResources/Grade-9/maths/surface-areas-volumes" },
    { name: "Statistics", path: "/StudyResources/Grade-9/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-9/maths/probability" }
];