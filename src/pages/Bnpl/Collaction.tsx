"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import bgGredient from "../../../public/img/bgGredient.png";
import Image from "next/image";
import SD1 from "../../../public/img/SD1.png";
import SD2 from "../../../public/img/SD2.png";
import SD3 from "../../../public/img/SD3.png";
import SD4 from "../../../public/img/SD4.png";
import SD5 from "../../../public/img/SD5.png";
import SD21 from "../../../public/img/SD21.png";
import SD22 from "../../../public/img/SD22.png";
import SD23 from "../../../public/img/SD23.png";
import SD24 from "../../../public/img/SD24.png";
import SD25 from "../../../public/img/SD25.png";
import SD31 from "../../../public/img/SD31.png";
import SD32 from "../../../public/img/SD32.png";
import SD33 from "../../../public/img/SD33.png";
import SD34 from "../../../public/img/SD34.png";
import SD35 from "../../../public/img/SD35.png";
import eth from "../../../public/img/eth.svg";
import SliderItem from "@/components/SliderItem";
import { transform } from "next/dist/build/swc";
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
const Collaction = () => {
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
    <>
      <div className="relative pt-[45px] pb-[102px] md:pt-14 md:pb-20 lg:pt-20 lg:pb-28 xl:pt-[105px] xl:pb-[130px]">
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 mix-blend-color-dodge blur-3xl">
          <Image
            src={bgGredient}
            alt="bgGredient"
            className="w-full h-full max-w-full"
          />
        </div>
        <div className="container">
          <div className="text-centerlative z-10">
            <h1 className="font-bold text-white text-xl md:text-[58px] leading-none">
              Top Collection
            </h1>
            <p className="text-[#ffffffb3] text-lg md:text-2xl mt-6">
              Finance the NFT of Your Dreams, See our Top collections
            </p>
          </div>
          <div className="relative z-10 mt-10 md:mt-12 lg:mt-14 xl:mt-20">
            <div className="slider-container relative">
              <Slider {...settings}>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD1}
                        alt="images"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Otherdeed for Otherside</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD2}
                        alt="SD2"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>VeeFriends</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD3}
                        alt="SD3"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>CryptoPunks</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD4}
                        alt="SD4"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Otherdeed for Otherside</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD5}
                        alt="SD5"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>World of Women Galaxy</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD21}
                        alt="images21"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Pudgy Penguins</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD22}
                        alt="SD22"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Mutant Ape Yacht Club</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD23}
                        alt="SD23"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Pudgy Penguins</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD24}
                        alt="SD24"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>CrypToadz by GREMPLIN</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD25}
                        alt="SD25"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Pudgy Penguins</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD31}
                        alt="SD31"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Pudgy Penguins</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD31}
                        alt="SD31"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl font-bold">
                        <h1>Pudgy Penguins</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD33}
                        alt="SD33"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Moonbirds</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD34}
                        alt="SD34"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Pudgy Penguins</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="BoxItem flex items-center mb-6 lg:mr-4 h-full">
                    <div className="h-[68px] md:h-20 lg:h-[85px] xl:h-[106px] min-w-16 md:w-20 lg:min-w-[85px] xl:min-w-[97px] mr-[18px]">
                      <Image
                        src={SD34}
                        alt="SD34"
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                      <div className="text-white text-sm md:text-xl   font-bold">
                        <h1>Bored Ape Yacht Club</h1>
                      </div>
                      <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
                      <div className="flex">
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Floor Price
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">1.2 ETH</p>
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                          <h5 className="text-white text-xs md:text-sm  font-medium">
                            Volume
                          </h5>
                          <div className="flex items-center gap-[6px]">
                            <span className="block h-3 w-[9px]">
                              <Image
                                src={eth}
                                alt="eth"
                                className="w-full h-full"
                              />
                            </span>
                            <p className="ETH_text flex">361.2K ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaction;
