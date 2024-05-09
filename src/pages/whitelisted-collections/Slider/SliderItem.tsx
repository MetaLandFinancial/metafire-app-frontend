"use client";
import React, {useEffect} from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import Image from "next/image";
import eth from "../../../public/img/eth.svg";
import { SliderData } from "@/components/constant/SliderData";
import whitelistedNFTList from "@/components/constant/whitelistedNFTList.json";
import { SamplePrevArrow } from "./Prev";
import { SampleNextArrow } from "./Next";

const SliderItem = () => {
  const router = useRouter();

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    rows: 5,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const handleItemClick = (id: any) => {
  //   router.push(`/nft-financing/collectionDetail/${id}`);
  // };

  useEffect(() => {
    console.log("whitelistedNFTList", whitelistedNFTList);
  }, []);

  return (
    <Slider {...settings}>
      {whitelistedNFTList.data.map((item, index) => (
        <>
          <div 
            key={index} 
            // onClick={() => handleItemClick(item.contract)} 
            style={{
              // cursor: 'pointer', // Change cursor to pointer on hover
              
            }}
            className="BoxItem mb-6"
          >
            <div className="flex items-center">
              <div className="h-[68px] min-w-16 md:min-h-20 md:min-w-20 lg:h-[85px] lg:min-w-[85px] xl:h-[106px] xl:min-w-[97px] mr-[18px]">
                <img
                  src={item.logoUrl}
                  alt="images"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <div className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-bold">
                  <h1>{item.name}</h1>
                </div>
                <div className="h-[1px] w-full my-2 xl:my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                <div className="flex justify-between">
                  <h4 className="text-white text-xs md:text-sm  font-medium">
                      Available to borrow against
                  </h4>
                  {/* <button className="max-md:w-full py-2 px-4 text-white rounded-[7px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:opacity-[0.7]">
                  Buy Now Pay Later
                    </button> */}
  
                  {/* <div className="w-1/2 flex flex-col gap-1">
                    <h5 className="text-white text-xs md:text-sm  font-medium">
                      Floor Price
                    </h5>
                    <div className="flex items-center gap-[6px]">
                      <span className="block h-3 w-[9px]">
                        <Image src={eth} alt="eth" className="w-full h-full" />
                      </span>
                      <p className="ETH_text flex">{item.floorPrice}</p>
                    </div>
                  </div>
                  <div className="w-fit md:w-1/2 flex flex-col gap-1">
                    <h5 className="text-white text-xs md:text-sm font-medium">
                      Volume
                    </h5>
                    <div className="flex items-center gap-[6px]">
                      <span className="block h-3 w-[9px]">
                        <Image src={eth} alt="eth" className="w-full h-full" />
                      </span>
                      <p className="ETH_text flex">{item.volume}</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </Slider>
  );
};

export default SliderItem;
