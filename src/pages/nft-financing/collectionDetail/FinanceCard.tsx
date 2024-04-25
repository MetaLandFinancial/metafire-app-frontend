import { Financecard } from "@/components/constant/Financecard";
import { Fragment, useState } from "react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import eth from "../../../../public/img/eth.svg";
import heart from "../../../../public/img/heart.svg";
import ring from "../../../../public/img/ring.svg";
import close1 from "../../../../public/img/close1.svg";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import whitelistedNFTList from "@/components/constant/whitelistedNFTList.json";
// import {ethers, AbiCoder} from "ethers";
const { ethers, AbiCoder, Signature } = require("ethers");

import WETH from "../../../contracts/weth.json";
import DebtToken from "../../../contracts/debtToken.json";
import BNPL from "../../../contracts/BNPL.json";
import { useWriteContract, useAccount, useWalletClient } from "wagmi";

type CollectionSlugsType = {
  [key: string]: string;
};

// Use the defined type for your object
const collectionImageUrls: CollectionSlugsType = {

  "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?w=500&auto=format",
  "0xbd3531da5cf5857e7cfaa92426877b022e612cf8": "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?w=500&auto=format",
  "0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb": "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?w=500&auto=format",
  "0xe785e82358879f061bc3dcac6f0444462d4b5330": "https://i.seadn.io/gae/hP4JJhiY5yXu1mCvNycTke2O_xbtgIFfkLTjfT7C9TNKinkGpP2COikt7cwn0xqzoATRNC21wsiwy_Fe-MQ3PPTgRjkbbCfJf__L?w=500&auto=format",
  "0x23581767a106ae21c074b2276d25e5c3e136a68b": "https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?w=500&auto=format",
  "0x60e4d786628fea6478f785a6d7e704777c86a7c6": "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?w=500&auto=format",
  "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e": "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?w=500&auto=format",
  "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb": "https://i.seadn.io/gae/iIo0vm6cqiOaUwFI58-Rz61Watioc0GZ_SdhdcFJqgdYlQJNjjdzJ7-vodNEDJMG0ZJ-dE6yELuQfAJ6FzjpqtovU0bd3pLp1F1grg?w=500&auto=format",
  "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6": "https://i.seadn.io/gae/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo?w=500&auto=format",
  "0x1a92f7381b9f03921564a437210bb9396471050c": "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?w=500&auto=format",
  "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b": "https://i.seadn.io/gae/xOw5gYzZzkm83sL8ObO_wv-adMrsw5w9TkPjrJLT3c2dbGIS8DR_Qm_hsth7esBM2l3q_FOmlqzO0dR4BFquFEX5wSx-Suc82669?w=500&auto=format",
  "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949": "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?w=500&auto=format",
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format",
  "0xed5af388653567af2f388e6224dc7c4b3241c544": "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?w=500&auto=format"
};

function getCollectionImageUrl(address: string): string {
  if (typeof address !== 'string') {
    console.error("Invalid address provided:", address);
    return ""; // Return a default value or handle the error as appropriate
  }
  return collectionImageUrls[address.toLowerCase()];
}


