import {
  lectures_svg,
  maps_svg,
  qbank_svg,
  rocket,
  rd_maths_9,
  rs_maths_9,
  pearson,
  lakhmir_chem_9,
  hc_phy_9,
  manjit_maths_9,
} from "@/images/main";
import { LinkType } from "./linkType";

export const links: LinkType[] = [
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
export const maths = {
  notes: [
    {
      name: "Real Numbers",
      path: "/StudyResources/Grade-10/maths/real-numbers",
    },
    { name: "Polynomials", path: "/StudyResources/Grade-10/maths/polynomials" },
    {
      name: "Pair of Linear Equations",
      path: "/StudyResources/Grade-10/maths/linear-equations",
    },
    {
      name: "Quadratic Equations",
      path: "/StudyResources/Grade-10/maths/quadratic-equations",
    },
    {
      name: "Arithmetic Progression",
      path: "/StudyResources/Grade-10/maths/arithmetic-progression",
    },
    { name: "Triangles", path: "/StudyResources/Grade-10/maths/triangles" },
    {
      name: "Coordinate Geometry",
      path: "/StudyResources/Grade-10/maths/coordinate-geometry",
    },
    {
      name: "Introduction to Trigonometry",
      path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
    },
    {
      name: "Applications of Trigonometry",
      path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
    },
    { name: "Circles", path: "/StudyResources/Grade-10/maths/circles" },
    {
      name: "Area Related to Circles",
      path: "/StudyResources/Grade-10/maths/area-related-to-circles",
    },
    {
      name: "Surface Areas and Volumes",
      path: "/StudyResources/Grade-10/maths/surface-areas-volumes",
    },
    { name: "Statistics", path: "/StudyResources/Grade-10/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-10/maths/probability" },
  ],

  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/Grade-12/maths/relations-and-functions",
    },
    {
      name: "Session 2023-2024",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2022-2023",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2021-2022",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2020-2021",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
  ],
  question_banks: [
    {
      name: "Real Numbers",
      path: "/StudyResources/Grade-10/maths/real-numbers",
    },
    { name: "Polynomials", path: "/StudyResources/Grade-10/maths/polynomials" },
    {
      name: "Pair of Linear Equations",
      path: "/StudyResources/Grade-10/maths/linear-equations",
    },
    {
      name: "Quadratic Equations",
      path: "/StudyResources/Grade-10/maths/quadratic-equations",
    },
    {
      name: "Arithmetic Progression",
      path: "/StudyResources/Grade-10/maths/arithmetic-progression",
    },
    { name: "Triangles", path: "/StudyResources/Grade-10/maths/triangles" },
    {
      name: "Coordinate Geometry",
      path: "/StudyResources/Grade-10/maths/coordinate-geometry",
    },
    {
      name: "Introduction to Trigonometry",
      path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
    },
    {
      name: "Applications of Trigonometry",
      path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
    },
    { name: "Circles", path: "/StudyResources/Grade-10/maths/circles" },
    {
      name: "Area Related to Circles",
      path: "/StudyResources/Grade-10/maths/area-related-to-circles",
    },
    {
      name: "Surface Areas and Volumes",
      path: "/StudyResources/Grade-10/maths/surface-areas-volumes",
    },
    { name: "Statistics", path: "/StudyResources/Grade-10/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-10/maths/probability" },
  ],
  sample_paper: [
    {
      name: "Real Numbers",
      path: "/StudyResources/Grade-10/maths/real-numbers",
    },
    { name: "Polynomials", path: "/StudyResources/Grade-10/maths/polynomials" },
    {
      name: "Pair of Linear Equations",
      path: "/StudyResources/Grade-10/maths/linear-equations",
    },
    {
      name: "Quadratic Equations",
      path: "/StudyResources/Grade-10/maths/quadratic-equations",
    },
    {
      name: "Arithmetic Progression",
      path: "/StudyResources/Grade-10/maths/arithmetic-progression",
    },
    { name: "Triangles", path: "/StudyResources/Grade-10/maths/triangles" },
    {
      name: "Coordinate Geometry",
      path: "/StudyResources/Grade-10/maths/coordinate-geometry",
    },
    {
      name: "Introduction to Trigonometry",
      path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
    },
    {
      name: "Applications of Trigonometry",
      path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
    },
    { name: "Circles", path: "/StudyResources/Grade-10/maths/circles" },
    {
      name: "Area Related to Circles",
      path: "/StudyResources/Grade-10/maths/area-related-to-circles",
    },
    {
      name: "Surface Areas and Volumes",
      path: "/StudyResources/Grade-10/maths/surface-areas-volumes",
    },
    { name: "Statistics", path: "/StudyResources/Grade-10/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-10/maths/probability" },
  ],
  video_lectures: [
    {
      name: "Real Numbers",
      path: "/StudyResources/Grade-10/maths/real-numbers",
    },
    { name: "Polynomials", path: "/StudyResources/Grade-10/maths/polynomials" },
    {
      name: "Pair of Linear Equations",
      path: "/StudyResources/Grade-10/maths/linear-equations",
    },
    {
      name: "Quadratic Equations",
      path: "/StudyResources/Grade-10/maths/quadratic-equations",
    },
    {
      name: "Arithmetic Progression",
      path: "/StudyResources/Grade-10/maths/arithmetic-progression",
    },
    { name: "Triangles", path: "/StudyResources/Grade-10/maths/triangles" },
    {
      name: "Coordinate Geometry",
      path: "/StudyResources/Grade-10/maths/coordinate-geometry",
    },
    {
      name: "Introduction to Trigonometry",
      path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
    },
    {
      name: "Applications of Trigonometry",
      path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
    },
    { name: "Circles", path: "/StudyResources/Grade-10/maths/circles" },
    {
      name: "Area Related to Circles",
      path: "/StudyResources/Grade-10/maths/area-related-to-circles",
    },
    {
      name: "Surface Areas and Volumes",
      path: "/StudyResources/Grade-10/maths/surface-areas-volumes",
    },
    { name: "Statistics", path: "/StudyResources/Grade-10/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-10/maths/probability" },
  ],
  books: [
    {
      title: "RD Sharma",
      thumbnail: rd_maths_9,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiYh5B5O82gORSf4Fir20tavhvd4E_9LVxg&sk",
    },
    {
      title: "RS Aggarwal",
      thumbnail: rs_maths_9,
      link: "https://example.com/science-book",
    },
    {
      title: "Pearson",
      thumbnail: pearson,
      link: "https://example.com/english-book",
    },
    {
      title: "Manjit Singh",
      thumbnail: manjit_maths_9,
      link: "https://example.com/english-book",
    },
    // Add more books here as needed
  ],
};
export const physics = {
  notes: [
    {
      name: "Light Reflection and Refraction",
      path: "/StudyResources/Grade-9/physics/light-reflection-and-refraction",
    },
    {
      name: "Human Eye and Colourful World",
      path: "/StudyResources/Grade-9/physics/human-eye-and-colourful-world",
    },
    {
      name: "Electricity",
      path: "/StudyResources/Grade-9/physics/electricity",
    },
    {
      name: "Magnetic Effects of Electric Current",
      path: "/StudyResources/Grade-9/physics/magnetic-effects-of-electric-current",
    },
    {
      name: "Sources of Energy",
      path: "/StudyResources/Grade-9/physics/sources-of-energy",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/Grade-12/maths/relations-and-functions",
    },
    {
      name: "Session 2023-2024",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2022-2023",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2021-2022",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2020-2021",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
  ],
  question_banks: [
    {
      name: "Light Reflection and Refraction",
      path: "/StudyResources/Grade-9/physics/light-reflection-and-refraction",
    },
    {
      name: "Human Eye and Colourful World",
      path: "/StudyResources/Grade-9/physics/human-eye-and-colourful-world",
    },
    {
      name: "Electricity",
      path: "/StudyResources/Grade-9/physics/electricity",
    },
    {
      name: "Magnetic Effects of Electric Current",
      path: "/StudyResources/Grade-9/physics/magnetic-effects-of-electric-current",
    },
    {
      name: "Sources of Energy",
      path: "/StudyResources/Grade-9/physics/sources-of-energy",
    },
  ],
  sample_paper: [
    {
      name: "Light Reflection and Refraction",
      path: "/StudyResources/Grade-9/physics/light-reflection-and-refraction",
    },
    {
      name: "Human Eye and Colourful World",
      path: "/StudyResources/Grade-9/physics/human-eye-and-colourful-world",
    },
    {
      name: "Electricity",
      path: "/StudyResources/Grade-9/physics/electricity",
    },
    {
      name: "Magnetic Effects of Electric Current",
      path: "/StudyResources/Grade-9/physics/magnetic-effects-of-electric-current",
    },
    {
      name: "Sources of Energy",
      path: "/StudyResources/Grade-9/physics/sources-of-energy",
    },
  ],
  video_lectures: [
    {
      name: "Light Reflection and Refraction",
      path: "/StudyResources/Grade-9/physics/light-reflection-and-refraction",
    },
    {
      name: "Human Eye and Colourful World",
      path: "/StudyResources/Grade-9/physics/human-eye-and-colourful-world",
    },
    {
      name: "Electricity",
      path: "/StudyResources/Grade-9/physics/electricity",
    },
    {
      name: "Magnetic Effects of Electric Current",
      path: "/StudyResources/Grade-9/physics/magnetic-effects-of-electric-current",
    },
    {
      name: "Sources of Energy",
      path: "/StudyResources/Grade-9/physics/sources-of-energy",
    },
  ],
  books: [
    {
      title: "HC Verma",
      thumbnail: hc_phy_9,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiYh5B5O82gORSf4Fir20tavhvd4E_9LVxg&sk",
    },
    {
      title: "RS Aggarwal",
      thumbnail: rs_maths_9,
      link: "https://example.com/science-book",
    },
    {
      title: "Pearson",
      thumbnail: pearson,
      link: "https://example.com/english-book",
    },
    // Add more books here as needed
  ],
};
export const chemistry = {
  notes: [
    {
      name: "Chemical Reactions and Equations",
      path: "/StudyResources/Grade-10/chemistry/chemical-reactions-and-equations",
    },
    {
      name: "Acids, Bases, and Salts",
      path: "/StudyResources/Grade-10/chemistry/acids-bases-and-salts",
    },
    {
      name: "Metals and Non-Metals",
      path: "/StudyResources/Grade-10/chemistry/metals-and-non-metals",
    },
    {
      name: "Carbon and Its Compounds",
      path: "/StudyResources/Grade-10/chemistry/carbon-and-its-compounds",
    },
    {
      name: "Periodic Classification of Elements",
      path: "/StudyResources/Grade-10/chemistry/periodic-classification-of-elements",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/Grade-12/maths/relations-and-functions",
    },
    {
      name: "Session 2023-2024",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2022-2023",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2021-2022",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2020-2021",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
  ],
  question_banks: [
    {
      name: "Chemical Reactions and Equations",
      path: "/StudyResources/Grade-10/chemistry/chemical-reactions-and-equations",
    },
    {
      name: "Acids, Bases, and Salts",
      path: "/StudyResources/Grade-10/chemistry/acids-bases-and-salts",
    },
    {
      name: "Metals and Non-Metals",
      path: "/StudyResources/Grade-10/chemistry/metals-and-non-metals",
    },
    {
      name: "Carbon and Its Compounds",
      path: "/StudyResources/Grade-10/chemistry/carbon-and-its-compounds",
    },
    {
      name: "Periodic Classification of Elements",
      path: "/StudyResources/Grade-10/chemistry/periodic-classification-of-elements",
    },
  ],
  sample_paper: [
    {
      name: "Chemical Reactions and Equations",
      path: "/StudyResources/Grade-10/chemistry/chemical-reactions-and-equations",
    },
    {
      name: "Acids, Bases, and Salts",
      path: "/StudyResources/Grade-10/chemistry/acids-bases-and-salts",
    },
    {
      name: "Metals and Non-Metals",
      path: "/StudyResources/Grade-10/chemistry/metals-and-non-metals",
    },
    {
      name: "Carbon and Its Compounds",
      path: "/StudyResources/Grade-10/chemistry/carbon-and-its-compounds",
    },
    {
      name: "Periodic Classification of Elements",
      path: "/StudyResources/Grade-10/chemistry/periodic-classification-of-elements",
    },
  ],
  video_lectures: [
    {
      name: "Chemical Reactions and Equations",
      path: "/StudyResources/Grade-10/chemistry/chemical-reactions-and-equations",
    },
    {
      name: "Acids, Bases, and Salts",
      path: "/StudyResources/Grade-10/chemistry/acids-bases-and-salts",
    },
    {
      name: "Metals and Non-Metals",
      path: "/StudyResources/Grade-10/chemistry/metals-and-non-metals",
    },
    {
      name: "Carbon and Its Compounds",
      path: "/StudyResources/Grade-10/chemistry/carbon-and-its-compounds",
    },
    {
      name: "Periodic Classification of Elements",
      path: "/StudyResources/Grade-10/chemistry/periodic-classification-of-elements",
    },
  ],
  books: [
    {
      title: "Lakhmir Singh",
      thumbnail: lakhmir_chem_9,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiYh5B5O82gORSf4Fir20tavhvd4E_9LVxg&sk",
    },
    {
      title: "RS Aggarwal",
      thumbnail: rs_maths_9,
      link: "https://example.com/science-book",
    },
    {
      title: "Pearson",
      thumbnail: pearson,
      link: "https://example.com/english-book",
    },
    // Add more books here as needed
  ],
};
export const biology = {
  notes: [
    {
      name: "Life Processes",
      path: "/StudyResources/Grade-9/biology/life-processes",
    },
    {
      name: "Control and Coordination",
      path: "/StudyResources/Grade-9/biology/control-and-coordination",
    },
    {
      name: "How do Organisms Reproduce?",
      path: "/StudyResources/Grade-9/biology/how-do-organisms-reproduce",
    },
    {
      name: "Heredity and Evolution",
      path: "/StudyResources/Grade-9/biology/heredity-and-evolution",
    },
    {
      name: "Our Environment",
      path: "/StudyResources/Grade-9/biology/our-environment",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/Grade-12/maths/relations-and-functions",
    },
    {
      name: "Session 2023-2024",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2022-2023",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2021-2022",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Session 2020-2021",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
  ],
  question_banks: [
    {
      name: "Life Processes",
      path: "/StudyResources/Grade-9/biology/life-processes",
    },
    {
      name: "Control and Coordination",
      path: "/StudyResources/Grade-9/biology/control-and-coordination",
    },
    {
      name: "How do Organisms Reproduce?",
      path: "/StudyResources/Grade-9/biology/how-do-organisms-reproduce",
    },
    {
      name: "Heredity and Evolution",
      path: "/StudyResources/Grade-9/biology/heredity-and-evolution",
    },
    {
      name: "Our Environment",
      path: "/StudyResources/Grade-9/biology/our-environment",
    },
  ],
  sample_paper: [
    {
      name: "Life Processes",
      path: "/StudyResources/Grade-9/biology/life-processes",
    },
    {
      name: "Control and Coordination",
      path: "/StudyResources/Grade-9/biology/control-and-coordination",
    },
    {
      name: "How do Organisms Reproduce?",
      path: "/StudyResources/Grade-9/biology/how-do-organisms-reproduce",
    },
    {
      name: "Heredity and Evolution",
      path: "/StudyResources/Grade-9/biology/heredity-and-evolution",
    },
    {
      name: "Our Environment",
      path: "/StudyResources/Grade-9/biology/our-environment",
    },
  ],
  video_lectures: [
    {
      name: "Life Processes",
      path: "/StudyResources/Grade-9/biology/life-processes",
    },
    {
      name: "Control and Coordination",
      path: "/StudyResources/Grade-9/biology/control-and-coordination",
    },
    {
      name: "How do Organisms Reproduce?",
      path: "/StudyResources/Grade-9/biology/how-do-organisms-reproduce",
    },
    {
      name: "Heredity and Evolution",
      path: "/StudyResources/Grade-9/biology/heredity-and-evolution",
    },
    {
      name: "Our Environment",
      path: "/StudyResources/Grade-9/biology/our-environment",
    },
  ],

  books: [
    {
      title: "HC Verma",
      thumbnail: rd_maths_9,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiYh5B5O82gORSf4Fir20tavhvd4E_9LVxg&sk",
    },
    {
      title: "RS Aggarwal",
      thumbnail: rs_maths_9,
      link: "https://example.com/science-book",
    },
    {
      title: "Pearson",
      thumbnail: pearson,
      link: "https://example.com/english-book",
    },
    // Add more books here as needed
  ],
};
