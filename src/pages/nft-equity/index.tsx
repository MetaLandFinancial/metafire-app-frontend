import React, { useState, useEffect } from "react";
import "./financing.css";
import HeroF from "@/pages/nft-equity/HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";

const index = () => {

    const [nftData, setNftData] = useState<any[]>([]);
    const [test, setTest] = useState("");

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
        // console.log(data.result);
        // const metadata = data.result[0].metadata;
        // const ojbMetadata = JSON.parse(metadata);

        // const array = [22, 33, 44];
        if(data && data.result) {
            // Store the fetched data in state
            setTest(data.result[0].name);
            setNftData(data.result);
        }
    };


    


    return (
        <div className="relative">
            {/* <div style={{color:"white"}} >sadas  {test}  </div> */}
        <HeroF />
        <Pagenv />
        <FinanceMain nftData={nftData} />
        </div>
    );
};

export default index;
