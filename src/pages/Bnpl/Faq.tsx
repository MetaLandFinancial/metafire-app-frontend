"use client";
import React, { useState } from "react";
import Image from "next/image";
import faqmain from "../../../public/img/faqmain.png";
import faqBG from "../../../public/img/faqBG.png";
import Accordion from "./AccordionItem ";
const Faq = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 mix-blend-color-dodge blur-3xl">
          <Image src={faqBG} alt="faqBG" className="w-full h-full max-w-full" />
        </div>
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
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:max-w-[260px] lg:max-w-[40%] xl:max-w-[418px] lg:max-h-[350px] xl:max-h-[418px]">
                <Image
                  src={faqmain}
                  alt="faqmain"
                  className="max-w-full h-full block mx-auto"
                />
              </div>
              <div className="w-full md:max-w-[55%] lg:max-w-[55%] xl:max-w-[700px]">
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
