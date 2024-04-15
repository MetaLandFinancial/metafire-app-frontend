import React, { useState, useEffect } from "react";
import "./foreclosed.css";
import FCHero from "@/pages/foreclosed-nfts/FCHero";
import Sale from "@/pages/foreclosed-nfts/Sale";
import Loaned from "@/pages/foreclosed-nfts/Loaned";

import { useWriteContract, useAccount, useWalletClient } from "wagmi";

const index = () => {

  
  const { address, connector, isConnected } = useAccount();
  const [loanedNftData, setLoanedNftData] = useState<any[]>([]);

  useEffect(() => {
    // const { ethereum } = window as any;
    // const provider = new ethers.BrowserProvider(ethereum);
    console.log("NFT Equity Page");
    fetchLoanedNFT();
  }, [address]);

      // fetch nft fcuntion with moralis api
      const fetchLoanedNFT = async () => {
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
            // const filteredData = data.result.filter(( item : any ) => {
            //     console.log(item.token_address.toLowerCase());
            //     return Object.keys(collectionSlugs).includes(item.token_address.toLowerCase());
            // });
            console.log(data.result);
            // setTest(data.result[0].name);
            setLoanedNftData(data.result);
        }
    };

  return (
    <>
      <div className="bg-[#1C1424] ">
        <FCHero />
        <Sale />
        <Loaned />
      </div>
    </>
  );
};

export default index;
