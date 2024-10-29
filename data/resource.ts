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
  description: string;
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
    linkName : "question-banks"
  },
  {
    title: "PYQ's",
    description:
      "Get access to free CBSE Previous Year Question Papers (PYQs) right here!",
    icon: maps_svg,
    linkName: "pyq",
  },
  {
    title: "Sample Paper",
    description: "CBSE released sample paper, solved by experts",
    icon: openbook_svg,
    linkName: "sample-paper",
  },
  {
    title: "Books & Solutions",
    description:
      "All books are available like RD Sharma, RS Aggarwal, HC Verma, etc. ",
    icon: bookdown_svg,
    linkName: "books-and-solutions",
  },
  {
    title: "Preferred Video Lectures",
    description:
      "Dedicated Preferred Video Lectures on specific Chapter & Topics.",
    icon: book_svg,
    linkName: "video-lectures",
  },
];
