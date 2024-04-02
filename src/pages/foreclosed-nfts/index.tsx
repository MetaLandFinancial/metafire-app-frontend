import React from "react";
import "./foreclosed.css";
import FCHero from "@/pages/foreclosed-nfts/FCHero";
import Sale from "@/pages/foreclosed-nfts/Sale";
import Loaned from "@/pages/foreclosed-nfts/Loaned";
const index = () => {
  return (
    <>
      <div className="bg-[#1C1424] ">
        <FCHero />
        <Sale />
        <Loaned />
      </div>
    </>
  );
};

export default index;
