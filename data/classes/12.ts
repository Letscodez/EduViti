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
      options: [
        {
          path: "/dummy/path/relations-and-functions/opt1",
          thumbnail: "/images/relations_and_functions_thumbnail1.jpg",
          channel: "Math Channel 1",
        },
        {
          path: "/dummy/path/relations-and-functions/opt2",
          thumbnail: "/images/relations_and_functions_thumbnail2.jpg",
          channel: "Math Channel 2",
        },
      ],
    },
    {
      name: "Inverse Trigonometric Functions",
      options: [
        {
          path: "/dummy/path/inverse-trigonometric-functions/opt1",
          thumbnail: "/images/inverse_trigonometric_functions_thumbnail1.jpg",
          channel: "Math Channel 3",
        },
        {
          path: "/dummy/path/inverse-trigonometric-functions/opt2",
          thumbnail: "/images/inverse_trigonometric_functions_thumbnail2.jpg",
          channel: "Math Channel 4",
        },
      ],
    },
    {
      name: "Matrices",
      options: [
        {
          path: "/dummy/path/matrices/opt1",
          thumbnail: "/images/matrices_thumbnail1.jpg",
          channel: "Math Channel 5",
        },
        {
          path: "/dummy/path/matrices/opt2",
          thumbnail: "/images/matrices_thumbnail2.jpg",
          channel: "Math Channel 6",
        },
      ],
    },
    {
      name: "Determinants",
      options: [
        {
          path: "/dummy/path/determinants/opt1",
          thumbnail: "/images/determinants_thumbnail1.jpg",
          channel: "Math Channel 7",
        },
        {
          path: "/dummy/path/determinants/opt2",
          thumbnail: "/images/determinants_thumbnail2.jpg",
          channel: "Math Channel 8",
        },
      ],
    },
    {
      name: "Continuity and Differentiability",
      options: [
        {
          path: "/dummy/path/continuity-and-differentiability/opt1",
          thumbnail: "/images/continuity_and_differentiability_thumbnail1.jpg",
          channel: "Math Channel 9",
        },
        {
          path: "/dummy/path/continuity-and-differentiability/opt2",
          thumbnail: "/images/continuity_and_differentiability_thumbnail2.jpg",
          channel: "Math Channel 10",
        },
      ],
    },
    {
      name: "Applications of Derivatives",
      options: [
        {
          path: "/dummy/path/applications-of-derivatives/opt1",
          thumbnail: "/images/applications_of_derivatives_thumbnail1.jpg",
          channel: "Math Channel 11",
        },
        {
          path: "/dummy/path/applications-of-derivatives/opt2",
          thumbnail: "/images/applications_of_derivatives_thumbnail2.jpg",
          channel: "Math Channel 12",
        },
      ],
    },
    {
      name: "Integrals",
      options: [
        {
          path: "/dummy/path/integrals/opt1",
          thumbnail: "/images/integrals_thumbnail1.jpg",
          channel: "Math Channel 13",
        },
        {
          path: "/dummy/path/integrals/opt2",
          thumbnail: "/images/integrals_thumbnail2.jpg",
          channel: "Math Channel 14",
        },
      ],
    },
    {
      name: "Application of Integrals",
      options: [
        {
          path: "/dummy/path/application-of-integrals/opt1",
          thumbnail: "/images/application_of_integrals_thumbnail1.jpg",
          channel: "Math Channel 15",
        },
        {
          path: "/dummy/path/application-of-integrals/opt2",
          thumbnail: "/images/application_of_integrals_thumbnail2.jpg",
          channel: "Math Channel 16",
        },
      ],
    },
    {
      name: "Differential Equations",
      options: [
        {
          path: "/dummy/path/differential-equations/opt1",
          thumbnail: "/images/differential_equations_thumbnail1.jpg",
          channel: "Math Channel 17",
        },
        {
          path: "/dummy/path/differential-equations/opt2",
          thumbnail: "/images/differential_equations_thumbnail2.jpg",
          channel: "Math Channel 18",
        },
      ],
    },
    {
      name: "Vector Algebra",
      options: [
        {
          path: "/dummy/path/vector-algebra/opt1",
          thumbnail: "/images/vector_algebra_thumbnail1.jpg",
          channel: "Math Channel 19",
        },
        {
          path: "/dummy/path/vector-algebra/opt2",
          thumbnail: "/images/vector_algebra_thumbnail2.jpg",
          channel: "Math Channel 20",
        },
      ],
    },
    {
      name: "Three Dimensional Geometry",
      options: [
        {
          path: "/dummy/path/three-dimensional-geometry/opt1",
          thumbnail: "/images/three_dimensional_geometry_thumbnail1.jpg",
          channel: "Math Channel 21",
        },
        {
          path: "/dummy/path/three-dimensional-geometry/opt2",
          thumbnail: "/images/three_dimensional_geometry_thumbnail2.jpg",
          channel: "Math Channel 22",
        },
      ],
    },
    {
      name: "Linear Programming",
      options: [
        {
          path: "/dummy/path/linear-programming/opt1",
          thumbnail: "/images/linear_programming_thumbnail1.jpg",
          channel: "Math Channel 23",
        },
        {
          path: "/dummy/path/linear-programming/opt2",
          thumbnail: "/images/linear_programming_thumbnail2.jpg",
          channel: "Math Channel 24",
        },
      ],
    },
    {
      name: "Probability",
      options: [
        {
          path: "/dummy/path/probability/opt1",
          thumbnail: "/images/probability_thumbnail1.jpg",
          channel: "Math Channel 25",
        },
        {
          path: "/dummy/path/probability/opt2",
          thumbnail: "/images/probability_thumbnail2.jpg",
          channel: "Math Channel 26",
        },
      ],
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
      name: "Ray Optics and Optical Instruments",
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
      name: "Ray Optics and Optical Instruments",
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
      name: "Ray Optics and Optical Instruments",
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
      options: [
        {
          path: "/dummy/path/electric-charges-and-fields/opt1",
          thumbnail: "/images/electric_charges_and_fields_thumbnail1.jpg",
          channel: "Physics Channel 1",
        },
        {
          path: "/dummy/path/electric-charges-and-fields/opt2",
          thumbnail: "/images/electric_charges_and_fields_thumbnail2.jpg",
          channel: "Physics Channel 2",
        },
      ],
    },
    {
      name: "Electrostatic Potential and Capacitance",
      options: [
        {
          path: "/dummy/path/electrostatic-potential-and-capacitance/opt1",
          thumbnail: "/images/electrostatic_potential_thumbnail1.jpg",
          channel: "Physics Channel 3",
        },
        {
          path: "/dummy/path/electrostatic-potential-and-capacitance/opt2",
          thumbnail: "/images/electrostatic_potential_thumbnail2.jpg",
          channel: "Physics Channel 4",
        },
      ],
    },
    {
      name: "Current Electricity",
      options: [
        {
          path: "/dummy/path/current-electricity/opt1",
          thumbnail: "/images/current_electricity_thumbnail1.jpg",
          channel: "Physics Channel 5",
        },
        {
          path: "/dummy/path/current-electricity/opt2",
          thumbnail: "/images/current_electricity_thumbnail2.jpg",
          channel: "Physics Channel 6",
        },
      ],
    },
    {
      name: "Moving Charges and Magnetism",
      options: [
        {
          path: "/dummy/path/moving-charges-and-magnetism/opt1",
          thumbnail: "/images/moving_charges_and_magnetism_thumbnail1.jpg",
          channel: "Physics Channel 7",
        },
        {
          path: "/dummy/path/moving-charges-and-magnetism/opt2",
          thumbnail: "/images/moving_charges_and_magnetism_thumbnail2.jpg",
          channel: "Physics Channel 8",
        },
      ],
    },
    {
      name: "Magnetism and Matter",
      options: [
        {
          path: "/dummy/path/magnetism-and-matter/opt1",
          thumbnail: "/images/magnetism_and_matter_thumbnail1.jpg",
          channel: "Physics Channel 9",
        },
        {
          path: "/dummy/path/magnetism-and-matter/opt2",
          thumbnail: "/images/magnetism_and_matter_thumbnail2.jpg",
          channel: "Physics Channel 10",
        },
      ],
    },
    {
      name: "Electromagnetic Induction",
      options: [
        {
          path: "/dummy/path/electromagnetic-induction/opt1",
          thumbnail: "/images/electromagnetic_induction_thumbnail1.jpg",
          channel: "Physics Channel 11",
        },
        {
          path: "/dummy/path/electromagnetic-induction/opt2",
          thumbnail: "/images/electromagnetic_induction_thumbnail2.jpg",
          channel: "Physics Channel 12",
        },
      ],
    },
    {
      name: "Alternating Current",
      options: [
        {
          path: "/dummy/path/alternating-current/opt1",
          thumbnail: "/images/alternating_current_thumbnail1.jpg",
          channel: "Physics Channel 13",
        },
        {
          path: "/dummy/path/alternating-current/opt2",
          thumbnail: "/images/alternating_current_thumbnail2.jpg",
          channel: "Physics Channel 14",
        },
      ],
    },
    {
      name: "Electromagnetic Waves",
      options: [
        {
          path: "/dummy/path/electromagnetic-waves/opt1",
          thumbnail: "/images/electromagnetic_waves_thumbnail1.jpg",
          channel: "Physics Channel 15",
        },
        {
          path: "/dummy/path/electromagnetic-waves/opt2",
          thumbnail: "/images/electromagnetic_waves_thumbnail2.jpg",
          channel: "Physics Channel 16",
        },
      ],
    },
    {
      name: "Wave Optics",
      options: [
        {
          path: "/dummy/path/wave-optics/opt1",
          thumbnail: "/images/wave_optics_thumbnail1.jpg",
          channel: "Physics Channel 17",
        },
        {
          path: "/dummy/path/wave-optics/opt2",
          thumbnail: "/images/wave_optics_thumbnail2.jpg",
          channel: "Physics Channel 18",
        },
      ],
    },
    {
      name: "Ray Optics and Optical Instruments",
      options: [
        {
          path: "/dummy/path/wave-optics/opt1",
          thumbnail: "/images/wave_optics_thumbnail1.jpg",
          channel: "Physics Channel 19",
        },
        {
          path: "/dummy/path/wave-optics/opt2",
          thumbnail: "/images/wave_optics_thumbnail2.jpg",
          channel: "Physics Channel 20",
        },
      ],
    },
    {
      name: "Dual Nature of Radiation and Matter",
      options: [
        {
          path: "/dummy/path/dual-nature-of-radiation-and-matter/opt1",
          thumbnail: "/images/dual_nature_of_radiation_thumbnail1.jpg",
          channel: "Physics Channel 19",
        },
        {
          path: "/dummy/path/dual-nature-of-radiation-and-matter/opt2",
          thumbnail: "/images/dual_nature_of_radiation_thumbnail2.jpg",
          channel: "Physics Channel 20",
        },
      ],
    },
    {
      name: "Atoms",
      options: [
        {
          path: "/dummy/path/atoms/opt1",
          thumbnail: "/images/atoms_thumbnail1.jpg",
          channel: "Physics Channel 21",
        },
        {
          path: "/dummy/path/atoms/opt2",
          thumbnail: "/images/atoms_thumbnail2.jpg",
          channel: "Physics Channel 22",
        },
      ],
    },
    {
      name: "Nuclei",
      options: [
        {
          path: "/dummy/path/nuclei/opt1",
          thumbnail: "/images/nuclei_thumbnail1.jpg",
          channel: "Physics Channel 23",
        },
        {
          path: "/dummy/path/nuclei/opt2",
          thumbnail: "/images/nuclei_thumbnail2.jpg",
          channel: "Physics Channel 24",
        },
      ],
    },
    {
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      options: [
        {
          path: "/dummy/path/semiconductor-electronics-materials-devices-and-simple-circuits/opt1",
          thumbnail: "/images/semiconductor_electronics_thumbnail1.jpg",
          channel: "Physics Channel 25",
        },
        {
          path: "/dummy/path/semiconductor-electronics-materials-devices-and-simple-circuits/opt2",
          thumbnail: "/images/semiconductor_electronics_thumbnail2.jpg",
          channel: "Physics Channel 26",
        },
      ],
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
      options: [
        {
          path: "/dummy/path/solid-state/opt1",
          thumbnail: "/images/solid_state_thumbnail1.jpg",
          channel: "Chemistry Channel 1",
        },
        {
          path: "/dummy/path/solid-state/opt2",
          thumbnail: "/images/solid_state_thumbnail2.jpg",
          channel: "Chemistry Channel 2",
        },
      ],
    },
    {
      name: "Solutions",
      options: [
        {
          path: "/dummy/path/solutions/opt1",
          thumbnail: "/images/solutions_thumbnail1.jpg",
          channel: "Chemistry Channel 3",
        },
        {
          path: "/dummy/path/solutions/opt2",
          thumbnail: "/images/solutions_thumbnail2.jpg",
          channel: "Chemistry Channel 4",
        },
      ],
    },
    {
      name: "Electrochemistry",
      options: [
        {
          path: "/dummy/path/electrochemistry/opt1",
          thumbnail: "/images/electrochemistry_thumbnail1.jpg",
          channel: "Chemistry Channel 5",
        },
        {
          path: "/dummy/path/electrochemistry/opt2",
          thumbnail: "/images/electrochemistry_thumbnail2.jpg",
          channel: "Chemistry Channel 6",
        },
      ],
    },
    {
      name: "Chemical Kinetics",
      options: [
        {
          path: "/dummy/path/chemical-kinetics/opt1",
          thumbnail: "/images/chemical_kinetics_thumbnail1.jpg",
          channel: "Chemistry Channel 7",
        },
        {
          path: "/dummy/path/chemical-kinetics/opt2",
          thumbnail: "/images/chemical_kinetics_thumbnail2.jpg",
          channel: "Chemistry Channel 8",
        },
      ],
    },
    {
      name: "Surface Chemistry",
      options: [
        {
          path: "/dummy/path/surface-chemistry/opt1",
          thumbnail: "/images/surface_chemistry_thumbnail1.jpg",
          channel: "Chemistry Channel 9",
        },
        {
          path: "/dummy/path/surface-chemistry/opt2",
          thumbnail: "/images/surface_chemistry_thumbnail2.jpg",
          channel: "Chemistry Channel 10",
        },
      ],
    },
    {
      name: "p-Block Elements",
      options: [
        {
          path: "/dummy/path/p-block-elements/opt1",
          thumbnail: "/images/p_block_elements_thumbnail1.jpg",
          channel: "Chemistry Channel 11",
        },
        {
          path: "/dummy/path/p-block-elements/opt2",
          thumbnail: "/images/p_block_elements_thumbnail2.jpg",
          channel: "Chemistry Channel 12",
        },
      ],
    },
    {
      name: "d-and f-Block Elements",
      options: [
        {
          path: "/dummy/path/d-and-f-block-elements/opt1",
          thumbnail: "/images/d_and_f_block_elements_thumbnail1.jpg",
          channel: "Chemistry Channel 13",
        },
        {
          path: "/dummy/path/d-and-f-block-elements/opt2",
          thumbnail: "/images/d_and_f_block_elements_thumbnail2.jpg",
          channel: "Chemistry Channel 14",
        },
      ],
    },
    {
      name: "Coordination Compounds",
      options: [
        {
          path: "/dummy/path/coordination-compounds/opt1",
          thumbnail: "/images/coordination_compounds_thumbnail1.jpg",
          channel: "Chemistry Channel 15",
        },
        {
          path: "/dummy/path/coordination-compounds/opt2",
          thumbnail: "/images/coordination_compounds_thumbnail2.jpg",
          channel: "Chemistry Channel 16",
        },
      ],
    },
    {
      name: "Haloalkanes and Haloarenes",
      options: [
        {
          path: "/dummy/path/haloalkanes-and-haloarenes/opt1",
          thumbnail: "/images/haloalkanes_haloarenes_thumbnail1.jpg",
          channel: "Chemistry Channel 17",
        },
        {
          path: "/dummy/path/haloalkanes-and-haloarenes/opt2",
          thumbnail: "/images/haloalkanes_haloarenes_thumbnail2.jpg",
          channel: "Chemistry Channel 18",
        },
      ],
    },
    {
      name: "Alcohols, Phenols and Ethers",
      options: [
        {
          path: "/dummy/path/alcohols-phenols-ethers/opt1",
          thumbnail: "/images/alcohols_phenols_ethers_thumbnail1.jpg",
          channel: "Chemistry Channel 19",
        },
        {
          path: "/dummy/path/alcohols-phenols-ethers/opt2",
          thumbnail: "/images/alcohols_phenols_ethers_thumbnail2.jpg",
          channel: "Chemistry Channel 20",
        },
      ],
    },
    {
      name: "Aldehydes, Ketones and Carboxylic Acids",
      options: [
        {
          path: "/dummy/path/aldehydes-ketons-and-carboxylic-acids/opt1",
          thumbnail:
            "/images/aldehydes_ketones_carboxylic_acids_thumbnail1.jpg",
          channel: "Chemistry Channel 21",
        },
        {
          path: "/dummy/path/aldehydes-ketons-and-carboxylic-acids/opt2",
          thumbnail:
            "/images/aldehydes_ketones_carboxylic_acids_thumbnail2.jpg",
          channel: "Chemistry Channel 22",
        },
      ],
    },
    {
      name: "Amines",
      options: [
        {
          path: "/dummy/path/amines/opt1",
          thumbnail: "/images/amines_thumbnail1.jpg",
          channel: "Chemistry Channel 23",
        },
        {
          path: "/dummy/path/amines/opt2",
          thumbnail: "/images/amines_thumbnail2.jpg",
          channel: "Chemistry Channel 24",
        },
      ],
    },
    {
      name: "Biomolecules",
      options: [
        {
          path: "/dummy/path/biomolecules/opt1",
          thumbnail: "/images/biomolecules_thumbnail1.jpg",
          channel: "Chemistry Channel 25",
        },
        {
          path: "/dummy/path/biomolecules/opt2",
          thumbnail: "/images/biomolecules_thumbnail2.jpg",
          channel: "Chemistry Channel 26",
        },
      ],
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
      options: [
        {
          path: "/dummy/path/reproduction/opt1",
          thumbnail: "/images/reproduction_thumbnail1.jpg",
          channel: "Biology Channel 1",
        },
        {
          path: "/dummy/path/reproduction/opt2",
          thumbnail: "/images/reproduction_thumbnail2.jpg",
          channel: "Biology Channel 2",
        },
      ],
    },
    {
      name: "Genetics and Evolution",
      options: [
        {
          path: "/dummy/path/genetics-and-evolution/opt1",
          thumbnail: "/images/genetics_and_evolution_thumbnail1.jpg",
          channel: "Biology Channel 3",
        },
        {
          path: "/dummy/path/genetics-and-evolution/opt2",
          thumbnail: "/images/genetics_and_evolution_thumbnail2.jpg",
          channel: "Biology Channel 4",
        },
      ],
    },
    {
      name: "Biology and Human Welfare",
      options: [
        {
          path: "/dummy/path/biology-and-human-welfare/opt1",
          thumbnail: "/images/biology_and_human_welfare_thumbnail1.jpg",
          channel: "Biology Channel 5",
        },
        {
          path: "/dummy/path/biology-and-human-welfare/opt2",
          thumbnail: "/images/biology_and_human_welfare_thumbnail2.jpg",
          channel: "Biology Channel 6",
        },
      ],
    },
    {
      name: "Biotechnology and its Applications",
      options: [
        {
          path: "/dummy/path/biotechnology-and-its-applications/opt1",
          thumbnail: "/images/biotechnology_applications_thumbnail1.jpg",
          channel: "Biology Channel 7",
        },
        {
          path: "/dummy/path/biotechnology-and-its-applications/opt2",
          thumbnail: "/images/biotechnology_applications_thumbnail2.jpg",
          channel: "Biology Channel 8",
        },
      ],
    },
    {
      name: "Ecology and Environment",
      options: [
        {
          path: "/dummy/path/ecology-and-environment/opt1",
          thumbnail: "/images/ecology_environment_thumbnail1.jpg",
          channel: "Biology Channel 9",
        },
        {
          path: "/dummy/path/ecology-and-environment/opt2",
          thumbnail: "/images/ecology_environment_thumbnail2.jpg",
          channel: "Biology Channel 10",
        },
      ],
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
