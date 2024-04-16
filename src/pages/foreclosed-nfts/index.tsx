import React, { useState, useEffect } from "react";
import "./foreclosed.css";
import FCHero from "@/pages/foreclosed-nfts/FCHero";
import Sale from "@/pages/foreclosed-nfts/Sale";
import Loaned from "@/pages/foreclosed-nfts/Loaned";



const index = () => {

  
  
  const [saleNftData, setSaleNftData] = useState<any[]>([]);
  const [saleNftImageUrlList, setSaleNftImageUrlList] = useState<any[]>([]);
  const [loanedNftData, setLoanedNftData] = useState<any[]>([]);
  const [loanedNftImageUrlList, setLoanedNftImageUrlList] = useState<any[]>([]);

  

  useEffect(() => {
    // const { ethereum } = window as any;
    // const provider = new ethers.BrowserProvider(ethereum);
    console.log("NFT Equity Page");
    try {
      fetchForeclosedNFT();
    } catch (error) {
      console.error("Error fetching foreclosed NFTs:", error);
    }

  }, []);

  // fetch nft fcuntion with moralis api
  const fetchForeclosedNFT = async () => {

    try {
      const url =`/api/getLoanedNfts`;
      
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      
      console.log(data.result);
      // const metadata = data.result[0].metadata;
      // const ojbMetadata = JSON.parse(metadata);

      // const array = [22, 33, 44];
      if(data) {
          // Store the fetched data in state
          // token_address: data.result[0].token_address,
          console.log(data);
          console.log(data[0].healthFactor);
          // Assuming 'data.result' is the array with the items you want to split
          const saleNFTs = data.filter((nft: any) => nft.healthFactor > 1);
          const loanedNFTs = data.filter((nft: any) => nft.healthFactor <= 1);
          
          console.log("Sale NFTs", saleNFTs);
          console.log("Loaned NFTs", loanedNFTs);
          // Store the fetched data in state
          setSaleNftData(saleNFTs);
          setLoanedNftData(loanedNFTs);

          //fetch metadata
          fetchNftImageUrl(saleNFTs).then((urls) => {
            setSaleNftImageUrlList(urls);
          });

          fetchNftImageUrl(loanedNFTs).then((urls) => {
            setLoanedNftImageUrlList(urls);
          });
      }
    } catch (error) {
      console.error("Error fetching foreclosed NFTs:", error);
    }
      
  };

  const fetchNftImageUrl = async (foreclosedNftData: any) => {
    console.log("fetch multple nfts");

    const tokens = foreclosedNftData.map((loan: any) => ({
      "token_address": loan.nftAsset,
      "token_id": loan.nftTokenId
    }));

    try {
      const response = await fetch('/api/getMultipleNfts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokens,
          normalizeMetadata: false,
          media_items: true
        }),
      });
    
      if (!response.ok) {
        // throw new Error('Failed to fetch NFTs');
        console.log("Failed to fetch NFTs");
      }
  
      const data = await response.json();
      console.log(data);
      console.log(data[0].media?.media_collection?.medium.url);
      const urls = data.map((item: any) => item.media?.media_collection?.medium.url);
      return urls;
    } catch (error) {
      console.log("Error fetching NFTs:", error);
      return ;
    }

  }

  return (
    <>
      <div className="bg-[#1C1424] ">
        <FCHero />
        <Sale saleNftData={saleNftData} saleNftImageUrlList={saleNftImageUrlList} />
        <Loaned loanedNftData={loanedNftData} loanedNftImageUrlList={loanedNftImageUrlList} />
      </div>
    </>
  );
};

export default index;
