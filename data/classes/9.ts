import { lectures_svg, maps_svg, qbank_svg, rocket } from "@/images/main";
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