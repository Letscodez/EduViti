import Image from "next/image";
import React from "react";
import Btn from "@/app/components/btn";
import { navLinks } from "@/data/main";
import { nav_logo } from "@/images/main";
import Hamburger from "./hamburger";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-100/30 backdrop-blur-lg left-2 right-2 border border-primary/20 h-16 flex items-center justify-between rounded-xl fixed top-3 z-10">
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
        <ul className="lg:flex space-x-6 md:space-x-12 text-lg mx-auto hidden">
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

      </div>
      <div className="flex flex-row items-center justify-center space-x-3 mr-2">
        <Btn className="sm:block hidden" />
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
