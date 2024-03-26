import React from "react";
import Image from "next/image";
import DfinanceData, {
  DFinanceCard,
} from "@/components/constant/DipositPageData/Dfinance";
const DFinance = () => {
  return (
    <>
      <div
        id="DFinance"
        className="relative pt-20 pb-12 md:pb-5 xl:pt-[100px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0  before:bg-[url('/img/lineM.png')] md:before:bg-[url('/img/line.png')] before:mix-blend-color-dodge before:bg-cover before:bg-top before:bg-no-repeat border-y-2 border-[#4776E6]"
      >
        <div className="container">
          <div className="w-full relative z-10">
            <div className="text-center">
              {/* <h1 className="font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-none">
                NFT Financing
              </h1>
              <p className="text-[#ffffffb3] font-medium text-lg md:text-xl xl:text-2xl mt-6">
                Buy Now Pay Later
              </p> */}
            </div>
            <div className="mt-24 md:mt-20 lg:mt-24 xl:mt-32 grid gap-6 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {DfinanceData.map((card: DFinanceCard, index: number) => (
                <>
                  <div
                    key={index}
                    className="Card_BG mb-14 md:mb-16 lg:mb-20 xl:mb-24"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`mt-[-70px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-85px] flex items-center justify-center border border-[#bbcfff66] bg-gradient-to-r from-blue-500 to-purple-600 h-[75px] md:h-[65px] lg:h-[80px] xl:h-[106px] w-[75px] md:w-[65px] lg:w-[80px] xl:w-[106px] rounded-full`}
                      >
                        <Image
                          src={card.imageSrc}
                          alt={card.altText}
                          className="max-w-[45px]"
                        />
                      </div>
                      <p className="text-white text-lg leading-normal lg:text-2xl lg:leading-[38px] text-center mt-4 font-bold">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DFinance;
