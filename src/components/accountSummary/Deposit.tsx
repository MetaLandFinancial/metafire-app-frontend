import React from 'react';
import totalDeposit from "../../../public/assets/total_deposit.svg"
import {responsiveTableHead, tableBody, tableHead} from "@/utils/data";
import resposnvieTableImg from "@/../public/assets/bg.svg";
import resposnvieTableImg2 from "@/../public/assets/bg2.svg";
import resposnvieTableImg3 from "@/../public/assets/bg3.svg";
import Pagination from "@/components/shared/Pagination";

const Deposit = () => {

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
                                    0.107305
                                </p>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="deposit_item_one flex flex-col items-center py-[25px] md:py-[35px]">
                                <div className={"deposit_icon pb-2 md:pb-6"}>
                                    <img className={"w-[45px] md:w-full"} src={totalDeposit.src} alt="total-deposit"/>
                                </div>

                                <h4 className={"text-3 md:text-2xl font-bold- text-white pb-2 md:pb-3"}>
                                    Total Deposit
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
                                        tableBody.map((tbodyData, items) => (
                                            <tr className="bg-[#10132F] border-bg-[#10132F] border-b last:border-b-0 border-gray-600"
                                                key={items}>
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