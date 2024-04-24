import React from "react";
import Sidebar from "./Sidebar";
import FinanceCard from "./FinanceCard";
import FinInput from "./FinInput";



const FinanceMain = ({ nftData, signer}: { nftData: any, signer: any }) => {
  return (
    <div className="relative mt-[79px] mb-[69px]">
      <div className="container mx-auto">
        <div className="flex gap-6">
          {/* <Sidebar /> */}
          {/* <div style={{color:"white"}} >sadas2 {nftData?.[0]?.name} </div> */}
          <div className="w-full">
            {/* <FinInput /> */}
            <FinanceCard nftData={nftData} signer={signer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceMain;
