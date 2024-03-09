import React from "react";
import Hero from "./Hero";
import Financing from "./Financing";
import Works from "./Works";
import Faq from "./Faq";
// import Accordion from "./AccordionItem ";

const page = () => {
  return (
    <div>
      <Hero />
      <Financing />
      <Works />
      <Faq />
      {/* <Accordion /> */}
    </div>
  );
};

export default page;
