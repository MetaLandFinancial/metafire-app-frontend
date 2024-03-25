import React from "react";
import "./financing.css";
import HeroF from "@/pages/financing/HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";

const index = () => {
  return (
    <div className="relative">
      <HeroF />
      <Pagenv />
      <FinanceMain />
    </div>
  );
};

export default index;
