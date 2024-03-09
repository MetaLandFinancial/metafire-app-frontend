"use client";
import React, { useState } from "react";
import Image from "next/image";
import faqmain from "../../../public/img/faqmain.png";
import plus from "../../../public/img/plus.svg";
import accordionData from "@/components/constant/accordionData.json";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  const transitionDuration = isOpen ? "0.7s" : "0.3s";
  return (
    <div className="mt-4">
      <div
        className="faqbg transition cursor-pointer"
        onClick={onToggle}
        style={{
          transitionProperty: "background-color",
          transitionDuration: "0.3s",
        }}
      >
        <div className="flex items-center">
          <Image
            src="/img/plus.svg"
            alt="plus"
            width={40}
            height={40}
            className={`mr-4 max-w-10 transform ${
              isOpen
                ? "rotate-45"
                : "rotate-0 transition-transform duration-700"
            }`}
          />
          <p className="text-white text-xl font-medium">{title}</p>
        </div>
      </div>
      <div
        className={`mt-4 transition-max-height duration-700 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="faqbg text-white text-base">{content}</div>
      </div>
    </div>
  );
};

// export default AccordionItem;

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
