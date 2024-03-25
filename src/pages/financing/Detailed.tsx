import { Fragment, useState } from "react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import eth from "../../../public/img/eth.svg";
import heart from "../../../public/img/heart.svg";
import ring from "../../../public/img/ring.svg";
import close1 from "../../../public/img/close1.svg";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
interface DetailedProps {
  isOpen: boolean;
  closeModal: () => void;
}
const Detailed: React.FC<DetailedProps> = ({ isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="">
                  <div className="container">
                    <div className="Detailed_Bg relative w-full max-w-[651px]">
                      <h1 className="text-white text-[22px] md:text-2xl xl:text-[27px] font-bold text-center">
                        BUY NOW PAY LATER
                      </h1>
                      <p className="mt-[10px] text-white text-sm md:text-lg font-medium text-center">
                        Finance the NFT of Your Dreams
                      </p>
                      <div
                        className="absolute top-5 right-[30px] text-white"
                        onClick={closeModal}
                      >
                        <Image
                          src={close1}
                          alt="close"
                          className="text-white"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex gap-4 mt-[54px]">
                        <div className="w-full">
                          <div className="w-full max-w-[261px] rounded-[3px]">
                            <Image
                              src="/img/robo.png"
                              alt="bgImg"
                              className="w-full h-full object-cover rounded-[3px]"
                              width={105}
                              height={105}
                            />
                          </div>
                          <div className="flex md:hidden justify-between mt-[9px]">
                            <h2 className="text-[10px] lg:text-xl text-white font-bold">
                              MetaFire NFT
                            </h2>
                            <p className="text-[10px] lg:text-xl text-white font-bold">
                              #39
                            </p>
                          </div>
                          <div className="flex md:hidden justify-between mt-[6px]">
                            <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                              <Link href="/">
                                <span>
                                  <Image
                                    src={eth}
                                    alt="eth"
                                    className="w-[8px] h-[8px] mr-1"
                                  />
                                </span>
                              </Link>
                              0.0025487 ETH
                            </p>
                            <div className="w-fit relative md:mr-2">
                              <Image
                                src={ring}
                                alt="icons"
                                height={28}
                                width={28}
                                className="w-[21px] md:w-[28px] flex items-center"
                              />
                              <Link href="/">
                                <Image
                                  src={heart}
                                  alt="heart"
                                  width={12}
                                  height={12}
                                  className="w-[11px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* right part */}
                        <div className="relative w-full">
                          <div className="hidden md:flex justify-between mb-3">
                            <h2 className="text-[10px] lg:text-xl text-white font-bold">
                              MetaFire NFT
                            </h2>
                            <p className="text-[10px] lg:text-xl text-white font-bold">
                              #39
                            </p>
                          </div>
                          <div className="hidden md:flex justify-between mb-[19px]">
                            <p className="Text_gradient font-bold flex items-center justify-center text-[8px] md:text-sm lg:text-[17px]">
                              <span>
                                <Image
                                  src={eth}
                                  alt="eth"
                                  className="w-3 h-[18px] mr-1"
                                />
                              </span>
                              0.0025487 ETH
                            </p>
                            <div className="w-fit relative md:mr-2">
                              <Image
                                src={ring}
                                alt="icons"
                                height={28}
                                width={28}
                                className="w-[21px] md:w-[28px] flex items-center"
                              />
                              <Link href="/">
                                <Image
                                  src={heart}
                                  alt="heart"
                                  width={12}
                                  height={12}
                                  className="w-[11px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col border-[0.4px] border-[rgba(71,119,230,0.28)] rounded-[10px] overflow-hidden">
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
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
                                  1.2 ETH
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Liquidation Factor
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  100%
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Current Auction Price
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  N/A
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Bidder
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  N/A
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Auction End
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  23 Feb, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* inputs */}
                      <div className="mt-[47px]">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              Enter amount:
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              input
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              imput
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              input
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              input
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              input
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* button */}
                      <div className="mt-10 md:mt-[54px]">
                        <div className="flex">
                          <div className="form-group flex align-middle items-start md:items-center mb-4">
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-5 h-5 Checkbox mr-3"
                            />
                            <label
                              htmlFor="default-checkbox"
                              className="block text-left md:text-center text-xs md:text-base font-medium text-white"
                            >
                              yes I am ready to get my NFT and agree to
                              MetaFire&nbsp;
                              <Link href="/" className="inline">
                                <span className="link_bg underline w-full font-medium border-b-[1px] border-[#8E54E9]">
                                  terms and conditions
                                </span>
                              </Link>
                            </label>
                          </div>
                        </div>
                        <button className="Nft_Bg capitalize">BUY NFT</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Detailed;
