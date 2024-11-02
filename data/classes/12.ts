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
export const maths = {
  notes: [
    {
      name: "Relations and Functions",
      path: "/StudyResources/Grade-12/maths/relations-and-functions",
    },
    {
      name: "Inverse Trigonometric Functions",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Matrices",
      path: "/StudyResources/Grade-12/maths/matrices",
    },
    {
      name: "Determinants",
      path: "/StudyResources/Grade-12/maths/determinants",
    },
    {
      name: "Continuity and Differentiability",
      path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
    },
    {
      name: "Applications of Derivatives",
      path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
    },
    { name: "Integrals", path: "/StudyResources/Grade-12/integrals" },
    {
      name: "Application of Integrals",
      path: "/StudyResources/Grade-12/maths/application-of-integrals",
    },
    {
      name: "Differential Equations",
      path: "/StudyResources/Grade-12/maths/differential-equations",
    },
    {
      name: "Vector Algebra",
      path: "/StudyResources/Grade-12/maths/vector-algebra",
    },
    {
      name: "Three Dimensional Geometry",
      path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
    },
    {
      name: "Linear Programming",
      path: "/StudyResources/Grade-12/maths/linear-programming",
    },
    {
      name: "Probability",
      path: "/StudyResources/Grade-12/maths/probability",
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
      name: "Relations and Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/relations-and-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/relations-and-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/relations-and-functions",
        },
      ],
    },
    {
      name: "Inverse Trigonometric Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
        },
      ],
    },
    {
      name: "Matrices",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/maths/matrices" },
        { name: "Set 2", path: "/StudyResources/Grade-12/maths/matrices" },
        { name: "Set 3", path: "/StudyResources/Grade-12/maths/matrices" },
      ],
    },
    {
      name: "Determinants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/maths/determinants" },
        { name: "Set 2", path: "/StudyResources/Grade-12/maths/determinants" },
        { name: "Set 3", path: "/StudyResources/Grade-12/maths/determinants" },
      ],
    },
    {
      name: "Continuity and Differentiability",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
        },
      ],
    },
    {
      name: "Applications of Derivatives",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
        },
      ],
    },
    {
      name: "Integrals",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/integrals" },
        { name: "Set 2", path: "/StudyResources/Grade-12/integrals" },
        { name: "Set 3", path: "/StudyResources/Grade-12/integrals" },
      ],
    },
    {
      name: "Application of Integrals",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/application-of-integrals",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/application-of-integrals",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/application-of-integrals",
        },
      ],
    },
    {
      name: "Differential Equations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/differential-equations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/differential-equations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/differential-equations",
        },
      ],
    },
    {
      name: "Vector Algebra",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/vector-algebra",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/vector-algebra",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/vector-algebra",
        },
      ],
    },
    {
      name: "Three Dimensional Geometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
        },
      ],
    },
    {
      name: "Linear Programming",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/linear-programming",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/linear-programming",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/linear-programming",
        },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/maths/probability" },
        { name: "Set 2", path: "/StudyResources/Grade-12/maths/probability" },
        { name: "Set 3", path: "/StudyResources/Grade-12/maths/probability" },
      ],
    },
  ],

  sample_paper: [
    {
      name: "Relations and Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/relations-and-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/relations-and-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/relations-and-functions",
        },
      ],
    },
    {
      name: "Inverse Trigonometric Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
        },
      ],
    },
    {
      name: "Matrices",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/maths/matrices" },
        { name: "Set 2", path: "/StudyResources/Grade-12/maths/matrices" },
        { name: "Set 3", path: "/StudyResources/Grade-12/maths/matrices" },
      ],
    },
    {
      name: "Determinants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/maths/determinants" },
        { name: "Set 2", path: "/StudyResources/Grade-12/maths/determinants" },
        { name: "Set 3", path: "/StudyResources/Grade-12/maths/determinants" },
      ],
    },
    {
      name: "Continuity and Differentiability",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
        },
      ],
    },
    {
      name: "Applications of Derivatives",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
        },
      ],
    },
    {
      name: "Integrals",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/integrals" },
        { name: "Set 2", path: "/StudyResources/Grade-12/integrals" },
        { name: "Set 3", path: "/StudyResources/Grade-12/integrals" },
      ],
    },
    {
      name: "Application of Integrals",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/application-of-integrals",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/application-of-integrals",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/application-of-integrals",
        },
      ],
    },
    {
      name: "Differential Equations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/differential-equations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/differential-equations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/differential-equations",
        },
      ],
    },
    {
      name: "Vector Algebra",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/vector-algebra",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/vector-algebra",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/vector-algebra",
        },
      ],
    },
    {
      name: "Three Dimensional Geometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
        },
      ],
    },
    {
      name: "Linear Programming",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/maths/linear-programming",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/maths/linear-programming",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/maths/linear-programming",
        },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/maths/probability" },
        { name: "Set 2", path: "/StudyResources/Grade-12/maths/probability" },
        { name: "Set 3", path: "/StudyResources/Grade-12/maths/probability" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Relations and Functions",
      path: "/StudyResources/Grade-12/maths/relations-and-functions",
    },
    {
      name: "Inverse Trigonometric Functions",
      path: "/StudyResources/Grade-12/maths/inverse-trigonometric-functions",
    },
    {
      name: "Matrices",
      path: "/StudyResources/Grade-12/maths/matrices",
    },
    {
      name: "Determinants",
      path: "/StudyResources/Grade-12/maths/determinants",
    },
    {
      name: "Continuity and Differentiability",
      path: "/StudyResources/Grade-12/maths/continuity-and-differentiability",
    },
    {
      name: "Applications of Derivatives",
      path: "/StudyResources/Grade-12/maths/applications-of-derivatives",
    },
    { name: "Integrals", path: "/StudyResources/Grade-12/integrals" },
    {
      name: "Application of Integrals",
      path: "/StudyResources/Grade-12/maths/application-of-integrals",
    },
    {
      name: "Differential Equations",
      path: "/StudyResources/Grade-12/maths/differential-equations",
    },
    {
      name: "Vector Algebra",
      path: "/StudyResources/Grade-12/maths/vector-algebra",
    },
    {
      name: "Three Dimensional Geometry",
      path: "/StudyResources/Grade-12/maths/three-dimensional-geometry",
    },
    {
      name: "Linear Programming",
      path: "/StudyResources/Grade-12/maths/linear-programming",
    },
    {
      name: "Probability",
      path: "/StudyResources/Grade-12/maths/probability",
    },
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
      name: "Electric Charges and Fields",
      path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
    },
    {
      name: "Electrostatic Potential and Capacitance",
      path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
    },
    {
      name: "Current Electricity",
      path: "/StudyResources/Grade-12/physics/current-electricity",
    },
    {
      name: "Moving Charges and Magnetism",
      path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
    },
    {
      name: "Magnetism and Matter",
      path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
    },
    {
      name: "Electromagnetic Induction",
      path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
    },
    {
      name: "Alternating Current",
      path: "/StudyResources/Grade-12/physics/alternating-current",
    },
    {
      name: "Electromagnetic Waves",
      path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
    },
    {
      name: "Wave Optics",
      path: "/StudyResources/Grade-12/physics/wave-optics",
    },
    {
      name: "Dual Nature of Radiation and Matter",
      path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
    },
    { name: "Atoms", path: "/StudyResources/Grade-12/physics/atoms" },
    { name: "Nuclei", path: "/StudyResources/Grade-12/physics/nuclei" },
    {
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
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
      name: "Electric Charges and Fields",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
        },
      ],
    },
    {
      name: "Electrostatic Potential and Capacitance",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
        },
      ],
    },
    {
      name: "Current Electricity",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/current-electricity",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/current-electricity",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/current-electricity",
        },
      ],
    },
    {
      name: "Moving Charges and Magnetism",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
        },
      ],
    },
    {
      name: "Magnetism and Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
        },
      ],
    },
    {
      name: "Electromagnetic Induction",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
        },
      ],
    },
    {
      name: "Alternating Current",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/alternating-current",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/alternating-current",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/alternating-current",
        },
      ],
    },
    {
      name: "Electromagnetic Waves",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
        },
      ],
    },
    {
      name: "Wave Optics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/physics/wave-optics" },
        { name: "Set 2", path: "/StudyResources/Grade-12/physics/wave-optics" },
        { name: "Set 3", path: "/StudyResources/Grade-12/physics/wave-optics" },
      ],
    },
    {
      name: "Dual Nature of Radiation and Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
        },
      ],
    },
    {
      name: "Atoms",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/physics/atoms" },
        { name: "Set 2", path: "/StudyResources/Grade-12/physics/atoms" },
        { name: "Set 3", path: "/StudyResources/Grade-12/physics/atoms" },
      ],
    },
    {
      name: "Nuclei",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/physics/nuclei" },
        { name: "Set 2", path: "/StudyResources/Grade-12/physics/nuclei" },
        { name: "Set 3", path: "/StudyResources/Grade-12/physics/nuclei" },
      ],
    },
    {
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
        },
      ],
    },
  ],

  sample_paper: [
    {
      name: "Electric Charges and Fields",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
        },
      ],
    },
    {
      name: "Electrostatic Potential and Capacitance",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
        },
      ],
    },
    {
      name: "Current Electricity",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/current-electricity",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/current-electricity",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/current-electricity",
        },
      ],
    },
    {
      name: "Moving Charges and Magnetism",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
        },
      ],
    },
    {
      name: "Magnetism and Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
        },
      ],
    },
    {
      name: "Electromagnetic Induction",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
        },
      ],
    },
    {
      name: "Alternating Current",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/alternating-current",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/alternating-current",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/alternating-current",
        },
      ],
    },
    {
      name: "Electromagnetic Waves",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
        },
      ],
    },
    {
      name: "Wave Optics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/physics/wave-optics" },
        { name: "Set 2", path: "/StudyResources/Grade-12/physics/wave-optics" },
        { name: "Set 3", path: "/StudyResources/Grade-12/physics/wave-optics" },
      ],
    },
    {
      name: "Dual Nature of Radiation and Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
        },
      ],
    },
    {
      name: "Atoms",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/physics/atoms" },
        { name: "Set 2", path: "/StudyResources/Grade-12/physics/atoms" },
        { name: "Set 3", path: "/StudyResources/Grade-12/physics/atoms" },
      ],
    },
    {
      name: "Nuclei",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-12/physics/nuclei" },
        { name: "Set 2", path: "/StudyResources/Grade-12/physics/nuclei" },
        { name: "Set 3", path: "/StudyResources/Grade-12/physics/nuclei" },
      ],
    },
    {
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
        },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Electric Charges and Fields",
      path: "/StudyResources/Grade-12/physics/electric-charges-and-fields",
    },
    {
      name: "Electrostatic Potential and Capacitance",
      path: "/StudyResources/Grade-12/physics/electrostatic-potential-and-capacitance",
    },
    {
      name: "Current Electricity",
      path: "/StudyResources/Grade-12/physics/current-electricity",
    },
    {
      name: "Moving Charges and Magnetism",
      path: "/StudyResources/Grade-12/physics/moving-charges-and-magnetism",
    },
    {
      name: "Magnetism and Matter",
      path: "/StudyResources/Grade-12/physics/magnetism-and-matter",
    },
    {
      name: "Electromagnetic Induction",
      path: "/StudyResources/Grade-12/physics/electromagnetic-induction",
    },
    {
      name: "Alternating Current",
      path: "/StudyResources/Grade-12/physics/alternating-current",
    },
    {
      name: "Electromagnetic Waves",
      path: "/StudyResources/Grade-12/physics/electromagnetic-waves",
    },
    {
      name: "Wave Optics",
      path: "/StudyResources/Grade-12/physics/wave-optics",
    },
    {
      name: "Dual Nature of Radiation and Matter",
      path: "/StudyResources/Grade-12/physics/dual-nature-of-radiation-and-matter",
    },
    { name: "Atoms", path: "/StudyResources/Grade-12/physics/atoms" },
    { name: "Nuclei", path: "/StudyResources/Grade-12/physics/nuclei" },
    {
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      path: "/StudyResources/Grade-12/physics/semiconductor-electronics-materials-devices-and-simple-circuits",
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
      name: "Solid State",
      path: "/StudyResources/Grade-12/chemistry/solid-state",
    },
    {
      name: "Solutions",
      path: "/StudyResources/Grade-12/chemistry/solutions",
    },
    {
      name: "Electrochemistry",
      path: "/StudyResources/Grade-12/chemistry/electrochemistry",
    },
    {
      name: "Chemical Kinetics",
      path: "/StudyResources/Grade-12/chemistry/chemical-kinetics",
    },
    {
      name: "Surface Chemistry",
      path: "/StudyResources/Grade-12/chemistry/surface-chemistry",
    },
    {
      name: "p ‐Block Elements",
      path: "/StudyResources/Grade-12/chemistry/p-block-elements",
    },
    {
      name: "d ‐and f ‐Block Elements",
      path: "/StudyResources/Grade-12/chemistry/d-and-f-block-elements",
    },
    {
      name: "Coordination Compounds",
      path: "/StudyResources/Grade-12/chemistry/coordination-compounds",
    },
    {
      name: "Haloalkanes and Haloarenes",
      path: "/StudyResources/Grade-12/chemistry/haloalkanes-and-haloarenes",
    },
    {
      name: "Alcohols, Phenols and Ethers",
      path: "/StudyResources/Grade-12/chemistry/alcohols-phenols-ethers",
    },
    {
      name: "Aldehydes, Ketones and Carboxylic Acids",
      path: "/StudyResources/Grade-12/chemistry/aldehydes-ketons-and-carboxylic-acids",
    },
    {
      name: "Amines",
      path: "/StudyResources/Grade-12/chemistry/amines",
    },
    {
      name: "Biomolecules",
      path: "/StudyResources/Grade-12/chemistry/biomolecules",
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
      name: "Solid State",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Solutions",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Electrochemistry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Chemical Kinetics",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Surface Chemistry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "p ‐Block Elements",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "d ‐and f ‐Block Elements",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Coordination Compounds",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Haloalkanes and Haloarenes",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Alcohols, Phenols and Ethers",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Aldehydes, Ketones and Carboxylic Acids",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Amines",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Biomolecules",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
  ],

  sample_paper: [
    {
      name: "Solid State",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Solutions",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Electrochemistry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Chemical Kinetics",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Surface Chemistry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "p ‐Block Elements",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "d ‐and f ‐Block Elements",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Coordination Compounds",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Haloalkanes and Haloarenes",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Alcohols, Phenols and Ethers",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Aldehydes, Ketones and Carboxylic Acids",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Amines",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Biomolecules",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Solid State",
      path: "/StudyResources/Grade-12/chemistry/solid-state",
    },
    {
      name: "Solutions",
      path: "/StudyResources/Grade-12/chemistry/solutions",
    },
    {
      name: "Electrochemistry",
      path: "/StudyResources/Grade-12/chemistry/electrochemistry",
    },
    {
      name: "Chemical Kinetics",
      path: "/StudyResources/Grade-12/chemistry/chemical-kinetics",
    },
    {
      name: "Surface Chemistry",
      path: "/StudyResources/Grade-12/chemistry/surface-chemistry",
    },
    {
      name: "p ‐Block Elements",
      path: "/StudyResources/Grade-12/chemistry/p-block-elements",
    },
    {
      name: "d ‐and f ‐Block Elements",
      path: "/StudyResources/Grade-12/chemistry/d-and-f-block-elements",
    },
    {
      name: "Coordination Compounds",
      path: "/StudyResources/Grade-12/chemistry/coordination-compounds",
    },
    {
      name: "Haloalkanes and Haloarenes",
      path: "/StudyResources/Grade-12/chemistry/haloalkanes-and-haloarenes",
    },
    {
      name: "Alcohols, Phenols and Ethers",
      path: "/StudyResources/Grade-12/chemistry/alcohols-phenols-ethers",
    },
    {
      name: "Aldehydes, Ketones and Carboxylic Acids",
      path: "/StudyResources/Grade-12/chemistry/aldehydes-ketons-and-carboxylic-acids",
    },
    {
      name: "Amines",
      path: "/StudyResources/Grade-12/chemistry/amines",
    },
    {
      name: "Biomolecules",
      path: "/StudyResources/Grade-12/chemistry/biomolecules",
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
      name: "Reproduction",
      path: "/StudyResources/Grade-12/biology/reproduction",
    },
    {
      name: "Genetics and Evolution",
      path: "/StudyResources/Grade-12/biology/genetics-and-evolution",
    },
    {
      name: "Biology and Human Welfare",
      path: "/StudyResources/Grade-12/biology/biology-and-human-welfare",
    },
    {
      name: "Biotechnology and its Applications",
      path: "/StudyResources/Grade-12/biology/biotechnology-and-its-applications",
    },
    {
      name: "Ecology and Environment",
      path: "/StudyResources/Grade-12/biology/ecology-and-environment",
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
      name: "Reproduction",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
      ],
    },
    {
      name: "Genetics and Evolution",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
      ],
    },
    {
      name: "Biology and Human Welfare",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
      ],
    },
    {
      name: "Biotechnology and its Applications",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
      ],
    },
    {
      name: "Ecology and Environment",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/structure-of-the-atom",
        },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Reproduction",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Genetics and Evolution",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Biology and Human Welfare",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Biotechnology and its Applications",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Ecology and Environment",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Reproduction",
      path: "/StudyResources/Grade-12/biology/reproduction",
    },
    {
      name: "Genetics and Evolution",
      path: "/StudyResources/Grade-12/biology/genetics-and-evolution",
    },
    {
      name: "Biology and Human Welfare",
      path: "/StudyResources/Grade-12/biology/biology-and-human-welfare",
    },
    {
      name: "Biotechnology and its Applications",
      path: "/StudyResources/Grade-12/biology/biotechnology-and-its-applications",
    },
    {
      name: "Ecology and Environment",
      path: "/StudyResources/Grade-12/biology/ecology-and-environment",
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
