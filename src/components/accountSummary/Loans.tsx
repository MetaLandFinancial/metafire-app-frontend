import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import filerBTn from "@/../public/assets/filter_btn.svg";
import EthIcon from "@/../public/assets/etm_icon.svg";
import BorderLine from "@/../public/assets/border_line.svg";
import Star from "@/../public/assets/star.png";
import ToolTip from "@/../public/assets/tooltip.svg";
import { loansData } from "@/utils/data";
import ModalImg from "@/../public/assets/modal_img.png";
import FavouriteImgOne from "../../../public/assets/heartSvg.svg";
import Link from "next/link";
import close1 from "@/../public/img/close1.svg";
import Image from "next/image";
const Loans = () => {
  const [repayModal, setRepayModal] = useState(false);
  const closeModal = () => {
    setRepayModal(false);
  };
  return (
    <section
      className={
        "section_img pt-[50px] md:pt-[94px] pb-[100px] md:pb-[250px] bg-no-repeat bg-cover bg-center"
      }
    >
      <div
        className={`main_container max-w-[1300px] ${
          repayModal && "overflow-y-hidden -z-20"
        }`}
      >
        <div className="my_collection_wrapper">
          <div className="section_title pb-10 flex items-center justify-between">
            <h2 className={"text-3xl md:text-5xl font-medium text-white"}>
              Total :
              <span
                className={
                  "bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text ml-2"
                }
              >
                2 Loans
              </span>
            </h2>
            <button>
              <img src={filerBTn.src} alt="filter-btn" />
            </button>
          </div>
          <div className="card_wrapper">
            {loansData.map((loansDataItems, index) => (
              <div
                className="card_item bg-gradient-to-t from-rgba-blue-500 to-rgba-purple-600 shadow-button border border-gray-600 rounded-[15px] p-3 flex gap-5 md:gap-[113px] mb-4"
                key={index}
              >
                <div className="card_left md:flex gap-4 md:gap-8">
                  <div className="card_img md:flex-shrink-0">
                    <img
                      className={"md:flex-shrink-0"}
                      src={loansDataItems.loanCarImg.src}
                      alt="card-img"
                    />
                  </div>

                  <div className="card_title_wrapper md:flex md:flex-col md:justify-between">
                    <div className="card_section_title flex md:flex-col justify-between py-5">
                      <h2
                        className={
                          "text-[10px] md:text-2xl font-bold text-white"
                        }
                      >
                        {loansDataItems.loanTitle}
                      </h2>
                      <span
                        className={
                          "text-[10px] md:text-2xl font-bold text-white"
                        }
                      >
                        {loansDataItems.loanNbr}
                      </span>
                    </div>

                    <div className="repay_btn">
                      <p
                        className={
                          "text-[10px] md:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2 pb-5"
                        }
                      >
                        <img src={EthIcon.src} alt="icon" />
                        {loansDataItems.ethPoints} ETH
                      </p>

                      <button
                        onClick={() => setRepayModal(!repayModal)}
                        className={
                          "w-[166px] py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[7px] text-white"
                        }
                      >
                        Repay
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card_right md:flex md:flex-col md:justify-between flex-grow">
                  <div className="card_top md:flex">
                    <div className="card_left w-full flex md:flex-col justify-between pb-5 md:pb-0">
                      <h2
                        className={
                          "text-[10px] md:text-base font-medium text-white pb-0 md:pb-3"
                        }
                      >
                        Balance
                      </h2>
                      <p
                        className={
                          "text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                        }
                      >
                        <img src={EthIcon.src} alt="icon" />
                        0.0025487 ETH
                      </p>
                    </div>
                    <div className="card_middle w-full flex md:flex-col justify-between pb-5 md:pb-0">
                      <h2
                        className={
                          "text-[10px] md:text-base font-medium text-white pb-3"
                        }
                      >
                        Borrow rate
                      </h2>
                      <p
                        className={
                          "text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                        }
                      >
                        22.7%
                      </p>
                    </div>
                    <div className="card_right w-full flex items-center md:flex-col justify-between pb-5 md:pb-0">
                      <h2
                        className={
                          "text-[10px] md:text-base font-medium text-white pb-0 md:pb-3"
                        }
                      >
                        Loan status
                      </h2>

                      {loansDataItems.loanActiveStatus === "Active" && (
                        <div
                          className={
                            "text-[10px] md:text-sm font-medium bg-[#54e96c26] py-[5px] px-[13px] inline-flex items-center gap-4 rounded-[7px] text-[#54E96C]"
                          }
                        >
                          <div
                            className={"w-2 h-2 rounded-full bg-[#54E96C]"}
                          ></div>
                          {loansDataItems.loanActiveStatus}
                        </div>
                      )}

                      {loansDataItems.loanActiveStatus === "Inactive" && (
                        <div
                          className={
                            "text-[10px] md:text-sm font-medium bg-[#ffffff36] py-[5px] px-[13px] inline-flex items-center gap-4 rounded-[7px] text-[#ffffff78]"
                          }
                        >
                          <div
                            className={"w-2 h-2 rounded-full bg-[#ffffff78]"}
                          ></div>
                          {loansDataItems.loanActiveStatus}
                        </div>
                      )}

                      {loansDataItems.loanActiveStatus === "Paused" && (
                        <div
                          className={
                            "text-[10px] md:text-sm font-medium bg-[#e6404052] py-[5px] px-[13px] inline-flex items-center gap-4 rounded-[7px] text-[#E64040]"
                          }
                        >
                          <div
                            className={"w-2 h-2 rounded-full bg-[#E64040]"}
                          ></div>
                          {loansDataItems.loanActiveStatus}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="boder_line hidden md:block">
                    <img src={BorderLine.src} alt="border-line" />
                  </div>

                  <div className="card_bottom md:flex ">
                    <div className="card_left w-full flex md:flex-col justify-between pb-5 md:pb-0">
                      <h2
                        className={
                          "text-[10px] md:text-base font-medium text-white pb-0 md:pb-3 flex items-center gap-2"
                        }
                      >
                        Asset class <img src={ToolTip.src} alt="tooltip" />
                      </h2>
                      <p
                        className={
                          "text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                        }
                      >
                        <img src={Star.src} alt="icon" />
                        {loansDataItems.assetClass}
                      </p>
                    </div>

                    <div className="card_middle w-full flex md:flex-col justify-between pb-5 md:pb-0">
                      <h2
                        className={
                          "text-[10px] md:text-base font-medium text-white pb-0 md:pb-3"
                        }
                      >
                        Starts on
                      </h2>

                      <p
                        className={
                          "text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                        }
                      >
                        {loansDataItems.startOn}
                      </p>
                    </div>

                    <div className="card_right w-full flex items-center md:flex-col justify-between pb-5 md:pb-0">
                      <h2
                        className={
                          "text-[10px] md:text-base font-medium text-white pb-0 md:pb-3"
                        }
                      >
                        Loan health
                      </h2>

                      <div className={"ml-8"}>
                        <img src={loansDataItems.loanActiveHealth.src} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </div>

      {repayModal && (
        <div
          className="modal fixed top-0 left-0 w-full h-full bg-[#000000bf] z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg border border-solid border-blue-400 bg-gray-900 shadow-inner max-w-[650px] w-full"
            }
          >
            <div
              className="absolute top-10 max-[350px]:right-[20px] right-[35px] md:right-10 text-white cursor-pointer"
              onClick={closeModal}
            >
              <Image
                src={close1}
                alt="close"
                className="text-white"
                width={20}
                height={20}
              />
            </div>
            <div className="modal_title pb-[54px] text-center">
              <h2 className={"text-[22px] lg:text-[27px] font-bold text-white"}>
                REPAY NFT
              </h2>
              <p className={"text-[14px] lg:text-lg font-medium text-white"}>
                Finance the NFT of Your Dreams
              </p>
            </div>

            <div className="modal_info flex gap-4">
              <div className="modal_info_left lg:flex-shrink-0 pb-5">
                <img src={ModalImg.src} alt="modal_img" />
              </div>
              <div className="modal_info_right w-full">
                <h2
                  className={
                    "font-bold text-white text-[10px] lg:text-[22px] flex justify-between pb-2"
                  }
                >
                  <span>MetaFire NFT</span>
                  <span>#39</span>
                </h2>

                <div
                  className={"flex items-center justify-between w-full pb-2"}
                >
                  <p
                    className={
                      "text-[10px] lg:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                    }
                  >
                    <img src={EthIcon.src} alt="icon" />
                    0.0025487 ETH
                  </p>

                  <button className="border border-[#4776E6] h-[37px] w-[37px] flex justify-center items-center rounded-full">
                    <img src={FavouriteImgOne.src} alt="favourite-img" />
                  </button>
                </div>

                <div className="repay_info w-full border border-[#4776e65e] rounded-2xl">
                  <p
                    className={
                      "flex justify-between border-b border-b-[#4776e65e] px-[13px] py-[10px]"
                    }
                  >
                    <span
                      className={
                        "text-[10px] lg:text-base font-medium text-white"
                      }
                    >
                      Floor Price
                    </span>
                    <span
                      className={
                        "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                      }
                    >
                      <img src={EthIcon.src} alt="icon" />
                      1.2 ETH
                    </span>
                  </p>
                  <p
                    className={
                      "flex justify-between border-b border-b-[#4776e65e] px-[13px] py-[10px]"
                    }
                  >
                    <span
                      className={
                        "text-[10px] lg:text-base font-medium text-white"
                      }
                    >
                      Liquidation Factor
                    </span>
                    <span
                      className={
                        "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                      }
                    >
                      100%
                    </span>
                  </p>
                  <p
                    className={
                      "flex justify-between border-b border-b-[#4776e65e] px-[13px] py-[10px]"
                    }
                  >
                    <span
                      className={
                        "text-[10px] lg:text-base font-medium text-white"
                      }
                    >
                      Current Auction Price
                    </span>
                    <span
                      className={
                        "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                      }
                    >
                      N/A
                    </span>
                  </p>
                  <p
                    className={
                      "flex justify-between border-b border-b-[#4776e65e] px-[13px] py-[10px]"
                    }
                  >
                    <span
                      className={
                        "text-[10px] lg:text-base font-medium text-white"
                      }
                    >
                      Bidder
                    </span>
                    <span
                      className={
                        "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                      }
                    >
                      N/A
                    </span>
                  </p>
                  <p className={"flex justify-between px-[13px] py-[10px]"}>
                    <span
                      className={
                        "text-[10px] lg:text-base font-medium text-white"
                      }
                    >
                      Auction End
                    </span>
                    <span
                      className={
                        "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                      }
                    >
                      23 Feb, 2024
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="modal_amount py-10">
              <p
                className={
                  "rounded-2xl border border-solid border-blue-400 bg-gray-900 shadow-inner p-5 w-full flex justify-between"
                }
              >
                <span
                  className={"text-[10px] lg:text-base font-medium text-white"}
                >
                  Amount
                </span>
                <span
                  className={
                    "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                  }
                >
                  0.05
                </span>
              </p>
            </div>

            <label
              className={
                "text-[10px] lg:text-sm font-medium text-white flex pb-6"
              }
            >
              <div className={"flex gap-2"}>
                <input type="checkbox" />
                <p>
                  yes I am ready to get my NFT and agree to MetaFire{" "}
                  <Link
                    href={"#"}
                    className={
                      "bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                    }
                  >
                    {" "}
                    terms and conditions{" "}
                  </Link>
                </p>
              </div>
            </label>

            <button
              className={
                "bg-gradient-to-r from-blue-500 to-purple-600 w-full py-[18px] rounded-[4px] text-white"
              }
            >
              Repay
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Loans;
