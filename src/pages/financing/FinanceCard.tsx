import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import eth from "../../../public/img/eth.svg";
import heart from "../../../public/img/heart.svg";
import ring from "../../../public/img/ring.svg";
import { Financecard } from "@/components/constant/Financecard";
import Link from "next/link";
import Detailed from "./Detailed";
const FinanceCard = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="grid gap-[19px] md:gap-6 grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {Financecard.map((item, index) => (
          <div className="Finance_Card_BG" key={index}>
            <div className="w-full flex flex-col p-[10px] md:p-5">
              <div className="h-full w-full xl:max-w-[247px] rounded Finance_img_shadow overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt="robo"
                  height={234}
                  width={247}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-row justify-between items-center mt-[13px]">
                <h3 className="text-xs md:text-sm font-bold text-white">
                  {item.title}
                  <span className="ml-[10px]">{item.subTitle}</span>
                </h3>
                <Link href="/">
                  <div className="w-fit relative md:mr-2">
                    <Image
                      src={ring}
                      alt="icons"
                      height={24}
                      width={24}
                      className="w-[22px] md:w-[32px] flex items-center"
                    />
                    <Image
                      src={heart}
                      alt="heart"
                      width={12}
                      height={12}
                      className="w-[10px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col border-[0.318px] border-[rgba(71,119,230,0.31)] rounded-[10px] overflow-hidden mt-4">
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.31)]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Floor Price
                    </p>
                    <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                      <span>
                        <Image
                          src={eth}
                          alt="eth"
                          className="w-[9px] md:w-3 h-4 md:h-[18px] mr-1"
                        />
                      </span>
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Listing price
                    </p>
                    <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                      <span>
                        <Image
                          src={eth}
                          alt="eth"
                          className="w-[9px] md:w-3 h-4 md:h-[18px] mr-1"
                        />
                      </span>
                      {item.listingprice}
                    </p>
                  </div>
                </div>
              </div>
              <button className="FinanceCard_Btn" onClick={openModal}>
                Buy now pay later
              </button>
            </div>
          </div>
        ))}
      </div>
      <Detailed isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default FinanceCard;
