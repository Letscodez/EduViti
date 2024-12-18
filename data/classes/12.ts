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
          path: "https://www.youtube.com/live/SnAwgpd6q4Y?si=YzOLsNqWu2IQXtyH",
          thumbnail: "https://img.youtube.com/vi/SnAwgpd6q4Y/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Inverse Trigonometric Functions",
      options: [
        {
          path: "https://youtu.be/Oy-Z49idgVw?si=cGMLbaX2JoPhdMda",
          thumbnail: "https://img.youtube.com/vi/Oy-Z49idgVw/hqdefault.jpg",
          channel: "Science & Fun Education",
        },
      ],
    },
    {
      name: "Matrices",
      options: [
        {
          path: "https://www.youtube.com/live/Lwrl7FhL0fk?si=qTm5HI8QCnaCuS--",
          thumbnail: "https://img.youtube.com/vi/Lwrl7FhL0fk/hqdefault.jpg",
          channel: "Vedantu Math",
        },
      ],
    },
    {
      name: "Determinants",
      options: [
        {
          path: "https://youtu.be/2NncYZhn6FI?si=xHIAiY7-jDT_g0bu",
          thumbnail: "https://img.youtube.com/vi/2NncYZhn6FI/hqdefault.jpg",
          channel: "Science & Fun Education",
        },
      ],
    },
    {
      name: "Continuity and Differentiability",
      options: [
        {
          path: "https://www.youtube.com/live/7-dWmrAayKY?si=JHyzHd3RmEQWPy6p",
          thumbnail: "https://img.youtube.com/vi/7-dWmrAayKY/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Applications of Derivatives",
      options: [
        {
          path: "https://www.youtube.com/live/Tbo0-fwPGIU?si=XmIEvTDN52X9dsF6",
          thumbnail: "https://img.youtube.com/vi/Tbo0-fwPGIU/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Integrals",
      options: [
        {
          path: "https://youtu.be/yY2oUKVAkdY?si=ThHCchjolOAy8bxp",
          thumbnail: "https://img.youtube.com/vi/yY2oUKVAkdY/hqdefault.jpg",
          channel: "Science & Fun Education",
        },
      ],
    },
    {
      name: "Application of Integrals",
      options: [
        {
          path: "https://youtu.be/lnR343-9vFY?si=xoumy-uYzNmpGA9N",
          thumbnail: "https://img.youtube.com/vi/lnR343-9vFY/hqdefault.jpg",
          channel: "Science & Fun Education",
        },
      ],
    },
    {
      name: "Differential Equations",
      options: [
        {
          path: "https://www.youtube.com/live/UMhzjajR2S8?si=wZ0CRYc_cSUqtdkI",
          thumbnail: "https://img.youtube.com/vi/UMhzjajR2S8/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Vector Algebra",
      options: [
        {
          path: "https://youtu.be/U7nSbEZyYnA?si=xEanlYwGAt-zonvY",
          thumbnail: "https://img.youtube.com/vi/U7nSbEZyYnA/hqdefault.jpg",
          channel: "Science & Fun Education",
        },
      ],
    },
    {
      name: "Three Dimensional Geometry",
      options: [
        {
          path: "https://youtu.be/sNG2FVZi5d8?si=OixRj9rfykqcmA0n",
          thumbnail: "https://img.youtube.com/vi/sNG2FVZi5d8/hqdefault.jpg",
          channel: "Science & Fun Education",
        },
      ],
    },
    {
      name: "Linear Programming",
      options: [
        {
          path: "https://www.youtube.com/live/3h54yvfwJ-o?si=7RvHZdyXoLxiIhCW",
          thumbnail: "https://img.youtube.com/vi/3h54yvfwJ-o/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Probability",
      options: [
        {
          path: "https://www.youtube.com/live/Smn7lsVFEzs?si=PhHTpSS3f_j80Cq2",
          thumbnail: "https://img.youtube.com/vi/Smn7lsVFEzs/hqdefault.jpg",
          channel: "NCERT Wallah",
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
          path: "https://www.youtube.com/live/MVvHdH6n2VE?si=13Om55peUwXIk3cZ",
          thumbnail: "https://img.youtube.com/vi/MVvHdH6n2VE/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Electrostatic Potential and Capacitance",
      options: [
        {
          path: "https://youtu.be/l7mDgyaLZuQ?si=vPhIOyjmdX3XUDGk",
          thumbnail: "https://img.youtube.com/vi/l7mDgyaLZuQ/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Current Electricity",
      options: [
        {
          path: "https://www.youtube.com/live/VYGh_9UIHCo?si=AWov8u7s1s4lO2lE",
          thumbnail: "https://img.youtube.com/vi/VYGh_9UIHCo/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Moving Charges and Magnetism",
      options: [
        {
          path: "https://youtu.be/0wbl0B39HS0?si=LihP_I13dbIzwbzU",
          thumbnail: "https://img.youtube.com/vi/0wbl0B39HS0/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Magnetism and Matter",
      options: [
        {
          path: "https://www.youtube.com/live/OBU4WqGXtJs?si=4qEqelZX0k-evoXL",
          thumbnail: "https://img.youtube.com/vi/OBU4WqGXtJs/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Electromagnetic Induction",
      options: [
        {
          path: "https://youtu.be/KuvRoOi89HQ?si=eweQpG3N22f8AyV-",
          thumbnail: "https://img.youtube.com/vi/KuvRoOi89HQ/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Alternating Current",
      options: [
        {
          path: "https://youtu.be/X7p1oVJ3NgM?si=BKWOjG4Qkog2_weK",
          thumbnail: "https://img.youtube.com/vi/X7p1oVJ3NgM/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Electromagnetic Waves",
      options: [
        {
          path: "https://www.youtube.com/live/IXHmFRJbrXw?si=jlrzD3Fy5OgH3CDg",
          thumbnail: "https://img.youtube.com/vi/IXHmFRJbrXw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Wave Optics",
      options: [
        {
          path: "https://www.youtube.com/live/942EmkxOhTM?si=W3OU8YQofkLr6uDx",
          thumbnail: "https://img.youtube.com/vi/942EmkxOhTM/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Ray Optics and Optical Instruments",
      options: [
        {
          path: "https://youtu.be/mpbZfBYpVs4?si=coClQUCkm73nkNeO",
          thumbnail: "https://img.youtube.com/vi/mpbZfBYpVs4/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Dual Nature of Radiation and Matter",
      options: [
        {
          path: "https://www.youtube.com/live/qj0AeF2tQCc?si=GoA_qjdi1BaSjeFz",
          thumbnail: "https://img.youtube.com/vi/qj0AeF2tQCc/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Atoms",
      options: [
        {
          path: "https://youtu.be/Xqvdt21pO7Y?si=9v69noTnBtYk7qNj",
          thumbnail: "https://img.youtube.com/vi/Xqvdt21pO7Y/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Nuclei",
      options: [
        {
          path: "https://www.youtube.com/live/MLxoHc8jxgo?si=1iAl3_5oAdbxYOZT",
          thumbnail: "https://img.youtube.com/vi/MLxoHc8jxgo/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      options: [
        {
          path: "https://www.youtube.com/live/ECxd0bqFAAs?si=haQmPbZOozNUl8I8",
          thumbnail: "https://img.youtube.com/vi/ECxd0bqFAAs/hqdefault.jpg",
          channel: "NCERT Wallah",
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
