"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FAQs } from "@/data/main";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email\Phone no."
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea  name="message" value={formData.message} onChange={handleChange} required />
          <div className="flex flex-row justify-evenly">
            <span className="w-1/2 text-start">
              <p className="text-sm text-gray-500">
                We will answer your questions via Email/Discord/Whatsapp within
                48 hours.
              </p>
            </span>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 text-black bg-primary rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Start Contributing
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
