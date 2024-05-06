import React from "react";

const StakeBtn = ({depositStatus}:{depositStatus:any}) => {
  return (
    <div>
      <button className="text-white text-base font-semibold uppercase rounded-md Btn_BG py-[18px] px-[92px]">
        {depositStatus}
      </button>
    </div>
  );
};

export default StakeBtn;
