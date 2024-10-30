import { lectures_svg, maps_svg, qbank_svg, rocket } from "@/images/main";
import { LinkType } from "./linkType";

export const links: LinkType[] = [
    { name: "Maths", path: "/StudyResources/Grade-12/maths", icon: rocket },
    {
      name: "Physics",
      path: "/StudyResources/Grade-12/physics",
      icon: lectures_svg,
    },
    {
      name: "Chemistry",
      path: "/StudyResources/Grade-12/chemistry",
      icon: maps_svg,
    },
    {
      name: "Biology",
      path: "/StudyResources/Grade-12/biology",
      icon: qbank_svg,
    },
  ];