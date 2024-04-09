import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import filter from "../../../../public/img/filter.svg";
import search from "../../../../public/img/search.svg";
import close1 from "../../../../public/img/close1.svg";
import { Dialog, Transition } from "@headlessui/react";
import FinanceDrop from "../../nft-equity/Drop/FinanceDrop";
const FinInput: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const properties = [
    { id: 1, name: "Background", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const skin1 = [
    { id: 1, name: "Skin", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const body1 = [
    { id: 1, name: "Sody", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const face1 = [
    { id: 1, name: "Face", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const head1 = [
    { id: 1, name: "Head", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const [selectedPerson, setSelectedPerson] = useState(properties[0]);
  const [skin, setSkin] = useState(skin1[0]);
  const [body, setBody] = useState(body1[0]);
  const [face, setFace] = useState(face1[0]);
  const [head, setHead] = useState(head1[0]);
  return (
    <>
      <div className="relative mb-9 md:mb-[22px]">
        <div className="flex max-lg:flex-row-reverse gap-[10px] md:gap-4">
          <div className="Input_Bg">
            <div className="mr-[13px]">
              <Image
                src={search}
                alt="search"
                width={24}
                height={24}
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </div>
            <input
              type="text"
              placeholder="Search NFT by token ID"
              className="w-full h-full text-[10px] md:text-base text-white font-semibold opacity-[0.7] bg-transparent outline-none focus:outline-none border-none"
            />
          </div>
          {/* in lg screen hidden */}
          <button className="input_Btn lg:hidden" onClick={openModal}>
            <div className="w-4 h-3 md:w-6 md:h-[18px]">
              <Image
                src={filter}
                alt="filter"
                height={12}
                width={16}
                className="h-fit w-fit"
              />
            </div>
            <span className="hidden md:flex text-base font-semibold text-white ml-3 opacity-[0.7]">
              Sort
            </span>
          </button>
          {/* in small screen */}
          <button className="input_Btn_1 hidden lg:flex">
            <div className="w-4 h-3 md:w-6 md:h-[18px]">
              <Image
                src={filter}
                alt="filter"
                height={12}
                width={16}
                className="h-fit w-fit"
              />
            </div>
            <span className="hidden md:flex text-base font-semibold text-white ml-3 opacity-[0.7]">
              Sort
            </span>
          </button>
        </div>
      </div>

      {/* ________ modal _________ */}
      <Transition show={isModalOpen} as={Fragment}>
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
                <div className="container">
                  <div className="Sidebar_BG_Mobile relative">
                    <div
                      className="absolute top-5 right-[30px] text-white cursor-pointer"
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
                    <div className="status mb-6">
                      <h2 className="text-white text-left lg:text-center text-base mb-4">
                        Status
                      </h2>
                      <div className="grid grid-cols-2 gap-3 place-items-center place-content-center">
                        <button className="Status_Btn_Bg ">All</button>
                        <button className="Status_Btn_Bg ">Listed</button>
                        <button className="Status_Btn_Bg ">On auction</button>
                        <button className="Status_Btn_Bg ">New</button>
                        <button className="Status_Btn_Bg ">Has offer</button>
                      </div>
                    </div>
                    <div className="filter">
                      <h2 className="text-white text-left lg:text-center text-base mb-4">
                        Filters
                      </h2>
                      <div className="mt-[13px]">
                        <FinanceDrop
                          options={properties}
                          selectedValue={selectedPerson}
                          onChange={setSelectedPerson}
                        />
                      </div>
                      <div className="mt-[13px]">
                        <FinanceDrop
                          options={skin1}
                          selectedValue={skin}
                          onChange={setSkin}
                        />
                      </div>
                      <div className="mt-[13px]">
                        <FinanceDrop
                          options={body1}
                          selectedValue={body}
                          onChange={setBody}
                        />
                      </div>
                      <div className="mt-[13px]">
                        <FinanceDrop
                          options={face1}
                          selectedValue={face}
                          onChange={setFace}
                        />
                      </div>
                      <div className="mt-[13px]">
                        <FinanceDrop
                          options={head1}
                          selectedValue={head}
                          onChange={setHead}
                        />
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

export default FinInput;