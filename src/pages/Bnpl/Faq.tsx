"use client";
import React, { useState } from "react";
import Image from "next/image";
import faqmain from "../../../public/img/faqmain.png";
import Accordion from "./AccordionItem ";
const Faq = () => {
  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="text-center">
            <h1 className="font-bold text-white text-xl md:text-[58px] leading-none">
              FAQ’s
            </h1>
            <p className="text-[#ffffffb3] text-lg md:text-2xl mt-6">
              Frequently Asked Questions
            </p>
          </div>
          <div className="relative mt-10 md:mt-12 lg:mt-14 xl:mt-[100px]">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:max-w-[40%] xl:max-w-[418px] lg:max-h-[350px] xl:max-h-[418px]">
                <Image src={faqmain} alt="faqmain" />
              </div>
              <div className="w-full lg:max-w-[50%] xl:max-w-[700px]">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
