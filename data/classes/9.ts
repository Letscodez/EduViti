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
  question_banks: [
    {
      name: "Number Systems",
      sets: [{ name: "Set 1", path: "1MKVrFMGYRRNF5gfFCcyJxSM931yJrt9O" }],
    },
    {
      name: "Polynomials",
      sets: [{ name: "Set 1", path: "1hb_qo7JvZpV5sgtvbYht-KDaTA3qw5m9" }], // Empty array for chapters without specific sets
    },
    {
      name: "Coordinate Geometry",
      sets: [{ name: "Set 1", path: "1XzbSAR_1eJWVQhYHUcHIfjUpJhIHPp6r" }],
    },
    {
      name: "Linear Equations in Two Variables",
      sets: [{ name: "Set 1", path: "1ndCa9z9W8qBONtnl7wJYRVVQKcLY9KDW" }],
    },
    {
      name: "Euclid’s Geometry",
      sets: [{ name: "Set 1", path: "11CZxFXMKA12dtohJM390NQvvBaHOhUtp" }],
    },
    {
      name: "Lines and Angles",
      sets: [{ name: "Set 1", path: "18NZRrhbbrVOHNMHAqe5uUNd5gpeIk2hG" }],
    },
    {
      name: "Triangles",
      sets: [{ name: "Set 1", path: "10J6aiHa8ACzJ1JfAHJpel37IlSY4qPli" }],
    },
    {
      name: "Quadrilaterals",
      sets: [{ name: "Set 1", path: "1qSmAORely4h1q-c0oeB-fhsjyx-8D3yD" }],
    },
    {
      name: "Areas of Parallelograms and Triangles",
      sets: [{ name: "Set 1", path: "1tb-coGQNiteLs87LpkpUpmFFdhAVVnW-" }],
    },
    {
      name: "Circles",
      sets: [{ name: "Set 1", path: "1GM9RO7AzeOmDwMF-FyspGePF8dvU_bW1" }],
    },
    {
      name: "Constructions",
      sets: [{ name: "Set 1", path: "1v90sU7F58jWwZ2qOmhVsY_9cCexSXJkV" }],
    },
    {
      name: "Heron’s Formula",
      sets: [{ name: "Set 1", path: "1M_EMbETn1D84i1K5gfl3kahHl1HsYbxi" }],
    },
    {
      name: "Surface Areas and Volumes",
      sets: [{ name: "Set 1", path: "1chWXpyx9VlMmoII8ft5UjFwxPtxCmQLg" }],
    },
    {
      name: "Statistics",
      sets: [{ name: "Set 1", path: "1zqdMR2dC97QnPDIUJLONGRLfrm8f4c2F" }],
    },
    {
      name: "Probability",
      sets: [{ name: "Set 1", path: "1J3HbINLJZhr-3sVhLssn0S7PZEMBPuvv" }],
    },
  ],

  sample_papers: [
    {
      name: "Number Systems",
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
      ], // Empty array for chapters without specific sets
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
      name: "Linear Equations in Two Variables",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Euclid’s Geometry",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Lines and Angles",
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
      name: "Quadrilaterals",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Areas of Parallelograms and Triangles",
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
      name: "Constructions",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 2", path: "" },
        { name: "Set 3", path: "" },
      ],
    },
    {
      name: "Heron’s Formula",
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
      name: "Number System",
      options: [
        {
          path: "https://youtu.be/mvJNnu5cLVQ?si=TLOwdOmH5Lv_z26E",
          thumbnail: "https://img.youtube.com/vi/mvJNnu5cLVQ/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/xn2HskGqSkI?si=mLdxfuxau9-oPdGc",
          thumbnail: "https://img.youtube.com/vi/xn2HskGqSkI/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/IMnSIaPcqiE?si=rd2E2CU5RdwpWVWB",
          thumbnail: "https://img.youtube.com/vi/IMnSIaPcqiE/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
      ],
    },
    {
      name: "Polynomials",
      options: [
        {
          path: "https://youtu.be/piVBy9DRPOw?si=bqPVq2bKwHhP9X-c",
          thumbnail: "https://img.youtube.com/vi/piVBy9DRPOw/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/HrWVcpxxG-E?si=DGEFqoX9zJncRY4p",
          thumbnail: "https://img.youtube.com/vi/HrWVcpxxG-E/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/roFOxpZtiV4?si=sSAVnjx0LTx7Rleg",
          thumbnail: "https://img.youtube.com/vi/roFOxpZtiV4/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/4VHrvMutJQw?si=ssfRhRJuhBC8rCYa",
          thumbnail: "https://img.youtube.com/vi/4VHrvMutJQw/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
      ],
    },
    {
      name: "Coordinate Geometry",
      options: [
        {
          path: "https://youtu.be/CEF-IN3HMgk?si=bQ4LKReCRBC1V13m",
          thumbnail: "https://img.youtube.com/vi/CEF-IN3HMgk/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/xy5-dN_F1EY?si=1lUFPgtiygEQ3DvQ",
          thumbnail: "https://img.youtube.com/vi/xy5-dN_F1EY/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/C5YdatNlzXg?si=_ijF6aHaRFZoD2hp",
          thumbnail: "https://img.youtube.com/vi/C5YdatNlzXg/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/3MIZUl6bWxY?si=Q1-ohWFYcKEdeTc9",
          thumbnail: "https://img.youtube.com/vi/3MIZUl6bWxY/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
      ],
    },
    {
      name: "Linear Equations in Two Variables",
      options: [
        {
          path: "https://youtu.be/WgwGkAxG1OM?si=Fvuuzh-BL2q-lG_C",
          thumbnail: "https://img.youtube.com/vi/WgwGkAxG1OM/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/mYrKse4WKsQ?si=-hO36HfMHQAtBJVP",
          thumbnail: "https://img.youtube.com/vi/mYrKse4WKsQ/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/rnudiJxVXxM?si=5LyW-RtczekCwWRp",
          thumbnail: "https://img.youtube.com/vi/rnudiJxVXxM/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/s6DFsuvWl-4?si=12lZlGmC-RgZF6co",
          thumbnail: "https://img.youtube.com/vi/s6DFsuvWl-4/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Euclid’s Geometry",
      options: [
        {
          path: "https://youtu.be/TN4yzAvyTyA?si=rCkk7JgvgM1-dXdS",
          thumbnail: "https://img.youtube.com/vi/TN4yzAvyTyA/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/mxeXcTjQiuM?si=7GUd5ubFJuH9JIZu",
          thumbnail: "https://img.youtube.com/vi/mxeXcTjQiuM/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/V3OaMQDynpw?si=A1WVOoYuiHexChFW",
          thumbnail: "https://img.youtube.com/vi/V3OaMQDynpw/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Lines and Angles",
      options: [
        {
          path: "https://youtu.be/Ab85MNomGrk?si=Bu1oCYHlHYaSzHVS",
          thumbnail: "https://img.youtube.com/vi/Ab85MNomGrk/hqdefault.jpg",
          channel: "Neev",
        },
        {
          path: "https://youtu.be/Ew3vnuclMj0?si=KwSehnjJyuC7Oirb",
          thumbnail: "https://img.youtube.com/vi/Ew3vnuclMj0/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/nEYldznpZmk?si=n9ooQSGPPHsf-JL1",
          thumbnail: "https://img.youtube.com/vi/nEYldznpZmk/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/fTu41yTrvLQ?si=r73YJuwhmUxTEXsi",
          thumbnail: "https://img.youtube.com/vi/fTu41yTrvLQ/hqdefault.jpg",
          channel: "E Saral",
        },
      ],
    },
    {
      name: "Triangles",
      options: [
        {
          path: "https://youtu.be/JchrIviEP-k?si=e0-ZrNJ6s_O4wW-X",
          thumbnail: "https://img.youtube.com/vi/JchrIviEP-k/hqdefault.jpg",
          channel: "Neev",
        },
        {
          path: "https://youtu.be/wIeiqvdVCJI?si=IRGUz5PHEaWL0Hfs",
          thumbnail: "https://img.youtube.com/vi/wIeiqvdVCJI/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/opM7P7qbxBc?si=yjOaoRA-aqBuaaL2",
          thumbnail: "https://img.youtube.com/vi/opM7P7qbxBc/hqdefault.jpg",
          channel: "E Saral",
        },
      ],
    },
    {
      name: "Quadrilaterals",
      options: [
        {
          path: "https://youtu.be/STrfPXdTzUA?si=ErbBls5HYvkRHjZL",
          thumbnail: "https://img.youtube.com/vi/STrfPXdTzUA/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/gRnugEmmMwY?si=tOdMeP99ABoNt6WO",
          thumbnail: "https://img.youtube.com/vi/gRnugEmmMwY/hqdefault.jpg",
          channel: "E Saral",
        },
        {
          path: "https://youtu.be/i4YkXbppbJE?si=nzK7ZoaZfogfQtmx",
          thumbnail: "https://img.youtube.com/vi/i4YkXbppbJE/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Areas of Parallelograms and Triangles",
      options: [
        {
          path: "https://youtu.be/q1TP_HOI3PU?si=oDr_RyyP3ceS6fHS",
          thumbnail: "https://img.youtube.com/vi/q1TP_HOI3PU/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/2wxOtjqcKME?si=rZ6eXDRrU_QH5zHB",
          thumbnail: "https://img.youtube.com/vi/2wxOtjqcKME/hqdefault.jpg",
          channel: "Neev",
        },
      ],
    },
    {
      name: "Circles",
      options: [
        {
          path: "https://youtu.be/mCWjZ5q58u8?si=e3r0QLonwPcPerGV",
          thumbnail: "https://img.youtube.com/vi/mCWjZ5q58u8/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/eU3TKYrdAmU?si=QrHB0j1DEqPLAxne",
          thumbnail: "https://img.youtube.com/vi/eU3TKYrdAmU/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/5ZKPUljCgnA?si=5mpe-LhGIOXvnbxU",
          thumbnail: "https://img.youtube.com/vi/5ZKPUljCgnA/hqdefault.jpg",
          channel: "E Saral",
        },
      ],
    },
    {
      name: "Constructions",
      options: [
        {
          path: "https://youtu.be/Xh71XjC_tzc?si=YRblVoNF5yMa8l4S",
          thumbnail: "https://img.youtube.com/vi/Xh71XjC_tzc/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Heron’s Formula",
      options: [
        {
          path: "https://youtu.be/TR6LgGf1hw4?si=gxcT5wsgnmNPWB_i",
          thumbnail: "https://img.youtube.com/vi/TR6LgGf1hw4/hqdefault.jpg",
          channel: "Neev",
        },
        {
          path: "https://youtu.be/xovtUr4TN6Y?si=d8NUAsuzqgJRjy3c",
          thumbnail: "https://img.youtube.com/vi/xovtUr4TN6Y/hqdefault.jpg",
          channel: "Shobhit Nirwan",
        },
        {
          path: "https://youtu.be/5NgoP7d-Nmo?si=nRKBPnByahyp4nRR",
          thumbnail: "https://img.youtube.com/vi/5NgoP7d-Nmo/hqdefault.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Surface Areas and Volumes",
      options: [
        {
          path: "https://youtu.be/DDr1vzPtBzM?si=jSvWd7XazLytT4UO",
          thumbnail: "https://img.youtube.com/vi/DDr1vzPtBzM/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/Zdr7z5F8Tsg?si=mUOFZlhSSsByFiUK",
          thumbnail: "https://img.youtube.com/vi/Zdr7z5F8Tsg/hqdefault.jpg",
          channel: "Neev",
        },
      ],
    },
    {
      name: "Statistics",
      options: [
        {
          path: "https://youtu.be/I14-2s24_JI?si=6ei-m_sSyH46dtgx",
          thumbnail: "https://img.youtube.com/vi/I14-2s24_JI/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/z0CtovThIr0?si=ktXFJD3_4rMJLwe3",
          thumbnail: "https://img.youtube.com/vi/z0CtovThIr0/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/6PDGSCB0RFQ?si=QfKQ3o4lnswqYACA",
          thumbnail: "https://img.youtube.com/vi/6PDGSCB0RFQ/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Probability",
      options: [
        {
          path: "https://youtu.be/LZf-LjUXYzk?si=vnhyVyCivTPZ89LO",
          thumbnail: "https://img.youtube.com/vi/LZf-LjUXYzk/hqdefault.jpg",
          channel: "Neev",
        },
        {
          path: "https://youtu.be/_XT6d6k8J5Q?si=GvqdxiJG2vsjOrNb",
          thumbnail: "https://img.youtube.com/vi/_XT6d6k8J5Q/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
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
  question_banks: [
    {
      name: "Motion",
      sets: [
        {
          name: "Set 1",
          path: "1-KZn4bWVGW3YWNLwbF1bC9h3oM0XyG0g",
        },
      ],
    },
    {
      name: "Force & Laws of Motion",
      sets: [
        {
          name: "Set 1",
          path: "1UXjMuSVytzfUvD-S-lszBxdND9JzRbnZ",
        },
      ],
    },
    {
      name: "Gravitation",
      sets: [
        {
          name: "Set 1",
          path: "1wiTda8Cj9AjCPcnWPwWUR8LWssRcHmu8",
        },
      ],
    },
    {
      name: "Work and Energy",
      sets: [
        {
          name: "Set 1",
          path: "1JsxO7oGT5rYKybAwhrzDNaj1aOrQfIyy",
        },
      ],
    },
    {
      name: "Sound",
      sets: [
        {
          name: "Set 1",
          path: "1H92mBGUxjcuLv_FkdkFQoPGY2UVWqKuK",
        },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Motion",
      sets: [
        { name: "Set 1", path: "" },
        { name: "Set 3", path: "" },
        { name: "Set 2", path: "" },
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
          thumbnail: "https://img.youtube.com/vi/Hu4aP4m00ks/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/jC6MW9KOQvU?si=yH0efVt-LoVXP0W6",
          thumbnail: "https://img.youtube.com/vi/jC6MW9KOQvU/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/kBq6HCRNqa8?si=V_2KYBM2K__lXWfM",
          thumbnail: "https://img.youtube.com/vi/kBq6HCRNqa8/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/UNaOc4pXoUM?si=qMjqtq1FYk8Cz5RQ",
          thumbnail: "https://img.youtube.com/vi/UNaOc4pXoUM/hqdefault.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Force & Laws of Motion",
      options: [
        {
          path: "https://youtu.be/CfxfW64P04s?si=axw-9EPneSmCDD5J",
          thumbnail: "https://img.youtube.com/vi/CfxfW64P04s/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/4tVLGfVf1JY?si=I3UE-rsFZ4Bj82Cd",
          thumbnail: "https://img.youtube.com/vi/4tVLGfVf1JY/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/gAwBg9sQz0M?si=CPdcngRYvDv7llWC",
          thumbnail: "https://img.youtube.com/vi/gAwBg9sQz0M/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yhyMVW8vhlw?si=Boeti5Xzy2_e0wJb",
          thumbnail: "https://img.youtube.com/vi/yhyMVW8vhlw/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Gravitation",
      options: [
        {
          path: "https://youtu.be/cWNh0yGdXvg?si=O8V4HNh0L7H2TbBi",
          thumbnail: "https://img.youtube.com/vi/cWNh0yGdXvg/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/MwDnfa3puhA?si=Bb5IOV3zJezEt6tA",
          thumbnail: "https://img.youtube.com/vi/MwDnfa3puhA/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yeFQ2Ce_nKo?si=HrP96HKeGIvFBcaN",
          thumbnail: "https://img.youtube.com/vi/yeFQ2Ce_nKo/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/VcACFEy97o0?si=pIq_a9EBbeSqooYO",
          thumbnail: "https://img.youtube.com/vi/VcACFEy97o0/hqdefault.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Work and Energy",
      options: [
        {
          path: "https://youtu.be/bGFE2Z-VVM8?si=Kzj_85ycz4VbJFaA",
          thumbnail: "https://img.youtube.com/vi/bGFE2Z-VVM8/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/bf0VndcVIdA?si=Z-LefXTDohw3LZBL",
          thumbnail: "https://img.youtube.com/vi/bf0VndcVIdA/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/DaSbG6oxcUs?si=9QPsLaWlQtcRkIuy",
          thumbnail: "https://img.youtube.com/vi/DaSbG6oxcUs/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/kUDTV32U98s?si=OPmJcefxDnACKtKt",
          thumbnail: "https://img.youtube.com/vi/kUDTV32U98s/hqdefault.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Sound",
      options: [
        {
          path: "https://youtu.be/0582DSZbGrY?si=B4RtqNElW5jcPjVH",
          thumbnail: "https://img.youtube.com/vi/0582DSZbGrY/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/BD0pQ9EH4_8?si=tVUwBlzoboNqFBoS",
          thumbnail: "https://img.youtube.com/vi/BD0pQ9EH4_8/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/yWa-n2xTIH8?si=1_BksL_GEn_3_8Gj",
          thumbnail: "https://img.youtube.com/vi/yWa-n2xTIH8/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/1lOvAIx73vM?si=5MSUCbdt2Exw4gu4",
          thumbnail: "https://img.youtube.com/vi/1lOvAIx73vM/hqdefault.jpg",
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
  question_banks: [
    {
      name: "Matter in Our Surroundings",
      sets: [
        {
          name: "Set 1",
          path: "1vCsM_o-FEyTRJ0pa4j8jgpIlmJO1HpSB",
        },
      ],
    },
    {
      name: "Is Matter Around Us Pure ",
      sets: [
        {
          name: "Set 1",
          path: "15dM_Dyo8WlvSidQJkaAGxcd71gU4pd_X",
        },
      ],
    },
    {
      name: "Atoms and Molecules",
      sets: [
        {
          name: "Set 1",
          path: "1nkeCPJRLCtNWnQQeBvT9ZnV48tpC7Mq9",
        },
      ],
    },
    {
      name: "Structure of The Atom",
      sets: [
        {
          name: "Set 1",
          path: "/1Ear3qjAHv9-jQ6bEN7vNJpKpTkrEuh2A",
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
          path: "https://youtu.be/Ltr3IROAD0E?si=TEKbxwESr5Vgldjy",
          thumbnail: "https://img.youtube.com/vi/Ltr3IROAD0E/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/xjP2CwCLKsE?si=7jbazPmRbx37W_lF",
          thumbnail: "https://img.youtube.com/vi/xjP2CwCLKsE/hqdefault.jpg",
          channel: "EduMantra- Sanjiv Pandey",
        },
        {
          path: "https://youtu.be/bmzDsWMSCTk?si=yyUHQV9ehbmDQ2Sq",
          thumbnail: "https://img.youtube.com/vi/bmzDsWMSCTk/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/ddkOJ95g7Ro?si=Kf9hB2YC-D0hvUy8",
          thumbnail: "https://img.youtube.com/vi/ddkOJ95g7Ro/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/vtnGL7sPNJc?si=r1wziHbZ8m_t1ft_",
          thumbnail: "https://img.youtube.com/vi/vtnGL7sPNJc/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Is Matter Around Us Pure",
      options: [
        {
          path: "https://youtu.be/dRIKuLVW3-s?si=0j4qoCpc5cda7bCG",
          thumbnail: "https://img.youtube.com/vi/dRIKuLVW3-s/hqdefault.jpg",
          channel: "EduMantra- Sanjiv Pandey",
        },
        {
          path: "https://youtu.be/KXlgr9CNfM8?si=RXbHYaGIQSxpos3j",
          thumbnail: "https://img.youtube.com/vi/KXlgr9CNfM8/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/fDTLrhcIWx0?si=PJkWWR2lUpEK8FyM",
          thumbnail: "https://img.youtube.com/vi/fDTLrhcIWx0/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://youtu.be/jELZR724itY?si=nBIf7rZFc_t3Ouyv",
          thumbnail: "https://img.youtube.com/vi/jELZR724itY/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
      ],
    },
    {
      name: "Atoms and Molecules",
      options: [
        {
          path: "https://youtu.be/jG3MHvLQmU8?si=T08MJvegSdac_xoq",
          thumbnail: "https://img.youtube.com/vi/jG3MHvLQmU8/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/lz6az1x-QME?si=ZKVUzLXWp-KmSpbi",
          thumbnail: "https://img.youtube.com/vi/lz6az1x-QME/hqdefault.jpg",
          channel: "Bhai Ki Padhai",
        },
        {
          path: "https://youtu.be/dHlIHgqdYJM?si=ITpHXVvnuSwVNrDO",
          thumbnail: "https://img.youtube.com/vi/dHlIHgqdYJM/hqdefault.jpg",
          channel: "EduMantra- Sanjiv Pandey",
        },
        {
          path: "https://youtu.be/Jy2bLuZU8ps?si=V11Y8mae5ZOi4YA8",
          thumbnail: "https://img.youtube.com/vi/Jy2bLuZU8ps/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
      ],
    },
    {
      name: "Structure of The Atom",
      options: [
        {
          path: "https://youtu.be/IvY7IR2Kh-E?si=73azBJsf0gOCEveD",
          thumbnail: "https://img.youtube.com/vi/IvY7IR2Kh-E/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/g8EgBvENBr4?si=1GcQBJOxvcExi0qC",
          thumbnail: "https://img.youtube.com/vi/g8EgBvENBr4/hqdefault.jpg",
          channel: "Just Padhle",
        },
        {
          path: "https://youtu.be/d3BMmdZsI5Q?si=q-5q8AWxr2fZG4YU",
          thumbnail: "https://img.youtube.com/vi/d3BMmdZsI5Q/hqdefault.jpg",
          channel: "Bhai Ki Padhai",
        },
        {
          path: "https://youtu.be/gFMHM6FUl40?si=rjCsmv7Be57oLYNG",
          thumbnail: "https://img.youtube.com/vi/gFMHM6FUl40/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
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

  question_banks: [
    {
      name: "The Fundamental Unit of Life",
      sets: [
        {
          name: "Set 1",
          path: "https://drive.google.com/file/d/1xzGwz6XcGR4VFXA0cJ41-zvqQ3pXlygd/view?usp=drive_link",
        },
      ],
    },
    {
      name: "Tissues",
      sets: [
        {
          name: "Set 1",
          path: "https://drive.google.com/file/d/1EGS_jQbsL3mCGr82xTfn0CMPCXD171qI/view?usp=drive_link",
        },
      ],
    },

    {
      name: "Why do We Fall Ill",
      sets: [
        {
          name: "Set 1",
          path: "https://drive.google.com/file/d/1d6s9GlK-RpwgXn5ILzCcV8GyR3t5twob/view?usp=drive_link",
        },
      ],
    },

    {
      name: "Improvement in Food Resources",
      sets: [
        {
          name: "Set 1",
          path: "https://drive.google.com/file/d/1SCyqbw0T8c1gGNbZCiWkfrrH8t7j8VlQ/view?usp=drive_link",
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
          path: "https://youtu.be/2_zk9rG0k0w?si=iWWEwCmwBAOFA7CG",
          thumbnail: "https://img.youtube.com/vi/2_zk9rG0k0w/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/iEryaOfAcBA?si=gMS2tG7yRBPDo-Iy",
          thumbnail: "https://img.youtube.com/vi/iEryaOfAcBA/hqdefault.jpg",
          channel: "Science and Fun Education",
        },
        {
          path: "https://youtu.be/E2zJYiZQoWc?si=ryBwyD4fOUHAC_1r",
          thumbnail: "https://img.youtube.com/vi/E2zJYiZQoWc/hqdefault.jpg",
          channel: "EduMantra- Sanjiv Pandey",
        },
        {
          path: "https://youtu.be/mVZlfxM5ih4?si=kqekdgAi3K9QQSYZ",
          thumbnail: "https://img.youtube.com/vi/mVZlfxM5ih4/hqdefault.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Tissues",
      options: [
        {
          path: "https://youtu.be/zQbIU6utPJ4?si=I8BGbAjAYOMVmElU",
          thumbnail: "https://img.youtube.com/vi/zQbIU6utPJ4/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/RJsLw5cmbP8?si=P2XjyvtbQfki7P7Z",
          thumbnail: "https://img.youtube.com/vi/RJsLw5cmbP8/hqdefault.jpg",
          channel: "Exphub 9th & 10th",
        },
        {
          path: "https://www.youtube.com/live/HyyaSl9dKqI?si=HrnDUPyl6QIIShWf",
          thumbnail: "https://img.youtube.com/vi/HyyaSl9dKqI/hqdefault.jpg",
          channel: "Vedantu9&10",
        },
        {
          path: "https://youtu.be/1jn266MKZrs?si=WaSG2ibsnyGPx9KS",
          thumbnail: "https://img.youtube.com/vi/1jn266MKZrs/hqdefault.jpg",
          channel: "Just Padhle",
        },
      ],
    },
    {
      name: "Diversity in Living Organisms",
      options: [
        {
          path: "https://youtu.be/CGRzD77Mul8?si=8VYfejMXidiV94Hy",
          thumbnail: "https://img.youtube.com/vi/CGRzD77Mul8/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/mxJowLgBojs?si=TMetQDMMWti1iJ6U",
          thumbnail: "https://img.youtube.com/vi/mxJowLgBojs/hqdefault.jpg",
          channel: "EduMantra- Sanjiv Pandey",
        },
        {
          path: "https://youtu.be/arROXsh6-ZQ?si=cIkm562ekJjqkIC0",
          thumbnail: "https://img.youtube.com/vi/arROXsh6-ZQ/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
      ],
    },
    {
      name: "Why do We Fall Ill",
      options: [
        {
          path: "https://youtu.be/RBlj7HHbo2Y?si=sgaS0579NCahdJAl",
          thumbnail: "https://img.youtube.com/vi/RBlj7HHbo2Y/hqdefault.jpg",
          channel: "Magnet Brains",
        },
        {
          path: "https://youtu.be/oSzlqFMnw3Y?si=nfS-MxzKHoFZ2stY",
          thumbnail: "https://img.youtube.com/vi/oSzlqFMnw3Y/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/U0ya3DntNRc?si=Io-YsU1WXPDKt8dB",
          thumbnail: "https://img.youtube.com/vi/U0ya3DntNRc/hqdefault.jpg",
          channel: "EduMantra- Sanjiv Pandey",
        },
      ],
    },
    {
      name: "Natural Resources",
      options: [
        {
          path: "https://youtu.be/SHQwJ3hOX6E?si=ErenXt8QiFD3BVop",
          thumbnail: "https://img.youtube.com/vi/SHQwJ3hOX6E/hqdefault.jpg",
          channel: "Physics Wallah Foundation",
        },
        {
          path: "https://youtu.be/wdrxy66moxU?si=LP_izEZNQCXxiU5B",
          thumbnail: "https://img.youtube.com/vi/wdrxy66moxU/hqdefault.jpg",
          channel: "NEEV",
        },
      ],
    },
    {
      name: "Improvement in Food Resources",
      options: [
        {
          path: "https://youtu.be/g5waLgRvRhs?si=ASWhTCPIHxOGUQWd",
          thumbnail: "https://img.youtube.com/vi/g5waLgRvRhs/hqdefault.jpg",
          channel: "Vedantu9&10",
        },
        {
          path: "https://youtu.be/dRt7KnwsuUE?si=NdF_2iuJx7gw2heA",
          thumbnail: "https://img.youtube.com/vi/dRt7KnwsuUE/hqdefault.jpg",
          channel: "NEEV",
        },
        {
          path: "https://youtu.be/xY1vBwSzAM8?si=FU7-9FrSPUsAedRe",
          thumbnail: "https://img.youtube.com/vi/xY1vBwSzAM8/hqdefault.jpg",
          channel: "Just Padhle",
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
