"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import eth from "../../public/img/eth.svg";
import { SliderData } from "@/components/constant/SliderData";
interface SamplePrevArrowProps {
  className: string;
  style?: React.CSSProperties;
  onClick: () => void;
}
interface SampleNextArrowProps {
  className: string;
  style?: React.CSSProperties; // Specify the correct type for the style property
  onClick: () => void;
}
const SampleNextArrow: React.FC<SampleNextArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{
        ...style,
        maxWidth: "64px",
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        borderRadius: "15px",
        border: "1px solid rgba(187, 207, 255, 0.40)",
        background:
          "linear-gradient(90deg, rgba(71, 118, 230, 0.04) 0%, rgba(142, 84, 233, 0.04) 100%)",
        boxShadow: "0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(20%,100%)",
      }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow: React.FC<SamplePrevArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{
        ...style,
        maxWidth: "64px",
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        borderRadius: "15px",
        border: "1px solid rgba(187, 207, 255, 0.40)",
        background:
          " linear-gradient(90deg, rgba(71, 118, 230, 0.04) 0%, rgba(142, 84, 233, 0.04) 100%)",
        boxShadow: " 0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-120%,100%)",
      }}
      onClick={onClick}
    />
  );
};
const SliderItem = () => {
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
  return (
    <Slider {...settings}>
      {SliderData.map((item) => (
        <>
          <div key={item.id} className="BoxItem mb-6">
            <div className="flex items-center">
              <div className="h-[68px] min-w-16 md:min-h-20 md:min-w-20 lg:h-[85px] lg:min-w-[85px] xl:h-[106px] xl:min-w-[97px] mr-[18px]">
                <Image
                  src={item.imageSrc}
                  alt="images"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <div className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-bold">
                  <h1>{item.title}</h1>
                </div>
                <div className="h-[1px] w-full my-2 xl:my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                <div className="flex justify-between">
                  <div className="w-1/2 flex flex-col gap-1">
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
                    <h5 className="text-white text-xs md:text-sm  font-medium">
                      Volume
                    </h5>
                    <div className="flex items-center gap-[6px]">
                      <span className="block h-3 w-[9px]">
                        <Image src={eth} alt="eth" className="w-full h-full" />
                      </span>
                      <p className="ETH_text flex">{item.volume}</p>
                    </div>
                  </div>
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
