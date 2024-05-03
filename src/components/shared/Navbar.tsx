"use client";
import { NavBarData } from "@/utils/data";
import Link from "next/link";
import NavBrand from "../../../public/assets/meta_logo.svg";
import humburger from "../../../public/assets/humburger.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const location = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <header className="bg-gradient-to-r from-blue-950 via-violet-950 to-purple-950 py-2 md:py-6 border-b-2 border-b-purple-600 w-full">
      <div className="main_container">
        <div className="nav_wrapper flex items-center">
          <div className="nav_brand">
            <Link href={"/"}>
              <img src={NavBrand.src} alt="navbrand" />
            </Link>
          </div>
          <nav className={"mx-auto"}>
            <ul className="hidden md:flex gap-6">
              {NavBarData.map((navItem, index) => (
                <li
                  className={`${
                    location === navItem.path ? "border_bottom" : ""
                  }`}
                  key={index}
                >
                  <Link
                    className={"text-xs md:text-base font-bold text-white"}
                    href={navItem.path}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className={"mr-3 md:hidden"} onClick={handleNav}>
                        <img src={humburger.src} alt=""/>
                    </button>
                    {/* <button
                        className={"text-base font-semibold text-white py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[6px]"}>
                        Connect Wallet
                    </button> */}
          <ConnectButton 
            chainStatus="icon"
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
           showBalance={false} 
           />
        </div>
      </div>
      {openNav && (
        <nav className={"mx-auto absolute top-[75px] z-20 bg-[#02020E] w-full"}>
          <ul className=" gap-6">
            {NavBarData.map((navItem, index) => (
              <li
                className="text-base font-bold text-white py-4 px-4"
                key={index}
              >
                <Link href={navItem.path}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
