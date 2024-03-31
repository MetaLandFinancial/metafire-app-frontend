import Image from "next/image";
import React from "react";
import eth from "../../../public/img/eth.svg";
import ForeClosedSlider from "./Components/SalePage/ForeClosedSlider";
const Sale = () => {
  return (
    <>
      <div className="relative pt-[44px] pb-[26px] md:pt-14 md:pb-[150px] lg:pt-20 lg:pb-[220px] xl:pt-[101px] xl:pb-[165px] bg-[url('/img/assetbg.png')] bg-no-repeat bg-cover border-y-[1px] md:border-y-[4px] border-[#4776E6]">
        <div className="container">
          <div className="text-start md:text-center">
            <h1 className="max-md:pb-[6px] font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-none">
              Asset Sale
            </h1>
            <p className="text-[#ffffffb3] text-lg md:text-xl xl:text-2xl mt-6 hidden md:block">
              Liquidate the NFT used as Collateral
            </p>
          </div>
          <div className="mt-6 md:mt-14 lg:mt-16 xl:my-20">
            {/* card */}
            <ForeClosedSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
