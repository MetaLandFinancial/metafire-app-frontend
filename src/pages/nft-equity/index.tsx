import React, { useState, useEffect } from "react";
import "./financing.css";
import HeroF from "@/pages/nft-equity/HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";

type CollectionSlugsType = {
    [key: string]: string;
};


// Use the defined type for your object
const collectionSlugs: CollectionSlugsType = {
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" : "boredapeyachtclub",
    "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "otherdeed",
    "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949" : "beanzofficial",
    "0xb4ad36f95e84d7b8c1dca17526b37958798ae1ad": "Motherdeed",
  };

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
            // token_address: data.result[0].token_address,
            console.log(data.result);
            const filteredData = data.result.filter(( item : any ) => {
                console.log(item.token_address.toLowerCase());
                return Object.keys(collectionSlugs).includes(item.token_address.toLowerCase());
            });
            console.log(filteredData);
            setTest(data.result[0].name);
            setNftData(filteredData);
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
