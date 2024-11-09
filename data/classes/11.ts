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
    {
      name: "Sets",
      options: [
        {
          path: "https://www.youtube.com/live/XYJyV48ijms?si=tvXd4LJgaythARc_",
          thumbnail: "https://img.youtube.com/vi/XYJyV48ijms/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/1rr6yrqhskg?si=gZnFoi5iArAkae1m",
          thumbnail: "https://img.youtube.com/vi/1rr6yrqhskg/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/F_7WUK7htRg?si=PrmJspI1as8WOfQm",
          thumbnail: "https://img.youtube.com/vi/F_7WUK7htRg/hqdefault.jpg",
          channel: "Uday - Class 11",
        },
      ],
    },
    {
      name: "Relations and Functions",
      options: [
        {
          path: "hhttps://youtu.be/SWjh91DSVbk?si=JSY2k6MtoeH6wV9R",
          thumbnail: "https://img.youtube.com/vi/SWjh91DSVbk/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/zdIdeR2lWHc?si=b-cTibZHavXx9vUL",
          thumbnail: "https://img.youtube.com/vi/zdIdeR2lWHc/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "hhttps://youtu.be/4VXUlNRlT3c?si=_EUeueMDZiSSRxFo",
          thumbnail: "https://img.youtube.com/vi/4VXUlNRlT3c/hqdefault.jpg",
          channel: "Uday - Class 11",
        },
      ],
    },
    {
      name: "Trigonometric Functions",
      options: [
        {
          path: "https://youtu.be/8tuX-lUKXhg?si=Ak_QWsUziwC1ms7G",
          thumbnail: "https://img.youtube.com/vi/8tuX-lUKXhg/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://www.youtube.com/live/0DgG7LxiYzk?si=gQ07nI5HiZBmg7ne",
          thumbnail: "https://img.youtube.com/vi/0DgG7LxiYzk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/7lg3Mehc0gk?si=7_VeJj3sJSBfipab",
          thumbnail: "https://img.youtube.com/vi/7lg3Mehc0gk/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
      ],
    },
    {
      name: "Complex Numbers",
      options: [
        {
          path: "https://www.youtube.com/live/XGFPDkR4-dg?si=ahZuoTB1YM_OB1K_",
          thumbnail: "https://img.youtube.com/vi/XGFPDkR4-dg/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/o8T4ZG08q8g?si=yuCRZUzxftMS6c6l",
          thumbnail: "https://img.youtube.com/vi/o8T4ZG08q8g/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/XoPTYrhGdew?si=3F1Cm-3UOgL47V-U",
          thumbnail: "https://img.youtube.com/vi/XoPTYrhGdew/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Quadratic Equations",
      options: [
        {
          path: "https://www.youtube.com/live/iOwi85y9oSE?si=ysdcGZKKrOd2AtP7",
          thumbnail: "https://img.youtube.com/vi/iOwi85y9oSE/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/aXfgyf8AYnA?si=vyN1oozjImG-bQ_j",
          thumbnail: "https://img.youtube.com/vi/aXfgyf8AYnA/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/QeecXIDYtiw?si=j-Nj822AvpfELAwc",
          thumbnail: "https://img.youtube.com/vi/QeecXIDYtiw/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
      ],
    },
    {
      name: "Linear Inequalities",
      options: [
        {
          path: "https://youtu.be/otz_2spIgq8?si=EbxMK0dcbyU5NVbD",
          thumbnail: "https://img.youtube.com/vi/otz_2spIgq8/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/6Jwf1u7Q75M?si=ARyzgaJbHw3YkVcZ",
          thumbnail: "https://img.youtube.com/vi/6Jwf1u7Q75M/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Permutations and Combinations",
      options: [
        {
          path: "https://www.youtube.com/live/THHeijYTfKs?si=YC7ksHo9sD86fadN",
          thumbnail: "https://img.youtube.com/vi/THHeijYTfKs/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/UoJh42eQU8I?si=10ro83gDtf5wrCJu",
          thumbnail: "https://img.youtube.com/vi/UoJh42eQU8I/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/VXbKZURwYfU?si=LcPHHawdKM_gu5QN",
          thumbnail: "https://img.youtube.com/vi/VXbKZURwYfU/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Binomial Theorem",
      options: [
        {
          path: "https://www.youtube.com/live/jEtgJutEGBM?si=ZD-bTlwLgft33jUa",
          thumbnail: "https://img.youtube.com/vi/jEtgJutEGBM/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/macZAq0DNSk?si=-I4hLdUZ_kRZR5hH",
          thumbnail: "https://img.youtube.com/vi/macZAq0DNSk/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/Ar3TH7MEVTQ?si=9cXQBXTf1KcME444",
          thumbnail: "https://img.youtube.com/vi/Ar3TH7MEVTQ/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
      ],
    },
    {
      name: "Sequences and Series",
      options: [
        {
          path: "https://www.youtube.com/live/kjc8k5Ia8V0?si=8XBuMCrRw2Ddcn1o",
          thumbnail: "https://img.youtube.com/vi/kjc8k5Ia8V0/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/ub4LDdjCauQ?si=W_OSB6-BmFSqeQZz",
          thumbnail: "https://img.youtube.com/vi/ub4LDdjCauQ/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://www.youtube.com/live/R8Jo5Ed2KrY?si=DBU-gMlzldfnKfoS",
          thumbnail: "https://img.youtube.com/vi/R8Jo5Ed2KrY/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Straight Lines",
      options: [
        {
          path: "https://youtu.be/4ddGqKZIIvs?si=Yk23B2Dtl4fp3Hlu",
          thumbnail: "https://img.youtube.com/vi/4ddGqKZIIvs/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/kKm_EOHmJl8?si=C7_Z_ZmqzOrEgutF",
          thumbnail: "https://img.youtube.com/vi/kKm_EOHmJl8/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/mby6spyt_U4?si=YEKLN2zMXKbhQF6H",
          thumbnail: "https://img.youtube.com/vi/mby6spyt_U4/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Conic Sections",
      options: [
        {
          path: "https://youtu.be/CF1AK1uZF1U?si=5Qd72CxEG_rtbQ2i",
          thumbnail: "https://img.youtube.com/vi/CF1AK1uZF1U/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/U2ukhDk69ro?si=l4tewxhTAE8ekfsS",
          thumbnail: "https://img.youtube.com/vi/U2ukhDk69ro/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/1VQXjxDN-Zs?si=PjwNIm2TKekpcvCI",
          thumbnail: "https://img.youtube.com/vi/1VQXjxDN-Zs/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Introduction to Three Dimensional Geometry",
      options: [
        {
          path: "https://youtu.be/6RQELNCZD1Q?si=ZrJCybruFOt2FjYX",
          thumbnail: "https://img.youtube.com/vi/6RQELNCZD1Q/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/I0ETRAwTBvY?si=pxrZiolK89yxQ7CU",
          thumbnail: "https://img.youtube.com/vi/I0ETRAwTBvY/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/6JzqNqxqQ90?si=x54WC1xt1W1apbz7",
          thumbnail: "https://img.youtube.com/vi/6JzqNqxqQ90/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Limits and Derivatives",
      options: [
        {
          path: "https://youtu.be/aAty1dmP6iI?si=MkgHrA1M5WsaACV0",
          thumbnail: "https://img.youtube.com/vi/aAty1dmP6iI/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/7cCYGq8Hz74?si=0rqqjQXiSqwLl4-V",
          thumbnail: "https://img.youtube.com/vi/7cCYGq8Hz74/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/ANdOxOWNoLk?si=gOxymtN1mStrVV62",
          thumbnail: "https://img.youtube.com/vi/ANdOxOWNoLk/hqdefault.jpg",
          channel: "Anurag Chauhan - EduMitra",
        },
      ],
    },
    {
      name: "Statistics",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Probability",
      options: [
        {
          path: "https://youtu.be/o801dvs3FZw?si=A428OzwXX0Avyk8Y",
          thumbnail: "https://img.youtube.com/vi/o801dvs3FZw/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/lO5sRK0c_A8?si=1p_WK08AgNILKUIc",
          thumbnail: "https://img.youtube.com/vi/lO5sRK0c_A8/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://www.youtube.com/live/c96DhWvJJso?si=gEc5MFl-5fqRKOXB",
          thumbnail: "https://img.youtube.com/vi/c96DhWvJJso/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
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
      options: [
        {
          path: "https://youtu.be/e154t-hfyRw?si=pffYwvmhVU8c-T75",
          thumbnail: "https://img.youtube.com/vi/e154t-hfyRw/hqdefault.jpg",
          channel: "Physics Wallah - Alakh Pandey",
        },
        {
          path: "https://youtu.be/QMHMX_TvxKw?si=g2R7fj-eC-er-4Tx",
          thumbnail: "https://img.youtube.com/vi/QMHMX_TvxKw/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
        {
          path: "https://youtu.be/yF291D4XcMo?si=rkZQOxdsYVkN0NW2",
          thumbnail: "https://img.youtube.com/vi/yF291D4XcMo/hqdefault.jpg",
          channel: "Magnet Brains",
        },
      ],
    },
    {
      name: "Units and Measurements",
      options: [
        {
          path: "https://youtu.be/3bhJxde2Xic?si=-HPcw4CXQvfLu7PT",
          thumbnail: "https://img.youtube.com/vi/3bhJxde2Xic/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/YX5sLwRtULk?si=RZj7GnnxGvXObDYS",
          thumbnail: "https://img.youtube.com/vi/YX5sLwRtULk/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/iSQeNkkMCVk?si=vDAvJH9uoqeFe5I1",
          thumbnail: "https://img.youtube.com/vi/iSQeNkkMCVk/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Motion in a Straight Line",
      options: [
        {
          path: "https://youtu.be/CGp3b4X2MQU?si=3O4ebJzuX8YUIQW2",
          thumbnail: "https://img.youtube.com/vi/CGp3b4X2MQU/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Motion in a Plane",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Law of Motion",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Work, Energy and Power",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Systems of Particles and Rotational Motion",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Gravitation",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Mechanical Properties of Solids",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Mechanical Properties of Fluids",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Thermal Properties of Matter",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Thermodynamics",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Kinetic Theory",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Oscillations",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Waves",
      options: [
        {
          path: "https://youtu.be/M0wE7kH_ojk?si=TaNutA9ujUB3n4Sp",
          thumbnail: "https://img.youtube.com/vi/M0wE7kH_ojk/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/91wlgQia_Is?si=tU4g1SUSjShoXVCz",
          thumbnail: "https://img.youtube.com/vi/91wlgQia_Is/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/rDUh1kEQMRM?si=dzzh1SmkFn20lIWy",
          thumbnail: "https://img.youtube.com/vi/rDUh1kEQMRM/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
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
      options: [
        {
          path: "/dummy/path/basic-concepts-of-chemistry/opt1",
          thumbnail: "/images/basic_concepts_thumbnail1.jpg",
          channel: "Chemistry Channel 1",
        },
        {
          path: "/dummy/path/basic-concepts-of-chemistry/opt2",
          thumbnail: "/images/basic_concepts_thumbnail2.jpg",
          channel: "Chemistry Channel 2",
        },
      ],
    },
    {
      name: "Atomic Structure",
      options: [
        {
          path: "/dummy/path/atomic-structure/opt1",
          thumbnail: "/images/atomic_structure_thumbnail1.jpg",
          channel: "Chemistry Channel 3",
        },
        {
          path: "/dummy/path/atomic-structure/opt2",
          thumbnail: "/images/atomic_structure_thumbnail2.jpg",
          channel: "Chemistry Channel 4",
        },
      ],
    },
    {
      name: "Classification of Elements & Periodicity in Properties",
      options: [
        {
          path: "/dummy/path/classification-elements-periodicity/opt1",
          thumbnail: "/images/classification_periodicity_thumbnail1.jpg",
          channel: "Chemistry Channel 5",
        },
        {
          path: "/dummy/path/classification-elements-periodicity/opt2",
          thumbnail: "/images/classification_periodicity_thumbnail2.jpg",
          channel: "Chemistry Channel 6",
        },
      ],
    },
    {
      name: "States of Matter",
      options: [
        {
          path: "/dummy/path/states-of-matter/opt1",
          thumbnail: "/images/states_of_matter_thumbnail1.jpg",
          channel: "Chemistry Channel 7",
        },
        {
          path: "/dummy/path/states-of-matter/opt2",
          thumbnail: "/images/states_of_matter_thumbnail2.jpg",
          channel: "Chemistry Channel 8",
        },
      ],
    },
    {
      name: "Chemical Bonding",
      options: [
        {
          path: "/dummy/path/chemical-bonding/opt1",
          thumbnail: "/images/chemical_bonding_thumbnail1.jpg",
          channel: "Chemistry Channel 9",
        },
        {
          path: "/dummy/path/chemical-bonding/opt2",
          thumbnail: "/images/chemical_bonding_thumbnail2.jpg",
          channel: "Chemistry Channel 10",
        },
      ],
    },
    {
      name: "Thermodynamics",
      options: [
        {
          path: "/dummy/path/thermodynamics/opt1",
          thumbnail: "/images/thermodynamics_thumbnail1.jpg",
          channel: "Chemistry Channel 11",
        },
        {
          path: "/dummy/path/thermodynamics/opt2",
          thumbnail: "/images/thermodynamics_thumbnail2.jpg",
          channel: "Chemistry Channel 12",
        },
      ],
    },
    {
      name: "Chemical Equilibrium",
      options: [
        {
          path: "/dummy/path/chemical-equilibrium/opt1",
          thumbnail: "/images/chemical_equilibrium_thumbnail1.jpg",
          channel: "Chemistry Channel 13",
        },
        {
          path: "/dummy/path/chemical-equilibrium/opt2",
          thumbnail: "/images/chemical_equilibrium_thumbnail2.jpg",
          channel: "Chemistry Channel 14",
        },
      ],
    },
    {
      name: "Ionic Equilibrium",
      options: [
        {
          path: "/dummy/path/ionic-equilibrium/opt1",
          thumbnail: "/images/ionic_equilibrium_thumbnail1.jpg",
          channel: "Chemistry Channel 15",
        },
        {
          path: "/dummy/path/ionic-equilibrium/opt2",
          thumbnail: "/images/ionic_equilibrium_thumbnail2.jpg",
          channel: "Chemistry Channel 16",
        },
      ],
    },
    {
      name: "Redox Reactions",
      options: [
        {
          path: "/dummy/path/redox-reactions/opt1",
          thumbnail: "/images/redox_reactions_thumbnail1.jpg",
          channel: "Chemistry Channel 17",
        },
        {
          path: "/dummy/path/redox-reactions/opt2",
          thumbnail: "/images/redox_reactions_thumbnail2.jpg",
          channel: "Chemistry Channel 18",
        },
      ],
    },
    {
      name: "Hydrogen",
      options: [
        {
          path: "/dummy/path/hydrogen/opt1",
          thumbnail: "/images/hydrogen_thumbnail1.jpg",
          channel: "Chemistry Channel 19",
        },
        {
          path: "/dummy/path/hydrogen/opt2",
          thumbnail: "/images/hydrogen_thumbnail2.jpg",
          channel: "Chemistry Channel 20",
        },
      ],
    },
    {
      name: "S-Block Elements",
      options: [
        {
          path: "/dummy/path/s-block-elements/opt1",
          thumbnail: "/images/s_block_elements_thumbnail1.jpg",
          channel: "Chemistry Channel 21",
        },
        {
          path: "/dummy/path/s-block-elements/opt2",
          thumbnail: "/images/s_block_elements_thumbnail2.jpg",
          channel: "Chemistry Channel 22",
        },
      ],
    },
    {
      name: "Carbon Family p-block Elements",
      options: [
        {
          path: "/dummy/path/carbon-family-p-block-elements/opt1",
          thumbnail: "/images/carbon_family_p_block_thumbnail1.jpg",
          channel: "Chemistry Channel 23",
        },
        {
          path: "/dummy/path/carbon-family-p-block-elements/opt2",
          thumbnail: "/images/carbon_family_p_block_thumbnail2.jpg",
          channel: "Chemistry Channel 24",
        },
      ],
    },
    {
      name: "Boron Family p-block Elements",
      options: [
        {
          path: "/dummy/path/boron-family-p-block-elements/opt1",
          thumbnail: "/images/boron_family_p_block_thumbnail1.jpg",
          channel: "Chemistry Channel 25",
        },
        {
          path: "/dummy/path/boron-family-p-block-elements/opt2",
          thumbnail: "/images/boron_family_p_block_thumbnail2.jpg",
          channel: "Chemistry Channel 26",
        },
      ],
    },
    {
      name: "General Organic Chemistry",
      options: [
        {
          path: "/dummy/path/general-organic-chemistry/opt1",
          thumbnail: "/images/general_organic_chemistry_thumbnail1.jpg",
          channel: "Chemistry Channel 27",
        },
        {
          path: "/dummy/path/general-organic-chemistry/opt2",
          thumbnail: "/images/general_organic_chemistry_thumbnail2.jpg",
          channel: "Chemistry Channel 28",
        },
      ],
    },
    {
      name: "Hydrocarbons",
      options: [
        {
          path: "/dummy/path/hydrocarbons/opt1",
          thumbnail: "/images/hydrocarbons_thumbnail1.jpg",
          channel: "Chemistry Channel 29",
        },
        {
          path: "/dummy/path/hydrocarbons/opt2",
          thumbnail: "/images/hydrocarbons_thumbnail2.jpg",
          channel: "Chemistry Channel 30",
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
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/living-world",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/living-world",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/living-world",
        },
      ],
    },
    {
      name: "Biological Classification",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/biological-classification",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/biological-classification",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/biological-classification",
        },
      ],
    },
    {
      name: "Plant Kingdom",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/plant-kingdom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/plant-kingdom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/plant-kingdom",
        },
      ],
    },
    {
      name: "Animal Kingdom",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/animal-kingdom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/animal-kingdom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/animal-kingdom",
        },
      ],
    },
    {
      name: "Morphology of Flowering Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
        },
      ],
    },
    {
      name: "Anatomy of Flowering Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
        },
      ],
    },
    {
      name: "Structural Organisation in Animals",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
        },
      ],
    },
    {
      name: "Cell, The Unit of Life",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
        },
      ],
    },
    {
      name: "Biomolecules",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/biomolecules",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/biomolecules",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/biomolecules",
        },
      ],
    },
    {
      name: "Cell Cycle and Cell Division",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
        },
      ],
    },
    {
      name: "Transport in Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/transport-in-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/transport-in-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/transport-in-plants",
        },
      ],
    },
    {
      name: "Mineral Nutrition",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/mineral-nutrition",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/mineral-nutrition",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/mineral-nutrition",
        },
      ],
    },
    {
      name: "Photosynthesis in Higher Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
        },
      ],
    },
    {
      name: "Respiration in Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/respiration-in-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/respiration-in-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/respiration-in-plants",
        },
      ],
    },
    {
      name: "Plant Growth and Development",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/plant-growth-development",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/plant-growth-development",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/plant-growth-development",
        },
      ],
    },
    {
      name: "Digestion and Absorption",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/digestion-absorption",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/digestion-absorption",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/digestion-absorption",
        },
      ],
    },
    {
      name: "Breathing and Exchange of Gases",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
        },
      ],
    },
    {
      name: "Body Fluids and Circulation",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
        },
      ],
    },
    {
      name: "Excretory Products and their Elimination",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
        },
      ],
    },
    {
      name: "Locomotion and Movement",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/locomotion-movement",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/locomotion-movement",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/locomotion-movement",
        },
      ],
    },
    {
      name: "Neural Control and Coordination",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/neural-control-coordination",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/neural-control-coordination",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/neural-control-coordination",
        },
      ],
    },
    {
      name: "Chemical Coordination and Integration",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
        },
      ],
    },
  ],

  sample_paper: [
    {
      name: "The Living World",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/living-world",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/living-world",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/living-world",
        },
      ],
    },
    {
      name: "Biological Classification",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/biological-classification",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/biological-classification",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/biological-classification",
        },
      ],
    },
    {
      name: "Plant Kingdom",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/plant-kingdom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/plant-kingdom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/plant-kingdom",
        },
      ],
    },
    {
      name: "Animal Kingdom",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/animal-kingdom",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/animal-kingdom",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/animal-kingdom",
        },
      ],
    },
    {
      name: "Morphology of Flowering Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/morphology-flowering-plants",
        },
      ],
    },
    {
      name: "Anatomy of Flowering Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/anatomy-flowering-plants",
        },
      ],
    },
    {
      name: "Structural Organisation in Animals",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/structural-organisation-animals",
        },
      ],
    },
    {
      name: "Cell, The Unit of Life",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/cell-unit-of-life",
        },
      ],
    },
    {
      name: "Biomolecules",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/biomolecules",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/biomolecules",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/biomolecules",
        },
      ],
    },
    {
      name: "Cell Cycle and Cell Division",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/cell-cycle-cell-division",
        },
      ],
    },
    {
      name: "Transport in Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/transport-in-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/transport-in-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/transport-in-plants",
        },
      ],
    },
    {
      name: "Mineral Nutrition",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/mineral-nutrition",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/mineral-nutrition",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/mineral-nutrition",
        },
      ],
    },
    {
      name: "Photosynthesis in Higher Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/photosynthesis-higher-plants",
        },
      ],
    },
    {
      name: "Respiration in Plants",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/respiration-in-plants",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/respiration-in-plants",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/respiration-in-plants",
        },
      ],
    },
    {
      name: "Plant Growth and Development",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/plant-growth-development",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/plant-growth-development",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/plant-growth-development",
        },
      ],
    },
    {
      name: "Digestion and Absorption",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/digestion-absorption",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/digestion-absorption",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/digestion-absorption",
        },
      ],
    },
    {
      name: "Breathing and Exchange of Gases",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/breathing-exchange-gases",
        },
      ],
    },
    {
      name: "Body Fluids and Circulation",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/body-fluids-circulation",
        },
      ],
    },
    {
      name: "Excretory Products and their Elimination",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/excretory-products-elimination",
        },
      ],
    },
    {
      name: "Locomotion and Movement",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/locomotion-movement",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/locomotion-movement",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/locomotion-movement",
        },
      ],
    },
    {
      name: "Neural Control and Coordination",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/neural-control-coordination",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/neural-control-coordination",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/neural-control-coordination",
        },
      ],
    },
    {
      name: "Chemical Coordination and Integration",
      sets: [
        {
          name: "Set 1",
          path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
        },
        {
          name: "Set 2",
          path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
        },
        {
          name: "Set 3",
          path: "/StudyResources/Grade-11/biology/chemical-coordination-integration",
        },
      ],
    },
  ],
  video_lectures: [
    {
      name: "The Living World",
      options: [
        {
          path: "/dummy/path/living-world/opt1",
          thumbnail: "/images/living_world_thumbnail1.jpg",
          channel: "Biology Channel 1",
        },
        {
          path: "/dummy/path/living-world/opt2",
          thumbnail: "/images/living_world_thumbnail2.jpg",
          channel: "Biology Channel 2",
        },
      ],
    },
    {
      name: "Biological Classification",
      options: [
        {
          path: "/dummy/path/biological-classification/opt1",
          thumbnail: "/images/biological_classification_thumbnail1.jpg",
          channel: "Biology Channel 3",
        },
        {
          path: "/dummy/path/biological-classification/opt2",
          thumbnail: "/images/biological_classification_thumbnail2.jpg",
          channel: "Biology Channel 4",
        },
      ],
    },
    {
      name: "Plant Kingdom",
      options: [
        {
          path: "/dummy/path/plant-kingdom/opt1",
          thumbnail: "/images/plant_kingdom_thumbnail1.jpg",
          channel: "Biology Channel 5",
        },
        {
          path: "/dummy/path/plant-kingdom/opt2",
          thumbnail: "/images/plant_kingdom_thumbnail2.jpg",
          channel: "Biology Channel 6",
        },
      ],
    },
    {
      name: "Animal Kingdom",
      options: [
        {
          path: "/dummy/path/animal-kingdom/opt1",
          thumbnail: "/images/animal_kingdom_thumbnail1.jpg",
          channel: "Biology Channel 7",
        },
        {
          path: "/dummy/path/animal-kingdom/opt2",
          thumbnail: "/images/animal_kingdom_thumbnail2.jpg",
          channel: "Biology Channel 8",
        },
      ],
    },
    {
      name: "Morphology of Flowering Plants",
      options: [
        {
          path: "/dummy/path/morphology-flowering-plants/opt1",
          thumbnail: "/images/morphology_flowering_plants_thumbnail1.jpg",
          channel: "Biology Channel 9",
        },
        {
          path: "/dummy/path/morphology-flowering-plants/opt2",
          thumbnail: "/images/morphology_flowering_plants_thumbnail2.jpg",
          channel: "Biology Channel 10",
        },
      ],
    },
    {
      name: "Anatomy of Flowering Plants",
      options: [
        {
          path: "/dummy/path/anatomy-flowering-plants/opt1",
          thumbnail: "/images/anatomy_flowering_plants_thumbnail1.jpg",
          channel: "Biology Channel 11",
        },
        {
          path: "/dummy/path/anatomy-flowering-plants/opt2",
          thumbnail: "/images/anatomy_flowering_plants_thumbnail2.jpg",
          channel: "Biology Channel 12",
        },
      ],
    },
    {
      name: "Structural Organisation in Animals",
      options: [
        {
          path: "/dummy/path/structural-organisation-animals/opt1",
          thumbnail: "/images/structural_organisation_animals_thumbnail1.jpg",
          channel: "Biology Channel 13",
        },
        {
          path: "/dummy/path/structural-organisation-animals/opt2",
          thumbnail: "/images/structural_organisation_animals_thumbnail2.jpg",
          channel: "Biology Channel 14",
        },
      ],
    },
    {
      name: "Cell, The Unit of Life",
      options: [
        {
          path: "/dummy/path/cell-unit-of-life/opt1",
          thumbnail: "/images/cell_unit_of_life_thumbnail1.jpg",
          channel: "Biology Channel 15",
        },
        {
          path: "/dummy/path/cell-unit-of-life/opt2",
          thumbnail: "/images/cell_unit_of_life_thumbnail2.jpg",
          channel: "Biology Channel 16",
        },
      ],
    },
    {
      name: "Biomolecules",
      options: [
        {
          path: "/dummy/path/biomolecules/opt1",
          thumbnail: "/images/biomolecules_thumbnail1.jpg",
          channel: "Biology Channel 17",
        },
        {
          path: "/dummy/path/biomolecules/opt2",
          thumbnail: "/images/biomolecules_thumbnail2.jpg",
          channel: "Biology Channel 18",
        },
      ],
    },
    {
      name: "Cell Cycle and Cell Division",
      options: [
        {
          path: "/dummy/path/cell-cycle-cell-division/opt1",
          thumbnail: "/images/cell_cycle_cell_division_thumbnail1.jpg",
          channel: "Biology Channel 19",
        },
        {
          path: "/dummy/path/cell-cycle-cell-division/opt2",
          thumbnail: "/images/cell_cycle_cell_division_thumbnail2.jpg",
          channel: "Biology Channel 20",
        },
      ],
    },
    {
      name: "Transport in Plants",
      options: [
        {
          path: "/dummy/path/transport-in-plants/opt1",
          thumbnail: "/images/transport_in_plants_thumbnail1.jpg",
          channel: "Biology Channel 21",
        },
        {
          path: "/dummy/path/transport-in-plants/opt2",
          thumbnail: "/images/transport_in_plants_thumbnail2.jpg",
          channel: "Biology Channel 22",
        },
      ],
    },
    {
      name: "Mineral Nutrition",
      options: [
        {
          path: "/dummy/path/mineral-nutrition/opt1",
          thumbnail: "/images/mineral_nutrition_thumbnail1.jpg",
          channel: "Biology Channel 23",
        },
        {
          path: "/dummy/path/mineral-nutrition/opt2",
          thumbnail: "/images/mineral_nutrition_thumbnail2.jpg",
          channel: "Biology Channel 24",
        },
      ],
    },
    {
      name: "Photosynthesis in Higher Plants",
      options: [
        {
          path: "/dummy/path/photosynthesis-higher-plants/opt1",
          thumbnail: "/images/photosynthesis_higher_plants_thumbnail1.jpg",
          channel: "Biology Channel 25",
        },
        {
          path: "/dummy/path/photosynthesis-higher-plants/opt2",
          thumbnail: "/images/photosynthesis_higher_plants_thumbnail2.jpg",
          channel: "Biology Channel 26",
        },
      ],
    },
    {
      name: "Respiration in Plants",
      options: [
        {
          path: "/dummy/path/respiration-in-plants/opt1",
          thumbnail: "/images/respiration_in_plants_thumbnail1.jpg",
          channel: "Biology Channel 27",
        },
        {
          path: "/dummy/path/respiration-in-plants/opt2",
          thumbnail: "/images/respiration_in_plants_thumbnail2.jpg",
          channel: "Biology Channel 28",
        },
      ],
    },
    {
      name: "Plant Growth and Development",
      options: [
        {
          path: "/dummy/path/plant-growth-development/opt1",
          thumbnail: "/images/plant_growth_development_thumbnail1.jpg",
          channel: "Biology Channel 29",
        },
        {
          path: "/dummy/path/plant-growth-development/opt2",
          thumbnail: "/images/plant_growth_development_thumbnail2.jpg",
          channel: "Biology Channel 30",
        },
      ],
    },
    {
      name: "Digestion and Absorption",
      options: [
        {
          path: "/dummy/path/digestion-absorption/opt1",
          thumbnail: "/images/digestion_absorption_thumbnail1.jpg",
          channel: "Biology Channel 31",
        },
        {
          path: "/dummy/path/digestion-absorption/opt2",
          thumbnail: "/images/digestion_absorption_thumbnail2.jpg",
          channel: "Biology Channel 32",
        },
      ],
    },
    {
      name: "Breathing and Exchange of Gases",
      options: [
        {
          path: "/dummy/path/breathing-exchange-gases/opt1",
          thumbnail: "/images/breathing_exchange_gases_thumbnail1.jpg",
          channel: "Biology Channel 33",
        },
        {
          path: "/dummy/path/breathing-exchange-gases/opt2",
          thumbnail: "/images/breathing_exchange_gases_thumbnail2.jpg",
          channel: "Biology Channel 34",
        },
      ],
    },
    {
      name: "Body Fluids and Circulation",
      options: [
        {
          path: "/dummy/path/body-fluids-circulation/opt1",
          thumbnail: "/images/body_fluids_circulation_thumbnail1.jpg",
          channel: "Biology Channel 35",
        },
        {
          path: "/dummy/path/body-fluids-circulation/opt2",
          thumbnail: "/images/body_fluids_circulation_thumbnail2.jpg",
          channel: "Biology Channel 36",
        },
      ],
    },
    {
      name: "Excretory Products and their Elimination",
      options: [
        {
          path: "/dummy/path/excretory-products-elimination/opt1",
          thumbnail: "/images/excretory_products_elimination_thumbnail1.jpg",
          channel: "Biology Channel 37",
        },
        {
          path: "/dummy/path/excretory-products-elimination/opt2",
          thumbnail: "/images/excretory_products_elimination_thumbnail2.jpg",
          channel: "Biology Channel 38",
        },
      ],
    },
    {
      name: "Locomotion and Movement",
      options: [
        {
          path: "/dummy/path/locomotion-movement/opt1",
          thumbnail: "/images/locomotion_movement_thumbnail1.jpg",
          channel: "Biology Channel 39",
        },
        {
          path: "/dummy/path/locomotion-movement/opt2",
          thumbnail: "/images/locomotion_movement_thumbnail2.jpg",
          channel: "Biology Channel 40",
        },
      ],
    },
    {
      name: "Neural Control and Coordination",
      options: [
        {
          path: "/dummy/path/neural-control-coordination/opt1",
          thumbnail: "/images/neural_control_coordination_thumbnail1.jpg",
          channel: "Biology Channel 41",
        },
        {
          path: "/dummy/path/neural-control-coordination/opt2",
          thumbnail: "/images/neural_control_coordination_thumbnail2.jpg",
          channel: "Biology Channel 42",
        },
      ],
    },
    {
      name: "Chemical Coordination and Integration",
      options: [
        {
          path: "/dummy/path/chemical-coordination-integration/opt1",
          thumbnail: "/images/chemical_coordination_integration_thumbnail1.jpg",
          channel: "Biology Channel 43",
        },
        {
          path: "/dummy/path/chemical-coordination-integration/opt2",
          thumbnail: "/images/chemical_coordination_integration_thumbnail2.jpg",
          channel: "Biology Channel 44",
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
