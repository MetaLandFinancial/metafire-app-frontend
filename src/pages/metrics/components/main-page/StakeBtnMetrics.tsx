import React from "react";
import Image from "next/image";
import metricsC1 from "@/../../public/img/metricsC1.svg";
import metricsC2 from "@/../../public/img/metricsC2.svg";
import metricsC3 from "@/../../public/img/metricsC3.svg";
import metricsC4 from "@/../../public/img/metricsC4.svg";
import Slider from "react-slick";
const StakeBtnMetrics = () => {
  const metricsData = [
    {
      image: metricsC1,
      label: "MetaFire",
    },
    {
      image: metricsC2,
      label: "ETH",
    },
    {
      image: metricsC3,
      label: "MATIC",
    },
    {
      image: metricsC4,
      label: "Optimism",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    speed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="relative block overflow-hidden lg:hidden">
      <div className="Metrics_Slider ml-6">
        <div className="slider-container">
          <Slider {...settings}>
            {metricsData.map((metric, index) => (
              <div
                key={index}
                className="w-fit rounded-xl border border-[#4776E6] slide_M hover:border-transparent hover:bg-gradient-to-r hover:from-[#4776E6] hover:to-[#8E54E9]"
              >
                <Image
                  src={metric.image}
                  alt="metrics"
                  height={20}
                  width={20}
                  className="h-5 w-5 rounded-full"
                />
                <p className="text-sm font-semibold leading-[150%] tracking-[0.15px] text-white">
                  {metric.label}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StakeBtnMetrics;
