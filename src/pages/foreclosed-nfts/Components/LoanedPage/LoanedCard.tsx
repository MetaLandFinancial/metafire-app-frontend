import React from "react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import eth from "../../../../../public/img/eth.svg";
import wocolor from "../../../../../public/img/wocolor.svg";
import wicolor from "../../../../../public/img/wicolor.svg";


type CollectionSlugsType = {
  [key: string]: string;
};

// Use the defined type for your object
const collectionSlugs: CollectionSlugsType = {
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" : "boredapeyachtclub",
  "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "otherdeed",
  "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949" : "beanzofficial"
};

function getCollectionSlug(address: string): string {
  return collectionSlugs[address.toLowerCase()];
}

const LoanedCard = ({ loanedNftData, loanedNftImageUrlList}: { loanedNftData: any, loanedNftImageUrlList: any}) => {
  const lonedData = [
    {
      image: "/img/sl1.jpg",
      title: "MetaFire NFT",
      number: "#23",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl2.jpg",
      title: "MetaFire NFT",
      number: "#33",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl3.jpg",
      title: "MetaFire NFT",
      number: "#39",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl4.jpg",
      title: "MetaFire NFT",
      number: "#23",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl5.jpg",
      title: "MetaFire NFT",
      number: "#33",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl6.jpg",
      title: "MetaFire NFT",
      number: "#39",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl7.jpg",
      title: "MetaFire NFT",
      number: "#23",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl8.jpg",
      title: "MetaFire NFT",
      number: "#33",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sl9.jpg",
      title: "MetaFire NFT",
      number: "#39",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
  ];



  return (
    <>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-6">
        {/* <div className="flex flex-row max-md:overflow-x-scroll md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-6"> */}
        {loanedNftData?.map((item:any, index:any) => (
          <div
            key={index}
            className="Sale_Card_BG w-full md:justify-center md:max-w-full xl:max-w-[391px]"
          >
            <div className="rounded-[15px] overflow-hidden w-full xl:max-w-[367px]">
              <img
                src={loanedNftImageUrlList?.[index]}
                alt={item.title}
                className="rounded-[15px] w-full"
                width={367}
                height={229}
              />
            </div>
            <div className="p-0 md:p-3">
              <div className="mt-3 flex justify-between items-center">
                <div className="flex justify-between md:flex-start w-full md:w-fit">
                  <h1 className="text-[10px] md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                    {getCollectionSlug(item?.nftAsset)}&nbsp;
                  </h1>
                  <span className="text-[10px] md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                    #{item.nftTokenId}
                  </span>
                </div>
                <div className="hidden Loned_Heart cursor-pointer md:flex w-6 h-6 md:w-[37px] md:h-[37px] border-[1px] border-[#4777e623] rounded-full items-center justify-center Heart">
                  <Image
                    src={wocolor}
                    alt="withoutcolor"
                    width={20}
                    height={20}
                    className="svg1"
                  />
                  <Image
                    src={wicolor}
                    alt="withoutcolor"
                    width={20}
                    height={20}
                    className="svg2"
                  />
                </div>
              </div>
              <div className="mt-2 flex md:hidden justify-between items-center">
                <div className="flex items-center flex-row">
                  <Image
                    src={eth}
                    alt="eth"
                    height={10}
                    width={10}
                    className="h-[10px] w-[10px] mr-[3px]"
                  />
                  <span className="text-[10px] Text_gradient font-bold">
                    {item.eth}
                  </span>
                </div>
                <div className="Loned_Heart cursor-pointer flex w-6 h-6 border-[1px] border-[#4777e623] rounded-full items-center justify-center">
                  <Image
                    src={wocolor}
                    alt="withoutcolor"
                    width={12}
                    height={12}
                    className="svg1"
                  />
                  <Image
                    src={wicolor}
                    alt="withoutcolor"
                    width={12}
                    height={12}
                    className="svg2"
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-5 border-[1px] border-[rgba(71,119,230,0.20)] rounded-[10px] overflow-hidden">
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Floor Price
                  </p>
                  <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                    <span>
                      <Image
                        src={eth}
                        alt="eth"
                        className="w-3 h-3 md:h-[18px] mr-1"
                      />
                    </span>
                    {item.floorPrice}
                    {item.loanAmount}
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Health Factor
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {(item.healthFactor * 100).toFixed(2)}%
                  </p>
                </div>
                {/* <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Current Auction Price
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {item.currentauctionprice}
                  </p>
                </div> */}
                {/* <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Bidder
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {item.bidder}
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Auction End
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {item.auctionEnd}
                  </p>
                </div> */}
              </div>
              {/* <div className="mt-[19px] md:mt-[22px] flex flex-row gap-[10px]">
                <button className="Sale_Btn_Bg">
                  <span className="Text_gradient_bg_text">Auction</span>
                </button>
                <button className="Sale_Btn_Bg">
                  <span className="Text_gradient_bg_text">Buy Now</span>
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>


    </>
  );
};

export default LoanedCard;
