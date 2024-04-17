import React from "react";
import { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import eth from "../../../../../public/img/eth.svg";
import wocolor from "../../../../../public/img/wocolor.svg";
import wicolor from "../../../../../public/img/wicolor.svg";
import SampleNextArrow from "@/pages/foreclosed-nfts/Components/SalePage/Next";
import SamplePrevArrow from "@/pages/foreclosed-nfts/Components/SalePage/Prev";
import { Dialog, Transition } from "@headlessui/react";
import close1 from "../../../../../public/img/close1.svg";
import "./withdrawmodal.css";
// import { useWriteContract, useAccount, useWalletClient } from "wagmi";
const { ethers } = require("ethers")
import WETHGateway from "../../../../contracts/wethGateway.json";

type CollectionSlugsType = {
  [key: string]: string;
};

// Use the defined type for your object
const collectionSlugs: CollectionSlugsType = {
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" : "boredapeyachtclub",
  "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "otherdeed",
  "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949" : "beanzofficial"
};

function getCollectionSlug(address: string): string {
  return collectionSlugs[address.toLowerCase()];
}

const ForeClosedSlider = ({ saleNftData, saleNftImageUrlList}: { saleNftData: any, saleNftImageUrlList: any}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
    ],
  };
  const assetdata = [
    {
      image: "/img/sale1.jpg",
      title: "MetaFire NFT",
      number: "#23",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sale2.jpg",
      title: "MetaFire NFT",
      number: "#33",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
    {
      image: "/img/sale3.jpg",
      title: "MetaFire NFT",
      number: "#39",
      eth: "0.0025487 ETH",
      floorPrice: "1.2 ETH",
      liquidationFactor: "100%",
      currentauctionprice: "N/A",
      bidder: "N/A",
      auctionEnd: "23 Feb, 2024",
    },
  ];

  const WETHGATEWAY_ADDRESS = process.env.NEXT_PUBLIC_WETHGATEWAY_ADDRESS as string;

  const [auctionAmountInput, setAuctionAmountInput] = useState('0');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNftAsset, setSelectedNftAsset] = useState('');
  const [selectedNftId, setSelectedNftId] = useState('');


  // Transaction state management
  const [isApproving, setIsApproving] = useState(false);
  const [isAuctioning, setIsAuctioning] = useState(false);
  const [txError, setTxError] = useState('');


  const openModal = (index: number, nftAsset:string, nftTokenId:string) => {
    // setSelectedIndex(index);
    setSelectedNftAsset(nftAsset);
    setSelectedNftId(nftTokenId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAuctionAmountChange = (event: any) => {
    console.log("Auction amount: ", event.target.value);
    setAuctionAmountInput(event.target.value);
  }


  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setup = async () => {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        setIsReady(true);
      }
    };

    setup();
  }, []);


  const callLiquidatingBuy = async (nftAsset:string, nftTokenId: string, loanAmount: string) => {
    console.log("Buy amount: ");
    try {
      
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const wethGatewaycontract = new ethers.Contract(WETHGATEWAY_ADDRESS, WETHGateway.abi, signer);

        const liquidatingBuyPrice = ethers.parseUnits((parseFloat(saleNftData[0].loanAmount)/10**18).toFixed(4), 18);
        const auctionTx = await wethGatewaycontract
        .liquidatingBuyETH(nftAsset, parseInt(nftTokenId), signer.address, {value: "200000000000000000"});
      }

    } catch (error) {
      console.log("Error initializing ethereum:", error);
    }
  }

  const callAuctionETH = async () => {
    console.log("Withdraw amount: ");

    try {
      
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const amountToBorrow = ethers.parseUnits(auctionAmountInput.toString(), 18);
        const wethGatewaycontract = new ethers.Contract(WETHGATEWAY_ADDRESS, WETHGateway.abi, signer);
        console.log("signer: ", signer.address)
        // console.log("amountToBorrow: ", amountToBorrow.toString());
        const auctionTx = await wethGatewaycontract
        .auctionETH(selectedNftAsset, parseInt(selectedNftId), signer.address, {value: amountToBorrow});
      }


    } catch (error) {
      console.log("Error initializing ethereum:", error);
    }
  }

  return (
    <div className="custom_slider">
      <Slider {...settings}>
        {saleNftData?.map((item:any, index: any) => (
          <div
            key={index}
            className="Sale_Card_BG w-full md:max-w-full xl:max-w-[391px] "
          >
            <div className="rounded-[15px] overflow-hidden w-full xl:max-w-[367px]">
              <img
                src={saleNftImageUrlList?.[index]}
                alt={item.title}
                className="rounded-[15px] w-full"
                width={367}
                height={229}
              />
            </div>
            <div className="p-0 md:p-3">
              <div className="mt-3 flex justify-between items-center">
                <div className="flex justify-between md:flex-start w-full md:w-fit">
                  <h1 className="text-[10px] md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                    {getCollectionSlug(item?.nftAsset)}&nbsp;
                  </h1>
                  <span className="text-[10px] md:text-base lg:text-xl xl:text-2xl font-bold text-white">
                    #{item.nftTokenId}
                  </span>
                </div>
                <div className="hidden Loned_Heart md:flex md:w-[37px] md:h-[37px] border-[1px] border-[#4777e623] rounded-full items-center justify-center cursor-pointer">
                  <Image
                    src={wocolor}
                    alt="withoutcolor"
                    width={20}
                    height={20}
                    className="svg1"
                  />
                  <Image
                    src={wicolor}
                    alt="withoutcolor"
                    width={20}
                    height={20}
                    className="svg2"
                  />
                </div>
              </div>
              <div className="mt-2 flex md:hidden justify-between items-center">
                <div className="flex items-center flex-row">
                  <Image
                    src={eth}
                    alt="eth"
                    height={10}
                    width={10}
                    className="h-[10px] w-[10px] mr-[3px]"
                  />
                  <span className="text-[10px] Text_gradient font-bold">
                    {item.eth}
                  </span>
                </div>
                <div className="Loned_Heart flex w-6 h-6 border-[1px] border-[#4777e623] rounded-full items-center justify-center cursor-pointer">
                  <Image
                    src={wocolor}
                    alt="withoutcolor"
                    width={14}
                    height={14}
                    className="svg1"
                  />
                  <Image
                    src={wicolor}
                    alt="withoutcolor"
                    width={14}
                    height={14}
                    className="svg2"
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-5 border-[1px] border-[rgba(71,119,230,0.20)] rounded-[10px] overflow-hidden">
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Floor Price
                  </p>
                  <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                    <span>
                      <Image
                        src={eth}
                        alt="eth"
                        className="w-3 h-3 md:h-[18px] mr-1"
                      />
                    </span>
                    { (parseFloat(item.loanAmount)/10**18/0.7/item.healthFactor).toFixed(4) }
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Health Factor
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {(item.healthFactor * 100).toFixed(2)}%
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Loan Amount
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {(parseFloat(item.loanAmount)/10**18).toFixed(4)}
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Current Auction Price
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {item.currentauctionprice || "N/A"}
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Bidder
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {item.bidder || "N/A"}
                  </p>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.20)] flex flex-row justify-between items-center">
                  <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                    Auction End
                  </p>
                  <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                    {item.auctionEnd || "N/A"}
                  </p>
                </div>
              </div>
              <div className="mt-[19px] md:mt-[22px] flex flex-row gap-[10px]">
                <button onClick={() => openModal(index, item?.nftAsset, item?.nftTokenId)} className="Sale_Btn_Bg">
                  <span className="Text_gradient_bg_text">Auction</span>
                </button>
                <button onClick={() => callLiquidatingBuy(item?.nftAsset, item?.nftTokenId, item.loanAmount)} className="Sale_Btn_Bg">
                  <span  className="Text_gradient_bg_text">Buy (10% Off) </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Transition show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="Withdraw_BG w-full max-w-[651px] relative">
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
                  <h1 className="text-white text-center font-bold text-[22px] md:text-xl lg:text-[27px]">
                    Auction
                  </h1>
                  <div className="mt-[54px] text-start md:mr-auto">
                    <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl font-medium mb-3 md:mb-[14px]">
                      Auction Amount
                    </p>
                    <span className="text-white text-[20.5px] md:text-2xl lg:text-3xl xl:text-[40px] font-bold">
                    {/* {isUnlocked[selectedIndex] ? parseFloat(mTokenBalance[selectedIndex]).toFixed(4): '0'}ETH */}
                    </span>
                  </div>
                  <div className="mt-[47px]">
                    <div className="flex justify-between mb-3">
                      <label
                        className="text-base font-medium text-white/80"
                        htmlFor="Enter amount"
                      >
                        Enter amount
                      </label>
                      {/* <label
                        className="text-base font-medium text-white/80"
                        htmlFor="Balance"
                      >
                        Balance: 0.107305
                      </label> */}
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="input_withdraw w-full max-w-[571px]"
                        placeholder="0.00"
                        value={auctionAmountInput}
                        onChange={handleAuctionAmountChange}
                      />
                      <div className="absolute top-[50%] translate-y-[-50%] right-5">
                        {/* <button onClick={() => setAuctionAmountInput(parseFloat(mTokenBalance[selectedIndex]).toFixed(4))} className="max_btn_bg hover:opacity-[0.7]">
                          Max
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 md:mt-[61px] form-group w-full mx-auto">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 h-5 Checkbox mr-3"
                    />
                    {/* <label
                      htmlFor="default-checkbox"
                      className="text-left text-xs md:text-base font-medium text-white p-1"
                    >
                      I agree to MetaFire&nbsp;
                      <Link href="/" className="inline">
                        <span className="link_bg underline w-full font-medium border-b-[1px] border-[#8E54E9]">
                          terms and conditions
                        </span>
                      </Link>
                    </label> */}
                  </div>
                  <button onClick={callAuctionETH} disabled={isAuctioning} className="w-full max-w-[571px] text-base text-white font-semibold rounded-[4px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] py-[14px] md:py-[18px] text-center mt-6 hover:bg-gradient-to-r hover:from-[#8E54E9] hover:to-[#4776E6] duration-1000 transition-all hover:duration-1000">
                    {isAuctioning ? 'Auctioning...' : 'Auction'}
                  </button>
                  {/* <p className="text-xs md:text-sm text-white/70 font-light mt-6 max-w-[344px] mx-auto">
                    * This is the amount you can withdraw without a fee. Once
                    the minimun Time period of the deposit has been met.
                  </p> */}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ForeClosedSlider;
