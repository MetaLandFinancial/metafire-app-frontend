import React from "react";
import leftlong from "../../../../../public/img/leftlong.svg";
import leftlongcolored from "../../../../../public/img/leftlongcolored.svg";
import Image from "next/image";
const PaginationBtn = () => {
  const num = [{ nm: 1 }, { nm: 2 }, { nm: 3 }, { nm: 4 }];
  return (
    <>
      <div className="hidden md:flex relative mt-16 md:mt-20 w-fit flex-row gap-[10px] mx-auto">
        <div className="Pagination_Btn flex justify-center items-center border-[1px] border-[#798295] rounded-[7px] h-10 w-10 md:h-12 md:w-12 text-white  hover:border-[#7982955] duration-500 opacity-[0.50] hover:opacity-[1] cursor-pointer">
          <Image
            src={leftlong}
            alt="leftarrow"
            width={24}
            height={24}
            className="Left_Svg_1"
          />
          <Image
            src={leftlongcolored}
            alt="leftarrow"
            width={24}
            height={24}
            className="Left_Svg_2 rotate-180"
          />
        </div>
        {num.map((item) => (
          <div
            key={item.nm}
            className="flex justify-center items-center border-[1px] border-[#798295] rounded-[7px] h-10 w-10 md:h-12 md:w-12 text-white hover:bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:border-transparent duration-500 opacity-[0.50] hover:opacity-[1] cursor-pointer"
          >
            {item.nm}
          </div>
        ))}
        <div className="Pagination_Btn flex justify-center items-center border-[1px] border-[#798295] rounded-[7px] h-10 w-10 md:h-12 md:w-12 text-white  hover:border-[#7982955] duration-500 opacity-[0.50] hover:opacity-[1] cursor-pointer">
          <Image
            src={leftlong}
            alt="rightarrow"
            width={24}
            height={24}
            className="Left_Svg_1  rotate-180"
          />
          <Image
            src={leftlongcolored}
            alt="rightarrow"
            width={24}
            height={24}
            className="Left_Svg_2"
          />
        </div>
      </div>
    </>
  );
};

export default PaginationBtn;
