"use client"
import {useState} from 'react';
import profileAvatar from "../../../public/assets/avatar.jpeg"
import Link from "next/link";
import {profileSocialInfo} from "@/utils/data";
import Deposit from "@/components/dashboard/Deposit";
import MyNfts from "@/components/dashboard/MyNfts";
import SettingsIcon from "@/../public/assets/settings_Icon.svg";
import MyFavorites from "@/components/dashboard/MyFavorites";
import Loans from "@/components/dashboard/Loans";
import Auctions from "@/components/dashboard/Auctions";

const Profile = () => {
    const [teb, setTab] = useState('Deposits')

    return (
        <>
            <section className={"profile_section border-b-2 border-b-[#8E54E9]"}>
                <div className="main_container">
                    <div
                        className="profile_info_wrapper flex gap-3 md:gap-0 md:flex-col items-center justify-center pb-10 md:pb-20 relative">
                        <div className="profile_avatar pb-5 md:pb-10 -mt-[25%] md:-mt-[10%]">
                            <img src={profileAvatar.src} alt="" className="w-[100px] md:w-[150px] rounded-full"/>
                        </div>

                        <div className="profile_info md:text-center">
                            <h2 className={"text-lg md:text-5xl font-bold text-white pb-3 md:pb-9"}>
                                MetaFire
                            </h2>

                            <ul className={"flex lg:justify-center gap-4"}>
                                {
                                    profileSocialInfo.map((socialItem, index) => (
                                        <li key={index}>
                                            <Link href={'#'}>
                                                <img className={"w-[30px]"} src={socialItem.icon.src}
                                                     alt={socialItem.name}/>
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
                        <button onClick={() => setTab('Deposits')}
                                className={`tabBtn ${teb === 'Deposits' ? 'activeBtn' : 'InActiveBtn'}`}>
                            Deposits
                        </button>

                        {/* <button onClick={() => setTab('My NFTs')}
                                className={`tabBtn ${teb === 'My NFTs' ? 'activeBtn' : 'InActiveBtn'}`}>
                            My NFTs
                        </button>

                        <button onClick={() => setTab('My Favorites')}
                                className={`tabBtn ${teb === 'My Favorites' ? 'activeBtn' : 'InActiveBtn'}`}>
                            My Favorites
                        </button> */}

                        <button onClick={() => setTab('Loans')}
                                className={`tabBtn ${teb === 'Loans' ? 'activeBtn' : 'InActiveBtn'}`}>
                            Loans
                        </button>

                        <button onClick={() => setTab('Auctions')}
                                className={`tabBtn ${teb === 'Auctions' ? 'activeBtn' : 'InActiveBtn'}`}>
                            Auctions
                        </button>
                    </div>
                </div>
            </section>

            {
                teb === 'Deposits' ? <Deposit/> : teb === 'My NFTs' ? <MyNfts/> : teb === "My Favorites" ?
                    <MyFavorites/> : teb === "Loans" ? <Loans/> : teb === "Auctions" ? <Auctions/> : "Null"
            }

        </>
    );
};

export default Profile;