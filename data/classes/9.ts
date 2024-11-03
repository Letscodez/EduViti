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
export const maths = {
  notes: [
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
  ],
  pyq: [
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
  ],
  question_banks: [
    {
      name: "Number Systems",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Polynomials",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ], // Empty array for chapters without specific sets
    },
    {
      name: "Coordinate Geometry",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Linear Equations in Two Variables",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Euclid’s Geometry",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Lines and Angles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Triangles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Quadrilaterals",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Areas of Parallelograms and Triangles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Circles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Constructions",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Heron’s Formula",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Statistics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
  ],

  sample_papers: [
    {
      name: "Number Systems",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Polynomials",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ], // Empty array for chapters without specific sets
    },
    {
      name: "Coordinate Geometry",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Linear Equations in Two Variables",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Euclid’s Geometry",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Lines and Angles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Triangles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Quadrilaterals",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Areas of Parallelograms and Triangles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Circles",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Constructions",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Heron’s Formula",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Statistics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 2", path: "/StudyResources/Grade-9/maths/number-systems" },
        { name: "Set 3", path: "/StudyResources/Grade-9/maths/number-systems" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Number Systems",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/number_systems/opt1",
          thumbnail:
            "https://i.ytimg.com/vi/yKysjTxtGnw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDLI9I8NTMJ0s3FYjKxcV-GQjBmmQ.jpg",
          channel: "Math Channel 1",
        },
        {
          path: "/StudyResources/Grade-9/maths/number_systems/opt2",
          thumbnail: "/images/number_systems_thumbnail2.jpg",
          channel: "Math Channel 2",
        },
      ],
    },
    {
      name: "Polynomials",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/polynomials/opt1",
          thumbnail: "/images/polynomials_thumbnail1.jpg",
          channel: "Algebra Academy",
        },
        {
          path: "/StudyResources/Grade-9/maths/polynomials/opt2",
          thumbnail: "/images/polynomials_thumbnail2.jpg",
          channel: "Polynomials Explained",
        },
      ],
    },
    {
      name: "Coordinate Geometry",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/coordinate_geometry/opt1",
          thumbnail: "/images/coordinate_geometry_thumbnail1.jpg",
          channel: "Geo Math Hub",
        },
        {
          path: "/StudyResources/Grade-9/maths/coordinate_geometry/opt2",
          thumbnail: "/images/coordinate_geometry_thumbnail2.jpg",
          channel: "Math Visuals",
        },
      ],
    },
    {
      name: "Linear Equations in Two Variables",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/linear_equations/opt1",
          thumbnail: "/images/linear_equations_thumbnail1.jpg",
          channel: "Equation Masters",
        },
        {
          path: "/StudyResources/Grade-9/maths/linear_equations/opt2",
          thumbnail: "/images/linear_equations_thumbnail2.jpg",
          channel: "Algebra Insights",
        },
      ],
    },
    {
      name: "Euclid’s Geometry",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/euclids_geometry/opt1",
          thumbnail: "/images/euclids_geometry_thumbnail1.jpg",
          channel: "Classic Geometry",
        },
        {
          path: "/StudyResources/Grade-9/maths/euclids_geometry/opt2",
          thumbnail: "/images/euclids_geometry_thumbnail2.jpg",
          channel: "Geometry Channel",
        },
      ],
    },
    {
      name: "Lines and Angles",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/lines_and_angles/opt1",
          thumbnail: "/images/lines_and_angles_thumbnail1.jpg",
          channel: "Angles Explained",
        },
        {
          path: "/StudyResources/Grade-9/maths/lines_and_angles/opt2",
          thumbnail: "/images/lines_and_angles_thumbnail2.jpg",
          channel: "Line Learners",
        },
      ],
    },
    {
      name: "Triangles",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/triangles/opt1",
          thumbnail: "/images/triangles_thumbnail1.jpg",
          channel: "Triangle Tutors",
        },
        {
          path: "/StudyResources/Grade-9/maths/triangles/opt2",
          thumbnail: "/images/triangles_thumbnail2.jpg",
          channel: "Math Mastery",
        },
      ],
    },
    {
      name: "Quadrilaterals",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/quadrilaterals/opt1",
          thumbnail: "/images/quadrilaterals_thumbnail1.jpg",
          channel: "Quad Geometrics",
        },
        {
          path: "/StudyResources/Grade-9/maths/quadrilaterals/opt2",
          thumbnail: "/images/quadrilaterals_thumbnail2.jpg",
          channel: "Shape Explorers",
        },
      ],
    },
    {
      name: "Areas of Parallelograms and Triangles",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/areas_parallelograms_triangles/opt1",
          thumbnail: "/images/areas_thumbnail1.jpg",
          channel: "Area Experts",
        },
        {
          path: "/StudyResources/Grade-9/maths/areas_parallelograms_triangles/opt2",
          thumbnail: "/images/areas_thumbnail2.jpg",
          channel: "Math Visuals",
        },
      ],
    },
    {
      name: "Circles",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/circles/opt1",
          thumbnail: "/images/circles_thumbnail1.jpg",
          channel: "Circle Insights",
        },
        {
          path: "/StudyResources/Grade-9/maths/circles/opt2",
          thumbnail: "/images/circles_thumbnail2.jpg",
          channel: "Round Math",
        },
      ],
    },
    {
      name: "Constructions",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/constructions/opt1",
          thumbnail: "/images/constructions_thumbnail1.jpg",
          channel: "Constructive Math",
        },
        {
          path: "/StudyResources/Grade-9/maths/constructions/opt2",
          thumbnail: "/images/constructions_thumbnail2.jpg",
          channel: "Build Geometrics",
        },
      ],
    },
    {
      name: "Heron’s Formula",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/herons_formula/opt1",
          thumbnail: "/images/herons_formula_thumbnail1.jpg",
          channel: "Formula Experts",
        },
        {
          path: "/StudyResources/Grade-9/maths/herons_formula/opt2",
          thumbnail: "/images/herons_formula_thumbnail2.jpg",
          channel: "Area Calculators",
        },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/surface_areas_volumes/opt1",
          thumbnail: "/images/surface_areas_volumes_thumbnail1.jpg",
          channel: "Volume Vault",
        },
        {
          path: "/StudyResources/Grade-9/maths/surface_areas_volumes/opt2",
          thumbnail: "/images/surface_areas_volumes_thumbnail2.jpg",
          channel: "Geometry Warehouse",
        },
      ],
    },
    {
      name: "Statistics",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/statistics/opt1",
          thumbnail: "/images/statistics_thumbnail1.jpg",
          channel: "Data Insight",
        },
        {
          path: "/StudyResources/Grade-9/maths/statistics/opt2",
          thumbnail: "/images/statistics_thumbnail2.jpg",
          channel: "Number Crunchers",
        },
      ],
    },
    {
      name: "Probability",
      options: [
        {
          path: "/StudyResources/Grade-9/maths/probability/opt1",
          thumbnail: "/images/probability_thumbnail1.jpg",
          channel: "Chance Makers",
        },
        {
          path: "/StudyResources/Grade-9/maths/probability/opt2",
          thumbnail: "/images/probability_thumbnail2.jpg",
          channel: "Probabilistic Learners",
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
    { name: "Motion", path: "/StudyResources/Grade-9/physics/motion" },
    {
      name: "Force & Laws of Motion",
      path: "/StudyResources/Grade-9/physics/force-&-laws-of-motion",
    },
    {
      name: "Gravitation",
      path: "/StudyResources/Grade-9/physics/gravitation",
    },
    {
      name: "Work and Energy",
      path: "/StudyResources/Grade-9/physics/work-and-energy",
    },
    { name: "Sound", path: "/StudyResources/Grade-9/physics/sound" },
  ],
  pyq: [
    { name: "Motion", path: "/StudyResources/Grade-9/physics/motion" },
    {
      name: "Force & Laws of Motion",
      path: "/StudyResources/Grade-9/physics/force-&-laws-of-motion",
    },
    {
      name: "Gravitation",
      path: "/StudyResources/Grade-9/physics/gravitation",
    },
    {
      name: "Work and Energy",
      path: "/StudyResources/Grade-9/physics/work-and-energy",
    },
    { name: "Sound", path: "/StudyResources/Grade-9/physics/sound" },
  ],
  question_banks: [
    {
      name: "Motion",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/physics/motion" },
        { name: "Set 3", path: "/StudyResources/Grade-9/physics/motion" },
        { name: "Set 2", path: "/StudyResources/Grade-9/physics/motion" },
      ],
    },
    {
      name: "Force & Laws of Motion",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/physics/force-and-laws-of-motion",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/physics/force-and-laws-of-motion",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/physics/force-and-laws-of-motion",
        },
      ],
    },
    {
      name: "Gravitation",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/physics/gravitation" },
        { name: "Set 2", path: "/StudyResources/Grade-9/physics/gravitation" },
        { name: "Set 3", path: "/StudyResources/Grade-9/physics/gravitation" },
      ],
    },
    {
      name: "Work and Energy",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/physics/work-and-energy",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/physics/work-and-energy",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/physics/work-and-energy",
        },
      ],
    },
    {
      name: "Sound",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/physics/sound" },
        { name: "Set 2", path: "/StudyResources/Grade-9/physics/sound" },
        { name: "Set 3", path: "/StudyResources/Grade-9/physics/sound" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Motion",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/physics/motion" },
        { name: "Set 3", path: "/StudyResources/Grade-9/physics/motion" },
        { name: "Set 2", path: "/StudyResources/Grade-9/physics/motion" },
      ],
    },
    {
      name: "Force & Laws of Motion",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/physics/force-and-laws-of-motion",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/physics/force-and-laws-of-motion",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/physics/force-and-laws-of-motion",
        },
      ],
    },
    {
      name: "Gravitation",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/physics/gravitation" },
        { name: "Set 2", path: "/StudyResources/Grade-9/physics/gravitation" },
        { name: "Set 3", path: "/StudyResources/Grade-9/physics/gravitation" },
      ],
    },
    {
      name: "Work and Energy",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/physics/work-and-energy",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/physics/work-and-energy",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/physics/work-and-energy",
        },
      ],
    },
    {
      name: "Sound",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-9/physics/sound" },
        { name: "Set 2", path: "/StudyResources/Grade-9/physics/sound" },
        { name: "Set 3", path: "/StudyResources/Grade-9/physics/sound" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Motion",
      options: [
        {
          path: "/dummy/path/motion/opt1",
          thumbnail: "/images/motion_thumbnail1.jpg",
          channel: "Physics Channel 1",
        },
        {
          path: "/dummy/path/motion/opt2",
          thumbnail: "/images/motion_thumbnail2.jpg",
          channel: "Physics Channel 2",
        },
      ],
    },
    {
      name: "Force & Laws of Motion",
      options: [
        {
          path: "/dummy/path/force-laws-of-motion/opt1",
          thumbnail: "/images/force_thumbnail1.jpg",
          channel: "Physics Channel 3",
        },
        {
          path: "/dummy/path/force-laws-of-motion/opt2",
          thumbnail: "/images/force_thumbnail2.jpg",
          channel: "Physics Channel 4",
        },
      ],
    },
    {
      name: "Gravitation",
      options: [
        {
          path: "/dummy/path/gravitation/opt1",
          thumbnail: "/images/gravitation_thumbnail1.jpg",
          channel: "Physics Channel 5",
        },
        {
          path: "/dummy/path/gravitation/opt2",
          thumbnail: "/images/gravitation_thumbnail2.jpg",
          channel: "Physics Channel 6",
        },
      ],
    },
    {
      name: "Work and Energy",
      options: [
        {
          path: "/dummy/path/work-and-energy/opt1",
          thumbnail: "/images/work_energy_thumbnail1.jpg",
          channel: "Physics Channel 7",
        },
        {
          path: "/dummy/path/work-and-energy/opt2",
          thumbnail: "/images/work_energy_thumbnail2.jpg",
          channel: "Physics Channel 8",
        },
      ],
    },
    {
      name: "Sound",
      options: [
        {
          path: "/dummy/path/sound/opt1",
          thumbnail: "/images/sound_thumbnail1.jpg",
          channel: "Physics Channel 9",
        },
        {
          path: "/dummy/path/sound/opt2",
          thumbnail: "/images/sound_thumbnail2.jpg",
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
  ],
  pyq: [
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
  ],
  question_banks: [
    {
      name: "Matter in Our Surroundings",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
        },
      ],
    },
    {
      name: "Is Matter Around Us Pure ",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
        },
      ],
    },
    {
      name: "Atoms and Molecules",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
        },
      ],
    },
    {
      name: "Structure of The Atom",
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
      name: "Matter in Our Surroundings",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/matter-in-our-surroundings",
        },
      ],
    },
    {
      name: "Is Matter Around Us Pure ",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/is-matter-around-us-pure",
        },
      ],
    },
    {
      name: "Atoms and Molecules",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/chemistry/atoms-and-molecules",
        },
      ],
    },
    {
      name: "Structure of The Atom",
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
  video_lectures: [
    {
      name: "Matter in Our Surroundings",
      options: [
        {
          path: "/dummy/path/matter-in-our-surroundings/opt1",
          thumbnail: "/images/matter_thumbnail1.jpg",
          channel: "Chemistry Channel 1",
        },
        {
          path: "/dummy/path/matter-in-our-surroundings/opt2",
          thumbnail: "/images/matter_thumbnail2.jpg",
          channel: "Chemistry Channel 2",
        },
      ],
    },
    {
      name: "Is Matter Around Us Pure",
      options: [
        {
          path: "/dummy/path/is-matter-around-us-pure/opt1",
          thumbnail: "/images/pure_matter_thumbnail1.jpg",
          channel: "Chemistry Channel 3",
        },
        {
          path: "/dummy/path/is-matter-around-us-pure/opt2",
          thumbnail: "/images/pure_matter_thumbnail2.jpg",
          channel: "Chemistry Channel 4",
        },
      ],
    },
    {
      name: "Atoms and Molecules",
      options: [
        {
          path: "/dummy/path/atoms-and-molecules/opt1",
          thumbnail: "/images/atoms_thumbnail1.jpg",
          channel: "Chemistry Channel 5",
        },
        {
          path: "/dummy/path/atoms-and-molecules/opt2",
          thumbnail: "/images/atoms_thumbnail2.jpg",
          channel: "Chemistry Channel 6",
        },
      ],
    },
    {
      name: "Structure of The Atom",
      options: [
        {
          path: "/dummy/path/structure-of-the-atom/opt1",
          thumbnail: "/images/structure_thumbnail1.jpg",
          channel: "Chemistry Channel 7",
        },
        {
          path: "/dummy/path/structure-of-the-atom/opt2",
          thumbnail: "/images/structure_thumbnail2.jpg",
          channel: "Chemistry Channel 8",
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
  ],
  pyq: [
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
  ],
  question_banks: [
    {
      name: "The Fundamental Unit of Life",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/the-fundamental-unit-of-life",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/the-fundamental-unit-of-life",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/the-fundamental-unit-of-life",
        },
      ],
    },
    {
      name: "Tissues",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/tissues",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/tissues",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/tissues",
        },
      ],
    },
    {
      name: "Diversity in Living Organisms",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
        },
      ],
    },
    {
      name: "Why do We Fall Ill",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
        },
      ],
    },
    {
      name: "Natural Resources",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/natural-resources",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/natural-resources",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/natural-resources",
        },
      ],
    },
    {
      name: "Improvement in Food Resources",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
        },
      ],
    },
  ],
  sample_paper: [
    {
      name: "The Fundamental Unit of Life",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/the-fundamental-unit-of-life",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/the-fundamental-unit-of-life",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/the-fundamental-unit-of-life",
        },
      ],
    },
    {
      name: "Tissues",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/tissues",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/tissues",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/tissues",
        },
      ],
    },
    {
      name: "Diversity in Living Organisms",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/diversity-in-living-organisms",
        },
      ],
    },
    {
      name: "Why do We Fall Ill",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/why-do-we-fall-ill",
        },
      ],
    },
    {
      name: "Natural Resources",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/natural-resources",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/natural-resources",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/natural-resources",
        },
      ],
    },
    {
      name: "Improvement in Food Resources",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-9/biology/improvement-in-food-resources",
        },
      ],
    },
  ],
  video_lectures: [
    {
      name: "The Fundamental Unit of Life",
      options: [
        {
          path: "/dummy/path/fundamental-unit-of-life/opt1",
          thumbnail: "/images/fundamental_unit_thumbnail1.jpg",
          channel: "Biology Channel 1",
        },
        {
          path: "/dummy/path/fundamental-unit-of-life/opt2",
          thumbnail: "/images/fundamental_unit_thumbnail2.jpg",
          channel: "Biology Channel 2",
        },
      ],
    },
    {
      name: "Tissues",
      options: [
        {
          path: "/dummy/path/tissues/opt1",
          thumbnail: "/images/tissues_thumbnail1.jpg",
          channel: "Biology Channel 3",
        },
        {
          path: "/dummy/path/tissues/opt2",
          thumbnail: "/images/tissues_thumbnail2.jpg",
          channel: "Biology Channel 4",
        },
      ],
    },
    {
      name: "Diversity in Living Organisms",
      options: [
        {
          path: "/dummy/path/diversity-in-living-organisms/opt1",
          thumbnail: "/images/diversity_thumbnail1.jpg",
          channel: "Biology Channel 5",
        },
        {
          path: "/dummy/path/diversity-in-living-organisms/opt2",
          thumbnail: "/images/diversity_thumbnail2.jpg",
          channel: "Biology Channel 6",
        },
      ],
    },
    {
      name: "Why do We Fall Ill",
      options: [
        {
          path: "/dummy/path/why-do-we-fall-ill/opt1",
          thumbnail: "/images/fall_ill_thumbnail1.jpg",
          channel: "Biology Channel 7",
        },
        {
          path: "/dummy/path/why-do-we-fall-ill/opt2",
          thumbnail: "/images/fall_ill_thumbnail2.jpg",
          channel: "Biology Channel 8",
        },
      ],
    },
    {
      name: "Natural Resources",
      options: [
        {
          path: "/dummy/path/natural-resources/opt1",
          thumbnail: "/images/natural_resources_thumbnail1.jpg",
          channel: "Biology Channel 9",
        },
        {
          path: "/dummy/path/natural-resources/opt2",
          thumbnail: "/images/natural_resources_thumbnail2.jpg",
          channel: "Biology Channel 10",
        },
      ],
    },
    {
      name: "Improvement in Food Resources",
      options: [
        {
          path: "/dummy/path/improvement-in-food-resources/opt1",
          thumbnail: "/images/food_resources_thumbnail1.jpg",
          channel: "Biology Channel 11",
        },
        {
          path: "/dummy/path/improvement-in-food-resources/opt2",
          thumbnail: "/images/food_resources_thumbnail2.jpg",
          channel: "Biology Channel 12",
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
