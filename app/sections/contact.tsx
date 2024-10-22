import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

import { FAQs } from "@/data/main";

const Contact = () => {
  return (
    <section className="w-screen bg-white flex justify-center md:py-16">
      <div className="md:w-1/2 min-h-screen mx-auto flex flex-col text-center space-y-4">
        <h1 className="text-black text-5xl font-black">Join Our Team</h1>
        <p>
          Become a part of something bigger! Help students succeed and share
          your knowledge with a growing community.
        </p>
        <div className="w-5/6 mx-auto space-y-4">
          {FAQs.map((faq) => (
            <Accordion type="single" collapsible key={faq.id}>
              <AccordionItem value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* ------------Contact------------ */}
        <div className="space-y-4">
          <Textarea />

          {/* Information Note */}
          <div className="flex flex-row justify-evenly">
            <span className="w-1/2 text-start">
              <p className="text-sm text-gray-500">
                We will answer your questions via WhatsApp within 48 hours.
              </p>
            </span>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 text-black bg-primary rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Start Contributing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
