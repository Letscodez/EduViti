import Image from "next/image";
import React from "react";
import Btn from "@/app/components/btn";
import { navLinks } from "@/data/main";
import { nav_logo } from "@/images/main";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-100/30 backdrop-brightness-50 backdrop-blur-3xl left-2 right-2 border border-primary/20 h-16 flex items-center justify-between rounded-xl fixed top-3 z-10 filter">
      {/* Logo */}
      <Image
        src={nav_logo}
        alt="Logo"
        height={60}
        width={60}
        className="ml-4"
        priority
      />

      {/* Navigation Links */}
      <div className="relative flex items-center mx-2 md:mx-0">
        <ul className="lg:flex space-x-6 md:space-x-12 text-lg mx-auto hidden" key="uniquw">
          {navLinks.map((link) => (
                <Dropdown link={link}/>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3 mr-2">
        <Btn className="sm:block hidden" />
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
