"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Btn from "@/app/components/btn";
import { navLinks } from "@/data/navlinks";
import { nav_logo } from "@/images/main";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
import SearchBar from "./searchBar";
import { motion } from "framer-motion";

// Define props type with homeBtn
type NavbarProps = {
  homeBtn: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ homeBtn }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Debounced scroll handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={hidden ? "hidden" : "visible"}
      variants={{
        hidden: { opacity: 0, y: -100, transition: { duration: 0.5, ease: "easeInOut" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeInOut" } },
      }}
      className="bg-teal-100/30 backdrop-brightness-50 backdrop-blur-3xl left-2 right-2 lg:mx-12 mx-4 border border-primary/20 h-16 flex items-center justify-between rounded-xl fixed top-3 z-[1000] filter"
    >
      {/* Logo */}
      <a href="/">
        <Image src={nav_logo} alt="Logo" height={60} width={60} className="ml-4" priority />
      </a>

      {/* Navigation Links */}
      <div className="relative flex items-center mx-2 md:mx-0">
        <ul className="lg:flex space-x-6 cursor-pointer md:space-x-12 text-lg mx-auto hidden" key="unique">
          {navLinks.map((link) => (
            <Dropdown key={link.label} link={link} />
          ))}
        </ul>
      </div>

      <div className="flex flex-row items-center justify-center space-x-3 mr-6">
        {homeBtn && <Btn className="sm:block hidden" displayText="Home" url="/" />}
        {!homeBtn && <div className="hidden sm:block"><SearchBar /></div>}
        <Hamburger />
      </div>
    </motion.nav>
  );
};

export default Navbar;
