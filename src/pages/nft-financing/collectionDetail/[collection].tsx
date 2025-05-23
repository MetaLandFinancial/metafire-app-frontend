"use client"
import * as React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { getSlugByKey } from "@/utils/whitelistedNfts";
import "./financing.css";
import HeroF from "./HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";
import leftArrow from "../../../../public/assets/arrow_left.svg";
import rightArrow from "../../../../public/assets/arrow-right.svg";

type CollectionSlugsType = {
    [key: string]: string;
  };
  
  // Use the defined type for your object
  const collectionSlugs: CollectionSlugsType = {
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" : "boredapeyachtclub",
    "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "otherdeed",
    "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949" : "beanzofficial",
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6" : "mutant-ape-yacht-club",
    "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b" : "clonex"
  };
  
  function getCollectionSlug(address: string): string {
    if (typeof address !== 'string') {
        console.error("Invalid address provided:", address);
        return ""; // Return a default value or handle the error as appropriate
      }
    return collectionSlugs[address.toLowerCase()];
  }
  

export default function  Collection () {


    const router = useRouter();
    // Ensure collection is a string, and provide a default empty string if undefined
    const collection = typeof router.query.collection === 'string' ? router.query.collection : "";


    const [nftData, setNftData] = useState<any[]>([]);
    const [nftStatsData, setNftStatsData] = useState<any[]>([]);
    const [collectionName, setCollectionName] = useState<string>('');
    const [nextPageKey, setNextPageKey] = useState<string>('');
    const [pageKeyStack, setPageKeyStack] = useState<string[]>([]); 
    const [nftImageUrlList, setNftImageUrlList] = useState<any[]>([]);

    useEffect(() => {
        // console.log("address is: ", collection);
        const slug = getSlugByKey(collection);
        setCollectionName(slug);
        // console.log("slug is: ", slug);
        // console.log("NFT Equity Page");
        fetchNFTData(nextPageKey);
        fetchNFTStats();
    }, [collection]);

    async function fetchNFTData(nextKey: string) {
        const slug = getSlugByKey(collection);

        // console.log("slug is: ", slug);
        const url = `/api/getNftsByCollection?collectionSlug=${slug}${nextKey ? `&next=${nextKey}` : ''}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.listings) {
            const tokens = data.listings?.map((item: any) => ({
                "token_address": item?.protocol_data?.parameters?.offer[0].token,
                "token_id": item?.protocol_data?.parameters?.offer[0].identifierOrCriteria
            }));
            // console.log('tokens', tokens);
            fetchMultiNftsMetaData(tokens);
            window.scrollTo(0, 0);
            setNftData(data.listings);
            setNextPageKey(data.next);

        }
    }

    type Token = {
        token_address: string;
        token_id: string | number; // Depending on whether you use numeric IDs or string representations
      };

    async function fetchMultiNftsMetaData(tokens: Token[]) {
        console.log("fetch multple nfts");
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
          return;
        }
    
        const data = await response.json();
        // console.log(data);
        // console.log(data[0]?.media?.media_collection?.medium.url);
        if (Array.isArray(data)) {
          const urls = data.map((item: any) => item.media?.media_collection?.medium.url);
        //   console.log("url",urls);
          setNftImageUrlList(urls);
        } else {
          console.error('Expected an array but got:', typeof data, data);
        }
        
    }
    
    async function fetchNFTStats() {

        try {
            const slug = getSlugByKey(collection);
            // console.log("slug is: ", slug);
            const response = await fetch(`/api/getNftFloorPrice?collectionSlug=${encodeURIComponent(slug)}`);
            const data = await response.json();
    
            if (data) {
                console.log('data', data.total);
                setNftStatsData(data.total);
            }
        } catch (error) {
            console.log('error', error);
        }

    }
    

    function goToNextPage() {
        if (nextPageKey) {
            setPageKeyStack(["", ...pageKeyStack, nextPageKey]); // Push current page key onto stack
            fetchNFTData(nextPageKey);
        }
    }

    function goToPreviousPage() {
        // console.log("pageKeyStack", pageKeyStack);
        if (pageKeyStack.length > 1) { // Ensure there's a previous page
            const newStack = [...pageKeyStack];
            newStack.pop(); // Remove the current key
            const prevKey = newStack.pop(); // Get the previous key
    
            // Check if prevKey is undefined before calling fetchNFTData
            if (typeof prevKey === 'string') {
                setPageKeyStack(newStack);
                // console.log("prevKey", prevKey);
                fetchNFTData(prevKey);
            } else {
                // Handle the case where prevKey is unexpectedly undefined
                console.error("Previous key is undefined.");
            }
        }
    }
    

    return(
        <div >
            {/* <h1>{collection}</h1> */}
            <HeroF  />
            <Pagenv nftStatsData={nftStatsData} collectionName={collectionName} />
            <FinanceMain  collectionAddress={collection} nftData={nftData} nftImageUrlList={nftImageUrlList}/>
            <div className="pagination flex gap-2 items-center justify-center pt-7">
              <button onClick={goToPreviousPage} className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                  <img src={leftArrow.src} alt=""/>
              </button>
              <button onClick={goToNextPage} disabled={!nextPageKey} className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                  <img src={rightArrow.src} alt=""/>
              </button>
            </div>
        </div>
    )
};
 
