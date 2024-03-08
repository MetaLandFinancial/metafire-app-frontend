import React from 'react';
import totalDeposit from "../../../public/assets/total_deposit.svg"
import {tableBody, tableHead} from "@/utils/data";
import Image from "next/image";

const Deposit = () => {

    return (
        <section className={"deposit pt-[94px] pb-[250px] bg-no-repeat bg-cover bg-center"}>
            <div className="main_container max-w-[1300px]">
                <div className="deposit_summery_wrapper">
                    <div className="section_title pb-10">
                        <h2 className={"text-5xl font-medium text-white"}>
                            Deposite Summary
                        </h2>
                    </div>

                    <div className="deposit_summery grid grid-cols-12 bg-no-repeat pb-[80px]">
                        <div className="col-span-6">
                            <div className="deposit_item_one flex flex-col items-center py-[35px]">
                                <div className={"deposit_icon pb-6"}>
                                    <img src={totalDeposit.src} alt="total-deposit"/>
                                </div>
                                <h4 className={"text-2xl font-bold- text-white pb-3"}>
                                    Total Deposit
                                </h4>
                                <p className={"text-[40px] font-bold text-white"}>
                                    0.107305
                                </p>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="deposit_item_one flex flex-col items-center py-[35px] bg-no-repeat">
                                <div className={"deposit_icon pb-6"}>
                                    <img src={totalDeposit.src} alt="total-deposit"/>
                                </div>
                                <h4 className={"text-2xl font-bold- text-white pb-3"}>
                                    Total Deposit
                                </h4>
                                <p className={"text-[40px] font-bold text-white"}>
                                    0.107305
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="yout_deposits_wrapper">
                        <div className="section_title pb-10">
                            <h2 className={"text-5xl font-medium text-white"}>
                                Your Deposits
                            </h2>
                        </div>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gradient-to-r from-gradient-start to-gradient-end">
                                <tr>
                                    {
                                        tableHead.map((theadData: any, index: number) => (
                                            <th scope="col" className="px-6 py-3 text-base font-bold text-white"
                                                key={index}>{theadData}
                                            </th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableBody.map((tbodyData, items) => (
                                        <tr className="bg-white dark:bg-[#10132F] dark:border-bg-[#10132F] border-b border-gray-600"
                                            key={items}>

                                            <td className="px-6 py-4">
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
                                                    {
                                                        tbodyData.depositedDate
                                                    }
                                                </p>

                                            </td>

                                            <td className="px-6 py-4">
                                                <p className={"text-base font-bold text-white"}>
                                                    {
                                                        tbodyData.unlockDate
                                                    }
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className={"text-base font-bold text-white"}>
                                                    {
                                                        tbodyData.totalStaked
                                                    }
                                                </p>

                                            </td>

                                            <td className="px-6 py-4">
                                                <p className={"text-base font-bold text-white"}>
                                                    {
                                                        tbodyData.apy
                                                    }
                                                </p>
                                            </td>

                                            <td className="px-6 py-4">
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
                </div>
            </div>
        </section>
    );
};

export default Deposit;