import React from "react";
import "./metrics.css";
import Stacking_main from "@/pages/metrics/Stacking_main";

const Index = () => {
  return (
    <div
      className={
        "relative bg-[url('/img/metricsMainBg.png')] bg-cover bg-no-repeat h-full w-full"
      }
    >
      <Stacking_main />
    </div>
  );
};

export default Index;
