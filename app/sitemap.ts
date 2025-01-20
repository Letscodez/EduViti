import type { MetadataRoute } from "next";

const generateClassSubjectLinks = () => {
  const classes = [9, 10, 11, 12];
  const subjects = ["physics", "chemistry", "maths", "biology"];
  const links: MetadataRoute.Sitemap = [];

  classes.forEach((classNum) => {
    subjects.forEach((subject) => {
      links.push({
        url: `https://eduviti.me/FreeOnlineCourses/CBSE/class-${classNum}/${subject}`,
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 0.7,
      });
    });
  });

  return links;
};
const generateClass10n12Links = () => {
  const classes = [10, 12];
  const subjects = ["physics", "chemistry", "maths", "biology"];
  const resources = [
    "notes",
    "question-banks",
    "sample-paper",
    "books-solutions",
    "video-lectures",
    "pyqp",
  ];
  const links: MetadataRoute.Sitemap = [];

  classes.forEach((classNum) => {
    subjects.forEach((subject) => {
      resources.forEach((resource) => {
        links.push({
          url: `https://eduviti.me/StudyResources/Grade-${classNum}/${subject}/${resource}`,
          lastModified: new Date(),
          changeFrequency: "hourly",
          priority: 0.7,
        });
      });
    });
  });

  return links;
};
const generateClass9n11Links = () => {
  const classes = [9, 11];
  const subjects = ["physics", "chemistry", "maths", "biology"];
  const resources = [
    "notes",
    "question-banks",
    "sample-paper",
    "books-solutions",
    "video-lectures",
  ];
  const links: MetadataRoute.Sitemap = [];

  classes.forEach((classNum) => {
    subjects.forEach((subject) => {
      resources.forEach((resource) => {
        links.push({
          url: `https://eduviti.me/StudyResources/Grade-${classNum}/${subject}/${resource}`,
          lastModified: new Date(),
          changeFrequency: "hourly",
          priority: 0.7,
        });
      });
    });
  });

  return links;
};
const top_level_routes: MetadataRoute.Sitemap = [
  {
    url: "https://eduviti.me",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 1.0,
  },
  {
    url: "https://eduviti.me/StartLearning",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  },
  {
    url: "https://eduviti.me/StudyREsources",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  },
  {
    url: "https://eduviti.me/StudyREsources",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  },
  {
    url: "https://eduviti.me/books",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  },
  {
    url: "https://eduviti.me/FreeOnlineCourses",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  },
];
const study_resources: MetadataRoute.Sitemap = [
  {
    url: "https://eduviti.me/StudyResources/Grade-9",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/StudyResources/Grade-10",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/StudyResources/Grade-11",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/StudyResources/Grade-12",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  ...generateClass9n11Links(),
  ...generateClass10n12Links(),
];
const books: MetadataRoute.Sitemap = [
  {
    url: "https://eduviti.me/books/Maths",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/books/EngineeringPhysics",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/books/Astronomy",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/books/ComputerScience",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/books/DataScience",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/books/FundamentalScience",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/books/QuantumPhysics",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
];
const free_online_courses: MetadataRoute.Sitemap = [
  {
    url: "https://eduviti.me/FreeOnlineCourses/JEE",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/FreeOnlineCourses/NEET",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  {
    url: "https://eduviti.me/FreeOnlineCourses/CBSE",
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.7,
  },
  ...generateClassSubjectLinks(),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...top_level_routes,
    ...study_resources,
    ...books,
    ...free_online_courses,
  ];
}