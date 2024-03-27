import React from "react";
import "./deposit.css";
import Image from "next/image";
import DHero from "@/pages/deposit/DHero";
import DFinance from "./DFinance";
import DTabel from "./DTabel";
import DForm from "./DForm";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Index = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-cover bg-no-repeat blur-3xl mix-blend-color-dodge">
          <Image src="/img/mainbg.png" alt="bgImg" layout="fill" />
        </div>
        <DHero />
        <DFinance />
        {/* <ConnectButton/> */}
        <DForm connectButton={<ConnectButton />}/>
        <DTabel />
        
      </div>
    </>
  );
};

export default Index;
