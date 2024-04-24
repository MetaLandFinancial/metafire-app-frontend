import React from "react";
import Sidebar from "../../nft-equity/Sidebar";
import FinanceCard from "./FinanceCard";
import FinInput from "./FinInput";

import Pagination from "@/components/shared/Pagination";

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
            <Pagination />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FinanceMain;
