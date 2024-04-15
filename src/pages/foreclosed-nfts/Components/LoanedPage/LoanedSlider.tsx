import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import eth from "../../../../../public/img/eth.svg";
import wocolor from "../../../../../public/img/wocolor.svg";
import wicolor from "../../../../../public/img/wicolor.svg";
import SampleNextArrow from "@/pages/foreclosed-nfts/Components/LoanedPage/Next";
import SamplePrevArrow from "@/pages/foreclosed-nfts/Components/LoanedPage/Prev";
const LoanedSlider = ({ loanedNftData, loanedNftImageUrlList}: { loanedNftData: any, loanedNftImageUrlList: any}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
    ],
  };
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
      <div className="custom_slider">
        <Slider {...settings}>
          {loanedNftData.map((item: any, index: any) => (
            <div
              key={index}
              className="Sale_Card_BG w-full md:max-w-full xl:max-w-[391px] "
            >
              <div className="rounded-[15px] overflow-hidden w-full xl:max-w-[367px]">
                <Image
                  src={item.image}
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
                      {item.title}&nbsp;
                    </h1>
                    <span className="text-[10px] md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                      #{item.nftTokenId}
                    </span>
                  </div>
                  <div className="hidden Loned_Heart md:flex md:w-[37px] md:h-[37px] border-[1px] border-[#4777e623] rounded-full items-center justify-center cursor-pointer">
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
                  <div className="Loned_Heart flex w-6 h-6 border-[1px] border-[#4777e623] rounded-full items-center justify-center cursor-pointer">
                    <Image
                      src={wocolor}
                      alt="withoutcolor"
                      width={14}
                      height={14}
                      className="svg1"
                    />
                    <Image
                      src={wicolor}
                      alt="withoutcolor"
                      width={14}
                      height={14}
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
                    </p>
                  </div>
                  <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Liquidation Factor
                    </p>
                    <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                      {item.liquidationFactor}
                    </p>
                  </div>
                  <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Current Auction Price
                    </p>
                    <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                      {item.currentauctionprice}
                    </p>
                  </div>
                  <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
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
                  </div>
                </div>
                <div className="mt-[19px] md:mt-[22px] flex flex-row gap-[10px]">
                  <button className="Sale_Btn_Bg">
                    <span className="Text_gradient_bg_text">Auction</span>
                  </button>
                  <button className="Sale_Btn_Bg">
                    <span className="Text_gradient_bg_text">Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LoanedSlider;
