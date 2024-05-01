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
            <p className="text-center text-white font-bold text-lg md:text-xl mb-5">
              Only the NFTs you own that are eligible for loans will show up below: Please see our Whitelist Link
            </p>
            <FinanceCard nftData={nftData} signer={signer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceMain;
