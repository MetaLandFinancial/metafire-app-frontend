import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import SD1 from "../../public/img/SD1.png";
import SD2 from "../../public/img/SD2.png";
import SD3 from "../../public/img/SD3.png";
import SD4 from "../../public/img/SD4.png";
import SD5 from "../../public/img/SD5.png";
import eth from "../../public/img/eth.svg";
const SliderItem = () => {
  return (
    <>
      {/* <div className="relative mt-10 md:mt-12 lg:mt-14 xl:mt-20"> */}
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD1}
              alt="images"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>Otherdeed for Otherside</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD2}
              alt="SD2"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>VeeFriends</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD3}
              alt="SD3"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>CryptoPunks</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD4}
              alt="SD4"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>Otherdeed for Otherside</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD5}
              alt="SD5"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>World of Women Galaxy</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD1}
              alt="images"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>Otherdeed for Otherside</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD2}
              alt="SD2"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>VeeFriends</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD3}
              alt="SD3"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>CryptoPunks</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD4}
              alt="SD4"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>Otherdeed for Otherside</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="BoxItem flex mb-6">
          <div className="h-[106px] w-[97px] mr-[18px]">
            <Image
              src={SD5}
              alt="SD5"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <div className="text-white text-xl font-bold">
              <h1>World of Women Galaxy</h1>
            </div>
            <div className="h-[1px] w-full my-[13px] bg-gradient-to-r from-[#e8d9ff63] to-[#ffffff00]"></div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Floor Price</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">1.2 ETH</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <h5 className="text-white text-sm font-medium">Volume</h5>
                <div className="flex items-center gap-[6px]">
                  <span className="block h-3 w-[9px]">
                    <Image src={eth} alt="eth" className="w-full h-full" />
                  </span>
                  <p className="ETH_text flex">361.2K ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SliderItem;
