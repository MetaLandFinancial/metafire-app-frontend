import Link from "next/link";
import FooterNavBrand from "../../../public/assets/footer_nav_brand.svg"
import {footerOne, footerSocialInfo, footerThree, footerTwo} from "@/utils/data";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={"bg-[#02020E] pt-[44px] pb-[96px]"}>
            <div className="main_container">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <Link href={"#"}>
                            <img src={FooterNavBrand.src} alt="nav-brand"/>
                        </Link>
                    </div>
                    <div className="col-span-2">
                        <div className="explore_item">
                            <h3 className={"text-gradient font-bold text-base pb-6"}>
                                Explore
                            </h3>
                            <ul>
                                {
                                    footerOne.map((footerItem, index) => (
                                        <li className={"text-white font-medium pb-4"} key={index}>
                                            <Link href={footerItem.link}>
                                                {footerItem.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>

                    <div className="col-span-2">
                        <div className="explore_item">
                            <h3 className={"text-gradient font-bold text-base pb-6"}>
                                My Account
                            </h3>
                            <ul>
                                {
                                    footerTwo.map((footerItem, index) => (
                                        <li className={"text-white font-medium pb-4"} key={index}>
                                            <Link href={footerItem.link}>
                                                {footerItem.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>

                    <div className="col-span-2">
                        <div className="explore_item">
                            <h3 className={"text-gradient font-bold text-base pb-6"}>
                                Company
                            </h3>
                            <ul>
                                {
                                    footerThree.map((footerItem, index) => (
                                        <li className={"text-white font-medium pb-4"} key={index}>
                                            <Link href={footerItem.link}>
                                                {footerItem.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="explore_item">
                            <h3 className={"text-gradient font-bold text-base pb-6"}>
                                Subscribe for latest updates
                            </h3>
                            <div className="input_field pb-[30px]">
                                <input id={"send_mail"} type="email"
                                       className="w-full py-3 px-4 border border-gray-700 rounded-lg bg-transparent text-white bg-no-repeat bg-right pr-2"
                                       placeholder="Enter Email"/>
                            </div>

                            <div className={"social_icon"}>
                                <h3 className={"text-gradient font-bold text-base pb-6"}>
                                    Follow us
                                </h3>
                                <ul className={"flex gap-4"}>

                                    {
                                        footerSocialInfo.map((socialItem, index) => (

                                            <li key={index}>
                                                <Link href={socialItem.path}>
                                                    <img src={socialItem.icon.src} alt={socialItem.name}/>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;