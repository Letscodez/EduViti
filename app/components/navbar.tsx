import Image from "next/image";
import React from "react";
import Btn from "@/app/components/btn";
import {navLinks} from "@/data/main";
import { nav_logo } from "@/images/main";

interface NavbarProps {
  // Define any props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className=" bg-white/20 backdrop-blur-sm border-[#8bc2b348] ml-[1%] mr-[1%] border w-[98%] h-16 flex items-center justify-between rounded-xl fixed top-3 z-10">
      <Image src={nav_logo} alt="Logo" height={60} width={60} className="ml-4" />
      <ul className="sm:flex space-x-4 mx-auto hidden">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              className="text-white/90 hover:text-[#06d6a0] transition-colors duration-300 ease-in-out"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Btn className="mr-4" />
    </nav>
  );
};

export default Navbar;
