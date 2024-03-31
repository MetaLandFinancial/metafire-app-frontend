import React from "react";
import LoanedCard from "./Components/LoanedPage/LoanedCard";
import PaginationBtn from "./Components/LoanedPage/PaginationBtn";
const Loaned = () => {
  return (
    <>
      <div
        id="Loned"
        className="relative pt-10 pb-[225px] md:pt-12 md:pb-[70px] lg:pt-16 lg:pb-[130px] xl:pt-20 xl:pb-[154px] bg-[url('/img/loanedbg.png')] bg-no-repeat bg-cover"
      >
        <div className="container">
          {/* _________ title __________ */}
          <div className="flex justify-between md:justify-center md:text-center">
            <div className="text-center">
              <h1 className="font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-none">
                Loaned NFTs
              </h1>
              <p className="text-[#ffffffb3] text-lg md:text-xl xl:text-2xl mt-6 hidden md:block">
                NFTs Staked as Collateral for Loans
              </p>
            </div>
            <div className="flex flex-row gap-[11px] md:hidden">
              <button className="Arrow_Bg h-8 w-8 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <g opacity="0.4" clip-path="url(#clip0_56_1496)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.60258 6.0629C4.46583 6.19983 4.38901 6.38543 4.38901 6.57895C4.38901 6.77248 4.46583 6.95808 4.60258 7.09501L7.35616 9.84956C7.49316 9.98649 7.67894 10.0634 7.87263 10.0633C8.06632 10.0633 8.25207 9.98631 8.389 9.84932C8.52593 9.71232 8.60283 9.52654 8.60278 9.33285C8.60274 9.13915 8.52575 8.95341 8.38875 8.81648L6.15123 6.57895L8.38875 4.34143C8.52184 4.20376 8.59554 4.01933 8.59397 3.82786C8.59239 3.63638 8.51568 3.45319 8.38034 3.31772C8.24501 3.18226 8.06189 3.10538 7.87041 3.10362C7.67894 3.10187 7.49444 3.17539 7.35665 3.30835L4.6021 6.06242L4.60258 6.0629Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56_1496">
                      <rect
                        width="11.6842"
                        height="11.6842"
                        fill="white"
                        transform="matrix(-1 0 0 1 12.4211 0.736847)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="Arrow_Bg rotate-180 h-8 w-8 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <g opacity="0.4" clip-path="url(#clip0_56_1496)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.60258 6.0629C4.46583 6.19983 4.38901 6.38543 4.38901 6.57895C4.38901 6.77248 4.46583 6.95808 4.60258 7.09501L7.35616 9.84956C7.49316 9.98649 7.67894 10.0634 7.87263 10.0633C8.06632 10.0633 8.25207 9.98631 8.389 9.84932C8.52593 9.71232 8.60283 9.52654 8.60278 9.33285C8.60274 9.13915 8.52575 8.95341 8.38875 8.81648L6.15123 6.57895L8.38875 4.34143C8.52184 4.20376 8.59554 4.01933 8.59397 3.82786C8.59239 3.63638 8.51568 3.45319 8.38034 3.31772C8.24501 3.18226 8.06189 3.10538 7.87041 3.10362C7.67894 3.10187 7.49444 3.17539 7.35665 3.30835L4.6021 6.06242L4.60258 6.0629Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56_1496">
                      <rect
                        width="11.6842"
                        height="11.6842"
                        fill="white"
                        transform="matrix(-1 0 0 1 12.4211 0.736847)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          {/* _______ card __________ */}
          <div className="relative mt-6 md:mt-14 lg:mt-16 xl:mt-20">
            <LoanedCard />
          </div>

          {/* _________ pagination button __________ */}
          <PaginationBtn />
        </div>
      </div>
    </>
  );
};

export default Loaned;
