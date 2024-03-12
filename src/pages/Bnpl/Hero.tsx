import React from "react";
import Image from "next/image";
import down from "../../../public/img/down.svg";
import elipse from "../../../public/img/elipse.svg";
import heroLine from "../../../public/img/heroLine.png";
const Hero = () => {
  return (
    <>
      <div className="relative bg-[url('/img/herobgG.png')] bg-cover mix-blend-lighten">
        <Image
          src={heroLine}
          alt="line images"
          className="absolute w-full h-full"
        />
        <div className="container">
          <div className="pt-[99px] md:pt-[136px] pb-8 md:pb-10">
            <div className="relative flex flex-col justify-center items-center ">
              <div className="text-center">
                <span className="main-title-1">Buy Now</span>
                <br className="block sm:hidden" />
                <span className="main-title-2 ml-0 sm:ml-2 md:ml-4 xl:ml-5 xxl:ml-7">
                  Pay Later
                </span>
              </div>
              <div className="mb-10 md:mb-[83px]">
                <p className="text-white font-bold text-lg md:text-2xl mt-5 md:mt-9">
                  Finance the NFT of Your Dreams
                </p>
              </div>
              <div className="w-fit h-fit">
                <div className="w-[52px] h-[52px] relative bg-[url('/img/elipse.svg')] flex items-center cursor-pointer">
                  <span className="block h-full w-full max-w-6 max-h-6 mx-auto">
                    <Image src={down} alt="downArrow" className="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
