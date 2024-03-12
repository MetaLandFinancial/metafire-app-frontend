import React from "react";
import Image from "next/image";
import f1 from "../../../public/img/f1.svg";
import f2 from "../../../public/img/f2.svg";
import f3 from "../../../public/img/f3.svg";
import nftLine from "../../../public/img/nftLine.png";
const Financing = () => {
  return (
    <>
      <div className="relative mt-20 py-[100px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:mix-blend-color-dodge before:bg-[url('/img/nftLine.png')] before:z-[1] before:bg-cover before:bg-top before:bg-no-repeat border-finance">
        <div className="container">
          <div className="w-full relative z-10">
            <div className="text-center">
              <h1 className="font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-none">
                NFT Financing
              </h1>
              <p className="text-[#ffffffb3] text-lg md:text-xl xl:text-2xl mt-6">
                Buy Now Pay Later
              </p>
            </div>
            <div className="mt-16 md:mt-12 lg:mt-14 xl:mt-20 grid justify-items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              <div className="financeCard flex flex-col items-center mb-16 md:mb-[18px]">
                <div className="mt-[-70px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[75px] w-[75px] md:h-[65px] md:w-[65px] lg:h-[80px] lg:w-[80px] xl:h-[106px] xl:w-[106px] rounded-full">
                  <Image
                    src={f1}
                    alt="f1"
                    className="max-w-[45px] max-h-[45px]"
                  />
                </div>
                <p className="text-white text-lg lg:text-2xl text-center mt-4">
                  Pay for your NFT Monthly
                </p>
              </div>
              <div className="financeCard flex flex-col items-center mb-16 md:mb-[18px]">
                <div className="mt-[-70px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[75px] w-[75px] md:h-[65px] md:w-[65px] lg:h-[80px] lg:w-[80px] xl:h-[106px] xl:w-[106px] rounded-full">
                  <Image
                    src={f2}
                    alt="f2"
                    className="max-w-[45px] max-h-[45px]"
                  />
                </div>
                <p className="text-white text-lg lg:text-2xl text-center mt-4">
                  Afford More and Buy More Now
                </p>
              </div>
              <div className="financeCard flex flex-col items-center mb-0 md:mb-[18px]">
                <div className="mt-[-70px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[75px] w-[75px] lg:h-[80px] lg:w-[80px] xl:h-[106px] xl:w-[106px] rounded-full">
                  <Image
                    src={f3}
                    alt="f3"
                    className="max-w-[40px] lg:max-w-[45px] max-h-[40px] lg:max-h-[45px]"
                  />
                </div>
                <p className="text-white text-lg lg:text-2xl text-center mt-4">
                  Dream Big NFT Expert Level Guru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financing;
