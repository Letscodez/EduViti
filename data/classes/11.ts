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
          path: "https://youtu.be/F_7WUK7htRg?si=PrmJspI1as8WOfQm",
          thumbnail: "https://img.youtube.com/vi/F_7WUK7htRg/hqdefault.jpg",
          channel: "Uday - Class 11",
        },
        {
          path: "https://youtu.be/87Bdi_wQ5-o?si=TVsz2mN0ClP-F8fY",
          thumbnail: "https://img.youtube.com/vi/87Bdi_wQ5-o/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://www.youtube.com/live/xHgO_0DAYT0?si=RJxwsQrfAebyLQPD",
          thumbnail: "https://img.youtube.com/vi/xHgO_0DAYT0/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Relations and Functions",
      options: [
        {
          path: "hhttps://youtu.be/4VXUlNRlT3c?si=_EUeueMDZiSSRxFo",
          thumbnail: "https://img.youtube.com/vi/4VXUlNRlT3c/hqdefault.jpg",
          channel: "Uday - Class 11",
        },
        {
          path: "https://youtu.be/DAEVTXfRWDA?si=iE1b22bSJA5EcuT6",
          thumbnail: "https://img.youtube.com/vi/DAEVTXfRWDA/hqdefault.jpg",
          channel: "Dear Sir",
        },
        {
          path: "https://youtu.be/aWh0cMksTPc?si=rhkkcXz4aKIq1FEm",
          thumbnail: "https://img.youtube.com/vi/aWh0cMksTPc/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Trigonometric Functions",
      options: [
        {
          path: "https://youtu.be/_pNT2pCEEug?si=lCOXbeZykKGRL0uM",
          thumbnail: "https://img.youtube.com/vi/_pNT2pCEEug/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/PlrvWjFoDz4?si=d8Of3lzXZxdlyJiB",
          thumbnail: "https://img.youtube.com/vi/PlrvWjFoDz4/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/DKz3GLI-pl4?si=S1kivR2LRCQ4PD80",
          thumbnail: "https://img.youtube.com/vi/DKz3GLI-pl4/hqdefault.jpg",
          channel: "Dear Sir",
        },
      ],
    },
    {
      name: "Complex Numbers and Quadratic Equations",
      options: [
        {
          path: "https://youtu.be/DXF5gUZjDwU?si=cKv52i-hNkrMFdsZ",
          thumbnail: "https://img.youtube.com/vi/DXF5gUZjDwU/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/mICggt6LJTI?si=jav_ymgDjgEzqEYg",
          thumbnail: "https://img.youtube.com/vi/mICggt6LJTI/hqdefault.jpg",
          channel: "cbseclass videos",
        },
        {
          path: "https://youtu.be/XoPTYrhGdew?si=3F1Cm-3UOgL47V-U",
          thumbnail: "https://img.youtube.com/vi/XoPTYrhGdew/hqdefault.jpg",
          channel: "Science and Fun Education",
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
          path: "https://youtu.be/vBhi-nco26o?si=xmci3m5XQvNtMh85",
          thumbnail: "https://img.youtube.com/vi/vBhi-nco26o/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/b2EpeYi88yw?si=dQwBlr6UvhW8ik8g",
          thumbnail: "https://img.youtube.com/vi/b2EpeYi88yw/hqdefault.jpg",
          channel: "cbseclass videos",
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
          path: "https://youtu.be/WLez2q1-GvE?si=v5DUj8SlIKXt8cyP",
          thumbnail: "https://img.youtube.com/vi/WLez2q1-GvE/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/9LBz3Ptvq1M?si=9Df4Rc3ROhQwP72n",
          thumbnail: "https://img.youtube.com/vi/9LBz3Ptvq1M/hqdefault.jpg",
          channel: "cbseclass videos",
        },
        {
          path: "https://youtu.be/VHMmkzvSWNE?si=Gb4MRy0nktVwCFaZ",
          thumbnail: "https://img.youtube.com/vi/VHMmkzvSWNE/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
      ],
    },
    {
      name: "Sequences and Series",
      options: [
        {
          path: "https://youtu.be/TU0rHRQ2wqU?si=uQYY3Gl-6mgEg5Ln",
          thumbnail: "https://img.youtube.com/vi/TU0rHRQ2wqU/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/GpIrGtev130?si=n_O1rvUC10fvj3AX",
          thumbnail: "https://img.youtube.com/vi/GpIrGtev130/hqdefault.jpg",
          channel: "NCERT Wallah",
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
          path: "https://youtu.be/guYhVnACdTk?si=HHxjuYVZHQoRbQ6F",
          thumbnail: "https://img.youtube.com/vi/guYhVnACdTk/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/RsWz9f4sMY4?si=s9WZlK8dO_K-ZWiA",
          thumbnail: "https://img.youtube.com/vi/RsWz9f4sMY4/hqdefault.jpg",
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
          path: "https://youtu.be/gHtUmkpPwVM?si=aWBW2-7lW4W1BCrL",
          thumbnail: "https://img.youtube.com/vi/gHtUmkpPwVM/hqdefault.jpg",
          channel: "Science and Fun Education",
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
      name: "Units and Measurements",
      options: [
        {
          path: "https://www.youtube.com/live/xe75ffBoJcU?si=x_mNXqU_e-G1A_mF",
          thumbnail: "https://img.youtube.com/vi/xe75ffBoJcU/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/bin4OCO-LSc?si=qt-yrgPg1TAPgwiH",
          thumbnail: "https://img.youtube.com/vi/bin4OCO-LSc/hqdefault.jpg",
          channel: "Uday - Class 11",
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
          path: "https://youtu.be/MecHXgBPnpw?si=UasqUF_8_xW7HBnb",
          thumbnail: "https://img.youtube.com/vi/MecHXgBPnpw/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/nojm_tHauRE?si=vH6pMcgRL7vuyQ6C",
          thumbnail: "https://img.youtube.com/vi/nojm_tHauRE/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
        {
          path: "https://youtu.be/lu2E6W805hA?si=YIy2plo0qdshh57y",
          thumbnail: "https://img.youtube.com/vi/lu2E6W805hA/hqdefault.jpg",
          channel: "Uday - Class 11",
        },
      ],
    },
    {
      name: "Motion in a Plane",
      options: [
        {
          path: "https://youtu.be/Ro_DbO-geRE?si=4hVyCVvuHDcu3k-7",
          thumbnail: "https://img.youtube.com/vi/Ro_DbO-geRE/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/lFK68tCpsm0?si=BeTK3tYr0PUDzkg8",
          thumbnail: "https://img.youtube.com/vi/lFK68tCpsm0/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/aoAnn5rFGgM?si=d-KwgaBcatvuDl7e",
          thumbnail: "https://img.youtube.com/vi/aoAnn5rFGgM/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Laws of Motion",
      options: [
        {
          path: "https://youtu.be/TVttS4KL7Vg?si=N7zMVFnWv2OHyAdr",
          thumbnail: "https://img.youtube.com/vi/TVttS4KL7Vg/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/Eds9lqi_BsU?si=5JYR28ntyvzatkY7",
          thumbnail: "https://img.youtube.com/vi/Eds9lqi_BsU/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/3KYRAqUoHr4?si=Ovu5IqoGSz5_XYKP",
          thumbnail: "https://img.youtube.com/vi/3KYRAqUoHr4/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
      ],
    },
    {
      name: "Work, Energy and Power",
      options: [
        {
          path: "https://www.youtube.com/live/C7CXnkkOmX8?si=UE8t19613iYiC1wd",
          thumbnail: "https://img.youtube.com/vi/C7CXnkkOmX8/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/26ES1DPAXPU?si=Q37bNXmSVC7I640U",
          thumbnail: "https://img.youtube.com/vi/26ES1DPAXPU/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/nN2PmfBzvDI?si=yPEFWas1uP-srEal",
          thumbnail: "https://img.youtube.com/vi/nN2PmfBzvDI/hqdefault.jpg",
          channel: "JEE Wallah",
        },
      ],
    },
    {
      name: "System of Particles and Rotational Motion",
      options: [
        {
          path: "https://youtu.be/yJjgVPwYceI?si=PsWeeM0vF8Dop1o0",
          thumbnail: "https://img.youtube.com/vi/yJjgVPwYceI/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/6zNkyJp6Uwk?si=Iajnwg18-hupxkoV",
          thumbnail: "https://img.youtube.com/vi/6zNkyJp6Uwk/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/ZsrcwCoPSZM?si=YOlbrHOQVxOpahlF",
          thumbnail: "https://img.youtube.com/vi/ZsrcwCoPSZM/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
      ],
    },
    {
      name: "Gravitation",
      options: [
        {
          path: "https://youtu.be/Gj4--Cdtam4?si=4Xe3Jv9ZSjhtt15w",
          thumbnail: "https://img.youtube.com/vi/Gj4--Cdtam4/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/tht94Y4VX4o?si=BWgk_9Bp-5blMeV8",
          thumbnail: "https://img.youtube.com/vi/tht94Y4VX4o/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/udScbSnuQeA?si=hevUMQuQKo15JOsM",
          thumbnail: "https://img.youtube.com/vi/udScbSnuQeA/hqdefault.jpg",
          channel: "JEE Wallah",
        },
      ],
    },
    {
      name: "Mechanical Properties of Solids",
      options: [
        {
          path: "https://youtu.be/NDDOXkgyWDM?si=YKKlIVUeSN3K9qt0",
          thumbnail: "https://img.youtube.com/vi/NDDOXkgyWDM/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yIOh-TKlC9M?si=PELmB2vjq29W8IHJ",
          thumbnail: "https://img.youtube.com/vi/yIOh-TKlC9M/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/WZHgcTH_kfw?si=SrxHNrMenXQpF7M6",
          thumbnail: "https://img.youtube.com/vi/WZHgcTH_kfw/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Mechanical Properties of Fluids",
      options: [
        {
          path: "https://youtu.be/kNdN8F5hxI4?si=MvWM6MZr1_g-rU51",
          thumbnail: "https://img.youtube.com/vi/kNdN8F5hxI4/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/YsyeNe2ybJw?si=2xAAR9-9b5Mt8Azk",
          thumbnail: "https://img.youtube.com/vi/YsyeNe2ybJw/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/LOUN1B_tYIc?si=xDy3jE5T0jdCZtOA",
          thumbnail: "https://img.youtube.com/vi/LOUN1B_tYIc/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Thermal Properties of Matter",
      options: [
        {
          path: "https://youtu.be/TtU8rRMs2bI?si=dHeLN-u4ofPFeHFg",
          thumbnail: "https://img.youtube.com/vi/TtU8rRMs2bI/hqdefault.jpg",
          channel: "Arjuna JEE",
        },
        {
          path: "https://youtu.be/NeU0RXdhnDE?si=NMY9DX6NGCBQPkHR",
          thumbnail: "https://img.youtube.com/vi/NeU0RXdhnDE/hqdefault.jpg",
          channel: "JEE Wallah",
        },
        {
          path: "https://youtu.be/OobIQ1ew8lY?si=FCme0cyvDf7wjS9c",
          thumbnail: "https://img.youtube.com/vi/OobIQ1ew8lY/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Thermodynamics",
      options: [
        {
          path: "https://youtu.be/6vmbSiUi0gw?si=KqhE7ZzyMn-av4G_",
          thumbnail: "https://img.youtube.com/vi/6vmbSiUi0gw/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xNgoox5ca2Y?si=Pzur0gAXIOFdvYAx",
          thumbnail: "https://img.youtube.com/vi/xNgoox5ca2Y/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/qi5YPlMjVPs?si=z9NiL5sydD_Kv2WE",
          thumbnail: "https://img.youtube.com/vi/qi5YPlMjVPs/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
      ],
    },
    {
      name: "Kinetic Theory",
      options: [
        {
          path: "https://youtu.be/Yv_G-G4eEHo?si=TXW2RQtbhC-hhske",
          thumbnail: "https://img.youtube.com/vi/Yv_G-G4eEHo/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/M6WlKlMYoqk?si=AKNreH_sK0_OE9_M",
          thumbnail: "https://img.youtube.com/vi/M6WlKlMYoqk/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
        {
          path: "https://youtu.be/hhluNfk-vEc?si=VfTvg6Nc6X8_ESr8",
          thumbnail: "https://img.youtube.com/vi/hhluNfk-vEc/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Oscillations",
      options: [
        {
          path: "https://youtu.be/eL7s6QvvY7k?si=WynI5re2P2AHWlgq",
          thumbnail: "https://img.youtube.com/vi/eL7s6QvvY7k/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/J4U35166F3g?si=NTjNci1ez0bJEI2O",
          thumbnail: "https://img.youtube.com/vi/J4U35166F3g/hqdefault.jpg",
          channel: "Magnet Brains",
        },
        {
          path: "https://youtu.be/mqaqzQEjLBM?si=s9p-XlxFbXTqTN6u",
          thumbnail: "https://img.youtube.com/vi/mqaqzQEjLBM/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
      ],
    },
    {
      name: "Waves",
      options: [
        {
          path: "https://youtu.be/qrJJMbGZazg?si=OIDJKt23CF51ARyW",
          thumbnail: "https://img.youtube.com/vi/qrJJMbGZazg/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/bXKhAdDaOE0?si=1Eeuv9oMhFxdiv_1",
          thumbnail: "https://img.youtube.com/vi/bXKhAdDaOE0/hqdefault.jpg",
          channel: "Abhishek Sahu",
        },
        {
          path: "https://www.youtube.com/live/uq7iH1U8el0?si=XQ3nxuWvl0MR66W1",
          thumbnail: "https://img.youtube.com/vi/uq7iH1U8el0/hqdefault.jpg",
          channel: "Vedantu JEE",
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
      name: "Some Basic Concepts of Chemistry",
      options: [
        {
          path: "https://youtu.be/MfadB5RYDWY?si=4VYFEEr0nUnjZXdD",
          thumbnail: "https://img.youtube.com/vi/MfadB5RYDWY/hqdefault.jpg",
          channel: "Uday - Class 11",
        },
        {
          path: "https://youtu.be/xOGyQdgLY_o?si=W0EMfzmapW4vOEz-",
          thumbnail: "https://img.youtube.com/vi/xOGyQdgLY_o/hqdefault.jpg",
          channel: "Munil Sir",
        },
        {
          path: "https://youtu.be/AUMulT6n_rg?si=hyhTrNCCAKImrTsY",
          thumbnail: "https://img.youtube.com/vi/AUMulT6n_rg/hqdefault.jpg",
          channel: "Etoos Education",
        },
      ],
    },
    {
      name: "Structure of Atom",
      options: [
        {
          path: "https://youtu.be/yMPNzINbwXg?si=wkCzPUDzOviuGoLR",
          thumbnail: "https://img.youtube.com/vi/yMPNzINbwXg/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/qSm0UXtH2t8?si=RY6mJmJ_QJ9XxEgW",
          thumbnail: "https://img.youtube.com/vi/qSm0UXtH2t8/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/3JibRsWm2wc?si=Fi2y-INVV7Fs5s1y",
          thumbnail: "https://img.youtube.com/vi/3JibRsWm2wc/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Classification of Elements and Periodicity in Properties",
      options: [
        {
          path: "https://youtu.be/3jvKTB9qVNo?si=tBprQrEehmh-QrWv",
          thumbnail: "https://img.youtube.com/vi/3jvKTB9qVNo/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/LzzWZ4fubr0?si=px63FyoSdeItLJEJ",
          thumbnail: "https://img.youtube.com/vi/LzzWZ4fubr0/hqdefault.jpg",
          channel: "Doubtnut Learn and Fun Class 12",
        },
        {
          path: "https://youtu.be/8JC4Sx45np8?si=qvpJqkaP-7bTD1MZ",
          thumbnail: "https://img.youtube.com/vi/8JC4Sx45np8/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Chemical Bonding and Molecular Structure",
      options: [
        {
          path: "https://youtu.be/a9Bh5YDDT6w?si=YsOq5oQ7gV9MQs7w",
          thumbnail: "https://img.youtube.com/vi/a9Bh5YDDT6w/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/bf-P_200l7M?si=z0uVfUBpRzwxssYC",
          thumbnail: "https://img.youtube.com/vi/bf-P_200l7M/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/s5Jm-bj95j8?si=wlwES9nQqe1HVzHU",
          thumbnail: "https://img.youtube.com/vi/s5Jm-bj95j8/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Chemical Thermodynamics",
      options: [
        {
          path: "https://youtu.be/7dSQM860wes?si=lhol4yFUg_9GP896",
          thumbnail: "https://img.youtube.com/vi/7dSQM860wes/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/lwe269bVEIo?si=80jqWYFNTSAl3OvS",
          thumbnail: "https://img.youtube.com/vi/lwe269bVEIo/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/rhUXxLFo-iI?si=5guUGHXsKb8_uwok",
          thumbnail: "https://img.youtube.com/vi/rhUXxLFo-iI/hqdefault.jpg",
          channel: "Munil sir",
        },
      ],
    },
    {
      name: "Equilibrium",
      options: [
        {
          path: "https://youtu.be/CVPh5tnR6Jk?si=6x726JwRWF9JNc6b",
          thumbnail: "https://img.youtube.com/vi/CVPh5tnR6Jk/hqdefault.jpg",
          channel: "Munil Sir",
        },
        {
          path: "https://youtu.be/3nErpCOQB9Y?si=aSxj7k720dY-Aa6_",
          thumbnail: "https://img.youtube.com/vi/3nErpCOQB9Y/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/RL_I2dk1SI8?si=vuGLE-Ca72JAN_gX",
          thumbnail: "https://img.youtube.com/vi/RL_I2dk1SI8/hqdefault.jpg",
          channel: "Magnet Brains",
        },
      ],
    },
    {
      name: "Redox Reactions",
      options: [
        {
          path: "https://youtu.be/pR9FmbmZ8ic?si=nMvbFek1Ve6oE_Fc",
          thumbnail: "https://img.youtube.com/vi/pR9FmbmZ8ic/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/y4wcp21mFhs?si=ANcCJzLE37dqAHsZ",
          thumbnail: "https://img.youtube.com/vi/y4wcp21mFhs/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
        {
          path: "https://youtu.be/v1-5_zTaSNQ?si=eUMcD7En08V2Wb6u",
          thumbnail: "https://img.youtube.com/vi/v1-5_zTaSNQ/hqdefault.jpg",
          channel: "Magnet Brains",
        },
      ],
    },
    {
      name: "Organic Chemistry: Some basic Principles and Techniques",
      options: [
        {
          path: "https://youtu.be/xAI7Tj6N9Fw?si=swl1yFH2M3UtE-1a",
          thumbnail: "https://img.youtube.com/vi/xAI7Tj6N9Fw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/76G56yoUkuY?si=-tyrX2o2PpkPdHIH",
          thumbnail: "https://img.youtube.com/vi/76G56yoUkuY/hqdefault.jpg",
          channel: "Munil Sir",
        },
        {
          path: "https://youtu.be/2wy2ZBVF3CU?si=eDnCCZvtwR8tyJHy",
          thumbnail: "https://img.youtube.com/vi/2wy2ZBVF3CU/hqdefault.jpg",
          channel: "Vedantu JEE Made Ejee",
        },
      ],
    },
    {
      name: "Hydrocarbons",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
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
          path: "https://youtu.be/_OThWBqmwvg?si=hh2xRdLyXMFL-d5J",
          thumbnail: "https://img.youtube.com/vi/_OThWBqmwvg/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/tP98Z_nkPQg?si=oVZszRuE6E-uIJBB",
          thumbnail: "https://img.youtube.com/vi/tP98Z_nkPQg/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/7TSmrv6GRPw?si=QyRCBDnsSldNxM1z",
          thumbnail: "https://img.youtube.com/vi/7TSmrv6GRPw/hqdefault.jpg",
          channel: "Vedantu 9,10 &11",
        },
      ],
    },
    {
      name: "Biological Classification",
      options: [
        {
          path: "https://youtu.be/GUnPzBP6KBw?si=t13JFugJe_ewXr1u",
          thumbnail: "https://img.youtube.com/vi/GUnPzBP6KBw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/Eg4JPk2APX8?si=crbiXRCE1LO81-uT",
          thumbnail: "https://img.youtube.com/vi/Eg4JPk2APX8/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/l68BufSyHog?si=KUyyWjIHDyL-Vst1",
          thumbnail: "https://img.youtube.com/vi/l68BufSyHog/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Plant Kingdom",
      options: [
        {
          path: "https://youtu.be/5dVLC_DRcao?si=7Nv49tjJjM9BqQnf",
          thumbnail: "https://img.youtube.com/vi/5dVLC_DRcao/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/afKHJRmkH1s?si=rTEVenzkoFJwLg73",
          thumbnail: "https://img.youtube.com/vi/afKHJRmkH1s/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://www.youtube.com/live/IfNzYosUYrE?si=J_Up9Op2OpoKS7vK",
          thumbnail: "https://img.youtube.com/vi/IfNzYosUYrE/hqdefault.jpg",
          channel: "Vedantu 9,10 &11",
        },
      ],
    },
    {
      name: "Animal Kingdom",
      options: [
        {
          path: "https://www.youtube.com/live/cKVzHdARVho?si=_U8PlzWq19x96ZXQ",
          thumbnail: "https://img.youtube.com/vi/cKVzHdARVho/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Morphology of Flowering Plants",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Anatomy of Flowering Plants",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Structural Organisation in Animals",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Cell - The Unit of Life",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Biomolecules",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Cell Cycle and Cell Division",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Photosynthesis in Higher Plants",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Respiration in Plants",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Plant - Growth and Development",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Breathing and Exchange of Gases",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Body Fluids and Circulation",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Excretory Products and their Elimination",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Locomotion and Movement",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Neural Control and Coordination",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
        },
      ],
    },
    {
      name: "Chemical Coordination and Integration",
      options: [
        {
          path: "https://youtu.be/NKHQihGW0Js?si=AX0OCp7LFPdhID_V",
          thumbnail: "https://img.youtube.com/vi/NKHQihGW0Js/hqdefault.jpg",
          channel: "Science and Fun Motivation",
        },
        {
          path: "https://youtu.be/xzN_SZ_AWLw?si=EGE8HYmTLOLrSW0F",
          thumbnail: "https://img.youtube.com/vi/xzN_SZ_AWLw/hqdefault.jpg",
          channel: "NCERT Wallah",
        },
        {
          path: "https://youtu.be/XAZd1uuf9KU?si=4HzUq8kbHtaz92c1",
          thumbnail: "https://img.youtube.com/vi/XAZd1uuf9KU/hqdefault.jpg",
          channel: "Munil Sir",
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
