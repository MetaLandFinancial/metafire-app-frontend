"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import bgGredient from "../../../public/img/bgGredient.png";
import Image from "next/image";
import SD1 from "../../public/img/SD1.png";
import SD2 from "../../public/img/SD2.png";
import SD3 from "../../public/img/SD3.png";
import SD4 from "../../public/img/SD4.png";
import SD5 from "../../public/img/SD5.png";
import SD21 from "../../public/img/SD21.png";
import SD22 from "../../public/img/SD22.png";
import SD23 from "../../public/img/SD23.png";
import SD24 from "../../public/img/SD24.png";
import SD25 from "../../public/img/SD25.png";
import SD31 from "../../public/img/SD31.png";
import SD32 from "../../public/img/SD32.png";
import SD33 from "../../public/img/SD33.png";
import SD34 from "../../public/img/SD34.png";
import SD35 from "../../public/img/SD35.png";
import eth from "../../public/img/eth.svg";
import { SliderData } from "@/components/constant/SliderData";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "15px",
        border: "1px solid rgba(187, 207, 255, 0.40)",
        background:
          "linear-gradient(90deg, rgba(71, 118, 230, 0.04) 0%, rgba(142, 84, 233, 0.04) 100%)",
        boxShadow: "0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(24px,100%)",
      }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "15px",
        border: "1px solid rgba(187, 207, 255, 0.40)",
        background:
          " linear-gradient(90deg, rgba(71, 118, 230, 0.04) 0%, rgba(142, 84, 233, 0.04) 100%)",
        boxShadow: " 0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-24px,100%)",
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
            <div className="flex items-center h-full">
              <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                <Image
                  src={item.imageSrc}
                  alt="images"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <div className="text-white text-sm md:text-xl   font-bold">
                  <h1>{item.title}</h1>
                </div>
                <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                <div className="flex">
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
                  <div className="w-1/2 flex flex-col gap-1">
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
