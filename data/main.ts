import { pen, reload, rocket } from "@/images/main"; // Import your images

const navLinks = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
];

interface cardDataType {
  id: number;
  image: any; // Using StaticImageData for Next.js Image optimization
  title: string;
  description: string;
}

const cardData: cardDataType[] = [
  {
    id: 1,
    image: rocket, // Use the imported image
    title: "Explore Interactive Modules",
    description:
      "Engage with hands-on learning experiences tailored to your curriculum.",
  },
  {
    id: 2,
    image: pen, // Use the imported image
    title: "Instant PDF Access",
    description:
      "Downloadable materials, including NCERT textbooks and exam preparation resources.",
  },
  {
    id: 3,
    image: reload, // Use the imported image
    title: "Revisions made simple",
    description:
      "Concise, one-page notes summarize key concepts for quick exam preparation.",
  },
];

export { navLinks, cardData };
