import React from "react";
import LoanedCard from "./Components/LoanedPage/LoanedCard";
import PaginationBtn from "./Components/LoanedPage/PaginationBtn";
import LoanedSlider from "./Components/LoanedPage/LoanedSlider";
const Loaned = () => {
  return (
    <>
      <div
        id="Loned"
        className="relative pt-[74px] pb-[225px] md:pt-12 md:pb-[70px] lg:pt-16 lg:pb-[130px] xl:pt-20 xl:pb-[154px] bg-[url('/img/loanedbg.png')] bg-no-repeat bg-cover"
      >
        <div className="container">
          {/* _________ title __________ */}
          <div className="flex justify-between md:justify-center md:text-center">
            <div className="text-center">
              <h1 className="font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-normal">
                Loaned NFTs
              </h1>
              <p className="text-[#ffffffb3] text-lg md:text-xl xl:text-2xl mt-6 hidden md:block">
                NFTs Staked as Collateral for Loans
              </p>
            </div>
          </div>
          {/* _______ card __________ */}
          <div className="relative mt-6 md:mt-14 lg:mt-16 xl:mt-20">
            <div className="block md:hidden">
              <LoanedSlider />
            </div>
            <div className="hidden md:flex md:justify-center">
              <LoanedCard />
            </div>
          </div>
          {/* _________ pagination button __________ */}
          <PaginationBtn />
        </div>
      </div>
    </>
  );
};

export default Loaned;
