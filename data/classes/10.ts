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
      options: [
        {
          path: "/dummy/path/real-numbers/opt1",
          thumbnail: "/images/real_numbers_thumbnail1.jpg",
          channel: "Math Channel 1",
        },
        {
          path: "/dummy/path/real-numbers/opt2",
          thumbnail: "/images/real_numbers_thumbnail2.jpg",
          channel: "Math Channel 2",
        },
      ],
    },
    {
      name: "Polynomials",
      options: [
        {
          path: "/dummy/path/polynomials/opt1",
          thumbnail: "/images/polynomials_thumbnail1.jpg",
          channel: "Math Channel 3",
        },
        {
          path: "/dummy/path/polynomials/opt2",
          thumbnail: "/images/polynomials_thumbnail2.jpg",
          channel: "Math Channel 4",
        },
      ],
    },
    {
      name: "Pair of Linear Equations",
      options: [
        {
          path: "/dummy/path/linear-equations/opt1",
          thumbnail: "/images/linear_equations_thumbnail1.jpg",
          channel: "Math Channel 5",
        },
        {
          path: "/dummy/path/linear-equations/opt2",
          thumbnail: "/images/linear_equations_thumbnail2.jpg",
          channel: "Math Channel 6",
        },
      ],
    },
    {
      name: "Quadratic Equations",
      options: [
        {
          path: "/dummy/path/quadratic-equations/opt1",
          thumbnail: "/images/quadratic_equations_thumbnail1.jpg",
          channel: "Math Channel 7",
        },
        {
          path: "/dummy/path/quadratic-equations/opt2",
          thumbnail: "/images/quadratic_equations_thumbnail2.jpg",
          channel: "Math Channel 8",
        },
      ],
    },
    {
      name: "Arithmetic Progression",
      options: [
        {
          path: "/dummy/path/arithmetic-progression/opt1",
          thumbnail: "/images/arithmetic_progression_thumbnail1.jpg",
          channel: "Math Channel 9",
        },
        {
          path: "/dummy/path/arithmetic-progression/opt2",
          thumbnail: "/images/arithmetic_progression_thumbnail2.jpg",
          channel: "Math Channel 10",
        },
      ],
    },
    {
      name: "Triangles",
      options: [
        {
          path: "/dummy/path/triangles/opt1",
          thumbnail: "/images/triangles_thumbnail1.jpg",
          channel: "Math Channel 11",
        },
        {
          path: "/dummy/path/triangles/opt2",
          thumbnail: "/images/triangles_thumbnail2.jpg",
          channel: "Math Channel 12",
        },
      ],
    },
    {
      name: "Coordinate Geometry",
      options: [
        {
          path: "/dummy/path/coordinate-geometry/opt1",
          thumbnail: "/images/coordinate_geometry_thumbnail1.jpg",
          channel: "Math Channel 13",
        },
        {
          path: "/dummy/path/coordinate-geometry/opt2",
          thumbnail: "/images/coordinate_geometry_thumbnail2.jpg",
          channel: "Math Channel 14",
        },
      ],
    },
    {
      name: "Introduction to Trigonometry",
      options: [
        {
          path: "/dummy/path/introduction-to-trigonometry/opt1",
          thumbnail: "/images/trigonometry_intro_thumbnail1.jpg",
          channel: "Math Channel 15",
        },
        {
          path: "/dummy/path/introduction-to-trigonometry/opt2",
          thumbnail: "/images/trigonometry_intro_thumbnail2.jpg",
          channel: "Math Channel 16",
        },
      ],
    },
    {
      name: "Applications of Trigonometry",
      options: [
        {
          path: "/dummy/path/applications-of-trigonometry/opt1",
          thumbnail: "/images/trigonometry_applications_thumbnail1.jpg",
          channel: "Math Channel 17",
        },
        {
          path: "/dummy/path/applications-of-trigonometry/opt2",
          thumbnail: "/images/trigonometry_applications_thumbnail2.jpg",
          channel: "Math Channel 18",
        },
      ],
    },
    {
      name: "Circles",
      options: [
        {
          path: "/dummy/path/circles/opt1",
          thumbnail: "/images/circles_thumbnail1.jpg",
          channel: "Math Channel 19",
        },
        {
          path: "/dummy/path/circles/opt2",
          thumbnail: "/images/circles_thumbnail2.jpg",
          channel: "Math Channel 20",
        },
      ],
    },
    {
      name: "Area Related to Circles",
      options: [
        {
          path: "/dummy/path/area-related-to-circles/opt1",
          thumbnail: "/images/area_circles_thumbnail1.jpg",
          channel: "Math Channel 21",
        },
        {
          path: "/dummy/path/area-related-to-circles/opt2",
          thumbnail: "/images/area_circles_thumbnail2.jpg",
          channel: "Math Channel 22",
        },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      options: [
        {
          path: "/dummy/path/surface-areas-volumes/opt1",
          thumbnail: "/images/surface_areas_volumes_thumbnail1.jpg",
          channel: "Math Channel 23",
        },
        {
          path: "/dummy/path/surface-areas-volumes/opt2",
          thumbnail: "/images/surface_areas_volumes_thumbnail2.jpg",
          channel: "Math Channel 24",
        },
      ],
    },
    {
      name: "Statistics",
      options: [
        {
          path: "/dummy/path/statistics/opt1",
          thumbnail: "/images/statistics_thumbnail1.jpg",
          channel: "Math Channel 25",
        },
        {
          path: "/dummy/path/statistics/opt2",
          thumbnail: "/images/statistics_thumbnail2.jpg",
          channel: "Math Channel 26",
        },
      ],
    },
    {
      name: "Probability",
      options: [
        {
          path: "/dummy/path/probability/opt1",
          thumbnail: "/images/probability_thumbnail1.jpg",
          channel: "Math Channel 27",
        },
        {
          path: "/dummy/path/probability/opt2",
          thumbnail: "/images/probability_thumbnail2.jpg",
          channel: "Math Channel 28",
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
      options: [
        {
          path: "/dummy/path/light-reflection-and-refraction/opt1",
          thumbnail: "/images/light_reflection_thumbnail1.jpg",
          channel: "Physics Channel 1",
        },
        {
          path: "/dummy/path/light-reflection-and-refraction/opt2",
          thumbnail: "/images/light_reflection_thumbnail2.jpg",
          channel: "Physics Channel 2",
        },
      ],
    },
    {
      name: "Human Eye and Colourful World",
      options: [
        {
          path: "/dummy/path/human-eye-and-colourful-world/opt1",
          thumbnail: "/images/human_eye_thumbnail1.jpg",
          channel: "Physics Channel 3",
        },
        {
          path: "/dummy/path/human-eye-and-colourful-world/opt2",
          thumbnail: "/images/human_eye_thumbnail2.jpg",
          channel: "Physics Channel 4",
        },
      ],
    },
    {
      name: "Electricity",
      options: [
        {
          path: "/dummy/path/electricity/opt1",
          thumbnail: "/images/electricity_thumbnail1.jpg",
          channel: "Physics Channel 5",
        },
        {
          path: "/dummy/path/electricity/opt2",
          thumbnail: "/images/electricity_thumbnail2.jpg",
          channel: "Physics Channel 6",
        },
      ],
    },
    {
      name: "Magnetic Effects of Electric Current",
      options: [
        {
          path: "/dummy/path/magnetic-effects-of-electric-current/opt1",
          thumbnail: "/images/magnetic_effects_thumbnail1.jpg",
          channel: "Physics Channel 7",
        },
        {
          path: "/dummy/path/magnetic-effects-of-electric-current/opt2",
          thumbnail: "/images/magnetic_effects_thumbnail2.jpg",
          channel: "Physics Channel 8",
        },
      ],
    },
    {
      name: "Sources of Energy",
      options: [
        {
          path: "/dummy/path/sources-of-energy/opt1",
          thumbnail: "/images/sources_of_energy_thumbnail1.jpg",
          channel: "Physics Channel 9",
        },
        {
          path: "/dummy/path/sources-of-energy/opt2",
          thumbnail: "/images/sources_of_energy_thumbnail2.jpg",
          channel: "Physics Channel 10",
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
      options: [
        {
          path: "/dummy/path/chemical-reactions-and-equations/opt1",
          thumbnail: "/images/chemical_reactions_thumbnail1.jpg",
          channel: "Chemistry Channel 1",
        },
        {
          path: "/dummy/path/chemical-reactions-and-equations/opt2",
          thumbnail: "/images/chemical_reactions_thumbnail2.jpg",
          channel: "Chemistry Channel 2",
        },
      ],
    },
    {
      name: "Acids, Bases, and Salts",
      options: [
        {
          path: "/dummy/path/acids-bases-and-salts/opt1",
          thumbnail: "/images/acids_bases_thumbnail1.jpg",
          channel: "Chemistry Channel 3",
        },
        {
          path: "/dummy/path/acids-bases-and-salts/opt2",
          thumbnail: "/images/acids_bases_thumbnail2.jpg",
          channel: "Chemistry Channel 4",
        },
      ],
    },
    {
      name: "Metals and Non-Metals",
      options: [
        {
          path: "/dummy/path/metals-and-non-metals/opt1",
          thumbnail: "/images/metals_nonmetals_thumbnail1.jpg",
          channel: "Chemistry Channel 5",
        },
        {
          path: "/dummy/path/metals-and-non-metals/opt2",
          thumbnail: "/images/metals_nonmetals_thumbnail2.jpg",
          channel: "Chemistry Channel 6",
        },
      ],
    },
    {
      name: "Carbon and Its Compounds",
      options: [
        {
          path: "/dummy/path/carbon-and-its-compounds/opt1",
          thumbnail: "/images/carbon_compounds_thumbnail1.jpg",
          channel: "Chemistry Channel 7",
        },
        {
          path: "/dummy/path/carbon-and-its-compounds/opt2",
          thumbnail: "/images/carbon_compounds_thumbnail2.jpg",
          channel: "Chemistry Channel 8",
        },
      ],
    },
    {
      name: "Periodic Classification of Elements",
      options: [
        {
          path: "/dummy/path/periodic-classification-of-elements/opt1",
          thumbnail: "/images/periodic_classification_thumbnail1.jpg",
          channel: "Chemistry Channel 9",
        },
        {
          path: "/dummy/path/periodic-classification-of-elements/opt2",
          thumbnail: "/images/periodic_classification_thumbnail2.jpg",
          channel: "Chemistry Channel 10",
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
        options: [
            {
                path: "/dummy/path/life-processes/opt1",
                thumbnail: "/images/life_processes_thumbnail1.jpg",
                channel: "Biology Channel 1",
            },
            {
                path: "/dummy/path/life-processes/opt2",
                thumbnail: "/images/life_processes_thumbnail2.jpg",
                channel: "Biology Channel 2",
            },
        ],
    },
    {
        name: "Control and Coordination",
        options: [
            {
                path: "/dummy/path/control-and-coordination/opt1",
                thumbnail: "/images/control_coordination_thumbnail1.jpg",
                channel: "Biology Channel 3",
            },
            {
                path: "/dummy/path/control-and-coordination/opt2",
                thumbnail: "/images/control_coordination_thumbnail2.jpg",
                channel: "Biology Channel 4",
            },
        ],
    },
    {
        name: "How do Organisms Reproduce?",
        options: [
            {
                path: "/dummy/path/how-do-organisms-reproduce/opt1",
                thumbnail: "/images/reproduction_thumbnail1.jpg",
                channel: "Biology Channel 5",
            },
            {
                path: "/dummy/path/how-do-organisms-reproduce/opt2",
                thumbnail: "/images/reproduction_thumbnail2.jpg",
                channel: "Biology Channel 6",
            },
        ],
    },
    {
        name: "Heredity and Evolution",
        options: [
            {
                path: "/dummy/path/heredity-and-evolution/opt1",
                thumbnail: "/images/heredity_evolution_thumbnail1.jpg",
                channel: "Biology Channel 7",
            },
            {
                path: "/dummy/path/heredity-and-evolution/opt2",
                thumbnail: "/images/heredity_evolution_thumbnail2.jpg",
                channel: "Biology Channel 8",
            },
        ],
    },
    {
        name: "Our Environment",
        options: [
            {
                path: "/dummy/path/our-environment/opt1",
                thumbnail: "/images/environment_thumbnail1.jpg",
                channel: "Biology Channel 9",
            },
            {
                path: "/dummy/path/our-environment/opt2",
                thumbnail: "/images/environment_thumbnail2.jpg",
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
}; //
