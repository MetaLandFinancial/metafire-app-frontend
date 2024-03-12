"use client";
import React, { useState } from "react";
import Image from "next/image";
import faqmain from "../../../public/img/faqmain.png";
import Accordion from "./AccordionItem";
const Faq = () => {
  return (
    <>
      <div className="relative pt-10 md:pt-0 pb-[120px] before:mix-blend-color-dodge before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('/img/blockchainImg.png')] before:h-full before:w-full before:bg-no-repeat before:bg-center">
        <div className="container">
          <div className="text-center relative">
            <h1 className="font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-none">
              FAQ’s
            </h1>
            <p className="text-[#ffffffb3] text-lg md:text-xl xl:text-2xl mt-6">
              Frequently Asked Questions
            </p>
          </div>
          <div className="relative mt-10 md:mt-12 lg:mt-14 xl:mt-[100px] z-20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full max-w-[200px] md:max-w-[260px] lg:max-w-[40%] xl:max-w-[418px] lg:max-h-[350px] xl:max-h-[418px] mb-11 md:mb-0">
                <Image
                  src={faqmain}
                  alt="faqmain"
                  className="max-w-full h-full block mx-auto my-auto"
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
