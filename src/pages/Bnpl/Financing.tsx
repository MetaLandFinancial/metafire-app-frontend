import React from "react";
import Image from "next/image";
import f1 from "../../../public/img/f1.svg";
import f2 from "../../../public/img/f2.svg";
import f3 from "../../../public/img/f3.svg";
const Financing = () => {
  return (
    <>
      {/* <div className="relative bg-[url('/img/bgGredient.png')] mix-blend-color-dodge py-[100px]"> */}
      <div className="relative py-[100px]">
        <div className="container">
          <div className="text-center">
            <h1 className="font-bold text-white text-xl md:text-[58px] leading-none">
              NFT Financing
            </h1>
            <p className="text-[#ffffffb3] text-lg md:text-2xl mt-6">
              Buy Now Pay Later
            </p>
          </div>
          <div className="mt-10 md:mt-12 lg:mt-14 xl:mt-20 grid justify-items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="financeCard flex flex-col items-center mb-16 md:mb-[18px]">
              <div className="mt-[-65px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[60px] w-[60px] md:h-[65px] md:w-[65px] lg:h-[80px] xl:h-[106px] lg:w-[80px] xl:w-[106px] rounded-full">
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
              <div className="mt-[-65px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[60px] w-[60px] md:h-[65px] md:w-[65px] lg:h-[80px] xl:h-[106px] lg:w-[80px] xl:w-[106px] rounded-full">
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
            <div className="financeCard flex flex-col items-center mb-16 md:mb-[18px]">
              <div className="mt-[-65px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[60px] w-[60px] md:h-[65px] md:w-[65px] lg:h-[80px] xl:h-[106px] lg:w-[80px] xl:w-[106px] rounded-full">
                <Image
                  src={f3}
                  alt="f3"
                  className="max-w-[45px] max-h-[45px]"
                />
              </div>
              <p className="text-white text-lg lg:text-2xl text-center mt-4">
                Dream Big NFT Expert Level Guru
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financing;
