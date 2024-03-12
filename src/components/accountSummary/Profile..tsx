"use client"
import {useState} from 'react';
import profileAvatar from "../../../public/assets/profile_avatar.svg"
import Link from "next/link";
import {profileSocialInfo} from "@/utils/data";
import Image from "next/image";
import Deposit from "@/components/accountSummary/Deposit";
import MyNfts from "@/components/accountSummary/MyNfts";
import SettingsIcon from "@/../public/assets/settings_Icon.svg";

const Profile = () => {
    const [teb, setTab] = useState('Deposits')

    return (
        <>
            <section className={"profile_section border-b-2 border-b-[#8E54E9]"}>
                <div className="main_container">
                    <div className="profile_info_wrapper flex gap-3 md:gap-0 md:flex-col items-center justify-center pb-10 md:pb-20 relative">
                        <div className="profile_avatar pb-5 md:pb-10 -mt-[25%] md:-mt-[10%]">
                            <img src={profileAvatar.src} alt=""/>
                        </div>
                        <div className="profile_info md:text-center">
                            <h2 className={"text-lg md:text-5xl font-bold text-white pb-3 md:pb-9"}>
                                Guy Hawkins
                            </h2>

                            <ul className={"flex gap-4"}>
                                {
                                    profileSocialInfo.map((socialItem, index) => (
                                        <li key={index}>
                                            <Link href={'#'}>
                                                <img className={"w-[30px]"} src={socialItem.icon.src} alt={socialItem.name}/>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="settings_icon absolute top-10 right-0 hidden md:block">
                            <Link href={'#'}>
                                <img src={SettingsIcon.src} alt={"icon"}/>
                            </Link>
                        </div>
                    </div>
                    <div className="btn_group_wrapper flex gap-1 md:gap-2 justify-center">
                        <button
                            onClick={() => setTab('Deposits')}
                            className={"py-[10px] md:py-5 px-[10px] md:px-9 text-sm md:text-xl font-bold text-white rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-blue-500 to-purple-600"}>
                            Deposits
                        </button>
                        <button
                            className={"py-[10px] md:py-5 px-[10px] md:px-9 text-sm md:text-xl font-medium text-white rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button"}>
                            My NFTs
                        </button>
                        <button
                            className={"py-[10px] md:py-5 px-[10px] md:px-9 text-sm md:text-xl font-medium text-white rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button"}>
                            My Favorites
                        </button>
                        <button
                            className={"py-[10px] md:py-5 px-[10px] md:px-9 text-sm md:text-xl font-medium text-white rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button"}>
                            Loans
                        </button>
                        <button
                            className={"py-[10px] md:py-5 px-[10px] md:px-9 text-sm md:text-xl font-medium text-white rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button"}>
                            Auctions
                        </button>
                    </div>
                </div>
            </section>

            {
                teb === 'Deposits' ? <Deposit/> : teb === 'My NFTs' ? <MyNfts/> : 'Nonor'
            }

        </>
    );
};

export default Profile;