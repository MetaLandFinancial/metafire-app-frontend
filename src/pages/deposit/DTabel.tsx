import { assetData } from "@/components/constant/DipositPageData/DTableData";
import React from "react";

const DTabel = () => {
  return (
    <div className="relative px-4 pt-40 pb-40 md:pt-0 md:pb-20 lg:pb-24 xl:pt-0 xxl:pt-0 xxl:pb-28">
      <div className="container">
        <div className="mx-auto w-fit text-center">
          <h2 className="text-white font-bold text-xl md:text-2xl xl:text-3xl">
            What Asset Classes are earning on average
          </h2>
          <div className="my-9">
            <div className="Tabel_Bg grid grid-cols-1 divide-y divide-white/[0.2] py-2">
              <div className="flex items-center justify-between gap-5 py-5 px-9">
                <p className="text-white text-base font-medium">Asset Class</p>
                <p className="text-white text-base font-medium">5.0 Star</p>
              </div>
              {assetData.map((asset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-5 py-5 px-9"
                >
                  <p className="text-white text-base font-medium">
                    {asset.name}
                  </p>
                  <p className="text-white text-base font-medium">
                    {asset.percentage}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white font-medium text-sm md:text-[15px]">
            *APY is approximate and will be updated as more data comes available
          </p>
        </div>
      </div>
    </div>
  );
};

export default DTabel;
