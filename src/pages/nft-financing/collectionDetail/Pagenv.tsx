import React from "react";
import Image from "next/image";
import ring from "../../../../public/img/ring.svg";
import eth from "../../../../public/img/eth.svg";
import sky from "../../../../public/img/sky.svg";
import x from "../../../../public/img/x.svg";
import yt from "../../../../public/img/yt.svg";
import discord from "../../../../public/img/discord.svg";
import world from "../../../../public/img/world.svg";
import Link from "next/link";

const Pagenv = ({nftStatsData, collectionName}:{nftStatsData:any, collectionName: string}) => {
  return (
    <div className="relative py-10 border-b border-[#4777e63e]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-md:w-full left mb-10 md:mb-0 flex flex-row max-md:justify-between md:flex-col">
            <h1 className="text-lg md:text-2xl xl:text-[27px] text-white font-bold md:mb-6">
              {collectionName}
            </h1>
            <div className="flex flex-row">
              <Link href="/">
                <div className="relative mr-2 w-full max-md:h-[22px] max-w-[22px] md:max-w-[32px] md:max-h-[32px] hover:opacity-[0.7]">
                  <Image
                    src={ring}
                    alt="icons"
                    className="w-[22px] md:w-[32px] flex items-center"
                  />
                  <Image
                    src={sky}
                    alt={"sky"}
                    width={10}
                    height={10}
                    className="w-[15px] md:w-[18px] absolute top-[50%] left-[50%] m-0 translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="relative mr-2 w-full max-md:h-[22px] max-w-[22px] md:max-w-[32px] md:max-h-[32px] hover:opacity-[0.7]">
                  <Image
                    src={ring}
                    alt="icons"
                    className="w-[22px] md:w-[32px] flex items-center"
                  />
                  <Image
                    src={x}
                    alt={"x"}
                    width={10}
                    height={10}
                    className="w-[15px] md:w-[18px] absolute top-[50%] left-[50%] m-0 translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="relative mr-2 w-full max-md:h-[22px] max-w-[22px] md:max-w-[32px] md:max-h-[32px] hover:opacity-[0.7]">
                  <Image
                    src={ring}
                    alt="icons"
                    className="w-[22px] md:w-[32px] flex items-center"
                  />
                  <Image
                    src={yt}
                    alt={"yt"}
                    width={10}
                    height={10}
                    className="w-[15px] md:w-[18px] absolute top-[50%] left-[50%] m-0 translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="relative mr-2 w-full max-md:h-[22px] max-w-[22px] md:max-w-[32px] md:max-h-[32px] hover:opacity-[0.7]">
                  <Image
                    src={ring}
                    alt="icons"
                    className="w-[22px] md:w-[32px] flex items-center"
                  />
                  <Image
                    src={discord}
                    alt={"discord"}
                    width={10}
                    height={10}
                    className="w-[15px] md:w-[18px] absolute top-[50%] left-[50%] m-0 translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="relative mr-2 w-full max-md:h-[22px] max-w-[22px] md:max-w-[32px] md:max-h-[32px] hover:opacity-[0.7]">
                  <Image
                    src={ring}
                    alt="icons"
                    className="w-[22px] md:w-[32px] flex items-center"
                  />
                  <Image
                    src={world}
                    alt={"world"}
                    width={10}
                    height={10}
                    className="w-[15px] md:w-[18px] absolute top-[50%] left-[50%] m-0 translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="flex flex-row gap-6 md:gap-[26px]">
              <div className="xl:w-[128px] text-center">
                <label className="text-xs md:text-[17px] font-normal text-white mb-4">
                  Owner
                </label>
                <p className="Text_gradient font-bold text-sm md:text-base lg:text-lg xl:text-[21px]">
                  {nftStatsData.num_owners}
                </p>
              </div>
              <div className="xl:w-[128px] text-center">
                <label className="text-xs md:text-[17px] font-normal text-white mb-4">
                  Sales
                </label>
                <p className="Text_gradient font-bold text-sm md:text-base lg:text-lg xl:text-[21px]">
                {nftStatsData.sales}
                </p>
              </div>
              <div className="xl:w-[128px] text-center">
                <label className="text-xs md:text-[17px] font-normal text-white mb-4">
                  Floor Price
                </label>
                <p className="Text_gradient font-bold flex items-center justify-center text-sm md:text-base lg:text-lg xl:text-[21px]">
                  <span>
                    <Image src={eth} alt="eth" className="w-3 h-[18px] mr-1" />
                  </span>
                  {nftStatsData.floor_price}
                </p>
              </div>
              <div className="xl:w-[128px] text-center">
                <label className="text-xs md:text-[17px] font-normal text-white mb-4">
                  Market Cap
                </label>
                <p className="Text_gradient font-bold flex items-center justify-center text-sm md:text-base lg:text-lg xl:text-[21px]">
                  <span>
                    <Image src={eth} alt="eth" className="w-3 h-[18px] mr-1" />
                  </span>
                  {nftStatsData.market_cap?.toFixed(2)} 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagenv;
