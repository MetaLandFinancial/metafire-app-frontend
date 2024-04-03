import React from "react";
import "./financing.css";
import HeroF from "@/pages/nft-equity/HeroF";
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
