import {
  book_svg,
  concise_svg,
  focused_svg,
  lectures_svg,
  maps_svg,
  openbook_svg,
  qbank_svg,
  support_svg,
  templates_svg,
} from "@/images/main";
import { StaticImageData } from "next/image";

export interface BenefitType {
  icon?: StaticImageData | any;
  title: string;
  description: string;
}
export const benefitsData: BenefitType[] = [
  {
    icon: openbook_svg,
    title: "Free Interesting Books",
    description:
      "Engage with curated books that simplify complex concepts and enhance your understanding.",
  },
  {
    icon: book_svg,
    title: "Concise Revision Notes",
    description:
      "Quick summaries to help you revise effectively and gain deeper insights into topics.",
  },
  {
    icon: templates_svg,
    title: "Comprehensive Study Materials",
    description:
      "Access essential textbooks, exercises, and practice questions tailored for effective learning.",
  },
  {
    icon: focused_svg,
    title: "Focused Learning Content",
    description:
      "Stay on track with a streamlined available content designed for academic excellence.",
  },
  {
    icon: support_svg,
    title: "Extensive Support Resources",
    description:
      "Utilize additional study materials to reinforce your understanding and elevate your learning journey.",
  },
  {
    icon: maps_svg,
    title: "Visual Concept Maps",
    description:
      "Break down complex topics with easy-to-follow visual aids for better retention.",
  },
  {
    icon: qbank_svg,
    title: "Question Banks",
    description:
      "Explore a wide array of questions to master each subject efficiently.",
  },
  {
    icon: lectures_svg,
    title: "Free Video Lectures",
    description:
      "Watch selected video content to clarify challenging topics in an engaging and accessible format.",
  },
  {
    icon: concise_svg,
    title: "Quick One-Paged Notes",
    description:
      "Utilize short notes summarizing key concepts for fast, efficient revision.",
  },
];
