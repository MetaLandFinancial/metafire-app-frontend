import React from "react";
import "./deposit.css";
import DHero from "@/pages/deposit/DHero";
import DFinance from "./DFinance";
import DTabel from "./DTabel";
import DForm from "./DForm";
const Index = () => {
  return (
    <>
      <div className="bg-[url('/img/mainbg.png')] z-[1] relative bg-no-repeat bg-cover">
        <DHero />
        <DFinance />
        <DForm />
        <DTabel />
      </div>
    </>
  );
};

export default Index;
