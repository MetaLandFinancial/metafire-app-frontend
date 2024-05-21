import React from "react";

const data = [
  {
    assetClass: "5.0",
    depositDate: "Mon May 06 2024",
    totalStaked: "0.006 ETH",
    timePeriod: "0 Days",
    unlockDate: "Mon May 06 2024",
    apy: "4.96%",
  },
  {
    assetClass: "5.0",
    depositDate: "Mon May 06 2024",
    totalStaked: "0.006 ETH",
    timePeriod: "0 Days",
    unlockDate: "Mon May 06 2024",
    apy: "4.96%",
  },
  {
    assetClass: "5.0",
    depositDate: "Mon May 06 2024",
    totalStaked: "0.006 ETH",
    timePeriod: "0 Days",
    unlockDate: "Mon May 06 2024",
    apy: "4.96%",
  },
  {
    assetClass: "5.0",
    depositDate: "Mon May 06 2024",
    totalStaked: "0.006 ETH",
    timePeriod: "0 Days",
    unlockDate: "Mon May 06 2024",
    apy: "4.96%",
  },
  // Add more data objects as needed
];
const MobileTable = () => {
  return (
    <div className="relative py-6 max-md:block md:hidden">
      <div className="container px-[24px]">
        <h3 className="text-white text-[30px] font-medium mb-6">
          Your Deposits
        </h3>
        <div className="w-full rounded-[20px] border-[1px] border-white p-[22px]">
          {data.map((row, index) => (
            <div
              key={index}
              className="border-b-[1px] border-[#ffffff] pb-8 mb-8 last:border-b-0 last:pb-0  last:mb-0"
            >
              <div className="grid grid-cols-2 gap-[19px]">
                <div className="flex flex-col gap-[20px]">
                  <div>
                    <p className="text-white text-[14px] font-bold mb-[8px]">
                      Asset Class
                    </p>
                    <p className="text-white text-[16px] font-normal">
                      {row.assetClass}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-bold mb-[8px]">
                      Deposit Date
                    </p>
                    <p className="text-white text-[16px] font-normal">
                      {row.depositDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-bold mb-[8px]">
                      Total Staked
                    </p>
                    <p className="text-white text-[16px] font-normal">
                      {row.totalStaked}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <div>
                    <p className="text-white text-[14px] font-bold mb-[8px]">
                      Time Period
                    </p>
                    <p className="text-white text-[16px] font-normal">
                      {row.timePeriod}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-bold mb-[8px]">
                      Unlock Date
                    </p>
                    <p className="text-white text-[16px] font-normal">
                      {row.unlockDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-bold mb-[8px]">
                      Apy
                    </p>
                    <p className="text-white text-[16px] font-normal">
                      {row.apy}
                    </p>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="w-full mt-5 flex justify-center">
                <button className="w-full text-white text-center text-[16px] font-medium py-[18px] rounded-xl border-[1px] border-[#4775E6] bg-gradient-to-r from-[#4774e627] to-[#8d54e927] hover:bg-gradient-to-r hover:from-[#4776E6] hover:to-[#8E54E9] hover:border-transparent hover:duration-500">
                  Withdraw
                </button>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default MobileTable;
