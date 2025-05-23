import React from "react";
import Image from "next/image";
import down from "../../../public/img/down.svg";
import heroLine from "../../../public/img/heroLine.png";
import Link from "next/link";
const DHero = () => {
  return (
    <>
      <div className="relative bg-[url('/img/herobgG.png')] bg-cover mix-blend-lighten">
        <Image
          src={heroLine}
          alt="line images"
          className="absolute w-full h-full z-[-1]"
        />
        <div className="container">
          <div className="pt-[60px] md:pt-[80px] pb-8 md:pb-10 ">
            <div className="relative flex flex-col justify-center items-center ">
              <div className="text-center">
                <div className="main_title_deposit">
                  <h1 className="pr-[2px] md:pr-[3px]">Ether Deposits</h1>
                </div>
              </div>
              <div className="mb-10 md:mb-[83px] mt-5 lg:mt-7 xl:mt-9">
                <p className="text-center text-white font-bold text-lg md:text-2xl">
                  Earn Interest by making your crypto work as hard as you do
                </p>
              </div>
              <div className="w-fit h-fit">
                <Link href="#DFinance">
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
export default DHero;
