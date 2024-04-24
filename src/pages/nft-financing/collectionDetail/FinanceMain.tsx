import React from "react";
import Sidebar from "../../nft-equity/Sidebar";
import FinanceCard from "./FinanceCard";
import FinInput from "./FinInput";
import leftArrow from "../../../../public/assets/arrow_left.svg";
import rightArrow from "../../../../public/assets/arrow-right.svg";

// import Pagination from "@/components/shared/Pagination";

const FinanceMain = ({ collectionAddress, nftData }: { collectionAddress:string, nftData: any }) => {
  return (
    <div className="relative mt-[79px] mb-[69px]">
      <div className="container mx-auto">
        <div className="flex gap-6">
          <Sidebar />
          {/* <div style={{color:"white"}} >sadas2 {nftData?.[0]?.name} </div> */}
          <div className="w-full">
            <FinInput />
            <FinanceCard collectionAddress={collectionAddress}  nftData={nftData} />

            <div className="pagination flex gap-2 items-center justify-center pt-7">
              <button
                  className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                  <img src={leftArrow.src} alt=""/>
              </button>
              <button
                  className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                  <img src={rightArrow.src} alt=""/>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FinanceMain;
