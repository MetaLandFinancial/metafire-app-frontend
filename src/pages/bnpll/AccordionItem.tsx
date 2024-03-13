"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MetaFireItem,
  metaFireData,
} from "@/components/constant/accordionData";

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
  return (
    <div className="mt-4">
      <div
        className="faqbg transition duration-300 cursor-pointer"
        onClick={onToggle}
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
          <p className="text-white text-lg lg:text-xl font-medium">{title}</p>
        </div>
        <div
          className={`transition-max-height duration-500 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="text-white text-base mt-4 px-1">{content}</div>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {metaFireData.map((item: MetaFireItem, index: number) => (
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
