"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/mob-nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Ensure these components are exported correctly
import { navLinks } from "@/data/navlinks"; // Your navigation links data
import Image from "next/image";
import { nav_logo } from "@/images/main"; // Make sure nav_logo is imported correctly

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
          className="w-8 h-8 text-white hover:text-primary cursor-pointer xl:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex h-[70px] sm:h-[90px] text-center items-center ">
            <Image
              src={nav_logo}
              alt="logo"
              height={70}
              className="ml-2 sm:w-[90px] "
            />
            <p className="text-gray-200 text-xl ml-2">
              Choose a link to navigate.
            </p>
          </DialogTitle>
        </DialogHeader>

        <Accordion type="multiple" className="flex flex-col h-full space-y-4">
          {navLinks.map((link) => (
            <AccordionItem key={link.label} value={link.label}>
              <AccordionTrigger>{link.label}</AccordionTrigger>
              <AccordionContent>
                {link.sublinks.map((sublink) => (
                  <div
                    className="my-4 text-grey-400 hover:text-primary"
                    key={sublink.label}
                  >
                    <a href={sublink.path}>⁍ {sublink.label}</a>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default Hamburger;
