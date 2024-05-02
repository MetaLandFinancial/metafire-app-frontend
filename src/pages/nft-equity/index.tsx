import React, { useState, useEffect } from "react";
import "./financing.css";
import HeroF from "@/pages/nft-equity/HeroF";
// import DHero from "./DHero";
import FCHero from "./FCHero";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";
import { useWriteContract, useAccount, useWalletClient } from "wagmi";
import {ethers} from "ethers";
import WETHGateway from "../../contracts/wethGateway.json";

type CollectionSlugsType = {
    [key: string]: string;
};


// Use the defined type for your object
const collectionSlugs: CollectionSlugsType = {
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" : "boredapeyachtclub",
    "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "otherdeed",
    "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949" : "beanzofficial",
    // "0xb4ad36f95e84d7b8c1dca17526b37958798ae1ad": "Motherdeed",
  };

const index = () => {
    const WETHGATEWAY_ADDRESS = process.env.NEXT_PUBLIC_WETHGATEWAY_ADDRESS as string;

    const [nftData, setNftData] = useState<any[]>([]);
    const [test, setTest] = useState("");
    const { address, connector, isConnected } = useAccount();

    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    
    const { data: walletClient, isError, isLoading } = useWalletClient();
  
    useEffect(() => {
      const initializeEthereum = async () => {
        const { ethereum } = window as any;
        if (!ethereum) {
          console.error("Ethereum object doesn't exist!");
          alert("Please install MetaMask.");
          return;
        }
      
        try {
          await ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          setSigner(signer);
        } catch (error) {
          console.error("Error initializing ethereum:", error);
        }
      };
  
      initializeEthereum();
    }, [address, isLoading]);

    useEffect(() => {
              // const { ethereum } = window as any;
      // const provider = new ethers.BrowserProvider(ethereum);
        console.log("NFT Equity Page");
        fetchNFT();
    }, [address]);

    // fetch nft fcuntion with moralis api
    const fetchNFT = async () => {
      try {
        const url = `/api/getNft?address=${address}`;
        
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
      } catch (error) {
        console.error("Error fetching NFT:", error);
      }
    };


    return (
        <div className="relative">
            {/* <div style={{color:"white"}} >sadas  {test}  </div> */}
        {/* <HeroF /> */}
        {/* <DHero /> */}
        <FCHero />
        {/* <Pagenv /> */}
        <FinanceMain nftData={nftData} signer={signer} />
        </div>
    );
};

export default index;
