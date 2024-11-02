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
  { name: "Maths", path: "/StudyResources/Grade-11/maths", icon: rocket },
  {
    name: "Physics",
    path: "/StudyResources/Grade-11/physics",
    icon: lectures_svg,
  },
  {
    name: "Chemistry",
    path: "/StudyResources/Grade-11/chemistry",
    icon: maps_svg,
  },
  {
    name: "Biology",
    path: "/StudyResources/Grade-11/biology",
    icon: qbank_svg,
  },
];
export const maths = {
  notes: [
    { name: "Sets", path: "/StudyResources/Grade-11/maths/sets" },
    {
      name: "Relations and Functions",
      path: "/StudyResources/Grade-11/maths/relations-and-functions",
    },
    {
      name: "Trigonometric Functions",
      path: "/StudyResources/Grade-11/maths/trigonometric-functions",
    },
    {
      name: "Complex Numbers and Quadratic Equations",
      path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
    },
    {
      name: "Linear Inequalities",
      path: "/StudyResources/Grade-11/maths/linear-inequalities",
    },
    {
      name: "Permutations and Combinations",
      path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
    },
    {
      name: "Binomial Theorem",
      path: "/StudyResources/Grade-11/maths/binomial-theorem",
    },
    {
      name: "Sequences and Series",
      path: "/StudyResources/Grade-11/maths/sequences-and-series",
    },
    {
      name: "Straight Lines",
      path: "/StudyResources/Grade-11/maths/straight-lines",
    },
    {
      name: "Conic Sections",
      path: "/StudyResources/Grade-11/maths/conic-sections",
    },
    {
      name: "Introduction to Three Dimensional Geometry",
      path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
    },
    {
      name: "Limits and Derivatives",
      path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
    },
    { name: "Statistics", path: "/StudyResources/Grade-11/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-11/maths/probability" },
  ],
  question_banks: [
    {
      name: "Sets",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/maths/sets" },
        { name: "Set 2", path: "/StudyResources/Grade-11/maths/sets" },
        { name: "Set 3", path: "/StudyResources/Grade-11/maths/sets" },
      ],
    },
    {
      name: "Relations and Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/relations-and-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/relations-and-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/relations-and-functions",
        },
      ],
    },
    {
      name: "Trigonometric Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/trigonometric-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/trigonometric-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/trigonometric-functions",
        },
      ],
    },
    {
      name: "Complex Numbers and Quadratic Equations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
        },
      ],
    },
    {
      name: "Linear Inequalities",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/linear-inequalities",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/linear-inequalities",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/linear-inequalities",
        },
      ],
    },
    {
      name: "Permutations and Combinations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
        },
      ],
    },
    {
      name: "Binomial Theorem",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/binomial-theorem",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/binomial-theorem",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/binomial-theorem",
        },
      ],
    },
    {
      name: "Sequences and Series",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/sequences-and-series",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/sequences-and-series",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/sequences-and-series",
        },
      ],
    },
    {
      name: "Straight Lines",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/straight-lines",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/straight-lines",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/straight-lines",
        },
      ],
    },
    {
      name: "Conic Sections",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/conic-sections",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/conic-sections",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/conic-sections",
        },
      ],
    },
    {
      name: "Introduction to Three Dimensional Geometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
        },
      ],
    },
    {
      name: "Limits and Derivatives",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
        },
      ],
    },
    {
      name: "Statistics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/maths/statistics" },
        { name: "Set 2", path: "/StudyResources/Grade-11/maths/statistics" },
        { name: "Set 3", path: "/StudyResources/Grade-11/maths/statistics" },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/maths/probability" },
        { name: "Set 2", path: "/StudyResources/Grade-11/maths/probability" },
        { name: "Set 3", path: "/StudyResources/Grade-11/maths/probability" },
      ],
    },
  ],

  sample_paper: [
    {
      name: "Sets",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/maths/sets" },
        { name: "Set 2", path: "/StudyResources/Grade-11/maths/sets" },
        { name: "Set 3", path: "/StudyResources/Grade-11/maths/sets" },
      ],
    },
    {
      name: "Relations and Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/relations-and-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/relations-and-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/relations-and-functions",
        },
      ],
    },
    {
      name: "Trigonometric Functions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/trigonometric-functions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/trigonometric-functions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/trigonometric-functions",
        },
      ],
    },
    {
      name: "Complex Numbers and Quadratic Equations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
        },
      ],
    },
    {
      name: "Linear Inequalities",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/linear-inequalities",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/linear-inequalities",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/linear-inequalities",
        },
      ],
    },
    {
      name: "Permutations and Combinations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
        },
      ],
    },
    {
      name: "Binomial Theorem",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/binomial-theorem",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/binomial-theorem",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/binomial-theorem",
        },
      ],
    },
    {
      name: "Sequences and Series",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/sequences-and-series",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/sequences-and-series",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/sequences-and-series",
        },
      ],
    },
    {
      name: "Straight Lines",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/straight-lines",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/straight-lines",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/straight-lines",
        },
      ],
    },
    {
      name: "Conic Sections",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/conic-sections",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/conic-sections",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/conic-sections",
        },
      ],
    },
    {
      name: "Introduction to Three Dimensional Geometry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
        },
      ],
    },
    {
      name: "Limits and Derivatives",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
        },
      ],
    },
    {
      name: "Statistics",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/maths/statistics" },
        { name: "Set 2", path: "/StudyResources/Grade-11/maths/statistics" },
        { name: "Set 3", path: "/StudyResources/Grade-11/maths/statistics" },
      ],
    },
    {
      name: "Probability",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/maths/probability" },
        { name: "Set 2", path: "/StudyResources/Grade-11/maths/probability" },
        { name: "Set 3", path: "/StudyResources/Grade-11/maths/probability" },
      ],
    },
  ],
  video_lectures: [
    { name: "Sets", path: "/StudyResources/Grade-11/maths/sets" },
    {
      name: "Relations and Functions",
      path: "/StudyResources/Grade-11/maths/relations-and-functions",
    },
    {
      name: "Trigonometric Functions",
      path: "/StudyResources/Grade-11/maths/trigonometric-functions",
    },
    {
      name: "Complex Numbers and Quadratic Equations",
      path: "/StudyResources/Grade-11/maths/complex-numbers-and-quadratic-equations",
    },
    {
      name: "Linear Inequalities",
      path: "/StudyResources/Grade-11/maths/linear-inequalities",
    },
    {
      name: "Permutations and Combinations",
      path: "/StudyResources/Grade-11/maths/permutations-and-combinations",
    },
    {
      name: "Binomial Theorem",
      path: "/StudyResources/Grade-11/maths/binomial-theorem",
    },
    {
      name: "Sequences and Series",
      path: "/StudyResources/Grade-11/maths/sequences-and-series",
    },
    {
      name: "Straight Lines",
      path: "/StudyResources/Grade-11/maths/straight-lines",
    },
    {
      name: "Conic Sections",
      path: "/StudyResources/Grade-11/maths/conic-sections",
    },
    {
      name: "Introduction to Three Dimensional Geometry",
      path: "/StudyResources/Grade-11/maths/introduction-to-three-dimensional-geometry",
    },
    {
      name: "Limits and Derivatives",
      path: "/StudyResources/Grade-11/maths/limits-and-derivatives",
    },
    { name: "Statistics", path: "/StudyResources/Grade-11/maths/statistics" },
    { name: "Probability", path: "/StudyResources/Grade-11/maths/probability" },
  ],
  books: [
    {
      title: "RD Sharma",
      thumbnail: rd_maths_9,
      link: "https://example.com/rd-sharma",
    },
    {
      title: "RS Aggarwal",
      thumbnail: rs_maths_9,
      link: "https://example.com/rs-aggarwal",
    },
    {
      title: "Pearson",
      thumbnail: pearson,
      link: "https://example.com/pearson",
    },
  ],
};

