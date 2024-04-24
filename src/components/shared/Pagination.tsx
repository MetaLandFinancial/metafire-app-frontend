import React from 'react';
import leftArrow from "../../../public/assets/arrow_left.svg";
import rightArrow from "../../../public/assets/arrow-right.svg";

const Pagination = () => {
    return (
        <div className="pagination flex gap-2 items-center justify-center pt-7">
            <button
                className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                <img src={leftArrow.src} alt=""/>
            </button>

            {/* <ul className={"flex gap-2"}>
                <li className={"w-[40px] h-[40px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-[6px] text-white flex justify-center items-center cursor-pointer"}>
                    1
                </li>
                <li className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] text-white flex justify-center items-center cursor-pointer"}>
                    2
                </li>
                <li className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] text-white flex justify-center items-center cursor-pointer"}>
                    3
                </li>
            </ul> */}
            <button
                className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                <img src={rightArrow.src} alt=""/>
            </button>


        </div>
    );
};

export default Pagination;