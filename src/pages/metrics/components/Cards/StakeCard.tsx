import React from "react";
import Image from "next/image";
import Link from "next/link";
import metricsC1 from "@/../../public/img/metricsC1.svg";
import metricsC2 from "@/../../public/img/metricsC2.svg";
import metricsC3 from "@/../../public/img/metricsC3.svg";
import metricsC4 from "@/../../public/img/metricsC4.svg";
import uparrow from "@/../../public/img/uparrow.svg";
import arrorU from "@/../../public/img/arrorU.svg";
const fakeData = [
  {
    title: "Stake MetaFire",
    totalStaked: "5,827 ETH (~$17.6M)",
    stakingAPR: "null",
    walletBalance: "0",
    mimg: metricsC1,
    mtitle: "MetaFire",
  },
  {
    title: "Stake ETH",
    totalStaked: "5,827 ETH (~$17.6M)",
    stakingAPR: "null",
    walletBalance: "0",
    mimg: metricsC2,
    mtitle: "Ethereum",
  },
  {
    title: "Stake MATIC",
    totalStaked: "5,827 ETH (~$17.6M)",
    stakingAPR: "null",
    walletBalance: "0",
    mimg: metricsC3,
    mtitle: "MATIC",
  },
  {
    title: "Stake OP",
    totalStaked: "5,827 ETH (~$17.6M)",
    stakingAPR: "null",
    walletBalance: "0",
    mimg: metricsC4,
    mtitle: "Optimism",
  },
];
const StakeCard = () => {
  return (
    <div className="relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 mt-6 remove_btn">
          {fakeData.map((data, index) => (
            <div
              key={index}
              className="p-6 flex gap-5 flex-col common_shadow_bg"
            >
              <div className="flex flex-col md:flex-row md:justify-between last:hidden">
                <div className="flex flex-col">
                  <h2 className="flex items-center gap-2 text-white text-2xl font-bold leading-normal mb-1">
                    {data.title}
                    <span>
                      <Link href="#">
                        <Image
                          src={uparrow}
                          alt="uparrow"
                          className="h-5 w-5 hover:opacity-[0.7]
                      "
                        />
                      </Link>
                    </span>
                  </h2>
                  <p className="text-sm font-normal leading-[150%] tracking-[0.15px] text-white/70">
                    Total staked: 
                    <span className="text-sm font-normal leading-[150%] tracking-[0.15px] text-white/70 ml-1">
                      {data.totalStaked}
                    </span>
                  </p>
                </div>
                <div className="btn_metrics">
                  <button className="uppercase flex items-center gap-1 text-xs font-semibold tracking-[0.48px] border border-[#4776E6] rounded-[7px] py-2 px-4 lg:px-2 xl:px-4 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text gradient-text hover:opacity-[0.7] mt-4 md:mt-0 max-lg:w-full max-lg:justify-center ">
                    GET METAFIRE TOKEN
                    <span>
                      <Image src={arrorU} alt="arrowU" className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="without_bg p-4">
                <div className="flex max-md:flex-col max-md:gap-3 lg:gap-y-4 lg:flex-wrap xl:space-y-0 justify-between">
                  <h6 className="text-white text-base leading-[150%] flex items-center lg:w-1/2 xl:w-fit max-sm:mb-2">
                    <Image
                      src={data.mimg}
                      alt="metrics"
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    {data.mtitle}
                  </h6>
                  <div className="flex flex-row max-md:items-center max-md:justify-between md:flex-col lg:w-1/2 xl:w-fit">
                    <p className="text-white/70 text-sm font-medium leading-[114%] tracking-[0.1px] md:mb-1">
                      Staking APR
                    </p>
                    <span className="bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text gradient-text text-base font-semibold leading-[150%] tracking-[0.15px]">
                      {data.stakingAPR}
                    </span>
                  </div>
                  <div className="flex flex-row max-md:items-center max-md:justify-between md:flex-col lg:w-1/2 xl:w-fit">
                    <p className="text-white/70 text-sm font-medium leading-[114%] tracking-[0.1px] md:mb-1">
                      Wallet Balance
                    </p>
                    <span className="text-white text-base font-semibold leading-[150%] tracking-[0.15px]">
                      {data.walletBalance}
                    </span>
                  </div>
                  <div className="max-md:w-full lg:w-1/2 xl:w-fit">
                    <button className="max-md:w-full py-2 px-7 text-white rounded-[7px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:opacity-[0.7]">
                      Developing
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center gap-6 p-4 border border-[#4776E6] rounded-xl">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <h4 className="text-white/70 text-base font-semibold leading-[150%] tracking-[0.15px]">
                      Staked MetaFire
                    </h4>
                    <span className="text-2xl font-medium leading-[125%] text-white">
                      0
                    </span>
                    <p className="text-xs font-medium leading-[133%] text-white/40">
                      ~$0
                    </p>
                  </div>
                  <button className="w-full py-3 px-6 rounded-[7px] parent_bg flex items-center justify-center">
                    <span className="Text_gradient_bg text-sm font-semibold">
                      Unstake
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center md:items-center gap-6 p-4 border border-[#4776E6] rounded-xl">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <h4 className="text-white/70 text-base font-semibold leading-[150%] tracking-[0.15px]">
                      Claimable MetaFire
                    </h4>
                    <span className="text-2xl font-medium leading-[125%] text-white">
                      0
                    </span>
                    <p className="text-xs font-medium leading-[133%] text-white/40">
                      ~$0
                    </p>
                  </div>
                  <div className="flex w-full gap-2">
                    <button className="px-2 xl:px-6 py-3 flex justify-center items-center rounded-[7px] w-full parent_bg">
                      <span className="Text_gradient_bg text-sm font-semibold">
                        Claim
                      </span>
                    </button>
                    <button className="px-2 xl:px-6 py-3 flex justify-center items-center rounded-[7px] w-full parent_bg">
                      <span className="Text_gradient_bg text-sm font-semibold">
                        Restake
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakeCard;
