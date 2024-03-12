import React from "react";
import Hero from "./Hero";
import Financing from "./Financing";
import Works from "./Works";
import Faq from "./Faq";
import Collaction from "./Collaction";

const page = () => {
  return (
    <div>
      <Hero />
      <Collaction />
      <div className="relative before:content-[''] before:bg-[url('/img/financeWork.png')] before:absolute before:z-0 before:top-0 before:bottom-0 before:left-0 before:right-0 full w-full">
        <Financing />
        <Works />
      </div>
      <Faq />
    </div>
  );
};

export default page;
