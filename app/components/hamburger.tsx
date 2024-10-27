"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navLinks } from "@/data/main";
import Image from "next/image";
import { nav_logo, title } from "@/images/main";
import Dropdown from "./dropdown";

const Hamburger = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <svg
          role="button"
          aria-label="Open Menu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white hover:text-primary cursor-pointer lg:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </DialogTrigger>

      {/* Dialog for mobile menu */}

      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" flex mx-auto">
            <Image src={nav_logo} alt="logo" height={70} />
            <Image
              className="my-6"
              src={title}
              alt="img"
              height={120}
              width={120}
            />
          </DialogTitle>
          {/* <DialogDescription><Image src={title} alt="img" height={19} /></DialogDescription> */}
        </DialogHeader>
        <ul className="flex flex-col p-2">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="py-3 pl-6 hover:bg-slate-500/5 rounded-2xl"
            >
              <a
                // href={link.url}
                className="text-white hover:text-[#06d6a0] transition-colors duration-300 ease-in-out"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default Hamburger;
