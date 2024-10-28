import Image from "next/image";
import React from "react";
import { navLinks } from "@/data/main";
import { nav_logo } from "@/images/main";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
const Navbar2: React.FC = () => {
  return (
    <nav className="bg-teal-100/30 backdrop-brightness-50 backdrop-blur-3xl left-10 right-10 border border-primary/20 h-16 flex items-center justify-between rounded-xl fixed top-3 z-10 filter">
      {/* Logo */}
      <a href="/">
      <Image
        src={nav_logo}
        alt="Logo"
        height={60}
        width={60}
        className="ml-4"
        priority
        
      />
      </a>

      {/* Navigation Links */}
      <div className="relative flex items-center mx-2 md:mx-0">
        <ul className="lg:flex space-x-6 md:space-x-12 text-lg mx-auto hidden" key="unique">
          {navLinks.map((link) => (
                <Dropdown key={link.label} link={link}/>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3 mr-2">
        <a href="/" className="text-2xl mr-6 hover:underline hover:text-[#06D6A0]">Home</a>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar2;
