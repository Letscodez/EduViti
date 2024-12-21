"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Btn from "@/app/components/btn";
import { navLinks } from "@/data/navlinks";
import { nav_logo } from "@/images/main";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
import SearchBar from "./searchBar";
import Link from "next/link";

// Define props type with homeBtn
type NavbarProps = {
  homeBtn: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ homeBtn }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        // User is scrolling down
        setHidden(true);
      } else {
        // User is scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-teal-100/30 backdrop-brightness-50 backdrop-blur-3xl left-2 right-2 lg:mx-12 mx-4 border border-primary/20 py-1 flex items-center justify-between rounded-xl fixed top-3 z-[999] filter transition-transform duration-300 ${
        hidden ? "-translate-y-96" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={nav_logo}
          alt="Logo"
          height={60}
          width={60}
          className="ml-4 focus:outline-none hover:scale-110 duration-200"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="relative flex items-center mx-2 md:mx-0">
        <ul
          className="xl:flex space-x-6  md:space-x-12 text-lg 2xl:text-xl  mx-auto hidden"
          key="unique"
        >
          {navLinks.map((link) => (
            <Dropdown key={link.label} link={link} />
          ))}
        </ul>
      </div>

      <div className="flex flex-row items-center justify-center space-x-3 mr-6">
        {homeBtn && (
          <Btn className="sm:block hidden" displayText="Home" url="/" />
        )}
        {!homeBtn && (
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        )}
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
