import React from "react";
import Image from "next/image";
import financeData, { FinanceCard } from "@/components/constant/financeData";
const Financing = () => {
  return (
    <>
      <div className="relative mt-24 md:mt-20 py-20 xl:py-[100px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:mix-blend-color-dodge before:bg-[url('/img/nftLine.png')] before:z-[1] before:bg-cover before:bg-top before:bg-no-repeat border-y-2 border-[#8E54E9]">
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
              {financeData.map((card: FinanceCard, index: number) => (
                <div
                  key={index}
                  className="financeCard flex flex-col items-center mb-16 md:mb-[18px] max-md:last:mb-0"
                >
                  <div
                    className={`mt-[-70px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[75px] w-[75px] md:h-[65px] md:w-[65px] lg:h-[80px] lg:w-[80px] xl:h-[106px] xl:w-[106px] rounded-full`}
                  >
                    <Image
                      src={card.imageSrc}
                      alt={card.altText}
                      className="max-w-[45px] max-h-[45px]"
                    />
                  </div>
                  <p className="text-white text-lg lg:text-2xl text-center mt-4">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financing;
