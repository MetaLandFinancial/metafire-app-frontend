import React from "react";
import Sidebar from "./Sidebar";
import FinanceCard from "./FinanceCard";
import FinInput from "./FinInput";

const FinanceMain = () => {
  return (
    <div className="relative mt-[79px] mb-[69px]">
      <div className="container mx-auto">
        <div className="flex gap-6">
          <Sidebar />
          <div className="w-full">
            <FinInput />
            <FinanceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceMain;
