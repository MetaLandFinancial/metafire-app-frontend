import React from "react";
import SliderItem from "./SliderItem";

import Image from "next/image";
const WhitelistedCollections = () => {
  return (
    <>
      <div
        id="collection"
        className="relative pt-[45px] pb-[220px] md:pt-14 md:pb-52 lg:pt-20 lg:pb-[250px] xl:pt-[105px] xl:pb-[270px]"
      >
        <div className="absolute w-full h-full -top-0 bottom-0 left-0 right-0 mix-blend-color-dodge">
          {/* <Image
            src={bgGredient}
            alt="bgGredient"
            className="w-full h-full max-w-full"
          /> */}
        </div>
        <div className="container">
          <div className="text-start md:text-center relative z-10">
            <h1 className="font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-none">
              Whitelisted NFT Collections
            </h1>
            {/* <p className="text-[#ffffffb3] text-lg md:text-xl xl:text-2xl mt-6 hidden md:block">
              Finance the NFT of Your Dreams
            </p> */}

          </div>
          <div className="relative z-10 mt-10 md:mt-12 lg:mt-14 xl:mt-20">
            <div className="slider-container relative">
              <SliderItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhitelistedCollections;
