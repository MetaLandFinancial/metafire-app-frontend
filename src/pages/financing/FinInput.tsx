import React, { useState } from "react";
import Image from "next/image";
import filter from "../../../public/img/filter.svg";
import search from "../../../public/img/search.svg";
import MobileSidebar from "./MobileSidebar";
const FinInput: React.FC = () => {
  let [IsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
      <MobileSidebar IsOpen={IsOpen} closeModal={closeModal} />
    </>
  );
};

export default FinInput;