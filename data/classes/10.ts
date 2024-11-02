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
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-10/maths/real-numbers" },
        { name: "Set 2", path: "/StudyResources/Grade-10/maths/real-numbers" },
        { name: "Set 3", path: "/StudyResources/Grade-10/maths/real-numbers" },
      ],
    },
    {
      name: "Polynomials",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-10/maths/polynomials" },
        { name: "Set 2", path: "/StudyResources/Grade-10/maths/polynomials" },
        { name: "Set 3", path: "/StudyResources/Grade-10/maths/polynomials" },
      ],
    },
    {
      name: "Pair of Linear Equations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/pair-of-linear-equations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/pair-of-linear-equations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/pair-of-linear-equations",
        },
      ],
    },
    {
      name: "Quadratic Equations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/quadratic-equations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/quadratic-equations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/quadratic-equations",
        },
      ],
    },
    {
      name: "Arithmetic Progression",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/arithmetic-progression",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/arithmetic-progression",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/arithmetic-progression",
        },
      ],
    },
    {
      name: "Triangles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-10/maths/triangles" },
        { name: "Set 2", path: "/StudyResources/Grade-10/maths/triangles" },
        { name: "Set 3", path: "/StudyResources/Grade-10/maths/triangles" },
      ],
    },
    {
      name: "Coordinate Geometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/coordinate-geometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/coordinate-geometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/coordinate-geometry",
        },
      ],
    },
    {
      name: "Introduction to Trigonometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/introduction-to-trigonometry",
        },
      ],
    },
    {
      name: "Applications of Trigonometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/applications-of-trigonometry",
        },
      ],
    },
    {
      name: "Circles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-10/maths/circles" },
        { name: "Set 2", path: "/StudyResources/Grade-10/maths/circles" },
        { name: "Set 3", path: "/StudyResources/Grade-10/maths/circles" },
      ],
    },
    {
      name: "Area Related to Circles",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/area-related-to-circles",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/area-related-to-circles",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/area-related-to-circles",
        },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-10/maths/surface-areas-and-volumes",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-10/maths/surface-areas-and-volumes",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-10/maths/surface-areas-and-volumes",
        },
      ],
    },
    {
      name: "Statistics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-10/maths/statistics" },
        { name: "Set 2", path: "/StudyResources/Grade-10/maths/statistics" },
        { name: "Set 3", path: "/StudyResources/Grade-10/maths/statistics" },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-10/maths/probability" },
        { name: "Set 2", path: "/StudyResources/Grade-10/maths/probability" },
        { name: "Set 3", path: "/StudyResources/Grade-10/maths/probability" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Real Numbers",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Polynomials",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Pair of Linear Equations",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Quadratic Equations",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Arithmetic Progression",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Triangles",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Coordinate Geometry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Introduction to Trigonometry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Applications of Trigonometry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Circles",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Area Related to Circles",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Statistics",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
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
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Human Eye and Colourful World",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Electricity",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Magnetic Effects of Electric Current",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Sources of Energy",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Light Reflection and Refraction",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Human Eye and Colourful World",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Electricity",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Magnetic Effects of Electric Current",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Sources of Energy",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
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
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Acids, Bases, and Salts",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Metals and Non-Metals",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Carbon and Its Compounds",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Periodic Classification of Elements",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Chemical Reactions and Equations",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Acids, Bases, and Salts",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Metals and Non-Metals",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Carbon and Its Compounds",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Periodic Classification of Elements",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
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
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Control and Coordination",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "How do Organisms Reproduce?",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Heredity and Evolution",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Our Environment",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Life Processes",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Control and Coordination",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "How do Organisms Reproduce?",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Heredity and Evolution",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Our Environment",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
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
}; //
