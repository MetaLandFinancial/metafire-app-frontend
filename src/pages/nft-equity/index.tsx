import React, { useEffect } from "react";
import "./financing.css";
import HeroF from "@/pages/nft-equity/HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";

const index = () => {

    useEffect(() => {
        
        console.log("NFT Equity Page");
        fetchNFT();
    }, []);

    // fetch nft fcuntion with moralis api
    const fetchNFT = async () => {
        const url = "/api/getNft?address=0x25793C48C6C8C6C591B0BB01594543d3C3dc8a84";

        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    };


    


    return (
        <div className="relative">
        <HeroF />
        <Pagenv />
        <FinanceMain />
        </div>
    );
};

export default index;