const FinanceCard = ({ collectionAddress, nftData }: { collectionAddress:string, nftData: any }) => {

  const WETH_ADDRESS = process.env.NEXT_PUBLIC_WETH_ADDRESS as string;
  const DEBT_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_DEBT_TOKEN_ADDRESS as string;
  const BNPL_ADDRESS = process.env.NEXT_PUBLIC_BNPL_ADDRESS as string;
  const SEAPORT_ADAPTER_ADDRESS = process.env.NEXT_PUBLIC_SEAPORT_ADAPTER_ADDRESS as string;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loanImageUrl, setLoanImageUrl] = useState("");
  const [loanNftName, setLoanNftName] = useState("");
  const [loanNftAsset, setLoanNftAsset] = useState("");
  const [loanNftId, setLoanNftId] = useState("");
  const [loanNftPrice, setLoanNftPrice] = useState("");
  const [selectedNftFloorPrice, setSelectedNftFloorPrice] = useState(0);
  const [selectedNft, setSelectedNft] = useState<any>(null);

  const [borrowAmountInput, setBorrowAmountInput] = useState("");

  const [bytesdata, setbytesdata] = useState("");
  const [signature, setsignature] = useState("");

  // Transaction state management
  const [isApproving, setIsApproving] = useState(false);
  const [isBuying, setIsBuying] = useState(false);


  useEffect(() => {
    getFloorPrice('boredapeyachtclub');
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

  const handleBorrowAmountChange = (event: any) => {
    console.log("borrow amount: ", event.target.value);
    setBorrowAmountInput(event.target.value);
  }



  const openModal = (item: any) => {
    console.log("item", item);
    console.log("item", item.protocol_data.parameters.offer[0].token);
    console.log("item", item.protocol_data.parameters.offer[0].identifierOrCriteria);
    
    setIsModalOpen(true);
    setSelectedNft(item);
    
    setLoanNftAsset(item.protocol_data.parameters.offer[0].token);
    setLoanNftId(item.protocol_data.parameters.offer[0].identifierOrCriteria);
    setLoanNftPrice(item.price.current.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  useEffect(() => {
    const initializeEthereum = async () => {
      const { ethereum } = window as any;
      if (!ethereum) {
        console.error("Ethereum object doesn't exist!");
        alert("Please install MetaMask.");
        return;
      }
    
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        // setSigner(signer);
      } catch (error) {
        console.error("Error initializing ethereum:", error);
      }
    };

    initializeEthereum();
  }, []);


  const callBNPL = async () => {
    console.log('Buy Now Pay Later');
    try {
      
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        
    
        console.log("signner", signer.address);

        const userAddress = signer.address;

        const nftTokenId = loanNftId;
        const bnplResponse = await fetch(`/api/getFulfillParameters?nftAsset=${loanNftAsset}&nftTokenId=${nftTokenId}&userAddress=${userAddress}`);

        const bnplrest = await bnplResponse.json(); // Parse JSON d
        console.log('bnplResponse', bnplrest);
        const currentPrice = bnplrest.currentPrice;
        const parameters = bnplrest.parameters;
        console.log('currentPrice', currentPrice);
        console.log('parameters', parameters);

        const bnplres = {
          parameters: bnplrest.parameters,
          currentPrice: bnplrest.currentPrice
        }
        
        const encodeData = (bnplres: any) => {
          const abi_encode_types =
            "(address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes)";
          const fees = bnplres?.parameters?.additionalRecipients.map((i:any) => [
            i.amount,
            i.recipient,
          ]);
          const encodedData = AbiCoder.defaultAbiCoder().encode(
            [abi_encode_types],
            [
              [
                bnplres?.parameters?.considerationToken,
                bnplres?.parameters?.considerationIdentifier,
                bnplres?.parameters?.considerationAmount,
                bnplres?.parameters?.offerer,
                bnplres?.parameters?.zone,
                bnplres?.parameters?.offerToken,
                bnplres?.parameters?.offerIdentifier,
                bnplres?.parameters?.offerAmount,
                bnplres?.parameters?.basicOrderType,
                bnplres?.parameters?.startTime,
                bnplres?.parameters?.endTime,
                bnplres?.parameters?.zoneHash,
                bnplres?.parameters?.salt,
                bnplres?.parameters?.offererConduitKey,
                bnplres?.parameters?.fulfillerConduitKey,
                bnplres?.parameters?.totalOriginalAdditionalRecipients,
                fees,
                bnplres?.parameters?.signature,
              ],
            ]
          );
          setbytesdata(encodedData);
          return encodedData;
        };

        const EXCHANGE_ADAPTER_NAME = "Seaport Downpayment Adapter";
        const EXCHANGE_ADAPTER_VERSION = "1.0";

        const createSignature = async (bnplres:any) => {
          const value = {
            ...bnplres?.parameters,
            nonce: BigInt(bnplres?.parameters?.nonce?.hex),
          };
          // const provider = new ethers.BrowserProvider(window.ethereum);
          // await provider.send("eth_requestAccounts", []);
          // const signer = provider.getSigner();
          const types = {
            Params: [
              { name: "considerationToken", type: "address" },
              { name: "considerationIdentifier", type: "uint256" },
              { name: "considerationAmount", type: "uint256" },
              { name: "offerer", type: "address" },
              { name: "zone", type: "address" },
              { name: "offerToken", type: "address" },
              { name: "offerIdentifier", type: "uint256" },
              { name: "offerAmount", type: "uint256" },
              { name: "basicOrderType", type: "uint8" },
              { name: "startTime", type: "uint256" },
              { name: "endTime", type: "uint256" },
              { name: "zoneHash", type: "bytes32" },
              { name: "salt", type: "uint256" },
              { name: "offererConduitKey", type: "bytes32" },
              { name: "fulfillerConduitKey", type: "bytes32" },
              { name: "totalOriginalAdditionalRecipients", type: "uint256" },
              { name: "additionalRecipients", type: "AdditionalRecipient[]" },
              { name: "signature", type: "bytes" },
              { name: "nonce", type: "uint256" },
            ],
            AdditionalRecipient: [
              { name: "amount", type: "uint256" },
              { name: "recipient", type: "address" },
            ],
          };

          const signature = await signer.signTypedData(
            {
              name: EXCHANGE_ADAPTER_NAME,
              version: EXCHANGE_ADAPTER_VERSION,
              chainId: 1,
              verifyingContract: SEAPORT_ADAPTER_ADDRESS,
            },
            types,
            value
          );
          const actualSign = Signature.from(signature);
          setsignature(actualSign);
          return actualSign;
        };

        // encodeDataTest();

        const encodedData = await encodeData(bnplres);
        const actualSign = await createSignature(bnplres);
        console.log('encodedData', encodedData);
        console.log('actualSign', actualSign);

        const amountToBorrow = ethers.parseUnits(borrowAmountInput.toString(), 18);
        const loanNftPriceBigNumber = ethers.parseUnits(loanNftPrice.toString(), 0);

        console.log('amountToBorrow', amountToBorrow);
        console.log('loanNftPriceBigNumber', loanNftPriceBigNumber);
        const payAmount = loanNftPriceBigNumber-amountToBorrow;
        console.log('payAmount', payAmount);

        const bnpl = new ethers.Contract(BNPL_ADDRESS, BNPL.abi, signer);
        const debtTokenContract = new ethers.Contract(DEBT_TOKEN_ADDRESS, DebtToken.abi, signer);
        const wethContract = new ethers.Contract(WETH_ADDRESS, WETH.abi, signer);

        //detect weth allowance to seaport adapter 
        const wethAllowance = await wethContract.allowance(signer.address, SEAPORT_ADAPTER_ADDRESS);
        //detect borrow allowance
        const borrowAllowance = await debtTokenContract.borrowAllowance(signer.address, SEAPORT_ADAPTER_ADDRESS);
    

        console.log("wethAllowance", wethAllowance);
        console.log("borrowAllowance", borrowAllowance);

        let isWethAllowanceEnough = false;
        let isBorrowAllowanceEnough = false;

   
        console.log("isWethAllowanceEnough", isWethAllowanceEnough);

        if( wethAllowance < loanNftPriceBigNumber){
          const approveWethTx = await wethContract.approve(SEAPORT_ADAPTER_ADDRESS, loanNftPriceBigNumber);
          console.log('less', wethAllowance);
          console.log("payAmount", payAmount);
          if (approveWethTx && approveWethTx.hash) {
            setIsApproving(true);
          }
          const approveWETHReceipt = await approveWethTx.wait();
          if (approveWETHReceipt.status === 1) {
            console.log("Approval WETH successfully");
            setIsApproving(false);
            isWethAllowanceEnough = true;
            alert("Approval successfully");
          } 
        }else{
          isWethAllowanceEnough = true;
          console.log('weth allowance is enough');
        }

        console.log("start to detect borrow allowance")
        if (borrowAllowance < amountToBorrow) {

          const approveBorrowTx = await debtTokenContract.approveDelegation(SEAPORT_ADAPTER_ADDRESS, amountToBorrow);
          if (approveBorrowTx && approveBorrowTx.hash) {
            setIsApproving(true);
          }
          const approveBorrowReceipt = await approveBorrowTx.wait();
          if (approveBorrowReceipt.status === 1) {
            console.log("Approval borrow allowance successfully");
            setIsApproving(false);
            isBorrowAllowanceEnough = true;
            alert("Approval borrow allowance successfully");
          }
        }else{
          isBorrowAllowanceEnough = true;
          console.log('borrow allowance is enough');
        }

        if(isWethAllowanceEnough && isBorrowAllowanceEnough){
          // const payAmountBigNumber = ethers.BigNumber.from(payAmount);
          const buyTx = await bnpl.buy(SEAPORT_ADAPTER_ADDRESS, amountToBorrow, encodedData, actualSign, 
            {
              value: payAmount*110/100
              // gasLimit: "2000000"
            }
          );
          if (buyTx && buyTx.hash) {
            setIsApproving(true);
          }
          const buyTxReceipt = await buyTx.wait();
          if (buyTxReceipt.status === 1) {
            console.log("Buy NFT successfully");
            setIsBuying(false);
            isWethAllowanceEnough = false;
            isBorrowAllowanceEnough = false;
            alert("Buy NFT  successfully");
            return;
          } 
        }
        setIsBuying(false);
   

      }

    } catch (error) {
      console.log("Error initializing ethereum:", error);
    }
    
  }


  return (
    <>
      <div className="grid gap-[19px] md:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {Array.isArray(nftData) && nftData.map((item, index) => (
          <div className="Finance_Card_BG" key={index}>
            <div className="w-full flex flex-col p-[10px] md:p-5">
              <div  style={{ width: '100%', height: '214px', overflow: 'hidden' }} className="h-full w-full xl:max-w-[247px] rounded Finance_img_shadow overflow-hidden">
                <img
                  // src={(item.metadata && JSON.parse(item.metadata)?.image) || ""}
                  src={getCollectionImageUrl(collectionAddress) || ""}
                  alt="robo"
                  height={234}
                  width={247}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-row justify-between items-center mt-[13px]">
                <h3 className="text-xs md:text-sm font-bold text-white">
                  
                  <span className="ml-[10px]">#{item.protocol_data.parameters.offer[0].identifierOrCriteria}</span>
                </h3>
                <Link href="/">
                  <div className="w-fit relative md:mr-2">
                    {/* <Image
                      src={ring}
                      alt="icons"
                      height={24}
                      width={24}
                      className="w-[22px] md:w-[32px] flex items-center"
                    /> */}
                    {/* <Image
                      src={heart}
                      alt="heart"
                      width={12}
                      height={12}
                      className="w-[10px] md:w-[15px] absolute top-0 bottom-0 left-0 right-0 m-auto"
                    /> */}
                  </div>
                </Link>
              </div>
              <div className="flex flex-col border-[0.318px] border-[rgba(71,119,230,0.31)] rounded-[10px] overflow-hidden mt-4">
                <div className="py-2 px-[10px] md:py-[10px] md:px-[13px] border-b-[0.4px] border-[rgba(71,119,230,0.31)]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                      Listing Price
                    </p>
                    <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                      <span>
                        <Image
                          src={eth}
                          alt="eth"
                          className="w-[9px] md:w-3 h-4 md:h-[18px] mr-1"
                        />
                      </span>
                      {(parseFloat(item.price.current.value)/10**18).toFixed(3)}
                    </p>
                  </div>
                </div>
                {/* <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]">
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
                  Buy Now Pay Later
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
                        Buy Now Pay Later
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
                            <img
                              src={getCollectionImageUrl(collectionAddress) || ""}
                              alt="robo"
               
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
                              #{selectedNft?.protocol_data.parameters.offer[0].identifierOrCriteria}
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
                                  Price
                                </p>
                                <p className="Text_gradient font-bold flex items-center justify-center text-[10px] md:text-sm xl:text-base">
                                  <span>
                                    <Image
                                      src={eth}
                                      alt="eth"
                                      className="w-3 h-3 md:h-[18px] mr-1"
                                    />
                                  </span>
                                   {(parseFloat(selectedNft?.price.current.value)/10**18).toFixed(3)} ETH
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Max Borrow
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                {(parseFloat(selectedNft?.price.current.value)/10**18*0.5).toFixed(3)} ETH
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Price
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  N/A
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Bidder
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  N/A
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-[10px] md:py-[10px] md:px-[13px]  border-b-[0.4px] border-[rgba(71,119,230,0.28)]">
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-[10px] md:text-sm xl:text-base font-medium text-white">
                                  Auction End
                                </p>
                                <p className="Text_gradient font-bold text-[10px] md:text-sm xl:text-base">
                                  23 Feb, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* inputs */}
                      <div className="mt-[47px]">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="amount"
                              className="block text-left md:hidden text-base font-medium text-white/80 mb-[13px]"
                            >
                              Enter amount:
                            </label>
                            <div className="Amount_Bg relative flex items-center">
                              <p className="text-base font-medium relative top-0 left-0 text-white/80 hidden md:flex  ">
                                Borrow Amount:
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
                              <Link href="/" className="inline">
                                <span className="link_bg underline w-full font-medium border-b-[1px] border-[#8E54E9]">
                                  terms and conditions
                                </span>
                              </Link>
                            </label> */}
                          </div>
                        </div>
                        <button onClick={callBNPL} disabled={isApproving || isBuying} className="Nft_Bg capitalize">
                            {isApproving ? 'Approving...' : isBuying ? 'Buying...' : 'Buy Now Pay Later '}
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