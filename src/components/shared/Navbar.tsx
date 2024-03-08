import {NavBarData} from "@/utils/data";
import Link from "next/link";
import NavBrand from "../../../public/assets/meta_logo.svg"
import Image from "next/image";

const Navbar = () => {
    return (
        <header className={"bg-[#8E54E933] py-6 border-b-2 border-b-purple-600 absolute w-full"}>
            <div className="main_container">
                <div className="nav_wrapper flex items-center">
                    <div className="nav_brand">
                        <Link href={"/"}>
                            <img src={NavBrand.src} alt="navbrand"/>
                        </Link>
                    </div>
                    <nav className={"mx-auto"}>
                        <ul className="flex gap-6">
                            {
                                NavBarData.map((navItem, index) => (
                                    <li className="text-base font-bold text-white" key={index}>
                                        <Link href={navItem.path}>
                                            {navItem.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <button
                        className={"text-base font-semibold text-white py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[6px]"}>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
