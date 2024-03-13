import React from "react";
import Image from "next/image";
import down from "../../../public/img/down.svg";
import heroLine from "../../../public/img/heroLine.png";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="relative bg-[url('/img/herobgG.png')] bg-cover mix-blend-lighten ">
        <Image
          src={heroLine}
          alt="line images"
          className="absolute w-full h-full z-[-1]"
        />
        <div className="container">
          <div className="pt-[161px] md:pt-[238px] pb-8 md:pb-10 ">
            <div className="relative flex flex-col justify-center items-center ">
              <div className="text-center">
                <h1 className="main-title">
                  Buy Now <br className="block md:hidden" />
                  <span className="main-title-span ml-0 md:ml-3 xl:ml-6">
                    Pay Later
                  </span>
                </h1>
              </div>
              <div className="mb-10 md:mb-[83px] mt-5 lg:mt-7 xl:mt-9">
                <p className="text-center text-white font-bold text-lg md:text-2xl">
                  Finance the NFT of Your Dreams
                </p>
              </div>
              <div className="w-fit h-fit">
                <Link href="#collection">
                  <div className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-gradient-to-tr from-[#4776e633] to-[#8e54e933] border-2 border-[#4776E6] hover:bg-gradient-to-tr hover:from-[#3b82f6] hover:to-[#9333ea] hover:border-2 hover:border-[#9333ea]">
                    <span className="block h-full w-full max-w-6 max-h-6 mx-auto">
                      <Image
                        src={down}
                        alt="downArrow"
                        className="max-w-full h-full"
                      />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
