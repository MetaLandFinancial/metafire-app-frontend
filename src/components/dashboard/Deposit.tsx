import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import totalDeposit from "../../../public/assets/total_deposit.svg";
import { responsiveTableHead, tableBody, tableHead } from "@/utils/data";
import resposnvieTableImg from "@/../public/assets/bg.svg";
import resposnvieTableImg2 from "@/../public/assets/bg2.svg";
import resposnvieTableImg3 from "@/../public/assets/bg3.svg";
import Pagination from "@/components/shared/Pagination";
import { Dialog, Transition } from "@headlessui/react";
import { useWriteContract, useAccount, useWalletClient } from "wagmi";
import WETHGateway from "../../contracts/wethGateway.json";
import MToken from '../../contracts/mToken.json';
import { ethers } from "ethers";
import "./withdrawmodal.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
import close1 from "../../../public/img/close1.svg";
import Image from "next/image";
const lockDays = [0, 120, 210, 300];

const Deposit = () => {
  const WETHGATEWAY_ADDRESS = process.env.NEXT_PUBLIC_WETHGATEWAY_ADDRESS as string;
  const MTOKEN_I_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_I_ADDRESS as string;
  const MTOKEN_II_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_II_ADDRESS as string;
  const MTOKEN_III_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_III_ADDRESS as string;
  const MTOKEN_IV_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_IV_ADDRESS as string;
  const mTokenAddresses = [ MTOKEN_I_ADDRESS, MTOKEN_II_ADDRESS, MTOKEN_III_ADDRESS, MTOKEN_IV_ADDRESS];

  const SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;

  const router = useRouter();

  const [mTokenBalance, setMTokenBalance] = useState<string[]>([]);
  // in decimal
  const [depositBalances, setDepositBalances] = useState<string[]>([]);
  const [depositDates, setDepositDates] = useState<number[]>([]);
  const [unlockDates, setUnlockDates] = useState<number[]>([]);
  const [totalMTokenBalance, setTotalMTokenBalance] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState<boolean[]>([true, false, false, false]);
  const [totalAvailableWithdrawAmount, setTotalAvailableWithdrawAmount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [withdrawAmountInput, setWithdrawAmountInput] = useState('0');
  const [liquidityRates, setLiquidityRates] = React.useState([]);

  const [depositSubgraphData, setDepositSubgraphData] = useState([]);
  const { address, connector, isConnected } = useAccount();
  const { data: walletClient, isError, isLoading } = useWalletClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Transaction state management
  const [isApproving, setIsApproving] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [txError, setTxError] = useState('');


  const openModal = (index: number) => {
    console.log("index", index);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleWithdrawAmountChange = (event: any) => {
    console.log("Withdraw amount: ", event.target.value);
    setWithdrawAmountInput(event.target.value);
  }

  const callWithdrawETH = async (event: any) => {
    console.log("Withdraw amount: ");

    try {
      const { ethereum } = window as any;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();

      
      const selectedMTokenAddress = mTokenAddresses[selectedIndex];
      // Amount of Ether to withdraw
      const amountToWithdraw = ethers.parseUnits(withdrawAmountInput.toString(), 18);
      console.log("selectedMTokenAddress: ", selectedMTokenAddress);
      const mTokenContract = new ethers.Contract(selectedMTokenAddress, MToken.abi, signer);
      const wethGatewaycontract = new ethers.Contract(WETHGATEWAY_ADDRESS, WETHGateway.abi, signer);

      // Check allowance
      const allowance = await mTokenContract.allowance(signer.address, WETHGATEWAY_ADDRESS);
      console.log("Allowance: ", allowance);
      if (allowance < amountToWithdraw) {
        console.log("Approving...");
        const approveTx = await mTokenContract.approve(WETHGATEWAY_ADDRESS, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        // if transaction is sent, set the isApproving state to true
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

      // Withdraw
      console.log("Withdrawing...");
      const withdrawTx = wethGatewaycontract.withdrawETH(amountToWithdraw, signer.address, selectedIndex);
      setIsWithdrawing(true);
      withdrawTx.then((txResponse:any) => {
        console.log("Transaction Hash:", txResponse.hash);
        txResponse.wait().then((confirmationResult:any) => {
          console.log("Transaction confirmed:", confirmationResult);
           // Perform actions after confirmation
             setIsWithdrawing(false);
          
             router.reload();
         
          }).catch((error:any) => {
            console.error("Transaction confirmation error:", error);
            setIsWithdrawing(false);
       
            alert("Withdraw failed");
          });
        }).catch((error:any) => {
          console.log("Transaction error:", error);
          setIsWithdrawing(false);
        })
      // if (withdrawTx && withdrawTx.hash) {
      //   setIsWithdrawing(true);
      // }

      // const withdrawReceipt = await withdrawTx.wait();
      // if (withdrawReceipt.status === 0) {
      //   console.log("Withdrawal failed");
      //   alert("Withdrawal failed");
      //   return;
      // }else{
      //   setIsModalOpen(false);
      //   alert("Withdrawal successful");
      //   router.reload();
      // }
      // setIsWithdrawing(false);


    } catch (error) {
      setIsWithdrawing(false);
      console.log("Error: ", error);
    }


  }

  const depositQuery = `
    query {
      deposit0: deposits(
        orderBy: blockTimestamp
        orderDirection: desc
        first: 1
        where: {
          onBehalfOf: "${address}"
          period: 0
        }
      ) {
        onBehalfOf
        amount
        period
        blockTimestamp
      }
      deposit1: deposits(
        orderBy: blockTimestamp
        orderDirection: desc
        first: 1
        where: {
          onBehalfOf: "${address}"
          period: 1
        }
      ) {
        onBehalfOf
        amount
        period
        blockTimestamp
      }
        deposit2: deposits(
        orderBy: blockTimestamp
        orderDirection: desc
        first: 1
        where: {
          onBehalfOf: "${address}"
          period: 2
        }
      ) {
        onBehalfOf
        amount
        period
        blockTimestamp
      }
        deposit3: deposits(
        orderBy: blockTimestamp
        orderDirection: desc
        first: 1
        where: {
          onBehalfOf: "${address}"
          period: 3
        }
      ) {
        onBehalfOf
        amount
        period
        blockTimestamp
      }
      reserveDataUpdateds(
        orderBy:blockTimestamp, 
        orderDirection: desc,
        first: 1
      ){
        liquidityRates
        variableBorrowRate
      }
      userBalances(
        where:{
          id: "${address}"
      }){
        id
        balance_1
        balance_2
        balance_3
        balance_4
      }
    }
  `;

  const fetMTokenBalance = async () => {
    const { ethereum } = window as any;
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    // setSigner(signer);
    // console.log("signer: ", signer);
    // const rpcUrl = 'https://eth-mainnet.g.alchemy.com/v2/XlCt1JgWjHXKMpt3K7tFalycMQsb--on';
    // const provider = new ethers.JsonRpcProvider(rpcUrl);

    const erc20Contract1 = new ethers.Contract(
      MTOKEN_I_ADDRESS,
      ["function balanceOf(address user, uint8 period) view returns (uint256)"],
      signer
    );
    const erc20Contract2 = new ethers.Contract(
      MTOKEN_II_ADDRESS,
      ["function balanceOf(address user, uint8 period) view returns (uint256)"],
      signer
    );
    const erc20Contract3 = new ethers.Contract(
      MTOKEN_III_ADDRESS,
      ["function balanceOf(address user, uint8 period) view returns (uint256)"],
      signer
    );
    const erc20Contract4 = new ethers.Contract(
      MTOKEN_IV_ADDRESS,
      ["function balanceOf(address user, uint8 period) view returns (uint256)"],
      signer
    );

    const balance1 = await erc20Contract1.balanceOf(address, 0);
    const balance2 = await erc20Contract2.balanceOf(address, 1);
    const balance3 = await erc20Contract3.balanceOf(address, 2);
    const balance4 = await erc20Contract4.balanceOf(address, 3);
    // console.log("Balance 1: ", balance1);
    // console.log("Balance 2: ", balance2);
    // console.log("Balance 3: ", balance3);
    // console.log("Balance 4: ", balance4);
    const formattedBalance1 = ethers.formatUnits(balance1, 18);
    const formattedBalance2 = ethers.formatUnits(balance2, 18);
    const formattedBalance3 = ethers.formatUnits(balance3, 18);
    const formattedBalance4 = ethers.formatUnits(balance4, 18);
    const updatedBalances = [
      formattedBalance1,
      formattedBalance2,
      formattedBalance3,
      formattedBalance4,
      ...mTokenBalance.slice(4),
    ];

    // Update the state with the balance
    setMTokenBalance(updatedBalances);
    const formattedTotalBalance =
      parseFloat(formattedBalance1) +
      parseFloat(formattedBalance2) +
      parseFloat(formattedBalance3) +
      parseFloat(formattedBalance4);
    setTotalMTokenBalance(parseFloat(formattedTotalBalance.toFixed(6)));
  };

  useEffect(() => {
    // console.log("Address: ", address);
    // console.log("type of address: ", typeof address);
    fetMTokenBalance().catch(console.error); // Catch and log any errors
    // fetMTokenBalance();
  }, [
    address,
    isLoading, // use to reload singer
  ]);

  

  const apolloClient = new ApolloClient({
    uri: SUBGRAPH_URL,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    // console.log(depositQuery);
    // query from subgraph
    apolloClient
      .query({
        query: gql(depositQuery),
      })
      .then((data) => {
        console.log("Data: ", data.data);
        setLiquidityRates(data.data.reserveDataUpdateds[0].liquidityRates);
        
        setDepositDates([
            data.data.deposit0.length === 0 ? -1 : data.data.deposit0[0]?.blockTimestamp,
            data.data.deposit1.length === 0 ? -1 : data.data.deposit1[0]?.blockTimestamp,
            data.data.deposit2.length === 0 ? -1 : data.data.deposit2[0]?.blockTimestamp,
            data.data.deposit3.length === 0 ? -1 : data.data.deposit3[0]?.blockTimestamp,
        ]);

        // console.log()
          
        setUnlockDates([
          ( data.data.deposit0.length === 0 ? -1 : (data.data.deposit0[0].blockTimestamp * 1000 + lockDays[0] * 86400 *1000)/1000),
          ( data.data.deposit1.length === 0 ? -1 : (data.data.deposit1[0].blockTimestamp * 1000 + lockDays[1] * 86400 *1000)/1000),
          ( data.data.deposit2.length === 0 ? -1 : (data.data.deposit2[0].blockTimestamp * 1000 + lockDays[2] * 86400 *1000)/1000),
          ( data.data.deposit3.length === 0 ? -1 : (data.data.deposit3[0].blockTimestamp * 1000 + lockDays[3] * 86400 *1000)/1000)
        ]);


        const currentTimestamp = Math.floor(Date.now() / 1000);

        console.log("deposit timestamp: ",data.data.deposit0[0]?.blockTimestamp);
      
        for (let i = 0; i < 4; i++) {
          const depositKey = `deposit${i}`;

          if (data.data[depositKey].length > 0 ) {
            const unlockData = (data.data[depositKey][0].blockTimestamp * 1000 + lockDays[i] * 86400 *1000)/1000;
            console.log("Current ti : ", currentTimestamp);
            console.log("Unlock data: ", unlockData);
            if (currentTimestamp >= unlockData) {

              setIsUnlocked((prev) => {
                prev[i] = true;
                return prev;
              });
            }
            // console.log("Unlock data: ", unlockData);
            // console.log("Deposit data: ", data.data[depositKey]);
            // console.log(data.data[depositKey].length);
          }else{
            setIsUnlocked((prev) => {
              prev[i] = false;
              return prev;
            })
          }
  
        }

      })
      .catch((err) => {
        console.log("Error fetching data: ", err);
      });
  }, [address]);

  return (
    <section
      className={
        "section_img pt-[50px] md:pt-[94px] pb-[100px] md:pb-[250px] bg-no-repeat bg-cover bg-center"
      }
    >
      <div className="main_container max-w-[1300px]">
        <div className="deposit_summery_wrapper">
          <div className="section_title pb-10">
            <h2 className={"text-3xl md:text-5xl font-medium text-white"}>
              Deposit Summary
            </h2>
          </div>
          {/* <div className="grid grid-cols-12 border border-white">
            <div className="col-span-6 flex flex-col items-center">
              <h4
                  className={
                    "text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"
                  }
              >
                  Total Deposit
              </h4>
            </div>
            <div className="col-span-6 flex flex-col items-center">
              <h4
                  className={
                    "text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"
                  }
                >
                  Total Deposit
              </h4>
            </div>
          </div> */}

          <div className="deposit_summery grid grid-cols-12  bg-no-repeat pb-[80px]">
            <div className="col-span-6 m-2 border border-white border-opacity-40 rounded-2xl">
              <div className="deposit_item_one flex flex-col items-center py-[25px] md:py-[35px]">
                <div className={"deposit_icon pb-2 md:pb-6"}>
                  <img
                    className={"w-[45px] md:w-full"}
                    src={totalDeposit.src}
                    alt="total-deposit"
                  />
                </div>
                <h4
                  className={
                    "text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"
                  }
                >
                  Available to withdraw
                </h4>
                <p className={"text-xl md:text-[40px] font-bold text-white"}>
                  {totalMTokenBalance}
                </p>
              </div>
            </div>

            <div className="col-span-6 m-2 border border-white border-opacity-40 rounded-2xl">
              <div className="deposit_item_one flex flex-col items-center py-[25px] md:py-[35px]">
                <div className={"deposit_icon pb-2 md:pb-6"}>
                  <img
                    className={"w-[45px] md:w-full"}
                    src={totalDeposit.src}
                    alt="total-deposit"
                  />
                </div>

                <h4
                  className={
                    "text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"
                  }
                >
                  Available to withdraw
                </h4>

                <p className={"text-xl md:text-[40px] font-bold text-white"}>
                  {
                    mTokenBalance.reduce((acc, balance, index) => isUnlocked[index] ? acc + parseFloat(balance) : acc, 0).toFixed(4)
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="yout_deposits_wrapper">
            <div className="section_title pb-10">
              <h2 className={"text-3xl md:text-5xl font-medium text-white"}>
                Your Deposits
              </h2>
            </div>

            <div className="relative hidden sm:block overflow-x-auto">
              <div className={"border border-gray-600 rounded-3xl"}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-gradient-start to-gradient-end">
                    <tr>
                      {tableHead.map((theadData: any, index: number) => (
                        <th
                          scope="col"
                          className="px-6 py-3 text-base font-bold text-white first:rounded-tl-3xl last:rounded-tr-3xl"
                          key={index}
                        >
                          {theadData}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {tableBody.map((tbodyData, index) => (
                      <tr
                        className="bg-[#10132F] border-bg-[#10132F] border-b last:border-b-0 border-gray-600"
                        key={index}
                      >
                        <td className="px-6 py-4 first:rounded-bl-3xl">
                          <p className={"text-base font-bold text-white"}>
                            {tbodyData.assestClass} Star
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p className={"text-base font-bold text-white"}>
                            {tbodyData.timePeriod} Days
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p className={"text-base font-bold text-white"}>
                            {/* {
                                  tbodyData.depositedDate
                              }  */}
                               {
                                  depositDates[index] === -1
                                      ? 'N/A'     
                                      : new Date(Number(depositDates[index]) * 1000).toDateString()
                                }
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p className={"text-base font-bold text-white"}>
                            {/* {
                                tbodyData.unlockDate
                            } */}
                              { unlockDates[index] === -1
                                    ? 'N/A'     
                                    : new Date(unlockDates[index]*1000).toDateString()
                            }

                            {/* {unlockDates[index]} */}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className={"text-base font-bold text-white"}>
           
                            {/* {parseFloat(mTokenBalance[index]).toFixed(4)} ETH */}
                            {Math.floor(parseFloat(mTokenBalance[index]) * Math.pow(10, 4)) / Math.pow(10, 4)} ETH
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p className={"text-base font-bold text-white"}>
                            {
                              // tbodyData.apy
                              (liquidityRates[index] / 10 ** 25).toFixed(2)
                            }
                            %
                          </p>
                        </td>

                        <td className="px-6 py-4 last:rounded-br-3xl">
                          <button
                            className={
                              "text-base font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"
                            }
                            onClick={() => openModal(index)}
                          >
                            Withdraw
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* deposit for mobile */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="grid grid-cols-12 sm:hidden border border-gray-4 border-opacity-40 rounded-[20px] m-3">
                <div  className="col-span-6 ">
                  <div
                  style={{height:"100%"}}
                      className={
                        "bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button py-[15px] px-[25px] border-r border-r-gray-400 rounded-l-[20px]"
                      }
                    >
                      <ul className={"p-4"}>
                        {responsiveTableHead.map(
                          (resPonData: any, index: any): any => (
                            <li
                              className={
                                "text-white text-[12px] font-bold pb-3 capitalize"
                              }
                              key={index}
                            >
                              {resPonData.title}
                            </li>
                          )
                        )}
                      </ul>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <div
                      className={
                        "bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button py-[15px] px-[25px] border-r-gray-400 rounded-r-[20px]"
                      }
                    >
                      <ul className={"p-4"}>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize"  >
                          5.0
                        </li>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize"  >
                          Days
                        </li>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize" >
                          {
                            depositDates[index] === -1
                                ? 'N/A'     
                                : new Date(Number(depositDates[index]) * 1000).toDateString()
                          }
                        </li>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize">
                          { unlockDates[index] === -1
                            ? 'N/A'     
                            : new Date(unlockDates[index]*1000).toDateString()
                          }
                        </li>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize"  >
                          {Math.floor(parseFloat(mTokenBalance[index]) * Math.pow(10, 4)) / Math.pow(10, 4)} ETH
                        </li>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize"  >
                          {
                            (liquidityRates[index] / 10 ** 25).toFixed(2)
                          }%
                        </li>
                        <li className="text-white text-[12px] font-bold pb-3 capitalize" >
                          <button
                            className={
                              "text-[10] font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"
                            }
                            onClick={() => openModal(index)}
                          >
                                  Withdraw
                          </button>
                        </li>
                      
                
                      </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* old version mobile */}
            {/* <div className="your_deposite_res md:hidden">
              <div
                className={
                  "responsive_design_wrapper block md:hidden border border-gray-4 rounded-[15px]"
                }
              >
                <div
                  className={
                    "responsive_design flex justify-between border-b border-b-white"
                  }
                  style={{
                    backgroundImage: `url(${resposnvieTableImg.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    className={
                      "bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button py-[15px] px-[25px] border-r border-r-gray-400"
                    }
                  >
                    <ul className={"p-4"}>
                      {responsiveTableHead.map(
                        (resPonData: any, index: any): any => (
                          <li
                            className={
                              "text-white text-[10px] font-bold pb-4 capitalize"
                            }
                            key={index}
                          >
                            {resPonData.title}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className={"py-[15px]"}>
                    <ul className={"p-4"}>
                      {responsiveTableHead.map(
                        (respondTableData: any, index: any) => (
                          <li
                            className={
                              "text-white text-[10px] font-medium pb-4 text-end capitalize"
                            }
                            key={index}
                          >
                            {respondTableData.rightSight === "Withdraw" ? (
                              <button
                                className={
                                  "text-[10] font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"
                                }
                                onClick={() => openModal(index)}
                              >
                                Withdraw
                              </button>
                            ) : (
                              respondTableData.rightSight
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

              </div>
              <Pagination /> 
            </div> */}
          </div>
        </div>
      </div>
      {/* ************************************************************************************************ */}
      {/* ************************************************************************************************ */}
      {/* _______ Modal _________ */}
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
                    WITHDRAW DEPOSIT
                  </h1>
                  <div className="mt-[54px] text-start md:mr-auto">
                    <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl font-medium mb-3 md:mb-[14px]">
                      Available to withdraw
                    </p>
                    <span className="text-white text-[20.5px] md:text-2xl lg:text-3xl xl:text-[40px] font-bold">
                    {isUnlocked[selectedIndex] ?  Math.floor(parseFloat(mTokenBalance[selectedIndex]) * Math.pow(10, 6)) / Math.pow(10, 6): '0'}ETH
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
                        value={withdrawAmountInput}
                        onChange={handleWithdrawAmountChange}
                      />
                      <div className="absolute top-[50%] translate-y-[-50%] right-5">
                        <button onClick={() => setWithdrawAmountInput((Math.floor((parseFloat(mTokenBalance[selectedIndex])) * Math.pow(10, 6)) / Math.pow(10, 6)).toFixed(6))} className="max_btn_bg hover:opacity-[0.7]">
                          Max
                        </button>
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
                  <button onClick={callWithdrawETH} disabled={isApproving || isWithdrawing} className="w-full max-w-[571px] text-base text-white font-semibold rounded-[4px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] py-[14px] md:py-[18px] text-center mt-6 hover:bg-gradient-to-r hover:from-[#8E54E9] hover:to-[#4776E6] duration-1000 transition-all hover:duration-1000">
                    {isApproving ? 'Approving...' : isWithdrawing ? 'Withdrawing...' : 'Withdraw'}
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
    </section>
  );
};

export default Deposit;