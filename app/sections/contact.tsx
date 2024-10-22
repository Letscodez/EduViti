import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <section className="w-screen bg-white flex justify-center md:py-16">
      <div className="md:w-1/2 h-screen mx-auto flex flex-col text-center">
        <h1 className="text-black text-5xl font-black">Join Our Team</h1>
        <p>
          Become a part of something bigger! Help students succeed and share
          your knowledge with a growing community.
        </p>
        <div className="w-5/6 mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Contact;
