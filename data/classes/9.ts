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
  number_system,
  number_system2,
  number_system3,
  polynomials,
  polynomials2,
  polynomials3,
  polynomials4,
  coordinate_geo,
  coordinate_geo2,
  coordinate_geo3,
  coordinate_geo4,
  linear_equation,
  linear_equation2,
  linear_equation3,
  linear_equation4,
  motion,
  motion2,
  motion3,
  motion4,
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
      path: "1Z75dJEHvs2c-DtjOgdIUW2s-mqxe2o_J",
    },
    { name: "Polynomials", path: "1nWSEf-X5SmWIQj-QEEvHShxy6qiYFvWO" },
    {
      name: "Coordinate Geometry",
      path: "1bAOw_tP_NRsnRHv8WX19Pn8Y_Vdut9V6",
    },
    {
      name: "Linear Equations in Two Variables",
      path: "1g20q-bqv6d2BO-TIP8ZFBsb00xvijnW6",
    },
    {
      name: "Euclid’s Geometry",
      path: "1Qv0D1zA_NXxe_NZt2MqqUENRHNuUVIqg/",
    },
    {
      name: "Lines and Angles",
      path: "12y9ft1uGttGIirrkzI1_AqQGhYay0Uwu",
    },
    { name: "Triangles", path: "11NkjrZWYnUs6PIJ5hqQnhhv8u-RwItRA" },
    {
      name: "Quadrilaterals",
      path: "1I9NeszSs9oy6QN5Ptu8pfc3TPnfKsdYz",
    },
    {
      name: "Areas of Parallelograms and Triangles",
      path: "1Jx9V-kzeA5ZGuQnsj4ZXgO_N3IHuZCXj",
    },
    { name: "Circles", path: "1PChOU8Ml5HUMadpPNuLDBPJ7FyGAH6cC" },
    {
      name: "Constructions",
      path: "1Uy8mAoInlUtuYJdoGdWlijHQgYepNcbm",
    },
    {
      name: "Heron’s Formula",
      path: "1F8Vsf7En3508dnsPqdvrUEsOf_cTxgel",
    },
    {
      name: "Surface Areas and Volumes",
      path: "1xz1_PhS_aDhw_08iGoLnOWr_38kI2-ew",
    },
    { name: "Statistics", path: "1s5kkmko5BwLopT6HT6LmuAp8YkDz5O-i" },
    { name: "Probability", path: "1uXLCiZaqocqnBGGkiED4CkHNMSWUYcWh" },
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
      name: "Number System",
      options: [
        {
          path: "https://youtu.be/mvJNnu5cLVQ?si=TLOwdOmH5Lv_z26E",
          thumbnail: number_system,
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/xn2HskGqSkI?si=mLdxfuxau9-oPdGc",
          thumbnail: number_system3,
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/IMnSIaPcqiE?si=rd2E2CU5RdwpWVWB",
          thumbnail: number_system2,
          channel: "Shobhit Nirwan",
        },
      ],
    },
    {
      name: "Polynomials",
      options: [
        {
          path: "https://youtu.be/piVBy9DRPOw?si=bqPVq2bKwHhP9X-c",
          thumbnail: polynomials,
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/HrWVcpxxG-E?si=DGEFqoX9zJncRY4p",
          thumbnail: polynomials2,
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/roFOxpZtiV4?si=sSAVnjx0LTx7Rleg",
          thumbnail: polynomials3,
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/4VHrvMutJQw?si=ssfRhRJuhBC8rCYa",
          thumbnail: polynomials4,
          channel: "Shobhit Nirwan",
        },
      ],
    },
    {
      name: "Coordinate Geometry",
      options: [
        {
          path: "https://youtu.be/CEF-IN3HMgk?si=bQ4LKReCRBC1V13m",
          thumbnail: coordinate_geo,
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/xy5-dN_F1EY?si=1lUFPgtiygEQ3DvQ",
          thumbnail: coordinate_geo3,
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/C5YdatNlzXg?si=_ijF6aHaRFZoD2hp",
          thumbnail: coordinate_geo2,
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/3MIZUl6bWxY?si=Q1-ohWFYcKEdeTc9",
          thumbnail: coordinate_geo4,
          channel: "Shobhit Nirwan",
        },
      ],
    },
    {
      name: "Linear Equations in Two Variables",
      options: [
        {
          path: "https://youtu.be/WgwGkAxG1OM?si=Fvuuzh-BL2q-lG_C",
          thumbnail: linear_equation,
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/mYrKse4WKsQ?si=-hO36HfMHQAtBJVP",
          thumbnail: linear_equation2,
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/rnudiJxVXxM?si=5LyW-RtczekCwWRp",
          thumbnail: linear_equation3,
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/s6DFsuvWl-4?si=12lZlGmC-RgZF6co",
          thumbnail: linear_equation4,
          channel: "Physics Wallah Foundation",
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
    { name: "Motion", path: "18p9RfDQVmcImnRaP3uZtJXimI_XHFwVf" },
    {
      name: "Force & Laws of Motion",
      path: "1dylkOUBbzlYPfGgHLfw5Q4bbPiTLvkvj",
    },
    {
      name: "Gravitation",
      path: "1dGIFA4P-nzC65bgAqCyX2Al2V_Y_7MDw",
    },
    {
      name: "Work and Energy",
      path: "1_qUwsCCZ3n-tKKbocS9QCfVLSphgY6bs",
    },
    { name: "Sound", path: "1ee3XWDAedSHVjNaYYsInzqxfqi38oWmu" },
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
          path: "https://youtu.be/Hu4aP4m00ks?si=W9yCAM1qKrb2wxCq",
          thumbnail: motion,
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/jC6MW9KOQvU?si=yH0efVt-LoVXP0W6",
          thumbnail: motion2,
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/kBq6HCRNqa8?si=V_2KYBM2K__lXWfM",
          thumbnail: motion3,
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/UNaOc4pXoUM?si=qMjqtq1FYk8Cz5RQ",
          thumbnail: motion4,
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Force & Laws of Motion",
      options: [
        {
          path: "https://youtu.be/CfxfW64P04s?si=axw-9EPneSmCDD5J",
          thumbnail: "/images/force_thumbnail1.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/4tVLGfVf1JY?si=I3UE-rsFZ4Bj82Cd",
          thumbnail: "/images/force_thumbnail2.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/gAwBg9sQz0M?si=CPdcngRYvDv7llWC",
          thumbnail: "/images/force_thumbnail2.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yhyMVW8vhlw?si=Boeti5Xzy2_e0wJb",
          thumbnail: "/images/force_thumbnail2.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Gravitation",
      options: [
        {
          path: "https://youtu.be/cWNh0yGdXvg?si=O8V4HNh0L7H2TbBi",
          thumbnail: "/images/gravitation_thumbnail1.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/MwDnfa3puhA?si=Bb5IOV3zJezEt6tA",
          thumbnail: "/images/gravitation_thumbnail2.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yeFQ2Ce_nKo?si=HrP96HKeGIvFBcaN",
          thumbnail: "/images/gravitation_thumbnail2.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/VcACFEy97o0?si=pIq_a9EBbeSqooYO",
          thumbnail: "/images/gravitation_thumbnail2.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Work and Energy",
      options: [
        {
          path: "https://youtu.be/bGFE2Z-VVM8?si=Kzj_85ycz4VbJFaA",
          thumbnail: "/images/work_energy_thumbnail1.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/bf0VndcVIdA?si=Z-LefXTDohw3LZBL",
          thumbnail: "/images/work_energy_thumbnail2.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/DaSbG6oxcUs?si=9QPsLaWlQtcRkIuy",
          thumbnail: "/images/work_energy_thumbnail2.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/kUDTV32U98s?si=OPmJcefxDnACKtKt",
          thumbnail: "/images/work_energy_thumbnail2.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Sound",
      options: [
        {
          path: "https://youtu.be/0582DSZbGrY?si=B4RtqNElW5jcPjVH",
          thumbnail: "/images/sound_thumbnail1.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/BD0pQ9EH4_8?si=tVUwBlzoboNqFBoS",
          thumbnail: "/images/sound_thumbnail2.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yWa-n2xTIH8?si=1_BksL_GEn_3_8Gj",
          thumbnail: "/images/sound_thumbnail2.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/1lOvAIx73vM?si=5MSUCbdt2Exw4gu4",
          thumbnail: "/images/sound_thumbnail2.jpg",
          channel: "Physics Wallah Foundation",
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
      path: "1F1dZ-mKixKLMUZASxk1WA9qbwCXYegMR",
    },
    {
      name: "Is Matter Around Us Pure ",
      path: "1pCLqUQ8ddTlBtDE6-PiTjR-s2fFP7Srr",
    },
    {
      name: "Atoms and Molecules",
      path: "1uf-HEotWqk8aOdFua9ZmL8k5Riwb-YBV",
    },
    {
      name: "Structure of The Atom",
      path: "1q2PhSHIPFtZZE8vqF__doJ2PETd-wTgv",
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
      path: "1A1bdYsb9VKZjvjoTgcE3e-ZF9WcSDRrc",
    },
    { name: "Tissues", path: "1yd9N4F8b5IC8L1Am--L7fo1FE8Zicd5V" },
    {
      name: "Diversity in Living Organisms",
      path: "1rOPOdlQvS-L9Mvd3l3gMR0XtpYS_WG8A",
    },
    {
      name: "Why do We Fall Ill",
      path: "1xA_QG2xEiK_DLEwWOXFS3MQGyDyChSJZ",
    },
    {
      name: "Natural Resources",
      path: "14VLEwIzXzB-WVpwUR6ezgNTUe84Ma3Jx",
    },
    {
      name: "Improvement in Food Resources",
      path: "1ENziG5JpxsUAmy1pVGYjwSGOLpml1gor",
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
