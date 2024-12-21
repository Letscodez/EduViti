import { StaticImageData } from "next/image";
import {
  book_svg,
  bookdown_svg,
  concise_svg,
  maps_svg,
  openbook_svg,
  qbank_svg,
} from "@/images/main";

type ResourceType = {
  title: string;
  description?: string;
  icon: StaticImageData | any;
  linkName: string;
};
export const resources: ResourceType[] = [
  {
    title: "Notes",
    description: "Iconic notes, easy to understand and download",
    icon: concise_svg,
    linkName: "notes",
  },
  {
    title: "Question Banks",
    description:
      "Explore Question Banks packed with curated questions across all key subjects.",
    icon: qbank_svg,
    linkName: "question-banks",
  },
  {
    title: "Board PYQP's",
    description:
      "Get access to free CBSE Previous Year Board Question Papers (PYQPs) right here!",
    icon: maps_svg,
    linkName: "pyqp",
  },
  {
    title: "Sample Papers",
    description: "CBSE released sample papers, solved by experts",
    icon: openbook_svg,
    linkName: "sample-paper",
  },
  {
    title: "Books & Solutions",
    description:
      "All books are available like RD Sharma, RS Aggarwal, HC Verma, etc. ",
    icon: bookdown_svg,
    linkName: "books-solutions",
  },
  {
    title: "Preferred Video Lectures",
    description:
      "Dedicated Preferred Video Lectures on specific Chapter & Topics.",
    icon: book_svg,
    linkName: "video-lectures",
  },
];
export const resources2: ResourceType[] = [
  {
    title: "Notes",
    description: "Iconic notes, easy to understand and download",
    icon: concise_svg,
    linkName: "notes",
  },
  {
    title: "Question Banks",
    description:
      "Explore Question Banks packed with curated questions across all key subjects.",
    icon: qbank_svg,
    linkName: "question-banks",
  },
  {
    title: "Sample Papers",
    description: "CBSE released sample papers, solved by experts",
    icon: openbook_svg,
    linkName: "sample-paper",
  },
  {
    title: "Books & Solutions",
    description:
      "All books are available like RD Sharma, RS Aggarwal, HC Verma, etc. ",
    icon: bookdown_svg,
    linkName: "books-solutions",
  },
  {
    title: "Preferred Video Lectures",
    description:
      "Dedicated Preferred Video Lectures on specific Chapter & Topics.",
    icon: book_svg,
    linkName: "video-lectures",
  },
];
export const cbse: ResourceType[] = [
  {
    title: "Maths",
    icon: concise_svg,
    linkName: "maths",
  },
  {
    title: "Physics",
    icon: qbank_svg,
    linkName: "physics",
  },
  {
    title: "Chemistry",
    icon: openbook_svg,
    linkName: "chemistry",
  },
  {
    title: "Biology",
    icon: bookdown_svg,
    linkName: "biology",
  },
];
