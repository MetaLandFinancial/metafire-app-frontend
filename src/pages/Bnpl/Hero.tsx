import React from "react";
import Image from "next/image";
import down from "../../../public/img/down.svg";
import elipse from "../../../public/img/elipse.svg";
import heroLine from "../../../public/img/heroLine.png";
import herotext from "../../../public/img/herotext.png";
import Link from "next/link";
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
              <div className="text-center max-w-[832px]">
                <Image
                  src={herotext}
                  alt="herotext"
                  className="w-full h-full"
                />
              </div>
              <div className="mb-10 md:mb-[83px]">
                <p className="text-white font-bold text-lg md:text-2xl">
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