export const physics = {
  notes: [
    {
      name: "Physical World",
      path: "/StudyResources/Grade-11/physics/physical-world",
    },
    {
      name: "Units and Measurements",
      path: "/StudyResources/Grade-11/physics/units-and-measurements",
    },
    {
      name: "Motion in a Straight Line",
      path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
    },
    {
      name: "Motion in a Plane",
      path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
    },
    {
      name: "Law of Motion",
      path: "/StudyResources/Grade-11/physics/law-of-motion",
    },
    {
      name: "Work, Energy and Power",
      path: "/StudyResources/Grade-11/physics/work-energy-and-power",
    },
    {
      name: "Systems of Particles and Rotational Motion",
      path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
    },
    {
      name: "Gravitation",
      path: "/StudyResources/Grade-11/physics/gravitation",
    },
    {
      name: "Mechanical Properties of Solids",
      path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
    },
    {
      name: "Mechanical Properties of Fluids",
      path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
    },
    {
      name: "Thermal Properties of Matter",
      path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
    },
    {
      name: "Thermodynamics",
      path: "/StudyResources/Grade-11/physics/thermodynamics",
    },
    {
      name: "Kinetic Theory",
      path: "/StudyResources/Grade-11/physics/kinetic-theory",
    },
    {
      name: "Oscillations",
      path: "/StudyResources/Grade-11/physics/oscillations",
    },
    { name: "Waves", path: "/StudyResources/Grade-11/physics/waves" },
  ],
  pyq: [
    {
      name: "Physical World",
      path: "/StudyResources/Grade-11/physics/physical-world",
    },
    {
      name: "Units and Measurements",
      path: "/StudyResources/Grade-11/physics/units-and-measurements",
    },
    {
      name: "Motion in a Straight Line",
      path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
    },
    {
      name: "Motion in a Plane",
      path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
    },
    {
      name: "Law of Motion",
      path: "/StudyResources/Grade-11/physics/law-of-motion",
    },
    {
      name: "Work, Energy and Power",
      path: "/StudyResources/Grade-11/physics/work-energy-and-power",
    },
    {
      name: "Systems of Particles and Rotational Motion",
      path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
    },
    {
      name: "Gravitation",
      path: "/StudyResources/Grade-11/physics/gravitation",
    },
    {
      name: "Mechanical Properties of Solids",
      path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
    },
    {
      name: "Mechanical Properties of Fluids",
      path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
    },
    {
      name: "Thermal Properties of Matter",
      path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
    },
    {
      name: "Thermodynamics",
      path: "/StudyResources/Grade-11/physics/thermodynamics",
    },
    {
      name: "Kinetic Theory",
      path: "/StudyResources/Grade-11/physics/kinetic-theory",
    },
    {
      name: "Oscillations",
      path: "/StudyResources/Grade-11/physics/oscillations",
    },
    { name: "Waves", path: "/StudyResources/Grade-11/physics/waves" },
  ],
  question_banks: [
    {
      name: "Physical World",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/physical-world",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/physical-world",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/physical-world",
        },
      ],
    },
    {
      name: "Units and Measurements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/units-and-measurements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/units-and-measurements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/units-and-measurements",
        },
      ],
    },
    {
      name: "Motion in a Straight Line",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
        },
      ],
    },
    {
      name: "Motion in a Plane",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
        },
      ],
    },
    {
      name: "Law of Motion",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/law-of-motion",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/law-of-motion",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/law-of-motion",
        },
      ],
    },
    {
      name: "Work, Energy and Power",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/work-energy-and-power",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/work-energy-and-power",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/work-energy-and-power",
        },
      ],
    },
    {
      name: "Systems of Particles and Rotational Motion",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
        },
      ],
    },
    {
      name: "Gravitation",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/physics/gravitation" },
        { name: "Set 2", path: "/StudyResources/Grade-11/physics/gravitation" },
        { name: "Set 3", path: "/StudyResources/Grade-11/physics/gravitation" },
      ],
    },
    {
      name: "Mechanical Properties of Solids",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
        },
      ],
    },
    {
      name: "Mechanical Properties of Fluids",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
        },
      ],
    },
    {
      name: "Thermal Properties of Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
        },
      ],
    },
    {
      name: "Thermodynamics",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/thermodynamics",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/thermodynamics",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/thermodynamics",
        },
      ],
    },
    {
      name: "Kinetic Theory",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/kinetic-theory",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/kinetic-theory",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/kinetic-theory",
        },
      ],
    },
    {
      name: "Oscillations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/oscillations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/oscillations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/oscillations",
        },
      ],
    },
    {
      name: "Waves",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/physics/waves" },
        { name: "Set 2", path: "/StudyResources/Grade-11/physics/waves" },
        { name: "Set 3", path: "/StudyResources/Grade-11/physics/waves" },
      ],
    },
  ],

  sample_paper: [
    {
      name: "Physical World",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/physical-world",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/physical-world",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/physical-world",
        },
      ],
    },
    {
      name: "Units and Measurements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/units-and-measurements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/units-and-measurements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/units-and-measurements",
        },
      ],
    },
    {
      name: "Motion in a Straight Line",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
        },
      ],
    },
    {
      name: "Motion in a Plane",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
        },
      ],
    },
    {
      name: "Law of Motion",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/law-of-motion",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/law-of-motion",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/law-of-motion",
        },
      ],
    },
    {
      name: "Work, Energy and Power",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/work-energy-and-power",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/work-energy-and-power",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/work-energy-and-power",
        },
      ],
    },
    {
      name: "Systems of Particles and Rotational Motion",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
        },
      ],
    },
    {
      name: "Gravitation",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/physics/gravitation" },
        { name: "Set 2", path: "/StudyResources/Grade-11/physics/gravitation" },
        { name: "Set 3", path: "/StudyResources/Grade-11/physics/gravitation" },
      ],
    },
    {
      name: "Mechanical Properties of Solids",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
        },
      ],
    },
    {
      name: "Mechanical Properties of Fluids",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
        },
      ],
    },
    {
      name: "Thermal Properties of Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
        },
      ],
    },
    {
      name: "Thermodynamics",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/thermodynamics",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/thermodynamics",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/thermodynamics",
        },
      ],
    },
    {
      name: "Kinetic Theory",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/kinetic-theory",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/kinetic-theory",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/kinetic-theory",
        },
      ],
    },
    {
      name: "Oscillations",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/physics/oscillations",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/physics/oscillations",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/physics/oscillations",
        },
      ],
    },
    {
      name: "Waves",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/physics/waves" },
        { name: "Set 2", path: "/StudyResources/Grade-11/physics/waves" },
        { name: "Set 3", path: "/StudyResources/Grade-11/physics/waves" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Physical World",
      path: "/StudyResources/Grade-11/physics/physical-world",
    },
    {
      name: "Units and Measurements",
      path: "/StudyResources/Grade-11/physics/units-and-measurements",
    },
    {
      name: "Motion in a Straight Line",
      path: "/StudyResources/Grade-11/physics/motion-in-a-straight-line",
    },
    {
      name: "Motion in a Plane",
      path: "/StudyResources/Grade-11/physics/motion-in-a-plane",
    },
    {
      name: "Law of Motion",
      path: "/StudyResources/Grade-11/physics/law-of-motion",
    },
    {
      name: "Work, Energy and Power",
      path: "/StudyResources/Grade-11/physics/work-energy-and-power",
    },
    {
      name: "Systems of Particles and Rotational Motion",
      path: "/StudyResources/Grade-11/physics/systems-of-particles-and-rotational-motion",
    },
    {
      name: "Gravitation",
      path: "/StudyResources/Grade-11/physics/gravitation",
    },
    {
      name: "Mechanical Properties of Solids",
      path: "/StudyResources/Grade-11/physics/mechanical-properties-of-solids",
    },
    {
      name: "Mechanical Properties of Fluids",
      path: "/StudyResources/Grade-11/physics/mechanical-properties-of-fluids",
    },
    {
      name: "Thermal Properties of Matter",
      path: "/StudyResources/Grade-11/physics/thermal-properties-of-matter",
    },
    {
      name: "Thermodynamics",
      path: "/StudyResources/Grade-11/physics/thermodynamics",
    },
    {
      name: "Kinetic Theory",
      path: "/StudyResources/Grade-11/physics/kinetic-theory",
    },
    {
      name: "Oscillations",
      path: "/StudyResources/Grade-11/physics/oscillations",
    },
    { name: "Waves", path: "/StudyResources/Grade-11/physics/waves" },
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
      name: "Basic Concepts of Chemistry",
      path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
    },
    {
      name: "Atomic Structure",
      path: "/StudyResources/Grade-11/chemistry/atomic-structure",
    },
    {
      name: "Classification of Elements & Periodicity in Properties",
      path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
    },
    {
      name: "States of Matter",
      path: "/StudyResources/Grade-11/chemistry/states-of-matter",
    },
    {
      name: "Chemical Bonding",
      path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
    },
    {
      name: "Thermodynamics",
      path: "/StudyResources/Grade-11/chemistry/thermodynamics",
    },
    {
      name: "Chemical Equilibrium",
      path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
    },
    {
      name: "Ionic Equilibrium",
      path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
    },
    {
      name: "Redox Reactions",
      path: "/StudyResources/Grade-11/chemistry/redox-reactions",
    },
    { name: "Hydrogen", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
    {
      name: "S-Block Elements",
      path: "/StudyResources/Grade-11/chemistry/s-block-elements",
    },
    {
      name: "Carbon Family p-block Elements",
      path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
    },
    {
      name: "Boron Family p-block Elements",
      path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
    },
    {
      name: "General Organic Chemistry",
      path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
    },
    {
      name: "Hydrocarbons",
      path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
    },
  ],
  pyq: [
    {
      name: "Basic Concepts of Chemistry",
      path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
    },
    {
      name: "Atomic Structure",
      path: "/StudyResources/Grade-11/chemistry/atomic-structure",
    },
    {
      name: "Classification of Elements & Periodicity in Properties",
      path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
    },
    {
      name: "States of Matter",
      path: "/StudyResources/Grade-11/chemistry/states-of-matter",
    },
    {
      name: "Chemical Bonding",
      path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
    },
    {
      name: "Thermodynamics",
      path: "/StudyResources/Grade-11/chemistry/thermodynamics",
    },
    {
      name: "Chemical Equilibrium",
      path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
    },
    {
      name: "Ionic Equilibrium",
      path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
    },
    {
      name: "Redox Reactions",
      path: "/StudyResources/Grade-11/chemistry/redox-reactions",
    },
    { name: "Hydrogen", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
    {
      name: "S-Block Elements",
      path: "/StudyResources/Grade-11/chemistry/s-block-elements",
    },
    {
      name: "Carbon Family p-block Elements",
      path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
    },
    {
      name: "Boron Family p-block Elements",
      path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
    },
    {
      name: "General Organic Chemistry",
      path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
    },
    {
      name: "Hydrocarbons",
      path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
    },
  ],
  question_banks: [
    {
      name: "Basic Concepts of Chemistry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
        },
      ],
    },
    {
      name: "Atomic Structure",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/atomic-structure",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/atomic-structure",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/atomic-structure",
        },
      ],
    },
    {
      name: "Classification of Elements & Periodicity in Properties",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
        },
      ],
    },
    {
      name: "States of Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/states-of-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/states-of-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/states-of-matter",
        },
      ],
    },
    {
      name: "Chemical Bonding",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
        },
      ],
    },
    {
      name: "Thermodynamics",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/thermodynamics",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/thermodynamics",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/thermodynamics",
        },
      ],
    },
    {
      name: "Chemical Equilibrium",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
        },
      ],
    },
    {
      name: "Ionic Equilibrium",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
        },
      ],
    },
    {
      name: "Redox Reactions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/redox-reactions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/redox-reactions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/redox-reactions",
        },
      ],
    },
    {
      name: "Hydrogen",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
        { name: "Set 2", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
        { name: "Set 3", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
      ],
    },
    {
      name: "S-Block Elements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/s-block-elements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/s-block-elements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/s-block-elements",
        },
      ],
    },
    {
      name: "Carbon Family p-block Elements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
        },
      ],
    },
    {
      name: "Boron Family p-block Elements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
        },
      ],
    },
    {
      name: "General Organic Chemistry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
        },
      ],
    },
    {
      name: "Hydrocarbons",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
        },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Basic Concepts of Chemistry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
        },
      ],
    },
    {
      name: "Atomic Structure",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/atomic-structure",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/atomic-structure",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/atomic-structure",
        },
      ],
    },
    {
      name: "Classification of Elements & Periodicity in Properties",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
        },
      ],
    },
    {
      name: "States of Matter",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/states-of-matter",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/states-of-matter",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/states-of-matter",
        },
      ],
    },
    {
      name: "Chemical Bonding",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
        },
      ],
    },
    {
      name: "Thermodynamics",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/thermodynamics",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/thermodynamics",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/thermodynamics",
        },
      ],
    },
    {
      name: "Chemical Equilibrium",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
        },
      ],
    },
    {
      name: "Ionic Equilibrium",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
        },
      ],
    },
    {
      name: "Redox Reactions",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/redox-reactions",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/redox-reactions",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/redox-reactions",
        },
      ],
    },
    {
      name: "Hydrogen",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
        { name: "Set 2", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
        { name: "Set 3", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
      ],
    },
    {
      name: "S-Block Elements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/s-block-elements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/s-block-elements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/s-block-elements",
        },
      ],
    },
    {
      name: "Carbon Family p-block Elements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
        },
      ],
    },
    {
      name: "Boron Family p-block Elements",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
        },
      ],
    },
    {
      name: "General Organic Chemistry",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
        },
      ],
    },
    {
      name: "Hydrocarbons",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
        },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Basic Concepts of Chemistry",
      path: "/StudyResources/Grade-11/chemistry/basic-concepts-of-chemistry",
    },
    {
      name: "Atomic Structure",
      path: "/StudyResources/Grade-11/chemistry/atomic-structure",
    },
    {
      name: "Classification of Elements & Periodicity in Properties",
      path: "/StudyResources/Grade-11/chemistry/classification-elements-periodicity",
    },
    {
      name: "States of Matter",
      path: "/StudyResources/Grade-11/chemistry/states-of-matter",
    },
    {
      name: "Chemical Bonding",
      path: "/StudyResources/Grade-11/chemistry/chemical-bonding",
    },
    {
      name: "Thermodynamics",
      path: "/StudyResources/Grade-11/chemistry/thermodynamics",
    },
    {
      name: "Chemical Equilibrium",
      path: "/StudyResources/Grade-11/chemistry/chemical-equilibrium",
    },
    {
      name: "Ionic Equilibrium",
      path: "/StudyResources/Grade-11/chemistry/ionic-equilibrium",
    },
    {
      name: "Redox Reactions",
      path: "/StudyResources/Grade-11/chemistry/redox-reactions",
    },
    { name: "Hydrogen", path: "/StudyResources/Grade-11/chemistry/hydrogen" },
    {
      name: "S-Block Elements",
      path: "/StudyResources/Grade-11/chemistry/s-block-elements",
    },
    {
      name: "Carbon Family p-block Elements",
      path: "/StudyResources/Grade-11/chemistry/carbon-family-p-block-elements",
    },
    {
      name: "Boron Family p-block Elements",
      path: "/StudyResources/Grade-11/chemistry/boron-family-p-block-elements",
    },
    {
      name: "General Organic Chemistry",
      path: "/StudyResources/Grade-11/chemistry/general-organic-chemistry",
    },
    {
      name: "Hydrocarbons",
      path: "/StudyResources/Grade-11/chemistry/hydrocarbons",
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
      name: "The Living World",
      path: "/StudyResources/Grade-11/biology/living-world",
    },
    {
      name: "Biological Classification",
      path: "/StudyResources/Grade-11/biology/biological-classification",
    },
    {
      name: "Plant Kingdom",
      path: "/StudyResources/Grade-11/biology/plant-kingdom",
    },
    {
      name: "Animal Kingdom",
      path: "/StudyResources/Grade-11/biology/animal-kingdom",
    },
    {
      name: "Morphology of Flowering Plants",
      path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
    },
    {
      name: "Anatomy of Flowering Plants",
      path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
    },
    {
      name: "Structural Organisation in Animals",
      path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
    },
    {
      name: "Cell, The Unit of Life",
      path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
    },
    {
      name: "Biomolecules",
      path: "/StudyResources/Grade-11/biology/biomolecules",
    },
    {
      name: "Cell Cycle and Cell Division",
      path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
    },
    {
      name: "Transport in Plants",
      path: "/StudyResources/Grade-11/biology/transport-in-plants",
    },
    {
      name: "Mineral Nutrition",
      path: "/StudyResources/Grade-11/biology/mineral-nutrition",
    },
    {
      name: "Photosynthesis in Higher Plants",
      path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
    },
    {
      name: "Respiration in Plants",
      path: "/StudyResources/Grade-11/biology/respiration-in-plants",
    },
    {
      name: "Plant Growth and Development",
      path: "/StudyResources/Grade-11/biology/plant-growth-development",
    },
    {
      name: "Digestion and Absorption",
      path: "/StudyResources/Grade-11/biology/digestion-absorption",
    },
    {
      name: "Breathing and Exchange of Gases",
      path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
    },
    {
      name: "Body Fluids and Circulation",
      path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
    },
    {
      name: "Excretory Products and their Elimination",
      path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
    },
    {
      name: "Locomotion and Movement",
      path: "/StudyResources/Grade-11/biology/locomotion-movement",
    },
    {
      name: "Neural Control and Coordination",
      path: "/StudyResources/Grade-11/biology/neural-control-coordination",
    },
    {
      name: "Chemical Coordination and Integration",
      path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
    },
  ],
  pyq: [
    {
      name: "The Living World",
      path: "/StudyResources/Grade-11/biology/living-world",
    },
    {
      name: "Biological Classification",
      path: "/StudyResources/Grade-11/biology/biological-classification",
    },
    {
      name: "Plant Kingdom",
      path: "/StudyResources/Grade-11/biology/plant-kingdom",
    },
    {
      name: "Animal Kingdom",
      path: "/StudyResources/Grade-11/biology/animal-kingdom",
    },
    {
      name: "Morphology of Flowering Plants",
      path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
    },
    {
      name: "Anatomy of Flowering Plants",
      path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
    },
    {
      name: "Structural Organisation in Animals",
      path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
    },
    {
      name: "Cell, The Unit of Life",
      path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
    },
    {
      name: "Biomolecules",
      path: "/StudyResources/Grade-11/biology/biomolecules",
    },
    {
      name: "Cell Cycle and Cell Division",
      path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
    },
    {
      name: "Transport in Plants",
      path: "/StudyResources/Grade-11/biology/transport-in-plants",
    },
    {
      name: "Mineral Nutrition",
      path: "/StudyResources/Grade-11/biology/mineral-nutrition",
    },
    {
      name: "Photosynthesis in Higher Plants",
      path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
    },
    {
      name: "Respiration in Plants",
      path: "/StudyResources/Grade-11/biology/respiration-in-plants",
    },
    {
      name: "Plant Growth and Development",
      path: "/StudyResources/Grade-11/biology/plant-growth-development",
    },
    {
      name: "Digestion and Absorption",
      path: "/StudyResources/Grade-11/biology/digestion-absorption",
    },
    {
      name: "Breathing and Exchange of Gases",
      path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
    },
    {
      name: "Body Fluids and Circulation",
      path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
    },
    {
      name: "Excretory Products and their Elimination",
      path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
    },
    {
      name: "Locomotion and Movement",
      path: "/StudyResources/Grade-11/biology/locomotion-movement",
    },
    {
      name: "Neural Control and Coordination",
      path: "/StudyResources/Grade-11/biology/neural-control-coordination",
    },
    {
      name: "Chemical Coordination and Integration",
      path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
    },
  ],
  question_banks: [
    {
      name: "The Living World",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/living-world" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/living-world" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/living-world" },
      ],
    },
    {
      name: "Biological Classification",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/biological-classification" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/biological-classification" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/biological-classification" },
      ],
    },
    {
      name: "Plant Kingdom",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/plant-kingdom" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/plant-kingdom" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/plant-kingdom" },
      ],
    },
    {
      name: "Animal Kingdom",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/animal-kingdom" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/animal-kingdom" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/animal-kingdom" },
      ],
    },
    {
      name: "Morphology of Flowering Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/morphology-flowering-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/morphology-flowering-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/morphology-flowering-plants" },
      ],
    },
    {
      name: "Anatomy of Flowering Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants" },
      ],
    },
    {
      name: "Structural Organisation in Animals",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/structural-organisation-animals" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/structural-organisation-animals" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/structural-organisation-animals" },
      ],
    },
    {
      name: "Cell, The Unit of Life",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/cell-unit-of-life" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/cell-unit-of-life" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/cell-unit-of-life" },
      ],
    },
    {
      name: "Biomolecules",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/biomolecules" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/biomolecules" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/biomolecules" },
      ],
    },
    {
      name: "Cell Cycle and Cell Division",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division" },
      ],
    },
    {
      name: "Transport in Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/transport-in-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/transport-in-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/transport-in-plants" },
      ],
    },
    {
      name: "Mineral Nutrition",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/mineral-nutrition" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/mineral-nutrition" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/mineral-nutrition" },
      ],
    },
    {
      name: "Photosynthesis in Higher Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants" },
      ],
    },
    {
      name: "Respiration in Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/respiration-in-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/respiration-in-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/respiration-in-plants" },
      ],
    },
    {
      name: "Plant Growth and Development",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/plant-growth-development" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/plant-growth-development" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/plant-growth-development" },
      ],
    },
    {
      name: "Digestion and Absorption",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/digestion-absorption" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/digestion-absorption" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/digestion-absorption" },
      ],
    },
    {
      name: "Breathing and Exchange of Gases",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/breathing-exchange-gases" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/breathing-exchange-gases" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/breathing-exchange-gases" },
      ],
    },
    {
      name: "Body Fluids and Circulation",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/body-fluids-circulation" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/body-fluids-circulation" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/body-fluids-circulation" },
      ],
    },
    {
      name: "Excretory Products and their Elimination",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/excretory-products-elimination" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/excretory-products-elimination" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/excretory-products-elimination" },
      ],
    },
    {
      name: "Locomotion and Movement",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/locomotion-movement" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/locomotion-movement" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/locomotion-movement" },
      ],
    },
    {
      name: "Neural Control and Coordination",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/neural-control-coordination" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/neural-control-coordination" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/neural-control-coordination" },
      ],
    },
    {
      name: "Chemical Coordination and Integration",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/chemical-coordination-integration" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/chemical-coordination-integration" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/chemical-coordination-integration" },
      ],
    },
  ],
  
  sample_paper: [
    {
      name: "The Living World",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/living-world" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/living-world" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/living-world" },
      ],
    },
    {
      name: "Biological Classification",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/biological-classification" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/biological-classification" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/biological-classification" },
      ],
    },
    {
      name: "Plant Kingdom",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/plant-kingdom" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/plant-kingdom" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/plant-kingdom" },
      ],
    },
    {
      name: "Animal Kingdom",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/animal-kingdom" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/animal-kingdom" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/animal-kingdom" },
      ],
    },
    {
      name: "Morphology of Flowering Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/morphology-flowering-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/morphology-flowering-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/morphology-flowering-plants" },
      ],
    },
    {
      name: "Anatomy of Flowering Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants" },
      ],
    },
    {
      name: "Structural Organisation in Animals",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/structural-organisation-animals" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/structural-organisation-animals" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/structural-organisation-animals" },
      ],
    },
    {
      name: "Cell, The Unit of Life",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/cell-unit-of-life" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/cell-unit-of-life" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/cell-unit-of-life" },
      ],
    },
    {
      name: "Biomolecules",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/biomolecules" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/biomolecules" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/biomolecules" },
      ],
    },
    {
      name: "Cell Cycle and Cell Division",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division" },
      ],
    },
    {
      name: "Transport in Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/transport-in-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/transport-in-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/transport-in-plants" },
      ],
    },
    {
      name: "Mineral Nutrition",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/mineral-nutrition" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/mineral-nutrition" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/mineral-nutrition" },
      ],
    },
    {
      name: "Photosynthesis in Higher Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants" },
      ],
    },
    {
      name: "Respiration in Plants",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/respiration-in-plants" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/respiration-in-plants" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/respiration-in-plants" },
      ],
    },
    {
      name: "Plant Growth and Development",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/plant-growth-development" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/plant-growth-development" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/plant-growth-development" },
      ],
    },
    {
      name: "Digestion and Absorption",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/digestion-absorption" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/digestion-absorption" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/digestion-absorption" },
      ],
    },
    {
      name: "Breathing and Exchange of Gases",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/breathing-exchange-gases" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/breathing-exchange-gases" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/breathing-exchange-gases" },
      ],
    },
    {
      name: "Body Fluids and Circulation",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/body-fluids-circulation" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/body-fluids-circulation" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/body-fluids-circulation" },
      ],
    },
    {
      name: "Excretory Products and their Elimination",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/excretory-products-elimination" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/excretory-products-elimination" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/excretory-products-elimination" },
      ],
    },
    {
      name: "Locomotion and Movement",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/locomotion-movement" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/locomotion-movement" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/locomotion-movement" },
      ],
    },
    {
      name: "Neural Control and Coordination",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/neural-control-coordination" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/neural-control-coordination" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/neural-control-coordination" },
      ],
    },
    {
      name: "Chemical Coordination and Integration",
      sets: [
        { name: "Set 1", path: "/StudyResources/Grade-11/biology/chemical-coordination-integration" },
        { name: "Set 2", path: "/StudyResources/Grade-11/biology/chemical-coordination-integration" },
        { name: "Set 3", path: "/StudyResources/Grade-11/biology/chemical-coordination-integration" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "The Living World",
      path: "/StudyResources/Grade-11/biology/living-world",
    },
    {
      name: "Biological Classification",
      path: "/StudyResources/Grade-11/biology/biological-classification",
    },
    {
      name: "Plant Kingdom",
      path: "/StudyResources/Grade-11/biology/plant-kingdom",
    },
    {
      name: "Animal Kingdom",
      path: "/StudyResources/Grade-11/biology/animal-kingdom",
    },
    {
      name: "Morphology of Flowering Plants",
      path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
    },
    {
      name: "Anatomy of Flowering Plants",
      path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
    },
    {
      name: "Structural Organisation in Animals",
      path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
    },
    {
      name: "Cell, The Unit of Life",
      path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
    },
    {
      name: "Biomolecules",
      path: "/StudyResources/Grade-11/biology/biomolecules",
    },
    {
      name: "Cell Cycle and Cell Division",
      path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
    },
    {
      name: "Transport in Plants",
      path: "/StudyResources/Grade-11/biology/transport-in-plants",
    },
    {
      name: "Mineral Nutrition",
      path: "/StudyResources/Grade-11/biology/mineral-nutrition",
    },
    {
      name: "Photosynthesis in Higher Plants",
      path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
    },
    {
      name: "Respiration in Plants",
      path: "/StudyResources/Grade-11/biology/respiration-in-plants",
    },
    {
      name: "Plant Growth and Development",
      path: "/StudyResources/Grade-11/biology/plant-growth-development",
    },
    {
      name: "Digestion and Absorption",
      path: "/StudyResources/Grade-11/biology/digestion-absorption",
    },
    {
      name: "Breathing and Exchange of Gases",
      path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
    },
    {
      name: "Body Fluids and Circulation",
      path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
    },
    {
      name: "Excretory Products and their Elimination",
      path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
    },
    {
      name: "Locomotion and Movement",
      path: "/StudyResources/Grade-11/biology/locomotion-movement",
    },
    {
      name: "Neural Control and Coordination",
      path: "/StudyResources/Grade-11/biology/neural-control-coordination",
    },
    {
      name: "Chemical Coordination and Integration",
      path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
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
