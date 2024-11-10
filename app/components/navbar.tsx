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
  const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={hidden ? "hidden" : "visible"}
      whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
      variants={{
        hidden: {
          opacity: 0,
          y: -100,
          transition: { duration: 0.6, ease: "easeInOut" }, // Custom duration for hidden
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeInOut" }, // Custom duration for visible
        },
      }}
      className="bg-teal-100/30 backdrop-brightness-50 backdrop-blur-3xl left-2 right-2 lg:mx-12 mx-4 border border-primary/20 h-16 flex items-center justify-between rounded-xl fixed top-3 z-[1000] filter"
    >
      {/* Logo */}
      <motion.a href="/">
        <Image
          src={nav_logo}
          alt="Logo"
          height={60}
          width={60}
          className="ml-4"
          priority
        />
      </motion.a>

      {/* Navigation Links */}
      <div className="relative flex items-center mx-2 md:mx-0">
        <ul
          className="lg:flex space-x-6 cursor-pointer md:space-x-12 text-lg mx-auto hidden"
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
          <div className="hidden sm:block">
            <SearchBar />
          </div>
        )}
        <Hamburger />
      </div>
    </motion.nav>
  );
};

export default Navbar;
