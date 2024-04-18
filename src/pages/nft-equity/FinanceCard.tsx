import { Fragment, useState } from "react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import eth from "../../../public/img/eth.svg";
import heart from "../../../public/img/heart.svg";
import ring from "../../../public/img/ring.svg";
import close1 from "../../../public/img/close1.svg";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import { ethers } from 'ethers';

import WETHGateway from "../../contracts/wethGateway.json";
import ERC721 from "../../contracts/erc721.json";
import DebtToken from "../../contracts/debtToken.json";
import { useWriteContract, useAccount, useWalletClient } from "wagmi";


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

const RESERVE_QUERY = `
{
  reserveDataUpdateds(
    where:{
      asset:"${process.env.NEXT_PUBLIC_WETH_ADDRESS}"
    }
    orderBy: blockTimestamp, 
    orderDirection: desc, 
    first: 1) {
      id
      asset
      liquidityRates
      variableBorrowRate
      liquidityIndices
      variableBorrowIndex
      blockNumber
      blockTimestamp
      transactionHash
  }
}
`;


const FinanceCard = ({ nftData, signer}: { nftData: any, signer: any }) => {

  useEffect(() => {
    console.log("Apollo Client:", ApolloClient);
    console.log("Dialog:", Dialog);
    console.log("Transition:", Transition);
    console.log("Image:", Image);
    // console.log("Ethers Provider:", new ethers.BrowserProvider(ethereum));
  }, []);

  const RESERVE_SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;
  const WETHGATEWAY_ADDRESS = process.env.NEXT_PUBLIC_WETHGATEWAY_ADDRESS as string;
  const DEBT_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_DEBT_TOKEN_ADDRESS as string;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loanImageUrl, setLoanImageUrl] = useState("");
  const [loanNftName, setLoanNftName] = useState("");
  const [loanNftAsset, setLoanNftAsset] = useState("");
  const [borrowAmountInput, setBorrowAmountInput] = useState("");
  const [loanNftId, setLoanNftId] = useState("");
  const [selectedNftFloorPrice, setSelectedNftFloorPrice] = useState(0);
  const [borrowRate, setBorrowRate] = useState<any>();

  // Transaction state management
  const [isApproving, setIsApproving] = useState(false);
  const [isBorrowing, setIsBorrowing] = useState(false);

  const reserveApolloClient = new ApolloClient({
    uri: RESERVE_SUBGRAPH_URL,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    // console.log(depositQuery);
    // query from subgraph
    reserveApolloClient
      .query({
        query: gql(RESERVE_QUERY),
      })
      .then((data) => {
        console.log("Data: ", data.data.reserveDataUpdateds[0]);
        console.log("Data: ", data.data.reserveDataUpdateds[0].variableBorrowRate);
        //convert from wei to eth
        // Assume `bigNumberAmount` is a BigNumber or string that represents the value in the smallest unit with 27 decimals
        const borrowRateETH = (data.data.reserveDataUpdateds[0].variableBorrowRate / 10**25).toFixed(4);
        console.log("borrowRateETH: ", borrowRateETH);
        setBorrowRate(borrowRateETH);
        // setLiquidityRates(data.data.reserveDataUpdateds[0].variableBorrowRate);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);


  const getFloorPrice = async (collectionSlug: string) => {
    try {
      const response = await fetch(`/api/getNftFloorPrice?collectionSlug=${encodeURIComponent(collectionSlug)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch NFT stats');
      }
      const data = await response.json();
      console.log('NFT stats', data);
      console.log('nft floor price', data?.total?.floor_price);
      setSelectedNftFloorPrice(data?.total?.floor_price);
    } catch (error) {
      console.log('Failed to fetch NFT stats', error);
    }
  }

  const openModal = (item: any) => {
    console.log("item: ", item);
    setIsModalOpen(true);
    setLoanImageUrl(item.metadata && JSON.parse(item.metadata)?.image);
    setLoanNftName(item.name);
    setLoanNftAsset(item.token_address);
    setLoanNftId(item.token_id);
    const collectionSlug = getCollectionSlug(item.token_address);
    getFloorPrice(collectionSlug);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBorrowAmountChange = (event: any) => {
    console.log("borrow amount: ", event.target.value);
    setBorrowAmountInput(event.target.value);
  }


  const callBorrowETH = async () => {
    console.log('borrowing ETH');
   
    try {
      const { ethers } = require("ethers")
      const { ethereum } = window as any;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      
      const amountToBorrow = ethers.parseUnits(borrowAmountInput.toString(), 18);

      const debtTokenContract = new ethers.Contract(DEBT_TOKEN_ADDRESS, DebtToken.abi, signer);
      const erc721Contract = new ethers.Contract(loanNftAsset, ERC721.abi, signer);
 
      //detect borrow allowance
      const borrowAllowance = await debtTokenContract.borrowAllowance(signer.address, WETHGATEWAY_ADDRESS);
      console.log(typeof(borrowAllowance), borrowAllowance.toString());
      console.log(typeof(amountToBorrow), amountToBorrow);

      if( borrowAllowance < amountToBorrow ){
        console.log("start approving ERC721");
        const approveDelegationTx = await debtTokenContract.approveDelegation(WETHGATEWAY_ADDRESS, amountToBorrow);
        if (approveDelegationTx && approveDelegationTx.hash) {
          setIsApproving(true);
        }

        const approveDelegationReceipt = await approveDelegationTx.wait();
        if (approveDelegationReceipt.status === 0) {
          console.log("Approval failed");
   
          setIsApproving(false);
          alert("Approval failed");
          return;
        } else {
          setIsApproving(false);
        }
      }else{
        console.log("stoppppp approving ERC721");
      }
      setIsApproving(false);

      const approvedAddress = await erc721Contract.getApproved(parseInt(loanNftId));
      if(approvedAddress !== WETHGATEWAY_ADDRESS) {
        console.log("start approving ERC721");
        const approveTx = await erc721Contract.approve(WETHGATEWAY_ADDRESS, parseInt(loanNftId));
        if (approveTx && approveTx.hash) {
          setIsApproving(true);
        }

        const approveReceipt = await approveTx.wait();
        if (approveReceipt.status === 0) {
          console.log("Approval failed");
   
          setIsApproving(false);
          alert("Approval failed");
          return;
        } else {
          setIsApproving(false);
        }

        console.log("Approval successfully");

      }
      console.log("isApproved: ", approvedAddress);
      const wethGatewaycontract = new ethers.Contract(WETHGATEWAY_ADDRESS, WETHGateway.abi, signer);

    
      const borrowTx = await wethGatewaycontract.borrowETH(amountToBorrow, loanNftAsset, parseInt(loanNftId), signer.address, 0);
      if (borrowTx && borrowTx.hash) {
        setIsBorrowing(true);
      }

      const borrowReceipt = await borrowTx.wait();
      if (borrowReceipt.status === 0) {
        console.log("Borrow failed");
        alert("Borrow failed");
        return;
      }else{
        setIsModalOpen(false);
        alert("Borrow successful");
      }
      setIsBorrowing(false);


    } catch (error) {
      console.log('Failed to borrow ETH', error);
    }
  };



  return (
    <>
      <div className="grid gap-[19px] md:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {Array.isArray(nftData) && nftData.map((item, index) => (
          <div className="Finance_Card_BG" key={index}>
            <div className="w-full flex flex-col p-[10px] md:p-5">
              <div  style={{ width: '247px', height: '234px', overflow: 'hidden' }} className="h-full w-full xl:max-w-[247px] rounded Finance_img_shadow overflow-hidden">
                <Image
                  src={(item.metadata && JSON.parse(item.metadata)?.image) || ""}
                  alt="robo"
                  height={234}
                  width={247}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-row justify-between items-center mt-[13px]">
                <h3 className="text-xs md:text-sm font-bold text-white">
                  {item.name} 
                  <span className="ml-[10px]">#{item.token_id}</span>
                </h3>
                <Link href="/">
                  <div className="w-fit relative md:mr-2">
                    <Image
                      src={ring}
                      alt="icons"
                      height={24}
                      width={24}
                      className="w-[22px] md:w-[32px] flex items-center"
                    />
                    <Image
                      src={heart}
                      alt="heart"
                      width={12}
                      height={12}
                      className="w-[10px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col border-[0.318px] border-[rgba(71,119,230,0.31)] rounded-[10px] overflow-hidden mt-4">
                {/* <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.31)]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Floor Price
                    </p>
                    <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                      <span>
                        <Image
                          src={eth}
                          alt="eth"
                          className="w-[9px] md:w-3 h-4 md:h-[18px] mr-1"
                        />
                      </span>
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Listing price
                    </p>
                    <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                      <span>
                        <Image
                          src={eth}
                          alt="eth"
                          className="w-[9px] md:w-3 h-4 md:h-[18px] mr-1"
                        />
                      </span>
                      {item.listingprice}
                    </p>
                  </div>
                </div> */}
              </div>
              <button className="FinanceCard_Btn" onClick={() => openModal(item)}>
                  Get Loan
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* ________ modal _________ */}
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
                <div className="">
                  <div className="container">
                    <div className="Detailed_Bg relative w-full max-w-[651px]">
                      <h1 className="text-white text-[22px] md:text-2xl xl:text-[27px] font-bold text-center">
                        Get the Loan
                      </h1>
                      {/* <p className="mt-[10px] text-white text-sm md:text-lg font-medium text-center">
                        Finance the NFT of Your Dreams
                      </p> */}
                      <div
                        className="absolute top-5 right-[30px] text-white cursor-pointer"
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
                      <div className="flex gap-4 mt-[54px]">
                        <div className="w-full">
                          <div style={{ width: '247px', height: '234px', overflow: 'hidden' }} className="w-full max-w-[261px] rounded-[3px]">
                            <Image
                              src={loanImageUrl}
                              alt="bgImg"
                              className="w-full h-full object-cover rounded-[3px]"
                              width={105}
                              height={105}
                            />
                          </div>
                          <div className="flex md:hidden justify-between mt-[9px]">
                            <h2 className="text-[10px] lg:text-xl text-white font-bold">
                              sss
                            </h2>
                            <p className="text-[10px] lg:text-xl text-white font-bold">
                              #3922
                            </p>
                          </div>
                          <div className="flex md:hidden justify-between mt-[6px]">
                            <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                              <Link href="/">
                                <span>
                                  <Image
                                    src={eth}
                                    alt="eth"
                                    className="w-[8px] h-[8px] mr-1"
                                  />
                                </span>
                              </Link>
                              0.0025487 ETH
                            </p>
                            <div className="w-fit relative md:mr-2">
                              <Image
                                src={ring}
                                alt="icons"
                                height={28}
                                width={28}
                                className="w-[21px] md:w-[28px] flex items-center"
                              />
                              <Link href="/">
                                <Image
                                  src={heart}
                                  alt="heart"
                                  width={12}
                                  height={12}
                                  className="w-[11px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* right part */}
                        <div className="relative w-full">
                          <div className="hidden md:flex justify-between mb-3">
                            <h2 className="text-[10px] lg:text-xl text-white font-bold">
                              {loanNftName}
                            </h2>
                            <p className="text-[10px] lg:text-xl text-white font-bold">
                              #{loanNftId}
                            </p>
                          </div>
                          <div className="hidden md:flex justify-between mb-[19px]">
                            {/* <p className="Text_gradient font-bold flex items-center justify-center text-[8px] md:text-sm lg:text-[17px]">
                              <span>
                                <Image
                                  src={eth}
                                  alt="eth"
                                  className="w-3 h-[18px] mr-1"
                                />
                              </span>
                              0.0025487 ETH
                            </p> */}
                            {/* <div className="w-fit relative md:mr-2">
                              <Image
                                src={ring}
                                alt="icons"
                                height={28}
                                width={28}
                                className="w-[21px] md:w-[28px] flex items-center"
                              />
                              <Link href="/">
                                <Image
                                  src={heart}
                                  alt="heart"
                                  width={12}
                                  height={12}
                                  className="w-[11px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                                />
                              </Link>
                            </div> */}
                          </div>
                          <div className="flex flex-col border-[0.4px] border-[rgba(71,119,230,0.28)] rounded-[10px] overflow-hidden">
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
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
                                  {selectedNftFloorPrice} ETH
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Borrow Rate
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  {borrowRate}%
                                </p>
                              </div>
                            </div>
                            {/* <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Current Auction Price
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  N/A
                                </p>
                              </div>
                            </div> */}
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Asset Class
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  5 star
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Max Borrow
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                 {  0.5 * selectedNftFloorPrice} ETH
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* inputs */}
                      
                      <div className="mt-[47px]">
                        <div className="grid grid-cols-1 gap-4">
                  
                          <div>
                            <p className="text-[10px] md:text-sm xl:text-base font-medium text-white mb-2">
                                  Borrow Amount
                            </p>
                        
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              inputeqweqw
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Amount:
                              </p>
                              <input
                                style={{ caretColor: 'white' }}
                                type="text"
                                className="text-base font-semibold Text_gradient text-start md:text-end w-full outline-none focus:outline-none border-none md:pl-[10px]"
                                placeholder="0.0"
                                value={borrowAmountInput}
                                onChange={handleBorrowAmountChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* button */}
                      <div className="mt-10 md:mt-[54px]">
                        <div className="flex">
                          <div className="form-group flex align-middle items-start md:items-center mb-4">
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-5 h-5 Checkbox mr-3"
                            />
                            {/* <label
                              htmlFor="default-checkbox"
                              className="block text-left md:text-center text-xs md:text-base font-medium text-white"
                            >
                              yes I am ready to get my NFT and agree to
                              MetaFire&nbsp;
                             
                                <span className="link_bg underline w-full font-medium border-b-[1px] border-[#8E54E9]">
                                  terms and conditions
                                </span>
                            
                            </label> */}
                          </div>
                        </div>
                        <button
                          onClick={() => callBorrowETH()}
                          className="Nft_Bg capitalize"
                          disabled={isApproving || isBorrowing}
                        >
                          {isApproving ? 'Approving...' : isBorrowing ? 'Borrowing...' : 'Borrow'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FinanceCard;