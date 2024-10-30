import { lectures_svg, maps_svg, qbank_svg, rocket } from "@/images/main";
import { LinkType } from "./linkType";

export const links: LinkType[] = [
    { name: "Maths", path: "/StudyResources/Grade-10/maths", icon: rocket },
    {
      name: "Physics",
      path: "/StudyResources/Grade-10/physics",
      icon: lectures_svg,
    },
    {
      name: "Chemistry",
      path: "/StudyResources/Grade-10/chemistry",
      icon: maps_svg,
    },
    {
      name: "Biology",
      path: "/StudyResources/Grade-10/biology",
      icon: qbank_svg,
    },
  ];