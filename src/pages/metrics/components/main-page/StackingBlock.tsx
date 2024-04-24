import React from "react";
import Image from "next/image";
import metricsS1 from "@/../../public/img/metricsS1.svg";
import metricsS2 from "@/../../public/img/metricsS2.svg";
import metricsS3 from "@/../../public/img/metricsS3.svg";
import metricsS4 from "@/../../public/img/metricsS4.svg";
import info from "@/../../public/img/info.svg";
import dollar from "@/../../public/img/dollar.svg";
import Link from "next/link";
const StackingBlock = () => {
  const logos = [
    { l: metricsS1 },
    { l: metricsS2 },
    { l: metricsS3 },
    { l: metricsS4 },
  ];
  return (
    <div className="relative">
      <div className="container">
        <div className={"p-6 md:p-8 lg:p-10 xl:p-12 mb-6 common_shadow_bg"}>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full md:w-1/2 max-md:mb-7">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-[9px]">
                  <p className="text-white/70 text-xs md:text-sm font-medium leading-[150%]">
                    Available on
                  </p>
                  <div className="flex flex-row gap-[6px]">
                    {logos.map((data, index) => (
                      <Image
                        key={index}
                        src={data.l}
                        alt="metrics"
                        className="h-6 w-6 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <h1 className="text-white text-[40px] md:text-5xl lg:text-[52px] xl:text-[58px] font-bold leading-normal mb-4 md:mb-[18px]">
                  Staking
                </h1>
                <p className="text-white/70 text-sm md:text-base font-normal leading-[150%] tracking-[0.15px] min-md:max-w-[550px]">
                  Stake to MetaFire and earn Safety Incentives! Stake your
                  assets holdings to contribute to protocol security and unlock
                  the rewards. Network supported: Ethereum, Polygon, Optimism,
                  or Arbitrum
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white text-sm md:text-base font-normal leading-[150%] tracking-[0.15px] underline block mt-7 w-fit"
                  >
                    Learn more about risks involved
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="sm:w-fit sm:ml-auto md:mr-0 lg:mr-20 xl:mr-[100px]">
                <div className="flex flex-col gap-2 md:gap-5">
                  <div>
                    <p className="flex  gap-2 text-white/70 text-sm md:text-base font-normal leading-[150%] tracking-[0.15px]">
                      Total staked assets
                      <Image
                        src={info}
                        alt="info"
                        className="h-[14px] w-[14px] my-auto"
                      />
                    </p>
                    <h3 className="flex items-center text-white text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] font-semibold leading-[130%]">
                      <span className="text-[#A5A8B6] text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] font-semibold leading-[130%]">
                        <Image
                          src={dollar}
                          alt="info"
                          className="w-[24px] md:w-[28px] lg:w-[30px] xl:w-[32px] my-auto text-[#A5A8B6]"
                        />
                      </span>
                      365.73M
                    </h3>
                  </div>
                  <div>
                    <p className=" text-white/70 text-sm md:text-base font-normal leading-[150%] tracking-[0.15px] ">
                      Total staked assets
                    </p>
                    <h3 className="flex items-center text-white text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] font-semibold leading-[130%]">
                      820.00
                      <span className="text-white/70  text-xl lg:text-2xl font-medium leading-[130%] ml-2 ">
                        MetaFire
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingBlock;
