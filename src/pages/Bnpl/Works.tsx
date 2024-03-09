import React from "react";
import Image from "next/image";
import w1 from "../../../public/img/w1.png";
import w2 from "../../../public/img/w2.png";
import w3 from "../../../public/img/w3.png";
const Works = () => {
  return (
    <>
      <div className="relative py-12 md:py-16 lg:py-20 xl:py-[120px]">
        <div className="container">
          <div className="text-center">
            <h1 className="font-bold text-white text-xl md:text-[58px] leading-none">
              How it Works
            </h1>
            <p className="text-[#ffffffb3] text-lg md:text-2xl mt-6">
              NFT financing with smart contracts
            </p>
          </div>
          <div className="relative mt-10 md:mt-12 lg:mt-14 xl:mt-20">
            <div className="flex flex-col gap-6">
              <div className="workBanner">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:max-w-[60%] xl:max-w-[544px]">
                    <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                      Increase Buying Power
                    </h2>
                    <p className="text-white text-base font-normal mt-6">
                      We help you find and purchase the NFT of your choice
                      through our smart contract financing option.
                    </p>
                  </div>
                  <div className="w-full max-h-[170px] md:max-h-[270px] lg:max-h-[300px] xl:max-h-[348px] max-w-[170px] md:max-w-[270px] lg:max-w-[300px] xl:max-w-[348px] mt-16 md:mt-0">
                    <Image src={w1} alt="w1" />
                  </div>
                </div>
              </div>
              <div className="workBanner">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:max-w-[60%] xl:max-w-[544px]">
                    <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                      Smart Contracts
                    </h2>
                    <p className="text-white text-base font-normal mt-6">
                      We purchase your NFT for you and securely hold it until
                      you finish the payment.
                    </p>
                  </div>
                  <div className="w-full max-h-[170px] md:max-h-[270px] lg:max-h-[300px] xl:max-h-[348px] max-w-[170px] md:max-w-[270px] lg:max-w-[300px] xl:max-w-[348px] mt-16 md:mt-0">
                    <Image src={w2} alt="w2" />
                  </div>
                </div>
              </div>
              <div className="workBanner">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:max-w-[60%] xl:max-w-[544px]">
                    <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                      NFT Wallet Transfer
                    </h2>
                    <p className="text-white text-base font-normal mt-6">
                      The NFT you have purchased while using the smart contract
                      will move to your wallet once you have completed making
                      the payment.
                    </p>
                  </div>
                  <div className="w-full max-h-[170px] md:max-h-[270px] lg:max-h-[300px] xl:max-h-[348px] max-w-[170px] md:max-w-[270px] lg:max-w-[300px] xl:max-w-[348px] mt-16 md:mt-0">
                    <Image src={w3} alt="w3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
