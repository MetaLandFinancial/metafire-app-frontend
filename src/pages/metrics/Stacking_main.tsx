import React from "react";
import StackingBlock from "@/pages/metrics/components/main-page/StackingBlock";
import StakeCard from "@/pages/metrics/components/Cards/StakeCard";
import PageBtn from "@/pages/metrics/components/Cards/PageBtn";
import StakeBtnMetrics from "@/pages/metrics/components/main-page/StakeBtnMetrics";

const Stacking_main = () => {
  return (
    <div className={"relative"}>
      <div className="pb-[72px] md:pb-[130px] lg:pb-[180px] xl:pb-[229px] pt-[50px]">
        <StackingBlock />
        <StakeBtnMetrics />
        {/* <StakeCard /> */}
        {/* <PageBtn /> */}
      </div>
    </div>
  );
};

export default Stacking_main;
