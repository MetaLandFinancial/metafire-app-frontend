import React, { useState, useEffect } from "react";
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
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useWriteContract, useAccount, useWalletClient } from "wagmi";
import {ethers} from "ethers";
import WETHGateway from "../../contracts/wethGateway.json";
import ChainLinkOracle from "../../contracts/chainLinkOracle.json";
import { getOracleAddress } from "@/utils/whitelistedNfts";

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
  if (typeof address !== 'string') {
    console.error("Invalid address provided:", address);
    return ""; // Return a default value or handle the error as appropriate
  }
  return collectionSlugs[address.toLowerCase()];
}

const Loans = () => {
  const WETHGATEWAY_ADDRESS = process.env.NEXT_PUBLIC_WETHGATEWAY_ADDRESS as string;
  const SUBGRAPH_URL = process.env.NEXT_PUBLIC_LOAN_SUBGRAPH_URL;
  const RESERVE_SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;
  
  const [repayModal, setRepayModal] = useState(false);

  const [floorPriceList, setFloorPriceList] = useState<any[]>([]);
  const [nftImageUrlList, setNftImageUrlList] = useState<any[]>([]);

  const [loanList, setLoanList] = useState<any[]>([]);
  const [loanInfoFromBackend, setLoanInfoFromBackend] = useState<any[]>([]);
  const [reserveData, setReserveData] = useState<any>();
  const [first, setfirst] = useState(10);
  const [skip, setskip] = useState(0);

  const { address, connector, isConnected } = useAccount();
  const [repayAmountInput, setRepayAmountInput] = useState("");
  const [isRepaying, setIsRepaying] = useState(false);


  const LOAN_QUERY = `
  {
    currentLoanInfos(
      where:{
        and:[
          {onBehalfOf:  "${address}"},
          {or:[
            {loanState: 1},
            {loanState: 2}
          ]}
        ]
      },
      first: ${first}, skip: ${skip}){
      id
      loanId
      onBehalfOf
      nftAsset
      nftTokenId
      loanAmount
      loanState
      borrowIndex
      blockTimestamp
    }
  }
  `;

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

  const apolloClient = new ApolloClient({
    uri: SUBGRAPH_URL,
    cache: new InMemoryCache(),
  });

  const reserveApolloClient = new ApolloClient({
    uri: RESERVE_SUBGRAPH_URL,
    cache: new InMemoryCache(),
  });


  const closeModal = () => {
    setRepayModal(false);
  };

  async function fetchLoanData() {
    try {
      console.log("address", address);
      // Query loan data from the subgraph
      const { data } = await apolloClient.query({
        query: gql(LOAN_QUERY),
      });
      console.log(data.currentLoanInfos);
      setLoanList([...data.currentLoanInfos]);

      // Fetch floor prices and map them back to currentLoanInfos
      // const floorPrices = await Promise.all(data.currentLoanInfos.map(async (loan: any) => {
      //   const collectionSlug = getCollectionSlug(loan.nftAsset);
      //   // console.log("collectionSlug", collectionSlug);
      //   const nftStatDataResponse = await fetch(`/api/getNftFloorPrice?collectionSlug=${encodeURIComponent(collectionSlug)}`)
      //   const nftStatData = await nftStatDataResponse.json();
      //   // console.log('nft floor price', nftStatData?.total?.floor_price);

      //   return nftStatData?.total?.floor_price || 0; // Use null or a suitable fallback for missing floor prices
      // }));

      const tokens = data.currentLoanInfos.map((loan: any) => ({
        "token_address": loan.nftAsset,
        "token_id": loan.nftTokenId
      }));
      fetchNfts(tokens);

      //get health factor from getLonaedNFTs

    
      const loanedResponse = await fetch(`/api/getLoanedNfts`, {
        method: "GET",
      });
      const loanedData = await loanedResponse.json();
      console.log(loanedData);

      setLoanInfoFromBackend(loanedData);

      // const filteredLoans = loanedData.filter(loan =>
      //   data.currentLoanInfos.some(info =>
      //     info.nftAsset === loan.nftAsset && info.nftTokenId === loan.nftTokenId
      //   )
      // );
      // console.log("filteredLoans", filteredLoans);

      //write loop for tokens list
      // console.log("find oracle address for each token");
      // const floorPrices: any[] = [];
      // console.log("tokens", tokens);
      // for (let i = 0; i < data.currentLoanInfos.length; i++) {
      //   console.log("token address", data.currentLoanInfos[i].nftAsset)
      //   const oracleAddress = getOracleAddress(tokens[i].token_address);
      //   console.log("oracleAddress", oracleAddress);
      //   if(!oracleAddress) {
      //     const chainLinkOracleContract = new ethers.Contract("0x6e3A4376B4C8D3ba49602f8542D9D3C4A87ba901", ChainLinkOracle.abi, signer);
      //     const floorPrice = await chainLinkOracleContract.latestRound();
      //     console.log("floor price", floorPrice);
      //     floorPrices.push(floorPrice);
      //   }else{
      //     floorPrices.push(0);
      //   }

      // }
      // console.log("All floor prices:", floorPrices);



      // console.log('All floor prices:', floorPrices);
      // setFloorPriceList(floorPrices);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
  }
  // async function fetchFloorPriceList() {}

  async function fetchReserveData() {
    try {
      // Query loan data from the subgraph
      const { data } = await reserveApolloClient.query({
        query: gql(RESERVE_QUERY),
      });
      console.log(data.reserveDataUpdateds[0]);
      setReserveData(data.reserveDataUpdateds[0]);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  
  }

  type Token = {
    token_address: string;
    token_id: string | number; // Depending on whether you use numeric IDs or string representations
  };

  
  async function fetchNfts(tokens: Token[]) {
    console.log("fetch multple nfts");
    const response = await fetch('/api/getMultipleNfts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokens,
        normalizeMetadata: false,
        media_items: true
      }),
    });
  
    if (!response.ok) {
      // throw new Error('Failed to fetch NFTs');
      console.log("Failed to fetch NFTs");
    }

    const data = await response.json();
    console.log(data);
    console.log(data[0]?.media?.media_collection?.medium.url);
    if (Array.isArray(data)) {
      const urls = data.map((item: any) => item.media?.media_collection?.medium.url);
      setNftImageUrlList(urls);
    } else {
      console.error('Expected an array but got:', typeof data, data);
    }
    

  
  }


  useEffect(() => {
    console.log("loans use effect")
    fetchLoanData();
    fetchReserveData();
    // fetchNfts();



  }, [address]);

  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const { data: walletClient, isError, isLoading } = useWalletClient();

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
        setSigner(signer);
      } catch (error) {
        console.error("Error initializing ethereum:", error);
      }
    };

    initializeEthereum();
  }, [address, isLoading]);

  const handleRepayAmountChange = (event: any) => {
    console.log("repay amount: ", event.target.value);
    setRepayAmountInput(event.target.value);
  }

  const callRepayETH = async (nftAsset: string, nftTokenId: string) => {
    console.log("call repay ");
    console.log("nft asset: ", nftAsset);
    console.log("nft token id: ", nftTokenId);

    try {
      
      const wethGatewaycontract = new ethers.Contract(WETHGATEWAY_ADDRESS, WETHGateway.abi, signer);

      const amountToRepay = ethers.parseUnits(repayAmountInput, 18);
      console.log("amount to repay: ");
      console.log("signer: ", signer);
      const repayTx = await wethGatewaycontract.repayETH(nftAsset, parseInt(nftTokenId), amountToRepay, {value: amountToRepay});
      if (repayTx && repayTx.hash) {
        setIsRepaying(true);
      }
      const repayReceipt = await repayTx.wait();
      if(repayReceipt.status === 0) {
        console.log("Repay failed");
        setIsRepaying(false);
        alert("Repay failed");
        return;
      }else {
        setIsRepaying(false);
      }

      console.log("repay successfully")


    } catch (error) {
      console.log("Error repay data: ", error);
    }
  }

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
                {loanList.length} Loans
              </span>
            </h2>
            <button>
              <img src={filerBTn.src} alt="filter-btn" />
            </button>
          </div>
          <div className="card_wrapper">
            {loanList?.map((loansDataItems, index) => (
              <div key={index}>
                <div
                  className="card_item bg-gradient-to-t from-rgba-blue-500 to-rgba-purple-600 shadow-button border border-gray-600 rounded-[15px] p-3 flex gap-5 md:gap-[113px] mb-4"
                  
                >
                  <div className="card_left md:flex gap-4 md:gap-8">
                    <div style={{maxHeight:"200px"}} className="card_img md:flex-shrink-0">
                      <img
                        style={{maxHeight:"200px"}}
                        className={"md:flex-shrink-0 rounded-lg"}
                        src={nftImageUrlList?.[index]}
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
                          {/* {loansDataItems.loanTitle} */}
                          {getCollectionSlug(loansDataItems?.nftAsset)}
                        </h2>
                        <span
                          className={
                            "text-[10px] md:text-2xl font-bold text-white"
                          }
                        >
                          #{loansDataItems.nftTokenId}
                        </span>
                      </div>

                      <div className="repay_btn">
                        <p
                          className={
                            "text-[10px] md:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2 pb-5"
                          }
                        >
                          <img src={EthIcon.src} alt="icon" />
                          {floorPriceList[index]?.toFixed(4)} ETH
                        </p>

                        <button
                          onClick={() => setRepayModal(!repayModal)}
                          disabled={ isRepaying} 
                          className={
                            "w-[166px] py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[7px] text-white"
                          }
                        >
                          { isRepaying ? 'Repaying...' : 'Repay'}
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
                          Loan Amount
                        </h2>
                        <p
                          className={
                            "text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                          }
                        >
                          <img src={EthIcon.src} alt="icon" />
                            {/* {ethers.formatEther(loansDataItems.loanAmount)} */}
                            {
                              ( parseFloat(ethers.formatEther(loansDataItems.loanAmount))
                                /
                                (parseFloat(loansDataItems?.borrowIndex)/(10**27))
                                *
                                parseFloat(reserveData?.variableBorrowIndex)
                                / 
                                (10**27)
                              )
                              .toFixed(4) 
                            } ETH
                            {/* {parseFloat(loansDataItems?.borrowIndex)/(10**27)} */}
                            {/* {loansDataItems.loanAmount} */}
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

                        {loansDataItems.loanState === 1 && (
                          <div
                            className={
                              "text-[10px] md:text-sm font-medium bg-[#54e96c26] py-[5px] px-[13px] inline-flex items-center gap-4 rounded-[7px] text-[#54E96C]"
                            }
                          >
                            <div
                              className={"w-2 h-2 rounded-full bg-[#54E96C]"}
                            ></div>
                            Active
                            {/* {loansDataItems.loanActiveStatus} */}
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

                        { loansDataItems.loanState === 5 && (
                          <div
                            className={
                              "text-[10px] md:text-sm font-medium bg-[#e6404052] py-[5px] px-[13px] inline-flex items-center gap-4 rounded-[7px] text-[#E64040]"
                            }
                          >
                            <div
                              className={"w-2 h-2 rounded-full bg-[#E64040]"}
                            ></div>
                            Default"\
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
                          5 <img src={Star.src} alt="icon" />
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
                          {new Date(loansDataItems.blockTimestamp * 1000).toDateString()}
                        </p>
                      </div>

                      <div className="card_right w-full flex items-center md:flex-col justify-between pb-5 md:pb-0">
                        <h2
                          className={
                            "text-[10px] md:text-base font-medium text-white pb-0 md:pb-3"
                          }
                        >
                          Liquidation Factor
                        </h2>

                        <div className={"ml-8"}>
                          {/* <img src="{loansDataItems.loanActiveHealth.src}" alt="" /> */}
                          <p
                          className={
                            "text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                          }
                        >
                          {(loanInfoFromBackend.find(loan => loan.nftAsset === loansDataItems.nftAsset && loan.nftTokenId === loansDataItems.nftTokenId)?.healthFactor*100).toFixed(2)}
                          {/* (parseFloat(reserveData?.variableBorrowIndex)*parseFloat(ethers.formatEther(loansDataItems.loanAmount))/ (10**27)).toFixed(4) */}
                          {/* {  ((parseFloat(reserveData?.variableBorrowIndex)  / 10**25 * parseFloat(ethers.formatEther(loansDataItems.loanAmount))) / floorPriceList[index] / 0.8).toFixed(4)} */}
                          %
                        </p>
                        </div>
                      </div>
                    </div>
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
                          Repay the loan
                        </p>
                      </div>

                      <div className="modal_info flex gap-4">
                        <div className="modal_info_left lg:flex-shrink-0 pb-5">
                          <img src={nftImageUrlList?.[index]} alt="modal_img" />
                        </div>
                        <div className="modal_info_right w-full">
                          <h2
                            className={
                              "font-bold text-white text-[10px] lg:text-[22px] flex justify-between pb-2"
                            }
                          >
                            <span>{getCollectionSlug(loansDataItems?.nftAsset)}</span>
                            <span>#{loansDataItems?.nftTokenId}</span>
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

                            {/* <button className="border border-[#4776E6] h-[37px] w-[37px] flex justify-center items-center rounded-full">
                              <img src={FavouriteImgOne.src} alt="favourite-img" />
                            </button> */}
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
                                Borrow Amount
                              </span>
                              <span
                                className={
                                  "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                                }
                              >
                                <img src={EthIcon.src} alt="icon" />
                                {(parseFloat(reserveData?.variableBorrowIndex)*parseFloat(ethers.formatEther(loansDataItems.loanAmount))/ (10**27)).toFixed(4) } ETH
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
                                Floor Price
                              </span>
                              <span
                                className={
                                  "text-[10px] lg:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"
                                }
                              >
                                {floorPriceList[index]?.toFixed(4)} ETH
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
                                {  ((parseFloat(reserveData?.variableBorrowIndex)  / 10**25 * parseFloat(ethers.formatEther(loansDataItems.loanAmount))) / floorPriceList[index] / 0.8).toFixed(4)}
                                %
                              </span>
                            </p>
                   
                     
                          </div>
                        </div>
                      </div>

                      <div className="relative w-full mt-5 mb-5">
                      <input
                        type="text"
                        className="input_withdraw w-full max-w-[571px]"
                        placeholder="0.00"
                        value={repayAmountInput}
                        onChange={handleRepayAmountChange}
                      />
                      <div className="absolute top-[50%] translate-y-[-50%] right-5">
                        <button onClick={() => setRepayAmountInput((parseFloat(reserveData?.variableBorrowIndex)*parseFloat(ethers.formatEther(loansDataItems.loanAmount))/ (10**27) * 1.001).toFixed(6) )} className="max_btn_bg hover:opacity-[0.7]">
                          Max
                        </button>
                      </div>
                    </div>

                      {/* <label
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
                      </label> */}

                      <button
                        onClick={() => callRepayETH(loansDataItems?.nftAsset, loansDataItems?.nftTokenId)}
                        className={
                          "bg-gradient-to-r from-blue-500 to-purple-600 w-full py-[18px] rounded-[4px] text-white mt-5"
                        }
                      >
                        Repay
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* <Pagination /> */}
        </div>
      </div>


    </section>
  );
};

export default Loans;
