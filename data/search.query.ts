const individual_paths: Array<SearchItem> = [
  {
    title: "Books",
    url: "/books",
    preference: 10,
  },
  {
    title: "Free Online Courses",
    url: "/FreeOnlineCourses",
    preference: 10,
  },
  {
    title: "Study Resources",
    url: "/StudyResources",
    preference: 10,
  },
];

const free_online_courses_paths: Array<SearchItem> = [
  {
    title: "Class 10 Biology Courses",
    url: "/FreeOnlineCourses/CBSE/class-10/biology",
    preference: 10,
  },
  {
    title: "Class 10 Chemistry Courses",
    url: "/FreeOnlineCourses/CBSE/class-10/chemistry",
    preference: 10,
  },
  {
    title: "Class 10 Maths Courses",
    url: "/FreeOnlineCourses/CBSE/class-10/maths",
    preference: 10,
  },
  {
    title: "Class 10 Physics Courses",
    url: "/FreeOnlineCourses/CBSE/class-10/physics",
    preference: 10,
  },
  {
    title: "Class 9 Biology Courses",
    url: "/FreeOnlineCourses/CBSE/class-9/biology",
    preference: 10,
  },
  {
    title: "Class 9 Chemistry Courses",
    url: "/FreeOnlineCourses/CBSE/class-9/chemistry",
    preference: 10,
  },
  {
    title: "Class 9 Maths Courses",
    url: "/FreeOnlineCourses/CBSE/class-9/maths",
    preference: 10,
  },
  {
    title: "Class 9 Physics Courses",
    url: "/FreeOnlineCourses/CBSE/class-9/physics",
    preference: 10,
  },
  {
    title: "Class 11 Biology Courses",
    url: "/FreeOnlineCourses/CBSE/class-11/biology",
    preference: 10,
  },
  {
    title: "Class 11 Chemistry Courses",
    url: "/FreeOnlineCourses/CBSE/class-11/chemistry",
    preference: 10,
  },
  {
    title: "Class 11 Maths Courses",
    url: "/FreeOnlineCourses/CBSE/class-11/maths",
    preference: 10,
  },
  {
    title: "Class 11 Physics Courses",
    url: "/FreeOnlineCourses/CBSE/class-11/physics",
    preference: 10,
  },
  {
    title: "Class 12 Biology Courses",
    url: "/FreeOnlineCourses/CBSE/class-12/biology",
    preference: 10,
  },
  {
    title: "Class 12 Chemistry Courses",
    url: "/FreeOnlineCourses/CBSE/class-12/chemistry",
    preference: 10,
  },
  {
    title: "Class 12 Maths Courses",
    url: "/FreeOnlineCourses/CBSE/class-12/maths",
    preference: 10,
  },
  {
    title: "Class 12 Physics Courses",
    url: "/FreeOnlineCourses/CBSE/class-12/physics",
    preference: 10,
  },
  {
    title: "CBSE Courses",
    url: "/FreeOnlineCourses/CBSE",
    preference: 10,
  },
  {
    title: "Computer Science Courses",
    url: "/FreeOnlineCourses/ComputerScience",
    preference: 10,
  },
  {
    title: "Jee Courses",
    url: "/FreeOnlineCourses/JEE",
    preference: 10,
  },
  {
    title: "Computer Science Courses",
    url: "/FreeOnlineCourses/NEET",
    preference: 10,
  },
];

const books_paths: Array<SearchItem> = [
  {
    title: "Astronomy Books",
    url: "/books/Astronomy",
    preference: 10,
  },
  {
    title: "Computer Science Books",
    url: "/books/ComputerScience",
    preference: 10,
  },
  {
    title: "Data Science Books",
    url: "/books/DataScience",
    preference: 10,
  },
  {
    title: "Engineering Physics Books",
    url: "/books/EngineeringPhysics",
    preference: 10,
  },
  {
    title: "Fundamental Science Books",
    url: "/books/FundamentalScience",
    preference: 10,
  },
  {
    title: "Maths Books",
    url: "/books/Maths",
    preference: 10,
  },
  {
    title: "QuantumPhysics Books",
    url: "/books/QuantumPhysics",
    preference: 10,
  },
];

const class_paths: Array<SearchItem> = [
  {
    title: "Study Resources",
    url: "/StudyResources",
    preference: 10,
  },
  {
    title: "Class 9",
    url: "/StudyResources/Grade-9",
    preference: 10,
  },
  {
    title: "Class 10",
    url: "/StudyResources/Grade-10",
    preference: 10,
  },
  {
    title: "Class 11",
    url: "/StudyResources/Grade-11",
    preference: 10,
  },
  {
    title: "Class 12",
    url: "/StudyResources/Grade-12",
    preference: 10,
  },
];

// Interface for SearchItem
interface SearchItem {
  title: string;
  url: string;
  preference: number;
}

// Classes, Subjects, and Categories for dynamic path generation
const classes = ["Class 9", "Class 10", "Class 11", "Class 12"];
const subjects = ["physics", "chemistry", "maths", "biology"];
const categories = [
  "notes",
  "question-banks",
  "sample-paper",
  "books-solutions",
  "video-lectures",
];

// Array to hold the dynamic paths
const dynamicArray: Array<SearchItem> = [];

// Generate dynamic structure for each class, subject, and category
classes.forEach((grade) => {
  subjects.forEach((subject) => {
    categories.forEach((category) => {
      dynamicArray.push({
        title: `${grade} - ${subject} - ${category}`,
        url: `/StudyResources/${grade}/${subject}/${category}`,
        preference: 10,
      });
    });
  });
});

// Combining all paths
export const search_list: Array<SearchItem> = [
  ...individual_paths,
  ...class_paths,
  ...books_paths,
  ...free_online_courses_paths,
  ...dynamicArray,
];
