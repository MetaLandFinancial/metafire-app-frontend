import React from 'react';
import { useState, useEffect } from "react";
import totalDeposit from "../../../public/assets/total_deposit.svg"
import {responsiveTableHead, tableBody, tableHead} from "@/utils/data";
import resposnvieTableImg from "@/../public/assets/bg.svg";
import resposnvieTableImg2 from "@/../public/assets/bg2.svg";
import resposnvieTableImg3 from "@/../public/assets/bg3.svg";
import Pagination from "@/components/shared/Pagination";

import { useWriteContract, useAccount, useWalletClient } from 'wagmi'
import WETHGateway from "../../contracts/wethGateway.json";
import { ethers } from "ethers";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const lockDays = [0, 120, 210, 300];

const Deposit = () => {
    const MTOKEN_I_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_I_ADDRESS as string;
    const MTOKEN_II_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_II_ADDRESS as string;
    const MTOKEN_III_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_III_ADDRESS as string;
    const MTOKEN_IV_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_IV_ADDRESS as string;

    const SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;

    const [mTokenBalance, setMTokenBalance] = useState<string[]>([]);
    const [depositDates, setDepositDates] = useState<number[]>([]);
    const [unlockDates, setUnlockDates] = useState<number[]>([]);
    const [totalMTokenBalance, setTotalMTokenBalance] = useState(0);
    const [totalAvailableMTokenBalance, setTotalAvailableMTokenBalance] = useState(0);

    const [depositSubgraphData, setDepositSubgraphData] = useState([]);
    const { address, connector, isConnected } = useAccount();
    const { data: walletClient, isError, isLoading } = useWalletClient()


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
            [ "function balanceOf(address user, uint8 period) view returns (uint256)" ],
            signer
        );
        const erc20Contract2 = new ethers.Contract(
            MTOKEN_II_ADDRESS,
            [ "function balanceOf(address user, uint8 period) view returns (uint256)" ],
            signer
        );
        const erc20Contract3 = new ethers.Contract(
            MTOKEN_III_ADDRESS,
            [ "function balanceOf(address user, uint8 period) view returns (uint256)" ],
            signer
        );
        const erc20Contract4 = new ethers.Contract(
            MTOKEN_IV_ADDRESS,
            [ "function balanceOf(address user, uint8 period) view returns (uint256)" ],
            signer
        );
        
        const balance1 = await erc20Contract1.balanceOf(address, 0);
        const balance2 = await erc20Contract2.balanceOf(address, 1);
        const balance3 = await erc20Contract3.balanceOf(address, 2);
        const balance4 = await erc20Contract4.balanceOf(address, 3);
        console.log("Balance 1: ", balance1);
        console.log("Balance 2: ", balance2);
        console.log("Balance 3: ", balance3);
        console.log("Balance 4: ", balance4);
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
        console.log("Address: ", address);
        console.log("type of address: ", typeof address);
        fetMTokenBalance()
          .catch(console.error); // Catch and log any errors
        // fetMTokenBalance();

    }, [address,
        isLoading// use to reload singer
    ]);

    const [liquidityRates, setLiquidityRates] = React.useState([]);

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
            // setLiquidityRates(data.data.reserveDataUpdateds[0].liquidityRates);
            console.log("Data fetched: ", data.data);
            console.log(data.data.deposit0[0].blockTimestamp)
            setLiquidityRates(data.data.reserveDataUpdateds[0].liquidityRates);
            setDepositDates([
              data.data.deposit0[0].blockTimestamp,
              data.data.deposit1[0].blockTimestamp,
              data.data.deposit2[0].blockTimestamp,
              data.data.deposit3[0].blockTimestamp,
            ]);
            setUnlockDates([
              (data.data.deposit0[0].blockTimestamp * 1000 + lockDays[0] * 86400 *1000)/1000,
              (data.data.deposit1[0].blockTimestamp * 1000 + lockDays[1] * 86400 *1000)/1000,
              (data.data.deposit0[0].blockTimestamp * 1000 + lockDays[2] * 86400 *1000)/1000,
              (data.data.deposit1[0].blockTimestamp * 1000 + lockDays[3] * 86400 *1000)/1000
            ]);
          
   
          })
          .catch((err) => {
            console.log("Error fetching data: ", err);
          });
      }, [address]);



    return (
        <section className={"section_img pt-[50px] md:pt-[94px] pb-[100px] md:pb-[250px] bg-no-repeat bg-cover bg-center"}>
            <div className="main_container max-w-[1300px]">
                <div className="deposit_summery_wrapper">
                    <div className="section_title pb-10">
                        <h2 className={"text-3xl md:text-5xl font-medium text-white"}>
                            Deposite Summary
                        </h2>
                    </div>

                    <div
                        className="deposit_summery grid grid-cols-12 bg-deporitsImgTwo sm:bg-deporitsImg bg-no-repeat pb-[80px]">

                        <div className="col-span-6">
                            <div className="deposit_item_one flex flex-col items-center py-[25px] md:py-[35px]">
                                <div className={"deposit_icon pb-2 md:pb-6"}>
                                    <img className={"w-[45px] md:w-full"} src={totalDeposit.src} alt="total-deposit"/>
                                </div>
                                <h4 className={"text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"}>
                                    Total Deposit
                                </h4>
                                <p className={"text-xl md:text-[40px] font-bold text-white"}>
                                    {totalMTokenBalance}
                                </p>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="deposit_item_one flex flex-col items-center py-[25px] md:py-[35px]">
                                <div className={"deposit_icon pb-2 md:pb-6"}>
                                    <img className={"w-[45px] md:w-full"} src={totalDeposit.src} alt="total-deposit"/>
                                </div>

                                <h4 className={"text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"}>
                                    Available to withdraw
                                </h4>

                                <p className={"text-xl md:text-[40px] font-bold text-white"}>
                                    0.107305
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
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gradient-to-r from-gradient-start to-gradient-end">
                                    <tr>
                                        {
                                            tableHead.map((theadData: any, index: number) => (
                                                <th scope="col"
                                                    className="px-6 py-3 text-base font-bold text-white first:rounded-tl-3xl last:rounded-tr-3xl"
                                                    key={index}>{theadData}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        tableBody.map((tbodyData, index) => (
                                            <tr className="bg-[#10132F] border-bg-[#10132F] border-b last:border-b-0 border-gray-600"
                                                key={index}>
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
                                                        {new Date(depositDates[index]*1000).toDateString()}
                                                 
                                                    </p>

                                                </td>

                                                <td className="px-6 py-4">
                                                    <p className={"text-base font-bold text-white"}>
                                                        {/* {
                                                            tbodyData.unlockDate
                                                        } */}
                                                         {new Date(unlockDates[index]*1000).toDateString()}
                                           
                                                        {/* {unlockDates[index]} */}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className={"text-base font-bold text-white"}>
                                                        {/* {
                                                            tbodyData.totalStaked
                                                        } */}
                                                        {parseFloat(mTokenBalance[index]).toFixed(4)} ETH
                                                    </p>

                                                </td>

                                                <td className="px-6 py-4">
                                                    <p className={"text-base font-bold text-white"}>
                                                        {
                                                            // tbodyData.apy
                                                            (liquidityRates[index]/ 10 ** 25).toFixed(2)
                                                        }% 
                                                    </p>
                                                </td>

                                                <td className="px-6 py-4 last:rounded-br-3xl">
                                                    <button
                                                        className={"text-base font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"}>
                                                        Withdraw
                                                    </button>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="your_deposite_res md:hidden">
                            <div
                                className={"responsive_design_wrapper block md:hidden border border-gray-4 rounded-[15px]"}>
                                <div className={"responsive_design flex justify-between border-b border-b-white"}
                                     style={{
                                         backgroundImage: `url(${resposnvieTableImg.src})`,
                                         backgroundRepeat: "no-repeat",
                                         backgroundSize: "cover"
                                     }}>
                                    <div
                                        className={"bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button py-[15px] px-[25px] border-r border-r-gray-400"}>
                                        <ul className={"p-4"}>
                                            {
                                                responsiveTableHead.map((resPonData: any, index: any): any => (
                                                    <li className={"text-white text-[10px] font-bold pb-4 capitalize"}
                                                        key={index}>
                                                        {resPonData.title}
                                                    </li>
                                                ))
                                            }


                                        </ul>
                                    </div>
                                    <div className={"py-[15px]"}>
                                        <ul className={"p-4"}>
                                            {
                                                responsiveTableHead.map((respondTableData: any, index: any) => (

                                                    <li className={"text-white text-[10px] font-medium pb-4 text-end capitalize"}
                                                        key={index}>
                                                        {respondTableData.rightSight === "Withdraw" ? (<button
                                                            className={"text-[10] font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"}>
                                                            Withdraw
                                                        </button>) : respondTableData.rightSight}
                                                    </li>

                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className={"responsive_design flex justify-between border-b border-b-white"}
                                     style={{
                                         backgroundImage: `url(${resposnvieTableImg2.src})`,
                                         backgroundRepeat: "no-repeat",
                                         backgroundSize: "cover"
                                     }}>
                                    <div
                                        className={"bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button py-[15px] px-[25px] border-r border-r-gray-400"}
                                    >
                                        <ul className={"p-4"}>
                                            {
                                                responsiveTableHead.map((resPonData: any, index: any): any => (
                                                    <li className={"text-white text-[10px] font-bold pb-4 capitalize"}
                                                        key={index}>
                                                        {resPonData.title}
                                                    </li>
                                                ))
                                            }


                                        </ul>
                                    </div>
                                    <div className={"py-[15px]"}>
                                        <ul className={"p-4"}>
                                            {
                                                responsiveTableHead.map((respondTableData: any, index: any) => (
                                                    <li className={"text-white text-[10px] font-medium pb-4 text-end capitalize"}
                                                        key={index}>
                                                        {respondTableData.rightSight === "Withdraw" ? (<button
                                                            className={"text-[10] font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"}>
                                                            Withdraw
                                                        </button>) : respondTableData.rightSight}
                                                    </li>

                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className={"responsive_design flex justify-between "} style={{
                                    backgroundImage: `url(${resposnvieTableImg3.src})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}>
                                    <div
                                        className={"bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button py-[15px] px-[25px] border-r border-r-gray-400"}>
                                        <ul className={"p-4"}>
                                            {
                                                responsiveTableHead.map((resPonData: any, index: any): any => (
                                                    <li className={"text-white text-[10px] font-bold pb-4 capitalize"}
                                                        key={index}>
                                                        {resPonData.title}
                                                    </li>
                                                ))
                                            }


                                        </ul>
                                    </div>
                                    <div className={"py-[15px]"}>
                                        <ul className={"p-4"}>
                                            {
                                                responsiveTableHead.map((respondTableData: any, index: any) => (

                                                    <li className={"text-white text-[10px] font-medium pb-4 text-end capitalize"}
                                                        key={index}>
                                                        {respondTableData.rightSight === "Withdraw" ? (<button
                                                            className={"text-[10] font-medium text-white py-2 px-6 border border-[#4776E6] rounded-[6px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end shadow-custom-shadow"}>
                                                            Withdraw
                                                        </button>) : respondTableData.rightSight}
                                                    </li>

                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deposit;