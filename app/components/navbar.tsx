import Image from "next/image";
import Btn from "@/app/components/btn";
import { navLinks } from "@/data/navlinks";
import { nav_logo } from "@/images/main";
import { title } from "@/images/main";
import Hamburger from "./hamburger";
import Dropdown from "./dropdown";
import SearchBar from "./searchBar";

// Define props type with homeBtn
type NavbarProps = {
  homeBtn: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ homeBtn }) => {
  return (
    <nav className="bg-teal-100/30 back-in-down backdrop-brightness-50 backdrop-blur-3xl left-2 right-2 border border-primary/20 h-16 flex items-center justify-between rounded-xl fixed top-3 z-50 filter">
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
        {homeBtn ? (
          ""
        ) : (
          <div className="hidden sm:block">
            <SearchBar />
          </div>
        )}
        <Hamburger />
      </div>
    </nav>
  );
};
export default Navbar;
