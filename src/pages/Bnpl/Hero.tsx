import React from "react";
import Image from "next/image";
import down from "../../../public/img/down.svg";
import elipse from "../../../public/img/elipse.svg";
const Hero = () => {
  return (
    <>
      {/* <div className="relative bg-[url('/img/heroLine.png')] bg-no-repeat mix-blend-lighten after:w-[100%] after:min-w-full after:absolute after:content-[''] after:bg-[url('/img/herobgG.png')] after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-[-1]"> */}
      <div className="relative ">
        <div className="container">
          <div className="pt-[99px] md:pt-[136px] pb-8 md:pb-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-center">
                <span className="main-title-1">Buy Now</span>
                <br className="block sm:hidden" />
                <span className="main-title-2 ml-0 sm:ml-2 md:ml-4 xl:ml-5 xxl:ml-7">
                  Pay Later
                </span>
              </h1>
              <div className="mb-10 md:mb-[83px]">
                <p className="text-white font-bold text-lg md:text-2xl mt-5 md:mt-9">
                  Finance the NFT of Your Dreams
                </p>
              </div>
              <div className="w-fit h-fit">
                <div className="max-w-[52px] max-h-[52px] relative">
                  <Image src={elipse} alt="elipse" className="" />
                  <span className="max-w-6 h-fit z-10 absolute top-1 left-1">
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
